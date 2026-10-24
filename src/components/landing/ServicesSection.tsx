'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';
import WordFadeIn from '@/components/ui/WordFadeIn';

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
    id: 'residential-property-consulting',
    numStr: '①',
    title: 'Residential Property Consulting',
    shortDesc: 'Customized sales and marketing strategies with skilled negotiation to receive the highest potential price for your home.',
    fullDesc: "We know the difficulties of selling a home, because that is what our job is. To increase visibility and spark interest in our customers' properties, we provide a variety of sales and marketing services through traditional as well as digital marketing channels. Our team of marketing specialists design customized marketing strategies and provide skilled negotiating services so that we can help you receive the highest potential price for your homes.",
    images: [
      {
        url: '/assets/realestate8.webp',
        caption: 'Luxury High-Rise Residence, Pune'
      },
      {
        url: '/assets/realestate9.webp',
        caption: 'Skyline Penthouse & Terrace, Pune'
      },
      {
        url: '/assets/realestate10.webp',
        caption: 'Contemporary Architectural Suite, Pune'
      }
    ]
  },
  {
    id: 'commercial-property-consulting',
    numStr: '②',
    title: 'Commercial Property Consulting',
    shortDesc: 'Specialized consulting for companies in Pune: site selection, lease negotiations, and property management.',
    fullDesc: 'Our consulting services for commercial real estate are specifically designed to satisfy the demands of companies based in Pune. We collaborate closely with company owners to ascertain their demands in order to locate locations that can satisfy their needs. Our team of professionals supports organizations with site selection, lease negotiations, property management, and asset disposition to find the perfect space for companies to conduct their operations.',
    images: [
      {
        url: '/assets/realestate11.webp',
        caption: 'Corporate Business Tower, Pune'
      },
      {
        url: '/assets/realestate12.webp',
        caption: 'High-Street Retail & Grade-A Offices, Pune'
      },
      {
        url: '/assets/realestate13.webp',
        caption: 'Integrated IT Park & Commercial Complex, Pune'
      }
    ]
  },
  {
    id: 'real-estate-sales-marketing',
    numStr: '③',
    title: 'Real Estate Sales and Marketing',
    shortDesc: 'Comprehensive sales and marketing through traditional and digital channels for maximum visibility.',
    fullDesc: "We know the difficulties of selling a home, because that is what our job is. To increase visibility and spark interest in our customers' properties, we provide a variety of sales and marketing services through traditional as well as digital marketing channels. Our team of marketing specialists design customized marketing strategies and provide skilled negotiating services so that we can help you receive the highest potential price for your homes.",
    images: [
      {
        url: '/assets/realestate14.webp',
        caption: 'Premium Residential Living, Pune'
      },
      {
        url: '/assets/realestate15.webp',
        caption: 'Curated Luxury Residences, Pune'
      },
      {
        url: '/assets/realestate16.webp',
        caption: 'Elite Waterfront Apartments, Pune'
      }
    ]
  },
  {
    id: 'projects-under-contract',
    numStr: '④',
    title: 'Projects Under Contract',
    shortDesc: 'Thorough project management: feasibility studies, site analysis, planning, and construction management.',
    fullDesc: 'With the projects we take under contract we provide thorough and clear project management services to our clients. It includes feasibility studies, site analyses, design and planning, construction management, and post-construction services. We help you manage your project from beginning to end, ensuring that it is completed as it was planned and within your budget.',
    images: [
      {
        url: '/assets/realestate17.webp',
        caption: 'Grand Masterplanned Community, Pune'
      },
      {
        url: '/assets/realestate8.webp',
        caption: 'Structural Engineering & Architecture, Pune'
      },
      {
        url: '/assets/realestate9.webp',
        caption: 'Sky Villa Project Under Construction, Pune'
      }
    ]
  },
  {
    id: 'projects-on-mandate',
    numStr: '⑤',
    title: 'Projects on Mandate',
    shortDesc: 'Dedicated mandate project supervision to the highest standards, on schedule, and within allocated budget.',
    fullDesc: 'Even when we take on projects on mandate, we leave no stone unturned to provide our client with best services. Like projects under contract, it also includes feasibility studies for projects, site analyses, design and planning, construction management, and post-construction services. Our team of experts can supervise your project, assuring it is concluded to the highest standards, on schedule, and within the allocated budget.',
    images: [
      {
        url: '/assets/realestate10.webp',
        caption: 'Prime Urban Development Mandate, Pune'
      },
      {
        url: '/assets/realestate11.webp',
        caption: 'Commercial Mandate Tower, Pune'
      },
      {
        url: '/assets/realestate12.webp',
        caption: 'Modern Architectural Complex, Pune'
      }
    ]
  },
  {
    id: 'property-management',
    numStr: '⑥',
    title: 'Property Management',
    shortDesc: 'Tenant vetting, rent collection, repair & maintenance, and comprehensive financial reporting.',
    fullDesc: 'Being a real estate company, we very well know how time consuming and stress-intensive real estate management can be. For this exact reason, we provide full property management as one of our services. It consists of tenant vetting and placement, rent collecting, maintenance and repair, and financial reporting. Your rental revenue is increased while your properties are maintained in excellent shape.',
    images: [
      {
        url: '/assets/realestate13.webp',
        caption: 'Turnkey Residential Facility Management, Pune'
      },
      {
        url: '/assets/realestate14.webp',
        caption: 'Premium Gated Estate Management, Pune'
      },
      {
        url: '/assets/realestate15.webp',
        caption: 'Bespoke Asset & Property Maintenance, Pune'
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
      className="py-[50px] bg-[#fbf9f5] relative font-poppins text-slate-800 scroll-mt-20 select-none overflow-hidden"
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
            <WordFadeIn
              text="Our Services"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight"
              delay={0.08}
              stagger={0.12}
            />
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            From prime luxury residential sales and commercial leasing to NRI advisory and RERA compliance, we provide end-to-end real estate expertise across India.
          </p>
        </div>

        {/* TWO COLUMN CONTENT: LEFT ACCORDION LIST, RIGHT ANIMATED SPREAD PHOTO STACK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">

          {/* LEFT COLUMN: 6 NUMBERED SERVICES ACCORDION LIST */}
          <div
            onMouseEnter={() => setIsListHovered(true)}
            onMouseLeave={() => setIsListHovered(false)}
            className="lg:col-span-7 space-y-1 order-2 lg:order-1"
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
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
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

          {/* RIGHT COLUMN: ANIMATED SPREAD 3-PHOTO CARDS (PUNE REAL ESTATE IMAGES) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-center lg:sticky lg:top-28 order-1 lg:order-2">
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
                    // Clearly fanned out positions so ALL 3 images are distinctly visible on the right side
                    // Card 0: Front bottom-left
                    // Card 1: Middle center-right
                    // Card 2: Top far-right / upper stack
                    const defaultRotations = [-8, 3, 13];
                    const hoveredRotations = [-16, 2, 20];

                    const defaultX = [-55, 18, 92];
                    const hoveredX = [-90, 22, 135];

                    const defaultY = [35, -12, -65];
                    const hoveredY = [50, -18, -85];

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
                        {/* Image Container with Tall Vertical Aspect Ratio (3/4 ratio) */}
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
