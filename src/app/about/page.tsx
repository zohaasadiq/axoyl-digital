"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import TeamSection from "@/components/TeamSection";
import { Award, Globe, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202]">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      {/* Team Showcase with Prominent Founder Spotlight */}
      <TeamSection />

      {/* Agency Values Strip */}
      <section className="py-24 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#520000] block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
              How Axoyl Digital Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#D7C3B1] shadow-sm hover:border-[#520000] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#520000]/30 flex items-center justify-center text-[#520000] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#140202] mb-2">
                Strategy Over Vanity Fluff
              </h3>
              <p className="text-xs sm:text-sm text-[#3D261E] leading-relaxed font-normal">
                We measure impact in watch-time retention, non-follower discoverability, and qualified booking inquiries — not purchased followers or empty likes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#D7C3B1] shadow-sm hover:border-[#520000] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#520000]/30 flex items-center justify-center text-[#520000] mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#140202] mb-2">
                Aesthetics That Convert
              </h3>
              <p className="text-xs sm:text-sm text-[#3D261E] leading-relaxed font-normal">
                Every frame, carousel slide, and caption adheres to high-end typography and color theory, giving your brand the instant credibility of an industry leader.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#D7C3B1] shadow-sm hover:border-[#520000] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#520000]/30 flex items-center justify-center text-[#520000] mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#140202] mb-2">
                Cross-Border Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#3D261E] leading-relaxed font-normal">
                Managing client campaigns across Pakistan, the USA, and UAE with seamless communication, rapid iteration, and localized cultural resonance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}