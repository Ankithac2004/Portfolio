import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Map the public section keys (used by menu/highlights) to actual DOM ids.
   * Use this to keep your navigation labels stable while allowing
   * anchors inside the section (like about-main).
   */
  const sectionMap: Record<string, string> = {
    about: 'about-main',    // menu/highlight 'about' -> actual DOM id 'about-main'
    resume: 'resume',
    education: 'education',
    projects: 'projects',
    skills: 'skills',
    research: 'research',
    experience: 'experience',
    extra: 'extra',
    events: 'events',
    contact: 'contact',
  };

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!scrollContainer) return;

    const handleScroll = () => {
      // iterate through the public keys so activeSection remains menu-friendly
      for (const publicKey of Object.keys(sectionMap)) {
        const targetId = sectionMap[publicKey];
        const element = document.getElementById(targetId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px is your "watch" line; adjust if header size changes
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(publicKey);
            break;
          }
        }
      }
    };

    // initial run to set activeSection correctly on load
    handleScroll();

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []); // sectionMap is static; if dynamic, add to deps

  const scrollToSection = (sectionId: string) => {
    // map e.g. 'about' -> 'about-main' before scrolling
    const targetId = sectionMap[sectionId] || sectionId;
    const element = document.getElementById(targetId);
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;

    if (element && scrollContainer) {
      const offset = 80; // adjust to match header height
      // element.offsetTop is relative to the scroll container only if it's the container's child
      // to be safe, compute relative position from pageY
      const elementPosition = element.getBoundingClientRect().top + scrollContainer.scrollTop;
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
      {/* Mobile sidebar (fixed, full height, solid dark background) */}
{mobileMenuOpen && (
  <div
    className="fixed left-0 top-0 bottom-0 w-72 bg-black/95 border-r border-gray-900 md:hidden z-50 overflow-y-auto"
    // Prevent clicks from falling through
    onClick={(e) => e.stopPropagation()}
  >
    <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
  </div>
)}


      {/* Main content */}
      <MainContent onNavigate={scrollToSection} />

      {/* Bottom bar */}
      <BottomBar activeSection={activeSection} />
    </div>
  );
}

export default App;
