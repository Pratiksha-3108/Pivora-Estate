'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Building2 } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '@/data/showcaseProjects';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultProjectName?: string;
}

const DEFAULT_PROJECT_LIST = Array.from(
  new Set([
    ...SHOWCASE_PROJECTS.map((p) => p.name),
    'Pivora Elevate',
    'Tower 108 Business & Sky Suites',
    'VTP Bellissimo',
    'Godrej Horizon',
    'Panchshil Sky Pent-Villas',
    'Kasturi Apostrophe',
    'Supreme Villagio Row Houses',
    'Kolte Patil Life Republic Townships',
  ])
);

export default function EnquireModal({
  isOpen,
  onClose,
  title = 'ENQUIRE NOW',
  defaultProjectName = '',
}: EnquireModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [availableProjects, setAvailableProjects] = useState<string[]>(DEFAULT_PROJECT_LIST);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: DEFAULT_PROJECT_LIST[0],
    requirement: '2 BHK',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      let target = defaultProjectName?.trim() || '';
      
      if (!target && title && title.includes('-')) {
        const parts = title.split('-');
        parts.shift();
        target = parts.join('-').trim();
      }

      if (target) {
        const exactMatch = DEFAULT_PROJECT_LIST.find(
          (p) => p.toLowerCase() === target.toLowerCase()
        );
        const partialMatch = DEFAULT_PROJECT_LIST.find(
          (p) =>
            p.toLowerCase().includes(target.toLowerCase()) ||
            target.toLowerCase().includes(p.toLowerCase())
        );

        const finalProject = exactMatch || partialMatch || target;

        // ONLY show the specific project that was clicked in the dropdown
        setAvailableProjects([finalProject]);
        setFormData((prev) => ({
          ...prev,
          project: finalProject,
        }));
      } else {
        // General enquiry from Navbar/Footer: list all projects
        setAvailableProjects(DEFAULT_PROJECT_LIST);
        setFormData((prev) => ({
          ...prev,
          project: DEFAULT_PROJECT_LIST[0],
        }));
      }
    }
  }, [isOpen, defaultProjectName, title]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-serif font-bold text-slate-900">Inquiry Received!</h3>
            <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you for inquiring about <span className="font-bold text-slate-900">{formData.project}</span>. Our senior estate executive will contact you shortly with full details & floor plans.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BD7E6C]">
                PIVORA ESTATES
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight mt-1">
                {title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details to receive project specifications, floor plans & private viewing arrangements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* FULL NAME */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value.replace(/[^a-zA-Z\s]/g, '') })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-800 transition-colors"
                />
              </div>

              {/* PHONE NUMBER & EMAIL ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    placeholder="10-digit Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>
              </div>

              {/* SPECIFIC PROJECT NAME (AUTO-SELECTED FROM VIEW DETAILS BUTTON) */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#BD7E6C]" />
                  <span>Specific Project</span>
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-800 transition-colors cursor-pointer"
                >
                  {availableProjects.map((proj) => (
                    <option key={proj} value={proj}>
                      {proj}
                    </option>
                  ))}
                </select>
              </div>

              {/* REQUIREMENT DROPDOWN (2 BHK, 3 BHK, 4 BHK) */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Requirement
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-800 transition-colors cursor-pointer"
                >
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific queries or preferred visit timing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-800 transition-colors resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-[#BD7E6C] hover:bg-[#a66a59] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-98 cursor-pointer"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
