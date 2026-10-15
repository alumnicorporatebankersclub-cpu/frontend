import { Container, Icon } from "@/components/ui";
import { TOP_BAR } from "@/config/site";

/** Charcoal strip above the header: phone, email and office hours; social profiles on the right. */
export function TopBar() {
  const t = TOP_BAR;

  return (
    <div className="bg-ink text-[12.5px] text-white/70">
      <Container className="flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-white">
            <Icon name="phone" className="size-3.5 text-brass" />
            {t.phone}
          </a>
          <a href={`mailto:${t.email}`} className="hidden items-center gap-2 transition-colors hover:text-white sm:flex">
            <Icon name="mail" className="size-3.5 text-brass" />
            {t.email}
          </a>
          <span className="hidden items-center gap-2 lg:flex">
            <Icon name="clock" className="size-3.5 text-brass" />
            {t.hours}
          </span>
        </div>
        <ul className="flex items-center gap-1">
          {t.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-7 place-items-center rounded-brand text-[11px] font-semibold transition-colors hover:bg-brass hover:text-white"
              >
                {s.short}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
