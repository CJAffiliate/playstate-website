import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';

interface NavbarProps {
  onWorkWithUsClick: () => void;
}

export default function Navbar({ onWorkWithUsClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simple navigation to a page
  const goToPage = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  // Simple navigation to services section
  const goToServices = () => {
    // Store that we want to scroll to services
    sessionStorage.setItem('scrollToSection', 'services');
    // Go to home page
    setLocation('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-playblack/90 backdrop-blur-sm border-b border-playyellow/20' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div 
            className="font-space text-playyellow text-xl font-bold cursor-pointer"
            onClick={() => goToPage('/')}
          >
            PLAY<span className="text-white">STATE</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <div 
            className={`text-white hover:text-playyellow transition-colors cursor-pointer ${location === '/' ? 'text-playyellow' : ''}`}
            onClick={() => goToPage('/')}
          >
            Home
          </div>
          <div 
            className="text-white hover:text-playyellow transition-colors cursor-pointer"
            onClick={goToServices}
          >
            Services
          </div>
          <div 
            className={`text-white hover:text-playyellow transition-colors cursor-pointer ${location === '/projects' ? 'text-playyellow' : ''}`}
            onClick={() => goToPage('/projects')}
          >
            Projects
          </div>
          <div 
            className={`text-white hover:text-playyellow transition-colors cursor-pointer ${location === '/why-us' ? 'text-playyellow' : ''}`}
            onClick={() => goToPage('/why-us')}
          >
            Why Us
          </div>
          <button 
            className="bg-playyellow text-playblack px-4 py-2 rounded-md font-medium hover:bg-white transition-colors work-with-us-btn"
            onClick={onWorkWithUsClick}
          >
            Work With Us
          </button>
        </div>
        
        <button 
          className="md:hidden text-white text-2xl" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className="md:hidden bg-playblack/95 backdrop-blur-md"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <div 
            className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer"
            onClick={() => goToPage('/')}
          >
            Home
          </div>
          <div 
            className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer"
            onClick={goToServices}
          >
            Services
          </div>
          <div 
            className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer"
            onClick={() => goToPage('/projects')}
          >
            Projects
          </div>
          <div 
            className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer"
            onClick={() => goToPage('/why-us')}
          >
            Why Us
          </div>
          <button 
            className="bg-playyellow text-playblack px-4 py-2 rounded-md font-medium hover:bg-white transition-colors work-with-us-btn"
            onClick={() => {
              setIsMenuOpen(false);
              onWorkWithUsClick();
            }}
          >
            Work With Us
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
