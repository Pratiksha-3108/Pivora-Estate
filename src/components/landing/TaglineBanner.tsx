'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function TaglineBanner() {
  return (
    <section className="relative bg-[#f5f4ef] pb-10 sm:pb-12 lg:pb-14 pt-0 select-none overflow-hidden">
      {/* Container with exact same max-w-7xl and left/right margins & padding as above section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[140px] sm:min-h-[155px] lg:min-h-[165px] flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8 px-6 sm:px-10 lg:px-12 py-6 sm:py-7 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.18)] border border-stone-300/60 bg-stone-950">
          
          {/* Background Architectural Construction Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/skyline_banner_bg.jpg"
              alt="Skyline of Punawale - Pivora Estates"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
            {/* Dark cinematic gradient overlays for contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 via-55% to-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
            {/* Rose gold ambient accent glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(189, 126, 108, 0.18), transparent 70%)',
              }}
            />
          </div>

          {/* ONLY ONE LINE TAGLINE */}
          <div className="relative z-10 min-w-0">
            <motion.h2
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-extrabold tracking-tight text-white font-sans leading-snug whitespace-normal sm:whitespace-nowrap"
            >
              Crafting Pune&apos;s Next Iconic Living Experience.
            </motion.h2>
          </div>

          {/* CONTACT US BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            className="relative z-10 shrink-0 self-start sm:self-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-sm bg-[#BD7E6C] hover:bg-[#a66a59] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_rgba(189,126,108,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
