(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/editor/EditorActions.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),a=n.n(r),i=n("./node_modules/react/index.js"),c=[{children:[{text:""}]}],o=i.createContext({}),s=function(e){var t=e.children,n=e.initialValue,r=i.useState(null),s=a()(r,2),u=s[0],l=s[1],d=i.useState(null),p=a()(d,2),f=p[0],h=p[1],m=i.useState(n||c),v=a()(m,2),g=v[0],b=v[1];return i.createElement(o.Provider,{value:{mode:f,setMode:h,backgroundSelection:u,setBackgroundSelection:l,value:g,setValue:b,clearValue:function(){b(c)}}},t)},u=function(){return i.useContext(o)}},"./src/components/editor/EditorBody.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("./node_modules/is-hotkey/lib/index.js"),a=n.n(r),i=n("./node_modules/react/index.js"),c=n("./node_modules/slate/dist/index.es.js"),o=n("./node_modules/slate-react/dist/index.es.js"),s=n("./src/components/editor/editorHelpers.tsx"),u=function(e){var t=e.renderElement,n=e.renderLeaf,r=e.onKeyDown,u=void 0===r?function(){}:r,l=e.decorate,d=e.editor,p=e.placeholder,f=void 0===p?"Share your thoughts...":p,h=i.useCallback((function(e){d&&""===c.c.string(d)&&a()("backspace",e)&&Object(s.b)(d),u(e)}),[d,u]);return i.createElement(o.a,{renderElement:t,renderLeaf:n,placeholder:f,onKeyDown:h,decorate:l})}},"./src/components/editor/EditorWrapper.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("./node_modules/react/index.js"),a=n("./node_modules/slate-react/dist/index.es.js"),i=n("./src/components/editor/EditorActions.tsx"),c=function(e){var t=e.children,n=e.editor,c=Object(i.b)(),o=c.setValue,s=c.value;return s&&o?r.createElement(a.c,{editor:n,value:s,onChange:o},t):null}},"./src/components/editor/editorHelpers.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return x})),n.d(t,"k",(function(){return w})),n.d(t,"l",(function(){return j})),n.d(t,"g",(function(){return O})),n.d(t,"j",(function(){return E})),n.d(t,"d",(function(){return N})),n.d(t,"i",(function(){return P})),n.d(t,"h",(function(){return S})),n.d(t,"b",(function(){return D})),n.d(t,"e",(function(){return _}));var r,a=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),i=n.n(a),c=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),o=n.n(c),s=n("./node_modules/lodash/flattenDeep.js"),u=n.n(s),l=n("./node_modules/slate/dist/index.es.js"),d=n("./src/schema-types/globalTypes.ts");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e[e.Link=0]="Link"}(r||(r={}));var h=["numbered-list","bulleted-list","bq"];function m(e){if(!e.children)return[];if(e.children.every((function(e){return function(e){return l.h.isText(e)||"link"===e.type}(e)}))){var t=l.c.string(e),n=!(null==e?void 0:e.name),r=n?y():e.name,a=function(e){switch(e){case"oli":return 10;case"uli":return 9;case"bq-line":return 6;case"image":return 4;case"title":return 3;default:return 1}}(e.type);if("image"===e.type)return[{type:n?1:3,paragraph:{name:r,type:a,text:t,markups:[],layout:1,metadata:{id:e.imageProps.miroId,originalWidth:e.imageProps.width,originalHeight:e.imageProps.height}},verifySameName:!n}];if(!t.length&&!e.name)return[];if(!t.length&&e.name)return[{type:2,paragraph:{name:e.name}}];var i=e.children.reduce((function(e,t){var n=o()(e,2),r=n[0],a=n[1],i=l.c.string(t).length;return t.italic&&a.push({type:2,start:r,end:r+i}),t.bold&&a.push({type:1,start:r,end:r+i}),"link"===t.type&&a.push({type:3,start:r,end:r+i,href:t.url,title:"",rel:"",anchorType:0}),[r+i,a]}),[0,[]]);return[{type:n?1:3,paragraph:{markups:o()(i,2)[1],name:r,text:t,type:a},verifySameName:!n}]}return u()(e.children.map(m).filter((function(e){return e.length})))}function v(e,t){return e.map((function(e,n){return e.index=n+t,e}))}var g=function(e){var t=[];return e.map((function(e){return t.includes(e.name)?f({},e,{name:void 0}):(e.name&&t.push(e.name),e)}))};function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{includeInitialDeltas:!0},n=t.includeInitialDeltas,r=[];if(n){var a=y();r=[{type:8,index:0,section:{name:a,startIndex:0}}]}var i=e.children,c=g(i);e.children=c;var o=0;if(!c[0].name&&"title"!==c[0].type){var s=y();r.push({type:1,index:0,paragraph:{name:s,type:3,text:"",markups:[]}}),o=1}var u=m(e),l=v(u,o);return r.concat(l)}function y(){return Math.round(65535*Math.random()).toString(16).padStart(4,"0")}var x=function(e,t){e.selection&&j(e,t)},w=function(e,t){var n=t||e.selection;l.i.unwrapNodes(e,{match:function(e){return"link"===e.type},at:n})},j=function(e,t){(function(e){var t=l.a.nodes(e,{match:function(e){return"link"===e.type}});return!!o()(t,1)[0]})(e)&&w(e);var n=e.selection,r=n&&l.g.isCollapsed(n),a={type:"link",url:t,children:r?[{text:t}]:[]};r?l.i.insertNodes(e,a):(l.i.wrapNodes(e,a,{split:!0}),l.i.collapse(e,{edge:"end"}))},O=function(e,t,n){var r=n||e.selection,a=l.a.nodes(e,{match:function(e){return!0===e[t]||e.type===t},at:r,mode:"all"});return!!o()(a,1)[0]},E=function(e,t){O(e,t)?l.a.removeMark(e,t):l.a.addMark(e,t,!0)},k=function(e){switch(e){case"bq":return"bq-line";case"numbered-list":return"oli";case"bulleted-list":default:return"uli"}},N=function(){if("undefined"!=typeof window){var e=window.getSelection(),t=e&&!e.isCollapsed&&e.getRangeAt(0);return t&&t.getBoundingClientRect()}},P=function(e,t,n){var r=n||e.selection,a=O(e,t,n),i=h.includes(t),c=l.g.isRange(r)?l.a.rangeRef(e,r):l.f.isPoint(r)?l.a.pointRef(e,r):l.a.pathRef(e,r);if(l.i.unwrapNodes(e,{at:r,match:function(e){return h.includes(e.type)},split:!0}),c.current&&(l.i.setNodes(e,{type:a?"paragraph":i?k(t):t},{at:c.current}),!a&&i)){var o={type:t,children:[]};l.i.wrapNodes(e,o,{at:c.current})}},S=function(e,t){["bold","italic"].forEach((function(n){O(e,n,t)&&l.i.unsetNodes(e,n,{at:t})})),["link","numbered-list","bulleted-list","bq"].forEach((function(n){O(e,n,t)&&l.i.unwrapNodes(e,{at:t,match:function(e){return e.type===n}})}))},D=function(e){if(e){var t=function(e){if(!e||!e.children.length)return!1;var t=l.a.point(e,[0],{edge:"start"}),n=e.children.length;return{anchor:t,focus:l.a.point(e,[n-1],{edge:"end"})}}(e);t&&(l.i.removeNodes(e,{at:t}),l.i.insertNodes(e,{children:[{text:""}]}))}},_=function(e){return e.paragraphs.map((function(e){var t=e.markups,n=e.name,r=e.text;if(e.type===d.l.H3)return{children:[{text:r}],name:n,type:"title"};if(!(null==t?void 0:t.length))return{children:[{text:r}],name:n};var a=new Set;a.add(0),a.add(r.length),t.forEach((function(e){var t=e.start,n=e.end;a.add(t),a.add(n)}));var i=Array.from(a);return{children:i.sort((function(e,t){return e-t})).slice(1).map((function(e,n,a){var c=n?a[n-1]:i[0],o=e,s=t.filter((function(e){return e.start<=c&&o<=e.end})),u={text:r.substring(c,o)};return s.forEach((function(e){var t=e.href;switch(e.type){case d.j.STRONG:("link"===u.type?u.children[0]:u).bold=!0;break;case d.j.EM:("link"===u.type?u.children[0]:u).italic=!0;break;case d.j.A:u={type:"link",url:t,children:[u]}}})),u})),name:n}}))}},"./src/components/editor/useMediumEditor.tsx":function(e,t,n){"use strict";n.d(t,"d",(function(){return q})),n.d(t,"c",(function(){return F})),n.d(t,"j",(function(){return K})),n.d(t,"f",(function(){return Q})),n.d(t,"i",(function(){return X})),n.d(t,"e",(function(){return Y})),n.d(t,"h",(function(){return Z})),n.d(t,"b",(function(){return $})),n.d(t,"g",(function(){return te})),n.d(t,"a",(function(){return ae}));var r=n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),a=n.n(r),i=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),c=n.n(i),o=n("./node_modules/@babel/runtime/helpers/extends.js"),s=n.n(o),u=n("./node_modules/linkify-it/index.js"),l=n.n(u),d=n("./node_modules/react/index.js"),p=n.n(d),f=n("./node_modules/slate/dist/index.es.js"),h=n("./node_modules/slate-history/dist/index.es.js"),m=n("./node_modules/slate-react/dist/index.es.js"),v=n("./src/components/ui/image/ProgressiveMiroImage.tsx"),g=n("./src/framework/design-system/components/index.ts"),b=n("./src/framework/style/index.ts"),y=n("./src/schema-types/globalTypes.ts"),x=n("./src/util/post/image.ts"),w=function(e){var t=Object(m.e)(),n=Object(m.d)(),r=Object(m.f)(),a=Object(b.useCx)(),i=e.ParagraphWrapper;switch(e.element.type){case"link":return d.createElement("span",e.attributes,d.createElement(g.t,{linkStyle:"OBVIOUS",cursor:"text",inline:!0,href:e.element.url},e.children));case"numbered-list":return d.createElement("ol",e.attributes,e.children);case"bulleted-list":return d.createElement("ul",e.attributes,e.children);case"bq":return d.createElement("div",e.attributes,d.createElement(i,s()({},e,{editor:r}),e.children));case"image":var c=Object(x.b)({layout:y.g.FULL_WIDTH,originalWidth:e.element.imageProps.width,originalHeight:e.element.imageProps.height}),o=c.width,u=c.strategy,l=c.otherWidths;return d.createElement("div",s()({},e.attributes,{className:a({margin:"20px 0 10px"})}),d.createElement("div",{contentEditable:!1,className:a({boxShadow:"".concat(t&&n?"0 0 0 3px #03a87c":"none")})},d.createElement(v.a,{maxWidth:"100%",miroId:e.element.imageProps.miroId,width:o,strategy:u,otherWidths:l})),e.children);default:return d.createElement("div",e.attributes,d.createElement(i,s()({},e,{editor:r}),e.children))}},j=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),O=n.n(j);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var k=p.a.createElement("path",{d:"M20 12h-7V5h-1v7H5v1h7v7h1v-7h7",fillRule:"evenodd"}),N=function(e){return p.a.createElement("svg",E({className:"adder-25px_svg__svgIcon-use",width:25,height:25},e),k)};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=p.a.createElement("g",{fillRule:"evenodd"},p.a.createElement("path",{d:"M4.04 17.05v-8.2c0-1.08.84-1.84 1.94-1.84h2.45c.44-.75.81-2.01 1.17-2L15.4 5c.3 0 .76 1.32 1.18 2 0 .08 2.5 0 2.5 0 1.09 0 1.96.76 1.96 1.85v8.2c0 1.08-.87 1.94-1.97 1.94H5.97a1.9 1.9 0 0 1-1.93-1.94zM6.21 8a1.2 1.2 0 0 0-1.17 1.18v7.68c0 .63.55 1.15 1.17 1.15H18.9c.62 0 1.14-.53 1.14-1.15V9.17c0-.62-.52-1.17-1.14-1.17h-3.03c-.24-.63-.73-1.92-.87-2h-5c-.21.1-.87 2-.87 2H6.21z"}),p.a.createElement("path",{d:"M12.48 15.98A3.47 3.47 0 0 1 9 12.48 3.47 3.47 0 0 1 12.48 9a3.47 3.47 0 0 1 3.5 3.49 3.47 3.47 0 0 1-3.5 3.49zm0-6.08a2.62 2.62 0 0 0-2.59 2.59c0 1.4 1.19 2.59 2.6 2.59 1.4 0 2.58-1.19 2.58-2.6 0-1.4-1.18-2.58-2.59-2.58z"})),D=function(e){return p.a.createElement("svg",P({className:"camera-25px_svg__svgIcon-use",width:25,height:25},e),S)};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=p.a.createElement("g",{fillRule:"evenodd"},p.a.createElement("path",{d:"M8.45 12H5.3c-.25 0-.45.22-.45.5 0 .27.2.5.45.5h5.4c.25 0 .45-.23.45-.5 0-.28-.2-.5-.45-.5H8.45zM17.45 12H14.3c-.25 0-.45.22-.45.5 0 .27.2.5.45.5h5.4c.25 0 .45-.23.45-.5 0-.28-.2-.5-.45-.5h-2.25z"})),C=function(e){return p.a.createElement("svg",_({className:"section-25px_svg__svgIcon-use",width:25,height:25},e),T)},I=n("./src/util/hooks/useUploader.tsx");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){var e=Object(b.useCx)(),t=Object(m.f)(),n=d.useState(!1),r=c()(n,2),a=r[0],i=r[1],o=d.useCallback((function(){i(!a)}),[a]),s={borderRadius:"100%",border:"1px solid rgba(0,0,0,.68)",height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},u=Object(I.b)((function(e,n){var r=n.height,a=n.width;$(t,{miroId:e.value.fileId,width:a,height:r})}),(function(){})),l=u.inputRef,p=u.fireClick,f=d.useCallback((function(){o(),p()}),[p]);return d.createElement("div",{className:e({position:"relative",top:"-3px"})},d.createElement("div",{className:e({position:"absolute",left:"-55px",display:"flex",backgroundColor:a?"white":"transparent",transition:"background-color 0.25s, padding 0.25s",zIndex:"10",padding:a?"5px 200px 5px 5px":"5px"})},d.createElement("div",{className:e(R({},s,{transform:a?"rotate(45deg)":"",transition:"transform 0.25s"})),onClick:o},d.createElement(N,null)),d.createElement("div",{className:e(R({},s,{marginLeft:a?"32px":"0px",transform:a?"scale(1.0)":"scale(0)",transition:"transform 0.25s, margin-left 0.25s"})),onClick:f},d.createElement(D,null)),d.createElement("div",{className:e(R({},s,{marginLeft:a?"10px":"0px",transform:a?"scale(1.0)":"scale(0)",transition:"transform 0.25s, margin-left 0.25s"}))},d.createElement(C,null))),d.createElement("input",{type:"file",ref:l,className:e({display:"none"})}))},U=n("./src/components/editor/editorHelpers.tsx"),z=n("./src/components/post/grouping/ParagraphStyleGrouping.tsx"),H=n("./src/components/post/paragraph/TextParagraph.tsx"),M=n("./src/styles/post/spacing.ts"),B=n("./src/util/richText.ts"),W=l()(),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=d.useMemo((function(){var t=J(Object(h.a)(Object(m.g)(Object(f.j)())));return e.reduce((function(e,t){return t(e)}),t)}),[]),r=d.useCallback((function(e){return d.createElement(G,e)}),[]),a=t.ParagraphWrapper||re,i=function(e){return d.createElement(w,s()({},e,{ParagraphWrapper:a}))};return{editor:n,renderLeaf:r,renderElement:i}},G=function(e){var t=e.attributes,n=e.children,r=e.leaf;return r.bold&&(n=d.createElement("strong",null,n)),r.italic&&(n=d.createElement("em",null,n)),d.createElement("span",t,n)},V=function(e){var t=W.match(e)||[],n=c()(t,1)[0];return!!n&&n.raw===e},F=function(e){var t=W.match(e)||[],n=c()(t,1)[0];return n&&n.raw===e?n.url:null},J=function(e){var t=e.isInline,n=e.isVoid;return e.isVoid=function(e){return n(e)},e.isInline=function(e){return"link"===e.type||t(e)},e},K=function(e){var t=e.normalizeNode;return e.normalizeNode=function(n){var r=c()(n,2),a=r[0],i=r[1];"title"===a.type&&0!==i[0]&&Object(U.i)(e,"title",i),"title"===a.type&&a.children.forEach((function(t,n){var r=i.concat(n);Object(U.h)(e,r)})),t([a,i])},e},Q=function(e){var t=e.normalizeNode;return e.normalizeNode=function(n){var r=c()(n,2),a=r[0],i=r[1],o=!a.type||"paragraph"===a.type,s=a.children&&1===a.children.length&&f.h.isText(a.children[0])&&("- "===f.c.string(a)||"* "===f.c.string(a));o&&s&&f.a.withoutNormalizing(e,(function(){f.i.insertFragment(e,[{text:""}],{at:i}),f.i.delete(e,{at:i.concat(1)}),Object(U.i)(e,"bulleted-list",i)}));var u=a.children&&1===a.children.length&&f.h.isText(a.children[0])&&"1. "===f.c.string(a);o&&u&&f.a.withoutNormalizing(e,(function(){f.i.insertFragment(e,[{text:""}],{at:i}),f.i.delete(e,{at:i.concat(1)}),Object(U.i)(e,"numbered-list",i)})),t([a,i])},e},X=function(e){var t=e.normalizeNode;return e.normalizeNode=function(n){var r=c()(n,2),a=r[0],i=r[1];if("bulleted-list"===a.type||"numbered-list"===a.type||"bq"===a.type){var o=a.children.length;if(o>1)if(a.children.slice(-2,-1).every((function(e){return""===f.c.string(e)}))){var s=o-2;f.i.removeNodes(e,{at:i.concat(s)}),f.i.setNodes(e,{type:"paragraph"},{at:i.concat(s)}),f.i.liftNodes(e,{at:i.concat(s)})}}t([a,i])},e},Y=function(e){var t=e.insertData,n=e.insertText;return e.insertText=function(t){t&&V(t)?Object(U.l)(e,t):n(t)},e.insertData=function(n){var r=n.getData("text/plain");r&&V(r)?Object(U.l)(e,r):t(n)},e},Z=function(e){var t=e.insertData,n=e.insertBreak,r=e.isVoid;return e.isVoid=function(e){return"image"===e.type||r(e)},e.insertBreak=function(){var t=f.a.parent(e,e.selection),r=c()(t,2),a=r[0],i=r[1];if(f.a.after(e,e.selection)||"image"!==a.type)n();else{var o=f.e.next(i);f.i.insertNodes(e,{children:[{text:""}]},{at:o,voids:!0}),f.i.select(e,o)}},e.insertData=function(e){var n=e.getData("text/plain"),r=e.files;if(r&&r.length>0){var a=!0,i=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var l=s.value,d=new FileReader,p=l.type.split("/");"image"===c()(p,1)[0]&&(d.addEventListener("load",(function(){})),d.readAsBinaryString(l))}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}}else(function(e){if(!e)return!1;if(!V(e))return!1;var t=new URL(e).pathname.split(".").pop();return!!t&&["jpg","JPG","png","PNG","jpeg","JPEG"].includes(t)})(n)||t(e)},e},$=function(e,t){var n={type:"image",imageProps:t,children:[{text:""}]};f.i.insertNodes(e,n)};function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.selection,r=n.anchor,a=f.a.before(e,r,{distance:t});if(!a)return"";var i={anchor:a,focus:n.anchor};return f.a.string(e,i)}var te=function(e){var t=e.insertText;return e.insertText=function(n){var r=e.selection;if(r&&f.g.isCollapsed(r)){var a=ee(e,1);if("-"===n&&"-"===a)return f.a.deleteBackward(e),t("—");if(">"===n&&"-"===a)return f.a.deleteBackward(e),t("→");if("-"===n&&"<"===a)return f.a.deleteBackward(e),t("←");if('"'===n&&a.match(/\S/))return t("”");if("'"===n&&a.match(/\S/))return t("’");if("'"===n)return t("‘");if('"'===n&&!a.match(/\S/))return t("“");var i=ee(e,2);if("."===n&&".."===i)return f.a.deleteBackward(e),f.a.deleteBackward(e),t("…")}t(n)},e},ne={title:B.a.Title,oli:B.a.OLI,uli:B.a.ULI,bq:B.a.BQ},re=function(e){return d.createElement("p",null,e.children)},ae=function(e){var t=e.editor,n=a()(e,["editor"]),r=d.useRef(null),i=f.c.first(t,[0])[0]===n.element.children[0],c=ne[n.element.type]||y.l.P,o=function(e,t){switch(t){case"title":return 10;case"oli":case"uli":case"bq-line":return e?M.h:M.g;default:return e?M.h:M.e}}(i,n.element.type),s=Object(b.useCx)(),u=Object(m.e)()&&0===f.c.string(n.element).length;if("bq"===n.element.type){var l=s(Object(z.f)({paragraphStyle:y.l.BQ,topSpacing:0,paragraphLayout:y.g.FULL_WIDTH,paragraphCount:0,richTextStyle:"CARD",isEmbedded:!1}));return d.createElement("blockquote",{className:l},n.children)}return d.createElement("div",null,u&&d.createElement(A,null),d.createElement(H.f,{hasDropCap:!1,name:"",paragraphRef:r,paragraphStyle:c,richTextStyle:"CARD",spaceTop:o},n.children))}},"./src/util/hooks/useUploader.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return g}));var r,a=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=n.n(a),c=n("./node_modules/@babel/runtime/regenerator/index.js"),o=n.n(c),s=n("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"),u=n.n(s),l=n("./node_modules/react/index.js"),d=n("./src/routes/RoutingContext.tsx");!function(e){e[e.NONE=0]="NONE",e[e.STARTING=1]="STARTING",e[e.UPLOADING=2]="UPLOADING",e[e.UPLOADED=3]="UPLOADED"}(r||(r={}));var p=new Set(["jpg","jpeg","png","gif"]),f=function(e){return new Promise((function(t){return setTimeout(t,e)}))},h=function(e,t){var n,r;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(u()(e,{credentials:"same-origin",method:"POST",headers:{accept:"application/json","Content-Type":"application/json","x-xsrf-token":"1","X-Obvious-CID":"web"},body:JSON.stringify({url:t})}));case 2:return n=a.sent,a.next=5,o.a.awrap(n.text());case 5:return r=a.sent,a.abrupt("return",JSON.parse(r.replace("])}while(1);</x>","")));case 7:case"end":return a.stop()}}))},m=function(e,t){var n,r,a;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return(n=new FormData).append("uploadedFile",t),i.next=4,o.a.awrap(u()(e,{credentials:"same-origin",method:"POST",headers:{"x-xsrf-token":"1","X-Obvious-CID":"web"},body:n}));case 4:return r=i.sent,i.next=7,o.a.awrap(r.text());case 7:return a=i.sent,i.abrupt("return",JSON.parse(a.replace("])}while(1);</x>","")));case 9:case"end":return i.stop()}}))},v=new Error("Image upload failed. The URL you provided may be invalid."),g=function(e,t,n){var a=l.useState(r.NONE),c=i()(a,2),s=c[0],u=c[1],g=l.useRef(null),b=l.useCallback((function(){g.current&&g.current.click()}),[g.current]),y=Object(d.e)("CreateUpload"),x=Object(d.e)("CreateUploadUrl");function w(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return u(r.STARTING),e.next=3,o.a.awrap(f(0));case 3:u(r.UPLOADING);case 4:case"end":return e.stop()}}))}function j(a){var i,c,s,l,d,f,h,v;return o.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(i=null==a?void 0:a[0]){g.next=3;break}return g.abrupt("return");case 3:if(c=i.name.split(".").pop(),p.has((null==c?void 0:c.toLowerCase())||"")){g.next=7;break}return n&&n(),g.abrupt("return");case 7:return g.next=9,o.a.awrap(w());case 9:if(g.prev=9,y){g.next=12;break}throw new Error("Expected ".concat("CreateUpload"," route to exist"));case 12:return g.next=14,o.a.awrap(m(y.pathPattern,i));case 14:l=g.sent,d=l.success,f=l.payload,d&&(null==f||null===(s=f.value)||void 0===s?void 0:s.md5)&&(h=URL.createObjectURL(i),(v=new Image).onload=function(){u(r.UPLOADED),e(f,{file:i,height:v.height,width:v.width},(function(){return u(r.NONE)}))},v.src=h),g.next=22;break;case 19:g.prev=19,g.t0=g.catch(9),t(g.t0);case 22:case"end":return g.stop()}}),null,null,[[9,19]])}function O(){j(this.files),this.value=""}return l.useEffect((function(){if(g.current)return g.current.addEventListener("change",O),function(){g.current&&g.current.removeEventListener("change",O)}}),[g.current]),{inputRef:g,fireClick:b,status:s,handleDropEvent:function(e){var t=e.dataTransfer;t&&j(t.files)},uploadUrl:function(n){var a,i,c,s,l;return o.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,o.a.awrap(w());case 2:if(d.prev=2,x){d.next=5;break}throw new Error("Expected ".concat("CreateUpload"," route to exist"));case 5:return d.next=7,o.a.awrap(h(x.pathPattern,n));case 7:i=d.sent,c=i.success,s=i.payload,c&&(null==s||null===(a=s.value)||void 0===a?void 0:a.fileId)?((l=new Image).onload=function(){u(r.UPLOADED),e(s,{url:n,height:l.height,width:l.width},(function(){return u(r.NONE)}))},l.onerror=function(){t(v)},l.src=n):t(v),d.next=15;break;case 12:d.prev=12,d.t0=d.catch(2),t(d.t0);case 15:case"end":return d.stop()}}),null,null,[[2,12]])}}}}}]);
//# sourceMappingURL=CollectionNewShortformEditor~CollectionPostShortformEditor~responses.editor.87e71def.chunk.js.map