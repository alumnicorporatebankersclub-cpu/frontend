/**
 * Constitution page: a plain-language summary, article by article.
 * PLACEHOLDER wording and dates — replace with the text of the signed constitution.
 */
import { SITE } from "./site";

export const CONSTITUTION_PAGE = {
  title: "Constitution",
  description: `A plain-language summary of the constitution of the ${SITE.shortName}.`,
  intro: "The rules we agreed to run ourselves by, summarised article by article.",
};

export const CONSTITUTION_NOTICE = {
  title: "About this summary",
  text: "This page summarises the constitution in plain words. The signed constitution held by the General Secretary is the authoritative version, and it prevails wherever the two differ.",
  adopted: "Adopted at the General Meeting of 18 March 2006 · Last amended December 2022",
  /** PLACEHOLDER: set to the PDF's path in /public to show the download button. */
  download: { label: "Download the full constitution (PDF)", href: undefined as string | undefined },
};

export const TOC_TITLE = "On this page";
export const ARTICLE_LABEL = "Article";

export const ARTICLES = [
  { title: "Name and office", clauses: [
    `The body shall be known as the ${SITE.shortName}.`,
    `Its office is at the ${SITE.department}, ${SITE.institution}.`,
  ] },
  { title: "Aims and objectives", clauses: [
    "To maintain a register of graduates and foster fellowship among them.",
    "To support the department, its staff and its students.",
    "To mentor students and recent graduates, and reward academic excellence.",
    "To provide welfare support to members in genuine need.",
  ] },
  { title: "Membership", clauses: [
    "Any graduate of the department, at ND or HND level, may become a member.",
    "A member is financial once their annual dues for the current year are paid.",
    "Honorary membership may be conferred by a General Meeting.",
  ] },
  { title: "Rights and duties of members", clauses: [
    "Financial members may attend, speak and vote at General Meetings.",
    "Members shall pay their dues, abide by this constitution and uphold the association's good name.",
  ] },
  { title: "Dues and finance", clauses: [
    "Annual dues are set by the Annual General Meeting.",
    "Funds are held in the association's bank account, with three signatories drawn from the council.",
    "Accounts are audited every year and presented to the Annual General Meeting.",
  ] },
  { title: "The Executive Council", clauses: [
    "The council runs the association between General Meetings.",
    "It consists of the President, Vice President, General Secretary, Assistant General Secretary, Treasurer, Financial Secretary, Public Relations Officer, Welfare Officer and Social Secretary.",
  ] },
  { title: "Elections and tenure", clauses: [
    "Officers are elected by secret ballot at the Annual General Meeting.",
    "Each term lasts two years; no officer may hold the same office for more than two consecutive terms.",
    "Candidates must have been financial members for at least two years.",
  ] },
  { title: "Meetings", clauses: [
    "The Annual General Meeting is held during Homecoming each December.",
    "An Extraordinary General Meeting may be called by the council or by fifty financial members in writing.",
    "Quorum is one quarter of financial members, present in person or online.",
  ] },
  { title: "Board of Trustees", clauses: [
    "Up to five trustees hold the association's property in trust.",
    "Trustees are appointed by a General Meeting and advise the council.",
  ] },
  { title: "Discipline", clauses: [
    "A member who brings the association into disrepute may be suspended by the council.",
    "Every member has the right to be heard, and to appeal to the next General Meeting.",
  ] },
  { title: "Amendments", clauses: [
    "This constitution may be amended by two-thirds of financial members voting at a General Meeting.",
    "Proposed amendments must reach members at least thirty days before the meeting.",
  ] },
];
