import { ARTICLE_LABEL, ARTICLES } from "@/config/constitution";

/** Anchor id for an article, shared by the article list and the table of contents. */
export const articleId = (i: number) => `article-${i + 1}`;

/** The constitution, article by article, each with numbered clauses. */
export function Articles() {
  return (
    <div className="divide-y divide-line">
      {ARTICLES.map((article, i) => (
        <section
          key={article.title}
          id={articleId(i)}
          aria-labelledby={`${articleId(i)}-title`}
          className="scroll-mt-32 py-10 first:pt-0 last:pb-0"
        >
          <p className="text-[12px] font-semibold tracking-[0.16em] text-brass uppercase">
            {ARTICLE_LABEL} {i + 1}
          </p>
          <h2 id={`${articleId(i)}-title`} className="mt-2 text-[24px] leading-tight text-ink">
            {article.title}
          </h2>
          <ol className="mt-5 space-y-3">
            {article.clauses.map((clause, j) => (
              <li key={clause.slice(0, 24)} className="flex gap-4 text-[15.5px] leading-[1.8] text-ink-soft">
                <span className="w-8 shrink-0 pt-px text-[13px] font-semibold text-muted tabular-nums">
                  {i + 1}.{j + 1}
                </span>
                <span>{clause}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
