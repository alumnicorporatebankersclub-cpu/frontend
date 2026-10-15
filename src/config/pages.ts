/** Shared inner-page copy: breadcrumbs, the About section's sub-navigation and sidebar widgets. */
import { AUTH_NAV, MAIN_NAV, type NavGroup } from "./navigation";
import { TOP_BAR } from "./site";

export const BREADCRUMB = { label: "Breadcrumb", home: { label: "Home", href: "/" } };

const aboutGroup = MAIN_NAV.find((item): item is NavGroup => "children" in item && item.label === "About");

/** The About dropdown's pages, listed in every About page's sidebar. */
export const ABOUT_NAV = {
  crumb: { label: "About", href: "/about" },
  title: "About the association",
  links: aboutGroup?.children ?? [],
};

export const SIDEBAR_HELP = {
  title: "Need a hand?",
  text: "The secretariat is happy to help with membership, dues or finding a classmate.",
  phone: TOP_BAR.phone,
  email: TOP_BAR.email,
};

export const SIDEBAR_JOIN = {
  title: "Not on the register yet?",
  text: "It takes five minutes, and your Class Set is probably already waiting for you.",
  button: { label: AUTH_NAV.join.label, href: AUTH_NAV.join.href },
};
