"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import TeamSection from "@/components/TeamSection";
import { Sparkles, Award, Globe, ShieldCheck, HeartHandshake } from "lucide-react";
import { PORTFOLIO_HEADER } from "@/lib/data";

export default function AboutPage() {
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
              Portfolio Page 22 · Leadership &amp; Hub
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight max-w-4xl mx-auto leading-[1.08]">
            Behind The Creative Process Of{" "}
            <span className="italic font-serif font-normal text-[#520000]">
              Building Your Brand
            </span>
            .
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#3D261E] max-w-3xl mx-auto font-normal leading-relaxed">
            Axoyl Digital was founded to bridge the gap between creative visual artistry and real commercial revenue. Meet the collective of strategists, designers, and video producers turning social feeds into cultural authority.
          </p>
        </div>
      </section>

      {/* Team Showcase with Prominent Founder Spotlight */}
      <TeamSection onOpenAudit={() => setIsAuditModalOpen(true)} />

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
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </main>
  );
}