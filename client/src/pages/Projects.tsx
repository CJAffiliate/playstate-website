import { motion } from 'framer-motion';
import { projects } from '@/lib/project-data';
import { Link } from 'wouter';
import PhoneMockup from '@/components/ui/phone-mockup';
import greenhomePathImg from '@/assets/greenhomepath.jpg';

export default function Projects() {
  // Using all 4 projects now, including GreenHomePath
  const featuredProjects = projects.slice(0, 4);
  
  // Individual file animations with staggered timing
  const fileVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 pb-32 bg-playblack relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="relative mb-16 w-full"
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
              className="text-playgray text-center max-w-2xl mx-auto mb-20 text-lg"
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

          {/* Project Files - Modern alternating layout with phone mockups */}
          <div className="max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="mb-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fileVariants}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-12 items-center`}>
                  {/* Phone Mockup Side */}
                  <div className="w-full md:w-2/5 relative flex justify-center">
                    <motion.div
                      initial={{ y: 20 }}
                      whileInView={{ y: [20, 0, 20] }}
                      transition={{ 
                        duration: 6, 
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                      viewport={{ once: false, amount: 0.2 }}
                      className="relative"
                    >
                      {/* Floating Phone */}
                      {project.name === "GREENHOMEPATH" ? (
                        <PhoneMockup 
                          imageUrl={greenhomePathImg} 
                          animate={false}
                          showButtons={true}
                          className="shadow-2xl shadow-black/20"
                        />
                      ) : (
                        <PhoneMockup 
                          imageUrl={project.name === "TradeIQ" ? "/tradeiq-screenshot.jpg" : 
                                  project.name === "FRESHDRIP" ? "/coffee-ad-screenshot.jpg" : 
                                  "/email-screenshot.jpg"} 
                          animate={false}
                          showButtons={true}
                          className="shadow-2xl shadow-black/20"
                        />
                      )}
                      
                      {/* Illuminating glow under phone */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-16 bg-playyellow/20 blur-2xl rounded-full"></div>
                      
                      {/* Blueprint grid background */}
                      <div className="absolute -inset-12 -z-10 blueprint-grid opacity-[0.05] rounded-full"></div>
                    </motion.div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-3/5">
                    <div className="client-file bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-playyellow/20 transition-colors p-6 md:p-8">
                      {/* Top section with file number and tag */}
                      <div className="flex flex-col mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="file-tab w-6 h-6 bg-playyellow/90 rounded-t-md rounded-r-md -ml-10 mr-3 hidden md:block"></div>
                            <h3 className="font-mono text-sm md:text-base font-bold text-playyellow">
                              {project.fileNumber} · {project.name}
                            </h3>
                          </div>
                          
                          {/* Status Badge */}
                          <div className="bg-green-900/20 text-green-400 text-[10px] md:text-xs font-mono px-2 py-0.5 rounded-full border border-green-800/30 uppercase tracking-wider flex items-center whitespace-nowrap">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                            {project.status}
                          </div>
                        </div>
                        
                        {/* Project Type Tag */}
                        <div className="mb-4 mt-2">
                          <span className="bg-playyellow/20 text-playyellow text-xs px-3 py-1 rounded-md border border-playyellow/10">
                            {project.tag}
                          </span>
                        </div>
                        
                        {/* Horizontal divider */}
                        <div className="h-px bg-gradient-to-r from-playyellow/50 via-white/10 to-transparent"></div>
                      </div>
                      
                      {/* Main content */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm uppercase font-bold text-playgray mb-2 flex items-center">
                            <span className="text-playyellow text-base mr-2">❓</span> Objective
                          </h4>
                          <p className="text-white">
                            {project.objective.length > 160 
                              ? project.objective.substring(0, 160) + '...' 
                              : project.objective}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm uppercase font-bold text-playgray mb-2 flex items-center">
                            <span className="text-playyellow text-base mr-2">⚙️</span> Action
                          </h4>
                          <p className="text-white">
                            {project.action.length > 160 
                              ? project.action.substring(0, 160) + '...' 
                              : project.action}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm uppercase font-bold text-playgray mb-2 flex items-center">
                            <span className="text-playyellow text-base mr-2">🎯</span> Outcome
                          </h4>
                          <p className="text-playyellow font-medium">
                            {project.outcome.length > 120
                              ? project.outcome.substring(0, 120) + '...'
                              : project.outcome}
                          </p>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                        <button className="file-open-btn inline-flex items-center bg-white/10 hover:bg-playyellow/90 hover:text-playblack text-white px-4 py-2 rounded text-sm font-medium transition-all duration-300 border border-white/5">
                          <span className="mr-2">View Project File</span> <i className='bx bx-folder-open'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA styled more like a new file/mission - positioned with more space */}
          <motion.div 
            className="text-center mt-32 mb-16 bg-white/5 backdrop-blur-sm p-12 rounded-lg border border-playyellow/10 max-w-3xl mx-auto relative"
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
            
            <h3 className="font-space text-3xl md:text-4xl font-bold mb-5">Your brand could be File 05.</h3>
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
