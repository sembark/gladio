self.__precacheManifest = [
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/_app.js",
    "revision": "a54cd8daa7aead0969f0"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/_error.js",
    "revision": "e160fdd79c2603303c57"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/components.js",
    "revision": "f946aa8e9ee424e591b3"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/components/button.js",
    "revision": "a2755fbfbb5705872f5e"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/components/dialog.js",
    "revision": "62b3cde73acbf9566453"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/index.js",
    "revision": "4039e3c8b4633c0b2aea"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/styles.js",
    "revision": "95489a939b578bcdee5c"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/styles/components/button.js",
    "revision": "f179124f1d36e3e8a07d"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/styles/foundation/breakpoints.js",
    "revision": "3a3ed76a1f67f3e2391d"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/styles/foundation/colors.js",
    "revision": "cf40760db26825772591"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/styles/foundation/spacing.js",
    "revision": "64f664f1f4c81a2227dd"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/styles/foundation/typography.js",
    "revision": "28c3bf233d5fbfbd7d1d"
  },
  {
    "url": "/tp-ui/_next/static/0_n1Eocgpb_JzC3zc-X7W/pages/styles/utilities/borders.js",
    "revision": "f14f7c82f3214e9e8dd9"
  },
  {
    "url": "/tp-ui/_next/static/chunks/commons.7f6fb5d5abe06fc25afa.js",
    "revision": "7ce104226422a26c9495"
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
