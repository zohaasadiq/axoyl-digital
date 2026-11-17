"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NumbersStrip from "@/components/NumbersStrip";
import ClientLogosSection from "@/components/ClientLogosSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import FounderCallSection from "@/components/FounderCallSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [modalMode, setModalMode] = useState<"quote" | "audit">("quote");

  const handleOpenQuote = (service?: string) => {
    setModalMode("quote");
    setModalService(service || "Social media management");
    setIsQuoteModalOpen(true);
  };

  const handleOpenAudit = () => {
    setModalMode("audit");
    setIsQuoteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202] selection:bg-[#520000] selection:text-white">
      {/* 00. Global Navigation: Home · Work · Services · Plans · About · Contact + Book a call */}
      <Navbar onOpenQuote={handleOpenQuote} onOpenAudit={handleOpenAudit} />

      {/* 01. Section 1: Hero (Weproms Style: Geographically Accurate World Map from Pakistan, Headline, 1a Hero Bar) */}
      <Hero onOpenQuote={handleOpenQuote} onOpenAudit={handleOpenAudit} />

      {/* 02. Section 2: Numbers Strip (37+ brands · 6 countries · 400K+ views · Since 2019) */}
      <NumbersStrip />

      {/* 03. Section 3: Client Logos (Trusted by brands across 6 countries + Single-color logos + Unnamed text tiles) */}
      <ClientLogosSection />

      {/* 04. Section 4: Services (What we do: 1 Large card + 6 small cards) */}
      <HomeServicesSection onOpenQuote={handleOpenQuote} />

      {/* 05. Section 5: Book a call with Esha (Signature founder banner) */}
      <FounderCallSection onOpenBooking={() => handleOpenQuote("20-minute call")} />

      {/* 06. Section 6: Selected work + testimonials (4 project cards + 3 real client quotes + Portfolio by email) */}
      <SelectedWorkSection />

      {/* 07. Section 7: Final CTA (Ready to grow your brand on social?) */}
      <FinalCtaSection onOpenQuote={() => handleOpenQuote()} />

      {/* Global Footer (Newsletter + Pages + Socials) */}
      <Footer />

      {/* On Every Page: Floating WhatsApp button "Chat with Esha" */}
      <FloatingWhatsApp />

      {/* On Every Page: Cookie Banner on first visit */}
      <CookieBanner />

      {/* Unified Quote & Free Social Media Audit Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseModal}
        initialService={modalService}
        initialMode={modalMode}
      />
    </main>
  );
}
