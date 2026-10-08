import React, { Suspense } from 'react';
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
      {/* Top Hero Image Banner matching reference screenshot 1 */}
      <section className="relative w-full h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center overflow-hidden select-none bg-slate-950">
        {/* Full Cover High-Res Luxury Skyscraper Hero Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Luxury Vignette & Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90 backdrop-brightness-[0.85]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4 pt-16">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light text-stone-100 tracking-[0.18em] uppercase">
            Contact
          </h1>

          <div className="w-16 h-[2px] bg-[#BD7E6C] mx-auto opacity-80" />

          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-stone-200 font-medium max-w-3xl mx-auto leading-relaxed">
            Connect With Pivora Real Estate & Site Experience Centres
          </p>
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

