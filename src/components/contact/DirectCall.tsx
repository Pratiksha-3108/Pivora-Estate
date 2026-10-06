'use client';

import React, { useState } from 'react';
import { Phone, HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I access off-market private listings?',
    a: 'Due to confidentiality agreements with sellers, our off-market portfolio requires identity verification and a signed non-disclosure agreement (NDA). Once verified, you receive a tailored dossier.'
  },
  {
    q: 'Can Pivora assist with international luxury property taxation & legal structuring?',
    a: 'Yes. We partner with elite family office legal advisors and international tax attorneys across North America, Europe, and the Middle East to facilitate cross-border capital flow efficiently.'
  },
  {
    q: 'What are the options for virtual 3D immersive walk-throughs?',
    a: 'We provide ultra-high resolution LiDAR 3D scans and private live video tours hosted by senior partner brokers for clients operating remotely.'
  },
  {
    q: 'What is the minimum valuation for properties listed with Pivora?',
    a: 'We specialize in trophy assets valued from $5,000,000 to over $100,000,000.'
  }
];

export default function DirectCall() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-8 font-poppins">
      {/* 24/7 Hotline Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#f8f5f0] border border-stone-200/80 flex items-center justify-center text-[#BD7E6C] shrink-0">
            <Phone className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">24/7 Private VIP Hotline</h4>
            <p className="text-xs text-slate-500 font-normal">Direct encrypted line for active buyers & sellers</p>
          </div>
        </div>
        <a
          href="tel:+18005559090"
          className="rounded-full bg-[#BD7E6C] hover:bg-[#a46352] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-sm shrink-0 cursor-pointer active:scale-95"
        >
          Call Now
        </a>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BD7E6C]">
          <HelpCircle className="w-4 h-4 text-[#BD7E6C]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">Advisory FAQs</h3>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs font-bold text-slate-800 hover:text-[#BD7E6C] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#BD7E6C] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-stone-100 pt-3 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
