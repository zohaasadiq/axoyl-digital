"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, CheckCircle2, Eye, X } from "lucide-react";
import { INDUSTRY_PORTFOLIOS, IndustryPortfolio } from "@/lib/data";

interface PortfolioGridProps {
  onOpenAudit: () => void;
}

export default function PortfolioGrid({ onOpenAudit }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<IndustryPortfolio | null>(null);

  const filteredPortfolios =
    selectedCategory === "all"
      ? INDUSTRY_PORTFOLIOS
      : INDUSTRY_PORTFOLIOS.filter((p) => p.id === selectedCategory);

  return (
    <section id="portfolio" className="relative py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#D7C3B1]/60">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
                Portfolio Pages 05 - 11
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
              Industry Portfolios &amp;{" "}
              <span className="italic font-serif font-normal text-[#520000]">Client Work</span>.
            </h2>

            <p className="mt-4 text-base text-[#3D261E] font-normal leading-relaxed">
              Explore the exact industry portfolio slides from Axoyl Digital: from high-profile restaurants and luxury catering to organic skincare, aesthetic clinics, and software solutions.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#D7C3B1] text-xs font-semibold text-[#520000] shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Exact Slides from Axoyl Digital Portfolio</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === "all"
                ? "bg-[#520000] text-white shadow-md"
                : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
            }`}
          >
            All Industry Sectors ({INDUSTRY_PORTFOLIOS.length})
          </button>
          {INDUSTRY_PORTFOLIOS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCategory(item.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === item.id
                  ? "bg-[#520000] text-white shadow-md"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              {item.title.replace("PORTFOLIO", "").replace("BUSINESS", "").trim()}
            </button>
          ))}
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white border border-[#D7C3B1] hover:border-[#520000] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Slide Banner from Portfolio */}
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="relative h-60 w-full bg-[#FAF6F0] overflow-hidden border-b border-[#D7C3B1]/60 cursor-pointer"
                >
                  <Image
                    src={item.slideImage}
                    alt={item.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#520000] border border-[#520000]/20 shadow-md">
                      Portfolio Page 0{item.pageNumber}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-[#520000] px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1 shadow-md">
                    <Eye className="w-3 h-3" />
                    <span>View Slide</span>
                  </div>
                </div>

                {/* Content with exact portfolio text */}
                <div className="p-7">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000] block mb-2">
                    {item.categoryTag}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#140202] mb-3 group-hover:text-[#520000] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed font-normal mb-6">
                    &ldquo;{item.description}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="p-7 pt-0">
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1]/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#140202]">
                    {item.clientCallout}
                  </span>

                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="p-1.5 rounded-lg text-[#520000] hover:text-white hover:bg-[#520000] transition-colors"
                    title="Inspect slide"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Slide View */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-4xl w-full rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF6F0] text-[#140202] hover:bg-[#520000] hover:text-white border border-[#D7C3B1] transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden border border-[#D7C3B1] mb-6 bg-black">
                <Image
                  src={activeModalItem.slideImage}
                  alt={activeModalItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#520000] font-bold">
                    Slide 0{activeModalItem.pageNumber} · {activeModalItem.categoryTag}
                  </span>
                  <span className="text-xs text-[#5A4842] font-medium">
                    Axoyl Digital Portfolio 2026
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202]">
                  {activeModalItem.title}
                </h3>

                <p className="text-sm sm:text-base text-[#3D261E] leading-relaxed font-normal">
                  {activeModalItem.description}
                </p>

                <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1]">
                  <span className="text-xs font-bold text-[#520000] uppercase block mb-1">
                    Featured Client &amp; Metric:
                  </span>
                  <span className="text-sm font-bold text-[#140202]">
                    {activeModalItem.clientCallout}
                  </span>
                </div>

                <div className="flex gap-3 pt-4 border-t border-[#D7C3B1]/60">
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onOpenAudit();
                    }}
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#720909] transition-colors shadow-md"
                  >
                    Request Strategy Consultation for {activeModalItem.title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
