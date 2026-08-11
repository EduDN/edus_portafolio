import { useLanguage } from '../context/LanguageContext'

export default function HeroSection(): JSX.Element {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex flex-col justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Eduardo Domínguez Navarrete
        </h1>

        {/* Decorative purple gradient divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-purple-400 mx-auto mb-6 rounded-full" />

        <p className="text-xl md:text-2xl text-purple-400 mb-6 font-medium">
          {t('hero.title')}
        </p>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {t('hero.summary')}
        </p>

        {/* Contact info */}
        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
          <a
            href="mailto:navarrete.eduardo.d@gmail.com"
            className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            navarrete.eduardo.d@gmail.com
          </a>
          <a
            href="tel:+5215584016361"
            className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.68 5.68l.79-.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            +52 1 5584016361
          </a>
        </div>
      </div>
    </section>
  )
}
