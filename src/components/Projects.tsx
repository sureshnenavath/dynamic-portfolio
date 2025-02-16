import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Automated Road Damage Detection",
      description: "Built a Python application to detect road damage using UAV images and deep learning models (YOLOv5, YOLOv7, YOLOv8). The system provides accurate detection and classification of various types of road damage.",
      technologies: ["Python 3.7.0", "TensorFlow", "Keras", "OpenCV", "YOLO"],
      links: {
        github: "https://github.com/sureshnenavath/road-damage-detection"
      }
    },
    {
      title: "Food Munch",
      description: "A responsive restaurant website combining HTML, CSS, and Bootstrap for a seamless user-focused experience. Features include a dynamic menu showcase and smooth navigation.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      links: {
        github: "https://github.com/sureshnenavath/food-munch",
        live: "https://sureshfoodmunch.ccbp.tech"
      }
    }
  ];

  return (
    <section id="projects" className="py-12 bg-background">
      <div className={`section-container ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-3 py-1 text-sm bg-primary/5 rounded-full">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of the projects I've worked on that showcase my skills and interests.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-card/50"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 color-white text-xs rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
