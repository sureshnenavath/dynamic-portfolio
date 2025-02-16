import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "C"],
    "Frontend Technologies": ["HTML", "CSS", "Bootstrap", "React.js"],
    "Backend Technologies": ["Node.js", "Express.js"],
    "Database Management": ["SQL"],
  };

  return (
    <section id="skills" className="py-12 bg-secondary/30">
      <div className={`section-container ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="inline-block px-3 py-1 text-sm bg-primary/5 rounded-full">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My Expertise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A summary of my technical skills and areas of expertise.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
