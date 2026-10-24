'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

// Small inline social icons (no extra packages needed)
const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const SOCIALS = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <Svg>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </Svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <Svg>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </Svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <Svg>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </Svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <Svg>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </Svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquire } = useEnquire();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href: string) => href === '/' && pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#f5f4ef]/95 backdrop-blur-md border-b border-stone-200/80 text-slate-900 ${
        scrolled ? 'shadow-md py-1.5' : 'shadow-xs py-2.5'
      }`}
    >

      {/* ===== Main nav row ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 sm:h-11 flex items-center justify-start">
              <Image
                src="/assets/pivora_logo_footer.png"
                alt="Pivora Estates Logo"
                width={220}
                height={72}
                priority
                className="h-full w-auto object-contain brightness-0 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </Link>

          {/* Center: Links (active link has underline) */}
          {/* Center: Links with text roll (slide-up) hover animation */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative py-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    active
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

          {/* Right: Button */}
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
              className="p-2 rounded-lg text-slate-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
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

            <div className="flex items-center gap-5 pt-2 text-slate-600">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="hover:text-[#BD7E6C]"
                >
                  {s.icon}
                </a>
              ))}
            </div>

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