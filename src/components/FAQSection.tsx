"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Clarity &amp; Answers
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-medium text-[#140202] uppercase tracking-tight">
            Frequently asked{" "}
            <span className="italic font-serif font-normal text-[#520000]">questions</span>.
          </h2>
          <p className="mt-3 text-base text-[#3D261E] font-normal">
            Everything you need to know about working with Axoyl Digital on your social channels.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                openIndex === idx
                  ? "bg-white border-[#520000] shadow-md"
                  : "bg-white border-[#D7C3B1] hover:border-[#520000]/50"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="text-base sm:text-lg font-serif font-bold text-[#140202]">
                  {faq.question}
                </span>
                <div
                  className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    openIndex === idx
                      ? "rotate-180 bg-[#520000] text-white border-[#520000]"
                      : "bg-[#FAF6F0] text-[#520000] border-[#D7C3B1]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-1 text-sm text-[#3D261E] leading-relaxed font-normal border-t border-[#D7C3B1]/40">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
