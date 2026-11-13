import React, { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ThankYouContent from '@/components/thank-you/ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You | Pivora Estates',
  description: 'Thank you for contacting Pivora Estates. Your inquiry has been received with priority.',
};

export default function ThankYouPage() {
  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen font-poppins text-slate-800">
      {/* Top Hero Image Banner matching Contact Page */}
      <section className="relative w-full h-[40vh] min-h-[300px] max-h-[420px] overflow-hidden select-none bg-slate-950">
        {/* Full Cover Banner Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/contact_banner.jpeg')`
          }}
        />
        
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40 pointer-events-none" />

        {/* Glassy Box in Bottom-Left Corner */}
        <div className="absolute bottom-0 left-0 z-20 bg-stone-900/80 sm:bg-black/75 backdrop-blur-md px-6 py-5 sm:px-10 sm:py-7 border-t border-r border-white/15 max-w-sm sm:max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white uppercase tracking-wider leading-tight">
            THANK YOU
          </h1>
          <div className="w-16 h-[1.5px] bg-white/50 my-2.5" />
          <div className="flex items-center gap-2 text-xs sm:text-sm font-serif text-slate-200">
            <Link href="/" className="hover:text-[#BD7E6C] transition-colors">
              Home
            </Link>
            <span className="text-white/40 font-sans">/</span>
            <Link href="/contact" className="hover:text-[#BD7E6C] transition-colors">
              Contact Us
            </Link>
            <span className="text-white/40 font-sans">/</span>
            <span className="text-white font-medium">Thank You</span>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fbf9f5] relative overflow-hidden border-t border-stone-200/80">
        {/* Soft Ambient Radial Background Glows */}
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#BD7E6C]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#e2be9b]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense fallback={
            <div className="w-full bg-white p-12 rounded-3xl border border-stone-200 text-center text-slate-500 text-sm">
              Loading confirmation...
            </div>
          }>
            <ThankYouContent />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
