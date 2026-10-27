'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const titleWordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TITLE_WORDS = [
  { text: 'Discover', highlight: false },
  { text: 'Premium', highlight: false },
  { text: 'Residences', highlight: false },
  { text: 'in', highlight: false },
  { text: 'Pivora', highlight: true },
  { text: 'Estates', highlight: true },
];

export default function ConsultationCTA() {
  const { openEnquire } = useEnquire();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden select-none py-[50px]">
        {/* SPLIT BACKGROUND */}
        <div className="absolute inset-0 z-0 flex flex-col">
          <div className="flex-1 bg-[#f5f4ef]"></div>
          <div className="flex-1 bg-[#0c0b0a]"></div>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="max-w-6xl mx-auto py-10 sm:py-14 bg-white rounded-xl shadow-2xl relative z-10 text-[#0B1B2D] overflow-hidden">

          {/* CARD BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/cta_bg.jpg"
              alt="Pivora Estates Background"
              fill
              className="object-cover object-right md:object-center opacity-40"
              priority
            />
            {/* GRADIENT OVERLAY FOR READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          </div>

          {/* INNER CONTENT WRAPPER */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-12">
            {/* TOP 08 BADGE & TOP RIGHT OVERLAY QUOTE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

              {/* LEFT COLUMN: 08 BADGE + MAIN TEXT & BUTTONS */}
              <div className="md:col-span-8 lg:col-span-7 space-y-4 sm:space-y-5">

                {/* BRAND SUB-HEADING BADGE AS PER WEBSITE */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
                    PREMIUM LIVING | PIVORA ESTATES
                  </span>
                </motion.div>

                {/* HEADLINE & PARAGRAPH */}
                <div className="space-y-3.5 max-w-2xl">
                  <motion.h2
                    variants={titleContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-slate-950 tracking-tight font-sans leading-[1.18]"
                  >
                    {TITLE_WORDS.map((item, i) => (
                      <motion.span
                        key={`${item.text}-${i}`}
                        variants={titleWordVariants}
                        className={`inline-block mr-[0.25em] last:mr-0 ${item.highlight ? 'text-[#BD7E6C]' : 'text-slate-950'
                          }`}
                      >
                        {item.text}
                      </motion.span>
                    ))}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg pt-1"
                  >
                    Modern architecture, prime location and a lifestyle designed for your tomorrow. Explore our exclusive residences and find the perfect place to call home.
                  </motion.p>
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-2">
                  {/* PRIMARY CTA: EXPLORE RESIDENCES (REDIRECTS TO CONTACT US PAGE) */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl active:scale-95"
                  >
                    <span>EXPLORE RESIDENCES</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:rotate-45" />
                  </Link>
                </div>

              </div>

              {/* RIGHT COLUMN: TOP-RIGHT OVERLAY QUOTE (Thoughtfully designed for modern living) */}
              <div className="hidden md:flex md:col-span-4 lg:col-span-5 justify-end pr-0 xl:pr-20 pt-1">
                <div className="relative max-w-[250px]">
                  {/* QUOTE TEXT (EXACTLY 2 LINES) */}
                  <p className="font-serif italic text-[#0B1B2D] text-base sm:text-lg lg:text-[20px] leading-snug font-medium tracking-tight">
                    Thoughtfully designed <br />
                    for modern living.
                  </p>

                  {/* HORIZONTAL LINE BELOW (EQUAL LENGTH TO WORDS LINE) */}
                  <div className="w-[145px] h-[1.5px] bg-[#0B1B2D] mt-3" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* LUXURY ESTATE VIDEO WALKTHROUGH MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#c8816e] animate-pulse" />
                <h3 className="text-white text-sm font-semibold uppercase tracking-wider font-serif">
                  Pivora Estates | Architectural Showcase
                </h3>
              </div>

              <button
                onClick={() => setIsVideoOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>


            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/5Peo-ivmupE?autoplay=1&rel=0&modestbranding=1"
                title="Pivora Estates Video Walkthrough"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>


            <div className="px-6 py-4 bg-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400 border-t border-slate-800">
              <p>Experience ultra-luxury residence design & bespoke architectural spaces.</p>
              <button
                onClick={() => {
                  setIsVideoOpen(false);
                  openEnquire('PRIVATE VIEWING REQUEST');
                }}
                className="px-5 py-2 rounded-lg bg-[#c8816e] hover:bg-[#a96150] text-white font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book Private Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}