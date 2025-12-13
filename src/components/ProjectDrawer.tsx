// src/components/ProjectDrawer.tsx
import React, { useEffect } from "react";
import { X, Github } from "lucide-react";

/* ✅ Define Project type HERE (simple & safe) */
interface ProjectItem {
  title: string;
  tag: string;
  tools: string[];
  color: string;
  bullets: string[];
  github?: string;
}

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (project) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("modal-open");
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 md:px-8 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
  className="
    relative w-full max-w-2xl md:max-w-3xl
    bg-gradient-to-b from-gray-900/95 to-black/95
    rounded-2xl shadow-xl overflow-hidden
    animate-scaleIn
  "
>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="min-w-0">
            <h3 className="text-lg md:text-2xl font-bold text-white truncate">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 truncate">
              {project.tag}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <Github size={18} />
              </a>
            )}

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
          {/* Visual */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div
              className={`w-full h-40 md:h-56 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
            >
              <span className="text-4xl font-bold opacity-30">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2">
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-300 mb-4">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mb-4">
              <p className="text-xs text-gray-400 font-semibold mb-2">Tools</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-white/6 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 font-semibold mb-2">Tags</p>
              <p className="text-sm text-gray-300">{project.tag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
