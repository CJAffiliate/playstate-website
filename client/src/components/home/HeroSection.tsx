import { motion } from 'framer-motion';
import { PixelText } from '@/components/ui/pixel-text';

interface HeroSectionProps {
  onWorkWithUsClick: () => void;
}

export default function HeroSection({ onWorkWithUsClick }: HeroSectionProps) {
  // Animation variants for floating icons
  const floatingIconsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const floatingIcon = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline absolute inset-0 opacity-20 pointer-events-none"></div>
      
      {/* Floating marketing icons */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        variants={floatingIconsContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Top row */}
        <motion.div 
          className="floating-icon absolute top-[10%] left-[15%] text-playyellow text-3xl"
          variants={floatingIcon}
        >
          <i className='bx bx-envelope'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-1 absolute top-[10%] left-[40%] text-white text-2xl"
          variants={floatingIcon}
        >
          <i className='bx bx-mouse'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-2 absolute top-[10%] right-[20%] text-playyellow text-4xl"
          variants={floatingIcon}
        >
          <i className='bx bx-spreadsheet'></i>
        </motion.div>
        
        {/* Middle row */}
        <motion.div 
          className="floating-icon-delay-3 absolute top-[35%] left-[10%] text-white text-3xl"
          variants={floatingIcon}
        >
          <i className='bx bx-trending-up'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-4 absolute top-[35%] left-[30%] text-playyellow text-2xl"
          variants={floatingIcon}
        >
          <i className='bx bx-bullseye'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-5 absolute top-[35%] right-[30%] text-white text-3xl"
          variants={floatingIcon}
        >
          <i className='bx bx-bar-chart-alt-2'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-2 absolute top-[35%] right-[10%] text-playyellow text-2xl"
          variants={floatingIcon}
        >
          <i className='bx bx-line-chart'></i>
        </motion.div>
        
        {/* Bottom row */}
        <motion.div 
          className="floating-icon-delay-3 absolute bottom-[25%] left-[20%] text-white text-2xl"
          variants={floatingIcon}
        >
          <i className='bx bx-photo-album'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-4 absolute bottom-[25%] left-[45%] text-playyellow text-3xl"
          variants={floatingIcon}
        >
          <i className='bx bx-dollar-circle'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-5 absolute bottom-[25%] right-[20%] text-white text-3xl"
          variants={floatingIcon}
        >
          <i className='bx bx-target-lock'></i>
        </motion.div>
        
        {/* Additional scattered icons */}
        <motion.div 
          className="floating-icon-delay-1 absolute top-[60%] left-[15%] text-playyellow text-4xl"
          variants={floatingIcon}
        >
          <i className='bx bx-rocket'></i>
        </motion.div>
        <motion.div 
          className="floating-icon-delay-3 absolute top-[60%] right-[15%] text-white text-2xl"
          variants={floatingIcon}
        >
          <i className='bx bx-cart'></i>
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto px-4 text-center z-10 space-y-8">
        {/* Logo/Wordmark with pixel style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <PixelText 
            text="PLAYSTATE" 
            className="text-4xl md:text-6xl lg:text-7xl text-playyellow tracking-wider inline-block py-4"
          />
        </motion.div>
        
        {/* Tagline */}
        <motion.p 
          className="font-space text-xl md:text-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.4
          }}
        >
          Custom-built marketing. From pixels to profits.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.6
          }}
        >
          <button 
            className="bg-playyellow text-playblack px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-playyellow focus:ring-opacity-50"
            onClick={onWorkWithUsClick}
          >
            Work With Us
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className='bx bx-chevron-down text-playyellow text-3xl'></i>
      </div>
    </section>
  );
}
