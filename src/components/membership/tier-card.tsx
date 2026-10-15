import Link from "next/link";
import { BTN_ACCENT, BTN_SECONDARY, Icon } from "@/components/ui";
import type { Tier } from "@/config/membership";
import { cn } from "@/lib/utils";

/** One membership category: price, who it's for, what's included. A badge marks the featured card. */
export function TierCard({ tier, cta }: { tier: Tier; cta: { label: string; href: string } }) {
  const featured = Boolean(tier.badge);

  return (
    <article
      className={cn(
        "relative flex w-full flex-col rounded-brand p-9",
        featured ? "bg-ink text-white shadow-[0_30px_60px_-30px_rgba(22,24,31,0.6)] lg:-my-4 lg:py-13" : "border border-line bg-background",
      )}
    >
      {tier.badge && (
        <p className="absolute -top-3.5 left-9 rounded-brand bg-brass px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
          {tier.badge}
        </p>
      )}
      <h3 className={cn("text-[19px]", featured ? "text-white" : "text-ink")}>{tier.name}</h3>
      <p className={cn("mt-2 text-[14px]", featured ? "text-white/60" : "text-muted")}>{tier.note}</p>

      <p className="mt-7 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-current/10 pb-7">
        <span className={cn("text-[42px] leading-none font-semibold tracking-[-0.03em] tabular-nums", featured ? "text-white" : "text-ink")}>
          {tier.price}
        </span>
        <span className={cn("text-[14px] whitespace-nowrap", featured ? "text-white/60" : "text-muted")}>{tier.period}</span>
      </p>

      <ul className="mt-7 flex-1 space-y-3.5">
        {tier.features.map((feature) => (
          <li key={feature} className={cn("flex gap-3 text-[15px] leading-[1.55]", featured ? "text-white/85" : "text-ink-soft")}>
            <Icon name="check" className="mt-0.5 size-4.5 text-brass" />
            {feature}
          </li>
        ))}
      </ul>

      <Link href={cta.href} className={cn(featured ? BTN_ACCENT : BTN_SECONDARY, "mt-9 w-full")}>
        {cta.label}
      </Link>
    </article>
  );
}
