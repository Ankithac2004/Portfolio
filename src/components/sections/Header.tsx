import { Download } from 'lucide-react';

export default function Header() {
  const handleDownloadResume = () => {
    alert('Resume download will be connected to actual PDF link!');
  };

  return (
    <div className="bg-gradient-to-b from-emerald-900/40 to-transparent px-8 py-16 mb-8">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-sm text-gray-300 mb-2">Good evening</div>
          <h1 className="text-7xl font-bold mb-4">Ankitha C</h1>
          <p className="text-xl text-gray-300">
            B.Tech Electronics & Communication · SRM Institution of Science and Technology
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleDownloadResume}
            className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
