import { Download, Mail, Phone, Linkedin, Github } from 'lucide-react';
import Card from '../ui/Card';

export default function Resume() {
  const handleDownload = () => {
    alert('Resume download will be connected to actual PDF link!');
  };

  return (
    <section id="resume" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-bold mb-4">Professional Snapshot</h3>
          <p className="text-gray-300 mb-4">
            Versatile engineering student with expertise in Data Science, Android Development, and UI/UX Design.
            Proven track record of delivering high-impact projects and internships with measurable results.
          </p>
          <button
            onClick={handleDownload}
            className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold flex items-center justify-center gap-2 transition"
          >
            <Download size={20} />
            Download Full Resume
          </button>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-4">Contact Links</h3>
          <div className="space-y-3">
            <a
              href="mailto:ankithac2013@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <Mail size={20} />
              <span>ankithac2013@gmail.com</span>
            </a>
            <a
              href="tel:+918088361164"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <Phone size={20} />
              <span>+91 80883 61164</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <Github size={20} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
