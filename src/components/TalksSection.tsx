import { useLanguage } from '../context/LanguageContext'
import { talks } from '../data/content'
import TalkCard from './TalkCard'

export default function TalksSection(): JSX.Element {
  const { t } = useLanguage()

  return (
    <section id="talks" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          {t('nav.talks')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {talks.map((talk, i) => (
            <TalkCard key={i} talk={talk} />
          ))}
        </div>
      </div>
    </section>
  )
}
