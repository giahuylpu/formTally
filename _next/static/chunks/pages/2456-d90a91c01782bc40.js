(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2456], {
    57568: function(e, t, n) {
        "use strict";
        n.d(t, {
            vO: function() {
                return v
            }
        });
        var r = "undefined" != typeof window ? window : {
            screen: {},
            navigator: {}
        }
          , o = (r.matchMedia || function() {
            return {
                matches: !1
            }
        }
        ).bind(r)
          , i = function() {};
        r.addEventListener && r.addEventListener("p", i, {
            get passive() {
                return !0
            }
        }),
        r.removeEventListener && r.removeEventListener("p", i, !1);
        var u = "ontouchstart"in r
          , a = "TouchEvent"in r
          , c = u || a && o("(any-pointer: coarse)").matches
          , f = (r.navigator.maxTouchPoints || 0) > 0 || c
          , s = r.navigator.userAgent || ""
          , l = o("(pointer: coarse)").matches && /iPad|Macintosh/.test(s) && Math.min(r.screen.width || 0, r.screen.height || 0) >= 768
          , d = (o("(pointer: coarse)").matches || !o("(pointer: fine)").matches && u) && !/Windows.*Firefox/.test(s)
          , p = o("(any-pointer: fine)").matches || o("(any-hover: hover)").matches || l || !u
          , v = f && (p || !d) ? "hybrid" : f ? "touchOnly" : "mouseOnly"
    },
    50857: function(e, t, n) {
        var r = n(37772).Symbol;
        e.exports = r
    },
    50343: function(e) {
        e.exports = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
                o[n] = t(e[n], n, e);
            return o
        }
    },
    53366: function(e, t, n) {
        var r = n(50857)
          , o = n(62107)
          , i = n(37157)
          , u = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : u && u in Object(e) ? o(e) : i(e)
        }
    },
    1054: function(e, t, n) {
        var r = n(50857)
          , o = n(50343)
          , i = n(86152)
          , u = n(4795)
          , a = 1 / 0
          , c = r ? r.prototype : void 0
          , f = c ? c.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t)
                return t;
            if (i(t))
                return o(t, e) + "";
            if (u(t))
                return f ? f.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -a ? "-0" : n
        }
    },
    51242: function(e, t, n) {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r
    },
    62107: function(e, t, n) {
        var r = n(50857)
          , o = Object.prototype
          , i = o.hasOwnProperty
          , u = o.toString
          , a = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = i.call(e, a)
              , n = e[a];
            try {
                e[a] = void 0;
                var r = !0
            } catch (e) {}
            var o = u.call(e);
            return r && (t ? e[a] = n : delete e[a]),
            o
        }
    },
    37157: function(e) {
        var t = Object.prototype.toString;
        e.exports = function(e) {
            return t.call(e)
        }
    },
    37772: function(e, t, n) {
        var r = n(51242)
          , o = "object" == typeof self && self && self.Object === Object && self
          , i = r || o || Function("return this")();
        e.exports = i
    },
    86152: function(e) {
        var t = Array.isArray;
        e.exports = t
    },
    15125: function(e) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    4795: function(e, t, n) {
        var r = n(53366)
          , o = n(15125);
        e.exports = function(e) {
            return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
        }
    },
    66188: function(e, t, n) {
        var r = n(1054);
        e.exports = function(e) {
            return null == e ? "" : r(e)
        }
    },
    5118: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return d
            }
        });
        var r = n(85333)
          , o = n(2281)
          , i = n(2784)
          , u = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.filter(function(e, t, n) {
                return !!e && n.indexOf(e) === t
            }).join(" ")
        }
          , a = n(6692)
          , c = n(26969)
          , f = n(44822)
          , s = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }
          , l = (0,
        i.forwardRef)(function(e, t) {
            var n = e.color
              , l = e.size
              , d = void 0 === l ? 24 : l
              , p = e.strokeWidth
              , v = void 0 === p ? 2 : p
              , h = e.absoluteStrokeWidth
              , g = e.className
              , y = e.children
              , b = e.iconNode
              , m = (0,
            o._)(e, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
            return (0,
            i.createElement)("svg", (0,
            r._)((0,
            a._)((0,
            r._)({
                ref: t
            }, s), {
                width: d,
                height: d,
                stroke: void 0 === n ? "currentColor" : n,
                strokeWidth: h ? 24 * Number(v) / Number(d) : v,
                className: u("lucide", void 0 === g ? "" : g)
            }), m), (0,
            f._)(b.map(function(e) {
                var t = (0,
                c._)(e, 2)
                  , n = t[0]
                  , r = t[1];
                return (0,
                i.createElement)(n, r)
            })).concat((0,
            f._)(Array.isArray(y) ? y : [y])))
        })
          , d = function(e, t) {
            var n = (0,
            i.forwardRef)(function(n, a) {
                var c = n.className
                  , f = (0,
                o._)(n, ["className"]);
                return (0,
                i.createElement)(l, (0,
                r._)({
                    ref: a,
                    iconNode: t,
                    className: u("lucide-".concat(e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()), c)
                }, f))
            });
            return n.displayName = "".concat(e),
            n
        }
    },
    11173: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ACTION_FAST_REFRESH: function() {
                return l
            },
            ACTION_NAVIGATE: function() {
                return a
            },
            ACTION_PREFETCH: function() {
                return s
            },
            ACTION_REFRESH: function() {
                return u
            },
            ACTION_RESTORE: function() {
                return c
            },
            ACTION_SERVER_ACTION: function() {
                return d
            },
            ACTION_SERVER_PATCH: function() {
                return f
            },
            PrefetchCacheEntryStatus: function() {
                return i
            },
            PrefetchKind: function() {
                return o
            },
            isThenable: function() {
                return p
            }
        });
        var n, r, o, i, u = "refresh", a = "navigate", c = "restore", f = "server-patch", s = "prefetch", l = "fast-refresh", d = "server-action";
        function p(e) {
            return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }
        (n = o || (o = {})).AUTO = "auto",
        n.FULL = "full",
        n.TEMPORARY = "temporary",
        (r = i || (i = {})).fresh = "fresh",
        r.reusable = "reusable",
        r.expired = "expired",
        r.stale = "stale",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    46964: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(82940),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    54667: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(81862)
          , o = n(85333)
          , i = n(6692)
          , u = n(2281)
          , a = n(26969);
        n(82361);
        var c = n(21572);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return k
            }
        });
        var f = n(43219)
          , s = n(52322)
          , l = f._(n(2784))
          , d = n(99653)
          , p = n(31627)
          , v = n(15738)
          , h = n(98529)
          , g = n(53981)
          , y = n(26722)
          , b = n(53058)
          , m = n(32675)
          , O = n(46964)
          , _ = n(26633)
          , j = n(11173)
          , C = new Set;
        function w(e, t, n, o, i, u) {
            if (u || (0,
            p.isLocalURL)(t)) {
                if (!o.bypassPrefetchedCheck) {
                    var a, f = t + "%" + n + "%" + (void 0 !== o.locale ? o.locale : "locale"in e ? e.locale : void 0);
                    if (C.has(f))
                        return;
                    C.add(f)
                }
                (a = r._(function() {
                    return c._(this, function(r) {
                        return u ? [2, e.prefetch(t, i)] : [2, e.prefetch(t, n, o)]
                    })
                }),
                function() {
                    return a.apply(this, arguments)
                }
                )().catch(function(e) {})
            }
        }
        function E(e) {
            return "string" == typeof e ? e : (0,
            v.formatUrl)(e)
        }
        var k = l.default.forwardRef(function(e, t) {
            var n, r, c = e.href, f = e.as, v = e.children, C = e.prefetch, k = void 0 === C ? null : C, x = e.passHref, P = e.replace, N = e.shallow, S = e.scroll, T = e.locale, A = e.onClick, M = e.onMouseEnter, R = e.onTouchStart, L = e.legacyBehavior, I = void 0 !== L && L, D = u._(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            n = v,
            I && ("string" == typeof n || "number" == typeof n) && (n = (0,
            s.jsx)("a", {
                children: n
            }));
            var U = l.default.useContext(y.RouterContext)
              , F = l.default.useContext(b.AppRouterContext)
              , z = null != U ? U : F
              , H = !U
              , K = !1 !== k
              , W = null === k ? j.PrefetchKind.AUTO : j.PrefetchKind.FULL
              , Z = l.default.useMemo(function() {
                if (!U) {
                    var e = E(c);
                    return {
                        href: e,
                        as: f ? E(f) : e
                    }
                }
                var t = a._((0,
                d.resolveHref)(U, c, !0), 2)
                  , n = t[0]
                  , r = t[1];
                return {
                    href: n,
                    as: f ? (0,
                    d.resolveHref)(U, f) : r || n
                }
            }, [U, c, f])
              , B = Z.href
              , V = Z.as
              , $ = l.default.useRef(B)
              , J = l.default.useRef(V);
            I && (r = l.default.Children.only(n));
            var Y = I ? r && "object" == typeof r && r.ref : t
              , q = a._((0,
            m.useIntersection)({
                rootMargin: "200px"
            }), 3)
              , G = q[0]
              , Q = q[1]
              , X = q[2]
              , ee = l.default.useCallback(function(e) {
                (J.current !== V || $.current !== B) && (X(),
                J.current = V,
                $.current = B),
                G(e),
                Y && ("function" == typeof Y ? Y(e) : "object" == typeof Y && (Y.current = e))
            }, [V, Y, B, X, G]);
            l.default.useEffect(function() {
                z && Q && K && w(z, B, V, {
                    locale: T
                }, {
                    kind: W
                }, H)
            }, [V, B, Q, T, K, null == U ? void 0 : U.locale, z, H, W]);
            var et = {
                ref: ee,
                onClick: function(e) {
                    I || "function" != typeof A || A(e),
                    I && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    z && !e.defaultPrevented && function(e, t, n, r, o, i, u, a, c) {
                        if (!("A" === e.currentTarget.nodeName.toUpperCase() && ((f = e.currentTarget.getAttribute("target")) && "_self" !== f || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which || !c && !(0,
                        p.isLocalURL)(n)))) {
                            e.preventDefault();
                            var f, s = function() {
                                var e = null == u || u;
                                "beforePopState"in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: i,
                                    locale: a,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? l.default.startTransition(s) : s()
                        }
                    }(e, z, B, V, P, N, S, T, H)
                },
                onMouseEnter: function(e) {
                    I || "function" != typeof M || M(e),
                    I && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    z && (K || !H) && w(z, B, V, {
                        locale: T,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: W
                    }, H)
                },
                onTouchStart: function(e) {
                    I || "function" != typeof R || R(e),
                    I && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    z && (K || !H) && w(z, B, V, {
                        locale: T,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: W
                    }, H)
                }
            };
            if ((0,
            h.isAbsoluteUrl)(V))
                et.href = V;
            else if (!I || x || "a" === r.type && !("href"in r.props)) {
                var en = void 0 !== T ? T : null == U ? void 0 : U.locale
                  , er = (null == U ? void 0 : U.isLocaleDomain) && (0,
                O.getDomainLocale)(V, en, null == U ? void 0 : U.locales, null == U ? void 0 : U.domainLocales);
                et.href = er || (0,
                _.addBasePath)((0,
                g.addLocale)(V, en, null == U ? void 0 : U.defaultLocale))
            }
            return I ? l.default.cloneElement(r, et) : (0,
            s.jsx)("a", i._(o._({}, D, et), {
                children: n
            }))
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    32675: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(26969);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return f
            }
        });
        var o = n(2784)
          , i = n(45266)
          , u = "function" == typeof IntersectionObserver
          , a = new Map
          , c = [];
        function f(e) {
            var t = e.rootRef
              , n = e.rootMargin
              , f = e.disabled || !u
              , s = r._((0,
            o.useState)(!1), 2)
              , l = s[0]
              , d = s[1]
              , p = (0,
            o.useRef)(null)
              , v = (0,
            o.useCallback)(function(e) {
                p.current = e
            }, []);
            return (0,
            o.useEffect)(function() {
                if (u) {
                    if (!f && !l) {
                        var e, r, o, s, v, h = p.current;
                        if (h && h.tagName)
                            return e = function(e) {
                                return e && d(e)
                            }
                            ,
                            o = (r = function(e) {
                                var t, n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }, r = c.find(function(e) {
                                    return e.root === n.root && e.margin === n.margin
                                });
                                if (r && (t = a.get(r)))
                                    return t;
                                var o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(function(e) {
                                        e.forEach(function(e) {
                                            var t = o.get(e.target)
                                              , n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }
                                    ,e),
                                    elements: o
                                },
                                c.push(n),
                                a.set(n, t),
                                t
                            }({
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            })).id,
                            s = r.observer,
                            (v = r.elements).set(h, e),
                            s.observe(h),
                            function() {
                                if (v.delete(h),
                                s.unobserve(h),
                                0 === v.size) {
                                    s.disconnect(),
                                    a.delete(o);
                                    var e = c.findIndex(function(e) {
                                        return e.root === o.root && e.margin === o.margin
                                    });
                                    e > -1 && c.splice(e, 1)
                                }
                            }
                    }
                } else if (!l) {
                    var g = (0,
                    i.requestIdleCallback)(function() {
                        return d(!0)
                    });
                    return function() {
                        return (0,
                        i.cancelIdleCallback)(g)
                    }
                }
            }, [f, n, t, l, p.current]),
            [v, l, (0,
            o.useCallback)(function() {
                d(!1)
            }, [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    97729: function(e, t, n) {
        e.exports = n(77689)
    },
    39097: function(e, t, n) {
        e.exports = n(54667)
    },
    52829: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return p
            }
        });
        var r = n(39868)
          , o = n(59147)
          , i = n(34434)
          , u = n(56666)
          , a = n(2784)
          , c = n(12282)
          , f = n(63910);
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach(function(t) {
                    (0,
                    u.Z)(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        var d = function(e, t) {
            var n = (0,
            a.useRef)();
            return (0,
            a.useEffect)(function() {
                n.current = t ? n.current : e
            }, [e, t]),
            n.current
        };
        function p(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = n.i18n, s = (0,
            a.useContext)(c.OO) || {}, p = s.i18n, v = s.defaultNS, h = u || p || (0,
            c.nI)();
            if (h && !h.reportNamespaces && (h.reportNamespaces = new c.zv),
            !h) {
                (0,
                f.O4)("You will need to pass in an i18next instance by using initReactI18next");
                var g = function(e) {
                    return Array.isArray(e) ? e[e.length - 1] : e
                }
                  , y = [g, {}, !1];
                return y.t = g,
                y.i18n = {},
                y.ready = !1,
                y
            }
            h.options.react && void 0 !== h.options.react.wait && (0,
            f.O4)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
            var b = l(l(l({}, (0,
            c.JP)()), h.options.react), n)
              , m = b.useSuspense
              , O = b.keyPrefix
              , _ = e || v || h.options && h.options.defaultNS;
            _ = "string" == typeof _ ? [_] : _ || ["translation"],
            h.reportNamespaces.addUsedNamespaces && h.reportNamespaces.addUsedNamespaces(_);
            var j = (h.isInitialized || h.initializedStoreOnce) && _.every(function(e) {
                return (0,
                f.F0)(e, h, b)
            });
            function C() {
                return h.getFixedT(null, "fallback" === b.nsMode ? _ : _[0], O)
            }
            var w = (t = (0,
            a.useState)(C),
            (0,
            r.Z)(t) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i, u, a = [], c = !0, f = !1;
                    try {
                        for (i = (n = n.call(e)).next; !(c = (r = i.call(n)).done) && (a.push(r.value),
                        2 !== a.length); c = !0)
                            ;
                    } catch (e) {
                        f = !0,
                        o = e
                    } finally {
                        try {
                            if (!c && null != n.return && (u = n.return(),
                            Object(u) !== u))
                                return
                        } finally {
                            if (f)
                                throw o
                        }
                    }
                    return a
                }
            }(t, 2) || (0,
            o.Z)(t, 2) || (0,
            i.Z)())
              , E = w[0]
              , k = w[1]
              , x = _.join()
              , P = d(x)
              , N = (0,
            a.useRef)(!0);
            (0,
            a.useEffect)(function() {
                var e = b.bindI18n
                  , t = b.bindI18nStore;
                function n() {
                    N.current && k(C)
                }
                return N.current = !0,
                j || m || (0,
                f.DC)(h, _, function() {
                    N.current && k(C)
                }),
                j && P && P !== x && N.current && k(C),
                e && h && h.on(e, n),
                t && h && h.store.on(t, n),
                function() {
                    N.current = !1,
                    e && h && e.split(" ").forEach(function(e) {
                        return h.off(e, n)
                    }),
                    t && h && t.split(" ").forEach(function(e) {
                        return h.store.off(e, n)
                    })
                }
            }, [h, x]);
            var S = (0,
            a.useRef)(!0);
            (0,
            a.useEffect)(function() {
                N.current && !S.current && k(C),
                S.current = !1
            }, [h, O]);
            var T = [E, h, j];
            if (T.t = E,
            T.i18n = h,
            T.ready = j,
            j || !j && !m)
                return T;
            throw new Promise(function(e) {
                (0,
                f.DC)(h, _, function() {
                    e()
                })
            }
            )
        }
    },
    63910: function(e, t, n) {
        "use strict";
        function r() {
            if (console && console.warn) {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                "string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
                (e = console).warn.apply(e, n)
            }
        }
        n.d(t, {
            DC: function() {
                return u
            },
            F0: function() {
                return a
            },
            O4: function() {
                return i
            },
            ZK: function() {
                return r
            }
        });
        var o = {};
        function i() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "string" == typeof t[0] && o[t[0]] || ("string" == typeof t[0] && (o[t[0]] = new Date),
            r.apply(void 0, t))
        }
        function u(e, t, n) {
            e.loadNamespaces(t, function() {
                e.isInitialized ? n() : e.on("initialized", function t() {
                    setTimeout(function() {
                        e.off("initialized", t)
                    }, 0),
                    n()
                })
            })
        }
        function a(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t.languages && t.languages.length ? void 0 !== t.options.ignoreJSONStructure ? t.hasLoadedNamespace(e, {
                precheck: function(t, r) {
                    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e))
                        return !1
                }
            }) : function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = t.languages[0]
                  , o = !!t.options && t.options.fallbackLng
                  , i = t.languages[t.languages.length - 1];
                if ("cimode" === r.toLowerCase())
                    return !0;
                var u = function(e, n) {
                    var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                    return -1 === r || 2 === r
                };
                return (!(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1) || !t.services.backendConnector.backend || !t.isLanguageChangingTo || !!u(t.isLanguageChangingTo, e)) && !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || u(r, e) && (!o || u(i, e)))
            }(e, t, n) : (i("i18n.languages were undefined or empty", t.languages),
            !0)
        }
    }
}]);
