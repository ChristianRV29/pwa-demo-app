import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'

import { registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'

declare const self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
	({ url }) => {
		return url.pathname.includes('https://jsonplaceholder.typicode.com'), 'GET'
	},
	new NetworkFirst({
		cacheName: 'todos-cache',
	}),
)
