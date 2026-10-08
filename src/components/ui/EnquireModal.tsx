'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultProjectName?: string;
}

export default function EnquireModal({
  isOpen,
  onClose,
}: EnquireModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    configuration: '',
    message: '',
  });

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedPrivacy) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-7 sm:p-10 max-h-[92vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="text-2xl font-serif font-bold text-slate-900">Inquiry Submitted!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you for contacting <span className="font-bold text-slate-900">Pivora Estates</span>. Our senior real estate advisor will get in touch with you shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Modal Heading */}
            <div className="text-center pt-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-800 tracking-tight">
                Welcome to Pivora Estates
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                
                {/* FULL NAME */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    FULL NAME<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value.replace(/[^a-zA-Z\s]/g, '') })
                    }
                    className="w-full pb-2 pt-1 border-b border-slate-300 text-xs sm:text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors bg-transparent"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    EMAIL<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pb-2 pt-1 border-b border-slate-300 text-xs sm:text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors bg-transparent"
                  />
                </div>

                {/* MOBILE */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    MOBILE<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2 pb-2 pt-1 border-b border-slate-300 focus-within:border-slate-900 transition-colors">
                    <div className="flex items-center gap-1 text-xs font-semibold text-slate-800 shrink-0">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      placeholder="Number"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })
                      }
                      className="w-full text-xs sm:text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* CONFIGURATION */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    CONFIGURATION<span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.configuration}
                    onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                    className="w-full pb-2 pt-1 border-b border-slate-300 text-xs sm:text-sm font-normal text-slate-900 focus:outline-none focus:border-slate-900 transition-colors bg-transparent cursor-pointer"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="2 BHK">2 BHK Luxury Apartment</option>
                    <option value="3 BHK">3 BHK Luxury Apartment</option>
                    <option value="4 BHK">4 BHK Luxury Residence</option>
                    <option value="Penthouse">Penthouse / Sky Villa</option>
                    <option value="Commercial">Commercial Office / Suite</option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  MESSAGE
                </label>
                <input
                  type="text"
                  placeholder="Message (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pb-2 pt-1 border-b border-slate-300 text-xs sm:text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors bg-transparent"
                />
              </div>

              {/* PRIVACY POLICY CHECKBOX */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  checked={agreedPrivacy}
                  onChange={(e) => setAgreedPrivacy(e.target.checked)}
                  className="w-4 h-4 accent-slate-900 rounded cursor-pointer"
                />
                <label htmlFor="privacyPolicy" className="text-[11px] sm:text-xs text-slate-600 font-medium cursor-pointer">
                  Yes, I agree with the <span className="font-bold text-slate-900 underline">Privacy Policy</span>
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={!agreedPrivacy}
                  className="px-10 py-3.5 rounded-full bg-black hover:bg-slate-900 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 cursor-pointer inline-block"
                >
                  SUBMIT INQUIRY
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
