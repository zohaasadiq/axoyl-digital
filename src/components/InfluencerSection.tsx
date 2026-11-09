"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Globe2, Users, CheckCircle2, ArrowUpRight } from "lucide-react";
import { INFLUENCER_SECTION, ENGAGEMENT_SECTION } from "@/lib/data";

interface InfluencerSectionProps {
  onOpenAudit: () => void;
}

export default function InfluencerSection({ onOpenAudit }: InfluencerSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header directly from Page 12 of Portfolio */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Portfolio Pages 12 - 16
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
            {INFLUENCER_SECTION.title}
          </h2>

          <h3 className="mt-3 text-lg sm:text-xl font-serif text-[#520000] font-bold">
            {INFLUENCER_SECTION.subtitle}
          </h3>

          <p className="mt-4 text-base text-[#3D261E] font-normal leading-relaxed">
            &ldquo;{INFLUENCER_SECTION.description}&rdquo;
          </p>
        </div>

        {/* Global Roster Cards (Page 15) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {INFLUENCER_SECTION.roster.map((r, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#D7C3B1] p-8 shadow-sm hover:border-[#520000] hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{r.flag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FAF6F0] text-[#520000] border border-[#520000]/20">
                    Vetted Roster
                  </span>
                </div>

                <h4 className="text-2xl font-serif font-bold text-[#140202] mb-2">
                  {r.detail}
                </h4>

                <p className="text-xs text-[#5A4842] leading-relaxed font-normal mb-6">
                  Tailored influencer onboarding, creator seeding, and contract negotiations tailored to the {r.country} market.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D7C3B1]/40 flex items-center justify-between text-xs font-bold text-[#520000]">
                <span>Full list on request</span>
                <button
                  onClick={onOpenAudit}
                  className="font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Request</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Showcase Tabs from Portfolio Pages 12, 13, 14, 15, 16 */}
        <div className="rounded-3xl bg-white border border-[#D7C3B1] p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#D7C3B1]/40">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#520000]">
                Documented Campaigns &amp; Onboarding
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#140202] mt-1">
                Portfolio Slide Proof (Pages 12 - 16)
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Slide 12", "Slide 13", "Slide 14", "Slide 15", "Slide 16"].map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeSlide === idx
                      ? "bg-[#520000] text-white shadow-sm"
                      : "bg-[#FAF6F0] text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative h-72 sm:h-96 md:h-[480px] w-full rounded-2xl overflow-hidden border border-[#D7C3B1] bg-black">
            <Image
              src={`/work/slide_${12 + activeSlide}.png`}
              alt={`Influencer Campaign Portfolio Slide ${12 + activeSlide}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#5A4842]">
            <div>
              <strong className="text-[#140202]">Page {12 + activeSlide} of Axoyl Portfolio:</strong>{" "}
              {activeSlide === 4
                ? ENGAGEMENT_SECTION.title
                : INFLUENCER_SECTION.title}
            </div>
            <button
              onClick={onOpenAudit}
              className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#720909] transition-colors shadow-md"
            >
              Book Influencer Campaign
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
