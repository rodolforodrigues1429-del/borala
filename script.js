// Register the service worker (updated to use /service-worker.js)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Service Worker registration failed:", err));
}
