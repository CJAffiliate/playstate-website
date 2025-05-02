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

          {/* Project Files in a zig-zag pattern */}
          <div className="relative max-w-6xl mx-auto h-[500px] flex flex-col justify-center">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                style={{
                  position: 'absolute',
                  top: `${5 + (index * 27)}%`,
                  left: index % 2 === 0 ? '5%' : 'auto',
                  right: index % 2 === 0 ? 'auto' : '5%',
                  width: '500px',
                  maxWidth: '80%',
                  zIndex: featuredProjects.length - index,
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`
                }}
                className="client-file bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group hover:border-playyellow/20 transition-all relative"
                initial="hidden"
                animate="visible"
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
                <div className="p-5 md:p-6">
                  {/* Compact File Header */}
                  <div className="flex flex-col mb-5">
                    {/* File Number and Tab */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="file-tab w-6 h-6 bg-playyellow/90 rounded-t-md rounded-r-md -ml-10 mr-4"></div>
                        <span className="font-mono text-xs font-bold text-playyellow bg-playyellow/10 px-2 py-1 rounded border border-playyellow/20">
                          {project.fileNumber}
                        </span>
                      </div>
                      
                      {/* Status Badge */}
                      <span className="bg-green-900/20 text-green-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-green-800/30 uppercase tracking-wider flex items-center whitespace-nowrap">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Project Name and Type */}
                    <div className="flex items-center justify-between">
                      <h2 className="font-space text-xl md:text-2xl font-bold group-hover:text-playyellow transition-colors">
                        {project.name}
                      </h2>
                      
                      <span className="bg-playyellow/20 text-playyellow text-[10px] px-2 py-0.5 rounded border border-playyellow/10">
                        {project.tag}
                      </span>
                    </div>
                    
                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-playyellow/50 via-white/10 to-transparent mt-3"></div>
                  </div>
                  
                  {/* Compact File Content */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left Column: Project Info */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs uppercase font-bold text-playgray mb-1 flex items-center">
                          <span className="text-playyellow text-sm mr-1">❓</span> Objective
                        </h4>
                        <p className="text-white text-sm">
                          {project.objective.length > 100 
                            ? project.objective.substring(0, 100) + '...' 
                            : project.objective}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xs uppercase font-bold text-playgray mb-1 flex items-center">
                          <span className="text-playyellow text-sm mr-1">🎯</span> Outcome
                        </h4>
                        <p className="text-playyellow font-medium text-sm">
                          {project.outcome.length > 60
                            ? project.outcome.substring(0, 60) + '...'
                            : project.outcome}
                        </p>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-2">
                        <button className="file-open-btn inline-flex items-center bg-white/10 hover:bg-playyellow/90 hover:text-playblack text-white px-3 py-1.5 rounded text-xs font-medium transition-all duration-300 border border-white/5">
                          <span className="mr-1">Open File</span> <i className='bx bx-folder-open'></i>
                        </button>
                      </div>
                    </div>
                    
                    {/* Right Column: Image */}
                    <div className="flex items-center justify-center">
                      <div className="project-image-container overflow-hidden rounded-md border border-white/10 shadow-xl relative w-full h-[140px]">
                        {/* Asset Frame */}
                        <div className="absolute inset-0 border-2 border-white/5 rounded-md pointer-events-none z-10"></div>
                        
                        {/* Image */}
                        <motion.img 
                          src={`/src/assets/${project.image}`}
                          alt={`${project.name} project preview`} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA styled more like a new file/mission */}
          <motion.div 
            className="text-center mt-20 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-playyellow/10 max-w-2xl mx-auto relative"
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
