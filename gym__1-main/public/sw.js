const CACHE_NAME = 'flame-fitness-v5';
const STATIC_CACHE = 'flame-static-v5';
const IMAGE_CACHE = 'flame-images-v5';

// Core app shell - only truly static manifests (never cache index.html here)
const APP_SHELL = [
  '/manifest.json',
];

// Images to pre-cache individually (failures won't block install)
const IMAGES_TO_PRECACHE = [
  '/images/flamelogo.svg',
  '/images/posters/client-gym-video-poster.jpg',
  '/images/posters/video-1-poster.jpg',
  '/images/posters/video-2-poster.jpg',
  '/images/posters/video-3-poster.jpg',
];

// --- INSTALL: Cache app shell, pre-cache images without blocking ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const staticCache = await caches.open(STATIC_CACHE);
      await staticCache.addAll(APP_SHELL);

      const imageCache = await caches.open(IMAGE_CACHE);
      await Promise.allSettled(
        IMAGES_TO_PRECACHE.map((url) =>
          fetch(url).then((res) => {
            if (res.ok) return imageCache.put(url, res);
          }).catch(() => {})
        )
      );
    })()
  );
  self.skipWaiting();
});

// --- ACTIVATE: Clean up all old caches immediately ---
self.addEventListener('activate', (event) => {
  const VALID_CACHES = [CACHE_NAME, STATIC_CACHE, IMAGE_CACHE];
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !VALID_CACHES.includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// --- FETCH: Strategy based on request type ---
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip non-same-origin requests (e.g. Google Fonts CDN, external images)
  if (url.origin !== self.location.origin) return;

  // 1. HTML navigation: Always Network-first so deployments are seen immediately
  if (event.request.mode === 'navigate' || event.request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }
          return networkResponse;
        } catch (err) {
          const cache = await caches.open(STATIC_CACHE);
          const cached = await cache.match(event.request);
          return cached || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
        }
      })()
    );
    return;
  }

  // 2. Images: Cache-first, fallback to network
  if (/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        try {
          const response = await fetch(event.request);
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        } catch {
          return cached || new Response('', { status: 404 });
        }
      })
    );
    return;
  }

  // 3. JS / CSS hashed assets: Network-first, only cache successful responses
  if (/\.(js|css)$/i.test(url.pathname)) {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(event.request);
          if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(event.request, response.clone());
            return response;
          }
          return response;
        } catch {
          const cache = await caches.open(STATIC_CACHE);
          const cached = await cache.match(event.request);
          return cached || new Response('', { status: 503 });
        }
      })()
    );
    return;
  }
});
