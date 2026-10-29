"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { projectFilters, projects, type ProjectCategory } from "@/lib/content";
import { waLink } from "@/lib/site-config";
import { Icon } from "./Icons";
import SectionHeader from "./SectionHeader";

type Filter = ProjectCategory | "all";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const open = (index: number, trigger: HTMLElement | null) => {
    triggerRef.current = trigger;
    setActiveIndex(index);
  };

  const close = useCallback(() => {
    setActiveIndex(null);
    const t = triggerRef.current;
    if (t) setTimeout(() => t.focus(), 0);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % visible.length));
  }, [visible.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
  }, [visible.length]);

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

  const active = activeIndex === null ? null : visible[activeIndex];

  return (
    <section id="projects" className="section-padding bg-alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          id="projects-title"
          badge="Our work"
          tagline="Proof is in the finish"
          title="Recent projects"
          subtitle="Browse by category. Tap any project to see it larger."
        />
        <p className="gallery-note">
          These are placeholder illustrations. Real project photos go here once the business supplies them.
        </p>

        <div className="gallery-filter-tabs" role="group" aria-label="Filter projects by category">
          {projectFilters.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`filter-btn${filter === f.value ? " active" : ""}`}
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visible.map((project, i) => (
            <article
              key={project.id}
              className="project-card"
              onClick={(e) => open(i, e.currentTarget.querySelector("button"))}
            >
              <div className="project-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.alt}
                  className="project-img"
                  width={800}
                  height={500}
                  loading="lazy"
                  unoptimized
                />
                <span className="project-category-pill">{project.categoryLabel}</span>
                {project.sample ? <span className="project-sample-pill">Sample</span> : null}
                <span className="project-overlay-zoom" aria-hidden="true">
                  <Icon name="zoom" />
                </span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">
                  <Icon name="pin" />
                  {project.location}
                </p>
                <p className="project-desc-text">{project.summary}</p>
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="project-view-link"
                    style={{ background: "none", border: 0, cursor: "pointer", padding: 0 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      open(i, e.currentTarget);
                    }}
                    aria-label={`View project: ${project.title}`}
                  >
                    View project
                    <Icon name="arrow" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="lightbox-content-box">
            <button ref={closeBtnRef} type="button" className="lightbox-close-btn" onClick={close} aria-label="Close">
              <Icon name="close" />
            </button>
            <div className="lightbox-img-wrap">
              <Image
                src={active.image}
                alt={active.alt}
                className="lightbox-img"
                width={800}
                height={500}
                unoptimized
              />
              {visible.length > 1 ? (
                <>
                  <button type="button" className="lightbox-nav-btn lightbox-prev-btn" onClick={showPrev} aria-label="Previous project">
                    <Icon name="chevron" />
                  </button>
                  <button type="button" className="lightbox-nav-btn lightbox-next-btn" onClick={showNext} aria-label="Next project">
                    <Icon name="chevron" />
                  </button>
                </>
              ) : null}
            </div>
            <div className="lightbox-details">
              <p className="lightbox-category">
                {active.categoryLabel}
                {active.sample ? " · Sample" : ""}
              </p>
              <h3 id="lightbox-title" className="lightbox-title">
                {active.title}
              </h3>
              <p className="lightbox-location">
                <Icon name="pin" />
                {active.location}
              </p>
              <p className="lightbox-desc">{active.details}</p>
              <div className="lightbox-actions">
                <a
                  href={waLink(
                    `Hello Touch of God Electrical,\n\nI saw the project "${active.title}" on your website and would like a quote for a similar installation at my location.`,
                  )}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" />
                  Request a similar quote
                </a>
                <button type="button" className="btn btn-outline-white" onClick={close}>
                  Back to gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
