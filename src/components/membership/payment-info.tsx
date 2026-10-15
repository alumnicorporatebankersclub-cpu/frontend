import { Reveal } from "@/components/motion";
import { Container, SectionTitle } from "@/components/ui";
import { ALLOCATION, PAYMENT } from "@/config/membership-join";

/** How to pay dues by transfer, beside a plain breakdown of where the money goes. */
export function PaymentInfo() {
  return (
    <section aria-labelledby="paying-dues" className="py-20 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTitle eyebrow={PAYMENT.eyebrow} title={PAYMENT.title} intro={PAYMENT.intro} id="paying-dues" align="left" />
          <Reveal>
            <dl className="mt-9 divide-y divide-line rounded-brand border border-line">
              {PAYMENT.account.map((row) => (
                <div key={row.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4">
                  <dt className="text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">{row.label}</dt>
                  <dd className="text-[15px] font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[15px] text-ink-soft">
              {PAYMENT.receipt.text}{" "}
              <a href={`mailto:${PAYMENT.receipt.email}`} className="font-semibold text-brass hover:underline">
                {PAYMENT.receipt.email}
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="self-start rounded-brand bg-stone p-8 sm:p-10">
          <h2 className="text-[22px] text-ink">{ALLOCATION.title}</h2>
          <ul className="mt-8 space-y-6">
            {ALLOCATION.items.map((item) => (
              <li key={item.label}>
                <p className="flex justify-between text-[15px] text-ink">
                  {item.label}
                  <span className="font-semibold tabular-nums">{item.value}%</span>
                </p>
                <span aria-hidden className="mt-2.5 block h-2 overflow-hidden rounded-full bg-background">
                  <span className="block h-full rounded-full bg-brass" style={{ width: `${item.value}%` }} />
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[13px] leading-[1.6] text-muted">{ALLOCATION.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
