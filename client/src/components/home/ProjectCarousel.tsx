import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneMockup from '@/components/ui/phone-mockup';
import greenhomePathImg from '@/assets/greenhomepath.jpg';

// Project data with real examples
const projectData = [
  {
    id: 1,
    name: 'TRADE AI',
    tag: 'Funnel & Waitlist',
    image: '/tradeiq-screenshot.jpg',
    description: 'Helped secure £250,000 in funding by designing a high-conversion funnel and waitlist system for an AI-powered trading app.'
  },
  {
    id: 2,
    name: 'GREENHOMEPATH',
    tag: 'Lead Generation',
    image: greenhomePathImg,
    description: 'Built a lead-gen system for a pay-per-lead affiliate brand in the green energy space. Targeted cost-conscious homeowners via Facebook & Instagram ads.'
  },
  {
    id: 3,
    name: 'SYNTHTEX',
    tag: 'Email Campaign',
    image: '/synthex-email.jpg',
    description: 'Designed and implemented a 5-part email nurture sequence that increased customer activation by 43% and improved retention for a SaaS platform.'
  }
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate projects
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % projectData.length);
    }, 6000); // Rotate every 6 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-rotation on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Manual navigation
  const goToProject = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-rotation when user manually navigates
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentProject = projectData[currentIndex];

  return (
    <div 
      className="relative mx-auto max-w-5xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Phone mockup with project screenshot */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <PhoneMockup
                imageUrl={currentProject.image}
                animate={true}
                className="shadow-2xl shadow-black/20"
              />
              
              {/* Illuminating glow under phone */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-16 bg-playyellow/20 blur-2xl rounded-full"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project info */}
        <div className="w-full lg:w-1/2 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 mb-3 rounded text-xs font-mono font-semibold bg-playyellow/20 text-playyellow border border-playyellow/30">
                {currentProject.tag}
              </div>
              <h3 className="text-3xl font-space font-bold mb-4">
                {currentProject.name}
              </h3>
              <p className="text-playgray mb-6">
                {currentProject.description}
              </p>
              <button className="bg-transparent hover:bg-white/5 border border-white/20 hover:border-playyellow/50 text-white px-5 py-2 rounded-md text-sm transition duration-300">
                View Project Details
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-12">
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-playyellow w-6' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}