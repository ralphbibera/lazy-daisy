import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react(), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "lazy-daisy",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-aria-components",
        "clsx",
        "tailwind-merge",
        "daisyui",
        "tailwindcss",
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
