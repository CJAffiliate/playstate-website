import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';

interface NavbarProps {
  onWorkWithUsClick: () => void;
}

export default function Navbar({ onWorkWithUsClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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
  
  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Check if we're on the homepage
    if (location === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the homepage, navigate to homepage and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-playblack/90 backdrop-blur-sm border-b border-playyellow/20' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="font-space text-playyellow text-xl font-bold cursor-pointer">
            PLAY<span className="text-white">STATE</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <div className={`text-white hover:text-playyellow transition-colors cursor-pointer ${location === '/' ? 'text-playyellow' : ''}`}>
              Home
            </div>
          </Link>
          <div 
            className="text-white hover:text-playyellow transition-colors cursor-pointer"
            onClick={() => scrollToSection('services')}
          >
            Services
          </div>
          <Link href="/projects">
            <div className={`text-white hover:text-playyellow transition-colors cursor-pointer ${location === '/projects' ? 'text-playyellow' : ''}`}>
              Projects
            </div>
          </Link>
          <Link href="/why-us">
            <div className={`text-white hover:text-playyellow transition-colors cursor-pointer ${location === '/why-us' ? 'text-playyellow' : ''}`}>
              Why Us
            </div>
          </Link>
          <button 
            className="bg-playyellow text-playblack px-4 py-2 rounded-md font-medium hover:bg-white transition-colors"
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
          <Link href="/">
            <div className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Home
            </div>
          </Link>
          <div 
            className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer" 
            onClick={() => scrollToSection('services')}
          >
            Services
          </div>
          <Link href="/projects">
            <div className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Projects
            </div>
          </Link>
          <Link href="/why-us">
            <div className="text-white hover:text-playyellow transition-colors py-2 border-b border-white/10 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              Why Us
            </div>
          </Link>
          <button 
            className="bg-playyellow text-playblack px-4 py-2 rounded-md font-medium hover:bg-white transition-colors"
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
