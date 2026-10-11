import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://qthe.qdn.vn',
  build: { inlineStylesheets: 'always' },
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  vite: {
    // pagefind.js is generated after this build by `pagefind --site dist`,
    // so Rollup must not try to resolve it at build time.
    build: { rollupOptions: { external: ['/pagefind/pagefind.js'] } },
  },
});
