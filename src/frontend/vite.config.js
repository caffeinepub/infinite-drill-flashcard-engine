import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import environment from "vite-plugin-environment";

const ii_url =
  process.env.DFX_NETWORK === "local"
    ? `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:8081/`
    : `https://identity.internetcomputer.org/`;

process.env.II_URL = process.env.II_URL || ii_url;
process.env.STORAGE_GATEWAY_URL =
  process.env.STORAGE_GATEWAY_URL || "https://blob.caffeine.ai";

export default defineConfig({
  logLevel: "error",
  build: {
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        // Content-hash filenames for long-term browser caching
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/@tanstack/react-router")) {
            return "vendor-router";
          }
          if (id.includes("node_modules/motion") || id.includes("node_modules/framer-motion")) {
            return "vendor-motion";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "vendor-icons";
          }
          if (id.includes("node_modules/@dfinity") || id.includes("node_modules/@internet-identity")) {
            return "vendor-dfinity";
          }
          if (id.includes("node_modules/@radix-ui")) {
            return "vendor-radix";
          }
          if (id.includes("/src/data/ncertContent")) {
            return "data-ncert";
          }
          if (id.includes("/src/data/iitData")) {
            return "data-iit";
          }
          if (id.includes("/src/data/blogData")) {
            return "data-blog";
          }
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    environment(["II_URL"]),
    environment(["STORAGE_GATEWAY_URL"]),
    react(),
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", import.meta.url)),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
    dedupe: ["@dfinity/agent"],
  },
});
