import { jobIncludes, whyUs } from "@/lib/content";
import { waLink } from "@/lib/site-config";
import { Icon } from "./Icons";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-alt" aria-labelledby="why-us-title">
      <div className="container">
        <SectionHeader
          id="why-us-title"
          badge="Why choose us"
          tagline="Done right the first time"
          title="Safety, quality and a tidy finish"
          red
        />
        <div className="why-us-grid">
          <FadeIn as="ol" className="why-us-points">
            {whyUs.map((point, i) => (
              <li key={point.title} className="why-point-item">
                <span className="why-point-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="why-point-content">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </li>
            ))}
          </FadeIn>

          <FadeIn className="includes-card" delay={200}>
            <div className="includes-header">
              <h3>What every job includes</h3>
              <p>No hidden extras, no guesswork</p>
            </div>
            <ul className="includes-list">
              {jobIncludes.map((item) => (
                <li key={item}>
                  <span className="includes-check" aria-hidden="true">
                    <Icon name="check" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="includes-footer">
              <a href={waLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}>
                <Icon name="whatsapp" />
                Ask us anything on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
