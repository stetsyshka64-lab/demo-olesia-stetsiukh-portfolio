import Link from "next/link";
import { useId, type ComponentProps } from "react";

export type ButtonProps = Omit<ComponentProps<"button">, "disabled"> & {
  /**
   * Адреса. Якщо задана, замість `<button>` виходить посилання (`next/link`) з тим самим виглядом:
   * для переходу на сторінку чи якір (`#cases`). `disabled`, `type` і `onClick` тоді не діють.
   */
  href?: string;
  /** Іконка після тексту: `none` — без іконки, `arrow` — стрілка вправо. */
  icon?: "none" | "arrow";
  /**
   * Вигляд кнопки: `primary` — на кольорі accent, `secondary` — заливка `canvas`, з межею,
   * `tinted` — рожева заливка `surface` з межею `line` (кнопка в шапці).
   */
  variant?: "primary" | "secondary" | "tinted";
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: "md" | "lg";
  /**
   * Кнопка лише з іконкою (наприклад, бургер): квадратні відступи замість бокових.
   * Іконку передай у `children`, а назву для скрінрідера в `aria-label`.
   */
  iconOnly?: boolean;
  /**
   * Вимикає кнопку. Кнопка лишається у фокусі (через `aria-disabled`),
   * але клік нічого не робить.
   */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою: чому вона неактивна. Показується, лише коли `disabled`. */
  disabledReason?: string;
};

const base =
  "inline-flex items-center justify-center gap-3 border text-button rounded-control " +
  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink";

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-body",
};

// Зі стрілкою бокові відступи вдвічі менші: іконка сама додає візуальну вагу праворуч.
const sizesWithIcon = {
  md: "px-3 py-3",
  lg: "px-4 py-4 text-body",
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-8 shrink-0"
    >
      <path d="M5 12h14M15 16l4-4M15 8l4 4" />
    </svg>
  );
}

const enabled = {
  primary: "border-accent bg-accent text-on-accent hover:border-ink hover:bg-ink",
  secondary: "border-line bg-canvas text-ink hover:bg-line-subtle",
  tinted: "border-line bg-surface text-ink hover:bg-line-subtle",
};

const inactive = {
  primary: "border-surface bg-surface text-ink-muted cursor-not-allowed",
  secondary: "border-line-subtle bg-canvas text-ink-muted cursor-not-allowed",
  tinted: "border-line-subtle bg-surface text-ink-muted cursor-not-allowed",
};

/**
 * Кнопка дизайн-системи.
 */
export function Button({
  href,
  icon = "none",
  variant = "primary",
  size = "md",
  iconOnly = false,
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
  const classes = [
    base,
    iconOnly ? "p-3" : (icon === "arrow" ? sizesWithIcon : sizes)[size],
    disabled ? inactive[variant] : enabled[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {children}
      {icon === "arrow" ? <ArrowIcon /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        {...rest}
        type={type}
        aria-disabled={disabled || undefined}
        aria-describedby={showReason ? reasonId : rest["aria-describedby"]}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        className={classes}
      >
        {content}
      </button>
      {showReason ? (
        <p id={reasonId} className="text-caption text-ink-muted">
          {disabledReason}
        </p>
      ) : null}
    </div>
  );
}
