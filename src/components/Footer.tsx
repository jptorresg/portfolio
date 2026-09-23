import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { profile } from '../data/profile'
import Icon from './Icon'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  const navItems = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/#about' },
    { label: t.nav.projects, to: '/#projects' },
    { label: t.nav.experience, to: '/#experience' },
    { label: t.nav.contact, to: '/#contact' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <p className={styles.name}>
            Juan Pablo Torres<span className={styles.dot}>.</span>
          </p>
          <p className={styles.role}>{t.footer.role}</p>
          <div className={styles.social}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <Icon name="github" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="icon-btn"
              aria-label={`Email — ${profile.email}`}
            >
              <Icon name="envelope" />
            </a>
          </div>
        </div>

        <nav className={styles.navCol} aria-label={t.footer.navHeading}>
          <h3 className={styles.navHeading}>{t.footer.navHeading}</h3>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactCol}>
          <h3 className={styles.navHeading}>{t.footer.contactHeading}</h3>
          <ul className={styles.contactList}>
            <li>
              <a href={`mailto:${profile.email}`} className={styles.contactLink}>
                <Icon name="envelope" className={styles.contactIcon} />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Icon name="github" className={styles.contactIcon} />
                {profile.githubLabel}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Icon name="linkedin" className={styles.contactIcon} />
                {profile.linkedinLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Juan Pablo Torres. {t.footer.builtWith}.</p>
      </div>
    </footer>
  )
}