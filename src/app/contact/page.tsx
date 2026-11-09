"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import AuditModal from "@/components/AuditModal";
import { Sparkles, MessageCircle, Mail, Phone, Clock, Globe } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

export default function ContactPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202]">
      <Navbar onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-[#D7C3B1]/60 bg-gradient-to-b from-[#FAF6F0] to-[#F4ECE3]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D7C3B1]/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Portfolio Page 23 · Direct Inquiries
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight max-w-4xl mx-auto leading-[1.08]">
            FEEL FREE TO REACH OUT{" "}
            <span className="italic font-serif font-normal text-[#520000]">
              IF YOU HAVE ANY QUERIES
            </span>
            .
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#3D261E] max-w-3xl mx-auto font-normal leading-relaxed">
            Ready to scale your accounts with high-retention short-form video, luxury feed curation, and creator partnerships? Esha and our team respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Direct Contact Form & Links */}
      <ContactSection onOpenAudit={() => setIsAuditModalOpen(true)} />

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
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </main>
  );
}