import { Unbounded } from "next/font/google";

// Єдине місце, де підключається шрифт: його імпортують і layout, і Storybook.
export const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});
