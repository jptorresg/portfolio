# Portafolio Personal — Requerimientos y Objetivos

## 1. Contexto del proyecto

Desarrollar un portafolio web personal para **Juan Pablo Torres García**, estudiante de Ingeniería en Sistemas y Ciencias de la Computación y desarrollador de software.

El portafolio funcionará como una **carta de presentación profesional digital**, principalmente orientada a procesos de búsqueda de empleo, prácticas profesionales, oportunidades de desarrollo y posibles colaboraciones.

El sitio debe complementar, no reemplazar, el perfil de GitHub, CV y LinkedIn.

### Principio fundamental

> **El portafolio presenta el trabajo; GitHub demuestra cómo fue construido.**

El portafolio debe priorizar la comprensión rápida del perfil y proyectos, mientras que los detalles técnicos profundos pueden delegarse a los repositorios correspondientes.

---

# 2. Objetivo general

Crear un sitio web profesional, moderno, claro y responsive que permita a un visitante comprender rápidamente:

1. Quién es Juan Pablo.
2. Qué tipo de software desarrolla.
3. Qué experiencia y habilidades posee.
4. Qué proyectos ha realizado.
5. Qué rol tuvo en dichos proyectos.
6. Dónde puede consultar su trabajo.
7. Cómo puede contactarlo.

---

# 3. Objetivos específicos

* Presentar un perfil profesional claro y conciso.
* Mostrar los proyectos más relevantes del desarrollador.
* Explicar el propósito y valor de cada proyecto sin depender de conocimientos técnicos avanzados.
* Demostrar experiencia práctica mediante proyectos académicos, personales y profesionales.
* Facilitar el acceso a GitHub, LinkedIn, demos y otros recursos relevantes.
* Servir como complemento visual y narrativo del CV.
* Permitir que tanto visitantes técnicos como no técnicos comprendan el contenido.
* Mantener una imagen profesional apropiada para procesos de contratación.
* Mantener el sitio rápido, accesible y fácil de actualizar.
* Evitar sobrecargar el sitio con funcionalidades que no aporten valor.

---

# 4. Público objetivo

## Público principal

* Reclutadores.
* Empresas de tecnología.
* Empresas que busquen estudiantes o desarrolladores junior.
* Responsables de contratación.

## Público secundario

* Desarrolladores.
* Profesionales del área tecnológica.
* Profesores y compañeros universitarios.
* Potenciales clientes.
* Potenciales colaboradores.

### Consideración de contenido

El contenido principal debe ser comprensible para personas que no necesariamente poseen conocimientos avanzados de programación.

Los visitantes técnicos deben poder acceder a información más profunda mediante enlaces hacia GitHub.

---

# 5. Requerimientos funcionales

## RF-01 — Página principal

La página principal debe presentar:

* Nombre.
* Título o rol profesional.
* Descripción profesional breve.
* Elemento visual personal opcional.
* Enlaces principales.
* Acceso a proyectos destacados.

### Objetivo

Permitir que un visitante comprenda el perfil general sin tener que navegar por varias páginas.

---

## RF-02 — Presentación / Sobre mí

Debe existir una sección que incluya:

* Formación académica.
* Área de interés profesional.
* Áreas principales de desarrollo.
* Enfoque profesional.
* Experiencia relevante.

### Restricción

No debe convertirse en una copia completa del CV.

---

## RF-03 — Habilidades

Debe existir una sección para mostrar las principales habilidades y tecnologías.

Las habilidades pueden agruparse por categorías:

* Lenguajes de programación.
* Frontend.
* Backend.
* Bases de datos.
* DevOps / CI/CD.
* Calidad de software.
* Herramientas.

### Restricción

No incluir tecnologías únicamente para aumentar la cantidad visual de habilidades.

Solo deben mostrarse tecnologías con las que exista experiencia real en proyectos, estudios o trabajo.

---

## RF-04 — Proyectos

Debe existir una sección dedicada a proyectos.

Cada proyecto debe poder presentar:

* Nombre.
* Descripción breve.
* Propósito.
* Problema o necesidad que aborda, cuando sea relevante.
* Solución desarrollada.
* Participación del desarrollador.
* Principales funcionalidades.
* Tecnologías principales.
* Estado del proyecto.
* Repositorio.
* Demo, cuando exista.

---

## RF-05 — Proyectos destacados

La primera versión debe considerar los siguientes proyectos:

1. **UNIS+**
2. **Aerolíneas Halcón**
3. **PRADOS résidences boutique**
4. **ETFarquitectura**

El orden puede modificarse posteriormente según el objetivo profesional del portafolio.

### Consideración

UNIS+ debe tener especial relevancia como proyecto actual de mayor alcance.

---

## RF-06 — Diferenciación de proyectos

Cada proyecto debe comunicar un aspecto diferente de las capacidades del desarrollador.

### UNIS+

Enfatizar:

* Desarrollo de una plataforma de mayor alcance.
* Arquitectura.
* Backend.
* Autenticación.
* Gestión de usuarios.
* Desarrollo web y móvil.
* Organización del proyecto.

### Aerolíneas Halcón

Enfatizar:

* Desarrollo de sistemas web.
* Backend.
* Bases de datos.
* API REST.
* Gestión de usuarios y procesos.
* Desarrollo de funcionalidades complejas.

### PRADOS résidences boutique

Enfatizar:

* Desarrollo web orientado a un proyecto real.
* Presentación de información.
* Diseño responsive.
* Integración de funcionalidades de contacto.

### ETFarquitectura

Enfatizar:

* Desarrollo de una plataforma de presentación de proyectos.
* Galerías.
* Contenido dinámico.
* Diseño responsive.
* Organización de contenido.

---

## RF-07 — Experiencia

Debe existir una sección de experiencia profesional.

Cada experiencia puede incluir:

* Organización.
* Cargo.
* Fecha o período.
* Descripción.
* Responsabilidades.
* Tecnologías relevantes.

La información debe complementar el CV en lugar de replicarlo literalmente.

---

## RF-08 — Educación

Debe existir una sección de educación que muestre:

* Universidad.
* Carrera.
* Estado de los estudios.
* Distinciones relevantes.

---

## RF-09 — Contacto

El sitio debe facilitar el contacto mediante:

* Correo electrónico.
* LinkedIn.
* GitHub.

### Opcional

Puede incluirse un formulario de contacto si aporta valor y puede implementarse de forma segura y sencilla.

---

## RF-10 — Enlaces externos

Debe existir acceso funcional a:

* GitHub.
* LinkedIn.
* Repositorios de proyectos.
* Demos de proyectos.
* Otros recursos profesionales relevantes.

---

## RF-11 — Navegación

La navegación debe permitir acceder fácilmente a las principales secciones:

* Inicio.
* Sobre mí.
* Habilidades.
* Proyectos.
* Experiencia.
* Educación.
* Contacto.

Debe funcionar correctamente en desktop y dispositivos móviles.

---

## RF-12 — Detalle de proyectos

Debe evaluarse la posibilidad de mostrar una vista detallada de cada proyecto.

Esta vista puede incluir:

* Contexto.
* Problema.
* Solución.
* Funcionalidades.
* Rol.
* Tecnologías.
* Imágenes.
* Demo.
* GitHub.
* Estado actual.

### Decisión de alcance (2026-09)

Se decidió crear **una página individual por proyecto** además de las tarjetas en la página principal. Cada página de proyecto será generada a partir de datos centralizados (un solo archivo), de modo que agregar o modificar un proyecto no requiera editar múltiples partes del código.

---

# 6. Requerimientos no funcionales

## RNF-01 — Responsive

El sitio debe adaptarse correctamente a:

* Desktop.
* Tablet.
* Mobile.

---

## RNF-02 — Rendimiento

El sitio debe priorizar tiempos de carga bajos.

Evitar:

* Imágenes excesivamente grandes.
* Videos innecesarios.
* Librerías innecesarias.
* JavaScript excesivo.
* Animaciones pesadas.

---

## RNF-03 — Accesibilidad

Debe procurarse:

* Contraste adecuado.
* Tipografía legible.
* HTML semántico.
* Navegación clara.
* Textos alternativos.
* Elementos interactivos accesibles.
* Uso razonable de animaciones.

---

## RNF-04 — SEO básico

Debe incluir:

* `<title>` descriptivo.
* Meta description.
* HTML semántico.
* Open Graph.
* Favicon.
* URLs apropiadas.
* Metadata relevante.

---

## RNF-05 — Compatibilidad

Debe funcionar correctamente en navegadores modernos.

---

## RNF-06 — Mantenibilidad

La estructura debe permitir actualizar fácilmente:

* Proyectos.
* Experiencia.
* Habilidades.
* Información personal.
* Enlaces.

Agregar o modificar un proyecto no debería requerir cambios extensos en múltiples partes del código.

---

## RNF-07 — Seguridad

El sitio debe minimizar riesgos relacionados con:

* Formularios.
* Dependencias.
* Información personal.
* Integraciones externas.

No deben exponerse credenciales ni información sensible en el frontend.

---

# 7. Requerimientos de contenido

El contenido debe:

* Ser profesional.
* Ser conciso.
* Ser comprensible.
* Evitar exageraciones.
* Ser consistente con el CV y LinkedIn.
* Diferenciar experiencia profesional, académica y personal.
* Mostrar únicamente habilidades respaldadas por experiencia real.
* Priorizar proyectos relevantes.
* Evitar lenguaje excesivamente corporativo o genérico.

### Enfoque recomendado

El sitio debe explicar principalmente:

> **Qué se hizo + para qué se hizo + qué aportó Juan Pablo.**

Los detalles técnicos profundos deben quedar principalmente en GitHub.

---

# 8. Requerimientos visuales

El diseño debe ser:

* Profesional.
* Moderno.
* Limpio.
* Consistente.
* Visualmente atractivo.
* Fácil de navegar.

Debe utilizar:

* Jerarquía visual clara.
* Tipografía legible.
* Paleta de colores limitada.
* Espaciado consistente.
* Componentes visuales coherentes.

### Evitar

* Exceso de animaciones.
* Efectos visuales sin propósito.
* Diseño excesivamente corporativo.
* Diseño excesivamente informal.
* Saturación de información.
* Elementos que dificulten la navegación.

El diseño puede tener personalidad, pero debe seguir siendo apropiado para un perfil profesional de desarrollo de software.

---

# 9. Arquitectura de información

La estructura inicial propuesta es:

```text
Portfolio
│
├── Inicio
│
├── Sobre mí
│
├── Habilidades
│
├── Proyectos (tarjetas)
│   ├── UNIS+               →  /proyectos/unis-plus
│   ├── Aerolíneas Halcón   →  /proyectos/aerolineas-halcon
│   ├── PRADOS              →  /proyectos/prados-residences
│   └── ETFarquitectura     →  /proyectos/etfarquitectura
│
├── Experiencia
│
├── Educación
│
└── Contacto
```

La estructura final puede modificarse durante el diseño si una organización diferente mejora la experiencia del usuario.

---

# 10. Relación con GitHub

Debe existir una separación clara entre el propósito del portafolio y el de GitHub.

## Portafolio

### Pregunta que debe responder

> ¿Quién es Juan Pablo y qué ha desarrollado?

### Prioridad

* Presentación.
* Contexto.
* Resultados.
* Experiencia.
* Visualización.
* Accesibilidad para público general.

---

## GitHub

### Pregunta que debe responder

> ¿Cómo está construido lo que desarrolló?

### Prioridad

* Código.
* Arquitectura.
* Tecnologías.
* README.
* Documentación.
* Diagramas.
* Configuración.
* Detalles técnicos.

---

# 11. Alcance inicial

La primera versión debe incluir únicamente los elementos que aporten directamente al objetivo principal.

### Incluir

* Página principal.
* Sobre mí.
* Habilidades.
* Proyectos.
* Experiencia.
* Educación.
* Contacto.
* GitHub.
* LinkedIn.
* Responsive design.
* SEO básico.
* Buen rendimiento.
* Accesibilidad básica.

### No incluir inicialmente

* Blog.
* Sistema de autenticación.
* Base de datos.
* CMS propio.
* Panel administrativo.
* Backend innecesario.
* Sistema complejo de contacto.
* Sistema de comentarios.
* Funcionalidades sociales.
* Animaciones excesivamente elaboradas.
* Funcionalidades que aumenten considerablemente el mantenimiento.

Estas funcionalidades podrán evaluarse posteriormente si existe una necesidad concreta.

---

# 12. Hosting y repositorio

## Repositorio del portafolio

Crear un repositorio independiente del repositorio utilizado para el perfil de GitHub.

### Estructura recomendada

```text
GitHub
│
├── jptorresg
│   └── README.md
│
├── jptorresg.github.io
│   └── Código del portafolio
│
├── unis-plus
├── Aerolineas-Halcon
├── PRADOS-residences-boutique
└── ETFarquitectura
```

## Hosting inicial

Considerar **GitHub Pages** como opción principal para la primera versión debido a:

* Costo cero.
* Integración con GitHub.
* Simplicidad.
* Adecuación para un sitio estático.
* Facilidad de despliegue.

Dominio esperado:

```text
https://jptorresg.github.io
```

La elección definitiva del hosting puede revisarse durante la implementación.

---

# 13. Criterios de calidad

El portafolio se considerará satisfactorio cuando:

* Un visitante pueda entender el perfil profesional rápidamente.
* Los proyectos principales sean fáciles de encontrar.
* Cada proyecto comunique claramente su propósito.
* Los enlaces a GitHub funcionen correctamente.
* El sitio sea usable desde dispositivos móviles.
* El contenido sea consistente con el CV y LinkedIn.
* La navegación sea intuitiva.
* Las páginas tengan tiempos de carga razonables.
* No existan elementos visuales que distraigan innecesariamente.
* Sea sencillo actualizar el contenido.
* El sitio transmita una imagen profesional.

---

# 14. Principios de diseño y desarrollo

El desarrollo debe seguir estos principios:

1. **Claridad antes que cantidad.**
2. **Contenido antes que efectos visuales.**
3. **Simplicidad antes que complejidad técnica innecesaria.**
4. **Credibilidad antes que exageración.**
5. **Experiencia del usuario antes que demostrar tecnologías.**
6. **El portafolio presenta; GitHub demuestra.**
7. **Cada elemento debe tener una función clara.**
8. **El sitio debe ser fácil de mantener y actualizar.**

---

# 15. Preguntas que el portafolio debe responder

Al finalizar la primera versión, un visitante debería poder responder fácilmente:

* ¿Quién es Juan Pablo?
* ¿Qué está estudiando?
* ¿En qué áreas de desarrollo está interesado?
* ¿Qué tecnologías utiliza?
* ¿Qué proyectos ha desarrollado?
* ¿Qué hizo específicamente en cada proyecto?
* ¿Tiene experiencia práctica?
* ¿Dónde puede ver su código?
* ¿Dónde puede ver demostraciones?
* ¿Cómo puede contactarlo?

---

# 16. Resultado esperado

El resultado final debe ser un **portafolio web personal profesional, ligero, responsive y mantenible**, enfocado en presentar el perfil y trabajo de Juan Pablo de manera clara.

El sitio no debe intentar demostrar su capacidad técnica mediante complejidad innecesaria. La calidad técnica debe demostrarse principalmente mediante los proyectos enlazados y sus respectivos repositorios.

El portafolio debe funcionar como una capa de presentación que conecte:

```text
                    PORTAFOLIO
                        │
        ┌───────────────┼───────────────┐
        │               │               │
       CV            LINKEDIN         GITHUB
        │                               │
        │                         ┌─────┴─────┐
        │                         │           │
        │                      Proyectos   Código/
        │                                  Docs
        │
        └───────────────┬───────────────┘
                        │
                  PERFIL PROFESIONAL
```

### Resultado conceptual

**Portafolio:** presentación y contexto.
**CV:** resumen profesional.
**LinkedIn:** presencia profesional.
**GitHub:** evidencia técnica.

---

# 17. Decisiones de implementación (2026-09)

Especificaciones definidas con el autor antes del desarrollo:

## 17.1 Stack tecnológico

* **React + TypeScript + Vite** como base del proyecto.
* **pnpm** como gestor de paquetes.
* **CSS puro / CSS Modules** para los estilos (sin frameworks de CSS ni librerías de UI innecesarias).
* **React Router** para la navegación entre la página principal y las páginas individuales de proyectos.
* **Font Awesome** (paquete oficial para React) como única fuente de íconos; no se usarán emojis.

## 17.2 Idioma

El sitio es **bilingüe (ES / EN)** con un selector en la barra de navegación que alterna el idioma sin recargar la página.

* El contenido se organiza en diccionarios y en la estructura de datos de proyectos (campos `es` / `en`).
* El idioma seleccionado se conserva en `localStorage`.
* Predeterminado: según la preferencia del navegador del visitante.

## 17.3 Tema visual

El sitio soporta **tema oscuro y tema claro** mediante un selector en la barra de navegación.

* Se implementa con variables CSS (`custom properties`) y una clase personalizada en el documento.
* El tema seleccionado se conserva en `localStorage`.
* Predeterminado: según la preferencia del sistema operativo del visitante.

## 17.4 Estructura del sitio

* **Página principal**: una sola página con secciones (Inicio, Sobre mí, Habilidades, Proyectos, Experiencia, Educación, Contacto) y navegación por scroll.
* **Páginas individuales por proyecto**: una vista de detalle por cada proyecto, generada desde datos centralizados.

## 17.5 Imágenes de proyectos

* Se utilizan las **capturas almacenadas en los README / repositorios** de cada proyecto (`docs/images`).
* **Aerolíneas Halcón, PRADOS y ETFarquitectura**: se descargan las capturas oficiales al proyecto (`public/images`).
* **UNIS+**: no posee imágenes aún → se muestra un **gradiente + ícono Font Awesome** como placeholder, dejando el campo `image` listo para agregar capturas posteriormente.
* Cualquier proyecto sin imagen seguirá el mismo patrón gradiente + ícono.
* La imagen principal de cada tarjeta se define en la estructura de datos del proyecto (fácil de actualizar).

## 17.6 Hosting

* **GitHub Pages** como opción principal de despliegue.
* Dominio esperado: `https://jptorresg.github.io`
* El proyecto se configura con rutas de navegación compatibles con GitHub Pages (SPA), dejando la base de Vite configurable según el repositorio final.
* Se documentan los pasos de despliegue en el README.
