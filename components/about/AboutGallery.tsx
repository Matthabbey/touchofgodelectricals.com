"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { aboutContent, type AboutPhoto } from "@/lib/content";
import { Icon } from "../Icons";
import { EASE, RevealGroup, RevealItem } from "../motion/Reveal";
import SectionHeader from "../SectionHeader";

interface AboutGalleryProps {
  photos: readonly AboutPhoto[];
}

export default function AboutGallery({ photos }: AboutGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const open = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
  };

  const close = useCallback(() => {
    setActiveIndex(null);
    const t = triggerRef.current;
    if (t) setTimeout(() => t.focus(), 0);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, [photos.length]);

  // Keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (activeIndex === null) return;
    document.body.classList.add("no-scroll");
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showNext, showPrev]);

  const active = activeIndex === null ? null : photos[activeIndex];

  return (
    <section className="section-padding bg-alt" aria-labelledby="about-gallery-title">
      <div className="container">
        <SectionHeader
          id="about-gallery-title"
          badge="Photos"
          tagline={aboutContent.galleryTagline}
          title={aboutContent.galleryTitle}
          subtitle={aboutContent.gallerySubtitle}
        />

        <RevealGroup as="ul" className="about-gallery-grid">
          {photos.map((photo, i) => (
            <RevealItem as="li" key={photo.src} y={16}>
              <button
                type="button"
                className="about-photo-btn"
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`Enlarge photo: ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  className="about-photo-img"
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  loading="lazy"
                  unoptimized
                />
                <span className="project-overlay-zoom" aria-hidden="true">
                  <Icon name="zoom" />
                </span>
                <span className="about-photo-caption">{photo.caption}</span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {active ? (
          <m.div
            key="about-lightbox"
            className="lightbox-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-lightbox-caption"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <m.div
              className="lightbox-content-box about-lightbox-box"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              <button ref={closeBtnRef} type="button" className="lightbox-close-btn" onClick={close} aria-label="Close">
                <Icon name="close" />
              </button>
              <div className="about-lightbox-img-wrap">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={active.src}
                    className="lightbox-img-fade"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Image
                      src={active.src}
                      alt={active.alt}
                      className="about-lightbox-img"
                      width={active.width}
                      height={active.height}
                      sizes="(min-width: 768px) 60vw, 95vw"
                      unoptimized
                    />
                  </m.div>
                </AnimatePresence>
                {photos.length > 1 ? (
                  <>
                    <button type="button" className="lightbox-nav-btn lightbox-prev-btn" onClick={showPrev} aria-label="Previous photo">
                      <Icon name="chevron" />
                    </button>
                    <button type="button" className="lightbox-nav-btn lightbox-next-btn" onClick={showNext} aria-label="Next photo">
                      <Icon name="chevron" />
                    </button>
                  </>
                ) : null}
              </div>
              <div className="lightbox-details about-lightbox-details">
                <p id="about-lightbox-caption" className="lightbox-desc">
                  {active.caption}
                  <span className="about-lightbox-count">
                    {" "}
                    · {(activeIndex ?? 0) + 1} of {photos.length}
                  </span>
                </p>
              </div>
            </m.div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
