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

  vite: {
    build: {
      // Browsers the CSS is built for. Knowing them, the minifier adds the
      // vendor prefixes older Safari needs, such as -webkit-backdrop-filter.
      cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'],

      // Put the page scripts inside the pages too, up to 8 KB each (the
      // header's is just over Vite's 4 KB default), so no page fetches a
      // separate script file. Everything else keeps the default limit.
      assetsInlineLimit: (filePath, content) => (filePath.endsWith('.js') && content.length < 8192 ? true : undefined),
    },
  },

  // Put each page's CSS inside the page itself. The styles are small, and
  // phones no longer wait for separate stylesheet requests before the first
  // paint.
  build: {
    inlineStylesheets: 'always',
  },
});
