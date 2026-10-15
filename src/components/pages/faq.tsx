import { Reveal } from "@/components/motion";
import { Container, Icon, SectionTitle } from "@/components/ui";

interface FaqProps {
  id: string;
  eyebrow: string;
  title: string;
  items: readonly { q: string; a: string }[];
}

/** Common questions as an accordion, built on native <details> so it works without script. */
export function Faq({ id, eyebrow, title, items }: FaqProps) {
  return (
    <section aria-labelledby={id} className="bg-stone py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow={eyebrow} title={title} id={id} />

          <Reveal className="mt-12 space-y-3">
            {items.map((item, i) => (
              <details key={item.q} open={i === 0} className="group rounded-brand border border-line bg-background">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[16px] font-semibold text-ink transition-colors hover:text-brass [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Icon name="chevronDown" className="size-4 text-brass transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 text-[15px] leading-[1.8] text-ink-soft">{item.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
