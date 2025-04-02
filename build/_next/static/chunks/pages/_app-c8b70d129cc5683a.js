(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    92: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(303);
        },
      ]);
    },
    290: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return l.ReadonlyURLSearchParams;
          },
          RedirectType: function () {
            return l.RedirectType;
          },
          ServerInsertedHTMLContext: function () {
            return u.ServerInsertedHTMLContext;
          },
          forbidden: function () {
            return l.forbidden;
          },
          notFound: function () {
            return l.notFound;
          },
          permanentRedirect: function () {
            return l.permanentRedirect;
          },
          redirect: function () {
            return l.redirect;
          },
          unauthorized: function () {
            return l.unauthorized;
          },
          unstable_rethrow: function () {
            return l.unstable_rethrow;
          },
          useParams: function () {
            return h;
          },
          usePathname: function () {
            return f;
          },
          useRouter: function () {
            return p;
          },
          useSearchParams: function () {
            return d;
          },
          useSelectedLayoutSegment: function () {
            return m;
          },
          useSelectedLayoutSegments: function () {
            return g;
          },
          useServerInsertedHTML: function () {
            return u.useServerInsertedHTML;
          },
        });
      let n = r(4232),
        o = r(2850),
        a = r(5931),
        i = r(1811),
        s = r(8714),
        l = r(8381),
        u = r(6029),
        c = void 0;
      function d() {
        let e = (0, n.useContext)(a.SearchParamsContext);
        return (0, n.useMemo)(
          () => (e ? new l.ReadonlyURLSearchParams(e) : null),
          [e],
        );
      }
      function f() {
        return (
          null == c || c("usePathname()"), (0, n.useContext)(a.PathnameContext)
        );
      }
      function p() {
        let e = (0, n.useContext)(o.AppRouterContext);
        if (null === e)
          throw Object.defineProperty(
            Error("invariant expected app router to be mounted"),
            "__NEXT_ERROR_CODE",
            { value: "E238", enumerable: !1, configurable: !0 },
          );
        return e;
      }
      function h() {
        return (
          null == c || c("useParams()"), (0, n.useContext)(a.PathParamsContext)
        );
      }
      function g(e) {
        void 0 === e && (e = "children"),
          null == c || c("useSelectedLayoutSegments()");
        let t = (0, n.useContext)(o.LayoutRouterContext);
        return t
          ? (function e(t, r, n, o) {
              let a;
              if ((void 0 === n && (n = !0), void 0 === o && (o = []), n))
                a = t[1][r];
              else {
                var l;
                let e = t[1];
                a = null != (l = e.children) ? l : Object.values(e)[0];
              }
              if (!a) return o;
              let u = a[0],
                c = (0, i.getSegmentValue)(u);
              return !c || c.startsWith(s.PAGE_SEGMENT_KEY)
                ? o
                : (o.push(c), e(a, r, !1, o));
            })(t.parentTree, e)
          : null;
      }
      function m(e) {
        void 0 === e && (e = "children"),
          null == c || c("useSelectedLayoutSegment()");
        let t = g(e);
        if (!t || 0 === t.length) return null;
        let r = "children" === e ? t[0] : t[t.length - 1];
        return r === s.DEFAULT_SEGMENT_KEY ? null : r;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    303: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => N });
      var n = r(7876),
        o = r(7328),
        a = r.n(o),
        i = r(5105),
        s = r.n(i),
        l = r(5200),
        u = r.n(l),
        c = r(3623),
        d = r.n(c),
        f = r(6769),
        p = r.n(f),
        h = r(4473),
        g = r.n(h),
        m = r(8581),
        v = r(1401),
        b = r(499);
      function _(e) {
        let { className: t } = e,
          r = (0, v.PZ)();
        return (0, n.jsx)("ul", {
          className: (0, b.cn)(g().links, t),
          children: r.map((e, t) => {
            let r = (function (e) {
              switch (e.toLowerCase()) {
                case "facebook":
                  return m.qd;
                case "github":
                  return m.p6;
                case "gitlab":
                  return m.BO;
                case "instagram":
                  return m.ir;
                case "linkedin":
                  return m.SA;
                case "x":
                  return m.Sn;
                case "xing":
                  return m.ul;
                case "youtube":
                  return m.rU;
                default:
                  return null;
              }
            })(e.icon);
            return (
              r &&
              (0, n.jsx)(
                "li",
                {
                  children: (0, n.jsx)("a", {
                    href: e.href,
                    className: g().link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, n.jsx)(r, { className: g().icon }),
                  }),
                },
                t,
              )
            );
          }),
        });
      }
      function w() {
        let e = (0, v.D1)();
        return (0, n.jsxs)("div", {
          className: p().footer,
          children: [
            (0, n.jsxs)("div", {
              className: p().branding,
              children: [
                (0, n.jsx)("img", {
                  src: e,
                  className: p().logo,
                  alt: (0, v.fj)(),
                }),
                (0, n.jsx)("p", {
                  className: p().description,
                  children: (0, v.p9)("footer"),
                }),
                (0, n.jsx)(_, { className: p().socialLinks }),
              ],
            }),
            (0, n.jsx)("a", {
              href: (0, v.jR)(),
              className: p().imprint,
              target: "_blank",
              children: (0, v.p9)("imprint"),
            }),
          ],
        });
      }
      var y = r(8230),
        j = r.n(y),
        x = r(4e3),
        O = r(7449),
        R = r.n(O);
      function P() {
        let e = (0, x.usePathname)(),
          t = (0, v.fj)(),
          r = (0, v.D1)();
        return (0, n.jsxs)(j(), {
          href: "/",
          className: (0, b.cn)(R().logo, "/" != e && R().small),
          children: [
            (0, n.jsx)("img", {
              src: r,
              className: (0, b.cn)(R().src),
              alt: t,
            }),
            (0, n.jsx)("span", { className: R().subline, children: t }),
          ],
        });
      }
      var E = r(9351),
        M = r.n(E),
        S = r(4855),
        C = r(1050),
        k = r(6154);
      function T() {
        return (0, n.jsx)("nav", {
          className: M().nav,
          children: (0, n.jsxs)("ul", {
            className: M().list,
            children: [
              (0, n.jsx)("li", {
                className: M().item,
                children: (0, n.jsxs)(j(), {
                  href: "/help-and-about-tech-radar",
                  children: [
                    (0, n.jsx)(C.A, { className: M().icon }),
                    (0, n.jsx)("span", {
                      className: M().label,
                      children: (0, v.p9)("pageAbout"),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("li", {
                className: M().item,
                children: (0, n.jsxs)(j(), {
                  href: "/overview",
                  children: [
                    (0, n.jsx)(S.A, { className: M().icon }),
                    (0, n.jsx)("span", {
                      className: M().label,
                      children: (0, v.p9)("pageOverview"),
                    }),
                  ],
                }),
              }),
              (0, v.JT)("showSearch") &&
                (0, n.jsx)("li", {
                  className: M().item,
                  children: (0, n.jsxs)(j(), {
                    href: "/overview",
                    children: [
                      (0, n.jsx)(k.A, { className: M().icon }),
                      (0, n.jsx)("span", {
                        className: M().label,
                        children: (0, v.p9)("pageSearch"),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      }
      let L = (e) => {
        let { children: t, layoutClass: r = "default" } = e;
        return (0, n.jsxs)("div", {
          id: "layout",
          className: (0, b.cn)(d().layout, u().className, d()[r]),
          children: [
            (0, n.jsxs)("header", {
              className: (0, b.cn)(d().container, d().header),
              children: [(0, n.jsx)(P, {}), (0, n.jsx)(T, {})],
            }),
            (0, n.jsx)("main", {
              className: (0, b.cn)(d().content),
              children: t,
            }),
            (0, n.jsx)("footer", {
              className: (0, b.cn)(d().container, d().footer),
              children: (0, n.jsx)(w, {}),
            }),
          ],
        });
      };
      var A = r(1945);
      function N(e) {
        let { Component: t, pageProps: r, router: o } = e,
          i = (0, v.JA)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(a(), {
              children: [
                (0, n.jsx)("title", { children: (0, A.Ef)() }),
                (0, n.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  href: (0, b.u)("/favicon.ico"),
                }),
              ],
            }),
            (0, n.jsxs)(L, {
              layoutClass: t.layoutClass,
              children: [
                (0, n.jsx)(t, { ...r }),
                i && (0, n.jsx)(s(), { src: i }),
              ],
            }),
          ],
        });
      }
      r(3740), r(8242), r(9596);
    },
    499: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => i, cn: () => a });
      var n = r(9870),
        o = r.n(n);
      function a() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (function () {
          for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
            (e = arguments[r]) &&
              (t = (function e(t) {
                var r,
                  n,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var a = t.length;
                    for (r = 0; r < a; r++)
                      t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                  } else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        })(t);
      }
      function i(e) {
        return /^https?:/.test(e) || !o().basePath
          ? e
          : (e.startsWith("/") || (e = "/" + e),
            "".concat(o().basePath).concat(e));
      }
    },
    722: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            d: "m18.7 1.4-7.68 7.73-7.67-7.72c-.54-.54-1.4-.54-1.89 0-.54.54-.54 1.41 0 1.89l7.67 7.73L1.4 18.7c-.54.54-.54 1.41 0 1.89.54.54 1.41.54 1.89 0l7.73-7.68 7.68 7.68c.54.54 1.41.54 1.89 0 .49-.54.54-1.41 0-1.89l-7.68-7.68 7.68-7.67c.54-.54.54-1.4 0-1.89-.48-.54-1.35-.54-1.89-.06",
          }),
        });
    },
    1050: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M11 22C4.9 22 0 17 0 11S4.9 0 11 0c6 0 11 4.9 11 11s-5 11-11 11m0-20.5c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5 9.5-4.2 9.5-9.5-4.3-9.5-9.5-9.5",
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              d: "M11 16.65c-.7 0-1.2-.5-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.5 1.2-1.2 1.2m2.8-6.9c-.1.2-.3.4-.4.5l-.4.4c-.2.1-.3.3-.4.4l-.3.3c-.2.3-.3.6-.3 1v.7h-1.8v-1c0-.3 0-.6.2-.9s.4-.6.7-.8l1.1-1.1c.2-.3.4-.6.4-1s-.1-.7-.4-.9-.6-.4-1-.4-.7.1-1 .4-.4.6-.5 1h-2c.1-.8.5-1.6 1.1-2.2.7-.5 1.5-.8 2.3-.8s1.6.2 2.3.8q.9.75.9 2.1c0 .5-.2 1-.5 1.5",
            }),
          ],
        });
    },
    1312: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(4232),
        o = r(6959),
        a = "function" == typeof IntersectionObserver,
        i = new Map(),
        s = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          u = l || !a,
          [c, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (a) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = s.find(
                        (e) => e.root === r.root && e.margin === r.margin,
                      );
                    if (n && (t = i.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      s.push(r),
                      i.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), i.delete(n);
                        let e = s.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin,
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, f.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1401: (e, t, r) => {
      "use strict";
      r.d(t, {
        fj: () => f,
        NJ: () => g,
        Oc: () => O,
        jB: () => v,
        QO: () => m,
        FN: () => b,
        jR: () => M,
        Gq: () => S,
        JS: () => E,
        JA: () => h,
        p9: () => u,
        D1: () => p,
        rU: () => P,
        U5: () => R,
        nh: () => y,
        nn: () => w,
        ej: () => _,
        l1: () => d,
        PZ: () => j,
        Q2: () => x,
        JT: () => c,
        Dp: () => T,
        ZH: () => k,
        f0: () => C,
      });
      let n = JSON.parse(
          '{"D8":["2017-03-01","2024-03-01"],"_A":["backend","coding","frontend","new"],"ld":[{"id":"demo-1","release":"2017-03-01","title":"Demo 1","ring":"assess","quadrant":"methods-and-patterns","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n<pre><code class=\\"hljs language-tsx\\"><span class=\\"hljs-comment\\">// code higlighting works too</span>\\n<span class=\\"hljs-keyword\\">const</span> <span class=\\"hljs-keyword\\">var</span> = <span class=\\"hljs-string\\">&#x27;Hello World!&#x27;</span>\\n<span class=\\"hljs-variable language_\\">console</span>.<span class=\\"hljs-title function_\\">log</span>(<span class=\\"hljs-keyword\\">var</span>)\\n</code></pre>","featured":true,"flag":"default","tags":["coding"],"position":[682,240]},{"id":"demo-2","release":"2024-03-01","title":"Demo 2","ring":"adopt","quadrant":"platforms-and-operations","body":"<p>This is a revision of the 2nd demo item. It moved from trail to adopt.</p>\\n","featured":true,"flag":"changed","tags":["coding","backend"],"revisions":[{"release":"2017-03-01","ring":"trial","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n"}],"position":[292,537]},{"id":"demo-3","release":"2017-03-01","title":"Demo 3","ring":"hold","quadrant":"tools","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n","featured":true,"flag":"default","tags":["coding","frontend"],"position":[599,708]},{"id":"demo-4","release":"2024-03-01","title":"Demo 4","ring":"trial","quadrant":"languages-and-frameworks","body":"<p>This is a new demo entry. Items can <a href=\\"/techradar/methods-and-patterns/demo-1/\\">link</a> to other items and replaces the old links with a html extension to the new link structure, whereas a new <a href=\\"/techradar/methods-and-patterns/demo-1/\\">link</a> should be untouched.</p>\\n","featured":true,"flag":"new","tags":["new"],"position":[198,242]}]}',
        ),
        o = JSON.parse(
          '{"basePath":"/techradar","baseUrl":"","editUrl":"https://github.dev/AOEpeople/techradar/blob/main/radar/{release}/{id}.md","logoFile":"logo.svg","jsFile":"","toggles":{"showSearch":false,"showChart":true,"showTagFilter":true,"showQuadrantList":true,"showEmptyRings":false},"sections":["radar","tags","list"],"colors":{"foreground":"#fcf2e6","background":"#113521","highlight":"#d4a373","content":"#fff","text":"#575757","link":"#bc6c25","border":"rgba(255, 255, 255, 0.1)","tag":"rgba(255, 255, 255, 0.1)"},"quadrants":[{"id":"languages-and-frameworks","title":"Languages & Frameworks","description":"A selection of programming languages, alongside essential frameworks for building a variety of custom software.","color":"#a3b18a"},{"id":"methods-and-patterns","title":"Methods & Patterns","description":"Key software development methods and design patterns, covering everything from continuous integration and testing to architecture.","color":"#588157"},{"id":"platforms-and-operations","title":"Platforms & Operations","description":"Technologies and tools for software and infrastructure operations, including platforms and services for managing and scaling applications.","color":"#3f633e"},{"id":"tools","title":"Tools","description":"A range of software tools, from simple productivity enhancers to comprehensive project solutions, catering to various project needs.","color":"#40713f"}],"rings":[{"id":"adopt","title":"Adopt","description":"","color":"#588157","radius":0.5,"strokeWidth":5},{"id":"trial","title":"Trial","description":"","color":"#457b9d","radius":0.69,"strokeWidth":3},{"id":"assess","title":"Assess","description":"","color":"#bc6c25","radius":0.85,"strokeWidth":2},{"id":"hold","title":"Hold","description":"","color":"#d62828","radius":1,"strokeWidth":0.75}],"flags":{"new":{"color":"#f1235a","title":"New","titleShort":"N","description":"New in this version"},"changed":{"color":"#40a7d1","title":"Changed","titleShort":"C","description":"Recently changed"},"default":{"description":"Unchanged"}},"chart":{"size":800,"blipSize":12},"social":[{"href":"https://twitter.com/aoepeople","icon":"x"},{"href":"https://www.linkedin.com/company/aoe","icon":"linkedIn"},{"href":"https://www.xing.com/company/aoe","icon":"xing"},{"href":"https://github.com/aoepeople","icon":"github"}],"imprint":"https://www.aoe.com/en/imprint.html","labels":{"title":"Technology Radar","imprint":"Legal Information","quadrant":"Quadrant","quadrantOverview":"Quadrant Overview","zoomIn":"Zoom in","filterByTag":"Filter by Tag","footer":"The technology radar is a project by AOE GmbH. Feel free to build your own radar based on the open source project.","notUpdated":"This item was not updated in last three versions of the Radar. Should it have appeared in one of the more recent editions, there is a good chance it remains pertinent. However, if the item dates back further, its relevance may have diminished and our current evaluation could vary. Regrettably, our capacity to consistently revisit items from past Radar editions is limited.","notFound":"404 - Page not found","pageAbout":"How to use AOE Technology Radar?","pageOverview":"Technologies Overview","pageSearch":"Search","searchPlaceholder":"What are you looking for?","metaDescription":""},"fuzzySearch":{"threshold":0.4,"distance":600,"ignoreLocation":false,"includeScore":true}}',
        );
      var a = r(2844);
      let i = { ...o, ...a };
      a.colors && (i.colors = { ...o.colors, ...a.colors }),
        a.labels && (i.labels = { ...o.labels, ...a.labels }),
        a.toggles && (i.toggles = { ...o.toggles, ...a.toggles }),
        a.fuzzySearch &&
          (i.fuzzySearch = { ...o.fuzzySearch, ...a.fuzzySearch });
      var s = r(1945),
        l = r(499);
      function u(e) {
        return i.labels[e] || "";
      }
      function c(e) {
        return i.toggles[e] || !1;
      }
      function d() {
        return i.sections;
      }
      function f() {
        return u("title");
      }
      function p() {
        return (0, l.u)(i.logoFile);
      }
      function h() {
        return i.jsFile ? (0, l.u)(i.jsFile) : "";
      }
      function g() {
        return i.chart;
      }
      function m() {
        return i.flags;
      }
      function v(e) {
        return i.flags[e];
      }
      let b = () => i.fuzzySearch;
      function _() {
        return i.rings;
      }
      function w(e) {
        return _().find((t) => t.id === e);
      }
      function y() {
        return n.D8;
      }
      function j() {
        return i.social;
      }
      function x() {
        return n._A;
      }
      function O(e) {
        return i.editUrl ? (0, s.GP)(i.editUrl, e) : "";
      }
      function R() {
        return i.quadrants.map((e, t) => ({ ...e, position: t + 1 }));
      }
      function P(e) {
        return R().find((t) => t.id === e);
      }
      function E(e, t) {
        return n.ld.filter(
          (r) => (!e || r.quadrant === e) && !(t && !r.featured),
        );
      }
      function M() {
        return i.imprint;
      }
      function S(e) {
        return n.ld.find((t) => t.id === e);
      }
      let C = (e, t) =>
          Number(t.featured) - Number(e.featured) ||
          e.title.localeCompare(t.title),
        k = (e) => {
          let t = c("showEmptyRings");
          return _().reduce((r, n) => {
            let o = e.filter((e) => e.ring === n.id);
            return (o.length || t) && (r[n.id] = o), r;
          }, {});
        },
        T = (e) =>
          R().reduce((t, r) => {
            let n = e.filter((e) => e.quadrant === r.id);
            return n.length && (t[r.id] = n), t;
          }, {});
    },
    1811: (e, t) => {
      "use strict";
      function r(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1945: (e, t, r) => {
      "use strict";
      r.d(t, { B9: () => i, Ef: () => a, GP: () => o });
      var n = r(1401);
      function o(e, t) {
        return e.replace(/{(\w+)}/g, (e, r) => t[r] || e);
      }
      function a() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return [...t, (0, n.fj)()].join(" | ");
      }
      function i(e) {
        return new Date(e).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
      }
    },
    2684: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(4252)._(r(4232)).default.createContext({});
    },
    2844: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"basePath":"/techradar","baseUrl":"","editUrl":"https://github.dev/AOEpeople/techradar/blob/main/radar/{release}/{id}.md","logoFile":"logo.svg","jsFile":"","toggles":{"showSearch":false,"showChart":true,"showTagFilter":true,"showQuadrantList":true,"showEmptyRings":false},"sections":["radar","tags","list"],"colors":{"foreground":"#fcf2e6","background":"#113521","highlight":"#d4a373","content":"#fff","text":"#575757","link":"#bc6c25","border":"rgba(255, 255, 255, 0.1)","tag":"rgba(255, 255, 255, 0.1)"},"quadrants":[{"id":"languages-and-frameworks","title":"Languages & Frameworks","description":"A selection of programming languages, alongside essential frameworks for building a variety of custom software.","color":"#a3b18a"},{"id":"methods-and-patterns","title":"Methods & Patterns","description":"Key software development methods and design patterns, covering everything from continuous integration and testing to architecture.","color":"#588157"},{"id":"platforms-and-operations","title":"Platforms & Operations","description":"Technologies and tools for software and infrastructure operations, including platforms and services for managing and scaling applications.","color":"#3f633e"},{"id":"tools","title":"Tools","description":"A range of software tools, from simple productivity enhancers to comprehensive project solutions, catering to various project needs.","color":"#40713f"}],"rings":[{"id":"adopt","title":"Adopt","description":"","color":"#588157","radius":0.5,"strokeWidth":5},{"id":"trial","title":"Trial","description":"","color":"#457b9d","radius":0.69,"strokeWidth":3},{"id":"assess","title":"Assess","description":"","color":"#bc6c25","radius":0.85,"strokeWidth":2},{"id":"hold","title":"Hold","description":"","color":"#d62828","radius":1,"strokeWidth":0.75}],"flags":{"new":{"color":"#f1235a","title":"New","titleShort":"N","description":"New in this version"},"changed":{"color":"#40a7d1","title":"Changed","titleShort":"C","description":"Recently changed"},"default":{"description":"Unchanged"}},"chart":{"size":800,"blipSize":12},"social":[{"href":"https://www.linkedin.com/in/david-rueffreck/","icon":"linkedIn"},{"href":"https://www.xing.com/profile/David_Rueffreck","icon":"xing"}],"imprint":"https://www.aoe.com/en/imprint.html","labels":{"title":"Technology Radar","imprint":"Legal Information","quadrant":"Quadrant","quadrantOverview":"Quadrant Overview","zoomIn":"Zoom in","filterByTag":"Filter by Tag","footer":"The technology radar is a project by AOE GmbH. Feel free to build your own radar based on the open source project.","notUpdated":"This item was not updated in last three versions of the Radar. Should it have appeared in one of the more recent editions, there is a good chance it remains pertinent. However, if the item dates back further, its relevance may have diminished and our current evaluation could vary. Regrettably, our capacity to consistently revisit items from past Radar editions is limited.","notFound":"404 - Page not found","pageAbout":"How to use AOE Technology Radar?","pageOverview":"Technologies Overview","pageSearch":"Search","searchPlaceholder":"What are you looking for?","metaDescription":""},"fuzzySearch":{"threshold":0.4,"distance":600,"ignoreLocation":false,"includeScore":true}}',
      );
    },
    3186: (e, t, r) => {
      "use strict";
      function n() {
        throw Object.defineProperty(
          Error(
            "`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E411", enumerable: !1, configurable: !0 },
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unauthorized", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(4181).HTTP_ERROR_FALLBACK_ERROR_CODE,
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3623: (e) => {
      e.exports = {
        layout: "Layout_layout__fvRCC",
        container: "Layout_container__BVtmP",
        header: "Layout_header__WZgfV",
        default: "Layout_default__M3545",
        content: "Layout_content__PrPCk",
      };
    },
    3740: () => {},
    3776: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(4232),
        o = n.useLayoutEffect,
        a = n.useEffect;
      function i(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function i() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean),
            );
            t.updateHead(r(o, e));
          }
        }
        return (
          o(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = i),
              () => {
                t && (t._pendingUpdate = i);
              }
            ),
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    4e3: (e, t, r) => {
      e.exports = r(290);
    },
    4290: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unstable_rethrow", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(4744).unstable_rethrow;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4473: (e) => {
      e.exports = {
        links: "SocialLinks_links__P5z2P",
        icon: "SocialLinks_icon__9QZfU",
        link: "SocialLinks_link__Y7mGD",
      };
    },
    4744: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unstable_rethrow", {
          enumerable: !0,
          get: function () {
            return function e(t) {
              if ((0, o.isNextRouterError)(t) || (0, n.isBailoutToCSRError)(t))
                throw t;
              t instanceof Error && "cause" in t && e(t.cause);
            };
          },
        });
      let n = r(3123),
        o = r(6999);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4855: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            d: "M5.67 1C4.22 1 3 2.22 3 3.67v15.11C3 20.01 4 21 5.22 21h13.11c.35 0 .67-.32.67-.67V5.67c0-.39-.29-.67-.67-.67C17.69 5 17 4.31 17 3.67s.69-1.33 1.33-1.33c.35 0 .67-.31.67-.67S18.69 1 18.33 1H5.66Zm0 1.33h10.37c-.23.39-.37.85-.37 1.33s.14.94.37 1.33H5.67c-.64 0-1.33-.69-1.33-1.33s.69-1.33 1.33-1.33M4.34 5.96c.39.23.85.37 1.33.37h12v13.33H5.22a.88.88 0 0 1-.89-.86V5.97Zm2.44 2.81c-.37.01-.65.32-.64.69.01.35.29.63.64.64h8.44c.37-.01.65-.32.64-.69a.66.66 0 0 0-.64-.64zm0 3.56a.67.67 0 0 0 0 1.34h8.44a.67.67 0 0 0 0-1.34zm0 3.56c-.37.01-.65.32-.64.69.01.35.29.63.64.64h8.44c.37-.01.65-.32.64-.69a.66.66 0 0 0-.64-.64z",
          }),
        });
    },
    5048: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getRedirectError: function () {
            return i;
          },
          getRedirectStatusCodeFromError: function () {
            return d;
          },
          getRedirectTypeFromError: function () {
            return c;
          },
          getURLFromRedirectError: function () {
            return u;
          },
          permanentRedirect: function () {
            return l;
          },
          redirect: function () {
            return s;
          },
        });
      let n = r(1017),
        o = r(2591),
        a = void 0;
      function i(e, t, r) {
        void 0 === r && (r = n.RedirectStatusCode.TemporaryRedirect);
        let a = Object.defineProperty(
          Error(o.REDIRECT_ERROR_CODE),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
        return (
          (a.digest =
            o.REDIRECT_ERROR_CODE + ";" + t + ";" + e + ";" + r + ";"),
          a
        );
      }
      function s(e, t) {
        var r;
        throw (
          (null != t ||
            (t = (
              null == a
                ? void 0
                : null == (r = a.getStore())
                  ? void 0
                  : r.isAction
            )
              ? o.RedirectType.push
              : o.RedirectType.replace),
          i(e, t, n.RedirectStatusCode.TemporaryRedirect))
        );
      }
      function l(e, t) {
        throw (
          (void 0 === t && (t = o.RedirectType.replace),
          i(e, t, n.RedirectStatusCode.PermanentRedirect))
        );
      }
      function u(e) {
        return (0, o.isRedirectError)(e)
          ? e.digest.split(";").slice(2, -2).join(";")
          : null;
      }
      function c(e) {
        if (!(0, o.isRedirectError)(e))
          throw Object.defineProperty(
            Error("Not a redirect error"),
            "__NEXT_ERROR_CODE",
            { value: "E260", enumerable: !1, configurable: !0 },
          );
        return e.digest.split(";", 2)[1];
      }
      function d(e) {
        if (!(0, o.isRedirectError)(e))
          throw Object.defineProperty(
            Error("Not a redirect error"),
            "__NEXT_ERROR_CODE",
            { value: "E260", enumerable: !1, configurable: !0 },
          );
        return Number(e.digest.split(";").at(-2));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5105: (e, t, r) => {
      e.exports = r(3996);
    },
    5200: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Roboto', 'Roboto Fallback'",
          fontStyle: "normal",
        },
        className: "__className_0d38a1",
      };
    },
    5553: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(4232);
      function o(e, t) {
        let r = (0, n.useRef)(null),
          o = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = o.current;
              t && ((o.current = null), t());
            } else e && (r.current = a(e, n)), t && (o.current = a(t, n));
          },
          [e, t],
        );
      }
      function a(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5679: (e, t, r) => {
      "use strict";
      var n = r(5364);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return f;
          },
        });
      let o = r(4252),
        a = r(8365),
        i = r(7876),
        s = a._(r(4232)),
        l = o._(r(3776)),
        u = r(2684),
        c = r(8831),
        d = r(6807);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, i.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport",
              ),
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
            ? e.concat(
                s.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" == typeof t || "number" == typeof t
                      ? e
                      : e.concat(t),
                  [],
                ),
              )
            : e.concat(t);
      }
      r(6079);
      let h = ["name", "httpEquiv", "charSet", "itemProp"];
      function g(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let a = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (a = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (a = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !i) && r.has(e)
                            ? (a = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return a;
              };
            })(),
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: o });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, s.useContext)(u.AmpStateContext),
          n = (0, s.useContext)(c.HeadManagerContext);
        return (0, i.jsx)(l.default, {
          reduceComponentsToState: g,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5822: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          xmlSpace: "preserve",
          viewBox: "0 0 30 30",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M23 3h-6a2 2 0 0 0-1.414.586l-12 12a2 2 0 0 0 0 2.828l8 8a2 2 0 0 0 2.828 0l12-12A2 2 0 0 0 27 13V7a4 4 0 0 0-4-4m0 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 23 9",
          }),
        });
    },
    5939: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = r(4252),
        o = r(7876),
        a = n._(r(4232)),
        i = r(1921),
        s = r(1533),
        l = r(8480),
        u = r(2746),
        c = r(4591),
        d = r(9948),
        f = r(1312),
        p = r(6041),
        h = r(2092),
        g = r(5553),
        m = new Set();
      function v(e, t, r, n) {
        if ((0, s.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (m.has(o)) return;
            m.add(o);
          }
          e.prefetch(t, r, n).catch((e) => {});
        }
      }
      function b(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let _ = a.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: l,
          as: m,
          children: _,
          prefetch: w = null,
          passHref: y,
          replace: j,
          shallow: x,
          scroll: O,
          locale: R,
          onClick: P,
          onMouseEnter: E,
          onTouchStart: M,
          legacyBehavior: S = !1,
          ...C
        } = e;
        (r = _),
          S &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let k = a.default.useContext(d.RouterContext),
          T = !1 !== w,
          { href: L, as: A } = a.default.useMemo(() => {
            if (!k) {
              let e = b(l);
              return { href: e, as: m ? b(m) : e };
            }
            let [e, t] = (0, i.resolveHref)(k, l, !0);
            return { href: e, as: m ? (0, i.resolveHref)(k, m) : t || e };
          }, [k, l, m]),
          N = a.default.useRef(L),
          z = a.default.useRef(A);
        S && (n = a.default.Children.only(r));
        let F = S ? n && "object" == typeof n && n.ref : t,
          [H, I, U] = (0, f.useIntersection)({ rootMargin: "200px" }),
          D = a.default.useCallback(
            (e) => {
              (z.current !== A || N.current !== L) &&
                (U(), (z.current = A), (N.current = L)),
                H(e);
            },
            [A, L, U, H],
          ),
          B = (0, g.useMergedRef)(D, F);
        a.default.useEffect(() => {
          k && I && T && v(k, L, A, { locale: R });
        }, [A, L, I, R, T, null == k ? void 0 : k.locale, k]);
        let V = {
          ref: B,
          onClick(e) {
            S || "function" != typeof P || P(e),
              S &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              k &&
                !e.defaultPrevented &&
                !(function (e, t, r, n, o, a, i, l) {
                  let { nodeName: u } = e.currentTarget;
                  !(
                    "A" === u.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !(0, s.isLocalURL)(r))
                  ) &&
                    (e.preventDefault(),
                    (() => {
                      let e = null == i || i;
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](r, n, {
                            shallow: a,
                            locale: l,
                            scroll: e,
                          })
                        : t[o ? "replace" : "push"](n || r, { scroll: e });
                    })());
                })(e, k, L, A, j, x, O, R);
          },
          onMouseEnter(e) {
            S || "function" != typeof E || E(e),
              S &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              k &&
                v(k, L, A, {
                  locale: R,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart: function (e) {
            S || "function" != typeof M || M(e),
              S &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              k &&
                v(k, L, A, {
                  locale: R,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if ((0, u.isAbsoluteUrl)(A)) V.href = A;
        else if (!S || y || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== R ? R : null == k ? void 0 : k.locale;
          V.href =
            ((null == k ? void 0 : k.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                A,
                e,
                null == k ? void 0 : k.locales,
                null == k ? void 0 : k.domainLocales,
              )) ||
            (0, h.addBasePath)(
              (0, c.addLocale)(A, e, null == k ? void 0 : k.defaultLocale),
            );
        }
        return S
          ? a.default.cloneElement(n, V)
          : (0, o.jsx)("a", { ...C, ...V, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6029: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return o;
          },
          useServerInsertedHTML: function () {
            return a;
          },
        });
      let n = r(8365)._(r(4232)),
        o = n.default.createContext(null);
      function a(e) {
        let t = (0, n.useContext)(o);
        t && t(e);
      }
    },
    6041: (e, t, r) => {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8205),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    6079: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e) => {};
    },
    6154: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            d: "m20.6 18.31-4.01-4.01c2.44-3.37 2.15-8.11-.89-11.14A8.55 8.55 0 0 0 9.61.64c-2.28 0-4.48.91-6.09 2.52-3.36 3.36-3.36 8.82 0 12.18a8.55 8.55 0 0 0 6.09 2.52c1.78 0 3.55-.55 5.05-1.64l4.01 4.01c.26.26.61.4.96.4.75 0 1.36-.61 1.36-1.36 0-.36-.14-.71-.4-.96ZM4.87 13.99a6.71 6.71 0 0 1 0-9.49 6.7 6.7 0 0 1 4.74-1.97c1.79 0 3.48.7 4.74 1.97a6.71 6.71 0 0 1 0 9.49 6.7 6.7 0 0 1-4.74 1.97c-1.78 0-3.49-.7-4.74-1.97",
          }),
        });
    },
    6769: (e) => {
      e.exports = {
        branding: "Footer_branding__feBRv",
        logo: "Footer_logo__C9vo8",
        description: "Footer_description__s_1Tl",
        imprint: "Footer_imprint__j5hGH",
        socialLinks: "Footer_socialLinks__22g9N",
      };
    },
    6807: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    7328: (e, t, r) => {
      e.exports = r(5679);
    },
    7449: (e) => {
      e.exports = {
        logo: "Logo_logo__c5nVK",
        src: "Logo_src__xX_cm",
        subline: "Logo_subline__E9VoF",
        small: "Logo_small__JDg_A",
      };
    },
    7499: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
          ...e,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            d: "M9.71.38h-.64v2.61C4.22 3.32.38 7.36.38 12.29s4.19 9.33 9.33 9.33 8.97-3.84 9.3-8.69h2.61v-.64C21.62 5.72 16.28.38 9.71.38m0 19.95c-4.44 0-8.05-3.61-8.05-8.05s3.26-7.69 7.4-8.02v8.66h8.66c-.33 4.14-3.8 7.4-8.02 7.4Zm9.33-8.69h-8.69V1.69c5.34.32 9.63 4.61 9.95 9.96h-1.27Z",
          }),
        });
    },
    8230: (e, t, r) => {
      e.exports = r(5939);
    },
    8242: () => {},
    8326: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          ...e,
          children: (0, n.jsx)("circle", { cx: 8, cy: 8, r: 6 }),
        });
    },
    8381: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return c;
          },
          RedirectType: function () {
            return o.RedirectType;
          },
          forbidden: function () {
            return i.forbidden;
          },
          notFound: function () {
            return a.notFound;
          },
          permanentRedirect: function () {
            return n.permanentRedirect;
          },
          redirect: function () {
            return n.redirect;
          },
          unauthorized: function () {
            return s.unauthorized;
          },
          unstable_rethrow: function () {
            return l.unstable_rethrow;
          },
        });
      let n = r(5048),
        o = r(2591),
        a = r(8868),
        i = r(9461),
        s = r(3186),
        l = r(4290);
      class u extends Error {
        constructor() {
          super(
            "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams",
          );
        }
      }
      class c extends URLSearchParams {
        append() {
          throw new u();
        }
        delete() {
          throw new u();
        }
        set() {
          throw new u();
        }
        sort() {
          throw new u();
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8581: (e, t, r) => {
      "use strict";
      r.d(t, {
        fz: () => o,
        ff: () => a,
        qd: () => i,
        p6: () => s,
        BO: () => l,
        ir: () => u,
        SA: () => c,
        Sn: () => d,
        ul: () => f,
        rU: () => p,
      });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M12.846 5.211a1 1 0 0 0-1.691 0L2.783 18.466A1 1 0 0 0 3.63 20H20.37a1 1 0 0 0 .846-1.534zM9.464 4.143c1.177-1.864 3.895-1.864 5.073 0l8.37 13.255C24.17 19.396 22.735 22 20.372 22H3.63c-2.363 0-3.798-2.604-2.537-4.602zM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.306-6.836.724 4.343a.59.59 0 0 0 1.164 0l.724-4.343A1 1 0 0 0 12.32 9h-.64a1 1 0 0 0-.986 1.164",
            clipRule: "evenodd",
          }),
        });
      r(9065), r(8326), r(8835), r(722);
      let a = (e) =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z",
            }),
            (0, n.jsx)("path", {
              d: "M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2z",
            }),
          ],
        });
      r(4855), r(7499), r(1050), r(6154);
      let i = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 320 512",
            ...e,
            children: (0, n.jsx)("path", {
              d: "m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
            }),
          }),
        s = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 496 512",
            ...e,
            children: (0, n.jsx)("path", {
              d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2",
            }),
          }),
        l = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 496 512",
            ...e,
            children: (0, n.jsx)("path", {
              d: "m487.75 200.06-.7-1.78-67.5-176.19a17.63 17.63 0 0 0-6.95-8.37c-6.44-4-14.69-3.55-20.66 1.11a18.07 18.07 0 0 0-5.99 9.09l-45.58 139.46H155.79L110.2 23.93c-.99-3.59-3.09-6.78-5.99-9.12a18.08 18.08 0 0 0-20.66-1.11 17.8 17.8 0 0 0-6.95 8.37L8.96 198.18l-.67 1.78c-19.96 52.17-3.01 111.25 41.58 144.89l.23.18.62.44 102.84 77.01 50.88 38.51 30.99 23.4a20.84 20.84 0 0 0 25.21 0l30.99-23.4 50.88-38.51L445.97 345l.26-.21c44.49-33.64 61.41-92.62 41.53-144.73Z",
            }),
          }),
        u = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            ...e,
            children: (0, n.jsx)("path", {
              d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1",
            }),
          }),
        c = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            ...e,
            children: (0, n.jsx)("path", {
              d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
            }),
          }),
        d = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            ...e,
            children: (0, n.jsx)("path", {
              d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
            }),
          }),
        f = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            ...e,
            children: (0, n.jsx)("path", {
              d: "M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3q.3 0 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1",
            }),
          }),
        p = (e) =>
          (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            ...e,
            children: (0, n.jsx)("path", {
              d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z",
            }),
          });
      r(5822);
    },
    8835: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "m.247 10.212 5.02-8.697a2 2 0 0 1 3.465 0l5.021 8.697a2 2 0 0 1-1.732 3H1.98a2 2 0 0 1-1.732-3z",
          }),
        });
    },
    8868: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "notFound", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = "" + r(4181).HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
      function o() {
        let e = Object.defineProperty(Error(n), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0,
        });
        throw ((e.digest = n), e);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9065: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(7876);
      r(4232);
      let o = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 16 16",
          ...e,
          children: (0, n.jsx)("rect", {
            width: 12,
            height: 12,
            x: 2,
            y: 2,
            rx: 3,
            transform: "rotate(-45 8 8)",
          }),
        });
    },
    9351: (e) => {
      e.exports = {
        list: "Navigation_list__VIGxa",
        icon: "Navigation_icon__uPnQs",
        label: "Navigation_label__QlTT7",
      };
    },
    9461: (e, t, r) => {
      "use strict";
      function n() {
        throw Object.defineProperty(
          Error(
            "`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.",
          ),
          "__NEXT_ERROR_CODE",
          { value: "E488", enumerable: !1, configurable: !0 },
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "forbidden", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(4181).HTTP_ERROR_FALLBACK_ERROR_CODE,
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9596: () => {},
    9870: (e, t, r) => {
      "use strict";
      let n = r(2844);
      e.exports = {
        basePath: n.basePath && "/" !== n.basePath ? n.basePath : "",
        output: "export",
        trailingSlash: !0,
        reactStrictMode: !0,
        experimental: { scrollRestoration: !0 },
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(92), t(4294))), (_N_E = e.O());
  },
]);
