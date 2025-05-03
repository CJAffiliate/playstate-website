import { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudySection from '@/components/home/CaseStudySection';
import TrustSection from '@/components/home/TrustSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import WorkWithUsModal from '@/components/layout/WorkWithUsModal';

export default function Home() {
  const [isWorkWithUsModalOpen, setIsWorkWithUsModalOpen] = useState(false);

  return (
    <>
      <HeroSection onWorkWithUsClick={() => setIsWorkWithUsModalOpen(true)} />
      <ServicesSection />
      <CaseStudySection />
      <TrustSection />
      <WhyUsSection />
      {isWorkWithUsModalOpen && (
        <WorkWithUsModal onClose={() => setIsWorkWithUsModalOpen(false)} />
      )}
    </>
  );
}
