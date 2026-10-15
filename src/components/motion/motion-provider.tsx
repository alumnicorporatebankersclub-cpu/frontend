"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { SMOOTH_SCROLL } from "@/config/motion";

/**
 * Site-wide motion: Lenis inertial smooth scrolling, and Motion set to respect the
 * visitor's "reduce motion" setting (transforms are dropped; opacity still fades).
 * The tree is identical either way (so nothing remounts after hydration); reduced-motion
 * visitors just get native, unsmoothed wheel scrolling.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion() ?? false;

  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          autoRaf: true,
          lerp: SMOOTH_SCROLL.lerp,
          wheelMultiplier: SMOOTH_SCROLL.wheelMultiplier,
          smoothWheel: !reduce,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
