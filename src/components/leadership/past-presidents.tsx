import Link from "next/link";
import { Reveal } from "@/components/motion";
import { Container, Icon, SectionTitle } from "@/components/ui";
import { PAST_PRESIDENTS } from "@/config/leadership";

/** Roll of past presidents, then a note on the next election. */
export function PastPresidents() {
  const p = PAST_PRESIDENTS;

  return (
    <section aria-labelledby="past-presidents" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow={p.eyebrow} title={p.title} id="past-presidents" />

          <Reveal className="mt-12 overflow-x-auto rounded-brand border border-line">
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">{p.caption}</caption>
              <thead className="bg-ink text-[12px] tracking-[0.12em] text-white uppercase">
                <tr>
                  {p.columns.map((col) => (
                    <th key={col} scope="col" className="px-6 py-4 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {p.rows.map(([term, name, classSet]) => (
                  <tr key={term} className="transition-colors even:bg-stone/60 hover:bg-stone">
                    <td className="px-6 py-4 whitespace-nowrap text-muted tabular-nums">{term}</td>
                    <th scope="row" className="px-6 py-4 font-medium text-ink">
                      {name}
                    </th>
                    <td className="px-6 py-4 text-ink-soft tabular-nums">{classSet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="mt-10 flex gap-4 rounded-brand border-l-[3px] border-brass bg-stone p-6">
            <Icon name="info" className="mt-0.5 text-brass" />
            <div>
              <p className="text-[15px] leading-[1.75] text-ink-soft">{p.note.text}</p>
              <Link href={p.note.link.href} className="mt-2 inline-block text-[14px] font-semibold text-brass hover:underline">
                {p.note.link.label} <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
