import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "src/styles/variables";`, // Optional: Global variables (useful for custom styles)
      },
    },
  },
});
