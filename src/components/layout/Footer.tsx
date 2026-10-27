'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0b0a] text-white py-[50px] px-4 sm:px-6 lg:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">

        {/* Top Horizontal Line */}
        <div className="w-full h-[1px] bg-white/45 mb-6" />

        {/* Main Content Area: Flat Horizontal Layout like Initial */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">

          {/* Left Side: Logo & Social Icons */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/assets/pivora_logo_footer.png"
                alt="Pivora Estates Logo"
                width={260}
                height={88}
                priority
                className="h-12 sm:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
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

          {/* Right Side: Main Nav Links & Privacy Policy */}
          <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
            {/* Main Nav Links Row */}
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm sm:text-base font-normal text-white">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#d49581] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Inline Policy Link: Only Privacy Policy (Terms & Conditions removed) */}
            <div className="flex items-center text-xs sm:text-sm text-slate-300">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>

        {/* Disclaimer Text */}
        <div className="border-t border-white/20 pt-4 pb-3">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-normal">
            <span className="text-[#d49581] font-semibold">Disclaimer:</span> We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute an offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.
          </p>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="w-full h-[1px] bg-white/20 my-3" />

        {/* All-in-One-Line: Address | Phones | Email | Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs sm:text-[13px] text-slate-300 text-center py-1">
          <span>Hinjawadi Phase 1, Pune, Maharashtra, India</span>
          <span className="text-white/30 font-light">|</span>
          <a href="tel:+919876543210" className="hover:text-white transition-colors">
            +919876543210
          </a>
          <span className="text-white/30 font-light">|</span>
          <a href="tel:+919876543211" className="hover:text-white transition-colors">
            +919876543211
          </a>
          <span className="text-white/30 font-light">|</span>
          <a href="mailto:contact@pivoraestates.com" className="hover:text-white transition-colors">
            info@pivoraestates.com
          </a>
          <span className="hidden md:inline text-white/30 font-light">|</span>
          <span className="text-slate-300">
            Powered by Pivora Estates Private Limited © {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
