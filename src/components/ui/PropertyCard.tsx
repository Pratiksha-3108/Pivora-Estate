'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/data/properties';
import { Bed, Bath, Square, MapPin, Heart, Eye } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onQuickView: (property: Property) => void;
}

export default function PropertyCard({ property, onQuickView }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-[#c8816e]/15 relative bg-white">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18]/80 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/90 text-[#a96150] border border-[#c8816e]/30 backdrop-blur-md shadow-xs">
            {property.category}
          </span>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-xs ${
              isLiked ? 'bg-rose-500 text-white' : 'bg-white/80 text-[#1e1b18] hover:bg-white'
            }`}
            aria-label="Save Property"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-rose-500' : ''}`} />
          </button>
        </div>

        {/* Bottom Tag */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
            {property.formattedPrice}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#a96150] font-bold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{property.location}</span>
          </div>
          <h3 className="text-lg font-bold text-[#1e1b18] group-hover:text-[#c8816e] transition-colors line-clamp-1">
            {property.title}
          </h3>
          <p className="text-xs text-[#4a443e] mt-2 line-clamp-2 leading-relaxed font-normal">
            {property.description}
          </p>
        </div>

        {/* Specs */}
        <div className="pt-4 border-t border-[#c8816e]/10 grid grid-cols-3 gap-2 text-[#4a443e] text-xs font-medium">
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

        {/* Action Button */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onQuickView(property)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#f7f2ef] hover:bg-[#c8816e] hover:text-white border border-[#c8816e]/20 text-[#1e1b18] text-xs font-bold tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>
    </div>
  );
}
