import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'wouter';
import tradeIQImage from '@/assets/tradeiq-app.jpg';

export default function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section className="py-20 bg-gradient-to-b from-playblack to-black relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,211,0,0.03)_0,transparent_70%)] pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-space text-3xl md:text-4xl font-bold mb-12 text-center"
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
        >
          {/* Left side: Phone Mockup */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <div className="phone-tilt relative mx-auto max-w-xs">
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
                
                {/* Phone screen content (TradeIQ App) */}
                <div className="absolute inset-0 overflow-hidden bg-playblack">
                  <img 
                    src={tradeIQImage} 
                    alt="TradeIQ App" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Phone glow effect */}
              <div className="absolute -inset-4 bg-playyellow/10 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>
          
          {/* Right side: Case Study Text */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            variants={itemVariants}
          >
            <h3 className="font-space text-2xl font-bold text-white">
              Case Study: <span className="text-playyellow">TradeIQ</span>
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/8 transition-all duration-300">
                <h4 className="text-sm uppercase text-playgray mb-2 font-bold">Problem:</h4>
                <p className="text-white">
                  "Trading platform lacked sophisticated AI analysis tools. Users needed real-time data insights without emotional bias impacting decisions."
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/8 transition-all duration-300">
                <h4 className="text-sm uppercase text-playgray mb-2 font-bold">Our Solution:</h4>
                <p className="text-white">
                  "We designed a clean, data-focused mobile UI that analyzes personal trading styles to deliver smarter, faster decisions powered by real data, not emotions."
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/8 transition-all duration-300">
                <h4 className="text-sm uppercase text-playgray mb-2 font-bold">Results:</h4>
                <p className="text-playyellow font-bold">
                  "+42% user engagement and 8,500+ waitlist signups within first month of launch."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* View all projects button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.8
          }}
        >
          <Link href="/projects">
            <div className="inline-flex items-center bg-white/5 hover:bg-playyellow hover:text-playblack text-white px-6 py-3 rounded-md font-medium transition-all duration-300 border border-playyellow/20 shadow-[0_0_15px_rgba(255,211,0,0.15)] hover:shadow-[0_0_20px_rgba(255,211,0,0.3)] cursor-pointer">
              View Full Projects <i className='bx bx-right-arrow-alt ml-2'></i>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}