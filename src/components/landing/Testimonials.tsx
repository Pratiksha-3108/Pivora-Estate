'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Pivora Estates helped us design our new luxury residence, and the outcome exceeded all our expectations. They managed to blend our lifestyle vision with a modern aesthetic that our family loves. Highly recommended for corporate and luxury living spaces.',
    author: 'Vikram Malhotra',
    role: 'Penthouse Owner',
  },
  {
    id: 'test-2',
    quote:
      'From the initial architectural consultation to possession, everything was managed with precision and elegance. Pivora Estates delivered beyond our highest expectations, crafting a home we take pride in every single day.',
    author: 'Sonal Patil',
    role: 'Home Buyer',
  },
  {
    id: 'test-3',
    quote:
      'Pivora Estates guided us through every detail of floorplan planning and finishes. Their spatial intelligence and transparent execution saved us both time and capital while creating a stunning sanctuary.',
    author: 'Rajesh & Priya Sharma',
    role: 'Villa Owners',
  },
  {
    id: 'test-4',
    quote:
      'Exceptional service from structural design to site supervision. They transformed our vision into an architectural masterpiece with unmatched elegance and serene surroundings.',
    author: 'Ananya Deshmukh',
    role: 'Commercial Investor',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = TESTIMONIALS_DATA.length;
  const current = TESTIMONIALS_DATA[currentIndex];

  // Auto rotate slider every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(6px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(6px)',
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-[90px] bg-[#f5f4ef] relative font-poppins text-slate-800 scroll-mt-20 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* SECTION HEADER */}
        <div className="space-y-2.5 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
            WHAT OUR CLIENTS SAY
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight">
            {"Stories of Refined Living".split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="titleWord inline-block mr-[0.25em] last:mr-0"
                style={{
                  animationDelay: `${wordIndex * 0.18}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* SLIDER CONTAINER WITH OUTWARD SHIFTED SIDE ARROWS */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-5xl sm:max-w-6xl mx-auto flex items-center justify-between gap-4 sm:gap-10 lg:gap-16 min-h-[200px] px-2 sm:px-4"
        >
          {/* LEFT ARROW BUTTON - SHIFTED LEFT */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-slate-400/80 hover:border-slate-950 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-transparent shrink-0 -translate-x-1 sm:-translate-x-3 lg:-translate-x-6"
          >
            <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
          </button>

          {/* QUOTE CONTENT WITH SMOOTH DIRECTIONAL SLIDE ANIMATION */}
          <div className="flex-1 px-2 sm:px-8 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 260, damping: 28 },
                  opacity: { duration: 0.35 },
                  filter: { duration: 0.35 },
                }}
                className="space-y-6"
              >
                <p className="text-slate-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <h4 className="text-base sm:text-lg font-bold text-slate-950 font-sans tracking-tight">
                  - {current.author}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW BUTTON - SHIFTED RIGHT */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-slate-400/80 hover:border-slate-950 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-transparent shrink-0 translate-x-1 sm:translate-x-3 lg:translate-x-6"
          >
            <ChevronRight className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* BOTTOM PROGRESS BAR & SLIDE COUNTER WITH DYNAMIC TIMER ANIMATION */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4 max-w-[220px] sm:max-w-[280px] mx-auto">
          <span className="text-xs sm:text-sm font-bold text-[#BD7E6C] tracking-widest shrink-0">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>

          <div className="flex-1 h-[2.5px] bg-slate-300/80 relative rounded-full overflow-hidden">
            <motion.div
              key={`${currentIndex}-${isPaused}`}
              className="h-full bg-[#BD7E6C] rounded-full"
              initial={{ width: `${(currentIndex / total) * 100}%` }}
              animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              transition={{
                duration: isPaused ? 0.3 : 3.0,
                ease: isPaused ? 'easeOut' : 'linear',
              }}
            />
          </div>

          <span className="text-xs sm:text-sm font-bold text-slate-400 tracking-widest shrink-0">
            {String(total).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  );
}
