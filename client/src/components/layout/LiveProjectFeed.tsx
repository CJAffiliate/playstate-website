import { useEffect, useState } from 'react';

// Project feed items
const feedItems = [
  '🚀 Launching GrowGuru\'s ad bundle...',
  '📈 TradeIQ funnel waitlist just passed 1,000 signups...',
  '🛠 FreshDrip creative sets in testing phase...',
  '📧 5-email welcome series deployed for SynthEx...',
  '💡 New funnel strategy underway for Project Neon...',
  '🎯 CJ approved final landing page wireframe for AltGen...'
];

export default function LiveProjectFeed() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  
  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Save user preference in localStorage
  useEffect(() => {
    if (!isVisible) {
      localStorage.setItem('hideFeed', 'true');
    }
  }, [isVisible]);
  
  // Check saved preference on load
  useEffect(() => {
    const savedPreference = localStorage.getItem('hideFeed');
    if (savedPreference === 'true') {
      setIsVisible(false);
    }
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 w-full z-50"
      style={{ height: '36px' }}
    >
      <div 
        className="flex items-center w-full h-full bg-gradient-to-r from-black to-playblack border-t border-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Label */}
        <div className="flex items-center bg-black/70 backdrop-blur-sm h-full px-3 md:px-4 border-r border-white/10 whitespace-nowrap">
          <div className="w-2 h-2 bg-playyellow rounded-full mr-2 animate-pulse"></div>
          <span className="font-mono text-xs md:text-sm text-playyellow font-bold">
            <span className="hidden sm:inline">PLAYSTATE</span> 
            <span className="inline sm:hidden">PS</span> 
            <span className="ml-1">LIVE FEED</span>
            <span className={`ml-1 ${isTyping ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
          </span>
        </div>
        
        {/* Ticker */}
        <div className="relative overflow-hidden flex-1 h-full">
          {/* Animated content */}
          <div 
            className={`ticker-track whitespace-nowrap flex items-center h-full ${isHovered ? 'ticker-paused' : ''}`}
          >
            {/* Triple the feed items to ensure smooth looping */}
            {[...feedItems, ...feedItems, ...feedItems].map((item, index) => (
              <div 
                key={index} 
                className="inline-block px-4 md:px-8 font-mono text-xs md:text-sm text-white/90"
              >
                <span className="text-playyellow/80">{item.substring(0, 2)}</span>
                <span>{item.substring(2)}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Close button */}
        <button 
          className="bg-transparent border-none flex items-center justify-center h-full w-10 text-white/50 hover:text-white transition-colors border-l border-white/10"
          onClick={() => setIsVisible(false)}
          aria-label="Close live feed"
        >
          <span className="text-lg">×</span>
        </button>
      </div>
    </div>
  );
}