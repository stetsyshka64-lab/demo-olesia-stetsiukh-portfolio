import { useId, type ComponentProps } from "react";

export type FormFieldProps = Omit<ComponentProps<"input">, "id" | "aria-invalid"> & {
  /** Підпис над полем. Обов'язковий: без нього поле не має назви для скрінрідера. */
  label: string;
  /** Стан помилки: межа стає `danger`, під полем з'являється текст помилки з іконкою. */
  error?: boolean;
  /** Текст помилки під полем. Показується, лише коли `error`. */
  errorMessage?: string;
};

const base =
  "w-full border bg-canvas px-4 py-3 text-body text-ink rounded-control " +
  "placeholder:text-ink-muted outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink";

const normal = "border-ink-muted hover:border-ink";
const invalid = "border-danger hover:border-danger";
const inactive = "border-line-subtle bg-surface text-ink-muted cursor-not-allowed";

/**
 * Текстове поле з підписом дизайн-системи.
 */
export function FormField({
  label,
  error = false,
  errorMessage,
  disabled = false,
  className,
  ...rest
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const showError = error && !disabled;

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-caption text-ink">
        {label}
      </label>
      <input
        {...rest}
        id={id}
        disabled={disabled}
        aria-invalid={showError || undefined}
        aria-describedby={showError && errorMessage ? errorId : rest["aria-describedby"]}
        className={[base, disabled ? inactive : showError ? invalid : normal, className]
          .filter(Boolean)
          .join(" ")}
      />
      {showError && errorMessage ? (
        <p id={errorId} className="flex items-start gap-2 text-caption text-danger">
          <span aria-hidden="true" className="flex h-6 shrink-0 items-center">
            <svg
              viewBox="0 0 16 16"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="8" cy="8" r="6.5" />
              <path d="M8 4.5v4" />
              <path d="M8 11.25v.01" />
            </svg>
          </span>
          <span>{errorMessage}</span>
        </p>
      ) : null}
    </div>
  );
}
