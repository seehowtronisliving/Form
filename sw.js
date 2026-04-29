const CACHE_NAME = 'vis-v2'; // Bump this number (v2, v3) every time you update
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(['index.html', 'manifest.json'])));
  self.skipWaiting(); // Forces the new version to take over immediately
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
