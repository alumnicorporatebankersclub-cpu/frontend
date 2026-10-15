/** Membership page: who can join, benefits and dues. PLACEHOLDER amounts — confirm the 2026 rates. */
import type { IconName } from "@/components/ui/icons";
import { AUTH_NAV } from "./navigation";
import { SITE } from "./site";

const JOIN = { label: AUTH_NAV.join.label, href: AUTH_NAV.join.href };

export const MEMBERSHIP_PAGE = {
  title: "Membership",
  description: `Who can join the ${SITE.shortName}, what membership gives you, and the annual dues.`,
  intro: "If you studied Banking & Finance at The Polytechnic, Ibadan, you already belong here. Membership just makes it official.",
};

export const ELIGIBILITY = {
  eyebrow: "Who can join",
  title: "Every graduate of the department",
  text: `Membership is open to anyone who completed a programme in the ${SITE.department}, ${SITE.institution}. It doesn't matter how long ago, or where life has taken you since.`,
  points: [
    "ND and HND graduates, full-time and part-time",
    "Every Class Set, from the very first to the most recent",
    "Final-year students, as associate members",
    "Former staff of the department, by invitation",
  ],
  image: undefined as string | undefined,
  imageAlt: "Members catching up at a Class Set reunion",
  cta: JOIN,
};

export const MEMBER_BENEFITS: {
  eyebrow: string;
  title: string;
  intro: string;
  items: { icon: IconName; title: string; text: string }[];
} = {
  eyebrow: "Why join",
  title: "What membership gives you",
  intro: "Less a subscription, more a standing invitation. Here is what your membership opens up.",
  items: [
    { icon: "users", title: "The alumni register", text: "Find classmates by Class Set, city or employer, and let them find you." },
    { icon: "calendar", title: "Homecoming & reunions", text: "Member rates for the Annual Homecoming Dinner and Class Set reunions." },
    { icon: "handshake", title: "Mentorship", text: "Mentor a student, or be mentored by someone a few steps ahead of you." },
    { icon: "briefcase", title: "Career opportunities", text: "Openings and referrals shared first with members, by members." },
    { icon: "heart", title: "Welfare support", text: "Practical help for members and their families when life takes a hard turn." },
    { icon: "award", title: "A vote and a voice", text: "Vote at the Annual General Meeting, and stand for office after two years." },
  ],
};

export interface Tier {
  name: string;
  price: string;
  period: string;
  note: string;
  features: string[];
  badge?: string;
}

export const DUES = {
  eyebrow: "Annual dues",
  title: "Membership categories",
  intro: "Dues are set each year at the Annual General Meeting. These are the rates for 2026.",
  cta: JOIN,
  tiers: [
    {
      name: "Recent graduate",
      price: "₦5,000",
      period: "per year",
      note: "For your first three years after graduating",
      features: ["Full access to the alumni register", "Vote at the Annual General Meeting", "Join the mentorship programme", "Moves to Full membership after three years"],
    },
    {
      name: "Full member",
      price: "₦15,000",
      period: "per year",
      note: "For graduates of more than three years",
      badge: "Most members",
      features: ["Everything in Recent graduate", "Eligible for welfare support", "Mentor students and new graduates", "Stand for office after two years"],
    },
    {
      name: "Life member",
      price: "₦150,000",
      period: "one payment",
      note: "Pay once and never think about dues again",
      features: ["Everything in Full member", "No annual dues, ever", "Your name on the Life Members' roll"],
    },
  ] satisfies Tier[],
};
