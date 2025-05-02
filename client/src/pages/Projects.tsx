import { motion } from 'framer-motion';
import { projects } from '@/lib/project-data';
import { Link } from 'wouter';

export default function Projects() {
  // Only using top 3 projects
  const featuredProjects = projects.slice(0, 3);
  
  // Individual file animation with a slightly larger movement for more impact
  const fileVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 pb-40 bg-playblack relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="relative mb-20 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative elements that look like folder tabs at the top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 w-80 h-6 flex justify-center space-x-6 opacity-40">
              <div className="h-full w-24 bg-playyellow rounded-t-md rotate-2"></div>
              <div className="h-full w-16 bg-playyellow/60 rounded-t-md -rotate-3"></div>
              <div className="h-full w-32 bg-playyellow/40 rounded-t-md rotate-1"></div>
            </div>
            
            <motion.h1 
              className="font-space text-5xl md:text-7xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Client <span className="text-playyellow">Files</span>
            </motion.h1>

            <motion.p 
              className="text-playgray text-center max-w-2xl mx-auto mb-24 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                delay: 0.2
              }}
            >
              Classified mission briefings showcasing how PLAYSTATE transforms brands through strategic marketing operations.
            </motion.p>
          </motion.div>

          {/* Project Files with generous spacing and alternating layouts */}
          <div className="space-y-40 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="client-file bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group hover:border-playyellow/20 transition-all relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fileVariants}
              >
                {/* Priority indicator */}
                {project.priority && (
                  <div className="absolute top-0 right-0 z-20 translate-x-1/3 -translate-y-1/3 rotate-12">
                    <div className={`font-mono text-xs px-3 py-1 rounded-full ${
                      project.priority === 'HIGH' 
                        ? 'bg-red-900/30 text-red-400 border border-red-800/40' 
                        : 'bg-blue-900/30 text-blue-400 border border-blue-800/40'
                    }`}>
                      {project.priority}
                    </div>
                  </div>
                )}
                
                {/* File Container */}
                <div className="p-10 md:p-12">
                  {/* Top File Header - Bold with strong visual hierarchy */}
                  <div className="flex flex-col mb-10">
                    {/* File Number and Tab */}
                    <div className="inline-flex items-center mb-3">
                      <div className="file-tab w-10 h-8 bg-playyellow/90 rounded-t-md rounded-r-md -ml-12 mr-6"></div>
                      <span className="font-mono text-sm font-bold text-playyellow bg-playyellow/10 px-3 py-1 rounded-md border border-playyellow/20">
                        {project.fileNumber}
                      </span>
                      {/* Timestamp */}
                      {project.timestamp && (
                        <span className="font-mono text-xs text-playgray ml-4">
                          {project.timestamp}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      {/* Project Name - Larger for hierarchy */}
                      <h2 className="font-space text-3xl md:text-4xl font-bold group-hover:text-playyellow transition-colors mb-3 md:mb-0">
                        {project.name}
                      </h2>
                      
                      <div className="flex items-center gap-4">
                        {/* Project Type Tag */}
                        <span className="bg-playyellow/20 text-playyellow text-xs px-3 py-1 rounded-md border border-playyellow/10">
                          {project.tag}
                        </span>
                        
                        {/* Status Badge */}
                        <span className="bg-green-900/20 text-green-400 text-xs font-mono px-3 py-1 rounded-full border border-green-800/30 uppercase tracking-wider flex items-center whitespace-nowrap">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Horizontal divider with stronger presence */}
                    <div className="h-px bg-gradient-to-r from-playyellow/50 via-white/10 to-transparent mt-6"></div>
                  </div>
                  
                  {/* File Content with alternating layouts */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 ${project.reversed ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Column */}
                    <div className={`space-y-8 ${project.reversed ? 'md:order-2' : 'md:order-1'}`}>
                      <div>
                        <h4 className="text-sm uppercase font-bold text-playgray mb-3 flex items-center">
                          <span className="text-playyellow text-lg mr-2">❓</span> Objective
                        </h4>
                        <p className="text-white text-lg leading-relaxed">{project.objective}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase font-bold text-playgray mb-3 flex items-center">
                          <span className="text-playyellow text-lg mr-2">⚒️</span> Action Taken
                        </h4>
                        <p className="text-white text-lg leading-relaxed">{project.action}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase font-bold text-playgray mb-3 flex items-center">
                          <span className="text-playyellow text-lg mr-2">🎯</span> Outcome
                        </h4>
                        <p className="text-playyellow font-semibold text-xl">{project.outcome}</p>
                      </div>
                      
                      {/* CTA Button - Moved inside the content column */}
                      <div className="pt-4 flex justify-end">
                        <button className="file-open-btn inline-flex items-center bg-white/10 hover:bg-playyellow/90 hover:text-playblack text-white px-5 py-3 rounded-md font-medium transition-all duration-300 border border-white/5">
                          <span className="mr-2">Open Full File</span> <i className='bx bx-folder-open text-lg'></i>
                        </button>
                      </div>
                    </div>
                    
                    {/* Asset Preview Column */}
                    <div className={`flex items-center justify-center ${project.reversed ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="project-image-container overflow-hidden rounded-md border border-white/10 shadow-2xl relative">
                        {/* Asset Frame */}
                        <div className="absolute inset-0 border-4 border-white/5 rounded-md pointer-events-none z-10"></div>
                        
                        {/* Image */}
                        <motion.img 
                          src={`/src/assets/${project.image}`}
                          alt={`${project.name} project preview`} 
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                          whileHover={{ scale: 1.05 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                        />
                        
                        {/* Corner decoration */}
                        <div className="absolute bottom-0 right-0 w-16 h-16 flex items-end justify-end p-2 text-xs text-playgray font-mono opacity-60">
                          PLAYSTATE™
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer decoration - paper-like tear line */}
                  <div className="flex justify-center mt-12 opacity-30">
                    <svg width="200" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L5 3L10 0L15 5L20 2L25 7L30 3L35 8L40 2L45 5L50 0L55 4L60 1L65 6L70 2L75 7L80 3L85 8L90 4L95 1L100 6L105 0L110 5L115 2L120 7L125 3L130 8L135 0L140 5L145 2L150 7L155 3L160 8L165 4L170 0L175 6L180 2L185 7L190 3L195 8L200 4" stroke="rgba(255,211,0,0.5)" strokeWidth="1"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA styled more like a new file/mission */}
          <motion.div 
            className="text-center mt-32 bg-white/5 backdrop-blur-sm p-12 rounded-lg border border-playyellow/10 max-w-3xl mx-auto relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* File corner */}
            <div className="absolute top-0 right-0 w-0 h-0" style={{ 
              borderStyle: 'solid',
              borderWidth: '0 40px 40px 0',
              borderColor: 'transparent rgba(255, 211, 0, 0.3) transparent transparent'
            }}></div>
            
            {/* Tab */}
            <div className="absolute top-0 left-10 -translate-y-1/2 bg-playyellow/80 h-6 w-20 rounded-t-md"></div>
            
            <h3 className="font-space text-3xl md:text-4xl font-bold mb-5">Your brand could be the next mission file.</h3>
            <p className="text-playgray mb-8 text-xl max-w-xl mx-auto">Let PLAYSTATE transform your marketing strategy into a precision conversion machine.</p>
            
            <Link href="/#contact" className="cta-button inline-flex items-center bg-playyellow text-playblack px-8 py-4 rounded-md font-medium hover:bg-white transition-all duration-300 text-lg">
              <i className='bx bx-upload mr-2 text-xl'></i> Submit Your Brand Brief
            </Link>
            
            {/* Decorative dashed line */}
            <div className="border-t border-dashed border-white/10 mt-8 pt-6">
              <span className="text-sm text-playgray font-mono">CONFIDENTIAL • FOR AUTHORIZED MARKETING OPERATIONS ONLY</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
