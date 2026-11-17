"use client";

import React from "react";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

interface FinalCtaProps {
  onOpenQuote: () => void;
}

export default function FinalCtaSection({ onOpenQuote }: FinalCtaProps) {
  const whatsappUrl = `https://wa.me/${EXACT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    "Hi Axoyl Digital, I'm ready to grow my brand on social. Let's discuss a quote."
  )}`;

  return (
    <section className="py-24 sm:py-32 bg-[#140202] text-[#FAF6F0] relative overflow-hidden border-t border-[#3D0303]">
      {/* Background radial maroon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#520000]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#240404] text-[#D7C3B1] border border-[#520000]/60 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D7C3B1]" />
          <span>Next Step</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight mb-5 leading-tight">
          Ready to grow your brand on social?
        </h2>

        <p className="text-base sm:text-lg text-[#FAF6F0]/80 font-normal leading-relaxed max-w-xl mx-auto mb-10">
          Tell us about your brand and we'll reply within 24 hours.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#520000] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#720909] transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            <span>Get a quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
