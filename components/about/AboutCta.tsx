import Link from "next/link";
import { aboutContent } from "@/lib/content";
import { waLink } from "@/lib/site-config";
import { Icon } from "../Icons";
import { Reveal } from "../motion/Reveal";

export default function AboutCta() {
  return (
    <section className="section-padding bg-dark about-cta" aria-labelledby="about-cta-title">
      <div className="container">
        <Reveal className="about-cta-box" y={20}>
          <h2 id="about-cta-title" className="about-cta-title">
            {aboutContent.cta.title}
          </h2>
          <p className="about-cta-text">{aboutContent.cta.text}</p>
          <div className="hero-ctas about-cta-actions">
            <Link href="/#contact" className="btn btn-red btn-lg">
              Request a Free Quote
              <Icon name="arrow" />
            </Link>
            <a href={waLink()} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
