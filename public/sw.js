self.addEventListener('install', (event) => {
  console.info('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  console.info('Service Worker fetching', event.request.url);
});
