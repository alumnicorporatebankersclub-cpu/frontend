/** Homepage copy: welcome message, statistics band and closing call to action. */
import { AUTH_NAV } from "./navigation";

export const WELCOME = {
  eyebrow: "Welcome message",
  title: "A word from the President",
  paragraphs: [
    "We left the lecture halls as classmates. This association exists so that we remain colleagues — and so that every new graduate walks into the profession with more doors open than we had.",
    "Whether you graduated last year or thirty years ago, there is a place for you here: at our Homecoming, in your Class Set, and on the alumni register.",
  ],
  name: "Dr. Olumide Adebayo", // PLACEHOLDER
  role: "President, Class Set of 2004", // PLACEHOLDER
  /** Portrait in /public. PLACEHOLDER: add the president's photo. */
  image: undefined as string | undefined,
  link: { label: "Read more", href: "/about" },
};

export const STATS_LABEL = "The association in numbers";

export const STATS = [
  { value: "1,200+", label: "Registered alumni" }, // PLACEHOLDER
  { value: "30", label: "Class Sets" }, // PLACEHOLDER
  { value: "25", label: "Years together" }, // PLACEHOLDER
  { value: "₦4.2m", label: "Scholarships awarded" }, // PLACEHOLDER
] as const;

export const CTA_BAND = {
  title: "Are you a graduate of Banking & Finance?",
  text: "Join the alumni register in five minutes and reconnect with your Class Set.",
  button: { label: AUTH_NAV.join.label, href: AUTH_NAV.join.href },
};
