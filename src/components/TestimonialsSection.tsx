"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote, Star, CheckCircle } from "lucide-react";
import { EXACT_TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = EXACT_TESTIMONIALS[currentIndex];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % EXACT_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + EXACT_TESTIMONIALS.length) % EXACT_TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 220);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="relative py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#D7C3B1]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading directly from Portfolio Page 20 + Trifid Navigation Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#520000]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
                  Client Stories · Page 20
                </span>
              </div>

              {/* Title from Portfolio / Trifid Inspiration */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight leading-[1.04] mb-4">
                Don&apos;t take{" "}
                <span className="italic font-serif font-normal text-[#520000] relative inline-block">
                  our word for it
                </span>
                <span className="text-[#520000]">.</span>
              </h2>

              <p className="text-base text-[#3D261E] font-normal leading-relaxed mb-8 max-w-md">
                Unedited reviews directly from founders, CEOs, and brand managers who scaled their social presence with Esha and Axoyl Digital.
              </p>
            </div>

            {/* Navigation Controls (Trifid Style) */}
            <div className="pt-8 border-t border-[#D7C3B1]/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-bold text-[#520000] tracking-wider">
                  0{currentIndex + 1}
                </span>
                <span className="text-xs font-bold text-[#5A4842] tracking-widest uppercase">
                  / 0{EXACT_TESTIMONIALS.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D7C3B1] bg-white text-[#520000] hover:text-white hover:border-[#520000] hover:bg-[#520000] transition-all transform hover:-translate-x-0.5 active:scale-95 shadow-sm"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#520000] text-white hover:bg-[#720909] transition-all transform hover:translate-x-0.5 active:scale-95 shadow-md"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Testimonial Selectors */}
            <div className="hidden sm:flex flex-wrap gap-2 mt-8">
              {EXACT_TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? "bg-[#520000] text-white shadow-sm"
                      : "bg-white text-[#3D261E] border border-[#D7C3B1]/70 hover:border-[#520000] hover:text-[#520000]"
                  }`}
                >
                  {t.company}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Exact Trifid Quote Card Layout with Signature Vertical Accent Bar */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl bg-white border border-[#D7C3B1] p-8 sm:p-12 shadow-xl">
              {/* Vertical Accent Bar (Trifid Media Signature) */}
              <div className="absolute left-6 sm:left-8 top-10 bottom-10 w-2 rounded-full bg-gradient-to-b from-[#520000] to-[#8C1616] hidden sm:block" />

              <div className="sm:pl-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] flex items-center justify-center text-[#520000]">
                    <Quote className="w-6 h-6 fill-[#520000]/20 text-[#520000]" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF6F0] border border-[#D7C3B1]">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#520000] ml-1">5.0</span>
                  </div>
                </div>

                {/* Exact Word-for-Word Quote from Portfolio */}
                <div
                  className={`min-h-[170px] transition-opacity duration-200 ${
                    isAnimating ? "opacity-30" : "opacity-100"
                  }`}
                >
                  <p className="text-xl sm:text-2xl md:text-[28px] font-serif font-normal text-[#140202] leading-[1.45] tracking-tight mb-8">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>

                <div className="h-px w-full bg-[#D7C3B1]/50 mb-8" />

                {/* Author row exact to portfolio: Name - Role Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#520000] to-[#720909] text-lg font-serif font-bold text-white shadow-md">
                      {current.initials}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#140202] tracking-wide">
                        {current.author}
                      </h4>
                      <p className="text-xs font-bold text-[#520000] tracking-wider uppercase mt-0.5">
                        {current.role} — <span className="text-[#140202] font-semibold">{current.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] text-xs font-semibold text-[#520000]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
