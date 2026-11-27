"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import QuoteModal from "@/components/QuoteModal";

export default function ContactPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202]">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Direct Contact Links */}
      <ContactSection onOpenAudit={() => setIsQuoteModalOpen(true)} />

      {/* Global Timezones & Availability */}
      <section className="py-16 bg-[#F4ECE3] border-t border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-[#520000] block mb-1">
                United States (EST / PST)
              </span>
              <p className="text-sm font-bold text-[#140202]">Dedicated US Client Overlap</p>
              <p className="text-xs text-[#5A4842] mt-1">High-speed Slack &amp; WhatsApp communication</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-[#520000] block mb-1">
                United Arab Emirates (GST)
              </span>
              <p className="text-sm font-bold text-[#140202]">Dubai &amp; Gulf Accounts</p>
              <p className="text-xs text-[#5A4842] mt-1">Real-time daily coordination &amp; creator management</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-[#520000] block mb-1">
                Pakistan (PKT)
              </span>
              <p className="text-sm font-bold text-[#140202]">Central Production Hub</p>
              <p className="text-xs text-[#5A4842] mt-1">24/7 reels editing &amp; rapid turnaround pipeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ */}
      <FAQSection />

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}