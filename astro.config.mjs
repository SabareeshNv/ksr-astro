import { defineConfig } from "astro/config";

import pagefind from "astro-pagefind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://keralaservicerules.com",
  build: {
    assets: "_assets",
  },
  integrations: [icon(), pagefind(), sitemap()],
});