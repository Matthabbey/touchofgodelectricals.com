import { services } from "@/lib/content";
import { Icon } from "./Icons";
import { RevealGroup, RevealItem } from "./motion/Reveal";
import SectionHeader from "./SectionHeader";
import ServiceQuoteButton from "./ServiceQuoteButton";

export default function Services() {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-title">
      <div className="container">
        <SectionHeader
          id="services-title"
          badge="What we do"
          tagline="Safe. Neat. Reliable."
          title="Electrical services for homes and industry"
          subtitle="From a single socket repair to a full commercial installation, every job gets the same care, planning and clean finish."
        />
        <RevealGroup className="services-grid">
          {services.map((service) => (
            // The reveal wrapper is separate from the card so the card's CSS hover lift still works.
            <RevealItem key={service.slug} className="reveal-cell">
              <article className="service-card">
                <span className="service-icon-box" aria-hidden="true">
                  <Icon name={service.icon} />
                </span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ServiceQuoteButton service={service.title} />
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
