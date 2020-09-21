!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(w, e) {
    "use strict";
    function m(e) {
        return null != e && e === e.window
    }
    var t = []
      , i = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , l = t.push
      , o = t.indexOf
      , n = {}
      , r = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , c = a.call(Object)
      , y = {}
      , b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , S = w.document
      , u = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function x(e, t, n) {
        var i, o, r = (n = n || S).createElement("script");
        if (r.text = e,
        t)
            for (i in u)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function k(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
    }
    var f = "3.5.0"
      , E = function(e, t) {
        return new E.fn.init(e,t)
    };
    function d(e) {
        var t = !!e && "length"in e && e.length
          , n = k(e);
        return !b(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || b(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && a !== i && (c && i && (E.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[t],
                    r = o && !Array.isArray(n) ? [] : o || E.isPlainObject(n) ? n : {},
                    o = !1,
                    a[t] = E.extend(c, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }
    ,
    E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== r.call(e) || (t = i(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || a.call(n) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            x(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (d(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
                !t(e[o], o) != a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0, a = [];
            if (d(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && a.push(o);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }
        function o() {
            _()
        }
        var e, p, x, r, a, h, d, m, k, l, c, _, w, s, S, g, u, v, y, E = "sizzle" + 1 * new Date, b = n.document, C = 0, i = 0, T = le(), A = le(), P = le(), D = le(), O = function(e, t) {
            return e === t && (c = !0),
            0
        }, I = {}.hasOwnProperty, t = [], j = t.pop, M = t.push, N = t.push, F = t.slice, L = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", B = "\\[" + $ + "*(" + H + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + $ + "*\\]", q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", z = new RegExp($ + "+","g"), W = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$","g"), U = new RegExp("^" + $ + "*," + $ + "*"), V = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), G = new RegExp($ + "|>"), K = new RegExp(q), Q = new RegExp("^" + H + "$"), Y = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)","i")
        }, X = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, ee = /^[^{]+\{\s*\[native \w/, te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ne = /[+~]/, ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])","g"), oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ae = xe(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            N.apply(t = F.call(b.childNodes), b.childNodes),
            t[b.childNodes.length].nodeType
        } catch (e) {
            N = {
                apply: t.length ? function(e, t) {
                    M.apply(e, F.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, n, i) {
            var o, r, a, s, l, c, u, f = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!i && (_(t),
            t = t || w,
            S)) {
                if (11 !== d && (l = te.exec(e)))
                    if (o = l[1]) {
                        if (9 === d) {
                            if (!(a = t.getElementById(o)))
                                return n;
                            if (a.id === o)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(o)) && y(t, a) && a.id === o)
                            return n.push(a),
                            n
                    } else {
                        if (l[2])
                            return N.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = l[3]) && p.getElementsByClassName && t.getElementsByClassName)
                            return N.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (p.qsa && !D[e + " "] && (!g || !g.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e,
                    f = t,
                    1 === d && (G.test(e) || V.test(e))) {
                        for ((f = ne.test(e) && ve(t.parentNode) || t) === t && p.scope || ((s = t.getAttribute("id")) ? s = s.replace(oe, re) : t.setAttribute("id", s = E)),
                        r = (c = h(e)).length; r--; )
                            c[r] = (s ? "#" + s : ":scope") + " " + be(c[r]);
                        u = c.join(",")
                    }
                    try {
                        return N.apply(n, f.querySelectorAll(u)),
                        n
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        s === E && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(W, "$1"), t, n, i)
        }
        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > x.cacheLength && delete e[i.shift()],
                e[t + " "] = n
            }
        }
        function ce(e) {
            return e[E] = !0,
            e
        }
        function ue(e) {
            var t = w.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                x.attrHandle[n[i]] = t
        }
        function de(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function me(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ge(a) {
            return ce(function(r) {
                return r = +r,
                ce(function(e, t) {
                    for (var n, i = a([], e.length, r), o = i.length; o--; )
                        e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = se.support = {},
        a = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !X.test(t || n && n.nodeName || "HTML")
        }
        ,
        _ = se.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : b;
            return i != w && 9 === i.nodeType && i.documentElement && (s = (w = i).documentElement,
            S = !a(w),
            b != w && (n = w.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)),
            p.scope = ue(function(e) {
                return s.appendChild(e).appendChild(w.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            p.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = ue(function(e) {
                return e.appendChild(w.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = ee.test(w.getElementsByClassName),
            p.getById = ue(function(e) {
                return s.appendChild(e).id = E,
                !w.getElementsByName || !w.getElementsByName(E).length
            }),
            p.getById ? (x.filter.ID = function(e) {
                var t = e.replace(ie, f);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var n = e.replace(ie, f);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" !== e)
                    return r;
                for (; n = r[o++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            x.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && S)
                    return t.getElementsByClassName(e)
            }
            ,
            u = [],
            g = [],
            (p.qsa = ee.test(w.querySelectorAll)) && (ue(function(e) {
                var t;
                s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + E + "-]").length || g.push("~="),
                (t = w.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || g.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                g.push("[\\r\\n\\f]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = w.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                s.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (p.matchesSelector = ee.test(v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function(e) {
                p.disconnectedMatch = v.call(e, "*"),
                v.call(e, "[s!='']:x"),
                u.push("!=", q)
            }),
            g = g.length && new RegExp(g.join("|")),
            u = u.length && new RegExp(u.join("|")),
            t = ee.test(s.compareDocumentPosition),
            y = t || ee.test(s.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            O = t ? function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == w || e.ownerDocument == b && y(b, e) ? -1 : t == w || t.ownerDocument == b && y(b, t) ? 1 : l ? L(l, e) - L(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], s = [t];
                if (!o || !r)
                    return e == w ? -1 : t == w ? 1 : o ? -1 : r ? 1 : l ? L(l, e) - L(l, t) : 0;
                if (o === r)
                    return de(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[i] === s[i]; )
                    i++;
                return i ? de(a[i], s[i]) : a[i] == b ? -1 : s[i] == b ? 1 : 0
            }
            ),
            w
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (_(e),
            p.matchesSelector && S && !D[t + " "] && (!u || !u.test(t)) && (!g || !g.test(t)))
                try {
                    var n = v.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    D(t, !0)
                }
            return 0 < se(t, w, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != w && _(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != w && _(e);
            var n = x.attrHandle[t.toLowerCase()]
              , i = n && I.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
            return void 0 !== i ? i : p.attributes || !S ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(oe, re)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (c = !p.detectDuplicates,
            l = !p.sortStable && e.slice(0),
            e.sort(O),
            c) {
                for (; t = e[o++]; )
                    t === e[o] && (i = n.push(o));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return l = null,
            e
        }
        ,
        r = se.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += r(t);
            return n
        }
        ,
        (x = se.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ie, f),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ie, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && T(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, o) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(z, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var v = "nth" !== h.slice(0, 3)
                      , y = "last" !== h.slice(-4)
                      , b = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, o, r, a, s, l, c = v != y ? "nextSibling" : "previousSibling", u = e.parentNode, f = b && e.nodeName.toLowerCase(), d = !n && !b, p = !1;
                        if (u) {
                            if (v) {
                                for (; c; ) {
                                    for (a = e; a = a[c]; )
                                        if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild],
                            y && d) {
                                for (p = (s = (i = (o = (r = (a = u)[E] || (a[E] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === C && i[1]) && i[2],
                                a = s && u.childNodes[s]; a = ++s && a && a[c] || (p = s = 0) || l.pop(); )
                                    if (1 === a.nodeType && ++p && a === e) {
                                        o[h] = [C, s, p];
                                        break
                                    }
                            } else if (d && (p = s = (i = (o = (r = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] || [])[0] === C && i[1]),
                            !1 === p)
                                for (; (a = ++s && a && a[c] || (p = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((o = (r = a[E] || (a[E] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[h] = [C, p]),
                                a !== e)); )
                                    ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[E] ? a(r) : 1 < a.length ? (t = [e, e, "", r],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                        for (var n, i = a(e, r), o = i.length; o--; )
                            e[n = L(e, i[o])] = !(t[n] = i[o])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: ce(function(e) {
                    var i = []
                      , o = []
                      , s = d(e.replace(W, "$1"));
                    return s[E] ? ce(function(e, t, n, i) {
                        for (var o, r = s(e, null, i, []), a = e.length; a--; )
                            (o = r[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        s(i, null, n, o),
                        i[0] = null,
                        !o.pop()
                    }
                }),
                has: ce(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: ce(function(t) {
                    return t = t.replace(ie, f),
                    function(e) {
                        return -1 < (e.textContent || r(e)).indexOf(t)
                    }
                }),
                lang: ce(function(n) {
                    return Q.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(ie, f).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Z.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ge(function() {
                    return [0]
                }),
                last: ge(function(e, t) {
                    return [t - 1]
                }),
                eq: ge(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ge(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ge(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ge(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: ge(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[e] = pe(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = he(e);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function xe(s, e, t) {
            var l = e.dir
              , c = e.next
              , u = c || l
              , f = t && "parentNode" === u
              , d = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, o, r, a = [C, d];
                if (n) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || f)
                            if (o = (r = e[E] || (e[E] = {}))[e.uniqueID] || (r[e.uniqueID] = {}),
                            c && c === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((i = o[u]) && i[0] === C && i[1] === d)
                                    return a[2] = i[2];
                                if ((o[u] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function ke(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--; )
                    if (!o[i](e, t, n))
                        return !1;
                return !0
            }
            : o[0]
        }
        function _e(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                (r = e[s]) && (n && !n(r, i, o) || (a.push(r),
                c && t.push(s)));
            return a
        }
        function we(p, h, m, g, v, e) {
            return g && !g[E] && (g = we(g)),
            v && !v[E] && (v = we(v, e)),
            ce(function(e, t, n, i) {
                var o, r, a, s = [], l = [], c = t.length, u = e || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        se(e, t[i], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !p || !e && h ? u : _e(u, s, p, n, i), d = m ? v || (e ? p : c || g) ? [] : t : f;
                if (m && m(f, d, n, i),
                g)
                    for (o = _e(d, l),
                    g(o, [], n, i),
                    r = o.length; r--; )
                        (a = o[r]) && (d[l[r]] = !(f[l[r]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (o = [],
                            r = d.length; r--; )
                                (a = d[r]) && o.push(f[r] = a);
                            v(null, d = [], o, i)
                        }
                        for (r = d.length; r--; )
                            (a = d[r]) && -1 < (o = v ? L(e, a) : s[r]) && (e[o] = !(t[o] = a))
                    }
                } else
                    d = _e(d === t ? d.splice(c, d.length) : d),
                    v ? v(null, t, d, i) : N.apply(t, d)
            })
        }
        function Se(e) {
            for (var o, t, n, i = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = xe(function(e) {
                return e === o
            }, a, !0), c = xe(function(e) {
                return -1 < L(o, e)
            }, a, !0), u = [function(e, t, n) {
                var i = !r && (n || t !== k) || ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
                return o = null,
                i
            }
            ]; s < i; s++)
                if (t = x.relative[e[s].type])
                    u = [xe(ke(u), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[E]) {
                        for (n = ++s; n < i && !x.relative[e[n].type]; n++)
                            ;
                        return we(1 < s && ke(u), 1 < s && be(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(W, "$1"), t, s < n && Se(e.slice(s, n)), n < i && Se(e = e.slice(n)), n < i && be(e))
                    }
                    u.push(t)
                }
            return ke(u)
        }
        return ye.prototype = x.filters = x.pseudos,
        x.setFilters = new ye,
        h = se.tokenize = function(e, t) {
            var n, i, o, r, a, s, l, c = A[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e,
            s = [],
            l = x.preFilter; a; ) {
                for (r in n && !(i = U.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                s.push(o = [])),
                n = !1,
                (i = V.exec(a)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(W, " ")
                }),
                a = a.slice(n.length)),
                x.filter)
                    !(i = Y[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: r,
                        matches: i
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : A(e, s).slice(0)
        }
        ,
        d = se.compile = function(e, t) {
            var n, g, v, y, b, i, o = [], r = [], a = P[e + " "];
            if (!a) {
                for (n = (t = t || h(e)).length; n--; )
                    (a = Se(t[n]))[E] ? o.push(a) : r.push(a);
                (a = P(e, (g = r,
                y = 0 < (v = o).length,
                b = 0 < g.length,
                i = function(e, t, n, i, o) {
                    var r, a, s, l = 0, c = "0", u = e && [], f = [], d = k, p = e || b && x.find.TAG("*", o), h = C += null == d ? 1 : Math.random() || .1, m = p.length;
                    for (o && (k = t == w || t || o); c !== m && null != (r = p[c]); c++) {
                        if (b && r) {
                            for (a = 0,
                            t || r.ownerDocument == w || (_(r),
                            n = !S); s = g[a++]; )
                                if (s(r, t || w, n)) {
                                    i.push(r);
                                    break
                                }
                            o && (C = h)
                        }
                        y && ((r = !s && r) && l--,
                        e && u.push(r))
                    }
                    if (l += c,
                    y && c !== l) {
                        for (a = 0; s = v[a++]; )
                            s(u, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    u[c] || f[c] || (f[c] = j.call(i));
                            f = _e(f)
                        }
                        N.apply(i, f),
                        o && !e && 0 < f.length && 1 < l + v.length && se.uniqueSort(i)
                    }
                    return o && (C = h,
                    k = d),
                    u
                }
                ,
                y ? ce(i) : i))).selector = e
            }
            return a
        }
        ,
        m = se.select = function(e, t, n, i) {
            var o, r, a, s, l, c = "function" == typeof e && e, u = !i && h(e = c.selector || e);
            if (n = n || [],
            1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && S && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ie, f), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o],
                !x.relative[s = a.type]); )
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace(ie, f), ne.test(r[0].type) && ve(t.parentNode) || t))) {
                        if (r.splice(o, 1),
                        !(e = i.length && be(r)))
                            return N.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || d(e, u))(i, t, !S, n, !t || ne.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = E.split("").sort(O).join("") === E,
        p.detectDuplicates = !!c,
        _(),
        p.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(w.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        se
    }(w);
    E.find = p,
    E.expr = p.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = p.uniqueSort,
    E.text = p.getText,
    E.isXMLDoc = p.isXML,
    E.contains = p.contains,
    E.escapeSelector = p.escape;
    function h(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && E(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function _(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var C = E.expr.match.needsContext;
    function T(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function P(e, n, i) {
        return b(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < o.call(n, e) !== i
        }) : E.filter(n, e, i)
    }
    E.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (E.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                E.find(e, o[t], n);
            return 1 < i ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(P(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(P(this, e || [], !0))
        },
        is: function(e) {
            return !!P(this, "string" == typeof e && C.test(e) ? E(e) : e || [], !1).length
        }
    });
    var D, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || D,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof E ? t[0] : t,
            E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : S, !0)),
            A.test(i[1]) && E.isPlainObject(t))
                for (i in t)
                    b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (o = S.getElementById(i[2])) && (this[0] = o,
        this.length = 1),
        this
    }
    ).prototype = E.fn,
    D = E(S);
    var I = /^(?:parents|prev(?:Until|All))/
      , j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], a = "string" != typeof e && E(e);
            if (!C.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? E.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(E(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return M(e, "nextSibling")
        },
        prev: function(e) {
            return M(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (T(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(i, o) {
        E.fn[i] = function(e, t) {
            var n = E.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (j[i] || E.uniqueSort(n),
            I.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;
    function F(e) {
        return e
    }
    function L(e) {
        throw e
    }
    function R(e, t, n, i) {
        var o;
        try {
            e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(i) {
        var n;
        i = "string" == typeof i ? (n = {},
        E.each(i.match(N) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, i);
        function o() {
            for (a = a || i.once,
            t = r = !0; l.length; c = -1)
                for (e = l.shift(); ++c < s.length; )
                    !1 === s[c].apply(e[0], e[1]) && i.stopOnFalse && (c = s.length,
                    e = !1);
            i.memory || (e = !1),
            r = !1,
            a && (s = e ? [] : "")
        }
        var r, e, t, a, s = [], l = [], c = -1, u = {
            add: function() {
                return s && (e && !r && (c = s.length - 1,
                l.push(e)),
                function n(e) {
                    E.each(e, function(e, t) {
                        b(t) ? i.unique && u.has(t) || s.push(t) : t && t.length && "string" !== k(t) && n(t)
                    })
                }(arguments),
                e && !r && o()),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    for (var n; -1 < (n = E.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s = s && [],
                this
            },
            disable: function() {
                return a = l = [],
                s = e = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = l = [],
                e || r || (s = e = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                r || o()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!t
            }
        };
        return u
    }
    ,
    E.extend({
        Deferred: function(e) {
            var r = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , a = {
                state: function() {
                    return o
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var o = arguments;
                    return E.Deferred(function(i) {
                        E.each(r, function(e, t) {
                            var n = b(o[t[4]]) && o[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        o = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function c(o, r, a, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(o < l)) {
                                    if ((e = a.apply(n, i)) === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    b(t) ? s ? t.call(e, c(l, r, F, s), c(l, r, L, s)) : (l++,
                                    t.call(e, c(l, r, F, s), c(l, r, L, s), c(l, r, F, r.notifyWith))) : (a !== F && (n = void 0,
                                    i = [e]),
                                    (s || r.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= o + 1 && (a !== L && (n = void 0,
                                    i = [e]),
                                    r.rejectWith(n, i))
                                }
                            }
                            ;
                            o ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()),
                            w.setTimeout(t))
                        }
                    }
                    return E.Deferred(function(e) {
                        r[0][3].add(c(0, e, b(i) ? i : F, e.notifyWith)),
                        r[1][3].add(c(0, e, b(t) ? t : F)),
                        r[2][3].add(c(0, e, b(n) ? n : L))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, a) : a
                }
            }
              , s = {};
            return E.each(r, function(e, t) {
                var n = t[2]
                  , i = t[5];
                a[t[1]] = n.add,
                i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this,
                    r[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || a.resolveWith(o, r)
                }
            }
            var n = arguments.length
              , i = n
              , o = Array(i)
              , r = s.call(arguments)
              , a = E.Deferred();
            if (n <= 1 && (R(e, a.done(t(i)).resolve, a.reject, !n),
            "pending" === a.state() || b(r[i] && r[i].then)))
                return a.then();
            for (; i--; )
                R(r[i], t(i), a.reject);
            return a.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        w.console && w.console.warn && e && $.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    E.readyException = function(e) {
        w.setTimeout(function() {
            throw e
        })
    }
    ;
    var H = E.Deferred();
    function B() {
        S.removeEventListener("DOMContentLoaded", B),
        w.removeEventListener("load", B),
        E.ready()
    }
    E.fn.ready = function(e) {
        return H.then(e).catch(function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || H.resolveWith(S, [E])
        }
    }),
    E.ready.then = H.then,
    "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? w.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", B),
    w.addEventListener("load", B));
    var q = function(e, t, n, i, o, r, a) {
        var s = 0
          , l = e.length
          , c = null == n;
        if ("object" === k(n))
            for (s in o = !0,
            n)
                q(e, t, s, n[s], !0, r, a);
        else if (void 0 !== i && (o = !0,
        b(i) || (a = !0),
        c && (t = a ? (t.call(e, i),
        null) : (c = t,
        function(e, t, n) {
            return c.call(E(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
      , z = /^-ms-/
      , W = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(W, U)
    }
    function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function K() {
        this.expando = E.expando + K.uid++
    }
    K.uid = 1,
    K.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = Object.create(null),
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[V(t)] = n;
            else
                for (i in t)
                    o[V(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in i ? [t] : t.match(N) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Q = new K
      , Y = new K
      , X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function J(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : X.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                Y.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return Y.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0], a = r && r.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    Y.set(this, n)
                }) : q(this, function(e) {
                    var t;
                    if (r && void 0 === e)
                        return void 0 !== (t = Y.get(r, n)) ? t : void 0 !== (t = J(r, n)) ? t : void 0;
                    this.each(function() {
                        Y.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = Y.get(r),
            1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                for (t = a.length; t--; )
                    a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = V(i.slice(5)),
                    J(r, i, o[i]));
                Q.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Q.get(e, t),
                n && (!i || Array.isArray(n) ? i = Q.access(e, t, E.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = E._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, function() {
                E.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(a, [a])
            }
            var i, o = 1, r = E.Deferred(), a = this, s = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (i = Q.get(a[s], e + "queueHooks")) && i.empty && (o++,
                i.empty.add(n));
            return n(),
            r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , ie = S.documentElement
      , oe = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , re = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
    }
    );
    function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display")
    }
    function se(e, t, n, i) {
        var o, r, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return E.css(e, t, "")
        }
        , l = s(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"), u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && te.exec(E.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; a--; )
                E.style(e, t, u + c),
                (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0),
                u /= r;
            u *= 2,
            E.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = o)),
        o
    }
    var le = {};
    function ce(e, t) {
        for (var n, i, o, r, a, s, l = [], c = 0, u = e.length; c < u; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (l[c] = Q.get(i, "display") || null,
            l[c] || (i.style.display = "")),
            "" === i.style.display && ae(i) && (l[c] = (s = r = o = void 0,
            r = i.ownerDocument,
            a = i.nodeName,
            (s = le[a]) || (o = r.body.appendChild(r.createElement(a)),
            s = E.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === s && (s = "block"),
            le[a] = s)))) : "none" !== n && (l[c] = "none",
            Q.set(i, "display", n)));
        for (c = 0; c < u; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ue, fe, de = /^(?:checkbox|radio)$/i, pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ue = S.createDocumentFragment().appendChild(S.createElement("div")),
    (fe = S.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ue.appendChild(fe),
    y.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ue.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue,
    ue.innerHTML = "<option></option>",
    y.option = !!ue.lastChild;
    var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && T(e, t) ? E.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
    me.th = me.td,
    y.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;
    function be(e, t, n, i, o) {
        for (var r, a, s, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === k(r))
                    E.merge(d, r.nodeType ? [r] : r);
                else if (ye.test(r)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (pe.exec(r) || ["", ""])[1].toLowerCase(),
                    l = me[s] || me._default,
                    a.innerHTML = l[1] + E.htmlPrefilter(r) + l[2],
                    u = l[0]; u--; )
                        a = a.lastChild;
                    E.merge(d, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(r));
        for (f.textContent = "",
        p = 0; r = d[p++]; )
            if (i && -1 < E.inArray(r, i))
                o && o.push(r);
            else if (c = oe(r),
            a = ge(f.appendChild(r), "script"),
            c && ve(a),
            n)
                for (u = 0; r = a[u++]; )
                    he.test(r.type || "") && n.push(r);
        return f
    }
    var xe = /^key/
      , ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , _e = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ee(e, t) {
        return e === function() {
            try {
                return S.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ce(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Ce(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = Se;
        else if (!o)
            return e;
        return 1 === r && (a = o,
        (o = function(e) {
            return E().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, o, i, n)
        })
    }
    function Te(e, o, r) {
        r ? (Q.set(e, o, !1),
        E.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = Q.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (i.length)
                        (E.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (i = s.call(arguments),
                    Q.set(this, o, i),
                    t = r(this, o),
                    this[o](),
                    i !== (n = Q.get(this, o)) || t ? Q.set(this, o, !1) : n = {},
                    i !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    i.length && (Q.set(this, o, {
                        value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, o) && E.event.add(e, o, we)
    }
    E.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, c, u, f, d, p, h, m, g = Q.get(t);
            if (G(t))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && E.find.matchesSelector(ie, o),
                n.guid || (n.guid = E.guid++),
                (l = g.events) || (l = g.events = Object.create(null)),
                (a = g.handle) || (a = g.handle = function(e) {
                    return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(N) || [""]).length; c--; )
                    p = m = (s = _e.exec(e[c]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (f = E.event.special[p] || {},
                    p = (o ? f.delegateType : f.bindType) || p,
                    f = E.event.special[p] || {},
                    u = E.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && E.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (d = l[p]) || ((d = l[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, i, h, a) || t.addEventListener && t.addEventListener(p, a)),
                    f.add && (f.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    E.event.global[p] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, c, u, f, d, p, h, m, g = Q.hasData(e) && Q.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(N) || [""]).length; c--; )
                    if (p = m = (s = _e.exec(t[c]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = E.event.special[p] || {},
                        d = l[p = (i ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = r = d.length; r--; )
                            u = d[r],
                            !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1),
                            u.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, u));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || E.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            E.event.remove(e, p + t[c], n, i, !0);
                E.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, a, s = new Array(arguments.length), l = E.event.fix(e), c = (Q.get(this, "events") || Object.create(null))[l.type] || [], u = E.event.special[l.type] || {};
            for (s[0] = l,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (l.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (a = E.event.handlers.call(this, l, c),
                t = 0; (o = a[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r,
                        l.data = r.data,
                        void 0 !== (i = ((E.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (l.result = i) && (l.preventDefault(),
                        l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l),
                l.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a, s = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < E(o, this).index(c) : E.find(o, this, null, [c]).length),
                            a[o] && r.push(i);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && T(t, "input") && Te(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && T(t, "input") && Te(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && T(t, "input") && Q.get(t, "click") || T(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Se,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Te(this, e, Ee),
                !1
            },
            trigger: function() {
                return Te(this, e),
                !0
            },
            delegateType: t
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        E.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, i) {
            return Ce(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Se),
                this.each(function() {
                    E.event.remove(this, e, n, t)
                });
            for (o in e)
                this.off(o, t, e[o]);
            return this
        }
    });
    var Ae = /<script|<style|<link/i
      , Pe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, i, o, r, a, s;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (s = Q.get(e).events))
                for (o in Q.remove(t, "handle events"),
                s)
                    for (n = 0,
                    i = s[o].length; n < i; n++)
                        E.event.add(t, o, s[o][n]);
            Y.hasData(e) && (r = Y.access(e),
            a = E.extend({}, r),
            Y.set(t, a))
        }
    }
    function Ne(n, i, o, r) {
        i = g(i);
        var e, t, a, s, l, c, u = 0, f = n.length, d = f - 1, p = i[0], h = b(p);
        if (h || 1 < f && "string" == typeof p && !y.checkClone && Pe.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = p.call(this, e, t.html())),
                Ne(t, i, o, r)
            });
        if (f && (t = (e = be(i, n[0].ownerDocument, !1, n, r)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || r)) {
            for (s = (a = E.map(ge(e, "script"), Ie)).length; u < f; u++)
                l = e,
                u !== d && (l = E.clone(l, !0, !0),
                s && E.merge(a, ge(l, "script"))),
                o.call(n[u], l, u);
            if (s)
                for (c = a[a.length - 1].ownerDocument,
                E.map(a, je),
                u = 0; u < s; u++)
                    l = a[u],
                    he.test(l.type || "") && !Q.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : x(l.textContent.replace(De, ""), l, c))
        }
        return n
    }
    function Fe(e, t, n) {
        for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || E.cleanData(ge(i)),
            i.parentNode && (n && oe(i) && ve(ge(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, a, s, l, c, u = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ge(u),
                i = 0,
                o = (r = ge(e)).length; i < o; i++)
                    s = r[i],
                    "input" === (c = (l = a[i]).nodeName.toLowerCase()) && de.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (r = r || ge(e),
                    a = a || ge(u),
                    i = 0,
                    o = r.length; i < o; i++)
                        Me(r[i], a[i]);
                else
                    Me(e, u);
            return 0 < (a = ge(u, "script")).length && ve(a, !f && ge(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return Fe(this, e, !0)
        },
        remove: function(e) {
            return Fe(this, e)
        },
        text: function(e) {
            return q(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ne(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ne(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ne(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ne(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(ge(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return q(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ne(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ge(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], i = E(e), o = i.length - 1, r = 0; r <= o; r++)
                t = r === o ? this : this.clone(!0),
                E(i[r])[a](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Le(e, t, n) {
        var i, o, r = {};
        for (o in t)
            r[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.call(e),
        t)
            e.style[o] = r[o];
        return i
    }
    var Re, $e, He, Be, qe, ze, We, Ue, Ve = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i"), Ge = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = w),
        t.getComputedStyle(e)
    }, Ke = new RegExp(ne.join("|"),"i");
    function Qe(e, t, n) {
        var i, o, r, a, s = e.style;
        return (n = n || Ge(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = E.style(e, t)),
        !y.pixelBoxStyles() && Ve.test(a) && Ke.test(t) && (i = s.width,
        o = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = o,
        s.maxWidth = r)),
        void 0 !== a ? a + "" : a
    }
    function Ye(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function Xe() {
        if (Ue) {
            We.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
            Ue.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
            ie.appendChild(We).appendChild(Ue);
            var e = w.getComputedStyle(Ue);
            Re = "1%" !== e.top,
            ze = 12 === Ze(e.marginLeft),
            Ue.style.right = "60%",
            Be = 36 === Ze(e.right),
            $e = 36 === Ze(e.width),
            Ue.style.position = "absolute",
            He = 12 === Ze(Ue.offsetWidth / 3),
            ie.removeChild(We),
            Ue = null
        }
    }
    function Ze(e) {
        return Math.round(parseFloat(e))
    }
    We = S.createElement("div"),
    (Ue = S.createElement("div")).style && (Ue.style.backgroundClip = "content-box",
    Ue.cloneNode(!0).style.backgroundClip = "",
    y.clearCloneStyle = "content-box" === Ue.style.backgroundClip,
    E.extend(y, {
        boxSizingReliable: function() {
            return Xe(),
            $e
        },
        pixelBoxStyles: function() {
            return Xe(),
            Be
        },
        pixelPosition: function() {
            return Xe(),
            Re
        },
        reliableMarginLeft: function() {
            return Xe(),
            ze
        },
        scrollboxSize: function() {
            return Xe(),
            He
        },
        reliableTrDimensions: function() {
            var e, t, n, i;
            return null == qe && (e = S.createElement("table"),
            t = S.createElement("tr"),
            n = S.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px",
            t.style.height = "1px",
            n.style.height = "9px",
            ie.appendChild(e).appendChild(t).appendChild(n),
            i = w.getComputedStyle(t),
            qe = 3 < parseInt(i.height),
            ie.removeChild(e)),
            qe
        }
    }));
    var Je = ["Webkit", "Moz", "ms"]
      , et = S.createElement("div").style
      , tt = {};
    function nt(e) {
        return E.cssProps[e] || tt[e] || (e in et ? e : tt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--; )
                if ((e = Je[n] + t)in et)
                    return e
        }(e) || e)
    }
    var it = /^(none|table(?!-c[ea]).+)/
      , ot = /^--/
      , rt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , at = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function st(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function lt(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += E.css(e, n + ne[a], !0, o)),
            i ? ("content" === n && (l -= E.css(e, "padding" + ne[a], !0, o)),
            "margin" !== n && (l -= E.css(e, "border" + ne[a] + "Width", !0, o))) : (l += E.css(e, "padding" + ne[a], !0, o),
            "padding" !== n ? l += E.css(e, "border" + ne[a] + "Width", !0, o) : s += E.css(e, "border" + ne[a] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0),
        l
    }
    function ct(e, t, n) {
        var i = Ge(e)
          , o = (!y.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i)
          , r = o
          , a = Qe(e, t, i)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ve.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && o || !y.reliableTrDimensions() && T(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, i),
        (r = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + lt(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
    }
    function ut(e, t, n, i, o) {
        return new ut.prototype.init(e,t,n,i,o)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = V(t), l = ot.test(t), c = e.style;
                if (l || (t = nt(s)),
                a = E.cssHooks[t] || E.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (E.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = V(t);
            return ot.test(t) || (t = nt(s)),
            (a = E.cssHooks[t] || E.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = Qe(e, t, i)),
            "normal" === o && t in at && (o = at[t]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    E.each(["height", "width"], function(e, l) {
        E.cssHooks[l] = {
            get: function(e, t, n) {
                if (t)
                    return !it.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, l, n) : Le(e, rt, function() {
                        return ct(e, l, n)
                    })
            },
            set: function(e, t, n) {
                var i, o = Ge(e), r = !y.scrollboxSize() && "absolute" === o.position, a = (r || n) && "border-box" === E.css(e, "boxSizing", !1, o), s = n ? lt(e, l, n, a, o) : 0;
                return a && r && (s -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(o[l]) - lt(e, l, "border", !1, o) - .5)),
                s && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t,
                t = E.css(e, l)),
                st(0, t, s)
            }
        }
    }),
    E.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - Le(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        E.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[o + ne[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== o && (E.cssHooks[o + r].set = st)
    }),
    E.fn.extend({
        css: function(e, t) {
            return q(this, function(e, t, n) {
                var i, o, r = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = Ge(e),
                    o = t.length; a < o; a++)
                        r[t[a]] = E.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((E.Tween = ut).prototype = {
        constructor: ut,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || E.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ut.propHooks[this.prop];
            return e && e.get ? e.get(this) : ut.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ut.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : ut.propHooks._default.set(this),
            this
        }
    }).init.prototype = ut.prototype,
    (ut.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ut.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    E.fx = ut.prototype.init,
    E.fx.step = {};
    var ft, dt, pt, ht, mt = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    function vt() {
        dt && (!1 === S.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(vt) : w.setTimeout(vt, E.fx.interval),
        E.fx.tick())
    }
    function yt() {
        return w.setTimeout(function() {
            ft = void 0
        }),
        ft = Date.now()
    }
    function bt(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function xt(e, t, n) {
        for (var i, o = (kt.tweeners[t] || []).concat(kt.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function kt(r, e, t) {
        var n, a, i = 0, o = kt.prefilters.length, s = E.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (a)
                return !1;
            for (var e = ft || yt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++)
                c.tweens[i].run(n);
            return s.notifyWith(r, [c, n, t]),
            n < 1 && o ? t : (o || s.notifyWith(r, [c, 1, 0]),
            s.resolveWith(r, [c]),
            !1)
        }, c = s.promise({
            elem: r,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ft || yt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = E.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? c.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    c.tweens[t].run(1);
                return e ? (s.notifyWith(r, [c, 1, 0]),
                s.resolveWith(r, [c, e])) : s.rejectWith(r, [c, e]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (o = t[i = V(n)],
                r = e[n],
                Array.isArray(r) && (o = r[1],
                r = e[n] = r[0]),
                n !== i && (e[i] = r,
                delete e[n]),
                (a = E.cssHooks[i]) && "expand"in a)
                    for (n in r = a.expand(r),
                    delete e[i],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = o);
                else
                    t[i] = o
        }(u, c.opts.specialEasing); i < o; i++)
            if (n = kt.prefilters[i].call(c, r, u, c.opts))
                return b(n.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n;
        return E.map(u, xt, c),
        b(c.opts.start) && c.opts.start.call(r, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        E.fx.timer(E.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    E.Animation = E.extend(kt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = b(e) ? (t = e,
            ["*"]) : e.match(N)).length; i < o; i++)
                n = e[i],
                kt.tweeners[n] = kt.tweeners[n] || [],
                kt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, a, s, l, c, u, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, m = e.nodeType && ae(e), g = Q.get(e, "fxshow");
            for (i in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            d.always(function() {
                d.always(function() {
                    a.unqueued--,
                    E.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (o = t[i],
                mt.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i])
                            continue;
                        m = !0
                    }
                    p[i] = g && g[i] || E.style(e, i)
                }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                for (i in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (c = g && g.display) && (c = Q.get(e, "display")),
                "none" === (u = E.css(e, "display")) && (c ? u = c : (ce([e], !0),
                c = e.style.display || c,
                u = E.css(e, "display"),
                ce([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (d.done(function() {
                    h.display = c
                }),
                null == c && (u = h.display,
                c = "none" === u ? "" : u)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                d.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Q.access(e, "fxshow", {
                        display: c
                    }),
                    r && (g.hidden = !m),
                    m && ce([e], !0),
                    d.done(function() {
                        for (i in m || ce([e]),
                        Q.remove(e, "fxshow"),
                        p)
                            E.style(e, i, p[i])
                    })),
                    l = xt(m ? g[i] : 0, i, d),
                    i in g || (g[i] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? kt.prefilters.unshift(e) : kt.prefilters.push(e)
        }
    }),
    E.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            b(i.old) && i.old.call(this),
            i.queue && E.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    E.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function o() {
                var e = kt(this, E.extend({}, t), a);
                (r || Q.get(this, "finish")) && e.stop(!0)
            }
            var r = E.isEmptyObject(t)
              , a = E.speed(e, n, i);
            return o.finish = o,
            r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(o, e, r) {
            function a(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            }
            return "string" != typeof o && (r = e,
            e = o,
            o = void 0),
            e && this.queue(o || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != o && o + "queueHooks"
                  , n = E.timers
                  , i = Q.get(this);
                if (t)
                    i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && gt.test(t) && a(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r),
                    e = !1,
                    n.splice(t, 1));
                !e && r || E.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], i = t[a + "queueHooks"], o = E.timers, r = n ? n.length : 0;
                for (t.finish = !0,
                E.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < r; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    E.each(["toggle", "show", "hide"], function(e, i) {
        var o = E.fn[i];
        E.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(bt(i, !0), e, t, n)
        }
    }),
    E.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        E.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    E.timers = [],
    E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        for (ft = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(),
        ft = void 0
    }
    ,
    E.fx.timer = function(e) {
        E.timers.push(e),
        E.fx.start()
    }
    ,
    E.fx.interval = 13,
    E.fx.start = function() {
        dt || (dt = !0,
        vt())
    }
    ,
    E.fx.stop = function() {
        dt = null
    }
    ,
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    E.fn.delay = function(i, e) {
        return i = E.fx && E.fx.speeds[i] || i,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = w.setTimeout(e, i);
            t.stop = function() {
                w.clearTimeout(n)
            }
        })
    }
    ,
    pt = S.createElement("input"),
    ht = S.createElement("select").appendChild(S.createElement("option")),
    pt.type = "checkbox",
    y.checkOn = "" !== pt.value,
    y.optSelected = ht.selected,
    (pt = S.createElement("input")).value = "t",
    pt.type = "radio",
    y.radioValue = "t" === pt.value;
    var _t, wt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return q(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === r && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? _t : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && T(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(N);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    _t = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = wt[t] || E.find.attr;
        wt[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = wt[r],
            wt[r] = i,
            i = null != a(e, t, n) ? r : null,
            wt[r] = o),
            i
        }
    });
    var St = /^(?:input|select|textarea|button)$/i
      , Et = /^(?:a|area)$/i;
    function Ct(e) {
        return (e.match(N) || []).join(" ")
    }
    function Tt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function At(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return q(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                o = E.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    y.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (b(t))
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, Tt(this)))
                });
            if ((e = At(t)).length)
                for (; n = this[l++]; )
                    if (o = Tt(n),
                    i = 1 === n.nodeType && " " + Ct(o) + " ") {
                        for (a = 0; r = e[a++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (s = Ct(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s, l = 0;
            if (b(t))
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, Tt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = At(t)).length)
                for (; n = this[l++]; )
                    if (o = Tt(n),
                    i = 1 === n.nodeType && " " + Ct(o) + " ") {
                        for (a = 0; r = e[a++]; )
                            for (; -1 < i.indexOf(" " + r + " "); )
                                i = i.replace(" " + r + " ", " ");
                        o !== (s = Ct(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o
              , a = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) {
                E(this).toggleClass(o.call(this, e, Tt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (a)
                    for (t = 0,
                    n = E(this),
                    i = At(o); e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== o && "boolean" != r || ((e = Tt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + Ct(Tt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var Pt = /\r/g;
    E.fn.extend({
        val: function(n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = b(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get"in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Pt, "") : null == e ? "" : e : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : Ct(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? r + 1 : o.length;
                    for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = E.makeArray(t), a = o.length; a--; )
                        ((i = o[a]).selected = -1 < E.inArray(E.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        y.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in w;
    function Dt(e) {
        e.stopPropagation()
    }
    var Ot = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, i) {
            var o, r, a, s, l, c, u, f, d = [n || S], p = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = f = a = n = n || S,
            3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(),
            h.sort()),
            l = p.indexOf(":") < 0 && "on" + p,
            (e = e[E.expando] ? e : new E.Event(p,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : E.makeArray(t, [e]),
            u = E.event.special[p] || {},
            i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !m(n)) {
                    for (s = u.delegateType || p,
                    Ot.test(s + p) || (r = r.parentNode); r; r = r.parentNode)
                        d.push(r),
                        a = r;
                    a === (n.ownerDocument || S) && d.push(a.defaultView || a.parentWindow || w)
                }
                for (o = 0; (r = d[o++]) && !e.isPropagationStopped(); )
                    f = r,
                    e.type = 1 < o ? s : u.bindType || p,
                    (c = (Q.get(r, "events") || Object.create(null))[e.type] && Q.get(r, "handle")) && c.apply(r, t),
                    (c = l && r[l]) && c.apply && G(r) && (e.result = c.apply(r, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !G(n) || l && b(n[p]) && !m(n) && ((a = n[l]) && (n[l] = null),
                E.event.triggered = p,
                e.isPropagationStopped() && f.addEventListener(p, Dt),
                n[p](),
                e.isPropagationStopped() && f.removeEventListener(p, Dt),
                E.event.triggered = void 0,
                a && (n[l] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var i = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(i, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            E.event.simulate(i, e.target, E.event.fix(e))
        }
        E.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Q.access(e, i);
                t || e.addEventListener(n, o, !0),
                Q.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Q.access(e, i) - 1;
                t ? Q.access(e, i, t) : (e.removeEventListener(n, o, !0),
                Q.remove(e, i))
            }
        }
    });
    var It = w.location
      , jt = {
        guid: Date.now()
    }
      , Mt = /\?/;
    E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new w.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt = /\[\]$/
      , Ft = /\r?\n/g
      , Lt = /^(?:submit|button|image|reset|file)$/i
      , Rt = /^(?:input|select|textarea|keygen)/i;
    function $t(n, e, i, o) {
        var t;
        if (Array.isArray(e))
            E.each(e, function(e, t) {
                i || Nt.test(n) ? o(n, t) : $t(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
            });
        else if (i || "object" !== k(e))
            o(n, e);
        else
            for (t in e)
                $t(n + "[" + t + "]", e[t], i, o)
    }
    E.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var i, o = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                $t(i, e[i], t, n);
        return o.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Rt.test(this.nodeName) && !Lt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ft, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ft, "\r\n")
                }
            }).get()
        }
    });
    var Ht = /%20/g
      , Bt = /#.*$/
      , qt = /([?&])_=[^&]*/
      , zt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Wt = /^(?:GET|HEAD)$/
      , Ut = /^\/\//
      , Vt = {}
      , Gt = {}
      , Kt = "*/".concat("*")
      , Qt = S.createElement("a");
    function Yt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, o = e.toLowerCase().match(N) || [];
            if (b(t))
                for (; n = o[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }
    function Xt(t, o, r, a) {
        var s = {}
          , l = t === Gt;
        function c(e) {
            var i;
            return s[e] = !0,
            E.each(t[e] || [], function(e, t) {
                var n = t(o, r, a);
                return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n),
                c(n),
                !1)
            }),
            i
        }
        return c(o.dataTypes[0]) || !s["*"] && c("*")
    }
    function Zt(e, t) {
        var n, i, o = E.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && E.extend(!0, e, i),
        e
    }
    Qt.href = It.href,
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: It.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(It.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zt(Zt(e, E.ajaxSettings), t) : Zt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Yt(Vt),
        ajaxTransport: Yt(Gt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var u, f, d, n, p, i, h, m, o, r, g = E.ajaxSetup({}, t), v = g.context || g, y = g.context && (v.nodeType || v.jquery) ? E(v) : E.event, b = E.Deferred(), x = E.Callbacks("once memory"), k = g.statusCode || {}, a = {}, s = {}, l = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n)
                            for (n = {}; t = zt.exec(d); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? d : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (g.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            _.always(e[_.status]);
                        else
                            for (t in e)
                                k[t] = [k[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return u && u.abort(t),
                    c(0, t),
                    this
                }
            };
            if (b.promise(_),
            g.url = ((e || g.url || It.href) + "").replace(Ut, It.protocol + "//"),
            g.type = t.method || t.type || g.method || g.type,
            g.dataTypes = (g.dataType || "*").toLowerCase().match(N) || [""],
            null == g.crossDomain) {
                i = S.createElement("a");
                try {
                    i.href = g.url,
                    i.href = i.href,
                    g.crossDomain = Qt.protocol + "//" + Qt.host != i.protocol + "//" + i.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)),
            Xt(Vt, g, t, _),
            h)
                return _;
            for (o in (m = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
            g.type = g.type.toUpperCase(),
            g.hasContent = !Wt.test(g.type),
            f = g.url.replace(Bt, ""),
            g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ht, "+")) : (r = g.url.slice(f.length),
            g.data && (g.processData || "string" == typeof g.data) && (f += (Mt.test(f) ? "&" : "?") + g.data,
            delete g.data),
            !1 === g.cache && (f = f.replace(qt, "$1"),
            r = (Mt.test(f) ? "&" : "?") + "_=" + jt.guid++ + r),
            g.url = f + r),
            g.ifModified && (E.lastModified[f] && _.setRequestHeader("If-Modified-Since", E.lastModified[f]),
            E.etag[f] && _.setRequestHeader("If-None-Match", E.etag[f])),
            (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && _.setRequestHeader("Content-Type", g.contentType),
            _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : g.accepts["*"]),
            g.headers)
                _.setRequestHeader(o, g.headers[o]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, _, g) || h))
                return _.abort();
            if (l = "abort",
            x.add(g.complete),
            _.done(g.success),
            _.fail(g.error),
            u = Xt(Gt, g, t, _)) {
                if (_.readyState = 1,
                m && y.trigger("ajaxSend", [_, g]),
                h)
                    return _;
                g.async && 0 < g.timeout && (p = w.setTimeout(function() {
                    _.abort("timeout")
                }, g.timeout));
                try {
                    h = !1,
                    u.send(a, c)
                } catch (e) {
                    if (h)
                        throw e;
                    c(-1, e)
                }
            } else
                c(-1, "No Transport");
            function c(e, t, n, i) {
                var o, r, a, s, l, c = t;
                h || (h = !0,
                p && w.clearTimeout(p),
                u = void 0,
                d = i || "",
                _.readyState = 0 < e ? 4 : 0,
                o = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a = a || o
                        }
                        r = r || a
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(g, _, n)),
                !o && -1 < E.inArray("script", g.dataTypes) && (g.converters["text script"] = function() {}
                ),
                s = function(e, t, n, i) {
                    var o, r, a, s, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters)
                            c[a.toLowerCase()] = e.converters[a];
                    for (r = u.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(a = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0],
                                            u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, s, _, o),
                o ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (E.lastModified[f] = l),
                (l = _.getResponseHeader("etag")) && (E.etag[f] = l)),
                204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state,
                r = s.data,
                o = !(a = s.error))) : (a = c,
                !e && c || (c = "error",
                e < 0 && (e = 0))),
                _.status = e,
                _.statusText = (t || c) + "",
                o ? b.resolveWith(v, [r, c, _]) : b.rejectWith(v, [_, c, a]),
                _.statusCode(k),
                k = void 0,
                m && y.trigger(o ? "ajaxSuccess" : "ajaxError", [_, g, o ? r : a]),
                x.fireWith(v, [_, c]),
                m && (y.trigger("ajaxComplete", [_, g]),
                --E.active || E.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }),
    E.each(["get", "post"], function(e, o) {
        E[o] = function(e, t, n, i) {
            return b(t) && (i = i || n,
            n = t,
            t = void 0),
            E.ajax(E.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }),
    E.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }
    ,
    E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])),
            t = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    E.ajaxSettings.xhr = function() {
        try {
            return new w.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Jt = {
        0: 200,
        1223: 204
    }
      , en = E.ajaxSettings.xhr();
    y.cors = !!en && "withCredentials"in en,
    y.ajax = en = !!en,
    E.ajaxTransport(function(o) {
        var r, a;
        if (y.cors || en && !o.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (n in o.xhrFields)
                            i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType),
                    o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    r = function(e) {
                        return function() {
                            r && (r = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Jt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = r(),
                    a = i.onerror = i.ontimeout = r("error"),
                    void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
                        4 === i.readyState && w.setTimeout(function() {
                            r && a()
                        })
                    }
                    ,
                    r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (r)
                            throw e
                    }
                },
                abort: function() {
                    r && r()
                }
            }
    }),
    E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e),
                e
            }
        }
    }),
    E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    E.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    i = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        i.remove(),
                        o = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    S.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
    });
    var tn, nn = [], on = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = nn.pop() || E.expando + "_" + jt.guid++;
            return this[e] = !0,
            e
        }
    }),
    E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(on, "$1" + i) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return r || E.error(i + " was not called"),
                r[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = w[i],
            w[i] = function() {
                r = arguments
            }
            ,
            n.always(function() {
                void 0 === o ? E(w).removeProp(i) : w[i] = o,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                nn.push(i)),
                r && b(o) && o(r[0]),
                r = o = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((tn = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === tn.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((i = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href,
        t.head.appendChild(i)) : t = S),
        r = !n && [],
        (o = A.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, r),
        r && r.length && E(r).remove(),
        E.merge([], o.childNodes)));
        var i, o, r
    }
    ,
    E.fn.load = function(e, t, n) {
        var i, o, r, a = this, s = e.indexOf(" ");
        return -1 < s && (i = Ct(e.slice(s)),
        e = e.slice(0, s)),
        b(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < a.length && E.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            a.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, c = E.css(e, "position"), u = E(e), f = {};
            "static" === c && (e.style.position = "relative"),
            s = u.offset(),
            r = E.css(e, "top"),
            l = E.css(e, "left"),
            o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (a = (i = u.position()).top,
            i.left) : (a = parseFloat(r) || 0,
            parseFloat(l) || 0),
            b(t) && (t = t.call(e, n, E.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            u.css(f))
        }
    },
    E.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    o.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - E.css(i, "marginTop", !0),
                    left: t.left - o.left - E.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        E.fn[t] = function(e) {
            return q(this, function(e, t, n) {
                var i;
                if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
                    return i ? i[o] : e[t];
                i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Ye(y.pixelPosition, function(e, t) {
            if (t)
                return t = Qe(e, n),
                Ve.test(t) ? E(e).position()[n] + "px" : t
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(i, r) {
            E.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , o = i || (!0 === e || !0 === t ? "margin" : "border");
                return q(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === r.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? E.css(e, t, o) : E.style(e, t, n, o)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        b(e))
            return i = s.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, i.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            o
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = T,
    E.isFunction = b,
    E.isWindow = m,
    E.camelCase = V,
    E.type = k,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    E.trim = function(e) {
        return null == e ? "" : (e + "").replace(rn, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var an = w.jQuery
      , sn = w.$;
    return E.noConflict = function(e) {
        return w.$ === E && (w.$ = sn),
        e && w.jQuery === E && (w.jQuery = an),
        E
    }
    ,
    void 0 === e && (w.jQuery = w.$ = E),
    E
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, h, f) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function r(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function a(o) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))),
            t.forEach(function(e) {
                var t, n, i;
                t = o,
                i = r[n = e],
                n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return o
    }
    h = h && h.hasOwnProperty("default") ? h.default : h,
    f = f && f.hasOwnProperty("default") ? f.default : f;
    var t = "transitionend";
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = h(e).css("transition-duration")
              , n = h(e).css("transition-delay")
              , i = parseFloat(t)
              , o = parseFloat(n);
            return i || o ? (t = t.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            h(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = t[i]
                      , a = r && m.isElement(r) ? "element" : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof e.getRootNode)
                return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    h.fn.emulateTransitionEnd = function(e) {
        var t = this
          , n = !1;
        return h(this).one(m.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || m.triggerTransitionEnd(t)
        }, e),
        this
    }
    ,
    h.event.special[m.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (h(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var n, o = "alert", s = "bs.alert", l = "." + s, c = h.fn[o], u = {
        CLOSE: "close" + l,
        CLOSED: "closed" + l,
        CLICK_DATA_API: "click" + l + ".data-api"
    }, d = ((n = p.prototype).close = function(e) {
        var t = this._element;
        e && (t = this._getRootElement(e)),
        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
    }
    ,
    n.dispose = function() {
        h.removeData(this._element, s),
        this._element = null
    }
    ,
    n._getRootElement = function(e) {
        var t = m.getSelectorFromElement(e)
          , n = !1;
        return t && (n = document.querySelector(t)),
        n = n || h(e).closest(".alert")[0]
    }
    ,
    n._triggerCloseEvent = function(e) {
        var t = h.Event(u.CLOSE);
        return h(e).trigger(t),
        t
    }
    ,
    n._removeElement = function(t) {
        var n = this;
        if (h(t).removeClass("show"),
        h(t).hasClass("fade")) {
            var e = m.getTransitionDurationFromElement(t);
            h(t).one(m.TRANSITION_END, function(e) {
                return n._destroyElement(t, e)
            }).emulateTransitionEnd(e)
        } else
            this._destroyElement(t)
    }
    ,
    n._destroyElement = function(e) {
        h(e).detach().trigger(u.CLOSED).remove()
    }
    ,
    p._jQueryInterface = function(n) {
        return this.each(function() {
            var e = h(this)
              , t = e.data(s);
            t || (t = new p(this),
            e.data(s, t)),
            "close" === n && t[n](this)
        })
    }
    ,
    p._handleDismiss = function(t) {
        return function(e) {
            e && e.preventDefault(),
            t.close(this)
        }
    }
    ,
    r(p, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }]),
    p);
    function p(e) {
        this._element = e
    }
    h(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)),
    h.fn[o] = d._jQueryInterface,
    h.fn[o].Constructor = d,
    h.fn[o].noConflict = function() {
        return h.fn[o] = c,
        d._jQueryInterface
    }
    ;
    var g, v = "button", y = "bs.button", b = "." + y, x = ".data-api", k = h.fn[v], _ = "active", w = '[data-toggle^="button"]', S = {
        CLICK_DATA_API: "click" + b + x,
        FOCUS_BLUR_DATA_API: "focus" + b + x + " blur" + b + x
    }, E = ((g = C.prototype).toggle = function() {
        var e = !0
          , t = !0
          , n = h(this._element).closest('[data-toggle="buttons"]')[0];
        if (n) {
            var i = this._element.querySelector('input:not([type="hidden"])');
            if (i) {
                if ("radio" === i.type)
                    if (i.checked && this._element.classList.contains(_))
                        e = !1;
                    else {
                        var o = n.querySelector(".active");
                        o && h(o).removeClass(_)
                    }
                if (e) {
                    if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                        return;
                    i.checked = !this._element.classList.contains(_),
                    h(i).trigger("change")
                }
                i.focus(),
                t = !1
            }
        }
        t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)),
        e && h(this._element).toggleClass(_)
    }
    ,
    g.dispose = function() {
        h.removeData(this._element, y),
        this._element = null
    }
    ,
    C._jQueryInterface = function(t) {
        return this.each(function() {
            var e = h(this).data(y);
            e || (e = new C(this),
            h(this).data(y, e)),
            "toggle" === t && e[t]()
        })
    }
    ,
    r(C, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }]),
    C);
    function C(e) {
        this._element = e
    }
    h(document).on(S.CLICK_DATA_API, w, function(e) {
        e.preventDefault();
        var t = e.target;
        h(t).hasClass("btn") || (t = h(t).closest(".btn")),
        E._jQueryInterface.call(h(t), "toggle")
    }).on(S.FOCUS_BLUR_DATA_API, w, function(e) {
        var t = h(e.target).closest(".btn")[0];
        h(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    h.fn[v] = E._jQueryInterface,
    h.fn[v].Constructor = E,
    h.fn[v].noConflict = function() {
        return h.fn[v] = k,
        E._jQueryInterface
    }
    ;
    var T, A = "carousel", P = "bs.carousel", D = "." + P, O = ".data-api", I = h.fn[A], j = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, M = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, N = "next", F = "prev", L = {
        SLIDE: "slide" + D,
        SLID: "slid" + D,
        KEYDOWN: "keydown" + D,
        MOUSEENTER: "mouseenter" + D,
        MOUSELEAVE: "mouseleave" + D,
        TOUCHSTART: "touchstart" + D,
        TOUCHMOVE: "touchmove" + D,
        TOUCHEND: "touchend" + D,
        POINTERDOWN: "pointerdown" + D,
        POINTERUP: "pointerup" + D,
        DRAG_START: "dragstart" + D,
        LOAD_DATA_API: "load" + D + O,
        CLICK_DATA_API: "click" + D + O
    }, R = "active", $ = ".active.carousel-item", H = {
        TOUCH: "touch",
        PEN: "pen"
    }, B = ((T = q.prototype).next = function() {
        this._isSliding || this._slide(N)
    }
    ,
    T.nextWhenVisible = function() {
        !document.hidden && h(this._element).is(":visible") && "hidden" !== h(this._element).css("visibility") && this.next()
    }
    ,
    T.prev = function() {
        this._isSliding || this._slide(F)
    }
    ,
    T.pause = function(e) {
        e || (this._isPaused = !0),
        this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (m.triggerTransitionEnd(this._element),
        this.cycle(!0)),
        clearInterval(this._interval),
        this._interval = null
    }
    ,
    T.cycle = function(e) {
        e || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval),
        this._interval = null),
        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }
    ,
    T.to = function(e) {
        var t = this;
        this._activeElement = this._element.querySelector($);
        var n = this._getItemIndex(this._activeElement);
        if (!(e > this._items.length - 1 || e < 0))
            if (this._isSliding)
                h(this._element).one(L.SLID, function() {
                    return t.to(e)
                });
            else {
                if (n === e)
                    return this.pause(),
                    void this.cycle();
                var i = n < e ? N : F;
                this._slide(i, this._items[e])
            }
    }
    ,
    T.dispose = function() {
        h(this._element).off(D),
        h.removeData(this._element, P),
        this._items = null,
        this._config = null,
        this._element = null,
        this._interval = null,
        this._isPaused = null,
        this._isSliding = null,
        this._activeElement = null,
        this._indicatorsElement = null
    }
    ,
    T._getConfig = function(e) {
        return e = a({}, j, e),
        m.typeCheckConfig(A, e, M),
        e
    }
    ,
    T._handleSwipe = function() {
        var e = Math.abs(this.touchDeltaX);
        if (!(e <= 40)) {
            var t = e / this.touchDeltaX;
            0 < t && this.prev(),
            t < 0 && this.next()
        }
    }
    ,
    T._addEventListeners = function() {
        var t = this;
        this._config.keyboard && h(this._element).on(L.KEYDOWN, function(e) {
            return t._keydown(e)
        }),
        "hover" === this._config.pause && h(this._element).on(L.MOUSEENTER, function(e) {
            return t.pause(e)
        }).on(L.MOUSELEAVE, function(e) {
            return t.cycle(e)
        }),
        this._config.touch && this._addTouchEventListeners()
    }
    ,
    T._addTouchEventListeners = function() {
        var n = this;
        if (this._touchSupported) {
            var t = function(e) {
                n._pointerEvent && H[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
            }
              , i = function(e) {
                n._pointerEvent && H[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX),
                n._handleSwipe(),
                "hover" === n._config.pause && (n.pause(),
                n.touchTimeout && clearTimeout(n.touchTimeout),
                n.touchTimeout = setTimeout(function(e) {
                    return n.cycle(e)
                }, 500 + n._config.interval))
            };
            h(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function(e) {
                return e.preventDefault()
            }),
            this._pointerEvent ? (h(this._element).on(L.POINTERDOWN, function(e) {
                return t(e)
            }),
            h(this._element).on(L.POINTERUP, function(e) {
                return i(e)
            }),
            this._element.classList.add("pointer-event")) : (h(this._element).on(L.TOUCHSTART, function(e) {
                return t(e)
            }),
            h(this._element).on(L.TOUCHMOVE, function(e) {
                var t;
                (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
            }),
            h(this._element).on(L.TOUCHEND, function(e) {
                return i(e)
            }))
        }
    }
    ,
    T._keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
            case 37:
                e.preventDefault(),
                this.prev();
                break;
            case 39:
                e.preventDefault(),
                this.next()
            }
    }
    ,
    T._getItemIndex = function(e) {
        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
        this._items.indexOf(e)
    }
    ,
    T._getItemByDirection = function(e, t) {
        var n = e === N
          , i = e === F
          , o = this._getItemIndex(t)
          , r = this._items.length - 1;
        if ((i && 0 === o || n && o === r) && !this._config.wrap)
            return t;
        var a = (o + (e === F ? -1 : 1)) % this._items.length;
        return -1 == a ? this._items[this._items.length - 1] : this._items[a]
    }
    ,
    T._triggerSlideEvent = function(e, t) {
        var n = this._getItemIndex(e)
          , i = this._getItemIndex(this._element.querySelector($))
          , o = h.Event(L.SLIDE, {
            relatedTarget: e,
            direction: t,
            from: i,
            to: n
        });
        return h(this._element).trigger(o),
        o
    }
    ,
    T._setActiveIndicatorElement = function(e) {
        if (this._indicatorsElement) {
            var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
            h(t).removeClass(R);
            var n = this._indicatorsElement.children[this._getItemIndex(e)];
            n && h(n).addClass(R)
        }
    }
    ,
    T._slide = function(e, t) {
        var n, i, o, r = this, a = this._element.querySelector($), s = this._getItemIndex(a), l = t || a && this._getItemByDirection(e, a), c = this._getItemIndex(l), u = Boolean(this._interval);
        if (o = e === N ? (n = "carousel-item-left",
        i = "carousel-item-next",
        "left") : (n = "carousel-item-right",
        i = "carousel-item-prev",
        "right"),
        l && h(l).hasClass(R))
            this._isSliding = !1;
        else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && a && l) {
            this._isSliding = !0,
            u && this.pause(),
            this._setActiveIndicatorElement(l);
            var f = h.Event(L.SLID, {
                relatedTarget: l,
                direction: o,
                from: s,
                to: c
            });
            if (h(this._element).hasClass("slide")) {
                h(l).addClass(i),
                m.reflow(l),
                h(a).addClass(n),
                h(l).addClass(n);
                var d = parseInt(l.getAttribute("data-interval"), 10);
                this._config.interval = d ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                d) : this._config.defaultInterval || this._config.interval;
                var p = m.getTransitionDurationFromElement(a);
                h(a).one(m.TRANSITION_END, function() {
                    h(l).removeClass(n + " " + i).addClass(R),
                    h(a).removeClass(R + " " + i + " " + n),
                    r._isSliding = !1,
                    setTimeout(function() {
                        return h(r._element).trigger(f)
                    }, 0)
                }).emulateTransitionEnd(p)
            } else
                h(a).removeClass(R),
                h(l).addClass(R),
                this._isSliding = !1,
                h(this._element).trigger(f);
            u && this.cycle()
        }
    }
    ,
    q._jQueryInterface = function(i) {
        return this.each(function() {
            var e = h(this).data(P)
              , t = a({}, j, h(this).data());
            "object" == typeof i && (t = a({}, t, i));
            var n = "string" == typeof i ? i : t.slide;
            if (e || (e = new q(this,t),
            h(this).data(P, e)),
            "number" == typeof i)
                e.to(i);
            else if ("string" == typeof n) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n]()
            } else
                t.interval && t.ride && (e.pause(),
                e.cycle())
        })
    }
    ,
    q._dataApiClickHandler = function(e) {
        var t = m.getSelectorFromElement(this);
        if (t) {
            var n = h(t)[0];
            if (n && h(n).hasClass("carousel")) {
                var i = a({}, h(n).data(), h(this).data())
                  , o = this.getAttribute("data-slide-to");
                o && (i.interval = !1),
                q._jQueryInterface.call(h(n), i),
                o && h(n).data(P).to(o),
                e.preventDefault()
            }
        }
    }
    ,
    r(q, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return j
        }
    }]),
    q);
    function q(e, t) {
        this._items = null,
        this._interval = null,
        this._activeElement = null,
        this._isPaused = !1,
        this._isSliding = !1,
        this.touchTimeout = null,
        this.touchStartX = 0,
        this.touchDeltaX = 0,
        this._config = this._getConfig(t),
        this._element = e,
        this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
        this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
        this._addEventListeners()
    }
    h(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", B._dataApiClickHandler),
    h(window).on(L.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = h(e[t]);
            B._jQueryInterface.call(i, i.data())
        }
    }),
    h.fn[A] = B._jQueryInterface,
    h.fn[A].Constructor = B,
    h.fn[A].noConflict = function() {
        return h.fn[A] = I,
        B._jQueryInterface
    }
    ;
    var z, W = "collapse", U = "bs.collapse", V = "." + U, G = h.fn[W], K = {
        toggle: !0,
        parent: ""
    }, Q = {
        toggle: "boolean",
        parent: "(string|element)"
    }, Y = {
        SHOW: "show" + V,
        SHOWN: "shown" + V,
        HIDE: "hide" + V,
        HIDDEN: "hidden" + V,
        CLICK_DATA_API: "click" + V + ".data-api"
    }, X = "show", Z = "collapse", J = "collapsing", ee = "collapsed", te = '[data-toggle="collapse"]', ne = ((z = ie.prototype).toggle = function() {
        h(this._element).hasClass(X) ? this.hide() : this.show()
    }
    ,
    z.show = function() {
        var e, t, n = this;
        if (!(this._isTransitioning || h(this._element).hasClass(X) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
            return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(Z)
        })).length && (e = null),
        e && (t = h(e).not(this._selector).data(U)) && t._isTransitioning))) {
            var i = h.Event(Y.SHOW);
            if (h(this._element).trigger(i),
            !i.isDefaultPrevented()) {
                e && (ie._jQueryInterface.call(h(e).not(this._selector), "hide"),
                t || h(e).data(U, null));
                var o = this._getDimension();
                h(this._element).removeClass(Z).addClass(J),
                this._element.style[o] = 0,
                this._triggerArray.length && h(this._triggerArray).removeClass(ee).attr("aria-expanded", !0),
                this.setTransitioning(!0);
                var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                  , a = m.getTransitionDurationFromElement(this._element);
                h(this._element).one(m.TRANSITION_END, function() {
                    h(n._element).removeClass(J).addClass(Z).addClass(X),
                    n._element.style[o] = "",
                    n.setTransitioning(!1),
                    h(n._element).trigger(Y.SHOWN)
                }).emulateTransitionEnd(a),
                this._element.style[o] = this._element[r] + "px"
            }
        }
    }
    ,
    z.hide = function() {
        var e = this;
        if (!this._isTransitioning && h(this._element).hasClass(X)) {
            var t = h.Event(Y.HIDE);
            if (h(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                var n = this._getDimension();
                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                m.reflow(this._element),
                h(this._element).addClass(J).removeClass(Z).removeClass(X);
                var i = this._triggerArray.length;
                if (0 < i)
                    for (var o = 0; o < i; o++) {
                        var r = this._triggerArray[o]
                          , a = m.getSelectorFromElement(r);
                        null !== a && (h([].slice.call(document.querySelectorAll(a))).hasClass(X) || h(r).addClass(ee).attr("aria-expanded", !1))
                    }
                this.setTransitioning(!0),
                this._element.style[n] = "";
                var s = m.getTransitionDurationFromElement(this._element);
                h(this._element).one(m.TRANSITION_END, function() {
                    e.setTransitioning(!1),
                    h(e._element).removeClass(J).addClass(Z).trigger(Y.HIDDEN)
                }).emulateTransitionEnd(s)
            }
        }
    }
    ,
    z.setTransitioning = function(e) {
        this._isTransitioning = e
    }
    ,
    z.dispose = function() {
        h.removeData(this._element, U),
        this._config = null,
        this._parent = null,
        this._element = null,
        this._triggerArray = null,
        this._isTransitioning = null
    }
    ,
    z._getConfig = function(e) {
        return (e = a({}, K, e)).toggle = Boolean(e.toggle),
        m.typeCheckConfig(W, e, Q),
        e
    }
    ,
    z._getDimension = function() {
        return h(this._element).hasClass("width") ? "width" : "height"
    }
    ,
    z._getParent = function() {
        var e, n = this;
        m.isElement(this._config.parent) ? (e = this._config.parent,
        void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
        var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
          , i = [].slice.call(e.querySelectorAll(t));
        return h(i).each(function(e, t) {
            n._addAriaAndCollapsedClass(ie._getTargetFromElement(t), [t])
        }),
        e
    }
    ,
    z._addAriaAndCollapsedClass = function(e, t) {
        var n = h(e).hasClass(X);
        t.length && h(t).toggleClass(ee, !n).attr("aria-expanded", n)
    }
    ,
    ie._getTargetFromElement = function(e) {
        var t = m.getSelectorFromElement(e);
        return t ? document.querySelector(t) : null
    }
    ,
    ie._jQueryInterface = function(i) {
        return this.each(function() {
            var e = h(this)
              , t = e.data(U)
              , n = a({}, K, e.data(), "object" == typeof i && i ? i : {});
            if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
            t || (t = new ie(this,n),
            e.data(U, t)),
            "string" == typeof i) {
                if (void 0 === t[i])
                    throw new TypeError('No method named "' + i + '"');
                t[i]()
            }
        })
    }
    ,
    r(ie, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return K
        }
    }]),
    ie);
    function ie(t, e) {
        this._isTransitioning = !1,
        this._element = t,
        this._config = this._getConfig(e),
        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll(te)), i = 0, o = n.length; i < o; i++) {
            var r = n[i]
              , a = m.getSelectorFromElement(r)
              , s = [].slice.call(document.querySelectorAll(a)).filter(function(e) {
                return e === t
            });
            null !== a && 0 < s.length && (this._selector = a,
            this._triggerArray.push(r))
        }
        this._parent = this._config.parent ? this._getParent() : null,
        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle()
    }
    h(document).on(Y.CLICK_DATA_API, te, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = h(this)
          , t = m.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(t));
        h(i).each(function() {
            var e = h(this)
              , t = e.data(U) ? "toggle" : n.data();
            ne._jQueryInterface.call(e, t)
        })
    }),
    h.fn[W] = ne._jQueryInterface,
    h.fn[W].Constructor = ne,
    h.fn[W].noConflict = function() {
        return h.fn[W] = G,
        ne._jQueryInterface
    }
    ;
    var oe, re = "dropdown", ae = "bs.dropdown", se = "." + ae, le = ".data-api", ce = h.fn[re], ue = new RegExp("38|40|27"), fe = {
        HIDE: "hide" + se,
        HIDDEN: "hidden" + se,
        SHOW: "show" + se,
        SHOWN: "shown" + se,
        CLICK: "click" + se,
        CLICK_DATA_API: "click" + se + le,
        KEYDOWN_DATA_API: "keydown" + se + le,
        KEYUP_DATA_API: "keyup" + se + le
    }, de = "disabled", pe = "show", he = "dropdown-menu-right", me = '[data-toggle="dropdown"]', ge = ".dropdown-menu", ve = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }, ye = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }, be = ((oe = xe.prototype).toggle = function() {
        if (!this._element.disabled && !h(this._element).hasClass(de)) {
            var e = xe._getParentFromElement(this._element)
              , t = h(this._menu).hasClass(pe);
            if (xe._clearMenus(),
            !t) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = h.Event(fe.SHOW, n);
                if (h(e).trigger(i),
                !i.isDefaultPrevented()) {
                    if (!this._inNavbar) {
                        if (void 0 === f)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var o = this._element;
                        "parent" === this._config.reference ? o = e : m.isElement(this._config.reference) && (o = this._config.reference,
                        void 0 !== this._config.reference.jquery && (o = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && h(e).addClass("position-static"),
                        this._popper = new f(o,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === h(e).closest(".navbar-nav").length && h(document.body).children().on("mouseover", null, h.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    h(this._menu).toggleClass(pe),
                    h(e).toggleClass(pe).trigger(h.Event(fe.SHOWN, n))
                }
            }
        }
    }
    ,
    oe.show = function() {
        if (!(this._element.disabled || h(this._element).hasClass(de) || h(this._menu).hasClass(pe))) {
            var e = {
                relatedTarget: this._element
            }
              , t = h.Event(fe.SHOW, e)
              , n = xe._getParentFromElement(this._element);
            h(n).trigger(t),
            t.isDefaultPrevented() || (h(this._menu).toggleClass(pe),
            h(n).toggleClass(pe).trigger(h.Event(fe.SHOWN, e)))
        }
    }
    ,
    oe.hide = function() {
        if (!this._element.disabled && !h(this._element).hasClass(de) && h(this._menu).hasClass(pe)) {
            var e = {
                relatedTarget: this._element
            }
              , t = h.Event(fe.HIDE, e)
              , n = xe._getParentFromElement(this._element);
            h(n).trigger(t),
            t.isDefaultPrevented() || (h(this._menu).toggleClass(pe),
            h(n).toggleClass(pe).trigger(h.Event(fe.HIDDEN, e)))
        }
    }
    ,
    oe.dispose = function() {
        h.removeData(this._element, ae),
        h(this._element).off(se),
        this._element = null,
        (this._menu = null) !== this._popper && (this._popper.destroy(),
        this._popper = null)
    }
    ,
    oe.update = function() {
        this._inNavbar = this._detectNavbar(),
        null !== this._popper && this._popper.scheduleUpdate()
    }
    ,
    oe._addEventListeners = function() {
        var t = this;
        h(this._element).on(fe.CLICK, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            t.toggle()
        })
    }
    ,
    oe._getConfig = function(e) {
        return e = a({}, this.constructor.Default, h(this._element).data(), e),
        m.typeCheckConfig(re, e, this.constructor.DefaultType),
        e
    }
    ,
    oe._getMenuElement = function() {
        if (!this._menu) {
            var e = xe._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(ge))
        }
        return this._menu
    }
    ,
    oe._getPlacement = function() {
        var e = h(this._element.parentNode)
          , t = "bottom-start";
        return e.hasClass("dropup") ? (t = "top-start",
        h(this._menu).hasClass(he) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : h(this._menu).hasClass(he) && (t = "bottom-end"),
        t
    }
    ,
    oe._detectNavbar = function() {
        return 0 < h(this._element).closest(".navbar").length
    }
    ,
    oe._getOffset = function() {
        var t = this
          , e = {};
        return "function" == typeof this._config.offset ? e.fn = function(e) {
            return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}),
            e
        }
        : e.offset = this._config.offset,
        e
    }
    ,
    oe._getPopperConfig = function() {
        var e = {
            placement: this._getPlacement(),
            modifiers: {
                offset: this._getOffset(),
                flip: {
                    enabled: this._config.flip
                },
                preventOverflow: {
                    boundariesElement: this._config.boundary
                }
            }
        };
        return "static" === this._config.display && (e.modifiers.applyStyle = {
            enabled: !1
        }),
        e
    }
    ,
    xe._jQueryInterface = function(t) {
        return this.each(function() {
            var e = h(this).data(ae);
            if (e || (e = new xe(this,"object" == typeof t ? t : null),
            h(this).data(ae, e)),
            "string" == typeof t) {
                if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                e[t]()
            }
        })
    }
    ,
    xe._clearMenus = function(e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
            for (var t = [].slice.call(document.querySelectorAll(me)), n = 0, i = t.length; n < i; n++) {
                var o = xe._getParentFromElement(t[n])
                  , r = h(t[n]).data(ae)
                  , a = {
                    relatedTarget: t[n]
                };
                if (e && "click" === e.type && (a.clickEvent = e),
                r) {
                    var s = r._menu;
                    if (h(o).hasClass(pe) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && h.contains(o, e.target))) {
                        var l = h.Event(fe.HIDE, a);
                        h(o).trigger(l),
                        l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && h(document.body).children().off("mouseover", null, h.noop),
                        t[n].setAttribute("aria-expanded", "false"),
                        h(s).removeClass(pe),
                        h(o).removeClass(pe).trigger(h.Event(fe.HIDDEN, a)))
                    }
                }
            }
    }
    ,
    xe._getParentFromElement = function(e) {
        var t, n = m.getSelectorFromElement(e);
        return n && (t = document.querySelector(n)),
        t || e.parentNode
    }
    ,
    xe._dataApiKeydownHandler = function(e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || h(e.target).closest(ge).length)) : ue.test(e.which)) && (e.preventDefault(),
        e.stopPropagation(),
        !this.disabled && !h(this).hasClass(de))) {
            var t = xe._getParentFromElement(this)
              , n = h(t).hasClass(pe);
            if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                var i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                if (0 !== i.length) {
                    var o = i.indexOf(e.target);
                    38 === e.which && 0 < o && o--,
                    40 === e.which && o < i.length - 1 && o++,
                    o < 0 && (o = 0),
                    i[o].focus()
                }
            } else {
                if (27 === e.which) {
                    var r = t.querySelector(me);
                    h(r).trigger("focus")
                }
                h(this).trigger("click")
            }
        }
    }
    ,
    r(xe, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return ve
        }
    }, {
        key: "DefaultType",
        get: function() {
            return ye
        }
    }]),
    xe);
    function xe(e, t) {
        this._element = e,
        this._popper = null,
        this._config = this._getConfig(t),
        this._menu = this._getMenuElement(),
        this._inNavbar = this._detectNavbar(),
        this._addEventListeners()
    }
    h(document).on(fe.KEYDOWN_DATA_API, me, be._dataApiKeydownHandler).on(fe.KEYDOWN_DATA_API, ge, be._dataApiKeydownHandler).on(fe.CLICK_DATA_API + " " + fe.KEYUP_DATA_API, be._clearMenus).on(fe.CLICK_DATA_API, me, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        be._jQueryInterface.call(h(this), "toggle")
    }).on(fe.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    h.fn[re] = be._jQueryInterface,
    h.fn[re].Constructor = be,
    h.fn[re].noConflict = function() {
        return h.fn[re] = ce,
        be._jQueryInterface
    }
    ;
    var ke, _e = "modal", we = "bs.modal", Se = "." + we, Ee = h.fn[_e], Ce = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, Te = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, Ae = {
        HIDE: "hide" + Se,
        HIDDEN: "hidden" + Se,
        SHOW: "show" + Se,
        SHOWN: "shown" + Se,
        FOCUSIN: "focusin" + Se,
        RESIZE: "resize" + Se,
        CLICK_DISMISS: "click.dismiss" + Se,
        KEYDOWN_DISMISS: "keydown.dismiss" + Se,
        MOUSEUP_DISMISS: "mouseup.dismiss" + Se,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + Se,
        CLICK_DATA_API: "click" + Se + ".data-api"
    }, Pe = "modal-open", De = "fade", Oe = "show", Ie = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", je = ".sticky-top", Me = ((ke = Ne.prototype).toggle = function(e) {
        return this._isShown ? this.hide() : this.show(e)
    }
    ,
    ke.show = function(e) {
        var t = this;
        if (!this._isShown && !this._isTransitioning) {
            h(this._element).hasClass(De) && (this._isTransitioning = !0);
            var n = h.Event(Ae.SHOW, {
                relatedTarget: e
            });
            h(this._element).trigger(n),
            this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            h(this._element).on(Ae.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                return t.hide(e)
            }),
            h(this._dialog).on(Ae.MOUSEDOWN_DISMISS, function() {
                h(t._element).one(Ae.MOUSEUP_DISMISS, function(e) {
                    h(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(function() {
                return t._showElement(e)
            }))
        }
    }
    ,
    ke.hide = function(e) {
        var t = this;
        if (e && e.preventDefault(),
        this._isShown && !this._isTransitioning) {
            var n = h.Event(Ae.HIDE);
            if (h(this._element).trigger(n),
            this._isShown && !n.isDefaultPrevented()) {
                this._isShown = !1;
                var i = h(this._element).hasClass(De);
                if (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                h(document).off(Ae.FOCUSIN),
                h(this._element).removeClass(Oe),
                h(this._element).off(Ae.CLICK_DISMISS),
                h(this._dialog).off(Ae.MOUSEDOWN_DISMISS),
                i) {
                    var o = m.getTransitionDurationFromElement(this._element);
                    h(this._element).one(m.TRANSITION_END, function(e) {
                        return t._hideModal(e)
                    }).emulateTransitionEnd(o)
                } else
                    this._hideModal()
            }
        }
    }
    ,
    ke.dispose = function() {
        [window, this._element, this._dialog].forEach(function(e) {
            return h(e).off(Se)
        }),
        h(document).off(Ae.FOCUSIN),
        h.removeData(this._element, we),
        this._config = null,
        this._element = null,
        this._dialog = null,
        this._backdrop = null,
        this._isShown = null,
        this._isBodyOverflowing = null,
        this._ignoreBackdropClick = null,
        this._isTransitioning = null,
        this._scrollbarWidth = null
    }
    ,
    ke.handleUpdate = function() {
        this._adjustDialog()
    }
    ,
    ke._getConfig = function(e) {
        return e = a({}, Ce, e),
        m.typeCheckConfig(_e, e, Te),
        e
    }
    ,
    ke._showElement = function(e) {
        var t = this
          , n = h(this._element).hasClass(De);
        function i() {
            t._config.focus && t._element.focus(),
            t._isTransitioning = !1,
            h(t._element).trigger(o)
        }
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
        this._element.style.display = "block",
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        h(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0,
        n && m.reflow(this._element),
        h(this._element).addClass(Oe),
        this._config.focus && this._enforceFocus();
        var o = h.Event(Ae.SHOWN, {
            relatedTarget: e
        });
        if (n) {
            var r = m.getTransitionDurationFromElement(this._dialog);
            h(this._dialog).one(m.TRANSITION_END, i).emulateTransitionEnd(r)
        } else
            i()
    }
    ,
    ke._enforceFocus = function() {
        var t = this;
        h(document).off(Ae.FOCUSIN).on(Ae.FOCUSIN, function(e) {
            document !== e.target && t._element !== e.target && 0 === h(t._element).has(e.target).length && t._element.focus()
        })
    }
    ,
    ke._setEscapeEvent = function() {
        var t = this;
        this._isShown && this._config.keyboard ? h(this._element).on(Ae.KEYDOWN_DISMISS, function(e) {
            27 === e.which && (e.preventDefault(),
            t.hide())
        }) : this._isShown || h(this._element).off(Ae.KEYDOWN_DISMISS)
    }
    ,
    ke._setResizeEvent = function() {
        var t = this;
        this._isShown ? h(window).on(Ae.RESIZE, function(e) {
            return t.handleUpdate(e)
        }) : h(window).off(Ae.RESIZE)
    }
    ,
    ke._hideModal = function() {
        var e = this;
        this._element.style.display = "none",
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._isTransitioning = !1,
        this._showBackdrop(function() {
            h(document.body).removeClass(Pe),
            e._resetAdjustments(),
            e._resetScrollbar(),
            h(e._element).trigger(Ae.HIDDEN)
        })
    }
    ,
    ke._removeBackdrop = function() {
        this._backdrop && (h(this._backdrop).remove(),
        this._backdrop = null)
    }
    ,
    ke._showBackdrop = function(e) {
        var t = this
          , n = h(this._element).hasClass(De) ? De : "";
        if (this._isShown && this._config.backdrop) {
            if (this._backdrop = document.createElement("div"),
            this._backdrop.className = "modal-backdrop",
            n && this._backdrop.classList.add(n),
            h(this._backdrop).appendTo(document.body),
            h(this._element).on(Ae.CLICK_DISMISS, function(e) {
                t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
            }),
            n && m.reflow(this._backdrop),
            h(this._backdrop).addClass(Oe),
            !e)
                return;
            if (!n)
                return void e();
            var i = m.getTransitionDurationFromElement(this._backdrop);
            h(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i)
        } else if (!this._isShown && this._backdrop) {
            h(this._backdrop).removeClass(Oe);
            var o = function() {
                t._removeBackdrop(),
                e && e()
            };
            if (h(this._element).hasClass(De)) {
                var r = m.getTransitionDurationFromElement(this._backdrop);
                h(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
            } else
                o()
        } else
            e && e()
    }
    ,
    ke._adjustDialog = function() {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
        this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
    }
    ,
    ke._resetAdjustments = function() {
        this._element.style.paddingLeft = "",
        this._element.style.paddingRight = ""
    }
    ,
    ke._checkScrollbar = function() {
        var e = document.body.getBoundingClientRect();
        this._isBodyOverflowing = e.left + e.right < window.innerWidth,
        this._scrollbarWidth = this._getScrollbarWidth()
    }
    ,
    ke._setScrollbar = function() {
        var o = this;
        if (this._isBodyOverflowing) {
            var e = [].slice.call(document.querySelectorAll(Ie))
              , t = [].slice.call(document.querySelectorAll(je));
            h(e).each(function(e, t) {
                var n = t.style.paddingRight
                  , i = h(t).css("padding-right");
                h(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
            }),
            h(t).each(function(e, t) {
                var n = t.style.marginRight
                  , i = h(t).css("margin-right");
                h(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
            });
            var n = document.body.style.paddingRight
              , i = h(document.body).css("padding-right");
            h(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
        }
        h(document.body).addClass(Pe)
    }
    ,
    ke._resetScrollbar = function() {
        var e = [].slice.call(document.querySelectorAll(Ie));
        h(e).each(function(e, t) {
            var n = h(t).data("padding-right");
            h(t).removeData("padding-right"),
            t.style.paddingRight = n || ""
        });
        var t = [].slice.call(document.querySelectorAll(je));
        h(t).each(function(e, t) {
            var n = h(t).data("margin-right");
            void 0 !== n && h(t).css("margin-right", n).removeData("margin-right")
        });
        var n = h(document.body).data("padding-right");
        h(document.body).removeData("padding-right"),
        document.body.style.paddingRight = n || ""
    }
    ,
    ke._getScrollbarWidth = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        document.body.appendChild(e);
        var t = e.getBoundingClientRect().width - e.clientWidth;
        return document.body.removeChild(e),
        t
    }
    ,
    Ne._jQueryInterface = function(n, i) {
        return this.each(function() {
            var e = h(this).data(we)
              , t = a({}, Ce, h(this).data(), "object" == typeof n && n ? n : {});
            if (e || (e = new Ne(this,t),
            h(this).data(we, e)),
            "string" == typeof n) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n](i)
            } else
                t.show && e.show(i)
        })
    }
    ,
    r(Ne, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return Ce
        }
    }]),
    Ne);
    function Ne(e, t) {
        this._config = this._getConfig(t),
        this._element = e,
        this._dialog = e.querySelector(".modal-dialog"),
        this._backdrop = null,
        this._isShown = !1,
        this._isBodyOverflowing = !1,
        this._ignoreBackdropClick = !1,
        this._isTransitioning = !1,
        this._scrollbarWidth = 0
    }
    h(document).on(Ae.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var t, n = this, i = m.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var o = h(t).data(we) ? "toggle" : a({}, h(t).data(), h(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var r = h(t).one(Ae.SHOW, function(e) {
            e.isDefaultPrevented() || r.one(Ae.HIDDEN, function() {
                h(n).is(":visible") && n.focus()
            })
        });
        Me._jQueryInterface.call(h(t), o, this)
    }),
    h.fn[_e] = Me._jQueryInterface,
    h.fn[_e].Constructor = Me,
    h.fn[_e].noConflict = function() {
        return h.fn[_e] = Ee,
        Me._jQueryInterface
    }
    ;
    var Fe = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Le = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , Re = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function $e(e, a, t) {
        if (0 === e.length)
            return e;
        if (t && "function" == typeof t)
            return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(a), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
            var n = l[e]
              , i = n.nodeName.toLowerCase();
            if (-1 === s.indexOf(n.nodeName.toLowerCase()))
                return n.parentNode.removeChild(n),
                "continue";
            var o = [].slice.call(n.attributes)
              , r = [].concat(a["*"] || [], a[i] || []);
            o.forEach(function(e) {
                !function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n))
                        return -1 === Fe.indexOf(n) || Boolean(e.nodeValue.match(Le) || e.nodeValue.match(Re));
                    for (var i = t.filter(function(e) {
                        return e instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return 1;
                    return 0
                }(e, r) && n.removeAttribute(e.nodeName)
            })
        }, o = 0, r = l.length; o < r; o++)
            i(o);
        return n.body.innerHTML
    }
    var He, Be = "tooltip", qe = "bs.tooltip", ze = "." + qe, We = h.fn[Be], Ue = "bs-tooltip", Ve = new RegExp("(^|\\s)" + Ue + "\\S+","g"), Ge = ["sanitize", "whiteList", "sanitizeFn"], Ke = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }, Qe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }, Ye = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
    }, Xe = "show", Ze = {
        HIDE: "hide" + ze,
        HIDDEN: "hidden" + ze,
        SHOW: "show" + ze,
        SHOWN: "shown" + ze,
        INSERTED: "inserted" + ze,
        CLICK: "click" + ze,
        FOCUSIN: "focusin" + ze,
        FOCUSOUT: "focusout" + ze,
        MOUSEENTER: "mouseenter" + ze,
        MOUSELEAVE: "mouseleave" + ze
    }, Je = "fade", et = "show", tt = "hover", nt = "focus", it = ((He = ot.prototype).enable = function() {
        this._isEnabled = !0
    }
    ,
    He.disable = function() {
        this._isEnabled = !1
    }
    ,
    He.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled
    }
    ,
    He.toggle = function(e) {
        if (this._isEnabled)
            if (e) {
                var t = this.constructor.DATA_KEY
                  , n = h(e.currentTarget).data(t);
                n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                h(e.currentTarget).data(t, n)),
                n._activeTrigger.click = !n._activeTrigger.click,
                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
            } else {
                if (h(this.getTipElement()).hasClass(et))
                    return void this._leave(null, this);
                this._enter(null, this)
            }
    }
    ,
    He.dispose = function() {
        clearTimeout(this._timeout),
        h.removeData(this.element, this.constructor.DATA_KEY),
        h(this.element).off(this.constructor.EVENT_KEY),
        h(this.element).closest(".modal").off("hide.bs.modal"),
        this.tip && h(this.tip).remove(),
        this._isEnabled = null,
        this._timeout = null,
        this._hoverState = null,
        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
        this._popper = null,
        this.element = null,
        this.config = null,
        this.tip = null
    }
    ,
    He.show = function() {
        var t = this;
        if ("none" === h(this.element).css("display"))
            throw new Error("Please use show on visible elements");
        var e = h.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
            h(this.element).trigger(e);
            var n = m.findShadowRoot(this.element)
              , i = h.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
            if (e.isDefaultPrevented() || !i)
                return;
            var o = this.getTipElement()
              , r = m.getUID(this.constructor.NAME);
            o.setAttribute("id", r),
            this.element.setAttribute("aria-describedby", r),
            this.setContent(),
            this.config.animation && h(o).addClass(Je);
            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
              , s = this._getAttachment(a);
            this.addAttachmentClass(s);
            var l = this._getContainer();
            h(o).data(this.constructor.DATA_KEY, this),
            h.contains(this.element.ownerDocument.documentElement, this.tip) || h(o).appendTo(l),
            h(this.element).trigger(this.constructor.Event.INSERTED),
            this._popper = new f(this.element,o,{
                placement: s,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                },
                onUpdate: function(e) {
                    return t._handlePopperPlacementChange(e)
                }
            }),
            h(o).addClass(et),
            "ontouchstart"in document.documentElement && h(document.body).children().on("mouseover", null, h.noop);
            var c = function() {
                t.config.animation && t._fixTransition();
                var e = t._hoverState;
                t._hoverState = null,
                h(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t)
            };
            if (h(this.tip).hasClass(Je)) {
                var u = m.getTransitionDurationFromElement(this.tip);
                h(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(u)
            } else
                c()
        }
    }
    ,
    He.hide = function(e) {
        function t() {
            n._hoverState !== Xe && i.parentNode && i.parentNode.removeChild(i),
            n._cleanTipClass(),
            n.element.removeAttribute("aria-describedby"),
            h(n.element).trigger(n.constructor.Event.HIDDEN),
            null !== n._popper && n._popper.destroy(),
            e && e()
        }
        var n = this
          , i = this.getTipElement()
          , o = h.Event(this.constructor.Event.HIDE);
        if (h(this.element).trigger(o),
        !o.isDefaultPrevented()) {
            if (h(i).removeClass(et),
            "ontouchstart"in document.documentElement && h(document.body).children().off("mouseover", null, h.noop),
            this._activeTrigger.click = !1,
            this._activeTrigger[nt] = !1,
            this._activeTrigger[tt] = !1,
            h(this.tip).hasClass(Je)) {
                var r = m.getTransitionDurationFromElement(i);
                h(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r)
            } else
                t();
            this._hoverState = ""
        }
    }
    ,
    He.update = function() {
        null !== this._popper && this._popper.scheduleUpdate()
    }
    ,
    He.isWithContent = function() {
        return Boolean(this.getTitle())
    }
    ,
    He.addAttachmentClass = function(e) {
        h(this.getTipElement()).addClass(Ue + "-" + e)
    }
    ,
    He.getTipElement = function() {
        return this.tip = this.tip || h(this.config.template)[0],
        this.tip
    }
    ,
    He.setContent = function() {
        var e = this.getTipElement();
        this.setElementContent(h(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
        h(e).removeClass(Je + " " + et)
    }
    ,
    He.setElementContent = function(e, t) {
        "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = $e(t, this.config.whiteList, this.config.sanitizeFn)),
        e.html(t)) : e.text(t) : this.config.html ? h(t).parent().is(e) || e.empty().append(t) : e.text(h(t).text())
    }
    ,
    He.getTitle = function() {
        var e = this.element.getAttribute("data-original-title");
        return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
    }
    ,
    He._getOffset = function() {
        var t = this
          , e = {};
        return "function" == typeof this.config.offset ? e.fn = function(e) {
            return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}),
            e
        }
        : e.offset = this.config.offset,
        e
    }
    ,
    He._getContainer = function() {
        return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? h(this.config.container) : h(document).find(this.config.container)
    }
    ,
    He._getAttachment = function(e) {
        return Qe[e.toUpperCase()]
    }
    ,
    He._setListeners = function() {
        var i = this;
        this.config.trigger.split(" ").forEach(function(e) {
            if ("click" === e)
                h(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                    return i.toggle(e)
                });
            else if ("manual" !== e) {
                var t = e === tt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                  , n = e === tt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                h(i.element).on(t, i.config.selector, function(e) {
                    return i._enter(e)
                }).on(n, i.config.selector, function(e) {
                    return i._leave(e)
                })
            }
        }),
        h(this.element).closest(".modal").on("hide.bs.modal", function() {
            i.element && i.hide()
        }),
        this.config.selector ? this.config = a({}, this.config, {
            trigger: "manual",
            selector: ""
        }) : this._fixTitle()
    }
    ,
    He._fixTitle = function() {
        var e = typeof this.element.getAttribute("data-original-title");
        !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
        this.element.setAttribute("title", ""))
    }
    ,
    He._enter = function(e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || h(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
        h(e.currentTarget).data(n, t)),
        e && (t._activeTrigger["focusin" === e.type ? nt : tt] = !0),
        h(t.getTipElement()).hasClass(et) || t._hoverState === Xe ? t._hoverState = Xe : (clearTimeout(t._timeout),
        t._hoverState = Xe,
        t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
            t._hoverState === Xe && t.show()
        }, t.config.delay.show) : t.show())
    }
    ,
    He._leave = function(e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || h(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
        h(e.currentTarget).data(n, t)),
        e && (t._activeTrigger["focusout" === e.type ? nt : tt] = !1),
        t._isWithActiveTrigger() || (clearTimeout(t._timeout),
        t._hoverState = "out",
        t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
            "out" === t._hoverState && t.hide()
        }, t.config.delay.hide) : t.hide())
    }
    ,
    He._isWithActiveTrigger = function() {
        for (var e in this._activeTrigger)
            if (this._activeTrigger[e])
                return !0;
        return !1
    }
    ,
    He._getConfig = function(e) {
        var t = h(this.element).data();
        return Object.keys(t).forEach(function(e) {
            -1 !== Ge.indexOf(e) && delete t[e]
        }),
        "number" == typeof (e = a({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        m.typeCheckConfig(Be, e, this.constructor.DefaultType),
        e.sanitize && (e.template = $e(e.template, e.whiteList, e.sanitizeFn)),
        e
    }
    ,
    He._getDelegateConfig = function() {
        var e = {};
        if (this.config)
            for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        return e
    }
    ,
    He._cleanTipClass = function() {
        var e = h(this.getTipElement())
          , t = e.attr("class").match(Ve);
        null !== t && t.length && e.removeClass(t.join(""))
    }
    ,
    He._handlePopperPlacementChange = function(e) {
        var t = e.instance;
        this.tip = t.popper,
        this._cleanTipClass(),
        this.addAttachmentClass(this._getAttachment(e.placement))
    }
    ,
    He._fixTransition = function() {
        var e = this.getTipElement()
          , t = this.config.animation;
        null === e.getAttribute("x-placement") && (h(e).removeClass(Je),
        this.config.animation = !1,
        this.hide(),
        this.show(),
        this.config.animation = t)
    }
    ,
    ot._jQueryInterface = function(n) {
        return this.each(function() {
            var e = h(this).data(qe)
              , t = "object" == typeof n && n;
            if ((e || !/dispose|hide/.test(n)) && (e || (e = new ot(this,t),
            h(this).data(qe, e)),
            "string" == typeof n)) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n]()
            }
        })
    }
    ,
    r(ot, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return Ye
        }
    }, {
        key: "NAME",
        get: function() {
            return Be
        }
    }, {
        key: "DATA_KEY",
        get: function() {
            return qe
        }
    }, {
        key: "Event",
        get: function() {
            return Ze
        }
    }, {
        key: "EVENT_KEY",
        get: function() {
            return ze
        }
    }, {
        key: "DefaultType",
        get: function() {
            return Ke
        }
    }]),
    ot);
    function ot(e, t) {
        if (void 0 === f)
            throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0,
        this._timeout = 0,
        this._hoverState = "",
        this._activeTrigger = {},
        this._popper = null,
        this.element = e,
        this.config = this._getConfig(t),
        this.tip = null,
        this._setListeners()
    }
    h.fn[Be] = it._jQueryInterface,
    h.fn[Be].Constructor = it,
    h.fn[Be].noConflict = function() {
        return h.fn[Be] = We,
        it._jQueryInterface
    }
    ;
    var rt = "popover"
      , at = "bs.popover"
      , st = "." + at
      , lt = h.fn[rt]
      , ct = "bs-popover"
      , ut = new RegExp("(^|\\s)" + ct + "\\S+","g")
      , ft = a({}, it.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , dt = a({}, it.DefaultType, {
        content: "(string|element|function)"
    })
      , pt = {
        HIDE: "hide" + st,
        HIDDEN: "hidden" + st,
        SHOW: "show" + st,
        SHOWN: "shown" + st,
        INSERTED: "inserted" + st,
        CLICK: "click" + st,
        FOCUSIN: "focusin" + st,
        FOCUSOUT: "focusout" + st,
        MOUSEENTER: "mouseenter" + st,
        MOUSELEAVE: "mouseleave" + st
    }
      , ht = function(e) {
        var t, n;
        function i() {
            return e.apply(this, arguments) || this
        }
        n = e,
        (t = i).prototype = Object.create(n.prototype),
        (t.prototype.constructor = t).__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.addAttachmentClass = function(e) {
            h(this.getTipElement()).addClass(ct + "-" + e)
        }
        ,
        o.getTipElement = function() {
            return this.tip = this.tip || h(this.config.template)[0],
            this.tip
        }
        ,
        o.setContent = function() {
            var e = h(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(".popover-body"), t),
            e.removeClass("fade show")
        }
        ,
        o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var e = h(this.getTipElement())
              , t = e.attr("class").match(ut);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = h(this).data(at)
                  , t = "object" == typeof n ? n : null;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                h(this).data(at, e)),
                "string" == typeof n)) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        r(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ft
            }
        }, {
            key: "NAME",
            get: function() {
                return rt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return at
            }
        }, {
            key: "Event",
            get: function() {
                return pt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return st
            }
        }, {
            key: "DefaultType",
            get: function() {
                return dt
            }
        }]),
        i
    }(it);
    h.fn[rt] = ht._jQueryInterface,
    h.fn[rt].Constructor = ht,
    h.fn[rt].noConflict = function() {
        return h.fn[rt] = lt,
        ht._jQueryInterface
    }
    ;
    var mt, gt = "scrollspy", vt = "bs.scrollspy", yt = "." + vt, bt = h.fn[gt], xt = {
        offset: 10,
        method: "auto",
        target: ""
    }, kt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, _t = {
        ACTIVATE: "activate" + yt,
        SCROLL: "scroll" + yt,
        LOAD_DATA_API: "load" + yt + ".data-api"
    }, wt = "active", St = ".nav, .list-group", Et = ".nav-link", Ct = ".list-group-item", Tt = "position", At = ((mt = Pt.prototype).refresh = function() {
        var t = this
          , e = this._scrollElement === this._scrollElement.window ? "offset" : Tt
          , o = "auto" === this._config.method ? e : this._config.method
          , r = o === Tt ? this._getScrollTop() : 0;
        this._offsets = [],
        this._targets = [],
        this._scrollHeight = this._getScrollHeight(),
        [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
            var t, n = m.getSelectorFromElement(e);
            if (n && (t = document.querySelector(n)),
            t) {
                var i = t.getBoundingClientRect();
                if (i.width || i.height)
                    return [h(t)[o]().top + r, n]
            }
            return null
        }).filter(function(e) {
            return e
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).forEach(function(e) {
            t._offsets.push(e[0]),
            t._targets.push(e[1])
        })
    }
    ,
    mt.dispose = function() {
        h.removeData(this._element, vt),
        h(this._scrollElement).off(yt),
        this._element = null,
        this._scrollElement = null,
        this._config = null,
        this._selector = null,
        this._offsets = null,
        this._targets = null,
        this._activeTarget = null,
        this._scrollHeight = null
    }
    ,
    mt._getConfig = function(e) {
        if ("string" != typeof (e = a({}, xt, "object" == typeof e && e ? e : {})).target) {
            var t = h(e.target).attr("id");
            t || (t = m.getUID(gt),
            h(e.target).attr("id", t)),
            e.target = "#" + t
        }
        return m.typeCheckConfig(gt, e, kt),
        e
    }
    ,
    mt._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }
    ,
    mt._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    mt._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }
    ,
    mt._process = function() {
        var e = this._getScrollTop() + this._config.offset
          , t = this._getScrollHeight()
          , n = this._config.offset + t - this._getOffsetHeight();
        if (this._scrollHeight !== t && this.refresh(),
        n <= e) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i)
        } else {
            if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                return this._activeTarget = null,
                void this._clear();
            for (var o = this._offsets.length; o--; )
                this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
        }
    }
    ,
    mt._activate = function(t) {
        this._activeTarget = t,
        this._clear();
        var e = this._selector.split(",").map(function(e) {
            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        })
          , n = h([].slice.call(document.querySelectorAll(e.join(","))));
        n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(wt),
        n.addClass(wt)) : (n.addClass(wt),
        n.parents(St).prev(Et + ", " + Ct).addClass(wt),
        n.parents(St).prev(".nav-item").children(Et).addClass(wt)),
        h(this._scrollElement).trigger(_t.ACTIVATE, {
            relatedTarget: t
        })
    }
    ,
    mt._clear = function() {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
            return e.classList.contains(wt)
        }).forEach(function(e) {
            return e.classList.remove(wt)
        })
    }
    ,
    Pt._jQueryInterface = function(t) {
        return this.each(function() {
            var e = h(this).data(vt);
            if (e || (e = new Pt(this,"object" == typeof t && t),
            h(this).data(vt, e)),
            "string" == typeof t) {
                if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                e[t]()
            }
        })
    }
    ,
    r(Pt, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return xt
        }
    }]),
    Pt);
    function Pt(e, t) {
        var n = this;
        this._element = e,
        this._scrollElement = "BODY" === e.tagName ? window : e,
        this._config = this._getConfig(t),
        this._selector = this._config.target + " " + Et + "," + this._config.target + " " + Ct + "," + this._config.target + " .dropdown-item",
        this._offsets = [],
        this._targets = [],
        this._activeTarget = null,
        this._scrollHeight = 0,
        h(this._scrollElement).on(_t.SCROLL, function(e) {
            return n._process(e)
        }),
        this.refresh(),
        this._process()
    }
    h(window).on(_t.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
            var n = h(e[t]);
            At._jQueryInterface.call(n, n.data())
        }
    }),
    h.fn[gt] = At._jQueryInterface,
    h.fn[gt].Constructor = At,
    h.fn[gt].noConflict = function() {
        return h.fn[gt] = bt,
        At._jQueryInterface
    }
    ;
    var Dt, Ot = "bs.tab", It = "." + Ot, jt = h.fn.tab, Mt = {
        HIDE: "hide" + It,
        HIDDEN: "hidden" + It,
        SHOW: "show" + It,
        SHOWN: "shown" + It,
        CLICK_DATA_API: "click" + It + ".data-api"
    }, Nt = "active", Ft = ".active", Lt = "> li > .active", Rt = ((Dt = $t.prototype).show = function() {
        var n = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && h(this._element).hasClass(Nt) || h(this._element).hasClass("disabled"))) {
            var e, i, t = h(this._element).closest(".nav, .list-group")[0], o = m.getSelectorFromElement(this._element);
            if (t) {
                var r = "UL" === t.nodeName || "OL" === t.nodeName ? Lt : Ft;
                i = (i = h.makeArray(h(t).find(r)))[i.length - 1]
            }
            var a = h.Event(Mt.HIDE, {
                relatedTarget: this._element
            })
              , s = h.Event(Mt.SHOW, {
                relatedTarget: i
            });
            if (i && h(i).trigger(a),
            h(this._element).trigger(s),
            !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                o && (e = document.querySelector(o)),
                this._activate(this._element, t);
                var l = function() {
                    var e = h.Event(Mt.HIDDEN, {
                        relatedTarget: n._element
                    })
                      , t = h.Event(Mt.SHOWN, {
                        relatedTarget: i
                    });
                    h(i).trigger(e),
                    h(n._element).trigger(t)
                };
                e ? this._activate(e, e.parentNode, l) : l()
            }
        }
    }
    ,
    Dt.dispose = function() {
        h.removeData(this._element, Ot),
        this._element = null
    }
    ,
    Dt._activate = function(e, t, n) {
        function i() {
            return o._transitionComplete(e, r, n)
        }
        var o = this
          , r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? h(t).children(Ft) : h(t).find(Lt))[0]
          , a = n && r && h(r).hasClass("fade");
        if (r && a) {
            var s = m.getTransitionDurationFromElement(r);
            h(r).removeClass("show").one(m.TRANSITION_END, i).emulateTransitionEnd(s)
        } else
            i()
    }
    ,
    Dt._transitionComplete = function(e, t, n) {
        if (t) {
            h(t).removeClass(Nt);
            var i = h(t.parentNode).find("> .dropdown-menu .active")[0];
            i && h(i).removeClass(Nt),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
        }
        if (h(e).addClass(Nt),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        m.reflow(e),
        e.classList.contains("fade") && e.classList.add("show"),
        e.parentNode && h(e.parentNode).hasClass("dropdown-menu")) {
            var o = h(e).closest(".dropdown")[0];
            if (o) {
                var r = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                h(r).addClass(Nt)
            }
            e.setAttribute("aria-expanded", !0)
        }
        n && n()
    }
    ,
    $t._jQueryInterface = function(n) {
        return this.each(function() {
            var e = h(this)
              , t = e.data(Ot);
            if (t || (t = new $t(this),
            e.data(Ot, t)),
            "string" == typeof n) {
                if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                t[n]()
            }
        })
    }
    ,
    r($t, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }]),
    $t);
    function $t(e) {
        this._element = e
    }
    h(document).on(Mt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        Rt._jQueryInterface.call(h(this), "show")
    }),
    h.fn.tab = Rt._jQueryInterface,
    h.fn.tab.Constructor = Rt,
    h.fn.tab.noConflict = function() {
        return h.fn.tab = jt,
        Rt._jQueryInterface
    }
    ;
    var Ht, Bt = "toast", qt = "bs.toast", zt = "." + qt, Wt = h.fn[Bt], Ut = {
        CLICK_DISMISS: "click.dismiss" + zt,
        HIDE: "hide" + zt,
        HIDDEN: "hidden" + zt,
        SHOW: "show" + zt,
        SHOWN: "shown" + zt
    }, Vt = "show", Gt = "showing", Kt = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Qt = {
        animation: !0,
        autohide: !0,
        delay: 500
    }, Yt = ((Ht = Xt.prototype).show = function() {
        var e = this;
        function t() {
            e._element.classList.remove(Gt),
            e._element.classList.add(Vt),
            h(e._element).trigger(Ut.SHOWN),
            e._config.autohide && e.hide()
        }
        if (h(this._element).trigger(Ut.SHOW),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        this._element.classList.add(Gt),
        this._config.animation) {
            var n = m.getTransitionDurationFromElement(this._element);
            h(this._element).one(m.TRANSITION_END, t).emulateTransitionEnd(n)
        } else
            t()
    }
    ,
    Ht.hide = function(e) {
        var t = this;
        this._element.classList.contains(Vt) && (h(this._element).trigger(Ut.HIDE),
        e ? this._close() : this._timeout = setTimeout(function() {
            t._close()
        }, this._config.delay))
    }
    ,
    Ht.dispose = function() {
        clearTimeout(this._timeout),
        this._timeout = null,
        this._element.classList.contains(Vt) && this._element.classList.remove(Vt),
        h(this._element).off(Ut.CLICK_DISMISS),
        h.removeData(this._element, qt),
        this._element = null,
        this._config = null
    }
    ,
    Ht._getConfig = function(e) {
        return e = a({}, Qt, h(this._element).data(), "object" == typeof e && e ? e : {}),
        m.typeCheckConfig(Bt, e, this.constructor.DefaultType),
        e
    }
    ,
    Ht._setListeners = function() {
        var e = this;
        h(this._element).on(Ut.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
            return e.hide(!0)
        })
    }
    ,
    Ht._close = function() {
        function e() {
            t._element.classList.add("hide"),
            h(t._element).trigger(Ut.HIDDEN)
        }
        var t = this;
        if (this._element.classList.remove(Vt),
        this._config.animation) {
            var n = m.getTransitionDurationFromElement(this._element);
            h(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
        } else
            e()
    }
    ,
    Xt._jQueryInterface = function(n) {
        return this.each(function() {
            var e = h(this)
              , t = e.data(qt);
            if (t || (t = new Xt(this,"object" == typeof n && n),
            e.data(qt, t)),
            "string" == typeof n) {
                if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                t[n](this)
            }
        })
    }
    ,
    r(Xt, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "DefaultType",
        get: function() {
            return Kt
        }
    }, {
        key: "Default",
        get: function() {
            return Qt
        }
    }]),
    Xt);
    function Xt(e, t) {
        this._element = e,
        this._config = this._getConfig(t),
        this._timeout = null,
        this._setListeners()
    }
    h.fn[Bt] = Yt._jQueryInterface,
    h.fn[Bt].Constructor = Yt,
    h.fn[Bt].noConflict = function() {
        return h.fn[Bt] = Wt,
        Yt._jQueryInterface
    }
    ,
    function() {
        if (void 0 === h)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = h.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    e.Util = m,
    e.Alert = d,
    e.Button = E,
    e.Carousel = B,
    e.Collapse = ne,
    e.Dropdown = be,
    e.Modal = Me,
    e.Popover = ht,
    e.Scrollspy = At,
    e.Tab = Rt,
    e.Toast = Yt,
    e.Tooltip = it,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(l, f, m) {
    "use strict";
    function n(e, t) {
        var n, i, o, r = [], a = 0;
        e && e.isDefaultPrevented() || (e.preventDefault(),
        t = t || {},
        e && e.data && (t = u(e.data.options, t)),
        n = t.$target || m(e.currentTarget).trigger("blur"),
        (o = m.fancybox.getInstance()) && o.$trigger && o.$trigger.is(n) || (r = t.selector ? m(t.selector) : (i = n.attr("data-fancybox") || "") ? (r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + i + '"]') : m('[data-fancybox="' + i + '"]') : [n],
        (a = m(r).index(n)) < 0 && (a = 0),
        (o = m.fancybox.open(r, t, a)).$trigger = n))
    }
    if (l.console = l.console || {
        info: function(e) {}
    },
    m) {
        if (m.fn.fancybox)
            return console.info("fancyBox already initialized");
        var e = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {
                preload: !1
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 3e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: m.noop,
            beforeLoad: m.noop,
            afterLoad: m.noop,
            beforeShow: m.noop,
            afterShow: m.noop,
            beforeClose: m.noop,
            afterClose: m.noop,
            onActivate: m.noop,
            onDeactivate: m.noop,
            clickContent: function(e, t) {
                return "image" === e.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                preventCaptionOverlap: !1,
                idleTime: !1,
                clickContent: function(e, t) {
                    return "image" === e.type && "toggleControls"
                },
                clickSlide: function(e, t) {
                    return "image" === e.type ? "toggleControls" : "close"
                },
                dblclickContent: function(e, t) {
                    return "image" === e.type && "zoom"
                },
                dblclickSlide: function(e, t) {
                    return "image" === e.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schlie&szlig;en",
                    NEXT: "Weiter",
                    PREV: "Zur&uuml;ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Vergr&ouml;&szlig;ern"
                }
            }
        }
          , o = m(l)
          , a = m(f)
          , r = 0
          , d = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function(e) {
            return l.setTimeout(e, 1e3 / 60)
        }
          , t = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function(e) {
            l.clearTimeout(e)
        }
          , c = function() {
            var e, t = f.createElement("fakeelement"), n = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (e in n)
                if (void 0 !== t.style[e])
                    return n[e];
            return "transitionend"
        }()
          , p = function(e) {
            return e && e.length && e[0].offsetHeight
        }
          , u = function(e, t) {
            var n = m.extend(!0, {}, e, t);
            return m.each(t, function(e, t) {
                m.isArray(t) && (n[e] = t)
            }),
            n
        }
          , i = function(e, t, n) {
            var i = this;
            i.opts = u({
                index: n
            }, m.fancybox.defaults),
            m.isPlainObject(t) && (i.opts = u(i.opts, t)),
            m.fancybox.isMobile && (i.opts = u(i.opts, i.opts.mobile)),
            i.id = i.opts.id || ++r,
            i.currIndex = parseInt(i.opts.index, 10) || 0,
            i.prevIndex = null,
            i.prevPos = null,
            i.currPos = 0,
            i.firstRun = !0,
            i.group = [],
            i.slides = {},
            i.addContent(e),
            i.group.length && i.init()
        };
        m.extend(i.prototype, {
            init: function() {
                var t, n, i = this, o = i.group[i.currIndex].opts;
                o.closeExisting && m.fancybox.close(!0),
                m("body").addClass("fancybox-active"),
                !m.fancybox.getInstance() && !1 !== o.hideScrollbar && !m.fancybox.isMobile && f.body.scrollHeight > l.innerHeight && (m("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - f.documentElement.clientWidth) + "px;}</style>"),
                m("body").addClass("compensate-for-scrollbar")),
                n = "",
                m.each(o.buttons, function(e, t) {
                    n += o.btnTpl[t] || ""
                }),
                t = m(i.translate(i, o.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", o.btnTpl.arrowLeft + o.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass(o.baseClass).data("FancyBox", i).appendTo(o.parentEl),
                i.$refs = {
                    container: t
                },
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(e) {
                    i.$refs[e] = t.find(".fancybox-" + e)
                }),
                i.trigger("onInit"),
                i.activate(),
                i.jumpTo(i.currIndex)
            },
            translate: function(e, t) {
                var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                    return void 0 === n[t] ? e : n[t]
                })
            },
            addContent: function(e) {
                var t, c = this, n = m.makeArray(e);
                m.each(n, function(e, t) {
                    var n, i, o, r, a, s = {}, l = {};
                    m.isPlainObject(t) ? l = (s = t).opts || t : "object" === m.type(t) && m(t).length ? (l = (n = m(t)).data() || {},
                    (l = m.extend(!0, {}, l, l.options)).$orig = n,
                    s.src = c.opts.src || l.src || n.attr("href"),
                    s.type || s.src || (s.type = "inline",
                    s.src = t)) : s = {
                        type: "html",
                        src: t + ""
                    },
                    s.opts = m.extend(!0, {}, c.opts, l),
                    m.isArray(l.buttons) && (s.opts.buttons = l.buttons),
                    m.fancybox.isMobile && s.opts.mobile && (s.opts = u(s.opts, s.opts.mobile)),
                    i = s.type || s.opts.type,
                    r = s.src || "",
                    !i && r && ((o = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "video",
                    s.opts.video.format || (s.opts.video.format = "video/" + ("ogv" === o[1] ? "ogg" : o[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (i = "iframe",
                    s = m.extend(!0, s, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" === r.charAt(0) && (i = "inline")),
                    i ? s.type = i : c.trigger("objectNeedsType", s),
                    s.contentType || (s.contentType = -1 < m.inArray(s.type, ["html", "inline", "ajax"]) ? "html" : s.type),
                    s.index = c.group.length,
                    "auto" == s.opts.smallBtn && (s.opts.smallBtn = -1 < m.inArray(s.type, ["html", "inline", "ajax"])),
                    "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn),
                    s.$thumb = s.opts.$thumb || null,
                    s.opts.$trigger && s.index === c.opts.index && (s.$thumb = s.opts.$trigger.find("img:first"),
                    s.$thumb.length && (s.opts.$orig = s.opts.$trigger)),
                    s.$thumb && s.$thumb.length || !s.opts.$orig || (s.$thumb = s.opts.$orig.find("img:first")),
                    s.$thumb && !s.$thumb.length && (s.$thumb = null),
                    s.thumb = s.opts.thumb || (s.$thumb ? s.$thumb[0].src : null),
                    "function" === m.type(s.opts.caption) && (s.opts.caption = s.opts.caption.apply(t, [c, s])),
                    "function" === m.type(c.opts.caption) && (s.opts.caption = c.opts.caption.apply(t, [c, s])),
                    s.opts.caption instanceof m || (s.opts.caption = void 0 === s.opts.caption ? "" : s.opts.caption + ""),
                    "ajax" !== s.type || 1 < (a = r.split(/\s+/, 2)).length && (s.src = a.shift(),
                    s.opts.filter = a.shift()),
                    s.opts.modal && (s.opts = m.extend(!0, s.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })),
                    c.group.push(s)
                }),
                Object.keys(c.slides).length && (c.updateControls(),
                (t = c.Thumbs) && t.isActive && (t.create(),
                t.focus()))
            },
            addEvents: function() {
                var i = this;
                i.removeEvents(),
                i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    i.close(e)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    i.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    i.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(e) {
                    i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }),
                o.on("orientationchange.fb resize.fb", function(e) {
                    e && e.originalEvent && "resize" === e.originalEvent.type ? (i.requestId && t(i.requestId),
                    i.requestId = d(function() {
                        i.update(e)
                    })) : (i.current && "iframe" === i.current.type && i.$refs.stage.hide(),
                    setTimeout(function() {
                        i.$refs.stage.show(),
                        i.update(e)
                    }, m.fancybox.isMobile ? 600 : 250))
                }),
                a.on("keydown.fb", function(e) {
                    var t = (m.fancybox ? m.fancybox.getInstance() : null).current
                      , n = e.keyCode || e.which;
                    if (9 != n)
                        return !t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || m(e.target).is("input,textarea,video,audio,select") ? void 0 : 8 === n || 27 === n ? (e.preventDefault(),
                        void i.close(e)) : 37 === n || 38 === n ? (e.preventDefault(),
                        void i.previous()) : 39 === n || 40 === n ? (e.preventDefault(),
                        void i.next()) : void i.trigger("afterKeydown", e, n);
                    t.opts.trapFocus && i.focus(e)
                }),
                i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0,
                a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
                    i.idleSecondsCounter = 0,
                    i.isIdle && i.showControls(),
                    i.isIdle = !1
                }),
                i.idleInterval = l.setInterval(function() {
                    ++i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0,
                    i.idleSecondsCounter = 0,
                    i.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                o.off("orientationchange.fb resize.fb"),
                a.off("keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                this.idleInterval && (l.clearInterval(this.idleInterval),
                this.idleInterval = null)
            },
            previous: function(e) {
                return this.jumpTo(this.currPos - 1, e)
            },
            next: function(e) {
                return this.jumpTo(this.currPos + 1, e)
            },
            jumpTo: function(e, i) {
                var t, n, o, r, a, s, l, c, u, f = this, d = f.group.length;
                if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                    if (e = parseInt(e, 10),
                    !(o = f.current ? f.current.opts.loop : f.opts.loop) && (e < 0 || d <= e))
                        return !1;
                    if (t = f.firstRun = !Object.keys(f.slides).length,
                    a = f.current,
                    f.prevIndex = f.currIndex,
                    f.prevPos = f.currPos,
                    r = f.createSlide(e),
                    1 < d && ((o || r.index < d - 1) && f.createSlide(e + 1),
                    (o || 0 < r.index) && f.createSlide(e - 1)),
                    f.current = r,
                    f.currIndex = r.index,
                    f.currPos = r.pos,
                    f.trigger("beforeShow", t),
                    f.updateControls(),
                    r.forcedDuration = void 0,
                    m.isNumeric(i) ? r.forcedDuration = i : i = r.opts[t ? "animationDuration" : "transitionDuration"],
                    i = parseInt(i, 10),
                    n = f.isMoved(r),
                    r.$slide.addClass("fancybox-slide--current"),
                    t)
                        return r.opts.animationEffect && i && f.$refs.container.css("transition-duration", i + "ms"),
                        f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                        f.loadSlide(r),
                        void f.preload("image");
                    s = m.fancybox.getTranslate(a.$slide),
                    l = m.fancybox.getTranslate(f.$refs.stage),
                    m.each(f.slides, function(e, t) {
                        m.fancybox.stop(t.$slide, !0)
                    }),
                    a.pos !== r.pos && (a.isComplete = !1),
                    a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                    n ? (u = s.left - (a.pos * s.width + a.pos * a.opts.gutter),
                    m.each(f.slides, function(e, t) {
                        t.$slide.removeClass("fancybox-animated").removeClass(function(e, t) {
                            return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var n = t.pos * s.width + t.pos * t.opts.gutter;
                        m.fancybox.setTranslate(t.$slide, {
                            top: 0,
                            left: n - l.left + u
                        }),
                        t.pos !== r.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > r.pos ? "next" : "previous")),
                        p(t.$slide),
                        m.fancybox.animate(t.$slide, {
                            top: 0,
                            left: (t.pos - r.pos) * s.width + (t.pos - r.pos) * t.opts.gutter
                        }, i, function() {
                            t.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                            t.pos === f.currPos && f.complete()
                        })
                    })) : i && r.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect,
                    a.$slide.addClass("fancybox-slide--" + (a.pos > r.pos ? "next" : "previous")),
                    m.fancybox.animate(a.$slide, c, i, function() {
                        a.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)),
                    r.isLoaded ? f.revealContent(r) : f.loadSlide(r),
                    f.preload("image")
                }
            },
            createSlide: function(e) {
                var t, n, i = this;
                return n = (n = e % i.group.length) < 0 ? i.group.length + n : n,
                !i.slides[e] && i.group[n] && (t = m('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),
                i.slides[e] = m.extend(!0, {}, i.group[n], {
                    pos: e,
                    $slide: t,
                    isLoaded: !1
                }),
                i.updateSlide(i.slides[e])),
                i.slides[e]
            },
            scaleToActual: function(e, t, n) {
                var i, o, r, a, s, l = this, c = l.current, u = c.$content, f = m.fancybox.getTranslate(c.$slide).width, d = m.fancybox.getTranslate(c.$slide).height, p = c.width, h = c.height;
                l.isAnimating || l.isMoved() || !u || "image" != c.type || !c.isLoaded || c.hasError || (l.isAnimating = !0,
                m.fancybox.stop(u),
                e = void 0 === e ? .5 * f : e,
                t = void 0 === t ? .5 * d : t,
                (i = m.fancybox.getTranslate(u)).top -= m.fancybox.getTranslate(c.$slide).top,
                i.left -= m.fancybox.getTranslate(c.$slide).left,
                a = p / i.width,
                s = h / i.height,
                o = .5 * f - .5 * p,
                r = .5 * d - .5 * h,
                f < p && (0 < (o = i.left * a - (e * a - e)) && (o = 0),
                o < f - p && (o = f - p)),
                d < h && (0 < (r = i.top * s - (t * s - t)) && (r = 0),
                r < d - h && (r = d - h)),
                l.updateCursor(p, h),
                m.fancybox.animate(u, {
                    top: r,
                    left: o,
                    scaleX: a,
                    scaleY: s
                }, n || 366, function() {
                    l.isAnimating = !1
                }),
                l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
            },
            scaleToFit: function(e) {
                var t, n = this, i = n.current, o = i.$content;
                n.isAnimating || n.isMoved() || !o || "image" != i.type || !i.isLoaded || i.hasError || (n.isAnimating = !0,
                m.fancybox.stop(o),
                t = n.getFitPos(i),
                n.updateCursor(t.width, t.height),
                m.fancybox.animate(o, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / o.width(),
                    scaleY: t.height / o.height()
                }, e || 366, function() {
                    n.isAnimating = !1
                }))
            },
            getFitPos: function(e) {
                var t, n, i, o, r = e.$content, a = e.$slide, s = e.width || e.opts.width, l = e.height || e.opts.height, c = {};
                return !!(e.isLoaded && r && r.length) && (t = m.fancybox.getTranslate(this.$refs.stage).width,
                n = m.fancybox.getTranslate(this.$refs.stage).height,
                t -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")),
                n -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")),
                s && l || (s = t,
                l = n),
                t - .5 < (s *= i = Math.min(1, t / s, n / l)) && (s = t),
                n - .5 < (l *= i) && (l = n),
                "image" === e.type ? (c.top = Math.floor(.5 * (n - l)) + parseFloat(a.css("paddingTop")),
                c.left = Math.floor(.5 * (t - s)) + parseFloat(a.css("paddingLeft"))) : "video" === e.contentType && (s / (o = e.opts.width && e.opts.height ? s / l : e.opts.ratio || 16 / 9) < l ? l = s / o : l * o < s && (s = l * o)),
                c.width = s,
                c.height = l,
                c)
            },
            update: function(n) {
                var i = this;
                m.each(i.slides, function(e, t) {
                    i.updateSlide(t, n)
                })
            },
            updateSlide: function(e, t) {
                var n = this
                  , i = e && e.$content
                  , o = e.width || e.opts.width
                  , r = e.height || e.opts.height
                  , a = e.$slide;
                n.adjustCaption(e),
                i && (o || r || "video" === e.contentType) && !e.hasError && (m.fancybox.stop(i),
                m.fancybox.setTranslate(i, n.getFitPos(e)),
                e.pos === n.currPos && (n.isAnimating = !1,
                n.updateCursor())),
                n.adjustLayout(e),
                a.length && (a.trigger("refresh"),
                e.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)),
                n.trigger("onUpdate", e, t)
            },
            centerSlide: function(e) {
                var t = this
                  , n = t.current
                  , i = n.$slide;
                !t.isClosing && n && (i.siblings().css({
                    transform: "",
                    opacity: ""
                }),
                i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                m.fancybox.animate(i, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === e ? 0 : e, function() {
                    i.css({
                        transform: "",
                        opacity: ""
                    }),
                    n.isComplete || t.complete()
                }, !1))
            },
            isMoved: function(e) {
                var t, n, i = e || this.current;
                return !!i && (n = m.fancybox.getTranslate(this.$refs.stage),
                t = m.fancybox.getTranslate(i.$slide),
                !i.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(t.top - n.top) || .5 < Math.abs(t.left - n.left)))
            },
            updateCursor: function(e, t) {
                var n, i, o = this, r = o.current, a = o.$refs.container;
                r && !o.isClosing && o.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                i = !!(n = o.canPan(e, t)) || o.isZoomable(),
                a.toggleClass("fancybox-is-zoomable", i),
                m("[data-fancybox-zoom]").prop("disabled", !i),
                n ? a.addClass("fancybox-can-pan") : i && ("zoom" === r.opts.clickContent || m.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? a.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || 1 < o.group.length) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var e, t = this.current;
                if (t && !this.isClosing && "image" === t.type && !t.hasError) {
                    if (!t.isLoaded)
                        return !0;
                    if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height))
                        return !0
                }
                return !1
            },
            isScaledDown: function(e, t) {
                var n = !1
                  , i = this.current
                  , o = i.$content;
                return void 0 !== e && void 0 !== t ? n = e < i.width && t < i.height : o && (n = (n = m.fancybox.getTranslate(o)).width < i.width && n.height < i.height),
                n
            },
            canPan: function(e, t) {
                var n = this.current
                  , i = null
                  , o = !1;
                return "image" === n.type && (n.isComplete || e && t) && !n.hasError && (o = this.getFitPos(n),
                void 0 !== e && void 0 !== t ? i = {
                    width: e,
                    height: t
                } : n.isComplete && (i = m.fancybox.getTranslate(n.$content)),
                i && o && (o = 1.5 < Math.abs(i.width - o.width) || 1.5 < Math.abs(i.height - o.height))),
                o
            },
            loadSlide: function(n) {
                var e, t, i, o = this;
                if (!n.isLoading && !n.isLoaded) {
                    if (!(n.isLoading = !0) === o.trigger("beforeLoad", n))
                        return n.isLoading = !1;
                    switch (e = n.type,
                    (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass),
                    e) {
                    case "image":
                        o.setImage(n);
                        break;
                    case "iframe":
                        o.setIframe(n);
                        break;
                    case "html":
                        o.setContent(n, n.src || n.content);
                        break;
                    case "video":
                        o.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                        break;
                    case "inline":
                        m(n.src).length ? o.setContent(n, m(n.src)) : o.setError(n);
                        break;
                    case "ajax":
                        o.showLoading(n),
                        i = m.ajax(m.extend({}, n.opts.ajax.settings, {
                            url: n.src,
                            success: function(e, t) {
                                "success" === t && o.setContent(n, e)
                            },
                            error: function(e, t) {
                                e && "abort" !== t && o.setError(n)
                            }
                        })),
                        t.one("onReset", function() {
                            i.abort()
                        });
                        break;
                    default:
                        o.setError(n)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var e, n = this;
                setTimeout(function() {
                    var e = t.$image;
                    n.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || n.showLoading(t)
                }, 50),
                n.checkSrcset(t),
                t.$content = m('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),
                !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width,
                t.height = t.opts.height,
                (e = f.createElement("img")).onerror = function() {
                    m(this).remove(),
                    t.$ghost = null
                }
                ,
                e.onload = function() {
                    n.afterLoad(t)
                }
                ,
                t.$ghost = m(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)),
                n.setBigImage(t)
            },
            checkSrcset: function(e) {
                var t, n, i, o, r = e.opts.srcset || e.opts.image.srcset;
                if (r) {
                    i = l.devicePixelRatio || 1,
                    o = l.innerWidth * i,
                    (n = r.split(",").map(function(e) {
                        var i = {};
                        return e.trim().split(/\s+/).forEach(function(e, t) {
                            var n = parseInt(e.substring(0, e.length - 1), 10);
                            if (0 === t)
                                return i.url = e;
                            n && (i.value = n,
                            i.postfix = e[e.length - 1])
                        }),
                        i
                    })).sort(function(e, t) {
                        return e.value - t.value
                    });
                    for (var a = 0; a < n.length; a++) {
                        var s = n[a];
                        if ("w" === s.postfix && s.value >= o || "x" === s.postfix && s.value >= i) {
                            t = s;
                            break
                        }
                    }
                    !t && n.length && (t = n[n.length - 1]),
                    t && (e.src = t.url,
                    e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value,
                    e.width = t.value),
                    e.opts.srcset = r)
                }
            },
            setBigImage: function(t) {
                var n = this
                  , e = f.createElement("img")
                  , i = m(e);
                t.$image = i.one("error", function() {
                    n.setError(t)
                }).one("load", function() {
                    var e;
                    t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight),
                    n.afterLoad(t)),
                    n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < o.width() / o.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"),
                    i.attr("sizes", e).attr("srcset", t.opts.srcset)),
                    t.$ghost && setTimeout(function() {
                        t.$ghost && !n.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                    n.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                (e.complete || "complete" == e.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : e.error && i.trigger("error")
            },
            resolveImageSlideSize: function(e, t, n) {
                var i = parseInt(e.opts.width, 10)
                  , o = parseInt(e.opts.height, 10);
                e.width = t,
                e.height = n,
                0 < i && (e.width = i,
                e.height = Math.floor(i * n / t)),
                0 < o && (e.width = Math.floor(o * t / n),
                e.height = o)
            },
            setIframe: function(o) {
                var r, t = this, a = o.opts.iframe, s = o.$slide;
                o.$content = m('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s),
                s.addClass("fancybox-slide--" + o.contentType),
                o.$iframe = r = m(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(o.$content),
                a.preload ? (t.showLoading(o),
                r.on("load.fb error.fb", function(e) {
                    this.isReady = 1,
                    o.$slide.trigger("refresh"),
                    t.afterLoad(o)
                }),
                s.on("refresh.fb", function() {
                    var e, t = o.$content, n = a.css.width, i = a.css.height;
                    if (1 === r[0].isReady) {
                        try {
                            e = r.contents().find("body")
                        } catch (e) {}
                        e && e.length && e.children().length && (s.css("overflow", "visible"),
                        t.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }),
                        void 0 === n && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))),
                        t.css("width", n || "").css("max-width", ""),
                        void 0 === i && (i = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))),
                        t.css("height", i || ""),
                        s.css("overflow", "auto")),
                        t.removeClass("fancybox-is-hidden")
                    }
                })) : t.afterLoad(o),
                r.attr("src", o.src),
                s.one("onReset", function() {
                    try {
                        m(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (e) {}
                    m(this).off("refresh.fb").empty(),
                    o.isLoaded = !1,
                    o.isRevealed = !1
                })
            },
            setContent: function(e, t) {
                var n;
                this.isClosing || (this.hideLoading(e),
                e.$content && m.fancybox.stop(e.$content),
                e.$slide.empty(),
                (n = t) && n.hasOwnProperty && n instanceof m && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"),
                e.$placeholder = m("<div>").hide().insertAfter(t),
                t.css("display", "inline-block")) : e.hasError || ("string" === m.type(t) && (t = m("<div>").append(m.trim(t)).contents()),
                e.opts.filter && (t = m("<div>").html(t).find(e.opts.filter))),
                e.$slide.one("onReset", function() {
                    m(this).find("video,audio").trigger("pause"),
                    e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(),
                    e.$placeholder = null),
                    e.$smallBtn && (e.$smallBtn.remove(),
                    e.$smallBtn = null),
                    e.hasError || (m(this).empty(),
                    e.isLoaded = !1,
                    e.isRevealed = !1)
                }),
                m(t).appendTo(e.$slide),
                m(t).is("video,audio") && (m(t).addClass("fancybox-video"),
                m(t).wrap("<div></div>"),
                e.contentType = "video",
                e.opts.width = e.opts.width || m(t).attr("width"),
                e.opts.height = e.opts.height || m(t).attr("height")),
                e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                e.$content.siblings().hide(),
                e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()),
                e.$content.addClass("fancybox-content"),
                e.$slide.addClass("fancybox-slide--" + e.contentType),
                this.afterLoad(e))
            },
            setError: function(e) {
                e.hasError = !0,
                e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"),
                e.contentType = "html",
                this.setContent(e, this.translate(e, e.opts.errorTpl)),
                e.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(e) {
                (e = e || this.current) && !e.$spinner && (e.$spinner = m(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(e) {
                (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(),
                delete e.$spinner)
            },
            afterLoad: function(e) {
                var t = this;
                t.isClosing || (e.isLoading = !1,
                e.isLoaded = !0,
                t.trigger("afterLoad", e),
                t.hideLoading(e),
                !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = m(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)),
                e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                    return 2 == e.button && e.preventDefault(),
                    !0
                }),
                "image" === e.type && m('<div class="fancybox-spaceball"></div>').appendTo(e.$content)),
                t.adjustCaption(e),
                t.adjustLayout(e),
                e.pos === t.currPos && t.updateCursor(),
                t.revealContent(e))
            },
            adjustCaption: function(e) {
                var t, n = this, i = e || n.current, o = i.opts.caption, r = i.opts.preventCaptionOverlap, a = n.$refs.caption, s = !1;
                a.toggleClass("fancybox-caption--separate", r),
                r && o && o.length && (i.pos !== n.currPos ? ((t = a.clone().appendTo(a.parent())).children().eq(0).empty().html(o),
                s = t.outerHeight(!0),
                t.empty().remove()) : n.$caption && (s = n.$caption.outerHeight(!0)),
                i.$slide.css("padding-bottom", s || ""))
            },
            adjustLayout: function(e) {
                var t, n, i, o, r = e || this.current;
                r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""),
                r.$content.outerHeight() > r.$slide.height() + .5 && (i = r.$slide[0].style["padding-bottom"],
                o = r.$slide.css("padding-bottom"),
                0 < parseFloat(o) && (t = r.$slide[0].scrollHeight,
                r.$slide.css("padding-bottom", 0),
                Math.abs(t - r.$slide[0].scrollHeight) < 1 && (n = o),
                r.$slide.css("padding-bottom", i))),
                r.$content.css("margin-bottom", n))
            },
            revealContent: function(e) {
                var t, n, i, o, r = this, a = e.$slide, s = !1, l = !1, c = r.isMoved(e), u = e.isRevealed;
                return e.isRevealed = !0,
                t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"],
                i = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"],
                i = parseInt(void 0 === e.forcedDuration ? i : e.forcedDuration, 10),
                !c && e.pos === r.currPos && i || (t = !1),
                "zoom" === t && (e.pos === r.currPos && i && "image" === e.type && !e.hasError && (l = r.getThumbPos(e)) ? s = r.getFitPos(e) : t = "fade"),
                "zoom" === t ? (r.isAnimating = !0,
                s.scaleX = s.width / l.width,
                s.scaleY = s.height / l.height,
                "auto" == (o = e.opts.zoomOpacity) && (o = .1 < Math.abs(e.width / e.height - l.width / l.height)),
                o && (l.opacity = .1,
                s.opacity = 1),
                m.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l),
                p(e.$content),
                void m.fancybox.animate(e.$content, s, i, function() {
                    r.isAnimating = !1,
                    r.complete()
                })) : (r.updateSlide(e),
                t ? (m.fancybox.stop(a),
                n = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t,
                a.addClass(n).removeClass("fancybox-slide--current"),
                e.$content.removeClass("fancybox-is-hidden"),
                p(a),
                "image" !== e.type && e.$content.hide().show(0),
                void m.fancybox.animate(a, "fancybox-slide--current", i, function() {
                    a.removeClass(n).css({
                        transform: "",
                        opacity: ""
                    }),
                    e.pos === r.currPos && r.complete()
                }, !0)) : (e.$content.removeClass("fancybox-is-hidden"),
                u || !c || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"),
                void (e.pos === r.currPos && r.complete())))
            },
            getThumbPos: function(e) {
                var t, n, i, o, r, a, s, l, c = !1, u = e.$thumb;
                return !(!u || (!(a = u[0]) || a.ownerDocument !== f || (m(".fancybox-container").css("pointer-events", "none"),
                s = {
                    x: a.getBoundingClientRect().left + a.offsetWidth / 2,
                    y: a.getBoundingClientRect().top + a.offsetHeight / 2
                },
                l = f.elementFromPoint(s.x, s.y) === a,
                m(".fancybox-container").css("pointer-events", ""),
                !l))) && (t = m.fancybox.getTranslate(u),
                n = parseFloat(u.css("border-top-width") || 0),
                i = parseFloat(u.css("border-right-width") || 0),
                o = parseFloat(u.css("border-bottom-width") || 0),
                r = parseFloat(u.css("border-left-width") || 0),
                c = {
                    top: t.top + n,
                    left: t.left + r,
                    width: t.width - i - r,
                    height: t.height - n - o,
                    scaleX: 1,
                    scaleY: 1
                },
                0 < t.width && 0 < t.height && c)
            },
            complete: function() {
                var e, n = this, t = n.current, i = {};
                !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0,
                t.$slide.siblings().trigger("onReset"),
                n.preload("inline"),
                p(t.$slide),
                t.$slide.addClass("fancybox-slide--complete"),
                m.each(n.slides, function(e, t) {
                    t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? i[t.pos] = t : t && (m.fancybox.stop(t.$slide),
                    t.$slide.off().remove())
                }),
                n.slides = i),
                n.isAnimating = !1,
                n.updateCursor(),
                n.trigger("afterShow"),
                t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    n.next()
                }),
                t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)),
                t.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(e) {
                var t, n, i = this;
                i.group.length < 2 || (n = i.slides[i.currPos + 1],
                (t = i.slides[i.currPos - 1]) && t.type === e && i.loadSlide(t),
                n && n.type === e && i.loadSlide(n))
            },
            focus: function(e, t) {
                var n, i, o = this, r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                o.isClosing || ((n = (n = !e && o.current && o.current.isComplete ? o.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : o.$refs.container.find("*:visible")).filter(r).filter(function() {
                    return "hidden" !== m(this).css("visibility") && !m(this).hasClass("disabled")
                })).length ? (i = n.index(f.activeElement),
                e && e.shiftKey ? (i < 0 || 0 == i) && (e.preventDefault(),
                n.eq(n.length - 1).trigger("focus")) : (i < 0 || i == n.length - 1) && (e && e.preventDefault(),
                n.eq(0).trigger("focus"))) : o.$refs.container.trigger("focus"))
            },
            activate: function() {
                var t = this;
                m(".fancybox-container").each(function() {
                    var e = m(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                    e.removeEvents(),
                    e.isVisible = !1)
                }),
                t.isVisible = !0,
                (t.current || t.isIdle) && (t.update(),
                t.updateControls()),
                t.trigger("onActivate"),
                t.addEvents()
            },
            close: function(e, t) {
                function n() {
                    u.cleanUp(e)
                }
                var i, o, r, a, s, l, c, u = this, f = u.current;
                return !u.isClosing && (!(u.isClosing = !0) === u.trigger("beforeClose", e) ? (u.isClosing = !1,
                d(function() {
                    u.update()
                }),
                !1) : (u.removeEvents(),
                r = f.$content,
                i = f.opts.animationEffect,
                o = m.isNumeric(t) ? t : i ? f.opts.animationDuration : 0,
                f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                !0 !== e ? m.fancybox.stop(f.$slide) : i = !1,
                f.$slide.siblings().trigger("onReset").remove(),
                o && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"),
                u.hideLoading(f),
                u.hideControls(!0),
                u.updateCursor(),
                "zoom" !== i || r && o && "image" === f.type && !u.isMoved() && !f.hasError && (c = u.getThumbPos(f)) || (i = "fade"),
                "zoom" === i ? (m.fancybox.stop(r),
                l = {
                    top: (a = m.fancybox.getTranslate(r)).top,
                    left: a.left,
                    scaleX: a.width / c.width,
                    scaleY: a.height / c.height,
                    width: c.width,
                    height: c.height
                },
                "auto" == (s = f.opts.zoomOpacity) && (s = .1 < Math.abs(f.width / f.height - c.width / c.height)),
                s && (c.opacity = 0),
                m.fancybox.setTranslate(r, l),
                p(r),
                m.fancybox.animate(r, c, o, n)) : i && o ? m.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, n) : !0 === e ? setTimeout(n, o) : n(),
                !0))
            },
            cleanUp: function(e) {
                var t, n, i, o = this, r = o.current.opts.$orig;
                o.current.$slide.trigger("onReset"),
                o.$refs.container.empty().remove(),
                o.trigger("afterClose", e),
                o.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = o.$trigger),
                r && r.length && (n = l.scrollX,
                i = l.scrollY,
                r.trigger("focus"),
                m("html, body").scrollTop(i).scrollLeft(n))),
                o.current = null,
                (t = m.fancybox.getInstance()) ? t.activate() : (m("body").removeClass("fancybox-active compensate-for-scrollbar"),
                m("#fancybox-style-noscroll").remove())
            },
            trigger: function(e, t) {
                var n, i = Array.prototype.slice.call(arguments, 1), o = this, r = t && t.opts ? t : o.current;
                if (r ? i.unshift(r) : r = o,
                i.unshift(o),
                m.isFunction(r.opts[e]) && (n = r.opts[e].apply(r, i)),
                !1 === n)
                    return n;
                "afterClose" !== e && o.$refs ? o.$refs.container.trigger(e + ".fb", i) : a.trigger(e + ".fb", i)
            },
            updateControls: function() {
                var e = this
                  , t = e.current
                  , n = t.index
                  , i = e.$refs.container
                  , o = e.$refs.caption
                  , r = t.opts.caption;
                t.$slide.trigger("refresh"),
                r && r.length ? (e.$caption = o).children().eq(0).html(r) : e.$caption = null,
                e.hasHiddenControls || e.isIdle || e.showControls(),
                i.find("[data-fancybox-count]").html(e.group.length),
                i.find("[data-fancybox-index]").html(n + 1),
                i.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0),
                i.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1),
                "image" === t.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                m(f.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
            },
            hideControls: function(e) {
                var t = ["infobar", "toolbar", "nav"];
                !e && this.current.opts.preventCaptionOverlap || t.push("caption"),
                this.$refs.container.removeClass(t.map(function(e) {
                    return "fancybox-show-" + e
                }).join(" ")),
                this.hasHiddenControls = !0
            },
            showControls: function() {
                var e = this
                  , t = e.current ? e.current.opts : e.opts
                  , n = e.$refs.container;
                e.hasHiddenControls = !1,
                e.idleSecondsCounter = 0,
                n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length)).toggleClass("fancybox-is-modal", !!t.modal)
            },
            toggleControls: function() {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }),
        m.fancybox = {
            version: "3.5.7",
            defaults: e,
            getInstance: function(e) {
                var t = m('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                  , n = Array.prototype.slice.call(arguments, 1);
                return t instanceof i && ("string" === m.type(e) ? t[e].apply(t, n) : "function" === m.type(e) && e.apply(t, n),
                t)
            },
            open: function(e, t, n) {
                return new i(e,t,n)
            },
            close: function(e) {
                var t = this.getInstance();
                t && (t.close(),
                !0 === e && this.close(e))
            },
            destroy: function() {
                this.close(!0),
                a.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (h = f.createElement("div"),
            l.getComputedStyle && l.getComputedStyle(h) && l.getComputedStyle(h).getPropertyValue("transform") && !(f.documentMode && f.documentMode < 11)),
            getTranslate: function(e) {
                var t;
                return !(!e || !e.length) && {
                    top: (t = e[0].getBoundingClientRect()).top || 0,
                    left: t.left || 0,
                    width: t.width,
                    height: t.height,
                    opacity: parseFloat(e.css("opacity"))
                }
            },
            setTranslate: function(e, t) {
                var n = ""
                  , i = {};
                if (e && t)
                    return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px",
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                    void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"),
                    n.length && (i.transform = n),
                    void 0 !== t.opacity && (i.opacity = t.opacity),
                    void 0 !== t.width && (i.width = t.width),
                    void 0 !== t.height && (i.height = t.height),
                    e.css(i)
            },
            animate: function(t, n, i, o, r) {
                var a, s = this;
                m.isFunction(i) && (o = i,
                i = null),
                s.stop(t),
                a = s.getTranslate(t),
                t.on(c, function(e) {
                    e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName) || (s.stop(t),
                    m.isNumeric(i) && t.css("transition-duration", ""),
                    m.isPlainObject(n) ? void 0 !== n.scaleX && void 0 !== n.scaleY && s.setTranslate(t, {
                        top: n.top,
                        left: n.left,
                        width: a.width * n.scaleX,
                        height: a.height * n.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== r && t.removeClass(n),
                    m.isFunction(o) && o(e))
                }),
                m.isNumeric(i) && t.css("transition-duration", i + "ms"),
                m.isPlainObject(n) ? (void 0 !== n.scaleX && void 0 !== n.scaleY && (delete n.width,
                delete n.height,
                t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                m.fancybox.setTranslate(t, n)) : t.addClass(n),
                t.data("timer", setTimeout(function() {
                    t.trigger(c)
                }, i + 33))
            },
            stop: function(e, t) {
                e && e.length && (clearTimeout(e.data("timer")),
                t && e.trigger(c),
                e.off(c).css("transition-duration", ""),
                e.parent().removeClass("fancybox-is-scaling"))
            }
        },
        m.fn.fancybox = function(e) {
            var t;
            return (t = (e = e || {}).selector || !1) ? m("body").off("click.fb-start", t).on("click.fb-start", t, {
                options: e
            }, n) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: e
            }, n),
            this
        }
        ,
        a.on("click.fb-start", "[data-fancybox]", n),
        a.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
            m('[data-fancybox="' + m(this).attr("data-fancybox-trigger") + '"]').eq(m(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: m(this)
            })
        }),
        s = null,
        a.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
            switch (e.type) {
            case "mousedown":
                s = m(this);
                break;
            case "mouseup":
                s = null;
                break;
            case "focusin":
                m(".fancybox-button").removeClass("fancybox-focus"),
                m(this).is(s) || m(this).is("[disabled]") || m(this).addClass("fancybox-focus");
                break;
            case "focusout":
                m(".fancybox-button").removeClass("fancybox-focus")
            }
        })
    }
    var s, h
}(window, document, jQuery),
function(p) {
    "use strict";
    function h(n, e, t) {
        if (n)
            return t = t || "",
            "object" === p.type(t) && (t = p.param(t, !0)),
            p.each(e, function(e, t) {
                n = n.replace("$" + e, t || "")
            }),
            t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t),
            n
    }
    var i = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(e) {
                return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(e) {
                return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    p(document).on("objectNeedsType.fb", function(e, t, o) {
        var n, r, a, s, l, c, u, f = o.src || "", d = !1;
        n = p.extend(!0, {}, i, o.opts.media),
        p.each(n, function(e, t) {
            if (a = f.match(t.matcher)) {
                if (d = t.type,
                u = e,
                c = {},
                t.paramPlace && a[t.paramPlace]) {
                    "?" == (l = a[t.paramPlace])[0] && (l = l.substring(1)),
                    l = l.split("&");
                    for (var n = 0; n < l.length; ++n) {
                        var i = l[n].split("=", 2);
                        2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
                    }
                }
                return s = p.extend(!0, {}, t.params, o.opts[e], c),
                f = "function" === p.type(t.url) ? t.url.call(this, a, s, o) : h(t.url, a, s),
                r = "function" === p.type(t.thumb) ? t.thumb.call(this, a, s, o) : h(t.thumb, a),
                "youtube" === e ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function(e, t, n, i) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                }) : "vimeo" === e && (f = f.replace("&%23", "#")),
                !1
            }
        }),
        d ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r),
        "iframe" === d && (o.opts = p.extend(!0, o.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        p.extend(o, {
            type: d,
            src: f,
            origSrc: o.src,
            contentSource: u,
            contentType: "image" === d ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
        })) : f && (o.type = o.opts.defaultType)
    });
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(e) {
            var t, n = this;
            this[e].loaded ? setTimeout(function() {
                n.done(e)
            }) : this[e].loading || (this[e].loading = !0,
            (t = document.createElement("script")).type = "text/javascript",
            t.src = this[e].src,
            "youtube" === e ? window.onYouTubeIframeAPIReady = function() {
                n[e].loaded = !0,
                n.done(e)
            }
            : t.onload = function() {
                n[e].loaded = !0,
                n.done(e)
            }
            ,
            document.body.appendChild(t))
        },
        done: function(e) {
            var t, n;
            "youtube" === e && delete window.onYouTubeIframeAPIReady,
            (t = p.fancybox.getInstance()) && (n = t.current.$content.find("iframe"),
            "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"),{
                events: {
                    onStateChange: function(e) {
                        0 == e.data && t.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function() {
                t.next()
            }))
        }
    };
    p(document).on({
        "afterShow.fb": function(e, t, n) {
            1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function(m, l, g) {
    "use strict";
    function u(e) {
        var t = [];
        for (var n in e = (e = e.originalEvent || e || m.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e])
            e[n].pageX ? t.push({
                x: e[n].pageX,
                y: e[n].pageY
            }) : e[n].clientX && t.push({
                x: e[n].clientX,
                y: e[n].clientY
            });
        return t
    }
    function v(e, t, n) {
        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
    }
    function c(e) {
        if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || g.isFunction(e.get(0).onclick) || e.data("selectable"))
            return !0;
        for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++)
            if ("data-fancybox-" === n[t].nodeName.substr(0, 14))
                return !0;
        return !1
    }
    function f(e) {
        for (var t = !1; (n = e.get(0),
        void 0,
        i = m.getComputedStyle(n)["overflow-y"],
        o = m.getComputedStyle(n)["overflow-x"],
        r = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight,
        a = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth,
        !(t = r || a)) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")); )
            ;
        var n, i, o, r, a;
        return t
    }
    function n(e) {
        var t = this;
        t.instance = e,
        t.$bg = e.$refs.bg,
        t.$stage = e.$refs.stage,
        t.$container = e.$refs.container,
        t.destroy(),
        t.$container.on("touchstart.fb.touch mousedown.fb.touch", g.proxy(t, "ontouchstart"))
    }
    var y = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || function(e) {
        return m.setTimeout(e, 1e3 / 60)
    }
      , b = m.cancelAnimationFrame || m.webkitCancelAnimationFrame || m.mozCancelAnimationFrame || m.oCancelAnimationFrame || function(e) {
        m.clearTimeout(e)
    }
    ;
    n.prototype.destroy = function() {
        var e = this;
        e.$container.off(".fb.touch"),
        g(l).off(".fb.touch"),
        e.requestId && (b(e.requestId),
        e.requestId = null),
        e.tapped && (clearTimeout(e.tapped),
        e.tapped = null)
    }
    ,
    n.prototype.ontouchstart = function(e) {
        var t = this
          , n = g(e.target)
          , i = t.instance
          , o = i.current
          , r = o.$slide
          , a = o.$content
          , s = "touchstart" == e.type;
        if (s && t.$container.off("mousedown.fb.touch"),
        (!e.originalEvent || 2 != e.originalEvent.button) && r.length && n.length && !c(n) && !c(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
            if (!o || i.isAnimating || o.$slide.hasClass("fancybox-animated"))
                return e.stopPropagation(),
                void e.preventDefault();
            t.realPoints = t.startPoints = u(e),
            t.startPoints.length && (o.touch && e.stopPropagation(),
            t.startEvent = e,
            t.canTap = !0,
            t.$target = n,
            t.$content = a,
            t.opts = o.opts.touch,
            t.isPanning = !1,
            t.isSwiping = !1,
            t.isZooming = !1,
            t.isScrolling = !1,
            t.canPan = i.canPan(),
            t.startTime = (new Date).getTime(),
            t.distanceX = t.distanceY = t.distance = 0,
            t.canvasWidth = Math.round(r[0].clientWidth),
            t.canvasHeight = Math.round(r[0].clientHeight),
            t.contentLastPos = null,
            t.contentStartPos = g.fancybox.getTranslate(t.$content) || {
                top: 0,
                left: 0
            },
            t.sliderStartPos = g.fancybox.getTranslate(r),
            t.stagePos = g.fancybox.getTranslate(i.$refs.stage),
            t.sliderStartPos.top -= t.stagePos.top,
            t.sliderStartPos.left -= t.stagePos.left,
            t.contentStartPos.top -= t.stagePos.top,
            t.contentStartPos.left -= t.stagePos.left,
            g(l).off(".fb.touch").on(s ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", g.proxy(t, "ontouchend")).on(s ? "touchmove.fb.touch" : "mousemove.fb.touch", g.proxy(t, "ontouchmove")),
            g.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0),
            ((t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length) || (n.is(".fancybox-image") && e.preventDefault(),
            g.fancybox.isMobile && n.parents(".fancybox-caption").length)) && (t.isScrollable = f(n) || f(n.parent()),
            g.fancybox.isMobile && t.isScrollable || e.preventDefault(),
            1 !== t.startPoints.length && !o.hasError || (t.canPan ? (g.fancybox.stop(t.$content),
            t.isPanning = !0) : t.isSwiping = !0,
            t.$container.addClass("fancybox-is-grabbing")),
            2 === t.startPoints.length && "image" === o.type && (o.isLoaded || o.$ghost) && (t.canTap = !1,
            t.isSwiping = !1,
            t.isPanning = !1,
            t.isZooming = !0,
            g.fancybox.stop(t.$content),
            t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - g(m).scrollLeft(),
            t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - g(m).scrollTop(),
            t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width,
            t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height,
            t.startDistanceBetweenFingers = v(t.startPoints[0], t.startPoints[1]))))
        }
    }
    ,
    n.prototype.onscroll = function(e) {
        this.isScrolling = !0,
        l.removeEventListener("scroll", this.onscroll, !0)
    }
    ,
    n.prototype.ontouchmove = function(e) {
        var t = this;
        return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void (t.canTap = !1) : (t.newPoints = u(e),
        void ((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(),
        t.distanceX = v(t.newPoints[0], t.startPoints[0], "x"),
        t.distanceY = v(t.newPoints[0], t.startPoints[0], "y"),
        t.distance = v(t.newPoints[0], t.startPoints[0]),
        0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }
    ,
    n.prototype.onSwipe = function(e) {
        var t, o = this, r = o.instance, n = o.isSwiping, i = o.sliderStartPos.left || 0;
        if (!0 !== n)
            "x" == n && (0 < o.distanceX && (o.instance.group.length < 2 || 0 === o.instance.current.index && !o.instance.current.opts.loop) ? i += Math.pow(o.distanceX, .8) : o.distanceX < 0 && (o.instance.group.length < 2 || o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop) ? i -= Math.pow(-o.distanceX, .8) : i += o.distanceX),
            o.sliderLastPos = {
                top: "x" == n ? 0 : o.sliderStartPos.top + o.distanceY,
                left: i
            },
            o.requestId && (b(o.requestId),
            o.requestId = null),
            o.requestId = y(function() {
                o.sliderLastPos && (g.each(o.instance.slides, function(e, t) {
                    var n = t.pos - o.instance.currPos;
                    g.fancybox.setTranslate(t.$slide, {
                        top: o.sliderLastPos.top,
                        left: o.sliderLastPos.left + n * o.canvasWidth + n * t.opts.gutter
                    })
                }),
                o.$container.addClass("fancybox-is-sliding"))
            });
        else if (10 < Math.abs(o.distance)) {
            if (o.canTap = !1,
            r.group.length < 2 && o.opts.vertical ? o.isSwiping = "y" : r.isDragging || !1 === o.opts.vertical || "auto" === o.opts.vertical && 800 < g(m).width() ? o.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI),
            o.isSwiping = 45 < t && t < 135 ? "y" : "x"),
            "y" === o.isSwiping && g.fancybox.isMobile && o.isScrollable)
                return void (o.isScrolling = !0);
            r.isDragging = o.isSwiping,
            o.startPoints = o.newPoints,
            g.each(r.slides, function(e, t) {
                var n, i;
                g.fancybox.stop(t.$slide),
                n = g.fancybox.getTranslate(t.$slide),
                i = g.fancybox.getTranslate(r.$refs.stage),
                t.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(e, t) {
                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }),
                t.pos === r.current.pos && (o.sliderStartPos.top = n.top - i.top,
                o.sliderStartPos.left = n.left - i.left),
                g.fancybox.setTranslate(t.$slide, {
                    top: n.top - i.top,
                    left: n.left - i.left
                })
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }
    ,
    n.prototype.onPan = function() {
        var e = this;
        v(e.newPoints[0], e.realPoints[0]) < (g.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1,
        e.contentLastPos = e.limitMovement(),
        e.requestId && b(e.requestId),
        e.requestId = y(function() {
            g.fancybox.setTranslate(e.$content, e.contentLastPos)
        }))
    }
    ,
    n.prototype.limitMovement = function() {
        var e, t, n, i, o, r, a = this, s = a.canvasWidth, l = a.canvasHeight, c = a.distanceX, u = a.distanceY, f = a.contentStartPos, d = f.left, p = f.top, h = f.width, m = f.height;
        return o = s < h ? d + c : d,
        r = p + u,
        e = Math.max(0, .5 * s - .5 * h),
        t = Math.max(0, .5 * l - .5 * m),
        n = Math.min(s - h, .5 * s - .5 * h),
        i = Math.min(l - m, .5 * l - .5 * m),
        0 < c && e < o && (o = e - 1 + Math.pow(-e + d + c, .8) || 0),
        c < 0 && o < n && (o = n + 1 - Math.pow(n - d - c, .8) || 0),
        0 < u && t < r && (r = t - 1 + Math.pow(-t + p + u, .8) || 0),
        u < 0 && r < i && (r = i + 1 - Math.pow(i - p - u, .8) || 0),
        {
            top: r,
            left: o
        }
    }
    ,
    n.prototype.limitPosition = function(e, t, n, i) {
        var o = this.canvasWidth
          , r = this.canvasHeight;
        return e = o < n ? (e = 0 < e ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2),
        {
            top: t = r < i ? (t = 0 < t ? 0 : t) < r - i ? r - i : t : Math.max(0, r / 2 - i / 2),
            left: e
        }
    }
    ,
    n.prototype.onZoom = function() {
        var e = this
          , t = e.contentStartPos
          , n = t.width
          , i = t.height
          , o = t.left
          , r = t.top
          , a = v(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers
          , s = Math.floor(n * a)
          , l = Math.floor(i * a)
          , c = (n - s) * e.percentageOfImageAtPinchPointX
          , u = (i - l) * e.percentageOfImageAtPinchPointY
          , f = (e.newPoints[0].x + e.newPoints[1].x) / 2 - g(m).scrollLeft()
          , d = (e.newPoints[0].y + e.newPoints[1].y) / 2 - g(m).scrollTop()
          , p = f - e.centerPointStartX
          , h = {
            top: r + (u + (d - e.centerPointStartY)),
            left: o + (c + p),
            scaleX: a,
            scaleY: a
        };
        e.canTap = !1,
        e.newWidth = s,
        e.newHeight = l,
        e.contentLastPos = h,
        e.requestId && b(e.requestId),
        e.requestId = y(function() {
            g.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    n.prototype.ontouchend = function(e) {
        var t = this
          , n = t.isSwiping
          , i = t.isPanning
          , o = t.isZooming
          , r = t.isScrolling;
        if (t.endPoints = u(e),
        t.dMs = Math.max((new Date).getTime() - t.startTime, 1),
        t.$container.removeClass("fancybox-is-grabbing"),
        g(l).off(".fb.touch"),
        l.removeEventListener("scroll", t.onscroll, !0),
        t.requestId && (b(t.requestId),
        t.requestId = null),
        t.isSwiping = !1,
        t.isPanning = !1,
        t.isZooming = !1,
        t.isScrolling = !1,
        t.instance.isDragging = !1,
        t.canTap)
            return t.onTap(e);
        t.speed = 100,
        t.velocityX = t.distanceX / t.dMs * .5,
        t.velocityY = t.distanceY / t.dMs * .5,
        i ? t.endPanning() : o ? t.endZooming() : t.endSwiping(n, r)
    }
    ,
    n.prototype.endSwiping = function(e, t) {
        var n = this
          , i = !1
          , o = n.instance.group.length
          , r = Math.abs(n.distanceX)
          , a = "x" == e && 1 < o && (130 < n.dMs && 10 < r || 50 < r);
        n.sliderLastPos = null,
        "y" == e && !t && 50 < Math.abs(n.distanceY) ? (g.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
        }, 200),
        i = n.instance.close(!0, 250)) : a && 0 < n.distanceX ? i = n.instance.previous(300) : a && n.distanceX < 0 && (i = n.instance.next(300)),
        !1 !== i || "x" != e && "y" != e || n.instance.centerSlide(200),
        n.$container.removeClass("fancybox-is-sliding")
    }
    ,
    n.prototype.endPanning = function() {
        var e, t, n, i = this;
        i.contentLastPos && (t = !1 === i.opts.momentum || 350 < i.dMs ? (e = i.contentLastPos.left,
        i.contentLastPos.top) : (e = i.contentLastPos.left + 500 * i.velocityX,
        i.contentLastPos.top + 500 * i.velocityY),
        (n = i.limitPosition(e, t, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width,
        n.height = i.contentStartPos.height,
        g.fancybox.animate(i.$content, n, 366))
    }
    ,
    n.prototype.endZooming = function() {
        var e, t, n, i, o = this, r = o.instance.current, a = o.newWidth, s = o.newHeight;
        o.contentLastPos && (e = o.contentLastPos.left,
        i = {
            top: t = o.contentLastPos.top,
            left: e,
            width: a,
            height: s,
            scaleX: 1,
            scaleY: 1
        },
        g.fancybox.setTranslate(o.$content, i),
        a < o.canvasWidth && s < o.canvasHeight ? o.instance.scaleToFit(150) : a > r.width || s > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(e, t, a, s),
        g.fancybox.animate(o.$content, n, 150)))
    }
    ,
    n.prototype.onTap = function(n) {
        function e(e) {
            var t = a.opts[e];
            if (g.isFunction(t) && (t = t.apply(r, [a, n])),
            t)
                switch (t) {
                case "close":
                    r.close(i.startEvent);
                    break;
                case "toggleControls":
                    r.toggleControls();
                    break;
                case "next":
                    r.next();
                    break;
                case "nextOrClose":
                    1 < r.group.length ? r.next() : r.close(i.startEvent);
                    break;
                case "zoom":
                    "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(l, c) : r.group.length < 2 && r.close(i.startEvent))
                }
        }
        var t, i = this, o = g(n.target), r = i.instance, a = r.current, s = n && u(n) || i.startPoints, l = s[0] ? s[0].x - g(m).scrollLeft() - i.stagePos.left : 0, c = s[0] ? s[0].y - g(m).scrollTop() - i.stagePos.top : 0;
        if ((!n.originalEvent || 2 != n.originalEvent.button) && (o.is("img") || !(l > o[0].clientWidth + o.offset().left))) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                t = "Outside";
            else if (o.is(".fancybox-slide"))
                t = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(o).addBack().filter(o).length)
                    return;
                t = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped),
                i.tapped = null,
                50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY))
                    return this;
                e("dblclick" + t)
            } else
                i.tapX = l,
                i.tapY = c,
                a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t] ? i.tapped = setTimeout(function() {
                    i.tapped = null,
                    r.isAnimating || e("click" + t)
                }, 500) : e("click" + t);
            return this
        }
    }
    ,
    g(l).on("onActivate.fb", function(e, t) {
        t && !t.Guestures && (t.Guestures = new n(t))
    }).on("beforeClose.fb", function(e, t) {
        t && t.Guestures && t.Guestures.destroy()
    })
}(window, document, jQuery),
function(a, s) {
    "use strict";
    s.extend(!0, s.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    function n(e) {
        this.instance = e,
        this.init()
    }
    s.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var e = this
              , t = e.instance
              , n = t.group[t.currIndex].opts.slideShow;
            e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                e.toggle()
            }),
            t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = s('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner))
        },
        set: function(e) {
            var t = this
              , n = t.instance
              , i = n.current;
            i && (!0 === e || i.opts.loop || n.currIndex < n.group.length - 1) ? t.isActive && "video" !== i.contentType && (t.$progress && s.fancybox.animate(t.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed),
            t.timer = setTimeout(function() {
                n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
            }, i.opts.slideShow.speed)) : (t.stop(),
            n.idleSecondsCounter = 0,
            n.showControls())
        },
        clear: function() {
            clearTimeout(this.timer),
            this.timer = null,
            this.$progress && this.$progress.removeAttr("style").hide()
        },
        start: function() {
            var e = this
              , t = e.instance.current;
            t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            e.isActive = !0,
            t.isComplete && e.set(!0),
            e.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var e = this
              , t = e.instance.current;
            e.clear(),
            e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
            e.isActive = !1,
            e.instance.trigger("onSlideShowChange", !1),
            e.$progress && e.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    }),
    s(a).on({
        "onInit.fb": function(e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t))
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(e, t, n) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            var r = t && t.SlideShow;
            !r || !n.opts.slideShow || 80 !== o && 32 !== o || s(a.activeElement).is("button,a,input") || (i.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(e, t) {
            var n = t && t.SlideShow;
            n && n.stop()
        }
    }),
    s(a).on("visibilitychange", function() {
        var e = s.fancybox.getInstance()
          , t = e && e.SlideShow;
        t && t.isActive && (a.hidden ? t.clear() : t.set())
    })
}(document, jQuery),
function(r, n) {
    "use strict";
    var i = function() {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], t = {}, n = 0; n < e.length; n++) {
            var i = e[n];
            if (i && i[1]in r) {
                for (var o = 0; o < i.length; o++)
                    t[e[0][o]] = i[o];
                return t
            }
        }
        return !1
    }();
    if (i) {
        var o = {
            request: function(e) {
                (e = e || r.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                r[i.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || r.documentElement,
                this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(r[i.fullscreenElement])
            },
            enabled: function() {
                return Boolean(r[i.fullscreenEnabled])
            }
        };
        n.extend(!0, n.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }),
        n(r).on(i.fullscreenchange, function() {
            var e = o.isFullscreen()
              , t = n.fancybox.getInstance();
            t && (t.current && "image" === t.current.type && t.isAnimating && (t.isAnimating = !1,
            t.update(!0, !0, 0),
            t.isComplete || t.complete()),
            t.trigger("onFullscreenChange", e),
            t.$refs.container.toggleClass("fancybox-is-fullscreen", e),
            t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
        })
    }
    n(r).on({
        "onInit.fb": function(e, t) {
            i ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                o.toggle()
            }),
            t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && o.request(),
            t.FullScreen = o) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            t && t.FullScreen && 70 === o && (i.preventDefault(),
            t.FullScreen.toggle())
        },
        "beforeClose.fb": function(e, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function(e, r) {
    "use strict";
    var a = "fancybox-thumbs";
    r.fancybox.defaults = r.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, r.fancybox.defaults);
    function i(e) {
        this.init(e)
    }
    r.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(e) {
            var t = this
              , n = e.group
              , i = 0;
            t.instance = e,
            t.opts = n[e.currIndex].opts.thumbs,
            (e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, r = n.length; o < r && (n[o].thumb && i++,
            !(1 < i)); o++)
                ;
            1 < i && t.opts ? (t.$button.removeAttr("style").on("click", function() {
                t.toggle()
            }),
            t.isActive = !0) : t.$button.hide()
        },
        create: function() {
            var n, e = this, t = e.instance, i = e.opts.parentEl, o = [];
            e.$grid || (e.$grid = r('<div class="' + a + " " + a + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(i).addBack().filter(i)),
            e.$grid.on("click", "a", function() {
                t.jumpTo(r(this).attr("data-index"))
            })),
            e.$list || (e.$list = r('<div class="' + a + '__list">').appendTo(e.$grid)),
            r.each(t.group, function(e, t) {
                (n = t.thumb) || "image" !== t.type || (n = t.src),
                o.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }),
            e.$list[0].innerHTML = o.join(""),
            "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(e) {
            var t, n, i = this, o = i.$list, r = i.$grid;
            i.instance.current && (n = (t = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(),
            "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - t.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + n.top
            }, e) : "x" === i.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - t.outerWidth())) && o.parent().stop().animate({
                scrollLeft: n.left
            }, e))
        },
        update: function() {
            var e = this;
            e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            e.isVisible ? (e.$grid || e.create(),
            e.instance.trigger("onThumbsShow"),
            e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"),
            e.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    r(e).on({
        "onInit.fb": function(e, t) {
            var n;
            !t || t.Thumbs || (n = new i(t)).isActive && !0 === n.opts.autoStart && n.show()
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            var r = t && t.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb": function(e, t) {
            var n = t && t.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(e, r) {
    "use strict";
    r.extend(!0, r.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(e, t) {
                return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }),
    r(e).on("click", "[data-fancybox-share]", function() {
        var e, t, n, i = r.fancybox.getInstance(), o = i.current || null;
        o && ("function" === r.type(o.opts.share.url) && (e = o.opts.share.url.apply(o, [i, o])),
        t = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        String(e).replace(/[&<>"'`=\/]/g, function(e) {
            return n[e]
        }))).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""),
        r.fancybox.open({
            src: i.translate(i, t),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(e, t) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        e.close(null, 0)
                    }),
                    t.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(r, a, o) {
    "use strict";
    function s() {
        var e = r.location.hash.substr(1)
          , t = e.split("-")
          , n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
        return {
            hash: e,
            index: n < 1 ? 1 : n,
            gallery: t.join("-")
        }
    }
    function t(e) {
        "" !== e.gallery && o("[data-fancybox='" + o.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
    }
    function l(e) {
        var t, n;
        return !!e && ("" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n)
    }
    o.escapeSelector || (o.escapeSelector = function(e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        })
    }
    ),
    o(function() {
        !1 !== o.fancybox.defaults.hash && (o(a).on({
            "onInit.fb": function(e, t) {
                var n, i;
                !1 !== t.group[t.currIndex].opts.hash && (n = s(),
                (i = l(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(e, t, n, i) {
                var o;
                n && !1 !== n.opts.hash && (o = l(t)) && (t.currentHash = o + (1 < t.group.length ? "-" + (n.index + 1) : ""),
                r.location.hash !== "#" + t.currentHash && (i && !t.origHash && (t.origHash = r.location.hash),
                t.hashTimer && clearTimeout(t.hashTimer),
                t.hashTimer = setTimeout(function() {
                    "replaceState"in r.history ? (r.history[i ? "pushState" : "replaceState"]({}, a.title, r.location.pathname + r.location.search + "#" + t.currentHash),
                    i && (t.hasCreatedHistory = !0)) : r.location.hash = t.currentHash,
                    t.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(e, t, n) {
                n && !1 !== n.opts.hash && (clearTimeout(t.hashTimer),
                t.currentHash && t.hasCreatedHistory ? r.history.back() : t.currentHash && ("replaceState"in r.history ? r.history.replaceState({}, a.title, r.location.pathname + r.location.search + (t.origHash || "")) : r.location.hash = t.origHash),
                t.currentHash = null)
            }
        }),
        o(r).on("hashchange.fb", function() {
            var e = s()
              , i = null;
            o.each(o(".fancybox-container").get().reverse(), function(e, t) {
                var n = o(t).data("FancyBox");
                if (n && n.currentHash)
                    return i = n,
                    !1
            }),
            i ? i.currentHash === e.gallery + "-" + e.index || 1 === e.index && i.currentHash == e.gallery || (i.currentHash = null,
            i.close()) : "" !== e.gallery && t(e)
        }),
        setTimeout(function() {
            o.fancybox.getInstance() || t(s())
        }, 50))
    })
}(window, document, jQuery),
function(e, t) {
    "use strict";
    var o = (new Date).getTime();
    t(e).on({
        "onInit.fb": function(e, i, t) {
            i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
                var t = i.current
                  , n = (new Date).getTime();
                i.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(),
                e.stopPropagation(),
                t.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e,
                n - o < 250 || (o = n,
                i[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery),
function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var i in n)
            ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}(window, function() {
    return modules = [function(e) {
        e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var u = n(2)
          , f = n(3)
          , r = f.document
          , a = n(4).generateMaskSet
          , o = n(4).analyseMask
          , s = n(7);
        function l(e, t, n) {
            if (!(this instanceof l))
                return new l(e,t,n);
            this.el = void 0,
            this.events = {},
            this.maskset = void 0,
            !(this.refreshValue = !1) !== n && (u.isPlainObject(e) ? t = e : (t = t || {},
            e && (t.alias = e)),
            this.opts = u.extend(!0, {}, this.defaults, t),
            this.noMasksCache = t && void 0 !== t.definitions,
            this.userOptions = t || {},
            d(this.opts.alias, t, this.opts),
            this.isRTL = this.opts.numericInput)
        }
        function d(e, t, n) {
            var i = l.prototype.aliases[e];
            return i ? (i.alias && d(i.alias, void 0, n),
            u.extend(!0, n, i),
            u.extend(!0, n, t),
            !0) : (null === n.mask && (n.mask = e),
            !1)
        }
        l.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: ["[", "]"],
                quantifiermarker: ["{", "}"],
                groupmarker: ["(", ")"],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: u.noop,
                onincomplete: u.noop,
                oncleared: u.noop,
                repeat: 0,
                greedy: !1,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: u.noop,
                onBeforeMask: null,
                onBeforePaste: function(e, t) {
                    return u.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: u.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                _radixDance: !1,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "url", "password", "search"],
                ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: void 0,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                importDataAttributes: !0,
                shiftPositions: !0
            },
            definitions: {
                9: {
                    validator: "[0-9１-９]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(e) {
                var o = this;
                return "string" == typeof e && (e = r.getElementById(e) || r.querySelectorAll(e)),
                e = e.nodeName ? [e] : e,
                u.each(e, function(e, t) {
                    var n = u.extend(!0, {}, o.opts);
                    if (function(n, e, i, o) {
                        function t(e, t) {
                            null !== (t = void 0 !== t ? t : n.getAttribute(o + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = f[t] : "false" === t ? t = !1 : "true" === t && (t = !0)),
                            i[e] = t)
                        }
                        if (!0 === e.importDataAttributes) {
                            var r, a, s, l, c = n.getAttribute(o);
                            if (c && "" !== c && (c = c.replace(/'/g, '"'),
                            a = JSON.parse("{" + c + "}")),
                            a)
                                for (l in s = void 0,
                                a)
                                    if ("alias" === l.toLowerCase()) {
                                        s = a[l];
                                        break
                                    }
                            for (r in t("alias", s),
                            i.alias && d(i.alias, i, e),
                            e) {
                                if (a)
                                    for (l in s = void 0,
                                    a)
                                        if (l.toLowerCase() === r.toLowerCase()) {
                                            s = a[l];
                                            break
                                        }
                                t(r, s)
                            }
                        }
                        return u.extend(!0, e, i),
                        "rtl" !== n.dir && !e.rightAlign || (n.style.textAlign = "right"),
                        "rtl" !== n.dir && !e.numericInput || (n.dir = "ltr",
                        n.removeAttribute("dir"),
                        e.isRTL = !0),
                        Object.keys(i).length
                    }(t, n, u.extend(!0, {}, o.userOptions), o.dataAttribute)) {
                        var i = a(n, o.noMasksCache);
                        void 0 !== i && (void 0 !== t.inputmask && (t.inputmask.opts.autoUnmask = !0,
                        t.inputmask.remove()),
                        t.inputmask = new l(void 0,void 0,!0),
                        t.inputmask.opts = n,
                        t.inputmask.noMasksCache = o.noMasksCache,
                        t.inputmask.userOptions = u.extend(!0, {}, o.userOptions),
                        t.inputmask.isRTL = n.isRTL || n.numericInput,
                        (t.inputmask.el = t).inputmask.maskset = i,
                        u.data(t, "_inputmask_opts", n),
                        s.call(t.inputmask, {
                            action: "mask"
                        }))
                    }
                }),
                e && e[0] && e[0].inputmask || this
            },
            option: function(e, t) {
                return "string" == typeof e ? this.opts[e] : "object" === i(e) ? (u.extend(this.userOptions, e),
                this.el && !0 !== t && this.mask(this.el),
                this) : void 0
            },
            unmaskedvalue: function(e) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "unmaskedvalue",
                    value: e
                })
            },
            remove: function() {
                return s.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask
            },
            isComplete: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function(e) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "isValid",
                    value: e
                })
            },
            format: function(e, t) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "format",
                    value: e,
                    metadata: t
                })
            },
            setValue: function(e) {
                this.el && u(this.el).trigger("setvalue", [e])
            },
            analyseMask: o
        },
        l.extendDefaults = function(e) {
            u.extend(!0, l.prototype.defaults, e)
        }
        ,
        l.extendDefinitions = function(e) {
            u.extend(!0, l.prototype.definitions, e)
        }
        ,
        l.extendAliases = function(e) {
            u.extend(!0, l.prototype.aliases, e)
        }
        ,
        l.format = function(e, t, n) {
            return l(t).format(e, n)
        }
        ,
        l.unmask = function(e, t) {
            return l(t).unmaskedvalue(e)
        }
        ,
        l.isValid = function(e, t) {
            return l(t).isValid(e)
        }
        ,
        l.remove = function(e) {
            "string" == typeof e && (e = r.getElementById(e) || r.querySelectorAll(e)),
            e = e.nodeName ? [e] : e,
            u.each(e, function(e, t) {
                t.inputmask && t.inputmask.remove()
            })
        }
        ,
        l.setValue = function(e, n) {
            "string" == typeof e && (e = r.getElementById(e) || r.querySelectorAll(e)),
            e = e.nodeName ? [e] : e,
            u.each(e, function(e, t) {
                t.inputmask ? t.inputmask.setValue(n) : u(t).trigger("setvalue", [n])
            })
        }
        ;
        var c = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")","gim");
        l.escapeRegex = function(e) {
            return e.replace(c, "\\$1")
        }
        ,
        l.dependencyLib = u,
        f.Inputmask = l,
        e.exports = l
    }
    , function(e, t, n) {
        "use strict";
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var i = n(3)
          , p = i.document;
        function s(e) {
            return null != e && e === e.window
        }
        function h(e) {
            return e instanceof Element
        }
        function m(e) {
            return e instanceof m ? e : this instanceof m ? void (null != e && e !== i && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : p.querySelector(e),
            void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new m(e)
        }
        m.prototype = {
            on: function(e, t) {
                if (h(this[0]))
                    for (var n = this[0].eventRegistry, i = this[0], o = e.split(" "), r = 0; r < o.length; r++) {
                        var a = o[r].split(".")
                          , s = a[0]
                          , l = a[1] || "global";
                        c = s,
                        u = l,
                        i.addEventListener ? i.addEventListener(c, t, !1) : i.attachEvent && i.attachEvent("on" + c, t),
                        n[c] = n[c] || {},
                        n[c][u] = n[c][u] || [],
                        n[c][u].push(t)
                    }
                var c, u;
                return this
            },
            off: function(e, s) {
                var l, o;
                function t(e, t, n) {
                    if (e in l == 1)
                        if (o.removeEventListener ? o.removeEventListener(e, n, !1) : o.detachEvent && o.detachEvent("on" + e, n),
                        "global" === t)
                            for (var i in l[e])
                                l[e][i].splice(l[e][i].indexOf(n), 1);
                        else
                            l[e][t].splice(l[e][t].indexOf(n), 1)
                }
                function n(e, t) {
                    var n, i, o = [];
                    if (0 < e.length)
                        if (void 0 === s)
                            for (n = 0,
                            i = l[e][t].length; n < i; n++)
                                o.push({
                                    ev: e,
                                    namespace: t && 0 < t.length ? t : "global",
                                    handler: l[e][t][n]
                                });
                        else
                            o.push({
                                ev: e,
                                namespace: t && 0 < t.length ? t : "global",
                                handler: s
                            });
                    else if (0 < t.length)
                        for (var r in l)
                            for (var a in l[r])
                                if (a === t)
                                    if (void 0 === s)
                                        for (n = 0,
                                        i = l[r][a].length; n < i; n++)
                                            o.push({
                                                ev: r,
                                                namespace: a,
                                                handler: l[r][a][n]
                                            });
                                    else
                                        o.push({
                                            ev: r,
                                            namespace: a,
                                            handler: s
                                        });
                    return o
                }
                if (h(this[0])) {
                    l = this[0].eventRegistry,
                    o = this[0];
                    for (var i = e.split(" "), r = 0; r < i.length; r++)
                        for (var a = i[r].split("."), c = n(a[0], a[1]), u = 0, f = c.length; u < f; u++)
                            t(c[u].ev, c[u].namespace, c[u].handler)
                }
                return this
            },
            trigger: function(e, t) {
                if (h(this[0]))
                    for (var n = this[0].eventRegistry, i = this[0], o = "string" == typeof e ? e.split(" ") : [e.type], r = 0; r < o.length; r++) {
                        var a = o[r].split(".")
                          , s = a[0]
                          , l = a[1] || "global";
                        if (void 0 !== p && "global" === l) {
                            var c, u, f = {
                                bubbles: !0,
                                cancelable: !0,
                                detail: t
                            };
                            if (p.createEvent) {
                                try {
                                    c = new CustomEvent(s,f)
                                } catch (e) {
                                    (c = p.createEvent("CustomEvent")).initCustomEvent(s, f.bubbles, f.cancelable, f.detail)
                                }
                                e.type && m.extend(c, e),
                                i.dispatchEvent(c)
                            } else
                                (c = p.createEventObject()).eventType = s,
                                c.detail = t,
                                e.type && m.extend(c, e),
                                i.fireEvent("on" + c.eventType, c)
                        } else if (void 0 !== n[s])
                            if ((e = e.type ? e : m.Event(e)).detail = arguments.slice(1),
                            "global" === l)
                                for (var d in n[s])
                                    for (u = 0; u < n[s][d].length; u++)
                                        n[s][d][u].apply(i, arguments);
                            else
                                for (u = 0; u < n[s][l].length; u++)
                                    n[s][l][u].apply(i, arguments)
                    }
                return this
            }
        },
        m.isFunction = function(e) {
            return "function" == typeof e
        }
        ,
        m.noop = function() {}
        ,
        m.isArray = Array.isArray,
        m.inArray = function(e, t, n) {
            return null == t ? -1 : function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }(t, e)
        }
        ,
        m.valHooks = void 0,
        m.isPlainObject = function(e) {
            return !("object" !== u(e) || e.nodeType || s(e) || e.constructor && !Object.hasOwnProperty.call(e.constructor.prototype, "isPrototypeOf"))
        }
        ,
        m.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
            a = arguments[s] || {},
            s++),
            "object" === u(a) || m.isFunction(a) || (a = {}),
            s === l && (a = this,
            s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                        a !== (i = e[t]) && (c && i && (m.isPlainObject(i) || (o = m.isArray(i))) ? (r = o ? (o = !1,
                        n && m.isArray(n) ? n : []) : n && m.isPlainObject(n) ? n : {},
                        a[t] = m.extend(c, r, i)) : void 0 !== i && (a[t] = i));
            return a
        }
        ,
        m.each = function(e, t) {
            var n, i, o, r = 0;
            if (i = "length"in (n = e) && n.length,
            "function" !== (o = u(n)) && !s(n) && (1 === n.nodeType && i || "array" === o || 0 === i || "number" == typeof i && 0 < i && i - 1 in n))
                for (var a = e.length; r < a && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        }
        ,
        m.data = function(e, t, n) {
            if (void 0 === n)
                return e.__data ? e.__data[t] : null;
            e.__data = e.__data || {},
            e.__data[t] = n
        }
        ,
        "function" == typeof i.CustomEvent ? m.Event = i.CustomEvent : (m.Event = function(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = p.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            n
        }
        ).prototype = i.Event.prototype,
        e.exports = m
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window
        }
        .call(exports, __webpack_require__, exports, module),
        void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }
    , function(e, t, n) {
        "use strict";
        var j = n(2);
        e.exports = {
            generateMaskSet: function(n, s) {
                function e(e, t, n) {
                    var i, o, r = !1;
                    if (null !== e && "" !== e || (e = (r = null !== n.regex) ? (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (r = !0,
                    ".*")),
                    1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""),
                    0 < n.repeat || "*" === n.repeat || "+" === n.repeat) {
                        var a = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                        e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + a + "," + n.repeat + n.quantifiermarker[1]
                    }
                    return o = r ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e,
                    !1 !== n.keepStatic && (o = "ks_" + o),
                    void 0 === Inputmask.prototype.masksCache[o] || !0 === s ? (i = {
                        mask: e,
                        maskToken: Inputmask.prototype.analyseMask(e, r, n),
                        validPositions: {},
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        excludes: {},
                        metadata: t,
                        maskLength: void 0,
                        jitOffset: {}
                    },
                    !0 !== s && (Inputmask.prototype.masksCache[o] = i,
                    i = j.extend(!0, {}, Inputmask.prototype.masksCache[o]))) : i = j.extend(!0, {}, Inputmask.prototype.masksCache[o]),
                    i
                }
                if (j.isFunction(n.mask) && (n.mask = n.mask(n)),
                j.isArray(n.mask)) {
                    if (1 < n.mask.length) {
                        if (null === n.keepStatic) {
                            n.keepStatic = "auto";
                            for (var t = 0; t < n.mask.length; t++)
                                if (n.mask[t].charAt(0) !== n.mask[0].charAt(0)) {
                                    n.keepStatic = !0;
                                    break
                                }
                        }
                        var i = n.groupmarker[0];
                        return j.each(n.isRTL ? n.mask.reverse() : n.mask, function(e, t) {
                            1 < i.length && (i += n.groupmarker[1] + n.alternatormarker + n.groupmarker[0]),
                            void 0 === t.mask || j.isFunction(t.mask) ? i += t : i += t.mask
                        }),
                        e(i += n.groupmarker[1], n.mask, n)
                    }
                    n.mask = n.mask.pop()
                }
                return null === n.keepStatic && (n.keepStatic = !1),
                n.mask && void 0 !== n.mask.mask && !j.isFunction(n.mask.mask) ? e(n.mask.mask, n.mask, n) : e(n.mask, n.mask, n)
            },
            analyseMask: function(e, r, a) {
                var t, n, i, o, s, l, c = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, u = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, f = !1, d = new g, p = [], h = [], m = !1;
                function g(e, t, n, i) {
                    this.matches = [],
                    this.openGroup = e || !1,
                    this.alternatorGroup = !1,
                    this.isGroup = e || !1,
                    this.isOptional = t || !1,
                    this.isQuantifier = n || !1,
                    this.isAlternator = i || !1,
                    this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }
                function v(n, e, i) {
                    i = void 0 !== i ? i : n.matches.length;
                    var o = n.matches[i - 1];
                    if (r)
                        0 === e.indexOf("[") || f && /\\d|\\s|\\w]/i.test(e) || "." === e ? n.matches.splice(i++, 0, {
                            fn: new RegExp(e,a.casing ? "i" : ""),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== e,
                            casing: null,
                            def: e,
                            placeholder: void 0,
                            nativeDef: e
                        }) : (f && (e = e[e.length - 1]),
                        j.each(e.split(""), function(e, t) {
                            o = n.matches[i - 1],
                            n.matches.splice(i++, 0, {
                                fn: /[a-z]/i.test(a.staticDefinitionSymbol || t) ? new RegExp("[" + (a.staticDefinitionSymbol || t) + "]",a.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                casing: null,
                                def: a.staticDefinitionSymbol || t,
                                placeholder: void 0 !== a.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (f ? "'" : "") + t
                            })
                        })),
                        f = !1;
                    else {
                        var t = (a.definitions ? a.definitions[e] : void 0) || Inputmask.prototype.definitions[e];
                        t && !f ? n.matches.splice(i++, 0, {
                            fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator,a.casing ? "i" : "") : new function() {
                                this.test = t.validator
                            }
                            : new RegExp("."),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== (t.definitionSymbol || e),
                            casing: t.casing,
                            def: t.definitionSymbol || e,
                            placeholder: t.placeholder,
                            nativeDef: e
                        }) : (n.matches.splice(i++, 0, {
                            fn: /[a-z]/i.test(a.staticDefinitionSymbol || e) ? new RegExp("[" + (a.staticDefinitionSymbol || e) + "]",a.casing ? "i" : "") : null,
                            static: !0,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== e && !0 !== o.static,
                            casing: null,
                            def: a.staticDefinitionSymbol || e,
                            placeholder: void 0 !== a.staticDefinitionSymbol ? e : void 0,
                            nativeDef: (f ? "'" : "") + e
                        }),
                        f = !1)
                    }
                }
                function y() {
                    if (0 < p.length) {
                        if (v(o = p[p.length - 1], n),
                        o.isAlternator) {
                            s = p.pop();
                            for (var e = 0; e < s.matches.length; e++)
                                s.matches[e].isGroup && (s.matches[e].isGroup = !1);
                            0 < p.length ? (o = p[p.length - 1]).matches.push(s) : d.matches.push(s)
                        }
                    } else
                        v(d, n)
                }
                function b(e) {
                    var t = new g(!0);
                    return t.openGroup = !1,
                    t.matches = e,
                    t
                }
                function x() {
                    if ((i = p.pop()).openGroup = !1,
                    void 0 !== i)
                        if (0 < p.length) {
                            if ((o = p[p.length - 1]).matches.push(i),
                            o.isAlternator) {
                                s = p.pop();
                                for (var e = 0; e < s.matches.length; e++)
                                    s.matches[e].isGroup = !1,
                                    s.matches[e].alternatorGroup = !1;
                                0 < p.length ? (o = p[p.length - 1]).matches.push(s) : d.matches.push(s)
                            }
                        } else
                            d.matches.push(i);
                    else
                        y()
                }
                function k(e) {
                    var t = e.pop();
                    return t.isQuantifier && (t = b([e.pop(), t])),
                    t
                }
                for (r && (a.optionalmarker[0] = void 0,
                a.optionalmarker[1] = void 0); t = r ? u.exec(e) : c.exec(e); ) {
                    if (n = t[0],
                    r)
                        switch (n.charAt(0)) {
                        case "?":
                            n = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            n = "{" + n + "}";
                            break;
                        case "|":
                            if (0 === p.length) {
                                var _ = b(d.matches);
                                _.openGroup = !0,
                                p.push(_),
                                d.matches = [],
                                m = !0
                            }
                        }
                    if (f)
                        y();
                    else
                        switch (n.charAt(0)) {
                        case "(?=":
                        case "(?!":
                        case "(?<=":
                        case "(?<!":
                            break;
                        case a.escapeChar:
                            f = !0,
                            r && y();
                            break;
                        case a.optionalmarker[1]:
                        case a.groupmarker[1]:
                            x();
                            break;
                        case a.optionalmarker[0]:
                            p.push(new g(!1,!0));
                            break;
                        case a.groupmarker[0]:
                            p.push(new g(!0));
                            break;
                        case a.quantifiermarker[0]:
                            var w = new g(!1,!1,!0)
                              , S = (n = n.replace(/[{}]/g, "")).split("|")
                              , E = S[0].split(",")
                              , C = isNaN(E[0]) ? E[0] : parseInt(E[0])
                              , T = 1 === E.length ? C : isNaN(E[1]) ? E[1] : parseInt(E[1]);
                            "*" !== C && "+" !== C || (C = "*" === T ? 0 : 1),
                            w.quantifier = {
                                min: C,
                                max: T,
                                jit: S[1]
                            };
                            var A = 0 < p.length ? p[p.length - 1].matches : d.matches;
                            if ((t = A.pop()).isAlternator) {
                                A.push(t),
                                A = t.matches;
                                var P = new g(!0)
                                  , D = A.pop();
                                A.push(P),
                                A = P.matches,
                                t = D
                            }
                            t.isGroup || (t = b([t])),
                            A.push(t),
                            A.push(w);
                            break;
                        case a.alternatormarker:
                            if (0 < p.length) {
                                var O = (o = p[p.length - 1]).matches[o.matches.length - 1];
                                l = o.openGroup && (void 0 === O.matches || !1 === O.isGroup && !1 === O.isAlternator) ? p.pop() : k(o.matches)
                            } else
                                l = k(d.matches);
                            if (l.isAlternator)
                                p.push(l);
                            else if (l.alternatorGroup ? (s = p.pop(),
                            l.alternatorGroup = !1) : s = new g(!1,!1,!1,!0),
                            s.matches.push(l),
                            p.push(s),
                            l.openGroup) {
                                var I = new g(!(l.openGroup = !1));
                                I.alternatorGroup = !0,
                                p.push(I)
                            }
                            break;
                        default:
                            y()
                        }
                }
                for (m && x(); 0 < p.length; )
                    i = p.pop(),
                    d.matches.push(i);
                return 0 < d.matches.length && (function i(o) {
                    o && o.matches && j.each(o.matches, function(e, t) {
                        var n = o.matches[e + 1];
                        (void 0 === n || void 0 === n.matches || !1 === n.isQuantifier) && t && t.isGroup && (t.isGroup = !1,
                        r || (v(t, a.groupmarker[0], 0),
                        !0 !== t.openGroup && v(t, a.groupmarker[1]))),
                        i(t)
                    })
                }(d),
                h.push(d)),
                (a.numericInput || a.isRTL) && function e(t) {
                    for (var n in t.matches = t.matches.reverse(),
                    t.matches)
                        if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                            var i = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[i + 1] && t.matches[i + 1].isGroup) {
                                var o = t.matches[n];
                                t.matches.splice(n, 1),
                                t.matches.splice(i + 1, 0, o)
                            }
                            void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((r = t.matches[n]) === a.optionalmarker[0] ? r = a.optionalmarker[1] : r === a.optionalmarker[1] ? r = a.optionalmarker[0] : r === a.groupmarker[0] ? r = a.groupmarker[1] : r === a.groupmarker[1] && (r = a.groupmarker[0]),
                            r)
                        }
                    var r;
                    return t
                }(h[0]),
                h
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        n(6),
        n(8),
        n(9),
        e.exports = n(1)
    }
    , function(e, t, n) {
        "use strict";
        var i = n(1);
        i.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        var r = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        function o(e, t, n, i, o) {
            return e = -1 < n - 1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e,
            -1 < n - 2 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : "00" + e,
            r.test(e)
        }
        i.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: !1
            },
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {
                        validator: o
                    },
                    j: {
                        validator: o
                    },
                    k: {
                        validator: o
                    },
                    l: {
                        validator: o
                    }
                },
                onUnMask: function(e) {
                    return e
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function(e) {
                    return (e = e.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function(e) {
                    return e
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }),
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        function oe(e) {
            return (oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var re = n(2)
          , ae = n(3)
          , se = ae.document
          , i = ae.navigator && ae.navigator.userAgent || ""
          , le = 0 < i.indexOf("MSIE ") || 0 < i.indexOf("Trident/")
          , ce = "ontouchstart"in ae
          , ue = /iemobile/i.test(i)
          , fe = /iphone/i.test(i) && !ue
          , de = n(0);
        e.exports = function e(t, W, U) {
            W = W || this.maskset,
            U = U || this.opts;
            var p, s, y, c = this, u = this.el, b = this.isRTL || (this.isRTL = U.numericInput), l = !1, h = !1, f = !1, m = !1, n = !1, o = void 0;
            function v(e, t, n, i, o) {
                var r = U.greedy;
                o && (U.greedy = !1),
                t = t || 0;
                var a, s, l, c = [], u = 0;
                do {
                    if (!0 === e && W.validPositions[u])
                        s = (l = o && !0 === W.validPositions[u].match.optionality && void 0 === W.validPositions[u + 1] && (!0 === W.validPositions[u].generatedInput || W.validPositions[u].input == U.skipOptionalPartCharacter && 0 < u) ? g(u, _(u, a, u - 1)) : W.validPositions[u]).match,
                        a = l.locator.slice(),
                        c.push(!0 === n ? l.input : !1 === n ? s.nativeDef : $(u, s));
                    else {
                        s = (l = x(u, a, u - 1)).match,
                        a = l.locator.slice();
                        var f = !0 !== i && (!1 !== U.jitMasking ? U.jitMasking : s.jit);
                        (!1 === f || void 0 === f || "number" == typeof f && isFinite(f) && u < f) && c.push(!1 === n ? s.nativeDef : $(u, s))
                    }
                    "auto" === U.keepStatic && s.newBlockMarker && !0 !== s.static && (U.keepStatic = u - 1),
                    u++
                } while ((void 0 === y || u < y) && (!0 !== s.static || "" !== s.def) || u < t);return "" === c[c.length - 1] && c.pop(),
                !1 === n && void 0 !== W.maskLength || (W.maskLength = u - 1),
                U.greedy = r,
                c
            }
            function w(e) {
                !(W.buffer = void 0) !== e && (W.validPositions = {},
                W.p = 0)
            }
            function S(e, t, n) {
                var i = -1
                  , o = -1
                  , r = n || W.validPositions;
                for (var a in void 0 === e && (e = -1),
                r) {
                    var s = parseInt(a);
                    r[s] && (t || !0 !== r[s].generatedInput) && (s <= e && (i = s),
                    e <= s && (o = s))
                }
                return -1 === i || i == e ? o : -1 == o ? i : e - i < o - e ? i : o
            }
            function E(e) {
                var t = e.locator[e.alternation];
                return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]),
                void 0 !== t ? t.toString() : ""
            }
            function d(e, t) {
                var n = (null != e.alternation ? e.mloc[E(e)] : e.locator).join("");
                if ("" !== n)
                    for (; n.length < t; )
                        n += "0";
                return n
            }
            function g(e, t) {
                for (var n, i, o, r = d(C(e = 0 < e ? e - 1 : 0)), a = 0; a < t.length; a++) {
                    var s = t[a];
                    n = d(s, r.length);
                    var l = Math.abs(n - r);
                    (void 0 === i || "" !== n && l < i || o && !U.greedy && o.match.optionality && "master" === o.match.newBlockMarker && (!s.match.optionality || !s.match.newBlockMarker) || o && o.match.optionalQuantifier && !s.match.optionalQuantifier) && (i = l,
                    o = s)
                }
                return o
            }
            function x(e, t, n) {
                return W.validPositions[e] || g(e, _(e, t ? t.slice() : t, n))
            }
            function C(e, t) {
                return W.validPositions[e] ? W.validPositions[e] : (t || _(e))[0]
            }
            function k(e, t, n) {
                for (var i = !1, o = _(e), r = n.shiftPositions ? "def" : "nativeDef", a = 0; a < o.length; a++)
                    if (o[a].match && o[a].match[r] === t.match[r]) {
                        i = !0;
                        break
                    }
                return !1 === i && void 0 !== W.jitOffset[e] && (i = k(e + W.jitOffset[e], t, n)),
                i
            }
            function _(L, e, t) {
                var R, n, i, o, r = W.maskToken, $ = e ? t : 0, a = e ? e.slice() : [0], H = [], B = !1, q = e ? e.join("") : "";
                function z(M, N, e, t) {
                    function F(e, t, n) {
                        function r(n, i) {
                            var o = 0 === re.inArray(n, i.matches);
                            return o || re.each(i.matches, function(e, t) {
                                if (!0 === t.isQuantifier ? o = r(n, i.matches[e - 1]) : Object.prototype.hasOwnProperty.call(t, "matches") && (o = r(n, t)),
                                o)
                                    return !1
                            }),
                            o
                        }
                        function i(e, o, r) {
                            var a, s;
                            if ((W.tests[e] || W.validPositions[e]) && re.each(W.tests[e] || [W.validPositions[e]], function(e, t) {
                                if (t.mloc[o])
                                    return a = t,
                                    !1;
                                var n = void 0 !== r ? r : t.alternation
                                  , i = void 0 !== t.locator[n] ? t.locator[n].toString().indexOf(o) : -1;
                                (void 0 === s || i < s) && -1 !== i && (a = t,
                                s = i)
                            }),
                            a) {
                                var t = a.locator[a.alternation];
                                return (a.mloc[o] || a.mloc[t] || a.locator).slice((void 0 !== r ? r : a.alternation) + 1)
                            }
                            return void 0 !== r ? i(e, o) : void 0
                        }
                        function o(e, t) {
                            function n(e) {
                                for (var t, n = [], i = -1, o = 0, r = e.length; o < r; o++)
                                    if ("-" === e.charAt(o))
                                        for (t = e.charCodeAt(o + 1); ++i < t; )
                                            n.push(String.fromCharCode(i));
                                    else
                                        i = e.charCodeAt(o),
                                        n.push(e.charAt(o));
                                return n.join("")
                            }
                            return e.match.def === t.match.nativeDef || !(!(U.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")))
                        }
                        function a(e, t) {
                            if (void 0 === t || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                                e.mloc = e.mloc || {};
                                var n = e.locator[e.alternation];
                                if (void 0 !== n) {
                                    if ("string" == typeof n && (n = n.split(",")[0]),
                                    void 0 === e.mloc[n] && (e.mloc[n] = e.locator.slice()),
                                    void 0 !== t) {
                                        for (var i in t.mloc)
                                            "string" == typeof i && (i = i.split(",")[0]),
                                            void 0 === e.mloc[i] && (e.mloc[i] = t.mloc[i]);
                                        e.locator[e.alternation] = Object.keys(e.mloc).join(",")
                                    }
                                    return !0
                                }
                                e.alternation = void 0
                            }
                            return !1
                        }
                        if (500 < $ && void 0 !== n)
                            throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + W.mask;
                        if ($ === L && void 0 === e.matches)
                            return H.push({
                                match: e,
                                locator: t.reverse(),
                                cd: q,
                                mloc: {}
                            }),
                            !0;
                        if (void 0 !== e.matches) {
                            if (e.isGroup && n !== e) {
                                if (e = F(M.matches[re.inArray(e, M.matches) + 1], t, n))
                                    return !0
                            } else if (e.isOptional) {
                                var s = e
                                  , l = H.length;
                                if (e = z(e, N, t, n)) {
                                    if (re.each(H, function(e, t) {
                                        l <= e && (t.match.optionality = !0)
                                    }),
                                    R = H[H.length - 1].match,
                                    void 0 !== n || !r(R, s))
                                        return !0;
                                    B = !0,
                                    $ = L
                                }
                            } else if (e.isAlternator) {
                                var c, u = e, f = [], d = H.slice(), p = t.length, h = 0 < N.length ? N.shift() : -1;
                                if (-1 === h || "string" == typeof h) {
                                    var m, g = $, v = N.slice(), y = [];
                                    if ("string" == typeof h)
                                        y = h.split(",");
                                    else
                                        for (m = 0; m < u.matches.length; m++)
                                            y.push(m.toString());
                                    if (void 0 !== W.excludes[L]) {
                                        for (var b = y.slice(), x = 0, k = W.excludes[L].length; x < k; x++)
                                            y.splice(y.indexOf(W.excludes[L][x].toString()), 1);
                                        0 === y.length && (delete W.excludes[L],
                                        y = b)
                                    }
                                    (!0 === U.keepStatic || isFinite(parseInt(U.keepStatic)) && g >= U.keepStatic) && (y = y.slice(0, 1));
                                    for (var _ = !1, w = 0; w < y.length; w++) {
                                        m = parseInt(y[w]),
                                        H = [],
                                        N = "string" == typeof h && i($, m, p) || v.slice(),
                                        u.matches[m] && F(u.matches[m], [m].concat(t), n) ? e = !0 : 0 === w && (_ = !0),
                                        c = H.slice(),
                                        $ = g,
                                        H = [];
                                        for (var S = 0; S < c.length; S++) {
                                            var E = c[S]
                                              , C = !1;
                                            E.match.jit = E.match.jit || _,
                                            E.alternation = E.alternation || p,
                                            a(E);
                                            for (var T = 0; T < f.length; T++) {
                                                var A = f[T];
                                                if ("string" != typeof h || void 0 !== E.alternation && -1 !== re.inArray(E.locator[E.alternation].toString(), y)) {
                                                    if (E.match.nativeDef === A.match.nativeDef) {
                                                        C = !0,
                                                        a(A, E);
                                                        break
                                                    }
                                                    if (o(E, A)) {
                                                        a(E, A) && (C = !0,
                                                        f.splice(f.indexOf(A), 0, E));
                                                        break
                                                    }
                                                    if (o(A, E)) {
                                                        a(A, E);
                                                        break
                                                    }
                                                    if (j = A,
                                                    !0 === (I = E).match.static && !0 !== j.match.static && j.match.fn.test(I.match.def, W, L, !1, U, !1)) {
                                                        a(E, A) && (C = !0,
                                                        f.splice(f.indexOf(A), 0, E));
                                                        break
                                                    }
                                                }
                                            }
                                            C || f.push(E)
                                        }
                                    }
                                    H = d.concat(f),
                                    $ = L,
                                    B = 0 < H.length,
                                    e = 0 < f.length,
                                    N = v.slice()
                                } else
                                    e = F(u.matches[h] || M.matches[h], [h].concat(t), n);
                                if (e)
                                    return !0
                            } else if (e.isQuantifier && n !== M.matches[re.inArray(e, M.matches) - 1])
                                for (var P = e, D = 0 < N.length ? N.shift() : 0; D < (isNaN(P.quantifier.max) ? D + 1 : P.quantifier.max) && $ <= L; D++) {
                                    var O = M.matches[re.inArray(P, M.matches) - 1];
                                    if (e = F(O, [D].concat(t), O)) {
                                        if ((R = H[H.length - 1].match).optionalQuantifier = D >= P.quantifier.min,
                                        R.jit = (D || 1) * O.matches.indexOf(R) >= P.quantifier.jit,
                                        R.optionalQuantifier && r(R, O)) {
                                            B = !0,
                                            $ = L;
                                            break
                                        }
                                        return R.jit && (W.jitOffset[L] = O.matches.length - O.matches.indexOf(R)),
                                        !0
                                    }
                                }
                            else if (e = z(e, N, t, n))
                                return !0
                        } else
                            $++;
                        var I, j
                    }
                    for (var n = 0 < N.length ? N.shift() : 0; n < M.matches.length; n++)
                        if (!0 !== M.matches[n].isQuantifier) {
                            var i = F(M.matches[n], [n].concat(e), t);
                            if (i && $ === L)
                                return i;
                            if (L < $)
                                break
                        }
                }
                if (-1 < L && (void 0 === y || L < y)) {
                    if (void 0 === e) {
                        for (var s, l = L - 1; void 0 === (s = W.validPositions[l] || W.tests[l]) && -1 < l; )
                            l--;
                        void 0 !== s && -1 < l && (n = l,
                        i = s,
                        o = [],
                        re.isArray(i) || (i = [i]),
                        0 < i.length && (void 0 === i[0].alternation || !0 === U.keepStatic ? 0 === (o = g(n, i.slice()).locator.slice()).length && (o = i[0].locator.slice()) : re.each(i, function(e, t) {
                            if ("" !== t.def)
                                if (0 === o.length)
                                    o = t.locator.slice();
                                else
                                    for (var n = 0; n < o.length; n++)
                                        t.locator[n] && -1 === o[n].toString().indexOf(t.locator[n]) && (o[n] += "," + t.locator[n])
                        })),
                        q = (a = o).join(""),
                        $ = l)
                    }
                    if (W.tests[L] && W.tests[L][0].cd === q)
                        return W.tests[L];
                    for (var c = a.shift(); c < r.length; c++) {
                        if (z(r[c], a, [c]) && $ === L || L < $)
                            break
                    }
                }
                return 0 !== H.length && !B || H.push({
                    match: {
                        fn: null,
                        static: !0,
                        optionality: !1,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: q
                }),
                void 0 !== e && W.tests[L] ? re.extend(!0, [], H) : (W.tests[L] = re.extend(!0, [], H),
                W.tests[L])
            }
            function T() {
                return void 0 === W._buffer && (W._buffer = v(!1, 1),
                void 0 === W.buffer && (W.buffer = W._buffer.slice())),
                W._buffer
            }
            function A(e) {
                return void 0 !== W.buffer && !0 !== e || (W.buffer = v(!0, S(), !0),
                void 0 === W._buffer && (W._buffer = W.buffer.slice())),
                W.buffer
            }
            function P(e, t, n) {
                var i, o, r = U.skipOptionalPartCharacter, a = b ? n.slice().reverse() : n;
                if (!(U.skipOptionalPartCharacter = "") === e)
                    w(),
                    W.tests = {},
                    e = 0,
                    t = n.length,
                    o = B({
                        begin: 0,
                        end: 0
                    }, !1);
                else {
                    for (i = e; i < t; i++)
                        delete W.validPositions[i];
                    o = e
                }
                var s = new re.Event("keypress");
                for (i = e; i < t; i++) {
                    s.which = a[i].toString().charCodeAt(0),
                    m = !1;
                    var l = z.keypressEvent.call(u, s, !0, !1, !1, o);
                    !1 !== l && (o = l.forwardPosition)
                }
                U.skipOptionalPartCharacter = r
            }
            function D(e, t, n) {
                for (var i, o = U.greedy ? t : t.slice(0, 1), r = !1, a = void 0 !== n ? n.split(",") : [], s = 0; s < a.length; s++)
                    -1 !== (i = e.indexOf(a[s])) && e.splice(i, 1);
                for (var l = 0; l < e.length; l++)
                    if (-1 !== re.inArray(e[l], o)) {
                        r = !0;
                        break
                    }
                return r
            }
            function O(e, t, n, i, o, r) {
                var a, s, l, c, u, f, d, p, h, m = re.extend(!0, {}, W.validPositions), g = re.extend(!0, {}, W.tests), v = !1, y = !1, b = void 0 !== o ? o : S();
                if (r && (p = r.begin,
                h = r.end,
                r.begin > r.end && (p = r.end,
                h = r.begin)),
                -1 === b && void 0 === o)
                    s = (c = C(a = 0)).alternation;
                else
                    for (; 0 <= b; b--)
                        if ((l = W.validPositions[b]) && void 0 !== l.alternation) {
                            if (c && c.locator[l.alternation] !== l.locator[l.alternation])
                                break;
                            a = b,
                            s = W.validPositions[a].alternation,
                            c = l
                        }
                if (void 0 !== s) {
                    d = parseInt(a),
                    W.excludes[d] = W.excludes[d] || [],
                    !0 !== e && W.excludes[d].push(E(c));
                    var x = []
                      , k = -1;
                    for (u = d; u < S(void 0, !0) + 1; u++)
                        -1 === k && e <= u && void 0 !== t && (x.push(t),
                        k = x.length - 1),
                        (f = W.validPositions[u]) && !0 !== f.generatedInput && (void 0 === r || u < p || h <= u) && x.push(f.input),
                        delete W.validPositions[u];
                    for (-1 === k && void 0 !== t && (x.push(t),
                    k = x.length - 1); void 0 !== W.excludes[d] && W.excludes[d].length < 10; ) {
                        for (W.tests = {},
                        w(!0),
                        v = !0,
                        u = 0; u < x.length && (v = I(v.caret || S(void 0, !0) + 1, x[u], !1, i, !0)); u++)
                            u === k && (y = v),
                            1 == e && v && (y = {
                                caretPos: u
                            });
                        if (v)
                            break;
                        if (w(),
                        c = C(d),
                        W.validPositions = re.extend(!0, {}, m),
                        W.tests = re.extend(!0, {}, g),
                        !W.excludes[d]) {
                            y = O(e, t, n, i, d - 1, r);
                            break
                        }
                        var _ = E(c);
                        if (-1 !== W.excludes[d].indexOf(_)) {
                            y = O(e, t, n, i, d - 1, r);
                            break
                        }
                        for (W.excludes[d].push(_),
                        u = d; u < S(void 0, !0) + 1; u++)
                            delete W.validPositions[u]
                    }
                }
                return y && !1 === U.keepStatic || delete W.excludes[d],
                y
            }
            function I(c, e, t, u, n, i) {
                function f(e) {
                    return b ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1
                }
                t = !0 === t;
                var o = c;
                function d(e) {
                    if (void 0 !== e) {
                        if (void 0 !== e.remove && (re.isArray(e.remove) || (e.remove = [e.remove]),
                        re.each(e.remove.sort(function(e, t) {
                            return t.pos - e.pos
                        }), function(e, t) {
                            M({
                                begin: t,
                                end: t + 1
                            })
                        }),
                        e.remove = void 0),
                        void 0 !== e.insert && (re.isArray(e.insert) || (e.insert = [e.insert]),
                        re.each(e.insert.sort(function(e, t) {
                            return e.pos - t.pos
                        }), function(e, t) {
                            "" !== t.c && I(t.pos, t.c, void 0 === t.strict || t.strict, void 0 !== t.fromIsValid ? t.fromIsValid : u)
                        }),
                        e.insert = void 0),
                        e.refreshFromBuffer && e.buffer) {
                            var t = e.refreshFromBuffer;
                            P(!0 === t ? t : t.start, t.end, e.buffer),
                            e.refreshFromBuffer = void 0
                        }
                        void 0 !== e.rewritePosition && (o = e.rewritePosition,
                        e = !0)
                    }
                    return e
                }
                function r(r, a, s) {
                    var l = !1;
                    return re.each(_(r), function(e, t) {
                        var n = t.match;
                        if (A(!0),
                        !1 !== (l = null != n.fn ? n.fn.test(a, W, r, s, U, f(c)) : (a === n.def || a === U.skipOptionalPartCharacter) && "" !== n.def && {
                            c: $(r, n, !0) || n.def,
                            pos: r
                        })) {
                            var i = void 0 !== l.c ? l.c : a
                              , o = r;
                            return i = i === U.skipOptionalPartCharacter && !0 === n.static ? $(r, n, !0) || n.def : i,
                            !0 !== (l = d(l)) && void 0 !== l.pos && l.pos !== r && (o = l.pos),
                            !0 !== l && void 0 === l.pos && void 0 === l.c || !1 === M(c, re.extend({}, t, {
                                input: function(e, t, n) {
                                    switch (U.casing || t.casing) {
                                    case "upper":
                                        e = e.toUpperCase();
                                        break;
                                    case "lower":
                                        e = e.toLowerCase();
                                        break;
                                    case "title":
                                        var i = W.validPositions[n - 1];
                                        e = 0 === n || i && i.input === String.fromCharCode(de.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                        break;
                                    default:
                                        if (re.isFunction(U.casing)) {
                                            var o = Array.prototype.slice.call(arguments);
                                            o.push(W.validPositions),
                                            e = U.casing.apply(this, o)
                                        }
                                    }
                                    return e
                                }(i, n, o)
                            }), u, o) && (l = !1),
                            !1
                        }
                    }),
                    l
                }
                void 0 !== c.begin && (o = b ? c.end : c.begin);
                var a = !0
                  , s = re.extend(!0, {}, W.validPositions);
                if (!1 === U.keepStatic && void 0 !== W.excludes[o] && !0 !== n && !0 !== u)
                    for (var l = o; l < (b ? c.begin : c.end); l++)
                        void 0 !== W.excludes[l] && (W.excludes[l] = void 0,
                        delete W.tests[l]);
                if (re.isFunction(U.preValidation) && !0 !== u && !0 !== i && (a = d(a = U.preValidation(A(), o, e, f(c), U, W, c, t || n))),
                !0 === a) {
                    if (void 0 === y || o < y) {
                        if (a = r(o, e, t),
                        (!t || !0 === u) && !1 === a && !0 !== i) {
                            var p = W.validPositions[o];
                            if (!p || !0 !== p.match.static || p.match.def !== e && e !== U.skipOptionalPartCharacter) {
                                if (U.insertMode || void 0 === W.validPositions[F(o)] || c.end > o) {
                                    var h = !1;
                                    if (W.jitOffset[o] && void 0 === W.validPositions[F(o)] && (!1 !== (a = I(o + W.jitOffset[o], e, !0)) && (!0 !== n && (a.caret = o),
                                    h = !0)),
                                    c.end > o && (W.validPositions[o] = void 0),
                                    !h && !N(o, !0))
                                        for (var m = o + 1, g = F(o); m <= g; m++)
                                            if (!1 !== (a = r(m, e, t))) {
                                                a = j(o, void 0 !== a.pos ? a.pos : m) || a,
                                                o = m;
                                                break
                                            }
                                }
                            } else
                                a = {
                                    caret: F(o)
                                }
                        }
                    } else
                        a = !1;
                    !1 !== a || !1 !== U.keepStatic && !Y(A()) && 0 !== o || t || !0 === n ? f(c) && W.tests[o] && 1 < W.tests[o].length && !0 === U.keepStatic && !t && !0 !== n && (a = O(!0)) : a = O(o, e, t, u, void 0, c),
                    !0 === a && (a = {
                        pos: o
                    })
                }
                if (re.isFunction(U.postValidation) && !1 !== a && !0 !== u && !0 !== i) {
                    var v = U.postValidation(A(!0), void 0 !== c.begin ? b ? c.end : c.begin : c, a, U, W, t);
                    void 0 !== v && (a = !0 === v ? a : v)
                }
                return a && void 0 === a.pos && (a.pos = o),
                !1 === a || !0 === i ? (w(!0),
                W.validPositions = re.extend(!0, {}, s)) : j(void 0, o, !0),
                d(a)
            }
            function j(e, t, n) {
                if (void 0 === e)
                    for (e = t - 1; 0 < e && !W.validPositions[e]; e--)
                        ;
                for (var i = e; i < t; i++)
                    if (void 0 === W.validPositions[i] && !N(i, !0)) {
                        if (0 == i ? C(i) : W.validPositions[i - 1]) {
                            var o = _(i).slice();
                            "" === o[o.length - 1].match.def && o.pop();
                            var r, a = g(i, o);
                            if (a && (!0 !== a.match.jit || "master" === a.match.newBlockMarker && (r = W.validPositions[i + 1]) && !0 === r.match.optionalQuantifier) && ((a = re.extend({}, a, {
                                input: $(i, a.match, !0) || a.match.def
                            })).generatedInput = !0,
                            M(i, a, !0),
                            !0 !== n))
                                return I(t, W.validPositions[t].input, !(W.validPositions[t] = void 0), !0)
                        }
                    }
            }
            function M(e, t, n, i) {
                function o(e, t, n) {
                    var i = t[e];
                    if (void 0 === i || !0 !== i.match.static || !0 === i.match.optionality || void 0 !== t[0] && void 0 !== t[0].alternation)
                        return !1;
                    var o = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1]
                      , r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                    return o && r
                }
                var r = 0
                  , a = void 0 !== e.begin ? e.begin : e
                  , s = void 0 !== e.end ? e.end : e;
                if (e.begin > e.end && (a = e.end,
                s = e.begin),
                void 0 === t && !1 === U.insertMode && s < W.maskLength && (0 === a && 0 === s || (a += 1,
                s += 1)),
                i = void 0 !== i ? i : a,
                a !== s || U.insertMode && void 0 !== W.validPositions[i] && void 0 === n || void 0 === t) {
                    var l, c = re.extend(!0, {}, W.validPositions), u = void 0 === t && !1 === U.insertMode ? 1 < s ? s - 1 : s : S(void 0, !0);
                    for (W.p = a,
                    l = u; a <= l; l--)
                        delete W.validPositions[l],
                        void 0 === t && delete W.tests[l + 1];
                    var f, d = !0, p = i, h = p;
                    if (l = p,
                    t && (W.validPositions[i] = re.extend(!0, {}, t),
                    h++,
                    p++,
                    a < s && l++),
                    t || U.insertMode)
                        for (; l <= u; l++) {
                            if (void 0 !== (f = c[l]) && !0 !== f.generatedInput && (s <= l || a <= l && o(l, c, {
                                begin: a,
                                end: s
                            }))) {
                                for (; "" !== C(h).match.def; ) {
                                    if (k(h, f, U) || "+" === f.match.def) {
                                        "+" === f.match.def && A(!0);
                                        var m = I(h, f.input, "+" !== f.match.def, "+" !== f.match.def);
                                        if (d = !1 !== m,
                                        p = (m.pos || h) + 1,
                                        !d)
                                            break
                                    } else
                                        d = !1;
                                    if (d) {
                                        void 0 === t && f.match.static && l === e.begin && r++;
                                        break
                                    }
                                    if (!d && h > W.maskLength)
                                        break;
                                    h++
                                }
                                "" == C(h).match.def && (d = !1),
                                h = p
                            }
                            if (!d)
                                break
                        }
                    if (!d)
                        return W.validPositions = re.extend(!0, {}, c),
                        w(!0),
                        !1
                } else
                    t && (W.validPositions[i] = re.extend(!0, {}, t));
                return w(!0),
                r
            }
            function N(e, t, n) {
                var i = x(e).match;
                if ("" === i.def && (i = C(e).match),
                !0 !== i.static)
                    return i.fn;
                if (!0 === n && void 0 !== W.validPositions[e] && !0 !== W.validPositions[e].generatedInput)
                    return !0;
                if (!0 !== t && -1 < e) {
                    var o = _(e);
                    return o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)
                }
                return !1
            }
            function F(e, t) {
                for (var n = e + 1; "" !== C(n).match.def && (!0 === t && (!0 !== C(n).match.newBlockMarker || !N(n, void 0, !0)) || !0 !== t && !N(n, void 0, !0)); )
                    n++;
                return n
            }
            function L(e, t) {
                var n, i = e;
                if (i <= 0)
                    return 0;
                for (; 0 < --i && (!0 === t && !0 !== C(i).match.newBlockMarker || !0 !== t && !N(i, void 0, !0) && ((n = _(i)).length < 2 || 2 === n.length && "" === n[1].match.def)); )
                    ;
                return i
            }
            function R(e, t, n, i, o) {
                if (i && re.isFunction(U.onBeforeWrite)) {
                    var r = U.onBeforeWrite.call(c, i, t, n, U);
                    if (r) {
                        if (r.refreshFromBuffer) {
                            var a = r.refreshFromBuffer;
                            P(!0 === a ? a : a.start, a.end, r.buffer || t),
                            t = A(!0)
                        }
                        void 0 !== n && (n = void 0 !== r.caret ? r.caret : n)
                    }
                }
                if (void 0 !== e && (e.inputmask._valueSet(t.join("")),
                void 0 === n || void 0 !== i && "blur" === i.type || K(e, n),
                !0 === o)) {
                    var s = re(e)
                      , l = e.inputmask._valueGet();
                    h = !0,
                    s.trigger("input"),
                    setTimeout(function() {
                        l === T().join("") ? s.trigger("cleared") : !0 === Y(t) && s.trigger("complete")
                    }, 0)
                }
            }
            function $(e, t, n) {
                if (void 0 !== (t = t || C(e).match).placeholder || !0 === n)
                    return re.isFunction(t.placeholder) ? t.placeholder(U) : t.placeholder;
                if (!0 !== t.static)
                    return U.placeholder.charAt(e % U.placeholder.length);
                if (-1 < e && void 0 === W.validPositions[e]) {
                    var i, o = _(e), r = [];
                    if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                        for (var a = 0; a < o.length; a++)
                            if (!0 !== o[a].match.optionality && !0 !== o[a].match.optionalQuantifier && (!0 === o[a].match.static || void 0 === i || !1 !== o[a].match.fn.test(i.match.def, W, e, !0, U)) && (r.push(o[a]),
                            !0 === o[a].match.static && (i = o[a]),
                            1 < r.length && /[0-9a-bA-Z]/.test(r[0].match.def)))
                                return U.placeholder.charAt(e % U.placeholder.length)
                }
                return t.def
            }
            function H(e, t) {
                if (le) {
                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                        var n = A().slice()
                          , i = e.inputmask._valueGet();
                        if (i !== t) {
                            var o = S();
                            -1 === o && i === T().join("") ? n = [] : -1 !== o && Q(n),
                            R(e, n)
                        }
                    }
                } else
                    e.placeholder !== t && (e.placeholder = t,
                    "" === e.placeholder && e.removeAttribute("placeholder"))
            }
            function B(e, t) {
                if (t && (b ? e.end = e.begin : e.begin = e.end),
                e.begin === e.end)
                    switch (U.positionCaretOnClick) {
                    case "none":
                        break;
                    case "select":
                        return {
                            begin: 0,
                            end: A().length
                        };
                    case "ignore":
                        return F(S());
                    case "radixFocus":
                        if (function(e) {
                            if ("" !== U.radixPoint && 0 !== U.digits) {
                                var t = W.validPositions;
                                if (void 0 === t[e] || t[e].input === $(e)) {
                                    if (e < F(-1))
                                        return !0;
                                    var n = re.inArray(U.radixPoint, A());
                                    if (-1 !== n) {
                                        for (var i in t)
                                            if (t[i] && n < i && t[i].input !== $(i))
                                                return !1;
                                        return !0
                                    }
                                }
                            }
                            return !1
                        }(e.begin)) {
                            var n = A().join("").indexOf(U.radixPoint);
                            return U.numericInput ? F(n) : n
                        }
                    default:
                        var i = e.begin
                          , o = S(i, !0)
                          , r = F(-1 !== o || N(0) ? o : 0);
                        if (i < r)
                            return N(i, !0) || N(i - 1, !0) ? i : F(i);
                        var a = W.validPositions[o]
                          , s = x(r, a ? a.match.locator : void 0, a)
                          , l = $(r, s.match);
                        if ("" !== l && A()[r] !== l && !0 !== s.match.optionalQuantifier && !0 !== s.match.newBlockMarker || !N(r, U.keepStatic) && s.match.def === l) {
                            var c = F(r);
                            (c <= i || i === r) && (r = c)
                        }
                        return r
                    }
            }
            var i, q = {
                on: function(r, e, a) {
                    function t(e) {
                        e.originalEvent && (e = e.originalEvent || e,
                        arguments[0] = e);
                        var t, n = this;
                        if (void 0 === n.inputmask && "FORM" !== this.nodeName) {
                            var i = re.data(n, "_inputmask_opts");
                            i ? new Inputmask(i).mask(n) : q.off(n)
                        } else {
                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(n.disabled || n.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === U.tabThrough && e.keyCode === de.TAB))) {
                                switch (e.type) {
                                case "input":
                                    if (!0 === h || e.inputType && "insertCompositionText" === e.inputType)
                                        return h = !1,
                                        e.preventDefault();
                                    if (ce)
                                        return t = arguments,
                                        setTimeout(function() {
                                            a.apply(n, t),
                                            K(n, n.inputmask.caretPos, void 0, !0)
                                        }, 0),
                                        !1;
                                    break;
                                case "keydown":
                                    h = l = !1;
                                    break;
                                case "keypress":
                                    if (!0 === l)
                                        return e.preventDefault();
                                    l = !0;
                                    break;
                                case "click":
                                case "focus":
                                    return f ? (f = !1,
                                    r.blur(),
                                    H(r, (b ? T().slice().reverse() : T()).join("")),
                                    setTimeout(function() {
                                        r.focus()
                                    }, 3e3)) : (t = arguments,
                                    setTimeout(function() {
                                        a.apply(n, t)
                                    }, 0)),
                                    !1
                                }
                                var o = a.apply(n, arguments);
                                return !1 === o && (e.preventDefault(),
                                e.stopPropagation()),
                                o
                            }
                            e.preventDefault()
                        }
                    }
                    r.inputmask.events[e] = r.inputmask.events[e] || [],
                    r.inputmask.events[e].push(t),
                    -1 !== re.inArray(e, ["submit", "reset"]) ? null !== r.form && re(r.form).on(e, t) : re(r).on(e, t)
                },
                off: function(i, e) {
                    var t;
                    i.inputmask && i.inputmask.events && (e ? (t = [])[e] = i.inputmask.events[e] : t = i.inputmask.events,
                    re.each(t, function(e, t) {
                        for (; 0 < t.length; ) {
                            var n = t.pop();
                            -1 !== re.inArray(e, ["submit", "reset"]) ? null !== i.form && re(i.form).off(e, n) : re(i).off(e, n)
                        }
                        delete i.inputmask.events[e]
                    }))
                }
            }, z = {
                keydownEvent: function(e) {
                    var t = this
                      , n = re(t)
                      , i = e.keyCode
                      , o = K(t)
                      , r = U.onKeyDown.call(this, e, A(), o, U);
                    if (void 0 !== r)
                        return r;
                    if (i === de.BACKSPACE || i === de.DELETE || fe && i === de.BACKSPACE_SAFARI || e.ctrlKey && i === de.X && !("oncut"in t))
                        e.preventDefault(),
                        X(t, i, o),
                        R(t, A(!0), W.p, e, t.inputmask._valueGet() !== A().join(""));
                    else if (i === de.END || i === de.PAGE_DOWN) {
                        e.preventDefault();
                        var a = F(S());
                        K(t, e.shiftKey ? o.begin : a, a, !0)
                    } else
                        i === de.HOME && !e.shiftKey || i === de.PAGE_UP ? (e.preventDefault(),
                        K(t, 0, e.shiftKey ? o.begin : 0, !0)) : (U.undoOnEscape && i === de.ESCAPE || 90 === i && e.ctrlKey) && !0 !== e.altKey ? (V(t, !0, !1, p.split("")),
                        n.trigger("click")) : !0 === U.tabThrough && i === de.TAB ? (!0 === e.shiftKey ? (!0 === C(o.begin).match.static && (o.begin = F(o.begin)),
                        o.end = L(o.begin, !0),
                        o.begin = L(o.end, !0)) : (o.begin = F(o.begin, !0),
                        o.end = F(o.begin, !0),
                        o.end < W.maskLength && o.end--),
                        o.begin < W.maskLength && (e.preventDefault(),
                        K(t, o.begin, o.end))) : e.shiftKey || !1 === U.insertMode && (i === de.RIGHT ? setTimeout(function() {
                            var e = K(t);
                            K(t, e.begin)
                        }, 0) : i === de.LEFT && setTimeout(function() {
                            var e = G(t.inputmask.caretPos.begin);
                            G(t.inputmask.caretPos.end);
                            K(t, b ? e + (e === W.maskLength ? 0 : 1) : e - (0 === e ? 0 : 1))
                        }, 0));
                    m = -1 !== re.inArray(i, U.ignorables)
                },
                keypressEvent: function(e, t, n, i, o) {
                    var r = this
                      , a = re(r)
                      , s = e.which || e.charCode || e.keyCode;
                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || m))
                        return s === de.ENTER && p !== A().join("") && (p = A().join(""),
                        setTimeout(function() {
                            a.trigger("change")
                        }, 0)),
                        h = !0;
                    if (s) {
                        46 === s && !1 === e.shiftKey && "" !== U.radixPoint && (s = U.radixPoint.charCodeAt(0));
                        var l, c = t ? {
                            begin: o,
                            end: o
                        } : K(r), u = String.fromCharCode(s);
                        W.writeOutBuffer = !0;
                        var f = I(c, u, i);
                        if (!1 !== f && (w(!0),
                        l = void 0 !== f.caret ? f.caret : F(f.pos.begin ? f.pos.begin : f.pos),
                        W.p = l),
                        l = U.numericInput && void 0 === f.caret ? L(l) : l,
                        !1 !== n && (setTimeout(function() {
                            U.onKeyValidation.call(r, s, f, U)
                        }, 0),
                        W.writeOutBuffer && !1 !== f)) {
                            var d = A();
                            R(r, d, l, e, !0 !== t)
                        }
                        if (e.preventDefault(),
                        t)
                            return !1 !== f && (f.forwardPosition = l),
                            f
                    }
                },
                pasteEvent: function(e) {
                    var t, n = this.inputmask._valueGet(!0), i = K(this);
                    b && (t = i.end,
                    i.end = i.begin,
                    i.begin = t);
                    var o = n.substr(0, i.begin)
                      , r = n.substr(i.end, n.length);
                    if (o == (b ? T().slice().reverse() : T()).slice(0, i.begin).join("") && (o = ""),
                    r == (b ? T().slice().reverse() : T()).slice(i.end).join("") && (r = ""),
                    ae.clipboardData && ae.clipboardData.getData)
                        n = o + ae.clipboardData.getData("Text") + r;
                    else {
                        if (!e.clipboardData || !e.clipboardData.getData)
                            return !0;
                        n = o + e.clipboardData.getData("text/plain") + r
                    }
                    var a = n;
                    if (re.isFunction(U.onBeforePaste)) {
                        if (!1 === (a = U.onBeforePaste.call(c, n, U)))
                            return e.preventDefault();
                        a = a || n
                    }
                    return V(this, !1, !1, a.toString().split("")),
                    R(this, A(), F(S()), e, p !== A().join("")),
                    e.preventDefault()
                },
                inputFallBackEvent: function(e) {
                    var i = this
                      , t = i.inputmask._valueGet(!0)
                      , n = (b ? A().slice().reverse() : A()).join("")
                      , o = K(i, void 0, void 0, !0);
                    if (n !== t) {
                        var r = function(e, t, n) {
                            for (var i, o, r, a = e.substr(0, n.begin).split(""), s = e.substr(n.begin).split(""), l = t.substr(0, n.begin).split(""), c = t.substr(n.begin).split(""), u = a.length >= l.length ? a.length : l.length, f = s.length >= c.length ? s.length : c.length, d = "", p = []; a.length < u; )
                                a.push("~");
                            for (; l.length < u; )
                                l.push("~");
                            for (; s.length < f; )
                                s.unshift("~");
                            for (; c.length < f; )
                                c.unshift("~");
                            var h = a.concat(s)
                              , m = l.concat(c);
                            for (o = 0,
                            i = h.length; o < i; o++)
                                switch (r = $(G(o)),
                                d) {
                                case "insertText":
                                    o = i;
                                    break;
                                case "insertReplacementText":
                                case "deleteContentBackward":
                                    "~" === h[o] ? n.end++ : o = i;
                                    break;
                                default:
                                    h[o] !== m[o] && (m[o] === r && "~" === m[o + 1] || "~" === m[o] ? (d = "insertText",
                                    p.push(h[o]),
                                    n.begin--,
                                    n.end--) : "~" === m[o + 1] && m[o] === h[o + 1] ? (d = "insertText",
                                    p.push(h[o]),
                                    n.begin--,
                                    n.end--) : h[o] !== r && "~" !== h[o] && ("~" === h[o + 1] || m[o] !== h[o] && m[o + 1] === h[o + 1]) ? (d = "insertReplacementText",
                                    p.push(h[o]),
                                    n.begin--) : "~" === h[o] ? (d = "deleteContentBackward",
                                    N(G(o), !0) && n.end++) : o = i)
                                }
                            return {
                                action: d,
                                data: p,
                                caret: n
                            }
                        }(t = function(e, t) {
                            if (ue) {
                                var n = e.replace(A().join(""), "");
                                if (1 === n.length) {
                                    var i = e.split("");
                                    i.splice(t.begin, 0, n),
                                    e = i.join("")
                                }
                            }
                            return e
                        }(t, o), n, o);
                        switch (se.activeElement !== i && i.focus(),
                        R(i, A()),
                        K(i, o.begin, o.end, !0),
                        r.action) {
                        case "insertText":
                        case "insertReplacementText":
                            re.each(r.data, function(e, t) {
                                var n = new re.Event("keypress");
                                n.which = t.charCodeAt(0),
                                m = !1,
                                z.keypressEvent.call(i, n)
                            }),
                            setTimeout(function() {
                                s.trigger("keyup")
                            }, 0);
                            break;
                        case "deleteContentBackward":
                            var a = new re.Event("keydown");
                            a.keyCode = de.BACKSPACE,
                            z.keydownEvent.call(i, a);
                            break;
                        default:
                            Z(i, t)
                        }
                        e.preventDefault()
                    }
                },
                compositionendEvent: function() {
                    s.trigger("input")
                },
                setValueEvent: function(e, t, n) {
                    var i = e && e.detail ? e.detail[0] : t;
                    void 0 === i && (i = this.inputmask._valueGet(!0)),
                    Z(this, i),
                    (e.detail && void 0 !== e.detail[1] || void 0 !== n) && K(this, e.detail ? e.detail[1] : n)
                },
                focusEvent: function(e) {
                    var t = this.inputmask._valueGet();
                    U.showMaskOnFocus && t !== A().join("") && R(this, A(), F(S())),
                    !0 !== U.positionCaretOnTab || !1 !== n || Y(A()) && -1 !== S() || z.clickEvent.apply(this, [e, !0]),
                    p = A().join("")
                },
                invalidEvent: function() {
                    f = !0
                },
                mouseleaveEvent: function() {
                    n = !1,
                    U.clearMaskOnLostFocus && se.activeElement !== this && H(this, o)
                },
                clickEvent: function(e, t) {
                    if (se.activeElement === this) {
                        var n = B(K(this), t);
                        void 0 !== n && K(this, n)
                    }
                },
                cutEvent: function(e) {
                    var t = K(this)
                      , n = ae.clipboardData || e.clipboardData
                      , i = b ? A().slice(t.end, t.begin) : A().slice(t.begin, t.end);
                    n.setData("text", b ? i.reverse().join("") : i.join("")),
                    se.execCommand && se.execCommand("copy"),
                    X(this, de.DELETE, t),
                    R(this, A(), W.p, e, p !== A().join(""))
                },
                blurEvent: function(e) {
                    var t = re(this);
                    if (this.inputmask) {
                        H(this, o);
                        var n = this.inputmask._valueGet()
                          , i = A().slice();
                        "" !== n && (U.clearMaskOnLostFocus && (-1 === S() && n === T().join("") ? i = [] : Q(i)),
                        !1 === Y(i) && (setTimeout(function() {
                            t.trigger("incomplete")
                        }, 0),
                        U.clearIncomplete && (w(),
                        i = U.clearMaskOnLostFocus ? [] : T().slice())),
                        R(this, i, void 0, e)),
                        p !== A().join("") && (p = A().join(""),
                        t.trigger("change"))
                    }
                },
                mouseenterEvent: function() {
                    n = !0,
                    se.activeElement !== this && (null == o && this.placeholder !== o && (o = this.placeholder),
                    U.showMaskOnHover && H(this, (b ? T().slice().reverse() : T()).join("")))
                },
                submitEvent: function() {
                    p !== A().join("") && s.trigger("change"),
                    U.clearMaskOnLostFocus && -1 === S() && u.inputmask._valueGet && u.inputmask._valueGet() === T().join("") && u.inputmask._valueSet(""),
                    U.clearIncomplete && !1 === Y(A()) && u.inputmask._valueSet(""),
                    U.removeMaskOnSubmit && (u.inputmask._valueSet(u.inputmask.unmaskedvalue(), !0),
                    setTimeout(function() {
                        R(u, A())
                    }, 0))
                },
                resetEvent: function() {
                    u.inputmask.refreshValue = !0,
                    setTimeout(function() {
                        Z(u, u.inputmask._valueGet(!0))
                    }, 0)
                }
            };
            function V(o, e, r, t, n) {
                var a = this || o.inputmask
                  , s = t.slice()
                  , l = ""
                  , c = -1
                  , u = void 0;
                w(),
                W.tests = {},
                c = U.radixPoint ? B(0) : 0,
                W.p = c,
                a.caretPos = {
                    begin: c
                };
                var i, f, d, p = [], h = a.caretPos;
                if (re.each(s, function(e, t) {
                    if (void 0 !== t)
                        if (void 0 === W.validPositions[e] && s[e] === $(e) && N(e, !0) && !1 === I(e, s[e], !0, void 0, void 0, !0))
                            W.p++;
                        else {
                            var n = new re.Event("_checkval");
                            n.which = t.toString().charCodeAt(0),
                            l += t;
                            var i = S(void 0, !0);
                            !function(e, t) {
                                if (U.regex)
                                    return !1;
                                for (var n = v(!0, 0, !1).slice(e, F(e)).join("").replace(/'/g, ""), i = n.indexOf(t); 0 < i && " " === n[i - 1]; )
                                    i--;
                                var o = 0 === i && !N(e) && (C(e).match.nativeDef === t.charAt(0) || !0 === C(e).match.static && C(e).match.nativeDef === "'" + t.charAt(0) || " " === C(e).match.nativeDef && (C(e + 1).match.nativeDef === t.charAt(0) || !0 === C(e + 1).match.static && C(e + 1).match.nativeDef === "'" + t.charAt(0)));
                                return !o && 0 < i && (a.caretPos = {
                                    begin: F(i)
                                }),
                                o
                            }(c, l) ? (u = z.keypressEvent.call(o, n, !0, !1, r, a.caretPos.begin)) && (c = a.caretPos.begin + 1,
                            l = "") : u = z.keypressEvent.call(o, n, !0, !1, r, i + 1),
                            u ? (void 0 !== u.pos && W.validPositions[u.pos] && !0 === W.validPositions[u.pos].match.static && (p.push(u.pos),
                            b || (u.forwardPosition = u.pos + 1)),
                            R(void 0, A(), u.forwardPosition, n, !1),
                            a.caretPos = {
                                begin: u.forwardPosition,
                                end: u.forwardPosition
                            },
                            h = a.caretPos) : a.caretPos = h
                        }
                }),
                0 < p.length)
                    if (!Y(A()) || p.length < F(0)) {
                        for (; void 0 !== (i = p.pop()); )
                            if (i !== p.length) {
                                var m = new re.Event("_checkval")
                                  , g = i + 1;
                                for ((f = W.validPositions[i]).generatedInput = !0,
                                m.which = f.input.charCodeAt(0); (d = W.validPositions[g]) && d.input === f.input; )
                                    g++;
                                (u = z.keypressEvent.call(o, m, !0, !1, r, g)) && void 0 !== u.pos && u.pos !== i && W.validPositions[u.pos] && !0 === W.validPositions[u.pos].match.static && p.push(u.pos)
                            }
                    } else
                        for (; i = p.pop(); )
                            (f = W.validPositions[i]) && (f.generatedInput = !0);
                e && R(o, A(), u ? u.forwardPosition : void 0, n || new re.Event("checkval"), n && "input" === n.type)
            }
            function r(e) {
                if (e) {
                    if (void 0 === e.inputmask)
                        return e.value;
                    e.inputmask && e.inputmask.refreshValue && Z(e, e.inputmask._valueGet(!0))
                }
                var t = []
                  , n = W.validPositions;
                for (var i in n)
                    n[i] && n[i].match && 1 != n[i].match.static && t.push(n[i].input);
                var o = 0 === t.length ? "" : (b ? t.reverse() : t).join("");
                if (re.isFunction(U.onUnMask)) {
                    var r = (b ? A().slice().reverse() : A()).join("");
                    o = U.onUnMask.call(c, r, o, U)
                }
                return o
            }
            function G(e) {
                return !b || "number" != typeof e || U.greedy && "" === U.placeholder || !u || (e = u.inputmask._valueGet().length - e),
                e
            }
            function K(e, t, n, i) {
                var o;
                if (void 0 === t)
                    return "selectionStart"in e && "selectionEnd"in e ? (t = e.selectionStart,
                    n = e.selectionEnd) : ae.getSelection ? (o = ae.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset,
                    n = o.endOffset) : se.selection && se.selection.createRange && (n = (t = 0 - (o = se.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length),
                    !1 === U.insertMode && t === n - 1 && n--,
                    {
                        begin: i ? t : G(t),
                        end: i ? n : G(n)
                    };
                if (re.isArray(t) && (n = b ? t[0] : t[1],
                t = b ? t[1] : t[0]),
                void 0 !== t.begin && (n = b ? t.begin : t.end,
                t = b ? t.end : t.begin),
                "number" == typeof t) {
                    t = i ? t : G(t),
                    n = "number" == typeof (n = i ? n : G(n)) ? n : t;
                    var r = parseInt(((e.ownerDocument.defaultView || ae).getComputedStyle ? (e.ownerDocument.defaultView || ae).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                    if (e.scrollLeft = r > e.scrollWidth ? r : 0,
                    !(e.inputmask.caretPos = {
                        begin: t,
                        end: n
                    }) === U.insertMode && t === n && n++,
                    e === se.activeElement)
                        if ("setSelectionRange"in e)
                            e.setSelectionRange(t, n);
                        else if (ae.getSelection) {
                            if (o = se.createRange(),
                            void 0 === e.firstChild || null === e.firstChild) {
                                var a = se.createTextNode("");
                                e.appendChild(a)
                            }
                            o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length),
                            o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length),
                            o.collapse(!0);
                            var s = ae.getSelection();
                            s.removeAllRanges(),
                            s.addRange(o)
                        } else
                            e.createTextRange && ((o = e.createTextRange()).collapse(!0),
                            o.moveEnd("character", n),
                            o.moveStart("character", t),
                            o.select())
                }
            }
            function a(e) {
                var t, n, i = v(!0, S(), !0, !0), o = i.length, r = S(), a = {}, s = W.validPositions[r], l = void 0 !== s ? s.locator.slice() : void 0;
                for (t = r + 1; t < i.length; t++)
                    l = (n = x(t, l, t - 1)).locator.slice(),
                    a[t] = re.extend(!0, {}, n);
                var c = s && void 0 !== s.alternation ? s.locator[s.alternation] : void 0;
                for (t = o - 1; r < t && (((n = a[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || c && (c !== a[t].locator[s.alternation] && 1 != n.match.static || !0 === n.match.static && n.locator[s.alternation] && D(n.locator[s.alternation].toString().split(","), c.toString().split(",")) && "" !== _(t)[0].def)) && i[t] === $(t, n.match)); t--)
                    o--;
                return e ? {
                    l: o,
                    def: a[o] ? a[o].match : void 0
                } : o
            }
            function Q(e) {
                for (var t, n = v(!(e.length = 0), 0, !0, void 0, !0); void 0 !== (t = n.shift()); )
                    e.push(t);
                return e
            }
            function Y(e) {
                if (re.isFunction(U.isComplete))
                    return U.isComplete(e, U);
                if ("*" !== U.repeat) {
                    var t = !1
                      , n = a(!0)
                      , i = L(n.l);
                    if (void 0 === n.def || n.def.newBlockMarker || n.def.optionality || n.def.optionalQuantifier) {
                        t = !0;
                        for (var o = 0; o <= i; o++) {
                            var r = x(o).match;
                            if (!0 !== r.static && void 0 === W.validPositions[o] && !0 !== r.optionality && !0 !== r.optionalQuantifier || !0 === r.static && e[o] !== $(o, r)) {
                                t = !1;
                                break
                            }
                        }
                    }
                    return t
                }
            }
            function X(e, t, n, i) {
                if ((U.numericInput || b) && (t === de.BACKSPACE ? t = de.DELETE : t === de.DELETE && (t = de.BACKSPACE),
                b)) {
                    var o = n.end;
                    n.end = n.begin,
                    n.begin = o
                }
                var r;
                if (t === de.BACKSPACE || t === de.DELETE && !1 === U.insertMode ? n.end - n.begin < 1 && (n.begin = L(n.begin),
                void 0 !== W.validPositions[n.begin] && W.validPositions[n.begin].input === U.groupSeparator && n.begin--) : t === de.DELETE && n.begin === n.end && (n.end = N(n.end, !0, !0) ? n.end + 1 : F(n.end) + 1,
                void 0 !== W.validPositions[n.begin] && W.validPositions[n.begin].input === U.groupSeparator && n.end++),
                !1 !== (r = M(n))) {
                    if (!0 !== i && !1 !== U.keepStatic || null !== U.regex && -1 !== C(n.begin).match.def.indexOf("|")) {
                        var a = O(!0);
                        if (a) {
                            var s = void 0 !== a.caret ? a.caret : a.pos ? F(a.pos.begin ? a.pos.begin : a.pos) : S(-1, !0);
                            (t !== de.DELETE || n.begin > s) && n.begin
                        }
                    }
                    var l = S(n.end, !0);
                    l < n.begin ? W.p = !1 === U.insertMode ? L(l + 1) : F(l) : !0 !== i && (W.p = t === de.DELETE ? n.begin + r : n.begin,
                    !1 === U.insertMode && t === de.DELETE && (W.p = n.end + 1,
                    void 0 === W.validPositions[W.p] && S(W.maskLength, !0) < W.p && (W.p = L(l + 1))))
                }
            }
            function Z(e, t) {
                e.inputmask.refreshValue = !1,
                re.isFunction(U.onBeforeMask) && (t = U.onBeforeMask.call(c, t, U) || t),
                V(e, !0, !1, t = t.toString().split("")),
                p = A().join(""),
                (U.clearMaskOnLostFocus || U.clearIncomplete) && e.inputmask._valueGet() === T().join("") && -1 === S() && e.inputmask._valueSet("")
            }
            if (void 0 !== t)
                switch (t.action) {
                case "isComplete":
                    return u = t.el,
                    Y(A());
                case "unmaskedvalue":
                    return void 0 !== u && void 0 === t.value || (i = t.value,
                    i = (re.isFunction(U.onBeforeMask) && U.onBeforeMask.call(c, i, U) || i).split(""),
                    V.call(this, void 0, !1, !1, i),
                    re.isFunction(U.onBeforeWrite) && U.onBeforeWrite.call(c, void 0, A(), 0, U)),
                    r(u);
                case "mask":
                    !function(e) {
                        q.off(e);
                        var t = function(e, s) {
                            "textarea" !== e.tagName.toLowerCase() && s.ignorables.push(de.ENTER);
                            var t = e.getAttribute("type")
                              , n = "input" === e.tagName.toLowerCase() && -1 !== re.inArray(t, s.supportsInputType) || e.isContentEditable || "textarea" === e.tagName.toLowerCase();
                            if (!n)
                                if ("input" === e.tagName.toLowerCase()) {
                                    var i = se.createElement("input");
                                    i.setAttribute("type", t),
                                    n = "text" === i.type,
                                    i = null
                                } else
                                    n = "partial";
                            return !1 !== n ? function(e) {
                                var t, n, i;
                                function o() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== S() || !0 !== s.nullable ? se.activeElement === this && s.clearMaskOnLostFocus ? (b ? Q(A().slice()).reverse() : Q(A().slice())).join("") : t.call(this) : "" : t.call(this)
                                }
                                function r(e) {
                                    n.call(this, e),
                                    this.inputmask && Z(this, e)
                                }
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== s.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === oe("test".__proto__) ? function(e) {
                                                return e.__proto__
                                            }
                                            : function(e) {
                                                return e.constructor.prototype
                                            }
                                            );
                                            var a = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : void 0;
                                            a && a.get && a.set ? (t = a.get,
                                            n = a.set,
                                            Object.defineProperty(e, "value", {
                                                get: o,
                                                set: r,
                                                configurable: !0
                                            })) : "input" !== e.tagName.toLowerCase() && (t = function() {
                                                return this.textContent
                                            }
                                            ,
                                            n = function(e) {
                                                this.textContent = e
                                            }
                                            ,
                                            Object.defineProperty(e, "value", {
                                                get: o,
                                                set: r,
                                                configurable: !0
                                            }))
                                        } else
                                            se.__lookupGetter__ && e.__lookupGetter__("value") && (t = e.__lookupGetter__("value"),
                                            n = e.__lookupSetter__("value"),
                                            e.__defineGetter__("value", o),
                                            e.__defineSetter__("value", r));
                                        e.inputmask.__valueGet = t,
                                        e.inputmask.__valueSet = n
                                    }
                                    e.inputmask._valueGet = function(e) {
                                        return b && !0 !== e ? t.call(this.el).split("").reverse().join("") : t.call(this.el)
                                    }
                                    ,
                                    e.inputmask._valueSet = function(e, t) {
                                        n.call(this.el, null == e ? "" : !0 !== t && b ? e.split("").reverse().join("") : e)
                                    }
                                    ,
                                    void 0 === t && (t = function() {
                                        return this.value
                                    }
                                    ,
                                    n = function(e) {
                                        this.value = e
                                    }
                                    ,
                                    function(e) {
                                        if (re.valHooks && (void 0 === re.valHooks[e] || !0 !== re.valHooks[e].inputmaskpatch)) {
                                            var n = re.valHooks[e] && re.valHooks[e].get ? re.valHooks[e].get : function(e) {
                                                return e.value
                                            }
                                              , i = re.valHooks[e] && re.valHooks[e].set ? re.valHooks[e].set : function(e, t) {
                                                return e.value = t,
                                                e
                                            }
                                            ;
                                            re.valHooks[e] = {
                                                get: function(e) {
                                                    if (e.inputmask) {
                                                        if (e.inputmask.opts.autoUnmask)
                                                            return e.inputmask.unmaskedvalue();
                                                        var t = n(e);
                                                        return -1 !== S(void 0, void 0, e.inputmask.maskset.validPositions) || !0 !== s.nullable ? t : ""
                                                    }
                                                    return n(e)
                                                },
                                                set: function(e, t) {
                                                    var n = i(e, t);
                                                    return e.inputmask && Z(e, t),
                                                    n
                                                },
                                                inputmaskpatch: !0
                                            }
                                        }
                                    }(e.type),
                                    i = e,
                                    q.on(i, "mouseenter", function() {
                                        var e = this.inputmask._valueGet(!0);
                                        e !== (b ? A().reverse() : A()).join("") && Z(this, e)
                                    }))
                                }
                            }(e) : e.inputmask = void 0,
                            n
                        }(e, U);
                        if (!1 !== t && (s = re(u = e),
                        o = u.placeholder,
                        -1 === (y = void 0 !== u ? u.maxLength : void 0) && (y = void 0),
                        "inputMode"in u && null === u.getAttribute("inputmode") && (u.inputMode = U.inputmode,
                        u.setAttribute("inputmode", U.inputmode)),
                        !0 === t && (U.showMaskOnFocus = U.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(u.autocomplete),
                        q.on(u, "submit", z.submitEvent),
                        q.on(u, "reset", z.resetEvent),
                        q.on(u, "blur", z.blurEvent),
                        q.on(u, "focus", z.focusEvent),
                        q.on(u, "invalid", z.invalidEvent),
                        q.on(u, "click", z.clickEvent),
                        q.on(u, "mouseleave", z.mouseleaveEvent),
                        q.on(u, "mouseenter", z.mouseenterEvent),
                        q.on(u, "paste", z.pasteEvent),
                        q.on(u, "cut", z.cutEvent),
                        q.on(u, "complete", U.oncomplete),
                        q.on(u, "incomplete", U.onincomplete),
                        q.on(u, "cleared", U.oncleared),
                        ce || !0 === U.inputEventOnly ? u.removeAttribute("maxLength") : (q.on(u, "keydown", z.keydownEvent),
                        q.on(u, "keypress", z.keypressEvent)),
                        q.on(u, "input", z.inputFallBackEvent),
                        q.on(u, "compositionend", z.compositionendEvent)),
                        q.on(u, "setvalue", z.setValueEvent),
                        p = T().join(""),
                        "" !== u.inputmask._valueGet(!0) || !1 === U.clearMaskOnLostFocus || se.activeElement === u)) {
                            Z(u, u.inputmask._valueGet(!0));
                            var n = A().slice();
                            !1 === Y(n) && U.clearIncomplete && w(),
                            U.clearMaskOnLostFocus && se.activeElement !== u && (-1 === S() ? n = [] : Q(n)),
                            (!1 === U.clearMaskOnLostFocus || U.showMaskOnFocus && se.activeElement === u || "" !== u.inputmask._valueGet(!0)) && R(u, n),
                            se.activeElement === u && K(u, F(S()))
                        }
                    }(u);
                    break;
                case "format":
                    return i = (re.isFunction(U.onBeforeMask) && U.onBeforeMask.call(c, t.value, U) || t.value).split(""),
                    V.call(this, void 0, !0, !1, i),
                    t.metadata ? {
                        value: b ? A().slice().reverse().join("") : A().join(""),
                        metadata: e.call(this, {
                            action: "getmetadata"
                        }, W, U)
                    } : b ? A().slice().reverse().join("") : A().join("");
                case "isValid":
                    t.value ? (i = (re.isFunction(U.onBeforeMask) && U.onBeforeMask.call(c, t.value, U) || t.value).split(""),
                    V.call(this, void 0, !0, !1, i)) : t.value = b ? A().slice().reverse().join("") : A().join("");
                    for (var J = A(), ee = a(), te = J.length - 1; ee < te && !N(te); te--)
                        ;
                    return J.splice(ee, te + 1 - ee),
                    Y(J) && t.value === (b ? A().slice().reverse().join("") : A().join(""));
                case "getemptymask":
                    return T().join("");
                case "remove":
                    if (u && u.inputmask) {
                        re.data(u, "_inputmask_opts", null),
                        s = re(u);
                        var ne = U.autoUnmask ? r(u) : u.inputmask._valueGet(U.autoUnmask);
                        ne !== T().join("") ? u.inputmask._valueSet(ne, U.autoUnmask) : u.inputmask._valueSet(""),
                        q.off(u),
                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(u), "value") && u.inputmask.__valueGet && Object.defineProperty(u, "value", {
                            get: u.inputmask.__valueGet,
                            set: u.inputmask.__valueSet,
                            configurable: !0
                        }) : se.__lookupGetter__ && u.__lookupGetter__("value") && u.inputmask.__valueGet && (u.__defineGetter__("value", u.inputmask.__valueGet),
                        u.__defineSetter__("value", u.inputmask.__valueSet)),
                        u.inputmask = void 0
                    }
                    return u;
                case "getmetadata":
                    if (re.isArray(W.metadata)) {
                        var ie = v(!0, 0, !1).join("");
                        return re.each(W.metadata, function(e, t) {
                            if (t.mask === ie)
                                return ie = t,
                                !1
                        }),
                        ie
                    }
                    return W.metadata
                }
        }
    }
    , function(e, t, n) {
        "use strict";
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var s = n(1)
          , l = s.dependencyLib
          , c = n(0)
          , h = {
            d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
            dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return d(Date.prototype.getDate.call(this), 2)
            }
            ],
            ddd: [""],
            dddd: [""],
            m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1
            }
            ],
            mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return d(Date.prototype.getMonth.call(this) + 1, 2)
            }
            ],
            mmm: [""],
            mmmm: [""],
            yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return d(Date.prototype.getFullYear.call(this), 2)
            }
            ],
            yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return d(Date.prototype.getFullYear.call(this), 4)
            }
            ],
            h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return d(Date.prototype.getHours.call(this), 2)
            }
            ],
            hx: [function(e) {
                return "[0-9]{".concat(e, "}")
            }
            , Date.prototype.setHours, "hours", Date.prototype.getHours],
            H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return d(Date.prototype.getHours.call(this), 2)
            }
            ],
            Hx: [function(e) {
                return "[0-9]{".concat(e, "}")
            }
            , Date.prototype.setHours, "hours", Date.prototype.getHours],
            M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
            MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return d(Date.prototype.getMinutes.call(this), 2)
            }
            ],
            s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
            ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return d(Date.prototype.getSeconds.call(this), 2)
            }
            ],
            l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return d(Date.prototype.getMilliseconds.call(this), 3)
            }
            ],
            L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return d(Date.prototype.getMilliseconds.call(this), 2)
            }
            ],
            t: ["[ap]"],
            tt: ["[ap]m"],
            T: ["[AP]"],
            TT: ["[AP]M"],
            Z: [""],
            o: [""],
            S: [""]
        }
          , i = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function u(e) {
            var t = new RegExp("\\d+$").exec(e[0]);
            if (t && void 0 !== t[0]) {
                var n = h[e[0][0] + "x"].slice("");
                return n[0] = n[0](t[0]),
                n
            }
            if (h[e[0]])
                return h[e[0]]
        }
        function m(e) {
            if (!e.tokenizer) {
                var t = []
                  , n = [];
                for (var i in h)
                    if (i.endsWith("x")) {
                        var o = i[0] + "\\d+";
                        -1 === n.indexOf(o) && n.push(o)
                    } else
                        -1 === t.indexOf(i[0]) && t.push(i[0]);
                e.tokenizer = "(" + (0 < n.length ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.",
                e.tokenizer = new RegExp(e.tokenizer,"g")
            }
            return e.tokenizer
        }
        function g(e, t, n, i) {
            var o, r, a = "";
            for (m(n).lastIndex = 0; o = m(n).exec(e); )
                if (void 0 === t)
                    if (r = u(o))
                        a += "(" + r[0] + ")";
                    else
                        switch (o[0]) {
                        case "[":
                            a += "(";
                            break;
                        case "]":
                            a += ")?";
                            break;
                        default:
                            a += s.escapeRegex(o[0])
                        }
                else if (r = u(o))
                    if (!0 !== i && r[3]) {
                        a += r[3].call(t.date)
                    } else
                        r[2] ? a += t["raw" + r[2]] : a += o[0];
                else
                    a += o[0];
            return a
        }
        function d(e, t) {
            for (e = String(e),
            t = t || 2; e.length < t; )
                e = "0" + e;
            return e
        }
        function v(e, t, n) {
            var i, o, r, a, s, l = {
                date: new Date(1,0,1)
            }, c = e;
            if ("string" == typeof c) {
                for (m(n).lastIndex = 0; o = m(n).exec(t); ) {
                    var u = c.slice(0, o[0].length);
                    h.hasOwnProperty(o[0]) && (i = h[o[0]][2],
                    r = h[o[0]][1],
                    (a = l)[i] = (s = u).replace(/[^0-9]/g, "0"),
                    a["raw" + i] = s,
                    void 0 !== r && r.call(a.date, "month" == i ? parseInt(a[i]) - 1 : a[i])),
                    c = c.slice(u.length)
                }
                return l
            }
            if (c && "object" === f(c) && c.hasOwnProperty("date"))
                return c
        }
        s.extendAliases({
            datetime: {
                mask: function(e) {
                    return h.S = e.i18n.ordinalSuffix.join("|"),
                    e.inputFormat = i[e.inputFormat] || e.inputFormat,
                    e.displayFormat = i[e.displayFormat] || e.displayFormat || e.inputFormat,
                    e.outputFormat = i[e.outputFormat] || e.outputFormat || e.inputFormat,
                    e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""),
                    e.regex = g(e.inputFormat, void 0, e),
                    null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function(e, t, n, i, o, r, a, s) {
                    if (s)
                        return !0;
                    var l, c, u = 0;
                    if (isNaN(n) && e[t] !== n) {
                        for (m(o).lastIndex = 0; c = m(o).exec(o.inputFormat); )
                            if (t <= (u += c[0].length)) {
                                l = c,
                                c = m(o).exec(o.inputFormat);
                                break
                            }
                        if (c && c[0] === n && 1 < l[0].length)
                            return e[t] = e[t - 1],
                            e[t - 1] = "0",
                            {
                                fuzzy: !0,
                                buffer: e,
                                refreshFromBuffer: {
                                    start: t - 1,
                                    end: t + 1
                                },
                                pos: t + 1
                            }
                    }
                    return !0
                },
                postValidation: function(e, t, n, i, o, r) {
                    if (r)
                        return !0;
                    i.min = v(i.min, i.inputFormat, i),
                    i.max = v(i.max, i.inputFormat, i),
                    n.fuzzy && (e = n.buffer,
                    t = n.pos);
                    var a, s = 0;
                    for (m(i).lastIndex = 0; (a = m(i).exec(i.inputFormat)) && !(t < (s += a[0].length)); )
                        ;
                    if (a && a[0] && void 0 !== h[a[0]]) {
                        var l = h[a[0]][0]
                          , c = e.slice(a.index, a.index + a[0].length);
                        !1 === new RegExp(l).test(c.join("")) && 2 === a[0].length && o.validPositions[a.index] && o.validPositions[a.index + 1] && (o.validPositions[a.index + 1].input = "0")
                    }
                    var u, f, d = n, p = v(e.join(""), i.inputFormat, i);
                    return d && p.date.getTime() == p.date.getTime() && (u = p,
                    f = d,
                    d = (d = (!isFinite(u.rawday) || "29" == u.day && !isFinite(u.rawyear) || new Date(u.date.getFullYear(),isFinite(u.rawmonth) ? u.month : u.date.getMonth() + 1,0).getDate() >= u.day) && f) && function(e, t) {
                        var n = !0;
                        if (t.min) {
                            if (e.rawyear) {
                                var i = e.rawyear.replace(/[^0-9]/g, "");
                                n = t.min.year.substr(0, i.length) <= i
                            }
                            e.year === e.rawyear && t.min.date.getTime() == t.min.date.getTime() && (n = t.min.date.getTime() <= e.date.getTime())
                        }
                        return n && t.max && t.max.date.getTime() == t.max.date.getTime() && (n = t.max.date.getTime() >= e.date.getTime()),
                        n
                    }(p, i)),
                    t && d && n.pos !== t ? {
                        buffer: g(i.inputFormat, p, i).split(""),
                        refreshFromBuffer: {
                            start: t,
                            end: n.pos
                        }
                    } : d
                },
                onKeyDown: function(e, t, n, i) {
                    if (e.ctrlKey && e.keyCode === c.RIGHT) {
                        var o, r = new Date, a = "";
                        for (m(i).lastIndex = 0; o = m(i).exec(i.inputFormat); )
                            "d" === o[0].charAt(0) ? a += d(r.getDate(), o[0].length) : "m" === o[0].charAt(0) ? a += d(r.getMonth() + 1, o[0].length) : "yyyy" === o[0] ? a += r.getFullYear().toString() : "y" === o[0].charAt(0) && (a += d(r.getYear(), o[0].length));
                        this.inputmask._valueSet(a),
                        l(this).trigger("setvalue")
                    }
                },
                onUnMask: function(e, t, n) {
                    return t ? g(n.outputFormat, v(e, n.inputFormat, n), n, !0) : t
                },
                casing: function(e, t) {
                    return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1
            }
        }),
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        var p = n(1)
          , k = p.dependencyLib
          , s = n(0);
        function a(e, t) {
            for (var n = "", i = 0; i < e.length; i++)
                p.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker.start === e.charAt(i) || t.optionalmarker.end === e.charAt(i) || t.quantifiermarker.start === e.charAt(i) || t.quantifiermarker.end === e.charAt(i) || t.groupmarker.start === e.charAt(i) || t.groupmarker.end === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
            return n
        }
        function h(e, t, n, i) {
            if (0 < t && (!n.digitsOptional || i)) {
                var o = k.inArray(n.radixPoint, e);
                -1 === o && (e.push(n.radixPoint),
                o = e.length - 1);
                for (var r = 1; r <= t; r++)
                    e[o + r] = e[o + r] || "0"
            }
            return e
        }
        function _(e, t) {
            var n = 0;
            if ("+" === e) {
                for (n in t.validPositions)
                    ;
                n = parseInt(n)
            }
            for (var i in t.tests)
                if (n <= (i = parseInt(i)))
                    for (var o = 0, r = t.tests[i].length; o < r; o++)
                        if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][o].match.def === e)
                            return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
            return n
        }
        function w(n, e) {
            var i = -1;
            return k.each(e.validPositions, function(e, t) {
                if (t && t.match.def === n)
                    return i = parseInt(e),
                    !1
            }),
            i
        }
        function i(e, t, n, i, o) {
            var r = t.buffer ? t.buffer.indexOf(o.radixPoint) : -1
              , a = -1 !== r && new RegExp("[0-9１-９]").test(e);
            return o._radixDance && a && null == t.validPositions[r] ? {
                insert: {
                    pos: r === n ? r + 1 : r,
                    c: o.radixPoint
                },
                pos: n
            } : a
        }
        p.extendAliases({
            numeric: {
                mask: function(e) {
                    e.repeat = 0,
                    e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""),
                    " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0),
                    1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)),
                    "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                    var t = "0";
                    !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1",
                    e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick,
                    e.digitsOptional = !1,
                    isNaN(e.digits) && (e.digits = 2),
                    e._radixDance = !1) : (e.__financeInput = !1,
                    e.numericInput = !0);
                    var n, i, o = "[+]";
                    if (o += a(e.prefix, e),
                    "" !== e.groupSeparator ? o += e._mask(e) : o += "9{+}",
                    void 0 !== e.digits && 0 !== e.digits) {
                        var r = e.digits.toString().split(",");
                        isFinite(r[0]) && r[1] && isFinite(r[1]) ? o += e.radixPoint + t + "{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? (n = o + e.radixPoint + t + "{0," + e.digits + "}",
                        e.keepStatic = !0) : o += e.radixPoint + t + "{" + e.digits + "}")
                    }
                    return o += a(e.suffix, e),
                    o += "[-]",
                    n && (o = [n + a(e.suffix, e) + "[-]", o]),
                    e.greedy = !1,
                    void 0 === (i = e).parseMinMaxOptions && (null !== i.min && (i.min = i.min.toString().replace(new RegExp(p.escapeRegex(i.groupSeparator),"g"), ""),
                    "," === i.radixPoint && (i.min = i.min.replace(i.radixPoint, ".")),
                    i.min = isFinite(i.min) ? parseFloat(i.min) : NaN,
                    isNaN(i.min) && (i.min = Number.MIN_VALUE)),
                    null !== i.max && (i.max = i.max.toString().replace(new RegExp(p.escapeRegex(i.groupSeparator),"g"), ""),
                    "," === i.radixPoint && (i.max = i.max.replace(i.radixPoint, ".")),
                    i.max = isFinite(i.max) ? parseFloat(i.max) : NaN,
                    isNaN(i.max) && (i.max = Number.MAX_VALUE)),
                    i.parseMinMaxOptions = "done"),
                    o
                },
                _mask: function(e) {
                    return "(" + e.groupSeparator + "999){+|1}"
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                step: 1,
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "numeric",
                shortcuts: {
                    k: "000",
                    m: "000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {
                        validator: i
                    },
                    1: {
                        validator: i,
                        definitionSymbol: "*"
                    },
                    "+": {
                        validator: function(e, t, n, i, o) {
                            return o.allowMinus && ("-" === e || e === o.negationSymbol.front)
                        }
                    },
                    "-": {
                        validator: function(e, t, n, i, o) {
                            return o.allowMinus && e === o.negationSymbol.back
                        }
                    }
                },
                preValidation: function(e, t, n, i, o, r, a, s) {
                    if (!1 !== o.__financeInput && n === o.radixPoint)
                        return !1;
                    var l;
                    if (l = o.shortcuts && o.shortcuts[n]) {
                        if (1 < l.length)
                            for (var c = [], u = 0; u < l.length; u++)
                                c.push({
                                    pos: t + u,
                                    c: l[u],
                                    strict: !1
                                });
                        return {
                            insert: c
                        }
                    }
                    var f, d, p, h, m, g = k.inArray(o.radixPoint, e), v = t;
                    if (f = t,
                    d = n,
                    p = g,
                    h = r,
                    (m = o)._radixDance && m.numericInput && d !== m.negationSymbol.back && f <= p && (0 < p || d == m.radixPoint) && (void 0 === h.validPositions[f - 1] || h.validPositions[f - 1].input !== m.negationSymbol.back) && --f,
                    t = f,
                    "-" !== n && n !== o.negationSymbol.front)
                        return !!s || (-1 !== g && !0 === o._radixDance && !1 === i && n === o.radixPoint && void 0 !== o.digits && (isNaN(o.digits) || 0 < parseInt(o.digits)) && g !== t ? {
                            caret: o._radixDance && t === g - 1 ? g + 1 : g
                        } : i && o.digitsOptional ? {
                            rewritePosition: a.end
                        } : i && !o.digitsOptional && a.begin > g && a.end <= g ? n === o.radixPoint ? {
                            insert: {
                                pos: g + 1,
                                c: "0",
                                fromIsValid: !0
                            },
                            rewritePosition: g
                        } : {
                            rewritePosition: g + 1
                        } : i && !o.digitsOptional && a.begin < g ? {
                            rewritePosition: a.begin - 1
                        } : {
                            rewritePosition: t
                        });
                    if (!0 !== o.allowMinus)
                        return !1;
                    var y = !1
                      , b = w("+", r)
                      , x = w("-", r);
                    return -1 !== b && (y = [b, x]),
                    !1 !== y ? {
                        remove: y,
                        caret: v
                    } : {
                        insert: [{
                            pos: _("+", r),
                            c: o.negationSymbol.front,
                            fromIsValid: !0
                        }, {
                            pos: _("-", r),
                            c: o.negationSymbol.back,
                            fromIsValid: void 0
                        }],
                        caret: v + o.negationSymbol.back.length
                    }
                },
                postValidation: function(e, t, n, i, o, r) {
                    if (r)
                        return !0;
                    if (null !== i.min || null !== i.max) {
                        var a = i.onUnMask(e.slice().reverse().join(""), void 0, k.extend({}, i, {
                            unmaskAsNumber: !0
                        }));
                        if (null !== i.min && a < i.min && (a.toString().length >= i.min.toString().length || a < 0))
                            return {
                                refreshFromBuffer: !0,
                                buffer: h(i.min.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                            };
                        if (null !== i.max && a > i.max)
                            return {
                                refreshFromBuffer: !0,
                                buffer: h(i.max.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                            }
                    }
                    return n
                },
                onUnMask: function(e, t, n) {
                    if ("" === t && !0 === n.nullable)
                        return t;
                    var i = e.replace(n.prefix, "");
                    return i = (i = i.replace(n.suffix, "")).replace(new RegExp(p.escapeRegex(n.groupSeparator),"g"), ""),
                    "" !== n.placeholder.charAt(0) && (i = i.replace(new RegExp(n.placeholder.charAt(0),"g"), "0")),
                    n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== i.indexOf(n.radixPoint) && (i = i.replace(p.escapeRegex.call(this, n.radixPoint), ".")),
                    i = (i = i.replace(new RegExp("^" + p.escapeRegex(n.negationSymbol.front)), "-")).replace(new RegExp(p.escapeRegex(n.negationSymbol.back) + "$"), ""),
                    Number(i)) : i
                },
                isComplete: function(e, t) {
                    var n = (t.numericInput ? e.slice().reverse() : e).join("");
                    return n = (n = (n = (n = (n = n.replace(new RegExp("^" + p.escapeRegex(t.negationSymbol.front)), "-")).replace(new RegExp(p.escapeRegex(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp(p.escapeRegex(t.groupSeparator) + "([0-9]{3})","g"), "$1"),
                    "," === t.radixPoint && (n = n.replace(p.escapeRegex(t.radixPoint), ".")),
                    isFinite(n)
                },
                onBeforeMask: function(e, t) {
                    var n = t.radixPoint || ",";
                    "number" != typeof e && "number" !== t.inputType || "" === n || (e = e.toString().replace(".", n));
                    var i = e.split(n)
                      , o = i[0].replace(/[^\-0-9]/g, "")
                      , r = 1 < i.length ? i[1].replace(/[^0-9]/g, "") : ""
                      , a = 1 < i.length;
                    e = o + ("" !== r ? n + r : r);
                    var s = 0;
                    if ("" !== n && (s = r.length,
                    "" !== r)) {
                        var l = Math.pow(10, s || 1);
                        isFinite(t.digits) && (s = parseInt(t.digits),
                        l = Math.pow(10, s)),
                        e = e.replace(p.escapeRegex(n), "."),
                        isFinite(e) && (e = t.roundingFN(parseFloat(e) * l) / l),
                        e = e.toString().replace(".", n)
                    }
                    if (0 === t.digits && -1 !== e.indexOf(p.escapeRegex(n)) && (e = e.substring(0, e.indexOf(p.escapeRegex(n)))),
                    null !== t.min || null !== t.max) {
                        var c = e.toString().replace(n, ".");
                        null !== t.min && c < t.min ? e = t.min.toString().replace(".", n) : null !== t.max && c > t.max && (e = t.max.toString().replace(".", n))
                    }
                    return h(e.toString().split(""), s, t, a).join("")
                },
                onBeforeWrite: function(e, t, n, i) {
                    function o(e, t) {
                        if (!1 !== i.__financeInput || t) {
                            var n = k.inArray(i.radixPoint, e);
                            -1 !== n && e.splice(n, 1)
                        }
                        if ("" !== i.groupSeparator)
                            for (; -1 !== (n = e.indexOf(i.groupSeparator)); )
                                e.splice(n, 1);
                        return e
                    }
                    var r, a = function(t, e) {
                        try {
                            var n = new RegExp("(^" + ("" !== e.negationSymbol.front ? p.escapeRegex(e.negationSymbol.front) + "?" : "") + p.escapeRegex(e.prefix) + ")(.*)(" + p.escapeRegex(e.suffix) + ("" != e.negationSymbol.back ? p.escapeRegex(e.negationSymbol.back) + "?" : "") + "$)").exec(t.slice().reverse().join(""))
                              , i = n ? n[2] : ""
                              , o = !1;
                            return i && (i = i.split(e.radixPoint.charAt(0))[0],
                            o = new RegExp("^[0" + e.groupSeparator + "]*").exec(i)),
                            !(!o || !(1 < o[0].length || 0 < o[0].length && o[0].length < i.length)) && o
                        } catch (e) {
                            console.log(t.slice().reverse().join(""))
                        }
                    }(t, i);
                    if (a) {
                        var s = t.slice().reverse()
                          , l = s.join("").indexOf(a[0]);
                        s.splice(l, a[0].length);
                        var c = s.length - l;
                        o(s),
                        r = {
                            refreshFromBuffer: !0,
                            buffer: s.reverse(),
                            caret: n < c ? n : c
                        }
                    }
                    if (e)
                        switch (e.type) {
                        case "blur":
                        case "checkval":
                            if (null !== i.min) {
                                var u = i.onUnMask(t.slice().reverse().join(""), void 0, k.extend({}, i, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== i.min && u < i.min)
                                    return {
                                        refreshFromBuffer: !0,
                                        buffer: h(i.min.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                                    }
                            }
                            if (t[t.length - 1] === i.negationSymbol.front) {
                                var f = new RegExp("(^" + ("" != i.negationSymbol.front ? p.escapeRegex(i.negationSymbol.front) + "?" : "") + p.escapeRegex(i.prefix) + ")(.*)(" + p.escapeRegex(i.suffix) + ("" != i.negationSymbol.back ? p.escapeRegex(i.negationSymbol.back) + "?" : "") + "$)").exec(o(t.slice(), !0).reverse().join(""));
                                0 == (f ? f[2] : "") && (r = {
                                    refreshFromBuffer: !0,
                                    buffer: [0]
                                })
                            } else
                                "" !== i.radixPoint && t[0] === i.radixPoint && (r && r.buffer ? r.buffer.shift() : (t.shift(),
                                r = {
                                    refreshFromBuffer: !0,
                                    buffer: o(t)
                                }));
                            if (i.enforceDigitsOnBlur) {
                                var d = (r = r || {}) && r.buffer || t.slice().reverse();
                                r.refreshFromBuffer = !0,
                                r.buffer = h(d, i.digits, i, !0).reverse()
                            }
                        }
                    return r
                },
                onKeyDown: function(e, t, n, i) {
                    var o, r = k(this);
                    if (e.ctrlKey)
                        switch (e.keyCode) {
                        case s.UP:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)),
                            r.trigger("setvalue"),
                            !1;
                        case s.DOWN:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)),
                            r.trigger("setvalue"),
                            !1
                        }
                    if (!e.shiftKey && (e.keyCode === s.DELETE || e.keyCode === s.BACKSPACE || e.keyCode === s.BACKSPACE_SAFARI)) {
                        if (t[e.keyCode === s.DELETE ? n.begin - 1 : n.end] === i.negationSymbol.front)
                            return o = t.slice().reverse(),
                            "" !== i.negationSymbol.front && o.shift(),
                            "" !== i.negationSymbol.back && o.pop(),
                            r.trigger("setvalue", [o.join(""), n.begin]),
                            !1;
                        if (!0 === i._radixDance) {
                            var a = k.inArray(i.radixPoint, t);
                            if (i.digitsOptional) {
                                if (0 === a)
                                    return (o = t.slice().reverse()).pop(),
                                    r.trigger("setvalue", [o.join(""), n.begin >= o.length ? o.length : n.begin]),
                                    !1
                            } else if (-1 !== a && (n.begin < a || n.end < a || e.keyCode === s.DELETE && n.begin === a))
                                return n.begin !== n.end || e.keyCode !== s.BACKSPACE && e.keyCode !== s.BACKSPACE_SAFARI || n.begin++,
                                (o = t.slice().reverse()).splice(o.length - n.begin, n.begin - n.end + 1),
                                o = h(o, i.digits, i).join(""),
                                r.trigger("setvalue", [o, n.begin >= o.length ? a + 1 : n.begin]),
                                !1
                        }
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
            },
            indianns: {
                alias: "numeric",
                _mask: function(e) {
                    return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}"
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
            }
        }),
        e.exports = p
    }
    ],
    installedModules = {},
    __webpack_require__.m = modules,
    __webpack_require__.c = installedModules,
    __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.t = function(t, e) {
        if (1 & e && (t = __webpack_require__(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (__webpack_require__.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                __webpack_require__.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, "a", t),
        t
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.p = "",
    __webpack_require__(__webpack_require__.s = 5);
    function __webpack_require__(e) {
        if (installedModules[e])
            return installedModules[e].exports;
        var t = installedModules[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return modules[e].call(t.exports, t, t.exports, __webpack_require__),
        t.l = !0,
        t.exports
    }
    var modules, installedModules
}),
function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t(require("jquery"));
    else if ("function" == typeof define && define.amd)
        define(["jquery"], t);
    else {
        var n = "object" == typeof exports ? t(require("jquery")) : t(e.jQuery);
        for (var i in n)
            ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}(window, function(__WEBPACK_EXTERNAL_MODULE__3__) {
    return modules = [function(e) {
        e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')
    }
    , function(e, t, n) {
        "use strict";
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var u = n(2)
          , f = n(4)
          , r = f.document
          , a = n(5).generateMaskSet
          , o = n(5).analyseMask
          , s = n(8);
        function l(e, t, n) {
            if (!(this instanceof l))
                return new l(e,t,n);
            this.el = void 0,
            this.events = {},
            this.maskset = void 0,
            !(this.refreshValue = !1) !== n && (u.isPlainObject(e) ? t = e : (t = t || {},
            e && (t.alias = e)),
            this.opts = u.extend(!0, {}, this.defaults, t),
            this.noMasksCache = t && void 0 !== t.definitions,
            this.userOptions = t || {},
            d(this.opts.alias, t, this.opts),
            this.isRTL = this.opts.numericInput)
        }
        function d(e, t, n) {
            var i = l.prototype.aliases[e];
            return i ? (i.alias && d(i.alias, void 0, n),
            u.extend(!0, n, i),
            u.extend(!0, n, t),
            !0) : (null === n.mask && (n.mask = e),
            !1)
        }
        l.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: ["[", "]"],
                quantifiermarker: ["{", "}"],
                groupmarker: ["(", ")"],
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: u.noop,
                onincomplete: u.noop,
                oncleared: u.noop,
                repeat: 0,
                greedy: !1,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: u.noop,
                onBeforeMask: null,
                onBeforePaste: function(e, t) {
                    return u.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: u.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                _radixDance: !1,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "url", "password", "search"],
                ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: void 0,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                importDataAttributes: !0,
                shiftPositions: !0
            },
            definitions: {
                9: {
                    validator: "[0-9１-９]",
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(e) {
                var o = this;
                return "string" == typeof e && (e = r.getElementById(e) || r.querySelectorAll(e)),
                e = e.nodeName ? [e] : e,
                u.each(e, function(e, t) {
                    var n = u.extend(!0, {}, o.opts);
                    if (function(n, e, i, o) {
                        function t(e, t) {
                            null !== (t = void 0 !== t ? t : n.getAttribute(o + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = f[t] : "false" === t ? t = !1 : "true" === t && (t = !0)),
                            i[e] = t)
                        }
                        if (!0 === e.importDataAttributes) {
                            var r, a, s, l, c = n.getAttribute(o);
                            if (c && "" !== c && (c = c.replace(/'/g, '"'),
                            a = JSON.parse("{" + c + "}")),
                            a)
                                for (l in s = void 0,
                                a)
                                    if ("alias" === l.toLowerCase()) {
                                        s = a[l];
                                        break
                                    }
                            for (r in t("alias", s),
                            i.alias && d(i.alias, i, e),
                            e) {
                                if (a)
                                    for (l in s = void 0,
                                    a)
                                        if (l.toLowerCase() === r.toLowerCase()) {
                                            s = a[l];
                                            break
                                        }
                                t(r, s)
                            }
                        }
                        return u.extend(!0, e, i),
                        "rtl" !== n.dir && !e.rightAlign || (n.style.textAlign = "right"),
                        "rtl" !== n.dir && !e.numericInput || (n.dir = "ltr",
                        n.removeAttribute("dir"),
                        e.isRTL = !0),
                        Object.keys(i).length
                    }(t, n, u.extend(!0, {}, o.userOptions), o.dataAttribute)) {
                        var i = a(n, o.noMasksCache);
                        void 0 !== i && (void 0 !== t.inputmask && (t.inputmask.opts.autoUnmask = !0,
                        t.inputmask.remove()),
                        t.inputmask = new l(void 0,void 0,!0),
                        t.inputmask.opts = n,
                        t.inputmask.noMasksCache = o.noMasksCache,
                        t.inputmask.userOptions = u.extend(!0, {}, o.userOptions),
                        t.inputmask.isRTL = n.isRTL || n.numericInput,
                        (t.inputmask.el = t).inputmask.maskset = i,
                        u.data(t, "_inputmask_opts", n),
                        s.call(t.inputmask, {
                            action: "mask"
                        }))
                    }
                }),
                e && e[0] && e[0].inputmask || this
            },
            option: function(e, t) {
                return "string" == typeof e ? this.opts[e] : "object" === i(e) ? (u.extend(this.userOptions, e),
                this.el && !0 !== t && this.mask(this.el),
                this) : void 0
            },
            unmaskedvalue: function(e) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "unmaskedvalue",
                    value: e
                })
            },
            remove: function() {
                return s.call(this, {
                    action: "remove"
                })
            },
            getemptymask: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "getemptymask"
                })
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask
            },
            isComplete: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "isComplete"
                })
            },
            getmetadata: function() {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "getmetadata"
                })
            },
            isValid: function(e) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "isValid",
                    value: e
                })
            },
            format: function(e, t) {
                return this.maskset = this.maskset || a(this.opts, this.noMasksCache),
                s.call(this, {
                    action: "format",
                    value: e,
                    metadata: t
                })
            },
            setValue: function(e) {
                this.el && u(this.el).trigger("setvalue", [e])
            },
            analyseMask: o
        },
        l.extendDefaults = function(e) {
            u.extend(!0, l.prototype.defaults, e)
        }
        ,
        l.extendDefinitions = function(e) {
            u.extend(!0, l.prototype.definitions, e)
        }
        ,
        l.extendAliases = function(e) {
            u.extend(!0, l.prototype.aliases, e)
        }
        ,
        l.format = function(e, t, n) {
            return l(t).format(e, n)
        }
        ,
        l.unmask = function(e, t) {
            return l(t).unmaskedvalue(e)
        }
        ,
        l.isValid = function(e, t) {
            return l(t).isValid(e)
        }
        ,
        l.remove = function(e) {
            "string" == typeof e && (e = r.getElementById(e) || r.querySelectorAll(e)),
            e = e.nodeName ? [e] : e,
            u.each(e, function(e, t) {
                t.inputmask && t.inputmask.remove()
            })
        }
        ,
        l.setValue = function(e, n) {
            "string" == typeof e && (e = r.getElementById(e) || r.querySelectorAll(e)),
            e = e.nodeName ? [e] : e,
            u.each(e, function(e, t) {
                t.inputmask ? t.inputmask.setValue(n) : u(t).trigger("setvalue", [n])
            })
        }
        ;
        var c = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")","gim");
        l.escapeRegex = function(e) {
            return e.replace(c, "\\$1")
        }
        ,
        l.dependencyLib = u,
        f.Inputmask = l,
        e.exports = l
    }
    , function(e, t, n) {
        "use strict";
        var i = n(3);
        if (void 0 === i)
            throw "jQuery not loaded!";
        e.exports = i
    }
    , function(e, t) {
        e.exports = __WEBPACK_EXTERNAL_MODULE__3__
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__;
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window
        }
        .call(exports, __webpack_require__, exports, module),
        void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }
    , function(e, t, n) {
        "use strict";
        var j = n(2);
        e.exports = {
            generateMaskSet: function(n, s) {
                function e(e, t, n) {
                    var i, o, r = !1;
                    if (null !== e && "" !== e || (e = (r = null !== n.regex) ? (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (r = !0,
                    ".*")),
                    1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""),
                    0 < n.repeat || "*" === n.repeat || "+" === n.repeat) {
                        var a = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                        e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + a + "," + n.repeat + n.quantifiermarker[1]
                    }
                    return o = r ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e,
                    !1 !== n.keepStatic && (o = "ks_" + o),
                    void 0 === Inputmask.prototype.masksCache[o] || !0 === s ? (i = {
                        mask: e,
                        maskToken: Inputmask.prototype.analyseMask(e, r, n),
                        validPositions: {},
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        excludes: {},
                        metadata: t,
                        maskLength: void 0,
                        jitOffset: {}
                    },
                    !0 !== s && (Inputmask.prototype.masksCache[o] = i,
                    i = j.extend(!0, {}, Inputmask.prototype.masksCache[o]))) : i = j.extend(!0, {}, Inputmask.prototype.masksCache[o]),
                    i
                }
                if (j.isFunction(n.mask) && (n.mask = n.mask(n)),
                j.isArray(n.mask)) {
                    if (1 < n.mask.length) {
                        if (null === n.keepStatic) {
                            n.keepStatic = "auto";
                            for (var t = 0; t < n.mask.length; t++)
                                if (n.mask[t].charAt(0) !== n.mask[0].charAt(0)) {
                                    n.keepStatic = !0;
                                    break
                                }
                        }
                        var i = n.groupmarker[0];
                        return j.each(n.isRTL ? n.mask.reverse() : n.mask, function(e, t) {
                            1 < i.length && (i += n.groupmarker[1] + n.alternatormarker + n.groupmarker[0]),
                            void 0 === t.mask || j.isFunction(t.mask) ? i += t : i += t.mask
                        }),
                        e(i += n.groupmarker[1], n.mask, n)
                    }
                    n.mask = n.mask.pop()
                }
                return null === n.keepStatic && (n.keepStatic = !1),
                n.mask && void 0 !== n.mask.mask && !j.isFunction(n.mask.mask) ? e(n.mask.mask, n.mask, n) : e(n.mask, n.mask, n)
            },
            analyseMask: function(e, r, a) {
                var t, n, i, o, s, l, c = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, u = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, f = !1, d = new g, p = [], h = [], m = !1;
                function g(e, t, n, i) {
                    this.matches = [],
                    this.openGroup = e || !1,
                    this.alternatorGroup = !1,
                    this.isGroup = e || !1,
                    this.isOptional = t || !1,
                    this.isQuantifier = n || !1,
                    this.isAlternator = i || !1,
                    this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }
                function v(n, e, i) {
                    i = void 0 !== i ? i : n.matches.length;
                    var o = n.matches[i - 1];
                    if (r)
                        0 === e.indexOf("[") || f && /\\d|\\s|\\w]/i.test(e) || "." === e ? n.matches.splice(i++, 0, {
                            fn: new RegExp(e,a.casing ? "i" : ""),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== e,
                            casing: null,
                            def: e,
                            placeholder: void 0,
                            nativeDef: e
                        }) : (f && (e = e[e.length - 1]),
                        j.each(e.split(""), function(e, t) {
                            o = n.matches[i - 1],
                            n.matches.splice(i++, 0, {
                                fn: /[a-z]/i.test(a.staticDefinitionSymbol || t) ? new RegExp("[" + (a.staticDefinitionSymbol || t) + "]",a.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                casing: null,
                                def: a.staticDefinitionSymbol || t,
                                placeholder: void 0 !== a.staticDefinitionSymbol ? t : void 0,
                                nativeDef: (f ? "'" : "") + t
                            })
                        })),
                        f = !1;
                    else {
                        var t = (a.definitions ? a.definitions[e] : void 0) || Inputmask.prototype.definitions[e];
                        t && !f ? n.matches.splice(i++, 0, {
                            fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator,a.casing ? "i" : "") : new function() {
                                this.test = t.validator
                            }
                            : new RegExp("."),
                            static: !1,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== (t.definitionSymbol || e),
                            casing: t.casing,
                            def: t.definitionSymbol || e,
                            placeholder: t.placeholder,
                            nativeDef: e
                        }) : (n.matches.splice(i++, 0, {
                            fn: /[a-z]/i.test(a.staticDefinitionSymbol || e) ? new RegExp("[" + (a.staticDefinitionSymbol || e) + "]",a.casing ? "i" : "") : null,
                            static: !0,
                            optionality: !1,
                            newBlockMarker: void 0 === o ? "master" : o.def !== e && !0 !== o.static,
                            casing: null,
                            def: a.staticDefinitionSymbol || e,
                            placeholder: void 0 !== a.staticDefinitionSymbol ? e : void 0,
                            nativeDef: (f ? "'" : "") + e
                        }),
                        f = !1)
                    }
                }
                function y() {
                    if (0 < p.length) {
                        if (v(o = p[p.length - 1], n),
                        o.isAlternator) {
                            s = p.pop();
                            for (var e = 0; e < s.matches.length; e++)
                                s.matches[e].isGroup && (s.matches[e].isGroup = !1);
                            0 < p.length ? (o = p[p.length - 1]).matches.push(s) : d.matches.push(s)
                        }
                    } else
                        v(d, n)
                }
                function b(e) {
                    var t = new g(!0);
                    return t.openGroup = !1,
                    t.matches = e,
                    t
                }
                function x() {
                    if ((i = p.pop()).openGroup = !1,
                    void 0 !== i)
                        if (0 < p.length) {
                            if ((o = p[p.length - 1]).matches.push(i),
                            o.isAlternator) {
                                s = p.pop();
                                for (var e = 0; e < s.matches.length; e++)
                                    s.matches[e].isGroup = !1,
                                    s.matches[e].alternatorGroup = !1;
                                0 < p.length ? (o = p[p.length - 1]).matches.push(s) : d.matches.push(s)
                            }
                        } else
                            d.matches.push(i);
                    else
                        y()
                }
                function k(e) {
                    var t = e.pop();
                    return t.isQuantifier && (t = b([e.pop(), t])),
                    t
                }
                for (r && (a.optionalmarker[0] = void 0,
                a.optionalmarker[1] = void 0); t = r ? u.exec(e) : c.exec(e); ) {
                    if (n = t[0],
                    r)
                        switch (n.charAt(0)) {
                        case "?":
                            n = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            n = "{" + n + "}";
                            break;
                        case "|":
                            if (0 === p.length) {
                                var _ = b(d.matches);
                                _.openGroup = !0,
                                p.push(_),
                                d.matches = [],
                                m = !0
                            }
                        }
                    if (f)
                        y();
                    else
                        switch (n.charAt(0)) {
                        case "(?=":
                        case "(?!":
                        case "(?<=":
                        case "(?<!":
                            break;
                        case a.escapeChar:
                            f = !0,
                            r && y();
                            break;
                        case a.optionalmarker[1]:
                        case a.groupmarker[1]:
                            x();
                            break;
                        case a.optionalmarker[0]:
                            p.push(new g(!1,!0));
                            break;
                        case a.groupmarker[0]:
                            p.push(new g(!0));
                            break;
                        case a.quantifiermarker[0]:
                            var w = new g(!1,!1,!0)
                              , S = (n = n.replace(/[{}]/g, "")).split("|")
                              , E = S[0].split(",")
                              , C = isNaN(E[0]) ? E[0] : parseInt(E[0])
                              , T = 1 === E.length ? C : isNaN(E[1]) ? E[1] : parseInt(E[1]);
                            "*" !== C && "+" !== C || (C = "*" === T ? 0 : 1),
                            w.quantifier = {
                                min: C,
                                max: T,
                                jit: S[1]
                            };
                            var A = 0 < p.length ? p[p.length - 1].matches : d.matches;
                            if ((t = A.pop()).isAlternator) {
                                A.push(t),
                                A = t.matches;
                                var P = new g(!0)
                                  , D = A.pop();
                                A.push(P),
                                A = P.matches,
                                t = D
                            }
                            t.isGroup || (t = b([t])),
                            A.push(t),
                            A.push(w);
                            break;
                        case a.alternatormarker:
                            if (0 < p.length) {
                                var O = (o = p[p.length - 1]).matches[o.matches.length - 1];
                                l = o.openGroup && (void 0 === O.matches || !1 === O.isGroup && !1 === O.isAlternator) ? p.pop() : k(o.matches)
                            } else
                                l = k(d.matches);
                            if (l.isAlternator)
                                p.push(l);
                            else if (l.alternatorGroup ? (s = p.pop(),
                            l.alternatorGroup = !1) : s = new g(!1,!1,!1,!0),
                            s.matches.push(l),
                            p.push(s),
                            l.openGroup) {
                                var I = new g(!(l.openGroup = !1));
                                I.alternatorGroup = !0,
                                p.push(I)
                            }
                            break;
                        default:
                            y()
                        }
                }
                for (m && x(); 0 < p.length; )
                    i = p.pop(),
                    d.matches.push(i);
                return 0 < d.matches.length && (function i(o) {
                    o && o.matches && j.each(o.matches, function(e, t) {
                        var n = o.matches[e + 1];
                        (void 0 === n || void 0 === n.matches || !1 === n.isQuantifier) && t && t.isGroup && (t.isGroup = !1,
                        r || (v(t, a.groupmarker[0], 0),
                        !0 !== t.openGroup && v(t, a.groupmarker[1]))),
                        i(t)
                    })
                }(d),
                h.push(d)),
                (a.numericInput || a.isRTL) && function e(t) {
                    for (var n in t.matches = t.matches.reverse(),
                    t.matches)
                        if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                            var i = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[i + 1] && t.matches[i + 1].isGroup) {
                                var o = t.matches[n];
                                t.matches.splice(n, 1),
                                t.matches.splice(i + 1, 0, o)
                            }
                            void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((r = t.matches[n]) === a.optionalmarker[0] ? r = a.optionalmarker[1] : r === a.optionalmarker[1] ? r = a.optionalmarker[0] : r === a.groupmarker[0] ? r = a.groupmarker[1] : r === a.groupmarker[1] && (r = a.groupmarker[0]),
                            r)
                        }
                    var r;
                    return t
                }(h[0]),
                h
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        n(7),
        n(9),
        n(10),
        e.exports = n(1)
    }
    , function(e, t, n) {
        "use strict";
        var i = n(1);
        i.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        var r = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        function o(e, t, n, i, o) {
            return e = -1 < n - 1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e,
            -1 < n - 2 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : "00" + e,
            r.test(e)
        }
        i.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)//.*",
                autoUnmask: !1
            },
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {
                        validator: o
                    },
                    j: {
                        validator: o
                    },
                    k: {
                        validator: o
                    },
                    l: {
                        validator: o
                    }
                },
                onUnMask: function(e) {
                    return e
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function(e) {
                    return (e = e.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function(e) {
                    return e
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }),
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        function oe(e) {
            return (oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var re = n(2)
          , ae = n(4)
          , se = ae.document
          , i = ae.navigator && ae.navigator.userAgent || ""
          , le = 0 < i.indexOf("MSIE ") || 0 < i.indexOf("Trident/")
          , ce = "ontouchstart"in ae
          , ue = /iemobile/i.test(i)
          , fe = /iphone/i.test(i) && !ue
          , de = n(0);
        e.exports = function e(t, W, U) {
            W = W || this.maskset,
            U = U || this.opts;
            var p, s, y, c = this, u = this.el, b = this.isRTL || (this.isRTL = U.numericInput), l = !1, h = !1, f = !1, m = !1, n = !1, o = void 0;
            function v(e, t, n, i, o) {
                var r = U.greedy;
                o && (U.greedy = !1),
                t = t || 0;
                var a, s, l, c = [], u = 0;
                do {
                    if (!0 === e && W.validPositions[u])
                        s = (l = o && !0 === W.validPositions[u].match.optionality && void 0 === W.validPositions[u + 1] && (!0 === W.validPositions[u].generatedInput || W.validPositions[u].input == U.skipOptionalPartCharacter && 0 < u) ? g(u, _(u, a, u - 1)) : W.validPositions[u]).match,
                        a = l.locator.slice(),
                        c.push(!0 === n ? l.input : !1 === n ? s.nativeDef : $(u, s));
                    else {
                        s = (l = x(u, a, u - 1)).match,
                        a = l.locator.slice();
                        var f = !0 !== i && (!1 !== U.jitMasking ? U.jitMasking : s.jit);
                        (!1 === f || void 0 === f || "number" == typeof f && isFinite(f) && u < f) && c.push(!1 === n ? s.nativeDef : $(u, s))
                    }
                    "auto" === U.keepStatic && s.newBlockMarker && !0 !== s.static && (U.keepStatic = u - 1),
                    u++
                } while ((void 0 === y || u < y) && (!0 !== s.static || "" !== s.def) || u < t);return "" === c[c.length - 1] && c.pop(),
                !1 === n && void 0 !== W.maskLength || (W.maskLength = u - 1),
                U.greedy = r,
                c
            }
            function w(e) {
                !(W.buffer = void 0) !== e && (W.validPositions = {},
                W.p = 0)
            }
            function S(e, t, n) {
                var i = -1
                  , o = -1
                  , r = n || W.validPositions;
                for (var a in void 0 === e && (e = -1),
                r) {
                    var s = parseInt(a);
                    r[s] && (t || !0 !== r[s].generatedInput) && (s <= e && (i = s),
                    e <= s && (o = s))
                }
                return -1 === i || i == e ? o : -1 == o ? i : e - i < o - e ? i : o
            }
            function E(e) {
                var t = e.locator[e.alternation];
                return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]),
                void 0 !== t ? t.toString() : ""
            }
            function d(e, t) {
                var n = (null != e.alternation ? e.mloc[E(e)] : e.locator).join("");
                if ("" !== n)
                    for (; n.length < t; )
                        n += "0";
                return n
            }
            function g(e, t) {
                for (var n, i, o, r = d(C(e = 0 < e ? e - 1 : 0)), a = 0; a < t.length; a++) {
                    var s = t[a];
                    n = d(s, r.length);
                    var l = Math.abs(n - r);
                    (void 0 === i || "" !== n && l < i || o && !U.greedy && o.match.optionality && "master" === o.match.newBlockMarker && (!s.match.optionality || !s.match.newBlockMarker) || o && o.match.optionalQuantifier && !s.match.optionalQuantifier) && (i = l,
                    o = s)
                }
                return o
            }
            function x(e, t, n) {
                return W.validPositions[e] || g(e, _(e, t ? t.slice() : t, n))
            }
            function C(e, t) {
                return W.validPositions[e] ? W.validPositions[e] : (t || _(e))[0]
            }
            function k(e, t, n) {
                for (var i = !1, o = _(e), r = n.shiftPositions ? "def" : "nativeDef", a = 0; a < o.length; a++)
                    if (o[a].match && o[a].match[r] === t.match[r]) {
                        i = !0;
                        break
                    }
                return !1 === i && void 0 !== W.jitOffset[e] && (i = k(e + W.jitOffset[e], t, n)),
                i
            }
            function _(L, e, t) {
                var R, n, i, o, r = W.maskToken, $ = e ? t : 0, a = e ? e.slice() : [0], H = [], B = !1, q = e ? e.join("") : "";
                function z(M, N, e, t) {
                    function F(e, t, n) {
                        function r(n, i) {
                            var o = 0 === re.inArray(n, i.matches);
                            return o || re.each(i.matches, function(e, t) {
                                if (!0 === t.isQuantifier ? o = r(n, i.matches[e - 1]) : Object.prototype.hasOwnProperty.call(t, "matches") && (o = r(n, t)),
                                o)
                                    return !1
                            }),
                            o
                        }
                        function i(e, o, r) {
                            var a, s;
                            if ((W.tests[e] || W.validPositions[e]) && re.each(W.tests[e] || [W.validPositions[e]], function(e, t) {
                                if (t.mloc[o])
                                    return a = t,
                                    !1;
                                var n = void 0 !== r ? r : t.alternation
                                  , i = void 0 !== t.locator[n] ? t.locator[n].toString().indexOf(o) : -1;
                                (void 0 === s || i < s) && -1 !== i && (a = t,
                                s = i)
                            }),
                            a) {
                                var t = a.locator[a.alternation];
                                return (a.mloc[o] || a.mloc[t] || a.locator).slice((void 0 !== r ? r : a.alternation) + 1)
                            }
                            return void 0 !== r ? i(e, o) : void 0
                        }
                        function o(e, t) {
                            function n(e) {
                                for (var t, n = [], i = -1, o = 0, r = e.length; o < r; o++)
                                    if ("-" === e.charAt(o))
                                        for (t = e.charCodeAt(o + 1); ++i < t; )
                                            n.push(String.fromCharCode(i));
                                    else
                                        i = e.charCodeAt(o),
                                        n.push(e.charAt(o));
                                return n.join("")
                            }
                            return e.match.def === t.match.nativeDef || !(!(U.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")))
                        }
                        function a(e, t) {
                            if (void 0 === t || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                                e.mloc = e.mloc || {};
                                var n = e.locator[e.alternation];
                                if (void 0 !== n) {
                                    if ("string" == typeof n && (n = n.split(",")[0]),
                                    void 0 === e.mloc[n] && (e.mloc[n] = e.locator.slice()),
                                    void 0 !== t) {
                                        for (var i in t.mloc)
                                            "string" == typeof i && (i = i.split(",")[0]),
                                            void 0 === e.mloc[i] && (e.mloc[i] = t.mloc[i]);
                                        e.locator[e.alternation] = Object.keys(e.mloc).join(",")
                                    }
                                    return !0
                                }
                                e.alternation = void 0
                            }
                            return !1
                        }
                        if (500 < $ && void 0 !== n)
                            throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + W.mask;
                        if ($ === L && void 0 === e.matches)
                            return H.push({
                                match: e,
                                locator: t.reverse(),
                                cd: q,
                                mloc: {}
                            }),
                            !0;
                        if (void 0 !== e.matches) {
                            if (e.isGroup && n !== e) {
                                if (e = F(M.matches[re.inArray(e, M.matches) + 1], t, n))
                                    return !0
                            } else if (e.isOptional) {
                                var s = e
                                  , l = H.length;
                                if (e = z(e, N, t, n)) {
                                    if (re.each(H, function(e, t) {
                                        l <= e && (t.match.optionality = !0)
                                    }),
                                    R = H[H.length - 1].match,
                                    void 0 !== n || !r(R, s))
                                        return !0;
                                    B = !0,
                                    $ = L
                                }
                            } else if (e.isAlternator) {
                                var c, u = e, f = [], d = H.slice(), p = t.length, h = 0 < N.length ? N.shift() : -1;
                                if (-1 === h || "string" == typeof h) {
                                    var m, g = $, v = N.slice(), y = [];
                                    if ("string" == typeof h)
                                        y = h.split(",");
                                    else
                                        for (m = 0; m < u.matches.length; m++)
                                            y.push(m.toString());
                                    if (void 0 !== W.excludes[L]) {
                                        for (var b = y.slice(), x = 0, k = W.excludes[L].length; x < k; x++)
                                            y.splice(y.indexOf(W.excludes[L][x].toString()), 1);
                                        0 === y.length && (delete W.excludes[L],
                                        y = b)
                                    }
                                    (!0 === U.keepStatic || isFinite(parseInt(U.keepStatic)) && g >= U.keepStatic) && (y = y.slice(0, 1));
                                    for (var _ = !1, w = 0; w < y.length; w++) {
                                        m = parseInt(y[w]),
                                        H = [],
                                        N = "string" == typeof h && i($, m, p) || v.slice(),
                                        u.matches[m] && F(u.matches[m], [m].concat(t), n) ? e = !0 : 0 === w && (_ = !0),
                                        c = H.slice(),
                                        $ = g,
                                        H = [];
                                        for (var S = 0; S < c.length; S++) {
                                            var E = c[S]
                                              , C = !1;
                                            E.match.jit = E.match.jit || _,
                                            E.alternation = E.alternation || p,
                                            a(E);
                                            for (var T = 0; T < f.length; T++) {
                                                var A = f[T];
                                                if ("string" != typeof h || void 0 !== E.alternation && -1 !== re.inArray(E.locator[E.alternation].toString(), y)) {
                                                    if (E.match.nativeDef === A.match.nativeDef) {
                                                        C = !0,
                                                        a(A, E);
                                                        break
                                                    }
                                                    if (o(E, A)) {
                                                        a(E, A) && (C = !0,
                                                        f.splice(f.indexOf(A), 0, E));
                                                        break
                                                    }
                                                    if (o(A, E)) {
                                                        a(A, E);
                                                        break
                                                    }
                                                    if (j = A,
                                                    !0 === (I = E).match.static && !0 !== j.match.static && j.match.fn.test(I.match.def, W, L, !1, U, !1)) {
                                                        a(E, A) && (C = !0,
                                                        f.splice(f.indexOf(A), 0, E));
                                                        break
                                                    }
                                                }
                                            }
                                            C || f.push(E)
                                        }
                                    }
                                    H = d.concat(f),
                                    $ = L,
                                    B = 0 < H.length,
                                    e = 0 < f.length,
                                    N = v.slice()
                                } else
                                    e = F(u.matches[h] || M.matches[h], [h].concat(t), n);
                                if (e)
                                    return !0
                            } else if (e.isQuantifier && n !== M.matches[re.inArray(e, M.matches) - 1])
                                for (var P = e, D = 0 < N.length ? N.shift() : 0; D < (isNaN(P.quantifier.max) ? D + 1 : P.quantifier.max) && $ <= L; D++) {
                                    var O = M.matches[re.inArray(P, M.matches) - 1];
                                    if (e = F(O, [D].concat(t), O)) {
                                        if ((R = H[H.length - 1].match).optionalQuantifier = D >= P.quantifier.min,
                                        R.jit = (D || 1) * O.matches.indexOf(R) >= P.quantifier.jit,
                                        R.optionalQuantifier && r(R, O)) {
                                            B = !0,
                                            $ = L;
                                            break
                                        }
                                        return R.jit && (W.jitOffset[L] = O.matches.length - O.matches.indexOf(R)),
                                        !0
                                    }
                                }
                            else if (e = z(e, N, t, n))
                                return !0
                        } else
                            $++;
                        var I, j
                    }
                    for (var n = 0 < N.length ? N.shift() : 0; n < M.matches.length; n++)
                        if (!0 !== M.matches[n].isQuantifier) {
                            var i = F(M.matches[n], [n].concat(e), t);
                            if (i && $ === L)
                                return i;
                            if (L < $)
                                break
                        }
                }
                if (-1 < L && (void 0 === y || L < y)) {
                    if (void 0 === e) {
                        for (var s, l = L - 1; void 0 === (s = W.validPositions[l] || W.tests[l]) && -1 < l; )
                            l--;
                        void 0 !== s && -1 < l && (n = l,
                        i = s,
                        o = [],
                        re.isArray(i) || (i = [i]),
                        0 < i.length && (void 0 === i[0].alternation || !0 === U.keepStatic ? 0 === (o = g(n, i.slice()).locator.slice()).length && (o = i[0].locator.slice()) : re.each(i, function(e, t) {
                            if ("" !== t.def)
                                if (0 === o.length)
                                    o = t.locator.slice();
                                else
                                    for (var n = 0; n < o.length; n++)
                                        t.locator[n] && -1 === o[n].toString().indexOf(t.locator[n]) && (o[n] += "," + t.locator[n])
                        })),
                        q = (a = o).join(""),
                        $ = l)
                    }
                    if (W.tests[L] && W.tests[L][0].cd === q)
                        return W.tests[L];
                    for (var c = a.shift(); c < r.length; c++) {
                        if (z(r[c], a, [c]) && $ === L || L < $)
                            break
                    }
                }
                return 0 !== H.length && !B || H.push({
                    match: {
                        fn: null,
                        static: !0,
                        optionality: !1,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: q
                }),
                void 0 !== e && W.tests[L] ? re.extend(!0, [], H) : (W.tests[L] = re.extend(!0, [], H),
                W.tests[L])
            }
            function T() {
                return void 0 === W._buffer && (W._buffer = v(!1, 1),
                void 0 === W.buffer && (W.buffer = W._buffer.slice())),
                W._buffer
            }
            function A(e) {
                return void 0 !== W.buffer && !0 !== e || (W.buffer = v(!0, S(), !0),
                void 0 === W._buffer && (W._buffer = W.buffer.slice())),
                W.buffer
            }
            function P(e, t, n) {
                var i, o, r = U.skipOptionalPartCharacter, a = b ? n.slice().reverse() : n;
                if (!(U.skipOptionalPartCharacter = "") === e)
                    w(),
                    W.tests = {},
                    e = 0,
                    t = n.length,
                    o = B({
                        begin: 0,
                        end: 0
                    }, !1);
                else {
                    for (i = e; i < t; i++)
                        delete W.validPositions[i];
                    o = e
                }
                var s = new re.Event("keypress");
                for (i = e; i < t; i++) {
                    s.which = a[i].toString().charCodeAt(0),
                    m = !1;
                    var l = z.keypressEvent.call(u, s, !0, !1, !1, o);
                    !1 !== l && (o = l.forwardPosition)
                }
                U.skipOptionalPartCharacter = r
            }
            function D(e, t, n) {
                for (var i, o = U.greedy ? t : t.slice(0, 1), r = !1, a = void 0 !== n ? n.split(",") : [], s = 0; s < a.length; s++)
                    -1 !== (i = e.indexOf(a[s])) && e.splice(i, 1);
                for (var l = 0; l < e.length; l++)
                    if (-1 !== re.inArray(e[l], o)) {
                        r = !0;
                        break
                    }
                return r
            }
            function O(e, t, n, i, o, r) {
                var a, s, l, c, u, f, d, p, h, m = re.extend(!0, {}, W.validPositions), g = re.extend(!0, {}, W.tests), v = !1, y = !1, b = void 0 !== o ? o : S();
                if (r && (p = r.begin,
                h = r.end,
                r.begin > r.end && (p = r.end,
                h = r.begin)),
                -1 === b && void 0 === o)
                    s = (c = C(a = 0)).alternation;
                else
                    for (; 0 <= b; b--)
                        if ((l = W.validPositions[b]) && void 0 !== l.alternation) {
                            if (c && c.locator[l.alternation] !== l.locator[l.alternation])
                                break;
                            a = b,
                            s = W.validPositions[a].alternation,
                            c = l
                        }
                if (void 0 !== s) {
                    d = parseInt(a),
                    W.excludes[d] = W.excludes[d] || [],
                    !0 !== e && W.excludes[d].push(E(c));
                    var x = []
                      , k = -1;
                    for (u = d; u < S(void 0, !0) + 1; u++)
                        -1 === k && e <= u && void 0 !== t && (x.push(t),
                        k = x.length - 1),
                        (f = W.validPositions[u]) && !0 !== f.generatedInput && (void 0 === r || u < p || h <= u) && x.push(f.input),
                        delete W.validPositions[u];
                    for (-1 === k && void 0 !== t && (x.push(t),
                    k = x.length - 1); void 0 !== W.excludes[d] && W.excludes[d].length < 10; ) {
                        for (W.tests = {},
                        w(!0),
                        v = !0,
                        u = 0; u < x.length && (v = I(v.caret || S(void 0, !0) + 1, x[u], !1, i, !0)); u++)
                            u === k && (y = v),
                            1 == e && v && (y = {
                                caretPos: u
                            });
                        if (v)
                            break;
                        if (w(),
                        c = C(d),
                        W.validPositions = re.extend(!0, {}, m),
                        W.tests = re.extend(!0, {}, g),
                        !W.excludes[d]) {
                            y = O(e, t, n, i, d - 1, r);
                            break
                        }
                        var _ = E(c);
                        if (-1 !== W.excludes[d].indexOf(_)) {
                            y = O(e, t, n, i, d - 1, r);
                            break
                        }
                        for (W.excludes[d].push(_),
                        u = d; u < S(void 0, !0) + 1; u++)
                            delete W.validPositions[u]
                    }
                }
                return y && !1 === U.keepStatic || delete W.excludes[d],
                y
            }
            function I(c, e, t, u, n, i) {
                function f(e) {
                    return b ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1
                }
                t = !0 === t;
                var o = c;
                function d(e) {
                    if (void 0 !== e) {
                        if (void 0 !== e.remove && (re.isArray(e.remove) || (e.remove = [e.remove]),
                        re.each(e.remove.sort(function(e, t) {
                            return t.pos - e.pos
                        }), function(e, t) {
                            M({
                                begin: t,
                                end: t + 1
                            })
                        }),
                        e.remove = void 0),
                        void 0 !== e.insert && (re.isArray(e.insert) || (e.insert = [e.insert]),
                        re.each(e.insert.sort(function(e, t) {
                            return e.pos - t.pos
                        }), function(e, t) {
                            "" !== t.c && I(t.pos, t.c, void 0 === t.strict || t.strict, void 0 !== t.fromIsValid ? t.fromIsValid : u)
                        }),
                        e.insert = void 0),
                        e.refreshFromBuffer && e.buffer) {
                            var t = e.refreshFromBuffer;
                            P(!0 === t ? t : t.start, t.end, e.buffer),
                            e.refreshFromBuffer = void 0
                        }
                        void 0 !== e.rewritePosition && (o = e.rewritePosition,
                        e = !0)
                    }
                    return e
                }
                function r(r, a, s) {
                    var l = !1;
                    return re.each(_(r), function(e, t) {
                        var n = t.match;
                        if (A(!0),
                        !1 !== (l = null != n.fn ? n.fn.test(a, W, r, s, U, f(c)) : (a === n.def || a === U.skipOptionalPartCharacter) && "" !== n.def && {
                            c: $(r, n, !0) || n.def,
                            pos: r
                        })) {
                            var i = void 0 !== l.c ? l.c : a
                              , o = r;
                            return i = i === U.skipOptionalPartCharacter && !0 === n.static ? $(r, n, !0) || n.def : i,
                            !0 !== (l = d(l)) && void 0 !== l.pos && l.pos !== r && (o = l.pos),
                            !0 !== l && void 0 === l.pos && void 0 === l.c || !1 === M(c, re.extend({}, t, {
                                input: function(e, t, n) {
                                    switch (U.casing || t.casing) {
                                    case "upper":
                                        e = e.toUpperCase();
                                        break;
                                    case "lower":
                                        e = e.toLowerCase();
                                        break;
                                    case "title":
                                        var i = W.validPositions[n - 1];
                                        e = 0 === n || i && i.input === String.fromCharCode(de.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                        break;
                                    default:
                                        if (re.isFunction(U.casing)) {
                                            var o = Array.prototype.slice.call(arguments);
                                            o.push(W.validPositions),
                                            e = U.casing.apply(this, o)
                                        }
                                    }
                                    return e
                                }(i, n, o)
                            }), u, o) && (l = !1),
                            !1
                        }
                    }),
                    l
                }
                void 0 !== c.begin && (o = b ? c.end : c.begin);
                var a = !0
                  , s = re.extend(!0, {}, W.validPositions);
                if (!1 === U.keepStatic && void 0 !== W.excludes[o] && !0 !== n && !0 !== u)
                    for (var l = o; l < (b ? c.begin : c.end); l++)
                        void 0 !== W.excludes[l] && (W.excludes[l] = void 0,
                        delete W.tests[l]);
                if (re.isFunction(U.preValidation) && !0 !== u && !0 !== i && (a = d(a = U.preValidation(A(), o, e, f(c), U, W, c, t || n))),
                !0 === a) {
                    if (void 0 === y || o < y) {
                        if (a = r(o, e, t),
                        (!t || !0 === u) && !1 === a && !0 !== i) {
                            var p = W.validPositions[o];
                            if (!p || !0 !== p.match.static || p.match.def !== e && e !== U.skipOptionalPartCharacter) {
                                if (U.insertMode || void 0 === W.validPositions[F(o)] || c.end > o) {
                                    var h = !1;
                                    if (W.jitOffset[o] && void 0 === W.validPositions[F(o)] && (!1 !== (a = I(o + W.jitOffset[o], e, !0)) && (!0 !== n && (a.caret = o),
                                    h = !0)),
                                    c.end > o && (W.validPositions[o] = void 0),
                                    !h && !N(o, !0))
                                        for (var m = o + 1, g = F(o); m <= g; m++)
                                            if (!1 !== (a = r(m, e, t))) {
                                                a = j(o, void 0 !== a.pos ? a.pos : m) || a,
                                                o = m;
                                                break
                                            }
                                }
                            } else
                                a = {
                                    caret: F(o)
                                }
                        }
                    } else
                        a = !1;
                    !1 !== a || !1 !== U.keepStatic && !Y(A()) && 0 !== o || t || !0 === n ? f(c) && W.tests[o] && 1 < W.tests[o].length && !0 === U.keepStatic && !t && !0 !== n && (a = O(!0)) : a = O(o, e, t, u, void 0, c),
                    !0 === a && (a = {
                        pos: o
                    })
                }
                if (re.isFunction(U.postValidation) && !1 !== a && !0 !== u && !0 !== i) {
                    var v = U.postValidation(A(!0), void 0 !== c.begin ? b ? c.end : c.begin : c, a, U, W, t);
                    void 0 !== v && (a = !0 === v ? a : v)
                }
                return a && void 0 === a.pos && (a.pos = o),
                !1 === a || !0 === i ? (w(!0),
                W.validPositions = re.extend(!0, {}, s)) : j(void 0, o, !0),
                d(a)
            }
            function j(e, t, n) {
                if (void 0 === e)
                    for (e = t - 1; 0 < e && !W.validPositions[e]; e--)
                        ;
                for (var i = e; i < t; i++)
                    if (void 0 === W.validPositions[i] && !N(i, !0)) {
                        if (0 == i ? C(i) : W.validPositions[i - 1]) {
                            var o = _(i).slice();
                            "" === o[o.length - 1].match.def && o.pop();
                            var r, a = g(i, o);
                            if (a && (!0 !== a.match.jit || "master" === a.match.newBlockMarker && (r = W.validPositions[i + 1]) && !0 === r.match.optionalQuantifier) && ((a = re.extend({}, a, {
                                input: $(i, a.match, !0) || a.match.def
                            })).generatedInput = !0,
                            M(i, a, !0),
                            !0 !== n))
                                return I(t, W.validPositions[t].input, !(W.validPositions[t] = void 0), !0)
                        }
                    }
            }
            function M(e, t, n, i) {
                function o(e, t, n) {
                    var i = t[e];
                    if (void 0 === i || !0 !== i.match.static || !0 === i.match.optionality || void 0 !== t[0] && void 0 !== t[0].alternation)
                        return !1;
                    var o = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1]
                      , r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                    return o && r
                }
                var r = 0
                  , a = void 0 !== e.begin ? e.begin : e
                  , s = void 0 !== e.end ? e.end : e;
                if (e.begin > e.end && (a = e.end,
                s = e.begin),
                void 0 === t && !1 === U.insertMode && s < W.maskLength && (0 === a && 0 === s || (a += 1,
                s += 1)),
                i = void 0 !== i ? i : a,
                a !== s || U.insertMode && void 0 !== W.validPositions[i] && void 0 === n || void 0 === t) {
                    var l, c = re.extend(!0, {}, W.validPositions), u = void 0 === t && !1 === U.insertMode ? 1 < s ? s - 1 : s : S(void 0, !0);
                    for (W.p = a,
                    l = u; a <= l; l--)
                        delete W.validPositions[l],
                        void 0 === t && delete W.tests[l + 1];
                    var f, d = !0, p = i, h = p;
                    if (l = p,
                    t && (W.validPositions[i] = re.extend(!0, {}, t),
                    h++,
                    p++,
                    a < s && l++),
                    t || U.insertMode)
                        for (; l <= u; l++) {
                            if (void 0 !== (f = c[l]) && !0 !== f.generatedInput && (s <= l || a <= l && o(l, c, {
                                begin: a,
                                end: s
                            }))) {
                                for (; "" !== C(h).match.def; ) {
                                    if (k(h, f, U) || "+" === f.match.def) {
                                        "+" === f.match.def && A(!0);
                                        var m = I(h, f.input, "+" !== f.match.def, "+" !== f.match.def);
                                        if (d = !1 !== m,
                                        p = (m.pos || h) + 1,
                                        !d)
                                            break
                                    } else
                                        d = !1;
                                    if (d) {
                                        void 0 === t && f.match.static && l === e.begin && r++;
                                        break
                                    }
                                    if (!d && h > W.maskLength)
                                        break;
                                    h++
                                }
                                "" == C(h).match.def && (d = !1),
                                h = p
                            }
                            if (!d)
                                break
                        }
                    if (!d)
                        return W.validPositions = re.extend(!0, {}, c),
                        w(!0),
                        !1
                } else
                    t && (W.validPositions[i] = re.extend(!0, {}, t));
                return w(!0),
                r
            }
            function N(e, t, n) {
                var i = x(e).match;
                if ("" === i.def && (i = C(e).match),
                !0 !== i.static)
                    return i.fn;
                if (!0 === n && void 0 !== W.validPositions[e] && !0 !== W.validPositions[e].generatedInput)
                    return !0;
                if (!0 !== t && -1 < e) {
                    var o = _(e);
                    return o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)
                }
                return !1
            }
            function F(e, t) {
                for (var n = e + 1; "" !== C(n).match.def && (!0 === t && (!0 !== C(n).match.newBlockMarker || !N(n, void 0, !0)) || !0 !== t && !N(n, void 0, !0)); )
                    n++;
                return n
            }
            function L(e, t) {
                var n, i = e;
                if (i <= 0)
                    return 0;
                for (; 0 < --i && (!0 === t && !0 !== C(i).match.newBlockMarker || !0 !== t && !N(i, void 0, !0) && ((n = _(i)).length < 2 || 2 === n.length && "" === n[1].match.def)); )
                    ;
                return i
            }
            function R(e, t, n, i, o) {
                if (i && re.isFunction(U.onBeforeWrite)) {
                    var r = U.onBeforeWrite.call(c, i, t, n, U);
                    if (r) {
                        if (r.refreshFromBuffer) {
                            var a = r.refreshFromBuffer;
                            P(!0 === a ? a : a.start, a.end, r.buffer || t),
                            t = A(!0)
                        }
                        void 0 !== n && (n = void 0 !== r.caret ? r.caret : n)
                    }
                }
                if (void 0 !== e && (e.inputmask._valueSet(t.join("")),
                void 0 === n || void 0 !== i && "blur" === i.type || K(e, n),
                !0 === o)) {
                    var s = re(e)
                      , l = e.inputmask._valueGet();
                    h = !0,
                    s.trigger("input"),
                    setTimeout(function() {
                        l === T().join("") ? s.trigger("cleared") : !0 === Y(t) && s.trigger("complete")
                    }, 0)
                }
            }
            function $(e, t, n) {
                if (void 0 !== (t = t || C(e).match).placeholder || !0 === n)
                    return re.isFunction(t.placeholder) ? t.placeholder(U) : t.placeholder;
                if (!0 !== t.static)
                    return U.placeholder.charAt(e % U.placeholder.length);
                if (-1 < e && void 0 === W.validPositions[e]) {
                    var i, o = _(e), r = [];
                    if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                        for (var a = 0; a < o.length; a++)
                            if (!0 !== o[a].match.optionality && !0 !== o[a].match.optionalQuantifier && (!0 === o[a].match.static || void 0 === i || !1 !== o[a].match.fn.test(i.match.def, W, e, !0, U)) && (r.push(o[a]),
                            !0 === o[a].match.static && (i = o[a]),
                            1 < r.length && /[0-9a-bA-Z]/.test(r[0].match.def)))
                                return U.placeholder.charAt(e % U.placeholder.length)
                }
                return t.def
            }
            function H(e, t) {
                if (le) {
                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                        var n = A().slice()
                          , i = e.inputmask._valueGet();
                        if (i !== t) {
                            var o = S();
                            -1 === o && i === T().join("") ? n = [] : -1 !== o && Q(n),
                            R(e, n)
                        }
                    }
                } else
                    e.placeholder !== t && (e.placeholder = t,
                    "" === e.placeholder && e.removeAttribute("placeholder"))
            }
            function B(e, t) {
                if (t && (b ? e.end = e.begin : e.begin = e.end),
                e.begin === e.end)
                    switch (U.positionCaretOnClick) {
                    case "none":
                        break;
                    case "select":
                        return {
                            begin: 0,
                            end: A().length
                        };
                    case "ignore":
                        return F(S());
                    case "radixFocus":
                        if (function(e) {
                            if ("" !== U.radixPoint && 0 !== U.digits) {
                                var t = W.validPositions;
                                if (void 0 === t[e] || t[e].input === $(e)) {
                                    if (e < F(-1))
                                        return !0;
                                    var n = re.inArray(U.radixPoint, A());
                                    if (-1 !== n) {
                                        for (var i in t)
                                            if (t[i] && n < i && t[i].input !== $(i))
                                                return !1;
                                        return !0
                                    }
                                }
                            }
                            return !1
                        }(e.begin)) {
                            var n = A().join("").indexOf(U.radixPoint);
                            return U.numericInput ? F(n) : n
                        }
                    default:
                        var i = e.begin
                          , o = S(i, !0)
                          , r = F(-1 !== o || N(0) ? o : 0);
                        if (i < r)
                            return N(i, !0) || N(i - 1, !0) ? i : F(i);
                        var a = W.validPositions[o]
                          , s = x(r, a ? a.match.locator : void 0, a)
                          , l = $(r, s.match);
                        if ("" !== l && A()[r] !== l && !0 !== s.match.optionalQuantifier && !0 !== s.match.newBlockMarker || !N(r, U.keepStatic) && s.match.def === l) {
                            var c = F(r);
                            (c <= i || i === r) && (r = c)
                        }
                        return r
                    }
            }
            var i, q = {
                on: function(r, e, a) {
                    function t(e) {
                        e.originalEvent && (e = e.originalEvent || e,
                        arguments[0] = e);
                        var t, n = this;
                        if (void 0 === n.inputmask && "FORM" !== this.nodeName) {
                            var i = re.data(n, "_inputmask_opts");
                            i ? new Inputmask(i).mask(n) : q.off(n)
                        } else {
                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(n.disabled || n.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === U.tabThrough && e.keyCode === de.TAB))) {
                                switch (e.type) {
                                case "input":
                                    if (!0 === h || e.inputType && "insertCompositionText" === e.inputType)
                                        return h = !1,
                                        e.preventDefault();
                                    if (ce)
                                        return t = arguments,
                                        setTimeout(function() {
                                            a.apply(n, t),
                                            K(n, n.inputmask.caretPos, void 0, !0)
                                        }, 0),
                                        !1;
                                    break;
                                case "keydown":
                                    h = l = !1;
                                    break;
                                case "keypress":
                                    if (!0 === l)
                                        return e.preventDefault();
                                    l = !0;
                                    break;
                                case "click":
                                case "focus":
                                    return f ? (f = !1,
                                    r.blur(),
                                    H(r, (b ? T().slice().reverse() : T()).join("")),
                                    setTimeout(function() {
                                        r.focus()
                                    }, 3e3)) : (t = arguments,
                                    setTimeout(function() {
                                        a.apply(n, t)
                                    }, 0)),
                                    !1
                                }
                                var o = a.apply(n, arguments);
                                return !1 === o && (e.preventDefault(),
                                e.stopPropagation()),
                                o
                            }
                            e.preventDefault()
                        }
                    }
                    r.inputmask.events[e] = r.inputmask.events[e] || [],
                    r.inputmask.events[e].push(t),
                    -1 !== re.inArray(e, ["submit", "reset"]) ? null !== r.form && re(r.form).on(e, t) : re(r).on(e, t)
                },
                off: function(i, e) {
                    var t;
                    i.inputmask && i.inputmask.events && (e ? (t = [])[e] = i.inputmask.events[e] : t = i.inputmask.events,
                    re.each(t, function(e, t) {
                        for (; 0 < t.length; ) {
                            var n = t.pop();
                            -1 !== re.inArray(e, ["submit", "reset"]) ? null !== i.form && re(i.form).off(e, n) : re(i).off(e, n)
                        }
                        delete i.inputmask.events[e]
                    }))
                }
            }, z = {
                keydownEvent: function(e) {
                    var t = this
                      , n = re(t)
                      , i = e.keyCode
                      , o = K(t)
                      , r = U.onKeyDown.call(this, e, A(), o, U);
                    if (void 0 !== r)
                        return r;
                    if (i === de.BACKSPACE || i === de.DELETE || fe && i === de.BACKSPACE_SAFARI || e.ctrlKey && i === de.X && !("oncut"in t))
                        e.preventDefault(),
                        X(t, i, o),
                        R(t, A(!0), W.p, e, t.inputmask._valueGet() !== A().join(""));
                    else if (i === de.END || i === de.PAGE_DOWN) {
                        e.preventDefault();
                        var a = F(S());
                        K(t, e.shiftKey ? o.begin : a, a, !0)
                    } else
                        i === de.HOME && !e.shiftKey || i === de.PAGE_UP ? (e.preventDefault(),
                        K(t, 0, e.shiftKey ? o.begin : 0, !0)) : (U.undoOnEscape && i === de.ESCAPE || 90 === i && e.ctrlKey) && !0 !== e.altKey ? (V(t, !0, !1, p.split("")),
                        n.trigger("click")) : !0 === U.tabThrough && i === de.TAB ? (!0 === e.shiftKey ? (!0 === C(o.begin).match.static && (o.begin = F(o.begin)),
                        o.end = L(o.begin, !0),
                        o.begin = L(o.end, !0)) : (o.begin = F(o.begin, !0),
                        o.end = F(o.begin, !0),
                        o.end < W.maskLength && o.end--),
                        o.begin < W.maskLength && (e.preventDefault(),
                        K(t, o.begin, o.end))) : e.shiftKey || !1 === U.insertMode && (i === de.RIGHT ? setTimeout(function() {
                            var e = K(t);
                            K(t, e.begin)
                        }, 0) : i === de.LEFT && setTimeout(function() {
                            var e = G(t.inputmask.caretPos.begin);
                            G(t.inputmask.caretPos.end);
                            K(t, b ? e + (e === W.maskLength ? 0 : 1) : e - (0 === e ? 0 : 1))
                        }, 0));
                    m = -1 !== re.inArray(i, U.ignorables)
                },
                keypressEvent: function(e, t, n, i, o) {
                    var r = this
                      , a = re(r)
                      , s = e.which || e.charCode || e.keyCode;
                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || m))
                        return s === de.ENTER && p !== A().join("") && (p = A().join(""),
                        setTimeout(function() {
                            a.trigger("change")
                        }, 0)),
                        h = !0;
                    if (s) {
                        46 === s && !1 === e.shiftKey && "" !== U.radixPoint && (s = U.radixPoint.charCodeAt(0));
                        var l, c = t ? {
                            begin: o,
                            end: o
                        } : K(r), u = String.fromCharCode(s);
                        W.writeOutBuffer = !0;
                        var f = I(c, u, i);
                        if (!1 !== f && (w(!0),
                        l = void 0 !== f.caret ? f.caret : F(f.pos.begin ? f.pos.begin : f.pos),
                        W.p = l),
                        l = U.numericInput && void 0 === f.caret ? L(l) : l,
                        !1 !== n && (setTimeout(function() {
                            U.onKeyValidation.call(r, s, f, U)
                        }, 0),
                        W.writeOutBuffer && !1 !== f)) {
                            var d = A();
                            R(r, d, l, e, !0 !== t)
                        }
                        if (e.preventDefault(),
                        t)
                            return !1 !== f && (f.forwardPosition = l),
                            f
                    }
                },
                pasteEvent: function(e) {
                    var t, n = this.inputmask._valueGet(!0), i = K(this);
                    b && (t = i.end,
                    i.end = i.begin,
                    i.begin = t);
                    var o = n.substr(0, i.begin)
                      , r = n.substr(i.end, n.length);
                    if (o == (b ? T().slice().reverse() : T()).slice(0, i.begin).join("") && (o = ""),
                    r == (b ? T().slice().reverse() : T()).slice(i.end).join("") && (r = ""),
                    ae.clipboardData && ae.clipboardData.getData)
                        n = o + ae.clipboardData.getData("Text") + r;
                    else {
                        if (!e.clipboardData || !e.clipboardData.getData)
                            return !0;
                        n = o + e.clipboardData.getData("text/plain") + r
                    }
                    var a = n;
                    if (re.isFunction(U.onBeforePaste)) {
                        if (!1 === (a = U.onBeforePaste.call(c, n, U)))
                            return e.preventDefault();
                        a = a || n
                    }
                    return V(this, !1, !1, a.toString().split("")),
                    R(this, A(), F(S()), e, p !== A().join("")),
                    e.preventDefault()
                },
                inputFallBackEvent: function(e) {
                    var i = this
                      , t = i.inputmask._valueGet(!0)
                      , n = (b ? A().slice().reverse() : A()).join("")
                      , o = K(i, void 0, void 0, !0);
                    if (n !== t) {
                        var r = function(e, t, n) {
                            for (var i, o, r, a = e.substr(0, n.begin).split(""), s = e.substr(n.begin).split(""), l = t.substr(0, n.begin).split(""), c = t.substr(n.begin).split(""), u = a.length >= l.length ? a.length : l.length, f = s.length >= c.length ? s.length : c.length, d = "", p = []; a.length < u; )
                                a.push("~");
                            for (; l.length < u; )
                                l.push("~");
                            for (; s.length < f; )
                                s.unshift("~");
                            for (; c.length < f; )
                                c.unshift("~");
                            var h = a.concat(s)
                              , m = l.concat(c);
                            for (o = 0,
                            i = h.length; o < i; o++)
                                switch (r = $(G(o)),
                                d) {
                                case "insertText":
                                    o = i;
                                    break;
                                case "insertReplacementText":
                                case "deleteContentBackward":
                                    "~" === h[o] ? n.end++ : o = i;
                                    break;
                                default:
                                    h[o] !== m[o] && (m[o] === r && "~" === m[o + 1] || "~" === m[o] ? (d = "insertText",
                                    p.push(h[o]),
                                    n.begin--,
                                    n.end--) : "~" === m[o + 1] && m[o] === h[o + 1] ? (d = "insertText",
                                    p.push(h[o]),
                                    n.begin--,
                                    n.end--) : h[o] !== r && "~" !== h[o] && ("~" === h[o + 1] || m[o] !== h[o] && m[o + 1] === h[o + 1]) ? (d = "insertReplacementText",
                                    p.push(h[o]),
                                    n.begin--) : "~" === h[o] ? (d = "deleteContentBackward",
                                    N(G(o), !0) && n.end++) : o = i)
                                }
                            return {
                                action: d,
                                data: p,
                                caret: n
                            }
                        }(t = function(e, t) {
                            if (ue) {
                                var n = e.replace(A().join(""), "");
                                if (1 === n.length) {
                                    var i = e.split("");
                                    i.splice(t.begin, 0, n),
                                    e = i.join("")
                                }
                            }
                            return e
                        }(t, o), n, o);
                        switch (se.activeElement !== i && i.focus(),
                        R(i, A()),
                        K(i, o.begin, o.end, !0),
                        r.action) {
                        case "insertText":
                        case "insertReplacementText":
                            re.each(r.data, function(e, t) {
                                var n = new re.Event("keypress");
                                n.which = t.charCodeAt(0),
                                m = !1,
                                z.keypressEvent.call(i, n)
                            }),
                            setTimeout(function() {
                                s.trigger("keyup")
                            }, 0);
                            break;
                        case "deleteContentBackward":
                            var a = new re.Event("keydown");
                            a.keyCode = de.BACKSPACE,
                            z.keydownEvent.call(i, a);
                            break;
                        default:
                            Z(i, t)
                        }
                        e.preventDefault()
                    }
                },
                compositionendEvent: function() {
                    s.trigger("input")
                },
                setValueEvent: function(e, t, n) {
                    var i = e && e.detail ? e.detail[0] : t;
                    void 0 === i && (i = this.inputmask._valueGet(!0)),
                    Z(this, i),
                    (e.detail && void 0 !== e.detail[1] || void 0 !== n) && K(this, e.detail ? e.detail[1] : n)
                },
                focusEvent: function(e) {
                    var t = this.inputmask._valueGet();
                    U.showMaskOnFocus && t !== A().join("") && R(this, A(), F(S())),
                    !0 !== U.positionCaretOnTab || !1 !== n || Y(A()) && -1 !== S() || z.clickEvent.apply(this, [e, !0]),
                    p = A().join("")
                },
                invalidEvent: function() {
                    f = !0
                },
                mouseleaveEvent: function() {
                    n = !1,
                    U.clearMaskOnLostFocus && se.activeElement !== this && H(this, o)
                },
                clickEvent: function(e, t) {
                    if (se.activeElement === this) {
                        var n = B(K(this), t);
                        void 0 !== n && K(this, n)
                    }
                },
                cutEvent: function(e) {
                    var t = K(this)
                      , n = ae.clipboardData || e.clipboardData
                      , i = b ? A().slice(t.end, t.begin) : A().slice(t.begin, t.end);
                    n.setData("text", b ? i.reverse().join("") : i.join("")),
                    se.execCommand && se.execCommand("copy"),
                    X(this, de.DELETE, t),
                    R(this, A(), W.p, e, p !== A().join(""))
                },
                blurEvent: function(e) {
                    var t = re(this);
                    if (this.inputmask) {
                        H(this, o);
                        var n = this.inputmask._valueGet()
                          , i = A().slice();
                        "" !== n && (U.clearMaskOnLostFocus && (-1 === S() && n === T().join("") ? i = [] : Q(i)),
                        !1 === Y(i) && (setTimeout(function() {
                            t.trigger("incomplete")
                        }, 0),
                        U.clearIncomplete && (w(),
                        i = U.clearMaskOnLostFocus ? [] : T().slice())),
                        R(this, i, void 0, e)),
                        p !== A().join("") && (p = A().join(""),
                        t.trigger("change"))
                    }
                },
                mouseenterEvent: function() {
                    n = !0,
                    se.activeElement !== this && (null == o && this.placeholder !== o && (o = this.placeholder),
                    U.showMaskOnHover && H(this, (b ? T().slice().reverse() : T()).join("")))
                },
                submitEvent: function() {
                    p !== A().join("") && s.trigger("change"),
                    U.clearMaskOnLostFocus && -1 === S() && u.inputmask._valueGet && u.inputmask._valueGet() === T().join("") && u.inputmask._valueSet(""),
                    U.clearIncomplete && !1 === Y(A()) && u.inputmask._valueSet(""),
                    U.removeMaskOnSubmit && (u.inputmask._valueSet(u.inputmask.unmaskedvalue(), !0),
                    setTimeout(function() {
                        R(u, A())
                    }, 0))
                },
                resetEvent: function() {
                    u.inputmask.refreshValue = !0,
                    setTimeout(function() {
                        Z(u, u.inputmask._valueGet(!0))
                    }, 0)
                }
            };
            function V(o, e, r, t, n) {
                var a = this || o.inputmask
                  , s = t.slice()
                  , l = ""
                  , c = -1
                  , u = void 0;
                w(),
                W.tests = {},
                c = U.radixPoint ? B(0) : 0,
                W.p = c,
                a.caretPos = {
                    begin: c
                };
                var i, f, d, p = [], h = a.caretPos;
                if (re.each(s, function(e, t) {
                    if (void 0 !== t)
                        if (void 0 === W.validPositions[e] && s[e] === $(e) && N(e, !0) && !1 === I(e, s[e], !0, void 0, void 0, !0))
                            W.p++;
                        else {
                            var n = new re.Event("_checkval");
                            n.which = t.toString().charCodeAt(0),
                            l += t;
                            var i = S(void 0, !0);
                            !function(e, t) {
                                if (U.regex)
                                    return !1;
                                for (var n = v(!0, 0, !1).slice(e, F(e)).join("").replace(/'/g, ""), i = n.indexOf(t); 0 < i && " " === n[i - 1]; )
                                    i--;
                                var o = 0 === i && !N(e) && (C(e).match.nativeDef === t.charAt(0) || !0 === C(e).match.static && C(e).match.nativeDef === "'" + t.charAt(0) || " " === C(e).match.nativeDef && (C(e + 1).match.nativeDef === t.charAt(0) || !0 === C(e + 1).match.static && C(e + 1).match.nativeDef === "'" + t.charAt(0)));
                                return !o && 0 < i && (a.caretPos = {
                                    begin: F(i)
                                }),
                                o
                            }(c, l) ? (u = z.keypressEvent.call(o, n, !0, !1, r, a.caretPos.begin)) && (c = a.caretPos.begin + 1,
                            l = "") : u = z.keypressEvent.call(o, n, !0, !1, r, i + 1),
                            u ? (void 0 !== u.pos && W.validPositions[u.pos] && !0 === W.validPositions[u.pos].match.static && (p.push(u.pos),
                            b || (u.forwardPosition = u.pos + 1)),
                            R(void 0, A(), u.forwardPosition, n, !1),
                            a.caretPos = {
                                begin: u.forwardPosition,
                                end: u.forwardPosition
                            },
                            h = a.caretPos) : a.caretPos = h
                        }
                }),
                0 < p.length)
                    if (!Y(A()) || p.length < F(0)) {
                        for (; void 0 !== (i = p.pop()); )
                            if (i !== p.length) {
                                var m = new re.Event("_checkval")
                                  , g = i + 1;
                                for ((f = W.validPositions[i]).generatedInput = !0,
                                m.which = f.input.charCodeAt(0); (d = W.validPositions[g]) && d.input === f.input; )
                                    g++;
                                (u = z.keypressEvent.call(o, m, !0, !1, r, g)) && void 0 !== u.pos && u.pos !== i && W.validPositions[u.pos] && !0 === W.validPositions[u.pos].match.static && p.push(u.pos)
                            }
                    } else
                        for (; i = p.pop(); )
                            (f = W.validPositions[i]) && (f.generatedInput = !0);
                e && R(o, A(), u ? u.forwardPosition : void 0, n || new re.Event("checkval"), n && "input" === n.type)
            }
            function r(e) {
                if (e) {
                    if (void 0 === e.inputmask)
                        return e.value;
                    e.inputmask && e.inputmask.refreshValue && Z(e, e.inputmask._valueGet(!0))
                }
                var t = []
                  , n = W.validPositions;
                for (var i in n)
                    n[i] && n[i].match && 1 != n[i].match.static && t.push(n[i].input);
                var o = 0 === t.length ? "" : (b ? t.reverse() : t).join("");
                if (re.isFunction(U.onUnMask)) {
                    var r = (b ? A().slice().reverse() : A()).join("");
                    o = U.onUnMask.call(c, r, o, U)
                }
                return o
            }
            function G(e) {
                return !b || "number" != typeof e || U.greedy && "" === U.placeholder || !u || (e = u.inputmask._valueGet().length - e),
                e
            }
            function K(e, t, n, i) {
                var o;
                if (void 0 === t)
                    return "selectionStart"in e && "selectionEnd"in e ? (t = e.selectionStart,
                    n = e.selectionEnd) : ae.getSelection ? (o = ae.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset,
                    n = o.endOffset) : se.selection && se.selection.createRange && (n = (t = 0 - (o = se.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length),
                    !1 === U.insertMode && t === n - 1 && n--,
                    {
                        begin: i ? t : G(t),
                        end: i ? n : G(n)
                    };
                if (re.isArray(t) && (n = b ? t[0] : t[1],
                t = b ? t[1] : t[0]),
                void 0 !== t.begin && (n = b ? t.begin : t.end,
                t = b ? t.end : t.begin),
                "number" == typeof t) {
                    t = i ? t : G(t),
                    n = "number" == typeof (n = i ? n : G(n)) ? n : t;
                    var r = parseInt(((e.ownerDocument.defaultView || ae).getComputedStyle ? (e.ownerDocument.defaultView || ae).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                    if (e.scrollLeft = r > e.scrollWidth ? r : 0,
                    !(e.inputmask.caretPos = {
                        begin: t,
                        end: n
                    }) === U.insertMode && t === n && n++,
                    e === se.activeElement)
                        if ("setSelectionRange"in e)
                            e.setSelectionRange(t, n);
                        else if (ae.getSelection) {
                            if (o = se.createRange(),
                            void 0 === e.firstChild || null === e.firstChild) {
                                var a = se.createTextNode("");
                                e.appendChild(a)
                            }
                            o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length),
                            o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length),
                            o.collapse(!0);
                            var s = ae.getSelection();
                            s.removeAllRanges(),
                            s.addRange(o)
                        } else
                            e.createTextRange && ((o = e.createTextRange()).collapse(!0),
                            o.moveEnd("character", n),
                            o.moveStart("character", t),
                            o.select())
                }
            }
            function a(e) {
                var t, n, i = v(!0, S(), !0, !0), o = i.length, r = S(), a = {}, s = W.validPositions[r], l = void 0 !== s ? s.locator.slice() : void 0;
                for (t = r + 1; t < i.length; t++)
                    l = (n = x(t, l, t - 1)).locator.slice(),
                    a[t] = re.extend(!0, {}, n);
                var c = s && void 0 !== s.alternation ? s.locator[s.alternation] : void 0;
                for (t = o - 1; r < t && (((n = a[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || c && (c !== a[t].locator[s.alternation] && 1 != n.match.static || !0 === n.match.static && n.locator[s.alternation] && D(n.locator[s.alternation].toString().split(","), c.toString().split(",")) && "" !== _(t)[0].def)) && i[t] === $(t, n.match)); t--)
                    o--;
                return e ? {
                    l: o,
                    def: a[o] ? a[o].match : void 0
                } : o
            }
            function Q(e) {
                for (var t, n = v(!(e.length = 0), 0, !0, void 0, !0); void 0 !== (t = n.shift()); )
                    e.push(t);
                return e
            }
            function Y(e) {
                if (re.isFunction(U.isComplete))
                    return U.isComplete(e, U);
                if ("*" !== U.repeat) {
                    var t = !1
                      , n = a(!0)
                      , i = L(n.l);
                    if (void 0 === n.def || n.def.newBlockMarker || n.def.optionality || n.def.optionalQuantifier) {
                        t = !0;
                        for (var o = 0; o <= i; o++) {
                            var r = x(o).match;
                            if (!0 !== r.static && void 0 === W.validPositions[o] && !0 !== r.optionality && !0 !== r.optionalQuantifier || !0 === r.static && e[o] !== $(o, r)) {
                                t = !1;
                                break
                            }
                        }
                    }
                    return t
                }
            }
            function X(e, t, n, i) {
                if ((U.numericInput || b) && (t === de.BACKSPACE ? t = de.DELETE : t === de.DELETE && (t = de.BACKSPACE),
                b)) {
                    var o = n.end;
                    n.end = n.begin,
                    n.begin = o
                }
                var r;
                if (t === de.BACKSPACE || t === de.DELETE && !1 === U.insertMode ? n.end - n.begin < 1 && (n.begin = L(n.begin),
                void 0 !== W.validPositions[n.begin] && W.validPositions[n.begin].input === U.groupSeparator && n.begin--) : t === de.DELETE && n.begin === n.end && (n.end = N(n.end, !0, !0) ? n.end + 1 : F(n.end) + 1,
                void 0 !== W.validPositions[n.begin] && W.validPositions[n.begin].input === U.groupSeparator && n.end++),
                !1 !== (r = M(n))) {
                    if (!0 !== i && !1 !== U.keepStatic || null !== U.regex && -1 !== C(n.begin).match.def.indexOf("|")) {
                        var a = O(!0);
                        if (a) {
                            var s = void 0 !== a.caret ? a.caret : a.pos ? F(a.pos.begin ? a.pos.begin : a.pos) : S(-1, !0);
                            (t !== de.DELETE || n.begin > s) && n.begin
                        }
                    }
                    var l = S(n.end, !0);
                    l < n.begin ? W.p = !1 === U.insertMode ? L(l + 1) : F(l) : !0 !== i && (W.p = t === de.DELETE ? n.begin + r : n.begin,
                    !1 === U.insertMode && t === de.DELETE && (W.p = n.end + 1,
                    void 0 === W.validPositions[W.p] && S(W.maskLength, !0) < W.p && (W.p = L(l + 1))))
                }
            }
            function Z(e, t) {
                e.inputmask.refreshValue = !1,
                re.isFunction(U.onBeforeMask) && (t = U.onBeforeMask.call(c, t, U) || t),
                V(e, !0, !1, t = t.toString().split("")),
                p = A().join(""),
                (U.clearMaskOnLostFocus || U.clearIncomplete) && e.inputmask._valueGet() === T().join("") && -1 === S() && e.inputmask._valueSet("")
            }
            if (void 0 !== t)
                switch (t.action) {
                case "isComplete":
                    return u = t.el,
                    Y(A());
                case "unmaskedvalue":
                    return void 0 !== u && void 0 === t.value || (i = t.value,
                    i = (re.isFunction(U.onBeforeMask) && U.onBeforeMask.call(c, i, U) || i).split(""),
                    V.call(this, void 0, !1, !1, i),
                    re.isFunction(U.onBeforeWrite) && U.onBeforeWrite.call(c, void 0, A(), 0, U)),
                    r(u);
                case "mask":
                    !function(e) {
                        q.off(e);
                        var t = function(e, s) {
                            "textarea" !== e.tagName.toLowerCase() && s.ignorables.push(de.ENTER);
                            var t = e.getAttribute("type")
                              , n = "input" === e.tagName.toLowerCase() && -1 !== re.inArray(t, s.supportsInputType) || e.isContentEditable || "textarea" === e.tagName.toLowerCase();
                            if (!n)
                                if ("input" === e.tagName.toLowerCase()) {
                                    var i = se.createElement("input");
                                    i.setAttribute("type", t),
                                    n = "text" === i.type,
                                    i = null
                                } else
                                    n = "partial";
                            return !1 !== n ? function(e) {
                                var t, n, i;
                                function o() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== S() || !0 !== s.nullable ? se.activeElement === this && s.clearMaskOnLostFocus ? (b ? Q(A().slice()).reverse() : Q(A().slice())).join("") : t.call(this) : "" : t.call(this)
                                }
                                function r(e) {
                                    n.call(this, e),
                                    this.inputmask && Z(this, e)
                                }
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== s.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === oe("test".__proto__) ? function(e) {
                                                return e.__proto__
                                            }
                                            : function(e) {
                                                return e.constructor.prototype
                                            }
                                            );
                                            var a = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : void 0;
                                            a && a.get && a.set ? (t = a.get,
                                            n = a.set,
                                            Object.defineProperty(e, "value", {
                                                get: o,
                                                set: r,
                                                configurable: !0
                                            })) : "input" !== e.tagName.toLowerCase() && (t = function() {
                                                return this.textContent
                                            }
                                            ,
                                            n = function(e) {
                                                this.textContent = e
                                            }
                                            ,
                                            Object.defineProperty(e, "value", {
                                                get: o,
                                                set: r,
                                                configurable: !0
                                            }))
                                        } else
                                            se.__lookupGetter__ && e.__lookupGetter__("value") && (t = e.__lookupGetter__("value"),
                                            n = e.__lookupSetter__("value"),
                                            e.__defineGetter__("value", o),
                                            e.__defineSetter__("value", r));
                                        e.inputmask.__valueGet = t,
                                        e.inputmask.__valueSet = n
                                    }
                                    e.inputmask._valueGet = function(e) {
                                        return b && !0 !== e ? t.call(this.el).split("").reverse().join("") : t.call(this.el)
                                    }
                                    ,
                                    e.inputmask._valueSet = function(e, t) {
                                        n.call(this.el, null == e ? "" : !0 !== t && b ? e.split("").reverse().join("") : e)
                                    }
                                    ,
                                    void 0 === t && (t = function() {
                                        return this.value
                                    }
                                    ,
                                    n = function(e) {
                                        this.value = e
                                    }
                                    ,
                                    function(e) {
                                        if (re.valHooks && (void 0 === re.valHooks[e] || !0 !== re.valHooks[e].inputmaskpatch)) {
                                            var n = re.valHooks[e] && re.valHooks[e].get ? re.valHooks[e].get : function(e) {
                                                return e.value
                                            }
                                              , i = re.valHooks[e] && re.valHooks[e].set ? re.valHooks[e].set : function(e, t) {
                                                return e.value = t,
                                                e
                                            }
                                            ;
                                            re.valHooks[e] = {
                                                get: function(e) {
                                                    if (e.inputmask) {
                                                        if (e.inputmask.opts.autoUnmask)
                                                            return e.inputmask.unmaskedvalue();
                                                        var t = n(e);
                                                        return -1 !== S(void 0, void 0, e.inputmask.maskset.validPositions) || !0 !== s.nullable ? t : ""
                                                    }
                                                    return n(e)
                                                },
                                                set: function(e, t) {
                                                    var n = i(e, t);
                                                    return e.inputmask && Z(e, t),
                                                    n
                                                },
                                                inputmaskpatch: !0
                                            }
                                        }
                                    }(e.type),
                                    i = e,
                                    q.on(i, "mouseenter", function() {
                                        var e = this.inputmask._valueGet(!0);
                                        e !== (b ? A().reverse() : A()).join("") && Z(this, e)
                                    }))
                                }
                            }(e) : e.inputmask = void 0,
                            n
                        }(e, U);
                        if (!1 !== t && (s = re(u = e),
                        o = u.placeholder,
                        -1 === (y = void 0 !== u ? u.maxLength : void 0) && (y = void 0),
                        "inputMode"in u && null === u.getAttribute("inputmode") && (u.inputMode = U.inputmode,
                        u.setAttribute("inputmode", U.inputmode)),
                        !0 === t && (U.showMaskOnFocus = U.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(u.autocomplete),
                        q.on(u, "submit", z.submitEvent),
                        q.on(u, "reset", z.resetEvent),
                        q.on(u, "blur", z.blurEvent),
                        q.on(u, "focus", z.focusEvent),
                        q.on(u, "invalid", z.invalidEvent),
                        q.on(u, "click", z.clickEvent),
                        q.on(u, "mouseleave", z.mouseleaveEvent),
                        q.on(u, "mouseenter", z.mouseenterEvent),
                        q.on(u, "paste", z.pasteEvent),
                        q.on(u, "cut", z.cutEvent),
                        q.on(u, "complete", U.oncomplete),
                        q.on(u, "incomplete", U.onincomplete),
                        q.on(u, "cleared", U.oncleared),
                        ce || !0 === U.inputEventOnly ? u.removeAttribute("maxLength") : (q.on(u, "keydown", z.keydownEvent),
                        q.on(u, "keypress", z.keypressEvent)),
                        q.on(u, "input", z.inputFallBackEvent),
                        q.on(u, "compositionend", z.compositionendEvent)),
                        q.on(u, "setvalue", z.setValueEvent),
                        p = T().join(""),
                        "" !== u.inputmask._valueGet(!0) || !1 === U.clearMaskOnLostFocus || se.activeElement === u)) {
                            Z(u, u.inputmask._valueGet(!0));
                            var n = A().slice();
                            !1 === Y(n) && U.clearIncomplete && w(),
                            U.clearMaskOnLostFocus && se.activeElement !== u && (-1 === S() ? n = [] : Q(n)),
                            (!1 === U.clearMaskOnLostFocus || U.showMaskOnFocus && se.activeElement === u || "" !== u.inputmask._valueGet(!0)) && R(u, n),
                            se.activeElement === u && K(u, F(S()))
                        }
                    }(u);
                    break;
                case "format":
                    return i = (re.isFunction(U.onBeforeMask) && U.onBeforeMask.call(c, t.value, U) || t.value).split(""),
                    V.call(this, void 0, !0, !1, i),
                    t.metadata ? {
                        value: b ? A().slice().reverse().join("") : A().join(""),
                        metadata: e.call(this, {
                            action: "getmetadata"
                        }, W, U)
                    } : b ? A().slice().reverse().join("") : A().join("");
                case "isValid":
                    t.value ? (i = (re.isFunction(U.onBeforeMask) && U.onBeforeMask.call(c, t.value, U) || t.value).split(""),
                    V.call(this, void 0, !0, !1, i)) : t.value = b ? A().slice().reverse().join("") : A().join("");
                    for (var J = A(), ee = a(), te = J.length - 1; ee < te && !N(te); te--)
                        ;
                    return J.splice(ee, te + 1 - ee),
                    Y(J) && t.value === (b ? A().slice().reverse().join("") : A().join(""));
                case "getemptymask":
                    return T().join("");
                case "remove":
                    if (u && u.inputmask) {
                        re.data(u, "_inputmask_opts", null),
                        s = re(u);
                        var ne = U.autoUnmask ? r(u) : u.inputmask._valueGet(U.autoUnmask);
                        ne !== T().join("") ? u.inputmask._valueSet(ne, U.autoUnmask) : u.inputmask._valueSet(""),
                        q.off(u),
                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(u), "value") && u.inputmask.__valueGet && Object.defineProperty(u, "value", {
                            get: u.inputmask.__valueGet,
                            set: u.inputmask.__valueSet,
                            configurable: !0
                        }) : se.__lookupGetter__ && u.__lookupGetter__("value") && u.inputmask.__valueGet && (u.__defineGetter__("value", u.inputmask.__valueGet),
                        u.__defineSetter__("value", u.inputmask.__valueSet)),
                        u.inputmask = void 0
                    }
                    return u;
                case "getmetadata":
                    if (re.isArray(W.metadata)) {
                        var ie = v(!0, 0, !1).join("");
                        return re.each(W.metadata, function(e, t) {
                            if (t.mask === ie)
                                return ie = t,
                                !1
                        }),
                        ie
                    }
                    return W.metadata
                }
        }
    }
    , function(e, t, n) {
        "use strict";
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var s = n(1)
          , l = s.dependencyLib
          , c = n(0)
          , h = {
            d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
            dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return d(Date.prototype.getDate.call(this), 2)
            }
            ],
            ddd: [""],
            dddd: [""],
            m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1
            }
            ],
            mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return d(Date.prototype.getMonth.call(this) + 1, 2)
            }
            ],
            mmm: [""],
            mmmm: [""],
            yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return d(Date.prototype.getFullYear.call(this), 2)
            }
            ],
            yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return d(Date.prototype.getFullYear.call(this), 4)
            }
            ],
            h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return d(Date.prototype.getHours.call(this), 2)
            }
            ],
            hx: [function(e) {
                return "[0-9]{".concat(e, "}")
            }
            , Date.prototype.setHours, "hours", Date.prototype.getHours],
            H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return d(Date.prototype.getHours.call(this), 2)
            }
            ],
            Hx: [function(e) {
                return "[0-9]{".concat(e, "}")
            }
            , Date.prototype.setHours, "hours", Date.prototype.getHours],
            M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
            MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return d(Date.prototype.getMinutes.call(this), 2)
            }
            ],
            s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
            ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return d(Date.prototype.getSeconds.call(this), 2)
            }
            ],
            l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return d(Date.prototype.getMilliseconds.call(this), 3)
            }
            ],
            L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return d(Date.prototype.getMilliseconds.call(this), 2)
            }
            ],
            t: ["[ap]"],
            tt: ["[ap]m"],
            T: ["[AP]"],
            TT: ["[AP]M"],
            Z: [""],
            o: [""],
            S: [""]
        }
          , i = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        function u(e) {
            var t = new RegExp("\\d+$").exec(e[0]);
            if (t && void 0 !== t[0]) {
                var n = h[e[0][0] + "x"].slice("");
                return n[0] = n[0](t[0]),
                n
            }
            if (h[e[0]])
                return h[e[0]]
        }
        function m(e) {
            if (!e.tokenizer) {
                var t = []
                  , n = [];
                for (var i in h)
                    if (i.endsWith("x")) {
                        var o = i[0] + "\\d+";
                        -1 === n.indexOf(o) && n.push(o)
                    } else
                        -1 === t.indexOf(i[0]) && t.push(i[0]);
                e.tokenizer = "(" + (0 < n.length ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.",
                e.tokenizer = new RegExp(e.tokenizer,"g")
            }
            return e.tokenizer
        }
        function g(e, t, n, i) {
            var o, r, a = "";
            for (m(n).lastIndex = 0; o = m(n).exec(e); )
                if (void 0 === t)
                    if (r = u(o))
                        a += "(" + r[0] + ")";
                    else
                        switch (o[0]) {
                        case "[":
                            a += "(";
                            break;
                        case "]":
                            a += ")?";
                            break;
                        default:
                            a += s.escapeRegex(o[0])
                        }
                else if (r = u(o))
                    if (!0 !== i && r[3]) {
                        a += r[3].call(t.date)
                    } else
                        r[2] ? a += t["raw" + r[2]] : a += o[0];
                else
                    a += o[0];
            return a
        }
        function d(e, t) {
            for (e = String(e),
            t = t || 2; e.length < t; )
                e = "0" + e;
            return e
        }
        function v(e, t, n) {
            var i, o, r, a, s, l = {
                date: new Date(1,0,1)
            }, c = e;
            if ("string" == typeof c) {
                for (m(n).lastIndex = 0; o = m(n).exec(t); ) {
                    var u = c.slice(0, o[0].length);
                    h.hasOwnProperty(o[0]) && (i = h[o[0]][2],
                    r = h[o[0]][1],
                    (a = l)[i] = (s = u).replace(/[^0-9]/g, "0"),
                    a["raw" + i] = s,
                    void 0 !== r && r.call(a.date, "month" == i ? parseInt(a[i]) - 1 : a[i])),
                    c = c.slice(u.length)
                }
                return l
            }
            if (c && "object" === f(c) && c.hasOwnProperty("date"))
                return c
        }
        s.extendAliases({
            datetime: {
                mask: function(e) {
                    return h.S = e.i18n.ordinalSuffix.join("|"),
                    e.inputFormat = i[e.inputFormat] || e.inputFormat,
                    e.displayFormat = i[e.displayFormat] || e.displayFormat || e.inputFormat,
                    e.outputFormat = i[e.outputFormat] || e.outputFormat || e.inputFormat,
                    e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""),
                    e.regex = g(e.inputFormat, void 0, e),
                    null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function(e, t, n, i, o, r, a, s) {
                    if (s)
                        return !0;
                    var l, c, u = 0;
                    if (isNaN(n) && e[t] !== n) {
                        for (m(o).lastIndex = 0; c = m(o).exec(o.inputFormat); )
                            if (t <= (u += c[0].length)) {
                                l = c,
                                c = m(o).exec(o.inputFormat);
                                break
                            }
                        if (c && c[0] === n && 1 < l[0].length)
                            return e[t] = e[t - 1],
                            e[t - 1] = "0",
                            {
                                fuzzy: !0,
                                buffer: e,
                                refreshFromBuffer: {
                                    start: t - 1,
                                    end: t + 1
                                },
                                pos: t + 1
                            }
                    }
                    return !0
                },
                postValidation: function(e, t, n, i, o, r) {
                    if (r)
                        return !0;
                    i.min = v(i.min, i.inputFormat, i),
                    i.max = v(i.max, i.inputFormat, i),
                    n.fuzzy && (e = n.buffer,
                    t = n.pos);
                    var a, s = 0;
                    for (m(i).lastIndex = 0; (a = m(i).exec(i.inputFormat)) && !(t < (s += a[0].length)); )
                        ;
                    if (a && a[0] && void 0 !== h[a[0]]) {
                        var l = h[a[0]][0]
                          , c = e.slice(a.index, a.index + a[0].length);
                        !1 === new RegExp(l).test(c.join("")) && 2 === a[0].length && o.validPositions[a.index] && o.validPositions[a.index + 1] && (o.validPositions[a.index + 1].input = "0")
                    }
                    var u, f, d = n, p = v(e.join(""), i.inputFormat, i);
                    return d && p.date.getTime() == p.date.getTime() && (u = p,
                    f = d,
                    d = (d = (!isFinite(u.rawday) || "29" == u.day && !isFinite(u.rawyear) || new Date(u.date.getFullYear(),isFinite(u.rawmonth) ? u.month : u.date.getMonth() + 1,0).getDate() >= u.day) && f) && function(e, t) {
                        var n = !0;
                        if (t.min) {
                            if (e.rawyear) {
                                var i = e.rawyear.replace(/[^0-9]/g, "");
                                n = t.min.year.substr(0, i.length) <= i
                            }
                            e.year === e.rawyear && t.min.date.getTime() == t.min.date.getTime() && (n = t.min.date.getTime() <= e.date.getTime())
                        }
                        return n && t.max && t.max.date.getTime() == t.max.date.getTime() && (n = t.max.date.getTime() >= e.date.getTime()),
                        n
                    }(p, i)),
                    t && d && n.pos !== t ? {
                        buffer: g(i.inputFormat, p, i).split(""),
                        refreshFromBuffer: {
                            start: t,
                            end: n.pos
                        }
                    } : d
                },
                onKeyDown: function(e, t, n, i) {
                    if (e.ctrlKey && e.keyCode === c.RIGHT) {
                        var o, r = new Date, a = "";
                        for (m(i).lastIndex = 0; o = m(i).exec(i.inputFormat); )
                            "d" === o[0].charAt(0) ? a += d(r.getDate(), o[0].length) : "m" === o[0].charAt(0) ? a += d(r.getMonth() + 1, o[0].length) : "yyyy" === o[0] ? a += r.getFullYear().toString() : "y" === o[0].charAt(0) && (a += d(r.getYear(), o[0].length));
                        this.inputmask._valueSet(a),
                        l(this).trigger("setvalue")
                    }
                },
                onUnMask: function(e, t, n) {
                    return t ? g(n.outputFormat, v(e, n.inputFormat, n), n, !0) : t
                },
                casing: function(e, t) {
                    return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1
            }
        }),
        e.exports = s
    }
    , function(e, t, n) {
        "use strict";
        var p = n(1)
          , k = p.dependencyLib
          , s = n(0);
        function a(e, t) {
            for (var n = "", i = 0; i < e.length; i++)
                p.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker.start === e.charAt(i) || t.optionalmarker.end === e.charAt(i) || t.quantifiermarker.start === e.charAt(i) || t.quantifiermarker.end === e.charAt(i) || t.groupmarker.start === e.charAt(i) || t.groupmarker.end === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
            return n
        }
        function h(e, t, n, i) {
            if (0 < t && (!n.digitsOptional || i)) {
                var o = k.inArray(n.radixPoint, e);
                -1 === o && (e.push(n.radixPoint),
                o = e.length - 1);
                for (var r = 1; r <= t; r++)
                    e[o + r] = e[o + r] || "0"
            }
            return e
        }
        function _(e, t) {
            var n = 0;
            if ("+" === e) {
                for (n in t.validPositions)
                    ;
                n = parseInt(n)
            }
            for (var i in t.tests)
                if (n <= (i = parseInt(i)))
                    for (var o = 0, r = t.tests[i].length; o < r; o++)
                        if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][o].match.def === e)
                            return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
            return n
        }
        function w(n, e) {
            var i = -1;
            return k.each(e.validPositions, function(e, t) {
                if (t && t.match.def === n)
                    return i = parseInt(e),
                    !1
            }),
            i
        }
        function i(e, t, n, i, o) {
            var r = t.buffer ? t.buffer.indexOf(o.radixPoint) : -1
              , a = -1 !== r && new RegExp("[0-9１-９]").test(e);
            return o._radixDance && a && null == t.validPositions[r] ? {
                insert: {
                    pos: r === n ? r + 1 : r,
                    c: o.radixPoint
                },
                pos: n
            } : a
        }
        p.extendAliases({
            numeric: {
                mask: function(e) {
                    e.repeat = 0,
                    e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""),
                    " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0),
                    1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)),
                    "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                    var t = "0";
                    !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1",
                    e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick,
                    e.digitsOptional = !1,
                    isNaN(e.digits) && (e.digits = 2),
                    e._radixDance = !1) : (e.__financeInput = !1,
                    e.numericInput = !0);
                    var n, i, o = "[+]";
                    if (o += a(e.prefix, e),
                    "" !== e.groupSeparator ? o += e._mask(e) : o += "9{+}",
                    void 0 !== e.digits && 0 !== e.digits) {
                        var r = e.digits.toString().split(",");
                        isFinite(r[0]) && r[1] && isFinite(r[1]) ? o += e.radixPoint + t + "{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? (n = o + e.radixPoint + t + "{0," + e.digits + "}",
                        e.keepStatic = !0) : o += e.radixPoint + t + "{" + e.digits + "}")
                    }
                    return o += a(e.suffix, e),
                    o += "[-]",
                    n && (o = [n + a(e.suffix, e) + "[-]", o]),
                    e.greedy = !1,
                    void 0 === (i = e).parseMinMaxOptions && (null !== i.min && (i.min = i.min.toString().replace(new RegExp(p.escapeRegex(i.groupSeparator),"g"), ""),
                    "," === i.radixPoint && (i.min = i.min.replace(i.radixPoint, ".")),
                    i.min = isFinite(i.min) ? parseFloat(i.min) : NaN,
                    isNaN(i.min) && (i.min = Number.MIN_VALUE)),
                    null !== i.max && (i.max = i.max.toString().replace(new RegExp(p.escapeRegex(i.groupSeparator),"g"), ""),
                    "," === i.radixPoint && (i.max = i.max.replace(i.radixPoint, ".")),
                    i.max = isFinite(i.max) ? parseFloat(i.max) : NaN,
                    isNaN(i.max) && (i.max = Number.MAX_VALUE)),
                    i.parseMinMaxOptions = "done"),
                    o
                },
                _mask: function(e) {
                    return "(" + e.groupSeparator + "999){+|1}"
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                step: 1,
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "numeric",
                shortcuts: {
                    k: "000",
                    m: "000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {
                        validator: i
                    },
                    1: {
                        validator: i,
                        definitionSymbol: "*"
                    },
                    "+": {
                        validator: function(e, t, n, i, o) {
                            return o.allowMinus && ("-" === e || e === o.negationSymbol.front)
                        }
                    },
                    "-": {
                        validator: function(e, t, n, i, o) {
                            return o.allowMinus && e === o.negationSymbol.back
                        }
                    }
                },
                preValidation: function(e, t, n, i, o, r, a, s) {
                    if (!1 !== o.__financeInput && n === o.radixPoint)
                        return !1;
                    var l;
                    if (l = o.shortcuts && o.shortcuts[n]) {
                        if (1 < l.length)
                            for (var c = [], u = 0; u < l.length; u++)
                                c.push({
                                    pos: t + u,
                                    c: l[u],
                                    strict: !1
                                });
                        return {
                            insert: c
                        }
                    }
                    var f, d, p, h, m, g = k.inArray(o.radixPoint, e), v = t;
                    if (f = t,
                    d = n,
                    p = g,
                    h = r,
                    (m = o)._radixDance && m.numericInput && d !== m.negationSymbol.back && f <= p && (0 < p || d == m.radixPoint) && (void 0 === h.validPositions[f - 1] || h.validPositions[f - 1].input !== m.negationSymbol.back) && --f,
                    t = f,
                    "-" !== n && n !== o.negationSymbol.front)
                        return !!s || (-1 !== g && !0 === o._radixDance && !1 === i && n === o.radixPoint && void 0 !== o.digits && (isNaN(o.digits) || 0 < parseInt(o.digits)) && g !== t ? {
                            caret: o._radixDance && t === g - 1 ? g + 1 : g
                        } : i && o.digitsOptional ? {
                            rewritePosition: a.end
                        } : i && !o.digitsOptional && a.begin > g && a.end <= g ? n === o.radixPoint ? {
                            insert: {
                                pos: g + 1,
                                c: "0",
                                fromIsValid: !0
                            },
                            rewritePosition: g
                        } : {
                            rewritePosition: g + 1
                        } : i && !o.digitsOptional && a.begin < g ? {
                            rewritePosition: a.begin - 1
                        } : {
                            rewritePosition: t
                        });
                    if (!0 !== o.allowMinus)
                        return !1;
                    var y = !1
                      , b = w("+", r)
                      , x = w("-", r);
                    return -1 !== b && (y = [b, x]),
                    !1 !== y ? {
                        remove: y,
                        caret: v
                    } : {
                        insert: [{
                            pos: _("+", r),
                            c: o.negationSymbol.front,
                            fromIsValid: !0
                        }, {
                            pos: _("-", r),
                            c: o.negationSymbol.back,
                            fromIsValid: void 0
                        }],
                        caret: v + o.negationSymbol.back.length
                    }
                },
                postValidation: function(e, t, n, i, o, r) {
                    if (r)
                        return !0;
                    if (null !== i.min || null !== i.max) {
                        var a = i.onUnMask(e.slice().reverse().join(""), void 0, k.extend({}, i, {
                            unmaskAsNumber: !0
                        }));
                        if (null !== i.min && a < i.min && (a.toString().length >= i.min.toString().length || a < 0))
                            return {
                                refreshFromBuffer: !0,
                                buffer: h(i.min.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                            };
                        if (null !== i.max && a > i.max)
                            return {
                                refreshFromBuffer: !0,
                                buffer: h(i.max.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                            }
                    }
                    return n
                },
                onUnMask: function(e, t, n) {
                    if ("" === t && !0 === n.nullable)
                        return t;
                    var i = e.replace(n.prefix, "");
                    return i = (i = i.replace(n.suffix, "")).replace(new RegExp(p.escapeRegex(n.groupSeparator),"g"), ""),
                    "" !== n.placeholder.charAt(0) && (i = i.replace(new RegExp(n.placeholder.charAt(0),"g"), "0")),
                    n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== i.indexOf(n.radixPoint) && (i = i.replace(p.escapeRegex.call(this, n.radixPoint), ".")),
                    i = (i = i.replace(new RegExp("^" + p.escapeRegex(n.negationSymbol.front)), "-")).replace(new RegExp(p.escapeRegex(n.negationSymbol.back) + "$"), ""),
                    Number(i)) : i
                },
                isComplete: function(e, t) {
                    var n = (t.numericInput ? e.slice().reverse() : e).join("");
                    return n = (n = (n = (n = (n = n.replace(new RegExp("^" + p.escapeRegex(t.negationSymbol.front)), "-")).replace(new RegExp(p.escapeRegex(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp(p.escapeRegex(t.groupSeparator) + "([0-9]{3})","g"), "$1"),
                    "," === t.radixPoint && (n = n.replace(p.escapeRegex(t.radixPoint), ".")),
                    isFinite(n)
                },
                onBeforeMask: function(e, t) {
                    var n = t.radixPoint || ",";
                    "number" != typeof e && "number" !== t.inputType || "" === n || (e = e.toString().replace(".", n));
                    var i = e.split(n)
                      , o = i[0].replace(/[^\-0-9]/g, "")
                      , r = 1 < i.length ? i[1].replace(/[^0-9]/g, "") : ""
                      , a = 1 < i.length;
                    e = o + ("" !== r ? n + r : r);
                    var s = 0;
                    if ("" !== n && (s = r.length,
                    "" !== r)) {
                        var l = Math.pow(10, s || 1);
                        isFinite(t.digits) && (s = parseInt(t.digits),
                        l = Math.pow(10, s)),
                        e = e.replace(p.escapeRegex(n), "."),
                        isFinite(e) && (e = t.roundingFN(parseFloat(e) * l) / l),
                        e = e.toString().replace(".", n)
                    }
                    if (0 === t.digits && -1 !== e.indexOf(p.escapeRegex(n)) && (e = e.substring(0, e.indexOf(p.escapeRegex(n)))),
                    null !== t.min || null !== t.max) {
                        var c = e.toString().replace(n, ".");
                        null !== t.min && c < t.min ? e = t.min.toString().replace(".", n) : null !== t.max && c > t.max && (e = t.max.toString().replace(".", n))
                    }
                    return h(e.toString().split(""), s, t, a).join("")
                },
                onBeforeWrite: function(e, t, n, i) {
                    function o(e, t) {
                        if (!1 !== i.__financeInput || t) {
                            var n = k.inArray(i.radixPoint, e);
                            -1 !== n && e.splice(n, 1)
                        }
                        if ("" !== i.groupSeparator)
                            for (; -1 !== (n = e.indexOf(i.groupSeparator)); )
                                e.splice(n, 1);
                        return e
                    }
                    var r, a = function(t, e) {
                        try {
                            var n = new RegExp("(^" + ("" !== e.negationSymbol.front ? p.escapeRegex(e.negationSymbol.front) + "?" : "") + p.escapeRegex(e.prefix) + ")(.*)(" + p.escapeRegex(e.suffix) + ("" != e.negationSymbol.back ? p.escapeRegex(e.negationSymbol.back) + "?" : "") + "$)").exec(t.slice().reverse().join(""))
                              , i = n ? n[2] : ""
                              , o = !1;
                            return i && (i = i.split(e.radixPoint.charAt(0))[0],
                            o = new RegExp("^[0" + e.groupSeparator + "]*").exec(i)),
                            !(!o || !(1 < o[0].length || 0 < o[0].length && o[0].length < i.length)) && o
                        } catch (e) {
                            console.log(t.slice().reverse().join(""))
                        }
                    }(t, i);
                    if (a) {
                        var s = t.slice().reverse()
                          , l = s.join("").indexOf(a[0]);
                        s.splice(l, a[0].length);
                        var c = s.length - l;
                        o(s),
                        r = {
                            refreshFromBuffer: !0,
                            buffer: s.reverse(),
                            caret: n < c ? n : c
                        }
                    }
                    if (e)
                        switch (e.type) {
                        case "blur":
                        case "checkval":
                            if (null !== i.min) {
                                var u = i.onUnMask(t.slice().reverse().join(""), void 0, k.extend({}, i, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== i.min && u < i.min)
                                    return {
                                        refreshFromBuffer: !0,
                                        buffer: h(i.min.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                                    }
                            }
                            if (t[t.length - 1] === i.negationSymbol.front) {
                                var f = new RegExp("(^" + ("" != i.negationSymbol.front ? p.escapeRegex(i.negationSymbol.front) + "?" : "") + p.escapeRegex(i.prefix) + ")(.*)(" + p.escapeRegex(i.suffix) + ("" != i.negationSymbol.back ? p.escapeRegex(i.negationSymbol.back) + "?" : "") + "$)").exec(o(t.slice(), !0).reverse().join(""));
                                0 == (f ? f[2] : "") && (r = {
                                    refreshFromBuffer: !0,
                                    buffer: [0]
                                })
                            } else
                                "" !== i.radixPoint && t[0] === i.radixPoint && (r && r.buffer ? r.buffer.shift() : (t.shift(),
                                r = {
                                    refreshFromBuffer: !0,
                                    buffer: o(t)
                                }));
                            if (i.enforceDigitsOnBlur) {
                                var d = (r = r || {}) && r.buffer || t.slice().reverse();
                                r.refreshFromBuffer = !0,
                                r.buffer = h(d, i.digits, i, !0).reverse()
                            }
                        }
                    return r
                },
                onKeyDown: function(e, t, n, i) {
                    var o, r = k(this);
                    if (e.ctrlKey)
                        switch (e.keyCode) {
                        case s.UP:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)),
                            r.trigger("setvalue"),
                            !1;
                        case s.DOWN:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)),
                            r.trigger("setvalue"),
                            !1
                        }
                    if (!e.shiftKey && (e.keyCode === s.DELETE || e.keyCode === s.BACKSPACE || e.keyCode === s.BACKSPACE_SAFARI)) {
                        if (t[e.keyCode === s.DELETE ? n.begin - 1 : n.end] === i.negationSymbol.front)
                            return o = t.slice().reverse(),
                            "" !== i.negationSymbol.front && o.shift(),
                            "" !== i.negationSymbol.back && o.pop(),
                            r.trigger("setvalue", [o.join(""), n.begin]),
                            !1;
                        if (!0 === i._radixDance) {
                            var a = k.inArray(i.radixPoint, t);
                            if (i.digitsOptional) {
                                if (0 === a)
                                    return (o = t.slice().reverse()).pop(),
                                    r.trigger("setvalue", [o.join(""), n.begin >= o.length ? o.length : n.begin]),
                                    !1
                            } else if (-1 !== a && (n.begin < a || n.end < a || e.keyCode === s.DELETE && n.begin === a))
                                return n.begin !== n.end || e.keyCode !== s.BACKSPACE && e.keyCode !== s.BACKSPACE_SAFARI || n.begin++,
                                (o = t.slice().reverse()).splice(o.length - n.begin, n.begin - n.end + 1),
                                o = h(o, i.digits, i).join(""),
                                r.trigger("setvalue", [o, n.begin >= o.length ? a + 1 : n.begin]),
                                !1
                        }
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
            },
            indianns: {
                alias: "numeric",
                _mask: function(e) {
                    return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}"
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
            }
        }),
        e.exports = p
    }
    , function(e, t, n) {
        "use strict";
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var r = n(3)
          , a = n(1);
        void 0 === r.fn.inputmask && (r.fn.inputmask = function(e, t) {
            var n, i = this[0];
            if (void 0 === t && (t = {}),
            "string" == typeof e)
                switch (e) {
                case "unmaskedvalue":
                    return i && i.inputmask ? i.inputmask.unmaskedvalue() : r(i).val();
                case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return i && i.inputmask ? i.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!i || !i.inputmask) && i.inputmask.hasMaskedValue();
                case "isComplete":
                    return !i || !i.inputmask || i.inputmask.isComplete();
                case "getmetadata":
                    return i && i.inputmask ? i.inputmask.getmetadata() : void 0;
                case "setvalue":
                    a.setValue(i, t);
                    break;
                case "option":
                    if ("string" != typeof t)
                        return this.each(function() {
                            if (void 0 !== this.inputmask)
                                return this.inputmask.option(t)
                        });
                    if (i && void 0 !== i.inputmask)
                        return i.inputmask.option(t);
                    break;
                default:
                    return t.alias = e,
                    n = new a(t),
                    this.each(function() {
                        n.mask(this)
                    })
                }
            else {
                if (Array.isArray(e))
                    return t.alias = e,
                    n = new a(t),
                    this.each(function() {
                        n.mask(this)
                    });
                if ("object" == o(e))
                    return n = new a(e),
                    void 0 === e.mask && void 0 === e.alias ? this.each(function() {
                        if (void 0 !== this.inputmask)
                            return this.inputmask.option(e);
                        n.mask(this)
                    }) : this.each(function() {
                        n.mask(this)
                    });
                if (void 0 === e)
                    return this.each(function() {
                        (n = new a(t)).mask(this)
                    })
            }
        }
        )
    }
    , function(e, t, n) {
        "use strict";
        var i = n(6)
          , o = n(3);
        i.dependencyLib === o && n(11),
        e.exports = i
    }
    ],
    installedModules = {},
    __webpack_require__.m = modules,
    __webpack_require__.c = installedModules,
    __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.t = function(t, e) {
        if (1 & e && (t = __webpack_require__(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (__webpack_require__.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                __webpack_require__.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, "a", t),
        t
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.p = "",
    __webpack_require__(__webpack_require__.s = 12);
    function __webpack_require__(e) {
        if (installedModules[e])
            return installedModules[e].exports;
        var t = installedModules[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return modules[e].call(t.exports, t, t.exports, __webpack_require__),
        t.l = !0,
        t.exports
    }
    var modules, installedModules
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    function I() {}
    I.version = "2.0.6",
    window.addEventListener("mousewheel", function() {});
    var j = "data-scrollmagic-pin-spacer";
    I.Controller = function(e) {
        function t() {
            if (h && c) {
                var e = N.type.Array(c) ? c : l.slice(0);
                c = !1;
                var t = u
                  , n = (u = a.scrollPos()) - t;
                0 != n && (f = 0 < n ? "FORWARD" : "REVERSE"),
                "REVERSE" === f && e.reverse(),
                e.forEach(function(e) {
                    e.update(!0)
                })
            }
        }
        function n() {
            i = N.rAF(t)
        }
        var i, o, r = _.defaults, a = this, s = N.extend({}, r, e), l = [], c = !1, u = 0, f = "PAUSED", d = !0, p = 0, h = !0, m = function() {
            0 < s.refreshInterval && (o = window.setTimeout(x, s.refreshInterval))
        }, g = function() {
            return s.vertical ? N.get.scrollTop(s.container) : N.get.scrollLeft(s.container)
        }, v = function() {
            return s.vertical ? N.get.height(s.container) : N.get.width(s.container)
        }, y = this._setScrollPos = function(e) {
            s.vertical ? d ? window.scrollTo(N.get.scrollLeft(), e) : s.container.scrollTop = e : d ? window.scrollTo(e, N.get.scrollTop()) : s.container.scrollLeft = e
        }
        , b = function(e) {
            "resize" == e.type && (p = v(),
            f = "PAUSED"),
            !0 !== c && (c = !0,
            n())
        }, x = function() {
            if (!d && p != v()) {
                var t;
                try {
                    t = new Event("resize",{
                        bubbles: !1,
                        cancelable: !1
                    })
                } catch (e) {
                    (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                }
                s.container.dispatchEvent(t)
            }
            l.forEach(function(e) {
                e.refresh()
            }),
            m()
        };
        this._options = s;
        function k(e) {
            if (e.length <= 1)
                return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }),
            t
        }
        return this.addScene = function(e) {
            if (N.type.Array(e))
                e.forEach(function(e) {
                    a.addScene(e)
                });
            else if (e instanceof I.Scene)
                if (e.controller() !== a)
                    e.addTo(a);
                else if (l.indexOf(e) < 0)
                    for (var t in l.push(e),
                    l = k(l),
                    e.on("shift.controller_sort", function() {
                        l = k(l)
                    }),
                    s.globalSceneOptions)
                        e[t] && e[t].call(e, s.globalSceneOptions[t]);
            return a
        }
        ,
        this.removeScene = function(e) {
            if (N.type.Array(e))
                e.forEach(function(e) {
                    a.removeScene(e)
                });
            else {
                var t = l.indexOf(e);
                -1 < t && (e.off("shift.controller_sort"),
                l.splice(t, 1),
                e.remove())
            }
            return a
        }
        ,
        this.updateScene = function(e, t) {
            return N.type.Array(e) ? e.forEach(function(e) {
                a.updateScene(e, t)
            }) : t ? e.update(!0) : !0 !== c && e instanceof I.Scene && (-1 == (c = c || []).indexOf(e) && c.push(e),
            c = k(c),
            n()),
            a
        }
        ,
        this.update = function(e) {
            return b({
                type: "resize"
            }),
            e && t(),
            a
        }
        ,
        this.scrollTo = function(e, t) {
            if (N.type.Number(e))
                y.call(s.container, e, t);
            else if (e instanceof I.Scene)
                e.controller() === a && a.scrollTo(e.scrollOffset(), t);
            else if (N.type.Function(e))
                y = e;
            else {
                var n = N.get.elements(e)[0];
                if (n) {
                    for (; n.parentNode.hasAttribute(j); )
                        n = n.parentNode;
                    var i = s.vertical ? "top" : "left"
                      , o = N.get.offset(s.container)
                      , r = N.get.offset(n);
                    d || (o[i] -= a.scrollPos()),
                    a.scrollTo(r[i] - o[i], t)
                }
            }
            return a
        }
        ,
        this.scrollPos = function(e) {
            return arguments.length ? (N.type.Function(e) && (g = e),
            a) : g.call(a)
        }
        ,
        this.info = function(e) {
            var t = {
                size: p,
                vertical: s.vertical,
                scrollPos: u,
                scrollDirection: f,
                container: s.container,
                isDocument: d
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }
        ,
        this.loglevel = function() {
            return a
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (h != e && (h = !!e,
            a.updateScene(l, !0)),
            a) : h
        }
        ,
        this.destroy = function(e) {
            window.clearTimeout(o);
            for (var t = l.length; t--; )
                l[t].destroy(e);
            return s.container.removeEventListener("resize", b),
            s.container.removeEventListener("scroll", b),
            N.cAF(i),
            null
        }
        ,
        function() {
            for (var e in s)
                r.hasOwnProperty(e) || delete s[e];
            if (s.container = N.get.elements(s.container)[0],
            !s.container)
                throw "ScrollMagic.Controller init failed.";
            (d = s.container === window || s.container === document.body || !document.body.contains(s.container)) && (s.container = window),
            p = v(),
            s.container.addEventListener("resize", b),
            s.container.addEventListener("scroll", b);
            var t = parseInt(s.refreshInterval, 10);
            s.refreshInterval = N.type.Number(t) ? t : r.refreshInterval,
            m()
        }(),
        a
    }
    ;
    var _ = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    I.Controller.addOption = function(e, t) {
        _.defaults[e] = t
    }
    ,
    I.Controller.extend = function(e) {
        var t = this;
        I.Controller = function() {
            return t.apply(this, arguments),
            this.$super = N.extend({}, this),
            e.apply(this, arguments) || this
        }
        ,
        N.extend(I.Controller, t),
        I.Controller.prototype = t.prototype,
        I.Controller.prototype.constructor = I.Controller
    }
    ,
    I.Scene = function(e) {
        var n, l, c = "BEFORE", u = "DURING", f = "AFTER", i = M.defaults, d = this, p = N.extend({}, i, e), h = c, m = 0, s = {
            start: 0,
            end: 0
        }, g = 0, o = !0, a = {};
        this.on = function(e, o) {
            return N.type.Function(o) && (e = e.trim().split(" ")).forEach(function(e) {
                var t = e.split(".")
                  , n = t[0]
                  , i = t[1];
                "*" != n && (a[n] || (a[n] = []),
                a[n].push({
                    namespace: i || "",
                    callback: o
                }))
            }),
            d
        }
        ,
        this.off = function(e, r) {
            return e && (e = e.trim().split(" ")).forEach(function(e) {
                var t = e.split(".")
                  , n = t[0]
                  , o = t[1] || "";
                ("*" === n ? Object.keys(a) : [n]).forEach(function(e) {
                    for (var t = a[e] || [], n = t.length; n--; ) {
                        var i = t[n];
                        !i || o !== i.namespace && "*" !== o || r && r != i.callback || t.splice(n, 1)
                    }
                    t.length || delete a[e]
                })
            }),
            d
        }
        ,
        this.trigger = function(e, t) {
            if (e) {
                var n = e.trim().split(".")
                  , i = n[0]
                  , o = n[1]
                  , r = a[i];
                r && r.forEach(function(e) {
                    o && o !== e.namespace || e.callback.call(d, new I.Event(i,e.namespace,d,t))
                })
            }
            return d
        }
        ,
        d.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? b() : "reverse" === e.what && d.update())
        }).on("shift.internal", function() {
            t(),
            d.update()
        }),
        this.addTo = function(e) {
            return e instanceof I.Controller && l != e && (l && l.removeScene(d),
            l = e,
            _(),
            r(!0),
            b(!0),
            t(),
            l.info("container").addEventListener("resize", x),
            e.addScene(d),
            d.trigger("add", {
                controller: l
            }),
            d.update()),
            d
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (o != e && (o = !!e,
            d.update(!0)),
            d) : o
        }
        ,
        this.remove = function() {
            if (l) {
                l.info("container").removeEventListener("resize", x);
                var e = l;
                l = void 0,
                e.removeScene(d),
                d.trigger("remove")
            }
            return d
        }
        ,
        this.destroy = function(e) {
            return d.trigger("destroy", {
                reset: e
            }),
            d.remove(),
            d.off("*.*"),
            null
        }
        ,
        this.update = function(e) {
            if (l)
                if (e)
                    if (l.enabled() && o) {
                        var t, n = l.info("scrollPos");
                        t = 0 < p.duration ? (n - s.start) / (s.end - s.start) : n >= s.start ? 1 : 0,
                        d.trigger("update", {
                            startPos: s.start,
                            endPos: s.end,
                            scrollPos: n
                        }),
                        d.progress(t)
                    } else
                        v && h === u && A(!0);
                else
                    l.updateScene(d, !1);
            return d
        }
        ,
        this.refresh = function() {
            return r(),
            b(),
            d
        }
        ,
        this.progress = function(e) {
            if (arguments.length) {
                var t = !1
                  , n = h
                  , i = l ? l.info("scrollDirection") : "PAUSED"
                  , o = p.reverse || m <= e;
                if (0 === p.duration ? (t = m != e,
                h = 0 === (m = e < 1 && o ? 0 : 1) ? c : u) : e < 0 && h !== c && o ? (h = c,
                t = !(m = 0)) : 0 <= e && e < 1 && o ? (m = e,
                h = u,
                t = !0) : 1 <= e && h !== f ? (m = 1,
                h = f,
                t = !0) : h !== u || o || A(),
                t) {
                    var r = {
                        progress: m,
                        state: h,
                        scrollDirection: i
                    }
                      , a = h != n
                      , s = function(e) {
                        d.trigger(e, r)
                    };
                    a && n !== u && (s("enter"),
                    s(n === c ? "start" : "end")),
                    s("progress"),
                    a && h !== u && (s(h === c ? "start" : "end"),
                    s("leave"))
                }
                return d
            }
            return m
        }
        ;
        var v, y, t = function() {
            s = {
                start: g + p.offset
            },
            l && p.triggerElement && (s.start -= l.info("size") * p.triggerHook),
            s.end = s.start + p.duration
        }, r = function(e) {
            if (n) {
                var t = "duration";
                w(t, n.call(d)) && !e && (d.trigger("change", {
                    what: t,
                    newval: p[t]
                }),
                d.trigger("shift", {
                    reason: t
                }))
            }
        }, b = function(e) {
            var t = 0
              , n = p.triggerElement;
            if (l && (n || 0 < g)) {
                if (n)
                    if (n.parentNode) {
                        for (var i = l.info(), o = N.get.offset(i.container), r = i.vertical ? "top" : "left"; n.parentNode.hasAttribute(j); )
                            n = n.parentNode;
                        var a = N.get.offset(n);
                        i.isDocument || (o[r] -= l.scrollPos()),
                        t = a[r] - o[r]
                    } else
                        d.triggerElement(void 0);
                var s = t != g;
                g = t,
                s && !e && d.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            }
        }, x = function() {
            0 < p.triggerHook && d.trigger("shift", {
                reason: "containerResize"
            })
        }, k = N.extend(M.validate, {
            duration: function(t) {
                if (N.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                    var e = parseFloat(t) / 100;
                    t = function() {
                        return l ? l.info("size") * e : 0
                    }
                }
                if (N.type.Function(t)) {
                    n = t;
                    try {
                        t = parseFloat(n())
                    } catch (e) {
                        t = -1
                    }
                }
                if (t = parseFloat(t),
                !N.type.Number(t) || t < 0)
                    throw n = n && void 0,
                    0;
                return t
            }
        }), _ = function(e) {
            (e = arguments.length ? [e] : Object.keys(k)).forEach(function(t) {
                var n;
                if (k[t])
                    try {
                        n = k[t](p[t])
                    } catch (e) {
                        n = i[t]
                    } finally {
                        p[t] = n
                    }
            })
        }, w = function(e, t) {
            var n = !1
              , i = p[e];
            return p[e] != t && (p[e] = t,
            _(e),
            n = i != p[e]),
            n
        }, S = function(t) {
            d[t] || (d[t] = function(e) {
                return arguments.length ? ("duration" === t && (n = void 0),
                w(t, e) && (d.trigger("change", {
                    what: t,
                    newval: p[t]
                }),
                -1 < M.shifts.indexOf(t) && d.trigger("shift", {
                    reason: t
                })),
                d) : p[t]
            }
            )
        };
        this.controller = function() {
            return l
        }
        ,
        this.state = function() {
            return h
        }
        ,
        this.scrollOffset = function() {
            return s.start
        }
        ,
        this.triggerPosition = function() {
            var e = p.offset;
            return l && (e += p.triggerElement ? g : l.info("size") * d.triggerHook()),
            e
        }
        ,
        d.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (h === f && t || h === u && 0 === p.duration) && A(),
            t && P()
        }).on("progress.internal", function() {
            A()
        }).on("add.internal", function() {
            P()
        }).on("destroy.internal", function(e) {
            d.removePin(e.reset)
        });
        function E() {
            l && v && h === u && !l.info("isDocument") && A()
        }
        function C() {
            l && v && h === u && ((y.relSize.width || y.relSize.autoFullWidth) && N.get.width(window) != N.get.width(y.spacer.parentNode) || y.relSize.height && N.get.height(window) != N.get.height(y.spacer.parentNode)) && P()
        }
        function T(e) {
            l && v && h === u && !l.info("isDocument") && (e.preventDefault(),
            l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        }
        var A = function(e) {
            if (v && l) {
                var t = l.info()
                  , n = y.spacer.firstChild;
                if (e || h !== u) {
                    var i = {
                        position: y.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }
                      , o = N.css(n, "position") != i.position;
                    y.pushFollowers ? 0 < p.duration && (h === f && 0 === parseFloat(N.css(y.spacer, "padding-top")) ? o = !0 : h === c && 0 === parseFloat(N.css(y.spacer, "padding-bottom")) && (o = !0)) : i[t.vertical ? "top" : "left"] = p.duration * m,
                    N.css(n, i),
                    o && P()
                } else {
                    "fixed" != N.css(n, "position") && (N.css(n, {
                        position: "fixed"
                    }),
                    P());
                    var r = N.get.offset(y.spacer, !0)
                      , a = p.reverse || 0 === p.duration ? t.scrollPos - s.start : Math.round(m * p.duration * 10) / 10;
                    r[t.vertical ? "top" : "left"] += a,
                    N.css(y.spacer.firstChild, {
                        top: r.top,
                        left: r.left
                    })
                }
            }
        }
          , P = function() {
            if (v && l && y.inFlow) {
                var e = h === u
                  , t = l.info("vertical")
                  , n = y.spacer.firstChild
                  , i = N.isMarginCollapseType(N.css(y.spacer, "display"))
                  , o = {};
                y.relSize.width || y.relSize.autoFullWidth ? e ? N.css(v, {
                    width: N.get.width(y.spacer)
                }) : N.css(v, {
                    width: "100%"
                }) : (o["min-width"] = N.get.width(t ? v : n, !0, !0),
                o.width = e ? o["min-width"] : "auto"),
                y.relSize.height ? e ? N.css(v, {
                    height: N.get.height(y.spacer) - (y.pushFollowers ? p.duration : 0)
                }) : N.css(v, {
                    height: "100%"
                }) : (o["min-height"] = N.get.height(t ? n : v, !0, !i),
                o.height = e ? o["min-height"] : "auto"),
                y.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = p.duration * m,
                o["padding" + (t ? "Bottom" : "Right")] = p.duration * (1 - m)),
                N.css(y.spacer, o)
            }
        };
        this.setPin = function(e, t) {
            if (t = N.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }, t),
            !(e = N.get.elements(e)[0]))
                return d;
            if ("fixed" === N.css(e, "position"))
                return d;
            if (v) {
                if (v === e)
                    return d;
                d.removePin()
            }
            var n = (v = e).parentNode.style.display
              , i = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            v.parentNode.style.display = "none";
            var o = "absolute" != N.css(v, "position")
              , r = N.css(v, i.concat(["display"]))
              , a = N.css(v, ["width", "height"]);
            v.parentNode.style.display = n,
            !o && t.pushFollowers && (t.pushFollowers = !1);
            var s = v.parentNode.insertBefore(document.createElement("div"), v)
              , l = N.extend(r, {
                position: o ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (o || N.extend(l, N.css(v, ["width", "height"])),
            N.css(s, l),
            s.setAttribute(j, ""),
            N.addClass(s, t.spacerClass),
            y = {
                spacer: s,
                relSize: {
                    width: "%" === a.width.slice(-1),
                    height: "%" === a.height.slice(-1),
                    autoFullWidth: "auto" === a.width && o && N.isMarginCollapseType(r.display)
                },
                pushFollowers: t.pushFollowers,
                inFlow: o
            },
            !v.___origStyle) {
                v.___origStyle = {};
                var c = v.style;
                i.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                    v.___origStyle[e] = c[e] || ""
                })
            }
            return y.relSize.width && N.css(s, {
                width: a.width
            }),
            y.relSize.height && N.css(s, {
                height: a.height
            }),
            s.appendChild(v),
            N.css(v, {
                position: o ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (y.relSize.width || y.relSize.autoFullWidth) && N.css(v, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", E),
            window.addEventListener("resize", E),
            window.addEventListener("resize", C),
            v.addEventListener("mousewheel", T),
            v.addEventListener("DOMMouseScroll", T),
            A(),
            d
        }
        ,
        this.removePin = function(e) {
            if (v) {
                if (h === u && A(!0),
                e || !l) {
                    var t = y.spacer.firstChild;
                    if (t.hasAttribute(j)) {
                        var n = y.spacer.style
                          , i = {};
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                            i[e] = n[e] || ""
                        }),
                        N.css(t, i)
                    }
                    y.spacer.parentNode.insertBefore(t, y.spacer),
                    y.spacer.parentNode.removeChild(y.spacer),
                    v.parentNode.hasAttribute(j) || (N.css(v, v.___origStyle),
                    delete v.___origStyle)
                }
                window.removeEventListener("scroll", E),
                window.removeEventListener("resize", E),
                window.removeEventListener("resize", C),
                v.removeEventListener("mousewheel", T),
                v.removeEventListener("DOMMouseScroll", T),
                v = void 0
            }
            return d
        }
        ;
        var D, O = [];
        return d.on("destroy.internal", function(e) {
            d.removeClassToggle(e.reset)
        }),
        this.setClassToggle = function(e, t) {
            var n = N.get.elements(e);
            return 0 !== n.length && N.type.String(t) && (0 < O.length && d.removeClassToggle(),
            D = t,
            O = n,
            d.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? N.addClass : N.removeClass;
                O.forEach(function(e) {
                    t(e, D)
                })
            })),
            d
        }
        ,
        this.removeClassToggle = function(e) {
            return e && O.forEach(function(e) {
                N.removeClass(e, D)
            }),
            d.off("start.internal_class end.internal_class"),
            D = void 0,
            O = [],
            d
        }
        ,
        function() {
            for (var e in p)
                i.hasOwnProperty(e) || delete p[e];
            for (var t in i)
                S(t);
            _()
        }(),
        d
    }
    ;
    var M = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e),
                !N.type.Number(e))
                    throw 0;
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = N.get.elements(e)[0];
                    if (!t || !t.parentNode)
                        throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (N.type.Number(e))
                    e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t))
                        throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    I.Scene.addOption = function(e, t, n, i) {
        e in M.defaults || (M.defaults[e] = t,
        M.validate[e] = n,
        i && M.shifts.push(e))
    }
    ,
    I.Scene.extend = function(e) {
        var t = this;
        I.Scene = function() {
            return t.apply(this, arguments),
            this.$super = N.extend({}, this),
            e.apply(this, arguments) || this
        }
        ,
        N.extend(I.Scene, t),
        I.Scene.prototype = t.prototype,
        I.Scene.prototype.constructor = I.Scene
    }
    ,
    I.Event = function(e, t, n, i) {
        for (var o in i = i || {})
            this[o] = i[o];
        return this.type = e,
        this.target = this.currentTarget = n,
        this.namespace = t || "",
        this.timeStamp = this.timestamp = Date.now(),
        this
    }
    ;
    var N = I._util = function(a) {
        function s(e) {
            return parseFloat(e) || 0
        }
        function l(e) {
            return e.currentStyle ? e.currentStyle : a.getComputedStyle(e)
        }
        function i(e, t, n, i) {
            if ((t = t === document ? a : t) === a)
                i = !1;
            else if (!f.DomElement(t))
                return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var o = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
            if (n && i) {
                var r = l(t);
                o += "Height" === e ? s(r.marginTop) + s(r.marginBottom) : s(r.marginLeft) + s(r.marginRight)
            }
            return o
        }
        function c(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            })
        }
        var n, e = {};
        e.extend = function(e) {
            for (e = e || {},
            n = 1; n < arguments.length; n++)
                if (arguments[n])
                    for (var t in arguments[n])
                        arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
            return e
        }
        ,
        e.isMarginCollapseType = function(e) {
            return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
        }
        ;
        var o = 0
          , t = ["ms", "moz", "webkit", "o"]
          , r = a.requestAnimationFrame
          , u = a.cancelAnimationFrame;
        for (n = 0; !r && n < t.length; ++n)
            r = a[t[n] + "RequestAnimationFrame"],
            u = a[t[n] + "CancelAnimationFrame"] || a[t[n] + "CancelRequestAnimationFrame"];
        r = r || function(e) {
            var t = (new Date).getTime()
              , n = Math.max(0, 16 - (t - o))
              , i = a.setTimeout(function() {
                e(t + n)
            }, n);
            return o = t + n,
            i
        }
        ,
        u = u || function(e) {
            a.clearTimeout(e)
        }
        ,
        e.rAF = r.bind(a),
        e.cAF = u.bind(a);
        var f = e.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        }
        ;
        f.String = function(e) {
            return "string" === f(e)
        }
        ,
        f.Function = function(e) {
            return "function" === f(e)
        }
        ,
        f.Array = function(e) {
            return Array.isArray(e)
        }
        ,
        f.Number = function(e) {
            return !f.Array(e) && 0 <= e - parseFloat(e) + 1
        }
        ,
        f.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        }
        ;
        var d = e.get = {};
        return d.elements = function(e) {
            var t = [];
            if (f.String(e))
                try {
                    e = document.querySelectorAll(e)
                } catch (e) {
                    return t
                }
            if ("nodelist" === f(e) || f.Array(e))
                for (var n = 0, i = t.length = e.length; n < i; n++) {
                    var o = e[n];
                    t[n] = f.DomElement(o) ? o : d.elements(o)
                }
            else
                !f.DomElement(e) && e !== document && e !== a || (t = [e]);
            return t
        }
        ,
        d.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : a.pageYOffset || 0
        }
        ,
        d.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : a.pageXOffset || 0
        }
        ,
        d.width = function(e, t, n) {
            return i("width", e, t, n)
        }
        ,
        d.height = function(e, t, n) {
            return i("height", e, t, n)
        }
        ,
        d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var i = e.getBoundingClientRect();
                n.top = i.top,
                n.left = i.left,
                t || (n.top += d.scrollTop(),
                n.left += d.scrollLeft())
            }
            return n
        }
        ,
        e.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }
        ,
        e.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        ,
        e.css = function(e, t) {
            if (f.String(t))
                return l(e)[c(t)];
            if (f.Array(t)) {
                var n = {}
                  , i = l(e);
                return t.forEach(function(e) {
                    n[e] = i[c(e)]
                }),
                n
            }
            for (var o in t) {
                var r = t[o];
                r == parseFloat(r) && (r += "px"),
                e.style[c(o)] = r
            }
        }
        ,
        e
    }(window || {});
    return I
});
var ymID = 56593384;
function clearFormFields(e) {
    $(e).find('[name="name"],[name="phone"],[name="email"],[name="comment"],[name="phone/email"]').val("")
}
$(document).ready(function() {
    $(document).on("submit", ".js-form-default", function(e) {
        var t = this
          , n = this.dataset.goal;
        $.ajax({
            method: "POST",
            url: "send.php",
            data: $(this).serialize(),
            success: function(e) {
                "ok" == e && (void 0 === n && "" == n || "undefined" == typeof ym || ym(ymID, "reachGoal", n),
                clearFormFields(t),
                $.fancybox.open({
                    src: "#form_window"
                }))
            }
        }),
        e.preventDefault()
    }),
    $(document).on("submit", ".js-form-popup", function(e) {
        var t = this
          , n = $(t).find(".js-goal").val();
        $.ajax({
            method: "POST",
            url: "send.php",
            data: $(this).serialize(),
            success: function(e) {
                void 0 === n && "" == n || "undefined" == typeof ym || ym(ymID, "reachGoal", n),
                $.fancybox.getInstance().close(),
                "ok" == e && (clearFormFields(t),
                $.fancybox.open({
                    src: "#form_window"
                }))
            }
        }),
        e.preventDefault()
    }),
    $(document).on("click", ".js-onClickGoal", function() {
        var e = this.dataset.goal;
        void 0 === e && "" == e || "undefined" == typeof ym || ym(ymID, "reachGoal", e)
    }),
    $(".tel").inputmask({
        mask: "+7 (999) 999-9999"
    }),
    $(document).on("click", ".header-panel .nav-item a, .banner-buttons .make-to-order-banner, .footer-nav-menu a", function(e) {
        e.preventDefault();
        var t = $(this).attr("href")
          , n = $(t).offset().top;
        $("body,html").animate({
            scrollTop: n
        }, 1e3)
    })
});
var sections = document.querySelectorAll("section")
  , banner = document.querySelector(".chef-banner-section")
  , timer = null
  , current = 0;
document.body.addEventListener("wheel", function(e) {
    if (e.deltaY <= 0) {
        if (0 == current)
            return;
        null == timer && (sections[current--].classList.remove("active"),
        sections[current].classList.add("active"),
        getSection())
    } else {
        if (current == sections.length - 1)
            return;
        null == timer && (sections[current++].classList.remove("active"),
        sections[current].classList.add("active"),
        getSection())
    }
});
var getSection = function() {
    timer = setTimeout(function() {
        timer = null
    }, 1500)
};
