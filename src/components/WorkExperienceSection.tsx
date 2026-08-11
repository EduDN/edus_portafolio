import { useLanguage } from '../context/LanguageContext'
import { workExperiences } from '../data/content'
import ExperienceCard from './ExperienceCard'

export default function WorkExperienceSection(): JSX.Element {
  const { t } = useLanguage()

  return (
    <section id="experience" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          {t('nav.experience')}
        </h2>
        <div className="flex flex-col gap-4">
          {workExperiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
