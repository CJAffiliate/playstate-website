import { motion } from 'framer-motion';
import { projects } from '@/lib/project-data';
import { Link } from 'wouter';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Group projects by category for filtering
  const categories = [...new Set(projects.map(project => project.tag))];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-playblack">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="font-space text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-playyellow">Projects</span>
          </motion.h1>

          <motion.p 
            className="text-playgray text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2
            }}
          >
            Explore our work and see how we've helped businesses transform their marketing presence.
          </motion.p>

          {/* Category filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="bg-playyellow text-playblack px-4 py-2 rounded-md font-medium hover:bg-white transition-colors">
              All
            </button>
            
            {categories.map((category, index) => (
              <button 
                key={index}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group hover:border-playyellow/30 transition-all"
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

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/#services">
              <a className="inline-flex items-center bg-playyellow text-playblack px-6 py-3 rounded-md font-medium hover:bg-white transition-colors">
                Explore Our Services <i className='bx bx-right-arrow-alt ml-2'></i>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
