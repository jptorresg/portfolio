import { useI18n } from '../../i18n/context'
import { projects } from '../../data/projects'
import SectionHeading from '../SectionHeading'
import ProjectCard from '../ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const { t } = useI18n()

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}