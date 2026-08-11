import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import type { Talk } from '../data/content'

interface TalkCardProps {
  talk: Talk
}

export default function TalkCard({ talk }: TalkCardProps): JSX.Element {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const hasExpandable = !!talk.description || (talk.photos && talk.photos.length > 0)

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-700 transition-colors">
      {/* Header row */}
      {hasExpandable ? (
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full text-left p-5 flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-xl"
          aria-expanded={isOpen}
        >
          <div className="flex-1 min-w-0">
            <p className="text-purple-400 font-semibold text-base">{t(talk.titleKey)}</p>
            <p className="text-zinc-300 text-sm mt-1">{talk.organizationKey}</p>
            <span className="bg-purple-950 text-purple-400 text-xs px-2 py-1 rounded-full border border-purple-800 mt-2 inline-block">
              {talk.type}
            </span>
          </div>
          {/* Chevron */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 mt-1 text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        /* Non-interactive header when there's nothing to expand */
        <div className="p-5 flex items-start gap-4">
          <div>
            <p className="text-purple-400 font-semibold text-base">{t(talk.titleKey)}</p>
            <p className="text-zinc-300 text-sm mt-1">{talk.organizationKey}</p>
            <span className="bg-purple-950 text-purple-400 text-xs px-2 py-1 rounded-full border border-purple-800 mt-2 inline-block">
              {talk.type}
            </span>
          </div>
        </div>
      )}

      {/* Expandable panel */}
      {hasExpandable && isOpen && (
        <div className="px-5 pb-5">
          {talk.description && (
            <p className="text-zinc-400 text-sm leading-relaxed mt-0 pt-4 border-t border-zinc-800">
              {talk.description}
            </p>
          )}
          {talk.photos && talk.photos.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mt-4">
              {talk.photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${talk.organizationKey} photo ${i + 1}`}
                  className="rounded-lg object-cover w-full aspect-video"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
