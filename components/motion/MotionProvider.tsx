"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Loads the small "domAnimation" feature set lazily and applies site-wide defaults.
 * `strict` throws if any component uses `motion.*` instead of `m.*`, which keeps the
 * bundle small. `reducedMotion="user"` drops transform animations (but keeps opacity
 * fades) when the OS "reduce motion" setting is on.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
