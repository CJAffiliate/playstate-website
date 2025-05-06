import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';

interface NavbarProps {
  onWorkWithUsClick: () => void;
  onMenuOpenChange?: (open: boolean) => void;
}

export default function Navbar({ onWorkWithUsClick, onMenuOpenChange }: NavbarProps) {
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

  useEffect(() => {
    if (onMenuOpenChange) onMenuOpenChange(isMenuOpen);
  }, [isMenuOpen, onMenuOpenChange]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simple navigation to a page
  const goToPage = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
    // If navigating to home, scroll to top
    if (path === '/') {
      window.scrollTo(0, 0);
    }
  };

  // Simple navigation to services section
  const goToServices = () => {
    if (location === '/') {
      // If already on home page, scroll to services section
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const navbarHeight = 80; // Height of your navbar
        const elementPosition = servicesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, store the section to scroll to and navigate to home
      sessionStorage.setItem('scrollToSection', 'services');
      setLocation('/');
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-playblack/90 backdrop-blur-sm border-b border-playyellow/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div 
              className="font-space text-playyellow text-2xl font-bold cursor-pointer tracking-widest drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]"
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
      </nav>
      {/* Mobile menu rendered outside nav for full viewport coverage */}
      <motion.div 
        className={`md:hidden fixed inset-0 z-[999] flex flex-col justify-between bg-playblack/95 backdrop-blur-lg ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden', background: 'rgba(14,14,14,0.95)' }}
      >
        {/* Top: Logo and close button */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <div 
              className="font-space text-playyellow text-2xl font-bold cursor-pointer tracking-widest drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]"
              onClick={() => goToPage('/')}
            >
              PLAY<span className="text-white">STATE</span>
            </div>
          </Link>
          <button 
            className="text-white text-3xl focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* Center: Nav links */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <div 
            className="text-white text-xl font-medium font-mono hover:text-playyellow transition-colors cursor-pointer"
            onClick={() => goToPage('/')}
          >
            Home
          </div>
          <div 
            className="text-white text-xl font-medium font-mono hover:text-playyellow transition-colors cursor-pointer"
            onClick={goToServices}
          >
            Services
          </div>
          <div 
            className="text-white text-xl font-medium font-mono hover:text-playyellow transition-colors cursor-pointer"
            onClick={() => goToPage('/projects')}
          >
            Projects
          </div>
          <div 
            className="text-white text-xl font-medium font-mono hover:text-playyellow transition-colors cursor-pointer"
            onClick={() => goToPage('/why-us')}
          >
            Why Us
          </div>
          <button 
            className="bg-playyellow text-playblack px-6 py-3 rounded-md font-bold font-mono text-lg hover:bg-white transition-colors work-with-us-btn mt-4 shadow-lg"
            onClick={() => {
              setIsMenuOpen(false);
              onWorkWithUsClick();
            }}
          >
            Work With Us
          </button>
          {/* Social links directly below Work With Us button */}
          <div className="flex items-center justify-center space-x-6 pt-6">
            <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="Twitter">
              <i className='bx bxl-twitter text-2xl'></i>
            </a>
            <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="Instagram">
              <i className='bx bxl-instagram text-2xl'></i>
            </a>
            <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="LinkedIn">
              <i className='bx bxl-linkedin text-2xl'></i>
            </a>
            <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="Dribbble">
              <i className='bx bxl-dribbble text-2xl'></i>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
