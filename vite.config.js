import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/rust-guessing/pkg",
          dest: "", // Copies to dist/pkg
        },
      ],
    }),
  ],
  base: "/guessing_game/", // Important for GitHub Pages
});
