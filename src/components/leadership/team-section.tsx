import { RevealGroup, RevealItem } from "@/components/motion";
import { Avatar, Container, SectionTitle } from "@/components/ui";
import type { Member } from "@/config/leadership";
import { cn } from "@/lib/utils";

interface TeamSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  members: readonly Member[];
  /** Stone background, to alternate with the sections around it. */
  muted?: boolean;
}

/** A titled grid of member cards: photo (or initials), name, office and Class Set. */
export function TeamSection({ id, eyebrow, title, intro, members, muted = false }: TeamSectionProps) {
  return (
    <section aria-labelledby={id} className={cn("py-20 sm:py-24", muted && "bg-stone")}>
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} intro={intro} id={id} />

        <RevealGroup as="ul" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <RevealItem as="li" key={m.name} className="flex">
              <article className="w-full rounded-brand border border-b-[3px] border-line bg-background p-8 text-center transition-[border-color,box-shadow] hover:border-b-brass hover:shadow-[0_18px_40px_-28px_rgba(22,24,31,0.45)]">
                <Avatar
                  person={{ name: m.name, src: m.image }}
                  maxSize={112}
                  className="mx-auto size-28 text-[26px] ring-4 ring-stone"
                />
                <h3 className="mt-6 text-[17px] text-ink">{m.name}</h3>
                <p className="mt-1.5 text-[12px] font-semibold tracking-[0.12em] text-brass uppercase">{m.role}</p>
                <p className="mt-2 text-[13px] text-muted">{m.classSet}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
