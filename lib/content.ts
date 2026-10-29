/**
 * All page copy lives here so it can be edited without touching components.
 * Nothing in this file states certifications, years in business, client names
 * or statistics. Those must come from the business owner, not be invented.
 */

export type IconName =
  | "conduit"
  | "solar"
  | "lighting"
  | "automation"
  | "cctv"
  | "earthing"
  | "maintenance"
  | "contracting"
  | "shield"
  | "cable"
  | "headset"
  | "document"
  | "search"
  | "tools"
  | "lifebuoy"
  | "bolt"
  | "check"
  | "star"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "clock"
  | "map"
  | "arrow"
  | "chevron"
  | "zoom"
  | "close"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "linkedin"
  | "quote"
  | "menu";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
}

export const services: Service[] = [
  {
    slug: "conduit",
    title: "Industrial & Commercial Conduit Work",
    description:
      "Concealed and surface conduit runs for factories, offices and shops, laid out to standard and ready for inspection.",
    icon: "conduit",
  },
  {
    slug: "solar",
    title: "Inverter & Solar System Installation",
    description:
      "Hybrid inverters, battery banks and rooftop panels sized to your real load so you keep power when the grid goes off.",
    icon: "solar",
  },
  {
    slug: "lighting",
    title: "Interior Lighting Design & Installation",
    description:
      "Lighting layouts for homes, offices and showrooms, from LED downlights to feature and accent lighting.",
    icon: "lighting",
  },
  {
    slug: "automation",
    title: "Electrical Automation",
    description:
      "Smart home controls and industrial control panels that let you switch, schedule and monitor from one place.",
    icon: "automation",
  },
  {
    slug: "cctv",
    title: "Wireless CCTV Installation",
    description:
      "Indoor and outdoor cameras with remote viewing on your phone, installed neatly with tidy cable management.",
    icon: "cctv",
  },
  {
    slug: "earthing",
    title: "Earthing & Lightning Protection",
    description:
      "Standard earthing systems and lightning arrestors that protect people, appliances and sensitive equipment.",
    icon: "earthing",
  },
  {
    slug: "maintenance",
    title: "Home Electrical Maintenance",
    description:
      "Fault finding, distribution board upgrades, socket and switch replacement and periodic safety checks.",
    icon: "maintenance",
  },
  {
    slug: "contracting",
    title: "General Electrical Contracting",
    description:
      "Complete wiring for new builds and renovations, coordinated with your builder from first fix to handover.",
    icon: "contracting",
  },
];

export const serviceOptions: string[] = [
  ...services.map((s) => s.title),
  "Other / Not sure yet",
];

export interface TrustItem {
  title: string;
  text: string;
  icon: IconName;
}

export const trustItems: TrustItem[] = [
  {
    title: "Certified standards",
    text: "Work carried out to recognised wiring standards.",
    icon: "shield",
  },
  {
    title: "Safe wiring",
    text: "Correct cable sizing, protection and earthing on every job.",
    icon: "cable",
  },
  {
    title: "Reliable after-service",
    text: "We stay reachable after handover for support.",
    icon: "headset",
  },
  {
    title: "Clear written quotes",
    text: "Itemised quotes before any work begins.",
    icon: "document",
  },
];

export interface WhyPoint {
  title: string;
  text: string;
}

export const whyUs: WhyPoint[] = [
  {
    title: "Safety standards first",
    text: "Every installation is planned around correct load calculation, protection devices and earthing, so your home or facility is safe to live and work in.",
  },
  {
    title: "Quality materials",
    text: "We specify reputable cables, breakers, inverters and cameras, and we tell you exactly what is going into your building before we buy it.",
  },
  {
    title: "Neat workmanship",
    text: "Straight conduit runs, labelled distribution boards and tidy cable management. The finish should look as good as it performs.",
  },
  {
    title: "Timely delivery",
    text: "You get a realistic schedule at quote stage and regular updates while work is in progress, so there are no surprises.",
  },
  {
    title: "After-installation support",
    text: "We walk you through your new system at handover and remain available for questions, adjustments and maintenance afterwards.",
  },
];

export const jobIncludes: string[] = [
  "Site visit and load assessment",
  "Itemised written quote",
  "Installation by our own team",
  "Testing before handover",
  "Walkthrough of your new system",
  "Follow-up support",
];

export interface Step {
  title: string;
  text: string;
  icon: IconName;
}

export const steps: Step[] = [
  {
    title: "Inspection",
    text: "We visit your site, understand what you need and measure the actual load and layout.",
    icon: "search",
  },
  {
    title: "Quote",
    text: "You receive a clear, itemised quote with materials, labour and a realistic timeline.",
    icon: "document",
  },
  {
    title: "Installation",
    text: "Our team installs to standard, keeps the site tidy and tests everything before handover.",
    icon: "tools",
  },
  {
    title: "Support",
    text: "We show you how to use the system and stay available for maintenance and questions.",
    icon: "lifebuoy",
  },
];

export type ProjectCategory = "solar" | "cctv" | "wiring" | "lighting";

export const projectFilters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "solar", label: "Solar" },
  { value: "cctv", label: "CCTV" },
  { value: "wiring", label: "Wiring" },
  { value: "lighting", label: "Lighting" },
];

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  alt: string;
  location: string;
  summary: string;
  details: string;
  sample: boolean;
}

/**
 * Placeholder projects. Replace `image` with a real photo in /public/images/projects,
 * write a real title, location and description, and set `sample: false`.
 */
export const projects: Project[] = [
  {
    id: "solar-hybrid",
    title: "Residential hybrid solar system",
    category: "solar",
    categoryLabel: "Solar",
    image: "/images/projects/project-solar-hybrid.svg",
    alt: "Sample placeholder illustration of a rooftop solar array with an inverter and lithium battery bank",
    location: "Location placeholder",
    summary: "Rooftop panels, hybrid inverter and lithium battery for a family home.",
    details:
      "Sample description. Describe the property, the inverter and battery sizes installed, the number of panels and what the client can now run during outages.",
    sample: true,
  },
  {
    id: "solar-commercial",
    title: "Commercial solar backup",
    category: "solar",
    categoryLabel: "Solar",
    image: "/images/projects/project-solar-commercial.svg",
    alt: "Sample placeholder illustration of a commercial building with solar panels",
    location: "Location placeholder",
    summary: "Solar and inverter backup keeping an office running through outages.",
    details:
      "Sample description. Describe the business, the system installed and the result for the client.",
    sample: true,
  },
  {
    id: "cctv-surveillance",
    title: "Wireless CCTV for a residence",
    category: "cctv",
    categoryLabel: "CCTV",
    image: "/images/projects/project-cctv-surveillance.svg",
    alt: "Sample placeholder illustration of wireless CCTV cameras and a monitoring screen",
    location: "Location placeholder",
    summary: "Indoor and outdoor cameras with phone viewing and recording.",
    details:
      "Sample description. Describe camera count, coverage, storage and how the client views the feed.",
    sample: true,
  },
  {
    id: "conduit-industrial",
    title: "Industrial conduit installation",
    category: "wiring",
    categoryLabel: "Wiring",
    image: "/images/projects/project-conduit-industrial.svg",
    alt: "Sample placeholder illustration of industrial conduit runs and a distribution board",
    location: "Location placeholder",
    summary: "Conduit and trunking for a production floor, finished to standard.",
    details:
      "Sample description. Describe the facility, the scope of conduit work and any coordination with other trades.",
    sample: true,
  },
  {
    id: "earthing-protection",
    title: "Earthing and lightning protection",
    category: "wiring",
    categoryLabel: "Wiring",
    image: "/images/projects/project-earthing-protection.svg",
    alt: "Sample placeholder illustration of an earthing rod and lightning arrestor",
    location: "Location placeholder",
    summary: "Earth pit, bonding and lightning arrestor for a multi-storey building.",
    details:
      "Sample description. Describe the building, the earthing design and the test results obtained.",
    sample: true,
  },
  {
    id: "maintenance-panel",
    title: "Distribution board upgrade",
    category: "wiring",
    categoryLabel: "Wiring",
    image: "/images/projects/project-maintenance-panel.svg",
    alt: "Sample placeholder illustration of a labelled electrical distribution board",
    location: "Location placeholder",
    summary: "Old fuse board replaced with a labelled, protected distribution board.",
    details:
      "Sample description. Describe the fault found, the upgrade carried out and the protection added.",
    sample: true,
  },
  {
    id: "interior-lighting",
    title: "Interior lighting design",
    category: "lighting",
    categoryLabel: "Lighting",
    image: "/images/projects/project-interior-lighting.svg",
    alt: "Sample placeholder illustration of a living room with layered LED lighting",
    location: "Location placeholder",
    summary: "Layered LED lighting for a living and dining space.",
    details:
      "Sample description. Describe the rooms, the lighting plan and the fittings used.",
    sample: true,
  },
  {
    id: "smart-automation",
    title: "Smart lighting and automation",
    category: "lighting",
    categoryLabel: "Lighting",
    image: "/images/projects/project-smart-automation.svg",
    alt: "Sample placeholder illustration of a smart home control panel and automated lighting",
    location: "Location placeholder",
    summary: "App-controlled lighting scenes and scheduled switching for a home.",
    details:
      "Sample description. Describe what was automated, the control system used and how the client operates it.",
    sample: true,
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
  sample: boolean;
}

/** Sample text only. Replace with real client reviews (with permission) and set sample: false. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Sample review text. A real client comment about the solar installation, how the team explained the system and how the home has been running since.",
    author: "Sample client",
    role: "Homeowner, area placeholder",
    initials: "SC",
    sample: true,
  },
  {
    quote:
      "Sample review text. A real client comment about CCTV installation, tidiness of the cabling and how easy it is to view cameras from a phone.",
    author: "Sample client",
    role: "Business owner, area placeholder",
    initials: "SC",
    sample: true,
  },
  {
    quote:
      "Sample review text. A real client comment about a full house wiring job, communication during the work and the after-installation support.",
    author: "Sample client",
    role: "Property developer, area placeholder",
    initials: "SC",
    sample: true,
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What size inverter do I need?",
    answer:
      "It depends on what you want to keep running during an outage and for how long. We measure your actual load during the site inspection, then recommend an inverter and battery size that fits, rather than guessing from the number of rooms.",
  },
  {
    question: "Do you carry out site inspections before quoting?",
    answer:
      "Yes. For anything beyond a small repair we visit the site first so the quote reflects the real layout, cable runs and load. You get the inspection findings and the itemised quote in writing.",
  },
  {
    question: "Do you give warranties on your work?",
    answer:
      "Installation workmanship and equipment warranty terms are confirmed in writing on each quote before work begins, so you know exactly what is covered and for how long.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We are based in Lagos and work across the city. If you are outside our usual area, send your location on WhatsApp and we will confirm whether we can take the job.",
  },
  {
    question: "How long does an installation take?",
    answer:
      "It varies with the scope. A CCTV setup or inverter installation is usually quicker than a full house wiring. We give you a realistic timeline with the quote and keep you updated while work is in progress.",
  },
  {
    question: "Do you supply the materials or can I buy my own?",
    answer:
      "Either. We can supply cables, breakers, inverters, panels and cameras from reputable brands, or install materials you have already bought after checking they are suitable and safe for the job.",
  },
];

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const seoKeywords: string[] = [
  "electrical installation Lagos",
  "solar and inverter installation Lagos",
  "CCTV installation Lagos",
  "earthing and lightning protection",
  "electrician in Lagos",
  "electrical contractor Lagos",
  "house wiring Lagos",
];
