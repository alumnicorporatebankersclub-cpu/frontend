import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ContentWithSidebarProps {
  children: ReactNode;
  sidebar: ReactNode;
  className?: string;
}

/** The classic page template: main content on the left, a column of widgets on the right. */
export function ContentWithSidebar({ children, sidebar, className }: ContentWithSidebarProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
        <div className="min-w-0">{children}</div>
        <aside className="flex flex-col gap-7">{sidebar}</aside>
      </Container>
    </section>
  );
}
