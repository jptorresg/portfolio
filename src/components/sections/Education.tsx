import { useI18n } from '../../i18n/context'
import { education } from '../../data/experience'
import SectionHeading from '../SectionHeading'
import Icon from '../Icon'
import styles from './Education.module.css'

export default function Education() {
  const { t, L } = useI18n()

  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <SectionHeading title={t.education.title} subtitle={t.education.subtitle} />

        <div className={styles.grid}>
          {education.map((item) => (
            <article className={styles.card} key={item.institution}>
              <div className={styles.cardHead}>
                <span className={styles.badge}>
                  <Icon name="graduation" />
                </span>
                <div>
                  <h3 className={styles.degree}>{L(item.degree)}</h3>
                  <p className={styles.institution}>
                    {item.institution}
                    <span className={styles.period}> · {L(item.period)}</span>
                  </p>
                </div>
              </div>
              <p className={styles.status}>{L(item.status)}</p>
              <p className={styles.distinction}>
                <Icon name="trophy" className={styles.distinctionIcon} />
                {L(item.distinction)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}