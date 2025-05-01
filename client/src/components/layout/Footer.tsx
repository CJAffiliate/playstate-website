import { Link } from 'wouter';
import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/subscribe', { email });
      
      toast({
        title: "Success",
        description: "You've been subscribed to our newsletter!",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-playblack border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation & Branding */}
          <div>
            <Link href="/">
              <a className="font-space text-playyellow text-2xl font-bold mb-6 inline-block">
                PLAY<span className="text-white">STATE</span>
              </a>
            </Link>
            
            <div className="flex space-x-6 mb-6">
              <Link href="/">
                <a className="text-white hover:text-playyellow transition-colors">Home</a>
              </Link>
              <Link href="/projects">
                <a className="text-white hover:text-playyellow transition-colors">Projects</a>
              </Link>
              <Link href="/why-us">
                <a className="text-white hover:text-playyellow transition-colors">Why Us</a>
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="Twitter">
                <i className='bx bxl-twitter text-xl'></i>
              </a>
              <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="Instagram">
                <i className='bx bxl-instagram text-xl'></i>
              </a>
              <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="LinkedIn">
                <i className='bx bxl-linkedin text-xl'></i>
              </a>
              <a href="#" className="text-white hover:text-playyellow transition-colors" aria-label="Dribbble">
                <i className='bx bxl-dribbble text-xl'></i>
              </a>
            </div>
          </div>
          
          {/* Email Signup */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="font-space text-xl font-bold mb-4">Get Our Free Checklist</h3>
            <p className="text-playgray mb-4">6-point business fix-up checklist—free in your inbox.</p>
            
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus-glow" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <button 
                type="submit" 
                className="bg-playyellow text-playblack py-2 rounded-md font-medium hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Me the Free Checklist"}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-playgray text-sm">
          <p>Copyright PLAYSTATE © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
