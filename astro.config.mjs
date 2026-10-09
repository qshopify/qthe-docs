import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://qthe-docs.netlify.app' // TODO: switch to the custom docs domain once it's set,
  build: { inlineStylesheets: 'always' },
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
});
