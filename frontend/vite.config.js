import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    port: 3001, // Port for testing
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Matches backend
        changeOrigin: true,
        secure: false,
      },
    },

    // Includes all files with .test.js, .test.jsx, .spec.js, .spec.jsx
    include: [
      "src/**/*.{test,spec}.{js,jsx,ts,tsx}",
      "tests/**/*.{test,spec}.{js,jsx,ts,tsx}",
    ],
    exclude: [...configDefaults.exclude, "**/node_modules/**", "dist/**"],
  },
});
