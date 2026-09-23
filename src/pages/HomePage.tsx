import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Contact from '../components/sections/Contact'
import { useI18n } from '../i18n/context'

export default function HomePage() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = `${t.hero.name} — ${t.hero.role}`
  }, [t])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}