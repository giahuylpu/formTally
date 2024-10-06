(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[660], {
    54073: function(e, n, t) {
        var r = t(29259)
          , o = t(61100)
          , i = t(7642)
          , a = Math.max
          , u = Math.min;
        e.exports = function(e, n, t) {
            var s, l, c, d, f, m, h = 0, p = !1, v = !1, g = !0;
            if ("function" != typeof e)
                throw TypeError("Expected a function");
            function y(n) {
                var t = s
                  , r = l;
                return s = l = void 0,
                h = n,
                d = e.apply(r, t)
            }
            function w(e) {
                var t = e - m
                  , r = e - h;
                return void 0 === m || t >= n || t < 0 || v && r >= c
            }
            function b() {
                var e, t, r, i = o();
                if (w(i))
                    return x(i);
                f = setTimeout(b, (e = i - m,
                t = i - h,
                r = n - e,
                v ? u(r, c - t) : r))
            }
            function x(e) {
                return (f = void 0,
                g && s) ? y(e) : (s = l = void 0,
                d)
            }
            function k() {
                var e, t = o(), r = w(t);
                if (s = arguments,
                l = this,
                m = t,
                r) {
                    if (void 0 === f)
                        return h = e = m,
                        f = setTimeout(b, n),
                        p ? y(e) : d;
                    if (v)
                        return clearTimeout(f),
                        f = setTimeout(b, n),
                        y(m)
                }
                return void 0 === f && (f = setTimeout(b, n)),
                d
            }
            return n = i(n) || 0,
            r(t) && (p = !!t.leading,
            c = (v = "maxWait"in t) ? a(i(t.maxWait) || 0, n) : c,
            g = "trailing"in t ? !!t.trailing : g),
            k.cancel = function() {
                void 0 !== f && clearTimeout(f),
                h = 0,
                s = m = l = f = void 0
            }
            ,
            k.flush = function() {
                return void 0 === f ? d : x(o())
            }
            ,
            k
        }
    },
    61100: function(e, n, t) {
        var r = t(37772);
        e.exports = function() {
            return r.Date.now()
        }
    },
    12436: function(e, n, t) {
        var r = t(54073)
          , o = t(29259);
        e.exports = function(e, n, t) {
            var i = !0
              , a = !0;
            if ("function" != typeof e)
                throw TypeError("Expected a function");
            return o(t) && (i = "leading"in t ? !!t.leading : i,
            a = "trailing"in t ? !!t.trailing : a),
            r(e, n, {
                leading: i,
                maxWait: n,
                trailing: a
            })
        }
    },
    88997: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return c
            }
        });
        var r = t(52322)
          , o = t(17553)
          , i = t(52829)
          , a = t(35505)
          , u = a.ZP.div.withConfig({
            componentId: "sc-46c89e74-0"
        })(["display:flex;flex:1;justify-content:center;align-items:center;flex-direction:column;text-align:center;max-width:100%;margin:", ";svg{color:", ";margin-bottom:32px;}"], function(e) {
            return e.theme.spacing.md
        }, function(e) {
            return e.theme.color.textGrayscale4
        })
          , s = a.ZP.div.withConfig({
            componentId: "sc-46c89e74-1"
        })(["font-weight:bold;margin-bottom:8px;"])
          , l = a.ZP.div.withConfig({
            componentId: "sc-46c89e74-2"
        })(["max-width:600px;font-size:14px;line-height:1.5;color:", ";", ""], function(e) {
            return e.theme.color.textGrayscale3
        }, function(e) {
            return e.hasButton && "\n    margin-bottom: 16px;\n  "
        })
          , c = function(e) {
            var n = e.title
              , t = e.description
              , a = e.icon
              , c = e.button
              , d = (0,
            i.$)().t
              , f = null != a ? a : o.Z;
            return (0,
            r.jsxs)(u, {
                children: [(0,
                r.jsx)(f, {
                    size: 56
                }), (0,
                r.jsx)(s, {
                    children: null != n ? n : d("error.title")
                }), (0,
                r.jsx)(l, {
                    hasButton: !!c,
                    children: null != t ? t : d("error.description")
                }), c]
            })
        }
    },
    33485: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return ew
            }
        });
        var r = t(81862)
          , o = t(87612)
          , i = t(85333)
          , a = t(6692)
          , u = t(26969)
          , s = t(44822)
          , l = t(50853)
          , c = t(52322)
          , d = t(43526)
          , f = t(54073)
          , m = t.n(f)
          , h = t(18149)
          , p = t.n(h)
          , v = (0,
        t(5118).Z)("ShieldOff", [["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }], ["path", {
            d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
            key: "1jlk70"
        }], ["path", {
            d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
            key: "18rp1v"
        }]])
          , g = t(25297)
          , y = t(10856)
          , w = t(95331)
          , b = t(25237)
          , x = t.n(b)
          , k = t(2784)
          , S = t(52829)
          , I = t(35505)
          , _ = t(62672)
          , j = t(88997)
          , T = t(939)
          , C = t(66608)
          , Z = t(1345)
          , P = t(85769)
          , E = t(9067)
          , M = t(47445)
          , O = t(70460)
          , D = I.ZP.div.withConfig({
            componentId: "sc-dfa83009-0"
        })(["display:flex;background:", ";direction:", ";", " ", ""], function(e) {
            return e.theme.color.background
        }, function(e) {
            return e.theme.direction
        }, function(e) {
            return e.styles.transparentBackground && "\n    background: transparent;\n  "
        }, function(e) {
            return e.styles.alignLeft && "\n    overflow: hidden;\n  "
        })
          , F = I.ZP.main.withConfig({
            componentId: "sc-dfa83009-1"
        })(["display:flex;flex-direction:column;width:100%;height:auto;min-height:100vh;", " ", ""], function(e) {
            var n = e.styles;
            return (n.popup || n.embed && n.dynamicHeight) && "\n    height: auto;\n    min-height: auto;\n  "
        }, function(e) {
            var n = e.styles;
            return (n.popup || n.embed && n.dynamicHeight) && n.lastPageHeight && "\n    min-height: ".concat(n.lastPageHeight, "px;\n  ")
        })
          , N = function(e) {
            var n = e.metaData
              , t = e.integrations
              , r = e.styles
              , o = e.children;
            return (0,
            c.jsx)(k.Fragment, {
                children: (0,
                c.jsxs)(D, {
                    className: "tally-app",
                    styles: r,
                    children: [(0,
                    c.jsx)(O.Z, {
                        metaData: n,
                        integrations: t
                    }), (0,
                    c.jsx)(F, {
                        styles: r,
                        children: o
                    })]
                })
            })
        }
          , L = t(19653)
          , U = function(e, n) {
            (0,
            k.useEffect)(function() {
                if (n.isCustomDomain && document && document.querySelectorAll) {
                    var e = document.querySelectorAll("form a");
                    e && 0 !== e.length && e.forEach && e.forEach(function(e) {
                        var n;
                        e && e.getAttribute && 0 === (null !== (n = e.getAttribute("href")) && void 0 !== n ? n : "").indexOf(window.location.origin) && "_blank" === e.getAttribute("target") && e.removeAttribute("target")
                    })
                }
            }, [e])
        }
          , B = t(1323)
          , A = t(44221)
          , J = function(e) {
            var n = (0,
            u._)((0,
            k.useState)(1), 2)
              , t = n[0]
              , r = n[1]
              , o = (0,
            k.useMemo)(function() {
                return (0,
                A.O6)(e)
            }, [t]);
            return (0,
            k.useEffect)(function() {
                var e = function(e) {
                    var n;
                    (null === (n = e.key) || void 0 === n ? void 0 : n.includes("FORM_SESSION_")) && r(function(e) {
                        return e + 1
                    })
                };
                return window.addEventListener("storage", e),
                function() {
                    window.removeEventListener("storage", e)
                }
            }, []),
            o
        }
          , H = t(16761)
          , R = t(93278)
          , Y = t(92833)
          , q = "tally-page-transition"
          , V = t(81248)
          , W = t(85053)
          , z = 0
          , G = !1
          , Q = function() {
            return !!(window && window.fbq)
        }
          , X = function(e) {
            Q() ? e() : ++z < 5 ? setTimeout(function() {
                X(e)
            }, 1e3 * z + 100) : G = !0
        }
          , $ = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Q() ? fbq("trackCustom", e, n) : G || X(function() {
                $(e, n)
            })
        }
          , K = 0
          , ee = !1
          , en = function() {
            return !!(window && window.gtag)
        }
          , et = function(e) {
            en() ? e() : ++K < 5 ? setTimeout(function() {
                et(e)
            }, 1e3 * K + 100) : ee = !0
        }
          , er = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            en() ? gtag("event", e, (0,
            a._)((0,
            i._)({}, n), {
                non_interaction: !0
            })) : ee || et(function() {
                er(e, n)
            })
        }
          , eo = t(48655)
          , ei = t(21119)
          , ea = t(60528)
          , eu = t(14505)
          , es = t(25342)
          , el = t(50088)
          , ec = t(44934)
          , ed = t(10490)
          , ef = x()(function() {
            return t.e(2699).then(t.bind(t, 62699))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [62699]
                }
            },
            ssr: !0
        })
          , em = x()(function() {
            return t.e(5833).then(t.bind(t, 3502))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [3502]
                }
            },
            ssr: !1
        })
          , eh = !1
          , ep = !0
          , ev = !1
          , eg = {}
          , ey = {}
          , ew = function(e) {
            var n, t, f, h, b, x, O, D, F, z, G = e.formId, X = e.workspaceId, K = e.name, ee = e.blocks, et = e.isClosed, ew = e.isPreview, eb = e.settings, ex = e.metaData, ek = e.integrations, eS = e.styles, eI = e.subscriptionPlan, e_ = e.hasError, ej = e.isNotFoundError, eT = (0,
            S.$)().t, eC = (0,
            I.Fg)(), eZ = (0,
            u._)((0,
            k.useState)(!1), 2), eP = eZ[0], eE = eZ[1], eM = (0,
            u._)((0,
            k.useState)(), 2), eO = eM[0], eD = eM[1], eF = (0,
            u._)((0,
            k.useState)(1), 2), eN = eF[0], eL = eF[1], eU = (0,
            u._)((0,
            k.useState)([1]), 2), eB = eU[0], eA = eU[1], eJ = (0,
            u._)((0,
            k.useState)(!1), 2), eH = eJ[0], eR = eJ[1], eY = (0,
            u._)((0,
            k.useState)({}), 2), eq = eY[0], eV = eY[1], eW = (0,
            u._)((0,
            k.useState)({
                formName: K
            }), 2), ez = eW[0], eG = eW[1], eQ = (0,
            u._)((0,
            k.useState)(!1), 2), eX = eQ[0], e$ = eQ[1], eK = (0,
            k.useMemo)(function() {
                return (0,
                eu.x8)((0,
                eu.UU)(ee))
            }, []), e0 = J(G), e1 = (0,
            k.useMemo)(function() {
                return (0,
                A.bZ)(X)
            }, []), e2 = (0,
            B.ZP)({
                mode: "respond",
                formId: G,
                blocks: ee,
                settings: eb,
                page: eN,
                pages: eK,
                pageHistory: eB
            }), e5 = e2.formData, e4 = e2.onChangeFormData, e3 = (0,
            A.Tp)(eN, eK, ee, eb, e5, e4), e7 = e3.buttonLabel, e9 = e3.canAutoJumpToNextPage, e8 = e3.cover, e6 = e3.coverSettings, ne = e3.isCustomThankYouPage, nn = e3.isLastInputPage, nt = e3.logo, nr = e3.nextPage, no = e3.pageBlocks, ni = e3.pageFilledIn, na = e3.pageQuestions, nu = e3.showBackButton, ns = e3.showMaliciousFormWarning, nl = e3.showSubmitButton, nc = (0,
            H.Z)((0,
            i._)({}, e5, eq), no, na, function(e) {
                return nN(e)
            }, function() {
                return nU()
            }), nd = nc.formErrors, nf = nc.isPaying, nm = nc.showPayDisclaimer, nh = nc.onSubmit, np = nc.setFormErrors, nv = ((0,
            k.useEffect)(function() {
                return function() {
                    document.body.classList.remove(q)
                }
            }, []),
            (0,
            k.useEffect)(function() {
                setTimeout(function() {
                    document.body.classList.remove(q)
                }, 50)
            }, [eN]),
            function() {
                document.body.classList.add(q)
            }
            );
            ex = (0,
            a._)((0,
            i._)({}, ex), {
                isFormRespondPage: !0,
                isFormEmbedded: (0,
                ei.yL)(),
                title: ex.title || K || eT("title.form"),
                description: ex.description || (eS.removeBranding ? "" : eT("description.respond")),
                imageUrl: ex.imageUrl || e8 || "",
                font: (null == eb ? void 0 : null === (O = eb.styles) || void 0 === O ? void 0 : O.font) || void 0,
                language: null !== (D = null == eb ? void 0 : eb.language) && void 0 !== D ? D : d.SQ.English,
                doNotTrack: ew,
                doNotSearchIndex: !ex.isCustomDomain
            }),
            eS.withMedia = !!nt || !!e8;
            var ng = !eP && !eS.removeBranding
              , ny = null != e7 ? e7 : eT(nn ? "label.submit" : "label.next")
              , nw = !!(null == eb ? void 0 : eb.isPasswordProtected)
              , nb = (0,
            u._)((0,
            k.useState)(""), 2)
              , nx = nb[0]
              , nk = nb[1]
              , nS = function() {
                (0,
                ec.B)(ec.I.TallyFormPageView, {
                    formId: G,
                    page: eN
                }),
                (0,
                ei.yL)() && (0,
                ei.TZ)({
                    event: ec.I.TallyFormPageView,
                    payload: {
                        formId: G,
                        page: eN
                    }
                }),
                en() && er(ec.I.TallyFormPageView, {
                    event_category: window.location.pathname,
                    event_label: "Page ".concat(eN)
                }),
                Q() && $(ec.I.TallyFormPageView, {
                    content_category: window.location.pathname,
                    value: eN
                })
            }
              , nI = function(e, n) {
                var t = (0,
                A.X1)(e, n, G, K, ee, e5);
                (0,
                ec.B)(ec.I.TallyFormSubmitted, t),
                (0,
                ei.yL)() && (0,
                ei.TZ)({
                    event: ec.I.TallyFormSubmitted,
                    payload: t
                }),
                en() && er(ec.I.TallyFormSubmitted, {
                    event_category: window.location.pathname,
                    event_label: K
                }),
                Q() && $(ec.I.TallyFormSubmitted, {
                    content_category: window.location.pathname,
                    content_name: K
                })
            }
              , n_ = function(e) {
                var n = eK[e - 1];
                if (n) {
                    var t = n.filter(function(e) {
                        return e.type === d.kH.Captcha
                    }).map(function(e) {
                        return e.groupUuid
                    });
                    if (0 !== t.length) {
                        var r = !1
                          , o = (0,
                        i._)({}, eq)
                          , a = !0
                          , u = !1
                          , s = void 0;
                        try {
                            for (var l, c = t[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                                var f = l.value;
                                o[f] && ((0,
                                ec.B)(ec.I.CaptchaReset, {
                                    response: o[f].response
                                }),
                                delete o[f],
                                r = !0)
                            }
                        } catch (e) {
                            u = !0,
                            s = e
                        } finally {
                            try {
                                a || null == c.return || c.return()
                            } finally {
                                if (u)
                                    throw s
                            }
                        }
                        r && eV(o)
                    }
                }
            }
              , nj = function(e) {
                var n;
                nv(),
                eL(e),
                null === (n = window) || void 0 === n || n.scrollTo(0, 0)
            }
              , nT = (0,
            Y.Z)(e5, no, e9, ni, function() {
                return nU()
            })
              , nC = nT.isAutoJumping
              , nZ = nT.setIsAutoJumping
              , nP = nT.setLastChangedGroupUuid
              , nE = function() {
                if (nC && nZ(!1),
                eP) {
                    eE(!1);
                    return
                }
                var e = eB[eB.length - 2];
                e && (eA(eB.slice(0, -1)),
                nj(e))
            }
              , nM = function(e) {
                var n = 0
                  , t = !0
                  , r = !1
                  , o = void 0;
                try {
                    for (var i, a = eK[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        var u = i.value;
                        if (n++,
                        u.find(function(n) {
                            return n.groupUuid === e
                        })) {
                            var s = eB.indexOf(n);
                            return -1 !== s && eA(eB.slice(0, s + 1)),
                            nj(n),
                            n
                        }
                    }
                } catch (e) {
                    r = !0,
                    o = e
                } finally {
                    try {
                        t || null == a.return || a.return()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return null
            }
              , nO = (n = (0,
            r._)(function() {
                var e;
                return (0,
                l.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        if (ew || ev || p()(eg, ey))
                            return [2];
                        ev = !0,
                        e = (0,
                        i._)({}, eg),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]),
                        [4, W.ZP.post("/forms/".concat(G, "/respond"), {
                            sessionUuid: e0,
                            respondentUuid: e1,
                            responses: e,
                            isCompleted: !1,
                            password: nx
                        })];
                    case 2:
                    case 3:
                        return n.sent(),
                        [3, 4];
                    case 4:
                        for (var t in ep = !1,
                        ev = !1,
                        ey = (0,
                        i._)({}, e),
                        e)
                            delete eg[t];
                        return Object.keys(eg).length > 0 && nO(),
                        [2]
                    }
                })
            }),
            function() {
                return n.apply(this, arguments)
            }
            )
              , nD = (0,
            k.useRef)(m()(nO, 2e3)).current
              , nF = (t = (0,
            r._)(function() {
                var e, n, t, r, o, i, a, u, s, c, d = arguments;
                return (0,
                l.Jh)(this, function(l) {
                    switch (l.label) {
                    case 0:
                        e = d.length > 0 && void 0 !== d[0] ? d[0] : 0,
                        l.label = 1;
                    case 1:
                        return l.trys.push([1, 3, , 6]),
                        [4, W.ZP.post("/forms/".concat(G, "/respond"), {
                            sessionUuid: e0,
                            respondentUuid: e1,
                            responses: e5,
                            captchas: eq,
                            isCompleted: !0,
                            password: nx
                        })];
                    case 2:
                        return t = (n = l.sent().data).submissionId,
                        r = n.respondentId,
                        eh = !0,
                        [2, {
                            submissionId: t,
                            respondentId: r
                        }];
                    case 3:
                        if ((null == (c = o = l.sent()) ? void 0 : null === (a = c.response) || void 0 === a ? void 0 : null === (i = a.data) || void 0 === i ? void 0 : i.errorType) === "INVALID_CAPTCHA" || (null == c ? void 0 : null === (s = c.response) || void 0 === s ? void 0 : null === (u = s.data) || void 0 === u ? void 0 : u.errorType) === "FORM_UNIQUE_SUBMISSION_CONFLICT" || e >= 3)
                            return [2, {
                                submissionId: void 0,
                                respondentId: void 0,
                                error: o
                            }];
                        return [4, (0,
                        ea._)((e + 1) * 5e3)];
                    case 4:
                        return l.sent(),
                        [4, nF(e + 1)];
                    case 5:
                        return [2, l.sent()];
                    case 6:
                        return [2]
                    }
                })
            }),
            function() {
                return t.apply(this, arguments)
            }
            )
              , nN = (f = (0,
            r._)(function(e) {
                return (0,
                l.Jh)(this, function(n) {
                    return e4(e),
                    eg = (0,
                    i._)({}, eg, e),
                    nO(),
                    [2]
                })
            }),
            function(e) {
                return f.apply(this, arguments)
            }
            )
              , nL = (h = (0,
            r._)(function() {
                var e, n, t, r, u, c, f, m, h, p, v, g;
                return (0,
                l.Jh)(this, function(l) {
                    switch (l.label) {
                    case 0:
                        if (ew)
                            return eh = !0,
                            [2];
                        if (eH)
                            return [2];
                        if (eR(!0),
                        eD(void 0),
                        !nD)
                            return [3, 3];
                        return [4, nD.flush()];
                    case 1:
                        return l.sent(),
                        [4, (0,
                        ea.X)(function() {
                            return !ev
                        })];
                    case 2:
                        l.sent(),
                        l.label = 3;
                    case 3:
                        return [4, nF()];
                    case 4:
                        if (n = (e = l.sent()).submissionId,
                        t = e.respondentId,
                        r = e.error,
                        eG(function(e) {
                            return (0,
                            a._)((0,
                            i._)({}, e), {
                                id: n,
                                respondentId: t
                            })
                        }),
                        r) {
                            if ((null == r ? void 0 : null === (c = r.response) || void 0 === c ? void 0 : null === (u = c.data) || void 0 === u ? void 0 : u.errorType) === "INVALID_CAPTCHA")
                                try {
                                    if (h = r.response.data.errors[0].field,
                                    p = nM(h),
                                    null !== p)
                                        return np((0,
                                        o._)({}, h, [d.d2.ShouldSolveCaptcha])),
                                        n_(p),
                                        eR(!1),
                                        [2]
                                } catch (e) {
                                    (0,
                                    eo.Tb)(e)
                                }
                            if ((null == r ? void 0 : null === (m = r.response) || void 0 === m ? void 0 : null === (f = m.data) || void 0 === f ? void 0 : f.errorType) === "FORM_UNIQUE_SUBMISSION_CONFLICT")
                                return e$(!0),
                                eR(!1),
                                [2];
                            return eD(r),
                            (0,
                            eo.Tb)(r),
                            (0,
                            eo.uT)("Form submit: error", {
                                extra: {
                                    formId: G,
                                    sessionUuid: e0,
                                    respondentUuid: e1,
                                    formData: JSON.stringify(null != e5 ? e5 : {}),
                                    isFormEmbedded: ex.isFormEmbedded
                                }
                            }),
                            nE(),
                            eR(!1),
                            [2]
                        }
                        if (!n || !t)
                            return (0,
                            eo.uT)("Form submit: missing submissionId", {
                                extra: {
                                    formId: G,
                                    sessionUuid: e0,
                                    respondentUuid: e1,
                                    formData: JSON.stringify(null != e5 ? e5 : {}),
                                    isFormEmbedded: ex.isFormEmbedded
                                }
                            }),
                            nE(),
                            eR(!1),
                            [2];
                        try {
                            nI(n, t),
                            (0,
                            A.Md)(G),
                            (0,
                            A.lL)(G),
                            (0,
                            es.LI)(Object.keys(e5))
                        } catch (e) {
                            (0,
                            eo.Tb)(e),
                            (0,
                            eo.uT)("Form submit: post-submit action failed", {
                                extra: {
                                    formId: G,
                                    sessionUuid: e0,
                                    respondentUuid: e1,
                                    formData: JSON.stringify(null != e5 ? e5 : {}),
                                    isFormEmbedded: ex.isFormEmbedded
                                }
                            })
                        }
                        if (null == eb ? void 0 : eb.redirectOnCompletion)
                            try {
                                return v = (0,
                                el.F2)(eb.redirectOnCompletion, ee, e5, {
                                    id: n,
                                    respondentId: t,
                                    formName: K
                                }),
                                (0,
                                ei.yL)() ? window.top && (window.top.location.href = v) : window.location.href = v,
                                [2]
                            } catch (e) {
                                if (null === nr)
                                    return eS.lastPageHeight = Math.min(document.body.clientHeight, window.innerHeight),
                                    eE(!0),
                                    null === (g = window) || void 0 === g || g.scrollTo(0, 0),
                                    [2];
                                eA((0,
                                s._)(eB).concat([nr])),
                                nj(nr)
                            }
                        return eR(!1),
                        [2]
                    }
                })
            }),
            function() {
                return h.apply(this, arguments)
            }
            )
              , nU = (b = (0,
            r._)(function() {
                var e;
                return (0,
                l.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        if (!(!eh && !eH && nn))
                            return [3, 2];
                        return [4, nL()];
                    case 1:
                        if (n.sent(),
                        (null == eb ? void 0 : eb.redirectOnCompletion) || !eh)
                            return [2];
                        n.label = 2;
                    case 2:
                        if (null === nr)
                            return eS.lastPageHeight = Math.min(document.body.clientHeight, window.innerHeight),
                            eE(!0),
                            null === (e = window) || void 0 === e || e.scrollTo(0, 0),
                            [2];
                        return eA((0,
                        s._)(eB).concat([nr])),
                        nj(nr),
                        [2]
                    }
                })
            }),
            function() {
                return b.apply(this, arguments)
            }
            );
            if ((0,
            k.useEffect)(function() {
                (0,
                ec.B)(ec.I.TallyFormLoaded, {
                    formId: G
                }),
                (0,
                ei.yL)() && (0,
                ei.TZ)({
                    event: ec.I.TallyFormLoaded,
                    payload: {
                        formId: G
                    }
                })
            }, []),
            (0,
            k.useEffect)(function() {
                nS(),
                Object.keys(eq).length > 0 && n_(eN),
                (!(0,
                ei.tq)() && !(0,
                ei.yL)() || eS.popup || eS.embed && 1 !== eN) && (0,
                A.Sz)()
            }, [eN]),
            (0,
            R.Z)(ee, no, e5, ez, void 0, eT),
            U(eN, ex),
            (0,
            V.Z)(function() {
                return !(0,
                ei.yL)() && !eh && !eX && Object.keys(e5).length > 0
            }, eT("form-respond.not-submitted-data-warning"), [e5, eX]),
            e_)
                return (0,
                c.jsxs)(N, {
                    metaData: ex,
                    integrations: ek,
                    styles: eS,
                    children: [ej ? (0,
                    c.jsx)(j.Z, {
                        title: eT("error.404.title"),
                        description: eT("error.404.description")
                    }) : (0,
                    c.jsx)(j.Z, {}), !eS.removeBranding && (0,
                    c.jsx)(ed.Oi, {
                        children: (0,
                        c.jsx)(em, {
                            mode: "respond",
                            styles: eS
                        })
                    })]
                });
            if (eX)
                return (0,
                c.jsxs)(N, {
                    metaData: ex,
                    integrations: ek,
                    styles: eS,
                    children: [(0,
                    c.jsx)(j.Z, {
                        icon: v,
                        title: eT("form-respond.unique-submission-conflict.title"),
                        description: eT("form-respond.unique-submission-conflict.description")
                    }), !eS.removeBranding && (0,
                    c.jsx)(ed.Oi, {
                        children: (0,
                        c.jsx)(em, {
                            mode: "respond",
                            styles: eS
                        })
                    })]
                });
            if (nw && !nx)
                return (0,
                c.jsxs)(N, {
                    metaData: ex,
                    integrations: ek,
                    styles: eS,
                    children: [(0,
                    c.jsx)(ef, {
                        formId: G,
                        onUnlock: function(e) {
                            return nk(e)
                        }
                    }), !eS.removeBranding && (0,
                    c.jsx)(ed.Oi, {
                        children: (0,
                        c.jsx)(em, {
                            mode: "respond",
                            styles: eS
                        })
                    })]
                });
            if (et) {
                var nB = (null == eb ? void 0 : eb.closeMessageTitle) || eT("form-respond.closed.title")
                  , nA = (null == eb ? void 0 : eb.closeMessageDescription) || eT("form-respond.closed.description");
                return ex.title = nB,
                ex.description = nA,
                (0,
                c.jsxs)(N, {
                    metaData: ex,
                    integrations: ek,
                    styles: eS,
                    children: [(0,
                    c.jsx)(j.Z, {
                        icon: g.Z,
                        title: nB,
                        description: (null == eb ? void 0 : eb.closeMessageDescription) || eT("form-respond.closed.description")
                    }), !eS.removeBranding && (0,
                    c.jsx)(ed.Oi, {
                        children: (0,
                        c.jsx)(em, {
                            mode: "respond",
                            styles: eS
                        })
                    })]
                })
            }
            return (0,
            c.jsxs)(N, {
                metaData: ex,
                integrations: ek,
                styles: eS,
                children: [(null == eb ? void 0 : eb.hasProgressBar) && !eP && !ne && (0,
                c.jsx)(E.Z, {
                    currentPage: eN,
                    currentPageBlocks: no,
                    pages: eK,
                    formData: e5,
                    blocks: ee,
                    hasCover: void 0 !== e8,
                    popup: eS.popup,
                    embed: eS.embed
                }), e8 && (0,
                c.jsx)(Z.Z, {
                    cover: e8,
                    settings: e6,
                    styles: eS
                }), nt && (0,
                c.jsx)(P.default, {
                    logo: nt,
                    withCover: !!e8,
                    styles: eS
                }), (0,
                c.jsxs)(ed.VY, {
                    className: "tally-page".concat(eP ? "" : " tally-page-".concat(eN)).concat(eP || ne ? " tally-page-thank-you" : ""),
                    styles: eS,
                    page: eN,
                    isDefaultThankYouPage: eP,
                    isCustomThankYouPage: ne,
                    hasProgressBar: null == eb ? void 0 : eb.hasProgressBar,
                    children: [!eP && nu && (0,
                    c.jsx)(ed.OQ, {
                        className: "tally-back-button",
                        children: (0,
                        c.jsx)(_.Z, {
                            icon: "rtl" === eC.direction ? y.Z : w.Z,
                            value: eT("label.back"),
                            variant: "ghost-secondary",
                            onClick: nE
                        })
                    }), eP ? (0,
                    c.jsx)(M.Z, {
                        mode: "respond",
                        styles: eS
                    }) : (0,
                    c.jsxs)("form", {
                        onSubmit: function(e) {
                            nl || e.preventDefault()
                        },
                        children: [(0,
                        c.jsx)("progress", {
                            max: eK.length,
                            value: eN,
                            children: eT("form-respond.progress", {
                                page: eN,
                                pages: eK.length
                            })
                        }), eO && (0,
                        c.jsx)(T.Z, {
                            exception: eO
                        }), (0,
                        c.jsx)(C.Z, {
                            blocks: ee,
                            pageBlocks: no,
                            formData: e5,
                            errors: nd,
                            mode: "respond",
                            formId: G,
                            workspaceId: X,
                            subscriptionPlan: eI,
                            hasPartialSubmissions: null !== (F = null == eb ? void 0 : eb.hasPartialSubmissions) && void 0 !== F && F,
                            language: null !== (z = null == eb ? void 0 : eb.language) && void 0 !== z ? z : d.SQ.English,
                            styles: eS,
                            respondentUuid: e1,
                            sessionUuid: e0,
                            onChange: function(e, n) {
                                nC || (nP(e),
                                e4((0,
                                o._)({}, e, n)))
                            },
                            onSaveResponse: (x = (0,
                            r._)(function(e) {
                                var n;
                                return (0,
                                l.Jh)(this, function(t) {
                                    return nC || ((0,
                                    d.QS)(eI) && (null == eb ? void 0 : eb.hasPartialSubmissions) ? (n = (0,
                                    A.zj)((0,
                                    i._)({}, e5, e), eB, eK, ee),
                                    eg = ep ? (0,
                                    i._)({}, eg, e5, n, e) : (0,
                                    i._)({}, eg, n, e)) : eg = (0,
                                    i._)({}, eg, e),
                                    nD()),
                                    [2]
                                })
                            }),
                            function(e) {
                                return x.apply(this, arguments)
                            }
                            ),
                            onSolveCaptcha: function(e) {
                                eV((0,
                                i._)({}, eq, e))
                            }
                        }), nl && (0,
                        c.jsxs)(k.Fragment, {
                            children: [(0,
                            c.jsxs)(ed.YD, {
                                className: "tally-submit-button",
                                children: [(0,
                                c.jsx)("div", {
                                    children: (0,
                                    c.jsx)(_.Z, {
                                        type: "submit",
                                        icon: "rtl" === eC.direction ? w.Z : y.Z,
                                        iconPosition: "right",
                                        value: ny,
                                        variant: "primary",
                                        size: "big",
                                        isLoading: eH || nC || nf,
                                        onClick: nh
                                    })
                                }), ng && (0,
                                c.jsx)("div", {
                                    children: (0,
                                    c.jsx)(em, {
                                        mode: "respond",
                                        styles: eS
                                    })
                                })]
                            }), nm && (0,
                            c.jsx)(ed.em, {
                                dangerouslySetInnerHTML: {
                                    __html: eT("form-respond.pay-disclaimer", {
                                        buttonText: (0,
                                        d.Vt)(ny)
                                    })
                                }
                            }), ns && (0,
                            c.jsx)(ed.em, {
                                dangerouslySetInnerHTML: {
                                    __html: eT("form-respond.password-warning", {
                                        reportUrl: L.Z.get("help-links.report-abuse")
                                    })
                                }
                            })]
                        })]
                    }), ng && ne && (0,
                    c.jsx)(ed.Oi, {
                        children: (0,
                        c.jsx)(em, {
                            mode: "respond",
                            styles: eS,
                            isOnThankYouPage: !0,
                            isOnCustomThankYouPage: !0
                        })
                    })]
                })]
            })
        }
    },
    939: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(52322)
          , o = t(52829)
          , i = t(35505).ZP.div.withConfig({
            componentId: "sc-9a754ac4-0"
        })(["color:", ";font-weight:bold;padding:", ";border:2px solid ", ";border-radius:5px;background-color:rgba(217,57,0,0.08);margin-bottom:", ";line-height:20px;"], function(e) {
            return e.theme.color.error
        }, function(e) {
            return e.theme.spacing.sm
        }, function(e) {
            return e.theme.color.error
        }, function(e) {
            return e.theme.spacing.md
        })
          , a = function(e) {
            var n = e.errorType
              , t = e.errorText
              , a = e.exception
              , u = (0,
            o.$)().t
              , s = "";
            if (a) {
                var l, c = a.response;
                (null == c ? void 0 : null === (l = c.data) || void 0 === l ? void 0 : l.errorType) ? n = c.data.errorType : a && "Network Error" === a.message || (null == c ? void 0 : c.status) === 0 ? n = "NETWORK_ERROR" : !c && a && a.message ? s = a.message : n = "GENERAL"
            }
            return n && (s = u("error.".concat(n))) === "error.".concat(n) && (s = u("error.GENERAL")),
            t && (s = t),
            (0,
            r.jsx)(i, {
                role: "alert",
                children: s
            })
        }
    },
    18302: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return s
            }
        });
        var r = t(85333)
          , o = t(52322)
          , i = t(2784)
          , a = t(35505).ZP.textarea.withConfig({
            componentId: "sc-2007db8-0"
        })(["width:100%;min-height:96px;padding:12px;color:", ";caret-color:", ";background-color:", ";box-shadow:", ";border:0;border-radius:5px;outline:none;@media (hover:hover){&:hover{box-shadow:", ";}}&:focus{box-shadow:", ";}&::placeholder{color:", ";}"], function(e) {
            return e.theme.color.text
        }, function(e) {
            return e.theme.color.text
        }, function(e) {
            return e.theme.color.inputBackground
        }, function(e) {
            return e.theme.color.inputBoxShadow
        }, function(e) {
            return e.theme.color.inputBoxShadowHover
        }, function(e) {
            return e.theme.color.inputBoxShadowFocus
        }, function(e) {
            return e.theme.color.inputPlaceholder
        })
          , u = (0,
        i.forwardRef)(function(e, n) {
            return (0,
            o.jsx)(a, (0,
            r._)({
                ref: n
            }, e))
        });
        u.displayName = "Textarea";
        var s = u
    },
    81248: function(e, n, t) {
        "use strict";
        var r = t(5632)
          , o = t(2784);
        n.Z = function(e, n, t) {
            var i = (0,
            r.useRouter)()
              , a = (0,
            o.useCallback)(function(t) {
                if (e && e()) {
                    if (t.preventDefault)
                        t.preventDefault(),
                        t.returnValue = "";
                    else if (!confirm(n))
                        throw "routeChangeStopped"
                }
            }, t);
            (0,
            o.useEffect)(function() {
                var e, n;
                return null === (e = window) || void 0 === e || e.addEventListener("beforeunload", a),
                null == i || null === (n = i.events) || void 0 === n || n.on("routeChangeStart", a),
                function() {
                    var e, n;
                    null === (e = window) || void 0 === e || e.removeEventListener("beforeunload", a),
                    null == i || null === (n = i.events) || void 0 === n || n.off("routeChangeStart", a)
                }
            }, [a])
        }
    },
    57377: function(e, n, t) {
        "use strict";
        t.d(n, {
            Tn: function() {
                return i
            },
            _4: function() {
                return o
            },
            wf: function() {
                return r
            }
        });
        var r = function(e) {
            try {
                var n, t, r;
                return null === (r = window) || void 0 === r ? void 0 : null === (t = r.localStorage) || void 0 === t ? void 0 : null === (n = t.getItem) || void 0 === n ? void 0 : n.call(t, e)
            } catch (e) {
                return null
            }
        }
          , o = function(e, n) {
            try {
                var t, r, o;
                null === (o = window) || void 0 === o || null === (r = o.localStorage) || void 0 === r || null === (t = r.setItem) || void 0 === t || t.call(r, e, n)
            } catch (e) {}
        }
          , i = function(e) {
            try {
                var n, t, r;
                null === (r = window) || void 0 === r || null === (t = r.localStorage) || void 0 === t || null === (n = t.removeItem) || void 0 === n || n.call(t, e)
            } catch (e) {}
        }
    },
    82579: function(e, n, t) {
        "use strict";
        t.d(n, {
            $I: function() {
                return h
            },
            BK: function() {
                return y
            },
            J$: function() {
                return x
            },
            KB: function() {
                return w
            },
            Tu: function() {
                return v
            },
            _K: function() {
                return g
            },
            tu: function() {
                return b
            },
            wU: function() {
                return p
            }
        });
        var r = t(43526)
          , o = t(41504)
          , i = t(40692)
          , a = t(11494)
          , u = t(71373)
          , s = t(30244)
          , l = t(25072)
          , c = t(98491)
          , d = t(57156)
          , f = t.n(d)
          , m = t(48655)
          , h = function(e) {
            if (null != e) {
                if ("string" == typeof e) {
                    var n = (0,
                    o.D)(e);
                    return (0,
                    i.J)(n) ? n : void 0
                }
                return e
            }
        }
          , p = function(e, n) {
            var t = n.regexp
              , i = n.monthsShort
              , a = n.dayIndex
              , u = void 0 === a ? -1 : a
              , s = n.monthIndex
              , l = void 0 === s ? -1 : s
              , c = n.yearIndex
              , d = void 0 === c ? -1 : c
              , h = n.monthNumberIndex
              , p = void 0 === h ? -1 : h;
            try {
                var v = !0
                  , g = !1
                  , y = void 0;
                try {
                    for (var w, b, x = f()(e, RegExp(t, "ig"))[Symbol.iterator](); !(v = (b = x.next()).done); v = !0) {
                        var k = b.value;
                        if (k[d] && k[u] && (k[l] || k[p])) {
                            var S = k[p] ? parseFloat(k[p]) - 1 : i.indexOf(k[l]);
                            S >= 0 && S <= 11 && (w = (0,
                            o.D)("".concat((0,
                            r.Sk)(k[d], 4, "0"), "-").concat((0,
                            r.Sk)(S + 1, 2, "0"), "-").concat((0,
                            r.Sk)(k[u], 2, "0"))))
                        }
                    }
                } catch (e) {
                    g = !0,
                    y = e
                } finally {
                    try {
                        v || null == x.return || x.return()
                    } finally {
                        if (g)
                            throw y
                    }
                }
            } catch (t) {
                (0,
                m.Tb)(t, {
                    extra: {
                        date: e,
                        payload: n
                    }
                })
            }
            return w
        }
          , v = function(e) {
            var n = new Date
              , t = new Date(e);
            return n.getFullYear() === t.getFullYear() ? (0,
            a.WU)(new Date(e), "MMM d") : (0,
            a.WU)(new Date(e), "MMM d, yyyy")
        }
          , g = function(e) {
            var n = new Date
              , t = new Date(e);
            return n.getFullYear() === t.getFullYear() ? (0,
            a.WU)(new Date(e), "MMM d, hh:mm a") : (0,
            a.WU)(new Date(e), "MMM d, yyyy hh:mm a")
        }
          , y = function(e, n) {
            var t = new Date
              , r = new Date(e)
              , o = g(e);
            return 1 > (0,
            u.X)(t, r) ? o = n("label.just-now") : 1 > (0,
            s.j)(t, r) && (o = n("label.time-ago", {
                period: (0,
                l.H)(t, r, {
                    addSuffix: !1
                })
            })),
            o
        }
          , w = function(e, n) {
            var t = new Date
              , r = new Date(e);
            return 1 > (0,
            u.X)(t, r) ? n("label.just-now").toLowerCase() : 1 > (0,
            c.A)(t, r) ? n("label.time-ago", {
                period: "".concat((0,
                u.X)(t, r), "m")
            }) : 1 > (0,
            s.j)(t, r) ? n("label.time-ago", {
                period: "".concat((0,
                c.A)(t, r), "h")
            }) : 4 > (0,
            s.j)(t, r) ? n("label.time-ago", {
                period: "".concat((0,
                s.j)(t, r), "d")
            }) : v(e)
        }
          , b = function(e) {
            return JSON.parse(e("json.date-locale")).weekdays
        }
          , x = function(e) {
            var n = JSON.parse(e("json.date-locale"))
              , t = n.code
              , r = n.format
              , o = n.months
              , i = n.monthsShort;
            return {
                f: r,
                months: o,
                monthsShort: i,
                weekdays: n.weekdays,
                weekdaysShort: n.weekdaysShort,
                locale: {
                    code: t,
                    formatLong: {
                        date: function() {
                            return r
                        }
                    },
                    localize: {
                        month: function(e) {
                            return i[e]
                        }
                    }
                }
            }
        }
    },
    25342: function(e, n, t) {
        "use strict";
        t.d(n, {
            LI: function() {
                return u
            },
            R1: function() {
                return i
            },
            US: function() {
                return a
            }
        });
        var r = t(57377)
          , o = "PHONE_NUMBER_INPUT"
          , i = function(e, n, t) {
            try {
                var i = {}
                  , a = (0,
                r.wf)(o);
                a && (i = JSON.parse(a)),
                i.keys || (i.keys = {}),
                i.lastCountryCode = t || i.lastCountryCode || null,
                n || t ? i.keys[e] = {
                    value: n,
                    countryCode: t
                } : delete i.keys[e],
                localStorage.setItem(o, JSON.stringify(i))
            } catch (e) {}
        }
          , a = function(e, n, t) {
            try {
                var i = {}
                  , a = (0,
                r.wf)(o);
                if (a) {
                    if (i = JSON.parse(a),
                    !n && !t && i.lastCountryCode)
                        return i.lastCountryCode;
                    if (i.keys && i.keys[e] && n === i.keys[e].value && i.keys[e].countryCode)
                        return i.keys[e].countryCode
                }
            } catch (e) {}
            return null
        }
          , u = function(e) {
            try {
                var n = (0,
                r.wf)(o);
                if (!n)
                    return;
                var t = JSON.parse(n);
                if (!t.keys)
                    return;
                var i = !1
                  , a = !0
                  , u = !1
                  , s = void 0;
                try {
                    for (var l, c = e[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                        var d = l.value;
                        t.keys[d] && (delete t.keys[d],
                        i = !0)
                    }
                } catch (e) {
                    u = !0,
                    s = e
                } finally {
                    try {
                        a || null == c.return || c.return()
                    } finally {
                        if (u)
                            throw s
                    }
                }
                0 === Object.keys(t.keys).length && (delete t.keys,
                i = !0),
                i && localStorage.setItem(o, JSON.stringify(t))
            } catch (e) {}
        }
    },
    95331: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return r
            }
        });
        var r = (0,
        t(5118).Z)("ArrowLeft", [["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }], ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]])
    },
    10856: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return r
            }
        });
        var r = (0,
        t(5118).Z)("ArrowRight", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }], ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]])
    },
    5851: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return r
            }
        });
        var r = (0,
        t(5118).Z)("Check", [["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]])
    },
    25297: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return r
            }
        });
        var r = (0,
        t(5118).Z)("EyeOff", [["path", {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }], ["path", {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }], ["path", {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }], ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }]])
    },
    17553: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return r
            }
        });
        var r = (0,
        t(5118).Z)("Frown", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "M16 16s-1.5-2-4-2-4 2-4 2",
            key: "epbg0q"
        }], ["line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9",
            key: "yxxnd0"
        }], ["line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9",
            key: "1p4y9e"
        }]])
    },
    88475: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return r
            }
        });
        var r = (0,
        t(5118).Z)("Minus", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }]])
    },
    53260: function() {}
}]);
