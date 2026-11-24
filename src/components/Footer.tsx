"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { EXACT_CONTACT } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter_subscription",
          email,
        }),
      }).catch((err) => console.error("Newsletter error:", err));
    }
  };

  return (
    <footer className="bg-[#120202] text-[#FAF6F0] pt-20 pb-12 border-t border-[#D7C3B1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Big Callout (Roy's Digital Media Inspired Header) */}
        <div className="pb-16 border-b border-[#FAF6F0]/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7C3B1] block mb-3">
              Let&apos;s Build Together
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Ready to make your brand <br />
              <span className="text-[#D7C3B1] italic font-normal">unmissable on social?</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:hello@axoyldigital.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#520000] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#720909] hover:shadow-[0_4px_20px_rgba(82,0,0,0.4)] transition-all shadow-md group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${EXACT_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-[#D7C3B1]/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              <span>WhatsApp Directly</span>
              <ArrowUpRight className="w-4 h-4 text-[#D7C3B1]" />
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-16 border-b border-[#FAF6F0]/10">
          {/* Col 1: Brand & Direct Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-11 w-44">
                <Image
                  src="/brand/logo-tight-beige.png"
                  alt="Axoyl Digital"
                  width={180}
                  height={44}
                  className="object-contain object-left max-h-11 w-auto"
                />
              </div>
            </Link>

            <p className="text-sm text-[#FAF6F0]/80 font-normal leading-relaxed max-w-sm">
              Axoyl Digital is a full-service creative &amp; social media agency. We turn attention into long-term customer relationships.
            </p>

            <div className="space-y-2.5 text-xs text-[#FAF6F0]/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D7C3B1]" />
                <a href={`tel:${EXACT_CONTACT.phone}`} className="hover:text-white transition-colors font-medium">
                  {EXACT_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D7C3B1]" />
                <a href={`mailto:${EXACT_CONTACT.email}`} className="hover:text-white transition-colors font-medium">
                  {EXACT_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D7C3B1]" />
                <span className="text-[#FAF6F0]/60">{EXACT_CONTACT.address}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF6F0]/80">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Branding &amp; Designing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Paid Ads
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  PR &amp; Influencer Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Personal Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Specialized Tracks */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1] mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF6F0]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="text-[#D7C3B1] font-semibold hover:text-white transition-colors flex items-center gap-1.5">
                  <span>For Clinics</span>
                  <span className="text-[9px] bg-[#520000] px-1.5 py-0.5 rounded-full uppercase tracking-wider">New</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Work Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-[#FAF6F0] hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Case Studies</span>
                  <span className="text-[9px] bg-[#520000] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">Dossier</span>
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Axoyl
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box (Roys Digital Media & Document requirement) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1]">
              Join Our Newsletter
            </h4>
            <p className="text-xs text-[#FAF6F0]/70 leading-relaxed">
              Join our newsletter to get yourself updated with social algorithms, viral trends, and creative strategy.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1F0404] border border-[#D7C3B1]/30 rounded-full px-4 py-2.5 text-xs text-[#FAF6F0] placeholder-[#FAF6F0]/40 focus:outline-none focus:border-[#D7C3B1] pr-24"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 px-3.5 py-1.5 rounded-full bg-[#520000] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#720909] transition-all flex items-center gap-1"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[10px] text-[#FAF6F0]/50 pl-2">
                  Zero spam. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F0404] border border-emerald-500/40 text-emerald-400 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>You&apos;re in! Thank you.</span>
              </div>
            )}

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://instagram.com/${EXACT_CONTACT.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#D7C3B1]/20 flex items-center justify-center text-[#D7C3B1] hover:text-white hover:bg-[#520000] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://linkedin.com/company/${EXACT_CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#D7C3B1]/20 flex items-center justify-center text-[#D7C3B1] hover:text-white hover:bg-[#520000] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/60">
          <div>
            © 2026 Axoyl Digital. Registered Company. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-cookie-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy-cookie-policy#cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Worldwide Packages
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
