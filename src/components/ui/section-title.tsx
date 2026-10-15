import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  align?: "center" | "left";
  /** For dark backgrounds. */
  inverse?: boolean;
  className?: string;
}

/** Classic theme section heading: small accent label, heading, short brass rule, optional intro. */
export function SectionTitle({ eyebrow, title, intro, id, align = "center", inverse = false, className }: SectionTitleProps) {
  const center = align === "center";

  return (
    <Reveal className={cn(center && "mx-auto text-center", "max-w-2xl", className)}>
      <p className="text-[12px] font-semibold tracking-[0.16em] text-brass uppercase">{eyebrow}</p>
      <h2 id={id} className={cn("mt-3 text-[28px] leading-tight sm:text-[34px]", inverse ? "text-white" : "text-ink")}>
        {title}
      </h2>
      <span aria-hidden className={cn("mt-5 block h-[3px] w-12 bg-brass", center && "mx-auto")} />
      {intro && (
        <p className={cn("mt-5 text-[15.5px] leading-[1.75]", inverse ? "text-white/70" : "text-ink-soft")}>{intro}</p>
      )}
    </Reveal>
  );
}
