import { useLanguage } from '../context/LanguageContext'
import { skillCategories } from '../data/content'

export default function SkillsSection(): JSX.Element {
  const { t } = useLanguage()

  return (
    <section id="skills" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          {t('skills.title')}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.titleKey}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold text-lg mb-4 border-b border-zinc-700 pb-3">
                {t(category.titleKey)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-zinc-800 text-zinc-300 text-sm px-3 py-1 rounded-full border border-zinc-700 hover:border-purple-500 hover:text-purple-300 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
