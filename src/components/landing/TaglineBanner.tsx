'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CHEVRON_IMAGES = [
  {
    id: 'vision',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional woman observing urban city architecture'
  },
  {
    id: 'sanctuary',
    src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunlit modern master bedroom suite'
  },
  {
    id: 'lifestyle',
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Executive living lounge with designer chair and lighting'
  },
  {
    id: 'legacy',
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Distinguished executive gentleman looking ahead'
  }
];

export default function TaglineBanner() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SINGLE TAGLINE: ONLY 'This isn’t just about real estate.' (No title, no subtitle content) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight font-sans text-slate-950 leading-tight"
          >
            This isn’t just{' '}
            <span className="font-normal text-slate-400">about real estate.</span>
          </motion.h2>
        </div>

        {/* CHEVRON ARROW PHOTO BANNER: Exact shape and clean display matching reference UI */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-5xl lg:max-w-6xl mx-auto"
        >
          <div className="chevron-banner-container flex items-center justify-center w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px]">
            {CHEVRON_IMAGES.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="chevron-slice relative flex-1 h-full overflow-hidden group cursor-pointer transition-transform duration-500 hover:brightness-105"
                  style={{
                    marginLeft: index === 0 ? '0px' : 'var(--overlap)',
                    zIndex: index + 1,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 300px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index < 2}
                  />

                  {/* Subtle lighting overlay for photo depth */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
