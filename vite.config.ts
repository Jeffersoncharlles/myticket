import react from "@vitejs/plugin-react";
import * as path from "path"; // Importe o módulo path
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
        // Defina seus aliases aqui
      },
    ],
  },
});
