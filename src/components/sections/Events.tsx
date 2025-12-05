import { Calendar, Trophy, Users } from 'lucide-react';
import Card from '../ui/Card';

const eventCategories = [
  {
    icon: Trophy,
    title: 'Hackathons',
    description: 'Participated in multiple hackathons, building innovative solutions under time constraints',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Tech Events',
    description: 'Active participant and organizer of technical workshops, seminars, and conferences',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Calendar,
    title: 'Volunteering',
    description: 'Regular volunteer for community tech events and educational initiatives',
    color: 'from-green-500 to-teal-500',
  },
];

export default function Events() {
  return (
    <section id="events" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Events & Volunteering</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index}>
              <div className={`w-full h-32 rounded-md bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center`}>
                <Icon size={48} />
              </div>
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-400">{category.description}</p>
            </Card>
          );
        })}
      </div>

      <Card>
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-2">More Events Coming Soon</h3>
          <p className="text-gray-400">
            Detailed list of hackathons, conferences, and volunteering experiences will be added here
          </p>
        </div>
      </Card>
    </section>
  );
}
