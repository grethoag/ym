(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [730],
  {
    1933: (t, e, i) => {
      var r = i(2673).Symbol;
      t.exports = r;
    },
    3600: (t, e, i) => {
      var r = i(1933),
        n = i(8273),
        s = i(6798),
        o = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(t)
          ? n(t)
          : s(t);
      };
    },
    1004: (t, e, i) => {
      var r = i(7550),
        n = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(n, "") : t;
      };
    },
    4952: (t, e, i) => {
      var r = "object" == typeof i.g && i.g && i.g.Object === Object && i.g;
      t.exports = r;
    },
    8273: (t, e, i) => {
      var r = i(1933),
        n = Object.prototype,
        s = n.hasOwnProperty,
        o = n.toString,
        a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = s.call(t, a),
          i = t[a];
        try {
          t[a] = void 0;
          var r = !0;
        } catch (t) {}
        var n = o.call(t);
        return r && (e ? (t[a] = i) : delete t[a]), n;
      };
    },
    6798: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    2673: (t, e, i) => {
      var r = i(4952),
        n = "object" == typeof self && self && self.Object === Object && self,
        s = r || n || Function("return this")();
      t.exports = s;
    },
    7550: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var i = t.length; i-- && e.test(t.charAt(i)); );
        return i;
      };
    },
    719: (t, e, i) => {
      var r = i(5255),
        n = i(1332),
        s = i(2816),
        o = Math.max,
        a = Math.min;
      t.exports = function (t, e, i) {
        var l,
          u,
          h,
          c,
          d,
          p,
          f = 0,
          m = !1,
          g = !1,
          y = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function v(e) {
          var i = l,
            r = u;
          return (l = u = void 0), (f = e), (c = t.apply(r, i));
        }
        function b(t) {
          var i = t - p,
            r = t - f;
          return void 0 === p || i >= e || i < 0 || (g && r >= h);
        }
        function _() {
          var t,
            i,
            r,
            s = n();
          if (b(s)) return w(s);
          d = setTimeout(
            _,
            ((t = s - p), (i = s - f), (r = e - t), g ? a(r, h - i) : r)
          );
        }
        function w(t) {
          return ((d = void 0), y && l) ? v(t) : ((l = u = void 0), c);
        }
        function x() {
          var t,
            i = n(),
            r = b(i);
          if (((l = arguments), (u = this), (p = i), r)) {
            if (void 0 === d)
              return (f = t = p), (d = setTimeout(_, e)), m ? v(t) : c;
            if (g) return clearTimeout(d), (d = setTimeout(_, e)), v(p);
          }
          return void 0 === d && (d = setTimeout(_, e)), c;
        }
        return (
          (e = s(e) || 0),
          r(i) &&
            ((m = !!i.leading),
            (h = (g = "maxWait" in i) ? o(s(i.maxWait) || 0, e) : h),
            (y = "trailing" in i ? !!i.trailing : y)),
          (x.cancel = function () {
            void 0 !== d && clearTimeout(d), (f = 0), (l = p = u = d = void 0);
          }),
          (x.flush = function () {
            return void 0 === d ? c : w(n());
          }),
          x
        );
      };
    },
    5255: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    4480: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    3480: (t, e, i) => {
      var r = i(3600),
        n = i(4480);
      t.exports = function (t) {
        return "symbol" == typeof t || (n(t) && "[object Symbol]" == r(t));
      };
    },
    1332: (t, e, i) => {
      var r = i(2673);
      t.exports = function () {
        return r.Date.now();
      };
    },
    8640: (t, e, i) => {
      var r = i(719),
        n = i(5255);
      t.exports = function (t, e, i) {
        var s = !0,
          o = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        return (
          n(i) &&
            ((s = "leading" in i ? !!i.leading : s),
            (o = "trailing" in i ? !!i.trailing : o)),
          r(t, e, { leading: s, maxWait: e, trailing: o })
        );
      };
    },
    2816: (t, e, i) => {
      var r = i(1004),
        n = i(5255),
        s = i(3480),
        o = 0 / 0,
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        h = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (s(t)) return o;
        if (n(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = n(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var i = l.test(t);
        return i || u.test(t) ? h(t.slice(2), i ? 2 : 8) : a.test(t) ? o : +t;
      };
    },
    5565: (t, e, i) => {
      "use strict";
      i.d(e, { default: () => n.a });
      var r = i(4146),
        n = i.n(r);
    },
    7396: (t, e, i) => {
      "use strict";
      i.d(e, { default: () => n.a });
      var r = i(4839),
        n = i.n(r);
    },
    5483: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        i(6573);
      let r = function (t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          i[r - 1] = arguments[r];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8929: (t, e, i) => {
      "use strict";
      function r(t, e, i, r) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        i(6573),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    7970: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let r = i(306),
        n = i(9955),
        s = i(5155),
        o = n._(i(2115)),
        a = r._(i(7650)),
        l = r._(i(6107)),
        u = i(666),
        h = i(1159),
        c = i(3621);
      i(2363);
      let d = i(3576),
      p = r._(i(5514)),
      f = i(5353),
      m = {
        deviceSizes: [],
        imageSizes: [],
        path: "",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
  
      function g(t, e, i, r, n, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && n(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let r = !1,
                    n = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), e.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(t);
              }
            }));
      }
      function y(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, o.forwardRef)((t, e) => {
        let {
            src: i,
            srcSet: r,
            sizes: n,
            height: a,
            width: l,
            decoding: u,
            className: h,
            style: c,
            fetchPriority: d,
            placeholder: p,
            loading: m,
            unoptimized: v,
            fill: b,
            onLoadRef: _,
            onLoadingCompleteRef: w,
            setBlurComplete: x,
            setShowAltText: P,
            sizesInput: S,
            onLoad: E,
            onError: T,
            ...A
          } = t,
          R = (0, o.useCallback)(
            (t) => {
              t && (T && (t.src = t.src), t.complete && g(t, p, _, w, x, v, S));
            },
            [i, p, _, w, x, T, v, S]
          ),
          C = (0, f.useMergedRef)(e, R);
        return (0, s.jsx)("img", {
          ...A,
          ...y(d),
          loading: m,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: h,
          style: c,
          sizes: n,
          srcSet: r,
          src: i,
          ref: C,
          onLoad: (t) => {
            g(t.currentTarget, p, _, w, x, v, S);
          },
          onError: (t) => {
            P(!0), "empty" !== p && x(!0), T && T(t);
          },
        });
      });
      function b(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          r = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...y(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, r), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...r },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let _ = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(d.RouterContext),
          r = (0, o.useContext)(c.ImageConfigContext),
          n = (0, o.useMemo)(() => {
            let t = m || r || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: i };
          }, [r]),
          { onLoad: a, onLoadingComplete: l } = t,
          f = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          f.current = a;
        }, [a]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [y, _] = (0, o.useState)(!1),
          [w, x] = (0, o.useState)(!1),
          { props: P, meta: S } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: y,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v, {
              ...P,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: f,
              onLoadingCompleteRef: g,
              setBlurComplete: _,
              setShowAltText: x,
              sizesInput: t.sizes,
              ref: e,
            }),
            S.priority
              ? (0, s.jsx)(b, { isAppRouter: !i, imgAttributes: P })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4839: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = i(306),
        n = i(5155),
        s = r._(i(2115)),
        o = i(2745),
        a = i(9821),
        l = i(180),
        u = i(2170),
        h = i(5483),
        c = i(3576),
        d = i(1394),
        p = i(4116),
        f = i(8929),
        m = i(9544),
        g = i(4445),
        y = i(5353),
        v = new Set();
      function b(t, e, i, r, n, s) {
        if ("undefined" != typeof window && (s || (0, a.isLocalURL)(e))) {
          if (!r.bypassPrefetchedCheck && !s) {
            let n =
              e +
              "%" +
              i +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (v.has(n)) return;
            v.add(n);
          }
          (async () => (s ? t.prefetch(e, n) : t.prefetch(e, i, r)))().catch(
            (t) => {}
          );
        }
      }
      function _(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let w = s.default.forwardRef(function (t, e) {
        let i, r;
        let {
          href: l,
          as: v,
          children: w,
          prefetch: x = null,
          passHref: P,
          replace: S,
          shallow: E,
          scroll: T,
          locale: A,
          onClick: R,
          onMouseEnter: C,
          onTouchStart: k,
          legacyBehavior: O = !1,
          ...M
        } = t;
        (i = w),
          O &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = (0, n.jsx)("a", { children: i }));
        let j = s.default.useContext(c.RouterContext),
          D = s.default.useContext(d.AppRouterContext),
          L = null != j ? j : D,
          I = !j,
          N = !1 !== x,
          V = null === x ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: B, as: F } = s.default.useMemo(() => {
            if (!j) {
              let t = _(l);
              return { href: t, as: v ? _(v) : t };
            }
            let [t, e] = (0, o.resolveHref)(j, l, !0);
            return { href: t, as: v ? (0, o.resolveHref)(j, v) : e || t };
          }, [j, l, v]),
          U = s.default.useRef(B),
          W = s.default.useRef(F);
        O && (r = s.default.Children.only(i));
        let z = O ? r && "object" == typeof r && r.ref : e,
          [q, $, H] = (0, p.useIntersection)({ rootMargin: "200px" }),
          X = s.default.useCallback(
            (t) => {
              (W.current !== F || U.current !== B) &&
                (H(), (W.current = F), (U.current = B)),
                q(t);
            },
            [F, B, H, q]
          ),
          Y = (0, y.useMergedRef)(X, z);
        s.default.useEffect(() => {
          L && $ && N && b(L, B, F, { locale: A }, { kind: V }, I);
        }, [F, B, $, A, N, null == j ? void 0 : j.locale, L, I, V]);
        let G = {
          ref: Y,
          onClick(t) {
            O || "function" != typeof R || R(t),
              O &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              L &&
                !t.defaultPrevented &&
                (function (t, e, i, r, n, o, l, u, h) {
                  let { nodeName: c } = t.currentTarget;
                  if (
                    "A" === c.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, a.isLocalURL)(i)))
                  )
                    return;
                  t.preventDefault();
                  let d = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[n ? "replace" : "push"](i, r, {
                          shallow: o,
                          locale: u,
                          scroll: t,
                        })
                      : e[n ? "replace" : "push"](r || i, { scroll: t });
                  };
                  h ? s.default.startTransition(d) : d();
                })(t, L, B, F, S, E, T, A, I);
          },
          onMouseEnter(t) {
            O || "function" != typeof C || C(t),
              O &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(t),
              L &&
                (N || !I) &&
                b(
                  L,
                  B,
                  F,
                  { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: V },
                  I
                );
          },
          onTouchStart: function (t) {
            O || "function" != typeof k || k(t),
              O &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(t),
              L &&
                (N || !I) &&
                b(
                  L,
                  B,
                  F,
                  { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: V },
                  I
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(F)) G.href = F;
        else if (!O || P || ("a" === r.type && !("href" in r.props))) {
          let t = void 0 !== A ? A : null == j ? void 0 : j.locale,
            e =
              (null == j ? void 0 : j.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                F,
                t,
                null == j ? void 0 : j.locales,
                null == j ? void 0 : j.domainLocales
              );
          G.href =
            e ||
            (0, m.addBasePath)(
              (0, h.addLocale)(F, t, null == j ? void 0 : j.defaultLocale)
            );
        }
        return O
          ? s.default.cloneElement(r, G)
          : (0, n.jsx)("a", { ...M, ...G, children: i });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8571: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return i;
          },
        });
      let i =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2745: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = i(4156),
        n = i(180),
        s = i(1673),
        o = i(2170),
        a = i(6573),
        l = i(9821),
        u = i(1885),
        h = i(1605);
      function c(t, e, i) {
        let c;
        let d = "string" == typeof e ? e : (0, n.formatWithValidation)(e),
          p = d.match(/^[a-zA-Z]{1,}:\/\//),
          f = p ? d.slice(p[0].length) : d;
        if ((f.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, o.normalizeRepeatedSlashes)(f);
          d = (p ? p[0] : "") + e;
        }
        if (!(0, l.isLocalURL)(d)) return i ? [d] : d;
        try {
          c = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          c = new URL("/", "http://n");
        }
        try {
          let t = new URL(d, c);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
            let i = (0, r.searchParamsToUrlQuery)(t.searchParams),
              { result: o, params: a } = (0, h.interpolateAs)(
                t.pathname,
                t.pathname,
                i
              );
            o &&
              (e = (0, n.formatWithValidation)({
                pathname: o,
                hash: t.hash,
                query: (0, s.omit)(i, a),
              }));
          }
          let o =
            t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
          return i ? [o, e || o] : o;
        } catch (t) {
          return i ? [d] : d;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4116: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = i(2115),
        n = i(8571),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: i, disabled: l } = t,
          u = l || !s,
          [h, c] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((t) => {
            d.current = t;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (s) {
              if (u || h) return;
              let t = d.current;
              if (t && t.tagName)
                return (function (t, e, i) {
                  let {
                    id: r,
                    observer: n,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let i = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      r = a.find(
                        (t) => t.root === i.root && t.margin === i.margin
                      );
                    if (r && (e = o.get(r))) return e;
                    let n = new Map();
                    return (
                      (e = {
                        id: i,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = n.get(t.target),
                              i = t.isIntersecting || t.intersectionRatio > 0;
                            e && i && e(i);
                          });
                        }, t),
                        elements: n,
                      }),
                      a.push(i),
                      o.set(i, e),
                      e
                    );
                  })(i);
                  return (
                    s.set(t, e),
                    n.observe(t),
                    function () {
                      if ((s.delete(t), n.unobserve(t), 0 === s.size)) {
                        n.disconnect(), o.delete(r);
                        let t = a.findIndex(
                          (t) => t.root === r.root && t.margin === r.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && c(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: i,
                });
            } else if (!h) {
              let t = (0, n.requestIdleCallback)(() => c(!0));
              return () => (0, n.cancelIdleCallback)(t);
            }
          }, [u, i, e, h, d.current]),
          [
            p,
            h,
            (0, r.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5353: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = i(2115);
      function n(t, e) {
        let i = (0, r.useRef)(() => {}),
          n = (0, r.useRef)(() => {});
        return (0, r.useMemo)(
          () =>
            t && e
              ? (r) => {
                  null === r
                    ? (i.current(), n.current())
                    : ((i.current = s(t, r)), (n.current = s(e, r)));
                }
              : t || e,
          [t, e]
        );
      }
      function s(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let i = t(e);
          return "function" == typeof i ? i : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    918: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          ACTION_SUFFIX: function () {
            return c;
          },
          APP_DIR_ALIAS: function () {
            return M;
          },
          CACHE_ONE_YEAR: function () {
            return S;
          },
          DOT_NEXT_ALIAS: function () {
            return k;
          },
          ESLINT_DEFAULT_DIRS: function () {
            return J;
          },
          GSP_NO_RETURNED_VALUE: function () {
            return $;
          },
          GSSP_COMPONENT_MEMBER_ERROR: function () {
            return Y;
          },
          GSSP_NO_RETURNED_VALUE: function () {
            return H;
          },
          INFINITE_CACHE: function () {
            return E;
          },
          INSTRUMENTATION_HOOK_FILENAME: function () {
            return R;
          },
          MATCHED_PATH_HEADER: function () {
            return n;
          },
          MIDDLEWARE_FILENAME: function () {
            return T;
          },
          MIDDLEWARE_LOCATION_REGEXP: function () {
            return A;
          },
          NEXT_BODY_SUFFIX: function () {
            return f;
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function () {
            return P;
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
            return y;
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
            return v;
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function () {
            return g;
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
            return x;
          },
          NEXT_CACHE_TAGS_HEADER: function () {
            return m;
          },
          NEXT_CACHE_TAG_MAX_ITEMS: function () {
            return _;
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function () {
            return w;
          },
          NEXT_DATA_SUFFIX: function () {
            return d;
          },
          NEXT_INTERCEPTION_MARKER_PREFIX: function () {
            return r;
          },
          NEXT_META_SUFFIX: function () {
            return p;
          },
          NEXT_QUERY_PARAM_PREFIX: function () {
            return i;
          },
          NEXT_RESUME_HEADER: function () {
            return b;
          },
          NON_STANDARD_NODE_ENV: function () {
            return G;
          },
          PAGES_DIR_ALIAS: function () {
            return C;
          },
          PRERENDER_REVALIDATE_HEADER: function () {
            return s;
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
            return o;
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
            return B;
          },
          ROOT_DIR_ALIAS: function () {
            return O;
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
            return V;
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function () {
            return N;
          },
          RSC_ACTION_PROXY_ALIAS: function () {
            return L;
          },
          RSC_ACTION_VALIDATE_ALIAS: function () {
            return D;
          },
          RSC_CACHE_WRAPPER_ALIAS: function () {
            return I;
          },
          RSC_MOD_REF_PROXY_ALIAS: function () {
            return j;
          },
          RSC_PREFETCH_SUFFIX: function () {
            return a;
          },
          RSC_SEGMENTS_DIR_SUFFIX: function () {
            return l;
          },
          RSC_SEGMENT_SUFFIX: function () {
            return u;
          },
          RSC_SUFFIX: function () {
            return h;
          },
          SERVER_PROPS_EXPORT_ERROR: function () {
            return q;
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
            return U;
          },
          SERVER_PROPS_SSG_CONFLICT: function () {
            return W;
          },
          SERVER_RUNTIME: function () {
            return Z;
          },
          SSG_FALLBACK_EXPORT_ERROR: function () {
            return K;
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function () {
            return F;
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
            return z;
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
            return X;
          },
          WEBPACK_LAYERS: function () {
            return tt;
          },
          WEBPACK_RESOURCE_QUERIES: function () {
            return te;
          },
        });
      let i = "nxtP",
        r = "nxtI",
        n = "x-matched-path",
        s = "x-prerender-revalidate",
        o = "x-prerender-revalidate-if-generated",
        a = ".prefetch.rsc",
        l = ".segments",
        u = ".segment.rsc",
        h = ".rsc",
        c = ".action",
        d = ".json",
        p = ".meta",
        f = ".body",
        m = "x-next-cache-tags",
        g = "x-next-cache-soft-tags",
        y = "x-next-revalidated-tags",
        v = "x-next-revalidate-tag-token",
        b = "next-resume",
        _ = 64,
        w = 256,
        x = 1024,
        P = "_N_T_",
        S = 31536e3,
        E = 0xfffffffe,
        T = "middleware",
        A = `(?:src/)?${T}`,
        R = "instrumentation",
        C = "private-next-pages",
        k = "private-dot-next",
        O = "private-next-root-dir",
        M = "private-next-app-dir",
        j = "private-next-rsc-mod-ref-proxy",
        D = "private-next-rsc-action-validate",
        L = "private-next-rsc-server-reference",
        I = "private-next-rsc-cache-wrapper",
        N = "private-next-rsc-action-encryption",
        V = "private-next-rsc-action-client-wrapper",
        B =
          "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        F =
          "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
        U =
          "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
        W =
          "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
        z =
          "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
        q =
          "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
        $ =
          "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
        H =
          "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
        X =
          "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
        Y =
          "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        G =
          'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        K =
          "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
        J = ["app", "pages", "components", "lib", "src"],
        Z = {
          edge: "edge",
          experimentalEdge: "experimental-edge",
          nodejs: "nodejs",
        },
        Q = {
          shared: "shared",
          reactServerComponents: "rsc",
          serverSideRendering: "ssr",
          actionBrowser: "action-browser",
          api: "api",
          middleware: "middleware",
          instrument: "instrument",
          edgeAsset: "edge-asset",
          appPagesBrowser: "app-pages-browser",
        },
        tt = {
          ...Q,
          GROUP: {
            builtinReact: [Q.reactServerComponents, Q.actionBrowser],
            serverOnly: [
              Q.reactServerComponents,
              Q.actionBrowser,
              Q.instrument,
              Q.middleware,
            ],
            neutralTarget: [Q.api],
            clientOnly: [Q.serverSideRendering, Q.appPagesBrowser],
            bundled: [
              Q.reactServerComponents,
              Q.actionBrowser,
              Q.serverSideRendering,
              Q.appPagesBrowser,
              Q.shared,
              Q.instrument,
            ],
            appPages: [
              Q.reactServerComponents,
              Q.serverSideRendering,
              Q.appPagesBrowser,
              Q.actionBrowser,
            ],
          },
        },
        te = {
          edgeSSREntry: "__next_edge_ssr_entry__",
          metadata: "__next_metadata__",
          metadataRoute: "__next_metadata_route__",
          metadataImageMeta: "__next_metadata_image_meta__",
        };
    },
    3003: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = i(306)._(i(2115)).default.createContext({});
    },
    675: (t, e) => {
      "use strict";
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: r = !1,
        } = void 0 === t ? {} : t;
        return e || (i && r);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    6832: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let i = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function n(t) {
        return i.test(t) ? t.replace(r, "\\$&") : t;
      }
    },
    666: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(2363);
      let r = i(5859),
        n = i(1159);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i;
        let a,
          l,
          u,
          {
            src: h,
            sizes: c,
            unoptimized: d = !1,
            priority: p = !1,
            loading: f,
            className: m,
            quality: g,
            width: y,
            height: v,
            fill: b = !1,
            style: _,
            overrideSrc: w,
            onLoad: x,
            onLoadingComplete: P,
            placeholder: S = "empty",
            blurDataURL: E,
            fetchPriority: T,
            decoding: A = "async",
            layout: R,
            objectFit: C,
            objectPosition: k,
            lazyBoundary: O,
            lazyRoot: M,
            ...j
          } = t,
          { imgConf: D, showAltText: L, blurComplete: I, defaultLoader: N } = e,
          V = D || n.imageConfigDefault;
        if ("allSizes" in V) a = V;
        else {
          let t = [...V.deviceSizes, ...V.imageSizes].sort((t, e) => t - e),
            e = V.deviceSizes.sort((t, e) => t - e);
          a = { ...V, allSizes: t, deviceSizes: e };
        }
        if (void 0 === N)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let B = j.loader || N;
        delete j.loader, delete j.srcSet;
        let F = "__next_img_default" in B;
        if (F) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = B;
          B = (e) => {
            let { config: i, ...r } = e;
            return t(r);
          };
        }
        if (R) {
          "fill" === R && (b = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[R];
          t && (_ = { ..._, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[R];
          e && !c && (c = e);
        }
        let U = "",
          W = o(y),
          z = o(v);
        if ((i = h) && "object" == typeof i && (s(i) || void 0 !== i.src)) {
          let t = s(h) ? h.default : h;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (E = E || t.blurDataURL),
            (U = t.src),
            !b)
          ) {
            if (W || z) {
              if (W && !z) {
                let e = W / t.width;
                z = Math.round(t.height * e);
              } else if (!W && z) {
                let e = z / t.height;
                W = Math.round(t.width * e);
              }
            } else (W = t.width), (z = t.height);
          }
        }
        let q = !p && ("lazy" === f || void 0 === f);
        (!(h = "string" == typeof h ? h : U) ||
          h.startsWith("data:") ||
          h.startsWith("blob:")) &&
          ((d = !0), (q = !1)),
          a.unoptimized && (d = !0),
          F && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0);
        let $ = o(g),
          H = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: k,
                }
              : {},
            L ? {} : { color: "transparent" },
            _
          ),
          X =
            I || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: W,
                  heightInt: z,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: E || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          Y = X
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          G = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: r,
              width: n,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (r) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: r, allSizes: n } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let r; (r = t.exec(i)); r) e.push(parseInt(r[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: n.filter((e) => e >= r[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => n.find((e) => e >= t) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, n, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, r) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : r + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: a,
            src: h,
            unoptimized: d,
            width: W,
            quality: $,
            sizes: c,
            loader: B,
          });
        return {
          props: {
            ...j,
            loading: q ? "lazy" : f,
            fetchPriority: T,
            width: W,
            height: z,
            decoding: A,
            className: m,
            style: { ...H, ...Y },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: w || G.src,
          },
          meta: { unoptimized: d, priority: p, placeholder: S, fill: b },
        };
      }
    },
    6107: (t, e, i) => {
      "use strict";
      var r = i(2818);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = i(306),
        s = i(9955),
        o = i(5155),
        a = s._(i(2115)),
        l = n._(i(1172)),
        u = i(3003),
        h = i(1147),
        c = i(675);
      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          t ||
            e.push(
              (0, o.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          e
        );
      }
      function p(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === a.default.Fragment
          ? t.concat(
              a.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(2363);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(p, [])
          .reverse()
          .concat(d(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                r = {};
              return (n) => {
                let s = !0,
                  o = !1;
                if (
                  n.key &&
                  "number" != typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = n.key.slice(n.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    e.has(n.type) ? (s = !1) : e.add(n.type);
                    break;
                  case "meta":
                    for (let t = 0, e = f.length; t < e; t++) {
                      let e = f[t];
                      if (n.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = n.props[e],
                            i = r[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (r[e] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let n = t.key || e;
            if (
              r.env.__NEXT_OPTIMIZE_FONTS &&
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                a.default.cloneElement(t, e)
              );
            }
            return a.default.cloneElement(t, { key: n });
          });
      }
      let g = function (t) {
        let { children: e } = t,
          i = (0, a.useContext)(u.AmpStateContext),
          r = (0, a.useContext)(h.HeadManagerContext);
        return (0, o.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5859: (t, e) => {
      "use strict";
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: r,
            blurHeight: n,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = r ? 40 * r : e,
          l = n ? 40 * n : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    3621: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(306)._(i(2115)),
        n = i(1159),
        s = r.default.createContext(n.imageConfigDefault);
    },
    1159: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [],
          imageSizes: [],
          path: "",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: [],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "",
          contentDispositionType: "",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !0,
        };
    
    },
    4146: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = i(306),
        n = i(666),
        s = i(7970),
        o = r._(i(5514));
        function a(t) {
            let { src: originalSrc } = t; // Extract the original `src` from input
            return { props: { src: originalSrc } }; // Return only the original `src` as a prop
          }
          let l = s.Image;
          
    },
    5514: (t, e) => {
      "use strict";
      function i(t) {
        let { config: e, src: i, width: r, quality: n } = t;
        return (
          e.path +
          "?url=" +
          encodeURIComponent(i) +
          "&w=" +
          r +
          "&q=" +
          (n || 75)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (i.__next_img_default = !0);
      let r = i;
    },
    3576: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = i(306)._(i(2115)).default.createContext(null);
    },
    180: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          formatUrl: function () {
            return s;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return o;
          },
        });
      let r = i(9955)._(i(4156)),
        n = /https?|ftp|gopher|file/;
      function s(t) {
        let { auth: e, hostname: i } = t,
          s = t.protocol || "",
          o = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : i &&
              ((u = e + (~i.indexOf(":") ? "[" + i + "]" : i)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(r.urlQueryToSearchParams(l)));
        let h = t.search || (l && "?" + l) || "";
        return (
          s && !s.endsWith(":") && (s += ":"),
          t.slashes || ((!s || n.test(s)) && !1 !== u)
            ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          h && "?" !== h[0] && (h = "?" + h),
          "" +
            s +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace("#", "%23")) +
            a
        );
      }
      let o = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(t) {
        return s(t);
      }
    },
    1885: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getSortedRouteObjects: function () {
            return r.getSortedRouteObjects;
          },
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return n.isDynamicRoute;
          },
        });
      let r = i(8931),
        n = i(4895);
    },
    1605: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(8827),
        n = i(2630);
      function s(t, e, i) {
        let s = "",
          o = (0, n.getRouteRegex)(t),
          a = o.groups,
          l = (e !== t ? (0, r.getRouteMatcher)(o)(e) : "") || i;
        s = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || "",
              { repeat: i, optional: r } = a[t],
              n = "[" + (i ? "..." : "") + t + "]";
            return (
              r && (n = (e ? "" : "/") + "[" + n + "]"),
              i && !Array.isArray(e) && (e = [e]),
              (r || t in l) &&
                (s =
                  s.replace(
                    n,
                    i
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (s = ""),
          { params: u, result: s }
        );
      }
    },
    4895: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(8456),
        n = /\/\[[^/]+?\](?=\/|$)/;
      function s(t) {
        return (
          (0, r.isInterceptionRouteAppPath)(t) &&
            (t = (0, r.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          n.test(t)
        );
      }
    },
    9821: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(2170),
        n = i(6003);
      function s(t) {
        if (!(0, r.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, r.getLocationOrigin)(),
            i = new URL(t, e);
          return i.origin === e && (0, n.hasBasePath)(i.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    1673: (t, e) => {
      "use strict";
      function i(t, e) {
        let i = {};
        return (
          Object.keys(t).forEach((r) => {
            e.includes(r) || (i[r] = t[r]);
          }),
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    4156: (t, e) => {
      "use strict";
      function i(t) {
        let e = {};
        return (
          t.forEach((t, i) => {
            void 0 === e[i]
              ? (e[i] = t)
              : Array.isArray(e[i])
              ? e[i].push(t)
              : (e[i] = [e[i], t]);
          }),
          e
        );
      }
      function r(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function n(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [i, n] = t;
            Array.isArray(n)
              ? n.forEach((t) => e.append(i, r(t)))
              : e.set(i, r(n));
          }),
          e
        );
      }
      function s(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          i[r - 1] = arguments[r];
        return (
          i.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, i) => t.append(i, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          assign: function () {
            return s;
          },
          searchParamsToUrlQuery: function () {
            return i;
          },
          urlQueryToSearchParams: function () {
            return n;
          },
        });
    },
    8827: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = i(2170);
      function n(t) {
        let { re: e, groups: i } = t;
        return (t) => {
          let n = e.exec(t);
          if (!n) return !1;
          let s = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            o = {};
          return (
            Object.keys(i).forEach((t) => {
              let e = i[t],
                r = n[e.pos];
              void 0 !== r &&
                (o[t] = ~r.indexOf("/")
                  ? r.split("/").map((t) => s(t))
                  : e.repeat
                  ? [s(r)]
                  : s(r));
            }),
            o
          );
        };
      }
    },
    2630: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getNamedMiddlewareRegex: function () {
            return m;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getRouteRegex: function () {
            return c;
          },
          parseParameter: function () {
            return l;
          },
        });
      let r = i(918),
        n = i(8456),
        s = i(6832),
        o = i(1246),
        a = /\[((?:\[.*\])|.+)\]/;
      function l(t) {
        let e = t.match(a);
        return e ? u(e[1]) : u(t);
      }
      function u(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let i = t.startsWith("...");
        return i && (t = t.slice(3)), { key: t, repeat: i, optional: e };
      }
      function h(t) {
        let e = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
          i = {},
          r = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = n.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                o = t.match(a);
              if (e && o) {
                let { key: t, optional: n, repeat: a } = u(o[1]);
                return (
                  (i[t] = { pos: r++, repeat: a, optional: n }),
                  "/" + (0, s.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!o) return "/" + (0, s.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: n } = u(o[1]);
                return (
                  (i[t] = { pos: r++, repeat: e, optional: n }),
                  e ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: i,
        };
      }
      function c(t) {
        let { parameterizedRoute: e, groups: i } = h(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: i };
      }
      function d(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: i,
            segment: r,
            routeKeys: n,
            keyPrefix: o,
          } = t,
          { key: a, optional: l, repeat: h } = u(r),
          c = a.replace(/\W/g, "");
        o && (c = "" + o + c);
        let d = !1;
        (0 === c.length || c.length > 30) && (d = !0),
          isNaN(parseInt(c.slice(0, 1))) || (d = !0),
          d && (c = i()),
          o ? (n[c] = "" + o + a) : (n[c] = a);
        let p = e ? (0, s.escapeStringRegexp)(e) : "";
        return h
          ? l
            ? "(?:/" + p + "(?<" + c + ">.+?))?"
            : "/" + p + "(?<" + c + ">.+?)"
          : "/" + p + "(?<" + c + ">[^/]+?)";
      }
      function p(t, e) {
        let i;
        let a = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
          l =
            ((i = 0),
            () => {
              let t = "",
                e = ++i;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          u = {};
        return {
          namedParameterizedRoute: a
            .map((t) => {
              let i = n.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (i && o) {
                let [i] = t.split(o[0]);
                return d({
                  getSafeRouteKey: l,
                  interceptionMarker: i,
                  segment: o[1],
                  routeKeys: u,
                  keyPrefix: e ? r.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
                });
              }
              return o
                ? d({
                    getSafeRouteKey: l,
                    segment: o[1],
                    routeKeys: u,
                    keyPrefix: e ? r.NEXT_QUERY_PARAM_PREFIX : void 0,
                  })
                : "/" + (0, s.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: u,
        };
      }
      function f(t, e) {
        let i = p(t, e);
        return {
          ...c(t),
          namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
          routeKeys: i.routeKeys,
        };
      }
      function m(t, e) {
        let { parameterizedRoute: i } = h(t),
          { catchAll: r = !0 } = e;
        if ("/" === i) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: n } = p(t, !1);
        return { namedRegex: "^" + n + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    8931: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getSortedRouteObjects: function () {
            return n;
          },
          getSortedRoutes: function () {
            return r;
          },
        });
      class i {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let i = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              i.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            i.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              i.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              i.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            i
          );
        }
        _insert(t, e, r) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let n = t[0];
          if (n.startsWith("[") && n.endsWith("]")) {
            let i = n.slice(1, -1),
              o = !1;
            if (
              (i.startsWith("[") &&
                i.endsWith("]") &&
                ((i = i.slice(1, -1)), (o = !0)),
              i.startsWith("…"))
            )
              throw Error(
                "Detected a three-dot character ('…') at ('" +
                  i +
                  "'). Did you mean ('...')?"
              );
            if (
              (i.startsWith("...") && ((i = i.substring(3)), (r = !0)),
              i.startsWith("[") || i.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  i +
                  "')."
              );
            if (i.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  i +
                  "')."
              );
            function s(t, i) {
              if (null !== t && t !== i)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    i +
                    "')."
                );
              e.forEach((t) => {
                if (t === i)
                  throw Error(
                    'You cannot have the same slug name "' +
                      i +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === n.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      i +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(i);
            }
            if (r) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                s(this.optionalRestSlugName, i),
                  (this.optionalRestSlugName = i),
                  (n = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                s(this.restSlugName, i), (this.restSlugName = i), (n = "[...]");
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              s(this.slugName, i), (this.slugName = i), (n = "[]");
            }
          }
          this.children.has(n) || this.children.set(n, new i()),
            this.children.get(n)._insert(t.slice(1), e, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(t) {
        let e = new i();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
      function n(t, e) {
        let i = {},
          n = [];
        for (let r = 0; r < t.length; r++) {
          let s = e(t[r]);
          (i[s] = r), (n[r] = s);
        }
        return r(n).map((e) => t[i[e]]);
      }
    },
    1172: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = i(2115),
        n = "undefined" == typeof window,
        s = n ? () => {} : r.useLayoutEffect,
        o = n ? () => {} : r.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let n = r.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(n, t));
          }
        }
        if (n) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          s(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    2170: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          DecodeError: function () {
            return f;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return i;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          stringifyError: function () {
            return b;
          },
        });
      let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(t) {
        let e,
          i = !1;
        return function () {
          for (var r = arguments.length, n = Array(r), s = 0; s < r; s++)
            n[s] = arguments[s];
          return i || ((i = !0), (e = t(...n))), e;
        };
      }
      let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (t) => n.test(t);
      function o() {
        let { protocol: t, hostname: e, port: i } = window.location;
        return t + "//" + e + (i ? ":" + i : "");
      }
      function a() {
        let { href: t } = window.location,
          e = o();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function c(t, e) {
        let i = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await c(e.Component, e.ctx) }
            : {};
        let r = await t.getInitialProps(e);
        if (i && u(i)) return r;
        if (!r)
          throw Error(
            '"' +
              l(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class f extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class y extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class v extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    7867: (t, e, i) => {
      "use strict";
      let r;
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, { P: () => so });
      let s = (t) => Array.isArray(t);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function a(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function l(t, e, i, r) {
        if (
          "function" == typeof e ||
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, s] = (function (t) {
            let e = [{}, {}];
            return (
              null == t ||
                t.values.forEach((t, i) => {
                  (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
                }),
              e
            );
          })(r);
          e = e(void 0 !== i ? i : t.custom, n, s);
        }
        return e;
      }
      function u(t, e, i) {
        let r = t.getProps();
        return l(r, e, void 0 !== i ? i : r.custom, t);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...h],
        d = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        p = new Set(d),
        f = (t) => 1e3 * t,
        m = (t) => t / 1e3,
        g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        y = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        v = { type: "keyframes", duration: 0.8 },
        b = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        _ = (t, { keyframes: e }) =>
          e.length > 2
            ? v
            : p.has(t)
            ? t.startsWith("scale")
              ? y(e[1])
              : g
            : b;
      function w(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let x = { skipAnimations: !1, useManualTiming: !1 },
        P = { current: !1 },
        S = (t) => null !== t;
      function E(t, { repeat: e, repeatType: i = "loop" }, r) {
        let n = t.filter(S),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== r ? r : n[s];
      }
      let T = (t) => t,
        A = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function R(t, e) {
        let i = !1,
          r = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = A.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  r = !1,
                  n = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, n = !1, o = !1) => {
                    let a = o && r ? e : i;
                    return n && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), r)) {
                      n = !0;
                      return;
                    }
                    (r = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (r = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(s)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: h,
            render: c,
            postRender: d,
          } = o,
          p = () => {
            let s = x.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              (n.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(s - n.timestamp, 40), 1)),
              (n.timestamp = s),
              (n.isProcessing = !0),
              a.process(n),
              l.process(n),
              u.process(n),
              h.process(n),
              c.process(n),
              d.process(n),
              (n.isProcessing = !1),
              i && e && ((r = !1), t(p));
          },
          f = () => {
            (i = !0), (r = !0), n.isProcessing || t(p);
          };
        return {
          schedule: A.reduce((t, e) => {
            let r = o[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || f(), r.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < A.length; e++) o[A[e]].cancel(t);
          },
          state: n,
          steps: o,
        };
      }
      let {
          schedule: C,
          cancel: k,
          state: O,
          steps: M,
        } = R(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : T,
          !0
        ),
        j = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function D(t, e, i, r) {
        if (t === e && i === r) return T;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do (s = j((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : j(n(t), e, r));
      }
      let L = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        I = (t) => (e) => 1 - t(1 - e),
        N = D(0.33, 1.53, 0.69, 0.99),
        V = I(N),
        B = L(V),
        F = (t) =>
          (t *= 2) < 1 ? 0.5 * V(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        U = (t) => 1 - Math.sin(Math.acos(t)),
        W = I(U),
        z = L(U),
        q = (t) => /^0[^.\s]+$/u.test(t),
        $ = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        H = (t) => (e) => "string" == typeof e && e.startsWith(t),
        X = H("--"),
        Y = H("var(--"),
        G = (t) => !!Y(t) && K.test(t.split("/*")[0].trim()),
        K =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        Z = (t, e, i) => (i > e ? e : i < t ? t : i),
        Q = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tt = { ...Q, transform: (t) => Z(0, 1, t) },
        te = { ...Q, default: 1 },
        ti = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tr = ti("deg"),
        tn = ti("%"),
        ts = ti("px"),
        to = ti("vh"),
        ta = ti("vw"),
        tl = {
          ...tn,
          parse: (t) => tn.parse(t) / 100,
          transform: (t) => tn.transform(100 * t),
        },
        tu = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        th = (t) => t === Q || t === ts,
        tc = (t, e) => parseFloat(t.split(", ")[e]),
        td =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/u);
            if (n) return tc(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? tc(e[1], t) : 0;
            }
          },
        tp = new Set(["x", "y", "z"]),
        tf = d.filter((t) => !tp.has(t)),
        tm = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: td(4, 13),
          y: td(5, 14),
        };
      (tm.translateX = tm.x), (tm.translateY = tm.y);
      let tg = (t) => (e) => e.test(t),
        ty = [
          Q,
          ts,
          tn,
          tr,
          ta,
          to,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tv = (t) => ty.find(tg(t)),
        tb = new Set(),
        t_ = !1,
        tw = !1;
      function tx() {
        if (tw) {
          let t = Array.from(tb).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tf.forEach((i) => {
                  let r = t.getValue(i);
                  void 0 !== r &&
                    (e.push([i, r.get()]),
                    r.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tw = !1), (t_ = !1), tb.forEach((t) => t.complete()), tb.clear();
      }
      function tP() {
        tb.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tw = !0);
        });
      }
      class tS {
        constructor(t, e, i, r, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tb.add(this),
                t_ || ((t_ = !0), C.read(tP), C.resolveKeyframes(tx)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let r = i.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tb.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tb.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tE = (t) => Math.round(1e5 * t) / 1e5,
        tT = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tA =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tR = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tA.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tC = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [n, s, o, a] = r.match(tT);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tk = (t) => Z(0, 255, t),
        tO = { ...Q, transform: (t) => Math.round(tk(t)) },
        tM = {
          test: tR("rgb", "red"),
          parse: tC("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            tO.transform(t) +
            ", " +
            tO.transform(e) +
            ", " +
            tO.transform(i) +
            ", " +
            tE(tt.transform(r)) +
            ")",
        },
        tj = {
          test: tR("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: tM.transform,
        },
        tD = {
          test: tR("hsl", "hue"),
          parse: tC("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tn.transform(tE(e)) +
            ", " +
            tn.transform(tE(i)) +
            ", " +
            tE(tt.transform(r)) +
            ")",
        },
        tL = {
          test: (t) => tM.test(t) || tj.test(t) || tD.test(t),
          parse: (t) =>
            tM.test(t) ? tM.parse(t) : tD.test(t) ? tD.parse(t) : tj.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tM.transform(t)
              : tD.transform(t),
        },
        tI =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tN = "number",
        tV = "color",
        tB =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tF(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          n = [],
          s = 0,
          o = e
            .replace(
              tB,
              (t) => (
                tL.test(t)
                  ? (r.color.push(s), n.push(tV), i.push(tL.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(s), n.push("var"), i.push(t))
                  : (r.number.push(s), n.push(tN), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: r, types: n };
      }
      function tU(t) {
        return tF(t).values;
      }
      function tW(t) {
        let { split: e, types: i } = tF(t),
          r = e.length;
        return (t) => {
          let n = "";
          for (let s = 0; s < r; s++)
            if (((n += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tN
                ? (n += tE(t[s]))
                : e === tV
                ? (n += tL.transform(t[s]))
                : (n += t[s]);
            }
          return n;
        };
      }
      let tz = (t) => ("number" == typeof t ? 0 : t),
        tq = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tT)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tI)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: tU,
          createTransformer: tW,
          getAnimatableNone: function (t) {
            let e = tU(t);
            return tW(t)(e.map(tz));
          },
        },
        t$ = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tH(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(tT) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = t$.has(e) ? 1 : 0;
        return r !== i && (s *= 100), e + "(" + s + n + ")";
      }
      let tX = /\b([a-z-]*)\(.*?\)/gu,
        tY = {
          ...tq,
          getAnimatableNone: (t) => {
            let e = t.match(tX);
            return e ? e.map(tH).join(" ") : t;
          },
        },
        tG = { ...Q, transform: Math.round },
        tK = {
          borderWidth: ts,
          borderTopWidth: ts,
          borderRightWidth: ts,
          borderBottomWidth: ts,
          borderLeftWidth: ts,
          borderRadius: ts,
          radius: ts,
          borderTopLeftRadius: ts,
          borderTopRightRadius: ts,
          borderBottomRightRadius: ts,
          borderBottomLeftRadius: ts,
          width: ts,
          maxWidth: ts,
          height: ts,
          maxHeight: ts,
          top: ts,
          right: ts,
          bottom: ts,
          left: ts,
          padding: ts,
          paddingTop: ts,
          paddingRight: ts,
          paddingBottom: ts,
          paddingLeft: ts,
          margin: ts,
          marginTop: ts,
          marginRight: ts,
          marginBottom: ts,
          marginLeft: ts,
          backgroundPositionX: ts,
          backgroundPositionY: ts,
          rotate: tr,
          rotateX: tr,
          rotateY: tr,
          rotateZ: tr,
          scale: te,
          scaleX: te,
          scaleY: te,
          scaleZ: te,
          skew: tr,
          skewX: tr,
          skewY: tr,
          distance: ts,
          translateX: ts,
          translateY: ts,
          translateZ: ts,
          x: ts,
          y: ts,
          z: ts,
          perspective: ts,
          transformPerspective: ts,
          opacity: tt,
          originX: tl,
          originY: tl,
          originZ: ts,
          zIndex: tG,
          size: ts,
          fillOpacity: tt,
          strokeOpacity: tt,
          numOctaves: tG,
        },
        tJ = {
          ...tK,
          color: tL,
          backgroundColor: tL,
          outlineColor: tL,
          fill: tL,
          stroke: tL,
          borderColor: tL,
          borderTopColor: tL,
          borderRightColor: tL,
          borderBottomColor: tL,
          borderLeftColor: tL,
          filter: tY,
          WebkitFilter: tY,
        },
        tZ = (t) => tJ[t];
      function tQ(t, e) {
        let i = tZ(t);
        return (
          i !== tY && (i = tq),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t0 = new Set(["auto", "none", "0"]);
      class t1 extends tS {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && G((r = r.trim()))) {
              let n = (function t(e, i, r = 1) {
                T(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (t) {
                  let e = J.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${null != i ? i : r}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return $(t) ? parseFloat(t) : t;
                }
                return G(s) ? t(s, i, r + 1) : s;
              })(r, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !tu.has(i) || 2 !== t.length))
            return;
          let [r, n] = t,
            s = tv(r),
            o = tv(n);
          if (s !== o) {
            if (th(s) && th(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || q(r)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                "string" == typeof e &&
                  !t0.has(e) &&
                  tF(e).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let n of e) t[n] = tQ(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tm[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            o = r[s];
          (r[s] = tm[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function t2(t) {
        return "function" == typeof t;
      }
      function t5() {
        r = void 0;
      }
      let t3 = {
          now: () => (
            void 0 === r &&
              t3.set(
                O.isProcessing || x.useManualTiming
                  ? O.timestamp
                  : performance.now()
              ),
            r
          ),
          set: (t) => {
            (r = t), queueMicrotask(t5);
          },
        },
        t6 = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tq.test(t) || "0" === t) &&
              !t.startsWith("url("))
          );
      class t4 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = t3.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tP(), tx()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = t3.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: r,
            velocity: n,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, r) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = t6(n, e),
                a = t6(s, e);
              return (
                T(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || t2(i)) && r))
              );
            })(t, i, r, n)
          ) {
            if (P.current || !s) {
              null == a || a(E(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let t8 = (t, e, i) => {
          let r = e - t;
          return 0 === r ? 1 : (i - t) / r;
        },
        t9 = (t, e, i = 10) => {
          let r = "",
            n = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < n; e++) r += t(t8(0, n - 1, e)) + ", ";
          return `linear(${r.substring(0, r.length - 2)})`;
        };
      function t7(t, e, i) {
        var r, n;
        let s = Math.max(e - 5, 0);
        return (r = i - t(s)), (n = e - s) ? (1e3 / n) * r : 0;
      }
      let et = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function ee(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      function ei(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let er = ["duration", "bounce"],
        en = ["stiffness", "damping", "mass"];
      function es(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function eo(t = et.visualDuration, e = et.bounce) {
        let i;
        let r =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: n, restDelta: s } = r,
          o = r.keyframes[0],
          a = r.keyframes[r.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: g,
          } = (function (t) {
            let e = {
              velocity: et.velocity,
              stiffness: et.stiffness,
              damping: et.damping,
              mass: et.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!es(t, en) && es(t, er)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  n = 2 * Z(0.05, 1, 1 - t.bounce) * Math.sqrt(r);
                e = { ...e, mass: et.mass, stiffness: r, damping: n };
              } else {
                let i = (function ({
                  duration: t = et.duration,
                  bounce: e = et.bounce,
                  velocity: i = et.velocity,
                  mass: r = et.mass,
                }) {
                  let n, s;
                  T(
                    t <= f(et.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let o = 1 - e;
                  (o = Z(et.minDamping, et.maxDamping, o)),
                    (t = Z(et.minDuration, et.maxDuration, m(t))),
                    o < 1
                      ? ((n = (e) => {
                          let r = e * o,
                            n = r * t;
                          return 0.001 - ((r - i) / ee(e, o)) * Math.exp(-n);
                        }),
                        (s = (e) => {
                          let r = e * o * t,
                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = Math.exp(-r),
                            l = ee(Math.pow(e, 2), o);
                          return (
                            ((r * i + i - s) *
                              a *
                              (-n(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((n = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let a = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(n, s, 5 / t);
                  if (((t = f(t)), isNaN(a)))
                    return {
                      stiffness: et.stiffness,
                      damping: et.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: et.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...r, velocity: -m(r.velocity || 0) }),
          y = p || 0,
          v = h / (2 * Math.sqrt(u * c)),
          b = a - o,
          _ = m(Math.sqrt(u / c)),
          w = 5 > Math.abs(b);
        if (
          (n || (n = w ? et.restSpeed.granular : et.restSpeed.default),
          s || (s = w ? et.restDelta.granular : et.restDelta.default),
          v < 1)
        ) {
          let t = ee(_, v);
          i = (e) =>
            a -
            Math.exp(-v * _ * e) *
              (((y + v * _ * b) / t) * Math.sin(t * e) + b * Math.cos(t * e));
        } else if (1 === v)
          i = (t) => a - Math.exp(-_ * t) * (b + (y + _ * b) * t);
        else {
          let t = _ * Math.sqrt(v * v - 1);
          i = (e) => {
            let i = Math.exp(-v * _ * e),
              r = Math.min(t * e, 300);
            return (
              a -
              (i * ((y + v * _ * b) * Math.sinh(r) + t * b * Math.cosh(r))) / t
            );
          };
        }
        let x = {
          calculatedDuration: (g && d) || null,
          next: (t) => {
            let e = i(t);
            if (g) l.done = t >= d;
            else {
              let r = 0;
              v < 1 && (r = 0 === t ? f(y) : t7(i, t, e));
              let o = Math.abs(r) <= n,
                u = Math.abs(a - e) <= s;
              l.done = o && u;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(ei(x), 2e4),
              e = t9((e) => x.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return x;
      }
      function ea({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          y = i * e,
          v = p + y,
          b = void 0 === o ? v : o(v);
        b !== v && (y = b - p);
        let _ = (t) => -y * Math.exp(-t / r),
          w = (t) => b + _(t),
          x = (t) => {
            let e = _(t),
              i = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? b : i);
          },
          P = (t) => {
            m(f.value) &&
              ((c = t),
              (d = eo({
                keyframes: [f.value, g(f.value)],
                velocity: t7(w, t, f.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          P(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), x(t), P(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || x(t), f);
            },
          }
        );
      }
      let el = D(0.42, 0, 1, 1),
        eu = D(0, 0, 0.58, 1),
        eh = D(0.42, 0, 0.58, 1),
        ec = (t) => Array.isArray(t) && "number" != typeof t[0],
        ed = (t) => Array.isArray(t) && "number" == typeof t[0],
        ep = {
          linear: T,
          easeIn: el,
          easeInOut: eh,
          easeOut: eu,
          circIn: U,
          circInOut: z,
          circOut: W,
          backIn: V,
          backInOut: B,
          backOut: N,
          anticipate: F,
        },
        ef = (t) => {
          if (ed(t)) {
            T(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return D(e, i, r, n);
          }
          return "string" == typeof t
            ? (T(void 0 !== ep[t], `Invalid easing type '${t}'`), ep[t])
            : t;
        },
        em = (t, e) => (i) => e(t(i)),
        eg = (...t) => t.reduce(em),
        ey = (t, e, i) => t + (e - t) * i;
      function ev(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function eb(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let e_ = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        ew = [tj, tM, tD],
        ex = (t) => ew.find((e) => e.test(t));
      function eP(t) {
        let e = ex(t);
        if (
          (T(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tD &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                (n = ev(a, r, t + 1 / 3)),
                  (s = ev(a, r, t)),
                  (o = ev(a, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let eS = (t, e) => {
          let i = eP(t),
            r = eP(e);
          if (!i || !r) return eb(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = e_(i.red, r.red, t)),
            (n.green = e_(i.green, r.green, t)),
            (n.blue = e_(i.blue, r.blue, t)),
            (n.alpha = ey(i.alpha, r.alpha, t)),
            tM.transform(n)
          );
        },
        eE = new Set(["none", "hidden"]);
      function eT(t, e) {
        return (i) => ey(t, e, i);
      }
      function eA(t) {
        return "number" == typeof t
          ? eT
          : "string" == typeof t
          ? G(t)
            ? eb
            : tL.test(t)
            ? eS
            : ek
          : Array.isArray(t)
          ? eR
          : "object" == typeof t
          ? tL.test(t)
            ? eS
            : eC
          : eb;
      }
      function eR(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => eA(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function eC(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = eA(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let ek = (t, e) => {
        let i = tq.createTransformer(e),
          r = tF(t),
          n = tF(e);
        return r.indexes.var.length === n.indexes.var.length &&
          r.indexes.color.length === n.indexes.color.length &&
          r.indexes.number.length >= n.indexes.number.length
          ? (eE.has(t) && !n.values.length) || (eE.has(e) && !r.values.length)
            ? (function (t, e) {
                return eE.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : eg(
                eR(
                  (function (t, e) {
                    var i;
                    let r = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (r[s] = l), n[o]++;
                    }
                    return r;
                  })(r, n),
                  n.values
                ),
                i
              )
          : (T(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            eb(t, e));
      };
      function eO(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? ey(t, e, i)
          : eA(t)(t, e);
      }
      function eM({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = ec(r) ? r.map(ef) : ef(r),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
            let s = t.length;
            if (
              (T(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let r = [],
                  n = i || eO,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = n(t[i], t[i + 1]);
                  e && (s = eg(Array.isArray(e) ? e[i] || T : e, s)), r.push(s);
                }
                return r;
              })(e, r, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let r = t8(t[i], t[i + 1], e);
                return o[i](r);
              };
            return i ? (e) => l(Z(t[0], t[s - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let n = t8(0, e, r);
                        t.push(ey(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || eh).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let ej = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => C.update(e, !0),
            stop: () => k(e),
            now: () => (O.isProcessing ? O.timestamp : t3.now()),
          };
        },
        eD = { decay: ea, inertia: ea, tween: eM, keyframes: eM, spring: eo },
        eL = (t) => t / 100;
      class eI extends t4 {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: r,
              keyframes: n,
            } = this.options,
            s = (null == r ? void 0 : r.KeyframeResolver) || tS;
          (this.resolver = new s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: r = "keyframes",
              repeat: n = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = t2(r) ? r : eD[r] || eM;
          l !== eM &&
            "number" != typeof t[0] &&
            ((e = eg(eL, eO(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = ei(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (n + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let v = this.currentTime,
            b = n;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / h))
                  : "mirror" === p && (b = s)),
              (v = Z(0, 1, i) * h);
          }
          let _ = y ? { done: !1, value: a[0] } : b.next(v);
          o && (_.value = o(_.value));
          let { done: w } = _;
          y ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let x =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            x && void 0 !== r && (_.value = E(a, this.options, r)),
            m && m(_.value),
            x && this.finish(),
            _
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? m(t.calculatedDuration) : 0;
        }
        get time() {
          return m(this.currentTime);
        }
        set time(t) {
          (t = f(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = m(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = ej, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = r)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let eN = new Set(["opacity", "clipPath", "filter", "transform"]);
      function eV(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eB = { linearEasing: void 0 },
        eF = (function (t, e) {
          let i = eV(t);
          return () => {
            var t;
            return null !== (t = eB[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        eU = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        eW = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: eU([0, 0.65, 0.55, 1]),
          circOut: eU([0.55, 0, 1, 0.45]),
          backIn: eU([0.31, 0.01, 0.66, -0.59]),
          backOut: eU([0.33, 1.53, 0.69, 0.99]),
        };
      function ez(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let eq = eV(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        e$ = { anticipate: F, backInOut: B, circInOut: z };
      class eH extends t4 {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: n,
          } = this.options;
          (this.resolver = new t1(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, r;
          let {
            duration: n = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof o && eF() && o in e$ && (o = e$[o]),
            t2((r = this.options).type) ||
              "spring" === r.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && eF()) ||
                  !e ||
                  ("string" == typeof e && (e in eW || eF())) ||
                  ed(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(r.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new eI({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  n.push((r = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && eF()
                  ? t9(e, i)
                  : ed(e)
                  ? eU(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || eW.easeOut)
                  : eW[e];
            })(a, n);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: r,
                duration: n,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (ez(c, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(E(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: n,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return m(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return m(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = f(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return T;
            let { animation: i } = e;
            ez(i, t);
          } else this.pendingTimeline = t;
          return T;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: r,
            type: n,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new eI({
                ...u,
                keyframes: i,
                duration: r,
                type: n,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              c = f(this.time);
            t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: r,
            repeatType: n,
            damping: s,
            type: o,
          } = t;
          return (
            eq() &&
            i &&
            eN.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !r &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let eX = eV(() => void 0 !== window.ScrollTimeline);
      class eY {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            eX() && i.attachTimeline ? i.attachTimeline(t) : e(i)
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eG =
          (t, e, i, r = {}, n, s) =>
          (o) => {
            let a = w(r, t) || {},
              l = a.delay || r.delay || 0,
              { elapsed: u = 0 } = r;
            u -= f(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ..._(t, h) }),
              h.duration && (h.duration = f(h.duration)),
              h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let c = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (c = !0)),
              (P.current || x.skipAnimations) &&
                ((c = !0), (h.duration = 0), (h.delay = 0)),
              c && !s && void 0 !== e.get())
            ) {
              let t = E(h.keyframes, a);
              if (void 0 !== t)
                return (
                  C.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new eY([])
                );
            }
            return !s && eH.supports(h) ? new eH(h) : new eI(h);
          },
        eK = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        eJ = (t) => (s(t) ? t[t.length - 1] || 0 : t);
      function eZ(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function eQ(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class e0 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return eZ(this.subscriptions, t), () => eQ(this.subscriptions, t);
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let e1 = (t) => !isNaN(parseFloat(t)),
        e2 = { current: void 0 };
      class e5 {
        constructor(t, e = {}) {
          (this.version = "11.12.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = t3.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t3.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = e1(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new e0());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  C.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return e2.current && e2.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t3.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function e3(t, e) {
        return new e5(t, e);
      }
      let e6 = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        e4 = "data-" + e6("framerAppearId"),
        e8 = (t) => !!(t && t.getVelocity);
      function e9(t, e) {
        let i = t.getValue("willChange");
        if (e8(i) && i.add) return i.add(e);
      }
      function e7(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        r && (o = r);
        let h = [],
          c = n && t.animationState && t.animationState.getState()[n];
        for (let e in l) {
          let r = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            n = l[e];
          if (
            void 0 === n ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(c, e))
          )
            continue;
          let a = { delay: i, ...w(o || {}, e) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[e4];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, C);
              null !== t && ((a.startTime = t), (u = !0));
            }
          }
          e9(t, e),
            r.start(
              eG(
                e,
                r,
                n,
                t.shouldReduceMotion && p.has(e) ? { type: !1 } : a,
                t,
                u
              )
            );
          let d = r.animation;
          d && h.push(d);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              C.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...n
                    } = u(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = eJ(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, e3(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function it(t, e, i = {}) {
        var r;
        let n = u(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = n ? () => Promise.all(e7(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ie)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              it(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ie(t, e) {
        return t.sortNodePosition(e);
      }
      let ii = c.length,
        ir = [...h].reverse(),
        is = h.length;
      function io(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function ia() {
        return {
          animate: io(!0),
          whileInView: io(),
          whileHover: io(),
          whileTap: io(),
          whileDrag: io(),
          whileFocus: io(),
          exit: io(),
        };
      }
      class il {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class iu extends il {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => it(t, e, i)));
                          else if ("string" == typeof e) r = it(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? u(t, e, i.custom) : e;
                            r = Promise.all(e7(t, n, i));
                          }
                          return r.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = ia(),
                  r = !0,
                  l = (e) => (i, r) => {
                    var n;
                    let s = u(
                      t,
                      r,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function h(u) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ii; t++) {
                          let r = c[t],
                            n = e.props[r];
                          (a(n) || !1 === n) && (i[r] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    f = new Set(),
                    m = {},
                    g = 1 / 0;
                  for (let e = 0; e < is; e++) {
                    var y;
                    let c = ir[e],
                      v = i[c],
                      b = void 0 !== h[c] ? h[c] : d[c],
                      _ = a(b),
                      w = c === u ? v.isActive : null;
                    !1 === w && (g = e);
                    let x = b === d[c] && b !== h[c] && _;
                    if (
                      (x && r && t.manuallyAnimateOnMount && (x = !1),
                      (v.protectedKeys = { ...m }),
                      (!v.isActive && null === w) ||
                        (!b && !v.prevProp) ||
                        n(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let P =
                        ((y = v.prevProp),
                        "string" == typeof b
                          ? b !== y
                          : !!Array.isArray(b) && !o(b, y)),
                      S =
                        P || (c === u && v.isActive && !x && _) || (e > g && _),
                      E = !1,
                      T = Array.isArray(b) ? b : [b],
                      A = T.reduce(l(c), {});
                    !1 === w && (A = {});
                    let { prevResolvedValues: R = {} } = v,
                      C = { ...R, ...A },
                      k = (e) => {
                        (S = !0),
                          f.has(e) && ((E = !0), f.delete(e)),
                          (v.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in C) {
                      let e = A[t],
                        i = R[t];
                      if (!m.hasOwnProperty(t))
                        (s(e) && s(i) ? o(e, i) : e === i)
                          ? void 0 !== e && f.has(t)
                            ? k(t)
                            : (v.protectedKeys[t] = !0)
                          : null != e
                          ? k(t)
                          : f.add(t);
                    }
                    (v.prevProp = b),
                      (v.prevResolvedValues = A),
                      v.isActive && (m = { ...m, ...A }),
                      r && t.blockInitialAnimation && (S = !1);
                    let O = !(x && P) || E;
                    S &&
                      O &&
                      p.push(
                        ...T.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (f.size) {
                    let e = {};
                    f.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != r ? r : null);
                    }),
                      p.push({ animation: e });
                  }
                  let v = !!p.length;
                  return (
                    r &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (v = !1),
                    (r = !1),
                    v ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, r) {
                    var n;
                    if (i[e].isActive === r) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let s = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = ia()), (r = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let ih = 0;
      class ic extends il {
        constructor() {
          super(...arguments), (this.id = ih++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let id = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function ip(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let im = (t) => (e) => id(e) && t(e, ip(e));
      function ig(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      function iy(t, e, i, r) {
        return ig(t, e, im(i), r);
      }
      let iv = (t, e) => Math.abs(t - e);
      class ib {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: r,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = ix(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(iv(t.x, e.x) ** 2 + iv(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: n } = O;
              this.history.push({ ...r, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = i_(e, this.transformPagePoint)),
                C.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: r,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = ix(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : i_(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), r && r(t, s);
            }),
            !id(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = r || window);
          let s = i_(ip(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = O;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, ix(s, this.history)),
            (this.removeListeners = eg(
              iy(this.contextWindow, "pointermove", this.handlePointerMove),
              iy(this.contextWindow, "pointerup", this.handlePointerUp),
              iy(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), k(this.updatePoint);
        }
      }
      function i_(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iw(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ix({ point: t }, e) {
        return {
          point: t,
          delta: iw(t, iP(e)),
          offset: iw(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = iP(t);
            for (
              ;
              i >= 0 && ((r = t[i]), !(n.timestamp - r.timestamp > f(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = m(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iP(t) {
        return t[t.length - 1];
      }
      function iS(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let iE = iS("dragHorizontal"),
        iT = iS("dragVertical");
      function iA(t) {
        let e = !1;
        if ("y" === t) e = iT();
        else if ("x" === t) e = iE();
        else {
          let t = iE(),
            i = iT();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function iR() {
        let t = iA(!0);
        return !t || (t(), !1);
      }
      function iC(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function ik(t) {
        return t.max - t.min;
      }
      function iO(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = ey(e.min, e.max, t.origin)),
          (t.scale = ik(i) / ik(e)),
          (t.translate = ey(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iM(t, e, i, r) {
        iO(t.x, e.x, i.x, r ? r.originX : void 0),
          iO(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function ij(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + ik(e));
      }
      function iD(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + ik(e));
      }
      function iL(t, e, i) {
        iD(t.x, e.x, i.x), iD(t.y, e.y, i.y);
      }
      function iI(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iN(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function iV(t, e, i) {
        return { min: iB(t, e), max: iB(t, i) };
      }
      function iB(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iF = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iU = () => ({ x: iF(), y: iF() }),
        iW = () => ({ min: 0, max: 0 }),
        iz = () => ({ x: iW(), y: iW() });
      function iq(t) {
        return [t("x"), t("y")];
      }
      function i$({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function iH(t) {
        return void 0 === t || 1 === t;
      }
      function iX({ scale: t, scaleX: e, scaleY: i }) {
        return !iH(t) || !iH(e) || !iH(i);
      }
      function iY(t) {
        return (
          iX(t) ||
          iG(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function iG(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function iK(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function iJ(t, e = 0, i = 1, r, n) {
        (t.min = iK(t.min, e, i, r, n)), (t.max = iK(t.max, e, i, r, n));
      }
      function iZ(t, { x: e, y: i }) {
        iJ(t.x, e.translate, e.scale, e.originPoint),
          iJ(t.y, i.translate, i.scale, i.originPoint);
      }
      function iQ(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function i0(t, e, i, r, n = 0.5) {
        let s = ey(t.min, t.max, n);
        iJ(t, e, i, s, r);
      }
      function i1(t, e) {
        i0(t.x, e.x, e.scaleX, e.scale, e.originX),
          i0(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function i2(t, e) {
        return i$(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let i5 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        i3 = new WeakMap();
      class i6 {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iz()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new ib(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(ip(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: r,
                  onDragStart: n,
                } = this.getProps();
                if (
                  i &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = iA(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iq((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tn.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let r = i.layout.layoutBox[t];
                        r && (e = ik(r) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && C.postRender(() => n(t, e)),
                  e9(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: r,
                  onDirectionLock: n,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iq((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: i5(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && C.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !i4(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? ey(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? ey(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && iC(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: iI(t.x, i, n), y: iI(t.y, e, r) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iV(t, "left", "right"), y: iV(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iq((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !iC(e)) return !1;
          let r = e.current;
          T(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = i2(t, i),
                { scroll: n } = e;
              return n && (iQ(r.x, n.offset.x), iQ(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: iN((t = n.layout.layoutBox).x, s.x), y: iN(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = i$(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iq((o) => {
              if (!i4(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            e9(this.visualElement, t),
            i.start(eG(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iq((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iq((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iq((e) => {
            let { drag: i } = this.getProps();
            if (!i4(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - ey(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iC(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          iq((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = ik(t),
                  n = ik(e);
                return (
                  n > r
                    ? (i = t8(e.min, e.max - r, t.min))
                    : r > n && (i = t8(t.min, t.max - n, e.min)),
                  Z(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iq((e) => {
              if (!i4(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set(ey(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          i3.set(this.visualElement, this);
          let t = iy(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              iC(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            C.read(e);
          let n = ig(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iq((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function i4(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class i8 extends il {
        constructor(t) {
          super(t),
            (this.removeGroupControls = T),
            (this.removeListeners = T),
            (this.controls = new i6(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || T);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let i9 = (t) => (e, i) => {
        t && C.postRender(() => t(e, i));
      };
      class i7 extends il {
        constructor() {
          super(...arguments), (this.removePointerDownListener = T);
        }
        onPointerDown(t) {
          this.session = new ib(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: i5(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: i9(t),
            onStart: i9(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, r && C.postRender(() => r(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iy(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var rt,
        re,
        ri = i(5155),
        rr = i(2115);
      let rn = (0, rr.createContext)(null),
        rs = (0, rr.createContext)({}),
        ro = (0, rr.createContext)({}),
        ra = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rl(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ru = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!ts.test(t)) return t;
              t = parseFloat(t);
            }
            let i = rl(t, e.target.x),
              r = rl(t, e.target.y);
            return `${i}% ${r}%`;
          },
        },
        rh = {},
        { schedule: rc, cancel: rd } = R(queueMicrotask, !1);
      class rp extends rr.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          Object.assign(rh, rm),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ra.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    C.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            rc.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rf(t) {
        let [e, i] = (function () {
            let t = (0, rr.useContext)(rn);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: r } = t,
              n = (0, rr.useId)();
            (0, rr.useEffect)(() => r(n), []);
            let s = (0, rr.useCallback)(() => i && i(n), [n, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          r = (0, rr.useContext)(rs);
        return (0, ri.jsx)(rp, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, rr.useContext)(ro),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let rm = {
          borderRadius: {
            ...ru,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: ru,
          borderTopRightRadius: ru,
          borderBottomLeftRadius: ru,
          borderBottomRightRadius: ru,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let r = tq.parse(t);
              if (r.length > 5) return t;
              let n = tq.createTransformer(t),
                s = "number" != typeof r[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (r[0 + s] /= o), (r[1 + s] /= a);
              let l = ey(o, a, 0.5);
              return (
                "number" == typeof r[2 + s] && (r[2 + s] /= l),
                "number" == typeof r[3 + s] && (r[3 + s] /= l),
                n(r)
              );
            },
          },
        },
        rg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ry = rg.length,
        rv = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rb = (t) => "number" == typeof t || ts.test(t);
      function r_(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rw = rP(0, 0.5, W),
        rx = rP(0.5, 0.95, T);
      function rP(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i(t8(t, e, r)));
      }
      function rS(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rE(t, e) {
        rS(t.x, e.x), rS(t.y, e.y);
      }
      function rT(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function rA(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function rR(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (
            (tn.test(e) &&
              ((e = parseFloat(e)), (e = ey(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = ey(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = rA(t.min, e, i, a, n)),
            (t.max = rA(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let rC = ["x", "scaleX", "originX"],
        rk = ["y", "scaleY", "originY"];
      function rO(t, e, i, r) {
        rR(t.x, e, rC, i ? i.x : void 0, r ? r.x : void 0),
          rR(t.y, e, rk, i ? i.y : void 0, r ? r.y : void 0);
      }
      function rM(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rj(t) {
        return rM(t.x) && rM(t.y);
      }
      function rD(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function rL(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function rI(t, e) {
        return rL(t.x, e.x) && rL(t.y, e.y);
      }
      function rN(t) {
        return ik(t.x) / ik(t.y);
      }
      function rV(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class rB {
        constructor() {
          this.members = [];
        }
        add(t) {
          eZ(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (eQ(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let rF = (t, e) => t.depth - e.depth;
      class rU {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          eZ(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          eQ(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(rF),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function rW(t) {
        let e = e8(t) ? t.get() : t;
        return eK(e) ? e.toValue() : e;
      }
      let rz = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        rq = "undefined" != typeof window && void 0 !== window.MotionDebug,
        r$ = ["", "X", "Y", "Z"],
        rH = { visibility: "hidden" },
        rX = 0;
      function rY(t, e, i, r) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function rG({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = rX++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  rq &&
                    (rz.totalNodes =
                      rz.resolvedTargetDeltas =
                      rz.recalculatedProjection =
                        0),
                  this.nodes.forEach(rZ),
                  this.nodes.forEach(r6),
                  this.nodes.forEach(r4),
                  this.nodes.forEach(rQ),
                  rq && window.MotionDebug.record(rz);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rU());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new e0()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t3.now(),
                      r = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && (k(r), t(n - 250));
                      };
                    return C.read(r, !0), () => k(r);
                  })(r, 250)),
                  ra.hasAnimatedSinceResize &&
                    ((ra.hasAnimatedSinceResize = !1), this.nodes.forEach(r3));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ni,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !rI(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...w(n, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || r3(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              k(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(r8),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let r = i.props[e4];
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      C,
                      !(t || i)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(r1);
              return;
            }
            this.isUpdating || this.nodes.forEach(r2),
              (this.isUpdating = !1),
              this.nodes.forEach(r5),
              this.nodes.forEach(rK),
              this.nodes.forEach(rJ),
              this.clearAllSnapshots();
            let t = t3.now();
            (O.delta = Z(0, 1e3 / 60, t - O.timestamp)),
              (O.timestamp = t),
              (O.isProcessing = !0),
              M.update.process(O),
              M.preRender.process(O),
              M.render.process(O),
              (O.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), rc.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(r0), this.sharedNodes.forEach(r9);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              C.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            C.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = iz()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !rj(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || iY(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              ns((e = r).x),
              ns(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return iz();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(na)
              )
            ) {
              let { scroll: t } = this.root;
              t && (iQ(i.x, t.offset.x), iQ(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = iz();
            if (
              (rE(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e],
                { scroll: n, options: s } = r;
              r !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && rE(i, t),
                iQ(i.x, n.offset.x),
                iQ(i.y, n.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = iz();
            rE(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                i1(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                iY(r.latestValues) && i1(i, r.latestValues);
            }
            return iY(this.latestValues) && i1(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = iz();
            rE(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iY(i.latestValues)) continue;
              iX(i.latestValues) && i.updateSnapshot();
              let r = iz();
              rE(r, i.measurePageBox()),
                rO(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return iY(this.latestValues) && rO(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== O.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = O.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iz()),
                    (this.relativeTargetOrigin = iz()),
                    iL(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    rE(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = iz()), (this.targetWithTransforms = iz())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      ij(i.x, r.x, n.x),
                      ij(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rE(this.target, this.layout.layoutBox),
                      iZ(this.target, this.targetDelta))
                    : rE(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iz()),
                      (this.relativeTargetOrigin = iz()),
                      iL(this.relativeTargetOrigin, this.target, t.target),
                      rE(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                rq && rz.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iX(this.parent.latestValues) ||
              iG(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === O.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            rE(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, r = !1) {
              let n, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      i1(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), iZ(t, s)),
                    r && iY(n.latestValues) && i1(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = iz()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (rT(this.prevProjectionDelta.x, this.projectionDelta.x),
                rT(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iM(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                rV(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                rV(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              rq && rz.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = iU()),
              (this.projectionDelta = iU()),
              (this.projectionDeltaWithTransform = iU());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = iU();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = iz(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(ne)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (r7(o.x, t.x, r),
                  r7(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  iL(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    nt(p.x, f.x, a.x, r),
                    nt(p.y, f.y, a.y, r),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      rD(u.x, d.x) && rD(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = iz()),
                    rE(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, r, n, s) {
                    n
                      ? ((t.opacity = ey(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          rw(r)
                        )),
                        (t.opacityExit = ey(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          rx(r)
                        )))
                      : s &&
                        (t.opacity = ey(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r
                        ));
                    for (let n = 0; n < ry; n++) {
                      let s = `border${rg[n]}Radius`,
                        o = r_(e, s),
                        a = r_(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || rb(o) === rb(a)
                          ? ((t[s] = Math.max(ey(rv(o), rv(a), r), 0)),
                            (tn.test(a) || tn.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = ey(e.rotate || 0, i.rotate || 0, r));
                  })(s, n, this.latestValues, r, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (k(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = C.update(() => {
                (ra.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = e8(0) ? 0 : e3(0);
                    return r.start(eG("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                no(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || iz();
                let e = ik(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = ik(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              rE(e, i),
                i1(e, n),
                iM(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rB()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let r = {};
            i.z && rY("z", t, r, this.animationValues);
            for (let e = 0; e < r$.length; e++)
              rY(`rotate${r$[e]}`, t, r, this.animationValues),
                rY(`skew${r$[e]}`, t, r, this.animationValues);
            for (let e in (t.render(), r))
              t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rH;
            let r = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  rW(null == t ? void 0 : t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    rW(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !iY(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = (function (t, e, i) {
                let r = "",
                  n = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((n || s || o) &&
                    (r = `translate3d(${n}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (r = `perspective(${t}px) ${r}`),
                    e && (r += `rotate(${e}deg) `),
                    n && (r += `rotateX(${n}deg) `),
                    s && (r += `rotateY(${s}deg) `),
                    o && (r += `skewX(${o}deg) `),
                    a && (r += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            rh)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = rh[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this
                    ? rW(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(r1),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rK(t) {
        t.updateLayout();
      }
      function rJ(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? iq((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = ik(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : no(n, i.layoutBox, e) &&
              iq((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = ik(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = iU();
          iM(o, e, i.layoutBox);
          let a = iU();
          s
            ? iM(a, t.applyTransform(r, !0), i.measuredBox)
            : iM(a, e, i.layoutBox);
          let l = !rj(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = iz();
                iL(o, i.layoutBox, n.layoutBox);
                let a = iz();
                iL(a, e, s.layoutBox),
                  rI(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rZ(t) {
        rq && rz.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function rQ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function r0(t) {
        t.clearSnapshot();
      }
      function r1(t) {
        t.clearMeasurements();
      }
      function r2(t) {
        t.isLayoutDirty = !1;
      }
      function r5(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function r3(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function r6(t) {
        t.resolveTargetDelta();
      }
      function r4(t) {
        t.calcProjection();
      }
      function r8(t) {
        t.resetSkewAndRotation();
      }
      function r9(t) {
        t.removeLeadSnapshot();
      }
      function r7(t, e, i) {
        (t.translate = ey(e.translate, 0, i)),
          (t.scale = ey(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nt(t, e, i, r) {
        (t.min = ey(e.min, i.min, r)), (t.max = ey(e.max, i.max, r));
      }
      function ne(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ni = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nr = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nn = nr("applewebkit/") && !nr("chrome/") ? Math.round : T;
      function ns(t) {
        (t.min = nn(t.min)), (t.max = nn(t.max));
      }
      function no(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(rN(e) - rN(i))))
        );
      }
      function na(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let nl = rG({
          attachResizeListener: (t, e) => ig(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nu = { current: void 0 },
        nh = rG({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nu.current) {
              let t = new nl({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nu.current = t);
            }
            return nu.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function nc(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return iy(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (r, n) => {
            if ("touch" === r.pointerType || iR()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && C.postRender(() => o(r, n));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class nd extends il {
        mount() {
          this.unmount = eg(nc(this.node, !0), nc(this.node, !1));
        }
        unmount() {}
      }
      class np extends il {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = eg(
            ig(this.node.current, "focus", () => this.onFocus()),
            ig(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let nf = (t, e) => !!e && (t === e || nf(t, e.parentElement));
      function nm(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, ip(i));
      }
      class ng extends il {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = T),
            (this.removeEndListeners = T),
            (this.removeAccessibleListeners = T),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                r = iy(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: r,
                        globalTapTarget: n,
                      } = this.node.getProps(),
                      s = n || nf(this.node.current, t.target) ? i : r;
                    s && C.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = iy(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = eg(r, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = ig(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ig(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          nm("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && C.postRender(() => i(t, e));
                          });
                      }
                    )),
                    nm("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = ig(this.node.current, "blur", () => {
                  this.isPressing &&
                    nm("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = eg(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && C.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !iR()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && C.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = iy(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = ig(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = eg(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let ny = new WeakMap(),
        nv = new WeakMap(),
        nb = (t) => {
          let e = ny.get(t.target);
          e && e(t);
        },
        n_ = (t) => {
          t.forEach(nb);
        },
        nw = { some: 0, all: 1 };
      class nx extends il {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : nw[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              nv.has(i) || nv.set(i, {});
              let r = nv.get(i),
                n = JSON.stringify(e);
              return (
                r[n] ||
                  (r[n] = new IntersectionObserver(n_, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              ny.set(t, i),
              r.observe(t),
              () => {
                ny.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nP = (0, rr.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        nS = (0, rr.createContext)({}),
        nE = "undefined" != typeof window,
        nT = nE ? rr.useLayoutEffect : rr.useEffect,
        nA = (0, rr.createContext)({ strict: !1 });
      function nR(t) {
        return n(t.animate) || c.some((e) => a(t[e]));
      }
      function nC(t) {
        return !!(nR(t) || t.variants);
      }
      function nk(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let nO = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nM = {};
      for (let t in nO) nM[t] = { isEnabled: (e) => nO[t].some((t) => !!e[t]) };
      let nj = Symbol.for("motionComponentSymbol"),
        nD = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function nL(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (nD.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function nI(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let nN = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function nV(t, e, i, r) {
        for (let i in (nI(t, e, void 0, r), e.attrs))
          t.setAttribute(nN.has(i) ? i : e6(i), e.attrs[i]);
      }
      function nB(t, { layout: e, layoutId: i }) {
        return (
          p.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!rh[t] || "opacity" === t))
        );
      }
      function nF(t, e, i) {
        var r;
        let { style: n } = t,
          s = {};
        for (let o in n)
          (e8(n[o]) ||
            (e.style && e8(e.style[o])) ||
            nB(o, t) ||
            (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r
              ? void 0
              : r.liveStyle) !== void 0) &&
            (s[o] = n[o]);
        return s;
      }
      function nU(t, e, i) {
        let r = nF(t, e, i);
        for (let i in t)
          (e8(t[i]) || e8(e[i])) &&
            (r[
              -1 !== d.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      let nW = (t) => (e, i) => {
          let r = (0, rr.useContext)(nS),
            s = (0, rr.useContext)(rn),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                r,
                s,
                o
              ) {
                let a = {
                  latestValues: (function (t, e, i, r) {
                    let s = {},
                      o = r(t, {});
                    for (let t in o) s[t] = rW(o[t]);
                    let { initial: a, animate: u } = t,
                      h = nR(t),
                      c = nC(t);
                    e &&
                      c &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === u && (u = e.animate));
                    let d = !!i && !1 === i.initial,
                      p = (d = d || !1 === a) ? u : a;
                    if (p && "boolean" != typeof p && !n(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let r = l(t, e[i]);
                        if (r) {
                          let { transitionEnd: t, transition: e, ...i } = r;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = d ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (s[t] = e);
                          }
                          for (let e in t) s[e] = t[e];
                        }
                      }
                    }
                    return s;
                  })(r, s, o, t),
                  renderState: e(),
                };
                return i && (a.mount = (t) => i(r, t, a)), a;
              })(t, e, r, s);
          return i
            ? o()
            : (function (t) {
                let e = (0, rr.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(o);
        },
        nz = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        nq = () => ({ ...nz(), attrs: {} }),
        n$ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        nH = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        nX = d.length;
      function nY(t, e, i) {
        let { style: r, vars: n, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (p.has(t)) {
            o = !0;
            continue;
          }
          if (X(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = n$(i, tK[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (r.transform = (function (t, e, i) {
                  let r = "",
                    n = !0;
                  for (let s = 0; s < nX; s++) {
                    let o = d[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = n$(a, tK[o]);
                      if (!l) {
                        n = !1;
                        let e = nH[o] || o;
                        r += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    i ? (r = i(e, n ? "" : r)) : n && (r = "none"),
                    r
                  );
                })(e, t.transform, i))
              : r.transform && (r.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function nG(t, e, i) {
        return "string" == typeof t ? t : ts.transform(e + i * t);
      }
      let nK = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        nJ = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nZ(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((nY(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: f } = t;
        d.transform && (f && (p.transform = d.transform), delete d.transform),
          f &&
            (void 0 !== n || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let r = nG(e, t.x, t.width),
                n = nG(i, t.y, t.height);
              return `${r} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== r && (d.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? nK : nJ;
              t[s.offset] = ts.transform(-r);
              let o = ts.transform(e),
                a = ts.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let nQ = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        n0 = {
          useVisualState: nW({
            scrapeMotionValuesFromProps: nU,
            createRenderState: nq,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              C.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                C.render(() => {
                  nZ(i, r, nQ(e.tagName), t.transformTemplate), nV(e, i);
                });
            },
          }),
        },
        n1 = {
          useVisualState: nW({
            scrapeMotionValuesFromProps: nF,
            createRenderState: nz,
          }),
        };
      function n2(t, e, i) {
        for (let r in e) e8(e[r]) || nB(r, i) || (t[r] = e[r]);
      }
      let n5 = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function n3(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          n5.has(t)
        );
      }
      let n6 = (t) => !n3(t);
      try {
        !(function (t) {
          t && (n6 = (e) => (e.startsWith("on") ? !n3(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      let n4 = { current: null },
        n8 = { current: !1 },
        n9 = new WeakMap(),
        n7 = [...ty, tL, tq],
        st = (t) => n7.find(tg(t)),
        se = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class si {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tS),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t3.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), C.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = nR(e)),
            (this.isVariantNode = nC(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && e8(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            n9.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            n8.current ||
              (function () {
                if (((n8.current = !0), nE)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (n4.current = t.matches);
                    t.addListener(e), e();
                  } else n4.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || n4.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (n9.delete(this.current),
          this.projection && this.projection.unmount(),
          k(this.notifyUpdate),
          k(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = p.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && C.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in nM) {
            let e = nM[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iz();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < se.length; e++) {
            let i = se[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let n = e[r],
                s = i[r];
              if (e8(n)) t.addValue(r, n);
              else if (e8(s)) t.addValue(r, e3(n, { owner: t }));
              else if (s !== n) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, e3(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = e3(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && ($(r) || q(r))
                ? (r = parseFloat(r))
                : !st(r) && tq.test(e) && (r = tQ(t, e)),
              this.setBaseTarget(t, e8(r) ? r.get() : r)),
            e8(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let n = l(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (r && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || e8(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new e0()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class sr extends si {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t1);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class sn extends sr {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = nI);
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tZ(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = (X(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return i2(t, e);
        }
        build(t, e, i) {
          nY(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nF(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          e8(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class ss extends sr {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iz);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tZ(e);
            return (t && t.default) || 0;
          }
          return (e = nN.has(e) ? e : e6(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return nU(t, e, i);
        }
        build(t, e, i) {
          nZ(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          nV(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = nQ(t.tagName)), super.mount(t);
        }
      }
      let so = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      })(
        ((rt = {
          animation: { Feature: iu },
          exit: { Feature: ic },
          inView: { Feature: nx },
          tap: { Feature: ng },
          focus: { Feature: np },
          hover: { Feature: nd },
          pan: { Feature: i7 },
          drag: { Feature: i8, ProjectionNode: nh, MeasureLayout: rf },
          layout: { ProjectionNode: nh, MeasureLayout: rf },
        }),
        (re = (t, e) =>
          nL(t)
            ? new ss(e)
            : new sn(e, { allowProjection: t !== rr.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: r,
              useVisualState: n,
              Component: s,
            } = t;
            e &&
              (function (t) {
                for (let e in t) nM[e] = { ...nM[e], ...t[e] };
              })(e);
            let o = (0, rr.forwardRef)(function (t, e) {
              var o;
              let l;
              let u = {
                  ...(0, rr.useContext)(nP),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, rr.useContext)(rs).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (nR(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || a(e) ? e : void 0,
                        animate: a(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, rr.useContext)(nS));
                  return (0, rr.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [nk(e), nk(i)]
                  );
                })(t),
                d = n(t, h);
              if (!h && nE) {
                (0, rr.useContext)(nA).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = nM;
                  if (!e && !i) return {};
                  let r = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, r, n) {
                    var s, o;
                    let { visualElement: a } = (0, rr.useContext)(nS),
                      l = (0, rr.useContext)(nA),
                      u = (0, rr.useContext)(rn),
                      h = (0, rr.useContext)(nP).reducedMotion,
                      c = (0, rr.useRef)();
                    (r = r || l.renderer),
                      !c.current &&
                        r &&
                        (c.current = r(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let d = c.current,
                      p = (0, rr.useContext)(ro);
                    d &&
                      !d.projection &&
                      n &&
                      ("html" === d.type || "svg" === d.type) &&
                      (function (t, e, i, r) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && iC(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(c.current, i, n, p);
                    let f = (0, rr.useRef)(!1);
                    (0, rr.useInsertionEffect)(() => {
                      d && f.current && d.update(i, u);
                    });
                    let m = i[e4],
                      g = (0, rr.useRef)(
                        !!m &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, m)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, m))
                      );
                    return (
                      nT(() => {
                        d &&
                          ((f.current = !0),
                          (window.MotionIsMounted = !0),
                          d.updateFeatures(),
                          rc.render(d.render),
                          g.current &&
                            d.animationState &&
                            d.animationState.animateChanges());
                      }),
                      (0, rr.useEffect)(() => {
                        d &&
                          (!g.current &&
                            d.animationState &&
                            d.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, m);
                            }),
                            (g.current = !1)));
                      }),
                      d
                    );
                  })(s, d, u, i, t.ProjectionNode));
              }
              return (0, ri.jsxs)(nS.Provider, {
                value: c,
                children: [
                  l && c.visualElement
                    ? (0, ri.jsx)(l, { visualElement: c.visualElement, ...u })
                    : null,
                  r(
                    s,
                    t,
                    ((o = c.visualElement),
                    (0, rr.useCallback)(
                      (t) => {
                        t && d.mount && d.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : iC(e) && (e.current = t));
                      },
                      [o]
                    )),
                    d,
                    h,
                    c.visualElement
                  ),
                ],
              });
            });
            return (o[nj] = s), o;
          })({
            ...(nL(t) ? n0 : n1),
            preloadedFeatures: rt,
            useRender: (function (t = !1) {
              return (e, i, r, { latestValues: n }, s) => {
                let o = (
                    nL(e)
                      ? function (t, e, i, r) {
                          let n = (0, rr.useMemo)(() => {
                            let i = nq();
                            return (
                              nZ(i, e, nQ(r), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            n2(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            r = (function (t, e) {
                              let i = t.style || {},
                                r = {};
                              return (
                                n2(r, i, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, rr.useMemo)(() => {
                                      let i = nz();
                                      return (
                                        nY(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = r),
                            i
                          );
                        }
                  )(i, n, s, e),
                  a = (function (t, e, i) {
                    let r = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (n6(n) ||
                          (!0 === i && n3(n)) ||
                          (!e && !n3(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (r[n] = t[n]);
                    return r;
                  })(i, "string" == typeof e, t),
                  l = e !== rr.Fragment ? { ...a, ...o, ref: r } : {},
                  { children: u } = i,
                  h = (0, rr.useMemo)(() => (e8(u) ? u.get() : u), [u]);
                return (0, rr.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: re,
            Component: t,
          });
        })
      );
    },
    4928: (t, e, i) => {
      "use strict";
      i.d(e, { fp: () => d });
      var r = i(2115),
        n = i(1416);
      let s = (0, r.createContext)(void 0),
        o = (t) => {
          let e = (0, r.useContext)(s);
          return (null == t ? void 0 : t.store) || e || (0, n.zp)();
        },
        a = (t) => "function" == typeof (null == t ? void 0 : t.then),
        l = (t) => {
          (t.status = "pending"),
            t.then(
              (e) => {
                (t.status = "fulfilled"), (t.value = e);
              },
              (e) => {
                (t.status = "rejected"), (t.reason = e);
              }
            );
        },
        u =
          r.use ||
          ((t) => {
            if ("pending" === t.status) throw t;
            if ("fulfilled" === t.status) return t.value;
            if ("rejected" === t.status) throw t.reason;
            throw (l(t), t);
          }),
        h = new WeakMap(),
        c = (t) => {
          let e = h.get(t);
          return (
            e ||
              ((e = new Promise((i, r) => {
                let n = t,
                  s = (t) => (e) => {
                    n === t && i(e);
                  },
                  o = (t) => (e) => {
                    n === t && r(e);
                  },
                  l = (t) => {
                    "onCancel" in t &&
                      "function" == typeof t.onCancel &&
                      t.onCancel((r) => {
                        if (r === t)
                          throw Error(
                            "[Bug] p is not updated even after cancelation"
                          );
                        a(r)
                          ? (h.set(r, e), (n = r), r.then(s(r), o(r)), l(r))
                          : i(r);
                      });
                  };
                t.then(s(t), o(t)), l(t);
              })),
              h.set(t, e)),
            e
          );
        };
      function d(t, e) {
        return [
          (function (t, e) {
            let i = o(e),
              [[n, s, h], d] = (0, r.useReducer)(
                (e) => {
                  let r = i.get(t);
                  return Object.is(e[0], r) && e[1] === i && e[2] === t
                    ? e
                    : [r, i, t];
                },
                void 0,
                () => [i.get(t), i, t]
              ),
              p = n;
            (s !== i || h !== t) && (d(), (p = i.get(t)));
            let f = null == e ? void 0 : e.delay;
            return ((0, r.useEffect)(() => {
              let e = i.sub(t, () => {
                if ("number" == typeof f) {
                  let e = i.get(t);
                  a(e) && l(c(e)), setTimeout(d, f);
                  return;
                }
                d();
              });
              return d(), e;
            }, [i, t, f]),
            (0, r.useDebugValue)(p),
            a(p))
              ? u(c(p))
              : p;
          })(t, e),
          (function (t, e) {
            let i = o(e);
            return (0, r.useCallback)(
              function () {
                for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                  r[n] = arguments[n];
                if (!("write" in t)) throw Error("not writable atom");
                return i.set(t, ...r);
              },
              [i, t]
            );
          })(t, e),
        ];
      }
    },
    1416: (t, e, i) => {
      "use strict";
      let r;
      i.d(e, { eU: () => s, zp: () => R });
      let n = 0;
      function s(t, e) {
        let i = `atom${++n}`,
          r = {
            toString() {
              return this.debugLabel ? i + ":" + this.debugLabel : i;
            },
          };
        return (
          "function" == typeof t
            ? (r.read = t)
            : ((r.init = t), (r.read = o), (r.write = a)),
          e && (r.write = e),
          r
        );
      }
      function o(t) {
        return t(this);
      }
      function a(t, e, i) {
        return e(this, "function" == typeof i ? i(t(this)) : i);
      }
      let l = (t, e) => (t.unstable_is ? t.unstable_is(e) : e === t),
        u = (t) => "init" in t,
        h = (t) => !!t.write,
        c = new WeakMap(),
        d = (t) => {
          var e;
          return m(t) && !(null == (e = c.get(t)) ? void 0 : e[1]);
        },
        p = (t, e) => {
          let i = c.get(t);
          if (i) (i[1] = !0), i[0].forEach((t) => t(e));
          else throw Error("[Bug] cancelable promise not found");
        },
        f = (t) => {
          if (c.has(t)) return;
          let e = [new Set(), !1];
          c.set(t, e);
          let i = () => {
            e[1] = !0;
          };
          t.then(i, i),
            (t.onCancel = (t) => {
              e[0].add(t);
            });
        },
        m = (t) => "function" == typeof (null == t ? void 0 : t.then),
        g = (t) => "v" in t || "e" in t,
        y = (t) => {
          if ("e" in t) throw t.e;
          if (!("v" in t)) throw Error("[Bug] atom state is not initialized");
          return t.v;
        },
        v = (t, e, i) => {
          i.p.has(t) ||
            (i.p.add(t),
            e.then(
              () => {
                i.p.delete(t);
              },
              () => {
                i.p.delete(t);
              }
            ));
        },
        b = (t, e, i, r, n) => {
          var s;
          if (r === e) throw Error("[Bug] atom cannot depend on itself");
          i.d.set(r, n.n),
            d(i.v) && v(e, i.v, n),
            null == (s = n.m) || s.t.add(e),
            t && x(t, r, e);
        },
        _ = () => [new Map(), new Map(), new Set()],
        w = (t, e, i) => {
          t[0].has(e) || t[0].set(e, new Set()), t[1].set(e, i);
        },
        x = (t, e, i) => {
          let r = t[0].get(e);
          r && r.add(i);
        },
        P = (t, e) => t[0].get(e),
        S = (t, e) => {
          t[2].add(e);
        },
        E = (t) => {
          let e;
          let i = !1,
            r = (t) => {
              try {
                t();
              } catch (t) {
                i || ((e = t), (i = !0));
              }
            };
          for (; t[1].size || t[2].size; ) {
            t[0].clear();
            let e = new Set(t[1].values());
            t[1].clear();
            let i = new Set(t[2]);
            t[2].clear(),
              e.forEach((t) => {
                var e;
                return null == (e = t.m) ? void 0 : e.l.forEach(r);
              }),
              i.forEach(r);
          }
          if (i) throw e;
        },
        T = (...[t, e, i, r]) => {
          let n;
          n = new Set();
          let s = (e, i, r) => {
              let n = "v" in i,
                s = i.v,
                o = d(i.v) ? i.v : null;
              if (m(r)) {
                for (let n of (f(r), i.d.keys())) v(e, r, t(n));
                (i.v = r), delete i.e;
              } else (i.v = r), delete i.e;
              (n && Object.is(s, i.v)) || (++i.n, o && p(o, r));
            },
            o = (i, r, n) => {
              var a;
              let c, d;
              let p = t(r);
              if (
                g(p) &&
                ((p.m && !(null == n ? void 0 : n.has(r))) ||
                  Array.from(p.d).every(([t, e]) => o(i, t, n).n === e))
              )
                return p;
              p.d.clear();
              let f = !0;
              try {
                let v = e(
                  r,
                  (e) => {
                    if (l(r, e)) {
                      let i = t(e);
                      if (!g(i)) {
                        if (u(e)) s(e, i, e.init);
                        else throw Error("no atom init");
                      }
                      return y(i);
                    }
                    let a = o(i, e, n);
                    try {
                      return y(a);
                    } finally {
                      if (f) b(i, r, p, e, a);
                      else {
                        let t = _();
                        b(t, r, p, e, a), R(t, r, p), E(t);
                      }
                    }
                  },
                  {
                    get signal() {
                      return c || (c = new AbortController()), c.signal;
                    },
                    get setSelf() {
                      return (
                        h(r) ||
                          console.warn(
                            "setSelf function cannot be used with read-only atom"
                          ),
                        !d &&
                          h(r) &&
                          (d = (...t) => {
                            if (
                              (f &&
                                console.warn(
                                  "setSelf function cannot be called in sync"
                                ),
                              !f)
                            )
                              return A(r, ...t);
                          }),
                        d
                      );
                    },
                  }
                );
                if ((s(r, p, v), m(v))) {
                  null == (a = v.onCancel) ||
                    a.call(v, () => (null == c ? void 0 : c.abort()));
                  let t = () => {
                    if (p.m) {
                      let t = _();
                      R(t, r, p), E(t);
                    }
                  };
                  v.then(t, t);
                }
                return p;
              } catch (t) {
                return delete p.v, (p.e = t), ++p.n, p;
              } finally {
                f = !1;
              }
            },
            a = (e, i, r) => {
              var n, s;
              let o = new Map();
              for (let e of (null == (n = r.m) ? void 0 : n.t) || [])
                o.set(e, t(e));
              for (let e of r.p) o.set(e, t(e));
              return (
                null == (s = P(e, i)) ||
                  s.forEach((e) => {
                    o.set(e, t(e));
                  }),
                o
              );
            },
            c = (t, e, i) => {
              let [r, n] = (function (t, e, i) {
                  let r = [],
                    n = new Set(),
                    s = new Set(),
                    o = [[e, i]];
                  for (; o.length > 0; ) {
                    let [e, i] = o[o.length - 1];
                    if (s.has(e)) {
                      o.pop();
                      continue;
                    }
                    if (n.has(e)) {
                      r.push([e, i, i.n]), s.add(e), o.pop();
                      continue;
                    }
                    for (let [r, s] of (n.add(e), a(t, e, i)))
                      e === r || n.has(r) || o.push([r, s]);
                  }
                  return [r, s];
                })(t, e, i),
                s = new Set([e]);
              for (let e = r.length - 1; e >= 0; --e) {
                let [i, a, l] = r[e],
                  u = !1;
                for (let t of a.d.keys())
                  if (t !== i && s.has(t)) {
                    u = !0;
                    break;
                  }
                u &&
                  (o(t, i, n), R(t, i, a), l !== a.n && (w(t, i, a), s.add(i))),
                  n.delete(i);
              }
            },
            x = (e, r, ...n) => {
              let a = !0;
              try {
                return i(
                  r,
                  (t) => y(o(e, t)),
                  (i, ...n) => {
                    let o = t(i);
                    try {
                      if (!l(r, i)) return x(e, i, ...n);
                      {
                        if (!u(i)) throw Error("atom not writable");
                        let t = o.n,
                          r = n[0];
                        s(i, o, r),
                          R(e, i, o),
                          t !== o.n && (w(e, i, o), c(e, i, o));
                        return;
                      }
                    } finally {
                      a || E(e);
                    }
                  },
                  ...n
                );
              } finally {
                a = !1;
              }
            },
            A = (t, ...e) => {
              let i = _();
              try {
                return x(i, t, ...e);
              } finally {
                E(i);
              }
            },
            R = (e, i, r) => {
              if (r.m && !d(r.v)) {
                for (let n of r.d.keys())
                  r.m.d.has(n) || (C(e, n, t(n)).t.add(i), r.m.d.add(n));
                for (let n of r.m.d || [])
                  if (!r.d.has(n)) {
                    r.m.d.delete(n);
                    let s = k(e, n, t(n));
                    null == s || s.t.delete(i);
                  }
              }
            },
            C = (e, i, s) => {
              if (!s.m) {
                for (let r of (o(e, i), s.d.keys())) C(e, r, t(r)).t.add(i);
                if (
                  ((s.m = {
                    l: new Set(),
                    d: new Set(s.d.keys()),
                    t: new Set(),
                  }),
                  n.add(i),
                  h(i))
                ) {
                  let t;
                  let n = s.m,
                    o = (e, r) => {
                      let n = !0;
                      t = (...t) => {
                        try {
                          return x(e, i, ...t);
                        } finally {
                          n || E(e);
                        }
                      };
                      try {
                        return r();
                      } finally {
                        n = !1;
                      }
                    };
                  S(e, () => {
                    let s = o(e, () => r(i, (...e) => t(...e)));
                    s && (n.u = (t) => o(t, s));
                  });
                }
              }
              return s.m;
            },
            k = (e, i, r) => {
              if (
                r.m &&
                !r.m.l.size &&
                !Array.from(r.m.t).some((e) => {
                  var r;
                  return null == (r = t(e).m) ? void 0 : r.d.has(i);
                })
              ) {
                let s = r.m.u;
                for (let o of (s && S(e, () => s(e)),
                delete r.m,
                n.delete(i),
                r.d.keys())) {
                  let r = k(e, o, t(o));
                  null == r || r.t.delete(i);
                }
                return;
              }
              return r.m;
            },
            O = {
              get: (t) => y(o(void 0, t)),
              set: A,
              sub: (e, i) => {
                let r = _(),
                  n = t(e),
                  s = C(r, e, n).l;
                return (
                  s.add(i),
                  E(r),
                  () => {
                    s.delete(i);
                    let t = _();
                    k(t, e, n), E(t);
                  }
                );
              },
              unstable_derive: (n) => T(...n(t, e, i, r)),
            };
          return (
            Object.assign(O, {
              dev4_get_internal_weak_map: () => ({
                get: (e) => {
                  let i = t(e);
                  if (0 !== i.n) return i;
                },
              }),
              dev4_get_mounted_atoms: () => n,
              dev4_restore_atoms: (e) => {
                let i = _();
                for (let [r, n] of e)
                  if (u(r)) {
                    let e = t(r),
                      o = e.n;
                    s(r, e, n),
                      R(i, r, e),
                      o !== e.n && (w(i, r, e), c(i, r, e));
                  }
                E(i);
              },
            }),
            O
          );
        },
        A = () => {
          let t = new WeakMap();
          return T(
            (e) => {
              if (!e) throw Error("Atom is undefined or null");
              let i = t.get(e);
              return (
                i || ((i = { d: new Map(), p: new Set(), n: 0 }), t.set(e, i)),
                i
              );
            },
            (t, ...e) => t.read(...e),
            (t, ...e) => t.write(...e),
            (t, ...e) => {
              var i;
              return null == (i = t.onMount) ? void 0 : i.call(t, ...e);
            }
          );
        },
        R = () => (
          r ||
            ((r = A()),
            globalThis.__JOTAI_DEFAULT_STORE__ ||
              (globalThis.__JOTAI_DEFAULT_STORE__ = r),
            globalThis.__JOTAI_DEFAULT_STORE__ !== r &&
              console.warn(
                "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
              )),
          r
        );
    },
    1319: (t, e, i) => {
      "use strict";
      let r, n;
      i.d(e, { Ay: () => tE });
      var s,
        o = {};
      i.r(o),
        i.d(o, {
          Decoder: () => ty,
          Encoder: () => tm,
          PacketType: () => s,
          protocol: () => tf,
        });
      let a = Object.create(null);
      (a.open = "0"),
        (a.close = "1"),
        (a.ping = "2"),
        (a.pong = "3"),
        (a.message = "4"),
        (a.upgrade = "5"),
        (a.noop = "6");
      let l = Object.create(null);
      Object.keys(a).forEach((t) => {
        l[a[t]] = t;
      });
      let u = { type: "error", data: "parser error" },
        h =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        c = "function" == typeof ArrayBuffer,
        d = (t) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer instanceof ArrayBuffer,
        p = ({ type: t, data: e }, i, r) =>
          h && e instanceof Blob
            ? i
              ? r(e)
              : f(e, r)
            : c && (e instanceof ArrayBuffer || d(e))
            ? i
              ? r(e)
              : f(new Blob([e]), r)
            : r(a[t] + (e || "")),
        f = (t, e) => {
          let i = new FileReader();
          return (
            (i.onload = function () {
              e("b" + (i.result.split(",")[1] || ""));
            }),
            i.readAsDataURL(t)
          );
        };
      function m(t) {
        return t instanceof Uint8Array
          ? t
          : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      }
      let g =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        y = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
      for (let t = 0; t < g.length; t++) y[g.charCodeAt(t)] = t;
      let v = (t) => {
          let e = 0.75 * t.length,
            i = t.length,
            r,
            n = 0,
            s,
            o,
            a,
            l;
          "=" === t[t.length - 1] && (e--, "=" === t[t.length - 2] && e--);
          let u = new ArrayBuffer(e),
            h = new Uint8Array(u);
          for (r = 0; r < i; r += 4)
            (s = y[t.charCodeAt(r)]),
              (o = y[t.charCodeAt(r + 1)]),
              (a = y[t.charCodeAt(r + 2)]),
              (l = y[t.charCodeAt(r + 3)]),
              (h[n++] = (s << 2) | (o >> 4)),
              (h[n++] = ((15 & o) << 4) | (a >> 2)),
              (h[n++] = ((3 & a) << 6) | (63 & l));
          return u;
        },
        b = "function" == typeof ArrayBuffer,
        _ = (t, e) => {
          if ("string" != typeof t) return { type: "message", data: x(t, e) };
          let i = t.charAt(0);
          return "b" === i
            ? { type: "message", data: w(t.substring(1), e) }
            : l[i]
            ? t.length > 1
              ? { type: l[i], data: t.substring(1) }
              : { type: l[i] }
            : u;
        },
        w = (t, e) => (b ? x(v(t), e) : { base64: !0, data: t }),
        x = (t, e) =>
          "blob" === e
            ? t instanceof Blob
              ? t
              : new Blob([t])
            : t instanceof ArrayBuffer
            ? t
            : t.buffer,
        P = (t, e) => {
          let i = t.length,
            r = Array(i),
            n = 0;
          t.forEach((t, s) => {
            p(t, !1, (t) => {
              (r[s] = t), ++n === i && e(r.join("\x1e"));
            });
          });
        },
        S = (t, e) => {
          let i = t.split("\x1e"),
            r = [];
          for (let t = 0; t < i.length; t++) {
            let n = _(i[t], e);
            if ((r.push(n), "error" === n.type)) break;
          }
          return r;
        };
      function E(t) {
        return t.reduce((t, e) => t + e.length, 0);
      }
      function T(t, e) {
        if (t[0].length === e) return t.shift();
        let i = new Uint8Array(e),
          r = 0;
        for (let n = 0; n < e; n++)
          (i[n] = t[0][r++]), r === t[0].length && (t.shift(), (r = 0));
        return t.length && r < t[0].length && (t[0] = t[0].slice(r)), i;
      }
      function A(t) {
        if (t)
          return (function (t) {
            for (var e in A.prototype) t[e] = A.prototype[e];
            return t;
          })(t);
      }
      (A.prototype.on = A.prototype.addEventListener =
        function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
          );
        }),
        (A.prototype.once = function (t, e) {
          function i() {
            this.off(t, i), e.apply(this, arguments);
          }
          return (i.fn = e), this.on(t, i), this;
        }),
        (A.prototype.off =
          A.prototype.removeListener =
          A.prototype.removeAllListeners =
          A.prototype.removeEventListener =
            function (t, e) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var i,
                r = this._callbacks["$" + t];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + t], this;
              for (var n = 0; n < r.length; n++)
                if ((i = r[n]) === e || i.fn === e) {
                  r.splice(n, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + t], this;
            }),
        (A.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          for (
            var e = Array(arguments.length - 1),
              i = this._callbacks["$" + t],
              r = 1;
            r < arguments.length;
            r++
          )
            e[r - 1] = arguments[r];
          if (i) {
            i = i.slice(0);
            for (var r = 0, n = i.length; r < n; ++r) i[r].apply(this, e);
          }
          return this;
        }),
        (A.prototype.emitReserved = A.prototype.emit),
        (A.prototype.listeners = function (t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + t] || []
          );
        }),
        (A.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        });
      let R =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (t) => Promise.resolve().then(t)
            : (t, e) => e(t, 0),
        C =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this")();
      function k(t, ...e) {
        return e.reduce(
          (e, i) => (t.hasOwnProperty(i) && (e[i] = t[i]), e),
          {}
        );
      }
      let O = C.setTimeout,
        M = C.clearTimeout;
      function j(t, e) {
        e.useNativeTimers
          ? ((t.setTimeoutFn = O.bind(C)), (t.clearTimeoutFn = M.bind(C)))
          : ((t.setTimeoutFn = C.setTimeout.bind(C)),
            (t.clearTimeoutFn = C.clearTimeout.bind(C)));
      }
      function D() {
        return (
          Date.now().toString(36).substring(3) +
          Math.random().toString(36).substring(2, 5)
        );
      }
      class L extends Error {
        constructor(t, e, i) {
          super(t),
            (this.description = e),
            (this.context = i),
            (this.type = "TransportError");
        }
      }
      class I extends A {
        constructor(t) {
          super(),
            (this.writable = !1),
            j(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.socket = t.socket),
            (this.supportsBinary = !t.forceBase64);
        }
        onError(t, e, i) {
          return super.emitReserved("error", new L(t, e, i)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" === this.readyState || "open" === this.readyState) &&
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(t) {
          "open" === this.readyState && this.write(t);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(t) {
          let e = _(t, this.socket.binaryType);
          this.onPacket(e);
        }
        onPacket(t) {
          super.emitReserved("packet", t);
        }
        onClose(t) {
          (this.readyState = "closed"), super.emitReserved("close", t);
        }
        pause(t) {}
        createUri(t, e = {}) {
          return (
            t +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(e)
          );
        }
        _hostname() {
          let t = this.opts.hostname;
          return -1 === t.indexOf(":") ? t : "[" + t + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(t) {
          let e = (function (t) {
            let e = "";
            for (let i in t)
              t.hasOwnProperty(i) &&
                (e.length && (e += "&"),
                (e += encodeURIComponent(i) + "=" + encodeURIComponent(t[i])));
            return e;
          })(t);
          return e.length ? "?" + e : "";
        }
      }
      class N extends I {
        constructor() {
          super(...arguments), (this._polling = !1);
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this._poll();
        }
        pause(t) {
          this.readyState = "pausing";
          let e = () => {
            (this.readyState = "paused"), t();
          };
          if (this._polling || !this.writable) {
            let t = 0;
            this._polling &&
              (t++,
              this.once("pollComplete", function () {
                --t || e();
              })),
              this.writable ||
                (t++,
                this.once("drain", function () {
                  --t || e();
                }));
          } else e();
        }
        _poll() {
          (this._polling = !0), this.doPoll(), this.emitReserved("poll");
        }
        onData(t) {
          S(t, this.socket.binaryType).forEach((t) => {
            if (
              ("opening" === this.readyState &&
                "open" === t.type &&
                this.onOpen(),
              "close" === t.type)
            )
              return (
                this.onClose({ description: "transport closed by the server" }),
                !1
              );
            this.onPacket(t);
          }),
            "closed" !== this.readyState &&
              ((this._polling = !1),
              this.emitReserved("pollComplete"),
              "open" === this.readyState && this._poll());
        }
        doClose() {
          let t = () => {
            this.write([{ type: "close" }]);
          };
          "open" === this.readyState ? t() : this.once("open", t);
        }
        write(t) {
          (this.writable = !1),
            P(t, (t) => {
              this.doWrite(t, () => {
                (this.writable = !0), this.emitReserved("drain");
              });
            });
        }
        uri() {
          let t = this.opts.secure ? "https" : "http",
            e = this.query || {};
          return (
            !1 !== this.opts.timestampRequests &&
              (e[this.opts.timestampParam] = D()),
            this.supportsBinary || e.sid || (e.b64 = 1),
            this.createUri(t, e)
          );
        }
      }
      let V = !1;
      try {
        V =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (t) {}
      let B = V;
      function F() {}
      class U extends N {
        constructor(t) {
          if ((super(t), "undefined" != typeof location)) {
            let e = "https:" === location.protocol,
              i = location.port;
            i || (i = e ? "443" : "80"),
              (this.xd =
                ("undefined" != typeof location &&
                  t.hostname !== location.hostname) ||
                i !== t.port);
          }
        }
        doWrite(t, e) {
          let i = this.request({ method: "POST", data: t });
          i.on("success", e),
            i.on("error", (t, e) => {
              this.onError("xhr post error", t, e);
            });
        }
        doPoll() {
          let t = this.request();
          t.on("data", this.onData.bind(this)),
            t.on("error", (t, e) => {
              this.onError("xhr poll error", t, e);
            }),
            (this.pollXhr = t);
        }
      }
      class W extends A {
        constructor(t, e, i) {
          super(),
            (this.createRequest = t),
            j(this, i),
            (this._opts = i),
            (this._method = i.method || "GET"),
            (this._uri = e),
            (this._data = void 0 !== i.data ? i.data : null),
            this._create();
        }
        _create() {
          var t;
          let e = k(
            this._opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          e.xdomain = !!this._opts.xd;
          let i = (this._xhr = this.createRequest(e));
          try {
            i.open(this._method, this._uri, !0);
            try {
              if (this._opts.extraHeaders)
                for (let t in (i.setDisableHeaderCheck &&
                  i.setDisableHeaderCheck(!0),
                this._opts.extraHeaders))
                  this._opts.extraHeaders.hasOwnProperty(t) &&
                    i.setRequestHeader(t, this._opts.extraHeaders[t]);
            } catch (t) {}
            if ("POST" === this._method)
              try {
                i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (t) {}
            try {
              i.setRequestHeader("Accept", "*/*");
            } catch (t) {}
            null === (t = this._opts.cookieJar) ||
              void 0 === t ||
              t.addCookies(i),
              "withCredentials" in i &&
                (i.withCredentials = this._opts.withCredentials),
              this._opts.requestTimeout &&
                (i.timeout = this._opts.requestTimeout),
              (i.onreadystatechange = () => {
                var t;
                3 === i.readyState &&
                  (null === (t = this._opts.cookieJar) ||
                    void 0 === t ||
                    t.parseCookies(i.getResponseHeader("set-cookie"))),
                  4 === i.readyState &&
                    (200 === i.status || 1223 === i.status
                      ? this._onLoad()
                      : this.setTimeoutFn(() => {
                          this._onError(
                            "number" == typeof i.status ? i.status : 0
                          );
                        }, 0));
              }),
              i.send(this._data);
          } catch (t) {
            this.setTimeoutFn(() => {
              this._onError(t);
            }, 0);
            return;
          }
          "undefined" != typeof document &&
            ((this._index = W.requestsCount++),
            (W.requests[this._index] = this));
        }
        _onError(t) {
          this.emitReserved("error", t, this._xhr), this._cleanup(!0);
        }
        _cleanup(t) {
          if (void 0 !== this._xhr && null !== this._xhr) {
            if (((this._xhr.onreadystatechange = F), t))
              try {
                this._xhr.abort();
              } catch (t) {}
            "undefined" != typeof document && delete W.requests[this._index],
              (this._xhr = null);
          }
        }
        _onLoad() {
          let t = this._xhr.responseText;
          null !== t &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this._cleanup());
        }
        abort() {
          this._cleanup();
        }
      }
      function z() {
        for (let t in W.requests)
          W.requests.hasOwnProperty(t) && W.requests[t].abort();
      }
      (W.requestsCount = 0),
        (W.requests = {}),
        "undefined" != typeof document &&
          ("function" == typeof attachEvent
            ? attachEvent("onunload", z)
            : "function" == typeof addEventListener &&
              addEventListener(
                "onpagehide" in C ? "pagehide" : "unload",
                z,
                !1
              ));
      let q = (function () {
        let t = H({ xdomain: !1 });
        return t && null !== t.responseType;
      })();
      class $ extends U {
        constructor(t) {
          super(t);
          let e = t && t.forceBase64;
          this.supportsBinary = q && !e;
        }
        request(t = {}) {
          return (
            Object.assign(t, { xd: this.xd }, this.opts),
            new W(H, this.uri(), t)
          );
        }
      }
      function H(t) {
        let e = t.xdomain;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!e || B))
            return new XMLHttpRequest();
        } catch (t) {}
        if (!e)
          try {
            return new C[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (t) {}
      }
      let X =
        "undefined" != typeof navigator &&
        "string" == typeof navigator.product &&
        "reactnative" === navigator.product.toLowerCase();
      class Y extends I {
        get name() {
          return "websocket";
        }
        doOpen() {
          let t = this.uri(),
            e = this.opts.protocols,
            i = X
              ? {}
              : k(
                  this.opts,
                  "agent",
                  "perMessageDeflate",
                  "pfx",
                  "key",
                  "passphrase",
                  "cert",
                  "ca",
                  "ciphers",
                  "rejectUnauthorized",
                  "localAddress",
                  "protocolVersion",
                  "origin",
                  "maxPayload",
                  "family",
                  "checkServerIdentity"
                );
          this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
          try {
            this.ws = this.createSocket(t, e, i);
          } catch (t) {
            return this.emitReserved("error", t);
          }
          (this.ws.binaryType = this.socket.binaryType),
            this.addEventListeners();
        }
        addEventListeners() {
          (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
          }),
            (this.ws.onclose = (t) =>
              this.onClose({
                description: "websocket connection closed",
                context: t,
              })),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError("websocket error", t));
        }
        write(t) {
          this.writable = !1;
          for (let e = 0; e < t.length; e++) {
            let i = t[e],
              r = e === t.length - 1;
            p(i, this.supportsBinary, (t) => {
              try {
                this.doWrite(i, t);
              } catch (t) {}
              r &&
                R(() => {
                  (this.writable = !0), this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          void 0 !== this.ws &&
            ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
        }
        uri() {
          let t = this.opts.secure ? "wss" : "ws",
            e = this.query || {};
          return (
            this.opts.timestampRequests && (e[this.opts.timestampParam] = D()),
            this.supportsBinary || (e.b64 = 1),
            this.createUri(t, e)
          );
        }
      }
      let G = C.WebSocket || C.MozWebSocket;
      class K extends Y {
        createSocket(t, e, i) {
          return X ? new G(t, e, i) : e ? new G(t, e) : new G(t);
        }
        doWrite(t, e) {
          this.ws.send(e);
        }
      }
      class J extends I {
        get name() {
          return "webtransport";
        }
        doOpen() {
          try {
            this._transport = new WebTransport(
              this.createUri("https"),
              this.opts.transportOptions[this.name]
            );
          } catch (t) {
            return this.emitReserved("error", t);
          }
          this._transport.closed
            .then(() => {
              this.onClose();
            })
            .catch((t) => {
              this.onError("webtransport error", t);
            }),
            this._transport.ready.then(() => {
              this._transport.createBidirectionalStream().then((t) => {
                let e = (function (t, e) {
                    n || (n = new TextDecoder());
                    let i = [],
                      r = 0,
                      s = -1,
                      o = !1;
                    return new TransformStream({
                      transform(a, l) {
                        for (i.push(a); ; ) {
                          if (0 === r) {
                            if (1 > E(i)) break;
                            let t = T(i, 1);
                            (o = (128 & t[0]) == 128),
                              (r =
                                (s = 127 & t[0]) < 126 ? 3 : 126 === s ? 1 : 2);
                          } else if (1 === r) {
                            if (2 > E(i)) break;
                            let t = T(i, 2);
                            (s = new DataView(
                              t.buffer,
                              t.byteOffset,
                              t.length
                            ).getUint16(0)),
                              (r = 3);
                          } else if (2 === r) {
                            if (8 > E(i)) break;
                            let t = T(i, 8),
                              e = new DataView(
                                t.buffer,
                                t.byteOffset,
                                t.length
                              ),
                              n = e.getUint32(0);
                            if (n > 2097151) {
                              l.enqueue(u);
                              break;
                            }
                            (s = 0x100000000 * n + e.getUint32(4)), (r = 3);
                          } else {
                            if (E(i) < s) break;
                            let t = T(i, s);
                            l.enqueue(_(o ? t : n.decode(t), e)), (r = 0);
                          }
                          if (0 === s || s > t) {
                            l.enqueue(u);
                            break;
                          }
                        }
                      },
                    });
                  })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                  i = t.readable.pipeThrough(e).getReader(),
                  s = new TransformStream({
                    transform(t, e) {
                      var i;
                      (i = (i) => {
                        let r;
                        let n = i.length;
                        if (n < 126)
                          new DataView((r = new Uint8Array(1)).buffer).setUint8(
                            0,
                            n
                          );
                        else if (n < 65536) {
                          let t = new DataView((r = new Uint8Array(3)).buffer);
                          t.setUint8(0, 126), t.setUint16(1, n);
                        } else {
                          let t = new DataView((r = new Uint8Array(9)).buffer);
                          t.setUint8(0, 127), t.setBigUint64(1, BigInt(n));
                        }
                        t.data && "string" != typeof t.data && (r[0] |= 128),
                          e.enqueue(r),
                          e.enqueue(i);
                      }),
                        h && t.data instanceof Blob
                          ? t.data.arrayBuffer().then(m).then(i)
                          : c && (t.data instanceof ArrayBuffer || d(t.data))
                          ? i(m(t.data))
                          : p(t, !1, (t) => {
                              r || (r = new TextEncoder()), i(r.encode(t));
                            });
                    },
                  });
                s.readable.pipeTo(t.writable),
                  (this._writer = s.writable.getWriter());
                let o = () => {
                  i.read()
                    .then(({ done: t, value: e }) => {
                      t || (this.onPacket(e), o());
                    })
                    .catch((t) => {});
                };
                o();
                let a = { type: "open" };
                this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`),
                  this._writer.write(a).then(() => this.onOpen());
              });
            });
        }
        write(t) {
          this.writable = !1;
          for (let e = 0; e < t.length; e++) {
            let i = t[e],
              r = e === t.length - 1;
            this._writer.write(i).then(() => {
              r &&
                R(() => {
                  (this.writable = !0), this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          var t;
          null === (t = this._transport) || void 0 === t || t.close();
        }
      }
      let Z = { websocket: K, webtransport: J, polling: $ },
        Q =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        tt = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function te(t) {
        if (t.length > 8e3) throw "URI too long";
        let e = t,
          i = t.indexOf("["),
          r = t.indexOf("]");
        -1 != i &&
          -1 != r &&
          (t =
            t.substring(0, i) +
            t.substring(i, r).replace(/:/g, ";") +
            t.substring(r, t.length));
        let n = Q.exec(t || ""),
          s = {},
          o = 14;
        for (; o--; ) s[tt[o]] = n[o] || "";
        return (
          -1 != i &&
            -1 != r &&
            ((s.source = e),
            (s.host = s.host
              .substring(1, s.host.length - 1)
              .replace(/;/g, ":")),
            (s.authority = s.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (s.ipv6uri = !0)),
          (s.pathNames = (function (t, e) {
            let i = e.replace(/\/{2,9}/g, "/").split("/");
            return (
              ("/" == e.slice(0, 1) || 0 === e.length) && i.splice(0, 1),
              "/" == e.slice(-1) && i.splice(i.length - 1, 1),
              i
            );
          })(0, s.path)),
          (s.queryKey = (function (t, e) {
            let i = {};
            return (
              e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, r) {
                e && (i[e] = r);
              }),
              i
            );
          })(0, s.query)),
          s
        );
      }
      let ti =
          "function" == typeof addEventListener &&
          "function" == typeof removeEventListener,
        tr = [];
      ti &&
        addEventListener(
          "offline",
          () => {
            tr.forEach((t) => t());
          },
          !1
        );
      class tn extends A {
        constructor(t, e) {
          if (
            (super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            (this._prevBufferLen = 0),
            (this._pingInterval = -1),
            (this._pingTimeout = -1),
            (this._maxPayload = -1),
            (this._pingTimeoutTime = 1 / 0),
            t && "object" == typeof t && ((e = t), (t = null)),
            t)
          ) {
            let i = te(t);
            (e.hostname = i.host),
              (e.secure = "https" === i.protocol || "wss" === i.protocol),
              (e.port = i.port),
              i.query && (e.query = i.query);
          } else e.host && (e.hostname = te(e.host).host);
          j(this, e),
            (this.secure =
              null != e.secure
                ? e.secure
                : "undefined" != typeof location &&
                  "https:" === location.protocol),
            e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
            (this.hostname =
              e.hostname ||
              ("undefined" != typeof location
                ? location.hostname
                : "localhost")),
            (this.port =
              e.port ||
              ("undefined" != typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = []),
            (this._transportsByName = {}),
            e.transports.forEach((t) => {
              let e = t.prototype.name;
              this.transports.push(e), (this._transportsByName[e] = t);
            }),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              e
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" == typeof this.opts.query &&
              (this.opts.query = (function (t) {
                let e = {},
                  i = t.split("&");
                for (let t = 0, r = i.length; t < r; t++) {
                  let r = i[t].split("=");
                  e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
                }
                return e;
              })(this.opts.query)),
            ti &&
              (this.opts.closeOnBeforeunload &&
                ((this._beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this._beforeunloadEventListener,
                  !1
                )),
              "localhost" !== this.hostname &&
                ((this._offlineEventListener = () => {
                  this._onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                tr.push(this._offlineEventListener))),
            this.opts.withCredentials && (this._cookieJar = void 0),
            this._open();
        }
        createTransport(t) {
          let e = Object.assign({}, this.opts.query);
          (e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id);
          let i = Object.assign(
            {},
            this.opts,
            {
              query: e,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[t]
          );
          return new this._transportsByName[t](i);
        }
        _open() {
          if (0 === this.transports.length) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          }
          let t =
            this.opts.rememberUpgrade &&
            tn.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
              ? "websocket"
              : this.transports[0];
          this.readyState = "opening";
          let e = this.createTransport(t);
          e.open(), this.setTransport(e);
        }
        setTransport(t) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
              .on("drain", this._onDrain.bind(this))
              .on("packet", this._onPacket.bind(this))
              .on("error", this._onError.bind(this))
              .on("close", (t) => this._onClose("transport close", t));
        }
        onOpen() {
          (this.readyState = "open"),
            (tn.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush();
        }
        _onPacket(t) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", t),
              this.emitReserved("heartbeat"),
              t.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
              case "ping":
                this._sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong"),
                  this._resetPingTimeout();
                break;
              case "error":
                let e = Error("server error");
                (e.code = t.data), this._onError(e);
                break;
              case "message":
                this.emitReserved("data", t.data),
                  this.emitReserved("message", t.data);
            }
        }
        onHandshake(t) {
          this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this._pingInterval = t.pingInterval),
            (this._pingTimeout = t.pingTimeout),
            (this._maxPayload = t.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this._resetPingTimeout();
        }
        _resetPingTimeout() {
          this.clearTimeoutFn(this._pingTimeoutTimer);
          let t = this._pingInterval + this._pingTimeout;
          (this._pingTimeoutTime = Date.now() + t),
            (this._pingTimeoutTimer = this.setTimeoutFn(() => {
              this._onClose("ping timeout");
            }, t)),
            this.opts.autoUnref && this._pingTimeoutTimer.unref();
        }
        _onDrain() {
          this.writeBuffer.splice(0, this._prevBufferLen),
            (this._prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            let t = this._getWritablePackets();
            this.transport.send(t),
              (this._prevBufferLen = t.length),
              this.emitReserved("flush");
          }
        }
        _getWritablePackets() {
          if (
            !(
              this._maxPayload &&
              "polling" === this.transport.name &&
              this.writeBuffer.length > 1
            )
          )
            return this.writeBuffer;
          let t = 1;
          for (let e = 0; e < this.writeBuffer.length; e++) {
            let i = this.writeBuffer[e].data;
            if (
              (i &&
                (t +=
                  "string" == typeof i
                    ? (function (t) {
                        let e = 0,
                          i = 0;
                        for (let r = 0, n = t.length; r < n; r++)
                          (e = t.charCodeAt(r)) < 128
                            ? (i += 1)
                            : e < 2048
                            ? (i += 2)
                            : e < 55296 || e >= 57344
                            ? (i += 3)
                            : (r++, (i += 4));
                        return i;
                      })(i)
                    : Math.ceil(1.33 * (i.byteLength || i.size))),
              e > 0 && t > this._maxPayload)
            )
              return this.writeBuffer.slice(0, e);
            t += 2;
          }
          return this.writeBuffer;
        }
        _hasPingExpired() {
          if (!this._pingTimeoutTime) return !0;
          let t = Date.now() > this._pingTimeoutTime;
          return (
            t &&
              ((this._pingTimeoutTime = 0),
              R(() => {
                this._onClose("ping timeout");
              }, this.setTimeoutFn)),
            t
          );
        }
        write(t, e, i) {
          return this._sendPacket("message", t, e, i), this;
        }
        send(t, e, i) {
          return this._sendPacket("message", t, e, i), this;
        }
        _sendPacket(t, e, i, r) {
          if (
            ("function" == typeof e && ((r = e), (e = void 0)),
            "function" == typeof i && ((r = i), (i = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (i = i || {}).compress = !1 !== i.compress;
          let n = { type: t, data: e, options: i };
          this.emitReserved("packetCreate", n),
            this.writeBuffer.push(n),
            r && this.once("flush", r),
            this.flush();
        }
        close() {
          let t = () => {
              this._onClose("forced close"), this.transport.close();
            },
            e = () => {
              this.off("upgrade", e), this.off("upgradeError", e), t();
            },
            i = () => {
              this.once("upgrade", e), this.once("upgradeError", e);
            };
          return (
            ("opening" === this.readyState || "open" === this.readyState) &&
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? i() : t();
                  })
                : this.upgrading
                ? i()
                : t()),
            this
          );
        }
        _onError(t) {
          if (
            ((tn.priorWebsocketSuccess = !1),
            this.opts.tryAllTransports &&
              this.transports.length > 1 &&
              "opening" === this.readyState)
          )
            return this.transports.shift(), this._open();
          this.emitReserved("error", t), this._onClose("transport error", t);
        }
        _onClose(t, e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          ) {
            if (
              (this.clearTimeoutFn(this._pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              ti &&
                (this._beforeunloadEventListener &&
                  removeEventListener(
                    "beforeunload",
                    this._beforeunloadEventListener,
                    !1
                  ),
                this._offlineEventListener))
            ) {
              let t = tr.indexOf(this._offlineEventListener);
              -1 !== t && tr.splice(t, 1);
            }
            (this.readyState = "closed"),
              (this.id = null),
              this.emitReserved("close", t, e),
              (this.writeBuffer = []),
              (this._prevBufferLen = 0);
          }
        }
      }
      tn.protocol = 4;
      class ts extends tn {
        constructor() {
          super(...arguments), (this._upgrades = []);
        }
        onOpen() {
          if ((super.onOpen(), "open" === this.readyState && this.opts.upgrade))
            for (let t = 0; t < this._upgrades.length; t++)
              this._probe(this._upgrades[t]);
        }
        _probe(t) {
          let e = this.createTransport(t),
            i = !1;
          tn.priorWebsocketSuccess = !1;
          let r = () => {
            i ||
              (e.send([{ type: "ping", data: "probe" }]),
              e.once("packet", (t) => {
                if (!i) {
                  if ("pong" === t.type && "probe" === t.data)
                    (this.upgrading = !0),
                      this.emitReserved("upgrading", e),
                      e &&
                        ((tn.priorWebsocketSuccess = "websocket" === e.name),
                        this.transport.pause(() => {
                          i ||
                            "closed" === this.readyState ||
                            (u(),
                            this.setTransport(e),
                            e.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", e),
                            (e = null),
                            (this.upgrading = !1),
                            this.flush());
                        }));
                  else {
                    let t = Error("probe error");
                    (t.transport = e.name),
                      this.emitReserved("upgradeError", t);
                  }
                }
              }));
          };
          function n() {
            i || ((i = !0), u(), e.close(), (e = null));
          }
          let s = (t) => {
            let i = Error("probe error: " + t);
            (i.transport = e.name), n(), this.emitReserved("upgradeError", i);
          };
          function o() {
            s("transport closed");
          }
          function a() {
            s("socket closed");
          }
          function l(t) {
            e && t.name !== e.name && n();
          }
          let u = () => {
            e.removeListener("open", r),
              e.removeListener("error", s),
              e.removeListener("close", o),
              this.off("close", a),
              this.off("upgrading", l);
          };
          e.once("open", r),
            e.once("error", s),
            e.once("close", o),
            this.once("close", a),
            this.once("upgrading", l),
            -1 !== this._upgrades.indexOf("webtransport") &&
            "webtransport" !== t
              ? this.setTimeoutFn(() => {
                  i || e.open();
                }, 200)
              : e.open();
        }
        onHandshake(t) {
          (this._upgrades = this._filterUpgrades(t.upgrades)),
            super.onHandshake(t);
        }
        _filterUpgrades(t) {
          let e = [];
          for (let i = 0; i < t.length; i++)
            ~this.transports.indexOf(t[i]) && e.push(t[i]);
          return e;
        }
      }
      class to extends ts {
        constructor(t, e = {}) {
          let i = "object" == typeof t ? t : e;
          (!i.transports ||
            (i.transports && "string" == typeof i.transports[0])) &&
            (i.transports = (
              i.transports || ["polling", "websocket", "webtransport"]
            )
              .map((t) => Z[t])
              .filter((t) => !!t)),
            super(t, i);
        }
      }
      to.protocol;
      let ta = "function" == typeof ArrayBuffer,
        tl = (t) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t.buffer instanceof ArrayBuffer,
        tu = Object.prototype.toString,
        th =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === tu.call(Blob)),
        tc =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === tu.call(File));
      function td(t) {
        return (
          (ta && (t instanceof ArrayBuffer || tl(t))) ||
          (th && t instanceof Blob) ||
          (tc && t instanceof File)
        );
      }
      let tp = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        tf = 5;
      !(function (t) {
        (t[(t.CONNECT = 0)] = "CONNECT"),
          (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
          (t[(t.EVENT = 2)] = "EVENT"),
          (t[(t.ACK = 3)] = "ACK"),
          (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
      })(s || (s = {}));
      class tm {
        constructor(t) {
          this.replacer = t;
        }
        encode(t) {
          return (t.type === s.EVENT || t.type === s.ACK) &&
            (function t(e, i) {
              if (!e || "object" != typeof e) return !1;
              if (Array.isArray(e)) {
                for (let i = 0, r = e.length; i < r; i++)
                  if (t(e[i])) return !0;
                return !1;
              }
              if (td(e)) return !0;
              if (
                e.toJSON &&
                "function" == typeof e.toJSON &&
                1 == arguments.length
              )
                return t(e.toJSON(), !0);
              for (let i in e)
                if (Object.prototype.hasOwnProperty.call(e, i) && t(e[i]))
                  return !0;
              return !1;
            })(t)
            ? this.encodeAsBinary({
                type: t.type === s.EVENT ? s.BINARY_EVENT : s.BINARY_ACK,
                nsp: t.nsp,
                data: t.data,
                id: t.id,
              })
            : [this.encodeAsString(t)];
        }
        encodeAsString(t) {
          let e = "" + t.type;
          return (
            (t.type === s.BINARY_EVENT || t.type === s.BINARY_ACK) &&
              (e += t.attachments + "-"),
            t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
            null != t.id && (e += t.id),
            null != t.data && (e += JSON.stringify(t.data, this.replacer)),
            e
          );
        }
        encodeAsBinary(t) {
          let e = (function (t) {
              let e = [],
                i = t.data;
              return (
                (t.data = (function t(e, i) {
                  if (!e) return e;
                  if (td(e)) {
                    let t = { _placeholder: !0, num: i.length };
                    return i.push(e), t;
                  }
                  if (Array.isArray(e)) {
                    let r = Array(e.length);
                    for (let n = 0; n < e.length; n++) r[n] = t(e[n], i);
                    return r;
                  }
                  if ("object" == typeof e && !(e instanceof Date)) {
                    let r = {};
                    for (let n in e)
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (r[n] = t(e[n], i));
                    return r;
                  }
                  return e;
                })(i, e)),
                (t.attachments = e.length),
                { packet: t, buffers: e }
              );
            })(t),
            i = this.encodeAsString(e.packet),
            r = e.buffers;
          return r.unshift(i), r;
        }
      }
      function tg(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      class ty extends A {
        constructor(t) {
          super(), (this.reviver = t);
        }
        add(t) {
          let e;
          if ("string" == typeof t) {
            if (this.reconstructor)
              throw Error("got plaintext data when reconstructing a packet");
            let i = (e = this.decodeString(t)).type === s.BINARY_EVENT;
            i || e.type === s.BINARY_ACK
              ? ((e.type = i ? s.EVENT : s.ACK),
                (this.reconstructor = new tv(e)),
                0 === e.attachments && super.emitReserved("decoded", e))
              : super.emitReserved("decoded", e);
          } else if (td(t) || t.base64) {
            if (this.reconstructor)
              (e = this.reconstructor.takeBinaryData(t)) &&
                ((this.reconstructor = null), super.emitReserved("decoded", e));
            else
              throw Error("got binary data when not reconstructing a packet");
          } else throw Error("Unknown type: " + t);
        }
        decodeString(t) {
          let e = 0,
            i = { type: Number(t.charAt(0)) };
          if (void 0 === s[i.type])
            throw Error("unknown packet type " + i.type);
          if (i.type === s.BINARY_EVENT || i.type === s.BINARY_ACK) {
            let r = e + 1;
            for (; "-" !== t.charAt(++e) && e != t.length; );
            let n = t.substring(r, e);
            if (n != Number(n) || "-" !== t.charAt(e))
              throw Error("Illegal attachments");
            i.attachments = Number(n);
          }
          if ("/" === t.charAt(e + 1)) {
            let r = e + 1;
            for (; ++e && "," !== t.charAt(e) && e !== t.length; );
            i.nsp = t.substring(r, e);
          } else i.nsp = "/";
          let r = t.charAt(e + 1);
          if ("" !== r && Number(r) == r) {
            let r = e + 1;
            for (; ++e; ) {
              let i = t.charAt(e);
              if (null == i || Number(i) != i) {
                --e;
                break;
              }
              if (e === t.length) break;
            }
            i.id = Number(t.substring(r, e + 1));
          }
          if (t.charAt(++e)) {
            let r = this.tryParse(t.substr(e));
            if (ty.isPayloadValid(i.type, r)) i.data = r;
            else throw Error("invalid payload");
          }
          return i;
        }
        tryParse(t) {
          try {
            return JSON.parse(t, this.reviver);
          } catch (t) {
            return !1;
          }
        }
        static isPayloadValid(t, e) {
          switch (t) {
            case s.CONNECT:
              return tg(e);
            case s.DISCONNECT:
              return void 0 === e;
            case s.CONNECT_ERROR:
              return "string" == typeof e || tg(e);
            case s.EVENT:
            case s.BINARY_EVENT:
              return (
                Array.isArray(e) &&
                ("number" == typeof e[0] ||
                  ("string" == typeof e[0] && -1 === tp.indexOf(e[0])))
              );
            case s.ACK:
            case s.BINARY_ACK:
              return Array.isArray(e);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class tv {
        constructor(t) {
          (this.packet = t), (this.buffers = []), (this.reconPack = t);
        }
        takeBinaryData(t) {
          if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
          ) {
            var e, i;
            let t =
              ((e = this.reconPack),
              (i = this.buffers),
              (e.data = (function t(e, i) {
                if (!e) return e;
                if (e && !0 === e._placeholder) {
                  if (
                    "number" == typeof e.num &&
                    e.num >= 0 &&
                    e.num < i.length
                  )
                    return i[e.num];
                  throw Error("illegal attachments");
                }
                if (Array.isArray(e))
                  for (let r = 0; r < e.length; r++) e[r] = t(e[r], i);
                else if ("object" == typeof e)
                  for (let r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                      (e[r] = t(e[r], i));
                return e;
              })(e.data, i)),
              delete e.attachments,
              e);
            return this.finishedReconstruction(), t;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function tb(t, e, i) {
        return (
          t.on(e, i),
          function () {
            t.off(e, i);
          }
        );
      }
      let t_ = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class tw extends A {
        constructor(t, e, i) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = e),
            i && i.auth && (this.auth = i.auth),
            (this._opts = Object.assign({}, i)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          let t = this.io;
          this.subs = [
            tb(t, "open", this.onopen.bind(this)),
            tb(t, "packet", this.onpacket.bind(this)),
            tb(t, "error", this.onerror.bind(this)),
            tb(t, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send(...t) {
          return t.unshift("message"), this.emit.apply(this, t), this;
        }
        emit(t, ...e) {
          var i, r, n;
          if (t_.hasOwnProperty(t))
            throw Error('"' + t.toString() + '" is a reserved event name');
          if (
            (e.unshift(t),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(e), this;
          let o = { type: s.EVENT, data: e };
          if (
            ((o.options = {}),
            (o.options.compress = !1 !== this.flags.compress),
            "function" == typeof e[e.length - 1])
          ) {
            let t = this.ids++,
              i = e.pop();
            this._registerAckCallback(t, i), (o.id = t);
          }
          let a =
              null ===
                (r =
                  null === (i = this.io.engine) || void 0 === i
                    ? void 0
                    : i.transport) || void 0 === r
                ? void 0
                : r.writable,
            l =
              this.connected &&
              !(null === (n = this.io.engine) || void 0 === n
                ? void 0
                : n._hasPingExpired());
          return (
            (this.flags.volatile && !a) ||
              (l
                ? (this.notifyOutgoingListeners(o), this.packet(o))
                : this.sendBuffer.push(o)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(t, e) {
          var i;
          let r =
            null !== (i = this.flags.timeout) && void 0 !== i
              ? i
              : this._opts.ackTimeout;
          if (void 0 === r) {
            this.acks[t] = e;
            return;
          }
          let n = this.io.setTimeoutFn(() => {
              delete this.acks[t];
              for (let e = 0; e < this.sendBuffer.length; e++)
                this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
              e.call(this, Error("operation has timed out"));
            }, r),
            s = (...t) => {
              this.io.clearTimeoutFn(n), e.apply(this, t);
            };
          (s.withError = !0), (this.acks[t] = s);
        }
        emitWithAck(t, ...e) {
          return new Promise((i, r) => {
            let n = (t, e) => (t ? r(t) : i(e));
            (n.withError = !0), e.push(n), this.emit(t, ...e);
          });
        }
        _addToQueue(t) {
          let e;
          "function" == typeof t[t.length - 1] && (e = t.pop());
          let i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          t.push((t, ...r) => {
            if (i === this._queue[0])
              return (
                null !== t
                  ? i.tryCount > this._opts.retries &&
                    (this._queue.shift(), e && e(t))
                  : (this._queue.shift(), e && e(null, ...r)),
                (i.pending = !1),
                this._drainQueue()
              );
          }),
            this._queue.push(i),
            this._drainQueue();
        }
        _drainQueue(t = !1) {
          if (!this.connected || 0 === this._queue.length) return;
          let e = this._queue[0];
          (!e.pending || t) &&
            ((e.pending = !0),
            e.tryCount++,
            (this.flags = e.flags),
            this.emit.apply(this, e.args));
        }
        packet(t) {
          (t.nsp = this.nsp), this.io._packet(t);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((t) => {
                this._sendConnectPacket(t);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(t) {
          this.packet({
            type: s.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
              : t,
          });
        }
        onerror(t) {
          this.connected || this.emitReserved("connect_error", t);
        }
        onclose(t, e) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, e),
            this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach((t) => {
            if (!this.sendBuffer.some((e) => String(e.id) === t)) {
              let e = this.acks[t];
              delete this.acks[t],
                e.withError &&
                  e.call(this, Error("socket has been disconnected"));
            }
          });
        }
        onpacket(t) {
          if (!(t.nsp !== this.nsp))
            switch (t.type) {
              case s.CONNECT:
                t.data && t.data.sid
                  ? this.onconnect(t.data.sid, t.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case s.EVENT:
              case s.BINARY_EVENT:
                this.onevent(t);
                break;
              case s.ACK:
              case s.BINARY_ACK:
                this.onack(t);
                break;
              case s.DISCONNECT:
                this.ondisconnect();
                break;
              case s.CONNECT_ERROR:
                this.destroy();
                let e = Error(t.data.message);
                (e.data = t.data.data), this.emitReserved("connect_error", e);
            }
        }
        onevent(t) {
          let e = t.data || [];
          null != t.id && e.push(this.ack(t.id)),
            this.connected
              ? this.emitEvent(e)
              : this.receiveBuffer.push(Object.freeze(e));
        }
        emitEvent(t) {
          if (this._anyListeners && this._anyListeners.length)
            for (let e of this._anyListeners.slice()) e.apply(this, t);
          super.emit.apply(this, t),
            this._pid &&
              t.length &&
              "string" == typeof t[t.length - 1] &&
              (this._lastOffset = t[t.length - 1]);
        }
        ack(t) {
          let e = this,
            i = !1;
          return function (...r) {
            i || ((i = !0), e.packet({ type: s.ACK, id: t, data: r }));
          };
        }
        onack(t) {
          let e = this.acks[t.id];
          "function" == typeof e &&
            (delete this.acks[t.id],
            e.withError && t.data.unshift(null),
            e.apply(this, t.data));
        }
        onconnect(t, e) {
          (this.id = t),
            (this.recovered = e && this._pid === e),
            (this._pid = e),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
              this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: s.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(t) {
          return (this.flags.compress = t), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(t) {
          return (this.flags.timeout = t), this;
        }
        onAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
          );
        }
        prependAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
          );
        }
        offAny(t) {
          if (!this._anyListeners) return this;
          if (t) {
            let e = this._anyListeners;
            for (let i = 0; i < e.length; i++)
              if (t === e[i]) {
                e.splice(i, 1);
                break;
              }
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
          );
        }
        prependAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
          );
        }
        offAnyOutgoing(t) {
          if (!this._anyOutgoingListeners) return this;
          if (t) {
            let e = this._anyOutgoingListeners;
            for (let i = 0; i < e.length; i++)
              if (t === e[i]) {
                e.splice(i, 1);
                break;
              }
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(t) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length)
            for (let e of this._anyOutgoingListeners.slice())
              e.apply(this, t.data);
        }
      }
      function tx(t) {
        (t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0);
      }
      (tx.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var e = Math.random(),
            i = Math.floor(e * this.jitter * t);
          t = (1 & Math.floor(10 * e)) == 0 ? t - i : t + i;
        }
        return 0 | Math.min(t, this.max);
      }),
        (tx.prototype.reset = function () {
          this.attempts = 0;
        }),
        (tx.prototype.setMin = function (t) {
          this.ms = t;
        }),
        (tx.prototype.setMax = function (t) {
          this.max = t;
        }),
        (tx.prototype.setJitter = function (t) {
          this.jitter = t;
        });
      class tP extends A {
        constructor(t, e) {
          var i;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && "object" == typeof t && ((e = t), (t = void 0)),
            ((e = e || {}).path = e.path || "/socket.io"),
            (this.opts = e),
            j(this, e),
            this.reconnection(!1 !== e.reconnection),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (i = e.randomizationFactor) && void 0 !== i ? i : 0.5
            ),
            (this.backoff = new tx({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
          let r = e.parser || o;
          (this.encoder = new r.Encoder()),
            (this.decoder = new r.Decoder()),
            (this._autoConnect = !1 !== e.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(t) {
          return arguments.length
            ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this)
            : this._reconnection;
        }
        reconnectionAttempts(t) {
          return void 0 === t
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
        }
        reconnectionDelay(t) {
          var e;
          return void 0 === t
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              null === (e = this.backoff) || void 0 === e || e.setMin(t),
              this);
        }
        randomizationFactor(t) {
          var e;
          return void 0 === t
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              null === (e = this.backoff) || void 0 === e || e.setJitter(t),
              this);
        }
        reconnectionDelayMax(t) {
          var e;
          return void 0 === t
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              null === (e = this.backoff) || void 0 === e || e.setMax(t),
              this);
        }
        timeout(t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(t) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new to(this.uri, this.opts);
          let e = this.engine,
            i = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          let r = tb(e, "open", function () {
              i.onopen(), t && t();
            }),
            n = (e) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", e),
                t ? t(e) : this.maybeReconnectOnOpen();
            },
            s = tb(e, "error", n);
          if (!1 !== this._timeout) {
            let t = this._timeout,
              i = this.setTimeoutFn(() => {
                r(), n(Error("timeout")), e.close();
              }, t);
            this.opts.autoUnref && i.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(i);
              });
          }
          return this.subs.push(r), this.subs.push(s), this;
        }
        connect(t) {
          return this.open(t);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          let t = this.engine;
          this.subs.push(
            tb(t, "ping", this.onping.bind(this)),
            tb(t, "data", this.ondata.bind(this)),
            tb(t, "error", this.onerror.bind(this)),
            tb(t, "close", this.onclose.bind(this)),
            tb(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(t) {
          try {
            this.decoder.add(t);
          } catch (t) {
            this.onclose("parse error", t);
          }
        }
        ondecoded(t) {
          R(() => {
            this.emitReserved("packet", t);
          }, this.setTimeoutFn);
        }
        onerror(t) {
          this.emitReserved("error", t);
        }
        socket(t, e) {
          let i = this.nsps[t];
          return (
            i
              ? this._autoConnect && !i.active && i.connect()
              : ((i = new tw(this, t, e)), (this.nsps[t] = i)),
            i
          );
        }
        _destroy(t) {
          for (let t of Object.keys(this.nsps)) if (this.nsps[t].active) return;
          this._close();
        }
        _packet(t) {
          let e = this.encoder.encode(t);
          for (let i = 0; i < e.length; i++) this.engine.write(e[i], t.options);
        }
        cleanup() {
          this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close");
        }
        disconnect() {
          return this._close();
        }
        onclose(t, e) {
          var i;
          this.cleanup(),
            null === (i = this.engine) || void 0 === i || i.close(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, e),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          let t = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            let e = this.backoff.duration();
            this._reconnecting = !0;
            let i = this.setTimeoutFn(() => {
              !t.skipReconnect &&
                (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                t.skipReconnect ||
                  t.open((e) => {
                    e
                      ? ((t._reconnecting = !1),
                        t.reconnect(),
                        this.emitReserved("reconnect_error", e))
                      : t.onreconnect();
                  }));
            }, e);
            this.opts.autoUnref && i.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(i);
              });
          }
        }
        onreconnect() {
          let t = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
        }
      }
      let tS = {};
      function tE(t, e) {
        let i;
        "object" == typeof t && ((e = t), (t = void 0));
        let r = (function (t, e = "", i) {
            let r = t;
            (i = i || ("undefined" != typeof location && location)),
              null == t && (t = i.protocol + "//" + i.host),
              "string" == typeof t &&
                ("/" === t.charAt(0) &&
                  (t = "/" === t.charAt(1) ? i.protocol + t : i.host + t),
                /^(https?|wss?):\/\//.test(t) ||
                  (t = void 0 !== i ? i.protocol + "//" + t : "https://" + t),
                (r = te(t))),
              !r.port &&
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            let n = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + n + ":" + r.port + e),
              (r.href =
                r.protocol +
                "://" +
                n +
                (i && i.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(t, (e = e || {}).path || "/socket.io"),
          n = r.source,
          s = r.id,
          o = r.path,
          a = tS[s] && o in tS[s].nsps;
        return (
          e.forceNew || e["force new connection"] || !1 === e.multiplex || a
            ? (i = new tP(n, e))
            : (tS[s] || (tS[s] = new tP(n, e)), (i = tS[s])),
          r.query && !e.query && (e.query = r.queryKey),
          i.socket(r.path, e)
        );
      }
      Object.assign(tE, { Manager: tP, Socket: tw, io: tE, connect: tE });
    },
  },
]);
