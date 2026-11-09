"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TrifidDifferenceSectionProps {
  onOpenAudit: () => void;
}

const DIFFERENCE_CARDS = [
  {
    title: "In-House Everything",
    desc: "Dedicated social strategists, video editors & copywriters. One hub. Zero outsourcing, zero delays. From concept to live posting — we own every step.",
    image: "/work/case_page_9.png",
    stat1: { num: "100%", label: "In-House Team" },
    stat2: { num: "147k+", label: "Peak Reel Views" },
  },
  {
    title: "Youth-Powered & Trend-Native",
    desc: "We don't follow trends — we create them. Algorithm-native strategists who understand watch-time retention, hook psychology, and community dynamics.",
    image: "/work/case_page_10.png",
    stat1: { num: "24/7", label: "Creative Pipeline" },
    stat2: { num: "50+", label: "Brands Scaled" },
  },
  {
    title: "Culture-First & Aesthetic Curation",
    desc: "We don't just post content — we craft cultural positioning and luxury visual feeds that command premium prices and organic authority.",
    image: "/work/case_page_8.png",
    stat1: { num: "12x", label: "Organic Reach Rate" },
    stat2: { num: "300%", label: "Avg. Engagement Lift" },
  },
];

export default function TrifidDifferenceSection({ onOpenAudit }: TrifidDifferenceSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Trifid Exact Style) */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1] bg-white mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000]">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
            THE DIFFERENCE IS <br />
            IN HOW WE&apos;RE BUILT<span className="text-[#520000]">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D261E] max-w-2xl font-serif">
            A specialized model combining luxury aesthetics with aggressive organic distribution.
          </p>
        </div>

        {/* 3 Large Difference Cards (Trifid Visual Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DIFFERENCE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#D7C3B1] overflow-hidden shadow-sm hover:border-[#520000] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full bg-[#F4ECE3] overflow-hidden border-b border-[#D7C3B1]/60">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-serif font-bold text-[#140202] mb-3 group-hover:text-[#520000] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Double Metric Bar (Trifid Exact Block) */}
              <div className="px-7 pb-7 pt-4 border-t border-[#D7C3B1]/40 grid grid-cols-2 gap-4 bg-[#FAF6F0]/60">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#520000]">
                    {card.stat1.num}
                  </div>
                  <span className="text-[11px] font-semibold text-[#5A4842] block">
                    {card.stat1.label}
                  </span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#520000]">
                    {card.stat2.num}
                  </div>
                  <span className="text-[11px] font-semibold text-[#5A4842] block">
                    {card.stat2.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner (Trifid Exact Join / Scale Banner) */}
        <div className="rounded-3xl bg-[#D7C3B1] border-2 border-[#520000]/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left">
            <div className="flex -space-x-3 overflow-hidden shrink-0">
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden relative">
                <Image src="/team/esha-founder.jpeg" alt="Esha" fill className="object-cover" />
              </div>
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden relative">
                <Image src="/team/zuha-smm.jpeg" alt="Zuha" fill className="object-cover" />
              </div>
              <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden relative">
                <Image src="/team/sana-pr.jpeg" alt="Sana" fill className="object-cover" />
              </div>
              <div className="inline-flex h-12 w-12 rounded-full ring-2 ring-white bg-[#520000] text-white items-center justify-center text-xs font-bold">
                50+
              </div>
            </div>
            <div>
              <h4 className="text-lg sm:text-2xl font-serif font-bold text-[#140202]">
                Hey 👋 The next brand we scale could be yours.
              </h4>
              <p className="text-xs sm:text-sm text-[#140202]/80 mt-1 font-medium">
                Don&apos;t just watch — come build your brand with us. The engagement you see online starts right here.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="shrink-0 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-colors shadow-lg flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}