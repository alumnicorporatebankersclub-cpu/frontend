import Link from "next/link";
import { Icon, MediaFrame } from "@/components/ui";
import { READ_MORE } from "@/config/benefits";
import type { Post } from "@/config/news";

/** Blog card: featured image with category badge, date, title, excerpt and "Read more". */
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-brand bg-background shadow-[0_1px_2px_rgba(22,24,31,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_44px_-24px_rgba(22,24,31,0.3)]">
      <Link href={post.href} tabIndex={-1} aria-hidden className="relative block">
        <MediaFrame
          src={post.image}
          alt=""
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="aspect-16/10 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-4 left-4 rounded-brand bg-brass px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-white uppercase">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <p className="flex items-center gap-2 text-[13px] text-muted">
          <Icon name="calendar" className="size-4" />
          <time>{post.date}</time>
        </p>
        <h3 className="mt-3 text-[18px] leading-snug text-ink">
          <Link href={post.href} className="transition-colors hover:text-brass">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-ink-soft">{post.excerpt}</p>
        <Link
          href={post.href}
          className="mt-6 inline-flex items-center gap-1.5 self-start border-b-2 border-brass pb-0.5 text-[13px] font-semibold tracking-[0.08em] text-ink uppercase transition-colors hover:text-brass"
        >
          {READ_MORE}
          <span className="sr-only">: {post.title}</span>
        </Link>
      </div>
    </article>
  );
}
