(()=>{"use strict";var e,r,n,t={7710:(e,r,n)=>{var t=n(7294),o=n(3935),a=[{label:"Dashboard",icon:"ri-dashboard-line",active:["dashboard"],url:"/translator/dashboard",sub:!1},{label:"Soal",icon:"ri-dashboard-line",active:["soal"],url:"/translator/soal",sub:!1}],i=function(){return(0,t.useEffect)((function(){return $("#side-menu").metisMenu(),$("#sidebar-menu a").each((function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&($(this).addClass("active"),$(this).parent().addClass("mm-active"),$(this).parent().parent().addClass("mm-show"),$(this).parent().parent().prev().addClass("mm-active"),$(this).parent().parent().parent().addClass("mm-active"),$(this).parent().parent().parent().parent().addClass("mm-show"),$(this).parent().parent().parent().parent().parent().addClass("mm-active"))})),$(document).ready((function(){var e;0<$("#sidebar-menu").length&&0<$("#sidebar-menu .mm-active .active").length&&300<(e=$("#sidebar-menu .mm-active .active").offset().top)&&(e-=300,$(".vertical-menu .simplebar-content-wrapper").animate({scrollTop:e},"slow"))})),function(){}}),[]),t.createElement("ul",{className:"metismenu list-unstyled",id:"side-menu"},t.createElement("li",{className:"menu-title"},"Menu"),a.map((function(e,r){return t.createElement("li",{key:r},t.createElement("a",{href:e.url,className:"waves-effect"+(e.sub?" has-arrow":"")},t.createElement("i",{className:e.icon}),t.createElement("span",null,e.label)),e.sub?t.createElement("ul",{className:"sub-menu"},e.child.map((function(e,r){return t.createElement("li",{key:r,className:"waves-effect"},t.createElement("a",{href:e.url},e.label))}))):"")})))};o.render(t.createElement(i,null),document.getElementById("sidebar-menu"))}},o={};function a(e){var r=o[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=o[e]={exports:{}};try{var i={id:e,module:n,factory:t[e],require:a};a.i.forEach((function(e){e(i)})),n=i.module,i.factory.call(n.exports,n,n.exports,i.require)}catch(e){throw n.error=e,e}return n.exports}a.m=t,a.c=o,a.i=[],e=[],a.O=(r,n,t,o)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,t,o]=e[l],c=!0,d=0;d<n.length;d++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](n[d])))?n.splice(d--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var s=t();void 0!==s&&(r=s)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,t,o]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var n in r)a.o(r,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},a.hu=e=>e+"."+a.h()+".hot-update.js",a.hmrF=()=>"navigation."+a.h()+".hot-update.json",a.h=()=>"0016df7856417214104d",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="homecampus:",a.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var c,d;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var u=s[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+o){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",n+o),c.src=e),r[e]=[t];var p=(n,t)=>{c.onerror=c.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),d&&document.head.appendChild(c)}},a.j=384,(()=>{var e,r,n,t,o={},i=a.c,c=[],d=[],s="idle";function l(e){s=e;for(var r=[],n=0;n<d.length;n++)r[n]=d[n].call(null,e);return Promise.all(r)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function p(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return l("check").then(a.hmrM).then((function(t){return t?l("prepare").then((function(){var o=[];return r=[],n=[],Promise.all(Object.keys(a.hmrC).reduce((function(e,r){return a.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):l("ready").then((function(){return o}))}))}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o=r.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var a=l("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var i,c=l("apply"),d=function(e){i||(i=e)},s=[];return r.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)s.push(r[n])}})),Promise.all([a,c]).then((function(){return i?l("fail").then((function(){throw i})):t?h(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return s}))}))}function m(){if(t)return n||(n=[]),Object.keys(a.hmrI).forEach((function(e){t.forEach((function(r){a.hmrI[e](r,n)}))})),t=void 0,!0}a.hmrD=o,a.i.push((function(h){var m,v,y,b,g=h.module,E=function(n,t){var o=i[t];if(!o)return n;var a=function(r){if(o.hot.active){if(i[r]){var a=i[r].parents;-1===a.indexOf(t)&&a.push(t)}else c=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),c=[];return n(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(a,p,d(p));return a.e=function(e){return function(e){switch(s){case"ready":return l("prepare"),r.push(e),u((function(){return l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},a}(h.require,h.id);g.hot=(m=h.id,v=g,b={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){c=v.parents.slice(),e=y?void 0:m,a(m)},active:!0,accept:function(e,r,n){if(void 0===e)b._selfAccepted=!0;else if("function"==typeof e)b._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)b._acceptedDependencies[e[t]]=r||function(){},b._acceptedErrorHandlers[e[t]]=n;else b._acceptedDependencies[e]=r||function(){},b._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)b._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)b._declinedDependencies[e[r]]=!0;else b._declinedDependencies[e]=!0},dispose:function(e){b._disposeHandlers.push(e)},addDisposeHandler:function(e){b._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=b._disposeHandlers.indexOf(e);r>=0&&b._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":n=[],Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](m,n)})),l("ready");break;case"ready":Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:p,apply:f,status:function(e){if(!e)return s;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:o[m]},e=void 0,b),g.parents=c,g.children=[],c=[],h.require=E})),a.hmrC={},a.hmrI={}})(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e,r,n,t,o=a.hmrS_jsonp=a.hmrS_jsonp||{384:0},i={};function c(e){return new Promise(((r,n)=>{i[e]=r;var t=a.p+a.hu(e),o=new Error;a.l(t,(r=>{if(i[e]){i[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+a+")",o.name="ChunkLoadError",o.type=t,o.request=a,n(o)}}))}))}function d(i){function c(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,c=o.chain,s=a.c[i];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],p=a.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),d(n[u],[i])):(delete n[u],r.push(u),t.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}a.f&&delete a.f.jsonpHmr,e=void 0;var s={},l=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(a.o(r,f)){var h,m=r[f],v=!1,y=!1,b=!1,g="";switch((h=m?c(f):{type:"disposed",moduleId:f}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+f+" is not accepted"+g));break;case"accepted":i.onAccepted&&i.onAccepted(h),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),b=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(f in u[f]=m,d(l,h.outdatedModules),h.outdatedDependencies)a.o(h.outdatedDependencies,f)&&(s[f]||(s[f]=[]),d(s[f],h.outdatedDependencies[f]));b&&(d(l,[h.moduleId]),u[f]=p)}r=void 0;for(var E,w=[],_=0;_<l.length;_++){var I=l[_],k=a.c[I];k&&(k.hot._selfAccepted||k.hot._main)&&u[I]!==p&&!k.hot._selfInvalidated&&w.push({module:I,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=l.slice();t.length>0;){var i=t.pop(),c=a.c[i];if(c){var d={},u=c.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,d);for(a.hmrD[i]=d,c.hot.active=!1,delete a.c[i],delete s[i],_=0;_<c.children.length;_++){var p=a.c[c.children[_]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in s)if(a.o(s,f)&&(c=a.c[f]))for(E=s[f],_=0;_<E.length;_++)r=E[_],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(e){for(var r in u)a.o(u,r)&&(a.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](a);for(var o in s)if(a.o(s,o)){var c=a.c[o];if(c){E=s[o];for(var d=[],p=[],f=[],h=0;h<E.length;h++){var m=E[h],v=c.hot._acceptedDependencies[m],y=c.hot._acceptedErrorHandlers[m];if(v){if(-1!==d.indexOf(v))continue;d.push(v),p.push(y),f.push(m)}}for(var b=0;b<d.length;b++)try{d[b].call(null,E)}catch(r){if("function"==typeof p[b])try{p[b](r,{moduleId:o,dependencyId:f[b]})}catch(n){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[b],error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[b],error:r}),i.ignoreErrored||e(r)}}}for(var g=0;g<w.length;g++){var _=w[g],I=_.module;try{_.require(I)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:I,module:a.c[I]})}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:I,error:r}),i.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdatehomecampus=(e,n,o)=>{for(var c in n)a.o(n,c)&&(r[c]=n[c]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},a.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(d)),a.o(r,e)||(r[e]=a.m[e])},a.hmrC.jsonp=function(i,s,l,u,p,f){p.push(d),e={},n=s,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],i.forEach((function(r){a.o(o,r)&&void 0!==o[r]&&(u.push(c(r)),e[r]=!0)})),a.f&&(a.f.jsonpHmr=function(r,n){e&&!a.o(e,r)&&a.o(o,r)&&void 0!==o[r]&&(n.push(c(r)),e[r]=!0)})},a.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(a.p+a.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},a.O.j=e=>0===o[e];var s=(e,r)=>{var n,t,[i,c,d]=r,s=0;if(i.some((e=>0!==o[e]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(d)var l=d(a)}for(e&&e(r);s<i.length;s++)t=i[s],a.o(o,t)&&o[t]&&o[t][0](),o[i[s]]=0;return a.O(l)},l=self.webpackChunkhomecampus=self.webpackChunkhomecampus||[];l.forEach(s.bind(null,0)),l.push=s.bind(null,l.push.bind(l))})();var i=a.O(void 0,[736],(()=>a(7710)));i=a.O(i)})();