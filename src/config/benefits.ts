/** "What we do" feature boxes. `icon` picks a glyph from components/ui/icons.tsx. */
import type { IconName } from "@/components/ui/icons";

export const BENEFITS_SECTION = {
  eyebrow: "What we do",
  title: "Serving our alumni community",
  intro: "Four things, done well and done every year, by graduates who remember what it felt like to be starting out.",
};

export const BENEFITS: { icon: IconName; title: string; body: string; href: string }[] = [
  {
    icon: "users",
    title: "Alumni Directory",
    body: "Search the register by Class Set, city or employer and find the classmates you lost touch with.",
    href: "/directory",
  },
  {
    icon: "calendar",
    title: "Events & Reunions",
    body: "The Annual Homecoming every December, and Class Set reunions throughout the year.",
    href: "/events",
  },
  {
    icon: "handshake",
    title: "Mentorship",
    body: "Experienced alumni guide final-year students and recent graduates into the profession.",
    href: "/mentorship",
  },
  {
    icon: "award",
    title: "Scholarships",
    body: "Dues fund scholarships for deserving students and support for members in hardship.",
    href: "/membership",
  },
];

export const READ_MORE = "Read more";
