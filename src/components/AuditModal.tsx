"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle2, MessageCircle, Mail, Database, Loader2, Clock } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [goal, setGoal] = useState("Full SMM Management");
  const [industry, setIndustry] = useState("Skincare, Beauty & Organic Brands");
  const [brandName, setBrandName] = useState("");
  const [handle, setHandle] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  // Rate-limiting / Cooldown states (48h for Audits)
  const [alreadyPlaced, setAlreadyPlaced] = useState(false);
  const [cooldownRemainingHours, setCooldownRemainingHours] = useState<number | null>(null);
  const [existingBrand, setExistingBrand] = useState("");
  const [existingRefId, setExistingRefId] = useState("");

  const checkCooldown = () => {
    try {
      const saved = localStorage.getItem("axoyl_active_audit");
      if (saved) {
        const parsed = JSON.parse(saved);
        const cooldownHours = 48;
        const cooldownMs = cooldownHours * 60 * 60 * 1000;
        const elapsed = Date.now() - Number(parsed.timestamp);
        if (elapsed < cooldownMs) {
          const remaining = Math.max(1, Math.ceil((cooldownMs - elapsed) / (1000 * 60 * 60)));
          setAlreadyPlaced(true);
          setCooldownRemainingHours(remaining);
          setExistingBrand(parsed.brand || "");
          setExistingRefId(parsed.id || "");
          return true;
        } else {
          localStorage.removeItem("axoyl_active_audit");
        }
      }
    } catch {
      // ignore
    }
    setAlreadyPlaced(false);
    return false;
  };

  useEffect(() => {
    if (isOpen) {
      checkCooldown();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "social_media_audit",
          brandName,
          handle,
          contact,
          objective: goal,
          industry,
        }),
      });

      const data = await res.json();

      if (data.alreadySubmitted) {
        setAlreadyPlaced(true);
        setCooldownRemainingHours(data.remainingHours || 48);
        setExistingBrand(data.lead?.brandName || brandName || "");
        setExistingRefId(data.lead?.id || "");
        try {
          localStorage.setItem(
            "axoyl_active_audit",
            JSON.stringify({
              timestamp: new Date(data.lead?.timestamp || Date.now()).getTime(),
              id: data.lead?.id,
              brand: data.lead?.brandName || brandName,
              email: contact.trim().toLowerCase(),
            })
          );
        } catch {}
        return;
      }

      if (data.success && data.lead) {
        setSubmissionId(data.lead.id);
        setSubmitted(true);
        try {
          localStorage.setItem(
            "axoyl_active_audit",
            JSON.stringify({
              timestamp: Date.now(),
              id: data.lead.id,
              brand: brandName.trim(),
              email: contact.trim().toLowerCase(),
            })
          );
        } catch {}
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Esha & Axoyl Digital Team,\n\nI just submitted a 1:1 Social Media Audit request for my brand:\n\n• Brand: ${brandName || "My Brand"}\n• Handle: ${handle || "N/A"}\n• Industry: ${industry}\n• Primary Objective: ${goal}\n• Contact Info: ${contact || "N/A"}\n\nPlease inspect our feed and let me know your thoughts!`
    );
    window.open(`https://wa.me/923492976505?text=${text}`, "_blank");
  };

  const handleEmailRedirect = () => {
    const subject = encodeURIComponent(`1:1 Social Media Audit: ${brandName || "New Inquiry"}`);
    const body = encodeURIComponent(
      `Hi Esha,\n\nI requested a social media audit for ${brandName}.\n\nHandle: ${handle}\nIndustry: ${industry}\nGoal: ${goal}\nContact: ${contact}\n\nLooking forward to your audit!`
    );
    window.open(`mailto:${EXACT_CONTACT.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-lg w-full rounded-3xl bg-white border border-[#D7C3B1] p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[94vh] text-[#140202] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF6F0] text-[#140202] hover:bg-[#520000] hover:text-white border border-[#D7C3B1] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {alreadyPlaced ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-50 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-600 shadow-sm">
              <Clock className="w-7 h-7" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-amber-700" />
                <span>Audit In Progress</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#140202]">
                You have already placed a request.
              </h3>
              <p className="text-xs text-[#5A4842] mt-2 max-w-sm mx-auto leading-relaxed">
                We already received your Free Social Media Audit request {existingBrand ? `for "${existingBrand}"` : ""} and our team is actively auditing your feed.
              </p>
              {existingRefId && (
                <p className="text-[11px] text-[#520000] font-bold uppercase tracking-wider mt-2">
                  Reference: {existingRefId}
                </p>
              )}
            </div>

            {/* SLA Notice Box */}
            <div className="max-w-sm mx-auto p-4 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] text-xs text-[#3D261E] space-y-1.5 text-left">
              <div className="flex items-center justify-between font-semibold">
                <span>Free Audit Turnaround:</span>
                <span className="text-[#520000] font-bold">48 Hours</span>
              </div>
              <p className="text-[11px] text-[#5A4842] leading-relaxed">
                To guarantee individual attention for every client, you can submit another audit request once the 48-hour review period is completed
                {cooldownRemainingHours ? ` (~${cooldownRemainingHours}h remaining).` : "."}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Check Status on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#140202] border border-[#D7C3B1] hover:bg-[#FAF6F0] transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : !submitted ? (
          <div>
            <div className="mb-4 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF6F0] border border-[#520000]/25 text-[10px] uppercase font-bold tracking-widest text-[#520000] mb-1.5 shadow-sm">
                <Sparkles className="w-3 h-3" />
                Complimentary 1:1 Review
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#140202]">
                Book Your Custom Social Media Audit
              </h3>
              <p className="text-[11px] sm:text-xs text-[#5A4842] font-normal mt-0.5 leading-relaxed">
                Esha (Founder &amp; Creative Head) and our team will inspect your hook retention, feed aesthetic, and non-follower reach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Primary Objective */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                  PRIMARY OBJECTIVE:
                </label>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {[
                    "Full SMM Management",
                    "Viral Reels Production",
                    "Influencer Roster Campaign",
                    "Brand Aesthetic Refresh",
                  ].map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setGoal(g)}
                      className={`p-2 sm:p-2.5 rounded-xl text-left border transition-all text-[11px] sm:text-xs ${
                        goal === g
                          ? "bg-[#520000] border-[#520000] text-white font-bold shadow-sm"
                          : "bg-[#FAF6F0] border-[#D7C3B1] text-[#3D261E] hover:border-[#520000]"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry Selection */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-1">
                  YOUR INDUSTRY:
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3 py-2 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                >
                  <option value="Skincare, Beauty & Organic Brands">Skincare, Beauty &amp; Organic Brands</option>
                  <option value="Events & Luxury Catering">Events &amp; Luxury Catering</option>
                  <option value="Aesthetic & Medical Clinics">Aesthetic &amp; Medical Clinics</option>
                  <option value="Restaurants & Culinary Concepts">Restaurants &amp; Culinary Concepts</option>
                  <option value="IT & Software Businesses">IT &amp; Software Businesses</option>
                  <option value="High-Ticket Services & Consultancy">High-Ticket Services &amp; Consultancy</option>
                </select>
              </div>

              {/* Brand Name & Handle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-0.5">
                    BRAND NAME:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hestia Harlow"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3 py-2 text-xs text-[#140202] placeholder-[#5A4842]/50 focus:outline-none focus:border-[#520000]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-0.5">
                    INSTAGRAM HANDLE / URL:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@yourbrand"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3 py-2 text-xs text-[#140202] placeholder-[#5A4842]/50 focus:outline-none focus:border-[#520000]"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#140202] block mb-0.5">
                  EMAIL OR WHATSAPP NUMBER:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. founder@brand.com or +1 / +971 / +92"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-3 py-2 text-xs text-[#140202] placeholder-[#5A4842]/50 focus:outline-none focus:border-[#520000]"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Logging Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>SUBMIT AUDIT REQUEST</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#5A4842] pt-1">
                <span>Or speak directly:</span>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="text-[#520000] hover:underline font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp Direct (+92 349 2976505)
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#140202]">
                Audit Request Submitted!
              </h3>
              <p className="text-[10px] text-[#520000] font-bold uppercase tracking-wider mt-0.5">
                Ref ID: {submissionId || `AXL-${Date.now().toString().slice(-6)}`}
              </p>
            </div>

            {/* Where the request goes */}
            <div className="text-left rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] p-3 text-xs space-y-1.5">
              <span className="font-bold text-[#140202] uppercase tracking-wider text-[10px] block">
                Where your request has been routed:
              </span>
              <div className="flex items-start gap-2 text-[#3D261E] text-[11px]">
                <Database className="w-3.5 h-3.5 text-[#520000] shrink-0 mt-0.5" />
                <span>Saved to Agency Database (<code className="bg-white px-1 py-0.2 rounded border border-[#D7C3B1]">data/leads.json</code>)</span>
              </div>
              <div className="flex items-start gap-2 text-[#3D261E] text-[11px]">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Routed to <strong>Esha (Founder &amp; Creative Head)</strong> on WhatsApp (+92 349 2976505)</span>
              </div>
              <div className="flex items-start gap-2 text-[#3D261E] text-[11px]">
                <Mail className="w-3.5 h-3.5 text-[#520000] shrink-0 mt-0.5" />
                <span>Email dispatched to <strong>{EXACT_CONTACT.email}</strong></span>
              </div>
            </div>

            <p className="text-[11px] text-[#5A4842] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#140202]">{brandName}</strong>. Esha and our team will inspect your feed (<strong className="text-[#140202]">{handle}</strong>) and reply to <strong className="text-[#140202]">{contact}</strong> within 24 hours.
            </p>

            <div className="pt-1 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Open Instant Chat with Esha on WhatsApp</span>
              </button>

              <button
                onClick={handleEmailRedirect}
                className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#520000] bg-white border border-[#D7C3B1] hover:bg-[#FAF6F0] transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Email Directly</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs font-semibold text-[#5A4842] hover:text-[#140202] py-1"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}