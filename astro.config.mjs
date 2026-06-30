import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.hryhoriiboiko19.workers.dev/",
  output: "static",

  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      port: 4321,
      strictPort: true,
      hmr: {
        protocol: "ws",
        host: "localhost",
        port: 4321,
        clientPort: 4321,
      },
    },
  },

  adapter: cloudflare()
});