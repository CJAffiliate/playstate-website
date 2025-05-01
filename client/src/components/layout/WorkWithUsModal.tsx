import { useState } from 'react';
import { motion } from 'framer-motion';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface WorkWithUsModalProps {
  onClose: () => void;
}

export default function WorkWithUsModal({ onClose }: WorkWithUsModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.projectType || !formData.budget || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/work-with-us', formData);
      
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you with next steps."
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div 
        className="bg-playblack border border-playyellow/30 rounded-lg shadow-2xl w-full max-w-md mx-4 overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-space text-2xl font-bold text-playyellow">Work With Us</h3>
            <button 
              className="text-white hover:text-playyellow"
              onClick={onClose}
              aria-label="Close"
            >
              <i className='bx bx-x text-2xl'></i>
            </button>
          </div>
          
          <p className="text-white mb-6">Tell us about your project and let's start building your custom marketing solution.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus-glow" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus-glow" 
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm mb-1">Project Type</label>
                <select 
                  id="projectType" 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus-glow"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="ad-creative">Ad Creative</option>
                  <option value="email-campaign">Email Campaign</option>
                  <option value="full-rebrand">Full Rebrand</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm mb-1">Budget Range</label>
                <select 
                  id="budget" 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus-glow"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your budget range</option>
                  <option value="0-5k">$0 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus-glow" 
                  placeholder="Tell us about your project goals and timeline"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-playyellow text-playblack py-3 rounded-md font-medium hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
