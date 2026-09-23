import type { EducationItem, ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    organization: 'Hoosier Manufacturing',
    roleTitle: { es: 'Interno de Ingeniería de Software', en: 'Software Engineering Intern' },
    period: { es: 'Junio 2026', en: 'June 2026' },
    description: {
      es: 'Diseñé e implementé una plataforma de análisis automático de calidad de código con SonarQube, PHPStan, PHPMetrics y GitLab CI/CD. Configuré análisis estático, métricas de mantenibilidad y quality gates para automatizar la validación dentro del pipeline, y documenté la arquitectura, las pruebas y el proceso de implementación.',
      en: 'Designed and implemented an automated code quality analysis platform using SonarQube, PHPStan, PHPMetrics, and GitLab CI/CD. Configured static analysis, maintainability metrics, and quality gates to automate validation within the pipeline, and documented the architecture, testing process, and implementation procedures.',
    },
    technologies: ['SonarQube', 'PHPStan', 'PHPMetrics', 'GitLab CI/CD'],
  },
  {
    organization: 'Secretaría Presidencial de la Mujer (SEPREM)',
    roleTitle: { es: 'Práctica profesional', en: 'Professional Intern' },
    period: { es: 'Junio 2025', en: 'June 2025' },
    description: {
      es: 'Analicé las funcionalidades de un módulo de software en desarrollo, identificando problemas y oportunidades de mejora. Elaboré diagramas de flujo, modelos conceptuales y documentación técnica para apoyar la comprensión e implementación del sistema.',
      en: 'Analyzed the features of a software module under development, identifying issues and opportunities for improvement. Produced flowcharts, conceptual models, and technical documentation to support system understanding and implementation.',
    },
    technologies: ['Análisis de sistemas', 'Documentación técnica'],
  },
]

export const education: EducationItem[] = [
  {
    degree: {
      es: 'Ingeniería en Sistemas y Ciencias de la Computación',
      en: 'B.S. in Systems Engineering and Computer Science',
    },
    institution: 'Universidad del Istmo',
    period: { es: '2024 — Presente', en: '2024 — Present' },
    status: { es: 'Tercer año · Estudios en curso', en: 'Third year · In progress' },
    distinction: {
      es: 'Mención honorífica en Matemáticas — Olimpiada Científica UNIS 2023',
      en: 'Honorary Mention in Mathematics — UNIS Science Olympiad 2023',
    },
  },
]