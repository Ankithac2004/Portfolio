import { Play } from 'lucide-react';
import Card from '../ui/Card';

interface AboutProps {
  onNavigate: (section: string) => void;
}

const highlights = [
  {
    title: 'Artist Overview',
    description: 'An engineer who thrives where logic meets creativity and ideas turn into experiences.',
    color: 'from-blue-500 to-cyan-500',
    sectionId: 'about-main',
  },
  {
    title: 'Featured Releases',
    description: 'Take a closer look at what I’ve been building.',
    color: 'from-green-500 to-emerald-500',
    sectionId: 'projects',
  },
  {
    title: 'CareerPerformances',
    description: 'Here’s where I’ve shown up, learned, and grown.',
    sectionId: 'experience',
  },
  {
    title: 'Skill Tracks',
    description: 'The essential toolkit behind my ideas and execution.',
    color: 'from-orange-500 to-red-500',
    sectionId: 'skills',
  },
];

const stats = [
  { label: 'Location', value: 'Bengaluru, India' },
  { label: 'Open To', value: 'Internships & Full-time Opportunities' },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <section id="about" className="mb-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Your Top Highlights</h2>
        <p className="text-gray-400">A quick overview of who I am – like your top playlists</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-8">
        {highlights.map((item, index) => (
          <Card key={index} onClick={() => onNavigate(item.sectionId)}>
            <div className={`w-full h-20 md:h-32 rounded-md bg-gradient-to-br ${item.color} mb-3 md:mb-4`}></div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-xs md:text-sm text-gray-400 line-clamp-2 md:line-clamp-3">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div id="about-main" className="md:col-span-2 bg-gray-900/40 rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I am a B.Tech Electronics and Communication Engineering student at SRM Institute of Science and Technology with a growing passion for the evolving world of semiconductor technology, VLSI design, and digital electronics. These areas have shaped my technical foundation and allowed me to appreciate the depth, precision, and innovation required in modern electronic systems.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Beyond core engineering, I’ve expanded my interests into Machine Learning, UI/UX design, and application development. These fields allow me to approach problems from a broader perspective—bringing together engineering logic, computational thinking, and human-centered design principles. My academic and personal projects reflect this multidimensional approach, where hardware understanding meets intelligent modeling and thoughtful digital experience design.
          </p>
          <p className="text-gray-300 leading-relaxed">
           As I continue to evolve as an engineer, I’m actively seeking internship opportunities that challenge me, expose me to real-world technical environments, and allow me to contribute to impactful projects. My goal is to build a career that bridges core engineering with modern innovation, creating solutions that are efficient, intelligent, and meaningful.
          </p>
        </div>

        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/40 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
              <div className="text-white font-semibold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
