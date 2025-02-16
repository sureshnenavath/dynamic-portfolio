import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink from react-router-hash-link

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const menuItemsData = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Skills', href: '/#skills' },
      { label: 'Projects', href: '/#projects' },
      { label: 'Contact', href: '/contact' },
    ];
    setMenuItems(menuItemsData);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold">
              Nenavath Suresh
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.length > 0 && menuItems.map((item) => (
              (item.label === 'Home' || item.label === 'Contact') ? (
                <Link key={item.label} to={item.href} className="text-sm font-medium hover:text-primary/80 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <HashLink
                  key={item.label}
                  to={item.href}
                  smooth
                  className="text-sm font-medium hover:text-primary/80 transition-colors"
                >
                  {item.label}
                </HashLink>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass mt-2 py-4 animate-slide-in">
            <div className="flex flex-col space-y-4 px-4">
              {menuItems.length > 0 && menuItems.map((item) => (
                (item.label === 'Home' || item.label === 'Contact') ? (
                  <Link key={item.label} to={item.href} className="text-sm font-medium hover:text-primary/80 transition-colors" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <HashLink
                    key={item.label}
                    to={item.href}
                    smooth
                    className="text-sm font-medium hover:text-primary/80 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </HashLink>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
