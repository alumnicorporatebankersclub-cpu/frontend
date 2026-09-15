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
        "h-10 w-full rounded-md border bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500",
        invalid ? "border-red-500" : "border-zinc-300 dark:border-zinc-700",
        className,
      )}
      {...props}
    />
  );
});
