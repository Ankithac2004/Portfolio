import { Play } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Card({ children, onClick }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-gray-900/40 rounded-lg p-6 transition-all duration-300 cursor-pointer group ${
        isHovered ? 'bg-gray-800/60 transform -translate-y-1 shadow-2xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
      {isHovered && (
        <div className="absolute bottom-4 right-4">
          <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition transform opacity-0 group-hover:opacity-100">
            <Play size={20} fill="black" className="text-black ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}
