"use client";

import { Icon } from "@/components/ui";
import { HERO_SLIDER } from "@/config/hero";
import { useCarousel } from "@/hooks/use-carousel";
import { cn } from "@/lib/utils";
import { HeroSlide } from "./hero-slide";

const ARROW =
  "absolute top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-brand bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-brass focus-visible:outline-2 focus-visible:outline-white md:grid";

/**
 * Full-width hero slider. Slides sideways on its own every few seconds; arrows step through,
 * dots jump to a slide, and the play/pause button stops the autoplay.
 */
export function HeroSlider() {
  const { slides, labels, intervalMs } = HERO_SLIDER;
  const { index, next, prev, goTo, paused, stopped, toggle, pauseHandlers } = useCarousel(slides.length, intervalMs);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={labels.region}
      className="relative h-[560px] overflow-hidden bg-ink sm:h-[620px] lg:h-[680px]"
      {...pauseHandlers}
    >
      <div
        aria-live={paused ? "polite" : "off"}
        className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <HeroSlide key={slide.title} slide={slide} index={i} active={i === index} />
        ))}
      </div>

      <button type="button" onClick={prev} aria-label={labels.previous} className={cn(ARROW, "left-5")}>
        <Icon name="chevronLeft" />
      </button>
      <button type="button" onClick={next} aria-label={labels.next} className={cn(ARROW, "right-5")}>
        <Icon name="chevronRight" />
      </button>

      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`${labels.goTo} ${i + 1}: ${slide.title}`}
            aria-current={i === index || undefined}
            className="grid h-6 place-items-center px-1"
          >
            <span
              className={cn(
                "block h-[3px] rounded-full transition-all duration-500",
                i === index ? "w-10 bg-brass" : "w-5 bg-white/40 hover:bg-white/70",
              )}
            />
          </button>
        ))}
        <button
          type="button"
          onClick={toggle}
          aria-label={stopped ? labels.play : labels.pause}
          className="ml-2 grid size-6 place-items-center text-white/60 transition-colors hover:text-white"
        >
          <Icon name={stopped ? "play" : "pause"} className="size-4" />
        </button>
      </div>
    </section>
  );
}
