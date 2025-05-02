import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ServicesSection() {
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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-playblack to-playblack/95">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-space text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-playyellow">Services</span>
        </motion.h2>
        
        {/* Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {/* Card 1 */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-playyellow/30 transition-all transform hover:-translate-y-2 group"
            variants={itemVariants}
          >
            <div className="mb-4 text-playyellow text-3xl">
              <i className='bx bx-laptop'></i>
            </div>
            <h3 className="font-space text-xl font-bold mb-3 group-hover:text-playyellow transition-colors">Pixel-Perfect Pages</h3>
            <p className="text-playgray mb-4">Sleek landing pages and websites made to convert traffic into results. Like this one—you're literally looking at our product.</p>
            <a href="#" className="inline-flex items-center text-playyellow hover:text-white transition-colors">
              Get Started <i className='bx bx-right-arrow-alt ml-1'></i>
            </a>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-playyellow/30 transition-all transform hover:-translate-y-2 group"
            variants={itemVariants}
          >
            <div className="mb-4 text-playyellow text-3xl">
              <i className='bx bx-broadcast'></i>
            </div>
            <h3 className="font-space text-xl font-bold mb-3 group-hover:text-playyellow transition-colors">Plug-and-Play Promos</h3>
            <p className="text-playgray mb-4">Need ads, emails, or a full content drop? We deliver marketing assets ready to roll. Done-for-you and done right.</p>
            <a href="#" className="inline-flex items-center text-playyellow hover:text-white transition-colors">
              Learn More <i className='bx bx-right-arrow-alt ml-1'></i>
            </a>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-playyellow/30 transition-all transform hover:-translate-y-2 group"
            variants={itemVariants}
          >
            <div className="mb-4 text-playyellow text-3xl">
              <i className='bx bx-bulb'></i>
            </div>
            <h3 className="font-space text-xl font-bold mb-3 group-hover:text-playyellow transition-colors">Wildcard Wins</h3>
            <p className="text-playgray mb-4">Don't see what you need? We're problem solvers. Drop us your business struggle and we'll tailor the solution.</p>
            <a href="#" className="inline-flex items-center text-playyellow hover:text-white transition-colors">
              Get Started <i className='bx bx-right-arrow-alt ml-1'></i>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Horizontal callout with translucent yellow box */}
        <motion.div 
          className="mt-12 p-6 bg-playyellow/25 backdrop-blur-sm border border-playyellow/30 rounded-lg text-center shadow-lg shadow-playyellow/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.9
          }}
        >
          <p className="text-playblack font-space font-medium">All services include post-marketing care: optimization, updates, and scaling built-in. <span className="font-bold text-black">We grow with you.</span></p>
        </motion.div>
      </div>
    </section>
  );
}
