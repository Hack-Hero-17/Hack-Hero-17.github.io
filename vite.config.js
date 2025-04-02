import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { time } from "framer-motion";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
