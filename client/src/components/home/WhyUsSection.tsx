import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from '@/components/ui/counter';

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // New 4-step stacked system process
  const stackedSystem = [
    {
      step: 1,
      icon: 'bx-search-alt-2',
      iconColor: '#FFD300',
      title: 'Diagnose',
      description: 'Strategic audit to identify opportunities and conversion gaps.',
    },
    {
      step: 2,
      icon: 'bx-code-block',
      iconColor: '#FF6B6B',
      title: 'Build',
      description: 'Create high-conversion assets tailored to your audience.',
    },
    {
      step: 3,
      icon: 'bx-rocket',
      iconColor: '#4ECDC4',
      title: 'Launch',
      description: 'Deploy, direct qualified traffic, and monitor performance.',
    },
    {
      step: 4,
      icon: 'bx-line-chart',
      iconColor: '#8A2BE2',
      title: 'Optimize & Scale',
      description: 'Refine based on data and scale what works.',
    }
  ];

  const stats = [
    { 
      value: '35%', 
      label: 'Conversion Rate Increase', 
      icon: 'bx-trending-up',
      description: 'Average lift across all campaigns and strategies'
    },
    { 
      value: '3.2X', 
      label: 'ROI on Marketing Spend', 
      icon: 'bx-dollar-circle',
      description: 'Return on investment for our clients'
    },
    { 
      value: '10,000+', 
      label: 'Leads Captured', 
      icon: 'bx-user-plus',
      description: 'High-quality leads delivered to clients'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-playblack to-playblack/90 relative overflow-hidden">
      {/* Isometric blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none"></div>
      
      {/* Dark glow behind system block */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FFD300]/5 via-transparent to-transparent opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Stacked title design */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-white/80 text-sm md:text-lg uppercase tracking-widest font-medium">PLAYSTATE</span>
          <h2 className="font-space font-bold text-center">
            <span className="block text-playyellow text-2xl md:text-4xl">STACKED</span>
            <span className="block text-white text-3xl md:text-5xl mt-[-5px]">SYSTEM</span>
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-playgray text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.2
          }}
        >
          Our repeatable, strategic process that transforms marketing chaos into conversion machines.
        </motion.p>
        
        {/* System Module: Cards with animation and hover effects */}
        <motion.div 
          className="relative mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* System Module Background (subtle grid/glow) */}
          <div className="absolute inset-0 -m-4 bg-gradient-to-b from-black/40 to-black/10 rounded-2xl backdrop-blur-sm pointer-events-none"></div>
          
          {/* Desktop Cards in Horizontal Row */}
          <div className="hidden md:flex space-x-4 relative">
            {stackedSystem.map((step, index) => (
              <motion.div
                key={index}
                className="flex-1 min-h-[240px] z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.15),
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: `0 10px 25px -5px ${step.iconColor}25`,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg h-full flex flex-col">
                  {/* Step Number & Icon together at top */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm"
                      style={{ 
                        backgroundColor: step.iconColor,
                        color: step.iconColor === '#8A2BE2' ? 'white' : 'black'
                      }}
                    >
                      {step.step}
                    </div>
                    <div className="bg-white/10 p-3 rounded-full">
                      <i className={`bx ${step.icon} text-2xl`} style={{ color: step.iconColor }}></i>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-space text-xl font-bold mb-2">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-playgray text-sm">{step.description}</p>
                  
                  {/* Glowing border on bottom that matches icon color */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl opacity-60"
                    style={{ backgroundColor: step.iconColor }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Cards - Horizontally Scrollable Row */}
          <div className="md:hidden relative">
            <div className="flex overflow-x-auto pb-4 space-x-4 snap-x snap-mandatory no-scrollbar">
              {stackedSystem.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[80%] snap-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + (index * 0.1)
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-lg h-full relative">
                    {/* Step Number as badge */}
                    <div 
                      className="absolute -top-2 -right-2 rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm z-10"
                      style={{ 
                        backgroundColor: step.iconColor,
                        color: step.iconColor === '#8A2BE2' ? 'white' : 'black'
                      }}
                    >
                      {step.step}
                    </div>
                    
                    {/* Icon at top */}
                    <div className="mb-4">
                      <div className="inline-flex bg-white/10 p-3 rounded-full">
                        <i className={`bx ${step.icon} text-2xl`} style={{ color: step.iconColor }}></i>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-space text-lg font-bold mb-2">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-playgray text-sm">{step.description}</p>
                    
                    {/* Glowing border on left that matches icon color */}
                    <div 
                      className="absolute top-0 left-0 w-1 h-full rounded-l-xl opacity-60"
                      style={{ backgroundColor: step.iconColor }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicator dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {stackedSystem.map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-white/20"
                ></div>
              ))}
            </div>
          </div>
          
          {/* Connecting visual element between system and output */}
          <motion.div 
            className="h-24 w-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="relative h-full w-20">
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-playyellow/50 to-transparent"></div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-playyellow/10 rounded-full border border-playyellow/20"></div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-playyellow/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* System Output Section - Directly connected to the System */}
        <motion.div 
          className="relative backdrop-blur-sm p-8 rounded-xl border border-playyellow/10 bg-gradient-to-b from-black/40 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-playyellow text-xs text-playblack font-mono px-3 py-1 rounded">
            SYSTEM OUTPUT
          </div>
          
          {/* Desktop: 3-column layout */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + (index * 0.15) }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="bg-playyellow/10 p-3 rounded-full mb-3">
                  <i className={`bx ${stat.icon} text-2xl text-playyellow`}></i>
                </div>
                <p className="text-playyellow text-3xl font-bold font-space mb-1">
                  {isInView && <CountUp value={stat.value} />}
                </p>
                <p className="text-white text-base font-medium mb-2">{stat.label}</p>
                <p className="text-playgray text-xs">{stat.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile: Horizontally scrollable cards */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto pb-4 space-x-4 snap-x snap-mandatory no-scrollbar">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex-shrink-0 w-[80%] snap-center bg-white/5 p-5 rounded-lg border border-white/10 flex flex-col items-center text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + (index * 0.15) }}
                >
                  <div className="bg-playyellow/10 p-3 rounded-full mb-3">
                    <i className={`bx ${stat.icon} text-2xl text-playyellow`}></i>
                  </div>
                  <p className="text-playyellow text-3xl font-bold font-space mb-1">
                    {isInView && <CountUp value={stat.value} />}
                  </p>
                  <p className="text-white text-base font-medium mb-2">{stat.label}</p>
                  <p className="text-playgray text-xs">{stat.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicator dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {stats.map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 rounded-full bg-white/20"
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}