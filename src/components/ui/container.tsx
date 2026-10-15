import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Boxed 1200px content width, the classic WordPress theme layout. */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn("mx-auto w-full max-w-300 px-5 sm:px-6", className)}>{children}</Tag>;
}
