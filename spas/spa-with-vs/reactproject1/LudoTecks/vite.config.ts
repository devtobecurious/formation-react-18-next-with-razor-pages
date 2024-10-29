import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    root: './src',
    build: {
        outDir: './wwwroot/dist',
        manifest: true,
        rollupOptions: {
            input: './src/main.tsx'
        }
    }
})