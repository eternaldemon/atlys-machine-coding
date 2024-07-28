import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' //removed swc

// https://vitejs.dev/config/
export default defineConfig({
    base: '/atlys-machine-coding/',
    plugins: [react()],
})