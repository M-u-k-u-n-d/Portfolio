import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import Hero from './components/sections/Hero';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50/35 to-slate-50 font-['Inter'] text-slate-950 transition-colors dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
