import Link from "next/link";
import type { ReactNode } from "react";
import { Widget } from "@/components/home/widget";
import { BTN_ACCENT, Icon } from "@/components/ui";
import { ABOUT_NAV, SIDEBAR_HELP, SIDEBAR_JOIN } from "@/config/pages";
import { cn } from "@/lib/utils";

const CONTACT_LINK = "flex items-center gap-3 text-[14px] text-ink-soft transition-colors hover:text-brass";

interface AboutSidebarProps {
  /** Path of the page being viewed, highlighted in the section menu. */
  current: string;
  /** Page-specific widget, shown last and kept in view while scrolling on large screens. */
  extra?: ReactNode;
}

/** Sidebar for the About pages: section menu, secretariat contact, join prompt. */
export function AboutSidebar({ current, extra }: AboutSidebarProps) {
  return (
    <>
      <Widget title={ABOUT_NAV.title}>
        <ul className="divide-y divide-line">
          {ABOUT_NAV.links.map((link) => {
            const active = link.href === current;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-3 py-3 text-[14.5px] transition-colors hover:text-brass",
                    active ? "font-semibold text-brass" : "text-ink-soft",
                  )}
                >
                  {link.label}
                  <Icon name="chevronRight" className="size-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Widget>

      <Widget title={SIDEBAR_HELP.title}>
        <p className="text-[14.5px] leading-[1.7] text-ink-soft">{SIDEBAR_HELP.text}</p>
        <a href={`tel:${SIDEBAR_HELP.phone.replace(/\s/g, "")}`} className={`mt-5 ${CONTACT_LINK}`}>
          <Icon name="phone" className="size-4 text-brass" />
          {SIDEBAR_HELP.phone}
        </a>
        <a href={`mailto:${SIDEBAR_HELP.email}`} className={`mt-3 break-all ${CONTACT_LINK}`}>
          <Icon name="mail" className="size-4 text-brass" />
          {SIDEBAR_HELP.email}
        </a>
      </Widget>

      <div className="rounded-brand bg-ink p-7">
        <h2 className="text-[18px] leading-snug text-white">{SIDEBAR_JOIN.title}</h2>
        <p className="mt-3 text-[14.5px] leading-[1.7] text-white/70">{SIDEBAR_JOIN.text}</p>
        <Link href={SIDEBAR_JOIN.button.href} className={`${BTN_ACCENT} mt-6 w-full`}>
          {SIDEBAR_JOIN.button.label}
        </Link>
      </div>

      {extra && <div className="lg:sticky lg:top-28">{extra}</div>}
    </>
  );
}
