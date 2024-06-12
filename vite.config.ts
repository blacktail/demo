/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
    reporters: ["default", "html"],
    coverage: {
      exclude: [
        "html/**",
        "dist/**",
        "node_modules/**",
        "**/[.]**",
        "coverage/**",
      ],
    },
  },
});
