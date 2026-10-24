'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Search, ChevronDown, Check } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '@/data/showcaseProjects';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultProjectName?: string;
}

export default function EnquireModal({
  isOpen,
  onClose,
  title,
  defaultProjectName = '',
}: EnquireModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    projectName: '',
    configuration: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      const matched = SHOWCASE_PROJECTS.find(
        (p) => p.name.toLowerCase() === (defaultProjectName || '').toLowerCase()
      );
      let initialConfig = '';
      if (matched) {
        const confLower = matched.configuration.toLowerCase();
        if (confLower.includes('office') || confLower.includes('commercial')) {
          initialConfig = 'Commercial';
        } else if (confLower.includes('penthouse')) {
          initialConfig = 'Penthouse';
        } else if (confLower.includes('4 bhk')) {
          initialConfig = '4 BHK';
        } else if (confLower.includes('3 bhk')) {
          initialConfig = '3 BHK';
        } else if (confLower.includes('2 bhk')) {
          initialConfig = '2 BHK';
        }
      }

      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        projectName: defaultProjectName || '',
        configuration: initialConfig,
        message: '',
      });
      setSearchTerm('');
      setIsDropdownOpen(false);
      setSubmitted(false);
    } else {
      setSubmitted(false);
      setIsDropdownOpen(false);
    }
  }, [isOpen, defaultProjectName]);

  // Handle click outside to close project search dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // When opened from a specific project card, ONLY that specific project is visible in the dropdown
  const baseProjects = defaultProjectName
    ? SHOWCASE_PROJECTS.filter(
        (proj) => proj.name.toLowerCase() === defaultProjectName.toLowerCase()
      )
    : SHOWCASE_PROJECTS;

  const displayProjectList =
    defaultProjectName && baseProjects.length === 0
      ? [
          {
            id: 'custom-proj',
            name: defaultProjectName,
            builder: 'Pivora Estates',
            location: 'Pune',
            configuration: '',
            sizeSqft: '',
            possession: '',
            price: '',
            badge: '',
            image: '',
            description: '',
          },
        ]
      : baseProjects;

  const filteredProjects = displayProjectList.filter((proj) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      proj.name.toLowerCase().includes(term) ||
      proj.location.toLowerCase().includes(term) ||
      proj.configuration.toLowerCase().includes(term)
    );
  });

  const handleSelectProject = (projName: string) => {
    const matched = SHOWCASE_PROJECTS.find((p) => p.name === projName);
    let newConfig = formData.configuration;
    if (matched && !newConfig) {
      const confLower = matched.configuration.toLowerCase();
      if (confLower.includes('office') || confLower.includes('commercial')) {
        newConfig = 'Commercial';
      } else if (confLower.includes('penthouse')) {
        newConfig = 'Penthouse';
      } else if (confLower.includes('4 bhk')) {
        newConfig = '4 BHK';
      } else if (confLower.includes('3 bhk')) {
        newConfig = '3 BHK';
      } else if (confLower.includes('2 bhk')) {
        newConfig = '2 BHK';
      }
    }
    setFormData((prev) => ({
      ...prev,
      projectName: projName,
      configuration: newConfig,
    }));
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedPrivacy) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 select-none cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-7 sm:p-10 max-h-[92vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-default"
      >
        
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
              Thank you for contacting <span className="font-bold text-slate-900">Pivora Estates</span>
              {formData.projectName ? (
                <> for <span className="font-semibold text-[#BD7E6C]">{formData.projectName}</span></>
              ) : null}
              . Our senior real estate advisor will get in touch with you shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Modal Heading */}
            <div className="text-center pt-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-800 tracking-tight">
                Welcome to Pivora Estates
              </h3>
              {formData.projectName && (
                <p className="text-xs text-[#BD7E6C] font-semibold mt-1">
                  Inquiry for <span className="font-bold text-slate-900">{formData.projectName}</span>
                </p>
              )}
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

                {/* PROJECT NAME (SEARCHABLE SELECT) */}
                <div className="space-y-1.5 relative" ref={dropdownRef}>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    PROJECT NAME<span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="w-full pb-2 pt-1 border-b border-slate-300 text-xs sm:text-sm font-normal text-left flex items-center justify-between focus:outline-none focus:border-slate-900 transition-colors bg-transparent cursor-pointer"
                  >
                    <span className={formData.projectName ? 'text-slate-900 font-medium truncate pr-2' : 'text-slate-400'}>
                      {formData.projectName || 'Select or search project'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-slate-800' : ''
                      }`}
                    />
                  </button>

                  {/* Hidden input for HTML validation if required */}
                  <input
                    type="text"
                    tabIndex={-1}
                    aria-hidden="true"
                    required
                    value={formData.projectName}
                    onChange={() => {}}
                    className="opacity-0 absolute pointer-events-none h-0 w-0 -bottom-1"
                  />

                  {/* Searchable Dropdown Popup */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-2.5 space-y-2 animate-in fade-in slide-in-from-top-1 duration-150 max-w-full">
                      {/* Search Bar - only shown when browsing all projects */}
                      {!defaultProjectName && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-slate-900 focus-within:bg-white transition-all">
                          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <input
                            type="text"
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search project name..."
                            className="w-full text-xs bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-400"
                          />
                          {searchTerm && (
                            <button
                              type="button"
                              onClick={() => setSearchTerm('')}
                              className="text-slate-400 hover:text-slate-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      )}

                      {/* Projects List - only shows the single project when opened from a card */}
                      <div className="max-h-48 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                        {filteredProjects.length > 0 ? (
                          filteredProjects.map((proj) => {
                            const isSelected = formData.projectName === proj.name;
                            return (
                              <button
                                key={proj.id}
                                type="button"
                                onClick={() => handleSelectProject(proj.name)}
                                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? 'bg-slate-900 text-white font-semibold'
                                    : 'hover:bg-slate-100 text-slate-800'
                                }`}
                              >
                                <div className="truncate pr-2">
                                  <div className="font-medium truncate">{proj.name}</div>
                                  <div className={`text-[10px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                                    {proj.location} • {proj.configuration}
                                  </div>
                                </div>
                                {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-white" />}
                              </button>
                            );
                          })
                        ) : (
                          <div className="py-3 text-center text-xs text-slate-400">
                            No projects match "{searchTerm}"
                          </div>
                        )}

                        {!defaultProjectName && (
                          <button
                            type="button"
                            onClick={() => handleSelectProject('General Inquiry / All Projects')}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors border-t border-slate-100 mt-1 cursor-pointer ${
                              formData.projectName === 'General Inquiry / All Projects'
                                ? 'bg-slate-900 text-white font-semibold'
                                : 'hover:bg-slate-100 text-slate-600'
                            }`}
                          >
                            <span className="font-medium">General Inquiry / All Projects</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* CONFIGURATION */}
                <div className="space-y-1.5 sm:col-span-2">
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
