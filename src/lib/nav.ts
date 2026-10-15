import { MAIN_NAV, type NavGroup, type NavItem, type NavLink } from "@/config/navigation";
import { LIVE_PHASE } from "@/config/site";

export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

function isLive(item: { phase?: number }): boolean {
  return (item.phase ?? 1) <= LIVE_PHASE;
}

/** Main nav with unreleased items (and empty groups) removed. */
export function getVisibleNav(): NavItem[] {
  return MAIN_NAV.filter(isLive).flatMap((item): NavItem[] => {
    if (!isNavGroup(item)) return [item];
    const children = item.children.filter(isLive);
    return children.length > 0 ? [{ ...item, children }] : [];
  });
}

export type { NavGroup, NavItem, NavLink };
