"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT, REVEAL } from "@/config/motion";

const item: Variants = {
  hidden: { opacity: 0, y: REVEAL.rise },
  /** `custom` carries an optional extra delay, s. */
  shown: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    // Only set delay when asked: an explicit delay would override RevealGroup's stagger offset.
    transition: { duration: REVEAL.duration, ease: EASE_OUT, ...(delay ? { delay } : {}) },
  }),
};

const viewport = { once: true, amount: REVEAL.amount } as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Extra delay before revealing, s. */
  delay?: number;
}

/** Fades in with a small rise, once, when scrolled into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={item}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/** Reveals its RevealItem children one after another. */
export function RevealGroup({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "ol" | "ul" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      variants={{ shown: { transition: { staggerChildren: REVEAL.stagger } } }}
    >
      {children}
    </Tag>
  );
}

/** A staggered child of RevealGroup. */
export function RevealItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  );
}
