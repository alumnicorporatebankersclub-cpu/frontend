import type { ReactNode } from "react";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

/** Label + control + error message, wired together for accessibility. */
export function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
