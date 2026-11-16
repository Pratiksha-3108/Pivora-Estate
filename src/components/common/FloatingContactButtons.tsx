'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, X, ArrowUpRight } from 'lucide-react';

export default function FloatingContactButtons() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  return (
    <>
      {/* Call Button on Left Side */}
      <div className="fixed bottom-6 left-3 sm:left-5 z-50 select-none">
        <a
          href="tel:+918839524392"
          aria-label="Call Us"
          className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all border border-slate-200"
        >
          <Phone className="w-5 h-5 text-slate-800 transition-transform group-hover:rotate-12" />
          <span className="absolute left-full ml-3 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            +91 88395 24392
          </span>
        </a>
      </div>

      {/* WhatsApp on Right Side with Pop-Up Effect */}
      <div className="fixed bottom-6 right-3 sm:right-5 z-50 select-none">
        <div className="relative">
          {/* Interactive Pop-Up Chat Window */}
          {showWhatsAppPopup && (
            <div className="absolute bottom-22 right-0 w-[340px] sm:w-[380px] max-w-[calc(100vw-24px)] bg-white rounded-xl shadow-2xl border border-stone-200/90 p-5 text-slate-800 z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    PE
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Pivora Estates</h4>
                    <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Online | Replies instantly
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Close popup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message Bubble */}
              <div className="py-4 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                <p className="bg-stone-100/90 p-3.5 rounded-lg text-slate-700 leading-relaxed font-normal">
                  👋 Hello! Welcome to Pivora Estates. Looking for floor plans, pricing, or an exclusive site visit in Pune?
                </p>
              </div>

              {/* Action Button */}
              <a
                href="https://wa.me/918839524392?text=Hi%2C%20I%20am%20interested%20in%20Pivora%20Estates%20residences."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-[13px] font-bold tracking-wide transition-all shadow-md active:scale-95"
              >
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
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
    </>
  );
}
