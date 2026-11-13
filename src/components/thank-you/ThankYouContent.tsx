'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || '';

  return (
    <div className="w-full">
      {/* Central Confirmation Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* Top Header Accent */}
        <div className="bg-gradient-to-r from-[#BD7E6C]/10 via-[#183D35]/10 to-[#BD7E6C]/10 py-3 px-6 border-b border-stone-200/60 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#BD7E6C] inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#BD7E6C]" />
            Official Channel Partner Advisory &bull; Pivora Estates
          </span>
        </div>

        <div className="p-7 sm:p-12 text-center space-y-6">
          {/* Animated Success Badge */}
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full bg-emerald-500/10 animate-ping pointer-events-none" />
            <div className="relative w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center border-2 border-emerald-500 shadow-md">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 stroke-[2.2]" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              {userName ? `Thank You, ${userName}!` : 'Thank You!'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Your inquiry has been received with priority. A senior property advisor from our Pune headquarters will review your requirements and connect with you shortly.
            </p>
          </div>

          {/* Quick Immediate Contact Options */}
          <div className="pt-6 border-t border-stone-200/80">
            <p className="text-xs text-slate-500 mb-4">
              Need immediate assistance? Reach our advisory desk directly:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/918839524392"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+918839524392"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 88395 24392</span>
              </a>

              <a
                href="mailto:info@pivoraestates.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-slate-700 text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>info@pivoraestates.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white px-7 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-white hover:bg-stone-100 border border-stone-300 text-slate-800 px-7 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95"
            >
              <span>RETURN TO HOME</span>
            </Link>
          </div>

        </div>

        {/* Bottom Location strip */}
        <div className="bg-[#fbf9f5] border-t border-stone-200/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-[#BD7E6C] shrink-0" />
            <span>Office No. 504, Sai Millennium, 5th Floor, Punawale, Pune – 411033</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Mon &ndash; Sat: 10:00 AM &ndash; 7:00 PM</span>
          </div>
        </div>

      </div>
    </div>
  );
}
