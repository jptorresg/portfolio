import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/context'
import { profile } from '../../data/profile'
import Icon from '../Icon'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <p className={styles.hello}>{t.hero.hello}</p>
          <h1 className={styles.name}>{t.hero.name}</h1>
          <p className={styles.role}>
            {t.hero.role}
            <span className={styles.locationSep}>·</span>
            <span className={styles.location}>{t.hero.location}</span>
          </p>
          <p className={styles.tagline}>{t.hero.tagline}</p>

          <div className={styles.ctas}>
            <Link to="/#projects" className="btn btn-primary">
              {t.hero.ctaProjects}
              <Icon name="arrowRight" />
            </Link>
            <Link to="/#contact" className="btn btn-ghost">
              {t.hero.ctaContact}
            </Link>
          </div>

          <div className={styles.quickLinks}>
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
            <span className={styles.openTo}>
              <span className={styles.pulseDot} aria-hidden="true" />
              {t.hero.openTo}
            </span>
          </div>
        </div>

        <div className={styles.terminal} aria-label="Terminal" role="img">
          <div className={styles.terminalBar}>
            <span className={styles.trafficDot} />
            <span className={styles.trafficDot} />
            <span className={styles.trafficDot} />
            <span className={styles.terminalTitle}>jptorresg@dev:~</span>
          </div>
          <div className={styles.terminalBody}>
            <p>
              <span className={styles.prompt}>
                {t.hero.terminalPrompt} $
              </span>
              <span className={styles.command}>{t.hero.terminalWhoami}</span>
            </p>
            <p className={styles.output}>{t.hero.terminalWhoamiValue}</p>
            <p>
              <span className={styles.prompt}>
                {t.hero.terminalPrompt} $
              </span>
              <span className={styles.command}>{t.hero.terminalFocus}</span>
            </p>
            <p className={styles.output}>{t.hero.terminalFocusValue}</p>
            <p>
              <span className={styles.prompt}>
                {t.hero.terminalPrompt} $
              </span>
              <span className={styles.command}>{t.hero.terminalStatus}</span>
            </p>
            <p className={styles.output}>{t.hero.terminalStatusValue}</p>
            <span className={styles.cursor} aria-hidden="true">
              ▍
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}