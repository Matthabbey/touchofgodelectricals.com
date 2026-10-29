"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400;
  id?: string;
}

/**
 * Adds a subtle fade-up when the element scrolls into view.
 * Respects prefers-reduced-motion (handled in CSS) and falls back to visible
 * if IntersectionObserver is unavailable.
 */
export default function FadeIn({ children, as: Tag = "div", className = "", delay = 0, id }: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("appear");
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` delay-${delay}` : "";
  return (
    <Tag ref={ref} id={id} className={`fade-in-up${delayClass}${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
