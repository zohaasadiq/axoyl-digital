"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import InfluencerSection from "@/components/InfluencerSection";
import ViralShowcase from "@/components/ViralShowcase";
import { Sparkles, Play, BarChart3, Globe, MessageSquare, ArrowUpRight } from "lucide-react";
import { INFLUENCER_SECTION, REELS_METRICS } from "@/lib/data";

export default function InfluencerGrowthPage() {
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
              Portfolio Pages 12 - 18, 21
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight max-w-4xl mx-auto leading-[1.08]">
            Viral Growth &amp;{" "}
            <span className="italic font-serif font-normal text-[#520000]">
              Influencer Marketing
            </span>
            .
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#3D261E] max-w-3xl mx-auto font-normal leading-relaxed">
            From vetted influencer rosters in Pakistan, USA, and UAE to viral video hooks surpassing 147k views and dramatic before/after analytics acceleration.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#3D0000] transition-all shadow-xl"
            >
              Request Influencer Campaign Roster
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Influencer Marketing Campaigns We Managed (Pages 12 - 16) */}
      <InfluencerSection onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* Section 2: REELS & VIDEOS + BEFORE/AFTER ANALYTICS (Pages 17, 18, 21) */}
      <ViralShowcase />

      <Footer />
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </main>
  );
}