import type { ReactNode } from "react";

/** Sidebar widget box: a title with a short brass underline, then content. */
export function Widget({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-brand border border-line bg-background p-7">
      <h2 className="relative pb-4 text-[16px] text-ink after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-10 after:bg-brass">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
