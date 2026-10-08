'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
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

  // Auto-advance slider every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-slate-950 select-none">
      {/* 3-Image Background Slider with Slide-From-Right Motion */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={HERO_SLIDES[currentSlide].id}
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_SLIDES[currentSlide].image}')` }}
          />
          {/* Left-to-Right dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-slate-950/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/25 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-28 pb-10">
        {/* Main Overlay - 2 Line Tagline */}
        <div className="my-auto pt-10 sm:pt-16 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
            Where Vision Becomes <br />
            Your Address
          </h1>
        </div>

        {/* Bottom Section Layout */}
        <div className="w-full flex flex-col sm:flex-row items-end justify-between gap-6 pb-2">
          {/* Left spacing to align bottom controls */}
          <div className="hidden sm:block" />

          {/* Bottom-Right Overlay Card (Dark translucent info box) */}
          <div className="w-full sm:max-w-xl bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-3xl p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all hover:bg-white/20 hover:border-white/30">
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


