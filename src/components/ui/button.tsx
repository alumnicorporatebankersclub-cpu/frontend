import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY, BTN_SECONDARY, TEXT_LINK } from "./styles";

type Variant = "primary" | "secondary" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  isLoading?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: BTN_PRIMARY,
  secondary: BTN_SECONDARY,
  text: TEXT_LINK,
};

/** Form button sharing the site-wide button styles. */
export function Button({
  variant = "primary",
  isLoading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={cn(variantClasses[variant], "disabled:cursor-not-allowed disabled:opacity-50", className)}
      {...props}
    >
      {isLoading && (
        <span
          aria-hidden
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {children}
    </button>
  );
}
