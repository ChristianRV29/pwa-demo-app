import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tsconfigPaths(),
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			strategies: 'injectManifest',
			srcDir: 'src',
			filename: 'sw.ts',
			injectManifest: {
				swDest: 'dist/sw.js',
			},
			manifest: {
				name: 'PWA Demo App',
				short_name: 'PWA Demo',
				description: 'A demo app for PWA',
				background_color: '#ffffff',
				theme_color: '#578fca',
				start_url: '/',
				display: 'standalone',
				orientation: 'portrait',
				lang: 'en',
				icons: [
					{
						src: 'manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: 'manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
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
