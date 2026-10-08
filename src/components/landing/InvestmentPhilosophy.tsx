'use client';

import React from 'react';
import { PHILOSOPHY_POINTS } from '@/data/properties';
import { ShieldCheck, TrendingUp, UserCheck, Compass, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Compass
};

export default function InvestmentPhilosophy() {
  return (
    <section id="about" className="py-24 relative bg-[#f7f2ef]/70 border-y border-[#c8816e]/15 overflow-hidden scroll-mt-20">
      {/* Target anchor for Services link */}
      <div id="services" className="scroll-mt-24" />

      {/* Background radial glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#c8816e]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a96150]">
              <ShieldCheck className="w-4 h-4 text-[#c8816e]" />
              <span>About & Advisory Services</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e1b18] tracking-tight leading-tight">
              Our Advisory <br />
              <span className="rosegold-gradient-text font-serif italic">Philosophy</span> & Services
            </h2>

            <p className="text-sm text-[#4a443e] leading-relaxed font-normal">
              Acquiring prime luxury real estate requires more than traditional brokerage. We combine spatial AI intelligence, discreet off-market networks, and private tax-efficient structuring to safeguard your generational capital.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Absolute confidentiality & NDAs guaranteed',
                'Comprehensive architectural & structural audit',
                'Custom wealth preservation tax structures',
                'Dedicated 24/7 private family office liaison'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-[#1e1b18] font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#c8816e] shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Grid of 4 Philosophy Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHILOSOPHY_POINTS.map((point, idx) => {
              const Icon = ICON_MAP[point.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-[#c8816e]/15 space-y-4 relative group bg-white shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f7f2ef] border border-[#c8816e]/20 flex items-center justify-center text-[#c8816e] group-hover:scale-110 group-hover:bg-[#c8816e] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#1e1b18] group-hover:text-[#c8816e] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#4a443e] leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
