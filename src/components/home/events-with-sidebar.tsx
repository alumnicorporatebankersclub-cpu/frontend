import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion";
import { ArrowLink, Container, Icon, SectionTitle } from "@/components/ui";
import { EVENT_LABELS, EVENTS, EVENTS_SECTION } from "@/config/events";
import { Sidebar } from "./sidebar";

/** Main column of upcoming events with a widget sidebar beside it, the classic blog layout. */
export function EventsWithSidebar() {
  return (
    <section aria-labelledby="upcoming-events" className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-10">
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle eyebrow={EVENTS_SECTION.eyebrow} title={EVENTS_SECTION.title} id="upcoming-events" align="left" />
            <ArrowLink href={EVENTS_SECTION.allLink.href}>{EVENTS_SECTION.allLink.label}</ArrowLink>
          </div>

          <RevealGroup as="ul" className="mt-10 flex flex-col gap-5">
            {EVENTS.map((event) => (
              <RevealItem as="li" key={event.href}>
                <article className="flex gap-5 rounded-brand border border-line bg-background p-5 transition-shadow hover:shadow-[0_16px_36px_-24px_rgba(22,24,31,0.35)] sm:gap-7 sm:p-6">
                  <p className="flex w-18 shrink-0 flex-col items-center justify-center rounded-brand bg-ink py-3 text-white sm:w-22">
                    <span className="text-[28px] leading-none font-semibold tabular-nums sm:text-[32px]">{event.day}</span>
                    <span className="mt-1.5 text-[11px] font-semibold tracking-[0.14em] text-brass uppercase">{event.month}</span>
                  </p>
                  <div className="min-w-0">
                    <h3 className="text-[17px] leading-snug text-ink sm:text-[19px]">
                      <Link href={event.href} className="transition-colors hover:text-brass">
                        {event.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-muted">
                      <span className="flex items-center gap-1.5"><Icon name="clock" className="size-4" />{event.time}</span>
                      <span className="flex items-center gap-1.5"><Icon name="pin" className="size-4" />{event.place}</span>
                    </p>
                    <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-soft">{event.note}</p>
                    <Link href={event.href} className="mt-3 inline-block text-[13px] font-semibold text-brass hover:underline">
                      {EVENT_LABELS.details} <span aria-hidden>→</span>
                      <span className="sr-only">: {event.title}</span>
                    </Link>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Sidebar />
      </Container>
    </section>
  );
}
