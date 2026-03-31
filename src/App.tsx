
import { ParticlesBackground } from './components/ui/ParticlesBackground';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Ecosystem } from './components/sections/Ecosystem';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="relative scroll-smooth selection:bg-blue-500/30 selection:text-white">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Ecosystem />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}

export default App;
