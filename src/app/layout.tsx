import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axoyl Digital | High-Impact Social Media & Creative Marketing Agency",
  description:
    "Specialized primarily in full-service Social Media Management, viral short-form reels, and influencer marketing, with 360° digital marketing and creative branding solutions across Pakistan, USA, and UAE.",
  keywords: [
    "Axoyl Digital",
    "Social Media Management Agency",
    "Viral Reels Production",
    "Influencer Marketing Agency",
    "Creative Marketing Agency",
    "Luxury Branding",
    "Dubai SMM",
    "US Social Media Agency",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="bg-[#FAF6F0] text-[#140202] antialiased selection:bg-[#520000] selection:text-white">
        {children}
      </body>
    </html>
  );
}
