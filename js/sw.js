const CACHE = "bow://32.137.134.93:?cache";
const ASSETS = [""];
const Debug={
  proto:{
    "bow":{id:0x01c96a,value:{}},
    "DB":{id:0x02c2,value:{}}
  },
  contract:{
    {id:0x074a7e91,name:"BowEx",value:{}},
    {id:0x01a6e0c54d,name:"BowGov",value:{}}
  },
  lab:{
    {id:0x013d59dbecf1,name:"coditor",value:{}},
    {id:0x01ad32f907,name:"ByJove",value:{}}
  }
}

self.addEventListener("install", e => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(ASSETS);
      self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    (async () => {
      self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    (async () => {
      return fetch(e.request).catch(async _ => await caches.match(e.request));
    })()
  );
});
