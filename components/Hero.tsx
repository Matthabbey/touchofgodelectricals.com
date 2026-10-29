import Image from "next/image";
import logoFull from "@/public/images/logo-full.jpg";
import { siteConfig, waLink } from "@/lib/site-config";
import { Icon } from "./Icons";
import { HeroFloat, HeroTextGroup, HeroTextItem, HeroVisual, TapLink } from "./motion/HeroMotion";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <HeroTextGroup className="hero-content">
          <HeroTextItem as="span" className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Electrical contractor in {siteConfig.addressLocality}
          </HeroTextItem>
          <HeroTextItem as="span" className="hero-tagline-script">
            Your trusted electrical partner
          </HeroTextItem>
          <HeroTextItem as="h1" id="hero-title" className="hero-headline">
            Powering Homes and Industries <span className="hero-headline-highlight">Safely</span>
          </HeroTextItem>
          <HeroTextItem as="p" className="hero-subheadline">
            Electrical installation, solar and inverter systems, wireless CCTV and ongoing maintenance for
            homes, offices and industrial sites. Neat, safe work from inspection to after-service.
          </HeroTextItem>
          <HeroTextItem className="hero-ctas">
            <TapLink href="#contact" className="btn btn-red btn-lg">
              Request a Quote
              <Icon name="arrow" />
            </TapLink>
            <TapLink href={waLink()} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" />
              Chat on WhatsApp
            </TapLink>
          </HeroTextItem>
          <HeroTextItem as="ul" className="hero-badges-row" ariaLabel="What to expect">
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
          </HeroTextItem>
        </HeroTextGroup>

        <HeroVisual className="hero-visual">
          <div className="hero-card-container">
            <Image
              src={logoFull}
              alt="Touch of God Electrical Installation logo: a red lightning bolt inside a blue and red ring, with the tagline Solar system, CCTV installation, house wiring and maintenance"
              className="hero-main-preview"
              priority
              sizes="(min-width: 992px) 40vw, 90vw"
            />
            <HeroFloat className="hero-floating-stat top-right" delay={0.6} duration={5}>
              <span className="stat-icon-wrap red-wrap">
                <Icon name="search" />
              </span>
              <span className="stat-info-text">
                <strong>Site inspection</strong>
                <span>Before every quote</span>
              </span>
            </HeroFloat>
            <HeroFloat className="hero-floating-stat bottom-left" delay={0.8} duration={6}>
              <span className="stat-icon-wrap">
                <Icon name="solar" />
              </span>
              <span className="stat-info-text">
                <strong>Solar · CCTV · Wiring</strong>
                <span>One team for all three</span>
              </span>
            </HeroFloat>
          </div>
        </HeroVisual>
      </div>
    </section>
  );
}
