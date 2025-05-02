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

  const stackedSystems = [
    {
      icon: 'bx-radar',
      iconColor: '#FFD300',
      title: 'Results-Driven',
      description: 'Every pixel, every word strategically placed to drive conversions and boost your ROI.',
      connectors: ['right']
    },
    {
      icon: 'bx-line-chart',
      iconColor: '#FF6B6B',
      title: 'Data-Backed Decisions',
      description: 'We analyze user behavior, A/B test designs, and optimize based on real data.',
      connectors: ['left', 'bottom']
    },
    {
      icon: 'bx-refresh',
      iconColor: '#4ECDC4',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring, testing, and refinement to maximize performance.',
      connectors: ['right', 'top']
    },
    {
      icon: 'bx-palette',
      iconColor: '#8A2BE2',
      title: 'Design That Converts',
      description: 'Beautiful designs that work—marrying aesthetics with marketing psychology.',
      connectors: ['left']
    },
    {
      icon: 'bx-analyse',
      iconColor: '#00B8D9',
      title: 'Strategic Planning',
      description: 'We don\'t guess, we map out comprehensive strategies based on your business goals.',
      connectors: ['right', 'bottom']
    },
    {
      icon: 'bx-conversation',
      iconColor: '#FF9F1C',
      title: 'Customer-Focused',
      description: 'Your audience is at the center of everything we create and optimize.',
      connectors: ['left', 'top']
    }
  ];

  const stats = [
    { value: '35%', label: 'Average conversion rate increase' },
    { value: '3.2X', label: 'ROI on marketing spend' },
    { value: '97%', label: 'Client retention rate' }
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
      scale: 0.9,
      rotate: -2
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.6
      }
    }
  };

  // Line connector animation
  const connectorVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.5,
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
        delayChildren: 1.5 // Start after blocks are in place
      }
    }
  };

  const statItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 20 
      }
    }
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-playblack to-playblack/90 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-space text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The <span className="text-playyellow">Stacked System</span>
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
          Our modular marketing approach combines these building blocks to create your custom conversion machine.
        </motion.p>
        
        {/* Stacked System Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stackedSystems.map((block, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative z-10 h-full"
              variants={blockVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: `0 10px 25px -5px rgba(${block.iconColor === '#FFD300' ? '255, 211, 0' : '255, 255, 255'}, 0.1)`,
                transition: { duration: 0.2 }
              }}
            >
              {/* System node icon in hexagon */}
              <div className="mb-4 flex items-center justify-center">
                <div className={`rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-4 relative`} style={{ borderColor: block.iconColor }}>
                  <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-xl" style={{ backgroundImage: `linear-gradient(to right, transparent, ${block.iconColor})` }}></div>
                  <i className={`bx ${block.icon} text-3xl`} style={{ color: block.iconColor }}></i>
                </div>
              </div>
              
              {/* Block title and description */}
              <div className="text-center">
                <h3 className="font-space text-xl font-bold mb-3">{block.title}</h3>
                <p className="text-playgray">{block.description}</p>
              </div>
              
              {/* Connection points/nodes */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-0">
                {block.connectors?.map((direction, i) => (
                  <div key={i} className={`absolute ${
                    direction === 'right' ? 'right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2' :
                    direction === 'left' ? 'left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2' :
                    direction === 'top' ? 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' :
                    'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2'
                  } w-2 h-2 rounded-full bg-playyellow`}></div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats section with animated counters */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={statsContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              variants={statItemVariants}
            >
              <p className="text-playyellow text-4xl font-bold font-space mb-2">
                {isInView && <CountUp value={stat.value} />}
              </p>
              <p className="text-white">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
