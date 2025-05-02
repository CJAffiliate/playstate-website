import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import tradeIQImage from '@/assets/tradeiq-app.jpg';
import greenhomePathImg from '@/assets/greenhomepath.jpg';
import { projects } from '@/lib/project-data';

export default function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // We'll alternate between TradeIQ (index 0) and GreenHomePath (index 1)
  const featuredProjects = [
    projects[0], // TradeIQ
    projects[1]  // GreenHomePath
  ];
  
  const currentProject = featuredProjects[currentProjectIndex];
  
  // Auto-rotate case studies
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProjectIndex(prevIndex => (prevIndex + 1) % featuredProjects.length);
    }, 12000); // Change every 12 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);
  
  // Pause auto-rotation on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section-spacing bg-gradient-to-b from-playblack to-black relative overflow-hidden" ref={ref}>
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none"></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 overlay-dark pointer-events-none"></div>
      
      {/* Scanline animation */}
      <div className="scanline-effect"></div>
      
      {/* Floating data/analytics icons */}
      <div className="absolute w-full h-full pointer-events-none">
        <i className="bx bx-bar-chart-alt-2 text-white text-2xl absolute top-1/4 left-1/5 opacity-[0.03] floating-icon"></i>
        <i className="bx bx-line-chart text-white text-3xl absolute top-1/3 right-1/4 opacity-[0.04] floating-icon-delay-2"></i>
        <i className="bx bx-pie-chart-alt-2 text-white text-2xl absolute bottom-1/3 left-1/3 opacity-[0.03] floating-icon-delay-3"></i>
        <i className="bx bx-analyse text-white text-3xl absolute bottom-1/4 right-1/5 opacity-[0.04] floating-icon-delay-4"></i>
        <i className="bx bx-trending-up text-white text-2xl absolute top-1/2 left-1/4 opacity-[0.03] floating-icon-delay-5"></i>
      </div>
      
      <div className="container-width relative z-10 px-4">
        <motion.h2 
          className="heading-2 md:heading-1 font-space font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-playyellow">Case Study</span>
        </motion.h2>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left side: Phone Mockup */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentProjectIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="phone-tilt relative mx-auto max-w-xs"
              >
                {/* Phone frame */}
                <div className="relative mx-auto w-[280px] h-[560px] rounded-[36px] bg-black border-4 border-gray-800 overflow-hidden shadow-xl">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-xl z-10"></div>
                  
                  {/* Phone status bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-6 z-0">
                    <span className="text-white text-xs">14:21</span>
                    <div className="flex items-center space-x-1">
                      <i className="bx bx-signal-4 text-white text-sm"></i>
                      <i className="bx bx-wifi text-white text-sm"></i>
                      <span className="text-white text-xs">60%</span>
                    </div>
                  </div>
                  
                  {/* Phone screen content */}
                  <div className="absolute inset-0 overflow-hidden bg-playblack">
                    <img 
                      src={currentProjectIndex === 0 ? tradeIQImage : greenhomePathImg} 
                      alt={currentProject.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Radial light burst behind phone */}
                <div className="absolute -inset-20 bg-gradient-radial from-playyellow/30 via-playyellow/5 to-transparent rounded-full blur-3xl -z-10"></div>
                
                {/* Soft ambient glow */}
                <div className="absolute -inset-10 bg-playyellow/10 rounded-full blur-[80px] -z-15"></div>
                
                {/* Phone glow effect */}
                <div className="absolute -inset-4 bg-playyellow/15 rounded-full blur-xl -z-5 animate-pulse"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Right side: Case Study Text */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentProjectIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="heading-3 mb-4 text-white">
                  Case Study: <span className="text-playyellow">{currentProject.name}</span>
                </h3>
                
                <div className="bg-playyellow/20 text-playyellow text-xs px-3 py-1.5 rounded-md border border-playyellow/10 inline-block mb-5">
                  {currentProject.tag}
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-[12px] border border-white/10 hover:bg-white/8 transition-all duration-300 shadow-lg">
                    <h4 className="text-sm uppercase text-playgray mb-3 font-bold">Objective:</h4>
                    <p className="body-text">
                      {currentProject.objective.length > 180
                        ? currentProject.objective.substring(0, 180) + '...'
                        : currentProject.objective}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-[12px] border border-white/10 hover:bg-white/8 transition-all duration-300 shadow-lg">
                    <h4 className="text-sm uppercase text-playgray mb-3 font-bold">Action Taken:</h4>
                    <p className="body-text">
                      {currentProject.action.length > 180
                        ? currentProject.action.substring(0, 180) + '...'
                        : currentProject.action}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-[12px] border border-white/10 hover:bg-white/8 transition-all duration-300 shadow-lg">
                    <h4 className="text-sm uppercase text-playgray mb-3 font-bold">Outcome:</h4>
                    <p className="text-playyellow font-bold">
                      {currentProject.outcome.length > 180
                        ? currentProject.outcome.substring(0, 180) + '...'
                        : currentProject.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        {/* Navigation indicators */}
        <motion.div 
          className="flex justify-center space-x-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentProjectIndex(index);
                setIsAutoPlaying(false);
                // Resume auto-play after 10 seconds
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProjectIndex 
                  ? 'bg-playyellow w-8' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`View ${featuredProjects[index].name} case study`}
            />
          ))}
        </motion.div>
        
        {/* View all projects button */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.8
          }}
        >
          <Link href="/projects">
            <div className="btn btn-secondary inline-flex items-center cursor-pointer">
              → View Full Projects
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}