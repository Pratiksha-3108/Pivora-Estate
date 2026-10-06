'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Download } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
    title: 'TIMELESS RESIDENCES',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=90',
    title: 'TIMELESS RESIDENCES',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
    title: 'TIMELESS RESIDENCES',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openEnquire } = useEnquire();

  // Auto-advance slider every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-slate-950 select-none">
      {/* 3-Image Background Slider */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-0 scale-100' : 'opacity-0 -z-10 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Subtle gradient overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-28 pb-10">
        {/* Main Overlay - Single Sentence Headline */}
        <div className="my-auto pt-10 sm:pt-16 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-semibold text-white tracking-tight leading-[1.05] drop-shadow-2xl">
            TIMELESS <br />
            RESIDENCES
          </h1>
        </div>

        {/* Bottom Section Layout */}
        <div className="w-full flex flex-col sm:flex-row items-end justify-between gap-6 pb-2">
          {/* Left spacing to align bottom controls */}
          <div className="hidden sm:block" />

          {/* Bottom-Right Overlay Card (Dark translucent info box) */}
          <div className="w-full sm:max-w-xl bg-[#23211f]/85 backdrop-blur-xl border border-white/10 text-white rounded-3xl p-6 sm:p-7 shadow-2xl transition-all hover:bg-[#23211f]/95">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-wide uppercase text-white">
                PIVORA ESTATES
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Mundhwa, Pune
              </p>
            </div>

            <div className="my-4 h-[1px] w-full bg-white/15" />

            <div className="grid grid-cols-3 gap-3 text-center sm:text-left">
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white/90 uppercase">
                  INR 1.70 CR. ONWARDS
                </p>
              </div>
              <div className="border-l border-white/15 pl-3">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white/90 uppercase">
                  POSSESSION MAY 2032
                </p>
              </div>
              <div className="border-l border-white/15 pl-3">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white/90 uppercase">
                  2, 3 & 4 BHK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Sticky Right Badge: DOWNLOAD BROCHURE */}
      <button
        onClick={() => openEnquire('DOWNLOAD BROCHURE')}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-white text-slate-900 border border-slate-200/80 shadow-2xl rounded-l-2xl py-6 px-3 flex flex-col items-center gap-3 cursor-pointer hover:bg-slate-900 hover:text-white transition-all group"
      >
        <Download className="w-4 h-4 text-[#c8816e] group-hover:text-white transition-colors" />
        <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-bold tracking-[0.25em] uppercase">
          DOWNLOAD BROCHURE
        </span>
      </button>

      {/* Floating Bottom-Left Action Buttons */}
      <div className="fixed bottom-6 left-1 sm:left-2 z-40 flex flex-col items-center gap-3">
        {/* Call Icon Button */}
        <a
          href="tel:+919876543210"
          aria-label="Call Us"
          className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all border border-slate-200"
        >
          <Phone className="w-5 h-5 text-slate-800" />
        </a>

        {/* WhatsApp Icon Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:scale-110 active:scale-95 transition-all drop-shadow-xl"
        >
          <Image
            src="/assets/whatsapp-logo-icon-isolated-on-transparent-background-free-png.webp"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </a>
      </div>

    </section>
  );
}


