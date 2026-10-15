import Link from "next/link";
import { Crest } from "@/components/ui";
import { SITE } from "@/config/site";

/**
 * Header logo lockup: crest | two-line wordmark over a small-caps institution line.
 * Below `sm` the divider and institution line drop out to leave room for the Join button.
 */
export function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label={`${SITE.shortName}, ${SITE.institution} — home`}
      className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3.5"
    >
      <Crest size={48} priority className="size-10 rounded-full sm:size-12" />

      <span aria-hidden className="hidden h-11 w-px shrink-0 bg-line sm:block" />

      <span className="flex min-w-0 flex-col">
        <span className="text-[14px] leading-[1.15] font-semibold tracking-[-0.01em] text-ink sm:text-[15.5px]">
          {SITE.logoLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </span>
        <span className="mt-1.5 hidden text-[10px] leading-none font-semibold tracking-[0.16em] whitespace-nowrap text-muted uppercase sm:block">
          {SITE.institution}
        </span>
      </span>
    </Link>
  );
}
