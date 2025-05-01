import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/project-data';
import { Link } from 'wouter';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section id="projects" className="py-20 bg-playblack">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-space text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-playyellow">Projects</span>
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
          Swipe through our recent work and see how we've helped businesses level up their marketing game.
        </motion.p>
        
        {/* Horizontal scrolling projects */}
        <motion.div 
          className="scroll-container flex overflow-x-auto pb-8 -mx-4 px-4 snap-x"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="scroll-item flex-shrink-0 w-full md:w-[400px] mx-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-space text-xl font-bold group-hover:text-playyellow transition-colors">{project.name}</h3>
                  <span className="bg-playyellow/20 text-playyellow text-xs px-2 py-1 rounded">{project.tag}</span>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-sm uppercase text-playgray mb-1">The Problem</h4>
                  <p className="text-white">{project.problem}</p>
                </div>
                
                <div className="mb-3">
                  <h4 className="text-sm uppercase text-playgray mb-1">Our Solution</h4>
                  <p className="text-white">{project.solution} <span className="text-playyellow">{project.result}</span></p>
                </div>
                
                <a href="#" className="inline-flex items-center text-playyellow hover:text-white transition-colors mt-2">
                  View Case Study <i className='bx bx-right-arrow-alt ml-1'></i>
                </a>
              </div>
            </motion.div>
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
            <a className="inline-flex items-center bg-white/5 hover:bg-playyellow hover:text-playblack text-white px-6 py-3 rounded-md font-medium transition-colors">
              View All Projects <i className='bx bx-right-arrow-alt ml-2'></i>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
