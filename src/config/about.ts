/** "Our story & aims" page copy. PLACEHOLDER history, years and photo — confirm with the executive. */
import type { IconName } from "@/components/ui/icons";
import { SITE } from "./site";

export const ABOUT_PAGE = {
  title: "Our story & aims",
  description: `Who we are, where we came from and what the ${SITE.shortName} sets out to do.`,
  intro: "Who we are, where we came from, and what we are here to do.",
};

export const STORY = {
  eyebrow: "Who we are",
  title: "A department's graduates, still looking out for one another",
  image: undefined as string | undefined,
  imageAlt: "Members of the association at the Annual Homecoming",
  paragraphs: [
    `The ${SITE.shortName} brings together everyone who has studied in the ${SITE.department} at ${SITE.institution} — National Diploma and Higher National Diploma, full-time and part-time, every Class Set.`,
    "It began the way most good things do: a few graduates kept running into each other in banking halls and at professional exams, and decided the department deserved more than chance meetings. A phone list became a reunion, the reunion became an annual Homecoming, and the Homecoming became a registered association with a constitution, elected officers and a scholarship fund.",
    "Today our members work across commercial and microfinance banks, the Central Bank, insurance, audit, fintech and public service. Some lead institutions; some are in their first year on the job. All of them sat in the same lecture halls, and we think that still counts for something.",
  ],
  motto: { text: SITE.motto, cite: "The association's motto" },
};

export const MISSION_VISION: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "Our mission",
    text: "To keep graduates of the department connected to one another and to the department, through fellowship, mentorship and practical support at every stage of a career.",
  },
  {
    icon: "eye",
    title: "Our vision",
    text: "An alumni community where no graduate starts their career alone, and no member faces hardship without their classmates beside them.",
  },
];

export const AIMS = {
  eyebrow: "What we set out to do",
  title: "Our aims",
  intro: "Taken from Article 2 of our constitution, in plain words.",
  items: [
    { title: "Keep us connected", text: "Maintain a register of graduates and help every Class Set stay in touch." },
    { title: "Support the department", text: "Work with staff to improve facilities, industry exposure and the student experience." },
    { title: "Mentor new graduates", text: "Pair final-year students and recent graduates with alumni already in the profession." },
    { title: "Reward excellence", text: "Fund scholarships and prizes for deserving students of the department." },
    { title: "Stand by our members", text: "Offer welfare support to members and their families in times of hardship." },
    { title: "Uphold the profession", text: "Promote integrity, prudence and continuing professional development among members." },
  ],
};

export const TIMELINE = {
  eyebrow: "Milestones",
  title: "How we got here",
  items: [
    { year: "2001", title: "The first reunion", text: "Graduates from the earliest Class Sets gather at the department for an informal reunion." },
    { year: "2006", title: "A name and a constitution", text: "The association is formally constituted and its first Executive Council elected." },
    { year: "2012", title: "Scholarship fund launched", text: "Members' dues begin funding scholarships for final-year students." },
    { year: "2019", title: "Mentorship programme", text: "Alumni start mentoring students and new graduates, one to one." },
    { year: "2026", title: "The register goes online", text: "Members can now find classmates, pay dues and follow events on this website." },
  ],
};
