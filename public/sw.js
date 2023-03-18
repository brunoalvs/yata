// Here, we defining a service file to the Service Worker, which will storage in cache the needed information to the App works offline.
const CACHE_NAME = 'yata-cache-v1'
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  'https://fonts.googleapis.com/css?family=Inter:300,400,500&display=swap'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener(('fetch'), (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  )
})
