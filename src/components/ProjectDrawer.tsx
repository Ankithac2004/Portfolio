// ProjectDrawer.tsx
import React, { useEffect } from "react";
import { X } from "lucide-react";

export type ProjectItem = {
  title: string;
  tag: string;
  tools: string[];
  color: string;
  bullets: string[];
};

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (!project) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer panel */}
      <aside
        className="relative ml-auto w-full md:w-[640px] max-w-full h-full bg-gradient-to-b from-gray-900/95 to-black/95 border-l border-white/6 shadow-2xl transform transition-transform duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 md:p-6 border-b border-white/6">
          <div>
            <h3 className="text-lg md:text-2xl font-bold">{project.title}</h3>
            <div className="text-xs text-gray-400 mt-1">{project.tag}</div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-300 hover:text-white p-2 rounded"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 overflow-y-auto h-[calc(100%-72px)]">
          <div className={`w-full h-44 md:h-56 rounded-md mb-4 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <span className="text-3xl font-bold opacity-40">{project.title.charAt(0)}</span>
          </div>

          <div className="mb-4 text-sm md:text-base text-gray-300">
            <ul className="list-disc pl-5 space-y-2">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-xs text-gray-400 font-semibold mb-2">Tools</div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="px-2 py-1 bg-white/6 rounded text-xs">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-400 font-semibold mb-2">Tags</div>
            <div className="text-sm text-gray-300">{project.tag}</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
