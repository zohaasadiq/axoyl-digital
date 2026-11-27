import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { RegionProvider, type Region } from "@/context/RegionContext";
import RegionPrompt from "@/components/RegionPrompt";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const regionCookie = cookieStore.get("axoyl_region")?.value;
  const initialRegion: Region | null =
    regionCookie === "PK" || regionCookie === "INTL" ? regionCookie : null;

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="bg-[#FAF6F0] text-[#140202] antialiased selection:bg-[#520000] selection:text-white">
        <RegionProvider initialRegion={initialRegion}>
          {children}
          <RegionPrompt />
        </RegionProvider>
      </body>
    </html>
  );
}
