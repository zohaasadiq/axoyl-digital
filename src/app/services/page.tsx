"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import {
  Share2,
  Video,
  Flame,
  Users,
  Megaphone,
  BarChart3,
  Building2,
  UserCheck,
  Sparkles,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { WE_DEAL_IN, UNMATCHED_SOLUTIONS, EXACT_CONTACT } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  smm: <Share2 className="w-6 h-6 text-[#520000]" />,
  "content-creation": <Video className="w-6 h-6 text-[#520000]" />,
  campaigns: <Flame className="w-6 h-6 text-[#520000]" />,
  engagement: <Users className="w-6 h-6 text-[#520000]" />,
  influencer: <Megaphone className="w-6 h-6 text-[#520000]" />,
  analytics: <BarChart3 className="w-6 h-6 text-[#520000]" />,
  "corporate-branding": <Building2 className="w-6 h-6 text-[#520000]" />,
  "personal-branding": <UserCheck className="w-6 h-6 text-[#520000]" />,
};

const DETAILED_SERVICES_BREAKDOWN = [
  {
    id: "smm",
    number: "01",
    title: "SOCIAL MEDIA MANAGEMENT (SMM)",
    tier: "PRIMARY FLAGSHIP",
    desc: "Our core primary specialty. Complete end-to-end management of your social presence across Instagram, TikTok, and LinkedIn so your brand stays in the feed and at the forefront of the conversation.",
    deliverables: [
      "Custom monthly content strategy and aesthetic moodboards",
      "Daily posting schedule and multi-platform publishing",
      "Active DM engagement & audience community management",
      "Hashtag optimization and algorithm distribution tracking",
      "Comprehensive monthly growth and performance review",
    ],
  },
  {
    id: "content-creation",
    number: "02",
    title: "CONTENT CREATION",
    tier: "PRIMARY SPECIALTY",
    desc: "Scroll-stopping short-form reels, high-aesthetic carousels, and visual storytelling engineered with viral hooks to maximize organic non-follower reach and watch-time retention.",
    deliverables: [
      "Concept ideation, scriptwriting & viral hook generation",
      "Dynamic pacing, sound design & trending audio pairing",
      "High-contrast luxury color grading and typography titles",
      "Custom carousel layouts & branded story assets",
      "A/B cover image testing for profile grid aesthetics",
    ],
  },
  {
    id: "campaigns",
    number: "03",
    title: "SOCIAL MEDIA CAMPAIGNS",
    tier: "PRIMARY SPECIALTY",
    desc: "Strategic viral campaign rollouts engineered around product drops, seasonal milestones, and brand announcements that convert casual viewers into paying advocates.",
    deliverables: [
      "Campaign concept and creative roadmap planning",
      "Multi-week rollout schedule across all channels",
      "Hashtag challenges and audience participation funnels",
      "Coordinated creator push and influencer synchronization",
      "Real-time campaign analytics and conversion monitoring",
    ],
  },
  {
    id: "engagement",
    number: "04",
    title: "AUDIENCE ENGAGEMENT",
    tier: "PRIMARY SPECIALTY",
    desc: "Proactive community management that builds loyal brand advocates. We turn comment sections and DMs into authentic relationship pipelines.",
    deliverables: [
      "Fast response protocol for customer queries and DMs",
      "Active outreach to target accounts and industry peers",
      "Story Q&As, polls, and interactive audience widgets",
      "Comment moderation and brand voice alignment",
      "User-generated content (UGC) curation and resharing",
    ],
  },
  {
    id: "influencer",
    number: "05",
    title: "INFLUENCER MARKETING",
    tier: "SECONDARY SOLUTION",
    desc: "Curated creator partnerships across Pakistan, the USA, and UAE. From onboarding to contract management and gifting campaigns.",
    deliverables: [
      "Vetted influencer rosters in Pakistan, USA, and UAE",
      "Creator onboarding, contract management & rate vetting",
      "Creative briefs ensuring brand aesthetic compliance",
      "Gifting fulfillment and unboxing coordination",
      "Campaign ROI tracking and usage rights management",
    ],
  },
  {
    id: "analytics",
    number: "06",
    title: "ANALYTICS AND REPORTING",
    tier: "SECONDARY SOLUTION",
    desc: "Transparent, data-backed insights. We track real business impact: impressions, reach acceleration, profile visits, and inquiry velocity.",
    deliverables: [
      "Bi-weekly and monthly performance dashboards",
      "Before vs. After metric breakdowns (as featured in Page 18)",
      "Reel retention curves and hook analysis",
      "Audience demographic and geo-location breakdown",
      "Actionable recommendations for next month's sprint",
    ],
  },
  {
    id: "corporate-branding",
    number: "07",
    title: "CORPORATE BRANDING",
    tier: "SECONDARY SOLUTION",
    desc: "Bespoke brand identity systems that command authority. From luxury typography pairings to feed grids and digital collateral.",
    deliverables: [
      "Brand identity guidelines and color palette architecture",
      "Typography system design (TAN Pearl & Inter pairings)",
      "Instagram aesthetic grid layouts & highlight icons",
      "Presentation pitch decks and corporate collateral",
      "Packaging and print media design",
    ],
  },
  {
    id: "personal-branding",
    number: "08",
    title: "PERSONAL BRANDING",
    tier: "SECONDARY SOLUTION",
    desc: "Executive personal branding for founders, CEOs, and clinic medical directors to establish thought-leadership and attract high-ticket opportunities.",
    deliverables: [
      "Founder narrative architecture and positioning pillars",
      "Thought-leadership copywriting for LinkedIn and Instagram",
      "Behind-the-scenes founder video scripting",
      "Podcast and media interview placement support",
      "Direct consultation booking funnel integration",
    ],
  },
];

export default function ServicesPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202]">
      <Navbar onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-[#D7C3B1]/60 bg-[#FAF6F0]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D7C3B1]/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Portfolio Pages 02 &amp; 03
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight max-w-4xl mx-auto leading-[1.08]">
            Unmatched Marketing Solutions &amp;{" "}
            <span className="italic font-serif font-normal text-[#520000]">
              Core Capabilities
            </span>
            .
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#3D261E] max-w-3xl mx-auto font-normal leading-relaxed">
            Axoyl Digital is <strong className="text-[#520000] font-bold">primarily a Social Media Management (SMM) agency</strong> and secondly a full-funnel marketing &amp; PR powerhouse. Here is exactly what we deliver for your brand.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#720909] transition-all shadow-md"
            >
              Get Free Social Media Audit
            </button>
            <a
              href={`https://wa.me/923492976505`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#520000] border border-[#520000]/30 bg-white hover:bg-[#FAF6F0] transition-all shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Page 02: 4 Pillars Breakdown */}
      <section className="py-24 bg-[#F4ECE3] border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#520000] font-bold block mb-1">
              Portfolio Page 02
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
              Unmatched Marketing Solutions at Axoyl Digital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {UNMATCHED_SOLUTIONS.map((sol, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#D7C3B1] p-7 hover:border-[#520000] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1] flex items-center justify-center text-[#520000] font-bold mb-5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#140202] mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-[#5A4842] leading-relaxed font-normal">
                    {sol.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#D7C3B1]/40 text-[11px] font-bold text-[#520000]">
                  Axoyl Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page 03: "WE DEAL IN" Detailed 8-Service Grid */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#520000] font-bold block mb-2">
              Portfolio Page 03 · Full Scope
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-medium text-[#140202] uppercase tracking-tight">
              WE DEAL IN<span className="text-[#520000]">.</span>
            </h2>
            <p className="mt-4 text-base text-[#3D261E] font-normal">
              We specialize in providing top-tier services to elevate your online presence and brand identity. Explore each service track below:
            </p>
          </div>

          <div className="space-y-8">
            {DETAILED_SERVICES_BREAKDOWN.map((service) => (
              <div
                key={service.id}
                className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 ${
                  service.tier.includes("PRIMARY")
                    ? "bg-white border-[#520000]/40 shadow-md hover:shadow-xl hover:border-[#520000]"
                    : "bg-[#FAF6F0] border-[#D7C3B1] hover:border-[#520000]/40 hover:bg-white"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] flex items-center justify-center">
                        {SERVICE_ICONS[service.id]}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        service.tier.includes("PRIMARY")
                          ? "bg-[#520000] text-white shadow-sm"
                          : "bg-white text-[#520000] border border-[#D7C3B1]"
                      }`}>
                        {service.tier}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed font-normal mb-6">
                      {service.desc}
                    </p>

                    <button
                      onClick={() => setIsAuditModalOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#720909] transition-colors shadow-sm"
                    >
                      <span>Inquire About {service.title.split("(")[0].trim()}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="lg:col-span-7 bg-[#FAF6F0] rounded-2xl p-6 border border-[#D7C3B1]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#520000] block mb-3">
                      Deliverables Included:
                    </span>
                    <div className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#140202]">
                          <Check className="w-4 h-4 text-[#520000] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Day Onboarding Timeline */}
      <section className="py-24 bg-[#F4ECE3] border-t border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#520000] block mb-2">
              Onboarding Velocity
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#140202] uppercase tracking-tight">
              From Discovery to{" "}
              <span className="italic font-serif font-normal text-[#520000]">Live Feed Publishing</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm">
              <span className="text-2xl font-serif font-bold text-[#520000] block mb-1">Day 01</span>
              <h4 className="text-base font-serif font-bold text-[#140202] mb-2">Brand Discovery</h4>
              <p className="text-xs text-[#5A4842] leading-relaxed">
                Initial intake call with Esha, target audience segmentation, and tone-of-voice alignment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm">
              <span className="text-2xl font-serif font-bold text-[#520000] block mb-1">Day 02 - 03</span>
              <h4 className="text-base font-serif font-bold text-[#140202] mb-2">Moodboard &amp; Strategy</h4>
              <p className="text-xs text-[#5A4842] leading-relaxed">
                Aesthetic grid curation, viral video hook ideation, and initial 30-day content calendar build.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm">
              <span className="text-2xl font-serif font-bold text-[#520000] block mb-1">Day 04</span>
              <h4 className="text-base font-serif font-bold text-[#140202] mb-2">Client Approval</h4>
              <p className="text-xs text-[#5A4842] leading-relaxed">
                Interactive review session, feedback implementation, and caption/hashtag finalization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm">
              <span className="text-2xl font-serif font-bold text-[#520000] block mb-1">Day 05+</span>
              <h4 className="text-base font-serif font-bold text-[#140202] mb-2">Live Publishing &amp; SMM</h4>
              <p className="text-xs text-[#5A4842] leading-relaxed">
                Scheduled multi-platform publishing begins alongside proactive community DM management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </main>
  );
}
