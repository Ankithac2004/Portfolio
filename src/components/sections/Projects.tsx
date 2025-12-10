import Card from '../ui/Card';

const projects = [
  {
    title: 'Voice Command Recognition System',
    tag: 'Speech Recognition • MFCC • Audio Processing',
    tools: ['Python', 'Librosa', 'Scikit-learn', 'NumPy / Pandas'],
    color: 'from-pink-500 to-rose-500',
    bullets: [
      'Developed a speech recognition system that records audio, extracts MFCC features, and classifies voice commands.',
      'Improved accuracy using silence removal, normalization, and supervised ML models (SVM, Random Forest).',
    ],
  }, 
  {
    title: 'Smart Blind Glasses with YOLOv3',
    tag: 'Image Detection • Obeject Detection • Embedded AI • Machine Learning',
    tools: ['YOLOv3', 'ESP32-CAM', 'Arduino', 'Python', 'OpenCV'],
    color: 'from-green-500 to-emerald-500',
    bullets: [
      'Built a smart blind-assist device using ESP32 + YOLOv3 for real-time image detection and obstacle alerts.',
      'Integrated Python-based AI inference with embedded hardware to improve detection accuracy and response time.',
    ],
  },
  {
    title: 'Traffic Flow Prediction',
    tag: 'Machine Learning',
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    color: 'from-green-500 to-emerald-500',
    bullets: [
      'Analyzed 50,000+ traffic records',
      'Studied patterns across 10+ junctions',
      'Achieved 85% prediction accuracy',
      'Built real-time prediction model',
    ],
  },
  {
    title: 'Travel Group Corporation',
    tag: 'Web Development',
    tools: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
    bullets: [
      'Responsive UI for all device sizes',
      'User authentication and profiles',
      'Create and join travel groups',
      'Improved travel coordination by 40%',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className={`w-full h-24 md:h-40 rounded-md bg-gradient-to-br ${project.color} mb-3 md:mb-4 flex items-center justify-center`}>
              <span className="text-2xl md:text-3xl font-bold opacity-50">{project.title.charAt(0)}</span>
            </div>

            <div className="mb-2">
              <span className="text-xs text-green-500 font-semibold">{project.tag}</span>
            </div>

            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{project.title}</h3>

            <ul className="space-y-1 md:space-y-2 mb-4">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-xs md:text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 md:mt-1 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span key={i} className="px-2 py-1 bg-gray-800 rounded text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
