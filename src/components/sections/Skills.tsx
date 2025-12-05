import Card from '../ui/Card';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'HTML/CSS', 'JavaScript', 'SQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['VS Code', 'Android Studio', 'Figma', 'Git', 'Firebase', 'Jupyter'],
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'PyTorch', 'SciPy', 'React'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-sm font-medium hover:from-green-600 hover:to-green-500 transition-all cursor-default"
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
