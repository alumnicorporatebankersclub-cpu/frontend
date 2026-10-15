import type { CSSProperties, ElementType, ReactNode } from "react";
import { FADE_UP_MS } from "@/config/hero";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  /** Delay before this element starts, in ms. */
  delay: number;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Wraps content in the one-shot fade-up entrance (styles in app/motion.css). Pure CSS, no JS. */
export function FadeUp({ delay, as: Tag = "div", className, children }: FadeUpProps) {
  const style = {
    "--fade-delay": `${delay}ms`,
    "--fade-duration": `${FADE_UP_MS}ms`,
  } as CSSProperties;

  return (
    <Tag className={cn("fade-up", className)} style={style}>
      {children}
    </Tag>
  );
}
