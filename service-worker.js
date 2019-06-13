self.__precacheManifest = [
  {
    "url": "/tp-ui/_next/static/6HSReo96Qx8dsvoP4Wt-2/pages/_app.js",
    "revision": "5bc0d3778ca4c16e918f"
  },
  {
    "url": "/tp-ui/_next/static/6HSReo96Qx8dsvoP4Wt-2/pages/_error.js",
    "revision": "85782ffea49a3c985bea"
  },
  {
    "url": "/tp-ui/_next/static/6HSReo96Qx8dsvoP4Wt-2/pages/components.js",
    "revision": "56203c6b4954fed0c93b"
  },
  {
    "url": "/tp-ui/_next/static/6HSReo96Qx8dsvoP4Wt-2/pages/css.js",
    "revision": "d346ae4088bb31e381c7"
  },
  {
    "url": "/tp-ui/_next/static/6HSReo96Qx8dsvoP4Wt-2/pages/index.js",
    "revision": "e51513d8b92037144a67"
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
    "url": "/tp-ui/_next/static/runtime/main-a21604b48a41d27a172b.js",
    "revision": "9d250441aa08cd347361"
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
