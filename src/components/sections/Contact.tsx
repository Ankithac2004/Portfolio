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
      <h2 className="text-3xl font-bold mb-6">Contact & Feedback</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-bold mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:ankithac2013@gmail.com" className="text-gray-400 hover:text-white transition">
                  ankithac2013@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={20} className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+918088361164" className="text-gray-400 hover:text-white transition">
                  +91 80883 61164
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-400">Bengaluru, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Linkedin size={20} className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  linkedin.com/in/ankitha-c-11b71324b
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Github size={20} className="text-green-500 mt-1" />
              <div>
                <p className="font-medium">GitHub</p>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  https://github.com/Ankithac2004
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Open to internship opportunities and Full-time opportunities.
              Let's connect and build something amazing together!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
