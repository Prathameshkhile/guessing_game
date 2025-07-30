import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/rust-guessing/pkg/*", // include all files inside pkg
          dest: "pkg", // ensures files go to dist/pkg
        },
      ],
    }),
  ],
  base: "/guessing_game/", // make sure this matches your repo name
});
