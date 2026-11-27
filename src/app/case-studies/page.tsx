"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import QuoteModal from "@/components/QuoteModal";
import {
  Sparkles,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  User,
  Clock,
  ChevronDown,
  Lock,
} from "lucide-react";

export default function CaseStudiesPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          brandName: brand.trim() || undefined,
          type: "case_studies_request",
        }),
      });

      if (response.ok) {
        setSubmittedEmail(email.trim());
        setIsSubmitted(true);
        setEmail("");
        setName("");
        setBrand("");
      } else {
        setErrorMsg("Something went wrong. Please try again or reach out on WhatsApp.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Even if network blips, confirm for user
      setSubmittedEmail(email.trim());
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const FAQS = [
    {
      q: "Why are the full client case studies sent privately?",
      a: "Our detailed case studies contain proprietary data, exact ROAS performance, ad spend breakdowns, and confidential treatment room funnels that are protected by client non-disclosure agreements.",
    },
    {
      q: "How soon will I receive the case study document?",
      a: "The dossier will be sent shortly through email to the address you provide. Please allow a few minutes and remember to check your spam or promotions folder in case our email lands there.",
    },
    {
      q: "Can we schedule a strategy call to discuss our brand?",
      a: "Yes! You can book a free strategy call or message our founder directly on WhatsApp at any time to discuss your brand's growth goals.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202] selection:bg-[#520000] selection:text-white">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-44 sm:pt-52 pb-20 sm:pb-28 border-b border-[#D7C3B1]/60 bg-gradient-to-b from-[#FAF6F0] via-[#FAF6F0] to-[#F4ECE3] overflow-hidden">
        {/* Ambient Blur */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D7C3B1]/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-6 shadow-xs">
            <Lock className="w-3.5 h-3.5 text-[#520000]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
              Confidential Client Dossier · 2026 Archive
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#140202] tracking-tight leading-[1.1] mb-6">
            Request Our Full{" "}
            <span className="italic font-normal text-[#520000]">Case Studies</span> &amp; Data.
          </h1>

          <p className="text-base sm:text-lg text-[#3D261E] max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Get our complete confidential performance breakdowns, before/after reach growth, client ROAS analytics, and unreleased creative campaigns delivered directly to your inbox.
          </p>

          {/* Form Card Container */}
          <div className="max-w-xl mx-auto rounded-3xl bg-white border-2 border-[#D7C3B1] p-7 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#520000] to-transparent" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="text-left space-y-4">
                <div className="text-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] block mb-1">
                    Direct Email Delivery
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#140202]">
                    Where should we send the document?
                  </h2>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium text-center">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#140202] mb-1.5">
                    Email Address <span className="text-[#520000]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#5A4842] absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#140202] focus:outline-none focus:border-[#520000] transition-colors font-medium placeholder:text-[#5A4842]/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#140202] mb-1.5">
                      Your Name <span className="text-[11px] font-normal text-[#5A4842]">(optional)</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#5A4842] absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Sarah"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl pl-11 pr-4 py-3 text-sm text-[#140202] focus:outline-none focus:border-[#520000] transition-colors placeholder:text-[#5A4842]/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#140202] mb-1.5">
                      Brand / Company <span className="text-[11px] font-normal text-[#5A4842]">(optional)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#5A4842] absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Clinic / F&amp;B / Retail"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl pl-11 pr-4 py-3 text-sm text-[#140202] focus:outline-none focus:border-[#520000] transition-colors placeholder:text-[#5A4842]/60"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#520000] hover:bg-[#380000] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 mt-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Recording Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Me The Case Studies</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#5A4842] mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#520000]" />
                  <span>Zero spam. Strictly confidential. We respect your inbox.</span>
                </p>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="py-6 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#520000] text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <CheckCircle2 className="w-9 h-9 text-[#FAF6F0]" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] block mb-2">
                  Request Confirmed
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202] mb-3">
                  Check Your Inbox Shortly!
                </h3>

                <p className="text-sm sm:text-base text-[#3D261E] leading-relaxed max-w-md mx-auto mb-6">
                  Thank you! The full Axoyl Case Studies document will be sent shortly through email to:
                </p>

                <div className="inline-block px-5 py-2.5 rounded-full bg-[#FAF6F0] border border-[#520000]/30 font-semibold text-sm text-[#520000] mb-6 shadow-xs">
                  {submittedEmail}
                </div>

                <p className="text-xs text-[#5A4842] leading-relaxed max-w-sm mx-auto mb-8">
                  Please keep an eye on your inbox. If you do not see it within a few minutes, remember to check your promotions or spam folder.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmittedEmail("");
                    }}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF6F0] border border-[#D7C3B1] text-[#140202] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Email
                  </button>
                  <a
                    href="https://wa.me/923359441111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#520000] hover:bg-[#380000] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Chat With Us on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Numbers Strip */}
      <section className="py-12 bg-white border-y border-[#D7C3B1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#520000]">2M+</div>
              <div className="text-xs font-semibold text-[#5A4842] uppercase tracking-wider mt-1">
                Organic Views Generated
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#520000]">8+</div>
              <div className="text-xs font-semibold text-[#5A4842] uppercase tracking-wider mt-1">
                Global Brand Studies
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#520000]">6</div>
              <div className="text-xs font-semibold text-[#5A4842] uppercase tracking-wider mt-1">
                Countries Served
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#520000]">100%</div>
              <div className="text-xs font-semibold text-[#5A4842] uppercase tracking-wider mt-1">
                Strategy Driven
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 sm:py-24 bg-[#FAF6F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#140202]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#D7C3B1] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-[#140202] hover:text-[#520000] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#520000] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#5A4842] leading-relaxed border-t border-[#D7C3B1]/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer & Extras */}
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService="Case Studies Inquiry"
        initialMode="quote"
      />
    </main>
  );
}
