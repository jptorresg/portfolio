import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    icon: 'code',
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['Java', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    icon: 'monitor',
    title: { es: 'Frontend', en: 'Frontend' },
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'EJS', 'Bootstrap'],
  },
  {
    icon: 'server',
    title: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'Express', 'NestJS', 'Jakarta Servlets', 'JWT'],
  },
  {
    icon: 'database',
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['PostgreSQL', 'Oracle', 'Prisma'],
  },
  {
    icon: 'gears',
    title: { es: 'DevOps / CI-CD', en: 'DevOps / CI/CD' },
    items: ['Git', 'GitHub', 'GitLab CI/CD', 'Docker'],
  },
  {
    icon: 'shield',
    title: { es: 'Calidad de software', en: 'Software quality' },
    items: ['SonarQube', 'PHPStan', 'PHPMetrics'],
  },
  {
    icon: 'wrench',
    title: { es: 'Herramientas', en: 'Tools' },
    items: ['Maven', 'Apache Tomcat', 'Nodemailer', 'Swiper.js'],
  },
]