import { aboutContent } from "@/lib/content";
import { Icon } from "../Icons";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";
import SectionHeader from "../SectionHeader";

export default function AboutIntro() {
  return (
    <section className="section-padding" aria-labelledby="about-intro-title">
      <div className="container">
        <SectionHeader
          id="about-intro-title"
          badge={aboutContent.badge}
          tagline={aboutContent.tagline}
          title={aboutContent.title}
          red
        />
        <div className="about-intro-grid">
          <Reveal className="about-intro-copy">
            {aboutContent.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
          <RevealGroup as="ul" className="about-values-list" delayChildren={0.15}>
            {aboutContent.values.map((value) => (
              <RevealItem as="li" key={value.title} className="reveal-cell">
                <div className="about-value-item">
                  <span className="about-value-icon" aria-hidden="true">
                    <Icon name={value.icon} />
                  </span>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
