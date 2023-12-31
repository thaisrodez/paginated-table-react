import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.jsx"),
      name: "paginated-table-react-pkg",
      fileName: (format) => `paginated-table-react-pkg.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          require("tailwindcss")({
            config: "./tailwind.config.js",
          }),
        ],
      },
    },
  },
  plugins: [react()],
});
