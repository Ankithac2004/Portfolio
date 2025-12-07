import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import Card from '../ui/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo – backend can be connected later.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact & Feedback</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <h3 className="text-lg md:text-xl font-bold mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 md:px-6 py-2 md:py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </Card>

        <Card>
          <h3 className="text-lg md:text-xl font-bold mb-4">Contact Information</h3>

          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-green-500 mt-0.5 md:mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-medium">Email</p>
                <a href="mailto:ankithac2013@gmail.com" className="text-xs md:text-sm text-gray-400 hover:text-white transition truncate">
                  ankithac2013@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} className="text-green-500 mt-0.5 md:mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-medium">Phone</p>
                <a href="tel:+918088361164" className="text-xs md:text-sm text-gray-400 hover:text-white transition">
                  +91 80883 61164
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-green-500 mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs md:text-sm font-medium">Location</p>
                <p className="text-xs md:text-sm text-gray-400">Bengaluru, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Linkedin size={18} className="text-green-500 mt-0.5 md:mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-medium">LinkedIn</p>
                <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition truncate">
                  linkedin.com/in/ankitha-c
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Github size={18} className="text-green-500 mt-0.5 md:mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-medium">GitHub</p>
                <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition truncate">
                  github.com/Ankithac2004
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-800">
            <p className="text-xs md:text-sm text-gray-400">
              Open to internship opportunities and Full-time opportunities.
              Let's connect and build something amazing together!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
