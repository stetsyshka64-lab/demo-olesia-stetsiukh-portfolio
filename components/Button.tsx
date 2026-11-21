import { useId, type ComponentProps } from "react";

export type ButtonProps = Omit<ComponentProps<"button">, "disabled"> & {
  /** Вигляд кнопки: `primary` — на кольорі accent, `secondary` — без заливки, з межею. */
  variant?: "primary" | "secondary";
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: "md" | "lg";
  /**
   * Вимикає кнопку. Кнопка лишається у фокусі (через `aria-disabled`),
   * але клік нічого не робить.
   */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою: чому вона неактивна. Показується, лише коли `disabled`. */
  disabledReason?: string;
};

const base =
  "inline-flex items-center justify-center border text-button rounded-control " +
  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink";

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-body",
};

const enabled = {
  primary: "border-accent bg-accent text-on-accent hover:border-ink hover:bg-ink",
  secondary: "border-ink-muted bg-transparent text-ink hover:bg-surface",
};

const inactive = {
  primary: "border-surface bg-surface text-ink-muted cursor-not-allowed",
  secondary: "border-line-subtle bg-transparent text-ink-muted cursor-not-allowed",
};

/**
 * Кнопка дизайн-системи.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  className,
  type = "button",
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const reasonId = useId();
  const showReason = disabled && Boolean(disabledReason);

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        {...rest}
        type={type}
        aria-disabled={disabled || undefined}
        aria-describedby={showReason ? reasonId : rest["aria-describedby"]}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        className={[base, sizes[size], disabled ? inactive[variant] : enabled[variant], className]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </button>
      {showReason ? (
        <p id={reasonId} className="text-caption text-ink-muted">
          {disabledReason}
        </p>
      ) : null}
    </div>
  );
}
