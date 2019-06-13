self.__precacheManifest = [
  {
    "url": "/tp-ui/_next/static/chunks/commons.0a2886852065d3b7d401.js",
    "revision": "5e09b08ce4db8465a7aa"
  },
  {
    "url": "/tp-ui/_next/static/chunks/styles.8e3045b410646f29e0f1.js",
    "revision": "7869c89c938116e34739"
  },
  {
    "url": "/tp-ui/_next/static/css/commons.28b7d82c.chunk.css",
    "revision": "5e09b08ce4db8465a7aa"
  },
  {
    "url": "/tp-ui/_next/static/css/styles.8ee785c6.chunk.css",
    "revision": "7869c89c938116e34739"
  },
  {
    "url": "/tp-ui/_next/static/runtime/main-051b99919a70703155f7.js",
    "revision": "7360af26dba09bbe008d"
  },
  {
    "url": "/tp-ui/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
  },
  {
    "url": "/tp-ui/_next/static/uPgBhHkuKPuSk6eHJmMTN/pages/_app.js",
    "revision": "51577c92d3971936ff60"
  },
  {
    "url": "/tp-ui/_next/static/uPgBhHkuKPuSk6eHJmMTN/pages/_error.js",
    "revision": "a6c891d6e68c8e89591b"
  },
  {
    "url": "/tp-ui/_next/static/uPgBhHkuKPuSk6eHJmMTN/pages/components.js",
    "revision": "729e0e40ad0ecc2178d3"
  },
  {
    "url": "/tp-ui/_next/static/uPgBhHkuKPuSk6eHJmMTN/pages/css.js",
    "revision": "08bde921564381611de8"
  },
  {
    "url": "/tp-ui/_next/static/uPgBhHkuKPuSk6eHJmMTN/pages/index.js",
    "revision": "7d740c25169eb5160bfb"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/favicon.ico",
    "revision": "f249916aa5c2ff25a7bfd0a83e6e6971"
  },
  {
    "url": "static/logo.jpg",
    "revision": "65b7ad919074c6b4250608cd30878494"
  },
  {
    "url": "static/manifest.json",
    "revision": "be7179934752ed49df1dbb1018c9c9cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
