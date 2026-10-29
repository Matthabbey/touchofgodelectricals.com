import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutGallery from "@/components/about/AboutGallery";
import AboutVideos from "@/components/about/AboutVideos";
import AboutCta from "@/components/about/AboutCta";
import { aboutContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const title = `About ${siteConfig.brandName} | Electrical, Solar & CCTV Installers in ${siteConfig.addressLocality}`;
const description = `Meet the ${siteConfig.shortName} team: electrical installation, solar and inverter systems, wireless CCTV and maintenance in ${siteConfig.addressLocality}. See photos and videos from recent jobs and learn how we work.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/about/",
    siteName: siteConfig.brandName,
    title,
    description,
    images: [
      {
        url: aboutContent.gallery[0].src,
        width: aboutContent.gallery[0].width,
        height: aboutContent.gallery[0].height,
        alt: aboutContent.gallery[0].alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [aboutContent.gallery[0].src],
  },
};

export default function AboutPage() {
  return (
    <main id="main">
      <AboutHero />
      <AboutIntro />
      <AboutGallery photos={aboutContent.gallery} />
      <AboutVideos />
      <AboutCta />
    </main>
  );
}
