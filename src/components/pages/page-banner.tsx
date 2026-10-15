import Link from "next/link";
import { Container, Crest } from "@/components/ui";
import { BREADCRUMB } from "@/config/pages";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  intro?: string;
  /** Breadcrumb trail after "Home"; the last entry is the current page. */
  trail: Crumb[];
  /** Extra bottom space so the next section can overlap the banner. */
  overlap?: boolean;
}

/** Page-title banner with breadcrumbs: the standard top of every inner page. */
export function PageBanner({ title, intro, trail, overlap = false }: PageBannerProps) {
  const crumbs: Crumb[] = [BREADCRUMB.home, ...trail];

  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-0 bg-linear-to-br from-[#2b2722] to-ink" />
      <Crest
        size={360}
        decorative
        className="absolute top-1/2 -right-10 hidden w-90 -translate-y-1/2 rounded-full opacity-[0.06] grayscale md:block"
      />

      <Container className={cn("relative py-16 sm:py-20", overlap && "pb-24 sm:pb-28")}>
        <div className="fade-up max-w-2xl">
          <h1 className="text-[34px] leading-tight text-white sm:text-[46px]">{title}</h1>
          {intro && <p className="mt-4 text-[16px] leading-[1.7] text-white/70 sm:text-[17px]">{intro}</p>}
        </div>

        <nav aria-label={BREADCRUMB.label} className="mt-7">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-white/60">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {last || !crumb.href ? (
                    <span aria-current={last ? "page" : undefined} className={last ? "text-brass" : undefined}>
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  )}
                  {!last && <span aria-hidden>/</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
