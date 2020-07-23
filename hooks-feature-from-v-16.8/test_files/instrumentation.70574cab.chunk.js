(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"./src/framework/perf/PerformanceLogger.ts":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/opentracing/lib/index.js"),o=t("./node_modules/react/index.js"),i=t("./node_modules/react-redux/es/index.js"),s=t("./src/components/session/useFlag.tsx"),c=t("./src/framework/reporter/performance.tsx"),a=t("./src/routes/RoutingContext.tsx"),u=t("./src/store/actions/debug.ts"),l=t("./src/store/selectors/session.ts"),d=t("./src/util/performance.ts"),f=t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),p=t.n(f),g=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),m=t.n(g),b=t("./src/log/datapupLogger.ts"),v=t("./src/util/observable/extras.ts"),_=function(e){return function(n){return m()({},e,n)}};n.default=function(){var e,n;return n={glyph_embed_commands:null!==(e=Object(s.c)().glyph_embed_commands)&&void 0!==e?e:"control"},o.useEffect((function(){var e=Object(v.a)(d.f,d.d,d.b).map((function(e){var n=p()(e,3),t=n[0],r=n[1],o=n[2];return{responseEndToLCP:new d.a(t.response.end,r.end),responseEndToFCP:new d.a(t.response.end,o.end)}})),t=Object(v.a)(d.f,d.c.map(_("fid")),d.b.map(_("fcp")),d.d.map(_("lcp")),e);d.h.observe((function(e){e||t.observe((function(e){var t=e.reduce((function(e,n){return Object.assign(e,n)}),{}),r=Object.keys(t).reduce((function(e,n){var r=t[n].duration;return e[n]=r%1==0?r:Number(r.toFixed(1)),e}),{}),o=document.children[0],i={html:null==o?void 0:o.innerHTML.length,redux:JSON.stringify(window.__PRELOADED_STATE__).length,apollo:JSON.stringify(window.__APOLLO_STATE__).length};b.a.log("client hydrated",{perf:r,sizes:i,experimentFlags:n})}))})),d.g.observe((function(e){return b.a.log("client resource sizes",{resources:e})}))}),[]),function(){var e,n=Object(i.f)((function(e){return e.tracing.tracer})),t=Object(i.f)((function(e){return e.tracing.originalSpan})),f=Object(i.f)((function(e){return e.client.isBot})),p=Object(i.f)((function(e){return e.client.isCustomDomain})),g=Object(i.f)((function(e){return e.session.user.id})),m=Object(i.f)((function(e){return e.config.performanceTags})),b=Object(i.e)(),v=Object(c.c)(),_=Object(a.c)(),h=null!==(e=Object(s.c)().glyph_embed_commands)&&void 0!==e?e:"control";o.useEffect((function(){var e;if(n&&v&&!f){var o=_(window.location.pathname),i=null!==(e=null==o?void 0:o.route.metricName)&&void 0!==e?e:"unidentified",s={"user.logged_in":Object(l.a)(g),"req.route_name":i,"req.route":i,"req.glyph_embed":h,"req.is_custom_domain":p};m.forEach((function(e){return s["req.".concat(e)]=1}));var c={loggedIn:Object(l.a)(g),route:i,withinWriterProfileRedesignExperiment:m.includes("enable_writer_profile_redesign")},a=function(e){return Math.round(1e3*e)},O=function(e,t,r,o){var i=r.start,c=r.end,u=n.startSpan("timing.".concat(t),{childOf:e,tags:s}).setBeginMicros(a(i)).setEndMicros(a(c));return null!=o&&o(u),u.finish(),u};d.f.observe((function(e){var o,i,l,d;v.reportRender(c,e);var f=n.startSpan("timing.navigation",{references:t?[Object(r.followsFrom)(t)]:void 0,tags:s}).setBeginMicros(a(e.load.start)).setEndMicros(a(e.load.end)).log({redirect_count:null!==(o=null===(i=window)||void 0===i||null===(l=i.performance)||void 0===l||null===(d=l.navigation)||void 0===d?void 0:d.redirectCount)&&void 0!==o?o:0});O(f,"beforeDomainLookup",e.beforeDomainLookup),O(f,"domainLookup",e.domainLookup),O(f,"connect",e.connect),O(f,"request",e.request),O(f,"response",e.response),O(f,"processing",e.processing);var p=e.overallFCP,g=e.client,m=e.render;null!=p&&O(f,"firstContentfulPaint",p),null!=g&&O(f,"client",g,(function(e){null!=m&&O(e,"render",m)})),f.finish(),b(Object(u.c)(f.generateTraceURL()))})),d.b.observe((function(e){v.reportFirstContentfulPaint(c,e),n.startSpan("timing.firstContentfulPaint.v2",{references:t?[Object(r.followsFrom)(t)]:void 0,tags:s}).setBeginMicros(a(e.start)).setEndMicros(a(e.end)).finish()})),d.d.observe((function(e){v.reportLargestContentfulPaint(c,e),n.startSpan("timing.largestContentfulPaint",{references:t?[Object(r.followsFrom)(t)]:void 0,tags:s}).setBeginMicros(a(e.start)).setEndMicros(a(e.end)).finish()})),d.h.observe((function(e){e&&v.reportUnsupportedPerfObserver(c)})),d.c.observe((function(e){v.reportInput(c,e),n.startSpan("timing.input.first.delay",{references:t?[Object(r.followsFrom)(t)]:void 0,tags:s}).setBeginMicros(a(e.start)).setEndMicros(a(e.end)).finish()}))}}),[n])}(),null}},"./src/util/observable/extras.ts":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("./src/util/observable/index.ts");function o(){for(var e=new r.a,n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];if(0===t.length)return e;var i=t.map((function(){return[]}));return t.forEach((function(n,t){n.observe((function(n){i[t].push(n),i.every((function(e){return e.length>0}))&&e.set(i.map((function(e){return e.shift()})))}))})),e}},"./src/util/tracing.ts":function(e,n,t){"use strict";t.r(n),t.d(n,"init",(function(){return i})),t.d(n,"extractSpan",(function(){return s}));var r=t("./node_modules/lightstep-tracer/browser.js"),o=t("./node_modules/opentracing/lib/index.js"),i=function(e){var n=e.name,t=e.host,i=e.token,s=e.appVersion,c=new r.Tracer({component_name:n,xhr_instrumentation:!1,access_token:i,collector_host:t,default_span_tags:{"component.version":s}});return Object(o.initGlobalTracer)(c),c},s=function(e,n){if(n)return e.extract(o.FORMAT_HTTP_HEADERS,n)}}}]);
//# sourceMappingURL=instrumentation.70574cab.chunk.js.map