import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pivora Estates',
  description: 'Learn how Pivora Estates collects, uses, and safeguards your personal data and property inquiry information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 1, 2026';

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen font-poppins text-slate-800">
      {/* Main Policy Content */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#fbf9f5] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-[#BD7E6C] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>



          {/* Policy Document Details */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-3">
                <span className="text-sm font-sans font-bold text-[#BD7E6C] px-2.5 py-1 bg-[#BD7E6C]/10 rounded-lg">01</span>
                Introduction & Overview
              </h2>
              <p>
                Pivora Estates Private Limited (&quot;Pivora Estates&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to preserving the privacy and security of your personal data. This Privacy Policy outlines our procedures regarding the collection, utilization, disclosure, and protection of information obtained through our website, mobile interfaces, site visit registrations, and private consultation forms.
              </p>
              <p>
                By interacting with Pivora Estates or submitting your information through our platform, you acknowledge and accept the practices described in this Privacy Policy.
              </p>
            </div>

            <hr className="border-stone-100" />

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-3">
                <span className="text-sm font-sans font-bold text-[#BD7E6C] px-2.5 py-1 bg-[#BD7E6C]/10 rounded-lg">02</span>
                Information We Collect
              </h2>
              <p>
                We collect information necessary to deliver personalized real estate advisory services, arrange site visits, and process property inquiries:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong className="text-slate-950">Personal Identification Information:</strong> Full name, phone number, email address, and residential city.</li>
                <li><strong className="text-slate-950">Property Preferences:</strong> Desired configuration (2, 3, 4 BHK), budget range, preferred locations (e.g., Mundhwa, Hinjawadi), and possession timeline.</li>
                <li><strong className="text-slate-950">Communication Records:</strong> WhatsApp messages, site visit request notes, enquiry form submissions, and consultation feedback.</li>
                <li><strong className="text-slate-950">Technical & Digital Usage Logs:</strong> IP address, browser type, device information, operating system, and website usage statistics via analytics tools.</li>
              </ul>
            </div>

            <hr className="border-stone-100" />

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-3">
                <span className="text-sm font-sans font-bold text-[#BD7E6C] px-2.5 py-1 bg-[#BD7E6C]/10 rounded-lg">03</span>
                How We Use Your Information
              </h2>
              <p>
                The information collected is used exclusively for legitimate business and client service purposes, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Providing customized property brochures, floor plans, cost breakup sheets, and site visit arrangements.</li>
                <li>Connecting you with authorized Pivora Estates luxury property advisors via phone call, email, or WhatsApp.</li>
                <li>Updating you on exclusive project launches, price revisions, site progress, and possession timelines.</li>
                <li>Enhancing site functionality, security, and user experience based on analytical data.</li>
                <li>Complying with statutory real estate regulations (RERA) and applicable legal requirements.</li>
              </ul>
            </div>

            <hr className="border-stone-100" />

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-3">
                <span className="text-sm font-sans font-bold text-[#BD7E6C] px-2.5 py-1 bg-[#BD7E6C]/10 rounded-lg">04</span>
                Data Sharing & Third-Party Disclosure
              </h2>
              <p>
                Pivora Estates respects your privacy. We do not sell or rent your personal information to third parties. We may disclose information only under the following strictly defined conditions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong className="text-slate-950">Authorized Property Partners & Developers:</strong> Shared solely for fulfilling site visits, booking formalities, and legal agreement processing for properties you explicitly inquire about.</li>
                <li><strong className="text-slate-950">Service Providers:</strong> Trusted technology vendors (CRM platforms, SMS/WhatsApp gateways, hosting providers) bound by strict non-disclosure obligations.</li>
                <li><strong className="text-slate-950">Legal Requirements:</strong> When mandated by law, court orders, RERA directives, or government authorities.</li>
              </ul>
            </div>

            <hr className="border-stone-100" />

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-3">
                <span className="text-sm font-sans font-bold text-[#BD7E6C] px-2.5 py-1 bg-[#BD7E6C]/10 rounded-lg">05</span>
                Data Security & Protection
              </h2>
              <p>
                We employ industry-standard technical and organizational safeguards—including SSL encryption, secure servers, access control protocols, and regular security audits—to prevent unauthorized access, alteration, disclosure, or destruction of your personal data.
              </p>
            </div>

            <hr className="border-stone-100" />

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-3">
                <span className="text-sm font-sans font-bold text-[#BD7E6C] px-2.5 py-1 bg-[#BD7E6C]/10 rounded-lg">06</span>
                Cookies & Tracking Technologies
              </h2>
              <p>
                Our website uses cookies and similar tracking tools to collect standard internet log information and visitor behavior patterns. Cookies enable us to remember your preferences and optimize platform speed. You may modify your browser settings to decline cookies at any time.
              </p>
            </div>

            <hr className="border-stone-100" />

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 flex items-center gap-3">
                <span className="text-sm font-sans font-bold text-[#BD7E6C] px-2.5 py-1 bg-[#BD7E6C]/10 rounded-lg">07</span>
                Your Rights & Choice
              </h2>
              <p>
                You have the right to request access to your personal records, correct inaccuracies, or request the deletion of your data from our active advisory databases. You may also opt out of promotional communications at any time by contacting our privacy desk or clicking unsubscribe in our emails.
              </p>
            </div>

            <hr className="border-stone-100" />

            {/* Section 8: Contact Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f5f4ef] border border-stone-200/80 space-y-4">
              <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#BD7E6C]" />
                <span>Contact Our Privacy Desk</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="text-xs sm:text-sm font-medium text-slate-800 space-y-1">
                <p><strong>Pivora Estates Private Limited</strong></p>
                <p>Mundhwa, Pune, Maharashtra - 411036, India</p>
                <p>Email: <a href="mailto:privacy@pivoraestates.com" className="text-[#BD7E6C] underline">privacy@pivoraestates.com</a></p>
                <p>Phone: <a href="tel:+919876543210" className="text-[#BD7E6C] underline">+91 98765 43210</a></p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
