/** Site identity and release settings. */

export const SITE = {
  shortName: "Corporate Bankers' Alumni Association",
  fullName: "Association of Banking & Finance Alumni",
  institution: "The Polytechnic, Ibadan",
  department: "Department of Banking & Finance",
  motto: "Oneness in Learning · Prudence in Practice",
  crest: { src: "/images/abc.webp", alt: "ACBC crest" },
  /** Header wordmark, one entry per line. */
  logoLines: ["Corporate Bankers'", "Alumni Association"],
  metaTitle: "ACBC Alumni",
  description:
    "Association of Banking & Finance Alumni — The Polytechnic, Ibadan. Reconnect, mentor, prosper.",
} as const;

export const LIVE_PHASE = 3;

/** Strip above the header: contact details on the left, social profiles on the right. */
export const TOP_BAR = {
  // PLACEHOLDER contact details and profile URLs.
  phone: "+234 800 000 0000",
  email: "secretariat@acbc-alumni.org",
  hours: "Mon – Fri, 9am – 5pm",
  socials: [
    { label: "Facebook", short: "Fb", href: "https://www.facebook.com/" },
    { label: "LinkedIn", short: "In", href: "https://www.linkedin.com/" },
    { label: "X (Twitter)", short: "X", href: "https://x.com/" },
  ],
} as const;
