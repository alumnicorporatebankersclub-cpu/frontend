import type { ReactNode } from "react";

interface FooterWidgetProps {
  title: string;
  as?: "div" | "nav" | "address";
  className?: string;
  children: ReactNode;
}

/** One footer column: an uppercase title with a short brass underline. */
export function FooterWidget({ title, as: Tag = "div", className = "", children }: FooterWidgetProps) {
  const label = Tag === "nav" ? { "aria-label": title } : {};

  return (
    <Tag className={className} {...label}>
      <h2 className="relative mb-7 pb-3 text-[14px] font-semibold tracking-[0.1em] text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-10 after:bg-brass">
        {title}
      </h2>
      {children}
    </Tag>
  );
}
