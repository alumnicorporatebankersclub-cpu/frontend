import type { Metadata } from "next";
import { Articles } from "@/components/constitution/articles";
import { ConstitutionNotice } from "@/components/constitution/constitution-notice";
import { TocWidget } from "@/components/constitution/toc-widget";
import { AboutSidebar } from "@/components/pages/about-sidebar";
import { ContentWithSidebar } from "@/components/pages/content-with-sidebar";
import { PageBanner } from "@/components/pages/page-banner";
import { CONSTITUTION_PAGE } from "@/config/constitution";
import { ABOUT_NAV } from "@/config/pages";

export const metadata: Metadata = { title: CONSTITUTION_PAGE.title, description: CONSTITUTION_PAGE.description };

export default function ConstitutionPage() {
  return (
    <>
      <PageBanner
        title={CONSTITUTION_PAGE.title}
        intro={CONSTITUTION_PAGE.intro}
        trail={[ABOUT_NAV.crumb, { label: CONSTITUTION_PAGE.title }]}
      />
      <ContentWithSidebar sidebar={<AboutSidebar current="/about/constitution" extra={<TocWidget />} />}>
        <ConstitutionNotice />
        <Articles />
      </ContentWithSidebar>
    </>
  );
}
