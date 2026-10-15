import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TEXT_LINK } from "./styles";

/** Underlined text link with a small arrow that nudges forward on hover. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn(TEXT_LINK, className)}>
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
