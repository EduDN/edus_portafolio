import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'
import DownloadCVButton from './DownloadCVButton'
import LinkedInButton from './LinkedInButton'

/**
 * Scrolls the viewport to the element with the given ID using smooth scroll.
 * If no element matches, returns silently without throwing (Requirement 4.3).
 */
function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

interface NavLinkItem {
  id: string
  labelKey: string
}

const NAV_LINKS: NavLinkItem[] = [
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects',   labelKey: 'nav.projects'   },
  { id: 'talks',      labelKey: 'nav.talks'       },
]

export default function Navbar(): JSX.Element {
  const { t } = useLanguage()

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 bg-zinc-900 border-b border-zinc-800"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        {/* Site logo / name */}
        <span className="text-white font-bold text-lg select-none" aria-label="Eduardo Domínguez Navarrete">
          Eduardo Domínguez
        </span>

        {/* Navigation links */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map(({ id, labelKey }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-zinc-300 hover:text-purple-400 text-sm font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(id)
                  }}
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action buttons — wrap gracefully on mobile */}
        <div className="flex items-center gap-3 flex-wrap">
          <LanguageToggle />
          <DownloadCVButton />
          <LinkedInButton />
        </div>
      </div>
    </header>
  )
}
