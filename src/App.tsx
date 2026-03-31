import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { JourneySection } from './components/sections/JourneySection';
import { EducationSection } from './components/sections/EducationSection';
import { ParticlesBackground } from './components/ui/ParticlesBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-space-950 text-white">
      <ParticlesBackground />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 py-12 md:px-10">
        <HeroSection />
        <AboutSection />
        <EcosystemSection />
        <JourneySection />
        <EducationSection />
      </main>
    </div>
  );
}

export default App;
