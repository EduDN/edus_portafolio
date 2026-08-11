import { useLanguage } from '../context/LanguageContext'

export default function DownloadCVButton(): JSX.Element {
  const { t } = useLanguage()

  return (
    <a
      href="/CV_EDUARDO__DOMINGUEZ__NAVARRETE__.pdf"
      download="CV_Eduardo_Dominguez_Navarrete.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-700 hover:bg-purple-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
    >
      {/* Download icon — arrow pointing down into a tray */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {t('nav.downloadCv')}
    </a>
  )
}
