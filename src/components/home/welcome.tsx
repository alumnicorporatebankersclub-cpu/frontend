import Link from "next/link";
import { Reveal } from "@/components/motion";
import { BTN_PRIMARY, Container, MediaFrame } from "@/components/ui";
import { WELCOME } from "@/config/home";

/** Welcome message: the president's portrait beside a short letter and signature. */
export function Welcome() {
  const w = WELCOME;

  return (
    <section aria-labelledby="welcome" className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="relative">
          <MediaFrame src={w.image} alt={`${w.name}, ${w.role}`} sizes="(min-width: 1024px) 480px, 100vw" className="aspect-4/5 rounded-brand" />
          {/* Offset brass frame behind the photo, a common theme flourish. */}
          <span aria-hidden className="absolute -right-4 -bottom-4 -z-10 hidden size-full rounded-brand border-2 border-brass sm:block" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-brass uppercase">{w.eyebrow}</p>
          <h2 id="welcome" className="mt-3 text-[28px] leading-tight text-ink sm:text-[34px]">
            {w.title}
          </h2>
          <span aria-hidden className="mt-5 block h-[3px] w-12 bg-brass" />
          {w.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-6 text-[16px] leading-[1.8] text-ink-soft">
              {p}
            </p>
          ))}
          <div className="mt-8 border-l-[3px] border-brass pl-4">
            <p className="text-[16px] font-semibold text-ink">{w.name}</p>
            <p className="text-[14px] text-muted">{w.role}</p>
          </div>
          <Link href={w.link.href} className={`${BTN_PRIMARY} mt-9`}>
            {w.link.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
