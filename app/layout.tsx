import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Олеся Стецюх — UI-дизайнерка",
  description: "Портфоліо UI-дизайнерки: від ідеї до готових екранів у Figma.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
