"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import QuoteModal from "@/components/QuoteModal";
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Play,
  Mail,
  CheckCircle2,
  X,
  Layers,
  ChevronRight,
  Send,
  MapPin,
  Quote,
} from "lucide-react";
import { CLIENT_CASE_STUDIES } from "@/lib/data";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeMediaByCard, setActiveMediaByCard] = useState<
    Record<string, { type: "image" | "video"; src: string }>
  >({});
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("Social Media Management");

  // Private portfolio form modal
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [portfolioForm, setPortfolioForm] = useState({ name: "", email: "", brand: "" });
  const [portfolioSent, setPortfolioSent] = useState(false);

  const categories = [
    "all",
    "Events & Hospitality",
    "Food & Beverage",
    "Skincare & Wellness",
    "Aesthetic Clinic",
    "Construction & Living",
    "Travel & Hospitality",
    "Brand Design & Toys",
    "Performance Ads",
  ];

  const filteredStudies =
    selectedCategory === "all"
      ? CLIENT_CASE_STUDIES
      : CLIENT_CASE_STUDIES.filter((c) => c.category === selectedCategory);

  const getCardMedia = (study: (typeof CLIENT_CASE_STUDIES)[0]) => {
    return activeMediaByCard[study.id] || { type: "image", src: study.images[0] };
  };

  const handleSelectMedia = (
    studyId: string,
    type: "image" | "video",
    src: string
  ) => {
    setActiveMediaByCard((prev) => ({
      ...prev,
      [studyId]: { type, src },
    }));
  };

  const handleOpenInquiry = (brandName: string, serviceName: string) => {
    setQuoteService(`${brandName} Case Inquiry - ${serviceName}`);
    setIsQuoteModalOpen(true);
  };

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (portfolioForm.email) {
      setPortfolioSent(true);
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "case_study_dm_request",
          ...portfolioForm,
        }),
      }).catch((err) => console.error(err));
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202] selection:bg-[#520000] selection:text-white">
      <Navbar
        onOpenQuote={() => {
          setQuoteService("Portfolio Consultation");
          setIsQuoteModalOpen(true);
        }}
      />

      {/* Hero Header (Roy's Digital Media / Trifid Style) */}
      <section className="relative pt-44 sm:pt-52 pb-24 sm:pb-32 border-b border-[#D7C3B1]/60 bg-gradient-to-b from-[#FAF6F0] to-[#F4ECE3] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D7C3B1]/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Client Case Studies · Drive Assets
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#140202] tracking-tight max-w-4xl mx-auto leading-[1.08]">
            Selected Works &amp;{" "}
            <span className="italic font-normal text-[#520000]">Brand Stories</span>.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#3D261E] max-w-3xl mx-auto font-normal leading-relaxed">
            From the bustling flavours of Global Village Dubai to high-ticket aesthetic clinics and luxury US dining calendars — take a closer look at what we build for our partners.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsPortfolioModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#520000] hover:bg-[#380000] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Request Full Confidential Portfolio</span>
            </button>
            <a
              href="https://wa.me/923359441111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#D7C3B1] text-[#140202] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <span>DM us for full results</span>
              <ArrowUpRight className="w-4 h-4 text-[#520000]" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Case Studies Section */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills (Centered & Wrapped with Zero Scrollbars) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-16 max-w-5xl mx-auto px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#520000] text-white shadow-xs font-bold"
                    : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
                }`}
              >
                {cat === "all" ? "All Projects (8)" : cat}
              </button>
            ))}
          </div>

          {/* 8 Case Study Cards (Alternating Zig-Zag Layout with Inline Media Switching) */}
          <div className="space-y-16 sm:space-y-20">
            {filteredStudies.map((study, idx) => {
              const isEven = idx % 2 === 0;
              const currentMedia = getCardMedia(study);
              return (
                <div
                  key={study.id}
                  id={study.id}
                  className="group/card relative rounded-3xl bg-white hover:bg-[#530000] border-2 border-[#D7C3B1]/80 hover:border-[#864c49] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(83,0,0,0.45)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Top Accent Highlight Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#D7C3B1] to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:h-1.5" />

                  {/* Card Top Meta Bar */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-[#D7C3B1]/70 group-hover/card:border-white/15 transition-colors duration-300">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-[#520000] text-white text-[11px] font-bold uppercase tracking-widest group-hover/card:bg-white group-hover/card:text-[#530000] group-hover/card:shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover/card:scale-105 transition-all duration-300">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#520000] group-hover/card:text-[#FAF6F0] group-hover/card:tracking-[0.24em] transition-all duration-300">
                        {study.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D7C3B1]/80 group-hover/card:bg-white/10 group-hover/card:border-white/20 group-hover/card:text-white text-[#3D261E] text-xs font-semibold transition-all duration-300 shadow-2xs">
                        <MapPin className="w-3.5 h-3.5 text-[#520000] group-hover/card:text-[#D7C3B1] transition-colors" />
                        <span>{study.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    {/* Visual Media Showcase Column (Alternating: isEven -> Left, !isEven -> Right) */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      } flex flex-col justify-between`}
                    >
                      <div>
                        {/* Main Media Display Frame: Replaced Inline when Thumbnail is Clicked */}
                        <div className="relative aspect-[4/5] max-h-[500px] w-full rounded-2xl bg-[#140202] overflow-hidden group shadow-md group-hover/card:shadow-2xl group-hover/card:border-white/25 border border-[#520000]/25 transition-all duration-500">
                          {currentMedia.type === "video" ? (
                            <div className="relative w-full h-full bg-black flex items-center justify-center">
                              <video
                                key={currentMedia.src}
                                src={currentMedia.src}
                                controls
                                autoPlay
                                playsInline
                                loop
                                muted
                                className="w-full h-full object-contain bg-black"
                              />
                              <div className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-full bg-[#520000] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md pointer-events-none">
                                <Play className="w-3 h-3 fill-white" />
                                <span>Playing Reel (Muted)</span>
                              </div>
                            </div>
                          ) : (
                            <Image
                              key={currentMedia.src}
                              src={currentMedia.src}
                              alt={study.name}
                              fill
                              sizes="(max-width: 1024px) 100vw, 42vw"
                              className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                              priority={idx < 2}
                            />
                          )}

                          <div className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-full bg-[#140202]/90 group-hover/card:bg-white group-hover/card:text-[#530000] group-hover/card:border-transparent group-hover/card:scale-105 backdrop-blur-md text-[#FAF6F0] border border-[#D7C3B1]/40 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all duration-300">
                            <TrendingUp className="w-3 h-3 text-[#D7C3B1] group-hover/card:text-[#530000] transition-colors" />
                            <span>{study.stat}</span>
                          </div>

                          {/* Quick Reel Toggle Button in bottom-left */}
                          {study.video && (
                            <div className="absolute bottom-3.5 left-3.5 z-20">
                              {currentMedia.type === "video" ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleSelectMedia(study.id, "image", study.images[0])
                                  }
                                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#140202] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF6F0] transition-all shadow-md"
                                >
                                  <span>📷 View Photos</span>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleSelectMedia(study.id, "video", study.video!)
                                  }
                                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#520000] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#380000] transition-all shadow-md"
                                >
                                  <Play className="w-3.5 h-3.5 fill-white" />
                                  <span>Play Reel</span>
                                </button>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Thumbnail Strip: Reel Thumbnail with Play Icon + Photo Thumbnails */}
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mt-2.5">
                          {/* If Reel exists, show Reel Button Thumbnail */}
                          {study.video && (
                            <button
                              type="button"
                              onClick={() => handleSelectMedia(study.id, "video", study.video!)}
                              className={`relative aspect-[4/5] rounded-xl overflow-hidden bg-black border cursor-pointer transition-all flex items-center justify-center group/thumb ${
                                currentMedia.type === "video"
                                  ? "border-white ring-2 ring-white scale-105 shadow-xl"
                                  : "border-[#520000] group-hover/card:border-white/30 hover:border-white opacity-85 hover:opacity-100"
                              }`}
                              title="Play Video Reel"
                            >
                              <Image
                                src={study.images[0]}
                                alt={`${study.name} Reel preview`}
                                fill
                                sizes="80px"
                                className="object-cover opacity-50 group-hover/thumb:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-1">
                                <div className="w-7 h-7 rounded-full bg-[#520000] text-white flex items-center justify-center shadow-lg group-hover/thumb:scale-110 group-hover/thumb:bg-white group-hover/thumb:text-[#520000] transition-all">
                                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                </div>
                                <span className="mt-1 text-[9px] font-bold uppercase tracking-wider text-white bg-black/75 px-1.5 py-0.5 rounded-full">
                                  Reel
                                </span>
                              </div>
                            </button>
                          )}

                          {/* Photo Thumbnails */}
                          {study.images.slice(0, study.video ? 4 : 5).map((img, thumbIdx) => {
                            const isSelected =
                              currentMedia.type === "image" && currentMedia.src === img;
                            return (
                              <button
                                key={thumbIdx}
                                type="button"
                                onClick={() => handleSelectMedia(study.id, "image", img)}
                                className={`relative aspect-[4/5] rounded-xl overflow-hidden bg-[#1E0404] border cursor-pointer transition-all group/thumb ${
                                  isSelected
                                    ? "border-white ring-2 ring-white scale-105 shadow-xl"
                                    : "border-[#D7C3B1]/70 group-hover/card:border-white/20 hover:border-white"
                                }`}
                                title={`Switch to photo ${thumbIdx + 1}`}
                              >
                                <Image
                                  src={img}
                                  alt={`${study.name} thumbnail ${thumbIdx + 1}`}
                                  fill
                                  sizes="80px"
                                  className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-1 right-1 px-1 py-0.5 rounded bg-black/60 text-white text-[8px] font-bold opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                                  {thumbIdx + 1}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Case Content Column (Alternating: isEven -> Right, !isEven -> Left) */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      } flex flex-col justify-between py-1`}
                    >
                      <div>
                        <div className="mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#520000] group-hover/card:text-[#D7C3B1] block mb-1 group-hover/card:tracking-widest transition-all duration-300">
                            {study.service}
                          </span>
                          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202] group-hover/card:text-white tracking-tight mb-2.5 transition-colors duration-300">
                            {study.name}
                          </h2>
                          <div className="border-l-2 border-[#520000] group-hover/card:border-white/50 group-hover/card:border-l-4 group-hover/card:pl-4 pl-3.5 py-0.5 transition-all duration-300">
                            <p className="text-sm sm:text-base font-serif italic text-[#520000]/90 group-hover/card:text-[#FAF6F0]/90 transition-colors duration-300">
                              &ldquo;{study.tagline}&rdquo;
                            </p>
                          </div>
                        </div>

                        {/* Deliverables Badges */}
                        <div className="mb-5">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A4842]/70 group-hover/card:text-[#D7C3B1] block mb-2 transition-colors duration-300">
                            Scope &amp; Deliverables
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {study.deliverables.map((item, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#FAF6F0] text-[#3D261E] border border-[#D7C3B1]/80 group-hover/card:bg-white/10 group-hover/card:border-white/20 group-hover/card:text-white transition-all duration-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Strategic Narrative */}
                        <p className="text-sm sm:text-[14.5px] text-[#3D261E] group-hover/card:text-white/85 leading-relaxed mb-5 font-normal whitespace-pre-line transition-colors duration-300">
                          {study.description}
                        </p>

                        {/* Client Testimonial / Quote Excerpt */}
                        {study.clientQuote && (
                          <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF6F0]/90 group-hover/card:bg-white/10 group-hover/card:border-white/20 border border-[#D7C3B1]/80 mb-5 text-xs text-[#520000] group-hover/card:text-white font-serif italic flex items-start gap-2.5 shadow-2xs transition-all duration-300">
                            <Quote className="w-3.5 h-3.5 text-[#520000] group-hover/card:text-[#D7C3B1] shrink-0 mt-0.5 rotate-180 transition-colors duration-300" />
                            <span className="leading-relaxed">&ldquo;{study.clientQuote}&rdquo;</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom Section: Metrics Strip & Action Buttons */}
                      <div className="pt-4 border-t border-[#D7C3B1]/70 group-hover/card:border-white/15 transition-colors duration-300">
                        {/* 3-Column Micro Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#FAF6F0] group-hover/card:bg-black/25 group-hover/card:border-white/15 border border-[#D7C3B1]/80 mb-5 transition-all duration-300">
                          {study.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="text-left px-1 sm:px-2 border-r border-[#D7C3B1]/60 group-hover/card:border-white/15 last:border-none transition-colors duration-300"
                            >
                              <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase text-[#5A4842]/75 group-hover/card:text-[#D7C3B1] mb-0.5 transition-colors duration-300">
                                {m.label}
                              </span>
                              <span className="block text-xs sm:text-[13px] font-serif font-bold text-[#140202] group-hover/card:text-white truncate transition-colors duration-300">
                                {m.val}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => handleOpenInquiry(study.name, study.service)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#520000] group-hover/card:bg-white group-hover/card:text-[#530000] hover:bg-[#380000] group-hover/card:hover:bg-[#FAF6F0] group-hover/card:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35)] group-hover/card:scale-[1.02] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                          >
                            <span>Plan Similar Campaign</span>
                            <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300" />
                          </button>
                          <a
                            href="https://wa.me/923359441111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white group-hover/card:bg-white/10 group-hover/card:border-white/30 group-hover/card:text-white hover:bg-[#FAF6F0] border border-[#D7C3B1] text-[#140202] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs"
                          >
                            <span>DM For Complete Case Study</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lead Magnet Box: Full Confidential Portfolio by Email */}
          <div className="mt-20 rounded-3xl bg-[#520000] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7C3B1] block mb-3">
                Confidential Case Studies
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4">
                Want the full data and numbers of our clients?
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
                Add your email to receive our detailed confidential portfolio with before/after reach breakdowns, ROAS figures, and full client reels.
              </p>
              <button
                onClick={() => setIsPortfolioModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#520000] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#FAF6F0] transition-all shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Request Private Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Inquiry Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteService}
        initialMode="quote"
      />

      {/* Private Portfolio Request Modal */}
      {isPortfolioModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsPortfolioModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-[#D7C3B1]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPortfolioModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAF6F0] text-[#140202]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!portfolioSent ? (
              <form onSubmit={handlePortfolioSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#520000]/20 text-[#520000] text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-[#520000]" />
                    <span>Confidential Access</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#140202]">
                    Request Private Portfolio
                  </h3>
                  <p className="text-xs text-[#5A4842] mt-1">
                    Receive full results, client analytics reports, and detailed ad ROI figures.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140202] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Frank / Sarah"
                    value={portfolioForm.name}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, name: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140202] uppercase tracking-wider mb-1.5">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deco Construction, Clinic, Travel Brand"
                    value={portfolioForm.brand}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, brand: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140202] uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@yourcompany.com"
                    value={portfolioForm.email}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, email: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#520000] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#380000] transition-all flex items-center justify-center gap-2 shadow-md mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Full Confidential Portfolio</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-[#140202] mb-2">
                  Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed mb-6">
                  Thank you, {portfolioForm.name}. Our full confidential portfolio with client data and analytics will be emailed to {portfolioForm.email} shortly.
                </p>
                <button
                  onClick={() => {
                    setIsPortfolioModalOpen(false);
                    setPortfolioSent(false);
                    setPortfolioForm({ name: "", email: "", brand: "" });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#520000] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
