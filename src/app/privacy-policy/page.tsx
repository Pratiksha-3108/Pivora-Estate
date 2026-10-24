import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  UserCheck,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pivora Estates',
  description:
    'Learn how Pivora Estates collects, uses, and safeguards your personal data, site visit registrations, and luxury property inquiry records in strict compliance with applicable privacy regulations.',
};

const SECTIONS = [
  { id: 'introduction', number: '01', title: 'Introduction & Scope' },
  { id: 'collection', number: '02', title: 'Information We Collect' },
  { id: 'usage', number: '03', title: 'How We Use Your Information' },
  { id: 'rera-legal', number: '04', title: 'RERA & Legal Compliance' },
  { id: 'sharing', number: '05', title: 'Sharing & Third-Party Disclosure' },
  { id: 'security', number: '06', title: 'Data Security & Storage' },
  { id: 'cookies', number: '07', title: 'Cookies & Analytics Technologies' },
  { id: 'rights', number: '08', title: 'Your Rights & Data Choices' },
  { id: 'retention', number: '09', title: 'Data Retention Policy' },
  { id: 'contact', number: '10', title: 'Grievance Officer & Contact' },
];

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Zero Data Selling',
    description: 'We never sell, rent, or monetize your contact or inquiry records to external marketing brokers.',
  },
  {
    icon: Lock,
    title: '256-Bit SSL Encryption',
    description: 'All online consultations, brochure requests, and site bookings are transmitted over encrypted tunnels.',
  },
  {
    icon: FileCheck2,
    title: 'RERA Compliant',
    description: 'Operating in strict alignment with Maharashtra Real Estate Regulatory Authority standards.',
  },
  {
    icon: UserCheck,
    title: 'Discreet VIP Advisory',
    description: 'Strict confidentiality agreements protect high-net-worth property acquisitions and visits.',
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 23, 2026';

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen font-poppins text-slate-800">
      {/* =========================================================================
          HERO BANNER (Matches Contact Page luxury aesthetic)
      ========================================================================= */}
      <section className="relative w-full h-[45vh] min-h-[380px] max-h-[500px] flex items-center justify-center overflow-hidden select-none bg-slate-950">
        {/* Full Cover High-Res Luxury Architectural Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85')`,
          }}
        />

        {/* Luxury Vignette & Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/60 to-slate-950/90 backdrop-brightness-[0.85]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4 pt-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#BD7E6C] block">
            LEGAL &amp; COMPLIANCE
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-stone-100 tracking-[0.16em] uppercase">
            Privacy Policy
          </h1>

          <div className="w-16 h-[2px] bg-[#BD7E6C] mx-auto opacity-80" />

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-stone-200 font-medium max-w-2xl mx-auto leading-relaxed">
            Your Privacy &amp; Data Protection at Pivora Estates
          </p>

          <div className="pt-2">
            <span className="inline-block text-[11px] font-medium tracking-wider text-stone-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              Effective: {lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BREADCRUMBS & TRUST PILLARS STRIP
      ========================================================================= */}
      <section className="bg-white border-b border-stone-200/80 py-5 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#BD7E6C] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-400">Legal</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-900 font-semibold">Privacy Policy</span>
          </nav>

          <div className="text-xs text-slate-500">
            Official Policy Document for <strong className="text-slate-800">Pivora Estates Pvt. Ltd.</strong>
          </div>
        </div>
      </section>

      {/* Trust Pillars Grid */}
      <section className="py-12 bg-[#f5f4ef] border-b border-stone-200/80 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col gap-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#BD7E6C]/10 text-[#BD7E6C] flex items-center justify-center">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN POLICY DOCUMENT (Two-column layout with sticky navigation)
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#BD7E6C]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#BD7E6C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* -------------------------------------------------------------
                LEFT COLUMN: Sticky Table of Contents
            ------------------------------------------------------------- */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
              <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-sm space-y-4">
                <div className="pb-3 border-b border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#BD7E6C] block">
                    TABLE OF CONTENTS
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 mt-0.5">Quick Navigation</h3>
                </div>

                <nav className="space-y-1">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-950 hover:bg-[#f5f4ef] transition-all"
                    >
                      <span className="text-[10px] font-bold font-mono text-[#BD7E6C] group-hover:scale-105 transition-transform">
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t border-stone-100">
                  <div className="p-3.5 rounded-2xl bg-[#f5f4ef] border border-stone-200/70 text-[11px] space-y-2">
                    <p className="font-bold text-slate-900">Need immediate privacy assistance?</p>
                    <p className="text-slate-600">Our Data Protection Officer responds within 24 hours.</p>
                    <a
                      href="mailto:privacy@pivoraestates.com"
                      className="inline-flex items-center gap-1 font-bold text-[#BD7E6C] hover:underline"
                    >
                      <span>privacy@pivoraestates.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* -------------------------------------------------------------
                RIGHT COLUMN: Comprehensive Policy Document Content
            ------------------------------------------------------------- */}
            <main className="lg:col-span-8 bg-white p-7 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
              {/* SECTION 01 */}
              <article id="introduction" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Introduction &amp; Scope
                  </h2>
                </div>
                <p>
                  Pivora Estates Private Limited (&quot;Pivora Estates&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                  is an ultra-luxury real estate development and private advisory firm registered in Pune, Maharashtra,
                  India. We are committed to safeguarding the confidentiality, integrity, and security of personal
                  information entrusted to us by our esteemed clientele, prospective purchasers, investors, and platform
                  visitors.
                </p>
                <p>
                  This Privacy Policy applies to personal data collected through our official website (
                  <span className="font-semibold text-slate-900">pivoraestates.com</span>), private consultation forms,
                  brochure download requests, physical experience centre registrations, WhatsApp business channels, and
                  direct site visit interactions.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 italic bg-[#f5f4ef] p-4 rounded-xl border border-stone-200/70">
                  By utilizing our website, submitting an inquiry, or booking an estate preview, you consent to the
                  practices and terms detailed within this Privacy Policy.
                </p>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 02 */}
              <article id="collection" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Information We Collect
                  </h2>
                </div>
                <p>
                  To deliver tailored real estate consultations, process site preview appointments, and fulfill RERA
                  statutory documentation, we may collect the following classifications of data:
                </p>
                <div className="space-y-3 pt-1">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                    <strong className="text-slate-950 block text-sm">Personal Identification &amp; Contact Records:</strong>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Full name, telephone / WhatsApp number, personal or corporate email address, and residential city or country of origin.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                    <strong className="text-slate-950 block text-sm">Property Preferences &amp; Investment Parameters:</strong>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Desired unit configuration (2, 3, or 4 BHK residences or commercial suites), targeted budget range (e.g., INR 1.19 Cr - 5 Cr+), preferred micro-locations (e.g., Wakad, Mundhwa, Hinjawadi), and planned possession timeframe.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                    <strong className="text-slate-950 block text-sm">Consultation &amp; Preview Records:</strong>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Dates and times of site visits, relationship manager notes, feedback forms, and transaction-related identity verification documents (as mandated by statutory authorities upon purchase).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1">
                    <strong className="text-slate-950 block text-sm">Technical &amp; Digital Footprint:</strong>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Internet Protocol (IP) address, browser version, device operating system, referral source, pages browsed, and time spent per property card.
                    </p>
                  </div>
                </div>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 03 */}
              <article id="usage" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    How We Use Your Information
                  </h2>
                </div>
                <p>
                  We process personal information solely for legitimate, transparent, and defined real estate operations:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-xs sm:text-sm">
                  <li>
                    <strong className="text-slate-900">Customized Advisory:</strong> Delivering customized project brochures, floor layout sheets, unit availability matrices, and cost calculation breakdowns.
                  </li>
                  <li>
                    <strong className="text-slate-900">Site Preview Coordination:</strong> Scheduling private site visits, chauffeured experience tour arrangements, and VIP preview center access.
                  </li>
                  <li>
                    <strong className="text-slate-900">Direct Consultation:</strong> Connecting you with assigned senior luxury portfolio managers via phone, verified email, or WhatsApp.
                  </li>
                  <li>
                    <strong className="text-slate-900">Milestone &amp; Launch Alerts:</strong> Sharing exclusive notifications regarding new phase releases, pricing revisions, construction progress, and possession handovers.
                  </li>
                  <li>
                    <strong className="text-slate-900">Platform Enhancement:</strong> Analyzing aggregate website interaction metrics to optimize digital performance, navigation speed, and responsive viewing.
                  </li>
                </ul>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 04 */}
              <article id="rera-legal" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    RERA &amp; Legal Compliance
                  </h2>
                </div>
                <p>
                  Pivora Estates operates under the regulatory purview of the Real Estate (Regulation and Development)
                  Act, 2016 (RERA). All property inquiries, booking allotments, cost sheets, and client agreements adhere
                  strictly to statutory guidelines established by MahaRERA (Maharashtra Real Estate Regulatory Authority).
                </p>
                <p>
                  In compliance with RERA and anti-money laundering regulations, certain transactional records, KYC
                  verifications, and allotment documents are permanently archived in secured vaults as legally required.
                </p>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 05 */}
              <article id="sharing" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Sharing &amp; Third-Party Disclosure
                  </h2>
                </div>
                <p>
                  <strong className="text-slate-950">Pivora Estates does not sell, lease, or rent customer databases.</strong>{' '}
                  Personal data may only be accessed by or transferred to vetted entities under strict confidentiality agreements:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-xs sm:text-sm">
                  <li>
                    <strong className="text-slate-900">Authorized Development Partners:</strong> Co-promoters, architects, and engineering partners strictly to process unit customization, registration, and handover formalities.
                  </li>
                  <li>
                    <strong className="text-slate-900">Verified Technical Service Providers:</strong> Encrypted enterprise CRM systems, cloud database hosts (AWS/Google Cloud), and verified communication gateways bound by non-disclosure agreements.
                  </li>
                  <li>
                    <strong className="text-slate-900">Judicial &amp; Law Enforcement Bodies:</strong> Disclosures made solely where compelled by court subpoenas, governmental audits, or mandatory statutory directives.
                  </li>
                </ul>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 06 */}
              <article id="security" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Data Security &amp; Storage
                  </h2>
                </div>
                <p>
                  We deploy multi-layered defense-in-depth protocols to protect your personal information against
                  accidental loss, unauthorized intrusion, modification, or exposure:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-slate-950 block">Transport Security</span>
                    <p className="text-slate-600">All data in transit is encrypted using 256-bit Transport Layer Security (TLS 1.3/SSL).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm space-y-1">
                    <span className="font-bold text-slate-950 block">Restricted Access</span>
                    <p className="text-slate-600">Data access is strictly gated via Role-Based Access Controls (RBAC) and 2-Factor Authentication.</p>
                  </div>
                </div>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 07 */}
              <article id="cookies" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Cookies &amp; Analytics Technologies
                  </h2>
                </div>
                <p>
                  Our digital platform uses session cookies, persistent analytics tokens, and security cookies to
                  remember your language preferences, maintain enquiry session states, and measure aggregate visitor traffic.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  You may alter your browser settings at any time to block or notify you about cookies. Please note that
                  disabling certain cookies may limit specific interactive features such as mortgage calculations and
                  brochure downloads.
                </p>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 08 */}
              <article id="rights" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Your Rights &amp; Data Choices
                  </h2>
                </div>
                <p>As a valued client, you retain comprehensive rights over your personal information:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-xs sm:text-sm">
                  <li>
                    <strong className="text-slate-900">Right of Access:</strong> Request a complete summary of personal records maintained within our systems.
                  </li>
                  <li>
                    <strong className="text-slate-900">Right to Rectification:</strong> Request prompt updates or corrections to any inaccurate contact details.
                  </li>
                  <li>
                    <strong className="text-slate-900">Right to Opt-Out:</strong> Unsubscribe from promotional brochures, newsletter digests, or market reports at any time.
                  </li>
                  <li>
                    <strong className="text-slate-900">Right of Erasure:</strong> Request the deletion of marketing records, subject to statutory real estate retention mandates.
                  </li>
                </ul>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 09 */}
              <article id="retention" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Data Retention Policy
                  </h2>
                </div>
                <p>
                  We retain personal data only for as long as necessary to fulfill the specific purposes outlined in this
                  policy, including the satisfaction of statutory, legal, tax, accounting, and RERA reporting
                  requirements. Marketing inquiry records are regularly audited and purged if no client interaction
                  occurs within a rolling 36-month period.
                </p>
              </article>

              <hr className="border-stone-100" />

              {/* SECTION 10 */}
              <article id="contact" className="space-y-5 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-sans font-bold text-[#BD7E6C] px-3 py-1 bg-[#BD7E6C]/10 rounded-lg">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                    Grievance Officer &amp; Contact Desk
                  </h2>
                </div>
                <p>
                  In compliance with the Information Technology Act and applicable Indian digital data protection norms,
                  the details of our designated Grievance &amp; Privacy Officer are provided below:
                </p>

                {/* Official Contact Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#f5f4ef] border border-stone-200/90 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-950">Pivora Estates Private Limited</h3>
                    <p className="text-xs text-slate-600">Attn: Office of the Data Privacy &amp; Grievance Officer</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#BD7E6C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Corporate Office</span>
                        <span className="text-slate-600 leading-relaxed block">
                          Mundhwa, Pune, Maharashtra - 411036, India
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#BD7E6C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Privacy Desk Email</span>
                        <a
                          href="mailto:privacy@pivoraestates.com"
                          className="text-[#BD7E6C] font-semibold hover:underline block"
                        >
                          privacy@pivoraestates.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#BD7E6C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Direct Grievance Line</span>
                        <a
                          href="tel:+919876543210"
                          className="text-[#BD7E6C] font-semibold hover:underline block"
                        >
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileCheck2 className="w-4 h-4 text-[#BD7E6C] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Operating Hours</span>
                        <span className="text-slate-600 block">Monday to Saturday: 10:00 AM – 7:00 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
