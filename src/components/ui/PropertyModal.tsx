'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/data/properties';
import { X, Bed, Bath, Square, MapPin, CheckCircle2, Phone, Calendar } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1e1b18]/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-[#c8816e]/30 shadow-2xl z-10 text-[#1e1b18] bg-white animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white border border-[#c8816e]/30 flex items-center justify-center text-[#1e1b18] hover:text-[#c8816e] hover:border-[#c8816e] shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Left Column: Gallery */}
          <div className="space-y-4">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 border border-[#c8816e]/15">
              <Image
                src={property.gallery[activeImageIndex] || property.image}
                alt={property.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#a96150] border border-[#c8816e]/30 shadow-xs">
                {property.tag}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {property.gallery.length > 1 && (
              <div className="flex items-center gap-3">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-[#c8816e] scale-105 shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Gallery view ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Agent Info Card */}
            <div className="p-4 rounded-2xl bg-[#f7f2ef] border border-[#c8816e]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c8816e]">
                  <Image src={property.agent.avatar} alt={property.agent.name} fill className="object-cover" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#1e1b18]">{property.agent.name}</h5>
                  <p className="text-xs text-[#a96150] font-semibold">Senior Advisory Director</p>
                </div>
              </div>
              <a
                href={`tel:${property.agent.phone}`}
                className="p-2.5 rounded-xl bg-[#c8816e]/15 text-[#a96150] hover:bg-[#c8816e] hover:text-white transition-colors"
                title="Call Agent"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#a96150] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.address}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1e1b18]">{property.title}</h2>
              <div className="text-2xl font-black rosegold-gradient-text mt-2">{property.formattedPrice}</div>

              <p className="text-xs sm:text-sm text-[#4a443e] mt-4 leading-relaxed font-normal">
                {property.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-[#f7f2ef] border border-[#c8816e]/15 text-center">
                <div>
                  <div className="text-xs text-[#7a7268] font-medium flex items-center justify-center gap-1 mb-1">
                    <Bed className="w-3.5 h-3.5 text-[#c8816e]" /> Bedrooms
                  </div>
                  <span className="text-base font-bold text-[#1e1b18]">{property.bedrooms}</span>
                </div>
                <div>
                  <div className="text-xs text-[#7a7268] font-medium flex items-center justify-center gap-1 mb-1">
                    <Bath className="w-3.5 h-3.5 text-[#c8816e]" /> Bathrooms
                  </div>
                  <span className="text-base font-bold text-[#1e1b18]">{property.bathrooms}</span>
                </div>
                <div>
                  <div className="text-xs text-[#7a7268] font-medium flex items-center justify-center gap-1 mb-1">
                    <Square className="w-3.5 h-3.5 text-[#c8816e]" /> Living Area
                  </div>
                  <span className="text-base font-bold text-[#1e1b18]">{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7a7268] mb-3">Estate Features</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#1e1b18] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c8816e] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#c8816e]/15 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?property=${encodeURIComponent(property.title)}`}
                onClick={onClose}
                className="rosegold-button flex-1 py-3 px-5 rounded-xl text-center text-xs uppercase font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Private Tour</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
