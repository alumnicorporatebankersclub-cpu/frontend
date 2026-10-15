import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion";
import { BTN_SECONDARY, Container, SectionTitle } from "@/components/ui";
import { NEWS_SECTION, POSTS } from "@/config/news";
import { PostCard } from "./post-card";

/** Latest news: three blog cards and a link to the full archive. */
export function LatestNews() {
  return (
    <section aria-labelledby="latest-news" className="bg-stone py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={NEWS_SECTION.eyebrow} title={NEWS_SECTION.title} id="latest-news" />

        <RevealGroup className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <RevealItem key={post.href} className="h-full">
              <PostCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 text-center">
          <Link href={NEWS_SECTION.allLink.href} className={BTN_SECONDARY}>
            {NEWS_SECTION.allLink.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
