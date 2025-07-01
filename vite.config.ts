import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      jsxImportSource: "react",
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
  ],
  build: {
    sourcemap: false,
    target: ["esnext"],
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/joy", "@mui/system", "@emotion/react", "@emotion/styled"],
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return "assets/[name]-[hash][extname]";

          const extType = assetInfo.name.split(".").at(1) ?? "";
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType)) {
            return "assets/css/[name]-[hash][extname]";
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
