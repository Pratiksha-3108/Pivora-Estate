'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '@/data/showcaseProjects';
import { useEnquire } from '@/context/EnquireContext';
import {
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function ProjectsShowcase() {
  const { openEnquire } = useEnquire();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Residences', 'Commercial'];

  const filteredProjects = SHOWCASE_PROJECTS.filter((project: ShowcaseProject) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Residences') return project.configuration.includes('BHK');
    if (activeCategory === 'Commercial') return project.configuration.toLowerCase().includes('office') || project.configuration.toLowerCase().includes('commercial');
    return true;
  });

  const displayProjects = [
    ...filteredProjects,
    ...filteredProjects,
    ...filteredProjects,
  ];

  // Helper to get 1 card's width + gap for 1-by-1 card sliding
  const getSingleCardStep = () => {
    if (scrollContainerRef.current && scrollContainerRef.current.firstElementChild) {
      const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement;
      return firstCard.offsetWidth + 24; // 1 Card width + 24px gap
    }
    return 340;
  };

  // 1-Way Infinite Auto-Scroll: Moves 1 card by 1 card continuously forward
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth } = scrollContainerRef.current;
        const singleSetWidth = scrollWidth / 3;

        // If reached near the end of second set, silently reset position to first set
        if (scrollLeft >= singleSetWidth * 2) {
          scrollContainerRef.current.scrollLeft -= singleSetWidth;
        }

        const step = getSingleCardStep();
        scrollContainerRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, activeCategory]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const step = getSingleCardStep();
      scrollContainerRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      const singleSetWidth = scrollWidth / 3;

      if (scrollLeft >= singleSetWidth * 2) {
        scrollContainerRef.current.scrollLeft -= singleSetWidth;
      }

      const step = getSingleCardStep();
      scrollContainerRef.current.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="pt-[90px] pb-0 bg-[#f5f4ef] relative font-poppins text-slate-800 scroll-mt-20 border-t border-stone-200/70 select-none overflow-x-clip"
    >
      {/* Soft ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#BD7E6C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#BD7E6C]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 lg:space-y-12">

        {/* TOP SECTION HEADER & FILTERS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD7E6C] block">
              OUR PROJECTS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight">
              {"Elevate Your Business & Living Standard.".split(" ").map((word, wordIndex) => (
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
          </motion.div>

          {/* CONTROLS: CATEGORY PILLS & NAVIGATION ARROWS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 justify-between lg:justify-end">

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${activeCategory === cat
                      ? 'bg-[#BD7E6C] text-white shadow-sm font-semibold scale-[1.02]'
                      : 'bg-white border border-stone-200 text-slate-600 hover:text-slate-900 hover:border-stone-300'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider Navigation Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full bg-white border border-stone-200 text-slate-700 hover:bg-[#BD7E6C] hover:text-white hover:border-[#BD7E6C] transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full bg-white border border-stone-200 text-slate-700 hover:bg-[#BD7E6C] hover:text-white hover:border-[#BD7E6C] transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* SINGLE HORIZONTAL SLIDER CONTAINER (ALL PROJECTS IN 1 ROW) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {/* Horizontal Flex Slider showing 3 items per view on desktop without grid wrapping */}
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-6 lg:gap-8 overflow-x-auto py-3 px-2.5 snap-x snap-mandatory scroll-smooth scrollbar-none"
            >
              {displayProjects.map((project: ShowcaseProject, idx: number) => (
                <div
                  key={`${project.id}-${idx}`}
                  className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc((100%-64px)/3)] min-w-[280px]"
                >
                  <HorizontalStoryCard
                    project={project}
                    index={idx}
                    total={displayProjects.length}
                    onEnquire={openEnquire}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>



      </div>
    </section>
  );
}

// Vertical Story Card Component styled exactly like reference UI with hover reveal details
function HorizontalStoryCard({
  project,
  index,
  total,
  onEnquire,
}: {
  project: ShowcaseProject;
  index: number;
  total: number;
  onEnquire: (title?: string, defaultProjectName?: string) => void;
}) {
  return (
    <motion.div
      onClick={() => onEnquire('Project Inquiry', project.name)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full h-[490px] sm:h-[510px] rounded-[32px] overflow-hidden relative shadow-xl border border-stone-200/80 hover:border-[#BD7E6C]/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between bg-slate-900"
    >
      {/* Full Cover Background Image */}
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        priority={index < 3}
      />

      {/* Vignette Overlay (Darkens smoothly on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/10 group-hover:from-stone-950/95 group-hover:via-stone-950/60 transition-all duration-500 pointer-events-none" />

      {/* Top Header Controls inside Card (Clean view without top badges/play button) */}
      <div className="relative z-10 p-5 flex items-center justify-between" />

      {/* Bottom Card Content Overlay */}
      <div className="relative z-10 p-5 sm:p-6 pt-7 bg-gradient-to-t from-stone-950/95 via-stone-950/85 to-transparent backdrop-blur-xs text-white rounded-b-[32px] space-y-3 transition-all duration-500">

        {/* Overlapping Builder / Avatar Badge at top-right of bottom content */}
        <div className="absolute -top-6 right-5 w-12 h-12 sm:w-13 sm:h-13 rounded-full border-2 border-white shadow-xl overflow-hidden bg-stone-800 z-20 group-hover:scale-110 transition-transform duration-300">
          <Image
            src={project.image}
            alt={project.builder}
            fill
            className="object-cover"
          />
        </div>

        {/* Location & Config Pill */}
        <div className="flex items-center gap-1.5 text-xs text-[#BD7E6C] font-semibold tracking-wide">
          <MapPin className="w-3.5 h-3.5 text-[#BD7E6C] shrink-0" />
          <span className="truncate">{project.location}</span>
        </div>

        {/* Title in Serif Font */}
        <h3 className="font-serif text-xl sm:text-2xl font-medium text-white leading-snug tracking-tight drop-shadow-sm group-hover:text-[#BD7E6C] transition-colors line-clamp-1">
          {project.name}
        </h3>

        {/* HOVER REVEAL: DETAILS PANEL SLIDES OPEN ON HOVER */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">

            {/* Quote Text in Double Quotes */}
            <p className="text-xs sm:text-sm text-slate-200/90 line-clamp-2 leading-relaxed font-sans italic pt-1">
              “{project.description}”
            </p>

            {/* Pricing and Details Footer Bar */}
            <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 text-xs">
                <div>
                  <span className="text-slate-400 uppercase text-[9px] tracking-wider block font-bold">CARPET AREA</span>
                  <span className="text-white font-semibold text-[11px] sm:text-xs">{project.sizeSqft}</span>
                </div>
                <div className="h-5 w-px bg-white/20" />
                <div>
                  <span className="text-slate-400 uppercase text-[9px] tracking-wider block font-bold">STARTS AT</span>
                  <span className="text-[#BD7E6C] font-bold text-xs sm:text-sm">{project.price}</span>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEnquire(`View Details - ${project.name}`, project.name);
                }}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#BD7E6C] hover:text-white border border-white/20 text-slate-950 text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1 shrink-0 cursor-pointer shadow-md active:scale-95"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}





