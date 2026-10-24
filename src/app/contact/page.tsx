import React, { Suspense } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import ContactDetailsCards from '@/components/contact/ContactDetailsCards';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact VIP Advisory | Pivora Estates',
  description: 'Connect with Pivora Estates private advisors for off-market luxury estate viewings, investment consultations, and confidential estate acquisition.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen font-poppins text-slate-800">
      {/* Top Hero Image Banner */}
      <section className="relative w-full h-[50vh] min-h-[380px] max-h-[550px] overflow-hidden select-none bg-slate-950">
        {/* Full Cover Banner Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/contact_banner.jpeg')`
          }}
        />
        
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

        {/* Glassy Box in Bottom-Left Corner matching reference */}
        <div className="absolute bottom-0 left-0 z-20 bg-stone-900/80 sm:bg-black/75 backdrop-blur-md px-6 py-5 sm:px-10 sm:py-7 border-t border-r border-white/15 max-w-sm sm:max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white uppercase tracking-wider leading-tight">
            CONTACT US
          </h1>
          <div className="w-16 h-[1.5px] bg-white/50 my-2.5" />
          <div className="flex items-center gap-2 text-xs sm:text-sm font-serif text-slate-200">
            <Link href="/" className="hover:text-[#BD7E6C] transition-colors">
              Home
            </Link>
            <span className="text-white/40 font-sans">/</span>
            <span className="text-white font-medium">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Landing Page Background Colour */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] relative overflow-hidden border-t border-stone-200/80">
        {/* Soft Ambient Radial Background Glows matching landing page */}
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#BD7E6C]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#e2be9b]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Get In Touch Context & Contact Details Cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Details Intro Header matching screenshot 1 & 2 */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                  Contact Details
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Whether you are seeking your dream home, exploring high-yield commercial suites, or requesting a site visit, our dedicated property advisors are at your service.
                </p>
              </div>

              {/* 4 Clean Contact Cards: Head Office, Email, Contact No, Working Hours */}
              <ContactDetailsCards />
            </div>

            {/* Right Column: Send An Enquiry Form Card */}
            <div className="lg:col-span-7 lg:sticky lg:top-28">
              <Suspense fallback={
                <div className="bg-white p-12 rounded-3xl border border-stone-200 text-center text-slate-500 shadow-sm">
                  Loading Private Inquiry Form...
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

