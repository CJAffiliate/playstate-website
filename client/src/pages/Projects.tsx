import { motion } from 'framer-motion';
import { projects } from '@/lib/project-data';
import { Link } from 'wouter';

export default function Projects() {
  // Featured projects - Limited to just 4 top projects
  const featuredProjects = projects.slice(0, 4);
  
  // Individual file animation
  const fileVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 pb-32 bg-playblack relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="font-space text-4xl md:text-6xl font-bold text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Client <span className="text-playyellow">Files</span>
          </motion.h1>

          <motion.p 
            className="text-playgray text-center max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.2
            }}
          >
            Classified case files showcasing how PLAYSTATE transforms brands through strategic marketing.
          </motion.p>

          {/* Curated Client Files - With generous spacing between each file */}
          <div className="space-y-28 max-w-5xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="client-file bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group hover:border-playyellow/20 transition-all relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fileVariants}
              >
                {/* Client File Container */}
                <div className="p-8 md:p-10">
                  {/* File Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 pb-6 border-b border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 mb-4 md:mb-0">
                      {/* File Number */}
                      <span className="font-mono text-xs text-playgray bg-white/5 px-2 py-1 rounded">
                        {project.fileNumber}
                      </span>
                      
                      {/* Client Name */}
                      <h3 className="font-space text-2xl md:text-3xl font-bold group-hover:text-playyellow transition-colors">
                        {project.name}
                      </h3>
                      
                      {/* Project Type Tag */}
                      <span className="bg-playyellow/20 text-playyellow text-xs px-3 py-1 rounded-md w-fit">
                        {project.tag}
                      </span>
                    </div>
                    
                    {/* Status Badge */}
                    <span className="bg-green-900/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-800/30 font-mono uppercase tracking-wider flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* File Content */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Left Column: Problem → Solution → Result */}
                    <div className="md:col-span-3 space-y-6">
                      <div>
                        <h4 className="text-sm uppercase text-playgray mb-3 flex items-center">
                          <span className="text-playyellow text-lg mr-2">❓</span> The Challenge
                        </h4>
                        <p className="text-white text-lg">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase text-playgray mb-3 flex items-center">
                          <span className="text-playyellow text-lg mr-2">⚒️</span> The Build
                        </h4>
                        <p className="text-white text-lg">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase text-playgray mb-3 flex items-center">
                          <span className="text-playyellow text-lg mr-2">🎯</span> The Result
                        </h4>
                        <p className="text-playyellow font-medium text-xl">{project.result}</p>
                      </div>
                    </div>
                    
                    {/* Right Column: Asset Preview */}
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="overflow-hidden rounded-md border border-white/10 shadow-xl relative">
                        {/* Asset Frame */}
                        <div className="absolute inset-0 border-4 border-white/5 rounded-md pointer-events-none z-10"></div>
                        
                        {/* Image */}
                        <img 
                          src={`/src/assets/${project.image}`}
                          alt={`${project.name} project preview`} 
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-10 text-right">
                    <button className="file-open-btn inline-flex items-center bg-white/10 hover:bg-playyellow/90 hover:text-playblack text-white px-5 py-3 rounded-md font-medium transition-all duration-300">
                      Open Full File <i className='bx bx-folder-open ml-2'></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div 
            className="text-center mt-28 bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-white/10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-space text-3xl font-bold mb-4">Your brand could be the next case file.</h3>
            <p className="text-playgray mb-8 text-lg">Let PLAYSTATE transform your marketing into a conversion machine.</p>
            
            <Link href="/#contact" className="cta-button inline-flex items-center bg-playyellow text-playblack px-8 py-4 rounded-md font-medium hover:bg-white transition-all duration-300 text-lg">
              Submit Your Brand Brief <i className='bx bx-right-arrow-alt ml-2'></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
