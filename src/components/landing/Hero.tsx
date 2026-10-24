'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/assets/real_estate1.jpg',
  },
  {
    id: 2,
    image: '/assets/real_estate2.jpg',
  },
  {
    id: 3,
    image: '/assets/real_estate5.webp',
  },
];

// 'random'    -> top or bottom randomly (like the video)
// 'alternate' -> bottom, top, bottom, top ...
// 'bottom'    -> always rises from the bottom
type DirectionMode = 'random' | 'alternate' | 'bottom';
const DIRECTION_MODE: DirectionMode = 'random';

// ---- Two-stage flip timing (seconds) - FAST but smooth ----
const DARK_DURATION = 0.5; // flip #1: dark layer sweeps across
const BRIGHT_DELAY = 0.4; // flip #2 starts right after
const BRIGHT_DURATION = 0.5; // flip #2: bright layer sweeps across
const WASH_DELAY = 0.75; // white wash starts fading as bright layer lands
const WASH_DURATION = 0.5; // wash fades to real colors
const TOTAL_LOCK = WASH_DELAY + WASH_DURATION; // ~1.25s, block clicks until done

// Quick start, soft landing
const EASE: [number, number, number, number] = [0.7, 0, 0.2, 1];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null); // old slide stays underneath
  const [dir, setDir] = useState<1 | -1>(1); // 1 = from bottom (up), -1 = from top (down)
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const lastChange = useRef(0);
  const lastDir = useRef<1 | -1>(-1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const pickDirection = (): 1 | -1 => {
    if (DIRECTION_MODE === 'bottom') return 1;
    if (DIRECTION_MODE === 'alternate') {
      const d: 1 | -1 = lastDir.current === 1 ? -1 : 1;
      lastDir.current = d;
      return d;
    }
    return Math.random() < 0.5 ? 1 : -1;
  };

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (Date.now() - lastChange.current < TOTAL_LOCK * 1000) return;
      lastChange.current = Date.now();
      setCurrent((curr) => {
        const nextIndex = (curr + 1) % HERO_SLIDES.length;
        setPrev(curr);
        setDir(pickDirection());
        return nextIndex;
      });
    }, 5500);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const go = useCallback(
    (index: number) => {
      if (Date.now() - lastChange.current < TOTAL_LOCK * 1000) return;
      lastChange.current = Date.now();
      setPrev(current);
      setDir(pickDirection());
      setCurrent(index);
      resetTimer();
    },
    [current, resetTimer]
  );

  const next = useCallback(() => {
    go((current + 1) % HERO_SLIDES.length);
  }, [go, current]);

  const prevSlide = useCallback(() => {
    go((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [go, current]);

  const slide = HERO_SLIDES[current];
  const startY = dir === 1 ? '100%' : '-100%';
  const transitioning = prev !== null;

  return (
    <section
      className="relative w-full h-screen min-h-[660px] overflow-hidden bg-slate-950 select-none"
    >
      {/* LAYER 0: OLD slide stays still underneath */}
      {transitioning && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_SLIDES[prev as number].image}')` }}
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      )}

      {/* LAYER 1 (flip #1): DARK night-toned copy of the new image */}
      {transitioning && (
        <motion.div
          key={`dark-${slide.id}-${current}`}
          initial={{ y: startY }}
          animate={{ y: '0%' }}
          transition={{ duration: DARK_DURATION, ease: EASE }}
          className="absolute inset-0 z-[1] overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-[#0e2a36]/80" />
        </motion.div>
      )}

      {/* LAYER 2 (flip #2): BRIGHT washed-out copy, then fades to real colors.
          This is also the final, permanent slide. */}
      <motion.div
        key={`slide-${slide.id}-${current}`}
        initial={transitioning ? { y: startY } : false}
        animate={{ y: '0%' }}
        transition={{ duration: BRIGHT_DURATION, delay: BRIGHT_DELAY, ease: EASE }}
        onAnimationComplete={() => setPrev(null)}
        className="absolute inset-0 z-[2] overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.0 }}
          transition={{
            duration: 1.2,
            delay: transitioning ? BRIGHT_DELAY : 0,
            ease: 'easeOut',
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slide.image}')` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* White wash: starts almost white, fades to reveal true colors */}
        <motion.div
          initial={transitioning ? { opacity: 0.8 } : false}
          animate={{ opacity: 0 }}
          transition={{ duration: WASH_DURATION, delay: WASH_DELAY, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#e8f1f8] pointer-events-none"
        />
      </motion.div>

      {/* Soft dark strip behind the navbar */}
      <div className="absolute inset-x-0 top-0 h-40 z-[3] bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Persistent 2-line tagline */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl pt-16"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.12] tracking-tight drop-shadow-2xl">
            <span className="block">Where Vision Becomes</span>
            <span className="block">Your Address</span>
          </h1>
        </motion.div>
      </div>

      {/* Left / Right arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#BD7E6C] hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#BD7E6C] hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => go(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current
                ? 'w-7 bg-[#BD7E6C]'
                : 'w-2 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Bottom-right project info card */}
      <div className="absolute z-10 bottom-6 right-4 sm:right-16 left-4 sm:left-auto sm:w-[26rem]">
        <div className="bg-black/40 backdrop-blur-md border border-white/20 text-white rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <h2 className="text-lg sm:text-xl font-serif font-bold tracking-wide uppercase">
            PIVORA ESTATES
          </h2>
          <p className="text-xs text-slate-300 font-medium mt-0.5">Mundhwa, Pune</p>
          <div className="my-3 h-px w-full bg-white/20" />
          <div className="grid grid-cols-3 gap-3">
            <p className="text-[10px] font-bold tracking-wider uppercase">INR 1.70 CR. ONWARDS</p>
            <p className="border-l border-white/20 pl-3 text-[10px] font-bold tracking-wider uppercase">
              POSSESSION MAY 2032
            </p>
            <p className="border-l border-white/20 pl-3 text-[10px] font-bold tracking-wider uppercase">
              2, 3 &amp; 4 BHK
            </p>
          </div>
        </div>
      </div>

      {/* Floating bottom-left action buttons with Pop-Up Effect */}
      <div className="fixed bottom-6 left-3 sm:left-5 z-40 flex flex-col items-start gap-3">
        {/* Call button */}
        <a
          href="tel:+919876543210"
          aria-label="Call Us"
          className="group relative w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all border border-slate-200"
        >
          <Phone className="w-5 h-5 text-slate-800 transition-transform group-hover:rotate-12" />
          <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            +91-987 654 3210
          </span>
        </a>

        {/* WhatsApp with Pop-Up Effect */}
        <div className="relative">
          {/* Interactive Pop-Up Chat Window with reduced radius */}
          {showWhatsAppPopup && (
            <div className="absolute bottom-20 left-0 w-80 max-w-[calc(100vw-32px)] bg-white rounded-md shadow-2xl border border-stone-200/90 p-4 text-slate-800 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                    PE
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Pivora Estates VIP</h4>
                    <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Online | Replies instantly
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="p-1 rounded-sm text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message Bubble */}
              <div className="py-3 text-xs leading-relaxed text-slate-600 space-y-1.5">
                <p className="bg-stone-100 p-2.5 rounded-sm text-slate-700">
                  👋 Hello! Welcome to Pivora Estates. Looking for floor plans, pricing, or an exclusive site visit in Hinjawadi, Pune?
                </p>
              </div>

              {/* Action Button */}
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20Pivora%20Estates%20residences."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          )}

          {/* Continuous Radar Pulse Ping Ring */}
          <span className="absolute inset-1 rounded-full bg-emerald-500/35 animate-ping pointer-events-none" />

          {/* WhatsApp Trigger Button */}
          <button
            type="button"
            onClick={() => setShowWhatsAppPopup(!showWhatsAppPopup)}
            aria-label="Contact on WhatsApp"
            className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:scale-115 active:scale-90 transition-all duration-300 drop-shadow-2xl cursor-pointer"
          >
            <Image
              src="/assets/whatsapp-logo-icon-isolated-on-transparent-background-free-png.webp"
              alt="WhatsApp"
              width={64}
              height={64}
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </button>
        </div>
      </div>
    </section>
  );
}