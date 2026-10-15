import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SITE } from "@/config/site";
import { Providers } from "./providers";
import "lenis/dist/lenis.css";
import "./globals.css";
import "./motion.css";

/** One family for everything: headings, body and figures. */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: SITE.metaTitle,
    template: `%s | ${SITE.metaTitle}`,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
