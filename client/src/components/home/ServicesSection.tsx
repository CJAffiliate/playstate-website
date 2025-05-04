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
      description: "We design landing pages and websites that perform as sharp as they look. Clean, fast, and optimised fundamentally with driving your desired results.",
      tags: ["Landing Pages", "Websites", "Sales Pages"],
      accentColor: "#3498db",
      backgroundImage: landingPageBg,
      linkUrl: "/projects"
    },
    {
      title: "Ad & Email Creative Bundles",
      description: "Done-for-you visuals and copy—scroll-stopping ads, polished UGC, and conversion-tested email flows.",
      tags: ["Static Ads", "UGC", "Email Campaigns"],
      accentColor: "#ff6b6b",
      backgroundImage: adCreativeBg,
      linkUrl: "/projects"
    },
    {
      title: "Custom Strategy & Solutions",
      description: "If you're stuck, we'll figure it out. From funnel rewires to brand repositions, we solve weird business problems.",
      tags: ["Audits", "Consulting", "Funnel Strategy"],
      accentColor: "#4ECDC4",
      backgroundImage: strategyBg,
      linkUrl: "#"
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
        
        {/* Full-width Image-based Service Cards */}
        <motion.div 
          className="grid grid-cols-1 gap-10 mb-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {serviceCards.map((card, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden h-[320px] md:h-[280px] relative group"
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
              <div className="relative z-20 h-full flex flex-col justify-between p-6 md:p-8">
                <div>
                  {/* Title */}
                  <h3 className="heading-3 font-space font-bold mb-4 text-white">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="body-text md:max-w-2xl">{card.description}</p>
                </div>
                
                {/* Service Tags in Pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {card.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-block py-1 px-4 rounded-full text-xs font-medium"
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
