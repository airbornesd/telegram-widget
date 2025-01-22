import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333,
    allowedHosts: [process.env.NGROK_PATH],
  },
  define: {
    "process.env": process.env,
  },
});
