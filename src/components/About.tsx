import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-12 bg-secondary/30">
      <div className={`section-container ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="inline-block px-3 py-1 text-sm bg-primary/5 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Passionate About Technology & Innovation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently pursuing B.Tech in CSE (Data Science) at Siddhartha Institute of Engineering and Technology, 
            I am deeply passionate about leveraging technology to create innovative solutions. My goal is to work 
            in an organization that provides ample opportunities to enhance my skills while contributing to its growth.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="glass rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-primary/60" />
                  <div>
                    <p className="font-medium">B.Tech - CSE (Data Science)</p>
                    <p className="text-sm text-muted-foreground">Siddhartha Institute of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground">2021-2025 • 7.23 CGPA</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-primary/60" />
                  <div>
                    <p className="font-medium">Intermediate - MPC</p>
                    <p className="text-sm text-muted-foreground">TSWEIS</p>
                    <p className="text-sm text-muted-foreground">2019-2021 • 93.4%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-primary/60" />
                  <div>
                    <p className="font-medium">Secondary School Certificate</p>
                    <p className="text-sm text-muted-foreground">Zilla Parishad High School</p>
                    <p className="text-sm text-muted-foreground">2009-2019 • 8.8 CGPA</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glass rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">Personal Details</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-primary/60" />
                  <div>
                    <p className="font-medium">Date of Birth</p>
                    <p className="text-sm text-muted-foreground">22/04/2004</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-primary/60" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Sanga Reddy, Telangana</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-primary/60" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">1-28, Kishan Naik Thanda(V),</p>
                    <p className="text-sm text-muted-foreground">Nagalgidda(M), Sanga Reddy(D) 502286</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-primary/60" />
                  <div>
                    <p className="font-medium">Hobbies</p>
                    <p className="text-sm text-muted-foreground">Mobile Gaming, Cricket</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
