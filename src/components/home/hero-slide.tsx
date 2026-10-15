import Image from "next/image";
import Link from "next/link";
import { BTN_ACCENT, BTN_LIGHT, Container, Crest } from "@/components/ui";
import type { HeroSlide as Slide } from "@/config/hero";
import { cn } from "@/lib/utils";

/** Warm charcoal backdrops used until a slide has a photo, so each slide still reads distinctly. */
const BACKDROPS = [
  "bg-linear-to-br from-[#2b2722] to-[#16181f]",
  "bg-linear-to-br from-[#33291d] to-[#16181f]",
  "bg-linear-to-br from-[#262a26] to-[#16181f]",
];

/** One full-width slide: photo (or toned backdrop), a dark gradient for legibility, and the message. */
export function HeroSlide({ slide, index, active }: { slide: Slide; index: number; active: boolean }) {
  const Heading = index === 0 ? "h1" : "h2";

  return (
    <div
      aria-hidden={!active}
      inert={!active}
      className="relative h-full w-full shrink-0 overflow-hidden"
    >
      {slide.image ? (
        <Image src={slide.image} alt="" fill sizes="100vw" priority={index === 0} className="object-cover" />
      ) : (
        <div className={cn("absolute inset-0", BACKDROPS[index % BACKDROPS.length])}>
          <Crest size={420} decorative className="absolute top-1/2 right-[6%] hidden w-[34%] max-w-105 -translate-y-1/2 rounded-full opacity-[0.07] grayscale lg:block" />
        </div>
      )}
      <div aria-hidden className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/55 to-ink/15" />

      <Container className="relative flex h-full items-center py-24">
        {/* Re-keyed on activation so the text fades up each time its slide comes round. */}
        <div key={active ? "on" : "off"} className={cn("max-w-2xl", active && "fade-up")}>
          <p className="text-[12px] font-semibold tracking-[0.18em] text-brass uppercase">{slide.eyebrow}</p>
          {/* The first slide carries the page's main heading; later slides are sub-headings. */}
          <Heading className="mt-4 text-[36px] leading-[1.1] text-white sm:text-[50px] lg:text-[58px]">{slide.title}</Heading>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.75] text-white/80 sm:text-[17px]">{slide.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={slide.primary.href} className={BTN_ACCENT}>
              {slide.primary.label}
            </Link>
            {slide.secondary && (
              <Link href={slide.secondary.href} className={BTN_LIGHT}>
                {slide.secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
