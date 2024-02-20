var r = Object.defineProperty;
var h = (n, e, t) => e in n ? r(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var i = (n, e, t) => (h(n, typeof e != "symbol" ? e + "" : e, t), t);
const c = window.navigator.userAgent, s = c.indexOf("ChainMeet") > -1, l = c.indexOf("ChainPalForPC") > -1, w = s ? c.indexOf("en-US") > -1 ? "en-US" : c.indexOf("zh-CH") > -1 ? "zh-CH" : "" : "", d = (n) => {
  if (s) {
    const e = window.btoa(unescape(window.encodeURIComponent(JSON.stringify(n)))), t = new RegExp("chainmeetShare=[^&]*", "gi"), a = window.location.search.indexOf("chainmeetShare") > -1 ? window.location.search.replace(t, `chainmeetShare=${e}`) : `${window.location.search}${window.location.search ? "&" : "?"}chainmeetShare=${e}`;
    window.history.replaceState(null, "", a);
  }
}, p = (n, e) => {
  var t;
  if (s)
    try {
      const a = {
        name: n,
        ...e
      };
      (t = window == null ? void 0 : window.ReactNativeWebView) == null || t.postMessage(JSON.stringify(a));
    } catch (a) {
      console.error(a);
    }
}, g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  callNativeMethods: p,
  setChainmeetShare: d
}, Symbol.toStringTag, { value: "Module" }));
class o {
  //  server
}
i(o, "isApp", s), //是否是app 包含pc端
i(o, "isChainpalPc", l), // 是否是PC端， 仅PC端 
i(o, "appLanguage", w), //获取App环境语言 , app 外部返回空
i(o, "client", g);
window.ChainPal = o;
export {
  w as appLanguage,
  g as client,
  o as default,
  s as isApp,
  l as isChainpalPc
};
