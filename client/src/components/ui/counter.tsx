import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function Counter({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  decimals = 0 
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const startTime = useRef<number | null>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;
    
    const startAnimation = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const timeProgress = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for a more natural count effect
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(timeProgress);
      
      setCount(easedProgress * end);
      
      if (timeProgress < 1) {
        frameId.current = requestAnimationFrame(startAnimation);
      }
    };
    
    frameId.current = requestAnimationFrame(startAnimation);
    
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [isInView, end, duration]);

  const formatNumber = (num: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return formatter.format(num);
  };

  return (
    <span ref={ref}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}

interface CountUpProps {
  value: string | number;
  className?: string;
}

export default function CountUp({ value, className = "" }: CountUpProps) {
  // Parse the value based on its format
  const parseValue = () => {
    const numberStr = String(value).replace(/[^0-9.]/g, '');
    const number = parseFloat(numberStr);
    
    let prefix = '';
    let suffix = '';
    let decimals = 0;
    
    if (String(value).includes('%')) {
      suffix = '%';
    }
    if (String(value).includes('X')) {
      suffix = 'X';
    }
    if (String(value).includes('$')) {
      prefix = '$';
    }
    if (String(value).includes('.')) {
      decimals = String(value).split('.')[1].length;
    }
    
    return { number, prefix, suffix, decimals };
  };
  
  const { number, prefix, suffix, decimals } = parseValue();
  
  return (
    <span className={className}>
      <Counter 
        end={number} 
        prefix={prefix} 
        suffix={suffix} 
        decimals={decimals} 
      />
    </span>
  );
}