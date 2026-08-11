import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/content'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">{t('nav.projects')}</h2>
        {projects.length === 0 ? (
          <p className="text-zinc-600 text-sm text-center py-16 border border-dashed border-zinc-800 rounded-xl">
            No projects yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
