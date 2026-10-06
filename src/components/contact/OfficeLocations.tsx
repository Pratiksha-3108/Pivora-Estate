'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

const OFFICES = [
  {
    city: 'New York City',
    region: 'North America HQ',
    address: '767 Fifth Avenue, 42nd Floor',
    zip: 'New York, NY 10153',
    phone: '+1 (212) 890-4431',
    email: 'ny@pivoraestates.com',
    hours: 'Mon - Fri: 8:00 AM - 7:00 PM EST'
  },
  {
    city: 'Beverly Hills / Malibu',
    region: 'West Coast Advisory',
    address: '9570 Wilshire Boulevard',
    zip: 'Beverly Hills, CA 90212',
    phone: '+1 (310) 554-9920',
    email: 'ca@pivoraestates.com',
    hours: 'Mon - Fri: 8:00 AM - 7:00 PM PST'
  },
  {
    city: 'London Mayfair',
    region: 'EMEA Headquarters',
    address: '14 Berkeley Square, Mayfair',
    zip: 'London W1J 6AE, United Kingdom',
    phone: '+44 20 7946 0912',
    email: 'london@pivoraestates.com',
    hours: 'Mon - Fri: 8:30 AM - 6:30 PM GMT'
  },
  {
    city: 'Zurich / St. Moritz',
    region: 'Swiss Alpine Advisory',
    address: 'Bahnhofstrasse 45',
    zip: '8001 Zürich, Switzerland',
    phone: '+41 44 211 8000',
    email: 'swiss@pivoraestates.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM CET'
  }
];

export default function OfficeLocations() {
  return (
    <div className="space-y-6 font-poppins">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BD7E6C]">
          <Globe className="w-4 h-4 text-[#BD7E6C]" />
          <span>Global Private Lounges</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">International Offices</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {OFFICES.map((office, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200/90 space-y-4 relative group shadow-xs hover:shadow-md hover:border-[#BD7E6C]/40 transition-all">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#BD7E6C] transition-colors">
                {office.city}
              </h4>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#BD7E6C] bg-[#f8f5f0] px-2.5 py-1 rounded-full border border-stone-200/80 shrink-0">
                {office.region}
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-600 font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#BD7E6C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">{office.address}</p>
                  <p className="text-slate-500">{office.zip}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#BD7E6C] shrink-0" />
                <a href={`tel:${office.phone}`} className="hover:text-[#BD7E6C] transition-colors font-medium">
                  {office.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#BD7E6C] shrink-0" />
                <a href={`mailto:${office.email}`} className="hover:text-[#BD7E6C] transition-colors font-medium">
                  {office.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-stone-100 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 text-[#BD7E6C] shrink-0" />
                <span>{office.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
