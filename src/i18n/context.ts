import { createContext, useContext } from 'react'
import type { Locale, Localized } from '../types'
import { translations, type UiStrings } from './translations'

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UiStrings
  L: (localized: Localized) => string
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n(): I18nContextValue {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used within I18nProvider')
  return value
}

export function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem('locale')
    if (stored === 'es' || stored === 'en') return stored
    const browserLang = navigator.language?.toLowerCase() ?? ''
    return browserLang.startsWith('es') ? 'es' : 'en'
  } catch {
    return 'es'
  }
}

export function applyLocale(locale: Locale) {
  document.documentElement.lang = locale
  try {
    localStorage.setItem('locale', locale)
  } catch {
    // storage may be unavailable; ignore
  }
}

export { translations }