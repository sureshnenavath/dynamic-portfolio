import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/sureshnenavath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nenavath-suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@nenavathsuresh.com"
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nenavath Suresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
