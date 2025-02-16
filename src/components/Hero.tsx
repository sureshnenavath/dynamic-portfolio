import { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative">
      <div className={`section-container grid md:grid-cols-2 gap-8 items-center ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}>
        <div className="text-center md:text-left space-y-6">
          <span className="inline-block px-3 py-1 text-sm bg-primary/5 rounded-full">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm Nenavath Suresh
          </h1>
          <p className="text-lg text-muted-foreground">
            A passionate software developer focused on creating innovative solutions
          </p>
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <a
              href="https://github.com/sureshnenavath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nenavath-suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src="https://res.cloudinary.com/dd6nthams/image/upload/v1738431713/Profesional_photo_nurfda.jpg"
              alt="Nenavath Suresh"
              className="profile-image w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
