"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface HomeServicesProps {
  onOpenQuote: (service?: string) => void;
}

// 6 Complementary Core Services from Client Document
const SECONDARY_SERVICES = [
  {
    num: "01",
    title: "Branding & Designing",
    desc: "Visual identity, brand guidelines, typography, and cohesive aesthetic systems that make your business unmistakable.",
    href: "/services",
  },
  {
    num: "02",
    title: "Video Editing",
    desc: "High-retention short-form reels, TikToks, and YouTube cuts engineered to hold attention and convert viewers into followers.",
    href: "/services",
  },
  {
    num: "03",
    title: "Paid Ads",
    desc: "Targeted Meta & Google ad campaigns engineered for ROAS, low acquisition costs, and qualified inbound inquiries.",
    href: "/services",
  },
  {
    num: "04",
    title: "PR & Influencer Marketing",
    desc: "Vetted creator collaborations, product gifting, and press outreach that establish immediate market trust.",
    href: "/services",
  },
  {
    num: "05",
    title: "Personal Branding",
    desc: "Turn founder and executive profiles into high-trust authority media channels on LinkedIn and Instagram.",
    href: "/services",
  },
  {
    num: "06",
    title: "Email Marketing",
    desc: "Lifecycle welcome flows, promotional campaigns, and weekly newsletters that maximize client lifetime value.",
    href: "/services",
  },
];

export default function HomeServicesSection({ onOpenQuote }: HomeServicesProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight">
            What we do.
          </h2>
        </div>

        {/* 1 Large Card for Social Media Management (Deep Maroon Theme) */}
        <div className="mb-6 rounded-3xl bg-[#520000] text-white p-8 sm:p-10 shadow-xl border border-[#D7C3B1]/30 hover:border-[#D7C3B1]/70 transition-all duration-300 relative overflow-hidden group">
          {/* Subtle luxury light sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D0000] border border-[#D7C3B1]/40 text-[#D7C3B1] text-[11px] font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#D7C3B1]" />
                <span>Core Flagship Offering</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                Social Media Management
              </h3>
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-6">
                Strategy, monthly calendar, design, captions, posting and reporting — handled for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7C3B1]" />
                  <span>Custom weekly content calendar &amp; approvals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7C3B1]" />
                  <span>High-converting reels, carousels &amp; graphic design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7C3B1]" />
                  <span>Daily community management &amp; DM lead routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7C3B1]" />
                  <span>Monthly analytics &amp; next-step action plan</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#520000] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF6F0] transition-all shadow-md"
              >
                <span>Explore Full Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenQuote("Social Media Management")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3D0000] border border-[#D7C3B1]/40 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#520000] transition-all shadow-xs"
              >
                <span>Inquire About SMM</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Small Cards Below (Matching Deep Maroon Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECONDARY_SERVICES.map((serv) => (
            <div
              key={serv.num}
              className="rounded-2xl bg-[#520000] text-white border border-[#D7C3B1]/25 p-6 flex flex-col justify-between hover:border-[#D7C3B1]/70 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group shadow-lg"
            >
              {/* Subtle luxury light sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#D7C3B1] uppercase tracking-wider">
                    {serv.num}
                  </span>
                  <Link
                    href={serv.href}
                    className="p-1 rounded-full text-[#D7C3B1] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    aria-label={`Learn more about ${serv.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#FAF6F0] transition-colors">
                  {serv.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#D7C3B1]/90 leading-relaxed">
                  {serv.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#D7C3B1]/20 flex items-center justify-between relative z-10">
                <button
                  onClick={() => onOpenQuote(serv.title)}
                  className="text-xs font-bold text-[#D7C3B1] hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Book this service</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
                <Link
                  href={serv.href}
                  className="text-xs font-medium text-white/70 hover:text-white transition-colors"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro-link to full services page */}
        <div className="text-center mt-12">
          <p className="text-xs text-[#5A4842]">
            Looking for something tailored?{" "}
            <Link
              href="/services"
              className="font-bold text-[#520000] underline underline-offset-4 hover:text-[#380000] transition-colors ml-1"
            >
              Browse our complete service catalog &amp; deliverables →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
