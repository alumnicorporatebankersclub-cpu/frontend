import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

/** forwardRef is required so react-hook-form `register` can attach to the DOM node. */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid = false, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "h-11 w-full rounded-brand border bg-background px-3 text-[15px] text-foreground placeholder:text-muted",
        "focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ink/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        invalid ? "border-red-600 dark:border-red-400" : "border-line",
        className,
      )}
      {...props}
    />
  );
});
