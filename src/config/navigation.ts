/** Main site navigation. Order here is the order shown in the header. */

export type Phase = 1 | 2 | 3;

export interface NavLink {
  label: string;
  href: string;
  /** Feature phase this link belongs to; hidden while phase > LIVE_PHASE. Defaults to 1. */
  phase?: Phase;
  /** Visitors are sent to log in or register; shown with a "Members" tag. */
  membersOnly?: boolean;
}

export interface NavGroup {
  label: string;
  phase?: Phase;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const MAIN_NAV: NavItem[] = [
  {
    label: "About",
    children: [
      { label: "Our story & aims", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Constitution", href: "/about/constitution" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Membership", href: "/membership" },
  {
    label: "Community",
    children: [
      { label: "Alumni Directory", href: "/directory", membersOnly: true },
      { label: "Events & Reunions", href: "/events" },
      { label: "News", href: "/news" },
      { label: "Success Stories", href: "/success-stories", phase: 3 },
    ],
  },
  { label: "Support", href: "/support", phase: 2 },
];

export const AUTH_NAV = {
  login: { label: "Log in", href: "/login" },
  join: { label: "Join the association", shortLabel: "Join", href: "/register" },
} as const;

export const MEMBERS_ONLY_TAG = "Members";
