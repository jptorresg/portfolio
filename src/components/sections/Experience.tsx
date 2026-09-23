import { useI18n } from '../../i18n/context'
import { experience } from '../../data/experience'
import SectionHeading from '../SectionHeading'
import styles from './Experience.module.css'

export default function Experience() {
  const { t, L } = useI18n()

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        <ol className={styles.timeline}>
          {experience.map((item, index) => (
            <li key={item.organization} className={styles.item}>
              <div className={styles.rail} aria-hidden="true">
                <span className={styles.dot} />
                {index < experience.length - 1 ? <span className={styles.line} /> : null}
              </div>
              <div className={styles.content}>
                <div className={styles.head}>
                  <h3 className={styles.organization}>{item.organization}</h3>
                  <span className={styles.period}>{L(item.period)}</span>
                </div>
                <p className={styles.roleTitle}>{L(item.roleTitle)}</p>
                <p className={styles.description}>{L(item.description)}</p>
                {item.technologies && item.technologies.length > 0 ? (
                  <div className={styles.techBlock}>
                    <span className={styles.techLabel}>{t.experience.technologiesLabel}</span>
                    <ul className={styles.chips}>
                      {item.technologies.map((tech) => (
                        <li className="chip" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}