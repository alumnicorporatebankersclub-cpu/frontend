import { MEMBERS_ONLY_TAG } from "@/config/navigation";
import type { NavLink } from "@/lib/nav";

/** Link text, plus a small tag for members-only destinations. */
export function NavLinkLabel({ link }: { link: NavLink }) {
  return (
    <>
      {link.label}
      {link.membersOnly && (
        <span className="ml-2 rounded-brand border border-line px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-muted uppercase">
          {MEMBERS_ONLY_TAG}
        </span>
      )}
    </>
  );
}
