'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, ShieldCheck, User, Mail, Phone, Building, Clock, DollarSign } from 'lucide-react';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const propertyParam = searchParams.get('property') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyInterest: propertyParam || 'General Portfolio Query',
    budget: '$5M - $10M',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: '',
    ndaAgreement: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (propertyParam) {
      setFormData((prev) => ({
        ...prev,
        propertyInterest: propertyParam,
        message: `I would like to schedule a private viewing for ${propertyParam}.`
      }));
    }
  }, [propertyParam]);

  const validate = (dataToValidate = formData) => {
    const newErrors: Record<string, string> = {};

    const nameTrimmed = dataToValidate.fullName.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameTrimmed) {
      newErrors.fullName = 'Full Name is required.';
    } else if (nameTrimmed.length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters.';
    } else if (!nameRegex.test(nameTrimmed)) {
      newErrors.fullName = 'Full Name must contain letters only (no numbers).';
    }

    const phoneTrimmed = dataToValidate.phone.trim();
    const phoneDigits = phoneTrimmed.replace(/\D/g, '');
    const hasNonDigits = /\D/.test(phoneTrimmed);

    if (!phoneTrimmed) {
      newErrors.phone = 'Mobile Number is required.';
    } else if (hasNonDigits || phoneDigits.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number (digits only).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!dataToValidate.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(dataToValidate.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!dataToValidate.message.trim()) {
      newErrors.message = 'Enquiry message is required.';
    } else if (dataToValidate.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }

    if (!dataToValidate.ndaAgreement) {
      newErrors.ndaAgreement = 'You must accept the contact authorization to proceed.';
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate(formData);
    setErrors(currentErrors);
  };

  const handleChange = (field: string, value: any) => {
    let finalValue = value;
    if (field === 'phone') {
      finalValue = typeof value === 'string' ? value.replace(/\D/g, '').slice(0, 10) : value;
    } else if (field === 'fullName') {
      finalValue = typeof value === 'string' ? value.replace(/[^a-zA-Z\s]/g, '') : value;
    }
    const updatedForm = { ...formData, [field]: finalValue };
    setFormData(updatedForm);
    if (touched[field]) {
      const fieldErrors = validate(updatedForm);
      setErrors(fieldErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    // Mark all fields as touched
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      message: true,
      ndaAgreement: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-[2rem] border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative font-poppins">
      <div className="space-y-2.5 mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BD7E6C] block">
          SEND AN ENQUIRY
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
          We'd Love to Hear From You
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
          Fill in your details below and our team will get back to you promptly.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-slate-900">Inquiry Successfully Sent</h4>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-[#BD7E6C] font-bold">{formData.fullName}</span>. A Senior Estate Director has received your request regarding <span className="text-slate-900 font-bold">{formData.propertyInterest}</span> and will contact you via {formData.email} directly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-[#f8f5f0] text-xs font-bold text-slate-800 border border-stone-300 transition-colors shadow-xs"
          >
            Send Additional Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                placeholder="Full Name"
                className={`w-full bg-[#f8f5f0]/80 border rounded-xl px-4 py-3 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                  touched.fullName && errors.fullName
                    ? 'border-rose-500 ring-2 ring-rose-500/20'
                    : 'border-stone-200/90 focus:border-[#BD7E6C] focus:ring-2 focus:ring-[#BD7E6C]/20'
                }`}
              />
              {touched.fullName && errors.fullName && (
                <p className="text-[11px] font-medium text-rose-500 pt-0.5">{errors.fullName}</p>
              )}
            </div>

            {/* Telephone */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                onBlur={() => handleBlur('phone')}
                placeholder="10-digit Mobile Number"
                className={`w-full bg-[#f8f5f0]/80 border rounded-xl px-4 py-3 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                  touched.phone && errors.phone
                    ? 'border-rose-500 ring-2 ring-rose-500/20'
                    : 'border-stone-200/90 focus:border-[#BD7E6C] focus:ring-2 focus:ring-[#BD7E6C]/20'
                }`}
              />
              {touched.phone && errors.phone && (
                <p className="text-[11px] font-medium text-rose-500 pt-0.5">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="name@example.com"
                className={`w-full bg-[#f8f5f0]/80 border rounded-xl px-4 py-3 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                  touched.email && errors.email
                    ? 'border-rose-500 ring-2 ring-rose-500/20'
                    : 'border-stone-200/90 focus:border-[#BD7E6C] focus:ring-2 focus:ring-[#BD7E6C]/20'
                }`}
              />
              {touched.email && errors.email && (
                <p className="text-[11px] font-medium text-rose-500 pt-0.5">{errors.email}</p>
              )}
            </div>

            {/* Property Interest */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Target Estate Interest
              </label>
              <input
                type="text"
                value={formData.propertyInterest}
                onChange={(e) => handleChange('propertyInterest', e.target.value)}
                placeholder="Project name or enquiry topic"
                className="w-full bg-[#f8f5f0]/80 border border-stone-200/90 rounded-xl px-4 py-3 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-[#BD7E6C] focus:bg-white focus:ring-2 focus:ring-[#BD7E6C]/20 transition-all"
              />
            </div>

            {/* Budget Range */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Investment Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-full bg-[#f8f5f0]/80 border border-stone-200/90 rounded-xl px-4 py-3 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#BD7E6C] focus:bg-white cursor-pointer transition-all"
              >
                <option value="$3M - $5M">$3,000,000 - $5,000,000</option>
                <option value="$5M - $10M">$5,000,000 - $10,000,000</option>
                <option value="$10M - $20M">$10,000,000 - $20,000,000</option>
                <option value="$20M+">$20,000,000+ Trophy Assets</option>
              </select>
            </div>
          </div>

          {/* Enquiry Details Message */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
              Your Message / Enquiry Details <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              placeholder="Tell us about the project you are interested in or questions you have..."
              className={`w-full bg-[#f8f5f0]/80 border rounded-xl px-4 py-3 text-xs text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white transition-all resize-none ${
                touched.message && errors.message
                  ? 'border-rose-500 ring-2 ring-rose-500/20'
                  : 'border-stone-200/90 focus:border-[#BD7E6C] focus:ring-2 focus:ring-[#BD7E6C]/20'
              }`}
            />
            {touched.message && errors.message && (
              <p className="text-[11px] font-medium text-rose-500 pt-0.5">{errors.message}</p>
            )}
          </div>

          {/* Authorization Checkbox */}
          <div className="space-y-1">
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="nda"
                checked={formData.ndaAgreement}
                onChange={(e) => handleChange('ndaAgreement', e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-stone-300 text-[#BD7E6C] focus:ring-[#BD7E6C] accent-[#BD7E6C] cursor-pointer shrink-0"
              />
              <label htmlFor="nda" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer font-normal">
                I authorize Pivora and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call.
              </label>
            </div>
            {touched.ndaAgreement && errors.ndaAgreement && (
              <p className="text-[11px] font-medium text-rose-500 pl-7">{errors.ndaAgreement}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#BD7E6C] hover:bg-[#a46352] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer disabled:opacity-75"
            >
              {loading ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
