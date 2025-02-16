import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Skills from '../components/Skills'; // Import Skills

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills /> {/* Add Skills section */}
      <Projects />
      <Footer />
    </main>
  );
};

export default Index;
