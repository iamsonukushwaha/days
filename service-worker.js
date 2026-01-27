const CACHE="days-spent-v1";
const FILES=[
"/days-spent-pwa/",
"/days-spent-pwa/index.html",
"/days-spent-pwa/manifest.json"
];

self.addEventListener("install",e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener("fetch",e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
