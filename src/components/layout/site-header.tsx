import Link from "next/link";
import { Container } from "@/components/ui";
import { AUTH_NAV } from "@/config/navigation";
import { getVisibleNav, isNavGroup } from "@/lib/nav";
import { MobileNav } from "./mobile-nav";
import { NavDropdown } from "./nav-dropdown";
import { JOIN_BUTTON_CLASS, NAV_ITEM_CLASS } from "./nav-styles";
import { SiteLogo } from "./site-logo";
import { TopBar } from "./top-bar";

export function SiteHeader() {
  const items = getVisibleNav();

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-line bg-background shadow-[0_2px_12px_-6px_rgba(22,24,31,0.15)]">
        <Container className="flex items-center gap-4 py-4 xl:gap-7">
          <SiteLogo />

          <nav aria-label="Main" className="ml-auto hidden items-center gap-7 xl:flex">
            {items.map((item) =>
              isNavGroup(item) ? (
                <NavDropdown key={item.label} group={item} />
              ) : (
                <Link key={item.href} href={item.href} className={NAV_ITEM_CLASS}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-3 xl:ml-0 xl:gap-5">
            {/* Wrapper owns visibility: NAV_ITEM_CLASS sets inline-flex, which would override `hidden`. */}
            <div className="hidden xl:block">
              <Link href={AUTH_NAV.login.href} className={NAV_ITEM_CLASS}>
                {AUTH_NAV.login.label}
              </Link>
            </div>
            <Link href={AUTH_NAV.join.href} className={JOIN_BUTTON_CLASS}>
              <span className="sm:hidden">{AUTH_NAV.join.shortLabel}</span>
              <span className="hidden sm:inline">{AUTH_NAV.join.label}</span>
            </Link>
            <div className="xl:hidden">
              <MobileNav items={items} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
