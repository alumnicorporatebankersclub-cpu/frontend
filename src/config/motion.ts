/** Motion system: deliberately quiet. Every duration, curve and distance lives here. */

/** Expo-out: quick start, long soft landing. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const REVEAL = {
  /** Distance an element rises while revealing, px. Small on purpose. */
  rise: 16,
  duration: 0.9,
  /** Gap between staggered siblings, s. */
  stagger: 0.08,
  /** Fraction of the element that must be visible before it reveals. */
  amount: 0.2,
} as const;

export const SPLIT_WORDS = {
  duration: 0.9,
  stagger: 0.035,
} as const;

export const SMOOTH_SCROLL = {
  /** Lenis interpolation: lower = smoother and heavier. */
  lerp: 0.1,
  wheelMultiplier: 1,
} as const;
