var r = Object.defineProperty;
var w = (n, e, t) => e in n ? r(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var o = (n, e, t) => (w(n, typeof e != "symbol" ? e + "" : e, t), t);
const c = window.navigator.userAgent, s = c.indexOf("ChainMeet") > -1, h = c.indexOf("ChainPalForPC") > -1, l = s ? c.indexOf("en-US") > -1 ? "en-US" : c.indexOf("zh-CH") > -1 ? "zh-CH" : "" : "", d = (n) => {
  if (s) {
    const e = window.btoa(unescape(window.encodeURIComponent(JSON.stringify(n)))), t = new RegExp("chainmeetShare=[^&]*", "gi"), i = window.location.search.indexOf("chainmeetShare") > -1 ? window.location.search.replace(t, `chainmeetShare=${e}`) : `${window.location.search}${window.location.search ? "&" : "?"}chainmeetShare=${e}`;
    window.history.replaceState(null, "", i);
  }
}, p = (n, e) => {
  var t;
  if (s)
    try {
      const i = {
        name: n,
        ...e
      };
      (t = window == null ? void 0 : window.ReactNativeWebView) == null || t.postMessage(JSON.stringify(i));
    } catch (i) {
      console.error(i);
    }
}, g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  callNativeMethods: p,
  setChainmeetShare: d
}, Symbol.toStringTag, { value: "Module" }));
class a {
  //  server
}
o(a, "isApp", s), //是否是app 包含pc端
o(a, "isChainpalPc", h), // 是否是PC端， 仅PC端 
o(a, "appLanguage", l), //获取App环境语言 , app 外部返回空
o(a, "client", g);
window.ChainPal = a;
const u = new a();
export {
  l as appLanguage,
  g as client,
  u as default,
  s as isApp,
  h as isChainpalPc
};
