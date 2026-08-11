import { useLanguage } from '../context/LanguageContext'

export default function Footer(): JSX.Element {
  const { t } = useLanguage()

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left: Full name */}
        <span className="text-white font-semibold">Eduardo Domínguez Navarrete</span>

        {/* Center: Email */}
        <a
          href="mailto:navarrete.eduardo.d@gmail.com"
          className="text-zinc-400 hover:text-purple-400 transition-colors"
        >
          navarrete.eduardo.d@gmail.com
        </a>

        {/* Right: LinkedIn */}
        <a
          href="https://www.linkedin.com/in/eduardo-dominguez-navarrete/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-purple-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>

      {/* Bottom row: Copyright notice */}
      <p className="text-zinc-600 text-xs text-center mt-6">
        © {new Date().getFullYear()} Eduardo Domínguez Navarrete · {t('footer.rights')}
      </p>
    </footer>
  )
}
