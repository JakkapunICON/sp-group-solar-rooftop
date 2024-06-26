import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/sp-group/",
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve("./src"),
      "@": path.resolve("./"),
    },
  },
});
