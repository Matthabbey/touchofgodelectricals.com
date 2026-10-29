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
  | "x"
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

export interface NavLink {
  /** Root-relative so links work from every page: "/#section" or "/page/". */
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#projects", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/#contact", label: "Contact" },
];

/* ---------- ABOUT PAGE ---------- */

export interface AboutValue {
  title: string;
  text: string;
  icon: IconName;
}

export interface AboutPhoto {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface AboutVideo {
  src: string;
  title: string;
  /** Shown next to the title, e.g. "0:42". */
  duration: string;
}

/**
 * About page copy. Describes what the team does and how it works.
 * Deliberately avoids founding dates, team size, certifications and client names
 * until the owner supplies them.
 */
export const aboutContent = {
  badge: "About us",
  tagline: "The team behind the work",
  title: "Electrical, solar and CCTV installers serving Lagos",
  heroEyebrow: "Electrical contractor in Lagos",
  heroTagline: "Who we are",
  heroTitle: "Touch of God Electrical Installation",
  heroText:
    "An electrical installation team based in Okun-Ajah, Lagos, working on homes, offices and industrial sites. Here is what we do, how we work and some of our recent jobs.",
  intro: [
    "Touch of God Electrical Installation carries out electrical installation, solar and inverter systems, wireless CCTV, interior lighting, earthing and lightning protection, automation and ongoing maintenance. Whether it is a single inverter for a family home or conduit work across a production floor, the same team handles the job from first visit to handover.",
    "Every job starts with a site inspection. We measure the real load and layout, then send an itemised written quote covering materials, labour and a realistic timeline. Our own team does the installation, tests everything before handover and walks you through the finished system.",
    "We are based in Okun-Ajah and serve the wider Lagos area. If you are further out, send your location on WhatsApp and we will confirm whether we can take the job.",
  ],
  values: [
    {
      title: "Safety first",
      text: "Correct cable sizing, protection devices and earthing on every installation, so the system is safe to live and work with.",
      icon: "shield",
    },
    {
      title: "Honest quotes",
      text: "You see what is going into your building, and what it costs, in writing before any work begins.",
      icon: "document",
    },
    {
      title: "Tidy workmanship",
      text: "Straight runs, labelled boards and neat cable management. The finish should look as good as it performs.",
      icon: "tools",
    },
    {
      title: "Support after handover",
      text: "We stay reachable for questions, adjustments and maintenance once the job is done.",
      icon: "lifebuoy",
    },
  ] satisfies AboutValue[],
  galleryTitle: "Our team on site",
  galleryTagline: "Real jobs, real people",
  gallerySubtitle: "Photos from recent solar and inverter installations. Tap any photo to see it larger.",
  gallery: [
    {
      src: "/images/about/rooftop-solar-array.jpg",
      alt: "Technician crouched on a corrugated roof connecting cables between two rows of solar panels",
      caption: "Wiring a rooftop solar array",
      width: 960,
      height: 1280,
    },
    {
      src: "/images/about/solar-panel-blue-roof.jpg",
      alt: "Technician positioning a solar panel on a blue corrugated roof with mounting rails already fixed",
      caption: "Mounting panels on a residential roof",
      width: 720,
      height: 1280,
    },
    {
      src: "/images/about/inverter-battery-install.jpg",
      alt: "Three team members wiring a wall-mounted inverter beneath a distribution board, with a battery storage unit below",
      caption: "Inverter and battery installation",
      width: 720,
      height: 1280,
    },
    {
      src: "/images/about/wall-inverter-wiring.jpg",
      alt: "Technician in a Touch of God shirt connecting cables at the terminals of a wall-mounted inverter",
      caption: "Terminating cables at a wall inverter",
      width: 720,
      height: 1280,
    },
    {
      src: "/images/about/inverter-battery-cabinet.jpg",
      alt: "Two technicians working behind a floor-standing battery cabinet below a wall-mounted inverter",
      caption: "Fitting a floor-standing battery cabinet",
      width: 720,
      height: 1280,
    },
    {
      src: "/images/about/team-battery-storage.jpg",
      alt: "Team members in branded shirts positioning two battery cabinets under a wall-mounted inverter",
      caption: "Positioning battery storage",
      width: 720,
      height: 1280,
    },
  ] satisfies AboutPhoto[],
  videosTitle: "Watch the work in progress",
  videosTagline: "Straight from the job site",
  videosSubtitle: "Short clips recorded by the team during installations.",
  videos: [
    // Titles are generic on purpose. Rename them once you know what each clip shows.
    { src: "/videos/about/install-clip-01.mp4", title: "On site, clip 1", duration: "0:16" },
    { src: "/videos/about/install-clip-02.mp4", title: "On site, clip 2", duration: "0:17" },
    { src: "/videos/about/install-clip-03.mp4", title: "On site, clip 3", duration: "0:19" },
    { src: "/videos/about/install-clip-04.mp4", title: "On site, clip 4", duration: "0:42" },
    { src: "/videos/about/install-clip-05.mp4", title: "On site, clip 5 (longer walkthrough)", duration: "1:56" },
  ] satisfies AboutVideo[],
  cta: {
    title: "Ready to talk about your project?",
    text: "Tell us what you need and we will arrange a site visit and send an itemised quote.",
  },
};

export const seoKeywords: string[] = [
  "electrical installation Lagos",
  "solar and inverter installation Lagos",
  "CCTV installation Lagos",
  "earthing and lightning protection",
  "electrician in Lagos",
  "electrical contractor Lagos",
  "house wiring Lagos",
];
