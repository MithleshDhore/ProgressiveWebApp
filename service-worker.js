/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["4.dd77cc9a389082233e62.png","dd77cc9a389082233e62920ec8b28c40"],["assets/styles/imports/_badges_labels.scss","6b9b758c5c84009b1a0a70f2e2a6544e"],["assets/styles/imports/_base.scss","f6b30ec073e6daedf5d8dd10be6a4633"],["assets/styles/imports/_buttons.scss","66ca4f2290eb393e5ada81e087d35f76"],["assets/styles/imports/_chat.scss","67a89603c2830180bb5083cbdc31308d"],["assets/styles/imports/_custom.scss","f91545e05d022d09f91e8382bd8da47e"],["assets/styles/imports/_elements.scss","5a080683047b132e4be8249fd4f11e8d"],["assets/styles/imports/_landing.scss","8b42d2a0dfb24e34fae860e003e88c4c"],["assets/styles/imports/_md-skin.scss","225ee21c21f7f24dddf9bf0593c661dc"],["assets/styles/imports/_media.scss","15a868f92d5699cfd8df6a87c9df0d01"],["assets/styles/imports/_metismenu.scss","d3df4f3be799f866f9a9ed7d92b568e4"],["assets/styles/imports/_mixins.scss","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/imports/_navigation.scss","e2e09b81c5d54831c268061b62f1adf1"],["assets/styles/imports/_pages.scss","10703c8129601489e1cdef4218646e76"],["assets/styles/imports/_rtl.scss","1ae8f846bde62a66a27012a8401a3341"],["assets/styles/imports/_sidebar.scss","c33d5965c4a43cde779ce7b12a79e5b6"],["assets/styles/imports/_skins.scss","ef996669d4d0adf73bc8750f0a6f6462"],["assets/styles/imports/_spinners.scss","ca61db4f024bb38980c161f1d61c5549"],["assets/styles/imports/_theme-config.scss","f00783a761fa82e0720c9761ef9e3892"],["assets/styles/imports/_top_navigation.scss","94dee036785567eb53c71e5dbe2e603b"],["assets/styles/imports/_typography.scss","6fa96b8ead942f389eb9b282ef0fd073"],["assets/styles/imports/_variables.scss","68e1f7a88d4ba45d0637a59c61e54eb4"],["assets/styles/patterns/1.png","25a0bf70f41670f02bce40b21b4c3b0e"],["assets/styles/patterns/2.png","cc23b5a5af7b2986a80d2b2854141a72"],["assets/styles/patterns/3.png","7615d7da6d79973611a742d361255dfe"],["assets/styles/patterns/4.png","dd77cc9a389082233e62920ec8b28c40"],["assets/styles/patterns/5.png","8568e0bf0a553534a2f19bd655c732fa"],["assets/styles/patterns/6.png","eafbdc13a4e4a9e684649587736d1f4b"],["assets/styles/patterns/7.png","f0600094591074cc04cbf6c7a64617c8"],["assets/styles/patterns/header-profile-skin-1.png","85efa900c0fc12fee15a5398deba06e8"],["assets/styles/patterns/header-profile-skin-2.png","8307c45ca34d4af71912b535b6c05c54"],["assets/styles/patterns/header-profile-skin-3.png","bf471ec3d4085883e061ca35006e86e8"],["assets/styles/patterns/header-profile.png","2a634a94d5b175c41a71fac233a52f53"],["assets/styles/patterns/shattered.png","ea2316224d45899c59bc285ba09dd920"],["assets/styles/style.scss","e14942faf6a1eab6ab0b0d990e7a2909"],["assets/trips.json","e4539d55eacb3d40575ca5f57c98f9ab"],["assets/vehicleInfo.json","80a31c85754efb875372beaefee51bd9"],["favicon.ico","ed337d238a3d670e26fa98efb16f9a72"],["fontawesome-webfont.674f50d287a8c48dc19b.eot","674f50d287a8c48dc19ba404d20fe713"],["fontawesome-webfont.912ec66d7572ff821749.svg","912ec66d7572ff821749319396470bde"],["fontawesome-webfont.af7ae505a9eed503f8b8.woff2","af7ae505a9eed503f8b8e6982036873e"],["fontawesome-webfont.b06871f281fee6b241d6.ttf","b06871f281fee6b241d60582ae9369b9"],["fontawesome-webfont.fee66e712a8a08eef580.woff","fee66e712a8a08eef5805a46892932ad"],["glyphicons-halflings-regular.448c34a56d699c29117a.woff2","448c34a56d699c29117adc64c43affeb"],["glyphicons-halflings-regular.89889688147bd7575d63.svg","89889688147bd7575d6327160d64e760"],["glyphicons-halflings-regular.e18bbf611f2a2e43afc0.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["glyphicons-halflings-regular.f4769f9bdb7466be6508.eot","f4769f9bdb7466be65088239c12046d1"],["glyphicons-halflings-regular.fa2772327f55d8198301.woff","fa2772327f55d8198301fdb8bcfc8158"],["header-profile-skin-1.85efa900c0fc12fee15a.png","85efa900c0fc12fee15a5398deba06e8"],["header-profile-skin-2.8307c45ca34d4af71912.png","8307c45ca34d4af71912b535b6c05c54"],["header-profile-skin-3.bf471ec3d4085883e061.png","bf471ec3d4085883e061ca35006e86e8"],["index.html","d6ea7270c530eb3b3c6330ce836b05aa"],["inline.d0c573561c5cee8c1204.bundle.js","f947ddcb8adc17e067ac1bee9964fa09"],["main.eca85571a303a89778e6.bundle.js","d1793991a36df5cb9da40e36b10ba177"],["manifest.json","8b62750fd78f4cbd6e8dd42f373aab55"],["polyfills.b783bed98e5accf8b34f.bundle.js","186128cce951f4a960ef00a1e240d655"],["scripts.b153cb2c21e87c4ab96b.bundle.js","aa29c1ee84bf5bee7f685046b370620b"],["shattered.ea2316224d45899c59bc.png","ea2316224d45899c59bc285ba09dd920"],["styles.117b6df4ee78bd6eb423.bundle.css","117b6df4ee78bd6eb4234571fb177568"],["vendor.c674c31e7e9f80ef1cad.bundle.js","70ef4411393c75c98dbdc43e717619d4"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







