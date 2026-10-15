import type { Metadata } from "next";
import { ContactCards } from "@/components/contact/contact-cards";
import { ContactForm } from "@/components/contact/contact-form";
import { Faq } from "@/components/pages/faq";
import { Reveal } from "@/components/motion";
import { PageBanner } from "@/components/pages/page-banner";
import { Container, SectionTitle, TEXT_LINK } from "@/components/ui";
import { CONTACT_FORM, CONTACT_PAGE, FAQ, MAP } from "@/config/contact";

export const metadata: Metadata = { title: CONTACT_PAGE.title, description: CONTACT_PAGE.description };

export default function ContactPage() {
  return (
    <>
      <PageBanner title={CONTACT_PAGE.title} intro={CONTACT_PAGE.intro} trail={[{ label: CONTACT_PAGE.title }]} overlap />
      <ContactCards />

      <section aria-labelledby="write-to-us" className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <SectionTitle eyebrow={CONTACT_FORM.eyebrow} title={CONTACT_FORM.title} intro={CONTACT_FORM.intro} id="write-to-us" align="left" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <Reveal className="flex flex-col">
            <h2 className="text-[20px] text-ink">{MAP.title}</h2>
            <iframe
              title={MAP.label}
              src={MAP.src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-5 min-h-90 w-full flex-1 rounded-brand border border-line grayscale-[0.6]"
            />
            <a href={MAP.directions.href} target="_blank" rel="noopener noreferrer" className={`${TEXT_LINK} mt-5 self-start`}>
              {MAP.directions.label} <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </Container>
      </section>

      <Faq id="faq" {...FAQ} />
    </>
  );
}
