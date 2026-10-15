import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

/** Shared frame for inner pages: top bar and header, the page, then the footer. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <span id="top" />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
