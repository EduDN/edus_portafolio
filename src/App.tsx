import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkExperienceSection from './components/WorkExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import TalksSection from './components/TalksSection'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'

export default function App(): JSX.Element {
  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen font-sans">
        <Navbar />
        <main>
          <HeroSection />
          <WorkExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <TalksSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
