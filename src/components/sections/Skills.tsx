import Card from '../ui/Card';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Verilog', 'C/C++', 'HTML/CSS', 'Java', 'Kotlin'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['VS Code', 'Xilinx ISE', 'Optisystem', 'Cadence', 'LTspice', 'Figma', 'Android Studio'],
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'PyTorch', 'SciPy'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <h3 className="text-lg md:text-xl font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-xs md:text-sm font-medium hover:from-green-600 hover:to-green-500 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
