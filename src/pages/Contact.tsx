import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import Navigation from '../components/Navigation'; // Import Navigation
import Footer from '../components/Footer'; // Import Footer

const Contact = () => {
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

    const element = document.getElementById('contact');
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
    <main className="min-h-screen"> {/* Wrap everything in a main tag */}
      <Navigation /> {/* Include the Navigation component */}
      <section id="contact" className="py-12 bg-secondary/30">
        <div className={`section-container ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="inline-block px-3 py-1 text-sm bg-primary/5 rounded-full">
              Contact Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'd love to hear from you! Whether you have a project proposal, a question, or just want to chat about technology, feel free to reach out.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="glass rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:sureshnenavath09@gmail.com" className="font-medium flex items-center">
                      Email: sureshnenavath09@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/sureshnenavath" className="font-medium" target="_blank" rel="noopener noreferrer">
                      GitHub: sureshnenavath
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nenavath-suresh/" className="font-medium" target="_blank" rel="noopener noreferrer">
                      LinkedIn: Nenavath Suresh
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 glass rounded-lg p-6 space-y-4">
                  <img
                    src="https://res.cloudinary.com/dd6nthams/image/upload/v1690816190/image-suresh-profile.jpg"
                    alt="Nenavath Suresh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Include the Footer component */}
    </main>
  );
};

export default Contact;
