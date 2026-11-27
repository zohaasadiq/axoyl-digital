"use client";

import React from "react";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { EXACT_CONTACT } from "@/lib/data";

interface ContactSectionProps {
  onOpenAudit: () => void;
}

const CONTACT_METHODS = [
  {
    label: "Phone / WhatsApp",
    value: EXACT_CONTACT.phone,
    href: `https://wa.me/${EXACT_CONTACT.whatsappNumber}?text=Hi%20Axoyl%20Digital,%20I'd%20like%20to%20discuss%20services%20for%20my%20brand.`,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Direct Email",
    value: EXACT_CONTACT.email,
    href: `mailto:${EXACT_CONTACT.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Instagram",
    value: `@${EXACT_CONTACT.instagram}`,
    href: `https://instagram.com/${EXACT_CONTACT.instagram}`,
    icon: InstagramIcon,
    external: true,
  },
];

export default function ContactSection({ onOpenAudit }: ContactSectionProps) {
  return (
    <section id="contact" className="relative pt-40 sm:pt-48 pb-20 sm:pb-24 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] block mb-3">
          Get In Touch
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#140202] mb-10">
          Reach the team directly.
        </h2>

        <div className="rounded-3xl overflow-hidden border border-[#FAF6F0]/15 bg-[#520000] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#FAF6F0]/15 mb-10 shadow-[0_20px_50px_rgba(82,0,0,0.15)]">
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center gap-3 px-6 py-10 sm:py-12 hover:bg-black/[0.12] transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#FAF6F0] group-hover:bg-[#FAF6F0] group-hover:text-[#520000] transition-colors">
                <method.icon className="w-5 h-5" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#D7C3B1] group-hover:text-white transition-colors">
                {method.label}
              </span>
              <span className="font-display text-base sm:text-lg font-medium text-[#FAF6F0] break-all">
                {method.value}
              </span>
            </a>
          ))}
        </div>

        <button
          onClick={onOpenAudit}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#520000] border-2 border-[#520000] hover:bg-[#520000] hover:text-white transition-all"
        >
          <span>Book a 20-Minute Call</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <p className="text-xs text-[#5A4842] mt-6">
          Managing client brands across Pakistan, USA, and UAE.
        </p>
      </div>
    </section>
  );
}
