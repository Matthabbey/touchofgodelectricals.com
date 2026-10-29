"use client";

import { m, type Variants } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

/** House easing: quick start, soft landing. */
export const EASE = [0.16, 1, 0.3, 1] as const;

const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -40px 0px" } as const;

const tags = {
  div: m.div,
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  article: m.article,
  section: m.section,
  figure: m.figure,
  span: m.span,
  p: m.p,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
} as const;

export type RevealTag = keyof typeof tags;

interface BaseProps {
  as?: RevealTag;
  className?: string;
  id?: string;
  style?: CSSProperties;
  ariaHidden?: boolean;
  children?: ReactNode;
}

const fadeUp = (y: number, x: number): Variants => ({
  hidden: { opacity: 0, y, x },
  visible: { opacity: 1, y: 0, x: 0 },
});

/**
 * Fades and slides an element in the first time it scrolls into view.
 * Server-rendered with the hidden state inline; `html:not(.js) [data-reveal]` in
 * globals.css makes it visible when JavaScript is unavailable.
 *
 * Do not put this directly on an element that has a CSS `:hover { transform }`:
 * motion writes an inline transform that would override it. Wrap it instead
 * (see `.reveal-cell`).
 */
export function Reveal({
  as = "div",
  className,
  id,
  style,
  ariaHidden,
  children,
  delay = 0,
  y = 24,
  x = 0,
}: BaseProps & { delay?: number; y?: number; x?: number }) {
  const M = tags[as] as typeof m.div;
  return (
    <M
      data-reveal
      id={id}
      className={className}
      style={style}
      aria-hidden={ariaHidden || undefined}
      variants={fadeUp(y, x)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/** Parent that staggers its `RevealItem` children once it scrolls into view. */
export function RevealGroup({
  as = "div",
  className,
  id,
  style,
  children,
  stagger = 0.08,
  delayChildren = 0.05,
}: BaseProps & { stagger?: number; delayChildren?: number }) {
  const M = tags[as] as typeof m.div;
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  };
  return (
    <M
      data-reveal
      id={id}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </M>
  );
}

/** Child of `RevealGroup`. Inherits the group's state, so it needs no viewport logic. */
export function RevealItem({
  as = "div",
  className,
  id,
  style,
  ariaHidden,
  children,
  y = 24,
  x = 0,
}: BaseProps & { y?: number; x?: number }) {
  const M = tags[as] as typeof m.div;
  return (
    <M
      data-reveal
      id={id}
      className={className}
      style={style}
      aria-hidden={ariaHidden || undefined}
      variants={fadeUp(y, x)}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </M>
  );
}
