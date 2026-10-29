"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import logoMark from "@/public/images/logo-mark.png";
import { navLinks, type NavLink } from "@/lib/content";
import { siteConfig, telLink, waLink } from "@/lib/site-config";
import { Icon } from "./Icons";

/** Section id for home-page anchor links ("/#services" -> "services"), null for page links. */
const hashOf = (href: string): string | null => (href.startsWith("/#") ? href.slice(2) : null);

const trimSlash = (path: string) => path.replace(/\/+$/, "") || "/";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  const isActive = (link: NavLink): boolean => {
    const hash = hashOf(link.href);
    if (hash) return activeId === hash;
    return trimSlash(pathname ?? "") === trimSlash(link.href);
  };

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
      .map((l) => hashOf(l.href))
      .filter((id): id is string => id !== null)
      .map((id) => document.getElementById(id))
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
    // Re-run on route change: the header persists across pages, and the sections only exist on "/".
  }, [pathname]);

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
          <Link href="/#home" className="brand-logo-link" aria-label={`${siteConfig.brandName} home`}>
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
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${isActive(link) ? " active" : ""}`}
                aria-current={isActive(link) ? (hashOf(link.href) ? "true" : "page") : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/#contact" className="btn btn-red btn-header-quote">
              Get a Free Quote
            </Link>
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

      {/* Drawer and overlay are mounted only while open; AnimatePresence plays the exit. */}
      <AnimatePresence>
        {open ? (
          <m.div
            key="drawer-overlay"
            className="mobile-drawer-overlay"
            onClick={closeDrawer}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        ) : null}
        {open ? (
          <m.aside
            key="drawer"
            id="mobile-drawer"
            className="mobile-nav-drawer"
            aria-label="Mobile menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="mobile-drawer-header">
              <span className="brand-wordmark">
                <span className="brand-wordmark-main">
                  Touch of <span>God</span>
                </span>
                <span className="brand-wordmark-sub">Electrical Installation</span>
              </span>
              <button type="button" className="mobile-drawer-close" onClick={closeDrawer} aria-label="Close menu">
                <Icon name="close" />
              </button>
            </div>
            <ul className="mobile-drawer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="mobile-nav-link" onClick={closeDrawer}>
                    {link.label}
                    <Icon name="arrow" width={16} height={16} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-ctas">
              <Link href="/#contact" className="btn btn-red" onClick={closeDrawer}>
                Get a Free Quote
              </Link>
              <a href={waLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" />
                Chat on WhatsApp
              </a>
              <a href={telLink()} className="btn btn-outline-blue">
                <Icon name="phone" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </m.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
