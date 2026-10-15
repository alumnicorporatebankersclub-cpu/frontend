import Image from "next/image";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

/** Association crest. Path and alt text come from SITE.crest. */
export function Crest({
  size = 48,
  className,
  decorative = false,
  priority = false,
}: {
  size?: number;
  className?: string;
  /** Hide from screen readers when the crest is purely ornamental. */
  decorative?: boolean;
  /** Preload; only for the above-the-fold header crest. */
  priority?: boolean;
}) {
  return (
    <Image
      src={SITE.crest.src}
      alt={decorative ? "" : SITE.crest.alt}
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      priority={priority}
    />
  );
}
