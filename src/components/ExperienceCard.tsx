import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import type { WorkExperience } from '../data/content'

interface ExperienceCardProps {
  experience: WorkExperience
}

function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function ExperienceCard({ experience }: ExperienceCardProps): JSX.Element {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const hasBullets = experience.bullets && experience.bullets.length > 0

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-700 transition-colors">
      {/* Header row — acts as toggle button when bullets exist */}
      {hasBullets ? (
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-xl"
          aria-expanded={isOpen}
        >
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-lg">{experience.company}</p>
            <p className="text-purple-400 font-medium text-base mt-1">{t(experience.roleKey)}</p>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">{experience.period}</span>
              {/* Chevron */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {experience.type && (
              <span className="bg-purple-950 text-purple-400 text-xs px-2 py-1 rounded-full border border-purple-800">
                {capitalize(experience.type)}
              </span>
            )}
          </div>
        </button>
      ) : (
        /* Non-interactive header when there are no bullets */
        <div className="p-6 flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-lg">{experience.company}</p>
            <p className="text-purple-400 font-medium text-base mt-1">{t(experience.roleKey)}</p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-zinc-400 text-sm">{experience.period}</span>
            {experience.type && (
              <span className="bg-purple-950 text-purple-400 text-xs px-2 py-1 rounded-full border border-purple-800">
                {capitalize(experience.type)}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Optional description key */}
      {experience.descriptionKey && (
        <p className="text-zinc-400 text-sm px-6 pb-4 leading-relaxed">
          {t(experience.descriptionKey)}
        </p>
      )}

      {/* Expandable bullets panel */}
      {hasBullets && isOpen && (
        <div className="px-6 pb-6">
          <ul className="list-disc list-inside text-zinc-400 text-sm leading-relaxed space-y-1 mt-0 pt-4 border-t border-zinc-800">
            {experience.bullets!.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
