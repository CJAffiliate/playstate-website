import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/project-data';
import { Link } from 'wouter';
import ProjectCarousel from './ProjectCarousel';

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
        
        {/* Project Carousel with Phone Mockups */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 mb-16"
        >
          <ProjectCarousel />
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
