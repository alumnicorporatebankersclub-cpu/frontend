import type { Metadata } from "next";
import { Aims } from "@/components/about/aims";
import { MissionVision } from "@/components/about/mission-vision";
import { Story } from "@/components/about/story";
import { Timeline } from "@/components/about/timeline";
import { CtaBand } from "@/components/home/cta-band";
import { StatsBand } from "@/components/home/stats-band";
import { AboutSidebar } from "@/components/pages/about-sidebar";
import { ContentWithSidebar } from "@/components/pages/content-with-sidebar";
import { PageBanner } from "@/components/pages/page-banner";
import { ABOUT_PAGE } from "@/config/about";
import { ABOUT_NAV } from "@/config/pages";

export const metadata: Metadata = { title: ABOUT_PAGE.title, description: ABOUT_PAGE.description };

export default function AboutPage() {
  return (
    <>
      <PageBanner title={ABOUT_PAGE.title} intro={ABOUT_PAGE.intro} trail={[{ label: ABOUT_NAV.crumb.label }]} />
      <ContentWithSidebar sidebar={<AboutSidebar current="/about" />}>
        <Story />
      </ContentWithSidebar>
      <MissionVision />
      <Aims />
      <StatsBand />
      <Timeline />
      <CtaBand />
    </>
  );
}
