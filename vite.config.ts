// import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression"
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        viteCompression({
            threshold: 10240,
            algorithm: 'gzip', 
            ext: '.gz', 
        }),
        viteCompression({
            threshold: 10240,
            algorithm: 'brotliCompress',
            ext: '.br',
        }),
        ,
        visualizer({ open: true, gzipSize: true})
        ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom", "react-router-dom"],
                    form: ["formik", "yup"],
                    icons: ["lucide-react"],
                    swiper: ["swiper/react", "swiper"],
                }
            }
        }
    }
});
