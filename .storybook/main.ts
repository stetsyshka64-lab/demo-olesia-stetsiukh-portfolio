import type { StorybookConfig } from "@storybook/nextjs-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: [
    "../design-system/**/*.mdx",
    "../components/**/*.mdx",
    "../components/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
  // Next.js збирає Tailwind своїм збирачем, а Storybook працює на Vite:
  // підключаємо Tailwind тут, інакше компоненти в історіях будуть без стилів.
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    return config;
  },
};

export default config;
