"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2, MessageCircle, Mail, Loader2, ArrowRight } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialMode?: "quote" | "audit";
}

const ALL_SERVICES = [
  "Social media management",
  "Content & reels",
  "Paid ads",
  "Branding",
  "Personal branding",
  "PR",
  "Email marketing",
];

const BUDGET_RANGES = [
  "Under $1,000 / mo",
  "$1,000 - $2,500 / mo",
  "$2,500 - $5,000 / mo",
  "$5,000+ / mo",
  "Quoted in PKR (Pakistan local)",
];

export default function QuoteModal({
  isOpen,
  onClose,
  initialService = "Social media management",
  initialMode = "quote",
}: QuoteModalProps) {
  const [mode, setMode] = useState<"quote" | "audit">(initialMode);
  const [selectedServices, setSelectedServices] = useState<string[]>([initialService]);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [handle, setHandle] = useState("");
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState(BUDGET_RANGES[1]);
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  useEffect(() => {
    if (initialService) {
      setSelectedServices((prev) =>
        prev.includes(initialService) ? prev : [...prev, initialService]
      );
    }
    if (initialMode) {
      setMode(initialMode);
    }
  }, [initialService, initialMode, isOpen]);

  if (!isOpen) return null;

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc)
        ? prev.filter((s) => s !== svc)
        : [...prev, svc]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: mode === "audit" ? "free_audit" : "quote_request",
          name,
          email,
          brand,
          handle,
          country,
          services: selectedServices,
          budget,
          message,
        }),
      });

      const data = await res.json();
      if (data.success && data.lead) {
        setSubmissionId(data.lead.id);
      }
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Esha & Axoyl team,\n\nI just requested a ${
        mode === "audit" ? "Free Social Media Audit" : "Quote"
      } for my brand:\n\n• Name: ${name || "N/A"}\n• Brand: ${brand || "N/A"}\n• Handle/URL: ${handle || "N/A"}\n• Country: ${country || "N/A"}\n• Services: ${selectedServices.join(", ") || "General Inquiry"}\n• Budget: ${budget}\n• Message: ${message || "N/A"}\n\nLooking forward to hearing from you within 24 hours!`
    );
    window.open(`https://wa.me/${EXACT_CONTACT.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-lg w-full rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh] text-[#140202]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF6F0] text-[#140202] hover:bg-[#520000] hover:text-white border border-[#D7C3B1] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Mode Switcher */}
            <div className="inline-flex p-1 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] mb-5">
              <button
                type="button"
                onClick={() => setMode("quote")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  mode === "quote"
                    ? "bg-[#520000] text-white shadow-sm"
                    : "text-[#5A4842] hover:text-[#140202]"
                }`}
              >
                Get a Quote
              </button>
              <button
                type="button"
                onClick={() => setMode("audit")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  mode === "audit"
                    ? "bg-[#520000] text-white shadow-sm"
                    : "text-[#5A4842] hover:text-[#140202]"
                }`}
              >
                Free Audit (48h)
              </button>
            </div>

            <div className="mb-5 pr-6">
              <h3 className="text-2xl font-serif font-bold text-[#140202]">
                {mode === "audit" ? "Free Social Media Audit" : "Tell Us About Your Brand"}
              </h3>
              <p className="text-xs text-[#5A4842] mt-1 leading-relaxed">
                {mode === "audit"
                  ? "Send us your handle. Within 48 hours you'll get a short review of what's working, what isn't, and what we'd fix first. No contracts. No sales pitch."
                  : "Every plan is custom quoted to your exact scope. We reply within 24 hours."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection Chips */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1.5">
                  Select Services Needed:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_SERVICES.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-all ${
                          isSelected
                            ? "bg-[#520000] text-white border-[#520000] font-semibold"
                            : "bg-[#FAF6F0] text-[#3D261E] border-[#D7C3B1] hover:border-[#520000]"
                        }`}
                      >
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3.5 py-2.5 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@brand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3.5 py-2.5 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>
              </div>

              {/* Brand & Handle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Skinsation"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3.5 py-2.5 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                    Instagram Handle or Website *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@yourbrand or brand.com"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3.5 py-2.5 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>
              </div>

              {/* Country & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UK, UAE, USA, Pakistan..."
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3.5 py-2.5 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                    Monthly Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3.5 py-2.5 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                  Message / Current Bottleneck
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to achieve or where you feel stuck..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3.5 py-2.5 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>
                        {mode === "audit" ? "Get My Free Audit" : "Send Quote Request"}
                      </span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#5A4842] pt-1">
                <span>Submissions routed to hello@axoyldigital.com</span>
                <span className="font-semibold text-[#520000]">Reply within 24h</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-[#140202]">
                {mode === "audit" ? "Audit Request Received!" : "Quote Request Received!"}
              </h3>
              <p className="text-xs text-[#5A4842] mt-1 max-w-sm mx-auto leading-relaxed">
                Thank you! Esha and our team will review {brand ? `"${brand}"` : "your brand"} and reply within 24 hours.
              </p>
              {submissionId && (
                <p className="text-[11px] text-[#520000] font-bold uppercase tracking-wider mt-2">
                  Reference: {submissionId}
                </p>
              )}
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF6F0] text-[#140202] border border-[#D7C3B1] hover:bg-white transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
