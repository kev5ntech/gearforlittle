import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // output: 'static' is the Astro 5 default (equivalent to the old 'hybrid' mode).
  // Content pages are pre-rendered (SSG). Keystatic admin routes opt out via
  // `prerender: false` and are served by the Node adapter.
  output: 'static',

  adapter: node({ mode: 'standalone' }),

  integrations: [
    react(),
    mdx(),
    keystatic(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
