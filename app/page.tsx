import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { buildLocalBusinessJsonLd } from "@/lib/schema";

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <main id="main">
      <script
        type="application/ld+json"
        // JSON-LD is generated from our own typed config, not user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
