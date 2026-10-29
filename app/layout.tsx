import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Kaushan_Script, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { seoKeywords } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
  display: "swap",
});

const title = `Electrical Installation, Solar & CCTV in ${siteConfig.addressLocality} | ${siteConfig.brandName}`;
const description = `${siteConfig.brandName} is an electrical contractor in ${siteConfig.addressLocality} offering electrical installation, solar and inverter installation, wireless CCTV installation, earthing and lightning protection, interior lighting and home electrical maintenance. Request a free quote or chat on WhatsApp.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  keywords: seoKeywords,
  applicationName: siteConfig.brandName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: siteConfig.brandName,
    title,
    description,
    images: [{ url: "/images/logo-full.jpg", width: 514, height: 363, alt: `${siteConfig.brandName} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/logo-full.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#E31E24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${kaushan.variable}`} suppressHydrationWarning>
      <body>
        {/* Marks JS as available before first paint so fade-in content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
