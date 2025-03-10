import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: false, // Asegúrate de que esto esté en false para desarrollo local
    port: 3000, // Puedes especificar el puerto que prefieras
    open: true, // Abre automáticamente el navegador
  },
});