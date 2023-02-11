import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import vanillaExtract from "astro-vanilla-extract";

export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    partytown(),
    vanillaExtract(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
