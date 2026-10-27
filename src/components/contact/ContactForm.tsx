'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const propertyParam = searchParams.get('property') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    configuration: '',
    message: '',
  });

  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (propertyParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inquiry for ${propertyParam}`,
      }));
    }
  }, [propertyParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedPrivacy) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white p-7 sm:p-10 rounded-[2rem] border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative font-poppins">
      <div className="space-y-2 mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
          SEND AN ENQUIRY
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
          We&apos;d Love to Hear From You
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
          Fill in your details below and our team will get back to you promptly.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
          <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
          <h4 className="text-2xl font-serif font-bold text-slate-900">Inquiry Submitted!</h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <span className="font-bold text-slate-900">{formData.fullName || 'Guest'}</span>. Our senior real estate advisor has received your details and will get in touch shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                mobile: '',
                configuration: '',
                message: '',
              });
            }}
            className="px-6 py-2.5 rounded-full bg-black hover:bg-slate-900 text-xs font-bold text-white uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
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
                  setFormData({
                    ...formData,
                    fullName: e.target.value.replace(/[^a-zA-Z\s]/g, ''),
                  })
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
                    setFormData({
                      ...formData,
                      mobile: e.target.value.replace(/\D/g, '').slice(0, 10),
                    })
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
                onChange={(e) =>
                  setFormData({ ...formData, configuration: e.target.value })
                }
                className={`w-full pb-2 pt-1 border-b border-slate-300 text-xs sm:text-sm font-normal focus:outline-none focus:border-slate-900 transition-colors bg-transparent cursor-pointer ${
                  formData.configuration ? 'text-slate-900 font-medium' : 'text-slate-400'
                }`}
              >
                <option value="" disabled className="text-slate-400">
                  Select
                </option>
                <option value="2 BHK" className="text-slate-900">
                  2 BHK Luxury Apartment
                </option>
                <option value="3 BHK" className="text-slate-900">
                  3 BHK Luxury Apartment
                </option>
                <option value="4 BHK" className="text-slate-900">
                  4 BHK Luxury Residence
                </option>
                <option value="Penthouse" className="text-slate-900">
                  Penthouse / Sky Villa
                </option>
                <option value="Commercial" className="text-slate-900">
                  Commercial Office / Suite
                </option>
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

          {/* PRIVACY POLICY CHECKBOX (CONSENT BOX) */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="privacyConsent"
              required
              checked={agreedPrivacy}
              onChange={(e) => setAgreedPrivacy(e.target.checked)}
              className="w-4 h-4 accent-slate-900 rounded cursor-pointer"
            />
            <label
              htmlFor="privacyConsent"
              className="text-[11px] sm:text-xs text-slate-600 font-medium cursor-pointer"
            >
              Yes, I agree with the{' '}
              <Link
                href="/privacy-policy"
                className="font-bold text-slate-900 underline hover:text-[#BD7E6C] transition-colors"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#BD7E6C] hover:bg-[#183D35] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl active:scale-95"
            >
              <span>{loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:rotate-45" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
