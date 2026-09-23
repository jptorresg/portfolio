# Portafolio — Juan Pablo Torres

Portafolio web profesional de **Juan Pablo Torres**, desarrollador de software y estudiante de Ingeniería en Sistemas y Ciencias de la Computación.

Stack: **React + TypeScript + Vite** · CSS Modules · React Router · Font Awesome · pnpm.

El documento de requerimientos y objetivos se encuentra en [`REQUERIMIENTOS-OBJETIVOS.md`](./REQUERIMIENTOS-OBJETIVOS.md).

## Concepto

> El portafolio presenta el trabajo; GitHub demuestra cómo fue construido.

- **Una sola página** con secciones: Inicio, Sobre mí, Habilidades, Proyectos, Experiencia, Educación y Contacto.
- **Página individual por proyecto** (`/projects/:slug`) con contexto, problema, solución, rol, funcionalidades, tecnologías y galería.
- **Bilingüe ES/EN** con selector en la barra de navegación.
- **Tema claro/oscuro** con selector manual y persistencia.
- **GitHub Pages** como hosting principal.

## Estructura

```
public/                 favicon, og.png, robots.txt
scripts/
  optimize-images.mjs   Convierte capturas PNG a WebP optimizado (sharp)
  generate-og.mjs       Genera public/og.png para redes sociales
src/
  assets/images/        Capturas de los proyectos (WebP)
  components/           Icon, Navbar, Footer, ProjectCard, ProjectCover, secciones
  data/                 Contenido centralizado (profile, skills, experience, projects)
  i18n/                 Diccionario ES/EN y provider
  theme/                ThemeProvider (dark/light)
  pages/                HomePage, ProjectDetailPage, NotFoundPage
```

## Desarrollo

```bash
pnpm install
pnpm dev        # servidor de desarrollo
pnpm lint       # oxlint
pnpm build      # compilación a dist/
pnpm preview    # previsualizar el build
```

## Actualizar contenido

Todo el contenido principal vive en `src/data/`:

| Qué | Archivo |
| --- | --- |
| Información personal, enlaces, datos de Sobre mí | `src/data/profile.ts` |
| Habilidades | `src/data/skills.ts` |
| Experiencia y educación | `src/data/experience.ts` |
| Proyectos (descripción, rol, capturas, repos) | `src/data/projects.ts` |
| Textos de interfaz (idiomas) | `src/i18n/translations.ts` |

Agregar un proyecto nuevo solo requiere añadir una entrada en `projects.ts` (con su captura en `src/assets/images/`). La página de detalle y la tarjeta se generan automáticamente.

### Agregar capturas nuevas

1. Coloca las imágenes en `src/assets/images/<proyecto>/`.
2. Ejecuta `pnpm optimize:images` para convertirlas a WebP optimizado (requiere sharp, ya está en devDependencies).
3. Referéncialas en `projects.ts`.

## Imágenes de proyectos

Las capturas de **Aerolíneas Halcón**, **PRADOS** y **ETFarquitectura** se descargaron de los README de sus repositorios y se optimizaron a WebP. **UNIS+** todavía no tiene capturas: se muestra un placeholder de gradiente + ícono Font Awesome; cuando existan imágenes basta con agregarlas en `projects.ts` (`coverImage` / `gallery`).

## Despliegue (GitHub Pages)

El proyecto incluye un flujo de GitHub Actions (`.github/workflows/deploy.yml`) que compila y publica en GitHub Pages al hacer `push` a `main`.

Requisitos:

1. Sube este repositorio a GitHub (por ejemplo, como `jptorresg.github.io` para publicar en el dominio raíz).
2. En *Settings → Pages* deja *Source* en **GitHub Actions**.
3. El sitio queda disponible en `https://jptorresg.github.io/`.

> Si el portafolio se publica desde un repositorio de proyecto (URL `https://jptorresg.github.io/<repo>/`), ajusta `base` en `vite.config.ts` (por ejemplo `base: '/<repo>/'`) y añade un `404.html` con el redirect de la SPA antes de desplegar.

## Notas

- Íconos: Font Awesome (paquetes oficiales para React); no se usan emojis.
- Las rutas de navegación se definen en `src/data/` y `src/i18n/translations.ts`.
- `og.png` se regenera con `pnpm generate:og`.