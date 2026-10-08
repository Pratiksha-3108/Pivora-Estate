'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { PROPERTIES, Property } from '@/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import PropertyModal from '@/components/ui/PropertyModal';
import {
  Sparkles,
  ArrowUpRight,
  LayoutGrid,
  Layers,
  Film,
  Play,
  MapPin,
  Bed,
  Bath,
  Square,
  Eye,
  CheckCircle2,
  PhoneCall,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [viewMode, setViewMode] = useState<'stories' | 'stack' | 'grid'>('stories');
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [isCarouselHovered, setIsCarouselHovered] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Penthouse', 'Waterfront', 'Modern Mansion', 'Villa'];

  const filteredProperties = activeTab === 'All'
    ? PROPERTIES
    : PROPERTIES.filter((p) => p.category === activeTab);

  // Auto scroll story cards carousel every 3.5 seconds
  useEffect(() => {
    if (viewMode !== 'stories' || isCarouselHovered) return;

    const timer = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [viewMode, isCarouselHovered, activeTab]);

  // Track overall scroll progress for the stacked cards container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-20 relative bg-[#fcfafa] scroll-mt-20 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c8816e]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#e2b49a]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a96150] bg-[#f7f2ef] px-3.5 py-1.5 rounded-full border border-[#c8816e]/20 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#c8816e]" />
              <span>Curated Estate Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e1b18] tracking-tight">
              Featured Luxury <span className="rosegold-gradient-text font-serif italic">Projects</span>
            </h2>
            <p className="text-sm text-[#4a443e] max-w-xl font-normal leading-relaxed">
              Explore high-definition video walkthroughs and architectural dossiers of our most exclusive private listings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center glass-panel p-1 rounded-2xl border border-[#c8816e]/20 bg-white/80 shadow-xs">
              <button
                onClick={() => setViewMode('stories')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'stories'
                    ? 'bg-[#1e1b18] text-[#f7f2ef] shadow-xs'
                    : 'text-[#4a443e] hover:text-[#1e1b18]'
                }`}
                title="Story Video Carousel View"
              >
                <Film className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Story Cards</span>
              </button>
              <button
                onClick={() => setViewMode('stack')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'stack'
                    ? 'bg-[#1e1b18] text-[#f7f2ef] shadow-xs'
                    : 'text-[#4a443e] hover:text-[#1e1b18]'
                }`}
                title="Vertical Card Stacking View"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Stacked</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#1e1b18] text-[#f7f2ef] shadow-xs'
                    : 'text-[#4a443e] hover:text-[#1e1b18]'
                }`}
                title="Grid Card View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 glass-panel p-1 rounded-2xl border border-[#c8816e]/20 bg-white/80 shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    activeTab === cat
                      ? 'bg-[#c8816e] text-white shadow-xs'
                      : 'text-[#4a443e] hover:text-[#1e1b18] hover:bg-[#f7f2ef]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Modes */}
        {viewMode === 'stories' ? (
          /* STORY CAROUSEL VIEW (MATCHING REFERENCE SCREENSHOT) */
          <div 
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            className="relative group/carousel"
          >
            {/* Carousel Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-30 hidden sm:flex">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl border border-stone-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-30 hidden sm:flex">
              <button
                onClick={() => scrollCarousel('right')}
                className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl border border-stone-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Horizontal Scroll Track */}
            <div
              ref={carouselRef}
              className="flex items-center gap-6 overflow-x-auto scrollbar-none py-4 px-1 scroll-smooth snap-x snap-mandatory"
            >
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  onClick={() => setSelectedProperty(property)}
                  className="snap-start shrink-0 w-[280px] sm:w-[320px] h-[460px] sm:h-[490px] rounded-[30px] overflow-hidden relative shadow-xl hover:shadow-2xl border border-stone-200/80 hover:border-[#c8816e]/40 transition-all duration-500 cursor-pointer group flex flex-col justify-between bg-slate-900"
                >
                  {/* Full Cover Background Image */}
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="340px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                  {/* Top Header Controls inside Card */}
                  <div className="relative z-10 p-5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/20 shadow-xs">
                      {property.category}
                    </span>

                    {/* Top-Right Floating White Play Button */}
                    <div className="w-9 h-9 rounded-full bg-white/95 text-slate-900 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Panel with Overlapping Circular Avatar */}
                  <div className="relative z-10 p-6 pt-8 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-xs text-white rounded-b-[30px] space-y-3">
                    
                    {/* Overlapping Agent Avatar Badge */}
                    <div className="absolute -top-6 right-6 w-12 h-12 rounded-full border-2 border-white shadow-xl overflow-hidden bg-slate-800 z-20">
                      <Image
                        src={property.agent.avatar}
                        alt={property.agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Property Title in Elegant Serif Font */}
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-tight tracking-tight drop-shadow-sm group-hover:text-[#e2b49a] transition-colors">
                      {property.title}
                    </h3>

                    {/* Description Quote in Double Quotes */}
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed font-normal italic opacity-95">
                      "{property.description}"
                    </p>

                    {/* Location & Price Footer Tag */}
                    <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#e2b49a] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#e2b49a]" />
                        <span>{property.location}</span>
                      </span>
                      <span className="text-white font-extrabold bg-white/15 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                        {property.formattedPrice}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : viewMode === 'stack' ? (
          /* VERTICAL CARD STACKING ON SCROLL */
          <div ref={containerRef} className="relative space-y-12 sm:space-y-16 pb-12">
            {filteredProperties.map((property, idx) => {
              const targetScale = 1 - (filteredProperties.length - idx) * 0.035;
              const range = [idx * (1 / filteredProperties.length), 1];

              return (
                <StackedCardItem
                  key={property.id}
                  property={property}
                  index={idx}
                  total={filteredProperties.length}
                  progress={scrollYProgress}
                  range={range}
                  targetScale={targetScale}
                  isLiked={!!likedIds[property.id]}
                  onToggleLike={(e) => toggleLike(property.id, e)}
                  onSelect={(prop) => setSelectedProperty(prop)}
                />
              );
            })}
          </div>
        ) : (
          /* Classic Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onQuickView={(prop) => setSelectedProperty(prop)}
              />
            ))}
          </div>
        )}

        {/* Bottom Confidential Off-Market Banner */}
        <div className="mt-16 glass-panel p-8 rounded-3xl border border-[#c8816e]/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden bg-gradient-to-r from-white via-[#f7f2ef] to-white shadow-md">
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-xl font-bold text-[#1e1b18] flex items-center justify-center md:justify-start gap-2">
              <span>Looking for Confidential Off-Market Assets?</span>
            </h3>
            <p className="text-xs text-[#4a443e] max-w-xl">
              Over 85% of our private estate transactions occur off-market. Request verified buyer access to confidential private dossiers.
            </p>
          </div>

          <a
            href="/contact?type=offmarket"
            className="rosegold-button px-6 py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center gap-2 shadow-md shrink-0 z-10"
          >
            <span>Request Private List</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Property Detail Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}

// Framer Motion Animated Stacked Card Component
function StackedCardItem({
  property,
  index,
  total,
  progress,
  range,
  targetScale,
  isLiked,
  onToggleLike,
  onSelect,
}: {
  property: Property;
  index: number;
  total: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  isLiked: boolean;
  onToggleLike: (e: React.MouseEvent) => void;
  onSelect: (property: Property) => void;
}) {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic Scale and Dark Tint overlay as subsequent cards stack over this card
  const scale = useTransform(progress, range, [1, targetScale]);

  // Uniform top position: 0px vertical offset gap between stacked cards
  const topOffsetPx = 100;

  return (
    <div
      ref={cardContainerRef}
      className="sticky flex items-center justify-center mb-[25vh] sm:mb-[35vh] last:mb-0"
      style={{
        top: `${topOffsetPx}px`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full rounded-3xl overflow-hidden glass-panel border border-[#c8816e]/30 bg-white shadow-2xl origin-top transition-shadow duration-300 group"
      >
        {/* Card Header Bar */}
        <div className="px-6 py-3.5 bg-gradient-to-r from-[#1e1b18] via-[#2d2824] to-[#1e1b18] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#c8816e] text-white flex items-center justify-center text-xs font-extrabold shadow-sm">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#e2b49a]">
              {property.category}
            </span>
            <span className="hidden sm:inline text-xs text-white/40">•</span>
            <span className="hidden sm:inline text-xs font-medium text-white/80">
              {property.tag}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-white/60 font-medium">
              Estate {index + 1} of {total}
            </span>
            <button
              onClick={onToggleLike}
              className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                isLiked ? 'bg-rose-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Save Property"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Card Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left 7 Columns: Image Container */}
          <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[430px] overflow-hidden bg-slate-900">
            <Image
              src={property.image}
              alt={property.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18]/85 via-transparent to-transparent opacity-90" />

            {/* Badges on Image */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1e1b18]/80 text-white backdrop-blur-md border border-white/20 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#c8816e]" />
                  <span>Confidential Listing</span>
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-black text-white bg-[#c8816e] px-4 py-1.5 rounded-2xl shadow-lg">
                {property.formattedPrice}
              </span>
            </div>
          </div>

          {/* Right 5 Columns: Property Info */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#a96150] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#c8816e]" />
                <span>{property.location}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b18] group-hover:text-[#c8816e] transition-colors leading-tight">
                {property.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4a443e] font-normal leading-relaxed line-clamp-3">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#a96150]">
                Estate Highlights
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#1e1b18]">
                {property.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c8816e] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="pt-4 border-t border-[#c8816e]/15 grid grid-cols-3 gap-2 text-xs font-medium text-[#4a443e]">
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#c8816e]" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-[#c8816e]" />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Square className="w-4 h-4 text-[#c8816e]" />
                <span>{property.sqft.toLocaleString()} sqft</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onSelect(property)}
                className="flex-1 rosegold-button py-3 px-4 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Dossier</span>
              </button>
              <a
                href="/contact"
                className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#f7f2ef] hover:bg-[#1e1b18] hover:text-white border border-[#c8816e]/20 text-[#1e1b18] transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Schedule Tour</span>
              </a>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}



