import type { Locale } from '../types'

export interface UiStrings {
  brand: string
  skipLink: string
  menu: string
  menuOpen: string
  languageToggle: string
  themeToggle: { label: string; toLight: string; toDark: string }
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    experience: string
    education: string
    contact: string
  }
  hero: {
    hello: string
    name: string
    role: string
    tagline: string
    location: string
    openTo: string
    ctaProjects: string
    ctaContact: string
    terminalPrompt: string
    terminalWhoami: string
    terminalWhoamiValue: string
    terminalFocus: string
    terminalFocusValue: string
    terminalStatus: string
    terminalStatusValue: string
  }
  about: {
    title: string
    subtitle: string
    intro: string
    body: string[]
    focusTitle: string
    quickTitle: string
    awardsTitle: string
  }
  skills: {
    title: string
    subtitle: string
  }
  projects: {
    title: string
    subtitle: string
    featuredBadge: string
    viewDetail: string
    statusDevelopment: string
    statusComplete: string
    imageSoon: string
  }
  experience: {
    title: string
    subtitle: string
    technologiesLabel: string
  }
  education: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    ctaEmail: string
    ctaGithub: string
    ctaLinkedin: string
  }
  projectPage: {
    back: string
    statusDevelopment: string
    statusComplete: string
    contextTitle: string
    problemTitle: string
    solutionTitle: string
    roleTitle: string
    highlightsTitle: string
    technologiesTitle: string
    galleryTitle: string
    actionsRepo: string
    actionsDemo: string
    prevProject: string
    nextProject: string
  }
  notFound: {
    title: string
    text: string
    backHome: string
  }
  footer: {
    role: string
    navHeading: string
    contactHeading: string
    builtWith: string
  }
}

export const translations: Record<Locale, UiStrings> = {
  es: {
    brand: 'jptorresg',
    skipLink: 'Saltar al contenido',
    menu: 'Menú',
    menuOpen: 'Abrir menú de navegación',
    languageToggle: 'Cambiar idioma',
    themeToggle: {
      label: 'Cambiar tema',
      toLight: 'Activar tema claro',
      toDark: 'Activar tema oscuro',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      hello: 'Hola, soy',
      name: 'Juan Pablo Torres',
      role: 'Software Developer',
      tagline:
        'Estudiante de Ingeniería en Sistemas y Ciencias de la Computación enfocado en desarrollo full-stack y soluciones prácticas. Me interesa la ingeniería de backend, la arquitectura de software y la calidad del código.',
      location: 'Ciudad de Guatemala',
      openTo: 'Abierto a prácticas y oportunidades junior',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contáctame',
      terminalPrompt: '~/jptorresg',
      terminalWhoami: 'whoami',
      terminalWhoamiValue: 'juanpablo — software developer',
      terminalFocus: 'cat focus.txt',
      terminalFocusValue: 'backend · arquitectura · código limpio',
      terminalStatus: 'npm run availability',
      terminalStatusValue: 'abierto a oportunidades ✓',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Desarrollador de software con enfoque en sistemas bien estructurados',
      intro:
        'Desarrollador de software y estudiante de tercer año de Ingeniería en Sistemas y Ciencias de la Computación en la Universidad del Istmo (Guatemala).',
      body: [
        'Me especializo en desarrollo full-stack con un interés particular en el backend, la arquitectura de software, la automatización y la calidad del código. Disfruto construir sistemas que resuelven problemas reales a través de estructura clara, código mantenible y documentación técnica sólida.',
        'He trabajado en proyectos académicos, para clientes y personales: desde landing pages y plataformas de presentación hasta sistemas complejos con bases de datos, autenticación y APIs REST. Cada proyecto me ha permitido aplicar buenas prácticas de organización, documentación y despliegue.',
      ],
      focusTitle: 'Enfoque profesional',
      quickTitle: 'Datos rápidos',
      awardsTitle: 'Reconocimientos',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Tecnologías y áreas con las que he trabajado en proyectos reales',
    },
    projects: {
      title: 'Proyectos',
      subtitle:
        'Una selección de proyectos académicos, para clientes y personales, cada uno con un propósito distinto',
      featuredBadge: 'Destacado',
      viewDetail: 'Ver detalle',
      statusDevelopment: 'En desarrollo',
      statusComplete: 'Finalizado',
      imageSoon: 'Imagen próximamente',
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Experiencia práctica en empresas e instituciones',
      technologiesLabel: 'Tecnologías',
    },
    education: {
      title: 'Educación',
      subtitle: 'Formación académica',
    },
    contact: {
      title: 'Contacto',
      subtitle:
        'Si tienes una oportunidad, un proyecto o simplemente quieres saludar, escríbeme. Respondo con gusto.',
      ctaEmail: 'Enviar correo',
      ctaGithub: 'GitHub',
      ctaLinkedin: 'LinkedIn',
    },
    projectPage: {
      back: 'Volver a proyectos',
      statusDevelopment: 'En desarrollo',
      statusComplete: 'Finalizado',
      contextTitle: 'Propósito',
      problemTitle: 'Problema',
      solutionTitle: 'Solución',
      roleTitle: 'Mi participación',
      highlightsTitle: 'Funcionalidades principales',
      technologiesTitle: 'Tecnologías',
      galleryTitle: 'Galería',
      actionsRepo: 'Ver código en GitHub',
      actionsDemo: 'Ver demo',
      prevProject: 'Proyecto anterior',
      nextProject: 'Siguiente proyecto',
    },
    notFound: {
      title: 'Página no encontrada',
      text: 'La página que buscas no existe o fue movida.',
      backHome: 'Volver al inicio',
    },
    footer: {
      role: 'Software Developer · Ingeniería en Sistemas',
      navHeading: 'Navegación',
      contactHeading: 'Contacto',
      builtWith: 'Construido con React, TypeScript y Vite',
    },
  },
  en: {
    brand: 'jptorresg',
    skipLink: 'Skip to content',
    menu: 'Menu',
    menuOpen: 'Open navigation menu',
    languageToggle: 'Switch language',
    themeToggle: {
      label: 'Toggle theme',
      toLight: 'Activate light theme',
      toDark: 'Activate dark theme',
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      hello: "Hi, I'm",
      name: 'Juan Pablo Torres',
      role: 'Software Developer',
      tagline:
        "Third-year Computer Science and Systems Engineering student focused on full-stack development and practical solutions. I'm especially interested in backend engineering, software architecture, and code quality.",
      location: 'Guatemala City',
      openTo: 'Open to internships and junior opportunities',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
      terminalPrompt: '~/jptorresg',
      terminalWhoami: 'whoami',
      terminalWhoamiValue: 'juanpablo — software developer',
      terminalFocus: 'cat focus.txt',
      terminalFocusValue: 'backend · architecture · clean code',
      terminalStatus: 'npm run availability',
      terminalStatusValue: 'open to opportunities ✓',
    },
    about: {
      title: 'About me',
      subtitle: 'Software developer focused on well-structured systems',
      intro:
        'Software developer and third-year Computer Science and Systems Engineering student at Universidad del Istmo (Guatemala).',
      body: [
        "I specialize in full-stack development with a particular interest in backend engineering, software architecture, automation, and code quality. I enjoy building systems that solve real problems through clear structure, maintainable code, and solid technical documentation.",
        'I have worked on academic, freelance, and personal projects: from landing pages and showcase platforms to complex systems with databases, authentication, and REST APIs. Each project has pushed me to apply good practices in organization, documentation, and deployment.',
      ],
      focusTitle: 'Professional focus',
      quickTitle: 'Quick facts',
      awardsTitle: 'Recognition',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and areas I have worked with on real projects',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'A selection of academic, freelance, and personal projects, each serving a different purpose',
      featuredBadge: 'Featured',
      viewDetail: 'View details',
      statusDevelopment: 'In development',
      statusComplete: 'Completed',
      imageSoon: 'Image coming soon',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Hands-on experience at companies and institutions',
      technologiesLabel: 'Technologies',
    },
    education: {
      title: 'Education',
      subtitle: 'Academic background',
    },
    contact: {
      title: 'Contact',
      subtitle:
        "If you have an opportunity, a project, or just want to say hi, reach out. I'm happy to reply.",
      ctaEmail: 'Send email',
      ctaGithub: 'GitHub',
      ctaLinkedin: 'LinkedIn',
    },
    projectPage: {
      back: 'Back to projects',
      statusDevelopment: 'In development',
      statusComplete: 'Completed',
      contextTitle: 'Purpose',
      problemTitle: 'Problem',
      solutionTitle: 'Solution',
      roleTitle: 'My contribution',
      highlightsTitle: 'Key features',
      technologiesTitle: 'Technologies',
      galleryTitle: 'Gallery',
      actionsRepo: 'View code on GitHub',
      actionsDemo: 'Watch demo',
      prevProject: 'Previous project',
      nextProject: 'Next project',
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or was moved.',
      backHome: 'Back to home',
    },
    footer: {
      role: 'Software Developer · Systems Engineering',
      navHeading: 'Navigation',
      contactHeading: 'Contact',
      builtWith: 'Built with React, TypeScript and Vite',
    },
  },
}