'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "c02f5b812cce3e5fdfc2fd5d928484ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ecda0267c38528ddea9e14717d2773f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ca4ae68465c52a1a7d105e513912794",
".git/logs/refs/heads/master": "7ca4ae68465c52a1a7d105e513912794",
".git/logs/refs/remotes/origin/master": "9e393db9f6f50b16bcb4d85bae94b292",
".git/objects/00/d7adb72458fe081ad9cd94485101bf2eb327aa": "c79327b21d4f06b5752ac908eb8eb589",
".git/objects/00/e7a4208c3cb768d0c0f60e9b3b31253ac819c1": "a908fac28d6b6d18e62304216f6cd187",
".git/objects/14/e8186f6351605113c2bfe19ad0c607213fc020": "838e81e0b47fa0486cbe10c06234c16a",
".git/objects/16/c69c5918872cf3c36fd8f4f8305f4a2f007219": "5b922ae4582bf1d3e9ce0ba2492289d7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/06a887f9803a1c891c7bdf32556c51a2b2b1f4": "dfd7b98168c6effec768124e625834ee",
".git/objects/45/f41c419a366394ceeb7c35c40a9ffd4dfede2b": "4e0b5f2abcf7a54f9fd0144c83807b03",
".git/objects/52/1b3c296184713ae6723741083fa139006f7c33": "3903b188c26dc0ebf8e9c04410bf7afc",
".git/objects/53/5d31c296431400fccca902997d3330a4e19779": "bfde472c8a6350e1afa45e8d4be988eb",
".git/objects/86/df5e7a4228cc0ee7dd98f702b4f3299bc14fa6": "c7460cde2cc9f07d5b367ce99ed91657",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/260d554109fcd30b019426521e57ba863ce9dc": "aa483b5d5e50ee148ff156c6bfa457fc",
".git/objects/9e/5e2bcb5529a157626f83a9222be3b8259c364c": "d26dae77ecd98f552612a386a5bb4a67",
".git/objects/a1/9224e09a0ec0af30223b119ffde8f9bf0e5cce": "d5f4fdbb1f954fed2448f10269590a14",
".git/objects/a4/90315852fd72af6a698f6055da9efba075dd59": "80959e5ad3922a839a430c4fa8aa90b1",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b5/b9bddbef90e9f16ecc3fea753e6c4b0f7664b4": "d7548e682dae4d00c350bb17a90b97e7",
".git/objects/b5/eebc812d6bb83f2c60fc84548d4372d34e82a6": "a7398b689a96ae63526e79b1fd32affb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d4/ab1ced42a6a1ceb9b55eaa5b60a129e27cef8d": "3f21be99644def5403ec0293e32f8d56",
".git/objects/de/377b7947b38f6f04f8cd7fb6f9749a4fa28768": "a4c076d99180b5c7449a19024469599a",
".git/objects/de/9d5e685d4d1d708d50d03feea17dde475cbcb7": "9f1bedae4fab2e5b96a616f37d50ca7b",
".git/objects/e3/39bb527a14f078f8b4301af742c372d2fae704": "b1a0482baf460b6a97eba341c41f3320",
".git/objects/e8/6d1a3c01e51f33664b5999b821f5be7f7a6390": "4e315684b5e0887525b0cb18c89a6af3",
".git/objects/f1/28240bcedcb58944af7d31f071b1c883a287b7": "43bf0dd5f469d544480810c4ae1f0f7e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/5a02937abcd5da0d822c2b7820e4283cdd11ba": "15501d0d1d6d79b1eadb456374480d64",
".git/refs/heads/master": "7e7c963ef6550b5cdc00aa7b2aecb71e",
".git/refs/remotes/origin/master": "7e7c963ef6550b5cdc00aa7b2aecb71e",
"assets/AssetManifest.json": "91717fb9ab9c9aac1c6eaf6593d35b48",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/login/assets/logos/apple_black.png": "46834f49b91e093324f18cd433056e6a",
"assets/lib/login/assets/logos/apple_white.png": "df5517378f9daa313754cc1daf05a7cf",
"assets/lib/login/assets/logos/facebook.png": "fa832265aebcc42915a136fc441ef60c",
"assets/lib/login/assets/logos/github.png": "1607a3a71b55547fb4da1ce188c1bc1b",
"assets/lib/login/assets/logos/google.png": "3e26049d9396f49912688a986b4027b8",
"assets/lib/login/assets/logos/microsoft.png": "0c29638c7558632a1a5f053d344405ba",
"assets/lib/login/assets/logos/twitter.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/NOTICES": "3f3c43fc4d557bfe4a37792437af6b2f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d719453f7e2890929a8a5e98a813e10f",
"/": "d719453f7e2890929a8a5e98a813e10f",
"main.dart.js": "1dfb2949d3bfa3dc1e143ec59c09b3c3",
"manifest.json": "0ee3afa10757db552d76655a07686b96",
"version.json": "f229e022760611b6e401717bc0374fd0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
