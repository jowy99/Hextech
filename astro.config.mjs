import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import langRedirect from './src/middleware/langRedirect.js';

export default defineConfig({
  integrations: [tailwind(), react()],
  server: {
    middleware: [langRedirect],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
    }
  }
});