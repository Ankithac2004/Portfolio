import React from "react";
import { SkipBack, Play, SkipForward, Volume2 } from "lucide-react";

interface BottomBarProps {
  activeSection?: string;
}

const sectionTitles: Record<string, { title: string; subtitle: string; accent?: string }> = {
  about: { title: "Getting to know Ankitha", subtitle: "Engineering with curiosity and creative intent", accent: "from-blue-600 to-cyan-500" },
  projects: { title: "Now Playing: Project Spotlight", subtitle: "Selected builds and case studies", accent: "from-rose-500 to-pink-500" },
  experience: { title: "Career Performances", subtitle: "Roles, internships and real-world impact", accent: "from-yellow-500 to-orange-500" },
  skills: { title: "Skill Tracks", subtitle: "The toolkit that powers my work", accent: "from-green-400 to-emerald-500" },
  default: { title: "Ankitha's Portfolio", subtitle: "ECE · ML · UI/UX · App Dev", accent: "from-gray-600 to-gray-800" },
};

export default function BottomBar({ activeSection = "default" }: BottomBarProps) {
  const key = activeSection.replace?.("-main", "") || activeSection;
  const meta = sectionTitles[key] || sectionTitles.default;

  return (
    <footer className="fixed bottom-0 left-0 right-0 md:left-64 h-20 md:h-24 z-50">
      <div className="h-full flex items-center justify-between px-3 md:px-6 bg-black/40 backdrop-blur-md border-t border-white/8">
        
        {/* LEFT: cover + text */}
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-10 md:w-12 h-10 md:h-12 rounded flex-shrink-0 bg-gradient-to-br ${meta.accent}`}
          />
          <div className="min-w-0 max-w-[10rem] md:max-w-[20rem]">
            <div className="text-sm md:text-base font-semibold text-white truncate">
              {meta.title}
            </div>
            <div className="text-xs md:text-sm text-gray-300 truncate">
              {meta.subtitle}
            </div>
          </div>
        </div>

        {/* CENTER: controls & timeline */}
        <div className="flex-1 flex flex-col items-center gap-1 md:gap-2 px-4">
          
          {/* Controls */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-300 hover:text-white transition">
              <SkipBack size={18} />
            </button>
            <button className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
              <Play size={16} />
            </button>
            <button className="text-gray-300 hover:text-white transition">
              <SkipForward size={18} />
            </button>
          </div>

          {/* Progress */}
          <div className="w-full max-w-2xl flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden md:block">0:00</span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-green-500 rounded-full" />
            </div>
            <span className="text-xs text-gray-400 hidden md:block">3:45</span>
          </div>
        </div>

        {/* RIGHT: Volume + Mobile Play */}
        <div className="flex items-center gap-4">
          {/* Volume (desktop only) */}
          <div className="hidden md:flex items-center gap-2">
            <Volume2 size={16} className="text-gray-300" />
            <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-white rounded-full" />
            </div>
          </div>

          {/* Mobile play button */}
          <button className="md:hidden w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition">
            <Play size={16} className="text-black" />
          </button>
        </div>
      </div>
    </footer>
  );
}
