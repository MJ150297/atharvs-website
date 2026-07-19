const CACHE_NAME = "atharvs-v2";
const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/logo.webp",
  "/offline.html",
];

// Install: pre-cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Activate new service worker immediately
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  // Take control of all open pages immediately
  self.clients.claim();
});

// Fetch: network-first for HTML, cache-first for everything else
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // For navigation (HTML) requests: network-first strategy
  if (request.mode === "navigate") {
    event.respondWith(networkFirstWithFallback(request));
    return;
  }

  // For static assets (JS, CSS, images, fonts): cache-first strategy
  event.respondWith(cacheFirstWithFallback(request));
});

/**
 * Network-first strategy for HTML navigation.
 * Tries the network first; if it fails, serves from cache.
 * If both fail, serves the offline fallback page.
 */
async function networkFirstWithFallback(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    throw new Error("Network response not OK");
  } catch {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    // Final fallback: offline page
    return caches.match("/offline.html");
  }
}

/**
 * Cache-first strategy for static assets.
 * Serves from cache if available; otherwise fetches from network and caches.
 */
async function cacheFirstWithFallback(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) return cachedResponse;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    // For images, return a transparent placeholder if fetch fails
    if (request.destination === "image") {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/>',
        { headers: { "Content-Type": "image/svg+xml" } }
      );
    }
    throw new Error("Failed to fetch and no cache available");
  }
}