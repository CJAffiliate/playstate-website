import { motion } from 'framer-motion';
import { projects } from '@/lib/project-data';
import { Link } from 'wouter';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Increased stagger for more pronounced sequencing
      }
    }
  };

  const fileVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  // Group projects by category for filtering
  const categories = Array.from(new Set(projects.map(project => project.tag)));

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-playblack relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="font-space text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Client <span className="text-playyellow">Files</span>
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
            Browse our classified case files and see how PLAYSTATE has transformed brands through strategic marketing.
          </motion.p>

          {/* Category filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="bg-playyellow text-playblack px-4 py-2 rounded-md font-medium hover:bg-white transition-colors">
              All Files
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

          {/* Client Files - Vertical Stack */}
          <motion.div 
            className="space-y-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group hover:border-playyellow/20 transition-all relative"
                variants={fileVariants}
                // Adding a subtle yellow top border to resemble a folder tab
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  borderTop: '3px solid rgba(255, 211, 0, 0.7)'
                }}
              >
                {/* Client File Container */}
                <div className="p-6 md:p-8">
                  {/* File Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 pb-4 border-b border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3 md:mb-0">
                      {/* File Number */}
                      <span className="font-mono text-xs text-playgray bg-white/5 px-2 py-1 rounded">
                        {project.fileNumber}
                      </span>
                      
                      {/* Client Name */}
                      <h3 className="font-space text-2xl font-bold group-hover:text-playyellow transition-colors">
                        {project.name}
                      </h3>
                      
                      {/* Project Type Tag */}
                      <span className="bg-playyellow/20 text-playyellow text-xs px-2 py-1 rounded w-fit">
                        {project.tag}
                      </span>
                    </div>
                    
                    {/* Status Badge */}
                    <span className="bg-green-900/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-800/30 font-mono uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* File Content */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* Left Column: Problem → Solution → Result */}
                    <div className="md:col-span-3 space-y-5">
                      <div>
                        <h4 className="text-sm uppercase text-playgray mb-2 flex items-center">
                          <span className="text-playyellow text-lg mr-2">❓</span> The Challenge
                        </h4>
                        <p className="text-white">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase text-playgray mb-2 flex items-center">
                          <span className="text-playyellow text-lg mr-2">⚒️</span> The Build
                        </h4>
                        <p className="text-white">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase text-playgray mb-2 flex items-center">
                          <span className="text-playyellow text-lg mr-2">🎯</span> The Result
                        </h4>
                        <p className="text-playyellow font-medium">{project.result}</p>
                      </div>
                    </div>
                    
                    {/* Right Column: Asset Preview */}
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="overflow-hidden rounded-md border border-white/10 shadow-lg relative">
                        {/* Asset Frame */}
                        <div className="absolute inset-0 border-4 border-white/5 rounded-md pointer-events-none z-10"></div>
                        
                        {/* Image */}
                        <img 
                          src="/placeholder.png" 
                          alt={`${project.name} project preview`} 
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6 text-right">
                    <button className="inline-flex items-center bg-white/10 hover:bg-playyellow/80 hover:text-playblack text-white px-4 py-2 rounded-md font-medium transition-colors duration-300">
                      Open Full File <i className='bx bx-folder-open ml-2'></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="text-center mt-16 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="font-space text-2xl font-bold mb-3">Your brand could be the next case file.</h3>
            <p className="text-playgray mb-6">Let PLAYSTATE transform your marketing into a conversion machine.</p>
            
            <Link href="/#contact" className="inline-flex items-center bg-playyellow text-playblack px-6 py-3 rounded-md font-medium hover:bg-white transition-colors">
              Start Your Project <i className='bx bx-right-arrow-alt ml-2'></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
