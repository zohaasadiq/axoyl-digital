"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function PrivacyCookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202]">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 pb-8 border-b border-[#D7C3B1]/60">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] block mb-2">
              Legal &amp; Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight mb-3">
              Privacy &amp; Cookie Policy
            </h1>
            <p className="text-xs text-[#5A4842]">
              Last updated: 15 November 2026 · Axoyl Digital (Pakistan)
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#3D261E] leading-relaxed">
            <div>
              <h2 className="text-xl font-serif font-bold text-[#140202] mb-2">
                1. Overview
              </h2>
              <p>
                Axoyl Digital is a social media agency and marketing powerhouse operating from Pakistan and serving global brand partners across the UAE, UK, USA, Ireland, and Australia. We respect your personal privacy and operate under transparent data practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-[#140202] mb-2">
                2. Information We Collect
              </h2>
              <p className="mb-2">We collect information that you directly provide to us via:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li><strong>Quote &amp; Audit Forms:</strong> Name, business email, brand name, social handles, country, and budget.</li>
                <li><strong>Newsletter Signup:</strong> Email address for agency insights and updates.</li>
                <li><strong>Direct Inquiries:</strong> WhatsApp communications and calendar bookings.</li>
              </ul>
            </div>

            <div id="cookie-policy">
              <h2 className="text-xl font-serif font-bold text-[#140202] mb-2">
                3. Cookie Policy
              </h2>
              <p className="mb-2">
                We use optional cookies and analytics pixels (e.g. Google Analytics and Meta Pixel) to understand site performance, visitor interaction, and marketing campaign effectiveness.
              </p>
              <p className="text-xs">
                You can accept or decline optional cookies at any time via our cookie banner or your browser settings. Essential cookies remain enabled to ensure proper navigation and secure form submissions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-[#140202] mb-2">
                4. How We Use Your Data
              </h2>
              <p>
                Your information is used solely to evaluate your social media channels, prepare custom proposals, reply within 24 hours, and deliver agreed-upon marketing services. We never sell or rent your information to third-party brokers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-serif font-bold text-[#140202] mb-2">
                5. Contact Us
              </h2>
              <p>
                If you have questions regarding this policy or wish to request data deletion, contact us at{" "}
                <a href="mailto:hello@axoyldigital.com" className="text-[#520000] font-semibold underline">
                  hello@axoyldigital.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
