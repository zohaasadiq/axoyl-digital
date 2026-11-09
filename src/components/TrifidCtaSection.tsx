"use client";

import React from "react";
import { ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

interface TrifidCtaSectionProps {
  onOpenAudit: () => void;
}

export default function TrifidCtaSection({ onOpenAudit }: TrifidCtaSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#2D0202] text-white relative overflow-hidden border-t border-[#D7C3B1]/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#520000]/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1]/30 bg-[#3D0303] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D7C3B1]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D7C3B1]">
            Start Something Real
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-white uppercase tracking-tight leading-[1.04] mb-6">
          Ready to scale your <br />
          brand authority<span className="text-[#D7C3B1]">?</span>
        </h2>

        <p className="text-base sm:text-xl text-[#D7C3B1]/90 font-serif max-w-2xl mx-auto leading-relaxed mb-10">
          Let&apos;s build an online presence that turns views into cultural positioning and real revenue.
        </p>

        {/* Central Action Capsule */}
        <div className="max-w-xl mx-auto rounded-3xl bg-[#3D0303] border border-[#D7C3B1]/30 p-8 shadow-2xl mb-10">
          <p className="text-sm sm:text-base font-serif font-bold text-white mb-6">
            Got a brief? Tell us what you&apos;re building. We&apos;ll take it from there.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#140202] bg-[#D7C3B1] hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Get Free Social Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/923492976505`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#720909] border border-[#D7C3B1]/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp with Esha</span>
            </a>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#D7C3B1]/70">
          <span>Direct Founder Response within 24 Hours</span>
          <span>·</span>
          <span>Free 1:1 Social Account Audit</span>
          <span>·</span>
          <span>Custom Content Strategy</span>
        </div>
      </div>
    </section>
  );
}