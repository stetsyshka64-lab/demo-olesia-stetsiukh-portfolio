"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/Button";

export type NavigationItem = {
  /** Текст пункту. */
  label: string;
  /** Адреса, куди веде пункт. */
  href: string;
};

export type NavigationProps = {
  /** Пункти меню. */
  items?: NavigationItem[];
  /** Адреса активного пункту (поточної сторінки). Інші пункти звичайні. */
  activeHref?: string;
  /** Текст кнопки меню на вузькому екрані. */
  menuLabel?: string;
};

const defaultItems: NavigationItem[] = [
  { label: "Роботи", href: "/works" },
  { label: "Про мене", href: "/about" },
  { label: "Контакти", href: "/contacts" },
];

const focusRing = "outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink";

/**
 * Навігація сайту. На широкому екрані пункти в рядок, на вузькому меню згортається в кнопку:
 * відкрите меню лежить поверх контенту й закривається клавішею Escape.
 */
export function Navigation({
  items = defaultItems,
  activeHref,
  menuLabel = "Меню",
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav aria-label="Головне меню" className="relative flex justify-end md:justify-start">
      <div className="md:hidden">
        <Button
          ref={buttonRef}
          variant="secondary"
          iconOnly
          aria-expanded={open}
          aria-controls={listId}
          aria-label={menuLabel}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="size-6"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </Button>
      </div>
      <ul
        id={listId}
        className={
          (open ? "flex " : "hidden ") +
          "absolute inset-x-0 top-full z-10 mt-2 flex-col gap-2 border border-line-subtle bg-canvas p-4 rounded-control " +
          "md:static md:mt-0 md:flex md:flex-row md:gap-4 md:border-0 md:bg-transparent md:p-0"
        }
      >
        {items.map((item) => {
          const active = item.href === activeHref;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={
                  "block border px-4 py-2 text-caption uppercase text-ink rounded-control " +
                  "underline-offset-4 decoration-2 hover:text-accent hover:underline " +
                  "focus-visible:text-accent focus-visible:underline " +
                  (active ? "border-ink-muted " : "border-transparent ") +
                  focusRing
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
