/**
 * Touch of God Electrical Installation — site configuration
 * ---------------------------------------------------------
 * This is the ONLY file you need to edit to put real business details on the site.
 * Every value marked [PLACEHOLDER] is a stand-in. Replace it with the real thing
 * and every button, click-to-call link and WhatsApp chat updates automatically.
 */

export const siteConfig = {
  brandName: "Touch of God Electrical Installation",
  shortName: "Touch of God Electrical",
  tagline: "Powering Homes and Industries Safely",

  /** Public site URL once deployed (used for SEO metadata and schema). */
  siteUrl: "https://example.com", // [PLACEHOLDER] e.g. https://touchofgodelectrical.com

  /** Main phone line. phoneRaw must be digits with country code, no spaces. */
  phoneDisplay: "+234 XXX XXX XXXX", // [PLACEHOLDER]
  phoneRaw: "+234XXXXXXXXXX", // [PLACEHOLDER] e.g. +2348012345678

  /** WhatsApp number: digits only, country code included, no "+" or spaces. */
  whatsappNumber: "234XXXXXXXXXX", // [PLACEHOLDER] e.g. 2348012345678
  whatsappDefaultMessage:
    "Hello Touch of God Electrical! I visited your website and would like a free quote for electrical / solar work.",

  email: "info@example.com", // [PLACEHOLDER]

  /** Office / operational base. */
  address: "[PLACEHOLDER] Street address, Area, Lagos, Nigeria",
  addressLocality: "Lagos", // swap in the real city if different
  addressRegion: "Lagos State",
  addressCountry: "NG",

  /** Areas the team covers. Swap "Lagos" for the real service area. */
  serviceAreas: "Lagos, Nigeria — swap in your real service area",

  /** Opening hours shown on the contact section. */
  workingHours: "[PLACEHOLDER] e.g. Mon – Sat, 8:00 AM – 6:00 PM",

  /** Google Maps link for the map card. */
  mapsUrl: "#", // [PLACEHOLDER] e.g. https://maps.app.goo.gl/...

  /** Social profiles. Leave as "#" to show a disabled placeholder icon. */
  socials: {
    facebook: "#", // [PLACEHOLDER]
    instagram: "#", // [PLACEHOLDER]
    tiktok: "#", // [PLACEHOLDER]
    linkedin: "#", // [PLACEHOLDER]
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Builds a wa.me chat link with a pre-filled message. */
export function waLink(message: string = siteConfig.whatsappDefaultMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Click-to-call link. */
export function telLink(): string {
  return `tel:${siteConfig.phoneRaw}`;
}

export function mailLink(): string {
  return `mailto:${siteConfig.email}`;
}

export const isPlaceholder = (value: string): boolean =>
  value.includes("PLACEHOLDER") || value.includes("XXXX") || value === "#" || value.includes("example.com");
