import { motion } from 'framer-motion';
import { PixelText } from '@/components/ui/pixel-text';
import { ReactNode, useEffect, useRef } from 'react';

export interface FloatingIconConfig {
  iconClass: string;
  colorClass?: string;
  sizeClass?: string;
  style?: React.CSSProperties;
  delayClass?: string;
  positionClass: string; // e.g. 'absolute top-[10%] left-[15%]'
}

interface HeroSectionProps {
  heading: string;
  subheading: string;
  cta?: ReactNode;
  floatingIcons?: FloatingIconConfig[];
  pixelTextClassName?: string;
  containerClassName?: string;
}

export default function HeroSection({
  heading,
  subheading,
  cta,
  floatingIcons = [],
  pixelTextClassName = 'text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-playyellow tracking-tight sm:tracking-wider inline-block py-4 whitespace-normal font-bold',
  containerClassName = '',
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect on scroll (optional, can be removed if not needed)
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-grid');
    function handleScroll() {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      if (scrollY >= sectionTop - window.innerHeight && scrollY <= sectionTop + sectionHeight) {
        const relativeScroll = (scrollY - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight);
        parallaxElements.forEach((element) => {
          const el = element as HTMLElement;
          const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.1;
          const yPos = -(relativeScroll * speed * 100);
          el.style.transform = `translateY(${yPos}px)`;
        });
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants for floating icons
  const floatingIconsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const floatingIcon = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={sectionRef} className={`relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden hero-parallax ${containerClassName}`}>
      {/* 3D Grid Tunnel Background */}
      <div className="grid-tunnel">
        <div className="grid-lines"></div>
        <div className="grid-vertical"></div>
        <div className="grid-horizontal"></div>
        <div className="grid-tunnel-overlay"></div>
      </div>
      {/* Scanline effect */}
      <div className="scanline absolute inset-0 opacity-20 pointer-events-none z-[1]"></div>
      {/* Floating icons */}
      {floatingIcons.length > 0 && (
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none z-[2]"
          variants={floatingIconsContainer}
          initial="hidden"
          animate="visible"
        >
          {floatingIcons.map((icon, idx) => (
            <motion.div
              key={idx}
              className={`floating-icon ${icon.delayClass || ''} ${icon.positionClass} ${icon.colorClass || ''} ${icon.sizeClass || ''}`.trim()}
              style={icon.style}
              variants={floatingIcon}
            >
              <i className={icon.iconClass}></i>
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="container mx-auto px-4 text-center z-[10] space-y-8 relative">
        {/* Pixelated heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-[10]"
        >
          <PixelText 
            text={heading} 
            className={pixelTextClassName}
          />
        </motion.div>
        {/* Subheading */}
        <motion.p 
          className="font-space text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto relative z-[10] px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subheading}
        </motion.p>
        {/* CTA Button (optional) */}
        {cta && (
          <motion.div 
            className="mt-8 flex flex-col items-center relative z-[10]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {cta}
          </motion.div>
        )}
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-[10]">
        <i className='bx bx-chevron-down text-playyellow text-3xl'></i>
      </div>
    </section>
  );
} 