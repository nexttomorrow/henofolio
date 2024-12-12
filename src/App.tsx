import { RecoilRoot } from 'recoil';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ResumeSection from './components/sections/ResumeSection';

function App() {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-primary text-white">
        <Header />
        <main className="pt-16">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ResumeSection />
          <PortfolioSection />
        </main>
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
