'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ArrowUpRight, MapPin } from 'lucide-react';
import WordFadeIn from '@/components/ui/WordFadeIn';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '@/data/showcaseProjects';
import { useEnquire } from '@/context/EnquireContext';

interface CategoryOption {
  id: 'Residential' | 'Commercial' | 'All';
  title: string;
  tagline: string;
  description: string;
}

const CATEGORY_DATA: CategoryOption[] = [
  {
    id: 'Residential',
    title: 'Residential Spaces',
    tagline: 'Luxury Apartments & Sky Villas',
    description:
      'Tailored living spaces including luxury apartments, exclusive villas, and modern row houses designed for premier comfort and high appreciation.',
  },
  {
    id: 'Commercial',
    title: 'Commercial Properties',
    tagline: 'Corporate Towers & Retail Boulevards',
    description:
      'Grade-A corporate towers, prime high-street retail showrooms, and LEED-certified tech suites strategically situated across Pune’s highest rental-yield corridors.',
  },
  {
    id: 'All',
    title: 'All Projects',
    tagline: 'Comprehensive Portfolio',
    description:
      'Discover our complete collection of bespoke residential sanctuaries and state-of-the-art commercial hubs curated for discerning investors.',
  },
];



export default function ProjectsShowcase() {
  const { openEnquire } = useEnquire();
  const [activeCategory, setActiveCategory] = useState<'Residential' | 'Commercial' | 'All'>('Residential');
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return SHOWCASE_PROJECTS;
    return SHOWCASE_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Whenever category changes, cleanly reset carousel scroll position to start (left: 0)
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'instant' });
    }
  }, [activeCategory]);

  // Auto-scroll carousel smoothly every 3.5 seconds (pauses on hover or touch)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      const el = carouselRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;

      // When reaching or near the end, loop smoothly back to beginning
      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Step forward by 1 card (card width + 16px gap)
        const firstCard = el.firstElementChild as HTMLElement | null;
        const cardStep = firstCard ? firstCard.offsetWidth + 16 : 300;
        el.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, filteredProjects]);

  // Smooth scroll carousel with arrow buttons (scrolls by 1 card on mobile, full view on desktop)
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const firstCard = (el.querySelector('[data-project-card]') || el.firstElementChild) as HTMLElement | null;
    const cardStep = isMobile && firstCard ? firstCard.offsetWidth + 16 : el.clientWidth;

    if (direction === 'right') {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    } else {
      if (el.scrollLeft <= 20) {
        el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: -cardStep, behavior: 'smooth' });
      }
    }
  };

  const handleCategorySelect = (catId: 'Residential' | 'Commercial' | 'All') => {
    setActiveCategory(catId);
  };

  return (
    <section
      id="projects"
      className="relative bg-[#f5f4ef] text-slate-900 py-[50px] overflow-hidden scroll-mt-20 select-none"
    >
      {/* Luxury ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(189, 126, 108, 0.08), transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl space-y-2.5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-bold uppercase tracking-widest text-[#BD7E6C] block"
            >
              OUR DEVELOPMENTS
            </motion.span>

            <WordFadeIn
              text="Discover More Real Estate Options in Pune"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-sans leading-tight"
              delay={0.1}
              stagger={0.1}
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              Tailored property categories designed to match your exact investment goals and lifestyle requirements.
            </motion.p>
          </div>

          {/* Carousel Arrow Controls (Desktop / Tablet only) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:flex items-center gap-3 shrink-0 self-start sm:self-auto"
          >
            <button
              type="button"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-stone-300 bg-white hover:bg-[#BD7E6C] hover:border-[#BD7E6C] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              aria-label="Previous Projects"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>
            <button
              type="button"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-stone-300 bg-white hover:bg-[#BD7E6C] hover:border-[#BD7E6C] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              aria-label="Next Projects"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </motion.div>
        </div>

        {/* ================= MAIN CONTENT: LEFT ACCORDION & RIGHT CAROUSEL (3 FULL CARDS EDGE-TO-EDGE) ================= */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-7 items-start">
          
          {/* ----- LEFT COLUMN: ACCORDION SELECTOR ----- */}
          <div className="w-full lg:w-[280px] xl:w-[300px] shrink-0 flex flex-col gap-3.5">
            {CATEGORY_DATA.map((cat) => {
              const isExpanded = activeCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-2 border-[#BD7E6C] bg-white shadow-[0_12px_32px_-8px_rgba(189,126,108,0.22)]'
                      : 'border border-stone-200 bg-white/80 hover:bg-white hover:border-[#BD7E6C]/60 shadow-xs cursor-pointer'
                  }`}
                  onMouseEnter={() => handleCategorySelect(cat.id)}
                  onClick={() => handleCategorySelect(cat.id)}
                >
                  {/* Category Header Row */}
                  <div className="flex items-center justify-between p-5 sm:p-5.5 select-none">
                    <span
                      className={`text-base sm:text-[17px] font-bold tracking-tight transition-colors duration-200 ${
                        isExpanded ? 'text-[#BD7E6C]' : 'text-slate-800 hover:text-slate-950'
                      }`}
                    >
                      {cat.title}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isExpanded ? 'text-[#BD7E6C]' : 'text-slate-400'
                      }`}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 stroke-[2.2]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-5.5 sm:pb-5.5 pt-0">
                          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                            {cat.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ----- RIGHT COLUMN: HORIZONTAL CAROUSEL (3 FULL CARDS CLEAR & UNCUT ON DESKTOP, 1 CARD ON MOBILE) ----- */}
          <div className="w-full lg:flex-1 min-w-0 relative">
            {/* Mobile Left Arrow (Left of Card) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                scroll('left');
              }}
              className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.28)] border border-stone-200/80 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-sm"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.4]" />
            </button>

            {/* Mobile Right Arrow (Right of Card) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                scroll('right');
              }}
              className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.28)] border border-stone-200/80 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-sm"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.4]" />
            </button>

            <div
              ref={carouselRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex gap-4 sm:gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-0 scroll-smooth scroll-px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project: ShowcaseProject, index: number) => {
                  const isHovered = hoveredCardId === project.id;

                  return (
                    <motion.div
                      key={project.id}
                      data-project-card
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      onMouseEnter={() => setHoveredCardId(project.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      className="w-full min-w-full sm:min-w-0 sm:w-[290px] lg:w-[calc((100%-2rem)/3)] shrink-0 h-[370px] sm:h-[355px] lg:h-[370px] snap-start snap-always relative rounded-2xl overflow-hidden group border border-stone-200/90 hover:border-[#BD7E6C] shadow-[0_10px_25px_-8px_rgba(0,0,0,0.15)] hover:shadow-[0_18px_40px_-8px_rgba(189,126,108,0.3)] transition-all duration-500 cursor-pointer bg-stone-900 flex flex-col justify-end"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.innerWidth < 640) {
                          // On mobile, tapping anywhere on the card only toggles the info reveal, does NOT open the form
                          setHoveredCardId((prev) => (prev === project.id ? null : project.id));
                          return;
                        }
                        openEnquire(`View Details - ${project.name}`, project.name);
                      }}
                    >
                      {/* Background Project Image - Crystal clear with high quality */}
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 300px, (max-width: 1200px) 33vw, 450px"
                        quality={95}
                        priority={index < 3}
                        className={`object-cover object-center transition-transform duration-700 ease-out ${
                          isHovered ? 'scale-105' : ''
                        } group-hover:scale-105`}
                      />

                      {/* Gradient Overlay - Smooth reveal on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 pointer-events-none ${
                          isHovered
                            ? 'from-black/95 via-black/70 via-45% to-transparent'
                            : 'from-black/95 via-black/40 via-25% to-transparent'
                        } group-hover:from-black/95 group-hover:via-black/70 group-hover:via-45% group-hover:to-transparent`}
                      />

                      {/* Bottom Card Content */}
                      <div className="relative p-4 sm:p-4.5 flex flex-col justify-end text-left z-10">
                        {/* INITIALLY VISIBLE INFO (Tag, Title, Subtitle) */}
                        <span className="text-[11px] sm:text-xs font-semibold text-white/90 tracking-wide mb-1 block">
                          {project.badge || project.configuration.split(' ')[0]}
                        </span>

                        <h3 className="font-sans text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">
                          {project.name}
                        </h3>

                        <p className="text-xs sm:text-[13px] text-stone-200/90 font-normal line-clamp-1 mt-0.5">
                          {project.configuration}
                        </p>

                        {/* HOVER REVEALED INFO (Only visible after hover) */}
                        <div
                          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                            isHovered ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                          } group-hover:grid-rows-[1fr]`}
                        >
                          <div className="overflow-hidden">
                            <div
                              className={`pt-2 transition-opacity duration-300 delay-100 ${
                                isHovered ? 'opacity-100' : 'opacity-0'
                              } group-hover:opacity-100`}
                            >
                              {/* Location with MapPin Icon */}
                              <div className="flex items-center gap-1.5 text-xs text-stone-300 mt-1">
                                <MapPin className="w-3.5 h-3.5 text-[#BD7E6C] shrink-0" />
                                <span className="truncate">{project.location}</span>
                              </div>

                              {/* Description Paragraph */}
                              <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed font-normal mt-1.5 line-clamp-2">
                                {project.description}
                              </p>

                              {/* Divider Line */}
                              <div className="border-t border-white/20 my-2.5" />

                              {/* Specs Row: CARPET AREA & STARTS AT */}
                              <div className="flex items-center justify-between text-xs gap-3">
                                <div className="min-w-0">
                                  <span className="text-stone-400 uppercase text-[8.5px] tracking-wider block font-bold">
                                    CARPET AREA
                                  </span>
                                  <span className="text-white font-semibold text-[11px] sm:text-xs truncate block mt-0.5">
                                    {project.sizeSqft}
                                  </span>
                                </div>

                                <div className="h-5 w-px bg-white/25 shrink-0" />

                                <div className="min-w-0">
                                  <span className="text-stone-400 uppercase text-[8.5px] tracking-wider block font-bold">
                                    STARTS AT
                                  </span>
                                  <span className="text-[#BD7E6C] font-bold text-[11px] sm:text-xs truncate block mt-0.5">
                                    {project.price}
                                  </span>
                                </div>
                              </div>

                              {/* VIEW DETAILS Action Button */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openEnquire(`View Details - ${project.name}`, project.name);
                                }}
                                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white py-2 px-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl group/btn cursor-pointer"
                              >
                                <span>VIEW DETAILS</span>
                                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover/btn:rotate-45" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}