import Image from "next/image";
import logoFull from "@/public/images/logo-full.jpg";
import { navLinks, services } from "@/lib/content";
import { isPlaceholder, mailLink, siteConfig, telLink, waLink } from "@/lib/site-config";
import { Icon } from "./Icons";

const socialEntries = [
  { key: "facebook", label: "Facebook", icon: "facebook" as const },
  { key: "instagram", label: "Instagram", icon: "instagram" as const },
  { key: "tiktok", label: "TikTok", icon: "tiktok" as const },
  { key: "linkedin", label: "LinkedIn", icon: "linkedin" as const },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-col footer-brand-info">
            <div className="footer-logo-panel">
              <Image src={logoFull} alt={`${siteConfig.brandName} logo`} sizes="240px" />
            </div>
            <p>
              Electrical installation, solar and inverter systems, wireless CCTV, lighting, earthing and maintenance for
              homes and industry in {siteConfig.addressLocality}.
            </p>
            <div className="footer-social-row">
              {socialEntries.map((s) => {
                const href = siteConfig.socials[s.key as keyof typeof siteConfig.socials];
                const placeholder = isPlaceholder(href);
                return (
                  <a
                    key={s.key}
                    href={href}
                    className={`social-circle-btn${placeholder ? " is-placeholder" : ""}`}
                    aria-label={placeholder ? `${s.label} (link not set yet)` : s.label}
                    aria-disabled={placeholder || undefined}
                    target={placeholder ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <Icon name={s.icon} />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="footer-col" aria-label="Quick links">
            <h3>Quick links</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#home">Home</a>
              </li>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>

          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links-list">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <Icon name="phone" />
                <a href={telLink()}>{siteConfig.phoneDisplay}</a>
              </div>
              <div className="footer-contact-row">
                <Icon name="whatsapp" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp chat
                </a>
              </div>
              <div className="footer-contact-row">
                <Icon name="mail" />
                <a href={mailLink()}>{siteConfig.email}</a>
              </div>
              <div className="footer-contact-row">
                <Icon name="pin" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p style={{ color: "#CBD5E1" }}>
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="footer-disclaimer-note">
            Phone numbers, email, address, hours, project photos and reviews on this site are placeholders until the
            business supplies real details.
          </p>
        </div>
      </div>
    </footer>
  );
}
