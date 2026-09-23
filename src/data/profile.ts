import type { AwardItem, FocusItem, QuickFact } from '../types'

export const profile = {
  firstName: 'Juan Pablo',
  lastName: 'Torres',
  email: 'jptorresg.dev@gmail.com',
  github: 'https://github.com/jptorresg',
  githubLabel: 'github.com/jptorresg',
  linkedin: 'https://www.linkedin.com/in/juan-pablo-torres-g',
  linkedinLabel: 'linkedin.com/in/juan-pablo-torres-g',
  siteUrl: 'https://jptorresg.github.io',
}

export const aboutFocus: FocusItem[] = [
  {
    icon: 'server',
    title: { es: 'Backend y APIs', en: 'Backend & APIs' },
    text: {
      es: 'Diseño de servicios, autenticación y APIs REST bien estructuradas.',
      en: 'Design of services, authentication, and well-structured REST APIs.',
    },
  },
  {
    icon: 'layers',
    title: { es: 'Arquitectura de software', en: 'Software architecture' },
    text: {
      es: 'Sistemas organizados en capas, mantenibles y bien documentados.',
      en: 'Systems organized in layers, maintainable and well documented.',
    },
  },
  {
    icon: 'magic',
    title: { es: 'Automatización y calidad', en: 'Automation & quality' },
    text: {
      es: 'Análisis estático, métricas, quality gates y CI/CD.',
      en: 'Static analysis, metrics, quality gates, and CI/CD.',
    },
  },
]

export const quickFacts: QuickFact[] = [
  {
    icon: 'graduation',
    label: { es: 'Estudios', en: 'Studies' },
    value: { es: 'Ing. en Sistemas · 3er año', en: 'Systems Eng. · 3rd year' },
  },
  {
    icon: 'briefcase',
    label: { es: 'Enfoque', en: 'Focus' },
    value: { es: 'Desarrollo full-stack', en: 'Full-stack development' },
  },
  {
    icon: 'location',
    label: { es: 'Base', en: 'Based in' },
    value: { es: 'Ciudad de Guatemala', en: 'Guatemala City' },
  },
  {
    icon: 'language',
    label: { es: 'Idiomas', en: 'Languages' },
    value: { es: 'Español · Inglés (TOEFL 95)', en: 'Spanish · English (TOEFL 95)' },
  },
]

export const awards: AwardItem[] = [
  {
    name: 'Winner — 2nd UNIS Game Jam',
    detail: {
      es: 'Office Panic · juego arcade de escritura desarrollado en 5 horas con un equipo de 3 personas.',
      en: 'Office Panic · arcade typing game built in 5 hours with a 3-person team.',
    },
  },
]