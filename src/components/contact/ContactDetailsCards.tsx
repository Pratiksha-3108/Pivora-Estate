'use client';

import React from 'react';
import { MapPin, Mail, Phone, Clock, ExternalLink } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: 'Head Office:',
    details: 'Office No. 1303/1309, Nandan Probiz, Balewadi High St., Baner, Pune, Maharashtra 411045',
    linkText: 'View on Google Maps',
    linkHref: 'https://maps.google.com/?q=Balewadi+High+St+Baner+Pune'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'enquiry@pivoraestates.com',
    linkText: null,
    linkHref: 'mailto:enquiry@pivoraestates.com'
  },
  {
    icon: Phone,
    title: 'Contact No',
    details: '+91 7447447669 / +1 (800) 555-9090',
    linkText: null,
    linkHref: 'tel:+917447447669'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Monday - Saturday: 10:00 AM - 7:00 PM',
    subDetails: 'Sunday: Site Visits by Prior Appointment',
    linkText: null,
    linkHref: null
  }
];

export default function ContactDetailsCards() {
  return (
    <div className="space-y-4 font-poppins">
      {CONTACT_ITEMS.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-xs flex items-start gap-4 hover:border-[#BD7E6C]/40 hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f8f5f0] border border-stone-200/80 flex items-center justify-center text-[#BD7E6C] shrink-0">
              <Icon className="w-5 h-5" />
            </div>

            <div className="space-y-1 text-xs">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                {item.title}
              </h4>
              
              {item.linkHref && !item.linkText ? (
                <a
                  href={item.linkHref}
                  className="text-slate-600 hover:text-[#BD7E6C] transition-colors font-medium block"
                >
                  {item.details}
                </a>
              ) : (
                <p className="text-slate-600 font-normal leading-relaxed">
                  {item.details}
                </p>
              )}

              {item.subDetails && (
                <p className="text-[11px] text-slate-500 font-normal">
                  {item.subDetails}
                </p>
              )}

              {item.linkText && item.linkHref && (
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 hover:text-[#BD7E6C] transition-colors pt-1"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
