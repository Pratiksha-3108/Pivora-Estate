'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

const OVERVIEW_IMAGES = [
  {
    id: 'exterior',
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=90',
    alt: 'Pivora Estates Architectural Skyscraper Exterior',
  },
  {
    id: 'interior',
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=90',
    alt: 'Pivora Estates Luxury Living Room Interior',
  },
];

export default function AboutOverview() {
  const { openEnquire } = useEnquire();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section id="about" className="py-[90px] bg-[#f5f4ef] relative overflow-hidden scroll-mt-20 select-none">
      {/* Target anchor for overview link */}
      <div id="overview" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Content Column with Smooth Slide-in From Left Animation */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            <div className="space-y-3 -mt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BD7E6C] block">
                ABOUT US
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans">
                {"Welcome To Pivora Estates".split(" ").map((word, wordIndex) => (
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

            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Step into a world where every detail is meticulously crafted. Pivora Estates offers expansive living spaces adorned with premium finishes and floor-to-ceiling windows that frame breathtaking views of Pune&apos;s skyline.
              </p>

              <p>
                Featuring 2, 3, and 4 BHK luxury residences starting at <span className="font-bold text-slate-900">₹1.19 Cr.</span> Experience unmatched elegance and a serene environment right in the heart of Hinjawadi Phase 1.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openEnquire('ENQUIRE NOW')}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#BD7E6C] hover:bg-[#a66a59] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95"
              >
                <span>ENQUIRE NOW</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>

          {/* Right Dual Overlapping Images Column (Square Shaped with Hover Zoom) */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6 sm:py-10">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square">
              
              {/* Back Image (Exterior Building) - Square Shape */}
              <div
                onMouseEnter={() => setHoveredImage(0)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setZoomedImage(OVERVIEW_IMAGES[0].src)}
                className={`absolute transition-all duration-500 ease-out cursor-pointer rounded-[3rem] overflow-hidden shadow-xl border border-white/60 group aspect-square ${
                  hoveredImage === 0
                    ? 'top-0 left-0 w-full h-full z-30 scale-105 shadow-2xl border-2 border-white'
                    : 'top-0 left-0 w-[82%] h-[82%] z-10'
                }`}
              >
                <Image
                  src={OVERVIEW_IMAGES[0].src}
                  alt={OVERVIEW_IMAGES[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 ease-out ${
                    hoveredImage === 0 ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  }`}
                  priority
                />
              </div>

              {/* Front Image (Interior Living Room) - Square Shape */}
              <div
                onMouseEnter={() => setHoveredImage(1)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setZoomedImage(OVERVIEW_IMAGES[1].src)}
                className={`absolute transition-all duration-500 ease-out cursor-pointer rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group aspect-square ${
                  hoveredImage === 1
                    ? 'bottom-0 right-0 w-full h-full z-30 scale-105 shadow-2xl'
                    : 'bottom-0 right-0 w-[78%] h-[78%] z-20'
                }`}
              >
                <Image
                  src={OVERVIEW_IMAGES[1].src}
                  alt={OVERVIEW_IMAGES[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 ease-out ${
                    hoveredImage === 1 ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  }`}
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full-Screen Zoom Lightbox Modal */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
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
            className="relative max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300"
          >
            <Image
              src={zoomedImage}
              alt="Zoomed View"
              fill
              className="object-contain bg-black/60"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}

