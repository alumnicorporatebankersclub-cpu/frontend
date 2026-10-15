/** Membership page, continued: how to join, paying dues, where dues go, and questions. */
import { AUTH_NAV } from "./navigation";
import { SITE, TOP_BAR } from "./site";

export const JOIN_STEPS = {
  eyebrow: "How to join",
  title: "Four steps, about five minutes",
  steps: [
    { title: "Register", text: "Create your account with your name, Class Set and programme." },
    { title: "We verify", text: "The secretariat checks your details against the department's records, usually within a week." },
    { title: "Pay your dues", text: "Choose your category and pay by bank transfer, then send us the receipt." },
    { title: "Welcome home", text: "Your profile goes live on the register, and your Class Set hears you're back." },
  ],
  cta: { label: AUTH_NAV.join.label, href: AUTH_NAV.join.href },
};

export const PAYMENT = {
  eyebrow: "Paying your dues",
  title: "Bank transfer details",
  intro: "Online payment is coming soon. Until then, please pay by transfer and use your surname and Class Set as the reference.",
  // PLACEHOLDER: the association's real bank details.
  account: [
    { label: "Bank", value: "To be confirmed" },
    { label: "Account name", value: SITE.shortName },
    { label: "Account number", value: "To be confirmed" },
    { label: "Reference", value: "Surname + Class Set, e.g. ADEYEMI 2009" },
  ],
  receipt: { text: "Then email your receipt to", email: TOP_BAR.email },
};

export const ALLOCATION = {
  title: "Where your dues go",
  // PLACEHOLDER: percentages from the latest audited accounts.
  note: "From the audited 2025 accounts, presented at the last Annual General Meeting.",
  items: [
    { label: "Scholarships & prizes", value: 40 },
    { label: "Member welfare", value: 25 },
    { label: "Homecoming & events", value: 20 },
    { label: "Administration", value: 15 },
  ],
};

export const MEMBERSHIP_FAQ = {
  eyebrow: "Questions",
  title: "Membership questions",
  items: [
    {
      q: "I graduated a long time ago. Can I still join?",
      a: "Of course. Some of our most active members graduated in the 1980s. If you studied in the department, you're welcome.",
    },
    {
      q: "What does it mean to be a financial member?",
      a: "Simply that your dues for the current year are paid. Financial members can vote at the Annual General Meeting and apply for welfare support.",
    },
    {
      q: "I've missed a few years of dues. What happens?",
      a: "Nothing dramatic. Pay the current year to become financial again; you don't have to settle past years unless you want to.",
    },
    {
      q: "Can I become a life member later?",
      a: "Yes, at any time. Write to the secretariat and we'll deduct any dues you've already paid this year.",
    },
  ],
};
