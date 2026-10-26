'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Search, ChevronDown, MapPin } from 'lucide-react';

const PUNE_LOCATIONS = [
  'Pune (All)',
  'Koregaon Park',
  'Kalyani Nagar',
  'Boat Club Road',
  'Baner',
  'Balewadi',
  'Aundh',
  'Model Colony',
  'Kharadi',
  'Viman Nagar',
  'Magarpatta',
  'Mundhwa',
  'Hinjawadi',
  'Wakad',
];

const HERO_SLIDES = [
  {
    id: 1,
    image: '/assets/real_estate1.jpg',
    position: 'center top',
  },
  {
    id: 2,
    image: '/assets/real_estate2.jpg',
    position: 'center top',
  },
  {
    id: 3,
    image: '/assets/real_estate5.webp',
    position: 'center top',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  const [propertyType, setPropertyType] = useState('All Residential');
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Pune, Maharashtra');
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const typeOptions = activeTab === 'residential'
    ? ['All Residential', 'Luxury Apartments', 'Penthouses', 'Villas & Mansions', 'Plots']
    : ['All Commercial', 'Office Spaces', 'Retail & Showrooms', 'IT & Business Parks'];

  const handleBrowse = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#projects';
    }
  };

  // Smooth auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((curr) => (curr + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  // Scroll transforms for smooth zoom-out, blur and card effect
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 650], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.6]);
  const borderRadius = useTransform(scrollY, [0, 650], ['0px', '36px']);
  const y = useTransform(scrollY, [0, 650], [0, 60]);
  const filter = useTransform(
    scrollY,
    (v) => `blur(${Math.min(14, Math.max(0, (v / 650) * 14)).toFixed(1)}px)`
  );
  const pointerEvents = useTransform(scrollY, (v) => (v > 500 ? 'none' : 'auto'));

  // Smoothly fade out initial hero headline and info card as user scrolls towards About section
  const heroContentOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const heroContentY = useTransform(scrollY, [0, 320], [0, -30]);

  return (
    <section className="fixed inset-0 z-0 w-full h-screen overflow-hidden bg-black select-none">
      <motion.div
        style={{ scale, opacity, borderRadius, y, filter, pointerEvents }}
        className="relative w-full h-full overflow-hidden origin-center bg-slate-950 shadow-2xl"
      >
        {/* BACKGROUND CAROUSEL: 3 images cross-fading smoothly */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.6, ease: [0.25, 1, 0.5, 1] },
                scale: { duration: 6, ease: 'easeOut' },
              }}
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: slide.position || 'center top',
                transformOrigin: 'center top',
              }}
            />
          </AnimatePresence>

          {/* Subtle Ambient Overlay - drastically reduced black opacity for vibrant image clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

      {/* Initial Hero Content (Tagline, Dots, Project Card) that fades out on scroll */}
      <motion.div
        style={{ opacity: heroContentOpacity, y: heroContentY }}
        className="absolute inset-0 z-10"
      >
        {/* Persistent 2-line tagline & Search Bar */}
        <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pt-10 sm:pt-14"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.12] tracking-tight drop-shadow-2xl">
              <span className="block">Where Vision Becomes</span>
              <span className="block">Your Address</span>
            </h1>
          </motion.div>

          {/* Search Bar Widget (matching user reference) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 max-w-3xl lg:max-w-7xl w-full"
          >
            {/* Top Tabs (Residential / Commercial) */}
            <div className="inline-flex rounded-t-xl overflow-hidden bg-black/45 backdrop-blur-md border-t border-x border-white/20">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('residential');
                  setPropertyType('All Residential');
                }}
                className={`relative px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'residential'
                    ? 'bg-white/20 text-white after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#e11d48]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Residential
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('commercial');
                  setPropertyType('All Commercial');
                }}
                className={`relative px-6 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'commercial'
                    ? 'bg-white/20 text-white after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#e11d48]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Commercial
              </button>
            </div>

            {/* Main Search Bar Card */}
            <form
              onSubmit={handleBrowse}
              className="bg-white rounded-2xl rounded-tl-none shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-2 sm:p-2.5 flex flex-col md:flex-row md:items-center gap-2 md:gap-0 border border-white/30"
            >
              {/* Type Dropdown Field */}
             

              {/* Where Input Field */}
              <div className="px-4 py-1.5 flex-1 md:border-r border-slate-200">
                <span className="text-[11px] font-medium text-slate-400 block mb-0.5">Where</span>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search locality/landmark"
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 font-medium bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Location Field (Pune) */}
              <div className="relative px-4 py-1.5 md:border-r border-slate-200 min-w-[170px] sm:min-w-[210px]">
                <span className="text-[11px] font-medium text-slate-400 block mb-0.5">Location</span>
                <button
                  type="button"
                  onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                  className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 transition-colors cursor-pointer text-left py-0.5"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-4 h-4 text-[#0090d8] shrink-0" />
                    <span className="truncate">{selectedLocation}</span>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 shrink-0 ml-1 transition-transform duration-200 ${
                      locationDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {locationDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setLocationDropdownOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-slate-200/80 py-2 z-50">
                      <div className="px-3.5 py-1.5 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        Pune Localities
                      </div>
                      <div className="max-h-60 overflow-y-auto divide-y divide-slate-50">
                        {PUNE_LOCATIONS.map((loc) => {
                          const isSelected =
                            selectedLocation === loc ||
                            selectedLocation === `${loc}, Pune` ||
                            (loc === 'Pune (All)' && selectedLocation === 'Pune, Maharashtra');
                          return (
                            <button
                              key={loc}
                              type="button"
                              onClick={() => {
                                setSelectedLocation(
                                  loc === 'Pune (All)' ? 'Pune, Maharashtra' : `${loc}, Pune`
                                );
                                setLocationDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-50 text-[#0090d8] font-semibold'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                              }`}
                            >
                              <span>{loc}</span>
                              {isSelected && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0090d8]" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Browse Properties Button */}
              <div className="p-1">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#0090d8] hover:bg-[#007ec2] text-white font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Slide navigation dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current
                  ? 'w-7 bg-[#BD7E6C]'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

      
      </motion.div>
      </motion.div>
    </section>
  );
}