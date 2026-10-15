import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";
import { BTN_ACCENT, Container, SectionTitle } from "@/components/ui";
import { JOIN_STEPS } from "@/config/membership-join";

/** How to join: four numbered steps joined by a hairline, on charcoal. */
export function JoinSteps() {
  const j = JOIN_STEPS;

  return (
    <section aria-labelledby="how-to-join" className="bg-ink py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={j.eyebrow} title={j.title} id="how-to-join" inverse />

        <RevealGroup as="ol" className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* The connecting line runs behind the number circles on wide screens. */}
          <span aria-hidden className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-white/15 lg:block" />
          {j.steps.map((step, i) => (
            <RevealItem as="li" key={step.title} className="relative text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full border border-brass bg-ink text-[18px] font-semibold text-brass tabular-nums">
                {i + 1}
              </span>
              <h3 className="mt-6 text-[18px] text-white">{step.title}</h3>
              <p className="mx-auto mt-2.5 max-w-64 text-[14.5px] leading-[1.7] text-white/65">{step.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 text-center">
          <Link href={j.cta.href} className={BTN_ACCENT}>
            {j.cta.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
