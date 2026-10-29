import Image from "next/image";
import logoFull from "@/public/images/logo-full.jpg";
import { siteConfig, waLink } from "@/lib/site-config";
import { Icon } from "./Icons";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <FadeIn className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Electrical contractor in {siteConfig.addressLocality}
          </span>
          <span className="hero-tagline-script">Your trusted electrical partner</span>
          <h1 id="hero-title" className="hero-headline">
            Powering Homes and Industries <span className="hero-headline-highlight">Safely</span>
          </h1>
          <p className="hero-subheadline">
            Electrical installation, solar and inverter systems, wireless CCTV and ongoing maintenance for
            homes, offices and industrial sites. Neat, safe work from inspection to after-service.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-red btn-lg">
              Request a Quote
              <Icon name="arrow" />
            </a>
            <a href={waLink()} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
          <ul className="hero-badges-row" aria-label="What to expect">
            <li className="hero-badge-item">
              <Icon name="shield" className="hero-badge-icon" />
              Certified standards
            </li>
            <li className="hero-badge-item">
              <Icon name="cable" className="hero-badge-icon" />
              Safe wiring
            </li>
            <li className="hero-badge-item">
              <Icon name="headset" className="hero-badge-icon" />
              Reliable after-service
            </li>
          </ul>
        </FadeIn>

        <FadeIn className="hero-visual" delay={200}>
          <div className="hero-card-container">
            <Image
              src={logoFull}
              alt="Touch of God Electrical Installation logo: a red lightning bolt inside a blue and red ring, with the tagline Solar system, CCTV installation, house wiring and maintenance"
              className="hero-main-preview"
              priority
              sizes="(min-width: 992px) 40vw, 90vw"
            />
            <div className="hero-floating-stat top-right" aria-hidden="true">
              <span className="stat-icon-wrap red-wrap">
                <Icon name="search" />
              </span>
              <span className="stat-info-text">
                <strong>Site inspection</strong>
                <span>Before every quote</span>
              </span>
            </div>
            <div className="hero-floating-stat bottom-left" aria-hidden="true">
              <span className="stat-icon-wrap">
                <Icon name="solar" />
              </span>
              <span className="stat-info-text">
                <strong>Solar · CCTV · Wiring</strong>
                <span>One team for all three</span>
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
