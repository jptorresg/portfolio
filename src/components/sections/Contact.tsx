import { useI18n } from '../../i18n/context'
import { profile } from '../../data/profile'
import SectionHeading from '../SectionHeading'
import Icon from '../Icon'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.card}>
          <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

          <div className={styles.actions}>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Icon name="envelope" />
              {profile.email}
            </a>
          </div>

          <div className={styles.links}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn large"
              aria-label={`${t.contact.ctaGithub} — ${profile.github}`}
            >
              <Icon name="github" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn large"
              aria-label={`${t.contact.ctaLinkedin} — ${profile.linkedin}`}
            >
              <Icon name="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}