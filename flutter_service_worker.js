'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e942031b8089ddd347c25178ac231ebe",
".git/config": "9cb1b42fbd0bfa6369be5f7e2655c803",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "e4831615c1f0a7915fc878cdd47aed48",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a6189394e55314be419aef8a5741bc36",
".git/logs/refs/heads/main": "4c6cdaab4a55ed19e3ee866cc2ef2495",
".git/logs/refs/remotes/origin/main": "49f36fd90067e30b3576ad5f9ad034fe",
".git/objects/07/962765d77c30e1d58bce12307b6b9537fdb6ce": "0ab7e2a567bf93775c0639000c0ea746",
".git/objects/08/c3d0e3eeeb30009f71bf752a07c06bb38958aa": "51fe64fed867ecc34e45ef3c9c1e817a",
".git/objects/0a/ac93541dbac3489c867aa7ea3a8b1dbe2eadca": "febcd643acbb3479151f051fa8dd4f80",
".git/objects/0d/7932e7d3b8e58bf1ffd85ce6152c6b7f06e5ed": "4b73dd61cc835b5d6b2f6c42b71760f8",
".git/objects/15/0e3108c95099f7eb060671b3b03e7f784d368a": "6d1a2f9bf3e67996e0339b15f2bb8e98",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/4d674d6b3023a05cf9e4991f82c5f8bca9968b": "532fd9c605fdbbbf71fe48272ef6905e",
".git/objects/2c/e1633ed5f2533b0b247069173a20e9e50a2db6": "00e36125f4675da17128b009ae8f48a8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/629cbbbaaeed00c508a262f9a94e35525609d1": "b4f454fa5bbd3b7fd2929ffc32377022",
".git/objects/39/8dcc9bdf64e160551e6c6ace2aa61f1e276574": "d53744973a4f8b0c6b3deb220d8890d1",
".git/objects/3a/2254088e60f9a1458444df0ea77deda3961a69": "9c0b057b50a98d8d04d0330e49f5ea74",
".git/objects/3a/b14a730f02e1b9b30e6911f71945c66d66c8e6": "e6c19a1438c450500ce51edf2b967f8e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/1fee0e3e1115fff520e46121e20699d805d5bf": "8f8e6f538595fc761f5ad05a313e5421",
".git/objects/53/0ff42b4c8521cacfcb73c92b77f810de76fc8b": "1157ce93d1d7aadb75dd76ba845f3836",
".git/objects/58/5bf0905a407f2a96822ca440aa54dfc93c8fd5": "7b8125013f8c54d47985724776e66070",
".git/objects/60/13b08f39842a732d942454338cb44ea1a3c707": "f241937b78f6dac3674c9a21c3712e0c",
".git/objects/6e/32d8e85e70872d5f6c6665bb6da29c54d89bef": "80ca490548aef7b3463efe19cfe11292",
".git/objects/6f/9eb9f5db86c2b315371985ee3570a249ccdc68": "a680d856c398243bdf0d00087f6661c8",
".git/objects/73/8e10b2f6c865fae2e69c664a3efbc2606e90f7": "cd5951cecb0159e6437cc3e8622ca907",
".git/objects/77/2a1ac7a39bc7e84ed49820c1ee323630ac37de": "4d815f9092b1dd8da031f336867e195d",
".git/objects/78/6f4e99ed66b2f7972fb0b0284dc758ed9ae7eb": "8615ede2b9a7e0ea08a4631745a5455b",
".git/objects/7c/ecd0539fd9e8c0ab542c09acc698b338d772bc": "9dc63c114d7bad3a83690d40ce0e547e",
".git/objects/86/574103b344a91374e729134e965690c026cb0a": "5ecd6481b8463c756ec21087de16591a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1884b50a149b3881560e6ec796442a12aaebb6": "4b797e861c20b4f8518d600c5d5a0b5a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/2e6f6be14b2cfd5ab52a799ed993f88524a8d3": "324c289ea16733f3ce61a473b712bee2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/af/344d721fc50308747e2e21a5b31db90ed2ea50": "44a0b1a70b646bf0ff8c545045367399",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/f51e15c308f20b3897de0d8799b0a9a7c97de6": "371d6a081bb5e40abd5a6743ca980540",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/c0e927ca1295290f8711b80cfc910e754522f5": "65b25a020a6471d01012a121baf7067f",
".git/objects/e9/42f9d5f484e6315b8e7519ab58e82bbd83974d": "39eb299831265372841ffdf78ed91d9f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/de79059b7a33801ef923dee7b6899224ea2aa2": "35b7682459d4bc2e28c279ea45683813",
".git/objects/fd/3f7bd237621875201b9362a83e6ff6bf985847": "43a337fe46ec1fa53beb4c9501629516",
".git/refs/heads/main": "0fcba13be2dbfa264361bebbb81981ef",
".git/refs/remotes/origin/main": "0fcba13be2dbfa264361bebbb81981ef",
"assets/AssetManifest.json": "f7e13a39bd38102a01324ac67b1f33a7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/NOTICES": "afe3b1288a6dbdac09ddb0a029876283",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ee5475e08f3a71ac8f66513b90ea7a1",
"/": "0ee5475e08f3a71ac8f66513b90ea7a1",
"main.dart.js": "a8d2f8e8ff8528fc166ee6420cd6a519",
"manifest.json": "af7acb26d307253a06fc6357d1c19ad3",
"version.json": "47df9f4925971d8cd404e0c65c9a9301"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
