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
    minify: 'terser',
    terserOptions: {
      compress: {
        passes: 2,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        dead_code: true,
      },
      mangle: { toplevel: true },
      format: { comments: false },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core React runtime — highest priority, always cached
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/scheduler/')) {
            return 'vendor-react';
          }
          // Router
          if (id.includes('@tanstack/react-router') || id.includes('@tanstack/react-query')) {
            return 'vendor-router';
          }
          // Animation — framer/motion is large, isolate it
          if (id.includes('motion/') || id.includes('framer-motion')) {
            return 'vendor-motion';
          }
          // 3D — Three.js is enormous, isolate completely
          if (id.includes('node_modules/three/') || id.includes('@react-three/') || id.includes('@react-spring/')) {
            return 'vendor-three';
          }
          // Icons
          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'vendor-icons';
          }
          // DFINITY / ICP SDK
          if (id.includes('@dfinity/') || id.includes('@icp-sdk/')) {
            return 'vendor-dfinity';
          }
          // Radix UI and shadcn — can share a chunk since they're always needed
          if (id.includes('@radix-ui/')) {
            return 'vendor-radix';
          }
          // Recharts / charts
          if (id.includes('recharts') || id.includes('d3-')) {
            return 'vendor-charts';
          }
          // Large data files — split into own async chunks
          if (id.includes('src/data/ncertContent')) {
            return 'data-ncert';
          }
          if (id.includes('src/data/iitData')) {
            return 'data-iit';
          }
          if (id.includes('src/data/blogData')) {
            return 'data-blog';
          }
          if (id.includes('src/data/aiTeacherResponses')) {
            return 'data-ai-teacher';
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
