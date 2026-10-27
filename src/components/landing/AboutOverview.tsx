'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { X } from 'lucide-react';

const ABOUT_IMAGES = [
  {
    id: 'living-pavilion',
    label: 'Living Pavilion',
    src: '/assets/real_estate1.jpg',
    alt: 'Pivora Estates - Premier Real Estate Channel Partner in Pune',
  },
];

const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Smooth word-by-word reveal variants with subtle blur & opacity lift
const paragraphOneContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.024,
      delayChildren: 0.15,
    },
  },
};

const paragraphTwoContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.024,
      delayChildren: 0.85,
    },
  },
};

const wordRevealVariant: Variants = {
  hidden: {
    opacity: 0.15,
    y: 4,
    filter: 'blur(3px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PARAGRAPH_ONE_TEXT =
  "At Pivora Estates, we serve as Pune's premier authorized real estate channel partner and strategic property advisory, bridging discerning homebuyers and commercial investors with the region's most reputable Grade-A developers. From luxury residential penthouses to high-yielding corporate office spaces, we curate verified developments across Pune's top growth corridors.";

const PARAGRAPH_TWO_TEXT =
  "Headquartered in Pune and representing iconic projects across Hinjawadi, Kharadi, Baner, Balewadi, and Kalyani Nagar, our expert property consultants provide transparent advisory, zero brokerage on primary acquisitions, curated site visits, and end-to-end documentation assistance — ensuring your real estate journey is seamless, informed, and rewarding.";

const PARAGRAPH_ONE_WORDS = PARAGRAPH_ONE_TEXT.split(' ');
const PARAGRAPH_TWO_WORDS = PARAGRAPH_TWO_TEXT.split(' ');

export default function AboutOverview() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const activeImage = ABOUT_IMAGES[activeImageIndex];

  return (
    <section
      id="about"
      className="relative z-20 w-full py-10 sm:py-[50px] text-white overflow-hidden scroll-mt-20 select-none bg-transparent"
    >
      {/* Target anchor for overview link */}
      <div id="overview" className="scroll-mt-24" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: OVERVIEW & NARRATIVE ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Top Tag: OVERVIEW */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={0}
            >
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
                OVERVIEW • ABOUT US
              </span>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={1}
              className="space-y-3"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif text-white font-normal leading-[1.15] tracking-tight drop-shadow-md">
                Your Trusted Partner for <span className="font-serif italic font-normal text-white">Pune&apos;s Finest Real Estate</span>
              </h2>

              <p className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.18em] text-[#BD7E6C] font-semibold">
                PIVORA ESTATES <span className="text-white/40 font-normal">•</span> <span className="text-white/80 font-medium">AUTHORISED REAL ESTATE CHANNEL PARTNER</span>
              </p>
            </motion.div>

            {/* Narrative Story Description - Displayed cleanly over the hero background */}
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={2}
              className="space-y-4 text-white/85 text-sm sm:text-base leading-relaxed font-normal drop-shadow-sm"
            >
              <motion.p
                variants={paragraphOneContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="leading-relaxed"
              >
                {PARAGRAPH_ONE_WORDS.map((word, idx) => (
                  <motion.span
                    key={`p1-${idx}`}
                    variants={wordRevealVariant}
                    className="inline-block mr-[0.28em] will-change-transform"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p
                variants={paragraphTwoContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="leading-relaxed"
              >
                {PARAGRAPH_TWO_WORDS.map((word, idx) => (
                  <motion.span
                    key={`p2-${idx}`}
                    variants={wordRevealVariant}
                    className="inline-block mr-[0.28em] will-change-transform"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>


          </div>

          {/* ================= RIGHT COLUMN: LARGE LANDSCAPE LUXURY IMAGE ================= */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              variants={fadeInUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={2}
              className="relative w-full group"
            >
              <div
                onClick={() => setZoomedImage(activeImage.src)}
                className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 cursor-pointer bg-black/40 backdrop-blur-xs"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Decorative Soft Reflection / Grounding Shadow */}
              <div className="absolute -bottom-4 inset-x-8 h-8 bg-black/40 blur-xl rounded-full pointer-events-none" />
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
