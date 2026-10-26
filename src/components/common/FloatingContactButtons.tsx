'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, X, ArrowUpRight } from 'lucide-react';

export default function FloatingContactButtons() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  return (
    <div className="fixed bottom-32 sm:bottom-6 left-1 sm:left-2 z-50 flex flex-col items-start gap-3 select-none">
      {/* Call button */}
      <a
        href="tel:+919876543210"
        aria-label="Call Us"
        className="group relative w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all border border-slate-200"
      >
        <Phone className="w-5 h-5 text-slate-800 transition-transform group-hover:rotate-12" />
        <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          +91-987 654 3210
        </span>
      </a>

      {/* WhatsApp with Pop-Up Effect */}
      <div className="relative">
        {/* Interactive Pop-Up Chat Window */}
        {showWhatsAppPopup && (
          <div className="absolute bottom-20 left-0 w-80 max-w-[calc(100vw-32px)] bg-white rounded-md shadow-2xl border border-stone-200/90 p-4 text-slate-800 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                  PE
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Pivora Estates VIP</h4>
                  <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online | Replies instantly
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowWhatsAppPopup(false)}
                className="p-1 rounded-sm text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Bubble */}
            <div className="py-3 text-xs leading-relaxed text-slate-600 space-y-1.5">
              <p className="bg-stone-100 p-2.5 rounded-sm text-slate-700">
                👋 Hello! Welcome to Pivora Estates. Looking for floor plans, pricing, or an exclusive site visit in Hinjawadi, Pune?
              </p>
            </div>

            {/* Action Button */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20Pivora%20Estates%20residences."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <span>Start WhatsApp Chat</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        )}

        {/* Continuous Radar Pulse Ping Ring */}
        <span className="absolute inset-1 rounded-full bg-emerald-500/35 animate-ping pointer-events-none" />

        {/* WhatsApp Trigger Button */}
        <button
          type="button"
          onClick={() => setShowWhatsAppPopup(!showWhatsAppPopup)}
          aria-label="Contact on WhatsApp"
          className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:scale-115 active:scale-90 transition-all duration-300 drop-shadow-2xl cursor-pointer"
        >
          <Image
            src="/assets/whatsapp-logo-icon-isolated-on-transparent-background-free-png.webp"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </button>
      </div>
    </div>
  );
}
