import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from "@astrojs/netlify/functions";
// https://astro.build/config
export default defineConfig({
  site: 'https://www.cocina214.com',
  compressHTML: true,
  adapter: netlify(),
  experimental: {
    svg: true,
  },
  env: {
    schema: {
      SANITY_STUDIO_PROJECT_ID: envField.string({
        context: 'server',
        access: 'public',
      }),
      PUBLIC_SNIPCART_API_KEY: envField.string({
        context: 'client',
        access: 'public',
      }),
      SANITY_STUDIO_DATASET: envField.string({
        context: 'server',
        access: 'public',
        default: 'production',
      }),
      SANITY_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      SITE_TITLE: envField.string({
        context: 'server',
        access: 'public',
        default: '{websiteTitle}'
      }),
      ASTRO_ENV: envField.string({
        context: 'server',
        access: 'public',
        default: 'dev'
      })
    }
  },
  integrations: [
    tailwind({
      configFile: './src/styles/config/tailwind.config.cjs',
      applyBaseStyles: true
    }),
  ]
});
