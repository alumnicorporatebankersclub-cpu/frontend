import { Widget } from "@/components/home/widget";
import { ARTICLES, TOC_TITLE } from "@/config/constitution";
import { articleId } from "./articles";

/** Table of contents: jump links to each article. */
export function TocWidget() {
  return (
    <Widget title={TOC_TITLE}>
      <nav aria-label={TOC_TITLE}>
        <ol className="space-y-2.5 text-[14px]">
          {ARTICLES.map((article, i) => (
            <li key={article.title}>
              <a href={`#${articleId(i)}`} className="flex gap-3 text-ink-soft transition-colors hover:text-brass">
                <span className="w-5 shrink-0 text-muted tabular-nums">{i + 1}.</span>
                {article.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </Widget>
  );
}
