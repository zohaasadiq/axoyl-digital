"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NumbersStrip from "@/components/NumbersStrip";
import ClientLogosSection from "@/components/ClientLogosSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import DriveMediaSection from "@/components/DriveMediaSection";
import RowTestimonialsSection from "@/components/RowTestimonialsSection";
import WhereWeWorkMapSection from "@/components/WhereWeWorkMapSection";
import FounderCallSection from "@/components/FounderCallSection";
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
    setModalService(service || "Social Media Management");
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
      {/* 00. Global Navigation: Home · For Clinics · Work · Services · Plans · About · Contact */}
      <Navbar onOpenQuote={handleOpenQuote} onOpenAudit={handleOpenAudit} />

      {/* HeroSection: With newly styled interactive summary card & audit form */}
      <Hero onOpenQuote={handleOpenQuote} onOpenAudit={handleOpenAudit} />

      {/* Section 1: Numbers Strip (2M+ organic views generated · 37+ brands · 6 countries · Since 2019) */}
      <NumbersStrip />

      {/* Section 2: Trusted by Brands */}
      <ClientLogosSection />

      {/* Section 3: Services (Social Media Management, Branding & Designing, Video Editing, Paid Ads, PR & Influencer Marketing, Personal Branding, Email Marketing) */}
      <HomeServicesSection onOpenQuote={handleOpenQuote} />

      {/* Section 4: Best pictures and videos from drive */}
      <DriveMediaSection />

      {/* Section 5: Testimonial total 6 in row form */}
      <RowTestimonialsSection />

      {/* Section 6: Map (Global Reach from Pakistan) */}
      <WhereWeWorkMapSection />

      {/* Founder Call Banner */}
      <FounderCallSection onOpenBooking={() => handleOpenQuote("20-minute consultation call")} />

      {/* Final Call to Action */}
      <FinalCtaSection onOpenQuote={() => handleOpenQuote()} />

      {/* Footer: Styled just like Roy's Digital Media */}
      <Footer />

      {/* Direct WhatsApp Contact Floating Button */}
      <FloatingWhatsApp />

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Quote & Free Social Media Audit Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseModal}
        initialService={modalService}
        initialMode={modalMode}
      />
    </main>
  );
}
