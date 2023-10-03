import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";
import path from "path";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [react()],
  server: {
    // Các bạn có thể sửa theo ý mình
    port: 3000,
    open: true,
  },
  css: {
    // Thêm cái này vô để debug css dễ hơn
    devSourcemap: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
});
