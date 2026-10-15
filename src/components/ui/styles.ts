/**
 * Shared class strings so buttons, links and labels look identical everywhere,
 * whether they render as <button>, <Link> or <a>. Safe to import from server and client.
 */

/** Solid ink button: the one primary action in any view. */
export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-brand bg-ink px-6 py-3.5 text-[14px] font-semibold tracking-[0.01em] text-white transition-colors hover:bg-ink-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/** Outlined ink button: the quieter companion to BTN_PRIMARY. */
export const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-brand border border-ink/25 px-6 py-3.5 text-[14px] font-semibold tracking-[0.01em] text-ink transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/** Underlined text link with a small arrow that nudges on hover. Pair with <ArrowLink>. */
export const TEXT_LINK =
  "group inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink underline decoration-ink/25 decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink";

/** Small uppercase label above headings and in footers. */
export const EYEBROW = "text-[11px] font-semibold tracking-[0.16em] text-muted uppercase";

/** Brass button for the main action on dark backgrounds (hero slides, CTA band). */
export const BTN_ACCENT =
  "inline-flex items-center justify-center gap-2 rounded-brand bg-brass px-7 py-3.5 text-[14px] font-semibold tracking-[0.01em] text-white transition-colors hover:bg-[#8c6f33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** White outline button for secondary actions on dark backgrounds. */
export const BTN_LIGHT =
  "inline-flex items-center justify-center gap-2 rounded-brand border border-white/60 px-7 py-3.5 text-[14px] font-semibold tracking-[0.01em] text-white transition-colors hover:border-white hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
