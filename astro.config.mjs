// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  //base: 'my-repo',
  site: 'https://RaphaelFLT.github.io',

  integrations: [icon()]
})