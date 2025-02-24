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
			// Allows to service worker auto updates
			registerType: 'autoUpdate',
			// Allows run service worker in dev mode
			devOptions: {
				enabled: true,
			},
			// We can inject service workers manually
			strategies: 'injectManifest',
			srcDir: 'src',
			filename: 'sw.ts',
			injectManifest: {
				swDest: 'dist/sw.js',
			},
			// App configuration
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
						src: 'public/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'public/manifest-icon-192.maskable.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: 'public/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: 'public/manifest-icon-512.maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
			// Service worker configuration
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/jsonplaceholder.typicode.com\/todos/,
						handler: 'NetworkFirst',
						options: {
							cacheName: 'todos-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 5,
							},
						},
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
