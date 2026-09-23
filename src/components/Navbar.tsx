import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import { useTheme } from '../theme/context'
import Icon from './Icon'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { t, locale, setLocale } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/#about' },
    { label: t.nav.skills, to: '/#skills' },
    { label: t.nav.projects, to: '/#projects' },
    { label: t.nav.experience, to: '/#experience' },
    { label: t.nav.education, to: '/#education' },
    { label: t.nav.contact, to: '/#contact' },
  ]

  const nextLocale = locale === 'es' ? 'en' : 'es'
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const themeLabel = nextTheme === 'dark' ? t.themeToggle.toDark : t.themeToggle.toLight

  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link
          to="/"
          className={styles.brand}
          onClick={() => setMenuOpen(false)}
          aria-label={`Juan Pablo Torres — ${t.brand}`}
        >
          <span className={styles.brandMark} aria-hidden="true">
            JP
          </span>
          <span className={styles.brandText}>
            {t.brand}
            <span className={styles.brandDot}>.</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={t.menu} id="site-nav">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={styles.navLink} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={toggleTheme}
            aria-label={`${t.themeToggle.label} (${t.themeToggle[theme === 'dark' ? 'toLight' : 'toDark']})`}
            title={themeLabel}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>

          <button
            type="button"
            className={styles.toggleBtn}
            onClick={() => setLocale(nextLocale)}
            aria-label={`${t.languageToggle} — ${nextLocale.toUpperCase()}`}
            title={`${t.languageToggle}: ${nextLocale.toUpperCase()}`}
          >
            <span className={styles.langLabel}>{nextLocale.toUpperCase()}</span>
          </button>

          <button
            type="button"
            className={`${styles.toggleBtn} ${styles.hamburger}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={t.menuOpen}
          >
            <Icon name={menuOpen ? 'xmark' : 'bars'} />
          </button>
        </div>
      </div>
    </header>
  )
}