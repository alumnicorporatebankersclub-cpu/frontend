import type { Metadata } from "next";
import { CtaBand } from "@/components/home/cta-band";
import { PastPresidents } from "@/components/leadership/past-presidents";
import { PresidentFeature } from "@/components/leadership/president-feature";
import { TeamSection } from "@/components/leadership/team-section";
import { PageBanner } from "@/components/pages/page-banner";
import { EXECUTIVE, LEADERSHIP_PAGE, TRUSTEES } from "@/config/leadership";
import { ABOUT_NAV } from "@/config/pages";

export const metadata: Metadata = { title: LEADERSHIP_PAGE.title, description: LEADERSHIP_PAGE.description };

export default function LeadershipPage() {
  return (
    <>
      <PageBanner
        title={LEADERSHIP_PAGE.title}
        intro={LEADERSHIP_PAGE.intro}
        trail={[ABOUT_NAV.crumb, { label: LEADERSHIP_PAGE.title }]}
      />
      <PresidentFeature />
      <TeamSection id="executive-council" {...EXECUTIVE} muted />
      <TeamSection id="trustees" {...TRUSTEES} />
      <div className="border-t border-line" />
      <PastPresidents />
      <CtaBand />
    </>
  );
}
