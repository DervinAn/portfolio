import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  const isReplit = process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined;
  const cartographerPlugin = isReplit
    ? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
    : [];

  return {
    base: '/portfolio/',
    build: {
      outDir: path.resolve(import.meta.dirname, 'dist'),     // NOT dist/public
      emptyOutDir: true
    },
    plugins: [
      react(),
      runtimeErrorOverlay(),
      themePlugin(),
      ...cartographerPlugin,
    ],

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    root: path.resolve(import.meta.dirname, "client"),

    // build: {
    // outDir: path.resolve(import.meta.dirname, "dist"),
    // emptyOutDir: true
    // },

    server: {
      host: "192.168.0.123",
      port: 5001,
      allowedHosts: "all",
    },
  };
});
