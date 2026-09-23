import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/context'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = `${t.notFound.title} — jptorresg`
  }, [t])

  return (
    <section className={styles.notFound}>
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1>{t.notFound.title}</h1>
      <p className={styles.text}>{t.notFound.text}</p>
      <Link to="/" className="btn btn-primary">
        {t.notFound.backHome}
      </Link>
    </section>
  )
}