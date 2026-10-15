import { RevealGroup, RevealItem } from "@/components/motion";
import { Container, Icon } from "@/components/ui";
import { MISSION_VISION } from "@/config/about";

/** Mission and vision side by side on stone. */
export function MissionVision() {
  return (
    <section className="bg-stone py-16 sm:py-20">
      <Container>
        <RevealGroup className="grid gap-7 md:grid-cols-2">
          {MISSION_VISION.map((item) => (
            <RevealItem key={item.title} className="flex">
              <div className="flex w-full gap-6 rounded-brand border-b-[3px] border-brass bg-background p-8 sm:p-10">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-stone text-brass">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <div>
                  <h2 className="text-[22px] text-ink">{item.title}</h2>
                  <p className="mt-3 text-[15.5px] leading-[1.8] text-ink-soft">{item.text}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
