import React from 'react';
import Hero from '@/components/landing/Hero';
import AboutOverview from '@/components/landing/AboutOverview';
import OverviewStats from '@/components/landing/OverviewStats';
import ProjectsShowcase from '@/components/landing/ProjectsShowcase';
import AmenitiesSection from '@/components/landing/AmenitiesSection';
import ServicesSection from '@/components/landing/ServicesSection';
import Testimonials from '@/components/landing/Testimonials';
import ConsultationCTA from '@/components/landing/ConsultationCTA';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutOverview />
      <OverviewStats />
      <ProjectsShowcase />
      <AmenitiesSection />
      <ServicesSection />
      <Testimonials />
      <ConsultationCTA />
    </div>
  );
}




