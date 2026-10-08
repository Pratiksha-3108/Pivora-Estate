'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0c0b0a] text-white pt-6 pb-6 px-4 sm:px-6 lg:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Horizontal Line ("Linnin") */}
        <div className="w-full h-[1px] bg-white/45 mb-6" />

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          
          {/* Left Side: Logo & Social Icons */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo_new.png"
                alt="Pivora Estates Logo"
                width={200}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Social Icons (Instagram, LinkedIn, Facebook) */}
            <div className="flex items-center gap-5 pt-0.5">
              <a href="#" aria-label="Instagram" className="text-white hover:text-[#d49581] transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#d49581] transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white hover:text-[#d49581] transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side: Main Nav Links & Policy Links */}
          <div className="flex flex-col items-start lg:items-end gap-5 w-full lg:w-auto">
            {/* Main Nav Links Row */}
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm sm:text-base font-normal text-white">
              <Link href="/#about" className="hover:text-[#d49581] transition-colors">
                About Us
              </Link>
              <Link href="/#projects" className="hover:text-[#d49581] transition-colors">
                Projects
              </Link>
              <Link href="/#amenities" className="hover:text-[#d49581] transition-colors">
                Amenities
              </Link>
              <Link href="/#services" className="hover:text-[#d49581] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="hover:text-[#d49581] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Inline Policy Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-300">
              <Link href="#" className="hover:text-white transition-colors">
                Payment Policy
              </Link>
              <span className="text-white/30 font-light">|</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/30 font-light">|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Line ("Linnin") */}
        <div className="w-full h-[1px] bg-white/45 my-5" />

        {/* Bottom Address & Copyright Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* Left: Office Address */}
          <div>
            <p className="text-slate-300 font-normal">
              Mundhwa, Pune, Maharashtra - 411036, India
            </p>
          </div>

          {/* Right: Copyright */}
          <div>
            <p className="text-slate-300 font-normal">
              Powered by Pivora Estates Private Limited © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
