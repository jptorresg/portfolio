export type Locale = 'es' | 'en'

export type Localized = Record<Locale, string>

export type ProjectStatus = 'development' | 'complete'

export type IconName =
  | 'university'
  | 'plane'
  | 'building'
  | 'compass'
  | 'code'
  | 'monitor'
  | 'server'
  | 'database'
  | 'gears'
  | 'shield'
  | 'wrench'
  | 'layers'
  | 'magic'
  | 'arrowRight'
  | 'arrowLeft'
  | 'external'
  | 'envelope'
  | 'location'
  | 'moon'
  | 'sun'
  | 'language'
  | 'graduation'
  | 'briefcase'
  | 'trophy'
  | 'terminal'
  | 'star'
  | 'github'
  | 'linkedin'
  | 'bars'
  | 'xmark'

export interface ProjectImage {
  src: string
  alt: Localized
}

export interface ProjectDemo {
  url: string
  label: Localized
}

export interface Project {
  slug: string
  name: string
  status: ProjectStatus
  tagline: Localized
  summary: Localized
  description: Localized
  problem: Localized
  solution: Localized
  role: Localized
  highlights: Localized[]
  technologies: string[]
  repo: string
  demo?: ProjectDemo
  coverImage: string | null
  coverAlt: Localized
  gallery: ProjectImage[]
  accentFrom: string
  accentTo: string
  icon: IconName
  featured: boolean
}

export interface SkillCategory {
  icon: IconName
  title: Localized
  items: string[]
}

export interface ExperienceItem {
  organization: string
  roleTitle: Localized
  period: Localized
  description: Localized
  technologies?: string[]
}

export interface EducationItem {
  degree: Localized
  institution: string
  period: Localized
  status: Localized
  distinction: Localized
}

export interface FocusItem {
  icon: IconName
  title: Localized
  text: Localized
}

export interface QuickFact {
  icon: IconName
  label: Localized
  value: Localized
}

export interface AwardItem {
  name: string
  detail: Localized
}