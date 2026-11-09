"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Play, Eye, Flame, CheckCircle2, X } from "lucide-react";
import { PORTFOLIO_HEADER, REELS_METRICS, EXACT_CONTACT } from "@/lib/data";

interface HeroProps {
  onOpenAudit: () => void;
}

const HERO_CASES = [
  {
    id: "skincare",
    views: "147,000+",
    client: "Salubrity Organics",
    industry: "Organic Skincare",
    hook: "“POV: What happens to your skin barrier when you switch to 100% cold-pressed botanicals.”",
    badge: "Viral Organic Hook",
    image: "/work/case_page_17.png",
    slideImage: "/work/slide_17.png",
    retention: "84% Completion Rate",
    inquiries: "+310% DMs in 14 Days",
  },
  {
    id: "catering",
    views: "144,000+",
    client: "Hestia Harlow (USA)",
    industry: "Luxury Catering & Events",
    hook: "“Setting up a 200-guest luxury banquet table in under 3 hours in the Hamptons.”",
    badge: "High-Ticket Client Campaign",
    image: "/work/p17_img1_199.png",
    slideImage: "/work/slide_5.png",
    retention: "78% Completion Rate",
    inquiries: "42 Qualified Event Bookings",
  },
  {
    id: "clinic",
    views: "91,000+",
    client: "ER Organics",
    industry: "Aesthetic & Wellness Clinic",
    hook: "“Before vs. After: 30 days of consistent aesthetic positioning & authority reels.”",
    badge: "Authority Curation",
    image: "/work/case_page_8.png",
    slideImage: "/work/slide_8.png",
    retention: "72% Completion Rate",
    inquiries: "+190% Patient Inquiries",
  },
];

export default function Hero({ onOpenAudit }: HeroProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [inspectModalOpen, setInspectModalOpen] = useState(false);

  const currentCase = HERO_CASES[activeCaseIndex];

  return (
    <section className="relative min-h-[96vh] pt-32 sm:pt-36 pb-20 flex flex-col justify-between overflow-hidden bg-[#FAF6F0]">
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#D7C3B1]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#520000]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#520000 1px, transparent 1px), linear-gradient(90deg, #520000 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center">
        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-8 sm:py-12">
          {/* Left Column: Stacked Editorial Headline & Core Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#520000] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
                {PORTFOLIO_HEADER.company} · {PORTFOLIO_HEADER.portfolioTag}
              </span>
            </div>

            {/* Giant Bold Headline (Trifid Style) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-medium text-[#140202] leading-[1.02] tracking-tight mb-6 uppercase">
              TURNING SOCIAL <br />
              FEEDS INTO{" "}
              <span className="italic font-serif font-normal text-[#520000] relative inline-block">
                CULTURAL INFLUENCE
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#520000]" />
              </span>
              <br />
              &amp; REAL REVENUE.
            </h1>

            {/* Mandated Positioning: Primarily SMM, Secondly Marketing */}
            <p className="text-base sm:text-lg text-[#3D261E] max-w-2xl font-normal leading-relaxed mb-8">
              <strong className="text-[#520000] font-bold">Axoyl Digital</strong> is{" "}
              <span className="font-bold underline decoration-[#520000] decoration-2 underline-offset-4 text-[#140202]">
                primarily a Social Media Management (SMM) agency
              </span>{" "}
              and secondly a full-funnel marketing &amp; PR powerhouse. We engineer scroll-stopping short-form reels, curate luxury feed aesthetics, and scale creator partnerships across Pakistan, the USA, and UAE.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] hover:shadow-[0_8px_24px_rgba(82,0,0,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#D7C3B1]" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#520000] bg-white border border-[#D7C3B1] hover:border-[#520000] hover:bg-[#FAF6F0] transition-all shadow-sm"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#520000]" />
              </Link>
            </div>
          </div>

          {/* Right Column: 100% Fully Functional Interactive Viral Campaign Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              {/* Studio Canvas Showcase */}
              <div className="relative rounded-3xl bg-white border-2 border-[#D7C3B1] p-6 sm:p-7 shadow-xl overflow-hidden">
                {/* Header: Founder Info + Status */}
                <div className="flex items-center justify-between pb-4 border-b border-[#D7C3B1]/60">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#520000] shadow-sm">
                      <Image
                        src="/team/esha-founder.jpeg"
                        alt="Esha - Founder Axoyl Digital"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-[#140202]">
                        Axoyl Creative Studio
                      </h4>
                      <p className="text-[11px] font-medium text-[#520000]">
                        Esha · Founder &amp; Creative Head
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Reel Proof
                  </span>
                </div>

                {/* Interactive Tab Selectors (Clicking these switches real case data!) */}
                <div className="my-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A4842] mb-2 flex items-center justify-between">
                    <span>Click to switch live campaign:</span>
                    <span className="text-[#520000]">Active: {currentCase.client}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1]">
                    {HERO_CASES.map((c, i) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setActiveCaseIndex(i)}
                        className={`py-2 px-2 rounded-xl text-center transition-all ${
                          activeCaseIndex === i
                            ? "bg-[#520000] text-white shadow-sm font-bold"
                            : "text-[#3D261E] hover:text-[#520000] hover:bg-white/80 font-medium"
                        }`}
                      >
                        <span className="block text-xs font-bold leading-none">{c.views}</span>
                        <span className="block text-[9px] uppercase tracking-wider opacity-90 mt-0.5 truncate">
                          {c.id}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Metrics Row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1]/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#520000] block mb-0.5">
                      Audience Retention
                    </span>
                    <span className="text-lg font-serif font-bold text-[#140202]">
                      {currentCase.retention}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1]/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#520000] block mb-0.5">
                      Business Impact
                    </span>
                    <span className="text-lg font-serif font-bold text-[#140202]">
                      {currentCase.inquiries}
                    </span>
                  </div>
                </div>

                {/* Interactive Visual Preview (Clickable to inspect full slide!) */}
                <div
                  onClick={() => setInspectModalOpen(true)}
                  className="relative h-48 rounded-2xl overflow-hidden border border-[#D7C3B1] bg-black cursor-pointer group/preview"
                  title="Click to inspect verified slide"
                >
                  <Image
                    src={currentCase.image}
                    alt={currentCase.client}
                    fill
                    className="object-cover object-top group-hover/preview:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/95 text-[#520000]">
                        {currentCase.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white bg-black/60 backdrop-blur-md flex items-center gap-1">
                        <Eye className="w-3 h-3 text-[#D7C3B1]" />
                        <span>Click to Inspect</span>
                      </span>
                    </div>

                    <div>
                      <p className="text-xs text-white/95 font-serif italic mb-1 line-clamp-2">
                        {currentCase.hook}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D7C3B1]">
                        {currentCase.client} · {currentCase.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Action Bar */}
                <div className="mt-4 pt-3 border-t border-[#D7C3B1]/60 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setInspectModalOpen(true)}
                    className="font-bold text-[#520000] hover:underline flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Slide Proof</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenAudit}
                    className="font-bold text-[#140202] hover:text-[#520000] flex items-center gap-1"
                  >
                    <span>Request Similar Campaign</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Bottom Right Callout Card (Trifid Exact Gold/Beige Card) */}
              <div className="mt-5 rounded-2xl bg-[#D7C3B1] text-[#140202] p-5 shadow-2xl border-2 border-white relative z-20">
                <p className="text-xs sm:text-sm font-serif font-bold leading-snug mb-3">
                  Got a brief? Tell us what you&apos;re building. We&apos;ll take it from there.
                </p>
                <button
                  onClick={onOpenAudit}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-colors shadow-md"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Inspection Modal */}
      {inspectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setInspectModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF6F0] text-[#140202] hover:bg-[#520000] hover:text-white border border-[#D7C3B1] transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden border border-[#D7C3B1] mb-6 bg-[#FAF6F0]">
              <Image
                src={currentCase.slideImage}
                alt={currentCase.client}
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#520000] font-bold">
                  Verified Case Study · {currentCase.industry}
                </span>
                <span className="text-xs font-semibold text-[#5A4842]">
                  Peak Reach: {currentCase.views} Views
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202]">
                {currentCase.client}
              </h3>

              <p className="text-sm sm:text-base text-[#3D261E] leading-relaxed font-serif italic">
                {currentCase.hook}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#520000] block">
                    Retention Metric
                  </span>
                  <span className="text-sm font-bold text-[#140202]">
                    {currentCase.retention}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#520000] block">
                    Conversion Result
                  </span>
                  <span className="text-sm font-bold text-[#140202]">
                    {currentCase.inquiries}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#D7C3B1]/60">
                <button
                  onClick={() => {
                    setInspectModalOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#3D0000] transition-colors shadow-lg"
                >
                  Discuss Campaign Strategy for {currentCase.client}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}