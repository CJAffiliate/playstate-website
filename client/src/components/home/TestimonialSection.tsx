import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/testimonial-data';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-playblack/95 to-playblack">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-space text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What Our <span className="text-playyellow">Clients Say</span>
        </motion.h2>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          {/* Mobile Phone Display */}
          <motion.div 
            className="w-full md:w-1/2 max-w-xs mx-auto md:mx-0"
            variants={itemVariants}
          >
            <div className="phone-tilt relative">
              {/* Phone frame */}
              <div className="relative mx-auto w-[280px] h-[560px] rounded-[36px] bg-black border-4 border-gray-800 overflow-hidden shadow-xl">
                {/* Phone screen content */}
                <div className="absolute inset-0 overflow-hidden bg-playblack">
                  {/* Testimonials */}
                  {testimonials.map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      className={`absolute inset-0 p-5 flex flex-col ${index === activeIndex ? 'block' : 'hidden'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === activeIndex ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-playyellow/20 flex items-center justify-center text-playyellow">
                          <i className='bx bxs-user'></i>
                        </div>
                        <div className="ml-3">
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-xs text-playgray">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex mt-4">
                        {Array(5).fill(0).map((_, i) => (
                          <i 
                            key={i} 
                            className={`bx ${i < testimonial.rating ? 'bxs-star' : i + 0.5 === testimonial.rating ? 'bxs-star-half' : 'bx-star'} text-playyellow`}
                          ></i>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-xl"></div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-playyellow' : 'bg-white/30'}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
              
              {/* Phone glow effect */}
              <div className="absolute -inset-4 bg-playyellow/10 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>
          
          {/* Testimonial highlights */}
          <div className="w-full md:w-1/2 space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                variants={itemVariants}
              >
                <div className="flex items-start">
                  <i className='bx bxs-quote-alt-left text-playyellow text-4xl mr-4'></i>
                  <div>
                    <p className="italic mb-3">"{testimonial.highlight}"</p>
                    <p className="font-bold">{testimonial.name}, <span className="text-playgray font-normal">{testimonial.company}</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
