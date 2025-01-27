// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), expressiveCode({
      themes: ["material-theme-palenight"],
    }),
    mdx(),
    sitemap({
      filter: (page) => page !== "https://hellochris.dev/debug/",
    }),
    tailwind(),
  ],
  site: "https://hellochris.dev",
  build: {
    assets: "assets",
  },
  vite: {
    server: {
      watch: {
        ignored: [
          "**/readme_images/",
        ],
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});