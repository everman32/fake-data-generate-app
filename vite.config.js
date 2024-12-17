import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    base: "/fake-data-generate-app/",
    plugins: [react()],
    server: {
      open: true,
      port: 3000,
    },
  };
});
