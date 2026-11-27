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
  ChevronDown,
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
  Play,
} from "lucide-react";

export default function ClinicsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"quote" | "audit">("quote");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeVisual, setActiveVisual] = useState(0);

  // Private portfolio form modal state
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [portfolioForm, setPortfolioForm] = useState({ name: "", niche: "", email: "" });
  const [portfolioSubmitted, setPortfolioSubmitted] = useState(false);

  const handleOpenQuote = () => {
    setModalMode("quote");
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

  // Section 4: What we do — flagship + grid, same pattern as the Pakistan homepage
  const CLINIC_FLAGSHIP = { title: "Social Media Management", icon: Share2 };
  const CLINIC_SERVICES = [
    { title: "Branding & Designing", icon: Palette },
    { title: "Video Editing", icon: Film },
    { title: "Paid Ads", icon: Target },
    { title: "PR & Influencer Marketing", icon: Users },
    { title: "Personal Branding", icon: UserCheck },
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
  const CLINIC_VISUALS: {
    type: "image" | "video";
    src: string;
    title: string;
    subtitle: string;
    brand: string;
  }[] = [
    {
      type: "video",
      src: "/images/drive/skinsation/skinsation-video.mp4",
      title: "Clinical Treatment & Skincare Showcase",
      subtitle: "Reel: Master Esthetician Grip",
      brand: "Skinsation Clinic",
    },
    {
      type: "image",
      src: "/images/drive/skinsation/skinsation-1.png",
      title: "Skinsation Aesthetic Clinic",
      subtitle: "Giveaway & Consultation Booking Creative",
      brand: "Skinsation Clinic",
    },
    {
      type: "image",
      src: "/images/drive/skinsation/skinsation-4.png",
      title: "It's Not Your Skincare Campaign",
      subtitle: "Dermatological Treatment Education",
      brand: "Skinsation Clinic",
    },
    {
      type: "image",
      src: "/images/drive/skinsation/skinsation-7.png",
      title: "Clinic Experience Invitation",
      subtitle: "High-End Treatment Room Booking",
      brand: "Skinsation Clinic",
    },
    {
      type: "image",
      src: "/images/drive/er-organics/er-1.jpeg",
      title: "ER Organics Clean Skincare",
      subtitle: "Influencer Partnership with Aena Khan",
      brand: "ER Organics",
    },
    {
      type: "image",
      src: "/images/drive/er-organics/er-3.jpeg",
      title: "Clinical Texture & Routine Content",
      subtitle: "Serum & Active Ingredients Showcase",
      brand: "ER Organics",
    },
    {
      type: "image",
      src: "/images/drive/skinsation/skinsation-2.png",
      title: "Skinsation VIP Client Campaign",
      subtitle: "HydraFacial & Peel Visual Carousel",
      brand: "Skinsation Clinic",
    },
  ];

  // Section 9: Quick questions (Accordion 4 questions, closed by default)
  const CLINIC_FAQS = [
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
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* 1. Hero: Minimal, centered — matches the Pakistan homepage hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#FAF6F0] text-[#140202] border-b border-[#D7C3B1]/60">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#530000 1px, transparent 1px), linear-gradient(90deg, #530000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in mb-10">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-[#140202] mb-5">
              Social media for wellness brands:{" "}
              <span className="text-[#520000] italic">clinics, studios &amp; skincare.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#3D261E]">
              Your brand is premium. Your Instagram should look premium.
            </p>
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

      {/* 4. What we do: flagship + grid, same pattern as the Pakistan homepage */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight mb-12 sm:mb-16">
            What we do.
          </h2>

          {/* Flagship service */}
          <div className="w-full flex items-center gap-5 sm:gap-7 rounded-2xl bg-[#520000] px-6 sm:px-10 py-7 sm:py-9 shadow-sm mb-4 sm:mb-6">
            <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 shrink-0">
              <CLINIC_FLAGSHIP.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#D7C3B1]" />
            </span>
            <span className="font-serif text-2xl sm:text-4xl font-bold text-white">
              {CLINIC_FLAGSHIP.title}
            </span>
          </div>

          {/* Remaining services */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {CLINIC_SERVICES.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl bg-white border border-[#D7C3B1] hover:border-[#520000] p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] group-hover:bg-[#520000] group-hover:border-[#520000] transition-colors mb-3">
                  <service.icon className="w-4 h-4 text-[#520000] group-hover:text-white transition-colors" />
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#140202] leading-snug block">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How it works: 3 steps in a row, numbered */}
      <section className="py-20 sm:py-24 bg-[#FAF6F0] border-b border-[#D7C3B1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
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
          {/* Media Gallery: thumbnail list + main viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4 sm:gap-6 mb-12">
            {/* Thumbnail list */}
            <div className="order-2 lg:order-1 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:h-[560px] lg:overflow-y-auto rounded-3xl border border-[#D7C3B1] bg-[#FAF6F0] p-3 shadow-sm">
              {CLINIC_VISUALS.map((item, idx) => {
                const isActive = idx === activeVisual;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveVisual(idx)}
                    className={`group relative shrink-0 w-24 h-24 lg:w-full lg:h-auto lg:aspect-square rounded-xl overflow-hidden border-2 bg-[#140202] transition-all ${
                      isActive ? "border-[#520000]" : "border-transparent hover:border-[#D7C3B1]"
                    }`}
                  >
                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </>
                    ) : (
                      <Image src={item.src} alt={item.title} fill sizes="192px" className="object-cover" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Main viewer */}
            <div className="order-1 lg:order-2 relative lg:h-[560px] rounded-3xl bg-[#140202] border border-[#D7C3B1] overflow-hidden">
              <div className="relative aspect-[4/5] sm:aspect-video lg:h-full lg:aspect-auto w-full h-full bg-[#140202] flex items-center justify-center overflow-hidden">
                {CLINIC_VISUALS[activeVisual].type === "video" ? (
                  <video
                    key={CLINIC_VISUALS[activeVisual].src}
                    src={CLINIC_VISUALS[activeVisual].src}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <>
                    <Image
                      src={CLINIC_VISUALS[activeVisual].src}
                      alt=""
                      fill
                      aria-hidden="true"
                      className="object-cover filter blur-md opacity-30 pointer-events-none"
                    />
                    <Image
                      src={CLINIC_VISUALS[activeVisual].src}
                      alt={CLINIC_VISUALS[activeVisual].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain relative z-10 p-4"
                    />
                  </>
                )}
              </div>
            </div>
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
