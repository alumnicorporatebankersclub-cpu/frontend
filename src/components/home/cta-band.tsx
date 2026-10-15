import Link from "next/link";
import { Reveal } from "@/components/motion";
import { BTN_ACCENT, Container } from "@/components/ui";
import { CTA_BAND } from "@/config/home";

/** Full-width call-to-action strip on charcoal. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-band" className="bg-ink py-14">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 id="cta-band" className="text-[24px] leading-tight text-white sm:text-[30px]">
              {CTA_BAND.title}
            </h2>
            <p className="mt-2 text-[15.5px] text-white/70">{CTA_BAND.text}</p>
          </div>
          <Link href={CTA_BAND.button.href} className={`${BTN_ACCENT} shrink-0`}>
            {CTA_BAND.button.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
