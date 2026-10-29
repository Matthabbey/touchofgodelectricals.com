"use client";

import { m, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import { EASE } from "./Reveal";

/* Above-the-fold motion for the home hero. Plays on load, not on scroll. */

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const tags = { div: m.div, span: m.span, p: m.p, h1: m.h1, ul: m.ul } as const;

interface ItemProps {
  as?: keyof typeof tags;
  className?: string;
  id?: string;
  ariaLabel?: string;
  children?: ReactNode;
}

export function HeroTextGroup({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <m.div data-reveal className={className} variants={group} initial="hidden" animate="visible">
      {children}
    </m.div>
  );
}

export function HeroTextItem({ as = "div", className, id, ariaLabel, children }: ItemProps) {
  const M = tags[as] as typeof m.div;
  return (
    <M data-reveal className={className} id={id} aria-label={ariaLabel} variants={item}>
      {children}
    </M>
  );
}

/** Logo card: soft scale-in after the text starts. */
export function HeroVisual({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

/** Decorative floating stat card: fades in, then drifts gently forever. */
export function HeroFloat({
  className,
  delay,
  duration,
  children,
}: {
  className?: string;
  delay: number;
  duration: number;
  children: ReactNode;
}) {
  return (
    <m.div
      data-reveal
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { delay, duration, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </m.div>
  );
}

/** Anchor with a tiny press feedback. Used only for the hero calls to action. */
export function TapLink(props: ComponentProps<typeof m.a>) {
  return <m.a whileTap={{ scale: 0.98 }} {...props} />;
}
