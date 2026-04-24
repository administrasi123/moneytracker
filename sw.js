const CACHE_NAME = 'money-tracker-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// PROSES INSTALL & SIMPAN CACHE
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// PROSES AMBIL DATA SAAT OFFLINE
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
