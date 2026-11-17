"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import QuoteModal from "@/components/QuoteModal";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    id: "starter",
    name: "Social Starter",
    badge: null,
    for: "Brands getting serious about social media",
    features: [
      "3–4 posts a week incl. reels",
      "Captions & scheduling",
      "Community management",
      "Monthly report",
    ],
    buttonText: "Get a quote",
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most popular",
    for: "Brands ready to run organic and paid together",
    features: [
      "Everything in Starter",
      "Meta Ads management",
      "Influencer outreach",
      "Monthly strategy call",
    ],
    buttonText: "Get a quote",
  },
  {
    id: "full-marketing",
    name: "Full Marketing",
    badge: null,
    for: "Brands that want an agency instead of an in-house team",
    features: [
      "Everything in Growth",
      "Content shoots",
      "PR & press outreach",
      "Email marketing",
      "Branding and website support",
    ],
    buttonText: "Get a quote",
  },
];

export default function PlansPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Social Starter");

  const handleOpenQuote = (planName?: string) => {
    setSelectedPlan(planName || "Social Starter");
    setIsQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202]">
      <Navbar onOpenQuote={handleOpenQuote} />

      <section className="pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#520000] block mb-2">
              PLANS
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight mb-4">
              Plans built around what you need
            </h1>
            <p className="text-base sm:text-lg text-[#5A4842]">
              Three plans, no lock-in contracts. Every plan is quoted to your scope.
            </p>
          </div>

          {/* Cards Grid (No prices as specified) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all ${
                  plan.badge
                    ? "bg-white border-2 border-[#520000] shadow-xl"
                    : "bg-white/80 border border-[#D7C3B1] shadow-sm hover:border-[#520000]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#520000] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#140202] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#520000] font-semibold mb-6">
                    {plan.for}
                  </p>

                  <div className="space-y-3.5 pt-4 border-t border-[#D7C3B1]/40 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#140202]">
                      Includes:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3D261E]">
                        <div className="w-4 h-4 rounded-full bg-[#FAF6F0] border border-[#520000]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#520000]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenQuote(plan.name)}
                  className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.badge
                      ? "bg-[#520000] text-white hover:bg-[#380000] shadow-md"
                      : "bg-[#FAF6F0] text-[#140202] border border-[#D7C3B1] hover:bg-[#520000] hover:text-white hover:border-[#520000]"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Under the cards: Not sure which plan fits? */}
          <div className="text-center rounded-2xl bg-white border border-[#D7C3B1] p-6 max-w-3xl mx-auto text-xs sm:text-sm text-[#3D261E]">
            <p className="font-medium">
              Not sure which plan fits?{" "}
              <button
                onClick={() => handleOpenQuote("Talk to Esha")}
                className="text-[#520000] font-bold underline hover:text-[#380000] mx-1"
              >
                Talk to Esha
              </button>{" "}
              · Also available: <strong>Personal Branding for founders</strong>, and one-off projects (branding, launches, websites).
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={selectedPlan}
      />
    </main>
  );
}
