!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.db072b7d11b56c5c060394cab39e75c5.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.8d534693fac0850f9a1e7147cebf07db.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.8dcef1eceffedffe3a64bc7bf0da26c8.js","recommendations/main":"https://c.disquscdn.com/next/embed/recommendations.bundle.4069804080c08ddbf1d00d5f34e69184.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","recommendations/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.f9554506a08a1cc2b021f0dfc3f59ebb.js",a.body.appendChild(c)}();