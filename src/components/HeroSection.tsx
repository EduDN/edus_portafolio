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
      </div>
    </section>
  )
}
