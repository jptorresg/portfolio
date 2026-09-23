import { Link } from 'react-router-dom'
import type { Project } from '../types'
import { useI18n } from '../i18n/context'
import ProjectCover from './ProjectCover'
import Icon from './Icon'
import styles from './ProjectCard.module.css'

export interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { L, t } = useI18n()
  const statusLabel =
    project.status === 'development' ? t.projects.statusDevelopment : t.projects.statusComplete

  return (
    <article className={styles.card}>
      <Link
        to={`/projects/${project.slug}`}
        className={styles.coverLink}
        aria-label={`${project.name} — ${L(project.tagline)}`}
      >
        <ProjectCover project={project} />
      </Link>

      <div className={styles.body}>
        <div className={styles.meta}>
          {project.featured ? (
            <span className={styles.featured}>
              <Icon name="star" className={styles.featuredIcon} />
              {t.projects.featuredBadge}
            </span>
          ) : null}
          <span className={styles.status} data-status={project.status}>
            {statusLabel}
          </span>
        </div>

        <h3 className={styles.title}>
          <Link to={`/projects/${project.slug}`} className={styles.titleLink}>
            {project.name}
          </Link>
        </h3>
        <p className={styles.tagline}>{L(project.tagline)}</p>
        <p className={styles.summary}>{L(project.summary)}</p>

        <ul className={styles.techList}>
          {project.technologies.slice(0, 4).map((tech) => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
          {project.technologies.length > 4 ? (
            <li className="chip">+{project.technologies.length - 4}</li>
          ) : null}
        </ul>

        <div className={styles.actions}>
          <Link to={`/projects/${project.slug}`} className="btn btn-ghost">
            {t.projects.viewDetail}
            <Icon name="arrowRight" />
          </Link>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoLink}
            aria-label={`${project.name} — GitHub`}
            title="GitHub"
          >
            <Icon name="github" />
          </a>
        </div>
      </div>
    </article>
  )
}