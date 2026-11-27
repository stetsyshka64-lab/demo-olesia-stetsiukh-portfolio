"use client";

import { useSyncExternalStore, type ReactNode } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * Шапка, закріплена вгорі вікна. На початку сторінки прозора, як у макеті (видно декор під нею),
 * після прокрутки отримує фон і розділювач, щоб контент не просвічував крізь меню.
 */
export function StickyHeader({ children }: { children: ReactNode }) {
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > 0,
    () => false,
  );

  return (
    <header
      className={
        "sticky top-0 z-20 border-b pb-4 " +
        (scrolled ? "border-line-subtle bg-canvas" : "border-transparent")
      }
    >
      {children}
    </header>
  );
}
