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
    <div className="relative">
      {/* Background Hero with scroll-linked zoom out and blur */}
      <Hero />

      {/* 100vh scroll track so Hero is fully visible initially, then zooms out as user scrolls */}
      <div className="h-screen w-full pointer-events-none" />

      {/* About section directly over the Hero - 100% transparent background so only text and image appear on hero */}
      <div className="relative z-20 min-h-screen flex items-center bg-transparent">
        <AboutOverview />
      </div>

      {/* Subsequent sections with standard #f5f4ef background */}
      <div
        id="light-content"
        className="relative z-20 bg-[#f5f4ef] rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(0,0,0,0.35)]"
      >
        <PartnerSlider />
        <ProjectsShowcase />
        <TaglineBanner />
        <ServicesSection />
        <Testimonials />
        <ConsultationCTA />
      </div>
    </div>
  );
}
