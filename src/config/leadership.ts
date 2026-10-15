/** Leadership page copy. PLACEHOLDER names, roles, Class Sets and terms — replace with the real council. */
import { WELCOME } from "./home";

export interface Member {
  name: string;
  role: string;
  classSet: string;
  /** Photo in /public. */
  image?: string;
}

export const LEADERSHIP_PAGE = {
  title: "Leadership",
  description: "The Executive Council and Board of Trustees who run the association.",
  intro: "The members who give their time to run the association, elected every two years at the Annual General Meeting.",
};

export const PRESIDENT = {
  eyebrow: "From the President",
  name: WELCOME.name,
  role: WELCOME.role,
  image: WELCOME.image,
  bio: [
    "A graduate of the Class Set of 2004, Olumide has spent twenty years in treasury and corporate banking, and was elected President at the 2024 Annual General Meeting after four years as Welfare Officer.",
    "The priorities for this term are simple: get every Class Set onto the register, grow the scholarship fund, and make sure no final-year student leaves the department without a mentor's phone number.",
  ],
  quote: "Nobody remembers the job title. They remember who picked up the phone.",
};

export const EXECUTIVE = {
  eyebrow: "2024 – 2026 term",
  title: "Executive Council",
  intro: "The council meets monthly and reports to members at every Annual General Meeting.",
  members: [
    { name: "Funmilayo Adeyemi", role: "Vice President", classSet: "Class Set of 2003" },
    { name: "Chinedu Okafor", role: "General Secretary", classSet: "Class Set of 2009" },
    { name: "Aisha Bello", role: "Asst. General Secretary", classSet: "Class Set of 2015" },
    { name: "Segun Ogundipe", role: "Treasurer", classSet: "Class Set of 2001" },
    { name: "Ngozi Eze", role: "Financial Secretary", classSet: "Class Set of 2007" },
    { name: "Kunle Afolabi", role: "Public Relations Officer", classSet: "Class Set of 2012" },
    { name: "Bisi Oyelaran", role: "Welfare Officer", classSet: "Class Set of 2005" },
    { name: "Tobi Adekunle", role: "Social Secretary", classSet: "Class Set of 2018" },
  ] satisfies Member[],
};

export const TRUSTEES = {
  eyebrow: "Guardians of the constitution",
  title: "Board of Trustees",
  intro: "Senior members who hold the association's assets in trust and advise the council.",
  members: [
    { name: "Alhaji Rasheed Lawal", role: "Chairman", classSet: "Class Set of 1985" },
    { name: "Mrs. Folake Adebisi", role: "Trustee", classSet: "Class Set of 1988" },
    { name: "Mr. Emeka Nwosu", role: "Trustee", classSet: "Class Set of 1991" },
    { name: "Dr. Yetunde Alabi", role: "Trustee", classSet: "Class Set of 1994" },
  ] satisfies Member[],
};

export const PAST_PRESIDENTS = {
  eyebrow: "Those who came before",
  title: "Past presidents",
  caption: "Presidents of the association since it was constituted",
  columns: ["Term", "President", "Class Set"],
  rows: [
    ["2022 – 2024", "Mrs. Adunni Ojo", "1998"],
    ["2020 – 2022", "Mr. Babatunde Salami", "1996"],
    ["2018 – 2020", "Mrs. Kemi Ogunbiyi", "1993"],
    ["2014 – 2018", "Mr. Tajudeen Adigun", "1990"],
    ["2010 – 2014", "Alhaji Rasheed Lawal", "1985"],
    ["2006 – 2010", "Mr. Gbenga Oladipo", "1984"],
  ],
  note: {
    text: "The next election is held at the Annual General Meeting in December 2026. Any financial member of two years' standing may stand for office.",
    link: { label: "Read Article 7 of the constitution", href: "/about/constitution#article-7" },
  },
};
