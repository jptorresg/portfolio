import { useI18n } from '../../i18n/context'
import { aboutFocus, awards, quickFacts } from '../../data/profile'
import SectionHeading from '../SectionHeading'
import Icon from '../Icon'
import styles from './About.module.css'

export default function About() {
  const { t, L } = useI18n()

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <div className={styles.grid}>
          <div className={styles.main}>
            <p className={styles.intro}>{t.about.intro}</p>
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h3 className={styles.subheading}>{t.about.awardsTitle}</h3>
            <ul className={styles.awards}>
              {awards.map((award) => (
                <li key={award.name} className={styles.award}>
                  <span className={styles.awardIcon}>
                    <Icon name="trophy" />
                  </span>
                  <div>
                    <strong className={styles.awardName}>{award.name}</strong>
                    <p className={styles.awardDetail}>{L(award.detail)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className={styles.side}>
            <h3 className={styles.subheading}>{t.about.focusTitle}</h3>
            <ul className={styles.focusList}>
              {aboutFocus.map((item) => (
                <li key={item.title.es} className={styles.focusItem}>
                  <span className={styles.focusIcon}>
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <strong className={styles.focusTitle}>{L(item.title)}</strong>
                    <p className={styles.focusText}>{L(item.text)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className={styles.subheading}>{t.about.quickTitle}</h3>
            <dl className={styles.facts}>
              {quickFacts.map((fact) => (
                <div key={fact.label.es} className={styles.fact}>
                  <dt className={styles.factLabel}>
                    <Icon name={fact.icon} className={styles.factIcon} />
                    {L(fact.label)}
                  </dt>
                  <dd className={styles.factValue}>{L(fact.value)}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}