import { SkipBack, Play, SkipForward, Volume2 } from 'lucide-react';

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-gray-900 flex items-center justify-between px-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-14 h-14 rounded bg-gradient-to-br from-rose-500 to-pink-500 flex-shrink-0"></div>
        <div>
          <div className="text-sm font-medium">Now Playing: Ankitha's Portfolio</div>
          <div className="text-xs text-gray-400">ECE · Data Science · UI/UX · Android</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white transition">
            <SkipBack size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
            <Play size={18} fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white transition">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="w-full max-w-md flex items-center gap-2">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-1 justify-end">
        <Volume2 size={20} className="text-gray-400" />
        <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
