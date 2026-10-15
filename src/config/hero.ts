/** Homepage hero slider. Each slide is a full-width photo with a message and up to two buttons. */
import { AUTH_NAV } from "./navigation";

export interface Person {
  name: string;
  /** Photo in /public. Leave undefined to show initials until a real photo exists. */
  src?: string;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Background photo in /public, e.g. "/images/slides/homecoming.jpg". Without it, a toned backdrop shows. */
  image?: string;
}

export const HERO_SLIDER = {
  /** Time each slide stays up before advancing, ms. */
  intervalMs: 5000,
  labels: { region: "Featured", previous: "Previous slide", next: "Next slide", goTo: "Go to slide", pause: "Pause slideshow", play: "Play slideshow" },
  // PLACEHOLDER: add an `image` to each slide — real photos of members and events work best.
  slides: [
    {
      eyebrow: "Welcome home",
      title: "Once classmates. Always colleagues.",
      text: "The alumni association of the Department of Banking & Finance, The Polytechnic, Ibadan — keeping graduates connected across banks, regulators and boardrooms.",
      primary: { label: AUTH_NAV.join.label, href: AUTH_NAV.join.href },
      secondary: { label: "About us", href: "/about" },
    },
    {
      eyebrow: "Saturday, 14 December 2026",
      title: "Annual Homecoming Dinner",
      text: "Every Class Set, one room. Join us at the Premier Hotel, Ibadan, for our biggest night of the year.",
      primary: { label: "Reserve a seat", href: "/events/homecoming-2026" },
      secondary: { label: "All events", href: "/events" },
    },
    {
      eyebrow: "Mentorship programme",
      title: "Open a door for the next graduate.",
      text: "Give an hour a month to a final-year student or recent graduate. Someone did it for most of us.",
      primary: { label: "Become a mentor", href: "/mentorship" },
    },
  ] as HeroSlide[],
} as const;

/** Duration of the one-shot fade-up used for slide text, ms. */
export const FADE_UP_MS = 700;
