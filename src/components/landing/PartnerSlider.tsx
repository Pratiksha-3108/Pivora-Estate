'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WordFadeIn from '@/components/ui/WordFadeIn';

interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
}

// 8 Provided Real Estate Partner Logo Assets
const ROW_ONE_LOGOS: PartnerLogo[] = [
  { id: 'logo-1', src: '/assets/logo1.png', alt: 'Partner Developer Logo 1' },
  { id: 'logo-2', src: '/assets/logo2.webp', alt: 'Partner Developer Logo 2' },
  { id: 'logo-3', src: '/assets/logo3.webp', alt: 'Partner Developer Logo 3' },
  { id: 'logo-4', src: '/assets/logo4.webp', alt: 'Partner Developer Logo 4' },
  { id: 'logo-5', src: '/assets/logo5.webp', alt: 'Partner Developer Logo 5' },
  { id: 'logo-6', src: '/assets/logo6.webp', alt: 'Partner Developer Logo 6' },
  { id: 'logo-7', src: '/assets/logo7.webp', alt: 'Partner Developer Logo 7' },
  { id: 'logo-8', src: '/assets/logo8.webp', alt: 'Partner Developer Logo 8' },
];

const ROW_TWO_LOGOS: PartnerLogo[] = [
  { id: 'logo-8', src: '/assets/logo8.webp', alt: 'Partner Developer Logo 8' },
  { id: 'logo-9', src: '/assets/logo9.webp', alt: 'Partner Developer Logo 9' },
  { id: 'logo-10', src: '/assets/logo10.webp', alt: 'Partner Developer Logo 10' },
  { id: 'logo-11', src: '/assets/logo11.webp', alt: 'Partner Developer Logo 11' },
  { id: 'logo-12', src: '/assets/logo12.webp', alt: 'Partner Developer Logo 12' },
  { id: 'logo-13', src: '/assets/logo13.webp', alt: 'Partner Developer Logo 13' },
  { id: 'logo-14', src: '/assets/logo14.webp', alt: 'Partner Developer Logo 14' },
];

function PartnerCard({ logo }: { logo: PartnerLogo }) {
  return (
    <div
      className="shrink-0 w-[180px] sm:w-[220px] h-[75px] sm:h-[88px] mx-2.5 sm:mx-3.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl bg-white/95 hover:bg-white border border-[#eadfd9] hover:border-[#BD7E6C] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center justify-center select-none"
    >
      <div className="relative w-full h-[62px] sm:h-[74px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="(max-width: 768px) 180px, 220px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function PartnerSlider() {
  // Duplicate arrays to create continuous infinite marquee loop
  const rowOneItems = [...ROW_ONE_LOGOS, ...ROW_ONE_LOGOS, ...ROW_ONE_LOGOS];
  const rowTwoItems = [...ROW_TWO_LOGOS, ...ROW_TWO_LOGOS, ...ROW_TWO_LOGOS];

  return (
    <section className="py-[50px] bg-[#f5f4ef] relative overflow-hidden select-none">
      {/* Section Header - Matching About Us Section Exactly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mb-8 sm:mb-10">
        <div className="space-y-3 -mt-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-[#BD7E6C] block"
          >
            OUR PARTNERS
          </motion.span>

          <WordFadeIn
            text="Landmark Real Estate Giants"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans"
            delay={0.1}
            stagger={0.12}
          />
        </div>
      </div>

      {/* Marquee Tracks Container with Gradient Edge Masks scoped strictly to logos */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Edge Masks for Smooth Fade In/Out */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#f5f4ef] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#f5f4ef] to-transparent z-20" />

        {/* Marquee Track 1: Moving Towards LEFT */}
        <div className="relative w-full overflow-hidden mb-4 sm:mb-6 py-1">
          <div className="animate-marquee-left">
            {rowOneItems.map((logo, index) => (
              <PartnerCard key={`row1-${logo.id}-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Marquee Track 2: Moving Towards RIGHT */}
        <div className="relative w-full overflow-hidden py-1">
          <div className="animate-marquee-right">
            {rowTwoItems.map((logo, index) => (
              <PartnerCard key={`row2-${logo.id}-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
