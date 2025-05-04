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
    { value: '35%', label: 'Average conversion rate increase', icon: 'bx-trending-up' },
    { value: '3.2X', label: 'ROI on marketing spend', icon: 'bx-dollar-circle' },
    { value: '10,000+', label: 'Leads captured', icon: 'bx-user-plus' }
  ];

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
          The <span className="text-playyellow">PLAYSTATE Stacked System</span>
        </motion.h2>
        
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
        
        {/* 4-Step Process - Desktop View */}
        <div className="hidden md:block relative mb-16">
          {/* Connector line */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 z-0"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: 'left' }}
          ></motion.div>
          
          <div className="grid grid-cols-4 gap-4 relative">
            {stackedSystem.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.15),
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-playyellow/30 transition-all shadow-lg hover:shadow-xl hover:shadow-playyellow/5 hover:-translate-y-1 hover:bg-white/8 h-full flex flex-col">
                  {/* Step Number */}
                  <div 
                    className="rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mb-4"
                    style={{ 
                      backgroundColor: step.iconColor,
                      color: step.iconColor === '#8A2BE2' ? 'white' : 'black'
                    }}
                  >
                    {step.step}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="flex items-center mb-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <i className={`bx ${step.icon} text-2xl`} style={{ color: step.iconColor }}></i>
                    </div>
                    <h3 className="font-space text-xl font-bold ml-3">{step.title}</h3>
                  </div>
                  
                  <p className="text-playgray">{step.description}</p>
                  
                  {/* Connection dot at bottom */}
                  <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: step.iconColor }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 4-Step Process - Mobile View (Vertical Stack) */}
        <div className="md:hidden relative mb-16">
          {/* Vertical line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-4 w-1 bg-gradient-to-b from-playyellow/30 via-playyellow/20 to-playyellow/10 z-0"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          ></motion.div>
          
          <div className="space-y-10 pl-12 relative">
            {stackedSystem.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.15),
                  type: 'spring',
                  stiffness: 100
                }}
              >
                {/* Connection line to main vertical */}
                <div className="absolute left-[-28px] top-6 w-6 h-[2px]" style={{ backgroundColor: step.iconColor }}></div>
                
                {/* Step circle on the vertical line */}
                <div 
                  className="absolute left-[-32px] top-6 w-[16px] h-[16px] rounded-full -translate-y-1/2"
                  style={{ backgroundColor: step.iconColor }}
                ></div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
                  {/* Step Number */}
                  <div 
                    className="rounded-full w-8 h-8 flex items-center justify-center font-bold absolute -top-3 -left-3 text-sm"
                    style={{ 
                      backgroundColor: step.iconColor,
                      color: step.iconColor === '#8A2BE2' ? 'white' : 'black'
                    }}
                  >
                    {step.step}
                  </div>
                  
                  {/* Icon & Title */}
                  <div className="flex items-center mb-4 mt-2">
                    <div className="bg-white/10 p-3 rounded-full">
                      <i className={`bx ${step.icon} text-2xl`} style={{ color: step.iconColor }}></i>
                    </div>
                    <h3 className="font-space text-xl font-bold ml-3">{step.title}</h3>
                  </div>
                  
                  <p className="text-playgray">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* System output/readout stats */}
        <motion.div 
          className="mt-20 bg-black/20 p-8 rounded-lg border border-playyellow/10 relative backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="absolute -top-3 left-8 bg-playyellow text-xs text-playblack font-mono px-3 py-1 rounded">
            SYSTEM OUTPUT
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col md:flex-row items-center md:space-x-4 p-4 bg-playblack/50 rounded-lg border border-white/10 text-center md:text-left"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: 0.9 + (index * 0.2),
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <div className="bg-playyellow/10 p-3 rounded-full mb-3 md:mb-0">
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