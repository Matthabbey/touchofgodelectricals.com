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
  phoneDisplay: "0808 719 1615",
  phoneRaw: "+2348087191615",

  /** Second phone line, shown under the main number. */
  phone2Display: "0916 099 2197",
  phone2Raw: "+2349160992197",

  /** WhatsApp number: digits only, country code included, no "+" or spaces. */
  whatsappNumber: "2348087191615",
  whatsappDefaultMessage:
    "Hello Touch of God Electrical! I visited your website and would like a free quote for electrical / solar work.",

  email: "ewelikedaniel26@gmail.com",

  /** Office / operational base. */
  address: "Okun-Ajah Community, Lagos, Nigeria",
  addressLocality: "Lagos", // swap in the real city if different
  addressRegion: "Lagos State",
  addressCountry: "NG",

  /** Areas the team covers. Swap "Lagos" for the real service area. */
  serviceAreas: "Okun-Ajah and the wider Lagos area, Nigeria",

  /** Opening hours shown on the contact section. */
  workingHours: "[PLACEHOLDER] e.g. Mon – Sat, 8:00 AM – 6:00 PM",

  /** Google Maps link for the map card. */
  mapsUrl: "#", // [PLACEHOLDER] e.g. https://maps.app.goo.gl/...

  /** Social profiles. Leave as "#" to show a disabled placeholder icon. */
  socials: {
    // Facebook profile "Ewelike Daniel". Replace with the direct profile URL
    // (e.g. https://www.facebook.com/<username>) once known; this is a search link.
    facebook: "https://www.facebook.com/search/top?q=Ewelike%20Daniel",
    instagram: "https://www.instagram.com/dan_electrical_installation/",
    // Business X account. Personal account: https://x.com/ewelike78142
    x: "https://x.com/officaltgfelectric1",
    tiktok: "#", // [PLACEHOLDER]
    linkedin: "#", // [PLACEHOLDER]
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Builds a wa.me chat link with a pre-filled message. */
export function waLink(message: string = siteConfig.whatsappDefaultMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Click-to-call link. Defaults to the main line; pass siteConfig.phone2Raw for the second. */
export function telLink(raw: string = siteConfig.phoneRaw): string {
  return `tel:${raw}`;
}

export function mailLink(): string {
  return `mailto:${siteConfig.email}`;
}

export const isPlaceholder = (value: string): boolean =>
  value.includes("PLACEHOLDER") || value.includes("XXXX") || value === "#" || value.includes("example.com");
