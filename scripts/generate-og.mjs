import sharp from 'sharp'
import { stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const out = fileURLToPath(new URL('../public/og.png', import.meta.url))

const W = 1200
const H = 630

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f1117"/>
      <stop offset="1" stop-color="#1b1a33"/>
    </linearGradient>
    <linearGradient id="acc" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4f46e5"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1020" cy="140" r="280" fill="url(#acc)" opacity="0.28"/>
  <circle cx="140" cy="560" r="230" fill="#4f46e5" opacity="0.2"/>
  <rect x="84" y="84" width="120" height="120" rx="28" fill="url(#acc)"/>
  <text x="144" y="168" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="800" fill="#ffffff" text-anchor="middle">JP</text>
  <text x="100" y="330" font-family="Inter, Arial, sans-serif" font-size="68" font-weight="800" fill="#f2f3f7">Juan Pablo Torres</text>
  <text x="102" y="385" font-family="Inter, Arial, sans-serif" font-size="32" fill="#a5b0fc">Software Developer · Full-stack</text>
  <text x="102" y="430" font-family="Inter, Arial, sans-serif" font-size="26" fill="#9aa0b0">github.com/jptorresg</text>
</svg>
`

await sharp(Buffer.from(svg)).png().toFile(out)
const { size } = await stat(out)
console.log(`og.png generated (${(size / 1024).toFixed(0)} KB) at ${out}`)