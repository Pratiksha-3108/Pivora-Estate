'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Footprints,
  Smile,
  Trophy,
  Waves,
  Sun,
  Target,
  ArrowUpRight
} from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

interface AmenityItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const AMENITY_ITEMS: AmenityItem[] = [
  {
    id: 'jogging-track',
    title: 'Jogging Track',
    description: 'A landscaped track planned for relaxed morning runs, evening walks, and everyday outdoor movement.',
    icon: Footprints,
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description: 'A resort-style pool zone for refreshing laps, leisure swims, and quiet downtime within the community.',
    icon: Waves,
  },
  {
    id: 'kids-play-area',
    title: 'Kids Play Area',
    description: 'A dedicated play space where children can spend active, social time in a secure residential setting.',
    icon: Smile,
  },
  {
    id: 'floating-deck',
    title: 'Floating Deck',
    description: 'An elevated leisure deck designed as a calm pause point around the outdoor amenity landscape.',
    icon: Sun,
  },
  {
    id: 'multipurpose-court',
    title: 'Multipurpose Court',
    description: 'A flexible sports court for everyday games, fitness routines, and community recreation.',
    icon: Trophy,
  },
  {
    id: 'cricket-pitch',
    title: 'Cricket Pitch',
    description: 'A community cricket pitch for practice sessions, casual matches, and weekend play.',
    icon: Target,
  },
];

export default function AmenitiesSection() {
  const { openEnquire } = useEnquire();
  // Initially null so no item has the card box open until hovered (matching reference video)
  const [activeAmenity, setActiveAmenity] = useState<string | null>(null);

  return (
    <section
      id="amenities"
      className="pt-[100px] pb-20 lg:pb-28 bg-[#faf9f5] relative font-poppins text-slate-800 scroll-mt-20 border-t border-stone-200/70 select-none overflow-hidden"
    >
      {/* DIAGONAL BACKGROUND WATERMARK (Rotated diagonally matching reference video) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.045] font-serif text-[28vw] sm:text-[24vw] lg:text-[22vw] font-extrabold text-slate-900 leading-none tracking-tighter whitespace-nowrap italic -rotate-[22deg]">
        Pivora
      </div>

      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#BD7E6C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f7e4b2]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 lg:space-y-12">

        {/* TOP SECTION BADGE & HEADER */}
        <div className="flex flex-col items-start justify-start space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#BD7E6C] block">
            AMENITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight">
            {"Thoughtfully Designed Amenities.".split(" ").map((word, wordIndex) => (
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

        {/* 3 STAGGERED COLUMNS MATCHING REFERENCE VIDEO */}
        <div
          onMouseLeave={() => setActiveAmenity(null)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14 items-start pt-4 pb-16"
        >

          {/* COLUMN 1: Jogging Track & Swimming Pool (Top aligned at Y = 0) */}
          <div className="relative space-y-6">
            <AmenityCard
              item={AMENITY_ITEMS[0]}
              isActive={activeAmenity === AMENITY_ITEMS[0].id}
              onMouseEnter={() => setActiveAmenity(AMENITY_ITEMS[0].id)}
              onClick={() => openEnquire(`AMENITY INQUIRY: ${AMENITY_ITEMS[0].title.toUpperCase()}`)}
            />
            <AmenityCard
              item={AMENITY_ITEMS[1]}
              isActive={activeAmenity === AMENITY_ITEMS[1].id}
              onMouseEnter={() => setActiveAmenity(AMENITY_ITEMS[1].id)}
              onClick={() => openEnquire(`AMENITY INQUIRY: ${AMENITY_ITEMS[1].title.toUpperCase()}`)}
            />
          </div>

          {/* COLUMN 2: Kids Play Area & Floating Deck (Staggered DOWNWARDS by ~80px) */}
          <div className="relative space-y-6 md:mt-20 lg:mt-28">
            <AmenityCard
              item={AMENITY_ITEMS[2]}
              isActive={activeAmenity === AMENITY_ITEMS[2].id}
              onMouseEnter={() => setActiveAmenity(AMENITY_ITEMS[2].id)}
              onClick={() => openEnquire(`AMENITY INQUIRY: ${AMENITY_ITEMS[2].title.toUpperCase()}`)}
            />
            <AmenityCard
              item={AMENITY_ITEMS[3]}
              isActive={activeAmenity === AMENITY_ITEMS[3].id}
              onMouseEnter={() => setActiveAmenity(AMENITY_ITEMS[3].id)}
              onClick={() => openEnquire(`AMENITY INQUIRY: ${AMENITY_ITEMS[3].title.toUpperCase()}`)}
            />
          </div>

          {/* COLUMN 3: Multipurpose Court & Cricket Pitch (Staggered FURTHER DOWNWARDS by ~160px) */}
          <div className="relative space-y-6 md:mt-40 lg:mt-56">
            <AmenityCard
              item={AMENITY_ITEMS[4]}
              isActive={activeAmenity === AMENITY_ITEMS[4].id}
              onMouseEnter={() => setActiveAmenity(AMENITY_ITEMS[4].id)}
              onClick={() => openEnquire(`AMENITY INQUIRY: ${AMENITY_ITEMS[4].title.toUpperCase()}`)}
            />
            <AmenityCard
              item={AMENITY_ITEMS[5]}
              isActive={activeAmenity === AMENITY_ITEMS[5].id}
              onMouseEnter={() => setActiveAmenity(AMENITY_ITEMS[5].id)}
              onClick={() => openEnquire(`AMENITY INQUIRY: ${AMENITY_ITEMS[5].title.toUpperCase()}`)}
            />
          </div>

        </div>



      </div>
    </section>
  );
}

// Single Amenity Card Component matching exact reference video animation and card popup
function AmenityCard({
  item,
  isActive,
  onMouseEnter,
  onClick,
}: {
  item: AmenityItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className="relative cursor-pointer group"
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`relative rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
          isActive
            ? 'bg-white border border-[#f3d999]/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20 scale-[1.01]'
            : 'bg-transparent border border-transparent z-10'
        }`}
      >
        {/* Top Line: Gray divider line in default state, transforms into bold Golden-Orange accent bar inside card when active */}
        <div
          className={`w-full transition-all duration-300 ${
            isActive
              ? 'h-[3px] bg-[#e6aa48]'
              : 'h-[1px] bg-stone-300/80'
          }`}
        />

        <div className="p-6 sm:p-7 space-y-4">
          {/* Circle Icon Badge */}
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              isActive
                ? 'bg-[#f5a623] text-white shadow-md scale-105'
                : 'bg-[#fef4db] text-slate-800'
            }`}
          >
            <Icon className="w-6 h-6 stroke-[1.8]" />
          </div>

          {/* Title & Description */}
          <div className="space-y-2 pr-6">
            <h3
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isActive ? 'text-[#c26d18]' : 'text-slate-950'
              }`}
            >
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
