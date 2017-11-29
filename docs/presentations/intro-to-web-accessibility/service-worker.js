"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","cf7b72b3fac4aa9c7b99101f79408552"],["/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/static/js/main.44e8b4ae.js","4dcfcfc9b2745a9638a6fa163a029f5a"],["/static/media/accessible-parking.539a1bc3.jpg","539a1bc32415d7e0be810fb341fb8bd0"],["/static/media/accessible-sidewalk.4b2a98c5.jpg","4b2a98c562aa1cfe182d17e7d6297f03"],["/static/media/adaptive-strategies.2b3a46e9.png","2b3a46e96c43421d11745fc03ac02fa5"],["/static/media/assistive-technologies.c0d45164.png","c0d45164a4bfe1f7641d87c82672a752"],["/static/media/checklist-p1.4f4e650f.png","4f4e650f07e946aa06f28fc7656e0623"],["/static/media/checklist-p2.04e57257.png","04e5725795ffd7e2ee8b3a2a8b4349cc"],["/static/media/checklist-p3.15874199.png","1587419913840ce1d7f080e1b92da5e3"],["/static/media/checklist-p4.dad7f038.png","dad7f03894f624a4411c7eccd422583d"],["/static/media/companies-sued.be52e642.png","be52e642a8431a8b584cdb0660afda6c"],["/static/media/example-apple.b606c4d6.png","b606c4d63c76219fec74e00828d874a8"],["/static/media/example-door1.3920fb2a.png","3920fb2a2d303dc36de430b7bc0a97b6"],["/static/media/example-door2.2ef829f0.png","2ef829f040256845f09eaff2b147c7c1"],["/static/media/example-door3.71207f55.png","71207f55152d65a865f12d99bccea1c9"],["/static/media/example-figure-auditory.31db6d91.png","31db6d916756f1bc5a2a628264f3bcfa"],["/static/media/example-figure-mental.00bf4b51.png","00bf4b51a97ff9e15fe7208c4e47b892"],["/static/media/example-figure-physical.29de94b3.png","29de94b3821511e72c855b9c31775e9b"],["/static/media/example-figure-visual.aa4818e9.png","aa4818e903dd4c5f646f8230c7af2d39"],["/static/media/example-marketwatch.616028c0.png","616028c0507413be51496a76cdcfa266"],["/static/media/example-twitter.f9595449.png","f9595449212de24e08aa16a993a84b1e"],["/static/media/guideline12-example1.16c30d0e.png","16c30d0e495b545d7e8f59b29ac7b83e"],["/static/media/guideline21-example1.2b2205bd.gif","2b2205bdacbfffefedc9805c702302fd"],["/static/media/guideline22-example1.65ecac6b.png","65ecac6b6fd896e8e254f009a99939de"],["/static/media/guideline22-example2.b8fe3b1e.png","b8fe3b1e01f35e59294753b4601f1277"],["/static/media/guideline23-example1.e419ee79.png","e419ee7935bf619f4f7c79ef65cbd30c"],["/static/media/guideline31-example1.cf533e45.png","cf533e4597aaf9a9a788892dd45fc73a"],["/static/media/guideline32-example1.b986faaa.png","b986faaa8faa4938c09ebe3a27a4fca7"],["/static/media/semantic-markup.90a42d4d.png","90a42d4d8c70337ee4b8dd7bcf44ba06"],["/static/media/w3c-accessibility-standards.a0ae4b55.png","a0ae4b55a467cf4c875d0954a2ef8336"],["/static/media/w3c-design-standards.cf7dbdc4.png","cf7dbdc4320712ec93298a636ddc2523"],["/static/media/w3c-standards.fd9307bb.png","fd9307bb0283177770aeb8612c3b6a95"],["/static/media/wcag-conformance-levels.8bb08717.png","8bb08717cc19ac5e216ea9d21ec11579"],["/static/media/web-accessibility-components.203c0800.png","203c080015f462c8c68213c796f92f62"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});