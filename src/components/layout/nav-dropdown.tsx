"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavGroup } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { NavLinkLabel } from "./nav-link-label";
import { NAV_ITEM_CLASS } from "./nav-styles";

export function NavDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={NAV_ITEM_CLASS}
      >
        {group.label}
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={cn("size-3 transition-transform", open && "rotate-180")}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className="absolute top-full left-0 z-20 mt-2 min-w-60 rounded-brand border border-line bg-background py-2 shadow-[0_8px_24px_rgba(22,24,31,0.08)]"
      >
        {group.children.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-2.5 text-[14px] text-ink-soft hover:bg-stone hover:text-ink"
            >
              <NavLinkLabel link={link} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
