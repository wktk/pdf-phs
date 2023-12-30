(function(){"use strict";var n={6418:function(n,t,e){e.a(n,(async function(n,r){try{e(4224),e(1121),e(7133);var o=e(6252),a=e(8541),i=e(4730),u=e(8179),c=e(38),f=n([a]);a=(f.then?(await f)():f)[0],a.Tu.workerSrc=e(8013);const l=n=>new Promise(((t,e)=>{const r=new FileReader;r.onload=()=>t(new Uint8Array(r.result)),r.onerror=e,r.readAsArrayBuffer(n)}));t.Z=(0,o.aZ)({name:"App",components:{ForkMe:c.Z,Tweet:u.Z},methods:{convert:async n=>{const t=n.target?.files,e=t&&t[0];if(!e)throw"Invalid file";const r=await l(e),o=await a.Me(r).promise,u="portrait",c="a4",f=new i.ZP({orientation:u,format:c,unit:"mm"});for(let a=1;a<=o.numPages;a++){const n=await o.getPage(a),t=document.createElement("canvas"),e=n.getViewport({scale:3});t.height=e.height,t.width=e.width;const r=t.getContext("2d",{alpha:!1});if(!r)throw"Canvas is null";const i=.008;r.setTransform(Math.random()*i-i/2+1,Math.random()*i-i/2,Math.random()*i-i/2,Math.random()*i-i/2+1,0,0),await n.render({canvasContext:r,viewport:e}).promise;const l=r.getImageData(0,0,e.width,e.height);for(let o=0;o<l.data.length;o+=4){const n=l.data[o]+l.data[o+1]+l.data[o+2],t=n>255*(1-.8*Math.random())*3;l.data[o]=l.data[o+1]=l.data[o+2]=t?255:0}r.putImageData(l,0,0),1!==a&&f.addPage(c,u),f.addImage(t,"JPEG",0,0,210,297)}f.save(e.name.replace(/.pdf$/i,"-scan.pdf"))}}}),r()}catch(l){r(l)}}))},5286:function(n,t,e){e.a(n,(async function(n,t){try{var r=e(9963),o=e(8555),a=n([o]);o=(a.then?(await a)():a)[0],(0,r.ri)(o.Z).mount("#app"),t()}catch(i){t(i)}}))},8555:function(n,t,e){e.a(n,(async function(n,r){try{var o=e(5336),a=e(2315),i=(e(6144),e(3744)),u=n([a]);a=(u.then?(await u)():u)[0];const c=(0,i.Z)(a.Z,[["render",o.s]]);t.Z=c,r()}catch(c){r(c)}}))},38:function(n,t,e){e.d(t,{Z:function(){return s}});var r=e(6252);const o={id:"forkongithub"},a=(0,r._)("a",{href:"https://github.com/wktk/pdf-phs"}," Fork me on GitHub ",-1),i=[a];function u(n,t,e,a,u,c){return(0,r.wg)(),(0,r.iD)("span",o,i)}var c=(0,r.aZ)({name:"ForkMe"}),f=e(3744);const l=(0,f.Z)(c,[["render",u]]);var s=l},6144:function(){},2315:function(n,t,e){e.a(n,(async function(n,r){try{e.d(t,{Z:function(){return o.Z}});var o=e(6418),a=n([o]);o=(a.then?(await a)():a)[0],r()}catch(i){r(i)}}))},5336:function(n,t,e){e.d(t,{s:function(){return d}});var r=e(6252),o=e(9963);const a={id:"app"},i=(0,r._)("h1",null,"PDF にノイズを乗せる β",-1),u=(0,r._)("button",{id:"upload",onclick:"document.getElementById('file').click()"}," PDF ファイルを選択... ",-1),c=(0,r._)("div",{class:"notice"},[(0,r._)("ul",null,[(0,r._)("li",null," PDF ファイルにランダムにノイズと歪みを追加してスキャン風にします "),(0,r._)("li",null,"ブラウザ上で動作するのでデータがネットワークを経由しません"),(0,r._)("li",null,"A4 縦 PDF のみ対応 (今のところ)"),(0,r._)("li",null,"出力は白黒になります (今のところ)")])],-1),f=(0,r._)("h2",null,"出力例",-1),l=(0,r._)("hr",{class:"separator"},null,-1),s=(0,r._)("address",null,[(0,r._)("a",{href:"https://wktk.jp/"},"wktk.jp"),(0,r.Uk)(" · "),(0,r._)("a",{href:"https://twitter.com/wk"},"@wk")],-1);function d(n,t,e,d,p,h){const v=(0,r.up)("Tweet"),m=(0,r.up)("ForkMe");return(0,r.wg)(),(0,r.iD)("div",a,[i,u,(0,r._)("input",{id:"file",type:"file",name:"file",accept:"application/pdf,.pdf",onChange:t[0]||(t[0]=(0,o.iM)(((...t)=>n.convert&&n.convert(...t)),["prevent"]))},null,32),c,f,(0,r.Wm)(v,{class:"tweet","tweet-id":"1272963828490231808",conversation:"none"}),l,s,(0,r.Wm)(m)])}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r].call(a.exports,a,a.exports,e),a.exports}e.m=n,function(){var n="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=function(n){n&&n.d<1&&(n.d=1,n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},a=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[n])return e;if(e.then){var a=[];a.d=0,e.then((function(n){i[t]=n,o(a)}),(function(n){i[r]=n,o(a)}));var i={};return i[n]=function(n){n(a)},i}}var u={};return u[n]=function(){},u[t]=e,u}))};e.a=function(e,i,u){var c;u&&((c=[]).d=-1);var f,l,s,d=new Set,p=e.exports,h=new Promise((function(n,t){s=t,l=n}));h[t]=p,h[n]=function(n){c&&n(c),d.forEach(n),h["catch"]((function(){}))},e.exports=h,i((function(e){var o;f=a(e);var i=function(){return f.map((function(n){if(n[r])throw n[r];return n[t]}))},u=new Promise((function(t){o=function(){t(i)},o.r=0;var e=function(n){n!==c&&!d.has(n)&&(d.add(n),n&&!n.d&&(o.r++,n.push(o)))};f.map((function(t){t[n](e)}))}));return o.r?u:i()}),(function(n){n?s(h[r]=n):l(p),o(c)})),c&&c.d<0&&(c.d=0)}}(),function(){var n=[];e.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){n.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){var n,t=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__};e.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);e.r(a);var i={};n=n||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~n.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(n){i[n]=function(){return r[n]}}));return i["default"]=function(){return r},e.d(a,i),a}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{43:"1050a076",120:"f233984d",856:"fdc3d062"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="pdf-phs:";e.l=function(r,o,a,i){if(n[r])n[r].push(o);else{var u,c;if(void 0!==a)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",t+a),u.src=r),n[r]=[o];var d=function(t,e){u.onerror=u.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p=""}(),function(){var n={143:0};e.f.j=function(t,r){var o=e.o(n,t)?n[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(e,r){o=n[t]=[e,r]}));r.push(o[2]=a);var i=e.p+e.u(t),u=new Error,c=function(r){if(e.o(n,t)&&(o=n[t],0!==o&&(n[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};e.l(i,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],c=r[2],f=0;if(i.some((function(t){return 0!==n[t]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var l=c(e)}for(t&&t(r);f<i.length;f++)a=i[f],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(l)},r=self["webpackChunkpdf_phs"]=self["webpackChunkpdf_phs"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5286)}));r=e.O(r)})();
//# sourceMappingURL=app.ebd70b1f.js.map