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
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>

      <Card>
        <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
          <div className="w-12 md:w-16 h-12 md:h-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={24} className="md:w-8 md:h-8" />
          </div>
          <div className="flex-1 w-full">
            <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">B.Tech in Electronics & Communication Engineering</h3>
            <p className="text-base md:text-lg text-gray-300 mb-1 md:mb-2">SRM Institution of Science and Technology</p>
            <p className="text-sm text-gray-400 mb-3 md:mb-4">2022 – 2027</p>

            <h4 className="text-sm font-semibold mb-2 md:mb-3">Key Coursework:</h4>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {courses.map((course, index) => (
                <span
                  key={index}
                  className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-800 rounded-full text-xs md:text-sm"
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
