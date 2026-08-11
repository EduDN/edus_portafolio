import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../context/LanguageContext'

export function LanguageToggle(): JSX.Element {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex rounded-lg overflow-hidden border border-purple-700">
      {(['en', 'es'] as const).map((lang: Language) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-sm transition-colors ${
            language === lang
              ? 'bg-purple-700 text-white font-semibold'
              : 'bg-transparent text-purple-300 hover:bg-purple-900 font-normal'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
