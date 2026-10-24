import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pivora Estates',
  description:
    'Learn how Pivora Estates collects, uses, and safeguards your personal data, site visit registrations, and luxury property inquiry records.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen font-poppins text-slate-800">
      {/* =========================================================================
          HERO BANNER (Matches Contact Page luxury aesthetic)
      ========================================================================= */}
      <section className="relative w-full h-[50vh] min-h-[380px] max-h-[550px] overflow-hidden select-none bg-slate-950">
        {/* Full Cover High-Res Luxury Architectural Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85')`,
          }}
        />

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

        {/* Glassy Box in Bottom-Left Corner matching Contact Us reference */}
        <div className="absolute bottom-0 left-0 z-20 bg-stone-900/80 sm:bg-black/75 backdrop-blur-md px-6 py-5 sm:px-10 sm:py-7 border-t border-r border-white/15 max-w-sm sm:max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white uppercase tracking-wider leading-tight">
            PRIVACY POLICY
          </h1>
          <div className="w-16 h-[1.5px] bg-white/50 my-2.5" />
          <div className="flex items-center gap-2 text-xs sm:text-sm font-serif text-slate-200">
            <Link href="/" className="hover:text-[#BD7E6C] transition-colors">
              Home
            </Link>
            <span className="text-white/40 font-sans">/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRIVACY POLICY CONTENT
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-14">
          
          {/* 1. Introduction */}
          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 bg-slate-900 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                1. Introduction
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                Welcome to Pivora Estates. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>
              <p>
                When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
              </p>
            </div>
          </article>

          {/* 2. Information We Collect */}
          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 bg-slate-900 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                2. Information We Collect
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website or otherwise contacting us.
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>
                    <strong>Name and Contact Data</strong> (Email address, phone number, and other similar contact data).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>
                    <strong>Credentials</strong> (Passwords and similar security information used for authentication).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>
                    <strong>Payment Data</strong> (Information necessary to process your payment if you make purchases).
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* 3. How We Use Your Information */}
          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 bg-slate-900 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                3. How We Use Your Information
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>To facilitate account creation and logon process.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>To send you marketing and promotional communications.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>To fulfill and manage your orders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>To post testimonials with your consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-800 font-bold select-none">•</span>
                  <span>To request feedback and to contact you about your use of our website.</span>
                </li>
              </ul>
            </div>
          </article>

          {/* 4. Will Your Information Be Shared With Anyone? */}
          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 bg-slate-900 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                4. Will Your Information Be Shared With Anyone?
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share data based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, and Vital Interests.
              </p>
            </div>
          </article>

          {/* 5. How Long Do We Keep Your Information? */}
          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 bg-slate-900 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                5. How Long Do We Keep Your Information?
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
              </p>
            </div>
          </article>

          {/* 6. How Do We Keep Your Information Safe? */}
          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 bg-slate-900 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                6. How Do We Keep Your Information Safe?
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </div>
          </article>

          {/* 7. Contact Us */}
          <article className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 bg-slate-900 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-serif text-slate-900 font-normal">
                7. Contact Us
              </h2>
            </div>
            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                If you have questions or comments about this policy, you may email us at{' '}
                <a
                  href="mailto:contact@pivoraestates.com"
                  className="font-bold text-slate-900 hover:text-[#BD7E6C] underline transition-colors"
                >
                  contact@pivoraestates.com
                </a>{' '}
                or by post to:
              </p>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#fbf9f5] border border-stone-200/90 text-xs sm:text-sm text-slate-700 space-y-1 max-w-sm">
                <p className="font-bold text-slate-900 text-sm sm:text-base">
                  Pivora Estates
                </p>
                <p>Hinjawadi Phase 1, Pune,</p>
                <p>Maharashtra 411057</p>
                <p>India</p>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
