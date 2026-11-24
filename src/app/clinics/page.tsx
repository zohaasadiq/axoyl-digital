"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import QuoteModal from "@/components/QuoteModal";
import RowTestimonialsSection from "@/components/RowTestimonialsSection";
import WhereWeWorkMapSection from "@/components/WhereWeWorkMapSection";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Activity,
  HeartPulse,
  Sparkle,
  Dumbbell,
  Stethoscope,
  Smile,
  X,
  Mail,
  Share2,
  Palette,
  Film,
  Target,
  Users,
  UserCheck,
  Send,
} from "lucide-react";

export default function ClinicsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"quote" | "audit">("audit");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Private portfolio form modal state
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [portfolioForm, setPortfolioForm] = useState({ name: "", niche: "", email: "" });
  const [portfolioSubmitted, setPortfolioSubmitted] = useState(false);

  const handleOpenAudit = () => {
    setModalMode("audit");
    setIsQuoteModalOpen(true);
  };

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (portfolioForm.email) {
      setPortfolioSubmitted(true);
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "clinic_private_portfolio_request",
          ...portfolioForm,
        }),
      }).catch((err) => console.error("Clinic portfolio request error:", err));
    }
  };

  // Section 2: Who we work with (5 items)
  const WHO_WE_WORK_WITH = [
    { title: "Aesthetic Clinics", icon: Sparkles, desc: "Skin, injectables & laser" },
    { title: "Med Spas & Injectors", icon: Stethoscope, desc: "Doctor-led aesthetics" },
    { title: "Dermatology & Skincare", icon: Smile, desc: "Clinical skincare & acne" },
    { title: "Pilates & Fitness Studios", icon: Dumbbell, desc: "Reformer & private wellness" },
    { title: "Wellness & Physio Clinics", icon: HeartPulse, desc: "Holistic therapy & physio" },
  ];

  // Section 3: Sound Familiar? (3 cards)
  const PAIN_POINTS = [
    {
      title: "“We post, but no one books.”",
      desc: "Likes don’t pay rent. We build content that moves people to your booking link.",
      subtext: "Conversion-led treatment messaging",
    },
    {
      title: "“We don’t have time for content.”",
      desc: "You treat clients. We plan, shoot-direct, edit and post.",
      subtext: "End-to-end done for you",
    },
    {
      title: "“Our page doesn’t match our clinic.”",
      desc: "We make your feed look as premium as your treatment room.",
      subtext: "High-end luxury aesthetic",
    },
  ];

  // Section 4: What we do (6 simple cards from homepage + compliance note)
  const CLINIC_SERVICES = [
    {
      title: "Social Media Management",
      desc: "Full monthly treatment calendar, design, captions, scheduling and lead moderation.",
      icon: Share2,
    },
    {
      title: "Branding & Designing",
      desc: "Calm, medical-grade aesthetic identities, price lists, story highlights, and clinic signage.",
      icon: Palette,
    },
    {
      title: "Video Editing",
      desc: "High-retention reels demonstrating procedures, client journeys, and practitioner expertise.",
      icon: Film,
    },
    {
      title: "Paid Ads",
      desc: "Hyper-local Meta ads driving consultation bookings within your clinic’s catchment area.",
      icon: Target,
    },
    {
      title: "PR & Influencer Marketing",
      desc: "Vetted creator appointments and patient testimonials that establish clinical credibility.",
      icon: Users,
    },
    {
      title: "Personal Branding",
      desc: "Position clinic founders, MDs, and lead injectors as authorities in facial aesthetics.",
      icon: UserCheck,
    },
  ];

  // Section 5: How it works (3 numbered steps)
  const HOW_IT_WORKS = [
    {
      num: "01",
      step: "Free audit",
      desc: "We review your page and tell you honestly what’s missing.",
    },
    {
      num: "02",
      step: "Your plan",
      desc: "A monthly content and ads plan built around your treatments.",
    },
    {
      num: "03",
      step: "We run it",
      desc: "You approve, we post, and you get a simple monthly report.",
    },
  ];

  // Section 6: Clinic work (6 visuals from Drive: Skinsation & ER Organics)
  const CLINIC_VISUALS = [
    {
      src: "/images/drive/skinsation/skinsation-1.png",
      title: "Skinsation Aesthetic Clinic",
      subtitle: "Giveaway & Consultation Booking Creative",
      brand: "Skinsation Clinic",
    },
    {
      src: "/images/drive/skinsation/skinsation-4.png",
      title: "It's Not Your Skincare Campaign",
      subtitle: "Dermatological Treatment Education",
      brand: "Skinsation Clinic",
    },
    {
      src: "/images/drive/skinsation/skinsation-7.png",
      title: "Clinic Experience Invitation",
      subtitle: "High-End Treatment Room Booking",
      brand: "Skinsation Clinic",
    },
    {
      src: "/images/drive/er-organics/er-1.jpeg",
      title: "ER Organics Clean Skincare",
      subtitle: "Influencer Partnership with Aena Khan",
      brand: "ER Organics",
    },
    {
      src: "/images/drive/er-organics/er-3.jpeg",
      title: "Clinical Texture & Routine Content",
      subtitle: "Serum & Active Ingredients Showcase",
      brand: "ER Organics",
    },
    {
      src: "/images/drive/skinsation/skinsation-2.png",
      title: "Skinsation VIP Client Campaign",
      subtitle: "HydraFacial & Peel Visual Carousel",
      brand: "Skinsation Clinic",
    },
  ];

  // Section 9: Quick questions (Accordion 4 questions, closed by default)
  const CLINIC_FAQS = [
    {
      q: "Do you only work with clinics,wellness?",
      a: "No, but clinics and wellness are our specialty, so we already know your clients, your treatments and the rules.",
    },
    {
      q: "Do I need to film content myself?",
      a: "Only a little. We send simple shot lists, and you can film on your phone between clients.",
    },
    {
      q: "Can you run ads ?",
      a: "We follow the advertising rules in your country, and we’ll show you what’s allowed and what works.",
    },
    {
      q: "How soon will I see results?",
      a: "Most see a better-looking, more active page in the first month. Bookings grow as trust builds.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202] selection:bg-[#520000] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenAudit={handleOpenAudit} />

      {/* 1. Hero: Full-width calm image with text on the left */}
      <section className="relative pt-40 sm:pt-48 pb-20 sm:pb-32 overflow-hidden border-b border-[#D7C3B1]/60">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/drive/skinsation/skinsation-1.png"
            alt="Wellness Clinic Background"
            fill
            priority
            className="object-cover object-center opacity-25 filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/90 to-[#FAF6F0]/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#520000]/25 text-[#520000] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
              <span>Axoyl For Clinics &amp; Wellness</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#140202] tracking-tight leading-[1.12] mb-6">
              Social media for wellness brands:{" "}
              <span className="text-[#520000] italic font-normal">clinics, studios &amp; skincare.</span>
            </h1>

            <p className="text-lg sm:text-xl font-serif text-[#3D261E] mb-8 leading-relaxed">
              Your brand is premium. Your Instagram should look premium.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleOpenAudit}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#520000] hover:bg-[#380000] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <span>Book a free audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPortfolioModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#D7C3B1] text-[#140202] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                <span>Request Private Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-[#520000]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who we work with: One row of 5 small icons or tiles */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-1">
              Specialized Industry Focus
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202]">
              Who we work with
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {WHO_WE_WORK_WITH.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] p-5 text-center flex flex-col items-center justify-center hover:border-[#520000] hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#D7C3B1]/60 flex items-center justify-center text-[#520000] mb-3 group-hover:bg-[#520000] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-serif font-bold text-[#140202] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#5A4842]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Sound familiar?: 3 short cards side by side */}
      <section className="py-20 sm:py-24 bg-[#FAF6F0] border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
              Common Bottlenecks
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
              Sound familiar?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((card, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#D7C3B1] p-8 flex flex-col justify-between hover:border-[#520000] hover:shadow-lg transition-all"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#520000] mb-3">
                    {card.subtext}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#140202] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5A4842] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D7C3B1]/40 flex items-center gap-2 text-xs text-[#520000] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Solved in your first 30 days</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What we do: 6 simple cards + Compliance-aware note */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
              What we do
            </h2>
            <p className="mt-3 text-sm text-[#5A4842]">
              Complete hands-off social media management crafted specifically for treatment rooms, med-spas, and aesthetic practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {CLINIC_SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] p-6 hover:border-[#520000] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#D7C3B1]/60 flex items-center justify-center text-[#520000] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#140202] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compliance-aware badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] text-xs font-semibold text-[#520000]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>We are Compliance-aware</span>
              <span className="text-[#5A4842]/60">·</span>
              <span className="text-[#5A4842]">Adherence to medical &amp; aesthetic advertising regulations</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How it works: 3 steps in a row, numbered */}
      <section className="py-20 sm:py-24 bg-[#FAF6F0] border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
              How it works
            </h2>
            <p className="mt-3 text-sm text-[#5A4842]">
              Simple, friction-free onboarding designed so doctors and clinic staff can stay focused on patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.num}
                className="rounded-3xl bg-white border border-[#D7C3B1] p-8 flex flex-col justify-between hover:border-[#520000] hover:shadow-lg transition-all relative"
              >
                <div>
                  <span className="text-4xl font-serif font-bold text-[#520000]/40 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#140202] mb-3">
                    {step.step}
                  </h3>
                  <p className="text-sm text-[#5A4842] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clinic work: Grid of visuals from Drive + private portfolio button */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
                Public Case Highlights
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
                Clinic work
              </h2>
              <p className="mt-2 text-sm text-[#5A4842] max-w-xl">
                Featured work from Skinsation Clinic and ER Organics. Add your email below to receive our confidential portfolio with patient booking data and revenue metrics.
              </p>
            </div>

            <button
              onClick={() => setIsPortfolioModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#520000] hover:bg-[#380000] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm shrink-0 self-start md:self-auto"
            >
              <span>Request our private portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CLINIC_VISUALS.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-[#FAF6F0] border border-[#D7C3B1] overflow-hidden hover:border-[#520000] hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] w-full bg-[#140202] overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover filter blur-md opacity-30 pointer-events-none"
                  />
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain relative z-10 p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-white/90 text-[#140202] text-[10px] font-bold uppercase tracking-wider border border-[#D7C3B1]">
                    {item.brand}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-base font-bold text-[#140202] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A4842]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Box Under Grid */}
          <div className="rounded-3xl bg-[#FAF6F0] border border-[#D7C3B1] p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-[#140202] mb-2">
              Want the full clinic case studies &amp; booking numbers?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4842] mb-6">
              Due to patient privacy and non-disclosure agreements, we share complete client reports, DM inquiries, and conversion numbers privately.
            </p>
            <button
              onClick={() => setIsPortfolioModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#520000] hover:bg-[#380000] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Request our private portfolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. What clients say: Testimonials same as home page */}
      <RowTestimonialsSection />

      {/* 8. Add map: Global map */}
      <WhereWeWorkMapSection />

      {/* 9. Quick questions: Accordion 4 questions, closed by default */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#D7C3B1]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
              Got Questions?
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#140202]">
              Quick questions
            </h2>
          </div>

          <div className="space-y-4">
            {CLINIC_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#140202] hover:text-[#520000] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#520000] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#5A4842] leading-relaxed border-t border-[#D7C3B1]/40 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final call to action: Dark section, centered text */}
      <section className="py-24 sm:py-32 bg-[#140202] text-[#FAF6F0] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240404] text-[#D7C3B1] border border-[#520000]/60 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D7C3B1]" />
            <span>Ready For A Premium Feed?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-6 leading-tight">
            Elevate your clinic’s presence. <br />
            <span className="text-[#D7C3B1] italic font-normal">Fill your appointment calendar.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#FAF6F0]/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Send us your handle. We’ll review your Instagram feed, highlight quick wins, and show you how to turn visitors into booked treatments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleOpenAudit}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#520000] hover:bg-[#720909] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <span>Book a free audit</span>
            </button>
            <a
              href="https://wa.me/923359441111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-[#D7C3B1]/40 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer: Same as homepage */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Audit Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialMode={modalMode}
        initialService="Clinics & Wellness SMM"
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
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!portfolioSubmitted ? (
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
                    Receive our verified case metrics, booking statistics, and treatment ROAS reports.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140202] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Sarah / Clinic Director"
                    value={portfolioForm.name}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, name: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140202] uppercase tracking-wider mb-1.5">
                    Business Niche
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aesthetic Clinic, Med Spa, Pilates Studio"
                    value={portfolioForm.niche}
                    onChange={(e) => setPortfolioForm({ ...portfolioForm, niche: e.target.value })}
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
                    placeholder="contact@yourclinic.com"
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
                  <span>Send Confidential Portfolio</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-[#140202] mb-2">
                  Portfolio Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed mb-6">
                  Thank you, {portfolioForm.name}. Our private clinic case studies and analytics breakdown will arrive in your inbox shortly.
                </p>
                <button
                  onClick={() => {
                    setIsPortfolioModalOpen(false);
                    setPortfolioSubmitted(false);
                    setPortfolioForm({ name: "", niche: "", email: "" });
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
