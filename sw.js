// sw.js - Service Worker pour les Notifications Push Modern Warrior

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Réception et affichage des notifications
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "Modern Warrior ⚔️";
  const options = {
    body: data.body || "C'est l'heure de ton rappel !",
    icon: 'https://img.icons8.com/emoji/192/crossed-swords-emoji.png',
    badge: 'https://img.icons8.com/emoji/192/crossed-swords-emoji.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
