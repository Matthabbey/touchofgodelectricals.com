import { aboutContent } from "@/lib/content";
import { Reveal } from "../motion/Reveal";

export default function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-title">
      <Reveal className="container about-hero-inner">
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-dot" aria-hidden="true" />
          {aboutContent.heroEyebrow}
        </span>
        <span className="hero-tagline-script">{aboutContent.heroTagline}</span>
        <h1 id="about-title" className="about-hero-title">
          {aboutContent.heroTitle}
        </h1>
        <p className="hero-subheadline about-hero-text">{aboutContent.heroText}</p>
      </Reveal>
    </section>
  );
}
