import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion";
import { Container, Icon, SectionTitle } from "@/components/ui";
import { BENEFITS, BENEFITS_SECTION, READ_MORE } from "@/config/benefits";

/** "What we do": four centred icon boxes on a stone background. */
export function Features() {
  return (
    <section aria-labelledby="what-we-do" className="bg-stone py-20 sm:py-24">
      <Container>
        <SectionTitle {...BENEFITS_SECTION} id="what-we-do" />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item) => (
            <RevealItem key={item.title} className="flex">
              <Link
                href={item.href}
                className="group flex w-full flex-col items-center rounded-brand border-b-[3px] border-transparent bg-background px-7 py-10 text-center shadow-[0_1px_2px_rgba(22,24,31,0.06)] transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-brass hover:shadow-[0_18px_40px_-20px_rgba(22,24,31,0.25)]"
              >
                <span className="grid size-16 place-items-center rounded-full bg-stone text-brass transition-colors group-hover:bg-brass group-hover:text-white">
                  <Icon name={item.icon} className="size-7" />
                </span>
                <h3 className="mt-6 text-[18px] text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-ink-soft">{item.body}</p>
                <span className="mt-6 text-[13px] font-semibold tracking-[0.08em] text-brass uppercase">
                  {READ_MORE} <span aria-hidden>→</span>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
