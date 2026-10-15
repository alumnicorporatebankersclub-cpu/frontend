import Link from "next/link";
import { Reveal } from "@/components/motion";
import { BTN_PRIMARY, Container, Icon, MediaFrame, SectionTitle } from "@/components/ui";
import { ELIGIBILITY } from "@/config/membership";

/** Who can join: a short welcome and checklist beside a photo. */
export function Eligibility() {
  const e = ELIGIBILITY;

  return (
    <section aria-labelledby="who-can-join" className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <SectionTitle eyebrow={e.eyebrow} title={e.title} id="who-can-join" align="left" />
          <Reveal>
            <p className="mt-6 text-[16.5px] leading-[1.85] text-ink-soft">{e.text}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {e.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-[1.6] text-ink">
                  <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-brass text-white">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link href={e.cta.href} className={`${BTN_PRIMARY} mt-10`}>
              {e.cta.label}
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <MediaFrame src={e.image} alt={e.imageAlt} sizes="(min-width: 1024px) 460px, 100vw" priority className="aspect-4/5 rounded-brand" />
          <span aria-hidden className="absolute -top-4 -left-4 -z-10 hidden size-full rounded-brand border-2 border-brass sm:block" />
        </Reveal>
      </Container>
    </section>
  );
}
