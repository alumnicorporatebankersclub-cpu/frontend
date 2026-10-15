import { RevealGroup, RevealItem } from "@/components/motion";
import { Container } from "@/components/ui";
import { STATS, STATS_LABEL } from "@/config/home";

/** Counter band: four figures on charcoal, divided by hairlines. */
export function StatsBand() {
  return (
    <section aria-label={STATS_LABEL} className="bg-ink py-16">
      <Container>
        <RevealGroup as="ul" className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <RevealItem as="li" key={stat.label} className={`border-white/10 px-4 text-center ${i % 2 ? "border-l" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
              <p className="text-[36px] font-semibold tracking-[-0.03em] text-white tabular-nums sm:text-[44px]">{stat.value}</p>
              <p className="mt-2 text-[12px] font-semibold tracking-[0.14em] text-brass uppercase">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
