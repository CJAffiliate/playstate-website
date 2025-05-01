import { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import TrustSection from '@/components/home/TrustSection';
import WhyUsSection from '@/components/home/WhyUsSection';

export default function Home() {
  const [isWorkWithUsModalOpen, setIsWorkWithUsModalOpen] = useState(false);

  return (
    <>
      <HeroSection onWorkWithUsClick={() => setIsWorkWithUsModalOpen(true)} />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialSection />
      <TrustSection />
      <WhyUsSection />
    </>
  );
}
