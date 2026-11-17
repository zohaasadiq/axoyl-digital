"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { EXACT_CONTACT } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // In production, save to leads / newsletter
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
    <footer className="bg-[#140202] text-[#FAF6F0] pt-16 sm:pt-20 pb-12 border-t border-[#D7C3B1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#FAF6F0]/10">
          {/* Left Column: Logo + Newsletter (Komodo Reference) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-5">
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
              Join our newsletter for social media tips and platform updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#200505] border border-[#D7C3B1]/30 rounded-full px-5 py-3 text-xs text-[#FAF6F0] placeholder-[#FAF6F0]/40 focus:outline-none focus:border-[#D7C3B1] pr-28"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-4 py-2 rounded-full bg-[#520000] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#720909] transition-all flex items-center gap-1"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[11px] text-[#FAF6F0]/50 pl-2">
                  By subscribing you agree to our{" "}
                  <Link href="/privacy-cookie-policy" className="underline hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#200505] border border-emerald-500/40 text-emerald-400 text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're subscribed! Check your inbox soon.</span>
              </div>
            )}
          </div>

          {/* Middle Column: Pages */}
          <div className="md:col-span-3 lg:col-span-4 lg:pl-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1] mb-5">
              Pages
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#FAF6F0]/80">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-white transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Follow Us */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1] mb-5">
              Follow Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#FAF6F0]/80">
              <li>
                <a
                  href={`https://instagram.com/${EXACT_CONTACT.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#D7C3B1]" />
                  <span>Instagram (@{EXACT_CONTACT.instagram})</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${EXACT_CONTACT.instagramPk}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#D7C3B1]" />
                  <span>Instagram Pakistan (@{EXACT_CONTACT.instagramPk})</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com/company/${EXACT_CONTACT.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#D7C3B1]" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[#FAF6F0]/10 text-xs text-[#FAF6F0]/60 space-y-1">
              <p>Email: <a href={`mailto:${EXACT_CONTACT.email}`} className="text-[#FAF6F0] hover:underline">{EXACT_CONTACT.email}</a></p>
              <p>Founder: <a href={`mailto:${EXACT_CONTACT.founderEmail}`} className="text-[#FAF6F0] hover:underline">{EXACT_CONTACT.founderEmail}</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/60">
          <div>
            © 2026 Axoyl Digital. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-cookie-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy-cookie-policy#cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
