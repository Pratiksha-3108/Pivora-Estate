import React from 'react';
import Hero from '@/components/landing/Hero';
import AboutOverview from '@/components/landing/AboutOverview';
import PartnerSlider from '@/components/landing/PartnerSlider';
import ProjectsShowcase from '@/components/landing/ProjectsShowcase';
import TaglineBanner from '@/components/landing/TaglineBanner';
import ServicesSection from '@/components/landing/ServicesSection';
import Testimonials from '@/components/landing/Testimonials';
import ConsultationCTA from '@/components/landing/ConsultationCTA';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutOverview />
      <PartnerSlider />
      <ProjectsShowcase />
      <TaglineBanner />
      <ServicesSection />
      <Testimonials />
      <ConsultationCTA />
    </div>
  );
}
