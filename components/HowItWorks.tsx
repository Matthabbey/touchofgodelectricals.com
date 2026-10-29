import { steps } from "@/lib/content";
import { Icon } from "./Icons";
import { RevealGroup, RevealItem } from "./motion/Reveal";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding" aria-labelledby="how-it-works-title">
      <div className="container">
        <SectionHeader
          id="how-it-works-title"
          badge="How it works"
          tagline="Simple from start to finish"
          title="Four steps to a safe installation"
          subtitle="You always know what happens next, what it costs and who to call."
        />
        <RevealGroup as="ol" className="steps-grid" style={{ listStyle: "none" }}>
          {steps.map((step, i) => (
            <RevealItem as="li" key={step.title} className="reveal-cell">
              <div className="step-card">
                <span className="step-badge-number">Step {String(i + 1).padStart(2, "0")}</span>
                <span className="step-icon-wrap" aria-hidden="true">
                  <Icon name={step.icon} />
                </span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
