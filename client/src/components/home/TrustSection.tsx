import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
    { icon: 'bxl-spotify' },
    { icon: 'bxl-slack' },
    { icon: 'bxl-dribbble' },
    { icon: 'bxl-shopify' },
    { icon: 'bxl-airbnb' },
    { icon: 'bxl-figma' }
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
          {/* Brand logos (grayscale) */}
          {brands.map((brand, index) => (
            <motion.div 
              key={index}
              className="opacity-40 hover:opacity-80 transition-opacity"
              variants={itemVariants}
            >
              <i className={`bx ${brand.icon} text-5xl`}></i>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
