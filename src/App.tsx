import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sections = [
        'about',
        'resume',
        'education',
        'projects',
        'skills',
        'research',
        'experience',
        'extra',
        'events',
        'contact',
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;

    if (element && scrollContainer) {
      const offset = 80;
      const elementPosition = element.offsetTop;
      const containerScroll = scrollContainer.scrollTop;
      const targetScroll = elementPosition - offset;

      scrollContainer.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <MainContent onNavigate={scrollToSection} />
      <BottomBar />
    </div>
  );
}

export default App;
