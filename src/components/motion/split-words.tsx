"use client";

import { motion } from "motion/react";
import { EASE_OUT, SPLIT_WORDS } from "@/config/motion";

interface SplitWordsProps {
  text: string;
  className?: string;
  /** Extra delay before the first word, s. */
  delay?: number;
}

/**
 * Each word rises out of its own clipping mask, one after another, when scrolled into view.
 * Screen readers get the plain sentence; the animated words are hidden from them.
 */
export function SplitWords({ text, className, delay = 0 }: SplitWordsProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: SPLIT_WORDS.stagger, delayChildren: delay }}
      >
        {words.map((word, i) => (
          // pb/-mb keep descenders (g, y, p) inside the mask without shifting the line
          <span key={`${word}-${i}`} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "105%" },
                shown: { y: "0%", transition: { duration: SPLIT_WORDS.duration, ease: EASE_OUT } },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
