import Image from "next/image";
import type { Person } from "@/config/hero";
import { cn } from "@/lib/utils";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Round photo, falling back to initials on ink when no photo is supplied.
 * Size it with classes (e.g. "size-9 text-xs"); `maxSize` only tells next/image which width to load.
 */
export function Avatar({
  person,
  maxSize,
  tone = "bg-ink",
  className,
}: {
  person: Person;
  maxSize: number;
  /** Background class for the initials fallback. */
  tone?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full font-sans font-semibold text-on-navy",
        tone,
        className,
      )}
    >
      {person.src ? (
        <Image src={person.src} alt={person.name} fill sizes={`${maxSize}px`} className="object-cover" />
      ) : (
        <span aria-label={person.name} role="img">
          {initials(person.name)}
        </span>
      )}
    </span>
  );
}
