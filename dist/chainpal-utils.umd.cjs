(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.ChainPal={}))})(this,function(e){"use strict";var f=Object.defineProperty;var u=(e,n,t)=>n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var o=(e,n,t)=>(u(e,typeof n!="symbol"?n+"":n,t),t);const n=window.navigator.userAgent,t=n.indexOf("ChainMeet")>-1,l=n.indexOf("ChainPalForPC")>-1,d=t?n.indexOf("en-US")>-1?"en-US":n.indexOf("zh-CH")>-1?"zh-CH":"":"",h=Object.freeze(Object.defineProperty({__proto__:null,callNativeMethods:(c,s)=>{var r;if(t)try{const a={name:c,...s};(r=window==null?void 0:window.ReactNativeWebView)==null||r.postMessage(JSON.stringify(a))}catch(a){console.error(a)}},setChainmeetShare:c=>{if(t){const s=window.btoa(unescape(window.encodeURIComponent(JSON.stringify(c)))),r=new RegExp("chainmeetShare=[^&]*","gi"),a=window.location.search.indexOf("chainmeetShare")>-1?window.location.search.replace(r,`chainmeetShare=${s}`):`${window.location.search}${window.location.search?"&":"?"}chainmeetShare=${s}`;window.history.replaceState(null,"",a)}}},Symbol.toStringTag,{value:"Module"}));class i{}o(i,"isApp",t),o(i,"isChainpalPc",l),o(i,"appLanguage",d),o(i,"client",h),window.ChainPal=i;const p=new i;e.appLanguage=d,e.client=h,e.default=p,e.isApp=t,e.isChainpalPc=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
