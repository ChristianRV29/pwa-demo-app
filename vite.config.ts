import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	resolve: {
		alias: {
			'@/api': './src/api',
			'@/components': './src/components',
			'@/constants': './src/constants',
			'@/hooks': './src/hooks',
			'@/layouts': './src/layouts',
			'@/theme': './src/theme',
			'@/types': './src/types',
			'@/utils': './src/utils',
		},
	},
})
