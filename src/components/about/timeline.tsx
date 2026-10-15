import { RevealGroup, RevealItem } from "@/components/motion";
import { Container, SectionTitle } from "@/components/ui";
import { TIMELINE } from "@/config/about";

/** Milestones down a vertical brass line. */
export function Timeline() {
  return (
    <section aria-labelledby="milestones" className="bg-stone py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={TIMELINE.eyebrow} title={TIMELINE.title} id="milestones" />

        <RevealGroup as="ol" className="mx-auto mt-14 max-w-2xl border-l-2 border-brass/30 pl-8 sm:pl-10">
          {TIMELINE.items.map((item) => (
            <RevealItem as="li" key={item.year} className="relative pb-11 last:pb-0">
              {/* Dot centred on the line: padding + half the dot + half the line. */}
              <span
                aria-hidden
                className="absolute top-1 -left-[calc(2rem+7px)] size-3 rounded-full bg-brass ring-4 ring-stone sm:-left-[calc(2.5rem+7px)]"
              />
              <p className="text-[13px] font-semibold tracking-[0.14em] text-brass tabular-nums">{item.year}</p>
              <h3 className="mt-1.5 text-[19px] text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.75] text-ink-soft">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
