const VERSION='end-auto-linker-pwa-v1';
const SHELL=VERSION+'-shell';
const RUNTIME=VERSION+'-runtime';
const FILES=['./','./index.html','./offline.html','./manifest.webmanifest','./assets/icon.svg'];
const STATIC_HOSTS=new Set(['cdn.tailwindcss.com','cdn.jsdelivr.net','cdnjs.cloudflare.com','fonts.googleapis.com','fonts.gstatic.com']);

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(SHELL).then(cache=>cache.addAll(FILES)).catch(()=>{}).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>!key.startsWith(VERSION)).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin===self.location.origin){
    if(request.mode==='navigate'){
      event.respondWith(fetch(request).then(response=>{
        const copy=response.clone(); caches.open(SHELL).then(cache=>cache.put('./index.html',copy)); return response;
      }).catch(async()=> (await caches.match(request)) || (await caches.match('./index.html')) || (await caches.match('./offline.html'))));
      return;
    }
    event.respondWith(caches.match(request).then(cached=>cached || fetch(request).then(response=>{
      if(response.ok) caches.open(SHELL).then(cache=>cache.put(request,response.clone()));
      return response;
    })));
    return;
  }
  if(STATIC_HOSTS.has(url.hostname)){
    event.respondWith(caches.open(RUNTIME).then(async cache=>{
      const cached=await cache.match(request);
      if(cached) return cached;
      try {
        const response=await fetch(request);
        if(response && (response.ok || response.type==='opaque')) await cache.put(request,response.clone());
        return response;
      } catch(error) {
        return cached || Response.error();
      }
    }));
  }
});
