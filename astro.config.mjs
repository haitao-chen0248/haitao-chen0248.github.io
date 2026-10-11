// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Production URL. Used for canonical links, Open Graph tags, and the sitemap.
  site: 'https://haitao-chen0248.github.io',

  // Emit /publications/index.html style URLs so links keep a trailing slash.
  trailingSlash: 'always',

  integrations: [sitemap()],

  // Keep the old site's /about/ URL working.
  redirects: {
    '/about': '/',
  },

  // Browsers the CSS is built for. Knowing them, the minifier adds the vendor
  // prefixes older Safari needs, such as -webkit-backdrop-filter.
  vite: {
    build: {
      cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'],
    },
  },

  // Put each page's CSS inside the page itself. The styles are small, and
  // phones no longer wait for separate stylesheet requests before the first
  // paint.
  build: {
    inlineStylesheets: 'always',
  },

  // Prefetch internal pages on hover so navigation feels instant.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
