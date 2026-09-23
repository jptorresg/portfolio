import { readdir, stat, unlink } from 'node:fs/promises'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = fileURLToPath(new URL('../src/assets/images/', import.meta.url))
const MAX_WIDTH = 1400
const MAX_WIDTH_FULL = 1600
const QUALITY = 80

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else if (entry.isFile()) yield path
  }
}

for await (const file of walk(ROOT)) {
  if (!['.png', '.jpg', '.jpeg'].includes(extname(file).toLowerCase())) continue
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp')
  const info = await sharp(file).metadata()
  const maxWidth = file.includes('erd') ? MAX_WIDTH_FULL : MAX_WIDTH
  const resized = await sharp(file)
    .resize({ width: Math.min(maxWidth, info.width || maxWidth), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out)
  await unlink(file)
  const { size } = await stat(out)
  console.log(`${file.replace(ROOT, '')} -> ${(size / 1024).toFixed(0)} KB (${resized.width}x${resized.height})`)
}

console.log('Done.')