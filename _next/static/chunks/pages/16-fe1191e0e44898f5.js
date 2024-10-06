"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[16], {
    23474: function(n, e, t) {
        var i = t(85333)
          , r = t(6692)
          , o = t(52322)
          , a = t(99768);
        e.Z = function(n) {
            var e = n.style
              , t = n.move
              , c = n.blockUuid
              , u = n.action
              , d = n.isInColumn
              , l = void 0 !== d && d
              , s = n.blockType
              , h = n.groupUuid;
            if (!c)
                return null;
            var p = {
                className: "move-dropzone",
                "data-block-uuid": c,
                "data-in-column": l ? 1 : 0,
                "data-move": t,
                "data-action": u,
                "data-style": e,
                "data-block-type": s,
                "data-block-group-uuid": h
            };
            return "column" === e ? (0,
            o.jsx)(a.db, (0,
            r._)((0,
            i._)({}, p), {
                move: t
            })) : "column-resizer" === e ? (0,
            o.jsx)(a.Sm, (0,
            r._)((0,
            i._)({}, p), {
                className: "".concat(p.className, " column-resize-handle")
            })) : "column-top" === e ? (0,
            o.jsx)(a.Jh, (0,
            i._)({}, p)) : "column-list-bottom" === e ? (0,
            o.jsx)(a.ft, (0,
            i._)({}, p)) : (0,
            o.jsx)(a.Po, (0,
            r._)((0,
            i._)({}, p), {
                isInColumn: l
            }))
        }
    },
    99768: function(n, e, t) {
        t.d(e, {
            Jh: function() {
                return u
            },
            Po: function() {
                return a
            },
            Sm: function() {
                return l
            },
            db: function() {
                return c
            },
            ft: function() {
                return d
            }
        });
        var i = t(81931)
          , r = t(35505)
          , o = r.ZP.div.withConfig({
            componentId: "sc-d1fa95ed-0"
        })(["position:absolute;z-index:1;display:none;"])
          , a = (0,
        r.ZP)(o).withConfig({
            componentId: "sc-d1fa95ed-1"
        })(["top:0;bottom:6px;left:", ";right:", ";@media (max-width:", "){left:25px;right:25px;}&.hover{border-bottom:4px solid ", "77;}", ""], function(n) {
            return n.theme.spacing.xxl
        }, function(n) {
            return n.theme.spacing.xxl
        }, i.eq.sm, function(n) {
            return n.theme.color.accent
        }, function(n) {
            return n.isInColumn && "\n    left: 0;\n    right: 0;\n\n    @media (max-width: ".concat(i.eq.sm, ") {\n      left: 0;\n      right: 0;\n    }\n  ")
        })
          , c = (0,
        r.ZP)(o).withConfig({
            componentId: "sc-d1fa95ed-2"
        })(["top:0;bottom:0;width:calc(", " - 5px);@media (max-width:", "){width:calc(25px - 5px);}", " ", ""], function(n) {
            return n.theme.spacing.xxl
        }, i.eq.sm, function(n) {
            var e = n.theme;
            return "before" === n.move && "\n    left: 0;\n\n    &.hover {\n      border-right: 4px solid ".concat(e.color.accent, "77;\n    }\n  ")
        }, function(n) {
            var e = n.theme;
            return "after" === n.move && "\n    right: 0;\n\n    &.hover {\n      border-left: 4px solid ".concat(e.color.accent, "77;\n    }\n  ")
        })
          , u = (0,
        r.ZP)(o).withConfig({
            componentId: "sc-d1fa95ed-3"
        })(["top:-3px;left:0;right:0;height:10px;&.hover{border-top:4px solid ", "77;}"], function(n) {
            return n.theme.color.accent
        })
          , d = (0,
        r.ZP)(o).withConfig({
            componentId: "sc-d1fa95ed-4"
        })(["bottom:3px;left:", ";right:", ";height:10px;@media (max-width:", "){left:25px;right:25px;}&.hover{border-bottom:4px solid ", "77;}"], function(n) {
            return n.theme.spacing.xxl
        }, function(n) {
            return n.theme.spacing.xxl
        }, i.eq.sm, function(n) {
            return n.theme.color.accent
        })
          , l = r.ZP.div.withConfig({
            componentId: "sc-d1fa95ed-5"
        })(["position:absolute;top:0;display:block;width:", ";height:100%;", " @media (hover:hover){&:hover{:after{content:'';display:block;width:4px;position:absolute;top:0;bottom:0;left:calc((", " - 4px) / 2);background:", ";}cursor:col-resize !important;}}&.hover,&.resizing{:after{content:'';display:block;width:4px;position:absolute;top:0;bottom:0;left:calc((", " - 4px) / 2);}}&.resizing{cursor:col-resize !important;:after{background:", ";}}&.hover{:after{background:", "77;}}"], function(n) {
            return n.theme.spacing.lg
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "calc(-".concat(e.spacing.lg, " / 2)"), e.direction)
        }, function(n) {
            return n.theme.spacing.lg
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.spacing.lg
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.accent
        })
    },
    37299: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return c
            }
        });
        var i = t(52322)
          , r = t(35505)
          , o = r.ZP.div.withConfig({
            componentId: "sc-16d34272-0"
        })(["padding:17px 0;"])
          , a = r.ZP.hr.withConfig({
            componentId: "sc-16d34272-1"
        })(["height:1px;background-color:", ";border:0;"], function(n) {
            return n.theme.color.border
        })
          , c = function() {
            return (0,
            i.jsx)(o, {
                className: "tally-divider",
                children: (0,
                i.jsx)(a, {})
            })
        }
    },
    93433: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return p
            }
        });
        var i = t(52322)
          , r = t(43526)
          , o = t(81931)
          , a = t(35505)
          , c = t(53411)
          , u = a.ZP.div.withConfig({
            componentId: "sc-7e7a63a7-0"
        })([""])
          , d = a.ZP.div.withConfig({
            componentId: "sc-7e7a63a7-1"
        })(["position:relative;display:inline-flex;padding-top:", ";padding-bottom:", ";&.required-indicator-position-fallback{.tally-required-indicator{position:relative;left:auto;right:auto;", "}h3{", "}}"], function(n) {
            return n.theme.spacing.md
        }, function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.theme;
            return (0,
            o.vA)("margin-left", e.spacing.xs, e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            o.vA)("padding-right", "0px", e.direction)
        })
          , l = a.ZP.h1.withConfig({
            componentId: "sc-7e7a63a7-2"
        })(["margin:0;font-size:30px;font-weight:600;line-height:1.25;@media (max-width:", "){font-size:24px;}"], o.eq.md)
          , s = a.ZP.h2.withConfig({
            componentId: "sc-7e7a63a7-3"
        })(["margin:0;font-size:24px;font-weight:600;line-height:1.25;@media (max-width:", "){font-size:20px;}"], o.eq.md)
          , h = a.ZP.h3.withConfig({
            componentId: "sc-7e7a63a7-4"
        })(["margin:0;font-size:20px;font-weight:600;line-height:1.25;", " @media (max-width:", "){font-size:18px;}"], function(n) {
            var e = n.theme;
            return "".concat((0,
            o.vA)("padding-right", "".concat(c.uO, "px"), e.direction), "\n\n    &:empty {\n      ").concat((0,
            o.vA)("padding-right", "0px", e.direction), "\n    }\n  ")
        }, o.eq.md);
        a.ZP.h2.withConfig({
            componentId: "sc-7e7a63a7-5"
        })(["font-size:26px;font-weight:600;line-height:1.1;", ""], function(n) {
            return n.groupType === r.kH.Question && "\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1.25;\n  "
        });
        var p = function(n) {
            var e = n.html
              , t = n.groupType
              , o = h;
            return t === r.kH.Heading1 ? o = l : t === r.kH.Heading2 && (o = s),
            (0,
            i.jsx)(u, {
                children: (0,
                i.jsx)(d, {
                    className: "title-content",
                    children: (0,
                    i.jsx)(o, {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })
                })
            })
        }
    },
    43260: function(n, e, t) {
        var i = t(52322)
          , r = t(25237)
          , o = t.n(r)
          , a = t(2784)
          , c = t(21446)
          , u = t(49586)
          , d = t(48910)
          , l = o()(function() {
            return t.e(7649).then(t.bind(t, 97649))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [97649]
                }
            }
        });
        e.Z = function(n) {
            var e, t = n.formId, r = n.respondentUuid, o = n.sessionUuid, s = n.value, h = n.placeholder, p = n.isRequired, f = n.requireVerification, m = n.error, g = n.question, v = n.hasBusinessAccess, x = n.onChange, b = n.renderRequiredIndicator, w = n.mode, y = m ? "error_".concat(null == g ? void 0 : g.blockGroupUuid) : void 0, k = (0,
            a.useMemo)(function() {
                return v && f ? l : c.Z
            }, [f, v]);
            return (0,
            i.jsx)(d.W, {
                children: (0,
                i.jsxs)(d.V, {
                    children: [(0,
                    i.jsx)(k, {
                        id: null == g ? void 0 : g.blockGroupUuid,
                        type: "email",
                        value: void 0 === s ? "" : s,
                        placeholder: void 0 === h ? "" : h,
                        required: p,
                        autoComplete: "email",
                        "aria-label": null !== (e = null == g ? void 0 : g.title) && void 0 !== e ? e : void 0,
                        "aria-required": p ? "true" : "false",
                        "aria-invalid": m ? "true" : "false",
                        "aria-describedby": y,
                        onChange: function(n) {
                            return x && x(n.target.value)
                        },
                        formId: t,
                        respondentUuid: r,
                        sessionUuid: o,
                        mode: w
                    }), b && b(), m && (0,
                    i.jsx)(u.Z, {
                        id: y,
                        error: m
                    })]
                })
            })
        }
    },
    55368: function(n, e, t) {
        var i = t(52322)
          , r = t(21446)
          , o = t(49586)
          , a = t(48910);
        e.Z = function(n) {
            var e, t = n.value, c = n.placeholder, u = n.isRequired, d = n.error, l = n.question, s = n.onChange, h = n.renderRequiredIndicator, p = d ? "error_".concat(null == l ? void 0 : l.blockGroupUuid) : void 0;
            return (0,
            i.jsx)(a.W, {
                children: (0,
                i.jsxs)(a.V, {
                    children: [(0,
                    i.jsx)(r.Z, {
                        id: null == l ? void 0 : l.blockGroupUuid,
                        type: "url",
                        value: void 0 === t ? "" : t,
                        placeholder: void 0 === c ? "" : c,
                        required: u,
                        "aria-label": null !== (e = null == l ? void 0 : l.title) && void 0 !== e ? e : void 0,
                        "aria-required": u ? "true" : "false",
                        "aria-invalid": d ? "true" : "false",
                        "aria-describedby": p,
                        onChange: function(n) {
                            return s && s(n.target.value)
                        }
                    }), h && h(), d && (0,
                    i.jsx)(o.Z, {
                        id: p,
                        error: d
                    })]
                })
            })
        }
    },
    86449: function(n, e, t) {
        var i = t(26969)
          , r = t(52322)
          , o = t(43526)
          , a = t(2784)
          , c = t(39550)
          , u = t(49586)
          , d = t(48910);
        e.Z = function(n) {
            var e, t = n.value, l = void 0 === t ? "" : t, s = n.placeholder, h = n.isRequired, p = n.error, f = n.question, m = n.decimalSeparator, g = void 0 === m ? o.ec.Dot : m, v = n.thousandsSeparator, x = void 0 === v ? o.XD.None : v, b = n.prefix, w = n.suffix, y = n.onChange, k = n.renderRequiredIndicator, C = (0,
            i._)((0,
            a.useState)(null != l ? l : ""), 2), I = C[0], _ = C[1], j = p ? "error_".concat(null == f ? void 0 : f.blockGroupUuid) : void 0;
            return (0,
            a.useEffect)(function() {
                l !== I && _(l)
            }, [l]),
            (0,
            r.jsx)(d.W, {
                children: (0,
                r.jsxs)(d.V, {
                    children: [(0,
                    r.jsx)(c.Z, {
                        id: null == f ? void 0 : f.blockGroupUuid,
                        value: I,
                        decimalSeparator: g,
                        thousandSeparator: x,
                        prefix: b,
                        suffix: w,
                        placeholder: void 0 === s ? "" : s,
                        required: h,
                        "aria-label": null !== (e = null == f ? void 0 : f.title) && void 0 !== e ? e : void 0,
                        "aria-required": h ? "true" : "false",
                        "aria-invalid": p ? "true" : "false",
                        "aria-describedby": j,
                        onValueChange: function(n, e) {
                            var t = n.value
                              , i = n.floatValue
                              , r = e.source;
                            if ((0,
                            o.qh)(t) && _(t),
                            "prop" !== r) {
                                if (void 0 !== t && "" !== t) {
                                    y && y(i);
                                    return
                                }
                                null == y || y(void 0)
                            }
                        },
                        onPaste: function(n) {
                            n.preventDefault();
                            var e = n.clipboardData.getData("Text");
                            x !== o.XD.None && (e = e.replace(RegExp("\\".concat(x), "g"), "")),
                            e = e.replace(g, "."),
                            (0,
                            o.qh)(e) && (_(e),
                            y && y(parseFloat(e)))
                        }
                    }), k && k(), p && (0,
                    r.jsx)(u.Z, {
                        id: j,
                        error: p
                    })]
                })
            })
        }
    },
    48910: function(n, e, t) {
        t.d(e, {
            V: function() {
                return a
            },
            W: function() {
                return o
            }
        });
        var i = t(35505)
          , r = t(52520)
          , o = i.ZP.div.withConfig({
            componentId: "sc-421aa11a-0"
        })(["position:relative;padding-bottom:", ";"], function(n) {
            return n.theme.spacing.sm
        })
          , a = (0,
        i.ZP)(r.o9).withConfig({
            componentId: "sc-421aa11a-1"
        })([""])
    },
    75797: function(n, e, t) {
        var i = t(52322)
          , r = t(21446)
          , o = t(49586)
          , a = t(48910);
        e.Z = function(n) {
            var e, t = n.value, c = n.placeholder, u = n.isRequired, d = n.error, l = n.question, s = n.onChange, h = n.renderRequiredIndicator, p = d ? "error_".concat(null == l ? void 0 : l.blockGroupUuid) : void 0;
            return (0,
            i.jsx)(a.W, {
                children: (0,
                i.jsxs)(a.V, {
                    children: [(0,
                    i.jsx)(r.Z, {
                        id: null == l ? void 0 : l.blockGroupUuid,
                        type: "text",
                        value: void 0 === t ? "" : t,
                        placeholder: void 0 === c ? "" : c,
                        required: u,
                        "aria-label": null !== (e = null == l ? void 0 : l.title) && void 0 !== e ? e : void 0,
                        "aria-required": u ? "true" : "false",
                        "aria-invalid": d ? "true" : "false",
                        "aria-describedby": p,
                        onChange: function(n) {
                            return s && s(n.target.value)
                        }
                    }), h && h(), d && (0,
                    i.jsx)(o.Z, {
                        id: p,
                        error: d
                    })]
                })
            })
        }
    },
    46294: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return p
            }
        });
        var i = t(44822)
          , r = t(52322)
          , o = t(43526)
          , a = t(61449)
          , c = t(81931)
          , u = t(35505)
          , d = t(53411)
          , l = u.ZP.div.withConfig({
            componentId: "sc-a888462-0"
        })([""])
          , s = u.ZP.div.withConfig({
            componentId: "sc-a888462-1"
        })(["position:relative;display:inline-flex;padding:", " 0 8px;&.required-indicator-position-fallback{.tally-required-indicator{position:relative;left:auto;right:auto;", "}label{", "}}"], function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.theme;
            return (0,
            c.vA)("margin-left", e.spacing.xs, e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            c.vA)("padding-right", "0px", e.direction)
        })
          , h = u.ZP.label.withConfig({
            componentId: "sc-a888462-2"
        })(["font-size:14px;font-weight:bold;line-height:1.618;", ""], function(n) {
            var e = n.theme;
            return "".concat((0,
            c.vA)("padding-right", "".concat(d.uO, "px"), e.direction), "\n\n    &:empty {\n      ").concat((0,
            c.vA)("padding-right", "0px", e.direction), "\n    }\n  ")
        })
          , p = function(n) {
            var e = n.html
              , t = n.uuid
              , c = n.question
              , u = n.renderRequiredIndicator;
            return (0,
            a.G)(t, null == c ? void 0 : c.isRequired),
            (0,
            r.jsx)(l, {
                children: (0,
                r.jsxs)(s, {
                    className: "title-content",
                    children: [(0,
                    r.jsx)(h, {
                        htmlFor: c && (0,
                        i._)(o.we).concat([o.kH.Dropdown, o.kH.FileUpload]).includes(c.type) ? c.blockGroupUuid : void 0,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }), u && u({
                        top: 4,
                        left: 0,
                        right: 0,
                        isHiddenWhileCalculatingPosition: !0
                    })]
                })
            })
        }
    },
    81532: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return o
            }
        });
        var i = t(52322)
          , r = t(35505).ZP.div.withConfig({
            componentId: "sc-6991af84-0"
        })(["line-height:1.5;min-height:35px;padding-top:3px;padding-bottom:calc(3px + ", ");"], function(n) {
            return n.theme.spacing.xs
        })
          , o = function(n) {
            var e = n.html;
            return (0,
            i.jsx)(r, {
                dangerouslySetInnerHTML: {
                    __html: e
                },
                className: "tally-text"
            })
        }
    },
    22514: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return d
            }
        });
        var i = t(52322)
          , r = t(18302)
          , o = t(49586)
          , a = t(35505)
          , c = a.ZP.div.withConfig({
            componentId: "sc-55820731-0"
        })(["position:relative;display:flex;padding-bottom:", ";"], function(n) {
            return n.theme.spacing.sm
        })
          , u = a.ZP.div.withConfig({
            componentId: "sc-55820731-1"
        })(["position:relative;display:inline-flex;flex-direction:column;min-width:100%;width:100%;"])
          , d = function(n) {
            var e, t = n.value, a = n.placeholder, d = n.isRequired, l = n.error, s = n.question, h = n.onChange, p = n.renderRequiredIndicator, f = l ? "error_".concat(null == s ? void 0 : s.blockGroupUuid) : void 0;
            return (0,
            i.jsx)(c, {
                children: (0,
                i.jsxs)(u, {
                    children: [(0,
                    i.jsx)(r.Z, {
                        id: null == s ? void 0 : s.blockGroupUuid,
                        value: void 0 === t ? "" : t,
                        placeholder: void 0 === a ? "" : a,
                        required: d,
                        "aria-label": null !== (e = null == s ? void 0 : s.title) && void 0 !== e ? e : void 0,
                        "aria-required": d ? "true" : "false",
                        "aria-invalid": l ? "true" : "false",
                        "aria-describedby": f,
                        onChange: function(n) {
                            return h && h(n.target.value)
                        }
                    }), p && p(), l && (0,
                    i.jsx)(o.Z, {
                        id: f,
                        error: l
                    })]
                })
            })
        }
    },
    54203: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return s
            }
        });
        var i = t(52322)
          , r = t(61449)
          , o = t(81931)
          , a = t(35505)
          , c = t(53411)
          , u = a.ZP.div.withConfig({
            componentId: "sc-3d1620d5-0"
        })([""])
          , d = a.ZP.div.withConfig({
            componentId: "sc-3d1620d5-1"
        })(["position:relative;display:inline-flex;padding-top:", ";padding-bottom:", ";&.required-indicator-position-fallback{.tally-required-indicator{position:relative;left:auto;right:auto;", "}h3{", "}}"], function(n) {
            return n.theme.spacing.md
        }, function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.theme;
            return (0,
            o.vA)("margin-left", e.spacing.xs, e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            o.vA)("padding-right", "0px", e.direction)
        })
          , l = a.ZP.h3.withConfig({
            componentId: "sc-3d1620d5-2"
        })(["margin:0;font-size:20px;font-weight:600;line-height:1.25;", " @media (max-width:", "){font-size:18px;}"], function(n) {
            var e = n.theme;
            return "".concat((0,
            o.vA)("padding-right", "".concat(c.uO, "px"), e.direction), "\n\n    &:empty {\n      ").concat((0,
            o.vA)("padding-right", "0px", e.direction), "\n    }\n  ")
        }, o.eq.md)
          , s = function(n) {
            var e = n.html
              , t = n.groupType
              , o = n.uuid
              , a = n.question
              , c = n.renderRequiredIndicator;
            return (0,
            r.G)(o, null == a ? void 0 : a.isRequired),
            (0,
            i.jsx)(u, {
                children: (0,
                i.jsxs)(d, {
                    children: [(0,
                    i.jsx)(l, {
                        groupType: t,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }), c && c({
                        top: 6,
                        left: 0,
                        right: 0,
                        isHiddenWhileCalculatingPosition: !0
                    })]
                })
            })
        }
    },
    66608: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return nc
            }
        });
        var i = t(85333)
          , r = t(2281)
          , o = t(52322)
          , a = t(43526)
          , c = t(87612)
          , u = t(6692)
          , d = t(25237)
          , l = t.n(d)
          , s = t(76648)
          , h = t(37299)
          , p = t(81931)
          , f = t(35505)
          , m = f.ZP.h1.withConfig({
            componentId: "sc-29f7646b-0"
        })(["font-size:40px;font-weight:800;line-height:1.1;padding-bottom:", ";margin:0;@media (max-width:", "){padding-bottom:", ";font-size:32px;}"], function(n) {
            return n.theme.spacing.lg
        }, p.eq.md, function(n) {
            return n.theme.spacing.md
        })
          , g = function(n) {
            var e = n.html;
            return (0,
            o.jsx)(m, {
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
          , v = t(93433)
          , x = f.ZP.div.withConfig({
            componentId: "sc-b2a16cc-0"
        })(["padding:4px 0;img{max-width:100%;}"]);
        f.ZP.div.withConfig({
            componentId: "sc-b2a16cc-1"
        })([""]);
        var b = f.ZP.div.withConfig({
            componentId: "sc-b2a16cc-2"
        })(["padding:", " 2px;color:", ";font-size:14px;"], function(n) {
            return n.theme.spacing.xs
        }, function(n) {
            return n.theme.color.textGrayscale3
        })
          , w = function(n) {
            var e = n.images
              , t = n.link
              , i = n.altText
              , r = n.caption;
            return (0,
            o.jsx)(x, {
                children: e && e.map(function(n) {
                    var e, c;
                    return (0,
                    o.jsxs)("div", {
                        children: [t ? (0,
                        o.jsx)("a", {
                            className: "unstyled",
                            href: (0,
                            a.A9)(t),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0,
                            o.jsx)("img", {
                                src: n.url,
                                alt: null !== (e = null != i ? i : r) && void 0 !== e ? e : n.name
                            })
                        }) : (0,
                        o.jsx)("img", {
                            src: n.url,
                            alt: null !== (c = null != i ? i : r) && void 0 !== c ? c : n.name
                        }), r && (0,
                        o.jsx)(b, {
                            className: "tally-image-caption",
                            children: r
                        })]
                    }, n.name)
                })
            })
        }
          , y = t(43260)
          , k = t(55368)
          , C = t(86449)
          , I = t(75797)
          , _ = t(46294)
          , j = t(81532)
          , q = t(22514)
          , P = t(54203)
          , Z = t(98359)
          , S = t(44221)
          , A = l()(function() {
            return Promise.all([t.e(3895), t.e(8993)]).then(t.bind(t, 88993))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [88993]
                }
            }
        })
          , R = l()(function() {
            return Promise.all([t.e(7665), t.e(2495)]).then(t.bind(t, 32495))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [32495]
                }
            }
        })
          , H = l()(function() {
            return Promise.all([t.e(4431), t.e(7665), t.e(2680)]).then(t.bind(t, 22680))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [22680]
                }
            }
        })
          , U = l()(function() {
            return t.e(5442).then(t.bind(t, 55442))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [55442]
                }
            }
        })
          , T = l()(function() {
            return t.e(9648).then(t.bind(t, 49648))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [49648]
                }
            }
        })
          , B = l()(function() {
            return Promise.all([t.e(6212), t.e(9436), t.e(7665), t.e(4966)]).then(t.bind(t, 84966))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [84966]
                }
            }
        })
          , L = l()(function() {
            return Promise.all([t.e(212), t.e(6493)]).then(t.bind(t, 86493))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [86493]
                }
            }
        })
          , M = l()(function() {
            return Promise.all([t.e(6212), t.e(7665), t.e(7468)]).then(t.bind(t, 37468))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [37468]
                }
            }
        })
          , E = l()(function() {
            return t.e(4301).then(t.bind(t, 84301))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [84301]
                }
            }
        })
          , z = l()(function() {
            return t.e(763).then(t.bind(t, 60763))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [60763]
                }
            }
        })
          , G = l()(function() {
            return Promise.all([t.e(4863), t.e(4924)]).then(t.bind(t, 24924))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [24924]
                }
            }
        })
          , N = l()(function() {
            return Promise.all([t.e(6432), t.e(4182), t.e(5507)]).then(t.bind(t, 25709))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [25709]
                }
            }
        })
          , D = l()(function() {
            return Promise.all([t.e(2612), t.e(1164)]).then(t.bind(t, 1164))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [1164]
                }
            }
        })
          , F = l()(function() {
            return Promise.all([t.e(6882), t.e(5933)]).then(t.bind(t, 95933))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [95933]
                }
            }
        })
          , O = l()(function() {
            return t.e(7717).then(t.bind(t, 67717))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [67717]
                }
            }
        })
          , V = l()(function() {
            return t.e(9094).then(t.bind(t, 19094))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [19094]
                }
            }
        })
          , W = function(n) {
            var e, t, r, d, l, p, f = n.block, m = n.blocks, x = n.pageBlocks, b = n.question, W = n.formData, Y = n.errors, J = n.mode, K = n.subscriptionPlan, Q = n.hasPartialSubmissions, X = n.language, $ = n.formId, nn = n.workspaceId, ne = n.onChange, nt = n.onSaveResponse, ni = n.onSolveCaptcha, nr = n.respondentUuid, no = n.sessionUuid, na = f.uuid, nc = f.type, nu = f.groupUuid, nd = f.groupType, nl = f.payload, ns = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0,
                Z._L)(na, b) ? (0,
                o.jsx)(s.Z, (0,
                i._)({
                    uniqueKey: na
                }, n)) : null
            }, nh = function(n) {
                if (ne(nu, n),
                (0,
                a.QS)(K) && Q && nt) {
                    var e = n;
                    void 0 === n && a.TF.includes(nd) && (e = null),
                    nt((0,
                    c._)({}, nu, e))
                }
            };
            switch (nc) {
            case a.kH.FormTitle:
                return (0,
                o.jsx)(g, (0,
                i._)({}, nl), na);
            case a.kH.Text:
                return (0,
                o.jsx)(j.Z, (0,
                i._)({}, nl), na);
            case a.kH.Label:
                return (0,
                o.jsx)(_.Z, (0,
                u._)((0,
                i._)({
                    uuid: na
                }, nl), {
                    question: b,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.Title:
                return (0,
                o.jsx)(P.Z, (0,
                u._)((0,
                i._)({
                    uuid: na
                }, nl), {
                    question: b,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.Heading1:
            case a.kH.Heading2:
            case a.kH.Heading3:
                return (0,
                o.jsx)(v.Z, (0,
                u._)((0,
                i._)({
                    uuid: na,
                    groupType: nd
                }, nl), {
                    question: b,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.Image:
                return (0,
                o.jsx)(w, (0,
                i._)({}, nl), na);
            case a.kH.Divider:
                return (0,
                o.jsx)(h.Z, (0,
                i._)({}, nl), na);
            case a.kH.Embed:
            case a.kH.EmbedVideo:
            case a.kH.EmbedAudio:
                return (0,
                o.jsx)(D, {
                    uuid: na,
                    payload: nl
                }, na);
            case a.kH.InputText:
                return (0,
                o.jsx)(I.Z, (0,
                i._)({
                    value: W[nu],
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }, nl), na);
            case a.kH.InputNumber:
                return (0,
                o.jsx)(C.Z, (0,
                u._)((0,
                i._)({}, nl), {
                    value: W[nu],
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.InputEmail:
                return (0,
                o.jsx)(y.Z, (0,
                i._)({
                    formId: $,
                    respondentUuid: nr,
                    sessionUuid: no,
                    value: W[nu],
                    error: Y[nu],
                    question: b,
                    hasBusinessAccess: (0,
                    a.Wr)(K),
                    onChange: nh,
                    renderRequiredIndicator: ns,
                    mode: J
                }, nl), na);
            case a.kH.InputLink:
                return (0,
                o.jsx)(k.Z, (0,
                i._)({
                    value: W[nu],
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }, nl), na);
            case a.kH.InputPhoneNumber:
                return (0,
                o.jsx)(H, (0,
                i._)({
                    value: W[nu],
                    error: Y[nu],
                    question: b,
                    language: X,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }, nl), na);
            case a.kH.InputDate:
                return (0,
                o.jsx)(A, (0,
                i._)({
                    value: W[nu],
                    language: X,
                    error: Y[nu],
                    onChange: nh,
                    renderRequiredIndicator: ns
                }, nl), na);
            case a.kH.InputTime:
                return (0,
                o.jsx)(R, (0,
                i._)({
                    value: W[nu],
                    error: Y[nu],
                    onChange: nh,
                    renderRequiredIndicator: ns
                }, nl), na);
            case a.kH.Textarea:
                return (0,
                o.jsx)(q.Z, (0,
                i._)({
                    value: W[nu],
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }, nl), na);
            case a.kH.FileUpload:
                return (0,
                o.jsx)(G, (0,
                i._)({
                    files: null !== (e = W[nu]) && void 0 !== e ? e : [],
                    mode: J,
                    hasProAccess: (0,
                    a.QS)(K),
                    formId: $,
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns,
                    respondentUuid: nr,
                    sessionUuid: no
                }, nl), na);
            case a.kH.LinearScale:
                return (0,
                o.jsx)(E, (0,
                i._)({
                    uuid: na,
                    value: W[nu],
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }, nl), na);
            case a.kH.Rating:
                return (0,
                o.jsx)(z, (0,
                u._)((0,
                i._)({
                    uuid: na,
                    value: W[nu],
                    question: b
                }, nl), {
                    error: Y[nu],
                    onChange: nh,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.MultipleChoiceOption:
                return (0,
                o.jsx)(U, (0,
                u._)((0,
                i._)({
                    uuid: na,
                    values: null !== (t = W[nu]) && void 0 !== t ? t : []
                }, nl), {
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.Checkbox:
                return (0,
                o.jsx)(T, (0,
                u._)((0,
                i._)({
                    uuid: na,
                    values: null !== (r = W[nu]) && void 0 !== r ? r : []
                }, nl), {
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.Dropdown:
                return (0,
                o.jsx)(B, (0,
                u._)((0,
                i._)({
                    values: null !== (d = W[nu]) && void 0 !== d ? d : []
                }, nl), {
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.RankingOption:
                return (0,
                o.jsx)(L, (0,
                u._)((0,
                i._)({
                    uuid: na,
                    values: null !== (l = W[nu]) && void 0 !== l ? l : [],
                    options: x.filter(function(n) {
                        return n.groupUuid === nu
                    }).map(function(n) {
                        return n.uuid
                    })
                }, nl), {
                    error: Y[nu],
                    question: b,
                    optionBlocks: x.filter(function(n) {
                        return n.groupUuid === nu
                    }),
                    onChange: nh,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.MultiSelect:
                return (0,
                o.jsx)(M, (0,
                u._)((0,
                i._)({
                    values: null !== (p = W[nu]) && void 0 !== p ? p : []
                }, nl), {
                    layout: nl.layout,
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns,
                    error: Y[nu]
                }), na);
            case a.kH.Payment:
                var np = nl.amount
                  , nf = nl.currency
                  , nm = 0;
                if ((0,
                a.My)(np)) {
                    var ng = (0,
                    S.lo)(W, np, m);
                    nm = ng ? (0,
                    a.xq)(ng, nf) : 0
                } else
                    np && (nm = np);
                return (0,
                o.jsx)(N, (0,
                u._)((0,
                i._)({
                    mode: J,
                    uuid: na,
                    groupUuid: nu,
                    formId: $,
                    workspaceId: nn,
                    result: W[nu]
                }, nl), {
                    amount: nm,
                    language: X,
                    error: Y[nu],
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.Signature:
                return (0,
                o.jsx)(F, (0,
                u._)((0,
                i._)({
                    value: W[nu]
                }, nl), {
                    error: Y[nu],
                    question: b,
                    onChange: nh,
                    renderRequiredIndicator: ns
                }), na);
            case a.kH.Matrix:
            case a.kH.MatrixRow:
            case a.kH.MatrixColumn:
                return (0,
                o.jsx)(O, (0,
                u._)((0,
                i._)({
                    html: ""
                }, nl), {
                    renderRequiredIndicator: ns,
                    type: nc
                }), na);
            case a.kH.Captcha:
                return (0,
                o.jsx)(V, {
                    language: X,
                    error: Y[nu],
                    onSolved: function(n) {
                        return ni && ni((0,
                        c._)({}, nu, n))
                    }
                }, na)
            }
            return null
        }
          , Y = t(44822)
          , J = t(2784)
          , K = t(28117)
          , Q = t(53541)
          , X = t(12609)
          , $ = function(n) {
            var e = n.object
              , t = n.renderBlock
              , r = n.formData
              , d = n.onChange
              , l = n.errors
              , s = n.hasProAccess
              , h = n.hasPartialSubmissions
              , p = n.onSaveResponse
              , f = new Map;
            e.rows.map(function(n) {
                f.set(n.uuid, (0,
                a.Vt)(n.block.payload.html))
            }),
            e.columns.map(function(n) {
                f.set(n.uuid, (0,
                a.Vt)(n.block.payload.html))
            });
            var m = function(n, e) {
                var t = n.block.payload.allowMultiple
                  , o = n.block.groupUuid
                  , a = g(n, e)
                  , l = r[o] || {}
                  , f = l[n.uuid]
                  , m = {};
                d(o, m = t ? a ? (0,
                u._)((0,
                i._)({}, l), (0,
                c._)({}, n.uuid, (f || []).filter(function(n) {
                    return n !== e
                }))) : (0,
                u._)((0,
                i._)({}, l), (0,
                c._)({}, n.uuid, (0,
                Y._)(f || []).concat([e]))) : (0,
                u._)((0,
                i._)({}, l), (0,
                c._)({}, n.uuid, a ? [] : [e]))),
                s && h && p && p((0,
                c._)({}, o, m))
            }
              , g = function(n, e) {
                var t = r[n.block.groupUuid] || {}
                  , i = !1;
                return t[n.uuid] && (i = t[n.uuid].includes(e)),
                i
            };
            return (0,
            o.jsx)(X.Z, {
                respond: !0,
                headers: [(0,
                o.jsx)("th", {
                    children: t(e.table)
                }, 0)].concat((0,
                Y._)(e.columns.map(function(n) {
                    return (0,
                    o.jsx)("th", {
                        children: t(n)
                    }, n.uuid)
                }))),
                body: (0,
                Y._)(e.rows.map(function(n) {
                    return (0,
                    o.jsxs)("tr", {
                        role: "group",
                        "aria-labelledby": "legend_".concat(n.uuid),
                        children: [(0,
                        o.jsx)("th", {
                            id: "legend_".concat(n.uuid),
                            children: t(n)
                        }), e.columns.map(function(t, i) {
                            return (0,
                            o.jsx)("td", {
                                children: (0,
                                o.jsx)(J.Fragment, {
                                    children: n.block.payload.allowMultiple ? (0,
                                    o.jsx)(K.Z, {
                                        name: "matrix_row_".concat(n.uuid),
                                        value: "matrix_checkbox_".concat(i),
                                        isChecked: g(n, t.uuid),
                                        isContainerClickable: !0,
                                        minimalDesign: !0,
                                        ariaLabel: f.get(t.uuid),
                                        onToggle: function() {
                                            return m(n, e.columns[i].uuid)
                                        },
                                        align: "center"
                                    }) : (0,
                                    o.jsx)(Q.Z, {
                                        name: "matrix_row_".concat(n.uuid),
                                        value: "matrix_radio_".concat(i),
                                        isChecked: g(n, t.uuid),
                                        isContainerClickable: !0,
                                        minimalDesign: !0,
                                        ariaLabel: f.get(t.uuid),
                                        onToggle: function() {
                                            return m(n, e.columns[i].uuid)
                                        }
                                    })
                                })
                            }, "".concat(n.uuid, "_").concat(i))
                        })]
                    }, n.uuid)
                })),
                error: l[e.table.block.groupUuid],
                errorId: "error_".concat(e.table.block.groupUuid)
            }, e.uuid)
        }
          , nn = t(56386)
          , ne = t(14639)
          , nt = t(14505)
          , ni = f.ZP.div.withConfig({
            componentId: "sc-f0a246ec-0"
        })(["a:not(.unstyled){", "}span.mention{&:empty{border-bottom:2px solid ", ";:before{content:'                    ';}}}"], function(n) {
            var e = n.theme;
            return (0,
            p.re)(e)
        }, function(n) {
            return n.theme.color.textGrayscale4
        })
          , nr = f.ZP.div.withConfig({
            componentId: "sc-f0a246ec-1"
        })(["display:flex;@media (max-width:", "){flex-direction:column;}"], p.eq.sm)
          , no = f.ZP.div.withConfig({
            componentId: "sc-f0a246ec-2"
        })(["padding:0 ", ";", " ", " ", " ", " div[class*=' tally-block-input'] > div > div,.tally-block-payment > div,.tally-block-dropdown > div > div,.tally-block-multiple-choice-option > div > div,.tally-block-checkbox > div > div,.tally-block-multi-select > div > div,.tally-other-option-input{min-width:100%;}.tally-block-multiple-choice-option img,.tally-block-checkbox img{max-width:100%;}@media (max-width:", "){width:100%;padding:0;}"], function(n) {
            return n.theme.spacing.xs
        }, function(n) {
            var e = n.flex
              , t = n.ratio;
            return void 0 === e && "\n    width: ".concat(t, "%;\n  ")
        }, function(n) {
            return void 0 !== n.flex && "\n    flex: 1;\n  "
        }, function(n) {
            var e = n.first
              , t = n.theme;
            return e && (0,
            p.vA)("padding-left", "0", t.direction)
        }, function(n) {
            var e = n.last
              , t = n.theme;
            return e && (0,
            p.vA)("padding-right", "0", t.direction)
        }, p.eq.sm)
          , na = f.ZP.div.withConfig({
            componentId: "sc-f0a246ec-3"
        })(["padding:1px 0;", " &:empty{padding:0;}"], function(n) {
            var e = n.blockType;
            return !1 === a.Zl.includes(e) && "\n    white-space: pre-wrap;\n    word-break: break-word;\n  "
        })
          , nc = function(n) {
            var e = n.blocks
              , t = n.pageBlocks
              , c = (0,
            r._)(n, ["blocks", "pageBlocks"])
              , u = (0,
            ne.xo)(t)
              , d = (0,
            ne.bl)((0,
            nt.UU)(t))
              , l = function(n) {
                var r;
                return n.block.type === a.kH.FormTitle && (null === (r = c.styles) || void 0 === r ? void 0 : r.hideTitle) ? null : (0,
                o.jsx)(na, {
                    blockType: n.block.type,
                    className: "tally-block tally-block-".concat(n.block.type.toLowerCase().replace(/_/g, "-"), " tally-block-").concat(n.block.uuid),
                    children: (0,
                    o.jsx)(W, (0,
                    i._)({
                        block: n.block,
                        blocks: e,
                        pageBlocks: t,
                        question: d.get(n.uuid)
                    }, c))
                }, n.uuid)
            };
            return (0,
            o.jsx)(ni, {
                children: u.map(function(n) {
                    return n.type === nn.Y.Block ? l(n) : n.type === nn.Y.ColumnList ? (0,
                    o.jsx)(nr, {
                        className: "tally-column-list",
                        children: n.columns.map(function(e, t) {
                            return (0,
                            o.jsx)(no, {
                                className: "tally-column",
                                ratio: e.ratio,
                                flex: e.flex,
                                first: 0 === t,
                                last: t === n.columns.length - 1,
                                children: e.blocks.map(l)
                            }, e.uuid)
                        })
                    }, n.uuid) : n.type === nn.Y.Matrix ? (0,
                    o.jsx)($, {
                        object: n,
                        renderBlock: l,
                        errors: c.errors,
                        formData: c.formData,
                        onChange: c.onChange,
                        hasProAccess: (0,
                        a.QS)(c.subscriptionPlan),
                        hasPartialSubmissions: c.hasPartialSubmissions,
                        onSaveResponse: c.onSaveResponse
                    }, n.uuid) : null
                })
            })
        }
    },
    1345: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return c
            }
        });
        var i = t(52322)
          , r = t(35505)
          , o = r.ZP.div.withConfig({
            componentId: "sc-1a30cb0b-0"
        })(["position:relative;z-index:1;"])
          , a = r.ZP.img.withConfig({
            componentId: "sc-1a30cb0b-1"
        })(["display:block;object-fit:cover;object-position:center ", "%;width:100%;height:25vh;", ""], function(n) {
            return n.objectPositionYPercent
        }, function(n) {
            var e = n.styles;
            return ((null == e ? void 0 : e.popup) || (null == e ? void 0 : e.embed) && (null == e ? void 0 : e.dynamicHeight)) && "\n    height: 200px;\n  "
        })
          , c = function(n) {
            var e, t = n.cover, r = n.settings, c = n.styles;
            return (0,
            i.jsx)(o, {
                className: "tally-form-cover",
                children: (0,
                i.jsx)(a, {
                    src: t,
                    alt: "Form cover",
                    objectPositionYPercent: null !== (e = null == r ? void 0 : r.objectPositionYPercent) && void 0 !== e ? e : 50,
                    styles: c
                })
            })
        }
    },
    85769: function(n, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return l
            }
        });
        var i = t(52322)
          , r = t(18280)
          , o = t(81931)
          , a = t(35505)
          , c = t(52520)
          , u = (0,
        a.ZP)(c.h9).withConfig({
            componentId: "sc-2bc2b3d6-0"
        })(["direction:", ";position:relative;z-index:2;cursor:pointer;padding:0 ", ";@media (max-width:", "){padding:0 25px;}img{display:block;width:100px;height:100px;margin-top:-50px;object-fit:cover;border-radius:50%;@media (hover:hover){&:hover{box-shadow:rgba(15,15,15,0.05) 0px 0px 0px 1px,rgba(15,15,15,0.1) 0px 3px 9px,rgba(15,15,15,0.01) 0px 9px 14px;transform:translateY(-1px);}}", "}"], function(n) {
            return n.theme.direction
        }, function(n) {
            return n.theme.spacing.xxl
        }, o.eq.sm, function(n) {
            return !1 === n.withCover && "\n       margin-top: 50px;\n    "
        })
          , d = (0,
        a.ZP)(c.TM).withConfig({
            componentId: "sc-2bc2b3d6-1"
        })(["position:relative;z-index:2;img{display:block;width:100px;height:100px;margin-top:-50px;object-fit:cover;border-radius:50%;", "}", " ", " ", ""], function(n) {
            return !1 === n.withCover && "\n       margin-top: 50px;\n    "
        }, function(n) {
            var e = n.styles;
            return (null == e ? void 0 : e.alignLeft) && "\n    width: 100%;\n    max-width: 100% !important;\n    margin: 0 !important;\n  "
        }, function(n) {
            var e = n.theme
              , t = n.styles;
            return (null == t ? void 0 : t.alignLeft) && (null == t ? void 0 : t.popup) && "\n    padding: 0 ".concat(e.spacing.md, ";\n  ")
        }, function(n) {
            var e = n.theme
              , t = n.styles
              , i = n.withCover;
            return (null == t ? void 0 : t.alignLeft) && (null == t ? void 0 : t.popup) && !1 === i && "\n    img {\n      margin-top: ".concat(e.spacing.md, ";\n    }\n  ")
        })
          , l = function(n) {
            var e = n.logo
              , t = n.withCover
              , o = n.inFormBuilder
              , a = n.styles
              , c = n.onClick
              , l = (0,
            r.Z)();
            return void 0 !== o && o ? (0,
            i.jsx)(u, {
                ref: l,
                className: "tally-form-logo",
                onClick: c,
                withCover: t,
                children: (0,
                i.jsx)("img", {
                    src: e,
                    alt: "Form logo"
                })
            }) : (0,
            i.jsx)(d, {
                className: "tally-form-logo",
                withCover: t,
                styles: a,
                children: (0,
                i.jsx)("img", {
                    src: e,
                    alt: "Form logo"
                })
            })
        }
    },
    9067: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return p
            }
        });
        var i = t(26969)
          , r = t(52322)
          , o = t(2784)
          , a = t(44221)
          , c = t(97400)
          , u = t(81931)
          , d = t(35505)
          , l = t(72958)
          , s = d.ZP.div.withConfig({
            componentId: "sc-830bce6e-0"
        })(["position:absolute;top:0;left:0;padding:", " 0;display:flex;align-items:center;z-index:999;width:100%;", " ", " ", ""], function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.popup
              , t = n.theme;
            return e && "\n    padding: ".concat(t.spacing.sm, " 15%;\n    top: 0px;\n    z-index: 2;\n    height: 34px;\n\n    @media (max-width: ").concat(u.eq.sm, ") {\n      height: 30px;\n    }\n    ")
        }, function(n) {
            var e = n.hasCover
              , t = n.theme
              , i = n.popup;
            return e && "\n      background: linear-gradient(180deg, rgba(119, 119, 119, 0.5) 0%, rgba(119, 119, 119, 0.1) 60%, rgba(241, 241, 241, 0) 100%);\n      ".concat(!i && "padding-bottom: ".concat(t.spacing.lg), ";\n    ")
        }, function(n) {
            var e = n.embed
              , t = n.hasCover;
            return e && !t && "\n    position: relative;\n  "
        })
          , h = d.ZP.div.withConfig({
            componentId: "sc-830bce6e-1"
        })(["position:relative;margin:0 ", ";height:4px;background-color:", ";width:", ";border-radius:4px;transition:background-color 0.3s ease-in-out;&::after{content:'';position:absolute;top:0;left:0;height:100%;width:", "%;background-color:", ";transition:width 0.3s ease-in-out;border-radius:4px;", "}&:first-child{margin-left:", ";}&:last-child{margin-right:", ";}", ";"], function(n) {
            return n.theme.spacing.xs
        }, function(n) {
            var e = n.theme;
            return n.hasCover ? (0,
            l.fG)(e.color.white, .5) : (0,
            l.fG)(e.color.text, .09)
        }, function(n) {
            return n.width
        }, function(n) {
            return n.completion
        }, function(n) {
            var e = n.theme;
            return (0,
            l.fG)(e.color.text, .4)
        }, function(n) {
            var e = n.hasCover
              , t = n.theme;
            return e && "background-color: ".concat(t.color.white, ";")
        }, function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.isCombined
              , t = n.theme;
            return e && "\n    margin: 0;\n    border-radius: 0;\n\n    &::after {\n      border-radius: 0;\n    }\n\n    &:first-child {\n     border-bottom-left-radius: ".concat(t.spacing.sm, ";\n     border-top-left-radius: ").concat(t.spacing.sm, ";\n\n     &::after {\n      border-bottom-left-radius: ").concat(t.spacing.sm, ";\n      border-top-left-radius: ").concat(t.spacing.sm, ";\n     }\n    }\n\n    &:last-child {\n      border-bottom-right-radius: ").concat(t.spacing.sm, ";\n      border-top-right-radius: ").concat(t.spacing.sm, ";\n\n      &::after {\n        border-bottom-right-radius: ").concat(t.spacing.sm, ";\n        border-top-right-radius: ").concat(t.spacing.sm, ";\n       }\n    }\n  ")
        })
          , p = function(n) {
            var e = n.pages
              , t = n.currentPage
              , u = n.currentPageBlocks
              , d = n.formData
              , l = n.blocks
              , p = n.hasCover
              , f = n.popup
              , m = n.embed
              , g = (0,
            i._)((0,
            o.useState)(!1), 2)
              , v = g[0]
              , x = g[1]
              , b = (0,
            i._)((0,
            o.useState)(!0), 2)
              , w = b[0]
              , y = b[1]
              , k = (0,
            c.Ai)(l, e, d)
              , C = (0,
            a._j)(k, d, t, u)
              , I = function() {
                window.innerWidth / k.length < 40 ? x(!0) : x(!1),
                y(!1)
            };
            return ((0,
            o.useEffect)(function() {
                return I(),
                window.addEventListener("resize", I),
                function() {
                    window.removeEventListener("resize", I)
                }
            }, [e.length]),
            w) ? null : (0,
            r.jsx)(s, {
                className: "tally-progress-bar",
                hasCover: p,
                popup: f,
                embed: m,
                children: k.map(function(n) {
                    return (0,
                    r.jsx)(h, {
                        className: "tally-progress-bar-item",
                        completion: C[n],
                        width: "".concat(100 / k.length, "%"),
                        hasCover: p,
                        isCombined: v
                    }, n)
                })
            })
        }
    },
    10490: function(n, e, t) {
        t.d(e, {
            OQ: function() {
                return c
            },
            Oi: function() {
                return s
            },
            VY: function() {
                return d
            },
            YD: function() {
                return u
            },
            em: function() {
                return l
            },
            im: function() {
                return a
            }
        });
        var i = t(81931)
          , r = t(35505)
          , o = t(52520)
          , a = r.ZP.div.withConfig({
            componentId: "sc-136e0e4e-0"
        })(["direction:", ";"], function(n) {
            return n.theme.direction
        });
        r.ZP.div.withConfig({
            componentId: "sc-136e0e4e-1"
        })(["display:flex;flex-direction:column;"]);
        var c = r.ZP.div.withConfig({
            componentId: "sc-136e0e4e-2"
        })(["margin-bottom:", ";", ""], function(n) {
            return n.theme.spacing.md
        }, function(n) {
            var e = n.theme;
            return "rtl" === e.direction && "\n      & button svg:first-child {\n        margin-left: ".concat(e.spacing.sm, ";\n        margin-right: 0;\n      }\n    ")
        })
          , u = r.ZP.div.withConfig({
            componentId: "sc-136e0e4e-3"
        })(["display:flex;justify-content:space-between;margin:", " 0;button:nth-child(2),.tally-powered{", "}> div{display:flex;min-width:0;}"], function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("margin-left", e.spacing.sm, e.direction)
        })
          , d = (0,
        r.ZP)(o.rw).withConfig({
            componentId: "sc-136e0e4e-4"
        })(["flex:1;display:flex;flex-direction:column;margin-top:", ";margin-bottom:", ";progress{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;}", "{button{background:none;padding:0;}}.tally-context-menu{font-family:", ";}&.tally-ranking-option-dragging{.tally-ranking-option-dropzone{display:block;}}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function(n) {
            return n.theme.spacing.xxxl
        }, function(n) {
            return n.theme.spacing.xl
        }, c, function(n) {
            var e = n.theme;
            return (0,
            i.nc)(e.font.family)
        }, function(n) {
            var e = n.theme
              , t = n.styles;
            return !t.embed && !t.popup && "\n    @media (max-width: ".concat(i.eq.md, ") {\n      margin-top: ").concat(e.spacing.xl, ";\n    }\n  ")
        }, function(n) {
            var e = n.theme;
            return n.styles.withMedia && "\n    margin-top: ".concat(e.spacing.xl, ";\n  ")
        }, function(n) {
            return n.styles.alignLeft && "\n    width: 100%;\n    max-width: 100% !important;\n  "
        }, function(n) {
            return n.styles.embed && "\n    padding: 8px;\n    margin-bottom: 0;\n  "
        }, function(n) {
            var e = n.styles;
            return e.embed && !e.withMedia && "\n    margin-top: 0;\n  "
        }, function(n) {
            var e = n.theme;
            return n.styles.popup && "\n    padding: ".concat(e.spacing.md, ";\n    margin-top: 0;\n    margin-bottom: 0;\n\n    .tally-block {\n      :first-child {\n        h1, h2, h3, label {\n          padding-top: 0;\n        }\n\n        h3 + .tally-required-indicator {\n          top: 5px;\n        }\n\n        label + .tally-required-indicator {\n          top: 4px;\n        }\n      }\n    }\n\n    ").concat(c, " {\n      position: absolute;\n      top: 5px;\n      left: 5px;\n      z-index: 3;\n\n      button {\n        background-color: ").concat(e.color.lightGrayBackground, ";\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        padding: 0 6px;\n\n        @media (hover: hover) {\n          &:hover {\n            background-color: ").concat(e.color.grayBackground, ";\n          }\n        }\n\n        svg {\n          margin-right: 0;\n          width: 14px;\n          height: 14px;\n          min-width: 14px;\n          min-height: 14px;\n        }\n\n        span:nth-child(2) {\n          display:none;\n        }\n      }\n\n      @media (max-width: ").concat(i.eq.sm, ") {\n        button {\n          width: 20px;\n          height: 20px;\n\n          svg {\n            width: 12px;\n            height: 12px;\n            min-width: 12px;\n            min-height: 12px;\n          }\n        }\n      }\n    }\n\n    ").concat(u, " {\n      margin-top: ").concat(e.spacing.sm, ";\n      margin-bottom: 0;\n\n      @media (max-width: ").concat(i.eq.sm, ") {\n        > div:nth-child(1) {\n          flex: 1;\n\n          button {\n            width: 100%;\n          }\n        }\n      }\n    }\n  ")
        }, function(n) {
            var e = n.theme
              , t = n.styles;
            return t.popup && t.withMedia && "\n    margin-top: ".concat(e.spacing.lg, ";\n\n\n    @media (max-width: ").concat(i.eq.sm, ") {\n      margin-top: ").concat(e.spacing.md, ";\n    }\n  ")
        }, function(n) {
            var e = n.styles
              , t = n.page;
            return e.popup && e.withMedia && (t > 1 || e.hideTitle) && "\n    @media (max-width: ".concat(i.eq.sm, ") {\n      margin-top: 0;\n    }\n  ")
        }, function(n) {
            var e = n.styles
              , t = n.page
              , i = n.hasProgressBar;
            return e.popup && !e.withMedia && (t > 1 || i) && "\n    padding-top: 35px;\n\n  "
        }, function(n) {
            var e = n.styles
              , t = n.isDefaultThankYouPage;
            return e.popup && !e.removeBranding && !t && "\n    padding-bottom: 56px;\n  "
        }, function(n) {
            var e = n.styles
              , t = n.isCustomThankYouPage;
            return e.embed && t && !e.removeBranding && "\n    padding-bottom: 72px;\n  "
        })
          , l = r.ZP.div.withConfig({
            componentId: "sc-136e0e4e-5"
        })(["font-size:12px;color:", ";line-height:1.5;a{color:", ";@media (hover:hover){&:hover{opacity:0.8;}}}"], function(n) {
            return n.theme.color.textGrayscale1
        }, function(n) {
            return n.theme.color.textGrayscale1
        })
          , s = r.ZP.div.withConfig({
            componentId: "sc-136e0e4e-6"
        })(["position:fixed;bottom:18px;right:18px;"])
    },
    47445: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return f
            }
        });
        var i = t(52322)
          , r = t(5851)
          , o = t(25237)
          , a = t.n(o)
          , c = t(52829)
          , u = t(35505)
          , d = u.ZP.div.withConfig({
            componentId: "sc-6cb8582e-0"
        })(["flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;"])
          , l = u.ZP.div.withConfig({
            componentId: "sc-6cb8582e-1"
        })(["display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:50%;background-color:", "20;margin-bottom:", ";svg{color:", ";}"], function(n) {
            return n.theme.color.accent
        }, function(n) {
            return n.theme.spacing.md
        }, function(n) {
            return n.theme.color.accent
        })
          , s = u.ZP.h1.withConfig({
            componentId: "sc-6cb8582e-2"
        })(["font-size:24px;font-weight:bold;margin-bottom:", ";"], function(n) {
            return n.theme.spacing.sm
        })
          , h = u.ZP.div.withConfig({
            componentId: "sc-6cb8582e-3"
        })(["padding:0 ", ";line-height:1.5;color:", ";margin-bottom:", ";em{font-style:normal;}"], function(n) {
            return n.theme.spacing.md
        }, function(n) {
            return n.theme.color.textGrayscale3
        }, function(n) {
            return n.theme.spacing.lg
        })
          , p = a()(function() {
            return t.e(5833).then(t.bind(t, 3502))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [3502]
                }
            },
            ssr: !1
        })
          , f = function(n) {
            var e = n.mode
              , t = n.styles
              , o = n.onPoweredByClick
              , a = (0,
            c.$)().t;
            return (0,
            i.jsxs)(d, {
                children: [(0,
                i.jsx)(l, {
                    children: (0,
                    i.jsx)(r.Z, {
                        size: 32,
                        strokeWidth: 3
                    })
                }), (0,
                i.jsx)(s, {
                    children: a("form-respond.thank-you-page.title")
                }), !t.removeBranding && (0,
                i.jsx)(h, {
                    dangerouslySetInnerHTML: {
                        __html: a("form-respond.thank-you-page.description")
                    }
                }), !t.removeBranding && (0,
                i.jsx)(p, {
                    mode: e,
                    styles: t,
                    isOnThankYouPage: !0,
                    onClick: o
                })]
            })
        }
    },
    28117: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return l
            }
        });
        var i = t(52322)
          , r = t(5851)
          , o = t(88475)
          , a = t(81931)
          , c = t(35505)
          , u = c.ZP.div.withConfig({
            componentId: "sc-648861a5-0"
        })(["display:flex;height:100%;align-items:", ";", " label{", "}> svg{color:", " !important;margin-left:", ";}", ""], function(n) {
            return n.align
        }, function(n) {
            return n.hasText && "\n    flex: 1;\n    width: 100%;\n  "
        }, function(n) {
            var e = n.theme;
            return (0,
            a.vA)("padding-left", e.spacing.sm, e.direction)
        }, function(n) {
            return n.theme.color.gray
        }, function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            return n.clickable && "cursor: pointer;"
        })
          , d = c.ZP.div.withConfig({
            componentId: "sc-648861a5-1"
        })(["position:relative;display:flex;align-items:center;justify-content:center;min-width:18px;min-height:18px;width:18px;height:18px;background-color:", ";box-shadow:", ";border-radius:3px;-webkit-tap-highlight-color:transparent;", " input{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;-webkit-appearance:checkbox;opacity:0;min-width:20px;min-height:20px;width:20px;height:20px;}svg{color:", ";}", " ", " ", " ", " ", " ", ""], function(n) {
            return n.theme.color.inputBackground
        }, function(n) {
            return n.theme.color.inputBoxShadow
        }, function(n) {
            var e = n.theme;
            return "\n    @media (hover: hover) {\n      &:hover {\n        box-shadow: ".concat(e.color.inputBoxShadowHover, ";\n      }\n\n      &:focus-within {\n        box-shadow: ").concat(e.color.inputBoxShadowFocus, ";\n      }\n    }\n  ")
        }, function(n) {
            return n.theme.color.black
        }, function(n) {
            var e = n.theme;
            return n.isChecked && "\n    box-shadow: ".concat(e.color.inputBoxShadowActive, " !important;\n    background-color: ").concat(e.color.accent, ";\n\n    svg {\n      color: ").concat(e.color.white, ";\n    }\n  ")
        }, function(n) {
            var e = n.theme;
            return n.isChecked && "\n    @media (hover: hover) {\n      &:focus-within {\n        box-shadow: ".concat(e.color.inputBoxShadowActiveFocus, " !important;\n      }\n    }\n  ")
        }, function(n) {
            var e = n.theme;
            return n.minimalDesign && "\n    box-shadow: none !important;\n    border: 1px solid ".concat(e.color.textGrayscale5, ";\n  ")
        }, function(n) {
            var e = n.theme;
            return n.minimalDesign && "\n    @media (hover: hover) {\n      &:focus-within {\n        box-shadow: ".concat(e.color.inputBoxShadowFocus, " !important;\n      }\n    }\n  ")
        }, function(n) {
            var e = n.theme
              , t = n.isChecked
              , i = n.minimalDesign;
            return t && i && "\n    border: 1px solid ".concat(e.color.accent, ";\n  ")
        }, function(n) {
            var e = n.theme
              , t = n.isChecked
              , i = n.minimalDesign;
            return t && i && "\n    @media (hover: hover) {\n      &:focus-within {\n        box-shadow: ".concat(e.color.inputBoxShadowActiveFocus, " !important;\n      }\n    }\n  ")
        })
          , l = function(n) {
            var e = n.value
              , t = n.text
              , a = n.isChecked
              , c = n.isRequired
              , l = n.name
              , s = n.ariaInvalid
              , h = n.ariaLabel
              , p = n.ariaDescribedBy
              , f = n.indeterminate
              , m = void 0 !== f && f
              , g = n.isContainerClickable
              , v = void 0 !== g && g
              , x = n.minimalDesign
              , b = n.align
              , w = n.onToggle
              , y = n.renderRequiredIndicator;
            return (0,
            i.jsxs)(u, {
                hasText: !!t,
                clickable: v,
                onClick: function() {
                    v && w && w(e)
                },
                align: void 0 === b ? "top" : b,
                children: [(0,
                i.jsxs)(d, {
                    isChecked: a || m,
                    minimalDesign: void 0 !== x && x,
                    children: [a && (0,
                    i.jsx)(r.Z, {
                        strokeWidth: 3
                    }), m && (0,
                    i.jsx)(o.Z, {
                        strokeWidth: 3
                    }), (0,
                    i.jsx)("input", {
                        id: "checkbox_".concat(e),
                        type: "checkbox",
                        name: l,
                        checked: a || m,
                        required: c,
                        "aria-invalid": s ? "true" : "false",
                        "aria-label": h,
                        "aria-describedby": p,
                        onChange: function() {
                            return w && w(e)
                        }
                    })]
                }), t && (0,
                i.jsx)("label", {
                    htmlFor: "checkbox_".concat(e),
                    children: t
                }), null == y ? void 0 : y()]
            })
        }
    },
    39550: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return s
            }
        });
        var i = t(85333)
          , r = t(6692)
          , o = t(2281)
          , a = t(52322)
          , c = t(43526)
          , u = t(2784)
          , d = t(9462)
          , l = t(35505).ZP.input.withConfig({
            componentId: "sc-c285ec86-0"
        })(["width:100%;height:36px;padding:0 ", ";box-shadow:", ";border:0;border-radius:5px;outline:none;background-color:", ";color:", ";caret-color:", ";@media (hover:hover){&:hover{box-shadow:", ";}}&:focus{box-shadow:", ";}&::placeholder{color:", ";}"], function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            return n.theme.color.inputBoxShadow
        }, function(n) {
            return n.theme.color.inputBackground
        }, function(n) {
            return n.theme.color.text
        }, function(n) {
            return n.theme.color.text
        }, function(n) {
            return n.theme.color.inputBoxShadowHover
        }, function(n) {
            return n.theme.color.inputBoxShadowFocus
        }, function(n) {
            return n.theme.color.inputPlaceholder
        })
          , s = function(n) {
            var e = (0,
            u.useRef)(null)
              , t = (0,
            d.KG)((0,
            r._)((0,
            i._)({}, n), {
                allowedDecimalSeparators: [c.ec.Comma, c.ec.Dot],
                valueIsNumericString: !0,
                customInput: l,
                inputMode: "decimal"
            }))
              , s = t.removeFormatting
              , h = (0,
            o._)(t, ["removeFormatting"])
              , p = function() {
                var n = e.current;
                if (n) {
                    var t = n.value.length;
                    n.setSelectionRange(t, t)
                }
            };
            return (0,
            a.jsx)(d.F7, (0,
            r._)((0,
            i._)({}, h), {
                removeFormatting: function(n, e) {
                    var t, i = n;
                    return /[٠-٩]/.test(n) && (i = n.replace(/[٠-٩]/g, function(n) {
                        return "٠١٢٣٤٥٦٧٨٩".indexOf(n).toString()
                    }),
                    setTimeout(p, 20)),
                    null !== (t = null == s ? void 0 : s(i, e)) && void 0 !== t ? t : n
                },
                getInputRef: e
            }))
        }
    },
    53541: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return u
            }
        });
        var i = t(52322)
          , r = t(81931)
          , o = t(35505)
          , a = o.ZP.div.withConfig({
            componentId: "sc-7cc0643d-0"
        })(["display:flex;height:100%;align-items:center;", " label{", "}", ""], function(n) {
            return n.hasText && "\n    flex: 1;\n    width: 100%;\n  "
        }, function(n) {
            var e = n.theme;
            return (0,
            r.vA)("padding-left", e.spacing.sm, e.direction)
        }, function(n) {
            return n.clickable && "cursor: pointer;"
        })
          , c = o.ZP.div.withConfig({
            componentId: "sc-7cc0643d-1"
        })(["position:relative;display:flex;align-items:center;justify-content:center;min-width:18px;min-height:18px;width:18px;height:18px;background-color:", ";box-shadow:", ";border-radius:50%;-webkit-tap-highlight-color:transparent;input{position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;-webkit-appearance:radio;opacity:0;min-width:20px;min-height:20px;width:20px;height:20px;}", " ", " ", " ", " ", " ", " ", ""], function(n) {
            return n.theme.color.inputBackground
        }, function(n) {
            return n.theme.color.inputBoxShadow
        }, function(n) {
            var e = n.theme;
            return "\n    @media (hover: hover) {\n      &:hover {\n        box-shadow: ".concat(e.color.inputBoxShadowHover, ";\n      }\n    }\n\n    &:focus-within {\n      box-shadow: ").concat(e.color.inputBoxShadowActiveFocus, ";\n    }\n  ")
        }, function(n) {
            var e = n.theme;
            return n.isChecked && "\n    box-shadow: ".concat(e.color.inputBoxShadowActive, " !important;\n    background-color: ").concat(e.color.accent, ";\n\n    &::after {\n      content: '';\n      position: absolute;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background-color: ").concat(e.color.background, ";\n    }\n\n  ")
        }, function(n) {
            var e = n.theme;
            return n.isChecked && "\n    @media (hover: hover) {\n      &:focus-within {\n        box-shadow: ".concat(e.color.inputBoxShadowActiveFocus, " !important;\n      }\n    }\n  ")
        }, function(n) {
            var e = n.theme;
            return n.minimalDesign && "\n    box-shadow: none !important;\n    border: 1px solid ".concat(e.color.textGrayscale5, ";\n  ")
        }, function(n) {
            var e = n.theme;
            return n.minimalDesign && "\n    @media (hover: hover) {\n      &:focus-within {\n        box-shadow: ".concat(e.color.inputBoxShadowFocus, " !important;\n      }\n    }\n  ")
        }, function(n) {
            var e = n.theme
              , t = n.isChecked
              , i = n.minimalDesign;
            return t && i && "\n    border: 1px solid ".concat(e.color.accent, ";\n  ")
        }, function(n) {
            var e = n.theme
              , t = n.isChecked
              , i = n.minimalDesign;
            return t && i && "\n    @media (hover: hover) {\n      &:focus-within {\n        box-shadow: ".concat(e.color.inputBoxShadowActiveFocus, " !important;\n      }\n    }\n  ")
        })
          , u = function(n) {
            var e = n.value
              , t = n.text
              , r = n.isChecked
              , o = n.isRequired
              , u = n.isContainerClickable
              , d = void 0 !== u && u
              , l = n.minimalDesign
              , s = n.name
              , h = n.ariaLabel
              , p = n.ariaDescribedBy
              , f = n.onToggle
              , m = n.renderRequiredIndicator;
            return (0,
            i.jsxs)(a, {
                hasText: !!t,
                clickable: d,
                onClick: function() {
                    d && f && f(e)
                },
                children: [(0,
                i.jsx)(c, {
                    isChecked: r,
                    minimalDesign: void 0 !== l && l,
                    children: (0,
                    i.jsx)("input", {
                        id: "radio_".concat(e),
                        type: "radio",
                        name: s,
                        checked: r,
                        required: o,
                        "aria-label": h,
                        "aria-describedby": p,
                        onChange: function() {
                            return f && f(e)
                        }
                    })
                }), t && (0,
                i.jsx)("label", {
                    htmlFor: "radio_".concat(e),
                    children: t
                }), null == m ? void 0 : m()]
            })
        }
    },
    76648: function(n, e, t) {
        var i = t(52322)
          , r = t(52829)
          , o = t(35505)
          , a = t(80925)
          , c = t(53411);
        e.Z = function(n) {
            var e = n.top
              , t = n.right
              , u = n.bottom
              , d = n.left
              , l = n.isHiddenWhileCalculatingPosition
              , s = n.onClick
              , h = (0,
            r.$)().t
              , p = "rtl" === (0,
            o.Fg)().direction;
            return (0,
            i.jsxs)(c.W2, {
                top: null != e ? e : -8,
                right: t || (p ? 0 : -8),
                bottom: u,
                left: d || (p ? -8 : 0),
                "aria-hidden": "true",
                className: "tally-required-indicator" + (l ? " hidden" : ""),
                onClick: s,
                children: [(0,
                i.jsx)("span", {
                    children: "*"
                }), (0,
                i.jsx)(a.Z, {
                    text: h("label.required"),
                    place: "top"
                })]
            })
        }
    },
    53411: function(n, e, t) {
        t.d(e, {
            HA: function() {
                return r
            },
            W2: function() {
                return a
            },
            uO: function() {
                return o
            }
        });
        var i = t(35505)
          , r = 16
          , o = 5
          , a = i.ZP.div.withConfig({
            componentId: "sc-12f1321e-0"
        })(["position:absolute;top:", ";right:", ";bottom:", ";left:", ";z-index:1;display:flex;justify-content:center;align-items:center;width:", "px;height:", "px;min-width:", "px;min-height:", "px;border-radius:50%;background-color:", ";color:", ";font-size:14px;font-weight:900;text-align:center;cursor:pointer;> span{position:relative;top:2px;}&.hidden{visibility:hidden;}"], function(n) {
            var e = n.top;
            return e ? "".concat(e, "px") : "auto"
        }, function(n) {
            var e = n.right;
            return e ? "".concat(e, "px") : "auto"
        }, function(n) {
            var e = n.bottom;
            return e ? "".concat(e, "px") : "auto"
        }, function(n) {
            var e = n.left;
            return e ? "".concat(e, "px") : "auto"
        }, r, r, r, r, function(n) {
            return n.theme.color.textGrayscale6
        }, function(n) {
            return n.theme.color.text
        })
    },
    52520: function(n, e, t) {
        t.d(e, {
            TM: function() {
                return a
            },
            h9: function() {
                return o
            },
            o9: function() {
                return u
            },
            rw: function() {
                return c
            }
        });
        var i = t(81931)
          , r = t(35505)
          , o = r.ZP.div.withConfig({
            componentId: "sc-53f4d86b-0"
        })(["width:100%;max-width:900px;margin:0 auto;@media (max-width:", "){max-width:700px;}@media (max-width:", "){max-width:min(700px,100vw);}"], i.eq.lg, i.eq.md);
        r.ZP.section.withConfig({
            componentId: "sc-53f4d86b-1"
        })(["width:100%;max-width:900px;margin:0 auto;@media (max-width:", "){max-width:700px;}@media (max-width:", "){max-width:min(700px,100vw);}"], i.eq.lg, i.eq.md);
        var a = r.ZP.div.withConfig({
            componentId: "sc-53f4d86b-2"
        })(["width:100%;max-width:700px;margin:0 auto;@media (max-width:", "){max-width:500px;max-width:min(700px,calc(100% - 2 * 25px));}"], i.eq.md)
          , c = r.ZP.section.withConfig({
            componentId: "sc-53f4d86b-3"
        })(["width:100%;max-width:700px;margin:0 auto;@media (max-width:", "){max-width:500px;max-width:min(700px,calc(100% - 2 * 25px));}"], i.eq.md)
          , u = r.ZP.div.withConfig({
            componentId: "sc-53f4d86b-4"
        })(["position:relative;display:inline-block;max-width:320px;width:100%;.content-editable-block,input:placeholder-shown{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}@media (max-width:", "){min-width:100%;}"], i.eq.md)
    },
    12609: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return w
            }
        });
        var i = t(26969)
          , r = t(52322)
          , o = t(43526)
          , a = t(81931)
          , c = t(12436)
          , u = t.n(c)
          , d = t(2784)
          , l = t(49586)
          , s = t(23474)
          , h = t(74419)
          , p = t(51586)
          , f = t(21119)
          , m = function(n) {
            return window.innerWidth / 2 - n / 2
        }
          , g = parseInt(a.eq.lg, 10)
          , v = parseInt(a.eq.md, 10)
          , x = parseInt(a.eq.sm, 10)
          , b = parseInt(a.eq.xs, 10)
          , w = function(n) {
            var e = n.lastBlock
              , t = n.headers
              , a = n.body
              , c = n.error
              , w = n.errorId
              , y = n.respond
              , k = (0,
            i._)((0,
            d.useState)(0), 2)
              , C = k[0]
              , I = k[1]
              , _ = (0,
            d.useRef)(null)
              , j = (0,
            d.useRef)(null)
              , q = (0,
            d.useRef)(null)
              , P = (0,
            i._)((0,
            d.useState)(!1), 2)
              , Z = P[0]
              , S = P[1]
              , A = function() {
                if (f.uK && _.current) {
                    var n, e, t = _.current, i = (null == t ? void 0 : t.getBoundingClientRect().top) || 0, r = y ? 0 : (null === (e = document.querySelector(".page-navigation")) || void 0 === e ? void 0 : null === (n = e.getBoundingClientRect()) || void 0 === n ? void 0 : n.height) || 0;
                    if (0 !== i) {
                        var o = j.current;
                        if (null == o ? void 0 : o.classList.contains("on-screen")) {
                            if (((null == o ? void 0 : o.getBoundingClientRect().top) || 0) >= r) {
                                t.style.removeProperty("top"),
                                t.style.removeProperty("position"),
                                t.style.removeProperty("z-index"),
                                t.classList.remove("isSticky");
                                return
                            }
                            var a = t.style.top
                              , c = a ? parseInt(a, 10) : 0
                              , u = 0;
                            i > 0 && (u = c - Math.abs(i)),
                            i < 0 && (u = Math.abs(i) + c),
                            0 === c && 0 === r && (u = Math.abs(i)),
                            t.style.top = "".concat(u + r, "px"),
                            t.style.position = "sticky",
                            t.style.zIndex = "3",
                            t.classList.add("isSticky");
                            var d = o ? o.getBoundingClientRect().height - t.getBoundingClientRect().height : 0;
                            u + r > d && (t.style.top = "".concat(d, "px"))
                        }
                    }
                }
            }
              , R = function() {
                var n = window.innerWidth;
                n < g && n > v ? I(m(700) + 100) : n < v && n > x ? I(m(500) + 100) : n < x && n > b ? I(m(y ? 500 : 300) + 25) : n < b ? I(m(y ? 500 : 240) + 25) : I(m(900) + 100)
            };
            return (0,
            d.useEffect)(function() {
                if (f.uK && j.current && _.current) {
                    (n = new IntersectionObserver(function(n) {
                        var e = (0,
                        i._)(n, 1)[0];
                        e.target.classList.toggle("on-screen", e.intersectionRatio > .01)
                    }
                    ,{
                        threshold: [0, .01]
                    })).observe(j.current);
                    var n, e, t, r, o, a = null === (r = j.current.getElementsByTagName("tbody")) || void 0 === r ? void 0 : null === (t = r.item(0)) || void 0 === t ? void 0 : t.getElementsByTagName("th"), c = null === (o = _.current.firstElementChild) || void 0 === o ? void 0 : o.firstElementChild;
                    if (a && a.length > 0 && c) {
                        (e = new IntersectionObserver(function(n) {
                            n.forEach(function(n) {
                                return n.target.classList.toggle("isSticky", n.intersectionRatio < 1)
                            })
                        }
                        ,{
                            threshold: [1]
                        })).observe(c);
                        for (var u = 0; u < a.length; u++) {
                            var d = a.item(u);
                            d && e.observe(d)
                        }
                    }
                }
                return function() {
                    n && n.disconnect(),
                    e && e.disconnect()
                }
            }, [j.current, _.current]),
            (0,
            d.useEffect)(function() {
                var n = u()(R, 10);
                return window.addEventListener("resize", n),
                R(),
                S(!1 === (0,
                f.V5)()),
                function() {
                    window.removeEventListener("resize", n)
                }
            }, []),
            (0,
            d.useEffect)(function() {
                var n = u()(A, 10);
                window.addEventListener("scroll", n);
                var e = document.getElementById("preview");
                return e && e.addEventListener("scroll", n),
                function() {
                    window.removeEventListener("scroll", n),
                    e && e.removeEventListener("scroll", n)
                }
            }, [_.current, j.current, y]),
            (0,
            r.jsx)(h.FV, {
                center: C,
                respond: y,
                className: "tally-matrix",
                children: (0,
                r.jsxs)(h.y6, {
                    isMatrix: !0,
                    center: C,
                    ref: q,
                    styleScroll: Z,
                    children: [(0,
                    r.jsxs)(h.wk, {
                        ref: j,
                        className: "block-container selectable",
                        children: [(0,
                        r.jsx)(h.dM, {
                            ref: _,
                            isMatrix: !0,
                            children: (0,
                            r.jsx)("tr", {
                                children: t
                            })
                        }), (0,
                        r.jsx)("tbody", {
                            children: a
                        })]
                    }), c && (0,
                    r.jsx)(l.Z, {
                        id: w,
                        error: c
                    }), !y && e && (0,
                    r.jsx)(s.Z, {
                        style: "block",
                        move: "after",
                        blockUuid: e.uuid,
                        action: p.Us.DetachFromColumn,
                        isInColumn: !1,
                        blockType: o.kH.Matrix,
                        groupUuid: e.groupUuid
                    })]
                })
            })
        }
    },
    74419: function(n, e, t) {
        t.d(e, {
            FV: function() {
                return d
            },
            dM: function() {
                return u
            },
            iA: function() {
                return c
            },
            wk: function() {
                return l
            },
            y6: function() {
                return a
            }
        });
        var i = t(81931)
          , r = t(35505)
          , o = t(99768)
          , a = r.ZP.div.withConfig({
            componentId: "sc-984bfe49-0"
        })(["overflow-x:auto;background-image:linear-gradient(to right,white,white),linear-gradient(to right,white,white),linear-gradient(to right,rgba(0,0,0,0.1),rgba(255,255,255,0)),linear-gradient(to left,rgba(0,0,0,0.1),rgba(255,255,255,0));background-position:left center,right center,left center,right center;background-repeat:no-repeat;background-color:", ";background-size:30px 100%,30px 100%,15px 100%,15px 100%;background-attachment:local,local,scroll,scroll;", " ", ""], function(n) {
            return n.theme.color.background
        }, function(n) {
            var e = n.isMatrix
              , t = n.center;
            return e && "\n      & table, .tally-validation-error {\n        padding-left: ".concat(t, "px;\n        padding-right: ").concat(t, "px;\n      }\n\n      & > .move-dropzone {\n        height: 20px;\n        top: unset;\n        bottom: -20px;\n        margin-left: ").concat(t, "px;\n        margin-right: ").concat(t, "px;\n      }\n\n      background-image: none;\n      background-color: transparent;\n      ")
        }, function(n) {
            var e = n.styleScroll
              , t = n.theme;
            return e && "\n    &::-webkit-scrollbar {\n      height: 12px;\n      background-color: ".concat(t.color.lightGrayBackground, ";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: ").concat(t.color.lightGray, ";\n    }\n  ")
        })
          , c = r.ZP.table.withConfig({
            componentId: "sc-984bfe49-1"
        })(["border:0;border-collapse:separate;border-spacing:0;table-layout:auto;width:100%;font-size:14px;tr{td{border-bottom:1px solid ", ";}@media (hover:hover){&:hover{> td{> button{position:absolute;top:calc(50% - 28px / 2);display:inline-flex;&:nth-of-type(1){right:4px;}&:nth-of-type(2){right:calc(4px + 28px);}&:nth-of-type(3){right:calc(4px + 2 * 28px);}}}}}}th{border-bottom:1px solid ", ";white-space:nowrap;padding:", " 0;", " ", " text-align:left;border-right:1px solid ", ";color:", ";font-weight:400;position:relative;background:", ";&.num-buttons-1{padding-right:calc(15px + 28px);}&.num-buttons-2{padding-right:calc(15px + 2 * 28px);@media (min-width:", "){padding-left:0;}}&.num-buttons-3{padding-right:calc(15px + 3 * 28px);}&:last-child{border-right:0;}> div{display:flex;align-items:center;> svg{", "}> div{", "}}}td{position:relative;padding:", " 0;", " ", " text-align:left;border-right:1px solid ", ";&.no-response{color:", ";}&.num-buttons-1{padding-right:calc(15px + 28px);}&.num-buttons-2{position:relative;padding-right:calc(15px + 2 * 28px);@media (min-width:", "){padding-left:0;}}&.num-buttons-3{padding-right:calc(15px + 3 * 28px);}&.nowrap{white-space:nowrap;}> button{display:none;}&:last-child{border-right:0;}> div{width:100%;min-width:150px;}}tr > td:first-child{white-space:nowrap;}tr.selected{background:", ";}thead,tr{background:", ";}"], function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("padding-left", e.spacing.sm, e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("padding-right", e.spacing.xl, e.direction)
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.gray
        }, function(n) {
            return n.theme.color.background
        }, i.eq.lg, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("margin-right", e.spacing.xs, e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("margin-left", "8px", e.direction)
        }, function(n) {
            return n.theme.spacing.sm
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("padding-left", e.spacing.sm, e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("padding-right", e.spacing.xl, e.direction)
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.gray
        }, i.eq.lg, function(n) {
            return n.theme.color.blueLight2
        }, function(n) {
            return n.theme.color.background
        })
          , u = r.ZP.thead.withConfig({
            componentId: "sc-984bfe49-2"
        })(["", ""], function(n) {
            return !n.isMatrix && "z-index: 1000000001;"
        })
          , d = r.ZP.div.withConfig({
            componentId: "sc-984bfe49-3"
        })(["position:relative;margin-left:-", "px;margin-right:-", "px;padding:0 100px;@media (max-width:", "){padding:0 25px;}& ", "{padding-top:10px;margin-top:-10px;}input{pointer-events:none;}", ""], function(n) {
            return n.center
        }, function(n) {
            return n.center
        }, i.eq.sm, a, function(n) {
            var e = n.respond
              , t = n.theme;
            return e && "\n    padding: 0;\n\n    @media (max-width: ".concat(i.eq.sm, ") {\n      padding: 0;\n    }\n\n\n    & .tally-required-indicator {\n      ").concat((0,
            i.vA)("right", "-20px", t.direction), "\n    }\n\n    input {\n      pointer-events: auto;\n      cursor: pointer;\n    }\n  ")
        })
          , l = (0,
        r.ZP)(c).withConfig({
            componentId: "sc-984bfe49-4"
        })(["padding-bottom:10px;.tally-block{padding-left:0;padding-right:0;padding:0 10px;}&.selected-block{th,td,table{background:", "40;}}th,td{padding:0;min-width:100px;height:inherit;}td{> div{width:100%;min-width:100%;}}thead{position:sticky;top:0;&.isSticky{background-color:", ";}tr{height:1px;@supports (-moz-appearance:none){height:100%;}& .tally-block{height:100%;& > div{display:flex;align-items:center;justify-content:center;height:100%;}}}@media (hover:hover){&:hover{z-index:3;}}th{border-top:1px solid ", ";text-align:center;&:first-child{border-left:1px solid ", ";}&:last-child{border-right:1px solid ", ";}> div{justify-content:center;> div{margin:0;}}&:first-child{position:sticky;left:-1px;padding-left:1px;z-index:2;&.isSticky{background-color:", ";}.tally-block{left:0;right:0;top:0;bottom:0;position:absolute;", " & .actions{", "}}}.tally-required-indicator{", "}&:not(:first-child) .actions{background:", ";width:74px;", "}}& ", ":not(:first-child){", " ", " top:0;bottom:0;z-index:-1;&.hover{border-bottom:none;::after{position:absolute;content:'';", " ", " top:0;bottom:0;", "}}}& ", ":first-child{", " ", " top:0;bottom:0;z-index:-1;&.hover{border-bottom:none;::after{position:absolute;content:'';", " ", " top:0;bottom:0;", "}}}}tbody{th{position:sticky;left:-1px;padding-left:1px;z-index:2;& .tally-block{", " ", " & .actions{", "}}&.isSticky{background-color:", ";}}tr{min-height:30px;height:30px;th:first-child{border-left:1px solid ", ";}td:last-child{border-right:1px solid ", ";}td:not(:first-child){> div{display:flex;justify-content:center;}}@media (hover:hover){&:hover{th{z-index:3;}}}&.hover{th{z-index:4;}}}& ", ":not(:first-child){", " ", " top:15px;bottom:-15px;&.hover{border-bottom:none;::after{position:absolute;content:'';left:0;right:0px;top:0;bottom:15px;border-bottom:4px solid ", "77;}}}& ", ":first-child{", " ", " top:-15px;bottom:50%;&.hover{border-bottom:none;::after{position:absolute;content:'';left:0;right:0px;top:15px;border-bottom:4px solid ", "77;}}}}"], function(n) {
            return n.theme.color.accent
        }, function(n) {
            return n.theme.color.background
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.background
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("margin-left", "-60px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "-51px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("right", "-18px", e.direction)
        }, function(n) {
            return n.theme.color.background
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "-73px", e.direction)
        }, o.Po, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "50%", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("right", "-100px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("right", "97.9px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "0px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("border-right", "4px solid ".concat(e.color.accent, "77"), e.direction)
        }, o.Po, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "-100px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("right", "50%", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "97.9px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("right", "0px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("border-left", "4px solid ".concat(e.color.accent, "77"), e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("margin-left", "-71px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("padding-left", "71px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "-111px", e.direction)
        }, function(n) {
            return n.theme.color.background
        }, function(n) {
            return n.theme.color.border
        }, function(n) {
            return n.theme.color.border
        }, o.Po, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "60px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("right", "0px", e.direction)
        }, function(n) {
            return n.theme.color.accent
        }, o.Po, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("left", "60px", e.direction)
        }, function(n) {
            var e = n.theme;
            return (0,
            i.vA)("right", "0px", e.direction)
        }, function(n) {
            return n.theme.color.accent
        })
    },
    18280: function(n, e, t) {
        var i = t(2784);
        e.Z = function() {
            var n = (0,
            i.useRef)(null)
              , e = (0,
            i.useCallback)(function() {
                var n;
                null === (n = document.querySelector(".form-builder-customization-actions")) || void 0 === n || n.classList.add("hover")
            }, [])
              , t = (0,
            i.useCallback)(function() {
                var n;
                null === (n = document.querySelector(".form-builder-customization-actions")) || void 0 === n || n.classList.remove("hover")
            }, [n]);
            return (0,
            i.useEffect)(function() {
                var i, r;
                return null == n || null === (i = n.current) || void 0 === i || i.addEventListener("mouseover", e),
                null == n || null === (r = n.current) || void 0 === r || r.addEventListener("mouseout", t),
                function() {
                    var i, r;
                    null == n || null === (i = n.current) || void 0 === i || i.removeEventListener("mouseover", e),
                    null == n || null === (r = n.current) || void 0 === r || r.removeEventListener("mouseout", t)
                }
            }, [n]),
            n
        }
    },
    61449: function(n, e, t) {
        t.d(e, {
            G: function() {
                return l
            }
        });
        var i = t(54073)
          , r = t.n(i)
          , o = t(2784)
          , a = t(35505)
          , c = t(53411)
          , u = t(86967)
          , d = t(53811)
          , l = function(n, e) {
            var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = (0,
            a.Fg)()
              , l = "rtl" === i.direction
              , s = "undefined" != typeof ResizeObserver && "undefined" != typeof MutationObserver
              , h = (0,
            o.useRef)(!0)
              , p = (0,
            u.Z)(n)
              , f = function() {
                var n = document.body
                  , e = document.getElementById("preview");
                return e && (n = e),
                n
            }
              , m = function(n) {
                var e = -1 * (c.HA + c.uO);
                l ? (n.style.right = "unset",
                n.style.left = "".concat(e, "px")) : (n.style.left = "unset",
                n.style.right = "".concat(e, "px")),
                n.classList.remove("hidden")
            }
              , g = function() {
                if (e) {
                    var t, i, r = f();
                    if (r) {
                        var o = r.querySelector(".tally-block-".concat(n))
                          , a = null == o ? void 0 : o.querySelector(".tally-required-indicator");
                        if (a && o) {
                            a.style.top = "unset",
                            a.style.bottom = o.className.includes("tally-block-label") ? "10px" : "13px";
                            var u = null === (t = a.parentElement) || void 0 === t ? void 0 : t.getBoundingClientRect()
                              , s = null === (i = a.previousSibling) || void 0 === i ? void 0 : i.childNodes;
                            if (!s || !u || 0 === s.length) {
                                m(a);
                                return
                            }
                            var h = (0,
                            d.yP)(a.previousSibling);
                            if (!h) {
                                m(a);
                                return
                            }
                            h += c.uO,
                            u.width - c.uO < h && (h = o.getBoundingClientRect().width === u.width ? u.width - 2 * c.uO : u.width),
                            l ? (a.style.left = "unset",
                            a.style.right = "".concat(h, "px")) : (a.style.right = "unset",
                            a.style.left = "".concat(h, "px")),
                            a.classList.remove("hidden")
                        }
                    }
                }
            };
            (0,
            o.useEffect)(function() {
                if (!t || p) {
                    var e, i = f();
                    if (i) {
                        var o = i.querySelector(".tally-block-".concat(n));
                        if (o) {
                            if (!s) {
                                document.querySelectorAll(".tally-required-indicator").forEach(function(n) {
                                    n.classList.remove("hidden")
                                }),
                                null === (e = o.querySelector(".title-content")) || void 0 === e || e.classList.add("required-indicator-position-fallback");
                                return
                            }
                            g();
                            var a = document.getElementById("preview") ? function() {
                                if (h.current) {
                                    setTimeout(g, 100),
                                    h.current = !1;
                                    return
                                }
                                g()
                            }
                            : g
                              , c = r()(a, 30)
                              , u = new ResizeObserver(c)
                              , d = new MutationObserver(c);
                            return u.observe(o),
                            o.querySelectorAll(".content-editable-block, h3, label").forEach(function(n) {
                                u.observe(n),
                                d.observe(n, {
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0
                                })
                            }),
                            function() {
                                (u || d) && (u.disconnect(),
                                d.disconnect())
                            }
                        }
                    }
                }
            }, [e, p, i])
        }
    },
    86967: function(n, e, t) {
        var i, r = t(26969), o = t(2784), a = t(6364), c = t(21119), u = new Map;
        e.Z = function(n) {
            var e, t, d = (0,
            o.useMemo)(function() {
                return (0,
                a.Z)()
            }, []), l = (0,
            r._)((0,
            o.useState)(!c.uK), 2), s = l[0], h = l[1], p = function() {
                i = new IntersectionObserver(function(n) {
                    n.forEach(function(n) {
                        var e = n.target.id
                          , t = u.get(e);
                        t && t.isVisible !== n.isIntersecting && (t.isVisible = n.isIntersecting,
                        u.set(e, t),
                        t.instanceMap.forEach(function(n) {
                            return n(t.isVisible)
                        }))
                    })
                }
                )
            };
            return (0,
            o.useEffect)(function() {
                if (c.uK) {
                    var e, t, r, o = document.getElementById(n);
                    if (o) {
                        i || p();
                        var a = u.get(n)
                          , l = null !== (e = null == a ? void 0 : a.instanceMap) && void 0 !== e ? e : new Map;
                        return l.set(d, h),
                        u.set(n, {
                            isVisible: null !== (t = null == a ? void 0 : a.isVisible) && void 0 !== t ? t : s,
                            instanceMap: null !== (r = null == a ? void 0 : a.instanceMap) && void 0 !== r ? r : l
                        }),
                        a || setTimeout(function() {
                            null == i || i.observe(o)
                        }, 100 + (u.size > 1e3 ? 5e3 : 0)),
                        function() {
                            var e = u.get(n);
                            e && (e.instanceMap.delete(d),
                            0 === e.instanceMap.size && (u.delete(n),
                            null == i || i.unobserve(o)),
                            0 === u.size && (null == i || i.disconnect(),
                            i = void 0))
                        }
                    }
                }
            }, []),
            null !== (t = null === (e = u.get(n)) || void 0 === e ? void 0 : e.isVisible) && void 0 !== t && t
        }
    },
    16761: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return p
            }
        });
        var i, r = t(81862), o = t(26969), a = t(50853), c = t(43526), u = t(2784), d = t(62075), l = t(44221), s = t(53747), h = (i = (0,
        r._)(function(n) {
            var e, i;
            return (0,
            a.Jh)(this, function(r) {
                switch (r.label) {
                case 0:
                    if (e = {},
                    !n.map(function(n) {
                        return n.type
                    }).includes(c.kH.InputPhoneNumber))
                        return [3, 2];
                    return [4, Promise.all([t.e(4431), t.e(7494)]).then(t.bind(t, 67494))];
                case 1:
                    i = r.sent().isPhoneNumberValid,
                    e.shouldBePhoneNumber = i,
                    r.label = 2;
                case 2:
                    return [2, e]
                }
            })
        }),
        function(n) {
            return i.apply(this, arguments)
        }
        ), p = function(n, e, t, i, p) {
            var f, m, g, v, x = (0,
            o._)((0,
            u.useState)({}), 2), b = x[0], w = x[1], y = (0,
            u.useRef)([]), k = (0,
            d.MD)(n, i, function() {
                return P()
            }, function() {
                return Z()
            }), C = k.isPaying, I = k.showPayDisclaimer, _ = k.completePaymentsIfAny, j = (f = (0,
            r._)(function() {
                var t, i;
                return (0,
                a.Jh)(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return t = (0,
                        s.r)(e),
                        [4, h(e)];
                    case 1:
                        return i = r.sent(),
                        [2, (0,
                        s.G)(n, t, i, e)]
                    }
                })
            }),
            function() {
                return f.apply(this, arguments)
            }
            ), q = (m = (0,
            r._)(function(n) {
                var i, r, o, u, d, s, h, f, m, g, v, x, b, k, C, I, q;
                return (0,
                a.Jh)(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return n.preventDefault(),
                        y.current = t.map(function(n) {
                            return n.blockGroupUuid
                        }),
                        w({}),
                        [4, j()];
                    case 1:
                        i = a.sent(),
                        r = e.filter(c.sN).map(function(n) {
                            return n.groupUuid
                        }),
                        o = {},
                        u = !0,
                        d = !1,
                        s = void 0;
                        try {
                            for (h = r[Symbol.iterator](); !(u = (f = h.next()).done); u = !0)
                                i[m = f.value] && (o[m] = i[m])
                        } catch (n) {
                            d = !0,
                            s = n
                        } finally {
                            try {
                                u || null == h.return || h.return()
                            } finally {
                                if (d)
                                    throw s
                            }
                        }
                        if (Object.keys(i).length > Object.keys(o).length) {
                            g = {},
                            v = !0,
                            x = !1,
                            b = void 0;
                            try {
                                for (k = Object.keys(i)[Symbol.iterator](); !(v = (C = k.next()).done); v = !0)
                                    o[I = C.value] || (g[I] = i[I])
                            } catch (n) {
                                x = !0,
                                b = n
                            } finally {
                                try {
                                    v || null == k.return || k.return()
                                } finally {
                                    if (x)
                                        throw b
                                }
                            }
                            return w(g),
                            (0,
                            l.mh)(),
                            [2]
                        }
                        if (!(q = _()))
                            return [2];
                        if (q && Object.keys(o).length > 0)
                            return w(o),
                            (0,
                            l.mh)(),
                            [2];
                        return p(),
                        [2]
                    }
                })
            }),
            function(n) {
                return m.apply(this, arguments)
            }
            ), P = (g = (0,
            r._)(function() {
                return (0,
                a.Jh)(this, function(n) {
                    return t.filter(function(n) {
                        return -1 === y.current.indexOf(n.blockGroupUuid)
                    }).length > 0 || p(),
                    [2]
                })
            }),
            function() {
                return g.apply(this, arguments)
            }
            ), Z = (v = (0,
            r._)(function() {
                var n;
                return (0,
                a.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, j()];
                    case 1:
                        return w(n = e.sent()),
                        Object.keys(n).length > 0 && (0,
                        l.mh)(),
                        [2]
                    }
                })
            }),
            function() {
                return v.apply(this, arguments)
            }
            );
            return {
                formErrors: b,
                isPaying: C,
                showPayDisclaimer: I,
                onSubmit: q,
                setFormErrors: w
            }
        }
    },
    93278: function(n, e, t) {
        var i = t(81862)
          , r = t(50853)
          , o = t(43526)
          , a = t(2784)
          , c = t(82579)
          , u = t(60528)
          , d = t(44221)
          , l = t(50088);
        e.Z = function(n, e, t, s, h, p) {
            var f, m, g, v, x = null !== (v = null === (g = n[0]) || void 0 === g ? void 0 : null === (m = g.payload) || void 0 === m ? void 0 : m.mentions) && void 0 !== v ? v : [], b = (0,
            a.useRef)(!1), w = (0,
            a.useMemo)(function() {
                if (p && x.find(function(n) {
                    return n.field.questionType === o.kH.InputDate
                }))
                    return (0,
                    c.J$)(p)
            }, []), y = function() {
                if (0 !== x.length) {
                    var e = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var a, c = x[Symbol.iterator](); !(e = (a = c.next()).done); e = !0)
                            !function() {
                                var e, i = a.value, r = i.uuid, c = i.field, u = i.defaultValue, p = (null !== (e = null == h ? void 0 : h.current) && void 0 !== e ? e : document).querySelectorAll('[data-uuid="'.concat(r, '"]'));
                                if (0 !== p.length && p.forEach) {
                                    var f = c.uuid
                                      , m = c.type
                                      , g = c.questionType
                                      , v = c.blockGroupUuid
                                      , x = c.calculatedFieldType
                                      , y = "";
                                    m === o.fS.InputField && g && v ? y = (0,
                                    d.Ee)(g, t[v], n, f, w) : [o.fS.CalculatedField, o.fS.HiddenField].includes(m) && f && v ? y = t[v] ? t[v][f] : "" : m === o.fS.Metadata && f && (y = s[f] || ""),
                                    m === o.fS.CalculatedField && x === o.ot.Number && "number" == typeof y && (y = (0,
                                    o.AK)(y, 2)),
                                    p.forEach(function(n) {
                                        if (n.innerHTML = (0,
                                        l.SW)((null == y ? void 0 : y.toString()) || u || ""),
                                        b.current && n.innerHTML && n.closest("h1")) {
                                            var e, t;
                                            document.title = (null === (t = n.closest("h1")) || void 0 === t ? void 0 : null === (e = t.textContent) || void 0 === e ? void 0 : e.trim()) || ""
                                        }
                                    })
                                }
                            }()
                    } catch (n) {
                        i = !0,
                        r = n
                    } finally {
                        try {
                            e || null == c.return || c.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                }
            }, k = (f = (0,
            i._)(function() {
                return (0,
                r.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        if (0 === x.length || !e.find(function(n) {
                            return n.groupType === o.kH.Matrix
                        }))
                            return [2];
                        return [4, (0,
                        u.X)(function() {
                            var n, e, t = null === (e = document.querySelector(".tally-block-matrix-row")) || void 0 === e ? void 0 : null === (n = e.children) || void 0 === n ? void 0 : n.length;
                            return "number" == typeof t && t > 0
                        }, 100, 5e3)];
                    case 1:
                        return n.sent(),
                        y(),
                        [2]
                    }
                })
            }),
            function() {
                return f.apply(this, arguments)
            }
            );
            (0,
            a.useEffect)(function() {
                var e, t, i, r, o;
                b.current = (null === (e = document.title) || void 0 === e ? void 0 : e.trim()) === (null === (r = n[0]) || void 0 === r ? void 0 : null === (i = r.payload) || void 0 === i ? void 0 : null === (t = i.title) || void 0 === t ? void 0 : t.trim()) && (null === (o = document.title) || void 0 === o ? void 0 : o.indexOf("@")) !== -1
            }, []),
            (0,
            a.useEffect)(function() {
                y(),
                k()
            })
        }
    },
    92833: function(n, e, t) {
        var i, r = t(26969), o = t(43526), a = t(2784), c = t(34753);
        e.Z = function(n, e, t, u, d) {
            var l = (0,
            r._)((0,
            a.useState)(!1), 2)
              , s = l[0]
              , h = l[1];
            return (0,
            a.useEffect)(function() {
                if (i) {
                    var r, a, u = n[i], d = void 0 !== u && !1 === (0,
                    o.xb)(u);
                    t && d && Array.isArray(u) && (null === (r = e.find(function(n) {
                        return n.groupUuid === i
                    })) || void 0 === r ? void 0 : r.payload.hasOtherOption) && (!1 === (0,
                    c.K)(u[0]) || (null === (a = e.find(function(n) {
                        return n.uuid === u[0]
                    })) || void 0 === a ? void 0 : a.payload.isOtherOption)) && (d = !1),
                    t && d && h(!0),
                    i = void 0
                }
            }, [n]),
            (0,
            a.useEffect)(function() {
                t && u && s && setTimeout(function() {
                    d(),
                    h(!1)
                }, 400),
                !t && s && h(!1)
            }, [t, u, s]),
            {
                isAutoJumping: s,
                setIsAutoJumping: h,
                setLastChangedGroupUuid: function(n) {
                    i = n
                }
            }
        }
    },
    62075: function(n, e, t) {
        t.d(e, {
            Gp: function() {
                return b
            },
            L2: function() {
                return v
            },
            MD: function() {
                return g
            }
        });
        var i, r, o = t(87612), a = t(85333), c = t(6692), u = t(26969), d = t(44822), l = t(75652), s = t.n(l), h = t(2784), p = t(15709), f = t(44934);
        (i = r || (r = {})).Mount = "MOUNT",
        i.Unmount = "UNMOUNT",
        i.FilledIn = "FILLED_IN",
        i.Pay = "PAY",
        i.PayResult = "PAY_RESULT";
        var m = function(n) {
            (0,
            f.B)(f.I.PaymentOnChange, n)
        }
          , g = function(n, e, t, i) {
            var r = (0,
            u._)((0,
            h.useState)(!1), 2)
              , l = r[0]
              , m = r[1]
              , g = (0,
            u._)((0,
            h.useState)({}), 2)
              , v = g[0]
              , b = g[1]
              , w = (0,
            u._)((0,
            h.useState)({}), 2)
              , y = w[0]
              , k = w[1]
              , C = (0,
            u._)((0,
            h.useState)([]), 2)
              , I = C[0]
              , _ = C[1]
              , j = Object.values(v).filter(function(n) {
                return n.isFilledIn
            }).length > 0;
            return (0,
            p.Z)(f.I.PaymentOnChange, function(n) {
                var e = n.groupUuid
                  , t = n.action
                  , i = n.data;
                switch (t) {
                case "MOUNT":
                    b(function(n) {
                        return (0,
                        c._)((0,
                        a._)({}, n), (0,
                        o._)({}, e, i))
                    });
                    break;
                case "UNMOUNT":
                    b(function(n) {
                        var t = (0,
                        a._)({}, n);
                        return delete t[e],
                        t
                    });
                    break;
                case "FILLED_IN":
                    b(function(n) {
                        return (0,
                        c._)((0,
                        a._)({}, n), (0,
                        o._)({}, e, (0,
                        c._)((0,
                        a._)({}, n[e]), {
                            isFilledIn: i
                        })))
                    }),
                    i || null !== y[e] || k(function(n) {
                        var t = (0,
                        a._)({}, n);
                        return delete t[e],
                        t
                    });
                    break;
                case "PAY":
                    k(function(n) {
                        var t = (0,
                        a._)({}, n);
                        return delete t[e],
                        t
                    }),
                    _(function(n) {
                        return s()((0,
                        d._)(n).concat([e]))
                    });
                    break;
                case "PAY_RESULT":
                    k(function(n) {
                        return (0,
                        c._)((0,
                        a._)({}, n), (0,
                        o._)({}, e, i))
                    })
                }
            }, []),
            (0,
            h.useEffect)(function() {
                if (0 !== I.length && (m(!0),
                I.every(function(n) {
                    return void 0 !== y[n]
                }))) {
                    var r = I.filter(function(n) {
                        var e;
                        return null === (e = y[n]) || void 0 === e ? void 0 : e.stripePaymentId
                    })
                      , o = I.filter(function(n) {
                        return null === y[n]
                    })
                      , a = r.every(function(e) {
                        var t;
                        return !!(null === (t = n[e]) || void 0 === t ? void 0 : t.stripePaymentId)
                    });
                    if (r.length > 0 && !a) {
                        var c = {}
                          , u = !0
                          , d = !1
                          , l = void 0;
                        try {
                            for (var s, h = r[Symbol.iterator](); !(u = (s = h.next()).done); u = !0) {
                                var p = s.value;
                                c[p] = y[p]
                            }
                        } catch (n) {
                            d = !0,
                            l = n
                        } finally {
                            try {
                                u || null == h.return || h.return()
                            } finally {
                                if (d)
                                    throw l
                            }
                        }
                        e(c);
                        return
                    }
                    if (m(!1),
                    _([]),
                    o.length > 0) {
                        i();
                        return
                    }
                    t()
                }
            }, [y, I, n]),
            {
                isPaying: l,
                showPayDisclaimer: j,
                completePaymentsIfAny: function() {
                    if (0 === Object.keys(v).length)
                        return !0;
                    var e = []
                      , t = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var o, a = Object.keys(v)[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                            var c = o.value
                              , u = v[c]
                              , d = u.isRequired
                              , l = u.isFilledIn;
                            (d || l) && !n[c] && e.push(c)
                        }
                    } catch (n) {
                        i = !0,
                        r = n
                    } finally {
                        try {
                            t || null == a.return || a.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                    return 0 === e.length || (x(e),
                    !1)
                }
            }
        }
          , v = function(n, e) {
            return {
                dispatchMount: function() {
                    m({
                        groupUuid: n,
                        action: "MOUNT",
                        data: {
                            isRequired: e,
                            isFilledIn: !1
                        }
                    })
                },
                dispatchUnmount: function() {
                    m({
                        groupUuid: n,
                        action: "UNMOUNT"
                    })
                },
                dispatchFilledIn: function(e) {
                    m({
                        groupUuid: n,
                        action: "FILLED_IN",
                        data: e
                    })
                },
                dispatchResult: function(e) {
                    m({
                        groupUuid: n,
                        action: "PAY_RESULT",
                        data: e
                    })
                }
            }
        }
          , x = function(n) {
            var e = !0
              , t = !1
              , i = void 0;
            try {
                for (var r, o = n[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                    var a = r.value;
                    m({
                        groupUuid: a,
                        action: "PAY"
                    })
                }
            } catch (n) {
                t = !0,
                i = n
            } finally {
                try {
                    e || null == o.return || o.return()
                } finally {
                    if (t)
                        throw i
                }
            }
            (0,
            f.B)(f.I.PaymentPay, n)
        }
          , b = function(n) {
            (0,
            p.Z)(f.I.PaymentPay, n)
        }
    },
    15709: function(n, e, t) {
        t.d(e, {
            I: function() {
                return r.I
            }
        });
        var i = t(2784)
          , r = t(44934);
        e.Z = function(n, e, t) {
            function o(n) {
                var t = n.detail;
                e && e(t)
            }
            return (0,
            i.useLayoutEffect)(function() {
                return e && window.addEventListener(n, o),
                function() {
                    e && window.removeEventListener(n, o)
                }
            }, t),
            function(e) {
                (0,
                r.B)(n, e)
            }
        }
    }
}]);
