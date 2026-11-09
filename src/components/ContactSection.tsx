"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { EXACT_CONTACT } from "@/lib/data";

interface ContactSectionProps {
  onOpenAudit: () => void;
}

export default function ContactSection({ onOpenAudit }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("SOCIAL MEDIA MANAGEMENT (SMM)");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "general_inquiry",
          brandName: name,
          contact: email,
          objective: service,
          message,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setSent(true);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Portfolio Page 23 Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
                Portfolio Page 23 · Contact
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-medium text-[#140202] uppercase tracking-tight leading-[1.04] mb-4">
              FEEL FREE TO REACH OUT{" "}
              <span className="italic font-serif font-normal text-[#520000]">
                IF YOU HAVE ANY QUERIES
              </span>
              .
            </h2>

            <p className="text-xs font-bold uppercase tracking-widest text-[#520000] mb-8">
              {EXACT_CONTACT.company} · {EXACT_CONTACT.agencySubtitle}
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-4 mb-8">
              <a
                href={`https://wa.me/923492976505?text=Hi%20Axoyl%20Digital,%20I'd%20like%20to%20discuss%20services%20for%20my%20brand.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D7C3B1] hover:border-[#520000] transition-all group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-500/30 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#5A4842] block font-bold">
                    Phone / WhatsApp
                  </span>
                  <span className="text-base font-bold text-[#140202]">
                    {EXACT_CONTACT.phone}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#520000] ml-auto group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${EXACT_CONTACT.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D7C3B1] hover:border-[#520000] transition-all group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#520000]/20 flex items-center justify-center text-[#520000] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#5A4842] block font-bold">
                    Direct Email
                  </span>
                  <span className="text-base font-bold text-[#140202]">
                    {EXACT_CONTACT.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#520000] ml-auto group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`https://instagram.com/${EXACT_CONTACT.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D7C3B1] hover:border-[#520000] transition-all group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#520000]/20 flex items-center justify-center text-[#520000] group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#5A4842] block font-bold">
                    Instagram Direct
                  </span>
                  <span className="text-base font-bold text-[#140202]">
                    @{EXACT_CONTACT.instagram}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#520000] ml-auto group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4ECE3] border border-[#D7C3B1] text-xs text-[#3D261E]">
              <span className="font-bold text-[#520000] block mb-0.5">Global Client Reach:</span>
              Managing client brands across Pakistan, USA, and UAE with seamless communication and dedicated weekly sprints.
            </div>
          </div>

          {/* Right Column: Direct Proposal Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#D7C3B1] p-8 sm:p-10 shadow-xl">
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#D7C3B1]/60 pb-4 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202]">
                      TO REACH OUT
                    </h3>
                    <p className="text-xs text-[#5A4842] font-normal mt-1">
                      Send your inquiry directly to Esha and the Axoyl Digital creative team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#140202] block mb-1.5">
                        Your Name / Brand:
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Hestia Harlow / Sarah"
                        className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs text-[#140202] placeholder-[#5A4842]/50 focus:outline-none focus:border-[#520000]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#140202] block mb-1.5">
                        Email Address:
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. founder@brand.com"
                        className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs text-[#140202] placeholder-[#5A4842]/50 focus:outline-none focus:border-[#520000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#140202] block mb-1.5">
                      Service Requirement (from Page 03 &ldquo;WE DEAL IN&rdquo;):
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs text-[#140202] focus:outline-none focus:border-[#520000]"
                    >
                      <option value="SOCIAL MEDIA MANAGEMENT (SMM)">SOCIAL MEDIA MANAGEMENT (SMM) [Primary]</option>
                      <option value="CONTENT CREATION">CONTENT CREATION</option>
                      <option value="SOCIAL MEDIA CAMPAIGNS">SOCIAL MEDIA CAMPAIGNS</option>
                      <option value="AUDIENCE ENGAGEMENT">AUDIENCE ENGAGEMENT</option>
                      <option value="INFLUENCER MARKETING">INFLUENCER MARKETING</option>
                      <option value="ANALYTICS AND REPORTING">ANALYTICS AND REPORTING</option>
                      <option value="CORPORATE BRANDING">CORPORATE BRANDING</option>
                      <option value="PERSONAL BRANDING">PERSONAL BRANDING</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#140202] block mb-1.5">
                      Your Query or Message:
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your brand vision, target accounts, or campaign timeline..."
                      className="w-full bg-[#FAF6F0] border border-[#D7C3B1] rounded-xl px-4 py-3 text-xs text-[#140202] placeholder-[#5A4842]/50 focus:outline-none focus:border-[#520000]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#520000] to-[#720909] hover:bg-[#380000] hover:shadow-[0_8px_24px_rgba(82,0,0,0.25)] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Axoyl Digital</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#520000] flex items-center justify-center mx-auto text-white shadow-md">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#140202]">
                    Message Received!
                  </h3>
                  <p className="text-xs text-[#5A4842] max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#140202]">{name}</strong>. Esha and the creative team will review your query and reply to <strong className="text-[#140202]">{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-bold text-[#520000] hover:underline pt-4 block mx-auto"
                  >
                    Send another query
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
