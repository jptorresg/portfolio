import type { Project } from '../types'
import { useI18n } from '../i18n/context'
import Icon from './Icon'
import styles from './ProjectCover.module.css'

export interface ProjectCoverProps {
  project: Project
  className?: string
  eager?: boolean
}

export default function ProjectCover({ project, className, eager }: ProjectCoverProps) {
  const { L, t } = useI18n()

  if (project.coverImage) {
    return (
      <span className={`${styles.imageWrap} ${className ?? ''}`}>
        <img
          src={project.coverImage}
          alt={L(project.coverAlt)}
          loading={eager ? 'eager' : 'lazy'}
        />
      </span>
    )
  }

  return (
    <span
      className={`${styles.placeholder} ${className ?? ''}`}
      style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
      role="img"
      aria-label={L(project.coverAlt)}
    >
      <Icon name={project.icon} className={styles.placeholderIcon} />
      <span className={styles.placeholderTag}>{t.projects.imageSoon}</span>
    </span>
  )
}