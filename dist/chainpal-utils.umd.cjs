(function(n,e){typeof exports=="object"&&typeof module<"u"?module.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self,n.Chainpal=e())})(this,function(){"use strict";var l=Object.defineProperty;var p=(n,e,t)=>e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var a=(n,e,t)=>(p(n,typeof e!="symbol"?e+"":e,t),t);const n=window.navigator.userAgent,e=n.indexOf("ChainMeet")>-1,t=n.indexOf("ChainPalForPC")>-1,d=e?n.indexOf("en-US")>-1?"en-US":n.indexOf("zh-CH")>-1?"zh-CH":"":"",h=Object.freeze(Object.defineProperty({__proto__:null,callNativeMethods:(s,c)=>{var r;if(e)try{const o={name:s,...c};(r=window==null?void 0:window.ReactNativeWebView)==null||r.postMessage(JSON.stringify(o))}catch(o){console.error(o)}},setChainmeetShare:s=>{if(e){const c=window.btoa(unescape(window.encodeURIComponent(JSON.stringify(s)))),r=new RegExp("chainmeetShare=[^&]*","gi"),o=window.location.search.indexOf("chainmeetShare")>-1?window.location.search.replace(r,`chainmeetShare=${c}`):`${window.location.search}${window.location.search?"&":"?"}chainmeetShare=${c}`;window.history.replaceState(null,"",o)}}},Symbol.toStringTag,{value:"Module"}));class i{}return a(i,"isApp",e),a(i,"isChainpalPc",t),a(i,"appLanguage",d),a(i,"client",h),i});