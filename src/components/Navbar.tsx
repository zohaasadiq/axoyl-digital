"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

interface NavbarProps {
  onOpenAudit?: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/influencer-growth", label: "Viral & Creators" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.08)] border-[#D7C3B1]"
            : "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-[#D7C3B1]/80"
        }`}
      >
        {/* Authentic Logo — Highly Visible & Crisp */}
        <Link href="/" className="flex items-center group py-0.5">
          <div className="relative h-10 sm:h-11 w-44 sm:w-52 transition-transform group-hover:scale-105 flex items-center">
            <Image
              src="/brand/logo-tight-maroon.png"
              alt="Axoyl Digital Logo"
              width={180}
              height={44}
              priority
              className="object-contain object-left max-h-11 w-auto"
              style={{ maxWidth: "180px", height: "auto" }}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Trifid clean centered pill) */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors relative py-1 ${
                  isActive
                    ? "text-[#520000]"
                    : "text-[#140202]/80 hover:text-[#520000]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#520000] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs (Trifid pill buttons) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`https://wa.me/923492976505?text=Hi%20Axoyl%20Digital,%20I'd%20like%20to%20discuss%20services%20for%20my%20brand.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#520000] hover:text-[#720909] px-3.5 py-2 rounded-full border border-[#D7C3B1] bg-[#FAF6F0] hover:bg-white transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {onOpenAudit ? (
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] hover:shadow-[0_4px_16px_rgba(82,0,0,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <span>Get Social Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-all"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {onOpenAudit && (
            <button
              onClick={onOpenAudit}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-[#520000]"
            >
              Audit
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] text-[#140202] hover:text-[#520000] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-white border border-[#D7C3B1] shadow-2xl p-6 pointer-events-auto animate-fade-in text-[#140202]">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-wider py-2 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#FAF6F0] text-[#520000]"
                      : "text-[#140202] hover:bg-[#FAF6F0] hover:text-[#520000]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-5 border-t border-[#D7C3B1]/60 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/923492976505`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#520000] border border-[#D7C3B1] bg-[#FAF6F0]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp
            </a>

            {onOpenAudit && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000]"
              >
                Book 1:1 Social Audit
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}