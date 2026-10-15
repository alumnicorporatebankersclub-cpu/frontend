"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { AUTH_NAV } from "@/config/navigation";
import { isNavGroup, type NavItem, type NavLink } from "@/lib/nav";
import { NavLinkLabel } from "./nav-link-label";

const ROW_CLASS = "flex items-center py-3 text-[15px] font-semibold text-ink";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const renderLink = (link: NavLink, indent = false) => (
    <li key={link.href}>
      <Link href={link.href} onClick={close} className={indent ? `${ROW_CLASS} pl-4 font-normal text-foreground` : ROW_CLASS}>
        <NavLinkLabel link={link} />
      </Link>
    </li>
  );

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-brand border border-line text-ink"
      >
        <svg aria-hidden viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          {open ? <path d="M5 5l10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>

      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 border-b border-line bg-background px-4 pb-4"
      >
        <ul className="divide-y divide-line">
          {items.map((item) =>
            isNavGroup(item) ? (
              <li key={item.label} className="py-2">
                <p className="pt-1 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">{item.label}</p>
                <ul>{item.children.map((link) => renderLink(link, true))}</ul>
              </li>
            ) : (
              renderLink(item)
            ),
          )}
          {renderLink(AUTH_NAV.login)}
        </ul>
      </nav>
    </>
  );
}
