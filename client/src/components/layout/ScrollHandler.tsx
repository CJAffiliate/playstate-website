import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollHandler() {
  const [location] = useLocation();

  useEffect(() => {
    // Always reset scroll position on page navigation
    window.scrollTo(0, 0);

    // Only attempt to scroll to section if we're on the home page
    if (location === '/') {
      const sectionId = sessionStorage.getItem('scrollToSection');
      if (sectionId) {
        // Clear the stored section immediately to prevent re-scrolling
        sessionStorage.removeItem('scrollToSection');
        
        // Function to attempt scrolling
        const attemptScroll = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            // Calculate the offset from the top of the page
            const navbarHeight = 80; // Height of your navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            // Scroll to the element with offset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            return true;
          }
          return false;
        };

        // Try scrolling immediately
        if (!attemptScroll()) {
          // If element not found, try again after a short delay
          const retryInterval = setInterval(() => {
            if (attemptScroll()) {
              clearInterval(retryInterval);
            }
          }, 100);

          // Clear interval after 2 seconds to prevent infinite retries
          setTimeout(() => clearInterval(retryInterval), 2000);
        }
      }
    }
  }, [location]);

  return null;
} 