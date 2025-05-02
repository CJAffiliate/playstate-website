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
      tags: ["Landing Pages", "Full Websites", "Sales Pages"],
      bgColor: "#161925",
      bgPattern: "radial-gradient(circle, rgba(255, 211, 0, 0.1) 1px, transparent 1px)",
      bgSize: "20px 20px",
      accentColor: "#3498db",
      icon: "bx-laptop"
    },
    {
      title: "Ad & Email Creative Bundles",
      description: "Done-for-you visuals and copy designed to plug straight into your campaigns.",
      details: "Whether you need scroll-stopping ad graphics, polished UGC, or conversion-tested emails—we'll design it, write it, and deliver it ready to use.",
      tags: ["Ad Creatives", "UGC Bundles", "Email Campaigns"],
      bgColor: "#1A1C2C",
      bgPattern: "linear-gradient(45deg, rgba(255, 107, 107, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 107, 107, 0.1) 75%, rgba(255, 107, 107, 0.1)), linear-gradient(-45deg, rgba(255, 107, 107, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 107, 107, 0.1) 75%, rgba(255, 107, 107, 0.1))",
      bgSize: "30px 30px",
      accentColor: "#ff6b6b",
      icon: "bx-broadcast"
    },
    {
      title: "Custom Strategy & Solutions",
      description: "Stuck on something weird? That's our favourite kind of problem.",
      details: "If your needs don't fit in a template, we'll audit, plan, and design a custom marketing fix—from funnel strategy to brand repositioning.",
      tags: ["Audit", "Consulting", "Problem Solving"],
      bgColor: "#1E293B",
      bgPattern: "linear-gradient(to right, rgba(30, 144, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 144, 255, 0.1) 1px, transparent 1px)",
      bgSize: "20px 20px",
      accentColor: "#4ECDC4",
      icon: "bx-bulb"
    }
  ];

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
        
        {/* Modern Visual Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {serviceCards.map((card, index) => (
            <motion.div 
              key={index}
              className="rounded-[20px] overflow-hidden h-[420px] md:h-[450px] relative group"
              variants={itemVariants}
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
            >
              {/* Custom Background Pattern with Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"></div>
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
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
              <div className="relative z-20 h-full flex flex-col justify-between p-8">
                <div>
                  {/* Title with accent line and icon */}
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="block w-6 h-[3px] rounded-full" 
                      style={{ backgroundColor: card.accentColor }}
                    ></span>
                    <i className={`bx ${card.icon} text-lg`} style={{ color: card.accentColor }}></i>
                  </div>
                  <h3 className="font-space text-2xl md:text-[26px] font-bold mb-3 text-white">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 mb-4">{card.description}</p>
                  
                  {/* Details (hidden on mobile for space) */}
                  <p className="text-white/80 text-sm md:text-base mb-6 hidden md:block">{card.details}</p>
                </div>
                
                {/* Service Tags in Pills */}
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-block py-1 px-4 rounded-full text-xs font-medium transition-all duration-300 group-hover:translate-y-0"
                      style={{ 
                        backgroundColor: `${card.accentColor}20`, // 20 is hex for 12% opacity
                        color: `${card.accentColor}`,
                        backdropFilter: 'blur(2px)',
                        transform: `translateY(${tagIndex * 2}px)`,
                        boxShadow: `0 2px 10px rgba(0,0,0,0.1)`,
                        border: `1px solid ${card.accentColor}30` // 30 is hex for ~18% opacity
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Horizontal callout with translucent yellow box */}
        <motion.div 
          className="mt-16 p-6 bg-playyellow/25 backdrop-blur-sm border border-playyellow/30 rounded-lg text-center shadow-lg shadow-playyellow/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            delay: 0.9
          }}
        >
          <p className="text-playblack font-space font-medium">All services include post-marketing care: optimization, updates, and scaling built-in. <span className="font-bold text-black">We grow with you.</span></p>
        </motion.div>
      </div>
    </section>
  );
}
