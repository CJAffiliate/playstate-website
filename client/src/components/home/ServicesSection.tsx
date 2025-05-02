import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
      title: "Landing Page & Website Builds",
      description: "Conversion-first web builds designed to make your brand look legit and generate more leads.",
      details: "We design and build modern, mobile-optimized pages—like this one—that make visitors stop scrolling and start converting.",
      tags: ["Conversion-Focused", "Mobile-First", "Custom Built"],
      bgColor: "#131A2A",
      bgPattern: "radial-gradient(circle, rgba(255, 211, 0, 0.08) 1px, transparent 1px)",
      bgSize: "20px 20px",
      accentColor: "#3498db",
      icon: "bx-laptop",
      cta: "See Examples",
      ctaLink: "/projects"
    },
    {
      title: "Ad & Email Creative Bundles",
      description: "Done-for-you visuals and copy designed to plug straight into your campaigns.",
      details: "Whether you need scroll-stopping ad graphics, polished UGC, or conversion-tested emails—we'll design it, write it, and deliver it ready to use.",
      tags: ["Static Ads", "Email Copy", "UGC Sets"],
      bgColor: "#131825",
      bgPattern: "linear-gradient(45deg, rgba(255, 107, 107, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 107, 107, 0.05) 75%, rgba(255, 107, 107, 0.05)), linear-gradient(-45deg, rgba(255, 107, 107, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 107, 107, 0.05) 75%, rgba(255, 107, 107, 0.05))",
      bgSize: "30px 30px",
      accentColor: "#ff6b6b",
      icon: "bx-broadcast",
      cta: "View Ad Bundles",
      ctaLink: "/projects"
    },
    {
      title: "Custom Strategy & Solutions",
      description: "Stuck on something weird? That's our favourite kind of problem.",
      details: "If your needs don't fit in a template, we'll audit, plan, and design a custom marketing fix—from funnel strategy to brand repositioning.",
      tags: ["Audits", "Consulting", "Funnel Design"],
      bgColor: "#1A1F2E",
      bgPattern: "linear-gradient(to right, rgba(30, 144, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 144, 255, 0.05) 1px, transparent 1px)",
      bgSize: "20px 20px",
      accentColor: "#4ECDC4",
      icon: "bx-bulb",
      cta: "Book a Strategy Call",
      ctaLink: "#"
    }
  ];

  // Animation for icon hover effect
  const iconAnimation = {
    rest: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: { 
      scale: 1.15,
      opacity: 1,
      y: -3,
      filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-playblack to-playblack/95">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-space text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-playyellow">Services</span>
        </motion.h2>
        
        <motion.p
          className="text-playgray text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We combine strategy, design, and execution to deliver high-performance marketing solutions that elevate your brand.
        </motion.p>
        
        {/* Premium Visual Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {serviceCards.map((card, index) => (
            <motion.div 
              key={index}
              className="rounded-[20px] overflow-hidden h-auto md:h-[520px] relative group"
              variants={itemVariants}
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Custom Background Pattern with Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-10"></div>
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{ 
                    backgroundColor: card.bgColor,
                    backgroundImage: card.bgPattern,
                    backgroundSize: card.bgSize,
                  }}
                ></div>
                {/* Glowing accent elements */}
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl" 
                  style={{ background: `radial-gradient(circle, ${card.accentColor} 0%, transparent 70%)` }}></div>
                <div className="absolute top-20 -left-10 w-40 h-40 rounded-full opacity-10 blur-2xl" 
                  style={{ background: `radial-gradient(circle, ${card.accentColor} 0%, transparent 70%)` }}></div>
              </div>
              
              {/* Content Container */}
              <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-10">
                <div>
                  {/* Title with accent line and animated icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <span 
                      className="block w-8 h-[3px] rounded-full" 
                      style={{ backgroundColor: card.accentColor }}
                    ></span>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <motion.i 
                        className={`bx ${card.icon} text-2xl`} 
                        variants={iconAnimation}
                        style={{ color: card.accentColor }}
                      ></motion.i>
                    </motion.div>
                  </div>
                  
                  <h3 className="font-space text-2xl md:text-[28px] font-bold mb-5 text-white leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#cccccc] mb-5 text-lg">{card.description}</p>
                  
                  {/* Details (hidden on mobile for space) */}
                  <p className="text-[#aaaaaa] text-sm md:text-base mb-8 hidden md:block leading-relaxed">{card.details}</p>
                </div>
                
                <div className="space-y-5">
                  {/* Service Tags in Pills */}
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="inline-block py-1 px-4 rounded-full text-xs font-medium transition-all duration-300 group-hover:translate-y-0"
                        style={{ 
                          backgroundColor: `${card.accentColor}15`, // 15 is hex for 8% opacity
                          color: `${card.accentColor}ee`, // ee is hex for 93% opacity
                          backdropFilter: 'blur(4px)',
                          transform: `translateY(${tagIndex * 2}px)`,
                          boxShadow: `0 2px 10px rgba(0,0,0,0.12)`,
                          border: `1px solid ${card.accentColor}25` // 25 is hex for ~15% opacity
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Link */}
                  <div className="pt-2">
                    <a 
                      href={card.ctaLink}
                      className="inline-flex items-center group/cta"
                      onClick={(e) => {
                        if (card.ctaLink === '#') {
                          e.preventDefault();
                          // Here we could add contact form opening logic
                          const workWithUsBtn = document.querySelector('.work-with-us-btn') as HTMLButtonElement;
                          if (workWithUsBtn) workWithUsBtn.click();
                        }
                      }}
                    >
                      <span 
                        className="text-sm font-medium transition-all duration-300 mr-1 group-hover/cta:mr-2"
                        style={{ color: card.accentColor }}
                      >
                        {card.cta}
                      </span>
                      <i 
                        className="bx bx-right-arrow-alt text-lg transition-transform duration-300 transform group-hover/cta:translate-x-1"
                        style={{ color: card.accentColor }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Horizontal callout with translucent yellow box */}
        <motion.div 
          className="mt-16 p-6 bg-playyellow/20 backdrop-blur-sm border border-playyellow/30 rounded-lg text-center shadow-lg shadow-playyellow/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.9
          }}
        >
          <p className="text-white font-space font-medium">All services include post-marketing care: optimization, updates, and scaling built-in. <span className="font-bold text-playyellow">We grow with you.</span></p>
        </motion.div>
      </div>
    </section>
  );
}
