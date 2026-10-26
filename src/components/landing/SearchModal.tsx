'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface SearchProperty {
  id: string;
  title: string;
  builder: string;
  configuration: string;
  location: string;
  price: string;
  possession: string;
  image: string;
}

export const SEARCH_PROPERTIES: SearchProperty[] = [
  {
    id: 'sp-1',
    title: 'Lodha Panache',
    builder: 'Lodha',
    configuration: '3 BHK',
    location: 'Hinjewadi Phase 1, Pune',
    price: '1.7 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate21.webp',
  },
  {
    id: 'sp-2',
    title: 'Gera Joy on the Tree Tops',
    builder: 'Gera',
    configuration: '2 BHK - Duplex',
    location: 'Hinjewadi Phase 3, Pune',
    price: '1.05 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate23.webp',
  },
  {
    id: 'sp-3',
    title: 'Godrej Aqua Retreat',
    builder: 'Godrej',
    configuration: '2 BHK',
    location: 'Hinjewadi Phase 1, Pune',
    price: '1.13 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate24.webp',
  },
  {
    id: 'sp-4',
    title: 'Shapoorji Pallonji Sensorium',
    builder: 'Shapoorji Pallonji',
    configuration: '3 BHK',
    location: 'Hinjewadi Phase 1, Pune',
    price: '1.50 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate22.webp',
  },
  {
    id: 'sp-5',
    title: 'Kolte Patil Life Republic',
    builder: 'Kolte Patil',
    configuration: '4 BHK',
    location: 'Hinjewadi (Life Republic Township), Pune',
    price: '2.59 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate20.webp',
  },
  {
    id: 'sp-6',
    title: 'VTP Monarque',
    builder: 'VTP',
    configuration: 'Mansion',
    location: 'Hinjewadi Phase 1, Pune',
    price: '2.33 Cr - 3.07 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate25.webp',
  },
  {
    id: 'sp-7',
    title: 'Panchshil Sky Pent-Villas',
    builder: 'Panchshil Realty',
    configuration: '4 & 5 BHK Duplex',
    location: 'Kharadi Annex, Pune',
    price: '4.90 Cr - 7.50 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate12.webp',
  },
  {
    id: 'sp-8',
    title: 'Kasturi The Balmoral Riverside',
    builder: 'Kasturi Housing',
    configuration: '3 & 4 BHK Riverfront',
    location: 'Balewadi, Pune',
    price: '2.65 Cr - 4.10 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate14.webp',
  },
  {
    id: 'sp-9',
    title: 'Solitaire Business Hub',
    builder: 'Solitaire',
    configuration: 'Office Suites',
    location: 'Baner, Pune',
    price: '1.65 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate15.webp',
  },
  {
    id: 'sp-10',
    title: 'Rohan Mithila',
    builder: 'Rohan Builders',
    configuration: '3 BHK Apartments',
    location: 'Viman Nagar, Pune',
    price: '2.10 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate10.webp',
  },
  {
    id: 'sp-11',
    title: 'Vilas Javdekar Yashwin',
    builder: 'Vilas Javdekar',
    configuration: '2 & 3 BHK Urban',
    location: 'Wakad, Pune',
    price: '92 Lakhs - 1.45 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate13.webp',
  },
  {
    id: 'sp-12',
    title: 'Pivora Elevate Sky Residences',
    builder: 'Pivora Group',
    configuration: '3 & 4 BHK Sky Residences',
    location: 'Kalyani Nagar, Pune',
    price: '2.15 Cr - 3.45 Cr',
    possession: 'Ready Possession',
    image: '/assets/realestate21.webp',
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onSelectProperty?: (property: SearchProperty) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  query,
  onSelectProperty,
}: SearchModalProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [selectedIds, setSelectedIds] = useState<Record<string, boolean>>({});
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    requirements: '',
  });

  if (!isOpen) return null;

  const trimmedQuery = (query || '').trim();
  const normalizedQuery = trimmedQuery.toLowerCase();

  // Filter properties based on query matching title, builder, location, or BHK
  const filteredProperties = SEARCH_PROPERTIES.filter((prop) => {
    if (!normalizedQuery) return true;
    return (
      prop.title.toLowerCase().includes(normalizedQuery) ||
      prop.builder.toLowerCase().includes(normalizedQuery) ||
      prop.location.toLowerCase().includes(normalizedQuery) ||
      prop.configuration.toLowerCase().includes(normalizedQuery)
    );
  });

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const pageProperties = filteredProperties.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShowAll = () => {
    onClose();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#projects';
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.phone.trim()) return;
    setLeadSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-200/80 w-full max-w-4xl p-5 sm:p-7 z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button on top-right */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* =========================================================================
              STATE 1: PROPERTIES FOUND (Matches User Screenshot 1)
             ========================================================================= */}
          {filteredProperties.length > 0 ? (
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pr-10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
                    Recommended Properties
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    The most searched properties for &quot;{trimmedQuery || 'Pune'}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Pagination Arrows */}
                  {totalPages > 1 && (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                        disabled={currentPage === 0}
                        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                        disabled={currentPage >= totalPages - 1}
                        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Show All Properties Link */}
                  <button
                    type="button"
                    onClick={handleShowAll}
                    className="text-xs sm:text-sm font-semibold text-[#1e3a8a] hover:text-[#0090d8] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Show All Properties</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Grid of Property Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-6">
                {pageProperties.map((prop) => {
                  const isLiked = likedIds[prop.id];
                  const isChecked = selectedIds[prop.id];

                  return (
                    <div
                      key={prop.id}
                      onClick={() => {
                        if (onSelectProperty) onSelectProperty(prop);
                        handleShowAll();
                      }}
                      className="group flex rounded-xl border border-slate-150 hover:border-slate-300 hover:shadow-md transition-all overflow-hidden p-2 gap-3 bg-white cursor-pointer relative"
                    >
                      {/* Left Thumbnail with Badge */}
                      <div className="relative w-28 sm:w-32 h-26 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                        <Image
                          src={prop.image}
                          alt={prop.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1.5 left-1.5 text-[9px] font-semibold text-white/95 px-1.5 py-0.5 rounded-sm bg-black/45 backdrop-blur-xs">
                          {prop.possession}
                        </span>
                      </div>

                      {/* Right Details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                        {/* Title & Actions */}
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h3 className="font-bold text-xs sm:text-sm text-slate-900 truncate group-hover:text-[#0090d8] transition-colors">
                              {prop.title}
                            </h3>

                            {/* Heart & Checkbox */}
                            <div className="flex flex-col items-center gap-1 shrink-0 ml-1">
                              <button
                                type="button"
                                onClick={(e) => toggleLike(prop.id, e)}
                                className="w-5 h-5 rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors"
                              >
                                <Heart
                                  className={`w-3.5 h-3.5 ${
                                    isLiked ? 'fill-rose-500 text-rose-500' : ''
                                  }`}
                                />
                              </button>
                              <input
                                type="checkbox"
                                checked={isChecked || false}
                                onChange={() => {}}
                                onClick={(e) => toggleSelect(prop.id, e)}
                                className="w-3.5 h-3.5 rounded border-slate-300 text-[#0090d8] focus:ring-0 cursor-pointer"
                              />
                            </div>
                          </div>

                          <p className="text-[11px] text-slate-500 font-medium -mt-1">
                            by {prop.builder}
                          </p>

                          <p className="text-xs font-semibold text-slate-700 mt-1">
                            {prop.configuration}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate">
                            {prop.location}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="mt-1">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {prop.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* =========================================================================
               STATE 2: NO PROPERTIES FOUND (Matches User Screenshot 2)
               ========================================================================= */
            <div className="py-2 sm:py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Left Description Column */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                    No Properties Found
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
                    We couldn&apos;t find any properties matching &quot;{trimmedQuery}&quot;. Let us
                    know what you&apos;re looking for and our experts will help you find the perfect
                    match.
                  </p>
                </div>

                {/* Right Lead Capture Form Column */}
                <div className="bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/60">
                  {leadSubmitted ? (
                    <div className="py-6 text-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        Request Received!
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Our Pune property specialist will contact you with matched inventory within 15 minutes.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-3">
                      {/* Name & Phone in 2 cols */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={leadForm.name}
                            onChange={(e) =>
                              setLeadForm((f) => ({ ...f, name: e.target.value }))
                            }
                            className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#2b437e] text-slate-800 placeholder:text-slate-400"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={leadForm.phone}
                            onChange={(e) =>
                              setLeadForm((f) => ({ ...f, phone: e.target.value }))
                            }
                            className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#2b437e] text-slate-800 placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      {/* Requirements */}
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                          What are you looking for?
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g. 3 BHK in Wakad under 1.5 Cr..."
                          value={leadForm.requirements}
                          onChange={(e) =>
                            setLeadForm((f) => ({ ...f, requirements: e.target.value }))
                          }
                          className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#2b437e] text-slate-800 placeholder:text-slate-400 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-[#2b437e] hover:bg-[#1f3363] text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition-all active:scale-[0.98] text-xs sm:text-sm cursor-pointer mt-1"
                      >
                        Request Property Details
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
