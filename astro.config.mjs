// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages serves this project repo from a subpath, so every absolute
  // asset URL must carry it or the CSS, favicon and character images 404.
  site: 'https://alstjgg.github.io',
  base: '/hbd-summer-party/',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
