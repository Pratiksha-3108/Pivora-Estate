'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

export default function Navbar() {
  const [pastAbout, setPastAbout] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquire } = useEnquire();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        // Track whether scroll position has reached the About section
        const aboutEl = document.getElementById('about');
        if (aboutEl) {
          const rect = aboutEl.getBoundingClientRect();
          // Navbar height offset is ~80px
          setPastAbout(rect.top <= 80);
        } else {
          setPastAbout(window.scrollY > window.innerHeight - 100);
        }
      } else {
        // On sub-pages without the home hero, show background after initial scroll
        setPastAbout(window.scrollY > 40);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href: string) => href === '/' && pathname === '/';

  // Transparent navbar when at top of home page (before reaching the About section)
  const isTransparent = !pastAbout;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-b border-transparent shadow-none py-3 sm:py-4'
          : 'bg-[#f5f4ef]/95 backdrop-blur-md border-b border-stone-200/80 shadow-md py-2 sm:py-2.5 text-slate-900'
      }`}
    >
      {/* ===== Main nav row ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo (bg_remove_logo.png when transparent before about section, footer logo when scrolled) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 sm:h-12 flex items-center justify-start">
              <Image
                src={isTransparent ? '/assets/bg_remove_logo.png' : '/assets/pivora_logo_footer.png'}
                alt="Pivora Estates Logo"
                width={220}
                height={72}
                priority
                className={`h-full w-auto object-contain group-hover:scale-105 transition-all duration-300 ${
                  isTransparent ? '' : 'brightness-0'
                }`}
              />
            </div>
          </Link>

          {/* Center: Links with text roll hover animation */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative py-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    isTransparent
                      ? active
                        ? 'text-white font-bold'
                        : 'text-white/85 hover:text-white'
                      : active
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {/* Rolling text wrapper */}
                  <span className="relative inline-block overflow-hidden h-4 leading-4">
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="absolute inset-0 block text-[#BD7E6C] transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                      {link.name}
                    </span>
                  </span>

                  {/* Active / Hover underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#BD7E6C] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Enquire Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openEnquire('ENQUIRE NOW')}
              className="group inline-flex items-center gap-2.5 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl active:scale-95"
            >
              <span>ENQUIRE NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:rotate-45" />
            </button>
          </div>

          {/* Mobile trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => openEnquire('ENQUIRE NOW')}
              className="group md:hidden inline-flex items-center gap-1.5 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white px-3.5 py-2 text-[11px] font-bold tracking-wider uppercase shadow-xs transition-all duration-300"
            >
              <span>ENQUIRE</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2.5] transition-transform duration-300 ease-out group-hover:rotate-45" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isTransparent ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-stone-200/60'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile drawer ===== */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 backdrop-blur-xl bg-[#f5f4ef]/95 border-stone-200/80 text-slate-900">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-bold uppercase tracking-widest py-2 border-b border-stone-200/80 hover:text-[#BD7E6C] ${
                  isActive(link.href) ? 'text-[#BD7E6C]' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquire('ENQUIRE NOW');
              }}
              className="group mt-2 w-full inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white py-3 text-xs font-bold tracking-widest uppercase text-center shadow-md active:scale-95 transition-all"
            >
              <span>ENQUIRE NOW</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 ease-out group-hover:rotate-45" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}