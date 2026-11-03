
import { MotionConfig } from 'motion/react';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#080b14] text-white">
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>

        <Navbar />

        <main id="contenido-principal" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
