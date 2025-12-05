import { Home, FileText, GraduationCap, Folder, Code, BookOpen, Briefcase, Heart, Calendar, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'about', label: 'About', icon: Home },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'research', label: 'Research', icon: BookOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'extra', label: 'Extra / Social Work', icon: Heart },
  { id: 'events', label: 'Events / Volunteering', icon: Calendar },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <div className="w-64 bg-black flex flex-col h-full border-r border-gray-900">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <span className="text-xl font-bold">A</span>
          </div>
          <span className="text-xl font-bold">Ankitha.fm</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-md transition-all ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
