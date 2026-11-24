"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";
import { EXACT_TESTIMONIALS } from "@/lib/data";

export default function RowTestimonialsSection() {
  const testimonials = EXACT_TESTIMONIALS.slice(0, 6);
  // Duplicate for seamless infinite loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials-row" className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 text-[#140202] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#520000]/25 text-[#520000] text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span>Section 5 · Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight">
            Words from our partners.
          </h2>
          <p className="mt-2 text-sm text-[#5A4842]">
            Total 6 verified reviews from founders, CEOs, and directors who scaled with Axoyl Digital.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track (Like the Client Logos) */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Left & Right Soft Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous Marquee Container - Pauses on Hover */}
        <div className="flex animate-marquee-left hover:[animation-play-state:paused] gap-6 items-stretch w-max cursor-pointer">
          {marqueeItems.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[340px] sm:w-[420px] shrink-0 rounded-3xl bg-white border border-[#D7C3B1] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#520000] hover:-translate-y-1 transition-all duration-300 relative select-none"
            >
              {/* Stars & Quote Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1]/60 flex items-center justify-center text-[#520000]">
                    <Quote className="w-5 h-5 fill-[#520000]/15" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#D7C3B1]/40">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="text-xs font-bold text-[#520000] ml-1">5.0</span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base font-serif italic text-[#140202] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-5 border-t border-[#D7C3B1]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#520000] to-[#720909] text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#140202] leading-tight">{t.author}</h4>
                    <p className="text-xs text-[#520000] font-semibold mt-0.5">
                      {t.role} · <span className="text-[#5A4842]">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-[10px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 mr-1" />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
