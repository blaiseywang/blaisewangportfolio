import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://blaiseywang.github.io',
  base: 'blaisewangportfolio',
  integrations: [tailwind(), mdx()]
});
