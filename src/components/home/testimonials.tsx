import { RevealGroup, RevealItem } from "@/components/motion";
import { Avatar, Container, SectionTitle } from "@/components/ui";
import { VOICES, VOICES_SECTION } from "@/config/voices";

/** Testimonials: three quote cards with the member's initials, name and Class Set. */
export function Testimonials() {
  return (
    <section aria-labelledby="testimonials" className="bg-stone py-20 sm:py-24">
      <Container>
        <SectionTitle {...VOICES_SECTION} id="testimonials" />

        <RevealGroup className="mt-14 grid gap-7 lg:grid-cols-3">
          {VOICES.map((voice) => (
            <RevealItem key={voice.name} className="flex">
              <figure className="relative flex w-full flex-col rounded-brand bg-background p-8 pt-10 shadow-[0_1px_2px_rgba(22,24,31,0.06)]">
                <span aria-hidden className="absolute top-6 right-7 text-[64px] leading-none font-semibold text-brass/25">
                  &rdquo;
                </span>
                <blockquote className="flex-1 text-[15.5px] leading-[1.8] text-ink-soft italic">{voice.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Avatar person={{ name: voice.name }} maxSize={48} tone="bg-brass" className="size-12 text-[14px]" />
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">{voice.name}</span>
                    <span className="block text-[13px] text-muted">{voice.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
