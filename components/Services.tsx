import { services } from "@/lib/content";
import { Icon } from "./Icons";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import ServiceQuoteButton from "./ServiceQuoteButton";

export default function Services() {
  const delays = [0, 100, 200, 300] as const;
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
        <div className="services-grid">
          {services.map((service, i) => (
            <FadeIn as="article" key={service.slug} className="service-card" delay={delays[i % 4]}>
              <span className="service-icon-box" aria-hidden="true">
                <Icon name={service.icon} />
              </span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ServiceQuoteButton service={service.title} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
