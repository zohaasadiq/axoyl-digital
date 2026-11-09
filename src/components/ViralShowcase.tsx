"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, TrendingUp, Sparkles, BarChart3, MessageSquare } from "lucide-react";
import { REELS_METRICS } from "@/lib/data";

export default function ViralShowcase() {
  const [activeTab, setActiveTab] = useState<"reels" | "analytics" | "snippets">("reels");

  return (
    <section className="relative py-28 bg-[#F4ECE3] border-t border-[#D7C3B1]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header directly from Page 17 & 18 of Portfolio */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Portfolio Pages 17, 18 &amp; 21
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
            REELS &amp; VIDEOS<span className="text-[#520000]">.</span>
          </h2>

          <h3 className="mt-2 text-xl font-serif text-[#520000] font-bold">
            BEFORE / AFTER ANALYTICS
          </h3>

          <p className="mt-4 text-base text-[#3D261E] font-normal leading-relaxed">
            Directly from Axoyl Digital&apos;s verified client campaigns: scroll-stopping short-form views, audience engagement, and dramatic account growth.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#D7C3B1] shadow-sm">
            <button
              onClick={() => setActiveTab("reels")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "reels"
                  ? "bg-[#520000] text-white shadow-md"
                  : "text-[#3D261E] hover:text-[#520000]"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              Page 17: Reels &amp; Videos
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "analytics"
                  ? "bg-[#520000] text-white shadow-md"
                  : "text-[#3D261E] hover:text-[#520000]"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Page 18: Before / After Analytics
            </button>
            <button
              onClick={() => setActiveTab("snippets")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "snippets"
                  ? "bg-[#520000] text-white shadow-md"
                  : "text-[#3D261E] hover:text-[#520000]"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Page 21: Clientele Snippets
            </button>
          </div>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === "reels" && (
          <div className="space-y-8">
            {/* View Numbers Strip from Portfolio Page 17 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {REELS_METRICS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#D7C3B1] p-6 text-center shadow-sm hover:border-[#520000] transition-all hover:-translate-y-1"
                >
                  <div className="w-9 h-9 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#520000] mx-auto mb-3 border border-[#D7C3B1]">
                    <Play className="w-4 h-4 fill-[#520000]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#520000] mb-1">
                    {item.views}
                  </div>
                  <p className="text-xs text-[#5A4842] font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Actual Page 17 Slide Preview */}
            <div className="rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-bold text-[#520000] tracking-widest">
                  Portfolio Slide 17 Preview: REELS &amp; VIDEOS
                </span>
                <span className="text-xs font-semibold text-[#5A4842]">Axoyl Digital 2026</span>
              </div>
              <div className="relative h-72 sm:h-96 md:h-[480px] w-full rounded-2xl overflow-hidden border border-[#D7C3B1] bg-black">
                <Image
                  src="/work/slide_17.png"
                  alt="Portfolio Slide 17: Reels and Videos"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#520000] tracking-widest">
                  Portfolio Slide 18 Preview
                </span>
                <h4 className="text-2xl font-serif font-bold text-[#140202] mt-1">
                  BEFORE / AFTER ANALYTICS
                </h4>
              </div>
              <span className="text-xs px-3.5 py-1.5 rounded-full bg-[#FAF6F0] text-[#520000] border border-[#D7C3B1] font-semibold">
                Verified Instagram Insights
              </span>
            </div>

            <div className="relative h-72 sm:h-96 md:h-[480px] w-full rounded-2xl overflow-hidden border border-[#D7C3B1] bg-black">
              <Image
                src="/work/slide_18.png"
                alt="Portfolio Slide 18: Before After Analytics"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {activeTab === "snippets" && (
          <div className="rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#520000] tracking-widest">
                  Portfolio Slide 21 Preview
                </span>
                <h4 className="text-2xl font-serif font-bold text-[#140202] mt-1">
                  Cleintele Snipts
                </h4>
              </div>
              <span className="text-xs px-3.5 py-1.5 rounded-full bg-[#FAF6F0] text-[#520000] border border-[#D7C3B1] font-semibold">
                Direct Client Feedback
              </span>
            </div>

            <div className="relative h-72 sm:h-96 md:h-[480px] w-full rounded-2xl overflow-hidden border border-[#D7C3B1] bg-black">
              <Image
                src="/work/slide_21.png"
                alt="Portfolio Slide 21: Clientele Snippets"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
