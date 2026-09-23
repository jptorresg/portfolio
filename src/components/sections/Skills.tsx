import { useI18n } from '../../i18n/context'
import { skillCategories } from '../../data/skills'
import SectionHeading from '../SectionHeading'
import Icon from '../Icon'
import styles from './Skills.module.css'

export default function Skills() {
  const { t, L } = useI18n()

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div className={styles.card} key={category.title.es}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>
                  <Icon name={category.icon} />
                </span>
                <h3 className={styles.cardTitle}>{L(category.title)}</h3>
              </div>
              <ul className={styles.chips}>
                {category.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}