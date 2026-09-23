import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Locale, Localized } from '../types'
import {
  I18nContext,
  applyLocale,
  getInitialLocale,
  translations,
} from './context'

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale())

  useEffect(() => {
    applyLocale(locale)
  }, [locale])

  const L = useCallback((localized: Localized) => localized[locale], [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale], L }),
    [locale, L],
  )

  return <I18nContext value={value}>{children}</I18nContext>
}