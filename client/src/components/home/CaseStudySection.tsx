import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import tradeIQImage from '@/assets/tradeiq-app.jpg';
import greenhomePathImg from '@/assets/greenhomepath.jpg';
import { projects } from '@/lib/project-data';
import { PhoneMockup } from '@/components/ui/phone-mockup';

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
    }, 7000); // Change every 7 seconds
    
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2 + (index * 0.1)
      }
    }),
    hover: {
      y: -5,
      boxShadow: '0 10px 25px rgba(255, 211, 0, 0.2)',
      transition: { duration: 0.3 }
    }
  };
  
  // Card data with icons
  const cardData = [
    {
      id: 'problem',
      icon: '🚧',
      title: 'Problem',
      content: (project: typeof currentProject) => project.objective,
      color: 'from-orange-500/20 to-transparent'
    },
    {
      id: 'solution',
      icon: '🛠️',
      title: 'Solution',
      content: (project: typeof currentProject) => project.action,
      color: 'from-blue-500/20 to-transparent'
    },
    {
      id: 'result',
      icon: '📈',
      title: 'Result',
      content: (project: typeof currentProject) => project.outcome,
      color: 'from-green-500/20 to-transparent',
      highlight: true
    }
  ];

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
          className="flex flex-col md:flex-row gap-12 items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left side: Phone Mockup */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentProjectIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                className="phone-tilt relative mx-auto max-w-xs"
              >
                <PhoneMockup 
                  imageUrl={currentProjectIndex === 0 ? tradeIQImage : greenhomePathImg} 
                  showNotch={true}
                  showButtons={true}
                  animate={true}
                  className="w-[280px] mx-auto"
                />
                
                {/* Project name label - now as a pill below rather than behind */}
                <motion.div 
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-playyellow/90 text-playblack font-bold px-4 py-1.5 rounded-full text-sm shadow-lg whitespace-nowrap"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentProject.name}
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress indicator */}
            <div className="mt-16 flex items-center justify-center space-x-2">
              {featuredProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentProjectIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className="group relative"
                  aria-label={`View ${project.name} case study`}
                >
                  <div className={`h-2 w-12 rounded-full transition-all duration-500 ease-out ${
                    index === currentProjectIndex 
                      ? 'bg-playyellow' 
                      : 'bg-white/20'
                  }`}>
                    {index === currentProjectIndex && (
                      <div className="absolute inset-0 rounded-full bg-playyellow origin-left animate-progressBar"></div>
                    )}
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs pointer-events-none whitespace-nowrap">
                    {project.name}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Right side: Case Study Text */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentProjectIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-1"
              >
                <h3 className="heading-3 mb-4 text-white">
                  <span className="text-playyellow">{currentProject.name}</span>
                </h3>
                
                <div className="bg-playyellow/20 text-playyellow text-xs px-3 py-1.5 rounded-md border border-playyellow/10 inline-block mb-5">
                  {currentProject.tag}
                </div>
                
                <div className="space-y-4">
                  {cardData.map((card, index) => (
                    <motion.div 
                      key={card.id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className={`bg-white/5 backdrop-blur-sm p-6 rounded-[12px] border border-white/10 
                        transition-all duration-300 shadow-lg flex items-start space-x-4 min-h-[120px]
                        hover:bg-gradient-to-r ${card.color}`}
                    >
                      <div className="bg-black/40 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                        {card.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-sm uppercase text-playgray mb-2 font-bold flex items-center">
                          {card.title}
                        </h4>
                        <p className={card.highlight ? "text-playyellow font-bold" : "body-text"}>
                          {card.content(currentProject).length > 150
                            ? card.content(currentProject).substring(0, 150) + '...'
                            : card.content(currentProject)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center bg-black/30 backdrop-blur-sm p-10 rounded-xl border border-playyellow/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="heading-3 text-white mb-4">Ready to <span className="text-playyellow">Level Up</span> Your Brand?</h3>
          <p className="body-text max-w-2xl mx-auto mb-6">Let us build a custom marketing system tailored to your unique business goals and audience.</p>
          
          <button 
            onClick={() => {
              const workWithUsBtn = document.querySelector('.work-with-us-btn') as HTMLButtonElement;
              if (workWithUsBtn) workWithUsBtn.click();
            }}
            className="bg-playyellow hover:bg-white text-playblack px-8 py-3 rounded-md text-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-playyellow focus:ring-opacity-50"
          >
            Work With Us
          </button>
          
          <div className="mt-4 text-sm text-playgray">
            <Link href="/projects" className="inline-flex items-center hover:text-playyellow transition-colors">
              Or view more case studies <i className='bx bx-right-arrow-alt ml-1'></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}