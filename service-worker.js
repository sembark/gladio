self.__precacheManifest = [
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/_app.js",
    "revision": "cde49b5a477b2164c2ed"
  },
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/_error.js",
    "revision": "63e2754ece3ed2e0ab29"
  },
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/components.js",
    "revision": "b813830f794cdbcf0664"
  },
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/components/button.js",
    "revision": "676c5d260ba507253eb8"
  },
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/components/dialog.js",
    "revision": "cf1987452c905cf2775e"
  },
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/css.js",
    "revision": "21e11ef64784d1668490"
  },
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/css/button.js",
    "revision": "4f87130d6a0bffd95fd8"
  },
  {
    "url": "/tp-ui/_next/static/NeP0wFw3xZJfWSbeBRqVc/pages/index.js",
    "revision": "927f871d115c63e9b7ea"
  },
  {
    "url": "/tp-ui/_next/static/chunks/commons.d528213ceb00bb081f31.js",
    "revision": "bc694404e9dea7057d8e"
  },
  {
    "url": "/tp-ui/_next/static/chunks/styles.5065294f9795526b87ca.js",
    "revision": "0cd0f1a0d2299bcb4dcd"
  },
  {
    "url": "/tp-ui/_next/static/css/styles.1e90de67.chunk.css",
    "revision": "0cd0f1a0d2299bcb4dcd"
  },
  {
    "url": "/tp-ui/_next/static/runtime/main-ec35cce9f76d5d432859.js",
    "revision": "ec47794499bd9fb86c25"
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
