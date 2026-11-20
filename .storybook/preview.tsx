import type { Preview } from "@storybook/nextjs-vite";
import { unbounded } from "../app/fonts";
import "../app/globals.css";

// Змінна шрифту має стояти на <html>, як у layout сайту. Так вона діє і в історіях,
// і на сторінках документації (там обгортки-декоратора немає).
document.documentElement.classList.add(unbounded.variable);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disabled: true },
  },
  decorators: [
    // next/font віддає змінну шрифту класом на <html> у layout.
    // Storybook layout не бачить, тому додаємо той самий клас обгорткою.
    (Story) => (
      <div className={`${unbounded.variable} bg-canvas font-sans text-ink`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
