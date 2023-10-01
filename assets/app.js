(() => {
  // ../node_modules/.pnpm/detect-it@4.0.1/node_modules/detect-it/dist/detect-it.esm.js
  var w = typeof window !== "undefined" ? window : { screen: {}, navigator: {} };
  var matchMedia = (w.matchMedia || function() {
    return { matches: false };
  }).bind(w);
  var passiveOptionAccessed = false;
  var options = {
    get passive() {
      return passiveOptionAccessed = true;
    }
  };
  var noop = function() {
  };
  w.addEventListener && w.addEventListener("p", noop, options);
  w.removeEventListener && w.removeEventListener("p", noop, false);
  var supportsPointerEvents = "PointerEvent" in w;
  var onTouchStartInWindow = "ontouchstart" in w;
  var touchEventInWindow = "TouchEvent" in w;
  var supportsTouchEvents = onTouchStartInWindow || touchEventInWindow && matchMedia("(any-pointer: coarse)").matches;
  var hasTouch = (w.navigator.maxTouchPoints || 0) > 0 || supportsTouchEvents;
  var userAgent = w.navigator.userAgent || "";
  var isIPad = matchMedia("(pointer: coarse)").matches && // both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
  // so need to check both userAgents to determine if it is an iOS device
  // and screen size to separate iPad from iPhone
  /iPad|Macintosh/.test(userAgent) && Math.min(w.screen.width || 0, w.screen.height || 0) >= 768;
  var hasCoarsePrimaryPointer = (matchMedia("(pointer: coarse)").matches || // if the pointer is not coarse and not fine then the browser doesn't support
  // interaction media queries (see https://caniuse.com/css-media-interaction)
  // so if it has onTouchStartInWindow assume it has a coarse primary pointer
  !matchMedia("(pointer: fine)").matches && onTouchStartInWindow) && // bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
  // always indicate a touch only device (only has a coarse pointer that can't hover)
  // so assume that the primary pointer is not coarse for firefox windows
  !/Windows.*Firefox/.test(userAgent);
  var hasAnyHoverOrAnyFinePointer = matchMedia("(any-pointer: fine)").matches || matchMedia("(any-hover: hover)").matches || // iPads might have an input device that can hover, so assume it has anyHover
  isIPad || // if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
  // see above note for supportsTouchEvents
  !onTouchStartInWindow;
  var deviceType = hasTouch && (hasAnyHoverOrAnyFinePointer || !hasCoarsePrimaryPointer) ? "hybrid" : hasTouch ? "touchOnly" : "mouseOnly";

  // ../node_modules/.pnpm/spx@0.1.2-beta.1/node_modules/spx/index.js
  var hr = Object.defineProperty;
  var yt = (e, t) => {
    for (var r in t)
      hr(e, r, { get: t[r], enumerable: true });
  };
  var v = (e, t, r) => new Promise((o, n) => {
    var s = (x) => {
      try {
        g(r.next(x));
      } catch (h) {
        n(h);
      }
    }, c = (x) => {
      try {
        g(r.throw(x));
      } catch (h) {
        n(h);
      }
    }, g = (x) => x.done ? o(x.value) : Promise.resolve(x.value).then(s, c);
    g((r = r.apply(e, t)).next());
  });
  var yr = "content" in document.createElement("template");
  var xr = document.createRange && "createContextualFragment" in document.createRange();
  var M = supportsPointerEvents ? "pointer" : "mouse";
  var b = window.history;
  var Q = window.location.origin;
  var A = Object.assign;
  var y = Object.create;
  var X = Array.isArray;
  var Le = Array.from;
  var K = "";
  var xt = () => A(y(null), { selectors: y(null), targets: ["body"], timeout: 3e4, globalThis: true, schema: "spx", render: "replace", manual: false, logs: true, cache: true, limit: 100, preload: null, async: true, annotate: false, eval: { script: null, style: null, link: null, meta: false }, hover: { trigger: "href", threshold: 250 }, intersect: { rootMargin: "0px 0px 0px 0px", threshold: 0 }, proximity: { distance: 75, threshold: 250, throttle: 500 }, progress: { background: "#111", height: "3px", minimum: 0.08, easing: "linear", speed: 200, trickle: true, threshold: 500, trickleSpeed: 200 } });
  var i = xt();
  var p = y(null);
  var S = y(null);
  var f = y(null);
  var O = y(null);
  var We = /* @__PURE__ */ new Set();
  function z(e = y(null)) {
    return e.x = window.scrollX, e.y = window.scrollY, e;
  }
  function vt() {
    return new Promise((e) => requestAnimationFrame(() => e()));
  }
  function Et() {
    return new Promise((e) => setTimeout(() => e(), 0));
  }
  function bt() {
    return Promise.resolve();
  }
  function Tt(e) {
    let t = document.createElement("textarea");
    return t.innerHTML = e, t.value;
  }
  function u(e, t, r) {
    if (e === 1 && i.logs === true)
      console.info("SPX: " + t);
    else if (e === 2 && i.logs === true)
      console.warn("SPX: " + t);
    else {
      r ? console.error("SPX: " + t, r) : console.error("SPX: " + t);
      try {
        throw e === 3 ? new TypeError(t) : new Error(t);
      } catch (o) {
      }
    }
  }
  function d(e, t) {
    return t in e;
  }
  function Pt() {
    return Math.random().toString(36).slice(2);
  }
  function Rt(e = 2) {
    return (t, r) => {
      let o = t.length;
      return (o < 1 || t[o - 1].length === e ? t.push([r]) : t[o - 1].push(r)) && t;
    };
  }
  function Fe(e) {
    return e < 1024 ? e + " B" : e < 1048576 ? (e / 1024).toFixed(1) + " KB" : e < 1073741824 ? (e / 1048576).toFixed(1) + " MB" : (e / 1073741824).toFixed(1) + " GB";
  }
  function C(e, t) {
    if (arguments.length === 1)
      return (o) => C(e, o);
    let r = t.length;
    if (r !== 0)
      for (let o = 0; o < r; o++)
        e(t[o], o, t);
  }
  function je(e) {
    for (let t in e)
      delete e[t];
  }
  function vr(e) {
    return d(e, "hover") && (e.hover === false ? i.hover = false : typeof e.hover == "object" && A(i.hover, e.hover), delete e.hover), d(e, "intersect") && (e.intersect === false ? i.intersect = false : typeof e.intersect == "object" && A(i.intersect, e.intersect), delete e.intersect), d(e, "proximity") && (e.proximity === false ? i.proximity = false : typeof e.proximity == "object" && A(i.proximity, e.proximity), delete e.proximity), d(e, "progress") && (e.progress === false ? i.progress = false : typeof e.progress == "object" && A(i.progress, e.progress), delete e.progress), e;
  }
  function Ve(e = {}) {
    A(i, vr(e)), d(e, "eval") && A(i.eval, e.eval), i.index = null;
    let t = i.schema === "spx" ? "spx" : i.schema.endsWith("-") ? i.schema.slice(0, -1) : i.schema, r = `:not([${t}-disable]):not([href^="#"])`;
    i.selectors.morph = `${t}-morph`, i.selectors.render = `${t}-render`, i.selectors.hrefs = i.annotate ? `a[${t}-link]${r}` : `a${r}`, i.selectors.tracking = `[${t}-track]:not([${t}-track=false])`, i.selectors.scripts = o("script"), i.selectors.scriptsHydrate = `script[${t}-eval=hydrate]:not([${t}-eval=false])`, i.selectors.styles = o("style"), i.selectors.links = o("link"), i.selectors.metas = o("meta"), i.selectors.evals = `[${t}-eval]:not([${t}-eval=false]):not(script)`, i.selectors.attributes = new RegExp("^href|" + t + "-(hydrate|append|prepend|target|progress|threshold|position|proximity|hover)$", "i"), i.selectors.proximity = `a[${t}-proximity]${r}${n("proximity")}`, i.selectors.intersector = `[${t}-intersect]${n("intersect")}`, i.selectors.intersects = `a${r}${n("intersect")}`, i.selectors.hover = i.hover.trigger === "href" ? `a${r}${n("hover")}` : `a[${t}-hover]${r}${n("hover")}`, S.bytes = 0, S.visits = 0, S.limit = i.limit;
    function o(s) {
      let c = `not([${t}-eval=false])`, g = s === "link" ? `${s}[rel=stylesheet]:${c},${s}[rel~=preload]:${c}` : s === "script" ? `${s}[${t}-eval]:${c}:not([${t}-eval=hydrate])` : `${s}:${c}`;
      if (i.eval[s] === false || i.eval[s] === null)
        return g;
      if (i.eval[s] === true)
        return `${s}[${t}-eval]:${c}`;
      if (X(i.eval[s]))
        return i.eval[s].length > 0 ? i.eval[s].map((x) => `${x}:${c}`).join(",") : (u(2, `Missing eval ${s} option, SPX will use defaults`), g);
      u(3, `Invalid eval ${s} option, expected boolean or array`);
    }
    function n(s) {
      let c = `:not([${t}-${s}=false]):not([${t}-link])`;
      if (s.charCodeAt(0) === 104)
        return `${c}:not([${t}-proximity]):not([${t}-intersect])`;
      if (s.charCodeAt(0) === 105)
        return `${c}:not([${t}-hover]):not([${t}-proximity])`;
      if (s.charCodeAt(0) === 112)
        return `${c}:not([${t}-intersect]):not([${t}-hover])`;
    }
  }
  var At = /(?:https?:)?\/\/(?:www\.)?/;
  var It = /\b(?:append|prepend)/;
  var Nt = /^(?:application|text)\/(?:x-)?(?:ecma|java)script|text\/javascript$/;
  var wt = /^\b(?:true|false)$/i;
  var pe = /^[+-]?\d*\.?\d+$/;
  var Lt = /\s+/g;
  var Ot = /\b(?:intersect|hover|proximity)\b/;
  var Xe = /\[?[^,'"[\]()\s]+\]?/g;
  var Mt = /\(?\[(['"]?.*['"]?,?)\]\)?/;
  var Ct = /[xy]:[0-9.]+/;
  var St = /[xy]|\d*\.?\d+/g;
  var L = Q.replace(At, K);
  function br(e) {
    let t = y(null);
    return C((r, o, n) => {
      let s = n.length - 1 >= o ? o - 1 : o;
      o % 2 && (t[n[s]] = pe.test(r) ? Number(r) : r);
    }, e), t;
  }
  function Be(e, t) {
    let r = t || y(null);
    for (let { nodeName: o, nodeValue: n } of e.attributes)
      if (i.selectors.attributes.test(o))
        if (o === "href")
          r.rev = location.pathname + location.search, t || (r.location = _e(n), r.key = r.location.pathname + r.location.search);
        else {
          let s = o.slice(1 + o.lastIndexOf("-")), c = n.replace(Lt, K);
          Mt.test(c) ? r[s] = It.test(s) ? c.match(Xe).reduce(Rt(2), []) : c.match(Xe) : Ct.test(c) ? r[s] = br(c.match(St)) : wt.test(c) ? Ot.test(o) || (r[s] = c === "true") : pe.test(c) ? r[s] = Number(c) : r[s] = c;
        }
    return r;
  }
  function ae(e) {
    let t = y(null);
    if (e.length === 1 && e.charCodeAt(0) === 47)
      return t.pathname = e, t.hash = K, t.search = K, t;
    let o = e.indexOf("#");
    o >= 0 ? (t.hash = e.slice(o), e = e.slice(0, o)) : t.hash = K;
    let n = e.indexOf("?");
    return n >= 0 ? (t.search = e.slice(n), e = e.slice(0, n)) : t.search = K, t.pathname = e, t;
  }
  function Oe(e, t) {
    let r = e.indexOf("/", t);
    if (r > t) {
      let n = e.indexOf("#", r);
      return n < 0 ? e.slice(r) : e.slice(r, n);
    }
    let o = e.indexOf("?", t);
    if (o > t) {
      let n = e.indexOf("#", o);
      return n < 0 ? e.slice(o) : e.slice(o, n);
    }
    return e.length - t === L.length ? "/" : null;
  }
  function Ke(e) {
    let t = e.startsWith("www.") ? e.slice(4) : e, r = t.indexOf("/");
    if (r >= 0) {
      let o = t.slice(r);
      if (t.slice(0, r) === L)
        return o.length > 0 ? ae(o) : ae("/");
    } else {
      let o = t.search(/[?#]/);
      if (o >= 0) {
        if (t.slice(0, o) === L)
          return ae("/" + t.slice(o));
      } else if (t === L)
        return ae("/");
    }
    return null;
  }
  function Tr(e) {
    return e.startsWith("http") ? 1 : e.startsWith("//") ? 2 : e.startsWith("www.") ? 3 : 0;
  }
  function $t(e) {
    if (typeof e != "string" || e.length === 0)
      return false;
    if (e.charCodeAt(0) === 47)
      return e.charCodeAt(1) !== 47 ? true : e.startsWith("www.", 2) ? e.startsWith(L, 6) : e.startsWith(L, 2);
    if (e.charCodeAt(0) === 63)
      return true;
    if (e.startsWith("www."))
      return e.startsWith(L, 4);
    if (e.startsWith("http")) {
      let t = e.indexOf("/", 4) + 2;
      return e.startsWith("www.", t) ? e.startsWith(L, t + 4) : e.startsWith(L, t);
    }
  }
  function Pr(e) {
    return e.charCodeAt(0) === 47 ? e.charCodeAt(1) !== 47 ? ae(e) : Ke(e.slice(2)) : e.charCodeAt(0) === 63 ? ae(location.pathname + e) : e.startsWith("https:") || e.startsWith("http:") ? Ke(e.slice(e.indexOf("/", 4) + 2)) : e.startsWith("www.") ? Ke(e) : null;
  }
  function $(e) {
    if (typeof e == "object")
      return e.pathname + e.search;
    if (e === K)
      return "/";
    let t = Tr(e);
    if (t === 1) {
      let r = e.charCodeAt(4) === 115 ? 8 : 7, o = e.startsWith("www.", r) ? r + 4 : r;
      return e.startsWith(L, o) ? Oe(e, o) : null;
    }
    if (t === 2) {
      let r = e.startsWith("www.", 2) ? 6 : 2;
      return e.startsWith(L, r) ? Oe(e, r) : null;
    }
    return t === 3 ? e.startsWith(L, 4) ? Oe(e, 4) : null : e.startsWith(L, 0) ? Oe(e, 0) : null;
  }
  function Rr() {
    return { hostname: L, origin: Q, pathname: location.pathname, search: location.search, hash: location.hash };
  }
  function _e(e) {
    if (e === K)
      return Rr();
    let t = Pr(e);
    return t.origin = Q, t.hostname = L, t;
  }
  function T(e, t = 6) {
    if (e instanceof Element) {
      let o = Be(e);
      return o.type = t || 6, o;
    }
    let r = y(null);
    return t === 7 ? (r.location = _e(e), r.key = $(r.location), r.rev = r.key, r.type = t) : (r.rev = location.pathname + location.search, r.location = _e(typeof e == "string" ? e : r.rev), r.key = $(r.location), r.type = t), r;
  }
  function le(e) {
    return new DOMParser().parseFromString(e, "text/html");
  }
  function Ye(e) {
    let t = e.indexOf(">", e.indexOf("<title")) + 1, r = e.indexOf("</title", t);
    return Tt(e.slice(t, r).trim());
  }
  var Z = y(null);
  function I(e, ...t) {
    let r = e === "store";
    r && t.splice(-1, 1, le(t[t.length - 1]));
    let o = true;
    return C((n) => {
      let s = n.apply(null, t);
      r ? s instanceof Document ? o = s.documentElement.outerHTML : typeof o != "string" && (o = s !== false) : o = s !== false;
    }, Z[e] || []), o;
  }
  function Ht(e, t, r) {
    d(Z, e) || (Z[e] = []), Z[e].push(r ? t.bind(r) : t);
  }
  function kt(e, t) {
    let r = Z[e], o = [];
    if (r && t) {
      let n = 0, s = r.length;
      for (; n < s; n++)
        r[n] !== t && o.push(r[n]);
    }
    return o.length ? Z[e] = o : delete Z[e], this;
  }
  function _(e) {
    e ? typeof e == "string" ? (delete O[f[e].uuid], delete f[e]) : X(e) && C((t) => {
      delete O[f[t].uuid], delete f[t];
    }, e) : (je(f), je(O));
  }
  function P(e) {
    return e.target = d(e, "target") ? e.target.length === 1 && e.target[0] === "body" ? e.target : [].concat(i.targets, e.target) : i.targets, i.cache && (d(e, "cache") || (e.cache = i.cache), d(e, "uuid") || (e.uuid = Pt())), d(e, "position") || (e.position = y(null), e.position.y = 0, e.position.x = 0), i.hover !== false && e.type === 10 && (d(e, "threshold") || (e.threshold = i.hover.threshold)), i.proximity !== false && e.type === 12 && (d(e, "proximity") || (e.proximity = i.proximity.distance), d(e, "threshold") || (e.threshold = i.proximity.threshold)), i.progress !== false && !d(e, "progress") && (e.progress = i.progress.threshold), d(e, "render") || (e.render = "replace"), d(e, "visits") || (e.visits = 0), f[e.key] = e, f[e.key];
  }
  function fe(e, t) {
    let r = I("store", e, t), o = typeof r == "string" ? r : t;
    return e.type > 5 && (e.type > 9 ? e.type = 1 : d(f, e.rev) && (f[e.rev].position.x = scrollX, f[e.rev].position.y = scrollY)), e.title = Ye(o), !i.cache || r === false ? e : d(e, "uuid") ? (f[e.key] = e, O[e.uuid] = o, I("cached", e), e) : H(e, o);
  }
  function H(e, t) {
    let r = d(f, e.key) ? f[e.key] : P(e);
    return typeof t == "string" && (O[r.uuid] = t, e.title = Ye(t), e.position = z()), A(r, e);
  }
  function Dt() {
    let e = b.state.key;
    if (d(f, e))
      return f[e];
    u(4, `No record exists: ${e}`);
  }
  function de(e) {
    if (!e) {
      if (b.state === null)
        return;
      e = b.state.key;
    }
    if (d(f, e)) {
      let t = y(null);
      return t.page = f[e], t.dom = le(O[t.page.uuid]), t;
    }
    u(4, `No record exists: ${e}`);
  }
  function w2(e) {
    return d(f, e) && d(f[e], "uuid") && d(O, f[e].uuid) && typeof O[f[e].uuid] == "string";
  }
  function he(e, t) {
    if (!(e instanceof Element))
      return false;
    let r = e.closest(t);
    return r && r.tagName === "A" ? r : false;
  }
  function Ue(e) {
    if (e.nodeName !== "A")
      return false;
    let t = e.href;
    return $t(t) ? !w2($(t)) : false;
  }
  function qt(e, t) {
    let r = [];
    return document.body.querySelectorAll(e).forEach((o) => {
      o.nodeName !== "A" ? o.querySelectorAll(t).forEach((n) => {
        Ue(o) && r.push(n);
      }) : Ue(o) && r.push(o);
    }), r;
  }
  var ge = (e) => {
    let t = [];
    return document.body.querySelectorAll(e).forEach((r) => {
      Ue(r) && t.push(r);
    }), t;
  };
  var ee = /* @__PURE__ */ new Map();
  var V = /* @__PURE__ */ new Map();
  var ze = class extends XMLHttpRequest {
    constructor() {
      super(...arguments);
      this.key = null;
    }
  };
  var te = /* @__PURE__ */ new Map();
  function Me(e, t = "text") {
    return new Promise(function(r, o) {
      let n = new ze();
      n.key = e, n.responseType = t, n.open("GET", e), n.setRequestHeader("X-SPX", "true"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.onload = function() {
        r(this.response);
      }, n.onerror = function() {
        o(this.statusText);
      }, n.onabort = function() {
        V.delete(this.key), te.delete(this.key), ee.delete(this.key);
      }, n.onloadend = function(s) {
        te.delete(this.key), S.bytes = S.bytes + s.loaded, S.visits = S.visits + 1;
      }, n.send(), te.set(e, n);
    });
  }
  function Ce(e) {
    return V.has(e) ? (clearTimeout(V.get(e)), V.delete(e)) : true;
  }
  function Se(e, t, r) {
    V.has(e) || w2(e) || V.set(e, setTimeout(t, r));
  }
  function Ge(e) {
    return te.forEach((t, r) => {
      e !== r && (t.abort(), u(2, `Pending request aborted: ${r}`));
    });
  }
  function Wt(e) {
    if (i.preload !== null) {
      if (X(i.preload)) {
        let t = i.preload.filter((r) => {
          let o = T(r, 3);
          return o.key !== r ? R(P(o)) : false;
        });
        return Promise.allSettled(t);
      } else if (typeof i.preload == "object" && d(i.preload, e.key)) {
        let t = i.preload[e.key].map(function(r) {
          return R(P(T(r, 3)));
        });
        return Promise.allSettled(t);
      }
    }
  }
  function $e(e) {
    return v(this, null, function* () {
      if (w2(e))
        return;
      let t = P(T(e, 4));
      requestIdleCallback(function(r) {
        R(t).then((o) => {
          o ? u(1, `Reverse fetch completed: ${o.key}`) : u(2, `Reverse fetch failed: ${e}`);
        });
      }, { timeout: 3e3 });
    });
  }
  function ye(e) {
    return v(this, null, function* () {
      if (!ee.has(e.key))
        return e;
      yield Et();
      let t = yield ee.get(e.key);
      return ee.delete(e.key), V.delete(e.key), fe(e, t);
    });
  }
  function R(e) {
    return v(this, null, function* () {
      return te.has(e.key) && e.type !== 7 ? (e.type === 4 && te.has(e.rev) ? (te.get(e.rev).abort(), u(2, `Request aborted: ${e.rev}`)) : u(2, `Request in transit: ${e.key}`), false) : I("fetch", e) ? (ee.set(e.key, Me(e.key)), ye(e)) : (u(2, `Request cancelled via dispatched event: ${e.key}`), false);
    });
  }
  function Ft(e) {
    let t = he(e.target, i.selectors.hover);
    if (!t)
      return;
    let r = T(t, 10);
    if (w2(r.key) || V.has(r.key))
      return;
    t.addEventListener(`${M}leave`, jt, { once: true });
    let o = P(r), n = o.threshold || i.hover.threshold;
    Se(r.key, function() {
      I("prefetch", t, r) && R(o).then(function(s) {
        V.delete(r.key), Vt(t);
      });
    }, n);
  }
  function jt(e) {
    let t = he(e.target, i.selectors.hover);
    t && Ce($(t.href));
  }
  function Ar(e) {
    e.addEventListener(`${M}enter`, Ft);
  }
  function Vt(e) {
    e.removeEventListener(`${M}enter`, Ft), e.removeEventListener(`${M}leave`, jt);
  }
  function xe() {
    !i.hover || p.hover || (C(Ar, ge(i.selectors.hover)), p.hover = true);
  }
  function re() {
    p.hover && (C(Vt, ge(i.selectors.hover)), p.hover = false);
  }
  function Ir({ clientX: e, clientY: t }, r) {
    return e <= r.right && e >= r.left && t <= r.bottom && t >= r.top;
  }
  function Nr(e) {
    let t = e.getBoundingClientRect(), r = e.getAttribute(i.selectors.proximity), o = pe.test(r) ? Number(r) : i.proximity.distance;
    return { target: e, top: t.top - o, bottom: t.bottom + o, left: t.left - o, right: t.right + o };
  }
  function wr(e) {
    let t = false;
    return function(r) {
      if (t)
        return;
      t = true;
      let o = e.findIndex((n) => Ir(r, n));
      if (o === -1)
        setTimeout(() => {
          t = false;
        }, i.proximity.throttle);
      else {
        let { target: n } = e[o], s = P(T(n, 12)), c = s.threshold || i.proximity.threshold;
        Se(s.key, () => v(this, null, function* () {
          if (!I("prefetch", n, s))
            return Y();
          (yield R(s)) && (e.splice(o, 1), t = false, e.length === 0 && (Y(), u(1, "Proximity observer disconnected")));
        }), c);
      }
    };
  }
  var Qe;
  function ve() {
    if (!i.proximity || p.proximity)
      return;
    let e = ge(i.selectors.proximity).map(Nr);
    e.length > 0 && (Qe = wr(e), addEventListener(`${M}move`, Qe, { passive: true }), p.proximity = true);
  }
  function Y() {
    p.proximity && (removeEventListener(`${M}move`, Qe), p.proximity = false);
  }
  var oe;
  function Lr(e) {
    return v(this, null, function* () {
      if (e.isIntersecting) {
        let t = T(e.target, 11);
        if (!I("prefetch", e.target, t))
          return oe.unobserve(e.target);
        (yield R(P(t))) ? oe.unobserve(e.target) : (u(2, `Prefetch will retry at next intersect for: ${t.key}`), oe.observe(e.target));
      }
    });
  }
  function Ee() {
    if (!i.intersect || p.intersect)
      return;
    oe || (oe = new IntersectionObserver(C(Lr), i.intersect));
    let e = C((r) => oe.observe(r)), t = qt(i.selectors.intersector, i.selectors.intersects);
    e(t), p.intersect = true;
  }
  function ne() {
    p.intersect && (oe.disconnect(), p.intersect = false);
  }
  var ie = null;
  var Xt;
  var be = null;
  var tt = [];
  function rt(e) {
    let { speed: t, easing: r, minimum: o } = i.progress, n = typeof ie == "number";
    e = _t(e, o, 1), ie = e === 1 ? null : e;
    let s = Or(!n);
    s.offsetWidth, Cr((c) => {
      if (s.style.transform = `translate3d(${Bt(e)}%,0,0)`, s.style.transition = `all ${t}ms ${r}`, e !== 1)
        return setTimeout(c, t);
      s.style.transition = "none", s.style.opacity = "1", s.offsetWidth, setTimeout(() => {
        s.style.transition = `all ${t}ms ${r}`, s.style.opacity = "0", setTimeout(() => [Mr(), c()], t);
      }, t);
    });
  }
  function Kt(e) {
    let t = ie;
    if (!t)
      return He();
    if (t < 1)
      return typeof e != "number" && (t >= 0 && t < 0.2 ? e = 0.1 : t >= 0.2 && t < 0.5 ? e = 0.04 : t >= 0.5 && t < 0.8 ? e = 0.02 : t >= 0.8 && t < 0.99 ? e = 5e-3 : e = 0), t = _t(t + e, 0, 0.994), rt(t);
  }
  function Or(e) {
    if (be)
      return be;
    document.documentElement.classList.add("spx-load");
    let t = e ? "-100" : Bt(ie || 0), r = document.createElement("div");
    return r.id = "spx-progress", r.style.pointerEvents = "none", r.style.background = i.progress.background, r.style.height = i.progress.height, r.style.position = "fixed", r.style.zIndex = "9999999", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.transition = "all 0 linear", r.style.transform = `translate3d(${t}%,0,0)`, document.body.appendChild(r), be = r, r;
  }
  function Mr() {
    document.documentElement.classList.remove("spx-load"), document.getElementById("spx-progress") && document.body.removeChild(be), be = null;
  }
  function _t(e, t, r) {
    return e < t ? t : e > r ? r : e;
  }
  function Bt(e) {
    return (-1 + e) * 100;
  }
  function Cr(e) {
    let t = () => {
      let r = tt.shift();
      r && r(t);
    };
    tt.push(e), tt.length === 1 && t();
  }
  function He(e) {
    i.progress && (Xt = setTimeout(function() {
      ie || rt(0);
      function t() {
        setTimeout(() => {
          ie && (Kt(), t());
        }, i.progress.trickleSpeed);
      }
      i.progress.trickle && t();
    }, e || 0));
  }
  function Yt(e) {
    if (clearTimeout(Xt), !(!e && !ie))
      return Kt(0.3 + 0.5 * Math.random()), rt(1);
  }
  function Sr(e) {
    return new Promise((t, r) => {
      let o = document.createElement("script");
      o.addEventListener("error", r, { once: true }), o.async = false, o.text = e.target.text;
      for (let { nodeName: n, nodeValue: s } of e.target.attributes)
        o.setAttribute(n, s);
      document.contains(e.target) ? e.target.replaceWith(o) : (document.head.append(o), e.external ? o.addEventListener("load", () => o.remove(), { once: true }) : o.remove()), e.external && o.addEventListener("load", () => t(), { once: true }), t();
    });
  }
  function $r(e) {
    if (!e.hasAttribute("src") && !e.text)
      return;
    let t = e.type ? e.type.trim().toLowerCase() : "text/javascript", r = Nt.test(t) ? 1 : t === "module" ? 2 : NaN, o = y(null);
    return o.blocking = true, o.evaluate = false, o.external = false, isNaN(r) || e.noModule && r === 1 || (e.src && (o.external = true), (r !== 1 || o.external && (e.hasAttribute("async") || e.defer)) && (o.blocking = false), o.evaluate = true, o.target = e), o;
  }
  function zt(e) {
    return v(this, null, function* () {
      try {
        let t = Sr(e);
        e.blocking && (yield t);
      } catch (t) {
        console.error(t);
      }
    });
  }
  function Gt(e) {
    return v(this, null, function* () {
      let r = Le(e, $r).filter((o) => o.evaluate).reduce((o, n) => v(this, null, function* () {
        return n.external ? Promise.all([o, zt(n)]) : (yield o, yield zt(n));
      }), Promise.resolve());
      yield Promise.race([r]);
    });
  }
  function Jt(e) {
    return e ? e.getAttribute && e.getAttribute("id") || e.id : void 0;
  }
  function Te(e, t) {
    let r = e.nodeName, o = t.nodeName;
    if (r === o)
      return true;
    let n = r.charCodeAt(0), s = o.charCodeAt(0);
    return n <= 90 && s >= 97 || n <= 90 && s >= 97 ? r === o.toUpperCase() : false;
  }
  function Qt(e, t) {
    return !t || t === "http://www.w3.org/1999/xhtml" ? document.createElement(e) : document.createElementNS(t, e);
  }
  function Zt(e, t) {
    let r = e.firstChild;
    for (; r; ) {
      let o = r.nextSibling;
      t.appendChild(r), r = o;
    }
    return t;
  }
  function er(e, t) {
    if (t.nodeType === 11 || e.nodeType === 11)
      return;
    let r = t.attributes, o, n, s, c, g;
    for (let h = r.length - 1; h >= 0; h--)
      o = r[h], n = o.name, c = o.value, s = o.namespaceURI, s ? (n = o.localName || n, g = e.getAttributeNS(s, n), g !== c && (o.prefix === "xmlns" && (n = o.name), e.setAttributeNS(s, n, c))) : (g = e.getAttribute(n), g !== c && e.setAttribute(n, c));
    let x = e.attributes;
    for (let h = x.length - 1; h >= 0; h--)
      o = x[h], n = o.name, c = o.value, s = o.namespaceURI, s ? (n = o.localName || n, t.hasAttributeNS(s, n) || e.removeAttributeNS(s, n)) : t.hasAttribute(n) || e.removeAttribute(n);
  }
  var it = {};
  yt(it, { INPUT: () => Dr, OPTION: () => kr, SELECT: () => qr, TEXTAREA: () => nt });
  function ot(e, t, r) {
    e[r] !== t[r] && (e[r] = t[r], e[r] ? e.setAttribute(r, "") : e.removeAttribute(r));
  }
  function kr(e, t) {
    let r = e.parentNode;
    if (r) {
      let o = r.nodeName.toUpperCase();
      o === "OPTGROUP" && (r = r.parentNode, o = r && r.nodeName.toUpperCase()), o === "SELECT" && !r.hasAttribute("multiple") && (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), r.selectedIndex = -1);
    }
    ot(e, t, "selected");
  }
  function Dr(e, t) {
    ot(e, t, "checked"), ot(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value");
  }
  function nt(e, t) {
    let r = t.value;
    e.value !== r && (e.value = r);
    let o = e.firstChild;
    if (o) {
      let n = o.nodeValue;
      if (n === r || !r && n === e.placeholder)
        return;
      o.nodeValue = r;
    }
  }
  function qr(e, t) {
    if (!t.hasAttribute("multiple")) {
      let r = -1, o = 0, n = e.firstChild, s, c;
      for (; n; )
        if (c = n.nodeName && n.nodeName.toUpperCase(), c === "OPTGROUP")
          s = n, n = s.firstChild;
        else {
          if (c === "OPTION") {
            if (n.hasAttribute("selected")) {
              r = o;
              break;
            }
            o++;
          }
          n = n.nextSibling, !n && s && (n = s.nextSibling, s = null);
        }
      e.selectedIndex = r;
    }
  }
  function ke() {
  }
  function se(e, t, r) {
    r || (r = {}), t.nodeType === 11 && (t = t.firstElementChild);
    let o = r.getNodeKey || Jt, n = r.onNodeAdded || ke, s = r.onBeforeNodeDiscarded || ke, c = r.onNodeDiscarded || ke, g = r.onBeforeElChildrenUpdated || ke, x = /* @__PURE__ */ new Map(), h = [];
    function pt(m, l) {
      if (m.nodeType === 1) {
        let a = m.firstChild;
        for (; a; ) {
          let E;
          l && (E = o(a)) ? h.push(E) : a.firstChild && pt(a, l), a = a.nextSibling;
        }
      }
    }
    function Re(m, l, a) {
      s(m) !== false && (l && l.removeChild(m), pt(m, a));
    }
    function dt(m) {
      if (m.nodeType === 1 || m.nodeType === 11) {
        let l = m.firstChild;
        for (; l; ) {
          let a = o(l);
          a && x.set(a, l), dt(l), l = l.nextSibling;
        }
      }
    }
    dt(e);
    function qe(m) {
      n(m);
      let l = m.firstChild;
      for (; l; ) {
        let a = l.nextSibling, E = o(l);
        if (E) {
          let D = x.get(E);
          D && Te(l, D) ? (l.parentNode.replaceChild(D, l), Ae(D, l)) : qe(l);
        } else
          qe(l);
        l = a;
      }
    }
    function pr(m, l, a) {
      for (; l; ) {
        let E = l.nextSibling;
        (a = o(l)) ? h.push(a) : Re(l, m, true), l = E;
      }
    }
    function Ae(m, l) {
      let a = o(l);
      a && x.delete(a), m.isEqualNode(l) !== true && m.getAttribute(i.selectors.morph) !== "false" && (m.getAttribute(i.selectors.morph) !== "children" && er(m, l), g(m, l) !== false && (m.nodeName !== "TEXTAREA" ? dr(m, l) : nt(m, l)));
    }
    function dr(m, l) {
      let a = l.firstChild, E = m.firstChild, D, q, ce, Ne, U;
      e:
        for (; a; ) {
          for (Ne = a.nextSibling, D = o(a); E; ) {
            if (ce = E.nextSibling, a.isSameNode && a.isSameNode(E)) {
              a = Ne, E = ce;
              continue e;
            }
            q = o(E);
            let we = E.nodeType, W;
            if (we === a.nodeType && (we === 1 ? (D ? D !== q && ((U = x.get(D)) ? ce === U ? W = false : (m.insertBefore(U, E), q ? h.push(q) : Re(E, m, true), E = U, q = o(E)) : W = false) : q && (W = false), W = W !== false && Te(E, a), W === false && x.has(q) && x.get(q).getAttribute(i.selectors.morph) === "children" && (W = true), W && Ae(E, a)) : (we === 3 || we === 8) && (W = true, E.nodeValue !== a.nodeValue && (E.nodeValue = a.nodeValue))), W) {
              a = Ne, E = ce;
              continue e;
            }
            q ? h.push(q) : Re(E, m, true), E = ce;
          }
          D && (U = x.get(D)) && Te(U, a) ? (m.appendChild(U), Ae(U, a)) : (a.actualize && (a = a.actualize(m.ownerDocument || document)), m.appendChild(a), qe(a)), a = Ne, E = ce;
        }
      pr(m, E, q);
      let gt = it[m.nodeName];
      gt && gt(m, l);
    }
    let N = e, Ie = N.nodeType, ht = t.nodeType;
    if (Ie === 1)
      ht === 1 ? Te(e, t) || (c(e), N = Zt(e, Qt(t.nodeName, t.namespaceURI))) : N = t;
    else if (Ie === 3 || Ie === 8) {
      if (ht === Ie)
        return N.nodeValue !== t.nodeValue && (N.nodeValue = t.nodeValue), N;
      N = t;
    }
    if (N === t)
      c(e);
    else {
      if (t.isSameNode && t.isSameNode(N))
        return;
      if (Ae(N, t), h)
        for (let m = 0, l = h.length; m < l; m++) {
          let a = x.get(h[m]);
          a && Re(a, a.parentNode, false);
        }
    }
    return N !== e && e.parentNode && (N.actualize && (N = N.actualize(e.ownerDocument || document)), e.parentNode.replaceChild(N, e)), N;
  }
  function Wr(e, t) {
    return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING || -1;
  }
  function tr(e, t) {
    return v(this, null, function* () {
      let r = t === 7 ? i.selectors.scriptsHydrate : i.selectors.scripts, o = Le(e.querySelectorAll(r));
      yield Gt(o.sort(Wr));
    });
  }
  function Fr(e) {
    document.head.querySelectorAll(i.selectors.evals).forEach((t) => {
      e.head.contains(t) || t.remove();
    }), document.head.append(...e.querySelectorAll(i.selectors.evals));
  }
  function jr(e) {
    let t = e.querySelectorAll(i.selectors.tracking);
    if (t !== null)
      for (let r of t)
        r.hasAttribute("id") ? We.has(r.id) || (document.body.appendChild(r), We.add(r.id)) : u(2, `Tracked node <${r.tagName.toLowerCase()}> must contain an id attribute`);
  }
  function Vr(e, t) {
    let r = e.target, o = e.render;
    if (r.length === 1 && r[0] === "body")
      o === "morph" ? se(document.body, t.body) : o === "replace" ? document.body.replaceChildren(t.body) : document.body.innerHTML = t.body.innerHTML;
    else {
      let n = r.join(","), s = t.body.querySelectorAll(n);
      document.body.querySelectorAll(n).forEach((c, g) => {
        if (c.isEqualNode(s[g]) || !I("render", c, s[g]))
          return;
        let x = o;
        if (c.hasAttribute(i.selectors.render)) {
          let h = c.getAttribute(i.selectors.render);
          h !== x && (x = h);
        }
        if (x === "morph" ? se(c, s[g]) : e.render === "replace" ? c.replaceWith(s[g]) : c.innerHTML = s[g].innerHTML, e.append || e.prepend) {
          let h = document.createElement("div");
          return t.childNodes.forEach(h.appendChild), e.append ? c.appendChild(h) : c.insertBefore(h, c.firstChild);
        }
      }), jr(t.body);
    }
  }
  function Xr(e, t) {
    let r = e.hydrate;
    if (r.length === 1 && r[0] === "body") {
      se(document.body, t.body);
      return;
    }
    let o = r.join(","), n = document.body.querySelectorAll(o), s = e.preserve && e.preserve.length > 0 ? e.preserve.join(",") : null, c = [];
    if (s && document.body.querySelectorAll(s).forEach((g) => {
      g.setAttribute("spx-morph", "false"), c.push(g);
    }), n.length > 0) {
      let g = t.body.querySelectorAll(o);
      n.forEach((x, h) => {
        if (g[h] instanceof HTMLElement) {
          if (!I("hydrate", x, g[h]))
            return;
          se(x, g[h]);
        }
      });
    }
    if (s)
      for (let g of c)
        g.removeAttribute("spx-morph");
    tr(t, 7), e.hydrate = void 0, e.preserve = void 0, e.type = 6, H(e);
  }
  function k(e) {
    return v(this, null, function* () {
      yield vt(), re(), ne(), Y(), document.title = e.title;
      let t = le(O[e.uuid]);
      return e.type === 7 ? Xr(e, t) : (Fr(t), Vr(e, t), scrollTo(e.position.x, e.position.y), tr(t, e.type)), Yt(), xe(), Ee(), ve(), I("load", e), e;
    });
  }
  var me = {};
  yt(me, { api: () => b, connect: () => lt, disconnect: () => ft, doReverse: () => at, get: () => Kr, push: () => Pe, replace: () => G });
  function ct(e) {
    let t = y(null);
    return t.key = e.key, t.rev = e.rev, t.title = e.title, t.position = e.position, t;
  }
  function Kr() {
    return b.state;
  }
  function at() {
    return b.state !== null && d(b.state, "rev") && b.state.key !== b.state.rev;
  }
  function G(e) {
    return b.replaceState(ct(e), e.title, e.key), u(1, `ReplaceState triggered for: ${e.key}`), e;
  }
  function Pe(e) {
    return b.pushState(ct(e), e.title, e.key), e;
  }
  function rr(e) {
    return v(this, null, function* () {
      if (u(1, "PopState visit incurred"), document.readyState !== "complete" && (yield bt()), e.state !== null)
        if (w2(e.state.key))
          $e(e.state.rev), yield k(f[e.state.key]);
        else {
          e.state.type = 5;
          let t = yield R(e.state);
          if (!t)
            return location.assign(e.state.key);
          let r = $(location);
          if (t.key === r)
            yield k(t);
          else if (w2(r))
            yield k(f[r]);
          else {
            let o = P(T(r, 5));
            yield R(o), b.pushState(o, document.title, r);
          }
        }
    });
  }
  function lt(e) {
    p.history || (b.scrollRestoration && (b.scrollRestoration = "manual"), b.state === null && e && b.replaceState(ct(e), e.title, e.key), addEventListener("popstate", rr, false), p.history = true);
  }
  function ft() {
    p.history && (b.scrollRestoration && (b.scrollRestoration = "auto"), removeEventListener("popstate", rr, false), p.history = false);
  }
  function _r(e) {
    return !(e.target && e.target.isContentEditable || e.defaultPrevented || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
  }
  function J(e) {
    if (!_r(e))
      return;
    let t = he(e.target, i.selectors.hrefs);
    if (!t)
      return;
    let r = $(t.href);
    if (r !== null && I("visit", e))
      if (re(), Y(), ne(), w2(r)) {
        let o = Be(t, f[r]), n = H(o);
        t.addEventListener("click", function(c) {
          c.preventDefault(), f[n.rev].position = z(), Pe(n), k(n);
        }, { once: true });
      } else if (ee.has(r)) {
        let o = f[r];
        Ge(r), u(1, `Request in transit: ${r}`), t.addEventListener("click", function(s) {
          s.preventDefault(), f[o.rev].position = z(), ut(o);
        }, { once: true });
      } else {
        Ge(), Ce(r);
        let o = T(t, 6), n = P(o);
        R(n), t.addEventListener("click", function(c) {
          c.preventDefault(), f[n.rev].position = z(), ut(n);
        }, { once: true });
      }
  }
  function ut(e) {
    return v(this, null, function* () {
      He(e.progress);
      let t = yield ye(e);
      if (t)
        Pe(t), k(t);
      else
        return location.assign(e.key);
    });
  }
  function mt(e, t) {
    return v(this, null, function* () {
      if (t) {
        typeof t.cache == "string" && (t.cache === "clear" ? _() : _(t.key)), He(t.progress);
        let r = yield R(t);
        r ? (Pe(r), k(r)) : location.assign(t.key);
      } else
        return ut(f[e]);
    });
  }
  function or() {
    p.hrefs || (deviceType === "mouseOnly" ? addEventListener(`${M}down`, J, false) : (deviceType === "touchOnly" || addEventListener(`${M}down`, J, false), addEventListener("touchstart", J, false)), p.hrefs = true);
  }
  function nr() {
    p.hrefs && (deviceType === "mouseOnly" ? removeEventListener(`${M}down`, J, false) : (deviceType === "touchOnly" || removeEventListener(`${M}down`, J, false), removeEventListener("touchstart", J, false)), p.hrefs = false);
  }
  var sr = y(null);
  function Br(e) {
    scrollY in sr && G(f[sr[scrollY]]);
  }
  function cr() {
    p.scroll || (addEventListener("scroll", Br, { passive: true }), p.scroll = true);
  }
  function ar() {
    let e = P(T(0));
    lt(e), i.index = e.key;
    function t() {
      or(), i.manual === false && (xe(), Ee(), ve(), cr());
      let r = fe(e, document.documentElement.outerHTML);
      return at() && (r.rev = b.state.rev), r.position = z(), G(r), r.rev !== r.key && setTimeout(() => $e(r.rev), 0), setTimeout(() => Wt(r), 0), r;
    }
    return new Promise((r) => {
      if (document.readyState === "complete" || document.readyState === "interactive")
        return r(t());
      addEventListener("DOMContentLoaded", () => r(t()), { once: true });
    });
  }
  function lr() {
    re(), xe(), ne(), Ee(), Y(), ve();
  }
  function fr() {
    ft(), nr(), re(), ne(), Y(), _(), i.globalThis && delete window.spx, u(1, "Disconnected \u{1F614}");
  }
  var ur = !!(window.history.pushState && window.requestAnimationFrame && window.addEventListener && window.DOMParser);
  var mr = A(y(null), { supported: ur, on: Ht, off: kt, observe: lr, history: me, connect: Ur, capture: eo, render: Zr, session: zr, state: Gr, reload: Jr, fetch: Qr, clear: _, hydrate: ro, prefetch: to, visit: oo, disconnect: fr, get config() {
    return i;
  } });
  function Ur(e = {}) {
    if (typeof document == "undefined")
      return u(4, "SPX only runs in the browser");
    if (!ur)
      return u(4, "Browser does not support SPX");
    if (!window.location.protocol.startsWith("http"))
      return u(4, "Invalid protocol, SPX expects https or http protocol");
    Ve(e);
    let t = ar();
    return function(r) {
      return v(this, null, function* () {
        let o = yield t;
        if (i.globalThis && Object.defineProperty(window, "spx", { get() {
          return mr;
        } }), r.constructor.name === "AsyncFunction")
          try {
            yield r(o);
          } catch (n) {
            u(2, "Connection Error", n);
          }
        else
          r(o);
        u(1, "Connection Established \u26A1");
      });
    };
  }
  function zr(e, t) {
    if (e)
      if (t)
        e === "config" && Ve(t), e === "observers" && A(p, t);
      else {
        if (e === "config")
          return i;
        if (e === "observers")
          return p;
        if (e === "pages")
          return f;
        if (e === "snapshots")
          return O;
        if (e === "memory")
          return Fe(S.bytes);
      }
    let r = y(null);
    return r.config = i, r.snapshots = O, r.pages = f, r.observers = p, r.memory = S, r.memory.size = Fe(r.memory.bytes), r;
  }
  function Gr(e, t) {
    if (e === void 0)
      return de();
    if (typeof e == "string") {
      let r = $(e);
      w2(r) || u(4, `No store exists at: ${r}`);
      let o = de(r);
      return t !== void 0 ? H(A(o.page, t)) : o;
    }
    if (typeof e == "object")
      return H(e);
  }
  function Jr() {
    return v(this, null, function* () {
      let e = f[b.state.key];
      e.type = 9;
      let t = yield R(e);
      return t ? (u(1, "Triggered reload, page was re-cached"), k(t)) : (u(2, "Reload failed, triggering refresh (cache will be purged)"), location.assign(e.key));
    });
  }
  function Qr(e) {
    return v(this, null, function* () {
      let t = T(e, 2);
      t.location.origin !== Q && u(4, "Cross origin fetches are not allowed");
      let r = yield Me(t.key);
      if (r)
        return r;
    });
  }
  function Zr(e, t, r) {
    return v(this, null, function* () {
      let o = Dt(), n = T(e);
      n.location.origin !== Q && u(4, "Cross origin fetches are not allowed");
      let s = yield Me(n.key, "document");
      if (s || u(4, `Fetch failed for: ${n.key}`, s), yield r.call(o, s), t === "replace") {
        o.title = s.title;
        let c = H(A(o, n), s.documentElement.outerHTML);
        return G(c), c;
      } else
        return k(fe(n, s.documentElement.outerHTML));
    });
  }
  function eo(e) {
    let { page: t, dom: r } = de();
    if (e = X(e) ? e : t.target, e.length === 1 && e[0] === "body") {
      r.body.replaceChildren(document.body), H(t, r.documentElement.innerHTML);
      return;
    }
    let o = e.join(","), n = document.body.querySelectorAll(o);
    r.body.querySelectorAll(o).forEach((s, c) => {
      se(s, n[c]);
    }), H(t, r.documentElement.innerHTML);
  }
  function to(e) {
    return v(this, null, function* () {
      let t = T(e, 1);
      if (w2(t.key)) {
        u(2, `Cache already exists for ${t.key}, prefetch skipped`);
        return;
      }
      let r = yield R(P(t));
      if (r)
        return r;
      u(4, `Prefetch failed for ${t.key}`);
    });
  }
  function ro(e, t) {
    return v(this, null, function* () {
      let r = T(e, 7);
      if (R(r), X(t)) {
        r.hydrate = [], r.preserve = [];
        for (let n of t)
          n.charCodeAt(0) === 33 ? r.preserve.push(n.slice(1)) : r.hydrate.push(n);
      } else
        r.hydrate = i.targets;
      let o = yield ye(r);
      if (o) {
        let { key: n } = b.state;
        if (G(o), k(o), r.key !== n) {
          i.index === n && (i.index = r.key);
          for (let s in f)
            f[s].rev === n && (f[s].rev = r.key);
          _(n);
        }
      }
      return de(o.key).dom;
    });
  }
  function oo(e, t) {
    return v(this, null, function* () {
      let r = T(e), o = typeof t == "object" ? A(r, t) : r;
      return w2(r.key) ? mt(r.key, H(o)) : mt(r.key, P(o));
    });
  }
  var Ri = mr;

  // app.js
  Ri.connect(
    {
      annotate: false,
      targets: ["main", "product-modal"],
      render: "morph",
      hover: {
        trigger: "href",
        threshold: 100
      },
      intersect: {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0
      },
      proximity: {
        distance: 150,
        threshold: 100,
        throttle: 500
      }
    }
  )(function(session) {
    console.log(session);
  });
  var main = document.querySelector("main");
  Ri.on("load", function(params) {
    const fadeInAnimation = main.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: 500,
      // Animation duration in milliseconds
      easing: "ease",
      // Animation easing function
      fill: "forwards"
      // Keep the final state of the animation
    });
  });
  Ri.on("visit", function(event) {
    console.log("fetch", event);
    const main2 = document.querySelector("main");
    const fadeOutAnimation = main2.animate([
      { opacity: 1 },
      { opacity: 0 }
    ], {
      duration: 500,
      // Animation duration in milliseconds
      easing: "ease",
      // Animation easing function
      fill: "forwards"
      // Keep the final state of the animation
    });
  });
})();
