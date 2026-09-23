import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { getProjectBySlug, projects } from '../data/projects'
import ProjectCover from '../components/ProjectCover'
import Icon from '../components/Icon'
import NotFoundPage from './NotFoundPage'
import styles from './ProjectDetailPage.module.css'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const { t, L } = useI18n()
  const project = getProjectBySlug(slug ?? '')

  useEffect(() => {
    document.title = project ? `${project.name} — jptorresg` : `${t.notFound.title} — jptorresg`
  }, [project, t])

  if (!project) return <NotFoundPage />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  const statusLabel =
    project.status === 'development' ? t.projectPage.statusDevelopment : t.projectPage.statusComplete

  return (
    <article className={styles.page}>
      <div className="container">
        <Link to="/#projects" className={styles.back}>
          <Icon name="arrowLeft" />
          {t.projectPage.back}
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.tagline}>{L(project.tagline)}</p>
          <div className={styles.meta}>
            <span className={styles.status} data-status={project.status}>
              {statusLabel}
            </span>
            <ul className={styles.techList}>
              {project.technologies.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <ProjectCover project={project} className={styles.cover} eager />

        <div className={styles.actions}>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="github" />
            {t.projectPage.actionsRepo}
          </a>
          {project.demo ? (
            <a href={project.demo.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Icon name="external" />
              {L(project.demo.label)}
            </a>
          ) : null}
        </div>

        <div className={styles.sections}>
          <section className={styles.block}>
            <h2>{t.projectPage.contextTitle}</h2>
            <p>{L(project.description)}</p>
          </section>

          <div className={styles.twoColumns}>
            <section className={styles.block}>
              <h2>{t.projectPage.problemTitle}</h2>
              <p>{L(project.problem)}</p>
            </section>
            <section className={styles.block}>
              <h2>{t.projectPage.solutionTitle}</h2>
              <p>{L(project.solution)}</p>
            </section>
          </div>

          <section className={styles.block}>
            <h2>{t.projectPage.roleTitle}</h2>
            <p>{L(project.role)}</p>
          </section>

          <section className={styles.block}>
            <h2>{t.projectPage.highlightsTitle}</h2>
            <ul className={styles.highlights}>
              {project.highlights.map((highlight) => (
                <li key={highlight.es} className={styles.highlight}>
                  <Icon name="star" className={styles.highlightIcon} />
                  {L(highlight)}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2>{t.projectPage.technologiesTitle}</h2>
            <ul className={styles.techListLarge}>
              {project.technologies.map((tech) => (
                <li className="chip chip-lg" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {project.gallery.length > 0 ? (
          <section className={styles.gallerySection}>
            <h2>{t.projectPage.galleryTitle}</h2>
            <div className={styles.gallery}>
              {project.gallery.map((image) => (
                <figure className={styles.galleryItem} key={image.src}>
                  <img src={image.src} alt={L(image.alt)} loading="lazy" />
                  <figcaption>{L(image.alt)}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <nav className={styles.pager} aria-label={t.nav.projects}>
          <Link to={`/projects/${prev.slug}`} className={`${styles.pagerLink} ${styles.pagerPrev}`}>
            <Icon name="arrowLeft" />
            <span>
              <small>{t.projectPage.prevProject}</small>
              <strong>{prev.name}</strong>
            </span>
          </Link>
          <Link to={`/projects/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
            <span>
              <small>{t.projectPage.nextProject}</small>
              <strong>{next.name}</strong>
            </span>
            <Icon name="arrowRight" />
          </Link>
        </nav>
      </div>
    </article>
  )
}