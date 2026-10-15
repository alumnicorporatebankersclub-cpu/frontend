import { CtaBand } from "@/components/home/cta-band";
import { EventsWithSidebar } from "@/components/home/events-with-sidebar";
import { Features } from "@/components/home/features";
import { HeroSlider } from "@/components/home/hero-slider";
import { LatestNews } from "@/components/home/latest-news";
import { StatsBand } from "@/components/home/stats-band";
import { Testimonials } from "@/components/home/testimonials";
import { Welcome } from "@/components/home/welcome";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <>
      <span id="top" />
      <SiteHeader />
      <main className="flex-1">
        <HeroSlider />
        <Welcome />
        <Features />
        <StatsBand />
        <LatestNews />
        <EventsWithSidebar />
        <Testimonials />
        <CtaBand />
      </main>

      <SiteFooter />
    </>
  );
}
