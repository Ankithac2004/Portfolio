import { Download } from 'lucide-react';

export default function Header() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ankitha_c_doc.pdf';
    link.download = 'Ankitha_C_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-b from-emerald-900/40 to-transparent px-4 md:px-8 py-8 md:py-16 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div className="flex-1">
          <div className="text-xs md:text-sm text-gray-300 mb-2">Hey all, meet me!!!</div>
          <h1 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4">Ankitha C</h1>
          <p className="text-sm md:text-xl text-gray-300">
            ECE Student | Developing Foundations in Semiconductors, VLSI, and Intelligent Systems
          </p>
        </div>
      </div>
    </div>
  );
}
