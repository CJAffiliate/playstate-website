import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import CountUp from '@/components/ui/counter';

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Reorganized to match the stacked pyramid layout
  const stackedSystems = [
    // First row (top)
    {
      icon: 'bx-radar',
      iconColor: '#FFD300',
      title: 'Results-Driven',
      description: 'Every pixel, every word strategically placed to drive conversions and boost your ROI.',
      row: 1,
      position: 'center',
      linksTo: [1, 2]
    },
    // Second row (middle)
    {
      icon: 'bx-line-chart',
      iconColor: '#FF6B6B',
      title: 'Data-Backed Decisions',
      description: 'We analyze user behavior, A/B test designs, and optimize based on real data.',
      row: 2,
      position: 'left',
      linksTo: [3]
    },
    {
      icon: 'bx-refresh',
      iconColor: '#4ECDC4',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring, testing, and refinement to maximize performance.',
      row: 2,
      position: 'right',
      linksTo: [4]
    },
    // Third row (foundation)
    {
      icon: 'bx-palette',
      iconColor: '#8A2BE2',
      title: 'Design That Converts',
      description: 'Beautiful designs that work—marrying aesthetics with marketing psychology.',
      row: 3,
      position: 'left',
      linksTo: []
    },
    {
      icon: 'bx-analyse',
      iconColor: '#00B8D9',
      title: 'Strategic Planning',
      description: 'We don\'t guess, we map out comprehensive strategies based on your business goals.',
      row: 3,
      position: 'center',
      linksTo: []
    },
    {
      icon: 'bx-conversation',
      iconColor: '#FF9F1C',
      title: 'Customer-Focused',
      description: 'Your audience is at the center of everything we create and optimize.',
      row: 3,
      position: 'right',
      linksTo: []
    }
  ];

  const stats = [
    { value: '35%', label: 'Average conversion rate increase', icon: 'bx-trending-up' },
    { value: '3.2X', label: 'ROI on marketing spend', icon: 'bx-dollar-circle' },
    { value: '97%', label: 'Client retention rate', icon: 'bx-check-shield' }
  ];

  // Staggered animations for blocks dropping into place
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Block drop-in animation
  const blockVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.6
      }
    }
  };

  // Line connector animation
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.5,
      transition: { 
        duration: 0.8,
        delay: 0.7,
        ease: "easeInOut"
      }
    }
  };

  // Stats counter animation
  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.8 // Start after blocks are in place
      }
    }
  };

  const statItemVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 20 
      }
    }
  };

  // Function to determine the grid column based on position
  const getGridColumn = (position: string): string => {
    switch(position) {
      case 'left': return 'col-start-1 col-end-5';
      case 'center': return 'col-start-5 col-end-9';
      case 'right': return 'col-start-9 col-end-13';
      default: return '';
    }
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-playblack to-playblack/90 relative overflow-hidden">
      {/* Isometric blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-space text-3xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The <span className="text-playyellow">Stacked System</span>
        </motion.h2>
        
        <motion.p 
          className="text-playgray text-center max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.2
          }}
        >
          Our modular marketing approach combines these building blocks to create your custom conversion machine.
        </motion.p>
        
        <motion.p 
          className="text-white text-center max-w-3xl mx-auto mb-16 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.3
          }}
        >
          <span className="text-playyellow">Each block plays a role.</span> Together, they form your conversion engine.
        </motion.p>
        
        {/* Stacked System Pyramid Layout */}
        <div className="relative">
          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            {/* Top to Middle Left */}
            <motion.path
              d="M600,140 L400,280"
              stroke="rgba(255, 211, 0, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              variants={lineVariants}
              initial="hidden"
              animate={controls}
            />
            {/* Top to Middle Right */}
            <motion.path
              d="M600,140 L800,280"
              stroke="rgba(255, 211, 0, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              variants={lineVariants}
              initial="hidden"
              animate={controls}
            />
            {/* Middle Left to Bottom Left */}
            <motion.path
              d="M400,280 L300,420"
              stroke="rgba(255, 211, 0, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              variants={lineVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.2 }}
            />
            {/* Middle Right to Bottom Right */}
            <motion.path
              d="M800,280 L900,420"
              stroke="rgba(255, 211, 0, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              variants={lineVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.2 }}
            />
            {/* Connect to middle bottom */}
            <motion.path
              d="M600,280 L600,420"
              stroke="rgba(255, 211, 0, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              variants={lineVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.3 }}
            />
          </svg>
          
          {/* 1-2-3 Pyramid Structure with Blocks */}
          <motion.div 
            className="grid grid-cols-12 gap-4 relative"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Row 1 (Top) */}
            <motion.div 
              className="col-start-5 col-end-9 mb-16"
              variants={blockVariants}
              custom={0}
            >
              <div 
                className="system-block bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative z-10"
                style={{ boxShadow: "0px 10px 30px -5px rgba(255, 211, 0, 0.05)" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-playyellow text-playblack text-xs font-mono px-2 py-0.5 rounded">
                  LAYER 1
                </div>
                {/* System node icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl" style={{ backgroundImage: `linear-gradient(to right, transparent, #FFD300)` }}></div>
                    <i className="bx bx-radar text-3xl" style={{ color: '#FFD300' }}></i>
                  </div>
                </div>
                
                {/* Block title and description */}
                <div className="text-center">
                  <h3 className="font-space text-xl font-bold mb-3">Results-Driven</h3>
                  <p className="text-playgray">Every pixel, every word strategically placed to drive conversions and boost your ROI.</p>
                </div>
                
                {/* Connection nodes */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-playyellow rounded-full opacity-50"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Row 2 (Middle) - Shifted slightly inward */}
            <motion.div 
              className="col-start-3 col-end-6 mb-16"
              variants={blockVariants}
              custom={1}
            >
              <div 
                className="system-block bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative z-10"
                style={{ boxShadow: "0px 10px 30px -5px rgba(255, 107, 107, 0.05)" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF6B6B] text-playblack text-xs font-mono px-2 py-0.5 rounded">
                  LAYER 2
                </div>
                {/* System node icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl" style={{ backgroundImage: `linear-gradient(to right, transparent, #FF6B6B)` }}></div>
                    <i className="bx bx-line-chart text-3xl" style={{ color: '#FF6B6B' }}></i>
                  </div>
                </div>
                
                {/* Block title and description */}
                <div className="text-center">
                  <h3 className="font-space text-xl font-bold mb-3">Data-Backed Decisions</h3>
                  <p className="text-playgray">We analyze user behavior, A/B test designs, and optimize based on real data.</p>
                </div>
                
                {/* Connection nodes */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full opacity-50"></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-start-8 col-end-11 mb-16"
              variants={blockVariants}
              custom={2}
            >
              <div 
                className="system-block bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative z-10"
                style={{ boxShadow: "0px 10px 30px -5px rgba(78, 205, 196, 0.05)" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4ECDC4] text-playblack text-xs font-mono px-2 py-0.5 rounded">
                  LAYER 2
                </div>
                {/* System node icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl" style={{ backgroundImage: `linear-gradient(to right, transparent, #4ECDC4)` }}></div>
                    <i className="bx bx-refresh text-3xl" style={{ color: '#4ECDC4' }}></i>
                  </div>
                </div>
                
                {/* Block title and description */}
                <div className="text-center">
                  <h3 className="font-space text-xl font-bold mb-3">Ongoing Optimization</h3>
                  <p className="text-playgray">Continuous monitoring, testing, and refinement to maximize performance.</p>
                </div>
                
                {/* Connection nodes */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#4ECDC4] rounded-full opacity-50"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Row 3 (Bottom) - Foundation */}
            <motion.div 
              className="col-start-1 col-end-5"
              variants={blockVariants}
              custom={3}
            >
              <div 
                className="system-block bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative z-10"
                style={{ boxShadow: "0px 10px 30px -5px rgba(138, 43, 226, 0.05)" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#8A2BE2] text-white text-xs font-mono px-2 py-0.5 rounded">
                  LAYER 3
                </div>
                {/* System node icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl" style={{ backgroundImage: `linear-gradient(to right, transparent, #8A2BE2)` }}></div>
                    <i className="bx bx-palette text-3xl" style={{ color: '#8A2BE2' }}></i>
                  </div>
                </div>
                
                {/* Block title and description */}
                <div className="text-center">
                  <h3 className="font-space text-xl font-bold mb-3">Design That Converts</h3>
                  <p className="text-playgray">Beautiful designs that work—marrying aesthetics with marketing psychology.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-start-5 col-end-9"
              variants={blockVariants}
              custom={4}
            >
              <div 
                className="system-block bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative z-10"
                style={{ boxShadow: "0px 10px 30px -5px rgba(0, 184, 217, 0.05)" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00B8D9] text-playblack text-xs font-mono px-2 py-0.5 rounded">
                  LAYER 3
                </div>
                {/* System node icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl" style={{ backgroundImage: `linear-gradient(to right, transparent, #00B8D9)` }}></div>
                    <i className="bx bx-analyse text-3xl" style={{ color: '#00B8D9' }}></i>
                  </div>
                </div>
                
                {/* Block title and description */}
                <div className="text-center">
                  <h3 className="font-space text-xl font-bold mb-3">Strategic Planning</h3>
                  <p className="text-playgray">We don't guess, we map out comprehensive strategies based on your business goals.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-start-9 col-end-13"
              variants={blockVariants}
              custom={5}
            >
              <div 
                className="system-block bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative z-10"
                style={{ boxShadow: "0px 10px 30px -5px rgba(255, 159, 28, 0.05)" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF9F1C] text-playblack text-xs font-mono px-2 py-0.5 rounded">
                  LAYER 3
                </div>
                {/* System node icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl" style={{ backgroundImage: `linear-gradient(to right, transparent, #FF9F1C)` }}></div>
                    <i className="bx bx-conversation text-3xl" style={{ color: '#FF9F1C' }}></i>
                  </div>
                </div>
                
                {/* Block title and description */}
                <div className="text-center">
                  <h3 className="font-space text-xl font-bold mb-3">Customer-Focused</h3>
                  <p className="text-playgray">Your audience is at the center of everything we create and optimize.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* System output/readout stats */}
        <motion.div 
          className="mt-24 bg-black/20 p-8 rounded-lg border border-playyellow/10 relative backdrop-blur-sm"
          variants={statsContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="absolute -top-3 left-8 bg-playyellow text-xs text-playblack font-mono px-3 py-1 rounded">
            SYSTEM OUTPUT
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-4 p-4 bg-playblack/50 rounded-lg border border-white/10"
                variants={statItemVariants}
              >
                <div className="bg-playyellow/10 p-3 rounded-full">
                  <i className={`bx ${stat.icon} text-2xl text-playyellow`}></i>
                </div>
                <div>
                  <p className="text-playyellow text-3xl font-bold font-space">
                    {isInView && <CountUp value={stat.value} />}
                  </p>
                  <p className="text-white text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
