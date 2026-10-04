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

  // Prefetch internal pages on hover so navigation feels instant.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
