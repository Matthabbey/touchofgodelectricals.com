import { siteConfig } from "./site-config";
import { services } from "./content";

/**
 * LocalBusiness (Electrician) structured data.
 * Deliberately omits ratings, founding date, opening hours and social links
 * until the business supplies real values.
 */
export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/images/logo-full.jpg`,
    logo: `${siteConfig.siteUrl}/images/logo-mark.png`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    description:
      "Electrical contractor in Lagos offering electrical installation, solar and inverter systems, wireless CCTV, interior lighting, earthing and lightning protection, automation and home electrical maintenance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.addressLocality,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };
}
