/** Upcoming events. PLACEHOLDER dates, titles and venues. */

export const EVENTS_SECTION = {
  eyebrow: "Calendar",
  title: "Upcoming events",
  allLink: { label: "View all events", href: "/events" },
};

export const EVENTS = [
  {
    day: "22",
    month: "Oct",
    title: "Careers in Treasury: an evening with alumni",
    time: "4:00 pm",
    place: "Department Auditorium & online",
    note: "For final-year students. Bring your questions; leave with names.",
    href: "/events/treasury-panel",
  },
  {
    day: "07",
    month: "Nov",
    title: "Class Set of 2016 — Ten-Year Reunion",
    time: "2:00 pm",
    place: "Lagos Island",
    note: "Organised by the class, open to all who knew them.",
    href: "/events/cs-2016-reunion",
  },
  {
    day: "14",
    month: "Dec",
    title: "Annual Homecoming Dinner",
    time: "6:00 pm",
    place: "Premier Hotel, Ibadan",
    note: "Our biggest night of the year. Every Class Set, one room.",
    href: "/events/homecoming-2026",
  },
] as const;

export const EVENT_LABELS = { details: "Event details" };
