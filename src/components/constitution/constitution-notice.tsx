import { BTN_PRIMARY, Icon } from "@/components/ui";
import { CONSTITUTION_NOTICE } from "@/config/constitution";

/** Note above the articles: this is a summary, when it was adopted, and the full PDF when available. */
export function ConstitutionNotice() {
  const n = CONSTITUTION_NOTICE;

  return (
    <div className="mb-12 flex gap-4 rounded-brand border-l-[3px] border-brass bg-stone p-6 sm:p-7">
      <Icon name="info" className="mt-0.5 text-brass" />
      <div>
        <h2 className="text-[16px] text-ink">{n.title}</h2>
        <p className="mt-2 text-[15px] leading-[1.75] text-ink-soft">{n.text}</p>
        <p className="mt-3 text-[13px] text-muted">{n.adopted}</p>
        {n.download.href && (
          <a href={n.download.href} download className={`${BTN_PRIMARY} mt-5`}>
            <Icon name="download" className="size-4" />
            {n.download.label}
          </a>
        )}
      </div>
    </div>
  );
}
