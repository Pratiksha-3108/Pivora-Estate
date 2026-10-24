'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '@/data/showcaseProjects';
import { useEnquire } from '@/context/EnquireContext';
import { MapPin, ArrowUpRight } from 'lucide-react';
import WordFadeIn from '@/components/ui/WordFadeIn';

/* ------------------------------------------------------------------ */
/*  CONFIG                                                             */
/* ------------------------------------------------------------------ */
const ACCENT = '#BD7E6C';
const SCROLL_PER_PROJECT_VH = 70; // how much scrolling each project takes

const CATEGORIES = ['All', 'Residential', 'Commercial'];

const STRIPES = 8; // number of horizontal blinds
const STRIPE_DURATION = 0.65;
const STRIPE_STAGGER = 0.055;

/* ------------------------------------------------------------------ */
/*  BLINDS IMAGE COMPONENT (DIRECTIONAL: FROM TOP OR FROM BOTTOM)     */
/* ------------------------------------------------------------------ */
function BlindsImage({
  src,
  alt,
  direction = 'from-bottom',
  className = '',
  imageClassName = '',
}: {
  src: string;
  alt: string;
  direction?: 'from-top' | 'from-bottom';
  className?: string;
  imageClassName?: string;
}) {
  const [base, setBase] = useState<string>(src);

  useEffect(() => {
    if (src === base) return;
    const total = (STRIPE_DURATION + STRIPE_STAGGER * STRIPES) * 1000 + 80;
    const t = setTimeout(() => setBase(src), total);
    return () => clearTimeout(t);
  }, [src, base]);

  const h = 100 / STRIPES;

  return (
    <div className={`absolute inset-0 overflow-hidden bg-stone-900 ${className}`}>
      {/* Base (previous) image */}
      <Image
        src={base}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 80vw, 40vw"
        className={`object-cover ${imageClassName}`}
        priority
      />

      {/* Incoming image, revealed stripe by stripe in the requested direction */}
      {src !== base &&
        Array.from({ length: STRIPES }).map((_, i) => {
          const top = i * h;
          const delay =
            direction === 'from-bottom'
              ? (STRIPES - 1 - i) * STRIPE_STAGGER
              : i * STRIPE_STAGGER;

          // If from-bottom: each stripe wipes upward
          // If from-top: each stripe wipes downward
          const initialClip =
            direction === 'from-bottom'
              ? `inset(${top + h}% 0% ${100 - top - h}% 0%)`
              : `inset(${top}% 0% ${100 - top}% 0%)`;

          return (
            <motion.div
              key={`${src}-${i}`}
              className="absolute inset-0"
              initial={{ clipPath: initialClip }}
              animate={{
                clipPath: `inset(${top - 0.15}% 0% ${100 - top - h - 0.15}% 0%)`,
              }}
              transition={{
                duration: STRIPE_DURATION,
                delay,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className={`object-cover ${imageClassName}`}
              />
            </motion.div>
          );
        })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */
export default function ProjectsShowcase() {
  const { openEnquire } = useEnquire();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(
    () =>
      SHOWCASE_PROJECTS.filter((project: ShowcaseProject) => {
        if (activeCategory === 'All') return true;
        if (activeCategory === 'Residential' || activeCategory === 'Residences')
          return project.category === 'Residential';
        if (activeCategory === 'Commercial')
          return project.category === 'Commercial';
        return true;
      }),
    [activeCategory]
  );

  const total = filteredProjects.length;
  const project = filteredProjects[Math.min(activeIndex, total - 1)];

  // scroll progress of the tall track -> active project
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (total === 0) return;
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  // jump to a project when a dot is clicked
  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const trackTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: trackTop + (scrollable * (i + 0.5)) / total,
      behavior: 'smooth',
    });
  };

  const changeCategory = (cat: string) => {
    setActiveCategory(cat);
    setActiveIndex(0);
    const el = trackRef.current;
    if (el) {
      const trackTop = el.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY > trackTop) window.scrollTo({ top: trackTop });
    }
  };

  if (!project) return null;

  const titleWords = project.name.split(' ');

  return (
    <section
      id="projects"
      className="relative bg-[#f5f4ef] font-poppins text-slate-800 scroll-mt-20 select-none"
    >
      {/* ---------- INTRO HEADER ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[50px] pb-3 sm:pb-4 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#BD7E6C] block">
            OUR PROJECTS
          </span>
          <WordFadeIn
            text="Elevate Your Business & Living Standard."
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight"
            delay={0.08}
            stagger={0.1}
          />
        </motion.div>
      </div>

      {/* ---------- TALL SCROLL TRACK (drives the pinned slideshow) ---------- */}
      <div
        ref={trackRef}
        style={{ height: `${100 + total * SCROLL_PER_PROJECT_VH}vh` }}
        className="relative"
      >
        {/* PINNED STAGE */}
        <div className="sticky top-16 lg:top-20 h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] w-full overflow-hidden flex items-start pt-2 sm:pt-4">
          {/* ambient glows */}
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#BD7E6C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#BD7E6C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-0 lg:pl-16 xl:pl-28">
            {/* ===== LEFT : TEXT ===== */}
            <div className="w-full lg:w-[46%] flex items-stretch gap-4 sm:gap-6 order-2 lg:order-1">
              {/* CATEGORY BUTTONS : stacked vertically, top-aligned with the line */}
              <div className="flex flex-col justify-start gap-2.5 shrink-0 pt-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => changeCategory(cat)}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-medium transition-all cursor-pointer text-left ${
                      activeCategory === cat
                        ? 'bg-[#BD7E6C] text-white shadow-sm font-semibold scale-[1.02]'
                        : 'bg-white border border-stone-200 text-slate-600 hover:text-slate-900 hover:border-stone-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Progressive vertical line indicator - only orange line increases on scroll */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const ratio = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
                  goTo(Math.min(total - 1, Math.floor(ratio * total)));
                }}
                className="relative w-[2px] shrink-0 my-2 self-stretch cursor-pointer"
                title="Project progress"
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 bg-[#BD7E6C] rounded-full"
                  initial={false}
                  animate={{
                    height: `${total > 0 ? ((activeIndex + 1) / total) * 100 : 0}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="py-2 space-y-4 sm:space-y-5 max-w-md"
                >
                  {/* location */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
                    }}
                    className="flex items-center gap-1.5 text-xs text-[#BD7E6C] font-semibold tracking-wide"
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </motion.div>

                  {/* title : words rise out of a mask in a balanced, elegant font */}
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl uppercase font-normal text-slate-950 leading-snug tracking-tight">
                    {titleWords.map((word, i) => (
                      <span key={i} className="inline-block overflow-hidden mr-[0.28em] pb-0.5 align-bottom">
                        <motion.span
                          className="inline-block"
                          variants={{
                            hidden: { y: '110%' },
                            show: {
                              y: '0%',
                              transition: {
                                duration: 0.6,
                                delay: 0.1 + i * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            },
                            exit: {
                              y: '-110%',
                              transition: { duration: 0.25, delay: i * 0.03 },
                            },
                          }}
                        >
                          {word}
                        </motion.span>
                      </span>
                    ))}
                  </h3>

                  {/* description */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 0.45 },
                      },
                      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
                    }}
                    className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-4"
                  >
                    {project.description}
                  </motion.p>

                  {/* meta + CTA */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 0.55 },
                      },
                      exit: { opacity: 0, transition: { duration: 0.2 } },
                    }}
                    className="pt-4 border-t border-slate-900/15 flex flex-wrap items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 text-xs">
                      <div>
                        <span className="text-slate-500 uppercase text-[9px] tracking-wider block font-bold">
                          CARPET AREA
                        </span>
                        <span className="text-slate-900 font-semibold text-xs">
                          {project.sizeSqft}
                        </span>
                      </div>
                      <div className="h-6 w-px bg-slate-900/20" />
                      <div>
                        <span className="text-slate-500 uppercase text-[9px] tracking-wider block font-bold">
                          STARTS AT
                        </span>
                        <span className="text-[#BD7E6C] font-bold text-sm">
                          {project.price}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        openEnquire(`View Details - ${project.name}`, project.name)
                      }
                      className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-[#BD7E6C] text-white text-[11px] font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ===== RIGHT : OVERLAPPING IMAGES ===== */}
            <div className="relative w-full lg:w-[54%] order-1 lg:order-2 flex justify-center lg:justify-start">
              <div className="relative w-[78%] sm:w-[62%] lg:w-[58%] aspect-[4/5] max-h-[52vh] lg:max-h-[70vh] lg:ml-[30%]">
                
                {/* BIG IMAGE (Blinds animation cascading from BOTTOM) */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-stone-900">
                  <BlindsImage
                    src={project.image}
                    alt={project.name}
                    direction="from-bottom"
                    className="rounded-2xl sm:rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/25 to-transparent pointer-events-none rounded-2xl sm:rounded-3xl" />
                </div>

                {/* SMALL OVERLAPPING IMAGE (Same Blinds animation cascading from ABOVE / TOP) */}
                <div className="absolute -left-[30%] top-[16%] w-[62%] aspect-[1/1.2] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_45px_-10px_rgba(0,0,0,0.28)] border-4 border-[#f5f4ef] z-20 bg-stone-900">
                  <BlindsImage
                    src={project.image}
                    alt={`${project.name} detail`}
                    direction="from-top"
                    className="rounded-xl sm:rounded-2xl"
                    imageClassName="object-left"
                  />
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}