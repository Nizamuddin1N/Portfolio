import Cursor              from '@/components/Cursor'
import Navbar              from '@/components/Navbar'
import HeroSection         from '@/components/HeroSection'
import AboutSection        from '@/components/AboutSection'
import SkillsSection       from '@/components/SkillsSection'
import ProjectsSection     from '@/components/ProjectsSection'
import ResearchSection     from '@/components/ResearchSection'
import ContactSection      from '@/components/ContactSection'
import Footer              from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}