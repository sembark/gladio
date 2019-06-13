self.__precacheManifest = [
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
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/_app.js",
    "revision": "89592fdf2b08ed9dde1d"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/_error.js",
    "revision": "53038a6215effb46aba7"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/components.js",
    "revision": "39cf7b4ddcbf0398a549"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/components/button.js",
    "revision": "e85dcc4c911d7e22a12f"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/components/dialog.js",
    "revision": "998f932aee3d4fa16676"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/index.js",
    "revision": "13983ecc5d112f6a1b30"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/styles.js",
    "revision": "8dcab8f889be8e8fa6cf"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/styles/components/button.js",
    "revision": "0cb25a2ac7a2e1bb8bfc"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/styles/foundation/breakpoints.js",
    "revision": "27f787680e1ef6f350a4"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/styles/foundation/colors.js",
    "revision": "cf1e010b7c7e2c305c2c"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/styles/foundation/spacing.js",
    "revision": "ae33b4f3a2a3eb495fbe"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/styles/foundation/typography.js",
    "revision": "381b4eb7ba28f84118b3"
  },
  {
    "url": "/tp-ui/_next/static/pzJy0L_ffp4bm4lynS1c4/pages/styles/utilities/borders.js",
    "revision": "ae5a4758395923b9f3b0"
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
