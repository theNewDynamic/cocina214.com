import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify/functions";
// https://astro.build/config
export default defineConfig({
  site: 'https://www.cocina214.com',
  output: "hybrid",
  compressHTML: true,
  experimental: {
    hybridOutput: true,
  },
  adapter: netlify(),
  integrations: [
    tailwind({
      config: {
        path: './src/styles/config/tailwind.config.cjs',
        applyBaseStyles: true
      }
    })
  ]
});
