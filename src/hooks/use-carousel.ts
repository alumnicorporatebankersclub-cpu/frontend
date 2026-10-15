"use client";

import { type FocusEvent, useCallback, useEffect, useState } from "react";

/**
 * Carousel state with autoplay. Advances every `intervalMs` on its own; the visitor can stop it
 * with the play/pause toggle, and it holds still while keyboard focus is inside so tabbing
 * through a slide's links isn't interrupted. Changing slide manually restarts the timer.
 */
export function useCarousel(count: number, intervalMs: number) {
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const paused = stopped || keyboardFocus;

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const toggle = useCallback(() => setStopped((s) => !s), []);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setTimeout(next, intervalMs);
    return () => window.clearTimeout(id);
  }, [index, paused, count, intervalMs, next]);

  return {
    index,
    next,
    prev,
    goTo,
    paused,
    stopped,
    toggle,
    /** Spread onto the carousel root. Mouse clicks don't pause it; only keyboard focus does. */
    pauseHandlers: {
      onFocus: (e: FocusEvent<HTMLElement>) => setKeyboardFocus(e.target.matches(":focus-visible")),
      onBlur: (e: FocusEvent<HTMLElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setKeyboardFocus(false);
      },
    },
  };
}
