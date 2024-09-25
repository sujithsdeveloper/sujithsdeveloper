'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ca61e0ab10a43fd53475643ac19785ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8b229ccc677259a30f72d03ee858e44a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc9ed2cbd6c16ec9ed7d0398fc8356d0",
".git/logs/refs/heads/main": "9d5c0769d205415de64a841bf639a721",
".git/logs/refs/remotes/origin/main": "82ceb865de39ae49851a4aa0566df10e",
".git/objects/01/6b0a2640f477a8d884082e6089f60af761f7d0": "d1dfdfda4e0fd9d90cbbfc51372f095b",
".git/objects/03/31ca29fec08970c65e5ab8083a1a4d6f066db5": "baf4bed65fb5c3de709fd42322f8e3b8",
".git/objects/04/135f2647e2b2ddac0bf647cdec0018b9b784dc": "3dfc73ad767a662b4675061aa1b23f43",
".git/objects/06/770e63639d0c8f2ede17e0c8401a5feda58526": "39d88af522a5287dbc1488f1f3c0cd92",
".git/objects/06/a3ef0262dd0e95158dfd18847da0ebbb5b757a": "2846d71886a005942f42bf0b6765adac",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/17/58245138b43f6222d8a84275a9f5917f8458d5": "ac8672bf31e881d9ea1df5f9525689ed",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/dbbd094037aa59b9af93691a0ac17523f39e63": "512080c06f39c229e74bb6a5209a4fbc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/b82f912280d993337779eca306fb528c19bfe9": "50d8dbbb87e6abcc75ff6cbee2d4cab0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/fdffb857698fb50142a90739a50faa7a80b1d9": "a973866fdb9388a71c7dbf357b31e11b",
".git/objects/28/b27983c3e375b3d4f7e1d240ac69e097d4bbfc": "75596b785f1f31889c98527af9afbf2e",
".git/objects/2b/58631a8e34bdd66c885013fcf6f5ecfa2e3084": "71567fc6975bef3c84e75684766ab2aa",
".git/objects/34/331a9e95a00eebd771b52e78a3d0ca40faef38": "e64c2d8d68d1b9d23b1f97ef9dce1b63",
".git/objects/3f/21c50559faac64c506323bc8bde3be0fb8e243": "12d4772429e0ece401bcdb69bbafc541",
".git/objects/3f/adb3ce164c12472f802c791287371fd9e35c30": "170335fc0bf3e260588f1fec052932b8",
".git/objects/42/7be4e1e48f3e7137d4dfc41302273bf8bae0ae": "740229ac47d7947f45f21bc9d0e0c50a",
".git/objects/45/141abe621ceb25920833aa7de09277dec750ea": "55da55258a884797b4a3ebc3dbfe4a3b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/81e7c88a1e3659f283d530984b4232cd80ab71": "64bd8e937336531f802265672bc1b1c9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/50/c79912810a6e8d199c6e31dfd6f8f1025fee42": "c479c9cdca1d4644a1200ba257f96274",
".git/objects/54/0e0fb1d1c053e89e6cf4dc477adae82e68bd63": "a542cc9b8eb7f5e97acca8940883682e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6b/11a4f13abd8ec2c29e9bb3ae32337a68265e36": "71f6269abcb1348794095d0f494915b0",
".git/objects/6f/fd51d4b396813f3176fac587a10fc88fb18fe7": "656a6bb6e1bfd9303830607a41b5ed23",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7e/1ce5ff4c249af7f57c697002f91c3ef6a9ce79": "87144b6238fec01306c85998247eaf6e",
".git/objects/82/c5e5d6785f47284ef100bda40b4519ccd1eed6": "f56d0735157793491c8e2eb508f226b9",
".git/objects/84/d4c0c756f770fa0f14d268fcc5bafe3ba96f06": "20fb792d06dcd1947e31b6ff9d95cc31",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/afc2043260bec52cf02efe2783879d25de4d5b": "7f6908551bfa06bb016527d5da97fcdf",
".git/objects/a1/0c0127acf66c9ebab98c66d1ef137e07c35558": "08f182fa9301093973119619c5d2862c",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/838900afb8abba5e5d6abf703f45e864eec83c": "47865422d59ccf70faa52703325677df",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/cd6edc044a9deef6f59cb82567c9cc2e595b7f": "3c5b18776afcf480a51bcc8d61465608",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e6/e4ce2a13f112dd9be44ecf629836452960b62d": "a2fdae9780f22bf7eee0d3e5909a8000",
".git/objects/e7/dbc98b6d9ad14d06b89137b2d72312753ef237": "8002aec7639ba2397609b00dc3143054",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/d5a83f3ade445e776c4aeb63e93b02b7aca4ba": "20d8cf10dd30c6bd5b3b0532efc96a55",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/2222cd9787801065eb03a8f096ae4ca0ef2cf0": "d79f2d809e940197706265d4c8e5a791",
".git/objects/f8/acb49c8065e52ae74bad676f42a0d1213c8986": "273fbfad99a37d7acc14b648fc863442",
".git/objects/f9/8d5916d022a3c8d53d642f228803419843b82d": "c2048c3ef6adc66f294141f2b8337493",
".git/refs/heads/main": "14146b29eb4f90f26a8fd7bea268ef61",
".git/refs/remotes/origin/main": "14146b29eb4f90f26a8fd7bea268ef61",
"assets/AssetManifest.bin": "0ff48889deb138980bce5cfc899f94fb",
"assets/AssetManifest.bin.json": "66cac5096ef35b8d1787e32fc3e9a2a5",
"assets/AssetManifest.json": "f707ade2e6b687417d07337893dc03cd",
"assets/assets/animations/HomeAnimation.json": "aadbea63374c75736482a9d64b9257af",
"assets/assets/animations/HomeScreenAnimation.json": "bed093370396ef68b13fea5f7702cd5e",
"assets/assets/images/C.png": "307bf51b42061eb5dc0a79deddc10813",
"assets/assets/images/Dart.png": "e8f4ae7a36f98f7648f117ee356f023b",
"assets/assets/images/Figma.png": "2ef3cc295b969860412cd044be6f81c9",
"assets/assets/images/Firebase.png": "bc800ada43bb56100c534de89ba7bdc6",
"assets/assets/images/Flutter.png": "4cb0091a4af5dcf74304f470d3183d37",
"assets/assets/images/gitHubImage.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/Java.png": "05f161af5a5e7c1faf0d4251b564670b",
"assets/assets/images/montra.png": "d8e727d66b39e33e6519388eb5d4cb1e",
"assets/assets/images/MySelfImage.jpg": "26afc0d60bd18d927983115d81739622",
"assets/assets/images/NetflixLogo.jpeg": "b4bd1d92a56a238f6c4b2fe502dfec93",
"assets/assets/images/portfolio.png": "fd20f3ef708bee79ee15d277f270eb76",
"assets/assets/images/Python.png": "66613da9a8fad6a4485207c32aab0242",
"assets/assets/images/telegramLogo.png": "286e1b82f7937fe6d5ace7f71813d30e",
"assets/assets/images/todoAppLogo.jpg": "af6b921f094aa612f57b0d2e3f3aedf5",
"assets/assets/images/whatsappLogo.png": "6acf414c3e19aa945cf24307cd1715f4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d9522e6bd8f6cc5d7e0f249651166a96",
"assets/NOTICES": "334242850b187e528d7c7cdb2bfe043e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7bd2d12a7ec22fbc886154af80c415c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bb129261409fdf99e0631f212ff36d0",
"/": "5bb129261409fdf99e0631f212ff36d0",
"main.dart.js": "4ec256de1abb976eec0935e74f49cbfe",
"manifest.json": "bae248d31e4f8733acb2f353550226d3",
"version.json": "696e9d4932b7ca674bd60f27894c8396"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
