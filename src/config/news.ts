/** Latest news posts and sidebar widgets. PLACEHOLDER posts — replace with real announcements. */

export interface Post {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  /** Featured image in /public. Without it, a toned placeholder shows. */
  image?: string;
}

export const NEWS_SECTION = {
  eyebrow: "From the blog",
  title: "Latest news",
  allLink: { label: "View all news", href: "/news" },
};

export const POSTS: Post[] = [
  {
    title: "Class Set of 2016 announce ten-year reunion in Lagos",
    excerpt: "A decade after graduation, the class gathers on 7 November. Organisers invite all who knew them.",
    category: "Reunions",
    date: "2 October 2026",
    href: "/news/cs-2016-reunion",
  },
  {
    title: "Twelve students receive 2026 alumni scholarships",
    excerpt: "Funded by members' dues, this year's awards cover tuition for twelve final-year students.",
    category: "Scholarships",
    date: "18 September 2026",
    href: "/news/scholarships-2026",
  },
  {
    title: "Mentorship programme opens for its third cohort",
    excerpt: "Alumni in banking, audit and regulation are pairing with students for the new academic year.",
    category: "Mentorship",
    date: "4 September 2026",
    href: "/news/mentorship-cohort-3",
  },
];

export const SIDEBAR = {
  search: { title: "Search", placeholder: "Search the site…", button: "Search", action: "/search" },
  recent: { title: "Recent posts" },
  categories: {
    title: "Categories",
    items: [
      { label: "Announcements", count: 14, href: "/news/category/announcements" },
      { label: "Reunions", count: 9, href: "/news/category/reunions" },
      { label: "Scholarships", count: 6, href: "/news/category/scholarships" },
      { label: "Mentorship", count: 5, href: "/news/category/mentorship" },
    ],
  },
  quickLinks: {
    title: "Quick links",
    items: [
      { label: "Pay annual dues", href: "/dues" },
      { label: "Update your profile", href: "/login" },
      { label: "Read the constitution", href: "/about/constitution" },
      { label: "Contact the secretariat", href: "/contact" },
    ],
  },
};
