import type { Metadata } from "next";
import { unbounded } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Олеся Стецюх — UI-дизайнерка",
  description: "Портфоліо UI-дизайнерки: від ідеї до готових екранів у Figma.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={unbounded.variable}>
      <body>{children}</body>
    </html>
  );
}
