import { Download, Mail, Phone, Linkedin, Github } from 'lucide-react';
import Card from '../ui/Card';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ankitha_c_doc.pdf';
    link.download = 'Ankitha_C_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <h3 className="text-lg md:text-xl font-bold mb-4">Professional Snapshot</h3>
          <p className="text-sm md:text-base text-gray-300 mb-4">
            Driven ECE engineering student with a solid foundation in semiconductors, VLSI, and digital electronics, supported by modern skills in Machine Learning, UI/UX, and app development. Recognized for producing clear, result-oriented work through projects and hands-on experiences.
          </p>
          <button
            onClick={handleDownload}
            className="w-full px-4 md:px-6 py-2 md:py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold flex items-center justify-center gap-2 transition text-sm md:text-base"
          >
            <Download size={18} className="md:w-5 md:h-5" />
            Download Resume
          </button>
        </Card>

        <Card>
          <h3 className="text-lg md:text-xl font-bold mb-4">Contact Links</h3>
          <div className="space-y-2 md:space-y-3">
            <a
              href="mailto:ankithac2013@gmail.com"
              className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-white transition"
            >
              <Mail size={18} />
              <span className="truncate">ankithac2013@gmail.com</span>
            </a>
            <a
              href="tel:+918088361164"
              className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-white transition"
            >
              <Phone size={18} />
              <span className="truncate">+91 80883 61164</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-white transition"
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-xs md:text-sm text-gray-300 hover:text-white transition"
            >
              <Github size={18} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
