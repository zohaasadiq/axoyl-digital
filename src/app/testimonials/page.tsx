"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientShowcase from "@/components/ClientShowcase";
import { Sparkles, Star, Quote, CheckCircle, MessageSquare } from "lucide-react";
import { EXACT_TESTIMONIALS } from "@/lib/data";

export default function TestimonialsPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

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
              Portfolio Page 20 &amp; 21
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight max-w-4xl mx-auto leading-[1.08]">
            Client&apos;s{" "}
            <span className="italic font-serif font-normal text-[#520000]">
              Testimonials
            </span>
            .
          </h1>

          <p className="mt-3 text-lg font-serif italic text-[#520000] font-semibold">
            Don&apos;t take our word for it.
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#3D261E] max-w-3xl mx-auto font-normal leading-relaxed">
            Read direct feedback from brand partners, CEOs, and creative heads across the USA, UK, UAE, and Pakistan who trust Axoyl Digital to manage and scale their brand voice.
          </p>
        </div>
      </section>

      {/* Interactive Trifid-style Split Section */}
      <TestimonialsSection />

      {/* Grid of All 6 Testimonials from Page 20 */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#520000] font-bold block mb-2">
              All Client Testimonial Records
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
              Unedited Feedback from Our Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXACT_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-3xl bg-white border border-[#D7C3B1] p-8 shadow-sm flex flex-col justify-between hover:border-[#520000] hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#520000] border border-[#520000]/20">
                      Verified Review
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-serif italic text-[#140202] leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D7C3B1]/40 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#520000] flex items-center justify-center text-sm font-serif font-bold text-white shrink-0 shadow-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#140202]">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[#5A4842]">
                      {t.role} — <span className="text-[#520000] font-bold">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page 19: Clients Marquee */}
      <ClientShowcase />

      <Footer />
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </main>
  );
}