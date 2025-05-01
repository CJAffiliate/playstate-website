import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: 'bx-bulb',
      title: 'Results-Driven Approach',
      description: 'We don\'t just create pretty designs. Every pixel, every word, every element is strategically placed to drive conversions and ROI.'
    },
    {
      icon: 'bx-line-chart',
      title: 'Data-Backed Decisions',
      description: 'No guesswork here. We analyze user behavior, A/B test designs, and optimize based on real performance data.'
    },
    {
      icon: 'bx-palette',
      title: 'Design That Converts',
      description: 'Beautiful designs that actually work. We combine aesthetic appeal with marketing psychology to create experiences that drive action.'
    },
    {
      icon: 'bx-revision',
      title: 'Ongoing Optimization',
      description: 'Launch is just the beginning. We continuously monitor, test, and refine to ensure your marketing assets keep performing better over time.'
    }
  ];

  const stats = [
    { value: '35%', label: 'Average conversion rate increase for our clients' },
    { value: '3.2X', label: 'Average ROI on marketing spend' },
    { value: '97%', label: 'Client retention rate' }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-playblack to-playblack/90">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-space text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-playyellow">PLAYSTATE</span>
        </motion.h2>
        
        <motion.p 
          className="text-playgray text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.2
          }}
        >
          We're not just another marketing agency. We're the team that turns your marketing challenges into conversion wins.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="bg-playyellow/20 p-3 rounded-lg text-playyellow text-2xl mr-4">
                  <i className={`bx ${feature.icon}`}></i>
                </div>
                <div>
                  <h3 className="font-space text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-playgray">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.8
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <p className="text-playyellow text-4xl font-bold font-space mb-2">{stat.value}</p>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
