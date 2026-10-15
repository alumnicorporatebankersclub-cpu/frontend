import { Reveal } from "@/components/motion";
import { Container, MediaFrame } from "@/components/ui";
import { PRESIDENT } from "@/config/leadership";

/** The President, featured: portrait with an offset frame beside a short biography and quote. */
export function PresidentFeature() {
  const p = PRESIDENT;

  return (
    <section aria-labelledby="president" className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <MediaFrame src={p.image} alt={`${p.name}, ${p.role}`} sizes="(min-width: 1024px) 480px, 100vw" priority className="aspect-4/5 rounded-brand" />
          <span aria-hidden className="absolute -right-4 -bottom-4 -z-10 hidden size-full rounded-brand border-2 border-brass sm:block" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-brass uppercase">{p.eyebrow}</p>
          <h2 id="president" className="mt-3 text-[30px] leading-tight text-ink sm:text-[36px]">
            {p.name}
          </h2>
          <p className="mt-2 text-[14px] font-medium text-muted">{p.role}</p>
          <span aria-hidden className="mt-5 block h-[3px] w-12 bg-brass" />
          {p.bio.map((para) => (
            <p key={para.slice(0, 24)} className="mt-6 text-[16px] leading-[1.85] text-ink-soft">
              {para}
            </p>
          ))}
          <blockquote className="mt-9 border-l-[3px] border-brass pl-5 text-[19px] leading-snug font-medium text-ink italic">
            &ldquo;{p.quote}&rdquo;
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
