import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/guessing_game/", // 👈 replace with repo name
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/pkg",
          dest: "", // copy `pkg/` folder to dist root
        },
      ],
    }),
  ],
});
