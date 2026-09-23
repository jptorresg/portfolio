import type { Project } from '../types'
import halconAdmin1 from '../assets/images/halcon/admin-1.webp'
import halconAdmin2 from '../assets/images/halcon/admin-2.webp'
import halconCheckout from '../assets/images/halcon/checkout-1.webp'
import halconDetalle from '../assets/images/halcon/detalle-1.webp'
import halconErd from '../assets/images/halcon/erd.webp'
import halconHome from '../assets/images/halcon/home.webp'
import halconResultados from '../assets/images/halcon/resultados.webp'
import pradosForm from '../assets/images/prados/form.webp'
import pradosGaleria from '../assets/images/prados/galeria.webp'
import pradosHome from '../assets/images/prados/home.webp'
import pradosInfo from '../assets/images/prados/info-1.webp'
import pradosMenu from '../assets/images/prados/menu-1.webp'
import etfHome from '../assets/images/etfarquitectura/home.webp'
import etfPerfil from '../assets/images/etfarquitectura/perfil.webp'
import etfProject from '../assets/images/etfarquitectura/project-1.webp'
import etfForm from '../assets/images/etfarquitectura/form.webp'

export const projects: Project[] = [
  {
    slug: 'unis-plus',
    name: 'UNIS+',
    status: 'development',
    tagline: {
      es: 'Plataforma académica y social para la comunidad universitaria',
      en: 'Academic and social platform for the university community',
    },
    summary: {
      es: 'Plataforma full-stack de mayor alcance que centraliza información institucional, interacción entre usuarios, comunidades, foros y notificaciones, con una arquitectura modular compartida para web y móvil.',
      en: 'My flagship full-stack project: a modular platform centralizing institutional information, user interaction, communities, forums, and notifications for work across web and mobile.',
    },
    description: {
      es: 'UNIS+ es una plataforma full-stack diseñada para centralizar la información institucional y la vida universitaria: interacción entre usuarios, comunidades, foros y notificaciones para estudiantes, docentes, personal y egresados. Se construye con una arquitectura modular y un ecosistema compartido para clientes web, móvil y servicios backend, priorizando la mantenibilidad y la escalabilidad.',
      en: 'UNIS+ is a full-stack platform designed to centralize institutional information and campus life: user interaction, communities, forums, and notifications for students, faculty, staff, and alumni. It is being built with a modular architecture and a shared ecosystem for web, mobile, and backend services, prioritizing maintainability and scalability.',
    },
    problem: {
      es: 'La información y las interacciones de la comunidad universitaria están dispersas, y no existe un espacio común donde estudiantes, docentes y personal puedan comunicarse y acceder a los servicios institucionales.',
      en: 'University information and community interactions are scattered, with no shared space where students, faculty, and staff can communicate and access institutional services.',
    },
    solution: {
      es: 'Una plataforma backend-first con arquitectura modular que centraliza la lógica de negocio y la comparte entre clientes web y móvil: autenticación institucional, roles y permisos, perfiles, publicaciones, comunidades y notificaciones.',
      en: 'A backend-first platform with a modular architecture that centralizes business logic and shares it across web and mobile clients: institutional authentication, roles and permissions, profiles, posts, communities, and notifications.',
    },
    role: {
      es: 'Diseño de arquitectura y desarrollo full-stack del proyecto.',
      en: 'Architecture design and full-stack development of the project.',
    },
    highlights: [
      {
        es: 'Autenticación institucional y gestión de usuarios',
        en: 'Institutional authentication and user management',
      },
      { es: 'Sistema de roles y permisos', en: 'Role and permission system' },
      {
        es: 'Perfiles, publicaciones, comentarios, comunidades y notificaciones',
        en: 'User profiles, posts, comments, communities, and notifications',
      },
      {
        es: 'Arquitectura backend-first para clientes web y móvil',
        en: 'Backend-first architecture for web and mobile clients',
      },
      {
        es: 'Fundación modular orientada a la escalabilidad a largo plazo',
        en: 'Modular foundation aimed at long-term scalability',
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Cloudinary', 'JWT'],
    repo: 'https://github.com/jptorresg/unis-plus',
    coverImage: null,
    coverAlt: {
      es: 'UNIS+ — imagen pendiente',
      en: 'UNIS+ — image coming soon',
    },
    gallery: [],
    accentFrom: '#4f46e5',
    accentTo: '#7c3aed',
    icon: 'university',
    featured: true,
  },
  {
    slug: 'aerolineas-halcon',
    name: 'Aerolíneas Halcón',
    status: 'complete',
    tagline: {
      es: 'Sistema web para la gestión de vuelos y reservaciones',
      en: 'Flight reservation and management system',
    },
    summary: {
      es: 'Plataforma B2B que integra aerolíneas, agencias de viajes y usuarios finales mediante una aplicación web y una API REST, con base de datos Oracle y panel administrativo.',
      en: 'B2B platform integrating airlines, travel agencies, and end users through a web application and a REST API, backed by an Oracle database and an admin dashboard.',
    },
    description: {
      es: 'Proyecto académico integrador que implementa un sistema completo para gestionar vuelos, reservaciones, usuarios y operaciones administrativas. Combina una aplicación web con una API REST basada en Java Servlets y una base de datos Oracle, siguiendo una arquitectura MVC organizada en capas.',
      en: 'Integrative academic project implementing a complete system to manage flights, reservations, users, and administrative operations. It combines a web application with a REST API built on Java Servlets and an Oracle database, following a layered MVC architecture.',
    },
    problem: {
      es: 'Gestionar las operaciones complejas de una aerolínea: búsqueda de vuelos con múltiples escalas, reservas para varios pasajeros, administración y atención a agencias externas.',
      en: 'Managing the complex operations of an airline: multi-stop flight search, multi-passenger bookings, administration, and support for external agencies.',
    },
    solution: {
      es: 'Un sistema web + API REST con arquitectura en capas y un modelo relacional completo, que expone los servicios de autenticación, vuelos, reservaciones, comentarios y administración tanto a la interfaz web como a las agencias de viaje.',
      en: 'A web application + REST API with layered architecture and a complete relational model, exposing authentication, flight, reservation, comment, and admin services to both the web interface and travel agencies.',
    },
    role: {
      es: 'Desarrollo integral del sistema: backend, frontend, modelo de datos, API REST y documentación.',
      en: 'End-to-end development of the system: backend, frontend, data model, REST API, and documentation.',
    },
    highlights: [
      {
        es: 'Búsqueda de vuelos con filtros y soporte de múltiples escalas',
        en: 'Flight search with filters and multi-stop support',
      },
      {
        es: 'Compra de boletos con soporte para múltiples pasajeros',
        en: 'Ticket purchase with support for multiple passengers',
      },
      { es: 'Gestión y cancelación de reservaciones', en: 'Reservation management and cancellation' },
      {
        es: 'Generación de comprobantes PDF y notificaciones por correo',
        en: 'PDF ticket generation and email notifications',
      },
      { es: 'Comentarios y calificaciones de vuelos', en: 'Flight comments and ratings' },
      { es: 'Panel administrativo con dashboard de estadísticas', en: 'Admin panel with statistics dashboard' },
      { es: 'API REST para integración con agencias', en: 'REST API for agency integration' },
    ],
    technologies: ['Java 11', 'Jakarta Servlet', 'Apache Tomcat', 'Oracle Database', 'Maven', 'HTML5', 'CSS3', 'Bootstrap'],
    repo: 'https://github.com/jptorresg/Aerolineas-Halcon',
    demo: {
      url: 'https://youtu.be/7Z0_S7BIGqs',
      label: { es: 'Ver demo en video', en: 'Watch demo video' },
    },
    coverImage: halconHome,
    coverAlt: {
      es: 'Captura de la página principal de Aerolíneas Halcón',
      en: 'Screenshot of the Aerolíneas Halcón homepage',
    },
    gallery: [
      {
        src: halconResultados,
        alt: { es: 'Resultados de búsqueda de vuelos', en: 'Flight search results' },
      },
      {
        src: halconDetalle,
        alt: { es: 'Detalle de un vuelo con escalas', en: 'Flight detail with stopovers' },
      },
      {
        src: halconCheckout,
        alt: { es: 'Proceso de compra de boletos', en: 'Ticket checkout process' },
      },
      {
        src: halconAdmin1,
        alt: { es: 'Panel de administración', en: 'Admin dashboard' },
      },
      {
        src: halconAdmin2,
        alt: { es: 'Gestión de vuelos en el panel administrativo', en: 'Flight management in the admin panel' },
      },
      {
        src: halconErd,
        alt: { es: 'Modelo entidad-relación de la base de datos', en: 'Entity-relationship diagram of the database' },
      },
    ],
    accentFrom: '#f59e0b',
    accentTo: '#ef4444',
    icon: 'plane',
    featured: false,
  },
  {
    slug: 'prados-residences',
    name: 'PRADOS résidences boutique',
    status: 'complete',
    tagline: {
      es: 'Landing page inmobiliaria para un proyecto residencial',
      en: 'Real estate landing page for a residential project',
    },
    summary: {
      es: 'Landing page responsive desarrollada para el cliente Vector Inmobiliario, con planos, amenidades, galería y formulario de contacto con envío de correos.',
      en: 'Responsive landing page built for real estate client Vector Inmobiliario, featuring floor plans, amenities, a gallery, and a contact form with email delivery.',
    },
    description: {
      es: 'Sitio de promoción desarrollado para un cliente del sector inmobiliario con el objetivo de presentar las residencias disponibles, amenidades, ubicación y planos, e integrar un formulario de contacto para la captación de clientes potenciales. Aunque el desarrollo se completó, la página no llegó a publicarse por la cancelación del proyecto inmobiliario.',
      en: 'Promotional site built for a real estate client to showcase the available residences, amenities, location, and floor plans, along with a contact form to capture leads. Although development was completed, the page was never published due to the cancellation of the residential project.',
    },
    problem: {
      es: 'El cliente necesitaba una presencia web clara y responsive que presentara el proyecto residencial y permitiera captar interesados.',
      en: 'The client needed a clear, responsive web presence that presented the residential project and captured interested leads.',
    },
    solution: {
      es: 'Una landing page completa con hero + carrusel, galería, planos dinámicos por residencia y nivel, sección de amenidades y un formulario de contacto con envío de correos vía Nodemailer.',
      en: 'A complete landing page with hero + carousel, gallery, dynamic floor plans per residence and level, amenities section, and a contact form delivering emails via Nodemailer.',
    },
    role: {
      es: 'Desarrollo completo del sitio para un cliente (frontend y backend).',
      en: 'Complete development of the site for a client (frontend and backend).',
    },
    highlights: [
      { es: 'Diseño completamente responsive', en: 'Fully responsive design' },
      { es: 'Hero principal con carrusel de imágenes', en: 'Main hero with image carousel' },
      {
        es: 'Galería y planos dinámicos por residencia y nivel',
        en: 'Gallery and dynamic floor plans per residence and level',
      },
      { es: 'Sección de amenidades', en: 'Amenities section' },
      { es: 'Formulario de contacto con envío de correos', en: 'Contact form with email delivery' },
      { es: 'Integración con Google Maps, Waze e Instagram', en: 'Integration with Google Maps, Waze, and Instagram' },
    ],
    technologies: ['Node.js', 'Express', 'EJS', 'Nodemailer', 'HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/jptorresg/PRADOS-residences-boutique',
    coverImage: pradosHome,
    coverAlt: {
      es: 'Captura de la página principal de PRADOS',
      en: 'Screenshot of the PRADOS homepage',
    },
    gallery: [
      {
        src: pradosInfo,
        alt: { es: 'Sección de información del proyecto', en: 'Project information section' },
      },
      {
        src: pradosGaleria,
        alt: { es: 'Galería de imágenes del proyecto', en: 'Project image gallery' },
      },
      {
        src: pradosMenu,
        alt: { es: 'Menú de residencias y planos', en: 'Residences and floor plans menu' },
      },
      {
        src: pradosForm,
        alt: { es: 'Formulario de contacto', en: 'Contact form' },
      },
    ],
    accentFrom: '#10b981',
    accentTo: '#0ea5e9',
    icon: 'building',
    featured: false,
  },
  {
    slug: 'etfarquitectura',
    name: 'ETFarquitectura',
    status: 'complete',
    tagline: {
      es: 'Portafolio arquitectónico con galerías multimedia',
      en: 'Architecture portfolio with multimedia galleries',
    },
    summary: {
      es: 'Plataforma para un estudio de arquitectura que exhibe su portafolio con galerías de imágenes y videos, generadas dinámicamente desde contenido estructurado en JSON.',
      en: 'Platform for an architecture studio showcasing its portfolio with dynamic image and video galleries generated from structured JSON content.',
    },
    description: {
      es: 'Aplicación web creada para el estudio ETFarquitectura para presentar sus proyectos a través de un portafolio interactivo con galerías multimedia, plantillas reutilizables y páginas individuales generadas desde contenido estructurado. Actualmente no recibe mantenimiento; esta versión es una edición demostrativa del proyecto original.',
      en: 'Web application built for the architecture studio ETFarquitectura to present its projects through an interactive portfolio with multimedia galleries, reusable templates, and individual pages generated from structured content. The project is no longer maintained; this version is a demo edition of the original.',
    },
    problem: {
      es: 'El estudio necesitaba una plataforma que presentara su portafolio de forma organizada, dinámica y visual para mostrar sus trabajos y captar nuevos clientes.',
      en: 'The studio needed a platform that presented its portfolio in an organized, dynamic, and visual way to showcase its work and attract new clients.',
    },
    solution: {
      es: 'Un sistema con contenido estructurado en JSON que genera dinámicamente el catálogo de proyectos y sus galerías mediante plantillas reutilizables, además de un formulario de contacto con envío de correos.',
      en: 'A system with JSON-structured content that dynamically generates the project catalog and galleries using reusable templates, plus a contact form with email delivery.',
    },
    role: {
      es: 'Desarrollo integral de la plataforma para el estudio de arquitectura.',
      en: 'End-to-end development of the platform for the architecture studio.',
    },
    highlights: [
      { es: 'Portafolio digital de proyectos arquitectónicos', en: 'Digital portfolio of architecture projects' },
      { es: 'Galerías dinámicas de imágenes y videos', en: 'Dynamic image and video galleries' },
      { es: 'Navegación individual por proyecto', en: 'Individual project navigation' },
      {
        es: 'Carrusel en desktop y galería optimizada para móvil',
        en: 'Desktop carousel and mobile-optimized gallery',
      },
      {
        es: 'Contenido organizado en JSON con plantillas EJS reutilizables',
        en: 'Content organized in JSON with reusable EJS templates',
      },
      { es: 'Formulario de contacto con envío de correos', en: 'Contact form with email delivery' },
    ],
    technologies: ['Node.js', 'Express', 'EJS', 'Nodemailer', 'JSON', 'Swiper.js'],
    repo: 'https://github.com/jptorresg/ETFarquitectura',
    coverImage: etfHome,
    coverAlt: {
      es: 'Captura de la página principal de ETFarquitectura',
      en: 'Screenshot of the ETFarquitectura homepage',
    },
    gallery: [
      {
        src: etfPerfil,
        alt: { es: 'Perfil del estudio de arquitectura', en: 'Architecture studio profile' },
      },
      {
        src: etfProject,
        alt: { es: 'Vista de un proyecto con galería', en: 'Project view with gallery' },
      },
      {
        src: etfForm,
        alt: { es: 'Formulario de contacto', en: 'Contact form' },
      },
    ],
    accentFrom: '#f472b6',
    accentTo: '#8b5cf6',
    icon: 'compass',
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}