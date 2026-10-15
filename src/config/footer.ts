/** Footer widget columns and copyright bar. PLACEHOLDER contact details. */
import { SITE, TOP_BAR } from "./site";

export const FOOTER = {
  about: {
    title: "About the association",
    blurb: `The alumni body of the ${SITE.department}, ${SITE.institution}. Keeping graduates connected, and holding the door open for those coming after us.`,
  },
  links: {
    title: "Useful links",
    items: [
      { label: "Our story & aims", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Alumni Directory", href: "/directory" },
      { label: "Events & Reunions", href: "/events" },
      { label: "Membership & dues", href: "/membership" },
      { label: "Constitution", href: "/about/constitution" },
    ],
  },
  recent: { title: "Recent news" },
  contact: {
    title: "Contact us",
    address: ["Department of Banking & Finance", "The Polytechnic, Ibadan", "Oyo State, Nigeria"],
    phone: TOP_BAR.phone,
    email: TOP_BAR.email,
  },
  legal: `© ${new Date().getFullYear()} ${SITE.shortName}. All rights reserved.`,
  backToTop: "Back to top",
} as const;
