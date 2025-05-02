import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PhoneMockupProps {
  children?: ReactNode;
  imageUrl?: string;
  className?: string;
  showNotch?: boolean;
  showButtons?: boolean;
  style?: React.CSSProperties;
  animate?: boolean;
}

export function PhoneMockup({
  children,
  imageUrl,
  className,
  showNotch = true,
  showButtons = true,
  style,
  animate = true,
}: PhoneMockupProps) {
  return (
    <motion.div 
      className={cn(
        "relative mx-auto w-[280px] h-[572px] rounded-[3rem] border-[14px] border-playblack shadow-xl",
        className
      )}
      style={style}
      initial={animate ? { y: 20, rotateY: -5, rotateX: 10 } : {}}
      animate={animate ? {
        y: [20, 0, 20],
        rotateY: [-5, 0, -5],
        rotateX: [10, 5, 10],
      } : {}}
      transition={animate ? {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      } : {}}
    >
      {/* Phone frame */}
      <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-gray-800">
        {/* Notch */}
        {showNotch && (
          <div className="absolute top-0 inset-x-0 h-6 w-full z-30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-36 bg-playblack rounded-b-3xl flex items-center justify-center">
              <div className="w-16 h-2 rounded-full bg-gray-800"></div>
            </div>
          </div>
        )}
        
        {/* Side buttons */}
        {showButtons && (
          <>
            {/* Volume buttons */}
            <div className="absolute left-[-24px] top-28 h-16 w-2.5 bg-gray-900 rounded-l-lg"></div>
            <div className="absolute left-[-24px] top-48 h-16 w-2.5 bg-gray-900 rounded-l-lg"></div>
            
            {/* Power button */}
            <div className="absolute right-[-24px] top-36 h-20 w-2.5 bg-gray-900 rounded-r-lg"></div>
          </>
        )}
        
        {/* Phone screen content */}
        <div className="relative w-full h-full z-20 overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt="App screenshot" 
              className="w-full h-full object-cover"
            />
          ) : children ? (
            children
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-gray-600 text-lg">No content</div>
            </div>
          )}
        </div>
        
        {/* Screen reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/5 to-white/10 z-20 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

export default PhoneMockup;