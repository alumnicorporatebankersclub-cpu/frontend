import type { Metadata } from "next";
import { CtaBand } from "@/components/home/cta-band";
import { BenefitsGrid } from "@/components/membership/benefits-grid";
import { DuesTiers } from "@/components/membership/dues-tiers";
import { Eligibility } from "@/components/membership/eligibility";
import { JoinSteps } from "@/components/membership/join-steps";
import { PaymentInfo } from "@/components/membership/payment-info";
import { Faq } from "@/components/pages/faq";
import { PageBanner } from "@/components/pages/page-banner";
import { MEMBERSHIP_PAGE } from "@/config/membership";
import { MEMBERSHIP_FAQ } from "@/config/membership-join";

export const metadata: Metadata = { title: MEMBERSHIP_PAGE.title, description: MEMBERSHIP_PAGE.description };

export default function MembershipPage() {
  return (
    <>
      <PageBanner title={MEMBERSHIP_PAGE.title} intro={MEMBERSHIP_PAGE.intro} trail={[{ label: MEMBERSHIP_PAGE.title }]} />
      <Eligibility />
      <BenefitsGrid />
      <DuesTiers />
      <JoinSteps />
      <PaymentInfo />
      <Faq id="membership-faq" {...MEMBERSHIP_FAQ} />
      <CtaBand />
    </>
  );
}
