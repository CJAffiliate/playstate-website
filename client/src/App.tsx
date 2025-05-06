import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import WhyUs from "@/pages/WhyUs";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/layout/ContactForm";
import WorkWithUsModal from "@/components/layout/WorkWithUsModal";
import LiveProjectFeed from "@/components/layout/LiveProjectFeed";
import ScrollHandler from '@/components/layout/ScrollHandler';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/why-us" component={WhyUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isWorkWithUsModalOpen, setIsWorkWithUsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollHandler />
        <div className="relative overflow-x-hidden">
          <Navbar 
            onWorkWithUsClick={() => setIsWorkWithUsModalOpen(true)} 
            onMenuOpenChange={setIsMobileMenuOpen}
          />
          <main className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
            <Router />
          </main>
          <Footer />
          
          {/* Floating Contact Button */}
          {!isMobileMenuOpen && (
            <div className="fixed bottom-6 right-6 z-50">
              <button 
                className="bg-playyellow text-playblack w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-playyellow focus:ring-opacity-50"
                onClick={() => setIsContactFormOpen(true)}
              >
                <i className="bx bx-message-detail text-2xl"></i>
              </button>
            </div>
          )}

          {/* Contact Form */}
          <AnimatePresence>
            {isContactFormOpen && (
              <ContactForm onClose={() => setIsContactFormOpen(false)} />
            )}
          </AnimatePresence>

          {/* Work With Us Modal */}
          <AnimatePresence>
            {isWorkWithUsModalOpen && (
              <WorkWithUsModal onClose={() => setIsWorkWithUsModalOpen(false)} />
            )}
          </AnimatePresence>
          
          {/* Live Project Feed */}
          <LiveProjectFeed />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
