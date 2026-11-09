"use client";

import React from "react";
import Image from "next/image";
import { Star, Sparkles, CheckCircle2, TrendingUp, Play } from "lucide-react";
import { EXACT_TESTIMONIALS } from "@/lib/data";

const PROOF_CARDS = [
  {
    title: "147k Views Skincare Reel",
    category: "Organic Retention Hook",
    image: "/work/case_page_17.png",
    stat: "147k+",
    tag: "Clean Beauty",
  },
  {
    title: "144k Views Luxury Catering",
    category: "Hestia Harlow (USA)",
    image: "/work/p17_img1_199.png",
    stat: "144k+",
    tag: "High-Ticket Events",
  },
  {
    title: "91k Views Aesthetic Feed",
    category: "Viral Engagement Lift",
    image: "/work/p17_img2_200.png",
    stat: "91k+",
    tag: "Clinic & Wellness",
  },
];

export default function TrifidResultsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Trifid Exact Typography) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1] bg-white mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000]">
                Real Clients. Real Results.
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
              A SYSTEM OF DOING THE WORK<span className="text-[#520000]">.</span> <br />
              NOT JUST TALKING ABOUT IT<span className="text-[#520000]">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5A4842] max-w-md font-normal leading-relaxed">
            Every day is a live asset we publish, not empty advice. Here is documented proof from client campaigns scaling through Axoyl Digital.
          </p>
        </div>

        {/* 2-Column Showcase: Phone Mockup Reel Grid vs Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Phone Showcase Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PROOF_CARDS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#D7C3B1] p-3 shadow-md hover:border-[#520000] hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-black mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-3">
                    <span className="self-start px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/90 text-[#520000]">
                      {item.tag}
                    </span>

                    <div>
                      <div className="flex items-center gap-1.5 text-white mb-1">
                        <Play className="w-3.5 h-3.5 fill-white text-white" />
                        <span className="text-xl font-bold font-serif">{item.stat}</span>
                      </div>
                      <p className="text-[10px] text-white/80 line-clamp-1">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-1 pb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#520000] block">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-[#140202] line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Real Verified Testimonial Quotes from Page 20 */}
          <div className="lg:col-span-5 space-y-4">
            {EXACT_TESTIMONIALS.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="rounded-3xl bg-white border border-[#D7C3B1] p-6 shadow-sm hover:border-[#520000] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#520000] px-2 py-0.5 rounded-full bg-[#FAF6F0] border border-[#520000]/20">
                    Verified Partner
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-serif italic text-[#140202] leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-[#D7C3B1]/40">
                  <div className="w-8 h-8 rounded-full bg-[#520000] text-white flex items-center justify-center text-xs font-serif font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#140202]">
                      {t.author}
                    </h5>
                    <p className="text-[11px] text-[#5A4842]">
                      {t.role} · <span className="font-semibold text-[#520000]">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}