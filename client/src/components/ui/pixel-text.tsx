import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PixelTextProps {
  text: string;
  className?: string;
  children?: ReactNode;
}

export function PixelText({ text, className = "", children }: PixelTextProps) {
  // Split text into individual characters for animation
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i }
    })
  };

  const child = {
    visible: {
      opacity: [0.4, 1, 0.8, 1],
      scale: [0.8, 1.05, 0.95, 1],
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    hidden: {
      opacity: 0,
      scale: 0.8
    }
  };

  return (
    <motion.h1
      className={`pixel-text glow ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((character, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {character === ' ' ? '\u00A0' : character}
        </motion.span>
      ))}
      {children}
    </motion.h1>
  );
}
