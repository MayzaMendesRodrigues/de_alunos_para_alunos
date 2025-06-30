import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/de_alunos_para_alunos/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
