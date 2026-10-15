import { RevealGroup, RevealItem } from "@/components/motion";
import { Container, Icon } from "@/components/ui";
import { CONTACT_CARDS } from "@/config/contact";

/** Four ways to reach the secretariat, lifted over the banner's lower edge. */
export function ContactCards() {
  return (
    <section className="relative z-10 -mt-14">
      <Container>
        <RevealGroup as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card) => (
            <RevealItem as="li" key={card.title} className="flex">
              <div className="w-full rounded-brand border-b-[3px] border-brass bg-background p-7 shadow-[0_18px_40px_-24px_rgba(22,24,31,0.35)]">
                <span className="grid size-12 place-items-center rounded-full bg-stone text-brass">
                  <Icon name={card.icon} />
                </span>
                <h2 className="mt-5 text-[17px] text-ink">{card.title}</h2>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-soft">
                  {card.lines.map((line) =>
                    card.href ? (
                      <a key={line} href={card.href} className="block break-all transition-colors hover:text-brass">
                        {line}
                      </a>
                    ) : (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ),
                  )}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
