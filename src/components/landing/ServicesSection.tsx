'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

interface ServiceItem {
  id: string;
  numStr: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: {
    url: string;
    caption: string;
  }[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'architectural-design',
    numStr: '①',
    title: 'Individual architectural design',
    shortDesc: 'Custom architectural blueprints designed from the ground up for bespoke luxury homes.',
    fullDesc: 'From initial concept plans and spatial flow to structural drafting, our senior architects design from the ground up. We take into account your lifestyle, site microclimate, orientation, and aesthetic aspirations — ensuring your property is crafted with timeless architectural distinction.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        caption: 'Bespoke Modern Residence Facade'
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
        caption: 'Architectural Blueprint & Concept'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
        caption: 'Luxury Villa Courtyard & Elevation'
      }
    ]
  },
  {
    id: 'ready-to-build',
    numStr: '②',
    title: 'Ready-to-build house projects',
    shortDesc: 'Turnkey, fully engineered villa plans ready for immediate municipal approval and construction.',
    fullDesc: 'Pre-designed, fully structural villa blueprints curated for immediate construction. Engineered with high space efficiency, optimized ventilation, and structural durability so you can commence building without design delays.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
        caption: 'Turnkey Luxury Villa Concept'
      },
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
        caption: 'Engineered Structure Blueprint'
      },
      {
        url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
        caption: 'Modern Duplex Elevation'
      }
    ]
  },
  {
    id: 'interior-layout',
    numStr: '③',
    title: 'Interior layout planning',
    shortDesc: 'Ergonomic floorplan optimization, lighting schemes, and luxury interior space allocation.',
    fullDesc: 'Comprehensive interior space planning that harmonizes light channels, custom millwork, and ergonomic furniture placement. We craft ambient living spaces designed for effortless comfort and refined entertainment.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
        caption: 'Contemporary Living Room Layout'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
        caption: 'Minimalist Dining & Kitchen Zone'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
        caption: 'Master Suite Interior Planning'
      }
    ]
  },
  {
    id: 'construction-docs',
    numStr: '④',
    title: 'Construction documentation',
    shortDesc: 'Precise MEP schematics, working drawings, and municipal sanction packages.',
    fullDesc: 'Rigorous engineering drawing sets including structural calculations, plumbing, electrical (MEP) schematics, and municipal compliance documentation to ensure flawless execution by contractors on site.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
        caption: 'Architectural Working Specs'
      },
      {
        url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
        caption: 'Structural CAD Calculations'
      },
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=900&q=80',
        caption: 'Municipal Documentation'
      }
    ]
  },
  {
    id: '3d-visualization',
    numStr: '⑤',
    title: '3D visualizations',
    shortDesc: 'Hyper-realistic 3D exterior renders and virtual walkthroughs before construction.',
    fullDesc: 'Experience your property before the first brick is laid. We produce photorealistic 3D exterior and interior renderings, daylight impact studies, and 360° virtual walking tours.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
        caption: '3D Exterior Render'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80',
        caption: 'Twilight Visualization'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
        caption: 'Virtual Aerial 3D Walkthrough'
      }
    ]
  },
  {
    id: 'construction-supervision',
    numStr: '⑥',
    title: 'Construction supervision & guidance',
    shortDesc: 'On-site structural audits, quality control, material selection & contractor oversight.',
    fullDesc: 'Active on-site quality assurance, structural audits, material testing oversight, and contractor timeline management. We also provide material sourcing guidance for Italian marble, thermal glass, and luxury finishes.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
        caption: 'On-Site Quality Audit'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
        caption: 'Italian Marble & Finish Sourcing'
      },
      {
        url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
        caption: 'Structural Quality Control'
      }
    ]
  }
];

export default function ServicesSection() {
  const { openEnquire } = useEnquire();
  // Default first item active
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isStackHovered, setIsStackHovered] = useState<boolean>(false);
  const [isListHovered, setIsListHovered] = useState<boolean>(false);
  const [selectedPreviewImage, setSelectedPreviewImage] = useState<string | null>(null);

  // Auto rotate services active item every 4.5 seconds
  useEffect(() => {
    if (isStackHovered || isListHovered || selectedPreviewImage) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isStackHovered, isListHovered, selectedPreviewImage]);

  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#fbf9f5] relative font-poppins text-slate-800 scroll-mt-20 border-t border-stone-200/70 select-none overflow-hidden"
    >
      {/* Soft Background Accent Glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#BD7E6C]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#e2be9b]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-300/60 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
              COMPREHENSIVE REAL ESTATE SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight">
              {"Our Services".split(" ").map((word, wordIndex) => (
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
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            From concept architecture to complete construction supervision, we deliver end-to-end expertise for luxury homeowners and developers.
          </p>
        </div>

        {/* TWO COLUMN CONTENT: LEFT ANIMATED SPREAD PHOTO STACK, RIGHT ACCORDION LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">

          {/* LEFT COLUMN: ANIMATED SPREAD 3-PHOTO CARDS */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start lg:sticky lg:top-28">
            <div
              onMouseEnter={() => setIsStackHovered(true)}
              onMouseLeave={() => setIsStackHovered(false)}
              className="relative w-full max-w-lg h-[560px] sm:h-[620px] flex items-center justify-center cursor-pointer group"
            >
              {/* Soft Backdrop Shadow Glow */}
              <div className="absolute inset-4 bg-stone-900/5 rounded-3xl blur-2xl transform group-hover:scale-105 transition-all duration-500" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {activeService.images.map((imgObj, idx) => {
                    // Clearly fanned out positions so ALL 3 images are distinctly visible!
                    // Card 0: Front bottom-left
                    // Card 1: Middle center-right
                    // Card 2: Top far-right / upper stack
                    const defaultRotations = [-9, 4, 14];
                    const hoveredRotations = [-18, 2, 22];

                    const defaultX = [-65, 30, 115];
                    const hoveredX = [-105, 35, 155];

                    const defaultY = [40, -15, -75];
                    const hoveredY = [60, -20, -100];

                    const zIndices = [30, 20, 10];

                    const rot = isStackHovered ? hoveredRotations[idx] : defaultRotations[idx];
                    const tx = isStackHovered ? hoveredX[idx] : defaultX[idx];
                    const ty = isStackHovered ? hoveredY[idx] : defaultY[idx];
                    const zIdx = zIndices[idx];

                    return (
                      <motion.div
                        key={`${activeService.id}-img-${idx}`}
                        initial={{ opacity: 0, y: defaultY[idx] + 20, rotate: defaultRotations[idx] }}
                        animate={{
                          opacity: 1,
                          rotate: rot,
                          x: tx,
                          y: ty,
                          scale: isStackHovered ? 1.04 : 1
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 240,
                          damping: 22,
                          delay: idx * 0.07
                        }}
                        whileHover={{ scale: 1.12, zIndex: 50 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPreviewImage(imgObj.url);
                        }}
                        style={{ zIndex: zIdx }}
                        className="absolute w-[220px] sm:w-[260px] md:w-[275px] bg-white p-1.5 sm:p-2 rounded-2xl shadow-[0_16px_35px_rgba(0,0,0,0.13)] border border-stone-200/90 transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.22)]"
                      >
                        {/* Image Container with Tall Vertical Aspect Ratio (3:4 ratio) */}
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
                          <img
                            src={imgObj.url}
                            alt={imgObj.caption}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ZoomIn className="w-3.5 h-3.5" />
                          </div>
                        </div>


                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>


            </div>
          </div>

          {/* RIGHT COLUMN: 6 NUMBERED SERVICES ACCORDION LIST */}
          <div 
            onMouseEnter={() => setIsListHovered(true)}
            onMouseLeave={() => setIsListHovered(false)}
            className="lg:col-span-7 space-y-1"
          >
            {SERVICES_DATA.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`border-t border-stone-200/90 first:border-t-0 rounded-xl transition-all duration-300 ${isActive ? 'bg-white/80 shadow-xs' : 'hover:bg-white/40'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left py-5 sm:py-6 px-3 sm:px-4 rounded-xl flex items-start gap-4 sm:gap-6 group cursor-pointer"
                  >
                    {/* Circle Number Badge matching reference image */}
                    <span className={`text-xl sm:text-2xl font-serif transition-colors duration-300 shrink-0 ${isActive ? 'text-[#BD7E6C] font-semibold' : 'text-slate-400 group-hover:text-slate-600'
                      }`}>
                      {service.numStr}
                    </span>

                    {/* Service Title & Chevron */}
                    <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
                      <h3 className={`text-xl sm:text-2xl font-serif transition-colors duration-300 ${isActive ? 'text-slate-950 font-semibold' : 'text-slate-700 group-hover:text-slate-950'
                        }`}>
                        {service.title}
                      </h3>
                      <ChevronRight className={`w-5 h-5 stroke-[2] transition-transform duration-300 shrink-0 ${isActive ? 'rotate-90 text-[#BD7E6C]' : 'text-slate-400 group-hover:translate-x-1'
                        }`} />
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden px-3 sm:px-4 pb-5 sm:pb-6"
                      >
                        <div className="pl-9 sm:pl-12 pr-4 space-y-4">
                          <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                            {service.fullDesc}
                          </p>

                          <div className="flex items-center gap-4 pt-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                openEnquire(`SERVICE INQUIRY: ${service.title.toUpperCase()}`);
                              }}
                              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BD7E6C] hover:text-[#a05f4e] transition-colors cursor-pointer group/btn"
                            >
                              <span>Request Consultation for this Service</span>
                              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>



      </div>

      {/* LIGHTBOX MODAL FOR IMAGE PREVIEW */}
      <AnimatePresence>
        {selectedPreviewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPreviewImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] bg-white p-3 rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedPreviewImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedPreviewImage}
                alt="Enlarged Architectural Visual"
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
