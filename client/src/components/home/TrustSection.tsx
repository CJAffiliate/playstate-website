import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import tradeIQLogo from '@/assets/tradeiq-logo.svg';
import greenHomePathLogo from '@/assets/greenhomepath-logo.svg';

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const brands = [
    { name: 'TradeIQ', image: tradeIQLogo, color: '#00B8D9' },
    { name: 'GreenHomePath', image: greenHomePathLogo, color: '#1F5C3D' },
    { icon: 'bxl-dribbble', color: '#EA4C89' },
    { icon: 'bxl-shopify', color: '#95BF47' },
    { icon: 'bxl-airbnb', color: '#FF5A5F' },
    { icon: 'bxl-figma', color: '#F24E1E' }
  ];

  return (
    <section className="py-16 bg-playblack" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h3 
          className="font-space text-xl text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Brands we've leveled up with
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {/* Brand logos with grayscale and hover animation */}
          {brands.map((brand, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {brand.image ? (
                <motion.img 
                  src={brand.image}
                  alt={brand.name}
                  width={40}
                  height={40}
                  className="h-12 w-auto"
                  initial={{ filter: "grayscale(100%)", opacity: 0.4 }}
                  animate={{ 
                    filter: hoveredIndex === index ? "grayscale(0%)" : "grayscale(100%)",
                    opacity: hoveredIndex === index ? 1 : 0.4,
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? [0, -5, 5, -3, 3, 0] : 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    rotate: { duration: 0.5 }
                  }}
                />
              ) : (
                <motion.i 
                  className={`bx ${brand.icon} text-5xl`}
                  initial={{ filter: "grayscale(100%)", opacity: 0.4 }}
                  animate={{ 
                    filter: hoveredIndex === index ? "grayscale(0%)" : "grayscale(100%)",
                    opacity: hoveredIndex === index ? 1 : 0.4,
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? [0, -5, 5, -3, 3, 0] : 0,
                    color: hoveredIndex === index ? brand.color : "#FFFFFF"
                  }}
                  transition={{ 
                    duration: 0.3,
                    rotate: { duration: 0.5 }
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
