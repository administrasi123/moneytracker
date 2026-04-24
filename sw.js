const CACHE_NAME = 'money-tracker-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // CATATAN: JIKA ANDA PUNYA FILE CSS ATAU JS TERPISAH (MISALNYA SCRIPT.JS ATAU STYLE.CSS), TAMBAHKAN NAMA FILENYA DI SINI.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});