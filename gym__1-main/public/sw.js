const CACHE_NAME = 'flame-fitness-v3';
const STATIC_CACHE = 'flame-static-v3';
const IMAGE_CACHE = 'flame-images-v3';

// Core app shell - must be small and reliable
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Images to pre-cache individually (failures won't block install)
const IMAGES_TO_PRECACHE = [
  '/images/logoflame.jpeg',
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
  '/images/hero/hero-5.jpg',
];

// --- INSTALL: Cache app shell, pre-cache images without blocking ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      // Cache the app shell (critical - must all succeed)
      const staticCache = await caches.open(STATIC_CACHE);
      await staticCache.addAll(APP_SHELL);

      // Pre-cache images individually (failures are non-fatal)
      const imageCache = await caches.open(IMAGE_CACHE);
      await Promise.allSettled(
        IMAGES_TO_PRECACHE.map((url) =>
          fetch(url).then((res) => {
            if (res.ok) return imageCache.put(url, res);
          }).catch(() => {}) // Ignore failures
        )
      );
    })()
  );
  self.skipWaiting();
});

// --- ACTIVATE: Clean up old caches ---
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

  // Skip non-same-origin requests (e.g. Google Fonts CDN, pravatar)
  if (url.origin !== self.location.origin) return;

  // Images: Cache-first, fallback to network
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

  // JS / CSS assets: Network-first, fallback to cache
  if (/\.(js|css)$/i.test(url.pathname)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(STATIC_CACHE);
        try {
          const response = await fetch(event.request);
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        } catch {
          return cache.match(event.request) || new Response('', { status: 503 });
        }
      })()
    );
    return;
  }

  // HTML navigation: Stale-while-revalidate
  event.respondWith(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      const cached = await cache.match(event.request);
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })()
  );
});
