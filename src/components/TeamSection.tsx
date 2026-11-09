"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Star, ArrowUpRight, Award, CheckCircle2 } from "lucide-react";
import { EXACT_TEAM } from "@/lib/data";

interface TeamSectionProps {
  onOpenAudit?: () => void;
}

export default function TeamSection({ onOpenAudit }: TeamSectionProps) {
  const founder = EXACT_TEAM.find((m) => m.name.toLowerCase().includes("esha")) || EXACT_TEAM[0];
  const specialists = EXACT_TEAM.filter((m) => m !== founder);

  return (
    <section id="team" className="relative py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header directly from Portfolio Page 22 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Portfolio Page 22 · Agency Leadership
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
            Meet The Team<span className="text-[#520000]">.</span>
          </h2>

          <h3 className="mt-3 text-lg sm:text-xl font-serif text-[#520000] font-bold">
            Behind The Creative Process Of Building Your Brand
          </h3>

          <p className="mt-4 text-base text-[#3D261E] font-normal leading-relaxed">
            Founded and creatively spearheaded by Esha, supported by a multidisciplinary unit of brand designers, PR strategists, and viral social media specialists.
          </p>
        </div>

        {/* 1. GRAND FOUNDER SPOTLIGHT CARD (Striking High-Contrast Velvet Maroon Feature) */}
        <div className="relative mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#520000] via-[#430000] to-[#2E0000] text-white p-8 sm:p-12 shadow-2xl overflow-hidden border border-[#D7C3B1]/30">
            {/* Subtle background glow inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D7C3B1]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Founder Image with Gold / Beige Luxury Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-sm w-full">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-[#D7C3B1] via-[#D7C3B1]/40 to-transparent p-1 opacity-90 shadow-2xl" />

                  <div className="relative h-80 sm:h-96 md:h-[440px] w-full rounded-2xl overflow-hidden bg-[#240000] shadow-2xl">
                    <Image
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role}`}
                      fill
                      priority
                      className="object-cover object-top filter brightness-100 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#200000]/95 via-transparent to-transparent opacity-80" />

                    {/* Top Founder Label */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#140202]/90 backdrop-blur-md text-[#D7C3B1] border border-[#D7C3B1]/50 shadow-lg">
                        <Award className="w-3.5 h-3.5 text-[#D7C3B1]" />
                        Agency Founder &amp; Visionary
                      </span>
                    </div>

                    {/* Bottom Name on photo */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide block">
                        {founder.name}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D7C3B1] block mt-0.5">
                        {founder.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Bio, Philosophy & Direct Praise */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D7C3B1]/40 text-[#D7C3B1] text-xs font-bold uppercase tracking-widest mb-4">
                    <Star className="w-3.5 h-3.5 fill-[#D7C3B1]" />
                    Featured Leadership
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight uppercase mb-2">
                    {founder.name}
                  </h3>

                  <p className="text-sm font-serif font-semibold text-[#D7C3B1] tracking-widest uppercase mb-6 pb-4 border-b border-white/15">
                    {founder.role} · Axoyl Digital
                  </p>

                  <blockquote className="text-base sm:text-xl font-serif italic text-white leading-relaxed mb-6 pl-4 border-l-2 border-[#D7C3B1]">
                    &ldquo;We don&apos;t just post content — we craft cultural positioning, magnetic aesthetics, and compounding engagement that transforms everyday feeds into authority powerhouses.&rdquo;
                  </blockquote>

                  <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed mb-6">
                    Esha personally leads creative direction and campaign storytelling across all client accounts. Her strategic execution and hands-on dedication are praised repeatedly across every client collaboration — from luxury US catering powerhouses to top-tier aesthetic clinics and clean beauty brands.
                  </p>

                  {/* Verified Praise Tags Mentioning Esha by name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs">
                      <span className="text-[#D7C3B1] font-semibold block mb-0.5">
                        &ldquo;Working with Esha was smooth and professional... a true partnership.&rdquo;
                      </span>
                      <span className="text-[10px] text-white/60 uppercase">
                        — Andrew Shortell, CEO Hestia Harlow
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs">
                      <span className="text-[#D7C3B1] font-semibold block mb-0.5">
                        &ldquo;Esha really understood the needs of my brand and cared to bring insights.&rdquo;
                      </span>
                      <span className="text-[10px] text-white/60 uppercase">
                        — Maida, MD Sarivaa Aesthetics
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action with Esha */}
                <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/923492976505?text=Hi%20Esha,%20I'd%20like%20to%20discuss%20creative%20direction%20and%20social%20media%20for%20my%20brand."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#140202] bg-[#D7C3B1] hover:bg-white hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#520000]" />
                    <span>Connect Directly with Esha</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {onOpenAudit && (
                    <button
                      onClick={onOpenAudit}
                      className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#D7C3B1] border border-[#D7C3B1]/40 hover:border-white hover:text-white transition-all"
                    >
                      Book 1:1 Creative Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE SPECIALIST TEAM GRID (Clean, Elegant, Light Cards) */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000]">
              Creative &amp; Strategic Specialists
            </span>
            <div className="h-px flex-1 bg-[#D7C3B1]" />
            <span className="text-xs font-semibold text-[#5A4842]">Axoyl Digital Hub</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((member) => (
              <div
                key={member.name}
                className="group rounded-3xl bg-white border border-[#D7C3B1] hover:border-[#520000] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                {/* Photo */}
                <div className="relative h-64 w-full bg-[#FAF6F0] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#520000] border border-[#520000]/20 shadow-sm">
                      {member.tag}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="text-xl font-serif font-bold text-[#140202] mb-1 group-hover:text-[#520000] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#520000]">
                      {member.role}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D7C3B1]/40 flex items-center justify-between text-[11px] text-[#5A4842]">
                    <span>Axoyl Team</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
