/** Contact page copy. Address and phone come from the shared site and footer config. */
import type { IconName } from "@/components/ui/icons";
import { FOOTER } from "./footer";
import { TOP_BAR } from "./site";

export const CONTACT_PAGE = {
  title: "Contact us",
  description: "Get in touch with the alumni secretariat.",
  intro: "Questions about membership, dues, events or the register? A real person reads every message.",
};

export const CONTACT_CARDS: { icon: IconName; title: string; lines: readonly string[]; href?: string }[] = [
  { icon: "pin", title: "Visit us", lines: FOOTER.contact.address },
  { icon: "phone", title: "Call us", lines: [TOP_BAR.phone], href: `tel:${TOP_BAR.phone.replace(/\s/g, "")}` },
  { icon: "mail", title: "Email us", lines: [TOP_BAR.email], href: `mailto:${TOP_BAR.email}` },
  { icon: "clock", title: "Office hours", lines: [TOP_BAR.hours, "Closed on public holidays"] },
];

export const CONTACT_FORM = {
  eyebrow: "Write to us",
  title: "Send the secretariat a message",
  intro: "Fill this in and your email app will open with the message ready to send. We reply within two working days.",
  to: TOP_BAR.email,
  fields: {
    name: { label: "Your name", placeholder: "e.g. Adaeze Okonkwo" },
    email: { label: "Email address", placeholder: "you@example.com" },
    classSet: { label: "Class Set (optional)", placeholder: "e.g. 2009" },
    subject: { label: "What is it about?" },
    message: { label: "Message", placeholder: "How can we help?" },
  },
  subjects: ["Membership & dues", "Alumni register", "Events & reunions", "Scholarships & mentorship", "Something else"],
  classSetPrefix: "Class Set",
  submit: "Open in my email app",
  sent: `Your email app should now be open with your message. If nothing happened, write to us directly at ${TOP_BAR.email}.`,
};

export const MAP = {
  title: "Find us",
  label: "Map showing The Polytechnic, Ibadan",
  src: "https://www.google.com/maps?q=The+Polytechnic+Ibadan&output=embed",
  directions: { label: "Get directions", href: "https://www.google.com/maps/dir/?api=1&destination=The+Polytechnic+Ibadan" },
};

export const FAQ = {
  eyebrow: "Before you write",
  title: "Common questions",
  items: [
    {
      q: "How do I join the association?",
      a: "Register on this website with your name, Class Set and programme. The secretariat checks it against the department's records, usually within a week.",
    },
    {
      q: "How much are the annual dues?",
      a: "Dues are set each year at the Annual General Meeting. The current amount and payment options are on the Membership page.",
    },
    {
      q: "I have changed jobs or moved. How do I update my details?",
      a: "Log in and edit your profile, or send us a message here and we will update the register for you.",
    },
    {
      q: "Can I volunteer as a mentor?",
      a: "Yes, and we would love that. Choose \"Scholarships & mentorship\" in the form and tell us a little about your work.",
    },
  ],
};
