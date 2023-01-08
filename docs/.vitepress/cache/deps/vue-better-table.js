import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  h,
  openBlock,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  vModelCheckbox,
  vModelText,
  watch,
  withDirectives
} from "./chunk-3T6VSYDD.js";

// node_modules/vue-better-table/dist/vue-better-table.es.js
function ke(t2, e) {
  var n = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t2);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t2, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function u(t2) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ke(Object(n), true).forEach(function(a) {
      O(t2, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n)) : ke(Object(n)).forEach(function(a) {
      Object.defineProperty(t2, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t2;
}
function Pt(t2) {
  return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pt(t2);
}
function Rn(t2, e) {
  if (!(t2 instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ae(t2, e) {
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(t2, a.key, a);
  }
}
function zn(t2, e, n) {
  return e && Ae(t2.prototype, e), n && Ae(t2, n), Object.defineProperty(t2, "prototype", {
    writable: false
  }), t2;
}
function O(t2, e, n) {
  return e in t2 ? Object.defineProperty(t2, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t2[e] = n, t2;
}
function oe(t2, e) {
  return Fn(t2) || Yn(t2, e) || Ke(t2, e) || $n();
}
function dt(t2) {
  return jn(t2) || Dn(t2) || Ke(t2) || Bn();
}
function jn(t2) {
  if (Array.isArray(t2))
    return Vt(t2);
}
function Fn(t2) {
  if (Array.isArray(t2))
    return t2;
}
function Dn(t2) {
  if (typeof Symbol < "u" && t2[Symbol.iterator] != null || t2["@@iterator"] != null)
    return Array.from(t2);
}
function Yn(t2, e) {
  var n = t2 == null ? null : typeof Symbol < "u" && t2[Symbol.iterator] || t2["@@iterator"];
  if (n != null) {
    var a = [], r = true, i = false, o, s;
    try {
      for (n = n.call(t2); !(r = (o = n.next()).done) && (a.push(o.value), !(e && a.length === e)); r = true)
        ;
    } catch (l) {
      i = true, s = l;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Ke(t2, e) {
  if (!!t2) {
    if (typeof t2 == "string")
      return Vt(t2, e);
    var n = Object.prototype.toString.call(t2).slice(8, -1);
    if (n === "Object" && t2.constructor && (n = t2.constructor.name), n === "Map" || n === "Set")
      return Array.from(t2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Vt(t2, e);
  }
}
function Vt(t2, e) {
  (e == null || e > t2.length) && (e = t2.length);
  for (var n = 0, a = new Array(e); n < e; n++)
    a[n] = t2[n];
  return a;
}
function Bn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $n() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Oe = function() {
};
var se = {};
var Qe = {};
var Ze = null;
var Je = {
  mark: Oe,
  measure: Oe
};
try {
  typeof window < "u" && (se = window), typeof document < "u" && (Qe = document), typeof MutationObserver < "u" && (Ze = MutationObserver), typeof performance < "u" && (Je = performance);
} catch {
}
var Un = se.navigator || {};
var Se = Un.userAgent;
var _e = Se === void 0 ? "" : Se;
var H = se;
var x = Qe;
var Ce = Ze;
var gt = Je;
H.document;
var $ = !!x.documentElement && !!x.head && typeof x.addEventListener == "function" && typeof x.createElement == "function";
var tn = ~_e.indexOf("MSIE") || ~_e.indexOf("Trident/");
var ht;
var yt;
var xt;
var wt;
var kt;
var D = "___FONT_AWESOME___";
var Gt = 16;
var en = "fa";
var nn = "svg-inline--fa";
var K = "data-fa-i2svg";
var Xt = "data-fa-pseudo-element";
var Wn = "data-fa-pseudo-element-pending";
var le = "data-prefix";
var fe = "data-icon";
var Pe = "fontawesome-i2svg";
var Hn = "async";
var Vn = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var an = function() {
  try {
    return false;
  } catch {
    return false;
  }
}();
var y = "classic";
var w = "sharp";
var ce = [y, w];
function vt(t2) {
  return new Proxy(t2, {
    get: function(n, a) {
      return a in n ? n[a] : n[y];
    }
  });
}
var lt = vt((ht = {}, O(ht, y, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), O(ht, w, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid"
}), ht));
var ft = vt((yt = {}, O(yt, y, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), O(yt, w, {
  solid: "fass"
}), yt));
var ct = vt((xt = {}, O(xt, y, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), O(xt, w, {
  fass: "fa-solid"
}), xt));
var Gn = vt((wt = {}, O(wt, y, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), O(wt, w, {
  "fa-solid": "fass"
}), wt));
var Xn = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/;
var rn = "fa-layers-text";
var qn = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var Kn = vt((kt = {}, O(kt, y, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), O(kt, w, {
  900: "fass"
}), kt));
var on = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var Qn = on.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var Zn = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var X = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var ut = /* @__PURE__ */ new Set();
Object.keys(ft[y]).map(ut.add.bind(ut));
Object.keys(ft[w]).map(ut.add.bind(ut));
var Jn = [].concat(ce, dt(ut), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", X.GROUP, X.SWAP_OPACITY, X.PRIMARY, X.SECONDARY]).concat(on.map(function(t2) {
  return "".concat(t2, "x");
})).concat(Qn.map(function(t2) {
  return "w-".concat(t2);
}));
var it = H.FontAwesomeConfig || {};
function ta(t2) {
  var e = x.querySelector("script[" + t2 + "]");
  if (e)
    return e.getAttribute(t2);
}
function ea(t2) {
  return t2 === "" ? true : t2 === "false" ? false : t2 === "true" ? true : t2;
}
if (x && typeof x.querySelector == "function") {
  na = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  na.forEach(function(t2) {
    var e = oe(t2, 2), n = e[0], a = e[1], r = ea(ta(n));
    r != null && (it[a] = r);
  });
}
var na;
var sn = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: en,
  replacementClass: nn,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
it.familyPrefix && (it.cssPrefix = it.familyPrefix);
var et = u(u({}, sn), it);
et.autoReplaceSvg || (et.observeMutations = false);
var d = {};
Object.keys(sn).forEach(function(t2) {
  Object.defineProperty(d, t2, {
    enumerable: true,
    set: function(n) {
      et[t2] = n, ot.forEach(function(a) {
        return a(d);
      });
    },
    get: function() {
      return et[t2];
    }
  });
});
Object.defineProperty(d, "familyPrefix", {
  enumerable: true,
  set: function(e) {
    et.cssPrefix = e, ot.forEach(function(n) {
      return n(d);
    });
  },
  get: function() {
    return et.cssPrefix;
  }
});
H.FontAwesomeConfig = d;
var ot = [];
function aa(t2) {
  return ot.push(t2), function() {
    ot.splice(ot.indexOf(t2), 1);
  };
}
var W = Gt;
var F = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function ra(t2) {
  if (!(!t2 || !$)) {
    var e = x.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t2;
    for (var n = x.head.childNodes, a = null, r = n.length - 1; r > -1; r--) {
      var i = n[r], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
    }
    return x.head.insertBefore(e, a), t2;
  }
}
var ia = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function mt() {
  for (var t2 = 12, e = ""; t2-- > 0; )
    e += ia[Math.random() * 62 | 0];
  return e;
}
function nt(t2) {
  for (var e = [], n = (t2 || []).length >>> 0; n--; )
    e[n] = t2[n];
  return e;
}
function ue(t2) {
  return t2.classList ? nt(t2.classList) : (t2.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function ln(t2) {
  return "".concat(t2).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function oa(t2) {
  return Object.keys(t2 || {}).reduce(function(e, n) {
    return e + "".concat(n, '="').concat(ln(t2[n]), '" ');
  }, "").trim();
}
function Lt(t2) {
  return Object.keys(t2 || {}).reduce(function(e, n) {
    return e + "".concat(n, ": ").concat(t2[n].trim(), ";");
  }, "");
}
function me(t2) {
  return t2.size !== F.size || t2.x !== F.x || t2.y !== F.y || t2.rotate !== F.rotate || t2.flipX || t2.flipY;
}
function sa(t2) {
  var e = t2.transform, n = t2.containerWidth, a = t2.iconWidth, r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: c
  };
}
function la(t2) {
  var e = t2.transform, n = t2.width, a = n === void 0 ? Gt : n, r = t2.height, i = r === void 0 ? Gt : r, o = t2.startCentered, s = o === void 0 ? false : o, l = "";
  return s && tn ? l += "translate(".concat(e.x / W - a / 2, "em, ").concat(e.y / W - i / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(e.x / W, "em), calc(-50% + ").concat(e.y / W, "em)) ") : l += "translate(".concat(e.x / W, "em, ").concat(e.y / W, "em) "), l += "scale(".concat(e.size / W * (e.flipX ? -1 : 1), ", ").concat(e.size / W * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var fa = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function fn() {
  var t2 = en, e = nn, n = d.cssPrefix, a = d.replacementClass, r = fa;
  if (n !== t2 || a !== e) {
    var i = new RegExp("\\.".concat(t2, "\\-"), "g"), o = new RegExp("\\--".concat(t2, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
var Ee = false;
function Yt() {
  d.autoAddCss && !Ee && (ra(fn()), Ee = true);
}
var ca = {
  mixout: function() {
    return {
      dom: {
        css: fn,
        insertCss: Yt
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Yt();
      },
      beforeI2svg: function() {
        Yt();
      }
    };
  }
};
var Y = H || {};
Y[D] || (Y[D] = {});
Y[D].styles || (Y[D].styles = {});
Y[D].hooks || (Y[D].hooks = {});
Y[D].shims || (Y[D].shims = []);
var z = Y[D];
var cn = [];
var ua = function t() {
  x.removeEventListener("DOMContentLoaded", t), Et = 1, cn.map(function(e) {
    return e();
  });
};
var Et = false;
$ && (Et = (x.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(x.readyState), Et || x.addEventListener("DOMContentLoaded", ua));
function ma(t2) {
  !$ || (Et ? setTimeout(t2, 0) : cn.push(t2));
}
function pt(t2) {
  var e = t2.tag, n = t2.attributes, a = n === void 0 ? {} : n, r = t2.children, i = r === void 0 ? [] : r;
  return typeof t2 == "string" ? ln(t2) : "<".concat(e, " ").concat(oa(a), ">").concat(i.map(pt).join(""), "</").concat(e, ">");
}
function Ne(t2, e, n) {
  if (t2 && t2[e] && t2[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t2[e][n]
    };
}
var da = function(e, n) {
  return function(a, r, i, o) {
    return e.call(n, a, r, i, o);
  };
};
var Bt = function(e, n, a, r) {
  var i = Object.keys(e), o = i.length, s = r !== void 0 ? da(n, r) : n, l, c, f;
  for (a === void 0 ? (l = 1, f = e[i[0]]) : (l = 0, f = a); l < o; l++)
    c = i[l], f = s(f, e[c], c, e);
  return f;
};
function va(t2) {
  for (var e = [], n = 0, a = t2.length; n < a; ) {
    var r = t2.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      var i = t2.charCodeAt(n++);
      (i & 64512) == 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
function qt(t2) {
  var e = va(t2);
  return e.length === 1 ? e[0].toString(16) : null;
}
function pa(t2, e) {
  var n = t2.length, a = t2.charCodeAt(e), r;
  return a >= 55296 && a <= 56319 && n > e + 1 && (r = t2.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function Ie(t2) {
  return Object.keys(t2).reduce(function(e, n) {
    var a = t2[n], r = !!a.icon;
    return r ? e[a.iconName] = a.icon : e[n] = a, e;
  }, {});
}
function Kt(t2, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.skipHooks, r = a === void 0 ? false : a, i = Ie(e);
  typeof z.hooks.addPack == "function" && !r ? z.hooks.addPack(t2, Ie(e)) : z.styles[t2] = u(u({}, z.styles[t2] || {}), i), t2 === "fas" && Kt("fa", e);
}
var At;
var Ot;
var St;
var Z = z.styles;
var ba = z.shims;
var ga = (At = {}, O(At, y, Object.values(ct[y])), O(At, w, Object.values(ct[w])), At);
var de = null;
var un = {};
var mn = {};
var dn = {};
var vn = {};
var pn = {};
var ha = (Ot = {}, O(Ot, y, Object.keys(lt[y])), O(Ot, w, Object.keys(lt[w])), Ot);
function ya(t2) {
  return ~Jn.indexOf(t2);
}
function xa(t2, e) {
  var n = e.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === t2 && r !== "" && !ya(r) ? r : null;
}
var bn = function() {
  var e = function(i) {
    return Bt(Z, function(o, s, l) {
      return o[l] = Bt(s, i, {}), o;
    }, {});
  };
  un = e(function(r, i, o) {
    if (i[3] && (r[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), mn = e(function(r, i, o) {
    if (r[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), pn = e(function(r, i, o) {
    var s = i[2];
    return r[o] = o, s.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var n = "far" in Z || d.autoFetchSvg, a = Bt(ba, function(r, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  dn = a.names, vn = a.unicodes, de = Mt(d.styleDefault, {
    family: d.familyDefault
  });
};
aa(function(t2) {
  de = Mt(t2.styleDefault, {
    family: d.familyDefault
  });
});
bn();
function ve(t2, e) {
  return (un[t2] || {})[e];
}
function wa(t2, e) {
  return (mn[t2] || {})[e];
}
function q(t2, e) {
  return (pn[t2] || {})[e];
}
function gn(t2) {
  return dn[t2] || {
    prefix: null,
    iconName: null
  };
}
function ka(t2) {
  var e = vn[t2], n = ve("fas", t2);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function V() {
  return de;
}
var pe = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Mt(t2) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.family, a = n === void 0 ? y : n, r = lt[a][t2], i = ft[a][t2] || ft[a][r], o = t2 in z.styles ? t2 : null;
  return i || o || null;
}
var Te = (St = {}, O(St, y, Object.keys(ct[y])), O(St, w, Object.keys(ct[w])), St);
function Rt(t2) {
  var e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.skipLookups, r = a === void 0 ? false : a, i = (e = {}, O(e, y, "".concat(d.cssPrefix, "-").concat(y)), O(e, w, "".concat(d.cssPrefix, "-").concat(w)), e), o = null, s = y;
  (t2.includes(i[y]) || t2.some(function(c) {
    return Te[y].includes(c);
  })) && (s = y), (t2.includes(i[w]) || t2.some(function(c) {
    return Te[w].includes(c);
  })) && (s = w);
  var l = t2.reduce(function(c, f) {
    var m = xa(d.cssPrefix, f);
    if (Z[f] ? (f = ga[s].includes(f) ? Gn[s][f] : f, o = f, c.prefix = f) : ha[s].indexOf(f) > -1 ? (o = f, c.prefix = Mt(f, {
      family: s
    })) : m ? c.iconName = m : f !== d.replacementClass && f !== i[y] && f !== i[w] && c.rest.push(f), !r && c.prefix && c.iconName) {
      var b = o === "fa" ? gn(c.iconName) : {}, g = q(c.prefix, c.iconName);
      b.prefix && (o = null), c.iconName = b.iconName || g || c.iconName, c.prefix = b.prefix || c.prefix, c.prefix === "far" && !Z.far && Z.fas && !d.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, pe());
  return (t2.includes("fa-brands") || t2.includes("fab")) && (l.prefix = "fab"), (t2.includes("fa-duotone") || t2.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === w && (Z.fass || d.autoFetchSvg) && (l.prefix = "fass", l.iconName = q(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = V() || "fas"), l;
}
var Aa = function() {
  function t2() {
    Rn(this, t2), this.definitions = {};
  }
  return zn(t2, [{
    key: "add",
    value: function() {
      for (var n = this, a = arguments.length, r = new Array(a), i = 0; i < a; i++)
        r[i] = arguments[i];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = u(u({}, n.definitions[s] || {}), o[s]), Kt(s, o[s]);
        var l = ct[y][s];
        l && Kt(l, o[s]), bn();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, a) {
      var r = a.prefix && a.iconName && a.icon ? {
        0: a
      } : a;
      return Object.keys(r).map(function(i) {
        var o = r[i], s = o.prefix, l = o.iconName, c = o.icon, f = c[2];
        n[s] || (n[s] = {}), f.length > 0 && f.forEach(function(m) {
          typeof m == "string" && (n[s][m] = c);
        }), n[s][l] = c;
      }), n;
    }
  }]), t2;
}();
var Le = [];
var J = {};
var tt = {};
var Oa = Object.keys(tt);
function Sa(t2, e) {
  var n = e.mixoutsTo;
  return Le = t2, J = {}, Object.keys(tt).forEach(function(a) {
    Oa.indexOf(a) === -1 && delete tt[a];
  }), Le.forEach(function(a) {
    var r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (n[o] = r[o]), Pt(r[o]) === "object" && Object.keys(r[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = r[o][s];
      });
    }), a.hooks) {
      var i = a.hooks();
      Object.keys(i).forEach(function(o) {
        J[o] || (J[o] = []), J[o].push(i[o]);
      });
    }
    a.provides && a.provides(tt);
  }), n;
}
function Qt(t2, e) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  var i = J[t2] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(a));
  }), e;
}
function Q(t2) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    n[a - 1] = arguments[a];
  var r = J[t2] || [];
  r.forEach(function(i) {
    i.apply(null, n);
  });
}
function B() {
  var t2 = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return tt[t2] ? tt[t2].apply(null, e) : void 0;
}
function Zt(t2) {
  t2.prefix === "fa" && (t2.prefix = "fas");
  var e = t2.iconName, n = t2.prefix || V();
  if (!!e)
    return e = q(n, e) || e, Ne(hn.definitions, n, e) || Ne(z.styles, n, e);
}
var hn = new Aa();
var _a = function() {
  d.autoReplaceSvg = false, d.observeMutations = false, Q("noAuto");
};
var Ca = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return $ ? (Q("beforeI2svg", e), B("pseudoElements2svg", e), B("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot;
    d.autoReplaceSvg === false && (d.autoReplaceSvg = true), d.observeMutations = true, ma(function() {
      Ea({
        autoReplaceSvgRoot: n
      }), Q("watch", e);
    });
  }
};
var Pa = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Pt(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: q(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var n = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], a = Mt(e[0]);
      return {
        prefix: a,
        iconName: q(a, n) || n
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(d.cssPrefix, "-")) > -1 || e.match(Xn))) {
      var r = Rt(e.split(" "), {
        skipLookups: true
      });
      return {
        prefix: r.prefix || V(),
        iconName: q(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof e == "string") {
      var i = V();
      return {
        prefix: i,
        iconName: q(i, e) || e
      };
    }
  }
};
var T = {
  noAuto: _a,
  config: d,
  dom: Ca,
  parse: Pa,
  library: hn,
  findIconDefinition: Zt,
  toHtml: pt
};
var Ea = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot, a = n === void 0 ? x : n;
  (Object.keys(z.styles).length > 0 || d.autoFetchSvg) && $ && d.autoReplaceSvg && T.dom.i2svg({
    node: a
  });
};
function zt(t2, e) {
  return Object.defineProperty(t2, "abstract", {
    get: e
  }), Object.defineProperty(t2, "html", {
    get: function() {
      return t2.abstract.map(function(a) {
        return pt(a);
      });
    }
  }), Object.defineProperty(t2, "node", {
    get: function() {
      if (!!$) {
        var a = x.createElement("div");
        return a.innerHTML = t2.html, a.children;
      }
    }
  }), t2;
}
function Na(t2) {
  var e = t2.children, n = t2.main, a = t2.mask, r = t2.attributes, i = t2.styles, o = t2.transform;
  if (me(o) && n.found && !a.found) {
    var s = n.width, l = n.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = Lt(u(u({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function Ia(t2) {
  var e = t2.prefix, n = t2.iconName, a = t2.children, r = t2.attributes, i = t2.symbol, o = i === true ? "".concat(e, "-").concat(d.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: u(u({}, r), {}, {
        id: o
      }),
      children: a
    }]
  }];
}
function be(t2) {
  var e = t2.icons, n = e.main, a = e.mask, r = t2.prefix, i = t2.iconName, o = t2.transform, s = t2.symbol, l = t2.title, c = t2.maskId, f = t2.titleId, m = t2.extra, b = t2.watchable, g = b === void 0 ? false : b, S = a.found ? a : n, _ = S.width, E = S.height, v = r === "fak", p = [d.replacementClass, i ? "".concat(d.cssPrefix, "-").concat(i) : ""].filter(function(U) {
    return m.classes.indexOf(U) === -1;
  }).filter(function(U) {
    return U !== "" || !!U;
  }).concat(m.classes).join(" "), h2 = {
    children: [],
    attributes: u(u({}, m.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: p,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(_, " ").concat(E)
    })
  }, k = v && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(_ / E * 16 * 0.0625, "em")
  } : {};
  g && (h2.attributes[K] = ""), l && (h2.children.push({
    tag: "title",
    attributes: {
      id: h2.attributes["aria-labelledby"] || "title-".concat(f || mt())
    },
    children: [l]
  }), delete h2.attributes.title);
  var A = u(u({}, h2), {}, {
    prefix: r,
    iconName: i,
    main: n,
    mask: a,
    maskId: c,
    transform: o,
    symbol: s,
    styles: u(u({}, k), m.styles)
  }), j = a.found && n.found ? B("generateAbstractMask", A) || {
    children: [],
    attributes: {}
  } : B("generateAbstractIcon", A) || {
    children: [],
    attributes: {}
  }, L = j.children, jt = j.attributes;
  return A.children = L, A.attributes = jt, s ? Ia(A) : Na(A);
}
function Me(t2) {
  var e = t2.content, n = t2.width, a = t2.height, r = t2.transform, i = t2.title, o = t2.extra, s = t2.watchable, l = s === void 0 ? false : s, c = u(u(u({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[K] = "");
  var f = u({}, o.styles);
  me(r) && (f.transform = la({
    transform: r,
    startCentered: true,
    width: n,
    height: a
  }), f["-webkit-transform"] = f.transform);
  var m = Lt(f);
  m.length > 0 && (c.style = m);
  var b = [];
  return b.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), i && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), b;
}
function Ta(t2) {
  var e = t2.content, n = t2.title, a = t2.extra, r = u(u(u({}, a.attributes), n ? {
    title: n
  } : {}), {}, {
    class: a.classes.join(" ")
  }), i = Lt(a.styles);
  i.length > 0 && (r.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var $t = z.styles;
function Jt(t2) {
  var e = t2[0], n = t2[1], a = t2.slice(4), r = oe(a, 1), i = r[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(d.cssPrefix, "-").concat(X.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(X.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(X.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: true,
    width: e,
    height: n,
    icon: o
  };
}
var La = {
  found: false,
  width: 512,
  height: 512
};
function Ma(t2, e) {
  !an && !d.showMissingIcons && t2 && console.error('Icon with name "'.concat(t2, '" and prefix "').concat(e, '" is missing.'));
}
function te(t2, e) {
  var n = e;
  return e === "fa" && d.styleDefault !== null && (e = V()), new Promise(function(a, r) {
    if (B("missingIconAbstract"), n === "fa") {
      var i = gn(t2) || {};
      t2 = i.iconName || t2, e = i.prefix || e;
    }
    if (t2 && e && $t[e] && $t[e][t2]) {
      var o = $t[e][t2];
      return a(Jt(o));
    }
    Ma(t2, e), a(u(u({}, La), {}, {
      icon: d.showMissingIcons && t2 ? B("missingIconAbstract") || {} : {}
    }));
  });
}
var Re = function() {
};
var ee = d.measurePerformance && gt && gt.mark && gt.measure ? gt : {
  mark: Re,
  measure: Re
};
var rt = 'FA "6.2.1"';
var Ra = function(e) {
  return ee.mark("".concat(rt, " ").concat(e, " begins")), function() {
    return yn(e);
  };
};
var yn = function(e) {
  ee.mark("".concat(rt, " ").concat(e, " ends")), ee.measure("".concat(rt, " ").concat(e), "".concat(rt, " ").concat(e, " begins"), "".concat(rt, " ").concat(e, " ends"));
};
var ge = {
  begin: Ra,
  end: yn
};
var _t = function() {
};
function ze(t2) {
  var e = t2.getAttribute ? t2.getAttribute(K) : null;
  return typeof e == "string";
}
function za(t2) {
  var e = t2.getAttribute ? t2.getAttribute(le) : null, n = t2.getAttribute ? t2.getAttribute(fe) : null;
  return e && n;
}
function ja(t2) {
  return t2 && t2.classList && t2.classList.contains && t2.classList.contains(d.replacementClass);
}
function Fa() {
  if (d.autoReplaceSvg === true)
    return Ct.replace;
  var t2 = Ct[d.autoReplaceSvg];
  return t2 || Ct.replace;
}
function Da(t2) {
  return x.createElementNS("http://www.w3.org/2000/svg", t2);
}
function Ya(t2) {
  return x.createElement(t2);
}
function xn(t2) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.ceFn, a = n === void 0 ? t2.tag === "svg" ? Da : Ya : n;
  if (typeof t2 == "string")
    return x.createTextNode(t2);
  var r = a(t2.tag);
  Object.keys(t2.attributes || []).forEach(function(o) {
    r.setAttribute(o, t2.attributes[o]);
  });
  var i = t2.children || [];
  return i.forEach(function(o) {
    r.appendChild(xn(o, {
      ceFn: a
    }));
  }), r;
}
function Ba(t2) {
  var e = " ".concat(t2.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var Ct = {
  replace: function(e) {
    var n = e[0];
    if (n.parentNode)
      if (e[1].forEach(function(r) {
        n.parentNode.insertBefore(xn(r), n);
      }), n.getAttribute(K) === null && d.keepOriginalSource) {
        var a = x.createComment(Ba(n));
        n.parentNode.replaceChild(a, n);
      } else
        n.remove();
  },
  nest: function(e) {
    var n = e[0], a = e[1];
    if (~ue(n).indexOf(d.replacementClass))
      return Ct.replace(e);
    var r = new RegExp("".concat(d.cssPrefix, "-.*"));
    if (delete a[0].attributes.id, a[0].attributes.class) {
      var i = a[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === d.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      a[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = a.map(function(s) {
      return pt(s);
    }).join(`
`);
    n.setAttribute(K, ""), n.innerHTML = o;
  }
};
function je(t2) {
  t2();
}
function wn(t2, e) {
  var n = typeof e == "function" ? e : _t;
  if (t2.length === 0)
    n();
  else {
    var a = je;
    d.mutateApproach === Hn && (a = H.requestAnimationFrame || je), a(function() {
      var r = Fa(), i = ge.begin("mutate");
      t2.map(r), i(), n();
    });
  }
}
var he = false;
function kn() {
  he = true;
}
function ne() {
  he = false;
}
var Nt = null;
function Fe(t2) {
  if (!!Ce && !!d.observeMutations) {
    var e = t2.treeCallback, n = e === void 0 ? _t : e, a = t2.nodeCallback, r = a === void 0 ? _t : a, i = t2.pseudoElementsCallback, o = i === void 0 ? _t : i, s = t2.observeMutationsRoot, l = s === void 0 ? x : s;
    Nt = new Ce(function(c) {
      if (!he) {
        var f = V();
        nt(c).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !ze(m.addedNodes[0]) && (d.searchPseudoElements && o(m.target), n(m.target)), m.type === "attributes" && m.target.parentNode && d.searchPseudoElements && o(m.target.parentNode), m.type === "attributes" && ze(m.target) && ~Zn.indexOf(m.attributeName))
            if (m.attributeName === "class" && za(m.target)) {
              var b = Rt(ue(m.target)), g = b.prefix, S = b.iconName;
              m.target.setAttribute(le, g || f), S && m.target.setAttribute(fe, S);
            } else
              ja(m.target) && r(m.target);
        });
      }
    }), $ && Nt.observe(l, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
}
function $a() {
  !Nt || Nt.disconnect();
}
function Ua(t2) {
  var e = t2.getAttribute("style"), n = [];
  return e && (n = e.split(";").reduce(function(a, r) {
    var i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
  }, {})), n;
}
function Wa(t2) {
  var e = t2.getAttribute("data-prefix"), n = t2.getAttribute("data-icon"), a = t2.innerText !== void 0 ? t2.innerText.trim() : "", r = Rt(ue(t2));
  return r.prefix || (r.prefix = V()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = wa(r.prefix, t2.innerText) || ve(r.prefix, qt(t2.innerText))), !r.iconName && d.autoFetchSvg && t2.firstChild && t2.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t2.firstChild.data)), r;
}
function Ha(t2) {
  var e = nt(t2.attributes).reduce(function(r, i) {
    return r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r;
  }, {}), n = t2.getAttribute("title"), a = t2.getAttribute("data-fa-title-id");
  return d.autoA11y && (n ? e["aria-labelledby"] = "".concat(d.replacementClass, "-title-").concat(a || mt()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function Va() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: F,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function De(t2) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  }, n = Wa(t2), a = n.iconName, r = n.prefix, i = n.rest, o = Ha(t2), s = Qt("parseNodeAttributes", {}, t2), l = e.styleParser ? Ua(t2) : [];
  return u({
    iconName: a,
    title: t2.getAttribute("title"),
    titleId: t2.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: F,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var Ga = z.styles;
function An(t2) {
  var e = d.autoReplaceSvg === "nest" ? De(t2, {
    styleParser: false
  }) : De(t2);
  return ~e.extra.classes.indexOf(rn) ? B("generateLayersText", t2, e) : B("generateSvgReplacementMutation", t2, e);
}
var G = /* @__PURE__ */ new Set();
ce.map(function(t2) {
  G.add("fa-".concat(t2));
});
Object.keys(lt[y]).map(G.add.bind(G));
Object.keys(lt[w]).map(G.add.bind(G));
G = dt(G);
function Ye(t2) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!$)
    return Promise.resolve();
  var n = x.documentElement.classList, a = function(m) {
    return n.add("".concat(Pe, "-").concat(m));
  }, r = function(m) {
    return n.remove("".concat(Pe, "-").concat(m));
  }, i = d.autoFetchSvg ? G : ce.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(Ga));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(rn, ":not([").concat(K, "])")].concat(i.map(function(f) {
    return ".".concat(f, ":not([").concat(K, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = nt(t2.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  var l = ge.begin("onTree"), c = s.reduce(function(f, m) {
    try {
      var b = An(m);
      b && f.push(b);
    } catch (g) {
      an || g.name === "MissingIcon" && console.error(g);
    }
    return f;
  }, []);
  return new Promise(function(f, m) {
    Promise.all(c).then(function(b) {
      wn(b, function() {
        a("active"), a("complete"), r("pending"), typeof e == "function" && e(), l(), f();
      });
    }).catch(function(b) {
      l(), m(b);
    });
  });
}
function Xa(t2) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  An(t2).then(function(n) {
    n && wn([n], e);
  });
}
function qa(t2) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (e || {}).icon ? e : Zt(e || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : Zt(r || {})), t2(a, u(u({}, n), {}, {
      mask: r
    }));
  };
}
var Ka = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, r = a === void 0 ? F : a, i = n.symbol, o = i === void 0 ? false : i, s = n.mask, l = s === void 0 ? null : s, c = n.maskId, f = c === void 0 ? null : c, m = n.title, b = m === void 0 ? null : m, g = n.titleId, S = g === void 0 ? null : g, _ = n.classes, E = _ === void 0 ? [] : _, v = n.attributes, p = v === void 0 ? {} : v, h2 = n.styles, k = h2 === void 0 ? {} : h2;
  if (!!e) {
    var A = e.prefix, j = e.iconName, L = e.icon;
    return zt(u({
      type: "icon"
    }, e), function() {
      return Q("beforeDOMElementCreation", {
        iconDefinition: e,
        params: n
      }), d.autoA11y && (b ? p["aria-labelledby"] = "".concat(d.replacementClass, "-title-").concat(S || mt()) : (p["aria-hidden"] = "true", p.focusable = "false")), be({
        icons: {
          main: Jt(L),
          mask: l ? Jt(l.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: A,
        iconName: j,
        transform: u(u({}, F), r),
        symbol: o,
        title: b,
        maskId: f,
        titleId: S,
        extra: {
          attributes: p,
          styles: k,
          classes: E
        }
      });
    });
  }
};
var Qa = {
  mixout: function() {
    return {
      icon: qa(Ka)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Ye, n.nodeCallback = Xa, n;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(n) {
      var a = n.node, r = a === void 0 ? x : a, i = n.callback, o = i === void 0 ? function() {
      } : i;
      return Ye(r, o);
    }, e.generateSvgReplacementMutation = function(n, a) {
      var r = a.iconName, i = a.title, o = a.titleId, s = a.prefix, l = a.transform, c = a.symbol, f = a.mask, m = a.maskId, b = a.extra;
      return new Promise(function(g, S) {
        Promise.all([te(r, s), f.iconName ? te(f.iconName, f.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(_) {
          var E = oe(_, 2), v = E[0], p = E[1];
          g([n, be({
            icons: {
              main: v,
              mask: p
            },
            prefix: s,
            iconName: r,
            transform: l,
            symbol: c,
            maskId: m,
            title: i,
            titleId: o,
            extra: b,
            watchable: true
          })]);
        }).catch(S);
      });
    }, e.generateAbstractIcon = function(n) {
      var a = n.children, r = n.attributes, i = n.main, o = n.transform, s = n.styles, l = Lt(s);
      l.length > 0 && (r.style = l);
      var c;
      return me(o) && (c = B("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), a.push(c || i.icon), {
        children: a,
        attributes: r
      };
    };
  }
};
var Za = {
  mixout: function() {
    return {
      layer: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.classes, i = r === void 0 ? [] : r;
        return zt({
          type: "layer"
        }, function() {
          Q("beforeDOMElementCreation", {
            assembler: n,
            params: a
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(d.cssPrefix, "-layers")].concat(dt(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
};
var Ja = {
  mixout: function() {
    return {
      counter: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.title, i = r === void 0 ? null : r, o = a.classes, s = o === void 0 ? [] : o, l = a.attributes, c = l === void 0 ? {} : l, f = a.styles, m = f === void 0 ? {} : f;
        return zt({
          type: "counter",
          content: n
        }, function() {
          return Q("beforeDOMElementCreation", {
            content: n,
            params: a
          }), Ta({
            content: n.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: m,
              classes: ["".concat(d.cssPrefix, "-layers-counter")].concat(dt(s))
            }
          });
        });
      }
    };
  }
};
var tr = {
  mixout: function() {
    return {
      text: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.transform, i = r === void 0 ? F : r, o = a.title, s = o === void 0 ? null : o, l = a.classes, c = l === void 0 ? [] : l, f = a.attributes, m = f === void 0 ? {} : f, b = a.styles, g = b === void 0 ? {} : b;
        return zt({
          type: "text",
          content: n
        }, function() {
          return Q("beforeDOMElementCreation", {
            content: n,
            params: a
          }), Me({
            content: n,
            transform: u(u({}, F), i),
            title: s,
            extra: {
              attributes: m,
              styles: g,
              classes: ["".concat(d.cssPrefix, "-layers-text")].concat(dt(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(n, a) {
      var r = a.title, i = a.transform, o = a.extra, s = null, l = null;
      if (tn) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), f = n.getBoundingClientRect();
        s = f.width / c, l = f.height / c;
      }
      return d.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Me({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: i,
        title: r,
        extra: o,
        watchable: true
      })]);
    };
  }
};
var er = new RegExp('"', "ug");
var Be = [1105920, 1112319];
function nr(t2) {
  var e = t2.replace(er, ""), n = pa(e, 0), a = n >= Be[0] && n <= Be[1], r = e.length === 2 ? e[0] === e[1] : false;
  return {
    value: qt(r ? e[0] : e),
    isSecondary: a || r
  };
}
function $e(t2, e) {
  var n = "".concat(Wn).concat(e.replace(":", "-"));
  return new Promise(function(a, r) {
    if (t2.getAttribute(n) !== null)
      return a();
    var i = nt(t2.children), o = i.filter(function(L) {
      return L.getAttribute(Xt) === e;
    })[0], s = H.getComputedStyle(t2, e), l = s.getPropertyValue("font-family").match(qn), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !l)
      return t2.removeChild(o), a();
    if (l && f !== "none" && f !== "") {
      var m = s.getPropertyValue("content"), b = ~["Sharp"].indexOf(l[2]) ? w : y, g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? ft[b][l[2].toLowerCase()] : Kn[b][c], S = nr(m), _ = S.value, E = S.isSecondary, v = l[0].startsWith("FontAwesome"), p = ve(g, _), h2 = p;
      if (v) {
        var k = ka(_);
        k.iconName && k.prefix && (p = k.iconName, g = k.prefix);
      }
      if (p && !E && (!o || o.getAttribute(le) !== g || o.getAttribute(fe) !== h2)) {
        t2.setAttribute(n, h2), o && t2.removeChild(o);
        var A = Va(), j = A.extra;
        j.attributes[Xt] = e, te(p, g).then(function(L) {
          var jt = be(u(u({}, A), {}, {
            icons: {
              main: L,
              mask: pe()
            },
            prefix: g,
            iconName: h2,
            extra: j,
            watchable: true
          })), U = x.createElement("svg");
          e === "::before" ? t2.insertBefore(U, t2.firstChild) : t2.appendChild(U), U.outerHTML = jt.map(function(Nn) {
            return pt(Nn);
          }).join(`
`), t2.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function ar(t2) {
  return Promise.all([$e(t2, "::before"), $e(t2, "::after")]);
}
function rr(t2) {
  return t2.parentNode !== document.head && !~Vn.indexOf(t2.tagName.toUpperCase()) && !t2.getAttribute(Xt) && (!t2.parentNode || t2.parentNode.tagName !== "svg");
}
function Ue(t2) {
  if (!!$)
    return new Promise(function(e, n) {
      var a = nt(t2.querySelectorAll("*")).filter(rr).map(ar), r = ge.begin("searchPseudoElements");
      kn(), Promise.all(a).then(function() {
        r(), ne(), e();
      }).catch(function() {
        r(), ne(), n();
      });
    });
}
var ir = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Ue, n;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(n) {
      var a = n.node, r = a === void 0 ? x : a;
      d.searchPseudoElements && Ue(r);
    };
  }
};
var We = false;
var or = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          kn(), We = true;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Fe(Qt("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        $a();
      },
      watch: function(n) {
        var a = n.observeMutationsRoot;
        We ? ne() : Fe(Qt("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
};
var He = function(e) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(a, r) {
    var i = r.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return a.flipX = true, a;
    if (o && s === "v")
      return a.flipY = true, a;
    if (s = parseFloat(s), isNaN(s))
      return a;
    switch (o) {
      case "grow":
        a.size = a.size + s;
        break;
      case "shrink":
        a.size = a.size - s;
        break;
      case "left":
        a.x = a.x - s;
        break;
      case "right":
        a.x = a.x + s;
        break;
      case "up":
        a.y = a.y - s;
        break;
      case "down":
        a.y = a.y + s;
        break;
      case "rotate":
        a.rotate = a.rotate + s;
        break;
    }
    return a;
  }, n);
};
var sr = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return He(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-transform");
        return r && (n.transform = He(r)), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(n) {
      var a = n.main, r = n.transform, i = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), m = {
        transform: "".concat(l, " ").concat(c, " ").concat(f)
      }, b = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, g = {
        outer: s,
        inner: m,
        path: b
      };
      return {
        tag: "g",
        attributes: u({}, g.outer),
        children: [{
          tag: "g",
          attributes: u({}, g.inner),
          children: [{
            tag: a.icon.tag,
            children: a.icon.children,
            attributes: u(u({}, a.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
var Ut = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ve(t2) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return t2.attributes && (t2.attributes.fill || e) && (t2.attributes.fill = "black"), t2;
}
function lr(t2) {
  return t2.tag === "g" ? t2.children : [t2];
}
var fr = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-mask"), i = r ? Rt(r.split(" ").map(function(o) {
          return o.trim();
        })) : pe();
        return i.prefix || (i.prefix = V()), n.mask = i, n.maskId = a.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(n) {
      var a = n.children, r = n.attributes, i = n.main, o = n.mask, s = n.maskId, l = n.transform, c = i.width, f = i.icon, m = o.width, b = o.icon, g = sa({
        transform: l,
        containerWidth: m,
        iconWidth: c
      }), S = {
        tag: "rect",
        attributes: u(u({}, Ut), {}, {
          fill: "white"
        })
      }, _ = f.children ? {
        children: f.children.map(Ve)
      } : {}, E = {
        tag: "g",
        attributes: u({}, g.inner),
        children: [Ve(u({
          tag: f.tag,
          attributes: u(u({}, f.attributes), g.path)
        }, _))]
      }, v = {
        tag: "g",
        attributes: u({}, g.outer),
        children: [E]
      }, p = "mask-".concat(s || mt()), h2 = "clip-".concat(s || mt()), k = {
        tag: "mask",
        attributes: u(u({}, Ut), {}, {
          id: p,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [S, v]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: h2
          },
          children: lr(b)
        }, k]
      };
      return a.push(A, {
        tag: "rect",
        attributes: u({
          fill: "currentColor",
          "clip-path": "url(#".concat(h2, ")"),
          mask: "url(#".concat(p, ")")
        }, Ut)
      }), {
        children: a,
        attributes: r
      };
    };
  }
};
var cr = {
  provides: function(e) {
    var n = false;
    H.matchMedia && (n = H.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var a = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      a.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = u(u({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: u(u({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: u(u({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: u(u({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), a.push(s), a.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || a.push({
        tag: "path",
        attributes: u(u({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: u(u({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: a
      };
    };
  }
};
var ur = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-symbol"), i = r === null ? false : r === "" ? true : r;
        return n.symbol = i, n;
      }
    };
  }
};
var mr = [ca, Qa, Za, Ja, tr, ir, or, sr, fr, cr, ur];
Sa(mr, {
  mixoutsTo: T
});
T.noAuto;
var On = T.config;
var Sn = T.library;
T.dom;
var It = T.parse;
T.findIconDefinition;
T.toHtml;
var dr = T.icon;
T.layer;
var vr = T.text;
T.counter;
function Ge(t2, e) {
  var n = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t2);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t2, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function R(t2) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ge(Object(n), true).forEach(function(a) {
      N(t2, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n)) : Ge(Object(n)).forEach(function(a) {
      Object.defineProperty(t2, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t2;
}
function Tt(t2) {
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tt(t2);
}
function N(t2, e, n) {
  return e in t2 ? Object.defineProperty(t2, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t2[e] = n, t2;
}
function pr(t2, e) {
  if (t2 == null)
    return {};
  var n = {}, a = Object.keys(t2), r, i;
  for (i = 0; i < a.length; i++)
    r = a[i], !(e.indexOf(r) >= 0) && (n[r] = t2[r]);
  return n;
}
function br(t2, e) {
  if (t2 == null)
    return {};
  var n = pr(t2, e), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t2);
    for (r = 0; r < i.length; r++)
      a = i[r], !(e.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t2, a) || (n[a] = t2[a]));
  }
  return n;
}
function ae(t2) {
  return gr(t2) || hr(t2) || yr(t2) || xr();
}
function gr(t2) {
  if (Array.isArray(t2))
    return re(t2);
}
function hr(t2) {
  if (typeof Symbol < "u" && t2[Symbol.iterator] != null || t2["@@iterator"] != null)
    return Array.from(t2);
}
function yr(t2, e) {
  if (!!t2) {
    if (typeof t2 == "string")
      return re(t2, e);
    var n = Object.prototype.toString.call(t2).slice(8, -1);
    if (n === "Object" && t2.constructor && (n = t2.constructor.name), n === "Map" || n === "Set")
      return Array.from(t2);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return re(t2, e);
  }
}
function re(t2, e) {
  (e == null || e > t2.length) && (e = t2.length);
  for (var n = 0, a = new Array(e); n < e; n++)
    a[n] = t2[n];
  return a;
}
function xr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var _n = { exports: {} };
(function(t2) {
  (function(e) {
    var n = function(v, p, h2) {
      if (!c(p) || m(p) || b(p) || g(p) || l(p))
        return p;
      var k, A = 0, j = 0;
      if (f(p))
        for (k = [], j = p.length; A < j; A++)
          k.push(n(v, p[A], h2));
      else {
        k = {};
        for (var L in p)
          Object.prototype.hasOwnProperty.call(p, L) && (k[v(L, h2)] = n(v, p[L], h2));
      }
      return k;
    }, a = function(v, p) {
      p = p || {};
      var h2 = p.separator || "_", k = p.split || /(?=[A-Z])/;
      return v.split(k).join(h2);
    }, r = function(v) {
      return S(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(p, h2) {
        return h2 ? h2.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, i = function(v) {
      var p = r(v);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, o = function(v, p) {
      return a(v, p).toLowerCase();
    }, s = Object.prototype.toString, l = function(v) {
      return typeof v == "function";
    }, c = function(v) {
      return v === Object(v);
    }, f = function(v) {
      return s.call(v) == "[object Array]";
    }, m = function(v) {
      return s.call(v) == "[object Date]";
    }, b = function(v) {
      return s.call(v) == "[object RegExp]";
    }, g = function(v) {
      return s.call(v) == "[object Boolean]";
    }, S = function(v) {
      return v = v - 0, v === v;
    }, _ = function(v, p) {
      var h2 = p && "process" in p ? p.process : p;
      return typeof h2 != "function" ? v : function(k, A) {
        return h2(k, v, A);
      };
    }, E = {
      camelize: r,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(v, p) {
        return n(_(r, p), v);
      },
      decamelizeKeys: function(v, p) {
        return n(_(o, p), v, p);
      },
      pascalizeKeys: function(v, p) {
        return n(_(i, p), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t2.exports ? t2.exports = E : e.humps = E;
  })(wr);
})(_n);
var kr = _n.exports;
var Ar = ["class", "style"];
function Or(t2) {
  return t2.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var a = n.indexOf(":"), r = kr.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return e[r] = i, e;
  }, {});
}
function Sr(t2) {
  return t2.split(/\s+/).reduce(function(e, n) {
    return e[n] = true, e;
  }, {});
}
function ye(t2) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t2 == "string")
    return t2;
  var a = (t2.children || []).map(function(l) {
    return ye(l);
  }), r = Object.keys(t2.attributes || {}).reduce(function(l, c) {
    var f = t2.attributes[c];
    switch (c) {
      case "class":
        l.class = Sr(f);
        break;
      case "style":
        l.style = Or(f);
        break;
      default:
        l.attrs[c] = f;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, o = i === void 0 ? {} : i, s = br(n, Ar);
  return h(t2.tag, R(R(R({}, e), {}, {
    class: r.class,
    style: R(R({}, r.style), o)
  }, r.attrs), s), a);
}
var Cn = false;
try {
  Cn = false;
} catch {
}
function _r() {
  if (!Cn && console && typeof console.error == "function") {
    var t2;
    (t2 = console).error.apply(t2, arguments);
  }
}
function st(t2, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? N({}, t2, e) : {};
}
function Cr(t2) {
  var e, n = (e = {
    "fa-spin": t2.spin,
    "fa-pulse": t2.pulse,
    "fa-fw": t2.fixedWidth,
    "fa-border": t2.border,
    "fa-li": t2.listItem,
    "fa-inverse": t2.inverse,
    "fa-flip": t2.flip === true,
    "fa-flip-horizontal": t2.flip === "horizontal" || t2.flip === "both",
    "fa-flip-vertical": t2.flip === "vertical" || t2.flip === "both"
  }, N(e, "fa-".concat(t2.size), t2.size !== null), N(e, "fa-rotate-".concat(t2.rotation), t2.rotation !== null), N(e, "fa-pull-".concat(t2.pull), t2.pull !== null), N(e, "fa-swap-opacity", t2.swapOpacity), N(e, "fa-bounce", t2.bounce), N(e, "fa-shake", t2.shake), N(e, "fa-beat", t2.beat), N(e, "fa-fade", t2.fade), N(e, "fa-beat-fade", t2.beatFade), N(e, "fa-flash", t2.flash), N(e, "fa-spin-pulse", t2.spinPulse), N(e, "fa-spin-reverse", t2.spinReverse), e);
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function Xe(t2) {
  if (t2 && Tt(t2) === "object" && t2.prefix && t2.iconName && t2.icon)
    return t2;
  if (It.icon)
    return It.icon(t2);
  if (t2 === null)
    return null;
  if (Tt(t2) === "object" && t2.prefix && t2.iconName)
    return t2;
  if (Array.isArray(t2) && t2.length === 2)
    return {
      prefix: t2[0],
      iconName: t2[1]
    };
  if (typeof t2 == "string")
    return {
      prefix: "fas",
      iconName: t2
    };
}
var Pn = defineComponent({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: function(e) {
        return [true, false, "horizontal", "vertical", "both"].indexOf(e) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    flash: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    }
  },
  setup: function(e, n) {
    var a = n.attrs, r = computed(function() {
      return Xe(e.icon);
    }), i = computed(function() {
      return st("classes", Cr(e));
    }), o = computed(function() {
      return st("transform", typeof e.transform == "string" ? It.transform(e.transform) : e.transform);
    }), s = computed(function() {
      return st("mask", Xe(e.mask));
    }), l = computed(function() {
      return dr(r.value, R(R(R(R({}, i.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title
      }));
    });
    watch(l, function(f) {
      if (!f)
        return _r("Could not find one or more icon(s)", r.value, s.value);
    }, {
      immediate: true
    });
    var c = computed(function() {
      return l.value ? ye(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
    };
  }
});
defineComponent({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },
  setup: function(e, n) {
    var a = n.slots, r = On.familyPrefix, i = computed(function() {
      return ["".concat(r, "-layers")].concat(ae(e.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return h("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
defineComponent({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: null,
      validator: function(e) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1;
      }
    }
  },
  setup: function(e, n) {
    var a = n.attrs, r = On.familyPrefix, i = computed(function() {
      return st("classes", [].concat(ae(e.counter ? ["".concat(r, "-layers-counter")] : []), ae(e.position ? ["".concat(r, "-layers-").concat(e.position)] : [])));
    }), o = computed(function() {
      return st("transform", typeof e.transform == "string" ? It.transform(e.transform) : e.transform);
    }), s = computed(function() {
      var c = vr(e.value.toString(), R(R({}, o.value), i.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = computed(function() {
      return ye(s.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
var Pr = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
};
var Er = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [384, 512, [9001], "f053", "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
};
var Nr = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [384, 512, [9002], "f054", "M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
};
var Ir = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
};
var En = (t2, e) => {
  const n = t2.__vccOpts || t2;
  for (const [a, r] of e)
    n[a] = r;
  return n;
};
Sn.add(Pr, Ir);
var Tr = {
  name: "BTableBooleanCell",
  components: {
    fa: Pn
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
};
var Lr = { class: "text-center" };
function Mr(t2, e, n, a, r, i) {
  const o = resolveComponent("fa");
  return openBlock(), createElementBlock("div", Lr, [
    n.value ? (openBlock(), createBlock(o, {
      key: 0,
      icon: "check",
      size: "sm",
      class: "w-2.5 h-2.5 bg-green-500 p-1 rounded text-white"
    })) : (openBlock(), createBlock(o, {
      key: 1,
      icon: "minus",
      size: "sm",
      class: "w-2.5 h-2.5 bg-red-500 p-1 rounded text-white"
    }))
  ]);
}
var Rr = En(Tr, [["render", Mr]]);
Sn.add(Er, Nr);
var zr = {
  name: "BetterTable",
  components: {
    BTableBooleanCell: Rr,
    fa: Pn
  },
  emits: ["rowClick", "update:modelValue"],
  data() {
    return {
      page: 1,
      selectedRows: [],
      search: null
    };
  },
  props: {
    modelValue: {
      type: Array,
      required: false,
      default: []
    },
    pagination: {
      type: Boolean,
      required: false
    },
    paginationLimit: {
      type: Number,
      default: 5,
      required: false
    },
    structure: {
      type: Array
    },
    data: {
      type: Array,
      required: true
    },
    keyColumn: {
      type: String,
      default: "id",
      required: false
    },
    searchable: {
      type: Boolean,
      required: false
    },
    dataRowNum: {
      type: Boolean,
      required: false
    },
    selectable: {
      type: Boolean,
      required: false
    },
    objectsSelect: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    selectableRows() {
      return this.rows.filter((t2) => this.objectsSelect ? Object.keys(t2).length !== 0 : t2[this.keyColumn]);
    },
    columns() {
      var e;
      let t2 = (e = this.structure) != null ? e : [];
      return this.dataRowNum && (t2 = [
        {
          name: "data_row_num",
          width: 1,
          label: "#"
        }
      ].concat(t2)), t2;
    },
    paginatedRows() {
      let t2 = this.rows;
      return this.pagination && this.paginationLimit > 0 && (t2 = t2.slice(
        this.paginationLimit * (this.page - 1),
        this.paginationLimit * this.page
      )), t2;
    },
    rows() {
      var e;
      let t2 = (e = this.data) != null ? e : [];
      return this.dataRowNum && (t2 = t2.map((n, a) => (n.data_row_num = a + 1, n))), this.search && (t2 = t2.filter((n) => {
        const a = this.columns.filter((i) => i.searchable).map((i) => i.name), r = [];
        return a.forEach((i) => {
          n[i] && r.push(n[i]);
        }), r.some((i) => i.toLowerCase().includes(this.search.toLowerCase()));
      })), t2;
    },
    pageCount() {
      return Math.ceil(this.rows.length / this.paginationLimit);
    }
  },
  watch: {
    selectedRows: {
      deep: true,
      handler(t2) {
        this.$emit("update:modelValue", t2);
      }
    },
    search() {
      this.page = 1;
    }
  },
  methods: {
    nextPage() {
      this.page < this.pageCount && this.page++;
    },
    prevPage() {
      this.page > 1 && this.page--;
    },
    toggleSelectAll() {
      this.selectableRows.length === this.selectedRows.length ? this.selectedRows = [] : this.selectedRows = this.objectsSelect ? this.selectableRows : this.selectableRows.map((e) => e[this.keyColumn]);
    },
    rowClick(t2, e) {
      this.$emit("rowClick", t2, e);
    }
  },
  mounted() {
    this.selectedRows = this.modelValue;
  }
};
var jr = { class: "bg-white border rounded" };
var Fr = {
  key: 0,
  class: "pb-4 m-auto mx-2 border-b pt-4"
};
var Dr = { class: "w-full border-collapse table-auto text-sm" };
var Yr = { class: "border-b" };
var Br = {
  key: 0,
  class: "font-medium p-4 text-slate-600 text-left whitespace-nowrap"
};
var $r = ["checked"];
var Ur = ["onClick"];
var Wr = {
  key: 0,
  class: "p-4 w-0"
};
var Hr = ["value", "disabled"];
var Vr = ["width"];
var Gr = { key: 1 };
var Xr = { class: "p-4 flex justify-between" };
var qr = { class: "text-xs" };
var Kr = {
  key: 0,
  class: "flex"
};
var Qr = ["disabled"];
var Zr = createBaseVNode("span", null, " Prev ", -1);
var Jr = { class: "text-xs m-auto mx-3" };
var ti = ["disabled"];
var ei = createBaseVNode("span", null, " Next ", -1);
function ni(t2, e, n, a, r, i) {
  var l, c;
  const o = resolveComponent("BTableBooleanCell"), s = resolveComponent("fa");
  return openBlock(), createElementBlock("div", jr, [
    n.searchable ? (openBlock(), createElementBlock("div", Fr, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": e[0] || (e[0] = (f) => r.search = f),
        type: "text",
        class: "w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-none rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-200 focus:outline-none",
        placeholder: "Search"
      }, null, 512), [
        [vModelText, r.search]
      ])
    ])) : createCommentVNode("", true),
    createBaseVNode("div", null, [
      createBaseVNode("table", Dr, [
        createBaseVNode("thead", null, [
          createBaseVNode("tr", Yr, [
            n.selectable ? (openBlock(), createElementBlock("th", Br, [
              createBaseVNode("input", {
                type: "checkbox",
                class: "rounded text-blue-400 border-blue-300 focus:ring-blue-200 disabled:border-slate-200 disabled:cursor-not-allowed cursor-pointer",
                checked: r.selectedRows.length === i.selectableRows.length,
                onClick: e[1] || (e[1] = (...f) => i.toggleSelectAll && i.toggleSelectAll(...f))
              }, null, 8, $r)
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(i.columns, (f) => (openBlock(), createElementBlock("th", {
              key: f.name,
              class: "font-medium p-4 text-slate-600 text-left whitespace-nowrap"
            }, toDisplayString(f.label), 1))), 128))
          ])
        ]),
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.paginatedRows, (f, m) => (openBlock(), createElementBlock("tr", {
            key: f[n.keyColumn],
            onClick: (b) => i.rowClick(f, m),
            class: "hover:bg-gray-100"
          }, [
            n.selectable ? (openBlock(), createElementBlock("td", Wr, [
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                class: "rounded text-blue-400 border-blue-300 focus:ring-blue-200 disabled:border-slate-200 disabled:cursor-not-allowed cursor-pointer",
                value: n.objectsSelect ? f : f[n.keyColumn],
                disabled: n.objectsSelect ? Object.keys(f).length === 0 : !f[n.keyColumn],
                "onUpdate:modelValue": e[2] || (e[2] = (b) => r.selectedRows = b)
              }, null, 8, Hr), [
                [vModelCheckbox, r.selectedRows]
              ])
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(i.columns, (b) => (openBlock(), createElementBlock("td", {
              key: b.name,
              width: b.width,
              class: "p-4 border-slate-100 text-slate-500"
            }, [
              renderSlot(t2.$slots, b.name, {
                value: f[b.name],
                row: f,
                column: b,
                index: m
              }, () => {
                var g;
                return [
                  b.type === "boolean" ? (openBlock(), createBlock(o, {
                    key: 0,
                    value: f[b.name]
                  }, null, 8, ["value"])) : (openBlock(), createElementBlock("div", Gr, toDisplayString((g = f[b.name]) != null ? g : b.default), 1))
                ];
              })
            ], 8, Vr))), 128))
          ], 8, Ur))), 128))
        ])
      ]),
      createBaseVNode("div", Xr, [
        createBaseVNode("div", qr, toDisplayString((c = (l = n.data) == null ? void 0 : l.length) != null ? c : 0) + " items", 1),
        n.pagination ? (openBlock(), createElementBlock("div", Kr, [
          createBaseVNode("button", {
            onClick: e[3] || (e[3] = (...f) => i.prevPage && i.prevPage(...f)),
            disabled: this.page === 1,
            "data-tooltip-target": "default-button-example-mobile-tooltip",
            class: "disabled:opacity-50 m-1 flex items-center p-1 text-xs font-medium text-gray-700 bg-white rounded-lg toggle-mobile-view enabled:hover:text-blue-700"
          }, [
            createVNode(s, {
              icon: "chevron-left",
              class: "w-3 h-3",
              size: "xs"
            }),
            Zr
          ], 8, Qr),
          createBaseVNode("div", Jr, toDisplayString(this.page) + " / " + toDisplayString(this.pageCount), 1),
          createBaseVNode("button", {
            onClick: e[4] || (e[4] = (...f) => i.nextPage && i.nextPage(...f)),
            disabled: this.page === this.pageCount,
            "data-tooltip-target": "default-button-example-mobile-tooltip",
            class: "disabled:opacity-50 m-1 flex items-center p-1 text-xs font-medium text-gray-700 bg-white rounded-lg toggle-mobile-view enabled:hover:text-blue-700"
          }, [
            ei,
            createVNode(s, {
              icon: "chevron-right",
              class: "w-3 h-3",
              size: "xs"
            })
          ], 8, ti)
        ])) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var ri = En(zr, [["render", ni]]);
export {
  ri as default
};
//# sourceMappingURL=vue-better-table.js.map
