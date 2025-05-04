import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Import SVG backgrounds
import landingPageBg from '@/assets/services/landing-page-bg.svg';
import adCreativeBg from '@/assets/services/ad-creative-bg.svg';
import strategyBg from '@/assets/services/strategy-bg.svg';

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

  // Service card data
  const serviceCards = [
    {
      title: "Websites Built to Convert",
      description: "We design landing pages and websites that perform as sharp as they look. Clean, fast, and fundamentally built to drive the results you care about - whether that's leads, sales, or trust.",
      tags: ["Landing Pages", "Websites", "Sales Pages"],
      accentColor: "#3498db",
      backgroundImage: landingPageBg,
      linkUrl: "/projects"
    },
    {
      title: "Done For You Marketing Creatives",
      description: "We don't rely on taste, we rely on data. Visual and copy driven scroll stopping ads, polished email flows, and paid media ad creatives that have and will convert.",
      tags: ["Static Ads", "Copywriting", "Email Campaigns"],
      accentColor: "#ff6b6b",
      backgroundImage: adCreativeBg,
      linkUrl: "/projects"
    },
    {
      title: "Custom Strategy & Solutions",
      description: "Not sure what's broken, or how to fix it? We'll figure it out. We help brands audit, reposition, and rebuild with clarity. From funnel rewires to all new bespoke offer strategies. No problem is too niche or weird for us to solve!",
      tags: ["Audits", "Consulting", "Funnel Strategy"],
      accentColor: "#4ECDC4",
      backgroundImage: strategyBg,
      linkUrl: "#"
    }
  ];

  // Value process steps
  const processSteps = [
    {
      icon: "🚀",
      label: "Launch",
      color: "#FFD300"
    },
    {
      icon: "🔁",
      label: "Optimize",
      color: "#FF6B6B"
    },
    {
      icon: "📈",
      label: "Scale",
      color: "#4ECDC4"
    }
  ];

  return (
    <section id="services" className="section-spacing relative bg-gradient-to-b from-playblack to-playblack/95 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-diagonal-pattern opacity-10"></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      
      <div className="container-width relative z-10 px-4" ref={ref}>
        <motion.h2 
          className="heading-2 md:heading-1 font-space font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-playyellow">Services</span>
        </motion.h2>
        
        <motion.p
          className="body-text text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We combine strategy, design, and execution to deliver high-performance marketing solutions that elevate your brand.
        </motion.p>
        
        {/* Responsive Grid of Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {serviceCards.map((card, index) => (
            <div key={index} className="relative flex">
              {/* Vertical separators */}
              {index > 0 && index < serviceCards.length && (
                <div className="hidden md:block absolute -left-px top-1/2 h-3/4 transform -translate-y-1/2 w-[1px] bg-gradient-to-b from-transparent via-playyellow/30 to-transparent">
                  <div className="absolute inset-0 blur-sm bg-playyellow/20"></div>
                </div>
              )}
              
              <motion.div 
                className="rounded-xl overflow-hidden h-full relative group w-full transition-all duration-500 ease-out transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,211,0,0.3)]"
                variants={itemVariants}
                style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 w-full h-full">
                  {/* Background image */}
                  <img 
                    src={card.backgroundImage} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/85 z-10"></div>
                </div>
                
                {/* Content Container */}
                <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-7">
                  <div>
                    {/* Title with hover underline effect */}
                    <h3 className="heading-3 font-space font-bold mb-4 text-white inline-block group-hover:text-playyellow transition-colors duration-300">
                      {card.title}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-playyellow mt-1 opacity-0 group-hover:opacity-100"></span>
                    </h3>
                    
                    {/* Description */}
                    <p className="body-text">{card.description}</p>
                  </div>
                  
                  {/* Service Tags in Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {card.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="inline-block py-1 px-3 rounded-full text-xs font-medium transition-all duration-300 hover:bg-playyellow/30 hover:border-playyellow/50"
                        style={{ 
                          backgroundColor: 'rgba(204, 204, 204, 0.15)',
                          color: '#ccc',
                          backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(204, 204, 204, 0.2)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Clickable overlay */}
                <a 
                  href={card.linkUrl}
                  className="absolute inset-0 z-30 cursor-pointer"
                  onClick={(e) => {
                    if (card.linkUrl === '#') {
                      e.preventDefault();
                      const workWithUsBtn = document.querySelector('.work-with-us-btn') as HTMLButtonElement;
                      if (workWithUsBtn) workWithUsBtn.click();
                    }
                  }}
                  aria-label={`Learn more about ${card.title}`}
                ></a>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Value-add process block */}
        <motion.div 
          className="mt-10 mb-10 py-8 bg-black/40 backdrop-blur-sm border-t border-b border-playyellow/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.2) }}
              >
                <div 
                  className="text-4xl mb-3 mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-playblack/60 border border-gray-800"
                  style={{ textShadow: `0 0 10px ${step.color}` }}
                >
                  {step.icon}
                </div>
                <h4 className="font-space font-bold text-lg text-white">{step.label}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Horizontal callout with translucent yellow box */}
        <motion.div 
          className="mt-4 p-6 bg-playyellow/20 backdrop-blur-sm border border-playyellow/30 rounded-lg text-center shadow-lg shadow-playyellow/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-white font-space font-medium mb-4">Launch is just the start. We stay hands-on with ongoing optimization, updates, and scaling strategy; because <span className="text-playyellow font-bold">growth doesn't stop at delivery.</span></p>
          <button 
            onClick={() => {
              const workWithUsBtn = document.querySelector('.work-with-us-btn') as HTMLButtonElement;
              if (workWithUsBtn) workWithUsBtn.click();
            }} 
            className="bg-playyellow text-playblack px-6 py-2 rounded-md text-sm font-medium hover:bg-white transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-playyellow focus:ring-opacity-50 mt-2"
          >
            Let's Grow Together
          </button>
        </motion.div>
      </div>
    </section>
  );
}
