import Card from '../ui/Card';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'British Airways',
    type: 'Virtual',
    period: 'Jul 2025 – Aug 2025',
    color: 'from-blue-600 to-blue-800',
    bullets: [
      'Scraped and analyzed 50,000+ customer reviews',
      'Processed 1,000+ data points for sentiment analysis',
      'Built predictive model with ~85% accuracy',
      'Identified 5+ key factors influencing customer buying behavior',
      'Delivered actionable insights to improve customer experience',
    ],
  },
  {
    role: 'UI/UX Design Intern',
    company: 'StackPro',
    type: 'Bengaluru',
    period: 'Jul 2024 – Aug 2024',
    color: 'from-rose-600 to-pink-600',
    bullets: [
      'Sole designer responsible for product redesign',
      'Fixed 10+ critical design and usability issues',
      'Conducted weekly reviews with 5+ senior designers',
      'Redesigned user workflow reducing task completion time by 15%',
      'Created comprehensive design system and component library',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Experience & Internships</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <div className={`w-full h-24 rounded-md bg-gradient-to-r ${exp.color} mb-4 flex items-center justify-center`}>
              <span className="text-2xl font-bold">{exp.company}</span>
            </div>

            <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-1">{exp.company} · {exp.type}</p>
            <p className="text-sm text-green-500 mb-4">{exp.period}</p>

            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
