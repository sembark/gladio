self.__precacheManifest = [
  {
    "url": "/tp-ui/_next/static/Ar2mpIRRTe1sY4c1Lcllj/pages/_app.js",
    "revision": "c1c7f22d59c90e7d2ad3"
  },
  {
    "url": "/tp-ui/_next/static/Ar2mpIRRTe1sY4c1Lcllj/pages/_error.js",
    "revision": "de8dc184f88a66db9056"
  },
  {
    "url": "/tp-ui/_next/static/Ar2mpIRRTe1sY4c1Lcllj/pages/components.js",
    "revision": "3fb587f02bbc22718500"
  },
  {
    "url": "/tp-ui/_next/static/Ar2mpIRRTe1sY4c1Lcllj/pages/css.js",
    "revision": "5f918954987d0cf0d357"
  },
  {
    "url": "/tp-ui/_next/static/Ar2mpIRRTe1sY4c1Lcllj/pages/index.js",
    "revision": "9bee3807ad5e66ee7fbd"
  },
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
    "url": "/tp-ui/_next/static/runtime/main-430aae62256c8a179a1c.js",
    "revision": "d30172d735e865a4e354"
  },
  {
    "url": "/tp-ui/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
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
