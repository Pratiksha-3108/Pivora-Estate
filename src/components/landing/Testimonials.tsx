'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  bgImage: string;
  rating: number;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'From the first visit to final possession, everything was smooth and well-managed. We couldn\'t have asked for a better team.',
    author: 'Sonal Patil',
    role: 'Home Buyer',
    location: 'Pivora Elevate, Kalyani Nagar',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Pivora Estates guided us through every architectural detail. Their structural design insights and transparent guidance saved us both time and capital.',
    author: 'Rajesh & Priya Sharma',
    role: 'Penthouse Owners',
    location: 'Panchshil Sky Pent-Villas, Kharadi',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'The level of spatial intelligence and turnkey execution is unprecedented. They transformed our vision into an architectural masterpiece.',
    author: 'Ananya Deshmukh',
    role: 'Commercial Investor',
    location: 'Tower 108 Suites, Balewadi High St.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    bgImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    rating: 5,
  },
  {
    id: 'test-4',
    quote: 'Exceptional service from floorplan customization to site supervision. Pivora Estates delivered beyond our highest expectations.',
    author: 'Vikramaditya Kulkarni',
    role: 'Luxury Villa Owner',
    location: 'Supreme Villagio, Somatane',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    bgImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = TESTIMONIALS_DATA.length;
  const current = TESTIMONIALS_DATA[currentIndex];

  // Auto scrolling timer every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  return (
    <section 
      id="testimonials"
      className="relative w-full bg-[#fbf9f5] border-t border-stone-200/80 overflow-hidden font-poppins scroll-mt-20"
    >
      <div className="w-full min-h-[380px] lg:min-h-[450px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* LEFT COLUMN: TITLE, SUBTITLE & NAVIGATION CONTROLS */}
        <div className="lg:col-span-5 px-6 sm:px-10 lg:px-14 py-8 sm:py-12 lg:py-14 flex flex-col justify-center space-y-6 z-10 bg-[#fbf9f5]">
          
          <div className="space-y-4 max-w-md">
            {/* SUB-BADGE */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
              TESTIMONIALS
            </span>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight">
              {"Kind Words From Our Clients".split(" ").map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  <span
                    className="titleWord inline-block mr-[0.25em] last:mr-0"
                    style={{
                      animationDelay: `${wordIndex * 0.18}s`,
                    }}
                  >
                    {word}
                  </span>
                  {word === "Words" && <br className="hidden sm:block" />}
                </React.Fragment>
              ))}
            </h2>

            {/* SUBTITLE */}
            <p className="text-slate-600 text-sm font-normal leading-relaxed">
              Their trust drives us to keep creating better living experiences.
            </p>

            {/* CONTROLS */}
            <div className="pt-4">
              <div className="flex items-center gap-4">
                {/* PREV BUTTON */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="w-11 h-11 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-white shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                {/* NEXT BUTTON */}
                <button
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="w-11 h-11 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-white shadow-xs"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: DYNAMIC BACKGROUND IMAGE & FLOATING TESTIMONIAL CARD */}
        <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[450px] flex items-center justify-center p-5 sm:p-8 lg:p-10 overflow-hidden">
          
          {/* BACKGROUND IMAGE CAROUSEL WITH DYNAMIC CROSS-FADE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 z-0"
            >
              <img
                src={current.bgImage}
                alt={current.author}
                className="w-full h-full object-cover"
              />
              {/* Soft Gradient Overlay so floating card pops beautifully */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f5] via-slate-950/20 to-slate-950/40" />
            </motion.div>
          </AnimatePresence>

          {/* FLOATING WHITE TESTIMONIAL CARD (Matching exact reference screenshot) */}
          <div className="relative z-10 w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="bg-white/95 backdrop-blur-md rounded-[1.8rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.16)] border border-white/80 space-y-4"
              >
                {/* LARGE DOUBLE QUOTE ICON */}
                <div className="text-slate-900">
                  <Quote className="w-10 h-10 stroke-[1.5] text-slate-900 fill-slate-900/10 rotate-180" />
                </div>

                {/* QUOTE TEXT */}
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                  "{current.quote}"
                </p>

                {/* AUTHOR DETAILS & RATING */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* AVATAR */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-slate-100">
                      <img
                        src={current.avatar}
                        alt={current.author}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* NAME & ROLE */}
                    <div className="space-y-0.5">
                      <h4 className="text-base font-bold text-slate-900 font-sans tracking-tight">
                        {current.author}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {current.role}
                      </p>
                    </div>
                  </div>

                  {/* 5-STAR RATING */}
                  <div className="flex items-center gap-1 text-amber-400 shrink-0">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
