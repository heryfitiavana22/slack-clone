import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
console.log(path.join(__dirname, "src"));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src"),
        },
    },
});
