'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, X, Volume2, VolumeX } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

export default function ConsultationCTA() {
  const { openEnquire } = useEnquire();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F5F2ED] text-[#0B1B2D] border-y border-stone-300/60 select-none py-6 sm:py-8 lg:py-10">
        {/* BACKGROUND IMAGE CONTAINER */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/cta_bg.jpg"
            alt="Pivora Estates Luxury Living Room"
            fill
            sizes="100vw"
            className="object-cover object-right md:object-center"
            priority
          />
          
          {/* GRADIENT OVERLAY (Blends left cream side with living room photography) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2ED] via-[#F5F2ED]/90 md:via-[#F5F2ED]/75 to-transparent pointer-events-none w-full md:w-[70%] lg:w-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2ED] via-transparent to-transparent pointer-events-none md:hidden" />
        </div>

        {/* CONTENT CONTAINER */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* TOP 08 BADGE & TOP RIGHT OVERLAY QUOTE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* LEFT COLUMN: 08 BADGE + MAIN TEXT & BUTTONS */}
            <div className="md:col-span-8 lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* BRAND SUB-HEADING BADGE AS PER WEBSITE */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C]">
                  PREMIUM LIVING | PIVORA ESTATES
                </span>
              </div>

              {/* HEADLINE & PARAGRAPH */}
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-slate-950 tracking-tight font-sans leading-[1.18]">
                  <span className="sm:whitespace-nowrap">Discover Premium Residences</span> <br className="hidden sm:block" />
                  <span>in Pivora Estates</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg pt-1">
                  Modern architecture, prime location and a lifestyle designed for your tomorrow. Explore our exclusive residences and find the perfect place to call home.
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-2">
                {/* PRIMARY CTA: EXPLORE RESIDENCES (REDIRECTS TO CONTACT US PAGE) */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#0B1B2D] hover:bg-[#061424] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 cursor-pointer group"
                >
                  <span>EXPLORE RESIDENCES</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: TOP-RIGHT OVERLAY QUOTE (Thoughtfully designed for modern living) */}
            <div className="hidden md:flex md:col-span-4 lg:col-span-5 justify-center xl:justify-start xl:pl-6 pt-1">
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
      </section>

      {/* LUXURY ESTATE VIDEO WALKTHROUGH MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#c8816e] animate-pulse" />
                <h3 className="text-white text-sm font-semibold uppercase tracking-wider font-serif">
                  Pivora Estates — Architectural Showcase
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

            {/* VIDEO PLAYER / EMBED */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/5Peo-ivmupE?autoplay=1&rel=0&modestbranding=1"
                title="Pivora Estates Video Walkthrough"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* MODAL FOOTER */}
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

