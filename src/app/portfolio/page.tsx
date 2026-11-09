"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import ClientShowcase from "@/components/ClientShowcase";
import { Sparkles, Eye, ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { INDUSTRY_PORTFOLIOS, IndustryPortfolio } from "@/lib/data";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<IndustryPortfolio | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const filteredPortfolios =
    selectedCategory === "all"
      ? INDUSTRY_PORTFOLIOS
      : INDUSTRY_PORTFOLIOS.filter((p) => p.id === selectedCategory);

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
              Portfolio Pages 05 - 11
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight max-w-4xl mx-auto leading-[1.08]">
            Industry Portfolios &amp;{" "}
            <span className="italic font-serif font-normal text-[#520000]">Client Work</span>.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#3D261E] max-w-3xl mx-auto font-normal leading-relaxed">
            Detailed case slides extracted directly from Axoyl Digital&apos;s verified client campaigns: from high-profile restaurants and luxury catering to organic skincare, aesthetic clinics, and software solutions.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#D7C3B1] text-xs font-semibold text-[#520000] shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Updated 2026/2027 Case Portfolio Refresh In Progress</span>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                selectedCategory === "all"
                  ? "bg-[#520000] text-white shadow-md font-bold"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              All Industry Sectors ({INDUSTRY_PORTFOLIOS.length})
            </button>
            {INDUSTRY_PORTFOLIOS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                  selectedCategory === item.id
                    ? "bg-[#520000] text-white shadow-md font-bold"
                    : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
                }`}
              >
                {item.title.replace("PORTFOLIO", "").replace("BUSINESS", "").trim()}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolios.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-[#D7C3B1] hover:border-[#520000] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Visual Slide Banner */}
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="relative h-60 w-full bg-[#F4ECE3] overflow-hidden border-b border-[#D7C3B1]/60 cursor-pointer"
                  >
                    <Image
                      src={item.slideImage}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#520000] border border-[#D7C3B1] shadow-sm">
                        Slide Page 0{item.pageNumber}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-[#520000] text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                      <Eye className="w-3 h-3" />
                      <span>Inspect Slide</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000] block mb-2">
                      {item.categoryTag}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#140202] mb-3 group-hover:text-[#520000] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#3D261E] leading-relaxed font-normal mb-6">
                      &ldquo;{item.description}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] flex items-center justify-between">
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
        </div>
      </section>

      {/* Page 19: Clients Marquee */}
      <ClientShowcase />

      {/* Slide Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#FAF6F0] text-[#520000] hover:bg-[#520000] hover:text-white border border-[#D7C3B1] transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden border border-[#D7C3B1] mb-6 bg-[#FAF6F0]">
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
                  Slide Page 0{activeModalItem.pageNumber} · {activeModalItem.categoryTag}
                </span>
                <span className="text-xs font-semibold text-[#5A4842]">
                  Axoyl Digital Portfolio
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
                  Documented Callout:
                </span>
                <span className="text-sm font-bold text-[#140202]">
                  {activeModalItem.clientCallout}
                </span>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#D7C3B1]/60">
                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    setIsAuditModalOpen(true);
                  }}
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#3D0000] transition-colors shadow-lg"
                >
                  Discuss Campaign Strategy for {activeModalItem.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </main>
  );
}