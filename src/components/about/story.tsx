import { Reveal } from "@/components/motion";
import { MediaFrame, SectionTitle } from "@/components/ui";
import { STORY } from "@/config/about";

/** Main column of the About page: who we are, a photo, the story so far, and the motto. */
export function Story() {
  return (
    <article aria-labelledby="our-story">
      <SectionTitle eyebrow={STORY.eyebrow} title={STORY.title} id="our-story" align="left" />

      <Reveal>
        <MediaFrame
          src={STORY.image}
          alt={STORY.imageAlt}
          sizes="(min-width: 1024px) 760px, 100vw"
          priority
          className="mt-10 aspect-video rounded-brand"
        />
      </Reveal>

      {STORY.paragraphs.map((p, i) => (
        <p
          key={p.slice(0, 24)}
          className={i === 0 ? "mt-10 text-[18px] leading-[1.8] font-medium text-ink" : "mt-6 text-[16px] leading-[1.85] text-ink-soft"}
        >
          {p}
        </p>
      ))}

      <Reveal>
        <figure className="mt-10 border-l-[3px] border-brass bg-stone px-7 py-6">
          <blockquote className="text-[19px] leading-snug font-medium text-ink italic">{STORY.motto.text}</blockquote>
          <figcaption className="mt-2 text-[13px] text-muted">{STORY.motto.cite}</figcaption>
        </figure>
      </Reveal>
    </article>
  );
}
