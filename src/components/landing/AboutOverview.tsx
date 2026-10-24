'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, X, MapPin } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

const ABOUT_IMAGES = [
  {
    id: 'living-pavilion',
    label: 'Living Pavilion',
    src: '/assets/real_estate1.jpg',
    alt: 'Pivora Estates Luxury Living Pavilion & Architecture',
  },
];

// Smooth custom ease curve for fluid deceleration (fadeInUp)
const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: custom * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const titleWordsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const titleWordItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutOverview() {
  const { openEnquire } = useEnquire();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const activeImage = ABOUT_IMAGES[activeImageIndex];

  return (
    <section
      id="about"
      className="relative py-[50px] bg-[#f5f4ef] text-slate-900 overflow-hidden scroll-mt-20 select-none"
    >
      {/* Target anchor for overview link */}
      <div id="overview" className="scroll-mt-24" />

      {/* Subtle Luxury Ambient Radial Glow in the Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(189, 126, 108, 0.08), transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 lg:items-stretch">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-start h-full">
            {/* Top Tag: ABOUT */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={0}
              className="pt-0 mb-3 sm:mb-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD7E6C] block">
                ABOUT
              </span>
            </motion.div>

            {/* Title and Subtitle Block: Positioned directly below ABOUT */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={1}
              className="space-y-2.5 sm:space-y-3"
            >
              {/* Title: 5 stacked lines with smooth word-by-word fade-in */}
              <motion.h2
                variants={titleWordsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[36px] font-extrabold text-slate-950 tracking-tight font-sans leading-[1.05] uppercase"
              >
                {['TIMELESS', 'DESIGN', 'WELLNESS-', 'FOCUSED', 'LIVING'].map((word) => (
                  <motion.span
                    key={word}
                    variants={titleWordItem}
                    className="block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Subtitle positioned below the title as requested */}
              <p className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.18em] text-[#BD7E6C] font-semibold pt-1">
                PIVORA ESTATES <span className="text-slate-400 font-normal">•</span> <span className="text-slate-600 font-medium">HINJAWADI PHASE 1, PUNE</span>
              </p>
            </motion.div>
          </div>

          {/* ================= CENTER COLUMN (WIDER & REDUCED HEIGHT IMAGE CARD) ================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center">
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={2}
              className="relative w-full max-w-[480px] sm:max-w-[500px] lg:max-w-[520px] h-[430px] sm:h-[470px] lg:h-[510px] group"
            >
              {/* Image Card Container - Wider width, reduced height, smooth hover */}
              <div
                onClick={() => setZoomedImage(activeImage.src)}
                className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_45px_-12px_rgba(0,0,0,0.18)] transition-all duration-500 cursor-pointer bg-neutral-200"
              >
                {/* Image with subtle pan & smooth zoom on hover */}
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Decorative Subtle Shadow Reflection */}
              <div className="absolute -bottom-3 inset-x-6 h-6 bg-black/10 blur-xl rounded-full pointer-events-none" />
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN (TEXT & WEBSITE DETAILS) ================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-start h-full lg:pl-3 xl:pl-4 space-y-5 pt-0">
            
            {/* Top Paragraphs */}
            <motion.p
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={1}
              className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal"
            >
              Every element of Pivora Estates reflects a commitment to excellence. From the timeless elegance of its interiors to thoughtfully curated amenities, the property embodies a holistic approach to luxury living.
            </motion.p>

            <motion.p
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={2}
              className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal"
            >
              Whether you&apos;re seeking a serene retreat, cultural hub, or a space that fosters personal growth, Pivora Estates offers it all.
            </motion.p>

            {/* Pivora Estate Highlights Pill Grid */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={3}
              className="pt-1 space-y-2.5"
            >
              <div className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BD7E6C]" />
                <span>2, 3 &amp; 4 BHK Ultra-Luxury Residences</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BD7E6C]" />
                <span>Starting at <span className="text-[#BD7E6C] font-bold">₹1.19 Cr.</span> Onwards</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#BD7E6C]" />
                <span>Hinjawadi Phase 1, Pune</span>
              </div>
            </motion.div>

            {/* Action Button positioned right below Hinjawadi Phase 1, Pune */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={4}
              className="pt-2"
            >
              <button
                type="button"
                onClick={() => openEnquire('Welcome to Pivora Estates', 'About Us Section')}
                className="group inline-flex items-center gap-2.5 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl active:scale-95"
              >
                <span>ENQUIRE NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:rotate-45" />
              </button>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Full-Screen Zoom Lightbox Modal */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 select-none"
        >
          {/* Close button */}
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close zoomed view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Zoomed Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300"
          >
            <Image
              src={zoomedImage}
              alt="Pivora Estates View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
