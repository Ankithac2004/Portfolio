import Header from './sections/Header';
import About from './sections/About';
import Resume from './sections/Resume';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Research from './sections/Research';
import Experience from './sections/Experience';
import Extra from './sections/Extra';
import Events from './sections/Events';
import Contact from './sections/Contact';

interface MainContentProps {
  onNavigate: (section: string) => void;
}

export default function MainContent({ onNavigate }: MainContentProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-950 to-black pb-32 md:pb-32 pt-16 md:pt-0" data-scroll-container>
      <Header />
      <div className="px-4 md:px-8">
        <About onNavigate={onNavigate} />
        <Resume />
        <Education />
        <Projects />
        <Skills />
        <Research />
        <Experience />
        <Extra />
        <Events />
        <Contact />
      </div>
    </div>
  );
}
