'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEnquire } from '@/context/EnquireContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquire } = useEnquire();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '/#about' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'AMENITIES', href: '/#amenities' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-44 sm:h-14 sm:w-56 flex items-center justify-start">
              <Image
                src="/assets/logo_new.png"
                alt="Pivora Estates Logo"
                width={240}
                height={70}
                priority
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#c8816e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c8816e] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openEnquire('ENQUIRE NOW')}
              className="rounded-full bg-[#BD7E6C] hover:bg-[#a66a59] text-white px-7 py-2.5 text-xs font-bold tracking-widest transition-all uppercase cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => openEnquire('ENQUIRE NOW')}
              className="md:hidden rounded-full bg-[#BD7E6C] text-white px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase shadow-xs"
            >
              ENQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold text-slate-800 hover:text-[#BD7E6C] uppercase tracking-widest py-2 border-b border-slate-100"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnquire('ENQUIRE NOW');
              }}
              className="mt-2 w-full rounded-full bg-[#BD7E6C] hover:bg-[#a66a59] text-white py-3 text-xs font-bold tracking-widest uppercase text-center shadow-md active:scale-95 transition-all"
            >
              ENQUIRE NOW
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}


