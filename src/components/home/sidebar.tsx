import Link from "next/link";
import { Icon } from "@/components/ui";
import { POSTS, SIDEBAR } from "@/config/news";
import { Widget } from "./widget";

const LIST_LINK = "flex items-center justify-between gap-3 py-3 text-[14.5px] text-ink-soft transition-colors hover:text-brass";

/** Blog-style sidebar: search, recent posts, categories with counts, and quick links. */
export function Sidebar() {
  const s = SIDEBAR;

  return (
    <aside className="flex flex-col gap-7">
      <Widget title={s.search.title}>
        <form action={s.search.action} method="get" role="search" className="flex">
          <label htmlFor="sidebar-search" className="sr-only">
            {s.search.title}
          </label>
          <input
            id="sidebar-search"
            name="q"
            type="search"
            placeholder={s.search.placeholder}
            className="h-11 min-w-0 flex-1 rounded-l-brand border border-r-0 border-line bg-background px-3 text-[14px] text-ink placeholder:text-muted focus-visible:border-ink focus-visible:outline-none"
          />
          <button type="submit" aria-label={s.search.button} className="grid size-11 place-items-center rounded-r-brand bg-ink text-white transition-colors hover:bg-brass">
            <Icon name="search" className="size-4.5" />
          </button>
        </form>
      </Widget>

      <Widget title={s.recent.title}>
        <ul className="divide-y divide-line">
          {POSTS.map((post) => (
            <li key={post.href} className="py-3 first:pt-0 last:pb-0">
              <Link href={post.href} className="text-[14.5px] leading-snug font-medium text-ink transition-colors hover:text-brass">
                {post.title}
              </Link>
              <p className="mt-1 text-[12.5px] text-muted">{post.date}</p>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title={s.categories.title}>
        <ul className="-my-3 divide-y divide-line">
          {s.categories.items.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className={LIST_LINK}>
                {c.label}
                <span className="rounded-brand bg-stone px-2 py-0.5 text-[12px] text-muted tabular-nums">{c.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Widget>

      <Widget title={s.quickLinks.title}>
        <ul className="-my-3 divide-y divide-line">
          {s.quickLinks.items.map((q) => (
            <li key={q.href}>
              <Link href={q.href} className={LIST_LINK}>
                {q.label}
                <Icon name="chevronRight" className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Widget>
    </aside>
  );
}
