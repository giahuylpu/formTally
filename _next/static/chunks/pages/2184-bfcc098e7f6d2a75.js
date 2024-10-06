"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2184], {
    34753: function(n, t, e) {
        e.d(t, {
            K: function() {
                return o
            }
        });
        var r = e(48738)
          , u = e(69770)
          , o = function(n) {
            return "string" == typeof n && (0,
            r.Z)(n) && 4 === (0,
            u.Z)(n)
        }
    },
    51586: function(n, t, e) {
        var r, u, o, i, l, a, d, c, f, p, s, v;
        e.d(t, {
            CB: function() {
                return l
            },
            Km: function() {
                return a
            },
            Us: function() {
                return r
            },
            cX: function() {
                return o
            },
            wx: function() {
                return i
            }
        }),
        (d = r || (r = {})).Insert = "FormBuilder.Insert",
        d.Replace = "FormBuilder.Replace",
        d.ReplaceAll = "FormBuilder.ReplaceAll",
        d.Remove = "FormBuilder.Remove",
        d.Move = "FormBuilder.Move",
        d.CreateColumnList = "FormBuilder.CreateColumnList",
        d.CreateColumn = "FormBuilder.CreateColumn",
        d.AddToColumn = "FormBuilder.AddToColumn",
        d.DetachFromColumn = "FormBuilder.DetachFromColumn",
        d.UpdateColumnRatio = "FormBuilder.UpdateColumnRatio",
        d.UpdateValue = "FormBuilder.UpdateValue",
        d.UpdatePayload = "FormBuilder.UpdatePayload",
        d.Refresh = "FormBuilder.Refresh",
        d.RefreshAll = "FormBuilder.RefreshAll",
        d.UpdateFormSettings = "FormBuilder.UpdateFormSettings",
        d.OpenInsertBlockMenu = "FormBuilder.OpenInsertBlockMenu",
        d.OpenBlockSettingsContextMenu = "FormBuilder.OpenBlockSettingsContextMenu",
        d.OpenBlockActionsContextMenu = "FormBuilder.OpenBlockActionsContextMenu",
        d.OpenTextFormatContextMenu = "FormBuilder.OpenTextFormatContextMenu",
        d.OpenAuthMenu = "FormBuilder.OpenAuthMenu",
        d.OpenUpgradePlanMenu = "FormBuilder.OpenUpgradePlanMenu",
        d.OpenMentionMenu = "FormBuilder.OpenMentionMenu",
        d.OpenMentionSettingsMenu = "FormBuilder.OpenMentionSettingsMenu",
        d.InsertMention = "FormBuilder.InsertMention",
        d.RemoveMention = "FormBuilder.RemoveMention",
        d.UpdateMention = "FormBuilder.UpdateMention",
        d.UpdateConditionals = "FormBuilder.UpdateConditionals",
        d.UpdateConditionalActions = "FormBuilder.UpdateConditionalAction",
        d.UpdateCalculatedFields = "FormBuilder.UpdateCalculatedFields",
        d.UpdateHiddenFields = "FormBuilder.UpdateHiddenFields",
        d.OpenCommandsMenu = "FormBuilder.OpenCommandsMenu",
        d.OpenBulkInsertOptionsMenu = "FormBuilder.OpenBulkInsertOptionsMenu",
        d.Undo = "FormBuilder.Undo",
        d.Redo = "FormBuilder.Redo",
        d.AddTitle = "FormBuilder.AddTitle",
        (c = u || (u = {})).Question = "QUESTION",
        c.Field = "FIELD",
        c.Layout = "LAYOUT",
        (f = o || (o = {})).Upload = "UPLOAD",
        f.Link = "LINK",
        f.Unsplash = "UNSPLASH",
        f.Gallery = "GALLERY",
        (p = i || (i = {})).Start = "START",
        p.End = "END",
        p.Inherit = "INHERIT",
        (s = l || (l = {})).SignUp = "SIGN_UP",
        s.Publish = "PUBLISH",
        s.PaymentBlock = "PAYMENT_BLOCK",
        s.UpgradePlan = "UPGRADE_PLAN",
        (v = a || (a = {})).AddLink = "ADD_LINK",
        v.ApplyLastTextColor = "APPLY_LAST_TEXT_COLOR"
    },
    56386: function(n, t, e) {
        var r, u;
        e.d(t, {
            Y: function() {
                return r
            }
        }),
        (u = r || (r = {})).Block = "BLOCK",
        u.ColumnList = "COLUMN_LIST",
        u.Column = "COLUMN",
        u.Matrix = "MATRIX"
    },
    14639: function(n, t, e) {
        e.d(t, {
            Z9: function() {
                return f
            },
            bl: function() {
                return s
            },
            jZ: function() {
                return p
            },
            vk: function() {
                return g
            },
            xo: function() {
                return c
            }
        });
        var r = e(85333)
          , u = e(6692)
          , o = e(43526)
          , i = e(30446)
          , l = e.n(i)
          , a = e(56386)
          , d = e(6706)
          , c = function(n) {
            var t = []
              , e = []
              , i = []
              , l = [];
            return n.forEach(function(c, f) {
                if (c.groupType === o.kH.Matrix && n.filter(function(n) {
                    return n.groupUuid === c.groupUuid && n.type === o.kH.MatrixRow
                }).length > 0) {
                    if (e.includes(c.groupUuid))
                        return;
                    e.push(c.groupUuid);
                    var p = f + 1
                      , s = n.filter(function(n) {
                        return n.groupUuid === c.groupUuid && n.type === o.kH.MatrixColumn
                    }).map(function(n) {
                        return {
                            uuid: n.uuid,
                            type: a.Y.Block,
                            block: n,
                            index: p++
                        }
                    })
                      , v = n.filter(function(n) {
                        return n.groupUuid === c.groupUuid && n.type === o.kH.MatrixRow
                    }).map(function(n) {
                        return {
                            uuid: n.uuid,
                            type: a.Y.Block,
                            block: n,
                            index: p++
                        }
                    });
                    t.push({
                        uuid: c.groupUuid,
                        type: a.Y.Matrix,
                        table: {
                            uuid: c.uuid,
                            type: a.Y.Block,
                            block: c,
                            index: f
                        },
                        columns: s,
                        rows: v
                    });
                    return
                }
                if (!c.payload.columnListUuid) {
                    t.push({
                        uuid: c.uuid,
                        type: a.Y.Block,
                        block: c,
                        index: f
                    });
                    return
                }
                if (!i.includes(c.payload.columnListUuid)) {
                    i.push(c.payload.columnListUuid);
                    var y = n.filter(function(n) {
                        return n.payload.columnListUuid === c.payload.columnListUuid
                    })
                      , g = {
                        uuid: c.payload.columnListUuid,
                        type: a.Y.ColumnList,
                        columns: []
                    };
                    y.forEach(function(n, t) {
                        if (!l.includes(n.payload.columnUuid)) {
                            l.push(n.payload.columnUuid);
                            var e = {
                                uuid: n.payload.columnUuid,
                                type: a.Y.Column,
                                ratio: n.payload.columnRatio,
                                blocks: []
                            };
                            e.blocks = y.filter(function(n) {
                                return n.payload.columnUuid === e.uuid
                            }).map(function(n, e) {
                                return {
                                    uuid: n.uuid,
                                    type: a.Y.Block,
                                    block: n,
                                    index: f + t + e
                                }
                            }),
                            e.firstBlock = e.blocks[0],
                            e.lastBlock = e.blocks[e.blocks.length - 1],
                            g.columns.push(e)
                        }
                    }),
                    (0,
                    d.Vl)(g.columns.map(function(n) {
                        return n.ratio
                    })) && (g.columns = g.columns.map(function(n) {
                        return (0,
                        u._)((0,
                        r._)({}, n), {
                            flex: 1
                        })
                    })),
                    g.firstColumn = g.columns[0],
                    g.lastColumn = g.columns[g.columns.length - 1],
                    t.push(g)
                }
            }),
            t
        }
          , f = function(n, t, e) {
            if (!1 === o.z8.includes(n.type))
                return null;
            var r, u, i, l, a = n.uuid, d = n.type, c = n.groupUuid, f = n.groupType, p = n.payload, s = (0,
            o.ZY)(n) ? n.value : void 0, g = null !== (i = o.fy[d]) && void 0 !== i ? i : d, h = null, m = null, k = null, b = null, x = !0, U = !1, B = null !== (l = null == e ? void 0 : null === (r = e.get(c)) || void 0 === r ? void 0 : r.start) && void 0 !== l ? l : t.findIndex(function(n) {
                return n.uuid === a
            }), S = null === (u = t[B]) || void 0 === u ? void 0 : u.uuid;
            if (!1 === o.Ko.includes(d)) {
                if (o.we.includes(d) && (s || p.placeholder) ? (k = (0,
                o.Vt)(null != s ? s : p.placeholder),
                b = a) : d === o.kH.Signature && p.label ? (k = (0,
                o.Vt)(p.label),
                b = a) : d === o.kH.DropdownOption && p.placeholder && (k = (0,
                o.Vt)(p.placeholder),
                b = a),
                null === h) {
                    var w = v(B, c, t);
                    h = w.title,
                    m = w.titleBlockUuid,
                    U = w.isFolded,
                    null !== m && (B = w.titleIndex,
                    S = m)
                }
                null === h && null !== k && (h = k,
                m = b),
                p.name && (h = p.name)
            }
            null !== h && (x = !1);
            var N = a;
            if (f === o.kH.Matrix) {
                var C = t.find(function(n) {
                    return n.groupUuid === c && n.type === o.kH.MatrixColumn && !0 === n.payload.isLast
                });
                C && (N = C.uuid)
            }
            var F = y(B, n, t, e)
              , O = F.endBlockUuid
              , A = F.canBeFolded
              , M = F.numberOfBlocks;
            return {
                type: g,
                blockGroupUuid: c,
                title: h || o.d4[g],
                titleBlockUuid: m,
                isRequired: p.isRequired,
                isRequiredBlockUuid: N,
                isRequiredGroupBlockUuid: c,
                isUntitled: x,
                isFolded: U,
                canBeFolded: A,
                startBlockUuid: S,
                endBlockUuid: O,
                numberOfBlocks: M
            }
        }
          , p = function(n) {
            var t = []
              , e = new Map
              , r = h(n);
            return n.forEach(function(u) {
                !1 === o.z8.includes(u.type) || t.includes(u.groupUuid) || (e.set(u.groupUuid, f(u, n, r)),
                t.push(u.groupUuid))
            }),
            e
        }
          , s = function(n) {
            var t = new Map
              , e = new Map
              , r = h(n);
            return n.forEach(function(u) {
                if (!1 !== o.z8.includes(u.type)) {
                    var i = t.get(u.groupUuid);
                    if (i) {
                        e.set(u.uuid, i);
                        return
                    }
                    var l = f(u, n, r);
                    l.titleBlockUuid && e.set(l.titleBlockUuid, l),
                    e.set(u.uuid, l),
                    t.set(u.groupUuid, l)
                }
            }),
            e
        }
          , v = function(n, t, e) {
            if (!e[--n])
                return {
                    title: null,
                    titleBlockUuid: null,
                    isFolded: !1,
                    titleIndex: -1
                };
            var r, u, i = e[n], l = (0,
            o.ZY)(i) ? i.value : void 0;
            return i.groupUuid !== t && (o.fq.includes(i.type) || o.FW.includes(i.groupType) || i.type === o.kH.PageBreak || i.type === o.kH.Divider) ? {
                title: null,
                titleBlockUuid: null,
                isFolded: !1,
                titleIndex: -1
            } : o.$5.includes(i.type) ? {
                title: (0,
                o.Vt)(null !== (r = null != l ? l : i.payload.html) && void 0 !== r ? r : ""),
                titleBlockUuid: i.uuid,
                isFolded: null !== (u = i.payload.isFolded) && void 0 !== u && u,
                titleIndex: n
            } : v(n, t, e)
        }
          , y = function(n, t, e, r) {
            var u, i, a, d, c = null !== (a = null == r ? void 0 : null === (u = r.get(t.groupUuid)) || void 0 === u ? void 0 : u.end) && void 0 !== a ? a : l()(e, function(n) {
                return n.groupUuid === t.groupUuid
            }), f = null !== (d = null === (i = e[c]) || void 0 === i ? void 0 : i.uuid) && void 0 !== d ? d : t.uuid, p = c - n + 1, s = o.w$.includes(t.groupType);
            if (!s)
                return {
                    endBlockUuid: f,
                    canBeFolded: s,
                    numberOfBlocks: p
                };
            for (var v = n + 1; v <= c; v++) {
                var y = e[v];
                if (y && y.groupUuid !== t.groupUuid && (o.fq.includes(y.type) || o.kH.PageBreak === y.type)) {
                    s = !1;
                    break
                }
            }
            return {
                endBlockUuid: f,
                canBeFolded: s,
                numberOfBlocks: p
            }
        }
          , g = function(n, t) {
            if (t[++n]) {
                var e = t[n];
                return o.$5.includes(e.type) || e.type === o.kH.PageBreak || e.type === o.kH.Divider ? void 0 : o.Ig.includes(e.type) ? e.groupUuid : g(n, t)
            }
        }
          , h = function(n) {
            var t = new Map;
            return n.forEach(function(n, e) {
                var r = n.groupUuid
                  , u = t.get(r);
                u ? t.set(r, {
                    start: u.start,
                    end: e
                }) : t.set(r, {
                    start: e,
                    end: e
                })
            }),
            t
        }
    },
    98359: function(n, t, e) {
        e.d(t, {
            SL: function() {
                return c
            },
            Yq: function() {
                return s
            },
            _5: function() {
                return f
            },
            _L: function() {
                return a
            },
            _c: function() {
                return v
            },
            iu: function() {
                return p
            },
            sw: function() {
                return d
            }
        });
        var r = e(43526)
          , u = e(2689)
          , o = e.n(u)
          , i = e(51586)
          , l = e(42162)
          , a = function(n, t) {
            return !!t && !!t.isRequired && (null == t ? void 0 : t.isRequired) && (t.titleBlockUuid === n || !t.titleBlockUuid && t.isRequiredBlockUuid === n)
        }
          , d = function(n, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
              , r = []
              , u = !1
              , o = !0
              , i = !1
              , l = void 0;
            try {
                for (var a, d = n[Symbol.iterator](); !(o = (a = d.next()).done); o = !0) {
                    var c = a.value;
                    if (u || c.uuid === t)
                        u = !0;
                    else {
                        r.push(c);
                        continue
                    }
                    if (u && e.includes(c.type)) {
                        r.push(c);
                        continue
                    }
                }
            } catch (n) {
                i = !0,
                l = n
            } finally {
                try {
                    o || null == d.return || d.return()
                } finally {
                    if (i)
                        throw l
                }
            }
            return r
        }
          , c = function(n, t) {
            if (!r.LQ.includes(n.type))
                return !1;
            var e = t.find(function(t) {
                return t.groupUuid === n.blockGroupUuid
            });
            return !e || e.type !== r.kH.MultipleChoiceOption && e.type !== r.kH.Dropdown || !e.payload.allowMultiple
        }
          , f = function(n, t) {
            return s(n) || r.kH.Matrix === n.type || (null == t ? void 0 : t.includeQuestions) && r.$5.includes(n.type)
        }
          , p = function(n, t, e) {
            var r = [];
            return f(n, e) && (r = o()((0,
            l.ob)(t.startBlockUuid) + 1, (0,
            l.ob)(t.endBlockUuid) + 1)),
            r
        }
          , s = function(n) {
            return n.payload.isFolded && r.$5.includes(n.type)
        }
          , v = function(n, t) {
            return r.H.includes(n) && [i.Us.CreateColumnList, i.Us.CreateColumn, i.Us.AddToColumn].includes(t)
        }
    },
    16478: function(n, t, e) {
        e.d(t, {
            p: function() {
                return o
            },
            u: function() {
                return u
            }
        });
        var r = e(43526)
          , u = function(n, t) {
            var e = t.find(function(t) {
                return t.uuid === n
            });
            return e ? (0,
            r.ZY)(e) ? (0,
            r.CL)((0,
            r.Vt)(e.value)) : (0,
            r.Vt)((0,
            r.Du)(e.payload.safeHTMLSchema)) : ""
        }
          , o = function(n) {
            if (!n || 0 === n.length)
                return [];
            var t, e = n[0].payload;
            if (!e.randomize)
                return [];
            var r = null !== (t = e.lockInPlace) && void 0 !== t ? t : []
              , u = [];
            return n.forEach(function(n) {
                r.includes(n.uuid) ? u.push(n.uuid) : n.payload.isOtherOption && u.push(n.uuid)
            }),
            u
        }
    },
    72958: function(n, t, e) {
        e.d(t, {
            $Q: function() {
                return v
            },
            DM: function() {
                return a
            },
            UZ: function() {
                return p
            },
            V3: function() {
                return l
            },
            VY: function() {
                return d
            },
            X4: function() {
                return s
            },
            YB: function() {
                return f
            },
            YQ: function() {
                return h
            },
            fG: function() {
                return c
            },
            vE: function() {
                return i
            },
            xQ: function() {
                return y
            },
            yj: function() {
                return g
            }
        });
        var r = e(81931)
          , u = e(1547)
          , o = {}
          , i = {
            red: r.B3.redDark2,
            orange: r.B3.orangeDark2,
            yellow: r.B3.yellowDark2,
            green: r.B3.greenDark2,
            blue: r.B3.blueDark2,
            purple: r.B3.purpleDark2,
            pink: r.B3.pinkDark2,
            gray: r.B3.text
        }
          , l = {
            gray: r.B3.grayBackground,
            red: r.B3.redLight2,
            orange: r.B3.orangeLight2,
            yellow: r.B3.yellowLight1,
            green: r.B3.greenLight2,
            blue: r.B3.blueLight2,
            purple: r.B3.purpleLight2,
            pink: r.B3.pinkLight2
        }
          , a = {
            gray: r.B3.grayBackground,
            red: r.B3.redLight1,
            orange: r.B3.orangeLight1,
            yellow: r.B3.yellowLight1,
            green: r.B3.greenLight1,
            blue: r.B3.blueLight1,
            purple: r.B3.purpleLight1,
            pink: r.B3.pinkLight1
        }
          , d = {
            gray: r.B3.gray,
            red: r.B3.red,
            orange: r.B3.orange,
            yellow: r.B3.yellowDark1,
            green: r.B3.green,
            blue: r.B3.blue,
            purple: r.B3.purple,
            pink: r.B3.pink
        }
          , c = function(n, t) {
            var e = "".concat(n, "_").concat(t);
            if (o[e])
                return o[e];
            var r = (0,
            u.Z)(n).setAlpha(t).toRgbString();
            return o[e] = r,
            r
        }
          , f = function(n) {
            return "".concat((0,
            u.Z)(n).setAlpha(.12).toRgbString(), "  0px 1px 1px 0px, ").concat((0,
            u.Z)(n).setAlpha(.16).toRgbString(), " 0px 0px 0px 1px, ").concat((0,
            u.Z)(n).setAlpha(.08).toRgbString(), " 0px 2px 5px 0px")
        }
          , p = function(n) {
            return "".concat((0,
            u.Z)(n).setAlpha(.12).toRgbString(), " 0px 1px 1px 0px, ").concat((0,
            u.Z)(n).setAlpha(.16).toRgbString(), " 0px 0px 0px 1px,").concat((0,
            u.Z)(n).setAlpha(.08).toRgbString(), " 0px 3px 9px 0px, ").concat((0,
            u.Z)(n).setAlpha(.08).toRgbString(), " 0px 2px 5px 0px")
        }
          , s = function(n) {
            return "".concat(n, " 0px 0px 0px 2px, ").concat((0,
            u.Z)(n).setAlpha(.16).toRgbString(), " 0px 0px 0px 1px")
        }
          , v = function(n) {
            return "".concat((0,
            u.Z)(n).setAlpha(.36).toRgbString(), " 0px 0px 0px 4px, ").concat((0,
            u.Z)(n).setAlpha(.16).toRgbString(), " 0px 0px 0px 1px")
        }
          , y = function(n) {
            return "".concat((0,
            u.Z)(n).setAlpha(.36).toRgbString(), " 0px 0px 0px 4px, ").concat(n, " 0px 0px 0px 2px")
        }
          , g = function(n) {
            var t = Object.keys(i);
            return t[n % t.length]
        }
          , h = function(n, t) {
            return !!n && !!t && (0,
            u.Z)(n).toHex() === (0,
            u.Z)(t).toHex()
        }
    },
    6706: function(n, t, e) {
        e.d(t, {
            A9: function() {
                return o
            },
            Cz: function() {
                return l
            },
            NP: function() {
                return i
            },
            Vl: function() {
                return a
            }
        });
        var r = e(26969)
          , u = e(44822)
          , o = 10
          , i = 7
          , l = function(n) {
            var t = new Map(n)
              , e = t.size
              , i = 0
              , l = 0;
            if (t.forEach(function(n) {
                i += n,
                l += 0 === n ? 1 : 0
            }),
            l > 0) {
                var a = Math.round(100 / e)
                  , d = a * l
                  , c = e - l;
                (0,
                u._)(t).sort(function(n, t) {
                    return n[1] - t[1]
                }).forEach(function(n) {
                    var e = (0,
                    r._)(n, 2)
                      , u = e[0]
                      , l = e[1];
                    if (0 === l)
                        t.set(u, a),
                        i += a;
                    else {
                        var f = Math.round(d / c)
                          , p = Math.round(l - f);
                        p >= o ? (t.set(u, p),
                        i -= f,
                        d -= f) : (t.set(u, o),
                        i -= l - o,
                        d -= l - o),
                        c--
                    }
                })
            }
            if (i < 100) {
                var f = Math.round((100 - i) / e);
                t.forEach(function(n, e) {
                    t.set(e, n + f),
                    i += f
                })
            }
            if (100 !== i) {
                var p = 100 - i;
                (0,
                u._)(t).sort(function(n, t) {
                    return p > 0 ? n[1] - t[1] : t[1] - n[1]
                }).forEach(function(n) {
                    var e = (0,
                    r._)(n, 2)
                      , u = e[0]
                      , o = e[1];
                    if (0 !== p) {
                        var l = p > 0 ? 1 : -1;
                        t.set(u, o + l),
                        i += l,
                        p -= l
                    }
                })
            }
            return t
        }
          , a = function(n) {
            var t = 100 / n.length;
            return n.every(function(n) {
                return 1 >= Math.abs(n - t)
            })
        }
    },
    42162: function(n, t, e) {
        e.d(t, {
            A9: function() {
                return R
            },
            AU: function() {
                return H
            },
            C_: function() {
                return b
            },
            F7: function() {
                return w
            },
            FD: function() {
                return y
            },
            FF: function() {
                return x
            },
            Fz: function() {
                return B
            },
            KH: function() {
                return h
            },
            KS: function() {
                return s
            },
            M3: function() {
                return U
            },
            NJ: function() {
                return p
            },
            QO: function() {
                return T
            },
            Qe: function() {
                return F
            },
            Tp: function() {
                return k
            },
            Xm: function() {
                return E
            },
            ZD: function() {
                return g
            },
            bI: function() {
                return _
            },
            bc: function() {
                return I
            },
            cj: function() {
                return m
            },
            df: function() {
                return d
            },
            e7: function() {
                return j
            },
            gZ: function() {
                return N
            },
            ld: function() {
                return Z
            },
            ly: function() {
                return v
            },
            mh: function() {
                return L
            },
            ob: function() {
                return S
            },
            qX: function() {
                return C
            },
            rh: function() {
                return M
            },
            uN: function() {
                return D
            },
            w3: function() {
                return q
            },
            xs: function() {
                return c
            },
            yG: function() {
                return a
            },
            zM: function() {
                return P
            }
        });
        var r = e(43526)
          , u = e(56974)
          , o = e.n(u)
          , i = e(53811)
          , l = e(17247)
          , a = function(n, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            n.innerHTML = t,
            e && n.focus()
        }
          , d = function(n) {
            return n.forEach(function(t, e) {
                var r;
                t.nodeType === Node.ELEMENT_NODE && (0 === t.childNodes.length || (null === (r = t.textContent) || void 0 === r ? void 0 : r.length) === 0) && n.item(e).remove(),
                t.nodeType === Node.ELEMENT_NODE && t.childNodes.length > 0 && d(t.childNodes)
            }),
            n
        }
          , c = function(n) {
            var t = "";
            return n.forEach(function(n) {
                t += n.nodeType === Node.TEXT_NODE ? n.textContent : n.outerHTML
            }),
            t
        }
          , f = function(n) {
            return Array.from(n.childNodes).filter(function(n) {
                return !(n.nodeType === Node.TEXT_NODE && "" === n.textContent)
            })
        }
          , p = function(n) {
            for (var t = function(n) {
                return f(n)[0] || null
            }, e = t(n); e && t(e); )
                e = t(e);
            return e
        }
          , s = function(n) {
            for (var t = function(n) {
                return o()(f(n)) || null
            }, e = t(n); e && t(e); )
                e = t(e);
            return e
        }
          , v = function(n) {
            var t, e;
            return n.nodeType === Node.ELEMENT_NODE ? t = n.closest("[contenteditable]") : t = null === (e = n.parentElement) || void 0 === e ? void 0 : e.closest("[contenteditable]"),
            (null == t ? void 0 : t.getAttribute("contenteditable")) === "true"
        }
          , y = function(n) {
            var t = n.nodeType === Node.ELEMENT_NODE ? n : n.parentElement;
            if (!t)
                return null;
            for (var e = t.nextSibling, r = t.previousSibling, u = !0; u; ) {
                if (e && v(e))
                    return e;
                if (e && (e = e.nextSibling),
                r && v(r))
                    return r;
                r && (r = r.previousSibling),
                e || r || (u = !1)
            }
            return null
        }
          , g = function(n, t) {
            var e, r = document.elementFromPoint(n, t);
            if (!r)
                return null;
            var u = r.childNodes;
            if (0 === u.length)
                return r;
            var o = r.querySelector(".content-editable-block");
            o && (u = o.childNodes);
            for (var i = [], l = 0; l < u.length; l++) {
                var a = document.createRange();
                a.selectNode(u[l]);
                for (var d = a.getClientRects(), c = 0; c < d.length; c++) {
                    var f = d[c];
                    if (t === f.top && i.push(u[l]),
                    n >= f.left && n <= f.right && t >= f.top && t <= f.bottom) {
                        e = u[l];
                        break
                    }
                }
                if (e)
                    break
            }
            return !e && i.length > 0 ? i.pop() : e || r
        }
          , h = function(n, t, e) {
            var r = n.parentElement && "rtl" === getComputedStyle(n.parentElement).direction
              , u = !1
              , o = 0;
            try {
                for (; !u; ) {
                    var i = document.createRange();
                    i.setStart(n, o);
                    var a = (0,
                    l.N7)(i)
                      , d = a.x
                      , c = a.y;
                    if (e === c && (!r && t <= d || r && t >= d)) {
                        u = !0;
                        continue
                    }
                    o++
                }
            } catch (n) {
                o = o > 0 ? o - 1 : 0
            }
            return o
        }
          , m = function() {
            return "undefined" == typeof document ? [] : Array.from(document.querySelectorAll(".content-editable-block"))
        }
          , k = function(n) {
            return "undefined" == typeof document ? null : document.getElementById(n)
        }
          , b = function(n) {
            var t;
            return null !== (t = m()[n]) && void 0 !== t ? t : null
        }
          , x = function(n) {
            var t = n - 2
              , e = b(n)
              , r = Y()
              , u = r.findIndex(function(n) {
                return n.dataset.blockUuid === (null == e ? void 0 : e.id)
            });
            if (-1 === u) {
                var o = K(n);
                if (-1 === (u = r.findIndex(function(n) {
                    return n.dataset.blockGroupUuid === o
                })))
                    return t
            }
            var i = r[u - 2];
            return i ? t = S(i.dataset.blockUuid) : t
        }
          , U = function(n) {
            var t = n + 1
              , e = b(n)
              , r = Y()
              , u = r.findIndex(function(n) {
                return n.dataset.blockUuid === (null == e ? void 0 : e.id)
            });
            if (-1 === u) {
                var o = K(n);
                if (-1 === (u = r.findIndex(function(n) {
                    return n.dataset.blockGroupUuid === o
                })))
                    return t
            }
            var i = r[u + 1];
            return i ? t = S(i.dataset.blockUuid) : t
        }
          , B = function(n) {
            var t, e;
            return null !== (e = null === (t = k(n)) || void 0 === t ? void 0 : t.innerHTML) && void 0 !== e ? e : ""
        }
          , S = function(n) {
            var t = k(n);
            return t ? m().indexOf(t) : -1
        }
          , w = function(n) {
            var t = b(n);
            if (!t)
                return null;
            var e = t.closest(".tally-block");
            if (!e)
                return null;
            var r = Array.from(e.classList).find(function(n) {
                return -1 !== n.indexOf("tally-block-")
            });
            return r ? G(r) : null
        }
          , N = function(n) {
            if (n.nodeType === Node.ELEMENT_NODE && (null === (t = n.className) || void 0 === t ? void 0 : t.indexOf("content-editable-block")) !== -1)
                return n;
            var t, e, r = n.parentElement;
            return r ? r.nodeType === Node.ELEMENT_NODE && (null === (e = r.className) || void 0 === e ? void 0 : e.indexOf("content-editable-block")) !== -1 ? r : r.closest(".content-editable-block") : null
        }
          , C = function(n) {
            if (!n)
                return -1;
            if (n.className && n.className.indexOf && -1 !== n.className.indexOf("content-editable-block"))
                return m().indexOf(n);
            var t = n.closest(".block-container");
            if (!t)
                return -1;
            var e = t.querySelector(".content-editable-block");
            return e ? m().indexOf(e) : -1
        }
          , F = function() {
            return "undefined" != typeof document && document.activeElement && -1 !== document.activeElement.className.indexOf("content-editable-block") ? document.activeElement : null
        }
          , O = function() {
            if ("undefined" == typeof document)
                return null;
            var n = document.querySelector(".tally-block:hover");
            return n ? n.querySelector(".content-editable-block") : null
        }
          , A = function() {
            var n = F();
            return n ? n.getAttribute("id") : null
        }
          , M = function() {
            var n = A();
            return n ? B(n) : ""
        }
          , E = function() {
            var n = F();
            return n ? m().indexOf(n) : -1
        }
          , T = function() {
            var n = O();
            return n ? m().indexOf(n) : -1
        }
          , H = function(n) {
            var t = F();
            if (t) {
                var e = (0,
                l.Ct)()
                  , r = e.x
                  , u = e.y;
                a(t, n);
                var o = g(r, u);
                if (o) {
                    var i = h(o, r, u);
                    (0,
                    l.KJ)(o, i)
                }
            }
        }
          , R = function(n) {
            for (var t = m().splice(0, n).reverse(), e = -1; t.length > 0 && e < 0; ) {
                var r = t.shift();
                n--,
                "true" === r.getAttribute("contenteditable") && "false" === r.dataset.isFolded && (e = n)
            }
            return e
        }
          , _ = function(n) {
            for (var t = m().splice(n + 1), e = -1; t.length > 0 && e < 0; ) {
                var r = t.shift();
                n++,
                "true" === r.getAttribute("contenteditable") && "false" === r.dataset.isFolded && (e = n)
            }
            return e
        }
          , L = function(n) {
            for (var t = m().splice(0, n).reverse(), e = -1; t.length > 0 && e < 0; ) {
                var r = t.shift();
                n--,
                "true" === r.dataset.isSelectable && "false" === r.dataset.isFolded && (e = n)
            }
            return e
        }
          , D = function(n) {
            for (var t = m().splice(n + 1), e = -1; t.length > 0 && e < 0; ) {
                var r = t.shift();
                n++,
                "true" === r.dataset.isSelectable && "false" === r.dataset.isFolded && (e = n)
            }
            return e
        }
          , I = function(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return function(e) {
                if (e) {
                    if (a(e, n, t.focus),
                    t.focus) {
                        var r = e.closest(".block-container");
                        if (!r)
                            return;
                        var u = r.getBoundingClientRect()
                          , o = u.top
                          , i = u.bottom
                          , d = u.height;
                        o >= 0 && i <= window.innerHeight - 200 || window.scrollTo(0, document.documentElement.scrollTop + d)
                    }
                    if (t.cursor) {
                        var c = g(t.cursor.x, t.cursor.y);
                        c && (0,
                        l.KJ)(c, h(c, t.cursor.x, t.cursor.y))
                    }
                }
            }
        }
          , q = function() {
            return function(n) {
                if (n) {
                    var t, e;
                    null === (e = n.closest(".block-container")) || void 0 === e || null === (t = e.querySelector(".add-container")) || void 0 === t || t.click()
                }
            }
        }
          , Z = function(n) {
            return function(t) {
                t && a(t, n)
            }
        }
          , P = function(n, t) {
            var e, r = n ? k(n) : F();
            if (!r)
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                };
            var u = r.closest(".block-container");
            if (!u)
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                };
            var o = null !== (e = u.querySelector(".".concat(t))) && void 0 !== e ? e : u;
            return {
                top: o.getBoundingClientRect().bottom + 5 + (0,
                i.sw)(),
                bottom: window.innerHeight - o.getBoundingClientRect().top - (0,
                i.sw)() + 5,
                left: o.getBoundingClientRect().left + window.pageXOffset,
                right: window.innerWidth - o.getBoundingClientRect().right - window.pageXOffset
            }
        }
          , G = function(n) {
            return n.replace("tally-block-", "").replace(/-/g, "_").toUpperCase()
        }
          , K = function(n) {
            var t = b(n);
            if (!t)
                return null;
            var e = t.closest(".tally-block");
            if (!e)
                return null;
            var r = Array.from(e.classList).find(function(n) {
                return -1 !== n.indexOf("tally-block-group-")
            });
            return r ? r.replace("tally-block-group-", "") : null
        }
          , j = function() {
            return null !== document.querySelector(".tally-context-menu-overlay")
        }
          , Y = function() {
            return Array.from(document.querySelectorAll('.move-dropzone[data-style="block"]')).filter(function(n) {
                return !1 === [r.kH.MatrixColumn, r.kH.MatrixRow].includes(n.dataset.blockType)
            })
        }
    },
    46530: function(n, t, e) {
        e.d(t, {
            In: function() {
                return c
            },
            VN: function() {
                return f
            },
            WW: function() {
                return d
            },
            cO: function() {
                return v
            },
            dV: function() {
                return s
            },
            m8: function() {
                return p
            }
        });
        var r = e(44822)
          , u = e(43526)
          , o = e(6364)
          , i = e(98359)
          , l = e(14639)
          , a = e(16478)
          , d = function() {
            return {
                uuid: (0,
                o.Z)()
            }
        }
          , c = function() {
            return {
                uuid: (0,
                o.Z)()
            }
        }
          , f = function(n, t) {
            var e = []
              , o = []
              , d = (0,
            r._)(n);
            return (null == t ? void 0 : t.beforeBlockUuid) && (n = (0,
            i.sw)(n, t.beforeBlockUuid, null == t ? void 0 : t.alwaysIncludeBlockTypes)),
            (null == t ? void 0 : t.filterOutBlockTypes) && t.filterOutBlockTypes.length > 0 && (n = n.filter(function(n) {
                var e = n.type;
                return !1 === t.filterOutBlockTypes.includes(e)
            })),
            (null == t ? void 0 : t.includeMetadata) ? (e.push({
                uuid: "id",
                type: u.fS.Metadata,
                questionType: u.kH.FormTitle,
                blockGroupUuid: "id",
                title: "id"
            }),
            e.push({
                uuid: "respondentId",
                type: u.fS.Metadata,
                questionType: u.kH.FormTitle,
                blockGroupUuid: "respondentId",
                title: "respondentId"
            }),
            e.push({
                uuid: "formName",
                type: u.fS.Metadata,
                questionType: u.kH.FormTitle,
                blockGroupUuid: "formName",
                title: "formName"
            })) : (null == t ? void 0 : t.includeRespondentMetadata) && (e.push({
                uuid: "ipAddress",
                type: u.fS.Metadata,
                questionType: u.kH.FormTitle,
                blockGroupUuid: "ipAddress",
                title: "ipAddress"
            }),
            e.push({
                uuid: "respondentId",
                type: u.fS.Metadata,
                questionType: u.kH.FormTitle,
                blockGroupUuid: "respondentId",
                title: "respondentId"
            })),
            n.forEach(function(r) {
                if (!o.includes(r.groupUuid)) {
                    if (r.type === u.kH.CalculatedFields)
                        r.payload.calculatedFields.filter(function(n) {
                            return n.name && n.type
                        }).forEach(function(n) {
                            e.push({
                                uuid: n.uuid,
                                type: u.fS.CalculatedField,
                                questionType: u.kH.CalculatedFields,
                                blockGroupUuid: r.groupUuid,
                                title: n.name || "",
                                calculatedFieldType: n.type
                            })
                        });
                    else if ((0,
                    u.rb)(r))
                        r.payload.hiddenFields.forEach(function(n) {
                            e.push({
                                uuid: n.uuid,
                                type: u.fS.HiddenField,
                                questionType: u.kH.HiddenFields,
                                blockGroupUuid: r.groupUuid,
                                title: n.name || ""
                            })
                        });
                    else if (r.type !== u.kH.Matrix || (null == t ? void 0 : t.combineMatrix)) {
                        var i = (0,
                        l.Z9)(r, d);
                        i && e.push({
                            uuid: i.blockGroupUuid,
                            type: u.fS.InputField,
                            questionType: i.type,
                            blockGroupUuid: i.blockGroupUuid,
                            title: (0,
                            u.CL)(i.title || "")
                        })
                    } else {
                        var c = n.filter(function(n) {
                            return n.groupUuid === r.groupUuid && n.type === u.kH.MatrixRow
                        })
                          , f = (0,
                        l.Z9)(r, d);
                        c.forEach(function(n) {
                            var t = (0,
                            a.u)(n.uuid, d);
                            f && f.title && f.title !== u.d4[u.kH.Matrix] && (t = "".concat(f.title, " [").concat(t, "]")),
                            e.push({
                                uuid: n.uuid,
                                type: u.fS.InputField,
                                questionType: u.kH.Matrix,
                                blockGroupUuid: n.groupUuid,
                                title: t
                            })
                        })
                    }
                    o.push(r.groupUuid)
                }
            }),
            e
        }
          , p = function(n, t) {
            var e = n.title;
            return n.type === u.fS.Metadata && (e = t("form-builder.mention-menu.metadata.".concat(n.uuid))),
            e
        }
          , s = function(n, t, e) {
            var r = !1
              , o = !0
              , i = !1
              , l = void 0;
            try {
                for (var a, d, c = (null !== (a = n.conditionals) && void 0 !== a ? a : [])[Symbol.iterator](); !(o = (d = c.next()).done); o = !0) {
                    var f, p, v, y, g, h = d.value;
                    if ((null === (p = h.payload) || void 0 === p ? void 0 : null === (f = p.field) || void 0 === f ? void 0 : f.blockGroupUuid) && e.includes(h.payload.field.blockGroupUuid) || (null === (y = h.payload) || void 0 === y ? void 0 : null === (v = y.value) || void 0 === v ? void 0 : v.blockGroupUuid) && e.includes(h.payload.value.blockGroupUuid) || h.type === u.Rp.Group && (null === (g = h.payload) || void 0 === g ? void 0 : g.conditionals) && (r = s(h.payload, t, e)))
                        return !0
                }
            } catch (n) {
                i = !0,
                l = n
            } finally {
                try {
                    o || null == c.return || c.return()
                } finally {
                    if (i)
                        throw l
                }
            }
            var m = !0
              , k = !1
              , b = void 0;
            try {
                for (var x, U, B = (null !== (x = n.actions) && void 0 !== x ? x : [])[Symbol.iterator](); !(m = (U = B.next()).done); m = !0) {
                    var S, w, N, C, F, O, A, M, E, T, H, R = U.value;
                    if ((null === (S = R.payload) || void 0 === S ? void 0 : S.requireAnswer) && e.includes(R.payload.requireAnswer) || (null === (C = R.payload) || void 0 === C ? void 0 : null === (N = C.calculate) || void 0 === N ? void 0 : null === (w = N.field) || void 0 === w ? void 0 : w.blockGroupUuid) && e.includes(R.payload.calculate.field.blockGroupUuid))
                        return !0;
                    if ((null === (A = R.payload) || void 0 === A ? void 0 : null === (O = A.calculate) || void 0 === O ? void 0 : null === (F = O.value) || void 0 === F ? void 0 : F.blockGroupUuid) && e.includes(R.payload.calculate.value.blockGroupUuid))
                        return !0;
                    if ((null === (M = R.payload) || void 0 === M ? void 0 : M.showBlocks) && R.payload.showBlocks.some(function(n) {
                        return n === t.uuid
                    }))
                        return !0;
                    else if ((null === (E = R.payload) || void 0 === E ? void 0 : E.hideBlocks) && R.payload.hideBlocks.some(function(n) {
                        return n === t.uuid
                    }))
                        return !0;
                    else if ((null === (T = R.payload) || void 0 === T ? void 0 : T.jumpToPage) === t.uuid || (null === (H = R.payload) || void 0 === H ? void 0 : H.jumpToPage) && t.type === u.kH.PageBreak)
                        return !0
                }
            } catch (n) {
                k = !0,
                b = n
            } finally {
                try {
                    m || null == B.return || B.return()
                } finally {
                    if (k)
                        throw b
                }
            }
            return r
        }
          , v = function(n, t) {
            var e = !0
              , r = !1
              , u = void 0;
            try {
                for (var o, i = n.calculatedFields[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                    var l, a = o.value;
                    if ((null === (l = a.value) || void 0 === l ? void 0 : l.blockGroupUuid) && t.includes(a.value.blockGroupUuid))
                        return !0
                }
            } catch (n) {
                r = !0,
                u = n
            } finally {
                try {
                    e || null == i.return || i.return()
                } finally {
                    if (r)
                        throw u
                }
            }
            return !1
        }
    },
    17247: function(n, t, e) {
        e.d(t, {
            B4: function() {
                return b
            },
            Ct: function() {
                return p
            },
            G0: function() {
                return s
            },
            JA: function() {
                return k
            },
            KJ: function() {
                return o
            },
            N7: function() {
                return f
            },
            NZ: function() {
                return c
            },
            RN: function() {
                return h
            },
            ct: function() {
                return v
            },
            fI: function() {
                return d
            },
            iD: function() {
                return x
            },
            kL: function() {
                return g
            },
            lT: function() {
                return m
            },
            oR: function() {
                return i
            },
            sg: function() {
                return a
            },
            ut: function() {
                return l
            },
            yZ: function() {
                return y
            }
        });
        var r = e(51586)
          , u = e(42162)
          , o = function(n, t) {
            try {
                var e = document.createRange();
                e.setStart(n, t);
                var r = window.getSelection();
                null == r || r.removeAllRanges(),
                null == r || r.addRange(e)
            } catch (n) {}
        }
          , i = function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
              , t = ""
              , e = window.getSelection();
            try {
                if (e && e.rangeCount > 0 && e.focusNode) {
                    var r = e.getRangeAt(0).cloneRange();
                    r.collapse(!0),
                    r.setStart(e.focusNode, 0);
                    var u = r.toString();
                    t = u.charAt(u.length - n)
                }
            } catch (n) {}
            return t
        }
          , l = function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
              , t = ""
              , e = window.getSelection();
            try {
                if (e && e.rangeCount > 0 && e.focusNode) {
                    var r = e.getRangeAt(0).cloneRange();
                    r.collapse(!0),
                    r.setEnd(e.focusNode, e.focusOffset + n),
                    t = r.toString().charAt(n - 1)
                }
            } catch (n) {}
            return t
        }
          , a = function() {
            var n = window.getSelection();
            return n && n.rangeCount && n.focusNode ? n.focusOffset : 0
        }
          , d = function() {
            var n = window.getSelection();
            return n && n.rangeCount && n.focusNode ? n.focusNode : null
        }
          , c = function() {
            var n = window.getSelection();
            return n && n.rangeCount && n.focusNode ? [n.focusNode, n.focusOffset] : [null, 0]
        }
          , f = function(n) {
            try {
                var t = n.getClientRects();
                if (n.collapsed && n.startContainer && n.startContainer.nodeType === Node.ELEMENT_NODE && (0 === n.startContainer.childNodes.length || 0 === t.length)) {
                    var e = n.startContainer
                      , r = "rtl" === getComputedStyle(e).direction
                      , u = n.startContainer.getBoundingClientRect();
                    return {
                        x: r ? u.right : u.x,
                        y: u.y
                    }
                }
                if (0 === t.length)
                    return {
                        x: 0,
                        y: 0
                    };
                var o = t[0]
                  , i = o.x
                  , l = o.y;
                return {
                    x: i,
                    y: l
                }
            } catch (n) {
                return {
                    x: 0,
                    y: 0
                }
            }
        }
          , p = function() {
            var n = window.getSelection();
            return n && n.rangeCount && n.focusNode ? f(n.getRangeAt(0)) : {
                x: 0,
                y: 0
            }
        }
          , s = function() {
            var n = window.getSelection();
            return !!(n && n.rangeCount && n.focusNode && (0,
            u.gZ)(n.focusNode))
        }
          , v = function() {
            var n = window.getSelection();
            if (!n || !n.rangeCount || !n.focusNode || n.anchorOffset !== n.focusOffset)
                return !1;
            var t = (0,
            u.gZ)(n.focusNode);
            if (!t)
                return !1;
            if (n.focusNode === t && 0 === n.focusOffset)
                return !0;
            var e = (0,
            u.NJ)(t);
            return !!(n.focusNode === e && 0 === n.focusOffset || n.focusNode.nodeType === Node.ELEMENT_NODE && n.focusNode.contains(e) && 0 === n.focusOffset)
        }
          , y = function() {
            var n, t = window.getSelection();
            if (!t || !t.rangeCount || !t.focusNode || t.anchorOffset !== t.focusOffset)
                return !1;
            var e = (0,
            u.gZ)(t.focusNode);
            if (!e)
                return !1;
            if (t.focusNode === e)
                return !0;
            var r = (0,
            u.KS)(e);
            return !!(t.focusNode === r && t.focusOffset === (null === (n = t.focusNode.textContent) || void 0 === n ? void 0 : n.length) || t.focusNode.nodeType === Node.ELEMENT_NODE && t.focusNode.contains(r) && t.focusOffset === t.focusNode.childNodes.length)
        }
          , g = function() {
            var n = window.getSelection();
            if (!n || !n.rangeCount || !n.focusNode)
                return !1;
            var t = (0,
            u.gZ)(n.focusNode);
            if (!t)
                return !1;
            if (n.focusNode === t)
                return !0;
            var e = (0,
            u.NJ)(t);
            if (!e)
                return !0;
            var r = document.createRange();
            return r.setStart(e, 0),
            p().y === f(r).y
        }
          , h = function() {
            var n, t, e = window.getSelection();
            if (!e || !e.rangeCount || !e.focusNode)
                return !1;
            var r = (0,
            u.gZ)(e.focusNode);
            if (!r)
                return !1;
            if (e.focusNode === r)
                return !0;
            var o = (0,
            u.KS)(r);
            if (!o)
                return !0;
            var i = document.createRange();
            return i.setStart(o, null !== (t = null === (n = o.textContent) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0),
            p().y === f(i).y
        }
          , m = function(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.wx.Start
              , e = (0,
            u.C_)(n);
            if (e) {
                if (t === r.wx.Start) {
                    e.focus();
                    return
                }
                if (t === r.wx.End) {
                    var i, l, a = (0,
                    u.KS)(e);
                    if (!a) {
                        e.focus();
                        return
                    }
                    o(a, null !== (l = null === (i = a.textContent) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0);
                    return
                }
                if (t === r.wx.Inherit) {
                    var d, c, s = n > (0,
                    u.Xm)(), v = s ? (0,
                    u.NJ)(e) : (0,
                    u.KS)(e);
                    if (!v) {
                        e.focus();
                        return
                    }
                    var y = p().x
                      , g = document.createRange();
                    g.setStart(v, s ? 0 : null !== (c = null === (d = v.textContent) || void 0 === d ? void 0 : d.length) && void 0 !== c ? c : 0);
                    var h = f(g).y
                      , k = (0,
                    u.ZD)(y, h);
                    if (!k) {
                        e.focus();
                        return
                    }
                    if (!1 === e.contains(k)) {
                        m(n, r.wx.End);
                        return
                    }
                    if (!1 === (0,
                    u.ly)(k)) {
                        var b = (0,
                        u.FD)(k);
                        if (b) {
                            o(b, 0);
                            return
                        }
                        o(e, 1);
                        return
                    }
                    var x = (0,
                    u.KH)(k, y, h);
                    o(k, x);
                    return
                }
            }
        }
          , k = function() {
            var n = window.getSelection();
            if (!n || !n.rangeCount || !n.focusNode)
                return ["", ""];
            var t = (0,
            u.gZ)(n.focusNode);
            if (!t)
                return ["", ""];
            var e = document.createRange();
            e.setStart(t, 0),
            e.setEnd(n.focusNode, n.focusOffset);
            var r = (0,
            u.xs)((0,
            u.df)(e.cloneContents().childNodes))
              , o = document.createRange();
            return o.selectNodeContents(t),
            o.collapse(!1),
            o.setStart(n.focusNode, n.focusOffset),
            [r, (0,
            u.xs)((0,
            u.df)(o.cloneContents().childNodes))]
        }
          , b = function(n, t) {
            document.querySelectorAll(".mention").forEach(function(n) {
                return n.setAttribute("contenteditable", "true")
            }),
            document.execCommand(n, !1, t),
            document.querySelectorAll(".mention").forEach(function(n) {
                return n.setAttribute("contenteditable", "false")
            })
        }
          , x = function() {
            var n, t, e, r = {
                isBold: !1,
                isItalic: !1,
                isUnderline: !1,
                foreColor: "",
                backColor: "",
                link: void 0
            };
            document.queryCommandState && (r.isBold = document.queryCommandState("bold"),
            r.isItalic = document.queryCommandState("italic"),
            r.isUnderline = document.queryCommandState("underline")),
            document.queryCommandValue && (r.foreColor = document.queryCommandValue("foreColor"),
            r.backColor = document.queryCommandValue("backColor"));
            var u = window.getSelection();
            return u && (r.link = null === (e = u.anchorNode) || void 0 === e ? void 0 : null === (t = e.parentElement) || void 0 === t ? void 0 : null === (n = t.closest("a")) || void 0 === n ? void 0 : n.href),
            r
        }
    },
    14505: function(n, t, e) {
        e.d(t, {
            UU: function() {
                return s
            },
            tK: function() {
                return g
            },
            x8: function() {
                return v
            },
            xb: function() {
                return y
            }
        });
        var r = e(85333)
          , u = e(6692)
          , o = e(44822)
          , i = e(43526)
          , l = e(46152)
          , a = e.n(l)
          , d = e(75652)
          , c = e.n(d)
          , f = e(16478)
          , p = e(72958)
          , s = function(n) {
            var t = []
              , e = [];
            return n.forEach(function(o) {
                var l, a, d = o.type, c = o.groupUuid, f = o.groupType;
                i.$v.includes(d) ? (e.push(c),
                t.push((0,
                u._)((0,
                r._)({}, o), {
                    payload: (0,
                    u._)((0,
                    r._)({}, o.payload), {
                        html: (0,
                        i.Du)(o.payload.safeHTMLSchema, !0)
                    })
                }))) : f === i.kH.Dropdown || f === i.kH.MultiSelect ? !1 === e.includes(c) && (e.push(c),
                t.push((0,
                u._)((0,
                r._)({}, o), {
                    uuid: o.groupUuid,
                    type: o.groupType,
                    payload: (0,
                    u._)((0,
                    r._)({}, o.payload), {
                        placeholder: o.payload.placeholder ? (0,
                        i.CL)(o.payload.placeholder) : null,
                        options: n.filter(function(n) {
                            return n.groupUuid === c
                        }).map(function(n) {
                            var t, e, r;
                            return {
                                value: n.uuid,
                                text: n.payload.text ? (0,
                                i.CL)(n.payload.text) : "",
                                image: null !== (t = n.payload.image) && void 0 !== t ? t : null,
                                color: null !== (e = n.payload.color) && void 0 !== e ? e : (0,
                                p.yj)(n.payload.index),
                                isOtherOption: null !== (r = n.payload.isOtherOption) && void 0 !== r && r
                            }
                        })
                    })
                }))) : ([i.kH.MultipleChoice, i.kH.Checkboxes, i.kH.Ranking].includes(f) ? (null == o ? void 0 : null === (l = o.payload) || void 0 === l ? void 0 : l.text) && (o.payload.text = (0,
                i.CL)(o.payload.text)) : (null == o ? void 0 : null === (a = o.payload) || void 0 === a ? void 0 : a.placeholder) && (o.payload.placeholder = (0,
                i.CL)(o.payload.placeholder)),
                e.push(c),
                t.push(o))
            }),
            t
        }
          , v = function(n) {
            var t = []
              , e = [];
            return n.forEach(function(n) {
                n.type !== i.kH.PageBreak ? e.push(n) : (t.push(e),
                e = [])
            }),
            e.length > 0 && t.push(e),
            t
        }
          , y = function(n) {
            var t = c()(n.filter(function(n) {
                var t = n.groupType
                  , e = n.payload
                  , r = n.type;
                return e.randomize && i.FW.includes(t) || e.randomizeRows && r === i.kH.MatrixRow
            }).map(function(n) {
                return n.groupUuid
            }))
              , e = (0,
            o._)(n);
            return t.forEach(function(t) {
                var o = []
                  , l = [];
                if (n.forEach(function(n, e) {
                    n.groupUuid === t && n.type !== i.kH.Matrix && n.type !== i.kH.MatrixColumn && (o.push(n),
                    l.push(e))
                }),
                0 !== o.length) {
                    var d = []
                      , c = (0,
                    f.p)(o);
                    if (c.length > 0) {
                        var p = []
                          , s = [];
                        o.forEach(function(n, t) {
                            c.includes(n.uuid) && (p.push(n),
                            s.push(t))
                        }),
                        o = o.filter(function(n) {
                            return !c.includes(n.uuid)
                        }),
                        d = a()(o),
                        s.forEach(function(n, t) {
                            d.splice(n, 0, p[t])
                        })
                    } else
                        d = a()(o);
                    l.forEach(function(n, t) {
                        var o = e[n].payload
                          , i = o.columnUuid
                          , a = o.columnListUuid
                          , c = o.columnRatio;
                        e[n] = (0,
                        u._)((0,
                        r._)({}, d[t]), {
                            payload: (0,
                            u._)((0,
                            r._)({}, d[t].payload), {
                                index: t,
                                isFirst: 0 === t,
                                isLast: t === l.length - 1
                            })
                        }),
                        i && (e[n].payload.columnUuid = i,
                        e[n].payload.columnListUuid = a,
                        e[n].payload.columnRatio = c)
                    })
                }
            }),
            e
        }
          , g = function(n, t) {
            var e = c()(n.filter(function(n) {
                return n.groupType === i.kH.Ranking
            }).map(function(n) {
                return n.groupUuid
            }));
            if (0 === e.length)
                return n;
            var l = (0,
            o._)(n);
            return e.forEach(function(e) {
                if (!(0,
                i.xb)(t[e])) {
                    var o = []
                      , a = [];
                    n.forEach(function(n, t) {
                        n.groupUuid === e && (o.push(n),
                        a.push(t))
                    }),
                    a.forEach(function(n, i) {
                        var d = void 0
                          , c = t[e][i];
                        if (void 0 !== c && (d = o.find(function(n) {
                            return n.uuid === c
                        }),
                        o = o.filter(function(n) {
                            return n.uuid !== c
                        })),
                        d || (d = o.shift()),
                        d) {
                            var f = l[n].payload
                              , p = f.columnListUuid
                              , s = f.columnUuid
                              , v = f.columnRatio;
                            l[n] = (0,
                            u._)((0,
                            r._)({}, d), {
                                payload: (0,
                                u._)((0,
                                r._)({}, d.payload), {
                                    index: i,
                                    isFirst: 0 === i,
                                    isLast: i === a.length - 1
                                })
                            }),
                            s && (l[n].payload.columnUuid = s,
                            l[n].payload.columnListUuid = p,
                            l[n].payload.columnRatio = v)
                        }
                    })
                }
            }),
            l
        }
    },
    77410: function(n, t, e) {
        e.d(t, {
            d: function() {
                return f
            },
            l: function() {
                return c
            }
        });
        var r = e(87612)
          , u = e(85333)
          , o = e(6692)
          , i = e(43526)
          , l = e(72558)
          , a = e(44221)
          , d = e(97400)
          , c = function(n, t, e) {
            return ((null == e ? void 0 : e.onlySpecificBlockUuids) ? t.filter(function(n) {
                var t;
                return null === (t = e.onlySpecificBlockUuids) || void 0 === t ? void 0 : t.includes(n.uuid)
            }) : t).filter(i.dt).forEach(function(e) {
                var r = e.groupUuid;
                e.payload.calculatedFields.forEach(function(e) {
                    void 0 !== e.value && (void 0 === n[r] && (n[r] = {}),
                    n[r][e.uuid] = (0,
                    a.Jc)(e.value, e.type, n, t))
                })
            }),
            n
        }
          , f = function(n, t, e, f) {
            if (0 === f.filter(function(n) {
                return n.type === i.kH.CalculatedFields
            }).length || (n = c(n, f),
            0 === f.filter(function(n) {
                return n.type === i.kH.ConditionalLogic
            }).length))
                return n;
            var p = !0
              , s = !1
              , v = void 0;
            try {
                for (var y, g = t[Symbol.iterator](); !(p = (y = g.next()).done); p = !0) {
                    var h = y.value
                      , m = (null !== (U = e[h - 1]) && void 0 !== U ? U : []).filter(function(n) {
                        return [i.kH.CalculatedFields, i.kH.ConditionalLogic].includes(n.type)
                    })
                      , k = !0
                      , b = !1
                      , x = void 0;
                    try {
                        for (var U, B, S = m[Symbol.iterator](); !(k = (B = S.next()).done); k = !0) {
                            var w = B.value;
                            if (w.type === i.kH.CalculatedFields && (n = c(n, f, {
                                onlySpecificBlockUuids: [w.uuid]
                            })),
                            (0,
                            i.QE)(w)) {
                                var N = w.payload
                                  , C = N.logicalOperator
                                  , F = N.conditionals
                                  , O = N.actions;
                                if ((0,
                                d.VX)(F, C, n, f)) {
                                    var A = !0
                                      , M = !1
                                      , E = void 0;
                                    try {
                                        for (var T, H = O[Symbol.iterator](); !(A = (T = H.next()).done); A = !0) {
                                            var R, _, L, D, I, q, Z = T.value;
                                            if (Z.type === i.wZ.Calculate && (null === (_ = Z.payload) || void 0 === _ ? void 0 : null === (R = _.calculate) || void 0 === R ? void 0 : R.field) && (null === (D = Z.payload) || void 0 === D ? void 0 : null === (L = D.calculate) || void 0 === L ? void 0 : L.operator) && void 0 !== (null === (q = Z.payload) || void 0 === q ? void 0 : null === (I = q.calculate) || void 0 === I ? void 0 : I.value)) {
                                                var P = (0,
                                                a.zp)(n, Z.payload.calculate.field)
                                                  , G = (0,
                                                a.Jc)(Z.payload.calculate.value, Z.payload.calculate.field.calculatedFieldType, n, f);
                                                switch (Z.payload.calculate.field.calculatedFieldType === i.ot.Number && (P = new l.O(P),
                                                G = new l.O(G)),
                                                Z.payload.calculate.operator) {
                                                case i.K4.Addition:
                                                    "object" == typeof P ? P = P.plus(G) : P += G;
                                                    break;
                                                case i.K4.Subtraction:
                                                    P = P.minus(G);
                                                    break;
                                                case i.K4.Multiplication:
                                                    P = P.multipliedBy(G);
                                                    break;
                                                case i.K4.Division:
                                                    P = P.dividedBy(G);
                                                    break;
                                                case i.K4.Assignment:
                                                    P = G
                                                }
                                                Z.payload.calculate.field.calculatedFieldType === i.ot.Number && (P = P.toNumber()),
                                                n = (0,
                                                o._)((0,
                                                u._)({}, n), (0,
                                                r._)({}, Z.payload.calculate.field.blockGroupUuid, (0,
                                                o._)((0,
                                                u._)({}, n[Z.payload.calculate.field.blockGroupUuid]), (0,
                                                r._)({}, Z.payload.calculate.field.uuid, P))))
                                            }
                                        }
                                    } catch (n) {
                                        M = !0,
                                        E = n
                                    } finally {
                                        try {
                                            A || null == H.return || H.return()
                                        } finally {
                                            if (M)
                                                throw E
                                        }
                                    }
                                }
                            }
                        }
                    } catch (n) {
                        b = !0,
                        x = n
                    } finally {
                        try {
                            k || null == S.return || S.return()
                        } finally {
                            if (b)
                                throw x
                        }
                    }
                }
            } catch (n) {
                s = !0,
                v = n
            } finally {
                try {
                    p || null == g.return || g.return()
                } finally {
                    if (s)
                        throw v
                }
            }
            return n
        }
    },
    44221: function(n, t, e) {
        e.d(t, {
            C7: function() {
                return D
            },
            Ee: function() {
                return S
            },
            Jc: function() {
                return O
            },
            KN: function() {
                return E
            },
            Md: function() {
                return _
            },
            O6: function() {
                return R
            },
            Sz: function() {
                return G
            },
            Tp: function() {
                return Z
            },
            X1: function() {
                return P
            },
            _j: function() {
                return Y
            },
            bZ: function() {
                return L
            },
            bm: function() {
                return T
            },
            iM: function() {
                return N
            },
            lL: function() {
                return H
            },
            lo: function() {
                return F
            },
            mh: function() {
                return K
            },
            sy: function() {
                return A
            },
            wm: function() {
                return j
            },
            zj: function() {
                return M
            },
            zp: function() {
                return C
            }
        });
        var r = e(87612)
          , u = e(85333)
          , o = e(6692)
          , i = e(43526)
          , l = e(41504)
          , a = e(40692)
          , d = e(11494)
          , c = e(45393)
          , f = e.n(c)
          , p = e(6364)
          , s = e(48655)
          , v = e(57377)
          , y = e(34753)
          , g = e(98359)
          , h = e(14639)
          , m = e(16478)
          , k = e(21119)
          , b = e(46530)
          , x = e(14505)
          , U = e(77410)
          , B = e(97400)
          , S = function(n, t, e, r, u) {
            if (void 0 === t)
                return "";
            if (i.FW.includes(n))
                return w(n, t, e, r);
            if (n === i.kH.InputDate) {
                var o = (0,
                l.D)(t);
                return (0,
                a.J)(o) ? u ? (0,
                d.WU)(o, u.f, {
                    locale: u.locale
                }) : (0,
                d.WU)(o, "MMMM d, yyyy") : ""
            }
            if (n === i.kH.InputNumber) {
                var c, f, p, s, v = e.find(function(n) {
                    return n.groupUuid === r
                });
                return (0,
                i.uf)(t, {
                    decimalSeparator: null == v ? void 0 : null === (c = v.payload) || void 0 === c ? void 0 : c.decimalSeparator,
                    thousandsSeparator: null == v ? void 0 : null === (f = v.payload) || void 0 === f ? void 0 : f.thousandsSeparator,
                    prefix: null == v ? void 0 : null === (p = v.payload) || void 0 === p ? void 0 : p.prefix,
                    suffix: null == v ? void 0 : null === (s = v.payload) || void 0 === s ? void 0 : s.suffix
                })
            }
            return t
        }
          , w = function(n, t, e, r) {
            if (!t)
                return "";
            if (n === i.kH.Checkboxes || n === i.kH.MultiSelect) {
                var u = e.filter(function(n) {
                    return t.includes(n.uuid)
                }).map(function(n) {
                    return n.payload.text
                })
                  , o = t.find(function(n) {
                    return !1 === (0,
                    y.K)(n)
                });
                return void 0 !== o && u.push(o),
                u.join(", ")
            }
            if (n === i.kH.Ranking)
                return t.map(function(n) {
                    var t, r;
                    return null !== (r = null === (t = e.find(function(t) {
                        return t.uuid === n
                    })) || void 0 === t ? void 0 : t.payload.text) && void 0 !== r ? r : ""
                }).join(", ");
            if ([i.kH.MultipleChoice, i.kH.Dropdown].includes(n)) {
                if (Array.isArray(t)) {
                    var l, a, d = e.filter(function(n) {
                        return t.includes(n.uuid)
                    }).map(function(n) {
                        return n.payload.text
                    }), c = t.find(function(n) {
                        return !1 === (0,
                        y.K)(n)
                    });
                    return void 0 !== c && d.push(c),
                    d.join(", ")
                }
                return "string" == typeof t && !1 === (0,
                y.K)(t) ? t : null !== (a = null === (l = e.find(function(n) {
                    return n.uuid === t
                })) || void 0 === l ? void 0 : l.payload.text) && void 0 !== a ? a : ""
            }
            if (n === i.kH.Matrix) {
                var f = [];
                if (f = r ? t[r] : t)
                    return f.map(function(n) {
                        return (0,
                        m.u)(n, e)
                    }).join(", ")
            }
            return t
        }
          , N = function(n, t, e, r) {
            if ("string" == typeof e) {
                if (t === i.kH.Checkboxes || t === i.kH.Ranking || t === i.kH.MultiSelect) {
                    var u = r.filter(function(t) {
                        return t.groupUuid === n && t.payload.text === e
                    }).map(function(n) {
                        return n.uuid
                    });
                    return u.length > 0 ? u : e.includes(",") ? (e.split(/,\s?/).forEach(function(t) {
                        var e = r.find(function(e) {
                            return e.groupUuid === n && e.payload.text === t
                        });
                        e && u.push(e.uuid)
                    }),
                    u.length > 0 ? u : void 0) : void 0
                }
                if ([i.kH.MultipleChoice, i.kH.Dropdown].includes(t)) {
                    var o, l = r.find(function(t) {
                        return t.groupUuid === n
                    });
                    if ((null == l ? void 0 : l.payload.allowMultiple) && e.includes(",")) {
                        var a = [];
                        return e.split(/,\s?/).forEach(function(t) {
                            var e = r.find(function(e) {
                                return e.groupUuid === n && e.payload.text === t
                            });
                            e && a.push(e.uuid)
                        }),
                        a.length > 0 ? a : void 0
                    }
                    var d = null === (o = r.find(function(t) {
                        return t.groupUuid === n && t.payload.text === e
                    })) || void 0 === o ? void 0 : o.uuid;
                    return d ? [d] : void 0
                }
            }
        }
          , C = function(n, t) {
            return t.uuid === t.blockGroupUuid ? n[t.uuid] : n[t.blockGroupUuid] ? n[t.blockGroupUuid][t.uuid] : ""
        }
          , F = function(n, t, e) {
            var r = C(n, t);
            return i.FW.includes(t.questionType) && (r = w(t.questionType, r, e)),
            r
        }
          , O = function(n, t, e, r) {
            return (0,
            i.My)(n) && (n = F(e, n, r)),
            t !== i.ot.Number || isNaN(parseFloat(n)) || (n = parseFloat(n)),
            n
        }
          , A = function(n, t) {
            var e = {}
              , r = n.indexOf("?");
            new URLSearchParams(-1 !== r ? n.slice(r) : "").forEach(function(n, t) {
                e[t] = n
            });
            var u = {}
              , o = !0
              , l = !1
              , a = void 0;
            try {
                for (var d, c = t[Symbol.iterator](); !(o = (d = c.next()).done); o = !0) {
                    var f = d.value;
                    if ((0,
                    i.rb)(f)) {
                        var p = !0
                          , s = !1
                          , v = void 0;
                        try {
                            for (var y, g = f.payload.hiddenFields[Symbol.iterator](); !(p = (y = g.next()).done); p = !0) {
                                var h = y.value;
                                (null == h ? void 0 : h.name) && void 0 !== e[h.name] && (u[f.groupUuid] || (u[f.groupUuid] = {}),
                                u[f.groupUuid][h.uuid] = e[h.name])
                            }
                        } catch (n) {
                            s = !0,
                            v = n
                        } finally {
                            try {
                                p || null == g.return || g.return()
                            } finally {
                                if (s)
                                    throw v
                            }
                        }
                    }
                }
            } catch (n) {
                l = !0,
                a = n
            } finally {
                try {
                    o || null == c.return || c.return()
                } finally {
                    if (l)
                        throw a
                }
            }
            return u
        }
          , M = function(n, t, e, l) {
            var a = (0,
            U.d)(n, t, e, l)
              , d = l.filter(function(n) {
                return n.type === i.kH.CalculatedFields
            });
            return 0 === d.length ? {} : d.reduce(function(n, t) {
                var e = a[t.groupUuid];
                return e ? (0,
                o._)((0,
                u._)({}, n), (0,
                r._)({}, t.groupUuid, e)) : n
            }, {})
        }
          , E = function(n, t) {
            var e = (0,
            v.wf)("FORM_DATA_".concat(n));
            if (!e)
                return {};
            var r = JSON.parse(e)
              , u = Object.keys(r)
              , o = !0
              , l = !1
              , a = void 0;
            try {
                for (var d, c = u[Symbol.iterator](); !(o = (d = c.next()).done); o = !0)
                    !function() {
                        var n = d.value
                          , e = t.find(function(t) {
                            return t.groupUuid === n
                        });
                        if (e && i.FW.includes(e.groupType)) {
                            var u = r[n];
                            if (!(0,
                            i.xb)(u)) {
                                var o = t.filter(function(t) {
                                    return t.groupUuid === n
                                });
                                if (e.groupType === i.kH.Matrix) {
                                    var l = function(t) {
                                        if (!o.find(function(n) {
                                            return n.uuid === t
                                        }))
                                            return delete r[n][t],
                                            "continue";
                                        var e = u[t]
                                          , i = !0
                                          , l = !1
                                          , a = void 0;
                                        try {
                                            for (var d, c = e[Symbol.iterator](); !(i = (d = c.next()).done); i = !0)
                                                !function() {
                                                    var e = d.value;
                                                    o.find(function(n) {
                                                        return n.uuid === e
                                                    }) || (r[n][t] = r[n][t].filter(function(n) {
                                                        return n !== e
                                                    }))
                                                }()
                                        } catch (n) {
                                            l = !0,
                                            a = n
                                        } finally {
                                            try {
                                                i || null == c.return || c.return()
                                            } finally {
                                                if (l)
                                                    throw a
                                            }
                                        }
                                    };
                                    for (var a in u)
                                        l(a)
                                } else if (Array.isArray(u)) {
                                    var c = !0
                                      , f = !1
                                      , p = void 0;
                                    try {
                                        for (var s, v = u[Symbol.iterator](); !(c = (s = v.next()).done); c = !0)
                                            !function() {
                                                var t = s.value
                                                  , e = o.find(function(n) {
                                                    return n.uuid === t
                                                });
                                                !e && !1 === (0,
                                                y.K)(t) && o.length > 0 && o[0].payload.hasOtherOption && (e = o[0]),
                                                e || (r[n] = r[n].filter(function(n) {
                                                    return n !== t
                                                }))
                                            }()
                                    } catch (n) {
                                        f = !0,
                                        p = n
                                    } finally {
                                        try {
                                            c || null == v.return || v.return()
                                        } finally {
                                            if (f)
                                                throw p
                                        }
                                    }
                                } else {
                                    var g = o.find(function(n) {
                                        return n.uuid === u
                                    });
                                    !g && !1 === (0,
                                    y.K)(u) && o.length > 0 && o[0].payload.hasOtherOption && (g = o[0]),
                                    g || delete r[n]
                                }
                            }
                        }
                    }()
            } catch (n) {
                l = !0,
                a = n
            } finally {
                try {
                    o || null == c.return || c.return()
                } finally {
                    if (l)
                        throw a
                }
            }
            return r
        }
          , T = function(n, t) {
            (0,
            v._4)("FORM_DATA_".concat(n), JSON.stringify(t))
        }
          , H = function(n) {
            (0,
            v.Tn)("FORM_DATA_".concat(n))
        }
          , R = function(n) {
            var t = "FORM_SESSION_".concat(n)
              , e = (0,
            v.wf)(t);
            if (e)
                return e;
            var r = (0,
            p.Z)();
            return (0,
            v._4)(t, r),
            r
        }
          , _ = function(n) {
            (0,
            v.Tn)("FORM_SESSION_".concat(n))
        }
          , L = function(n) {
            var t = "RESPONDENT"
              , e = {}
              , r = (0,
            v.wf)(t);
            return r && (e = JSON.parse(r)) && e[n] || (e[n] = (0,
            p.Z)(),
            (0,
            v._4)(t, JSON.stringify(e))),
            e[n]
        }
          , D = function(n, t) {
            var e = t.slice(0, n).reverse().filter(function(n) {
                return n.type === i.kH.PageBreak
            })[0];
            return null != e ? e : t[0]
        }
          , I = function(n) {
            var t = [];
            return n.forEach(function(n) {
                n.forEach(function(n) {
                    var e = n.payload;
                    t.push((null == e ? void 0 : e.html) || (null == e ? void 0 : e.placeholder) || "")
                })
            }),
            /password|pa{0,3}s[s|\\*]{0,2}w[0|o|\\*]{0,3}r{0,1}d|pass\sword|pass\*{1,3}w[o]{0,1}rd|jelszó|пароль|kata[\s|-]{0,2}sandi|sandi anda|contrase[ñ|n][y]{0,1}a|senh[a|ä|á]|Passwort|wachtwoord|Passwört|Şifre|m[o|ö]t[s]{0,1} de passe/i.test(t.join(" "))
        }
          , q = function(n, t, e) {
            var r = n.filter(function(n) {
                return n.type === i.kH.ConditionalLogic
            });
            if (0 === r.length)
                return !1;
            var u = !0
              , o = !1
              , l = void 0;
            try {
                for (var a, d = r[Symbol.iterator](); !(u = (a = d.next()).done); u = !0) {
                    var c = a.value.payload
                      , f = c.logicalOperator
                      , p = c.conditionals
                      , s = c.actions
                      , v = !0
                      , y = !1
                      , g = void 0;
                    try {
                        for (var h, m = s[Symbol.iterator](); !(v = (h = m.next()).done); v = !0)
                            if (h.value.type === i.wZ.HideButtonToDisableCompletion && (0,
                            B.VX)(p, f, t, e))
                                return !0
                    } catch (n) {
                        y = !0,
                        g = n
                    } finally {
                        try {
                            v || null == m.return || m.return()
                        } finally {
                            if (y)
                                throw g
                        }
                    }
                }
            } catch (n) {
                o = !0,
                l = n
            } finally {
                try {
                    u || null == d.return || d.return()
                } finally {
                    if (o)
                        throw l
                }
            }
            return !1
        }
          , Z = function(n, t, e, r, u, o) {
            var l, a, d, c, f, p, s, v, y, m, k, b = null === (a = e[0]) || void 0 === a ? void 0 : null === (l = a.payload) || void 0 === l ? void 0 : l.logo, U = null === (c = e[0]) || void 0 === c ? void 0 : null === (d = c.payload) || void 0 === d ? void 0 : d.cover, S = null === (p = e[0]) || void 0 === p ? void 0 : null === (f = p.payload) || void 0 === f ? void 0 : f.coverSettings, w = t.length, N = null !== (k = t[n - 1]) && void 0 !== k ? k : [];
            N = (0,
            B.dp)(N, e, u, o),
            N = (0,
            x.tK)(N, u);
            var C = (0,
            B.KZ)(n, N, w, e, u)
              , F = (0,
            i.O2)(n, e)
              , O = !!(null == F ? void 0 : null === (s = F.payload) || void 0 === s ? void 0 : s.isThankYouPage)
              , A = C ? (0,
            i.O2)(C, e) : void 0
              , M = null === C || (null == A ? void 0 : null === (v = A.payload) || void 0 === v ? void 0 : v.isThankYouPage)
              , E = !O && !q(N, u, e)
              , T = Array.from((0,
            h.jZ)(N).values()).filter(function(n) {
                return !1 === [i.kH.HiddenFields, i.kH.CalculatedFields].includes(n.type)
            })
              , H = !!(null == r ? void 0 : r.pageAutoJump) && E && !M && 1 === T.length && (0,
            g.SL)(T[0], N)
              , R = T.every(function(n) {
                return void 0 !== u[n.blockGroupUuid] && !1 === (0,
                i.xb)(u[n.blockGroupUuid])
            });
            return {
                logo: b,
                cover: U,
                coverSettings: S,
                pageBlocks: N,
                pageQuestions: T,
                nextPage: C,
                isCustomThankYouPage: O,
                isLastInputPage: M,
                canAutoJumpToNextPage: H,
                pageFilledIn: R,
                showSubmitButton: E,
                showBackButton: !O && 1 !== n,
                buttonLabel: null == F ? void 0 : null === (m = F.payload) || void 0 === m ? void 0 : null === (y = m.button) || void 0 === y ? void 0 : y.label,
                showMaliciousFormWarning: I(t)
            }
        }
          , P = function(n, t, e, r, u, o) {
            try {
                var i = []
                  , l = (0,
                b.VN)((0,
                x.UU)(u))
                  , a = !0
                  , d = !1
                  , c = void 0;
                try {
                    for (var f, p = l[Symbol.iterator](); !(a = (f = p.next()).done); a = !0) {
                        var v = f.value
                          , y = v.uuid
                          , g = v.title
                          , h = v.questionType;
                        i.push({
                            id: y,
                            title: g,
                            type: h,
                            answer: {
                                value: F(o, v, u),
                                raw: C(o, v)
                            }
                        })
                    }
                } catch (n) {
                    d = !0,
                    c = n
                } finally {
                    try {
                        a || null == p.return || p.return()
                    } finally {
                        if (d)
                            throw c
                    }
                }
                return {
                    id: n,
                    formId: e,
                    formName: r,
                    respondentId: t,
                    createdAt: new Date,
                    fields: i
                }
            } catch (n) {
                return (0,
                s.Tb)(n),
                {}
            }
        }
          , G = function() {
            setTimeout(function() {
                var n, t, e = null === (n = document.forms[0]) || void 0 === n ? void 0 : n.elements[0];
                e && (0,
                k.PZ)(e) && ("INPUT" === e.tagName && !1 === ["radio", "checkbox"].includes(null !== (t = e.getAttribute("type")) && void 0 !== t ? t : "") || "TEXTAREA" === e.tagName) && e.focus()
            }, 100)
        }
          , K = function() {
            setTimeout(function() {
                var n = document.querySelector(".tally-validation-error");
                if (n) {
                    var t = n.closest(".tally-block")
                      , e = null == t ? void 0 : t.querySelector('[aria-invalid="true"]');
                    if (e) {
                        e.focus(),
                        !1 === (0,
                        k.PZ)(e) && e.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                        return
                    }
                    !1 === (0,
                    k.PZ)(n) && n.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }
            }, 100)
        }
          , j = function() {
            return f()("ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789".split(""), 6).join("")
        }
          , Y = function(n, t, e, r) {
            var u = {}
              , o = !0
              , l = !1
              , a = void 0;
            try {
                for (var d, c = n[Symbol.iterator](); !(o = (d = c.next()).done); o = !0)
                    !function() {
                        var n = d.value;
                        if (n < e)
                            return u[n] = 100;
                        if (n > e)
                            return u[n] = 0;
                        var o = []
                          , l = !0
                          , a = !1
                          , c = void 0;
                        try {
                            for (var f, p = r[Symbol.iterator](); !(l = (f = p.next()).done); l = !0) {
                                var s = f.value
                                  , v = s.type
                                  , y = s.groupUuid
                                  , g = s.payload;
                                !1 === i.z8.includes(v) || [i.kH.HiddenFields, i.kH.CalculatedFields].includes(v) || !g.isRequired || o.includes(y) || o.push(y)
                            }
                        } catch (n) {
                            a = !0,
                            c = n
                        } finally {
                            try {
                                l || null == p.return || p.return()
                            } finally {
                                if (a)
                                    throw c
                            }
                        }
                        if (0 === o.length)
                            return u[n] = e < n ? 0 : 100;
                        var h = o.length
                          , m = 0;
                        o.forEach(function(n) {
                            !(0,
                            i.xb)(t[n]) && m++
                        }),
                        u[n] = e < n ? 0 : m / h * 100
                    }()
            } catch (n) {
                l = !0,
                a = n
            } finally {
                try {
                    o || null == c.return || c.return()
                } finally {
                    if (l)
                        throw a
                }
            }
            return u
        }
    },
    97400: function(n, t, e) {
        e.d(t, {
            Ai: function() {
                return k
            },
            KZ: function() {
                return m
            },
            VX: function() {
                return g
            },
            dp: function() {
                return h
            }
        });
        var r = e(87612)
          , u = e(85333)
          , o = e(6692)
          , i = e(44822)
          , l = e(43526)
          , a = e(89166)
          , d = e.n(a)
          , c = e(18149)
          , f = e.n(c)
          , p = e(48655)
          , s = e(34753)
          , v = e(44221)
          , y = function(n, t, e) {
            var r = n.type
              , u = n.payload;
            if (r === l.Rp.Group && (null == u ? void 0 : u.conditionals) && u.logicalOperator)
                return g(u.conditionals, u.logicalOperator, t, e);
            if (r === l.Rp.Single && (null == u ? void 0 : u.field) && (null == u ? void 0 : u.comparison)) {
                var o = u.field
                  , i = u.comparison
                  , a = u.value
                  , c = (0,
                v.zp)(t, o);
                (0,
                l.My)(a) && (a = (0,
                v.zp)(t, a));
                try {
                    switch (i) {
                    case l.F2.Is:
                        if (o.questionType === l.kH.Matrix)
                            return Array.isArray(a) || (a = [a]),
                            void 0 !== c && f()(c, a);
                        if (Array.isArray(c))
                            return 1 === c.length && b(c[0], a, e);
                        return void 0 !== c && b(c, a, e);
                    case l.F2.IsNot:
                        if (o.questionType === l.kH.Matrix)
                            return Array.isArray(a) || (a = [a]),
                            void 0 !== c && !f()(c, a);
                        if (Array.isArray(c))
                            return 1 !== c.length || !1 === b(c[0], a, e);
                        return void 0 !== c && !1 === b(c, a, e);
                    case l.F2.IsAnyOf:
                        if (!Array.isArray(a) || !Array.isArray(c))
                            return b(c, a, e);
                        return a.some(function(n) {
                            return c.some(function(t) {
                                return b(t, n, e)
                            })
                        });
                    case l.F2.IsEveryOf:
                        if (!Array.isArray(a) || !Array.isArray(c))
                            return b(c, a, e);
                        return a.every(function(n) {
                            return c.some(function(t) {
                                return b(t, n, e)
                            })
                        });
                    case l.F2.Contains:
                        if (Array.isArray(c))
                            return void 0 !== a && c.some(function(n) {
                                return b(n, a, e)
                            });
                        return void 0 !== c && void 0 !== a && RegExp(d()(a), "i").test(c);
                    case l.F2.DoesNotContain:
                        if (Array.isArray(c))
                            return void 0 !== a && !1 === c.some(function(n) {
                                return b(n, a, e)
                            });
                        return void 0 !== c && void 0 !== a && !1 === RegExp(d()(a), "i").test(c);
                    case l.F2.StartsWith:
                        return void 0 !== c && void 0 !== a && RegExp("^".concat(d()(a)), "i").test(c);
                    case l.F2.DoesNotStartWith:
                        return void 0 !== c && void 0 !== a && !1 === RegExp("^".concat(d()(a)), "i").test(c);
                    case l.F2.EndsWith:
                        return void 0 !== c && void 0 !== a && RegExp("".concat(d()(a), "$"), "i").test(c);
                    case l.F2.DoesNotEndWith:
                        return void 0 !== c && void 0 !== a && !1 === RegExp("".concat(d()(a), "$"), "i").test(c);
                    case l.F2.IsEmpty:
                        if (Array.isArray(c))
                            return 0 === c.length;
                        return void 0 === c || "" === c;
                    case l.F2.IsNotEmpty:
                        if (Array.isArray(c))
                            return c.length > 0;
                        return void 0 !== c && "" !== c;
                    case l.F2.Equal:
                        return Number(c) === Number(a);
                    case l.F2.NotEqual:
                        return Number(c) !== Number(a);
                    case l.F2.GreaterThan:
                        return Number(c) > Number(a);
                    case l.F2.LessThan:
                        return Number(c) < Number(a);
                    case l.F2.GreaterOrEqualThan:
                        return Number(c) >= Number(a);
                    case l.F2.LessOrEqualThan:
                        return Number(c) <= Number(a);
                    case l.F2.IsBefore:
                        if (/^[0-9]{2}:[0-9]{2}$/.test(c))
                            return Date.parse("01/01/2000 ".concat(c)) < Date.parse("01/01/2000 ".concat(a));
                        return Date.parse(c) < Date.parse(a);
                    case l.F2.IsAfter:
                        if (/^[0-9]{2}:[0-9]{2}$/.test(c))
                            return Date.parse("01/01/2000 ".concat(c)) > Date.parse("01/01/2000 ".concat(a));
                        return Date.parse(c) > Date.parse(a)
                    }
                } catch (n) {
                    (0,
                    p.Tb)(n)
                }
            }
            return !1
        }
          , g = function(n, t, e, r) {
            var u = n.map(function(n) {
                return y(n, e, r)
            });
            return t === l.SK.And && u.every(function(n) {
                return n
            }) || t === l.SK.Or && u.some(function(n) {
                return n
            })
        }
          , h = function(n, t, e, a) {
            var d = t.filter(function(n) {
                return n.type === l.kH.ConditionalLogic
            })
              , c = t.filter(function(n) {
                return n.payload.isHidden
            }).map(function(n) {
                return n.uuid
            });
            if (0 === d.length && 0 === c.length)
                return n;
            var f = (0,
            i._)(n)
              , p = !0
              , s = !1
              , v = void 0;
            try {
                for (var y, h = d[Symbol.iterator](); !(p = (y = h.next()).done); p = !0) {
                    var m = y.value.payload
                      , k = m.logicalOperator
                      , b = m.conditionals
                      , x = m.actions;
                    if (g(b, k, e, t)) {
                        var U = !0
                          , B = !1
                          , S = void 0;
                        try {
                            for (var w, N = x[Symbol.iterator](); !(U = (w = N.next()).done); U = !0)
                                !function() {
                                    var n, t, e, r = w.value;
                                    r.type === l.wZ.ShowBlocks && (null === (n = r.payload) || void 0 === n ? void 0 : n.showBlocks) && (c = c.filter(function(n) {
                                        var t, e;
                                        return (null === (e = r.payload) || void 0 === e ? void 0 : null === (t = e.showBlocks) || void 0 === t ? void 0 : t.includes(n)) === !1
                                    })),
                                    r.type === l.wZ.HideBlocks && Array.isArray(null === (t = r.payload) || void 0 === t ? void 0 : t.hideBlocks) && (c = (0,
                                    i._)(c).concat((0,
                                    i._)(r.payload.hideBlocks))),
                                    r.type === l.wZ.RequireAnswer && (null === (e = r.payload) || void 0 === e ? void 0 : e.requireAnswer) && (f = f.map(function(n) {
                                        var t, e;
                                        return (null === (e = r.payload) || void 0 === e ? void 0 : null === (t = e.requireAnswer) || void 0 === t ? void 0 : t.includes(n.groupUuid)) ? (0,
                                        o._)((0,
                                        u._)({}, n), {
                                            payload: (0,
                                            o._)((0,
                                            u._)({}, n.payload), {
                                                isRequired: !0
                                            })
                                        }) : n
                                    }))
                                }()
                        } catch (n) {
                            B = !0,
                            S = n
                        } finally {
                            try {
                                U || null == N.return || N.return()
                            } finally {
                                if (B)
                                    throw S
                            }
                        }
                    }
                }
            } catch (n) {
                s = !0,
                v = n
            } finally {
                try {
                    p || null == h.return || h.return()
                } finally {
                    if (s)
                        throw v
                }
            }
            if (c.length > 0) {
                f = f.filter(function(n) {
                    return !1 === c.includes(n.uuid)
                });
                var C = [];
                if (t.forEach(function(n) {
                    var t = n.uuid
                      , d = n.type
                      , p = n.groupUuid
                      , s = n.groupType
                      , v = n.payload;
                    if (!(!1 === c.includes(t) || l.TI.includes(d))) {
                        if (l.FW.includes(s) && C.push(p),
                        void 0 !== e[p] && !(v.hasDefaultAnswer && void 0 !== v.defaultAnswer) && !l.W_.includes(d)) {
                            if (d === l.kH.Checkbox || d === l.kH.RankingOption || d === l.kH.MultiSelectOption) {
                                if (Array.isArray(e[p]) && e[p].includes(t)) {
                                    var y = (0,
                                    i._)(e[p]);
                                    y.splice(y.indexOf(t), 1),
                                    null == a || a((0,
                                    r._)({}, p, y))
                                }
                            } else if ([l.kH.DropdownOption, l.kH.MultipleChoiceOption].includes(d)) {
                                if (Array.isArray(e[p]) && e[p].includes(t)) {
                                    var g = (0,
                                    i._)(e[p]);
                                    g.splice(g.indexOf(t), 1),
                                    null == a || a((0,
                                    r._)({}, p, g))
                                } else
                                    e[p] === t && (null == a || a((0,
                                    r._)({}, p, void 0)))
                            } else
                                d !== l.kH.Payment && (null == a || a((0,
                                r._)({}, p, void 0)))
                        }
                        if (d === l.kH.MatrixRow && void 0 !== e[p] && e[p][t] && (null == a || a((0,
                        r._)({}, p, (0,
                        o._)((0,
                        u._)({}, e[p]), (0,
                        r._)({}, t, void 0))))),
                        d === l.kH.MatrixColumn && void 0 !== e[p]) {
                            var h = Object.keys(e[p]);
                            if (h.length > 0) {
                                var m = (0,
                                u._)({}, e[p])
                                  , k = !1;
                                h.forEach(function(n) {
                                    m[n] && m[n].includes(t) && (m[n].splice(m[n].indexOf(t), 1),
                                    k = !0)
                                }),
                                k && (null == a || a((0,
                                r._)({}, p, m)))
                            }
                        }
                        (d === l.kH.MatrixRow || d === l.kH.MatrixColumn) && f.filter(function(n) {
                            return n.groupUuid === p && n.type !== l.kH.Matrix
                        }).every(function(n) {
                            return !0 === n.payload.isHidden
                        }) && (f = f.filter(function(n) {
                            return n.groupUuid !== p
                        }))
                    }
                }),
                C.length > 0) {
                    var F = new Map;
                    f = f.map(function(n) {
                        if (C.includes(n.groupUuid) && (n.type === l.kH.Dropdown || n.type === l.kH.MultiSelect))
                            return (0,
                            o._)((0,
                            u._)({}, n), {
                                payload: (0,
                                o._)((0,
                                u._)({}, n.payload), {
                                    options: n.payload.options.filter(function(n) {
                                        var t = n.value;
                                        return !1 === c.includes(t)
                                    })
                                })
                            });
                        if (C.includes(n.groupUuid) && [l.kH.MultipleChoiceOption, l.kH.Checkbox, l.kH.RankingOption].includes(n.type)) {
                            F.get(n.groupUuid) || F.set(n.groupUuid, {
                                firstBlockUuid: f.find(function(t) {
                                    return t.groupUuid === n.groupUuid
                                }).uuid,
                                lastBlockUuid: (0,
                                i._)(f).reverse().find(function(t) {
                                    return t.groupUuid === n.groupUuid
                                }).uuid
                            });
                            var t = F.get(n.groupUuid)
                              , e = t.firstBlockUuid
                              , r = t.lastBlockUuid;
                            return (0,
                            o._)((0,
                            u._)({}, n), {
                                payload: (0,
                                o._)((0,
                                u._)({}, n.payload), {
                                    isFirst: e === n.uuid,
                                    isLast: r === n.uuid
                                })
                            })
                        }
                        return n
                    }).filter(function(n) {
                        return !((n.type === l.kH.Dropdown || n.type === l.kH.MultiSelect) && 0 === n.payload.options.length)
                    })
                }
            }
            return f
        }
          , m = function(n, t, e, r, u) {
            var o = n + 1
              , i = t.filter(function(n) {
                return n.type === l.kH.ConditionalLogic
            });
            if (0 === i.length)
                return o && o <= e ? o : null;
            var a = !0
              , d = !1
              , c = void 0;
            try {
                for (var f, p = i[Symbol.iterator](); !(a = (f = p.next()).done); a = !0) {
                    var s = f.value.payload
                      , v = s.logicalOperator
                      , y = s.conditionals
                      , h = s.actions;
                    if (g(y, v, u, r)) {
                        var m = !0
                          , k = !1
                          , b = void 0;
                        try {
                            for (var x, U = h[Symbol.iterator](); !(m = (x = U.next()).done); m = !0) {
                                var B, S, w, N, C = x.value;
                                C.type === l.wZ.JumpToPage && void 0 !== (null === (B = C.payload) || void 0 === B ? void 0 : B.jumpToPage) && (o = (null === (w = C.payload) || void 0 === w ? void 0 : null === (S = w.jumpToPage) || void 0 === S ? void 0 : S.toString()) === "0" ? null : "number" == typeof (null === (N = C.payload) || void 0 === N ? void 0 : N.jumpToPage) ? C.payload.jumpToPage : (0,
                                l.cC)(C.payload.jumpToPage, r))
                            }
                        } catch (n) {
                            k = !0,
                            b = n
                        } finally {
                            try {
                                m || null == U.return || U.return()
                            } finally {
                                if (k)
                                    throw b
                            }
                        }
                    }
                }
            } catch (n) {
                d = !0,
                c = n
            } finally {
                try {
                    a || null == p.return || p.return()
                } finally {
                    if (d)
                        throw c
                }
            }
            return o && o <= e ? o : null
        }
          , k = function(n, t, e) {
            for (var r = [1], u = t.length, o = 1; null !== o; ) {
                var i, a = o, d = t[a - 1];
                if (o = m(a, d, u, n, e),
                a === o) {
                    o = null;
                    continue
                }
                if (null !== o) {
                    if (r.includes(o)) {
                        o = null;
                        continue
                    }
                    var c = (0,
                    l.O2)(o, n);
                    null != c && null !== (i = c.payload) && void 0 !== i && i.isThankYouPage || r.push(o)
                }
            }
            return r
        }
          , b = function(n, t, e) {
            var r = n === t;
            if (!1 === r && "string" == typeof n && "string" == typeof t && !1 === (0,
            s.K)(n) && !0 === (0,
            s.K)(t)) {
                var u, o = e.find(function(n) {
                    return n.uuid === t
                });
                (null == o ? void 0 : null === (u = o.payload) || void 0 === u ? void 0 : u.isOtherOption) && (r = !0)
            }
            return r
        }
    }
}]);
