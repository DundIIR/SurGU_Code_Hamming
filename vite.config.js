import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/SurGU_Code_Hamming/',
	homepage: 'https://dundiir.github.io/SurGU_Code_Hamming',
})
