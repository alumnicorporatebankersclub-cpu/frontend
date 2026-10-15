import { RevealGroup, RevealItem } from "@/components/motion";
import { Container, SectionTitle } from "@/components/ui";
import { AIMS } from "@/config/about";

/** The association's aims as a numbered grid, divided by hairlines. */
export function Aims() {
  return (
    <section aria-labelledby="our-aims" className="py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={AIMS.eyebrow} title={AIMS.title} intro={AIMS.intro} id="our-aims" />

        <RevealGroup
          as="ol"
          className="mt-14 grid gap-px overflow-hidden rounded-brand border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {AIMS.items.map((aim, i) => (
            <RevealItem as="li" key={aim.title} className="bg-background p-8 sm:p-9">
              <span aria-hidden className="text-[34px] leading-none font-semibold text-brass/45 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[18px] text-ink">{aim.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.75] text-ink-soft">{aim.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
