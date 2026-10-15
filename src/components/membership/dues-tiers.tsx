import { RevealGroup, RevealItem } from "@/components/motion";
import { Container, SectionTitle } from "@/components/ui";
import { DUES } from "@/config/membership";
import { TierCard } from "./tier-card";

/** Pricing table: the three membership categories side by side, the most common one raised. */
export function DuesTiers() {
  return (
    <section id="dues" aria-labelledby="dues-title" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={DUES.eyebrow} title={DUES.title} intro={DUES.intro} id="dues-title" />

        <RevealGroup as="ul" className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {DUES.tiers.map((tier) => (
            <RevealItem as="li" key={tier.name} className="flex">
              <TierCard tier={tier} cta={DUES.cta} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
