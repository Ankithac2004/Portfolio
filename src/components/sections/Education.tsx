import { GraduationCap } from 'lucide-react';
import Card from '../ui/Card';

export default function Education() {
  const courses = [
    'PCB Design',
    'VLSI Design',
    'Machine Learning',
    'Microprocessors',
    'Python and Scientific Python',
    'Android Application Development',
    'Digital Logic Design',  
    'Artificial Intelligence',
    'Computer Architecture',
  ];

  return (
    <section id="education" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>

      <Card>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">B.Tech in Electronics & Communication Engineering</h3>
            <p className="text-lg text-gray-300 mb-2">SRM Institution of Science and Technology</p>
            <p className="text-gray-400 mb-4">2022 – 2027</p>

            <h4 className="font-semibold mb-3">Key Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
