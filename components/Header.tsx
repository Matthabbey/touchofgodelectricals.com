"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import logoMark from "@/public/images/logo-mark.png";
import { navLinks } from "@/lib/content";
import { siteConfig, telLink, waLink } from "@/lib/site-config";
import { Icon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ScrollSpy: highlight the nav link of the section in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeDrawer = useCallback(() => setOpen(false), []);

  // Lock body scroll + Esc to close while the drawer is open
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKey);
    };
  }, [open, closeDrawer]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-container">
          <a href="#home" className="brand-logo-link" aria-label={`${siteConfig.brandName} home`}>
            <Image
              src={logoMark}
              alt=""
              className="brand-logo-img"
              width={56}
              height={56}
              priority
            />
            <span className="brand-wordmark" aria-hidden="true">
              <span className="brand-wordmark-main">
                Touch of <span>God</span>
              </span>
              <span className="brand-wordmark-sub">Electrical Installation</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${activeId === link.href.slice(1) ? " active" : ""}`}
                aria-current={activeId === link.href.slice(1) ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-red btn-header-quote">
              Get a Free Quote
            </a>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-overlay${open ? " active" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        className={`mobile-nav-drawer${open ? " active" : ""}`}
        aria-label="Mobile menu"
        aria-hidden={!open}
      >
        <div className="mobile-drawer-header">
          <span className="brand-wordmark">
            <span className="brand-wordmark-main">
              Touch of <span>God</span>
            </span>
            <span className="brand-wordmark-sub">Electrical Installation</span>
          </span>
          <button type="button" className="mobile-drawer-close" onClick={closeDrawer} aria-label="Close menu" tabIndex={open ? 0 : -1}>
            <Icon name="close" />
          </button>
        </div>
        <ul className="mobile-drawer-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="mobile-nav-link" onClick={closeDrawer} tabIndex={open ? 0 : -1}>
                {link.label}
                <Icon name="arrow" width={16} height={16} />
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-ctas">
          <a href="#contact" className="btn btn-red" onClick={closeDrawer} tabIndex={open ? 0 : -1}>
            Get a Free Quote
          </a>
          <a href={waLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            <Icon name="whatsapp" />
            Chat on WhatsApp
          </a>
          <a href={telLink()} className="btn btn-outline-blue" tabIndex={open ? 0 : -1}>
            <Icon name="phone" />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </aside>
    </>
  );
}
