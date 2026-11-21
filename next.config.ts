import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Storybook лежить у public/storybook і підключає файли відносними шляхами,
  // тому адреса /storybook/ має лишатися зі слешем (без цього стилі й скрипти не знаходяться).
  skipTrailingSlashRedirect: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
