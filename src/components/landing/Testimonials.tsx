'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Pivora Estates understood our family’s deep roots in Pune and helped us acquire a breathtaking penthouse in Kalyani Nagar. Their architectural spatial insight and transparent negotiation saved us both substantial capital and invaluable time.',
    author: 'Vikram Shinde',
    role: 'Penthouse Owner',
    location: 'Kalyani Nagar, Pune',
    avatar: '/assets/client1.jpg',
  },
  {
    id: 'test-2',
    quote:
      'From our first site visit to final registration in Baner, every milestone was executed with immaculate precision. Pivora Estates delivered complete peace of mind, finding a home that matches our cultural values and modern aspirations.',
    author: 'Snehal Kulkarni',
    role: 'Luxury Home Buyer',
    location: 'Baner - Balewadi, Pune',
    avatar: '/assets/client2.jpg',
  },
  {
    id: 'test-3',
    quote:
      'Managing high-value commercial properties across Hinjawadi requires sharp local market intelligence. Pivora Estates provided clear feasibility studies, ensuring our commercial investments yielded optimal rental returns.',
    author: 'Ajinkya Deshmukh',
    role: 'Commercial Asset Investor',
    location: 'Hinjawadi IT Park, Pune',
    avatar: '/assets/client3.jpg',
  },
  {
    id: 'test-4',
    quote:
      'Their team guided us through custom luxury floorplans and premium finishes for our private villa. They transformed our lifestyle vision into a serene architectural sanctuary with unmatched elegance.',
    author: 'Dr. Pradeep Joshi',
    role: 'Private Villa Owner',
    location: 'Balewadi High Street, Pune',
    avatar: '/assets/client4.jpg',
  },
  {
    id: 'test-5',
    quote:
      'Securing an expansive duplex residence near the EON IT corridor with private terraces seemed challenging until we partnered with Pivora. Their institutional credibility, RERA guidance, and dedication are truly exceptional.',
    author: 'Tanvi Gaikwad',
    role: 'Tech Entrepreneur & Duplex Owner',
    location: 'Kharadi Annex, Pune',
    avatar: '/assets/client5.jpg',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const total = TESTIMONIALS.length;

  // Snappy, smooth auto-slider: rotates every 2.6 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2600);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Helper to calculate circular distance offset relative to active card (-1, 0, 1)
  const getCardOffset = (index: number) => {
    let diff = (index - activeIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;
    return diff;
  };

  return (
    <section
      id="testimonials"
      className="pt-[50px] pb-10 sm:pb-14 bg-[#f5f4ef] relative font-poppins text-slate-800 scroll-mt-20 select-none overflow-hidden"
    >
      {/* Soft Ambient Glows matching website palette */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#BD7E6C]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e2be9b]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block"
          >
            SEE WHAT OUR CLIENTS HAVE TO SAY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans"
          >
            Testimonials
          </motion.h2>
        </div>

        {/* 3-CARD CAROUSEL WITH LEFT & RIGHT SLIDER CONTROLS */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-6xl mx-auto min-h-[350px] sm:min-h-[380px] flex items-center justify-center"
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Testimonial"
            className="absolute left-0 sm:-left-5 md:-left-8 lg:-left-12 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#BD7E6C] text-slate-800 hover:text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] border border-[#eadfd9] hover:border-[#BD7E6C] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Testimonial"
            className="absolute right-0 sm:-right-5 md:-right-8 lg:-right-12 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-[#BD7E6C] text-slate-800 hover:text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] border border-[#eadfd9] hover:border-[#BD7E6C] flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Deck Wrapper */}
          <div className="relative w-full h-[340px] sm:h-[365px] flex items-center justify-center">
            {TESTIMONIALS.map((item, index) => {
              const offset = getCardOffset(index);
              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Smooth continuous coordinates
              const getPositionStyles = () => {
                if (offset === 0) {
                  return {
                    x: '0%',
                    y: -24,
                    scale: 1.05,
                    zIndex: 30,
                    opacity: 1,
                  };
                }
                if (offset === -1) {
                  return {
                    x: '-70%',
                    y: 10,
                    scale: 0.9,
                    zIndex: 15,
                    opacity: 0.65,
                  };
                }
                if (offset === 1) {
                  return {
                    x: '70%',
                    y: 10,
                    scale: 0.9,
                    zIndex: 15,
                    opacity: 0.65,
                  };
                }
                if (offset < -1) {
                  return {
                    x: '-120%',
                    y: 18,
                    scale: 0.75,
                    zIndex: 1,
                    opacity: 0,
                  };
                }
                return {
                  x: '120%',
                  y: 18,
                  scale: 0.75,
                  zIndex: 1,
                  opacity: 0,
                };
              };

              const animState = getPositionStyles();

              return (
                <motion.div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  animate={animState}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24,
                    mass: 0.85,
                  }}
                  className={`absolute w-[88%] sm:w-[380px] md:w-[420px] lg:w-[450px] flex flex-col items-center select-none ${
                    !isActive ? 'cursor-pointer hover:opacity-95' : ''
                  }`}
                >
                  {/* The Testimonial Card Box */}
                  <div
                    className={`relative w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center transition-colors duration-400 flex flex-col items-center justify-between min-h-[220px] sm:min-h-[245px] ${
                      isActive
                        ? 'bg-gradient-to-br from-[#c8816e] to-[#a96150] text-white shadow-[0_24px_55px_-12px_rgba(200,129,110,0.45)] border border-[#c8816e]/40'
                        : 'bg-white text-slate-700 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.08)] border border-[#eadfd9]'
                    }`}
                  >
                    {/* Centered Large Stylized Quote Icon */}
                    <div className="mb-2 sm:mb-3">
                      <Quote
                        className={`w-9 h-9 sm:w-11 sm:h-11 mx-auto transition-colors duration-400 ${
                          isActive
                            ? 'text-white/40 fill-white/20'
                            : 'text-[#BD7E6C]/30 fill-[#BD7E6C]/10'
                        }`}
                      />
                    </div>

                    {/* Review Quote Text */}
                    <p
                      className={`text-xs sm:text-[13.5px] leading-relaxed transition-colors duration-400 font-normal ${
                        isActive ? 'text-white font-medium drop-shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    <div className="h-3 sm:h-4" />
                  </div>

                  {/* Overlapping Bottom Avatar & Author Info */}
                  <div className="flex flex-col items-center -mt-7 sm:-mt-8 z-40">
                    <div
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 transition-all duration-400 ${
                        isActive
                          ? 'border-white shadow-[0_10px_22px_rgba(200,129,110,0.4)] scale-105'
                          : 'border-white shadow-md'
                      }`}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    {/* Client Name & Details */}
                    <div className="text-center mt-2.5 sm:mt-3 space-y-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight font-sans">
                        {item.author}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-normal">
                        {item.role} &bull; {item.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
