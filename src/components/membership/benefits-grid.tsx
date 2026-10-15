import { RevealGroup, RevealItem } from "@/components/motion";
import { Container, Icon, SectionTitle } from "@/components/ui";
import { MEMBER_BENEFITS } from "@/config/membership";

/** Six member benefits as icon boxes on stone. */
export function BenefitsGrid() {
  const b = MEMBER_BENEFITS;

  return (
    <section aria-labelledby="why-join" className="bg-stone py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={b.eyebrow} title={b.title} intro={b.intro} id="why-join" />

        <RevealGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {b.items.map((item) => (
            <RevealItem as="li" key={item.title} className="flex">
              <div className="flex w-full gap-5 rounded-brand border-b-[3px] border-transparent bg-background p-8 transition-[border-color,translate] hover:-translate-y-1 hover:border-brass">
                <span className="grid size-13 shrink-0 place-items-center rounded-full bg-stone text-brass">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="text-[17px] text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-soft">{item.text}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
