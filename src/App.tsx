import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      const targetScroll = elementPosition - offset;

      scrollContainer.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden flex-col md:flex-row">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className="hidden md:block">
        <Sidebar
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black border-b border-gray-900 flex items-center px-4 z-40">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-green-500 transition"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-3 font-bold">Ankitha.fm</span>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 md:hidden z-30" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile sidebar */}
      {mobileMenuOpen && (
        <div className="fixed left-0 top-16 bottom-0 w-64 bg-black border-r border-gray-900 md:hidden z-35 overflow-y-auto">
          <Sidebar
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />
        </div>
      )}

      {/* Main content */}
      <MainContent onNavigate={scrollToSection} />

      {/* Bottom bar */}
      <BottomBar />
    </div>
  );
}

export default App;
