import Link from "next/link";
import { Container, Crest, Icon } from "@/components/ui";
import { FOOTER } from "@/config/footer";
import { POSTS } from "@/config/news";
import { SITE } from "@/config/site";
import { FooterWidget } from "./footer-widget";

const LINK = "text-[14px] text-white/65 transition-colors hover:text-brass";

/** Dark four-widget footer with a copyright bar, the classic WordPress theme footer. */
export function SiteFooter() {
  const { about, links, recent, contact } = FOOTER;

  return (
    <footer className="mt-auto border-t border-white/10 bg-ink text-white/65">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <FooterWidget title={about.title}>
          <div className="flex items-center gap-3">
            <Crest size={44} decorative className="size-11 rounded-full bg-white" />
            <p className="text-[14px] leading-tight font-semibold text-white">
              {SITE.logoLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
          </div>
          <p className="mt-5 text-[14px] leading-[1.75]">{about.blurb}</p>
          <p className="mt-3 text-[13px] text-brass italic">{SITE.motto}</p>
        </FooterWidget>

        <FooterWidget title={links.title} as="nav">
          <ul className="space-y-3">
            {links.items.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={LINK}>
                  <span aria-hidden className="mr-2 text-brass">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterWidget>

        <FooterWidget title={recent.title}>
          <ul className="space-y-4">
            {POSTS.map((post) => (
              <li key={post.href} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <Link href={post.href} className="block text-[14px] leading-snug text-white/85 transition-colors hover:text-brass">
                  {post.title}
                </Link>
                <span className="mt-1 block text-[12px] text-white/45">{post.date}</span>
              </li>
            ))}
          </ul>
        </FooterWidget>

        <FooterWidget title={contact.title} as="address" className="not-italic">
          <p className="flex gap-3 text-[14px] leading-[1.7]">
            <Icon name="pin" className="mt-1 size-4 shrink-0 text-brass" />
            <span>
              {contact.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </span>
          </p>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={`mt-4 flex items-center gap-3 ${LINK}`}>
            <Icon name="phone" className="size-4 text-brass" />
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className={`mt-3 flex items-center gap-3 break-all ${LINK}`}>
            <Icon name="mail" className="size-4 shrink-0 text-brass" />
            {contact.email}
          </a>
        </FooterWidget>
      </Container>

      <div className="border-t border-white/10 bg-black/20">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-[12.5px] sm:flex-row">
          <p>{FOOTER.legal}</p>
          <a href="#top" className="flex items-center gap-2 transition-colors hover:text-brass">
            {FOOTER.backToTop}
            <Icon name="arrowUp" className="size-3.5" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
