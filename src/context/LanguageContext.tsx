import React, { createContext, useContext, useState } from 'react'
import translations from '../i18n/translations'

export type Language = 'en' | 'es'

export interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }): JSX.Element {
  // Defaults to English on every page load — not persisted (Requirement 2.1)
  const [language, setLanguage] = useState<Language>('en')

  // Returns the translated string for the active language.
  // Falls back to the key itself if not found — no error thrown (Requirement 2.7)
  function t(key: string): string {
    const entry = translations[key]
    if (!entry) return key
    return entry[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error(
      'useLanguage must be called inside a <LanguageProvider>. ' +
        'Make sure the component is wrapped with <LanguageProvider> in the component tree.'
    )
  }
  return ctx
}
