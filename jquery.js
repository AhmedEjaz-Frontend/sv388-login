/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat
      ? function (e) {
          return oe.flat.call(e);
        }
      : function (e) {
          return oe.concat.apply([], e);
        },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0,
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (((o.text = e), t))
      for (r in u)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e;
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !v(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ce.fn = ce.prototype =
    {
      jquery: t,
      constructor: ce,
      length: 0,
      toArray: function () {
        return ae.call(this);
      },
      get: function (e) {
        return null == e
          ? ae.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ce.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ce.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ce.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ae.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ce.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: oe.sort,
      splice: oe.splice,
    }),
    (ce.extend = ce.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || v(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ce.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ce.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ce.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = ue.call(t, "constructor") && t.constructor) &&
              o.call(n) === a))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        m(
          e,
          {
            nonce: t && t.nonce,
          },
          n
        );
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (c(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) while ((t = e[r++])) n += ce.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (c(Object(e))
              ? ce.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : se.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (c(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: le,
    }),
    "function" == typeof Symbol &&
      (ce.fn[Symbol.iterator] = oe[Symbol.iterator]),
    ce.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !(function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ge +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p =
        "\\[" +
        ge +
        "*(" +
        t +
        ")(?:" +
        ge +
        "*([*^$|!~]?=)" +
        ge +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        ge +
        "*\\]",
      g =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        p +
        ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ge +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ge +
            "*(?:([+-]|)" +
            ge +
            "*(\\d+)|))" +
            ge +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ge +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ge +
            "*((?:-\\d)?\\d*)" +
            ge +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      M = function () {
        V();
      },
      R = J(
        function (e) {
          return !0 === e.disabled && fe(e, "fieldset");
        },
        {
          dir: "parentNode",
          next: "legend",
        }
      );
    try {
      k.apply((oe = ae.call(ye.childNodes)), ye.childNodes),
        oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        },
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (V(e), (e = e || T), C)) {
        if (11 !== p && (u = L.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n;
            } else if (
              f &&
              (a = f.getElementById(i)) &&
              I.contains(e, a) &&
              a.id === i
            )
              return k.call(n, a), n;
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return k.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(h[t + " "] || (d && d.test(t)))) {
          if (((c = t), (f = e), 1 === p && (x.test(t) || m.test(t)))) {
            ((f = (H.test(t) && U(e.parentNode)) || e) == e && le.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = ce.escapeSelector(s))
                : e.setAttribute("id", (s = S))),
              (o = (l = Y(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function F(e) {
      return (e[S] = !0), e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function z(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && R(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function X(a) {
      return F(function (o) {
        return (
          (o = +o),
          F(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return (
        n != T &&
          9 === n.nodeType &&
          n.documentElement &&
          ((r = (T = n).documentElement),
          (C = !ce.isXMLDoc(T)),
          (i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
          r.msMatchesSelector &&
            ye != T &&
            (t = T.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", M),
          (le.getById = $(function (e) {
            return (
              (r.appendChild(e).id = ce.expando),
              !T.getElementsByName || !T.getElementsByName(ce.expando).length
            );
          })),
          (le.disconnectedMatch = $(function (e) {
            return i.call(e, "*");
          })),
          (le.scope = $(function () {
            return T.querySelectorAll(":scope");
          })),
          (le.cssHas = $(function () {
            try {
              return T.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          le.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = function (e, t) {
            return "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (b.find.CLASS = function (e, t) {
            if ("undefined" != typeof t.getElementsByClassName && C)
              return t.getElementsByClassName(e);
          }),
          (d = []),
          $(function (e) {
            var t;
            (r.appendChild(e).innerHTML =
              "<a id='" +
              S +
              "' href='' disabled='disabled'></a><select id='" +
              S +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                d.push("\\[" + ge + "*(?:value|" + f + ")"),
              e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="),
              e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || d.push(":checked"),
              (t = T.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (r.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                d.push(":enabled", ":disabled"),
              (t = T.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
          }),
          le.cssHas || d.push(":has"),
          (d = d.length && new RegExp(d.join("|"))),
          (l = function (e, t) {
            if (e === t) return (a = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!le.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === T || (e.ownerDocument == ye && I.contains(ye, e))
                  ? -1
                  : t === T || (t.ownerDocument == ye && I.contains(ye, t))
                  ? 1
                  : o
                  ? se.call(o, e) - se.call(o, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          })),
        T
      );
    }
    for (e in ((I.matches = function (e, t) {
      return I(e, null, null, t);
    }),
    (I.matchesSelector = function (e, t) {
      if ((V(e), C && !h[t + " "] && (!d || !d.test(t))))
        try {
          var n = i.call(e, t);
          if (
            n ||
            le.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          h(t, !0);
        }
      return 0 < I(t, T, null, [e]).length;
    }),
    (I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }),
    (I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((a = !le.sortStable),
        (o = !le.sortStable && ae.call(e, 0)),
        de.call(e, l),
        a)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return (o = null), e;
    }),
    (ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }),
    ((b = ce.expr =
      {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: !0,
          },
          "~": {
            dir: "previousSibling",
          },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(O, P)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(O, P)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || I.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && I.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return D.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    j.test(n) &&
                    (t = Y(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return fe(e, t);
                };
          },
          CLASS: function (e) {
            var t = s[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) &&
                s(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = I.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                        s = u = "only" === d && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (a =
                          (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E &&
                          r[1]) && r[2]),
                        (o = a && l.childNodes[a]);
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [E, a, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = a =
                          (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++a && o && o[u]) || (p = a = 0) || s.pop()))
                        if (
                          (m ? fe(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                I.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? F(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = se.call(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: F(function (e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S]
              ? F(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: F(function (t) {
            return function (e) {
              return 0 < I(t, e).length;
            };
          }),
          contains: F(function (t) {
            return (
              (t = t.replace(O, P)),
              function (e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t);
              }
            );
          }),
          lang: F(function (n) {
            return (
              A.test(n || "") || I.error("unsupported lang: " + n),
              (n = n.replace(O, P).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })() &&
              T.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function (e) {
            return (
              (fe(e, "input") && !!e.checked) ||
              (fe(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return q.test(e.nodeName);
          },
          input: function (e) {
            return N.test(e.nodeName);
          },
          button: function (e) {
            return (fe(e, "input") && "button" === e.type) || fe(e, "button");
          },
          text: function (e) {
            var t;
            return (
              fe(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: X(function () {
            return [0];
          }),
          last: X(function (e, t) {
            return [t - 1];
          }),
          eq: X(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: X(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: X(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: X(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: X(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    }))
      b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0,
    })
      b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (a = e), (s = []), (u = b.preFilter);
      while (a) {
        for (o in ((n && !(r = y.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = m.exec(a)) &&
          ((n = r.shift()),
          i.push({
            value: n,
            type: r[0].replace(ve, " "),
          }),
          (a = a.slice(n.length))),
        b.filter))
          !(r = D[o].exec(a)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({
              value: n,
              type: o,
              matches: r,
            }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[s])) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [E, f];
            if (n) {
              while ((e = e[s]))
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              while ((e = e[s]))
                if (1 === e.nodeType || c)
                  if (((i = e[S] || (e[S] = {})), u && fe(e, u))) e = e[s] || e;
                  else {
                    if ((r = i[l]) && r[0] === E && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function K(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = ee(v)),
        y && !y[S] && (y = ee(y, e)),
        F(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : Z(f, u, d, n, r);
          if (
            (g ? g(p, (s = y || (e ? d : c || v) ? [] : t), n, r) : (s = p), v)
          ) {
            (i = Z(s, l)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = s.length);
                while (o--) (a = s[o]) && i.push((p[o] = a));
                y(null, (s = []), i, r);
              }
              o = s.length;
              while (o--)
                (a = s[o]) &&
                  -1 < (i = y ? se.call(e, a) : u[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (s = Z(s === t ? s.splice(c, s.length) : s)), y ? y(null, t, s, r) : k.apply(t, s);
        })
      );
    }
    function te(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = J(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = J(
            function (e) {
              return -1 < se.call(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t != w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return ee(
              1 < s && K(c),
              1 < s &&
                Q(
                  e.slice(0, s - 1).concat({
                    value: " " === e[s - 2].type ? "*" : "",
                  })
                ).replace(ve, "$1"),
              t,
              s < n && te(e.slice(s, n)),
              n < r && te((e = e.slice(n))),
              n < r && Q(e)
            );
          }
          c.push(t);
        }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), (n = t.length);
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(
          e,
          ((v = o),
          (m = 0 < (y = i).length),
          (x = 0 < v.length),
          (r = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || (x && b.find.TAG("*", i)),
              h = (E += null == p ? 1 : Math.random() || 0.1),
              g = d.length;
            for (
              i && (w = t == T || t || i);
              l !== g && null != (o = d[l]);
              l++
            ) {
              if (x && o) {
                (a = 0), t || o.ownerDocument == T || (V(o), (n = !C));
                while ((s = v[a++]))
                  if (s(o, t || T, n)) {
                    k.call(r, o);
                    break;
                  }
                i && (E = h);
              }
              m && ((o = !s && o) && u--, e && c.push(o));
            }
            if (((u += l), m && l !== u)) {
              a = 0;
              while ((s = y[a++])) s(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                f = Z(f);
              }
              k.apply(r, f),
                i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
            }
            return i && ((E = h), (w = p)), c;
          }),
          m ? F(r) : r)
        )).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y((e = l.selector || e));
      if (((n = n || []), 1 === c.length)) {
        if (
          2 < (o = c[0] = c[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          C &&
          b.relative[o[1].type]
        ) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
            return n;
          l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (((a = o[i]), b.relative[(s = a.type)])) break;
          if (
            (u = b.find[s]) &&
            (r = u(
              a.matches[0].replace(O, P),
              (H.test(o[0].type) && U(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && Q(o))))
              return k.apply(n, r), n;
            break;
          }
        }
      }
      return (
        (l || ne(e, c))(r, t, !C, n, !t || (H.test(e) && U(t.parentNode)) || t),
        n
      );
    }
    (G.prototype = b.filters = b.pseudos),
      (b.setFilters = new G()),
      (le.sortStable = S.split("").sort(l).join("") === S),
      V(),
      (le.sortDetached = $(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      (ce.find = I),
      (ce.expr[":"] = ce.expr.pseudos),
      (ce.unique = ce.uniqueSort),
      (I.compile = ne),
      (I.select = re),
      (I.setDocument = V),
      (I.tokenize = Y),
      (I.escape = ce.escapeSelector),
      (I.getText = ce.text),
      (I.isXML = ce.isXMLDoc),
      (I.selectors = ce.expr),
      (I.support = ce.support),
      (I.uniqueSort = ce.uniqueSort);
  })();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n)
      ? ce.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ce.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? ce.grep(e, function (e) {
          return -1 < se.call(n, e) !== r;
        })
      : ce.filter(n, e, r);
  }
  (ce.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ce.find.matchesSelector(r, e)
          ? [r]
          : []
        : ce.find.matches(
            e,
            ce.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ce.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ce(e).filter(function () {
              for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
        return 1 < r ? ce.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function (e) {
        return !!T(
          this,
          "string" == typeof e && b.test(e) ? ce(e) : e || [],
          !1
        ).length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : S.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ce ? t[0] : t),
          ce.merge(
            this,
            ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
          ),
          w.test(r[1]) && ce.isPlainObject(t))
        )
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = C.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ce)
      : ce.makeArray(e, this);
  }).prototype = ce.fn),
    (k = ce(C));
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && ce.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? se.call(ce(e), this[0])
          : se.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ce.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return d(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return d(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return d(e, "nextSibling");
        },
        prevAll: function (e) {
          return d(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return d(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return d(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (fe(e, "template") && (e = e.content || e),
              ce.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ce.fn[r] = function (e, t) {
          var n = ce.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ce.filter(t, n)),
            1 < this.length &&
              (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && v((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (ce.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                ce.each(e, function (e, t) {
                  v(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== x(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ce.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ce.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ce.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ce.Callbacks("memory"),
              ce.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ce.Callbacks("once memory"),
              ce.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ce
                .Deferred(function (r) {
                  ce.each(o, function (e, t) {
                    var n = v(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          v(t)
                            ? s
                              ? t.call(e, l(u, o, N, s), l(u, o, q, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, N, s),
                                  l(u, o, q, s),
                                  l(u, o, N, o.notifyWith)
                                ))
                            : (a !== N && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ce.Deferred.exceptionHook &&
                              ce.Deferred.exceptionHook(e, t.error),
                              u <= i + 1 &&
                                (a !== q && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ce.Deferred.getErrorHook
                        ? (t.error = ce.Deferred.getErrorHook())
                        : ce.Deferred.getStackHook &&
                          (t.error = ce.Deferred.getStackHook()),
                      ie.setTimeout(t));
                };
              }
              return ce
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                    o[1][3].add(l(0, e, v(t) ? t : N)),
                    o[2][3].add(l(0, e, v(n) ? n : q));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ce.extend(e, a) : a;
            },
          },
          s = {};
        return (
          ce.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = ae.call(arguments),
          o = ce.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? ae.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (L(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || v(i[t] && i[t].then))
        )
          return o.then();
        while (t--) L(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ce.Deferred.exceptionHook = function (e, t) {
    ie.console &&
      ie.console.warn &&
      e &&
      H.test(e.name) &&
      ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ce.readyException = function (e) {
      ie.setTimeout(function () {
        throw e;
      });
    });
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P),
      ie.removeEventListener("load", P),
      ce.ready();
  }
  (ce.fn.ready = function (e) {
    return (
      O.then(e)["catch"](function (e) {
        ce.readyException(e);
      }),
      this
    );
  }),
    ce.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ce.readyWait : ce.isReady) ||
          ((ce.isReady = !0) !== e && 0 < --ce.readyWait) ||
          O.resolveWith(C, [ce]);
      },
    }),
    (ce.ready.then = O.then),
    "complete" === C.readyState ||
    ("loading" !== C.readyState && !C.documentElement.doScroll)
      ? ie.setTimeout(ce.ready)
      : (C.addEventListener("DOMContentLoaded", P),
        ie.addEventListener("load", P));
  var M = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in ((i = !0), n)) M(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        v(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ce(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    R = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(R, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  (B.uid = 1),
    (B.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            $(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[F(t)] = n;
        else for (r in t) i[F(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][F(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(F)
              : (t = F(t)) in r
              ? [t]
              : t.match(D) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ce.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ce.isEmptyObject(t);
      },
    });
  var _ = new B(),
    z = new B(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(U, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : X.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return z.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return z.access(e, t, n);
    },
    removeData: function (e, t) {
      z.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    },
  }),
    ce.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = z.get(o)), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = F(r.slice(5))), V(o, r, i[r]));
            _.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              z.set(this, n);
            })
          : M(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = z.get(o, n))
                    ? t
                    : void 0 !== (t = V(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  z.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          z.remove(this, e);
        });
      },
    }),
    ce.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = _.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = _.access(e, t, ce.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ce.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ce._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ce.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          _.get(e, n) ||
          _.access(e, n, {
            empty: ce.Callbacks("once memory").add(function () {
              _.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ce.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ce.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ce.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ce.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = _.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0,
    };
  J.getRootNode &&
    (K = function (e) {
      return (
        ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
      );
    });
  var ee = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && K(e) && "none" === ce.css(e, "display"))
    );
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ce.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (ce.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (ce.cssNumber[t] || ("px" !== l && +u)) &&
        Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        ce.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), ce.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = _.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ee(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ne[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = ce.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ne[s] = u)))))
          : "none" !== n && ((l[c] = "none"), _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ee(this) ? ce(this).show() : ce(this).hide();
          });
    },
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  (xe = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (be = C.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    xe.appendChild(be),
    (le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (xe.innerHTML = "<textarea>x</textarea>"),
    (le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
    (xe.innerHTML = "<option></option>"),
    (le.option = !!xe.lastChild);
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function Se(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && fe(e, t)) ? ce.merge([e], n) : n
    );
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  (ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead),
    (ke.th = ke.td),
    le.option ||
      (ke.optgroup = ke.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (Te.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ke[s] || ke._default),
            (a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          ce.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (
        ((l = K(o)), (a = Se(f.appendChild(o), "script")), l && Ee(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) Ce.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Le(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = qe;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return ce().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = ce.guid++))),
      e.each(function () {
        ce.event.add(this, t, i, r, n);
      })
    );
  }
  function He(e, r, t) {
    t
      ? (_.set(e, r, !1),
        ce.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = _.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n)
                (ce.event.special[r] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = ae.call(arguments)),
                _.set(this, r, n),
                this[r](),
                (t = _.get(this, r)),
                _.set(this, r, !1),
                n !== t)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else
              n &&
                (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Ne));
          },
        }))
      : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  (ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ce.find.matchesSelector(J, i),
          n.guid || (n.guid = ce.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof ce && ce.event.triggered !== e.type
                  ? ce.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(D) || [""]).length);
        while (l--)
          (d = g = (s = De.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ce.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ce.event.special[d] || {}),
              (c = ce.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ce.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (ce.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = De.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = ce.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ce.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = ce.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ce.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < ce(i, this).index(l)
                  : ce.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length &&
              s.push({
                elem: l,
                handlers: o,
              });
          }
      return (
        (l = this),
        u < t.length &&
          s.push({
            elem: l,
            handlers: t.slice(u),
          }),
        s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (we.test(t.type) &&
              t.click &&
              fe(t, "input") &&
              _.get(t, "click")) ||
            fe(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ce.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ce.Event = function (e, t) {
      if (!(this instanceof ce.Event)) return new ce.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ne
              : qe),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ce.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ce.expando] = !0);
    }),
    (ce.Event.prototype = {
      constructor: ce.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ne),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ne),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ne),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ce.each(
      {
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
        which: !0,
      },
      ce.event.addProp
    ),
    ce.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (r, i) {
        function o(e) {
          if (C.documentMode) {
            var t = _.get(this, "handle"),
              n = ce.event.fix(e);
            (n.type = "focusin" === e.type ? "focus" : "blur"),
              (n.isSimulated = !0),
              t(e),
              n.target === n.currentTarget && t(n);
          } else ce.event.simulate(i, e.target, ce.event.fix(e));
        }
        (ce.event.special[r] = {
          setup: function () {
            var e;
            if ((He(this, r, !0), !C.documentMode)) return !1;
            (e = _.get(this, i)) || this.addEventListener(i, o),
              _.set(this, i, (e || 0) + 1);
          },
          trigger: function () {
            return He(this, r), !0;
          },
          teardown: function () {
            var e;
            if (!C.documentMode) return !1;
            (e = _.get(this, i) - 1)
              ? _.set(this, i, e)
              : (this.removeEventListener(i, o), _.remove(this, i));
          },
          _default: function (e) {
            return _.get(e.target, r);
          },
          delegateType: i,
        }),
          (ce.event.special[i] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = C.documentMode ? this : e,
                n = _.get(t, i);
              n ||
                (C.documentMode
                  ? this.addEventListener(i, o)
                  : e.addEventListener(r, o, !0)),
                _.set(t, i, (n || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = C.documentMode ? this : e,
                n = _.get(t, i) - 1;
              n
                ? _.set(t, i, n)
                : (C.documentMode
                    ? this.removeEventListener(i, o)
                    : e.removeEventListener(r, o, !0),
                  _.remove(t, i));
            },
          });
      }
    ),
    ce.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ce.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ce.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ce.fn.extend({
      on: function (e, t, n, r) {
        return Le(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Le(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ce(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = qe),
          this.each(function () {
            ce.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e, t) {
    return (
      (fe(e, "table") &&
        fe(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ce(e).children("tbody")[0]) ||
      e
    );
  }
  function Ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function We(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in (_.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && ((o = z.access(e)), (a = ce.extend({}, o)), z.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || (1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ce.clone(u, !0, !0)), s && ce.merge(a, Se(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (
          l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0;
          c < s;
          c++
        )
          (u = a[c]),
            Ce.test(u.type || "") &&
              !_.access(u, "globalEval") &&
              ce.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ce._evalUrl &&
                  !u.noModule &&
                  ce._evalUrl(
                    u.src,
                    {
                      nonce: u.nonce || u.getAttribute("nonce"),
                    },
                    l
                  )
                : m(u.textContent.replace(Me, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ce.cleanData(Se(r)),
        r.parentNode &&
          (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (
        !(
          le.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ce.isXMLDoc(e)
        )
      )
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)
            Fe(o[r], a[r]);
        else Fe(e, c);
      return (
        0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if ((t = n[_.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0;
          }
          n[z.expando] && (n[z.expando] = void 0);
        }
    },
  }),
    ce.fn.extend({
      detach: function (e) {
        return Be(this, e, !0);
      },
      remove: function (e) {
        return Be(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? ce.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return $e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return $e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Re(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ce.cleanData(Se(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ce.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Oe.test(e) &&
              !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ce.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ce.cleanData(Se(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return $e(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ce.inArray(this, n) < 0 &&
              (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ce.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ce.fn[e] = function (e) {
          for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ce(r[o])[a](t),
              s.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = ie), t.getComputedStyle(e);
    },
    Ue = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = ze.test(t),
      u = e.style;
    return (
      (n = n || Xe(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(ve, "$1") || void 0),
        "" !== a || K(e) || (a = ce.style(e, t)),
        !le.pixelBoxStyles() &&
          _e.test(a) &&
          Ve.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          J.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (le.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ce.extend(le, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = C.createElement("table")),
              (t = C.createElement("tr")),
              (n = C.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "box-sizing:content-box;border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              J.appendChild(e).appendChild(t).appendChild(n),
              (r = ie.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              J.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Je
        ? e
        : (Ke[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
              while (n--) if ((e = Qe[n] + t) in Je) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400",
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += ce.css(e, n + Q[a], !0, i)),
        r
          ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n &&
              (u -= ce.css(e, "border" + Q[a] + "Width", !0, i)))
          : ((u += ce.css(e, "padding" + Q[a], !0, i)),
            "padding" !== n
              ? (u += ce.css(e, "border" + Q[a] + "Width", !0, i))
              : (s += ce.css(e, "border" + Q[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + l
    );
  }
  function ot(e, t, n) {
    var r = Xe(e),
      i =
        (!le.boxSizingReliable() || n) &&
        "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!le.boxSizingReliable() && i) ||
        (!le.reliableTrDimensions() && fe(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === ce.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ce.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        it(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
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
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = ze.test(t),
          l = e.style;
        if (
          (u || (t = Ze(s)),
          (a = ce.cssHooks[t] || ce.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = Y.exec(n)) &&
          i[1] &&
          ((n = te(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ce.cssNumber[s] ? "" : "px")),
            le.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return (
        ze.test(t) || (t = Ze(s)),
        (a = ce.cssHooks[t] || ce.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ge(e, t, r)),
        "normal" === i && t in nt && (i = nt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ce.each(["height", "width"], function (e, u) {
      ce.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !et.test(ce.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ot(e, u, n)
              : Ue(e, tt, function () {
                  return ot(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !le.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
            s = n ? it(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  it(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = Y.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = ce.css(e, u))),
            rt(0, t, s)
          );
        },
      };
    }),
    (ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ge(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ue(
                e,
                {
                  marginLeft: 0,
                },
                function () {
                  return e.getBoundingClientRect().left;
                }
              )) + "px"
        );
    })),
    ce.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (i, o) {
        (ce.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (ce.cssHooks[i + o].set = rt);
      }
    ),
    ce.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = ce.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ce.Tween = at).prototype = {
      constructor: at,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ce.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ce.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = at.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ce.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : at.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = at.prototype),
    ((at.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          ce.fx.step[e.prop]
            ? ce.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ce.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = at.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ce.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ce.fx = at.prototype.init),
    (ce.fx.step = {});
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut &&
      (!1 === C.hidden && ie.requestAnimationFrame
        ? ie.requestAnimationFrame(dt)
        : ie.setTimeout(dt, ce.fx.interval),
      ce.fx.tick());
  }
  function ht() {
    return (
      ie.setTimeout(function () {
        st = void 0;
      }),
      (st = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e,
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (
      var r,
        i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = st || ht(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(
          !0,
          {
            specialEasing: {},
            easing: ce.easing._default,
          },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = F(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = ce.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = yt.prefilters[r].call(l, o, c, l.opts)))
        return (
          v(n.stop) &&
            (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ce.map(c, vt, l),
      v(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ce.fx.timer(
        ce.extend(u, {
          elem: o,
          anim: l,
          queue: l.opts.queue,
        })
      ),
      l
    );
  }
  (ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return te(n.elem, e, Y.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ee(e),
          v = _.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = ce._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ce.style(e, r);
          }
        if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = _.get(e, "display")),
            "none" === (c = ce.css(e, "display")) &&
              (l
                ? (c = l)
                : (re([e], !0),
                  (l = e.style.display || l),
                  (c = ce.css(e, "display")),
                  re([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ce.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = _.access(e, "fxshow", {
                    display: l,
                  })),
              o && (v.hidden = !g),
              g && re([e], !0),
              p.done(function () {
                for (r in (g || re([e]), _.remove(e, "fxshow"), d))
                  ce.style(e, r, d[r]);
              })),
              (u = vt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (ce.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ce.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t),
            };
      return (
        ce.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ce.fx.speeds
              ? (r.duration = ce.fx.speeds[r.duration])
              : (r.duration = ce.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ce.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ee).css("opacity", 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          r
        );
      },
      animate: function (t, e, n, r) {
        var i = ce.isEmptyObject(t),
          o = ce.speed(e, n, r),
          a = function () {
            var e = yt(this, ce.extend({}, t), o);
            (i || _.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ce.timers,
              r = _.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ce.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = _.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ce.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ce.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ce.each(["toggle", "show", "hide"], function (e, r) {
      var i = ce.fn[r];
      ce.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    ce.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (e, r) {
        ce.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ce.timers = []),
    (ce.fx.tick = function () {
      var e,
        t = 0,
        n = ce.timers;
      for (st = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ce.fx.stop(), (st = void 0);
    }),
    (ce.fx.timer = function (e) {
      ce.timers.push(e), ce.fx.start();
    }),
    (ce.fx.interval = 13),
    (ce.fx.start = function () {
      ut || ((ut = !0), dt());
    }),
    (ce.fx.stop = function () {
      ut = null;
    }),
    (ce.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (ce.fn.delay = function (r, e) {
      return (
        (r = (ce.fx && ce.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = ie.setTimeout(e, r);
          t.stop = function () {
            ie.clearTimeout(n);
          };
        })
      );
    }),
    (lt = C.createElement("input")),
    (ct = C.createElement("select").appendChild(C.createElement("option"))),
    (lt.type = "checkbox"),
    (le.checkOn = "" !== lt.value),
    (le.optSelected = ct.selected),
    ((lt = C.createElement("input")).value = "t"),
    (lt.type = "radio"),
    (le.radioValue = "t" === lt.value);
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    },
  }),
    ce.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? ce.prop(e, t, n)
            : ((1 === o && ce.isXMLDoc(e)) ||
                (i =
                  ce.attrHooks[t.toLowerCase()] ||
                  (ce.expr.match.bool.test(t) ? mt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ce.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ce.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!le.radioValue && "radio" === t && fe(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(D);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (mt = {
      set: function (e, t, n) {
        return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || ce.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    },
  }),
    ce.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ce.isXMLDoc(e)) ||
              ((t = ce.propFix[t] || t), (i = ce.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ce.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    }),
    le.optSelected ||
      (ce.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ce.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ce.propFix[this.toLowerCase()] = this;
      }
    ),
    ce.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).addClass(t.call(this, e, Ct(this)));
            })
          : (e = kt(t)).length
          ? this.each(function () {
              if (
                ((r = Ct(this)), (n = 1 === this.nodeType && " " + Tt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = Tt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return v(t)
          ? this.each(function (e) {
              ce(this).removeClass(t.call(this, e, Ct(this)));
            })
          : arguments.length
          ? (e = kt(t)).length
            ? this.each(function () {
                if (
                  ((r = Ct(this)),
                  (n = 1 === this.nodeType && " " + Tt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = Tt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return v(t)
          ? this.each(function (e) {
              ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = kt(t)),
            this.each(function () {
              if (s)
                for (o = ce(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = Ct(this)) && _.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : _.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = v(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ce(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = ce.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                ce.valHooks[this.type] ||
                ce.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(St, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ce.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ce.find.attr(e, "value");
            return null != t ? t : Tt(ce.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))
              ) {
                if (((t = ce(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ce.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ce.each(["radio", "checkbox"], function () {
      (ce.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ce.inArray(ce(e).val(), t));
        },
      }),
        le.checkOn ||
          (ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = ie.location,
    jt = {
      guid: Date.now(),
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ce.error(
          "Invalid XML: " +
            (n
              ? ce
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e)
        ),
      t
    );
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Dt.test(d + ce.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ce.expando]
            ? e
            : new ce.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ce.makeArray(t, [e])),
          (c = ce.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !y(n)) {
          for (
            s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || C) &&
            p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (_.get(o, "events") || Object.create(null))[e.type] &&
              _.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              $(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !$(n) ||
            (u &&
              v(n[d]) &&
              !y(n) &&
              ((a = n[u]) && (n[u] = null),
              (ce.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Nt),
              (ce.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0,
      });
      ce.event.trigger(r, null, t);
    },
  }),
    ce.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ce.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ce.event.trigger(e, t, n, !0);
      },
    });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ce.each(e, function (e, t) {
        r || qt.test(n)
          ? i(n, t)
          : Pt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== x(e)) i(n, e);
    else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  (ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ce.isPlainObject(e)))
      ce.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }),
    ce.fn.extend({
      serialize: function () {
        return ce.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ce.prop(this, "elements");
          return e ? ce.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ce(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !we.test(e))
            );
          })
          .map(function (e, t) {
            var n = ce(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ce.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(Lt, "\r\n"),
                  };
                })
              : {
                  name: t.name,
                  value: n.replace(Lt, "\r\n"),
                };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");
  function Ut(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        ce.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  (Xt.href = Et.href),
    ce.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ce.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut(_t),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ce.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
          x = ce.Deferred(),
          b = ce.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Wt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            $t,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ce.param(v.data, v.traditional)),
          Vt(Bt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ce.event && v.global) &&
          0 == ce.active++ &&
          ce.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Rt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (At.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ce.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ce.lastModified[f]),
          ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Vt(_t, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = ie.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && ie.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ce.inArray("script", v.dataTypes) &&
              ce.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return {
                state: "success",
                data: t,
              };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ce.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ce.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ce.get(e, void 0, t, "script");
      },
    }),
    ce.each(["get", "post"], function (e, i) {
      ce[i] = function (e, t, n, r) {
        return (
          v(t) && ((r = r || n), (n = t), (t = void 0)),
          ce.ajax(
            ce.extend(
              {
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n,
              },
              ce.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ce.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ce._evalUrl = function (e, t, n) {
      return ce.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {},
        },
        dataFilter: function (e) {
          ce.globalEval(e, t, n);
        },
      });
    }),
    ce.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = ce(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return v(n)
          ? this.each(function (e) {
              ce(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ce(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = v(t);
        return this.each(function (e) {
          ce(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ce(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ce.expr.pseudos.hidden = function (e) {
      return !ce.expr.pseudos.visible(e);
    }),
    (ce.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ce.ajaxSettings.xhr = function () {
      try {
        return new ie.XMLHttpRequest();
      } catch (e) {}
    });
  var Yt = {
      0: 200,
      1223: 204,
    },
    Qt = ce.ajaxSettings.xhr();
  (le.cors = !!Qt && "withCredentials" in Qt),
    (le.ajax = Qt = !!Qt),
    ce.ajaxTransport(function (i) {
      var o, a;
      if (le.cors || (Qt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Yt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? {
                              binary: r.response,
                            }
                          : {
                              text: r.responseText,
                            },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      ie.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    ce.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ce.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (e) {
          return ce.globalEval(e), e;
        },
      },
    }),
    ce.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ce.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = ce("<script>")
              .attr(n.scriptAttrs || {})
              .prop({
                charset: n.scriptCharset,
                src: n.url,
              })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ce.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Zt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Zt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ce.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = ie[r]),
          (ie[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? ce(ie).removeProp(r) : (ie[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
              o && v(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (le.createHTMLDocument =
      (((Jt = C.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Jt.childNodes.length)),
    (ce.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (le.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (o = !n && []),
          (i = w.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Ae([e], t, o)),
              o && o.length && ce(o).remove(),
              ce.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ce.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          ce
            .ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t,
            })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ce.expr.pseudos.animated = function (t) {
      return ce.grep(ce.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ce.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = ce.css(e, "position"),
          c = ce(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = ce.css(e, "top")),
          (u = ce.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          v(t) && (t = t.call(e, n, ce.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ce.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ce.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = {
              top: 0,
              left: 0,
            };
          if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ce.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0)),
              (i.left += ce.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ce.css(r, "marginTop", !0),
            left: t.left - i.left - ce.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
          return e || J;
        });
      },
    }),
    ce.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function (e) {
          return M(
            this,
            function (e, t, n) {
              var r;
              if (
                (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
        if (t)
          return (t = Ge(e, n)), _e.test(t) ? ce(e).position()[n] + "px" : t;
      });
    }),
    ce.each(
      {
        Height: "height",
        Width: "width",
      },
      function (a, s) {
        ce.each(
          {
            padding: "inner" + a,
            content: s,
            "": "outer" + a,
          },
          function (r, o) {
            ce.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return M(
                this,
                function (e, t, n) {
                  var r;
                  return y(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? ce.css(e, t, i)
                    : ce.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }
    ),
    ce.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ce.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ce.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ce.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ce.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ce.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
      return (
        (r = ae.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(ae.call(arguments)));
        }).guid = e.guid =
          e.guid || ce.guid++),
        i
      );
  }),
    (ce.holdReady = function (e) {
      e ? ce.readyWait++ : ce.ready(!0);
    }),
    (ce.isArray = Array.isArray),
    (ce.parseJSON = JSON.parse),
    (ce.nodeName = fe),
    (ce.isFunction = v),
    (ce.isWindow = y),
    (ce.camelCase = F),
    (ce.type = x),
    (ce.now = Date.now),
    (ce.isNumeric = function (e) {
      var t = ce.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ce.trim = function (e) {
      return null == e ? "" : (e + "").replace(en, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ce;
      });
  var tn = ie.jQuery,
    nn = ie.$;
  return (
    (ce.noConflict = function (e) {
      return (
        ie.$ === ce && (ie.$ = nn),
        e && ie.jQuery === ce && (ie.jQuery = tn),
        ce
      );
    }),
    "undefined" == typeof e && (ie.jQuery = ie.$ = ce),
    ce
  );
});

/*! jquery-qrcode v0.18.0 - https://larsjung.de/jquery-qrcode/ */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd)
    define("jquery-qrcode", [], factory);
  else if (typeof exports === "object") exports["jquery-qrcode"] = factory();
  else root["jquery-qrcode"] = factory();
})(typeof self !== "undefined" ? self : this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __webpack_require__) {
        var WIN = window; // eslint-disable-line

        var JQ = WIN.jQuery;

        var is_img_el = function is_img_el(x) {
          return (
            x &&
            typeof x.tagName === "string" &&
            x.tagName.toUpperCase() === "IMG"
          );
        }; // Wrapper for the original QR code generator.

        var create_qrcode = function create_qrcode(
          text,
          level,
          version,
          quiet
        ) {
          var qr = {};

          var qr_gen = __webpack_require__(1);

          qr_gen.stringToBytes = qr_gen.stringToBytesFuncs["UTF-8"];
          var vqr = qr_gen(version, level);
          vqr.addData(text);
          vqr.make();
          quiet = quiet || 0;
          var module_count = vqr.getModuleCount();
          var quiet_module_count = module_count + 2 * quiet;

          var is_dark = function is_dark(row, col) {
            row -= quiet;
            col -= quiet;
            return (
              row >= 0 &&
              row < module_count &&
              col >= 0 &&
              col < module_count &&
              vqr.isDark(row, col)
            );
          };

          var add_blank = function add_blank(l, t, r, b) {
            var prev_is_dark = qr.is_dark;
            var module_size = 1 / quiet_module_count;

            qr.is_dark = function (row, col) {
              var ml = col * module_size;
              var mt = row * module_size;
              var mr = ml + module_size;
              var mb = mt + module_size;
              return (
                prev_is_dark(row, col) && (l > mr || ml > r || t > mb || mt > b)
              );
            };
          };

          qr.text = text;
          qr.level = level;
          qr.version = version;
          qr.module_count = quiet_module_count;
          qr.is_dark = is_dark;
          qr.add_blank = add_blank;
          return qr;
        }; // Returns a minimal QR code for the given text starting with version `min_ver`.
        // Returns `undefined` if `text` is too long to be encoded in `max_ver`.

        var create_min_qrcode = function create_min_qrcode(
          text,
          level,
          min_ver,
          max_ver,
          quiet
        ) {
          min_ver = Math.max(1, min_ver || 1);
          max_ver = Math.min(40, max_ver || 40);

          for (var ver = min_ver; ver <= max_ver; ver += 1) {
            try {
              return create_qrcode(text, level, ver, quiet);
            } catch (err) {
              /* empty */
            }
          }

          return undefined;
        };

        var draw_background_label = function draw_background_label(
          qr,
          ctx,
          settings
        ) {
          var size = settings.size;
          var font =
            "bold " + settings.mSize * size + "px " + settings.fontname;
          var tmp_ctx = JQ("<canvas/>")[0].getContext("2d");
          tmp_ctx.font = font;
          var w = tmp_ctx.measureText(settings.label).width;
          var sh = settings.mSize;
          var sw = w / size;
          var sl = (1 - sw) * settings.mPosX;
          var st = (1 - sh) * settings.mPosY;
          var sr = sl + sw;
          var sb = st + sh;
          var pad = 0.01;

          if (settings.mode === 1) {
            // Strip
            qr.add_blank(0, st - pad, size, sb + pad);
          } else {
            // Box
            qr.add_blank(sl - pad, st - pad, sr + pad, sb + pad);
          }

          ctx.fillStyle = settings.fontcolor;
          ctx.font = font;
          ctx.fillText(
            settings.label,
            sl * size,
            st * size + 0.75 * settings.mSize * size
          );
        };

        var draw_background_img = function draw_background_img(
          qr,
          ctx,
          settings
        ) {
          var size = settings.size;
          var w = settings.image.naturalWidth || 1;
          var h = settings.image.naturalHeight || 1;
          var sh = settings.mSize;
          var sw = (sh * w) / h;
          var sl = (1 - sw) * settings.mPosX;
          var st = (1 - sh) * settings.mPosY;
          var sr = sl + sw;
          var sb = st + sh;
          var pad = 0.01;

          if (settings.mode === 3) {
            // Strip
            qr.add_blank(0, st - pad, size, sb + pad);
          } else {
            // Box
            qr.add_blank(sl - pad, st - pad, sr + pad, sb + pad);
          }

          ctx.drawImage(
            settings.image,
            sl * size,
            st * size,
            sw * size,
            sh * size
          );
        };

        var draw_background = function draw_background(qr, ctx, settings) {
          if (is_img_el(settings.background)) {
            ctx.drawImage(
              settings.background,
              0,
              0,
              settings.size,
              settings.size
            );
          } else if (settings.background) {
            ctx.fillStyle = settings.background;
            ctx.fillRect(
              settings.left,
              settings.top,
              settings.size,
              settings.size
            );
          }

          var mode = settings.mode;

          if (mode === 1 || mode === 2) {
            draw_background_label(qr, ctx, settings);
          } else if (is_img_el(settings.image) && (mode === 3 || mode === 4)) {
            draw_background_img(qr, ctx, settings);
          }
        };

        var draw_modules_default = function draw_modules_default(
          qr,
          ctx,
          settings,
          left,
          top,
          width,
          row,
          col
        ) {
          if (qr.is_dark(row, col)) {
            ctx.r(left, top, width, width);
          }
        };

        var draw_modules_rounded_dark = function draw_modules_rounded_dark(
          ctx,
          l,
          t,
          r,
          b,
          rad,
          nw,
          ne,
          se,
          sw
        ) {
          if (nw) {
            ctx.m(l + rad, t);
          } else {
            ctx.m(l, t);
          }

          if (ne) {
            ctx.l(r - rad, t).a(r, t, r, b, rad);
          } else {
            ctx.l(r, t);
          }

          if (se) {
            ctx.l(r, b - rad).a(r, b, l, b, rad);
          } else {
            ctx.l(r, b);
          }

          if (sw) {
            ctx.l(l + rad, b).a(l, b, l, t, rad);
          } else {
            ctx.l(l, b);
          }

          if (nw) {
            ctx.l(l, t + rad).a(l, t, r, t, rad);
          } else {
            ctx.l(l, t);
          }
        };

        var draw_modules_rounded_light = function draw_modules_rounded_light(
          ctx,
          l,
          t,
          r,
          b,
          rad,
          nw,
          ne,
          se,
          sw
        ) {
          if (nw) {
            ctx
              .m(l + rad, t)
              .l(l, t)
              .l(l, t + rad)
              .a(l, t, l + rad, t, rad);
          }

          if (ne) {
            ctx
              .m(r - rad, t)
              .l(r, t)
              .l(r, t + rad)
              .a(r, t, r - rad, t, rad);
          }

          if (se) {
            ctx
              .m(r - rad, b)
              .l(r, b)
              .l(r, b - rad)
              .a(r, b, r - rad, b, rad);
          }

          if (sw) {
            ctx
              .m(l + rad, b)
              .l(l, b)
              .l(l, b - rad)
              .a(l, b, l + rad, b, rad);
          }
        };

        var draw_modules_rounded = function draw_modules_rounded(
          qr,
          ctx,
          settings,
          left,
          top,
          width,
          row,
          col
        ) {
          var right = left + width;
          var bottom = top + width;
          var rad = settings.radius * width;
          var row_n = row - 1;
          var row_s = row + 1;
          var col_w = col - 1;
          var col_e = col + 1;
          var is_dark = qr.is_dark;
          var d_center = is_dark(row, col);
          var d_nw = is_dark(row_n, col_w);
          var d_n = is_dark(row_n, col);
          var d_ne = is_dark(row_n, col_e);
          var d_e = is_dark(row, col_e);
          var d_se = is_dark(row_s, col_e);
          var d_s = is_dark(row_s, col);
          var d_sw = is_dark(row_s, col_w);
          var d_w = is_dark(row, col_w);

          if (d_center) {
            draw_modules_rounded_dark(
              ctx,
              left,
              top,
              right,
              bottom,
              rad,
              !d_n && !d_w,
              !d_n && !d_e,
              !d_s && !d_e,
              !d_s && !d_w
            );
          } else {
            draw_modules_rounded_light(
              ctx,
              left,
              top,
              right,
              bottom,
              rad,
              d_n && d_w && d_nw,
              d_n && d_e && d_ne,
              d_s && d_e && d_se,
              d_s && d_w && d_sw
            );
          }
        };

        var draw_modules = function draw_modules(qr, ctx, settings) {
          var module_count = qr.module_count;
          var module_size = settings.size / module_count;
          var fn = draw_modules_default;

          if (settings.radius > 0 && settings.radius <= 0.5) {
            fn = draw_modules_rounded;
          }

          var draw_ctx = {
            m: function m(x, y) {
              ctx.moveTo(x, y);
              return draw_ctx;
            },
            l: function l(x, y) {
              ctx.lineTo(x, y);
              return draw_ctx;
            },
            a: function a() {
              ctx.arcTo.apply(ctx, arguments);
              return draw_ctx;
            },
            r: function r() {
              ctx.rect.apply(ctx, arguments);
              return draw_ctx;
            },
          };
          ctx.beginPath();

          for (var row = 0; row < module_count; row += 1) {
            for (var col = 0; col < module_count; col += 1) {
              var l = settings.left + col * module_size;
              var t = settings.top + row * module_size;
              var w = module_size;
              fn(qr, draw_ctx, settings, l, t, w, row, col);
            }
          }

          if (is_img_el(settings.fill)) {
            ctx.strokeStyle = "rgba(0,0,0,0.5)";
            ctx.lineWidth = 2;
            ctx.stroke();
            var prev = ctx.globalCompositeOperation;
            ctx.globalCompositeOperation = "destination-out";
            ctx.fill();
            ctx.globalCompositeOperation = prev;
            ctx.clip();
            ctx.drawImage(settings.fill, 0, 0, settings.size, settings.size);
            ctx.restore();
          } else {
            ctx.fillStyle = settings.fill;
            ctx.fill();
          }
        }; // Draws QR code to the given `canvas` and returns it.

        var draw_on_canvas = function draw_on_canvas(canvas, settings) {
          var qr = create_min_qrcode(
            settings.text,
            settings.ecLevel,
            settings.minVersion,
            settings.maxVersion,
            settings.quiet
          );

          if (!qr) {
            return null;
          }

          var $canvas = JQ(canvas).data("qrcode", qr);
          var ctx = $canvas[0].getContext("2d");
          draw_background(qr, ctx, settings);
          draw_modules(qr, ctx, settings);
          return $canvas;
        }; // Returns a `canvas` element representing the QR code for the given settings.

        var create_canvas = function create_canvas(settings) {
          var $canvas = JQ("<canvas/>")
            .attr("width", settings.size)
            .attr("height", settings.size);
          return draw_on_canvas($canvas, settings);
        }; // Returns an `image` element representing the QR code for the given settings.

        var create_img = function create_img(settings) {
          return JQ("<img/>")
            .attr("src", create_canvas(settings)[0].toDataURL("image/png"))
            .attr("class", settings.class)
            .attr("id", settings.id);
        }; // Returns a `div` element representing the QR code for the given settings.

        var create_div = function create_div(settings) {
          var qr = create_min_qrcode(
            settings.text,
            settings.ecLevel,
            settings.minVersion,
            settings.maxVersion,
            settings.quiet
          );

          if (!qr) {
            return null;
          } // some shortcuts to improve compression

          var settings_size = settings.size;
          var settings_bgColor = settings.background;
          var math_floor = Math.floor;
          var module_count = qr.module_count;
          var module_size = math_floor(settings_size / module_count);
          var offset = math_floor(
            0.5 * (settings_size - module_size * module_count)
          );
          var container_css = {
            position: "relative",
            left: 0,
            top: 0,
            padding: 0,
            margin: 0,
            width: settings_size,
            height: settings_size,
          };
          var dark_css = {
            position: "absolute",
            padding: 0,
            margin: 0,
            width: module_size,
            height: module_size,
            "background-color": settings.fill,
          };
          var $div = JQ("<div/>").data("qrcode", qr).css(container_css);

          if (settings_bgColor) {
            $div.css("background-color", settings_bgColor);
          }

          for (var row = 0; row < module_count; row += 1) {
            for (var col = 0; col < module_count; col += 1) {
              if (qr.is_dark(row, col)) {
                JQ("<div/>")
                  .css(dark_css)
                  .css({
                    left: offset + col * module_size,
                    top: offset + row * module_size,
                  })
                  .appendTo($div);
              }
            }
          }

          return $div;
        };

        var create_html = function create_html(settings) {
          if (settings.render === "canvas") {
            return create_canvas(settings);
          } else if (settings.render === "image") {
            return create_img(settings);
          }

          return create_div(settings);
        };

        var DEFAULTS = {
          // render method: `'canvas'`, `'image'` or `'div'`
          render: "canvas",
          // version range somewhere in 1 .. 40
          minVersion: 1,
          maxVersion: 40,
          // error correction level: `'L'`, `'M'`, `'Q'` or `'H'`
          ecLevel: "L",
          // offset in pixel if drawn onto existing canvas
          left: 0,
          top: 0,
          // size in pixel
          size: 200,
          // code color or image element
          fill: "#000",
          // background color or image element, `null` for transparent background
          background: "#fff",
          // content
          text: "no text",
          // corner radius relative to module width: 0.0 .. 0.5
          radius: 0,
          // quiet zone in modules
          quiet: 0,
          // modes
          // 0: normal
          // 1: label strip
          // 2: label box
          // 3: image strip
          // 4: image box
          mode: 0,
          mSize: 0.1,
          mPosX: 0.5,
          mPosY: 0.5,
          label: "no label",
          fontname: "sans",
          fontcolor: "#000",
          image: null,
          class: "",
          id: "",
        };

        JQ.fn.qrcode = module.exports = function main(options) {
          var settings = JQ.extend({}, DEFAULTS, options);
          return this.each(function (idx, el) {
            if (el.nodeName.toLowerCase() === "canvas") {
              draw_on_canvas(el, settings);
            } else {
              JQ(el).append(create_html(settings));
            }
          });
        };

        /***/
      },
      /* 1 */
      /***/ function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__; //---------------------------------------------------------------------
        //
        // QR Code Generator for JavaScript
        //
        // Copyright (c) 2009 Kazuhiko Arase
        //
        // URL: http://www.d-project.com/
        //
        // Licensed under the MIT license:
        //  http://www.opensource.org/licenses/mit-license.php
        //
        // The word 'QR Code' is registered trademark of
        // DENSO WAVE INCORPORATED
        //  http://www.denso-wave.com/qrcode/faqpatent-e.html
        //
        //---------------------------------------------------------------------

        var qrcode = (function () {
          //---------------------------------------------------------------------
          // qrcode
          //---------------------------------------------------------------------

          /**
           * qrcode
           * @param typeNumber 1 to 40
           * @param errorCorrectionLevel 'L','M','Q','H'
           */
          var qrcode = function (typeNumber, errorCorrectionLevel) {
            var PAD0 = 0xec;
            var PAD1 = 0x11;

            var _typeNumber = typeNumber;
            var _errorCorrectionLevel =
              QRErrorCorrectionLevel[errorCorrectionLevel];
            var _modules = null;
            var _moduleCount = 0;
            var _dataCache = null;
            var _dataList = [];

            var _this = {};

            var makeImpl = function (test, maskPattern) {
              _moduleCount = _typeNumber * 4 + 17;
              _modules = (function (moduleCount) {
                var modules = new Array(moduleCount);
                for (var row = 0; row < moduleCount; row += 1) {
                  modules[row] = new Array(moduleCount);
                  for (var col = 0; col < moduleCount; col += 1) {
                    modules[row][col] = null;
                  }
                }
                return modules;
              })(_moduleCount);

              setupPositionProbePattern(0, 0);
              setupPositionProbePattern(_moduleCount - 7, 0);
              setupPositionProbePattern(0, _moduleCount - 7);
              setupPositionAdjustPattern();
              setupTimingPattern();
              setupTypeInfo(test, maskPattern);

              if (_typeNumber >= 7) {
                setupTypeNumber(test);
              }

              if (_dataCache == null) {
                _dataCache = createData(
                  _typeNumber,
                  _errorCorrectionLevel,
                  _dataList
                );
              }

              mapData(_dataCache, maskPattern);
            };

            var setupPositionProbePattern = function (row, col) {
              for (var r = -1; r <= 7; r += 1) {
                if (row + r <= -1 || _moduleCount <= row + r) continue;

                for (var c = -1; c <= 7; c += 1) {
                  if (col + c <= -1 || _moduleCount <= col + c) continue;

                  if (
                    (0 <= r && r <= 6 && (c == 0 || c == 6)) ||
                    (0 <= c && c <= 6 && (r == 0 || r == 6)) ||
                    (2 <= r && r <= 4 && 2 <= c && c <= 4)
                  ) {
                    _modules[row + r][col + c] = true;
                  } else {
                    _modules[row + r][col + c] = false;
                  }
                }
              }
            };

            var getBestMaskPattern = function () {
              var minLostPoint = 0;
              var pattern = 0;

              for (var i = 0; i < 8; i += 1) {
                makeImpl(true, i);

                var lostPoint = QRUtil.getLostPoint(_this);

                if (i == 0 || minLostPoint > lostPoint) {
                  minLostPoint = lostPoint;
                  pattern = i;
                }
              }

              return pattern;
            };

            var setupTimingPattern = function () {
              for (var r = 8; r < _moduleCount - 8; r += 1) {
                if (_modules[r][6] != null) {
                  continue;
                }
                _modules[r][6] = r % 2 == 0;
              }

              for (var c = 8; c < _moduleCount - 8; c += 1) {
                if (_modules[6][c] != null) {
                  continue;
                }
                _modules[6][c] = c % 2 == 0;
              }
            };

            var setupPositionAdjustPattern = function () {
              var pos = QRUtil.getPatternPosition(_typeNumber);

              for (var i = 0; i < pos.length; i += 1) {
                for (var j = 0; j < pos.length; j += 1) {
                  var row = pos[i];
                  var col = pos[j];

                  if (_modules[row][col] != null) {
                    continue;
                  }

                  for (var r = -2; r <= 2; r += 1) {
                    for (var c = -2; c <= 2; c += 1) {
                      if (
                        r == -2 ||
                        r == 2 ||
                        c == -2 ||
                        c == 2 ||
                        (r == 0 && c == 0)
                      ) {
                        _modules[row + r][col + c] = true;
                      } else {
                        _modules[row + r][col + c] = false;
                      }
                    }
                  }
                }
              }
            };

            var setupTypeNumber = function (test) {
              var bits = QRUtil.getBCHTypeNumber(_typeNumber);

              for (var i = 0; i < 18; i += 1) {
                var mod = !test && ((bits >> i) & 1) == 1;
                _modules[Math.floor(i / 3)][(i % 3) + _moduleCount - 8 - 3] =
                  mod;
              }

              for (var i = 0; i < 18; i += 1) {
                var mod = !test && ((bits >> i) & 1) == 1;
                _modules[(i % 3) + _moduleCount - 8 - 3][Math.floor(i / 3)] =
                  mod;
              }
            };

            var setupTypeInfo = function (test, maskPattern) {
              var data = (_errorCorrectionLevel << 3) | maskPattern;
              var bits = QRUtil.getBCHTypeInfo(data);

              // vertical
              for (var i = 0; i < 15; i += 1) {
                var mod = !test && ((bits >> i) & 1) == 1;

                if (i < 6) {
                  _modules[i][8] = mod;
                } else if (i < 8) {
                  _modules[i + 1][8] = mod;
                } else {
                  _modules[_moduleCount - 15 + i][8] = mod;
                }
              }

              // horizontal
              for (var i = 0; i < 15; i += 1) {
                var mod = !test && ((bits >> i) & 1) == 1;

                if (i < 8) {
                  _modules[8][_moduleCount - i - 1] = mod;
                } else if (i < 9) {
                  _modules[8][15 - i - 1 + 1] = mod;
                } else {
                  _modules[8][15 - i - 1] = mod;
                }
              }

              // fixed module
              _modules[_moduleCount - 8][8] = !test;
            };

            var mapData = function (data, maskPattern) {
              var inc = -1;
              var row = _moduleCount - 1;
              var bitIndex = 7;
              var byteIndex = 0;
              var maskFunc = QRUtil.getMaskFunction(maskPattern);

              for (var col = _moduleCount - 1; col > 0; col -= 2) {
                if (col == 6) col -= 1;

                while (true) {
                  for (var c = 0; c < 2; c += 1) {
                    if (_modules[row][col - c] == null) {
                      var dark = false;

                      if (byteIndex < data.length) {
                        dark = ((data[byteIndex] >>> bitIndex) & 1) == 1;
                      }

                      var mask = maskFunc(row, col - c);

                      if (mask) {
                        dark = !dark;
                      }

                      _modules[row][col - c] = dark;
                      bitIndex -= 1;

                      if (bitIndex == -1) {
                        byteIndex += 1;
                        bitIndex = 7;
                      }
                    }
                  }

                  row += inc;

                  if (row < 0 || _moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                  }
                }
              }
            };

            var createBytes = function (buffer, rsBlocks) {
              var offset = 0;

              var maxDcCount = 0;
              var maxEcCount = 0;

              var dcdata = new Array(rsBlocks.length);
              var ecdata = new Array(rsBlocks.length);

              for (var r = 0; r < rsBlocks.length; r += 1) {
                var dcCount = rsBlocks[r].dataCount;
                var ecCount = rsBlocks[r].totalCount - dcCount;

                maxDcCount = Math.max(maxDcCount, dcCount);
                maxEcCount = Math.max(maxEcCount, ecCount);

                dcdata[r] = new Array(dcCount);

                for (var i = 0; i < dcdata[r].length; i += 1) {
                  dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
                }
                offset += dcCount;

                var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
                var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

                var modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i += 1) {
                  var modIndex = i + modPoly.getLength() - ecdata[r].length;
                  ecdata[r][i] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
                }
              }

              var totalCodeCount = 0;
              for (var i = 0; i < rsBlocks.length; i += 1) {
                totalCodeCount += rsBlocks[i].totalCount;
              }

              var data = new Array(totalCodeCount);
              var index = 0;

              for (var i = 0; i < maxDcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                  if (i < dcdata[r].length) {
                    data[index] = dcdata[r][i];
                    index += 1;
                  }
                }
              }

              for (var i = 0; i < maxEcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                  if (i < ecdata[r].length) {
                    data[index] = ecdata[r][i];
                    index += 1;
                  }
                }
              }

              return data;
            };

            var createData = function (
              typeNumber,
              errorCorrectionLevel,
              dataList
            ) {
              var rsBlocks = QRRSBlock.getRSBlocks(
                typeNumber,
                errorCorrectionLevel
              );

              var buffer = qrBitBuffer();

              for (var i = 0; i < dataList.length; i += 1) {
                var data = dataList[i];
                buffer.put(data.getMode(), 4);
                buffer.put(
                  data.getLength(),
                  QRUtil.getLengthInBits(data.getMode(), typeNumber)
                );
                data.write(buffer);
              }

              // calc num max data.
              var totalDataCount = 0;
              for (var i = 0; i < rsBlocks.length; i += 1) {
                totalDataCount += rsBlocks[i].dataCount;
              }

              if (buffer.getLengthInBits() > totalDataCount * 8) {
                throw (
                  "code length overflow. (" +
                  buffer.getLengthInBits() +
                  ">" +
                  totalDataCount * 8 +
                  ")"
                );
              }

              // end code
              if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
                buffer.put(0, 4);
              }

              // padding
              while (buffer.getLengthInBits() % 8 != 0) {
                buffer.putBit(false);
              }

              // padding
              while (true) {
                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                  break;
                }
                buffer.put(PAD0, 8);

                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                  break;
                }
                buffer.put(PAD1, 8);
              }

              return createBytes(buffer, rsBlocks);
            };

            _this.addData = function (data, mode) {
              mode = mode || "Byte";

              var newData = null;

              switch (mode) {
                case "Numeric":
                  newData = qrNumber(data);
                  break;
                case "Alphanumeric":
                  newData = qrAlphaNum(data);
                  break;
                case "Byte":
                  newData = qr8BitByte(data);
                  break;
                case "Kanji":
                  newData = qrKanji(data);
                  break;
                default:
                  throw "mode:" + mode;
              }

              _dataList.push(newData);
              _dataCache = null;
            };

            _this.isDark = function (row, col) {
              if (
                row < 0 ||
                _moduleCount <= row ||
                col < 0 ||
                _moduleCount <= col
              ) {
                throw row + "," + col;
              }
              return _modules[row][col];
            };

            _this.getModuleCount = function () {
              return _moduleCount;
            };

            _this.make = function () {
              if (_typeNumber < 1) {
                var typeNumber = 1;

                for (; typeNumber < 40; typeNumber++) {
                  var rsBlocks = QRRSBlock.getRSBlocks(
                    typeNumber,
                    _errorCorrectionLevel
                  );
                  var buffer = qrBitBuffer();

                  for (var i = 0; i < _dataList.length; i++) {
                    var data = _dataList[i];
                    buffer.put(data.getMode(), 4);
                    buffer.put(
                      data.getLength(),
                      QRUtil.getLengthInBits(data.getMode(), typeNumber)
                    );
                    data.write(buffer);
                  }

                  var totalDataCount = 0;
                  for (var i = 0; i < rsBlocks.length; i++) {
                    totalDataCount += rsBlocks[i].dataCount;
                  }

                  if (buffer.getLengthInBits() <= totalDataCount * 8) {
                    break;
                  }
                }

                _typeNumber = typeNumber;
              }

              makeImpl(false, getBestMaskPattern());
            };

            _this.createTableTag = function (cellSize, margin) {
              cellSize = cellSize || 2;
              margin = typeof margin == "undefined" ? cellSize * 4 : margin;

              var qrHtml = "";

              qrHtml += '<table style="';
              qrHtml += " border-width: 0px; border-style: none;";
              qrHtml += " border-collapse: collapse;";
              qrHtml += " padding: 0px; margin: " + margin + "px;";
              qrHtml += '">';
              qrHtml += "<tbody>";

              for (var r = 0; r < _this.getModuleCount(); r += 1) {
                qrHtml += "<tr>";

                for (var c = 0; c < _this.getModuleCount(); c += 1) {
                  qrHtml += '<td style="';
                  qrHtml += " border-width: 0px; border-style: none;";
                  qrHtml += " border-collapse: collapse;";
                  qrHtml += " padding: 0px; margin: 0px;";
                  qrHtml += " width: " + cellSize + "px;";
                  qrHtml += " height: " + cellSize + "px;";
                  qrHtml += " background-color: ";
                  qrHtml += _this.isDark(r, c) ? "#000000" : "#ffffff";
                  qrHtml += ";";
                  qrHtml += '"/>';
                }

                qrHtml += "</tr>";
              }

              qrHtml += "</tbody>";
              qrHtml += "</table>";

              return qrHtml;
            };

            _this.createSvgTag = function (cellSize, margin, alt, title) {
              var opts = {};
              if (typeof arguments[0] == "object") {
                // Called by options.
                opts = arguments[0];
                // overwrite cellSize and margin.
                cellSize = opts.cellSize;
                margin = opts.margin;
                alt = opts.alt;
                title = opts.title;
              }

              cellSize = cellSize || 2;
              margin = typeof margin == "undefined" ? cellSize * 4 : margin;

              // Compose alt property surrogate
              alt = typeof alt === "string" ? { text: alt } : alt || {};
              alt.text = alt.text || null;
              alt.id = alt.text ? alt.id || "qrcode-description" : null;

              // Compose title property surrogate
              title = typeof title === "string" ? { text: title } : title || {};
              title.text = title.text || null;
              title.id = title.text ? title.id || "qrcode-title" : null;

              var size = _this.getModuleCount() * cellSize + margin * 2;
              var c,
                mc,
                r,
                mr,
                qrSvg = "",
                rect;

              rect =
                "l" +
                cellSize +
                ",0 0," +
                cellSize +
                " -" +
                cellSize +
                ",0 0,-" +
                cellSize +
                "z ";

              qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
              qrSvg += !opts.scalable
                ? ' width="' + size + 'px" height="' + size + 'px"'
                : "";
              qrSvg += ' viewBox="0 0 ' + size + " " + size + '" ';
              qrSvg += ' preserveAspectRatio="xMinYMin meet"';
              qrSvg +=
                title.text || alt.text
                  ? ' role="img" aria-labelledby="' +
                    escapeXml([title.id, alt.id].join(" ").trim()) +
                    '"'
                  : "";
              qrSvg += ">";
              qrSvg += title.text
                ? '<title id="' +
                  escapeXml(title.id) +
                  '">' +
                  escapeXml(title.text) +
                  "</title>"
                : "";
              qrSvg += alt.text
                ? '<description id="' +
                  escapeXml(alt.id) +
                  '">' +
                  escapeXml(alt.text) +
                  "</description>"
                : "";
              qrSvg +=
                '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
              qrSvg += '<path d="';

              for (r = 0; r < _this.getModuleCount(); r += 1) {
                mr = r * cellSize + margin;
                for (c = 0; c < _this.getModuleCount(); c += 1) {
                  if (_this.isDark(r, c)) {
                    mc = c * cellSize + margin;
                    qrSvg += "M" + mc + "," + mr + rect;
                  }
                }
              }

              qrSvg += '" stroke="transparent" fill="black"/>';
              qrSvg += "</svg>";

              return qrSvg;
            };

            _this.createDataURL = function (cellSize, margin) {
              cellSize = cellSize || 2;
              margin = typeof margin == "undefined" ? cellSize * 4 : margin;

              var size = _this.getModuleCount() * cellSize + margin * 2;
              var min = margin;
              var max = size - margin;

              return createDataURL(size, size, function (x, y) {
                if (min <= x && x < max && min <= y && y < max) {
                  var c = Math.floor((x - min) / cellSize);
                  var r = Math.floor((y - min) / cellSize);
                  return _this.isDark(r, c) ? 0 : 1;
                } else {
                  return 1;
                }
              });
            };

            _this.createImgTag = function (cellSize, margin, alt) {
              cellSize = cellSize || 2;
              margin = typeof margin == "undefined" ? cellSize * 4 : margin;

              var size = _this.getModuleCount() * cellSize + margin * 2;

              var img = "";
              img += "<img";
              img += '\u0020src="';
              img += _this.createDataURL(cellSize, margin);
              img += '"';
              img += '\u0020width="';
              img += size;
              img += '"';
              img += '\u0020height="';
              img += size;
              img += '"';
              if (alt) {
                img += '\u0020alt="';
                img += escapeXml(alt);
                img += '"';
              }
              img += "/>";

              return img;
            };

            var escapeXml = function (s) {
              var escaped = "";
              for (var i = 0; i < s.length; i += 1) {
                var c = s.charAt(i);
                switch (c) {
                  case "<":
                    escaped += "&lt;";
                    break;
                  case ">":
                    escaped += "&gt;";
                    break;
                  case "&":
                    escaped += "&amp;";
                    break;
                  case '"':
                    escaped += "&quot;";
                    break;
                  default:
                    escaped += c;
                    break;
                }
              }
              return escaped;
            };

            var _createHalfASCII = function (margin) {
              var cellSize = 1;
              margin = typeof margin == "undefined" ? cellSize * 2 : margin;

              var size = _this.getModuleCount() * cellSize + margin * 2;
              var min = margin;
              var max = size - margin;

              var y, x, r1, r2, p;

              var blocks = {
                "██": "█",
                "█ ": "▀",
                " █": "▄",
                "  ": " ",
              };

              var blocksLastLineNoMargin = {
                "██": "▀",
                "█ ": "▀",
                " █": " ",
                "  ": " ",
              };

              var ascii = "";
              for (y = 0; y < size; y += 2) {
                r1 = Math.floor((y - min) / cellSize);
                r2 = Math.floor((y + 1 - min) / cellSize);
                for (x = 0; x < size; x += 1) {
                  p = "█";

                  if (
                    min <= x &&
                    x < max &&
                    min <= y &&
                    y < max &&
                    _this.isDark(r1, Math.floor((x - min) / cellSize))
                  ) {
                    p = " ";
                  }

                  if (
                    min <= x &&
                    x < max &&
                    min <= y + 1 &&
                    y + 1 < max &&
                    _this.isDark(r2, Math.floor((x - min) / cellSize))
                  ) {
                    p += " ";
                  } else {
                    p += "█";
                  }

                  // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
                  ascii +=
                    margin < 1 && y + 1 >= max
                      ? blocksLastLineNoMargin[p]
                      : blocks[p];
                }

                ascii += "\n";
              }

              if (size % 2 && margin > 0) {
                return (
                  ascii.substring(0, ascii.length - size - 1) +
                  Array(size + 1).join("▀")
                );
              }

              return ascii.substring(0, ascii.length - 1);
            };

            _this.createASCII = function (cellSize, margin) {
              cellSize = cellSize || 1;

              if (cellSize < 2) {
                return _createHalfASCII(margin);
              }

              cellSize -= 1;
              margin = typeof margin == "undefined" ? cellSize * 2 : margin;

              var size = _this.getModuleCount() * cellSize + margin * 2;
              var min = margin;
              var max = size - margin;

              var y, x, r, p;

              var white = Array(cellSize + 1).join("██");
              var black = Array(cellSize + 1).join("  ");

              var ascii = "";
              var line = "";
              for (y = 0; y < size; y += 1) {
                r = Math.floor((y - min) / cellSize);
                line = "";
                for (x = 0; x < size; x += 1) {
                  p = 1;

                  if (
                    min <= x &&
                    x < max &&
                    min <= y &&
                    y < max &&
                    _this.isDark(r, Math.floor((x - min) / cellSize))
                  ) {
                    p = 0;
                  }

                  // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
                  line += p ? white : black;
                }

                for (r = 0; r < cellSize; r += 1) {
                  ascii += line + "\n";
                }
              }

              return ascii.substring(0, ascii.length - 1);
            };

            _this.renderTo2dContext = function (context, cellSize) {
              cellSize = cellSize || 2;
              var length = _this.getModuleCount();
              for (var row = 0; row < length; row++) {
                for (var col = 0; col < length; col++) {
                  context.fillStyle = _this.isDark(row, col)
                    ? "black"
                    : "white";
                  context.fillRect(
                    row * cellSize,
                    col * cellSize,
                    cellSize,
                    cellSize
                  );
                }
              }
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // qrcode.stringToBytes
          //---------------------------------------------------------------------

          qrcode.stringToBytesFuncs = {
            default: function (s) {
              var bytes = [];
              for (var i = 0; i < s.length; i += 1) {
                var c = s.charCodeAt(i);
                bytes.push(c & 0xff);
              }
              return bytes;
            },
          };

          qrcode.stringToBytes = qrcode.stringToBytesFuncs["default"];

          //---------------------------------------------------------------------
          // qrcode.createStringToBytes
          //---------------------------------------------------------------------

          /**
           * @param unicodeData base64 string of byte array.
           * [16bit Unicode],[16bit Bytes], ...
           * @param numChars
           */
          qrcode.createStringToBytes = function (unicodeData, numChars) {
            // create conversion map.

            var unicodeMap = (function () {
              var bin = base64DecodeInputStream(unicodeData);
              var read = function () {
                var b = bin.read();
                if (b == -1) throw "eof";
                return b;
              };

              var count = 0;
              var unicodeMap = {};
              while (true) {
                var b0 = bin.read();
                if (b0 == -1) break;
                var b1 = read();
                var b2 = read();
                var b3 = read();
                var k = String.fromCharCode((b0 << 8) | b1);
                var v = (b2 << 8) | b3;
                unicodeMap[k] = v;
                count += 1;
              }
              if (count != numChars) {
                throw count + " != " + numChars;
              }

              return unicodeMap;
            })();

            var unknownChar = "?".charCodeAt(0);

            return function (s) {
              var bytes = [];
              for (var i = 0; i < s.length; i += 1) {
                var c = s.charCodeAt(i);
                if (c < 128) {
                  bytes.push(c);
                } else {
                  var b = unicodeMap[s.charAt(i)];
                  if (typeof b == "number") {
                    if ((b & 0xff) == b) {
                      // 1byte
                      bytes.push(b);
                    } else {
                      // 2bytes
                      bytes.push(b >>> 8);
                      bytes.push(b & 0xff);
                    }
                  } else {
                    bytes.push(unknownChar);
                  }
                }
              }
              return bytes;
            };
          };

          //---------------------------------------------------------------------
          // QRMode
          //---------------------------------------------------------------------

          var QRMode = {
            MODE_NUMBER: 1 << 0,
            MODE_ALPHA_NUM: 1 << 1,
            MODE_8BIT_BYTE: 1 << 2,
            MODE_KANJI: 1 << 3,
          };

          //---------------------------------------------------------------------
          // QRErrorCorrectionLevel
          //---------------------------------------------------------------------

          var QRErrorCorrectionLevel = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2,
          };

          //---------------------------------------------------------------------
          // QRMaskPattern
          //---------------------------------------------------------------------

          var QRMaskPattern = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7,
          };

          //---------------------------------------------------------------------
          // QRUtil
          //---------------------------------------------------------------------

          var QRUtil = (function () {
            var PATTERN_POSITION_TABLE = [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ];
            var G15 =
              (1 << 10) |
              (1 << 8) |
              (1 << 5) |
              (1 << 4) |
              (1 << 2) |
              (1 << 1) |
              (1 << 0);
            var G18 =
              (1 << 12) |
              (1 << 11) |
              (1 << 10) |
              (1 << 9) |
              (1 << 8) |
              (1 << 5) |
              (1 << 2) |
              (1 << 0);
            var G15_MASK =
              (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

            var _this = {};

            var getBCHDigit = function (data) {
              var digit = 0;
              while (data != 0) {
                digit += 1;
                data >>>= 1;
              }
              return digit;
            };

            _this.getBCHTypeInfo = function (data) {
              var d = data << 10;
              while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
                d ^= G15 << (getBCHDigit(d) - getBCHDigit(G15));
              }
              return ((data << 10) | d) ^ G15_MASK;
            };

            _this.getBCHTypeNumber = function (data) {
              var d = data << 12;
              while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
                d ^= G18 << (getBCHDigit(d) - getBCHDigit(G18));
              }
              return (data << 12) | d;
            };

            _this.getPatternPosition = function (typeNumber) {
              return PATTERN_POSITION_TABLE[typeNumber - 1];
            };

            _this.getMaskFunction = function (maskPattern) {
              switch (maskPattern) {
                case QRMaskPattern.PATTERN000:
                  return function (i, j) {
                    return (i + j) % 2 == 0;
                  };
                case QRMaskPattern.PATTERN001:
                  return function (i, j) {
                    return i % 2 == 0;
                  };
                case QRMaskPattern.PATTERN010:
                  return function (i, j) {
                    return j % 3 == 0;
                  };
                case QRMaskPattern.PATTERN011:
                  return function (i, j) {
                    return (i + j) % 3 == 0;
                  };
                case QRMaskPattern.PATTERN100:
                  return function (i, j) {
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                  };
                case QRMaskPattern.PATTERN101:
                  return function (i, j) {
                    return ((i * j) % 2) + ((i * j) % 3) == 0;
                  };
                case QRMaskPattern.PATTERN110:
                  return function (i, j) {
                    return (((i * j) % 2) + ((i * j) % 3)) % 2 == 0;
                  };
                case QRMaskPattern.PATTERN111:
                  return function (i, j) {
                    return (((i * j) % 3) + ((i + j) % 2)) % 2 == 0;
                  };

                default:
                  throw "bad maskPattern:" + maskPattern;
              }
            };

            _this.getErrorCorrectPolynomial = function (errorCorrectLength) {
              var a = qrPolynomial([1], 0);
              for (var i = 0; i < errorCorrectLength; i += 1) {
                a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));
              }
              return a;
            };

            _this.getLengthInBits = function (mode, type) {
              if (1 <= type && type < 10) {
                // 1 - 9

                switch (mode) {
                  case QRMode.MODE_NUMBER:
                    return 10;
                  case QRMode.MODE_ALPHA_NUM:
                    return 9;
                  case QRMode.MODE_8BIT_BYTE:
                    return 8;
                  case QRMode.MODE_KANJI:
                    return 8;
                  default:
                    throw "mode:" + mode;
                }
              } else if (type < 27) {
                // 10 - 26

                switch (mode) {
                  case QRMode.MODE_NUMBER:
                    return 12;
                  case QRMode.MODE_ALPHA_NUM:
                    return 11;
                  case QRMode.MODE_8BIT_BYTE:
                    return 16;
                  case QRMode.MODE_KANJI:
                    return 10;
                  default:
                    throw "mode:" + mode;
                }
              } else if (type < 41) {
                // 27 - 40

                switch (mode) {
                  case QRMode.MODE_NUMBER:
                    return 14;
                  case QRMode.MODE_ALPHA_NUM:
                    return 13;
                  case QRMode.MODE_8BIT_BYTE:
                    return 16;
                  case QRMode.MODE_KANJI:
                    return 12;
                  default:
                    throw "mode:" + mode;
                }
              } else {
                throw "type:" + type;
              }
            };

            _this.getLostPoint = function (qrcode) {
              var moduleCount = qrcode.getModuleCount();

              var lostPoint = 0;

              // LEVEL1

              for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount; col += 1) {
                  var sameCount = 0;
                  var dark = qrcode.isDark(row, col);

                  for (var r = -1; r <= 1; r += 1) {
                    if (row + r < 0 || moduleCount <= row + r) {
                      continue;
                    }

                    for (var c = -1; c <= 1; c += 1) {
                      if (col + c < 0 || moduleCount <= col + c) {
                        continue;
                      }

                      if (r == 0 && c == 0) {
                        continue;
                      }

                      if (dark == qrcode.isDark(row + r, col + c)) {
                        sameCount += 1;
                      }
                    }
                  }

                  if (sameCount > 5) {
                    lostPoint += 3 + sameCount - 5;
                  }
                }
              }

              // LEVEL2

              for (var row = 0; row < moduleCount - 1; row += 1) {
                for (var col = 0; col < moduleCount - 1; col += 1) {
                  var count = 0;
                  if (qrcode.isDark(row, col)) count += 1;
                  if (qrcode.isDark(row + 1, col)) count += 1;
                  if (qrcode.isDark(row, col + 1)) count += 1;
                  if (qrcode.isDark(row + 1, col + 1)) count += 1;
                  if (count == 0 || count == 4) {
                    lostPoint += 3;
                  }
                }
              }

              // LEVEL3

              for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount - 6; col += 1) {
                  if (
                    qrcode.isDark(row, col) &&
                    !qrcode.isDark(row, col + 1) &&
                    qrcode.isDark(row, col + 2) &&
                    qrcode.isDark(row, col + 3) &&
                    qrcode.isDark(row, col + 4) &&
                    !qrcode.isDark(row, col + 5) &&
                    qrcode.isDark(row, col + 6)
                  ) {
                    lostPoint += 40;
                  }
                }
              }

              for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount - 6; row += 1) {
                  if (
                    qrcode.isDark(row, col) &&
                    !qrcode.isDark(row + 1, col) &&
                    qrcode.isDark(row + 2, col) &&
                    qrcode.isDark(row + 3, col) &&
                    qrcode.isDark(row + 4, col) &&
                    !qrcode.isDark(row + 5, col) &&
                    qrcode.isDark(row + 6, col)
                  ) {
                    lostPoint += 40;
                  }
                }
              }

              // LEVEL4

              var darkCount = 0;

              for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount; row += 1) {
                  if (qrcode.isDark(row, col)) {
                    darkCount += 1;
                  }
                }
              }

              var ratio =
                Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) /
                5;
              lostPoint += ratio * 10;

              return lostPoint;
            };

            return _this;
          })();

          //---------------------------------------------------------------------
          // QRMath
          //---------------------------------------------------------------------

          var QRMath = (function () {
            var EXP_TABLE = new Array(256);
            var LOG_TABLE = new Array(256);

            // initialize tables
            for (var i = 0; i < 8; i += 1) {
              EXP_TABLE[i] = 1 << i;
            }
            for (var i = 8; i < 256; i += 1) {
              EXP_TABLE[i] =
                EXP_TABLE[i - 4] ^
                EXP_TABLE[i - 5] ^
                EXP_TABLE[i - 6] ^
                EXP_TABLE[i - 8];
            }
            for (var i = 0; i < 255; i += 1) {
              LOG_TABLE[EXP_TABLE[i]] = i;
            }

            var _this = {};

            _this.glog = function (n) {
              if (n < 1) {
                throw "glog(" + n + ")";
              }

              return LOG_TABLE[n];
            };

            _this.gexp = function (n) {
              while (n < 0) {
                n += 255;
              }

              while (n >= 256) {
                n -= 255;
              }

              return EXP_TABLE[n];
            };

            return _this;
          })();

          //---------------------------------------------------------------------
          // qrPolynomial
          //---------------------------------------------------------------------

          function qrPolynomial(num, shift) {
            if (typeof num.length == "undefined") {
              throw num.length + "/" + shift;
            }

            var _num = (function () {
              var offset = 0;
              while (offset < num.length && num[offset] == 0) {
                offset += 1;
              }
              var _num = new Array(num.length - offset + shift);
              for (var i = 0; i < num.length - offset; i += 1) {
                _num[i] = num[i + offset];
              }
              return _num;
            })();

            var _this = {};

            _this.getAt = function (index) {
              return _num[index];
            };

            _this.getLength = function () {
              return _num.length;
            };

            _this.multiply = function (e) {
              var num = new Array(_this.getLength() + e.getLength() - 1);

              for (var i = 0; i < _this.getLength(); i += 1) {
                for (var j = 0; j < e.getLength(); j += 1) {
                  num[i + j] ^= QRMath.gexp(
                    QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j))
                  );
                }
              }

              return qrPolynomial(num, 0);
            };

            _this.mod = function (e) {
              if (_this.getLength() - e.getLength() < 0) {
                return _this;
              }

              var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));

              var num = new Array(_this.getLength());
              for (var i = 0; i < _this.getLength(); i += 1) {
                num[i] = _this.getAt(i);
              }

              for (var i = 0; i < e.getLength(); i += 1) {
                num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);
              }

              // recursive call
              return qrPolynomial(num, 0).mod(e);
            };

            return _this;
          }

          //---------------------------------------------------------------------
          // QRRSBlock
          //---------------------------------------------------------------------

          var QRRSBlock = (function () {
            var RS_BLOCK_TABLE = [
              // L
              // M
              // Q
              // H

              // 1
              [1, 26, 19],
              [1, 26, 16],
              [1, 26, 13],
              [1, 26, 9],

              // 2
              [1, 44, 34],
              [1, 44, 28],
              [1, 44, 22],
              [1, 44, 16],

              // 3
              [1, 70, 55],
              [1, 70, 44],
              [2, 35, 17],
              [2, 35, 13],

              // 4
              [1, 100, 80],
              [2, 50, 32],
              [2, 50, 24],
              [4, 25, 9],

              // 5
              [1, 134, 108],
              [2, 67, 43],
              [2, 33, 15, 2, 34, 16],
              [2, 33, 11, 2, 34, 12],

              // 6
              [2, 86, 68],
              [4, 43, 27],
              [4, 43, 19],
              [4, 43, 15],

              // 7
              [2, 98, 78],
              [4, 49, 31],
              [2, 32, 14, 4, 33, 15],
              [4, 39, 13, 1, 40, 14],

              // 8
              [2, 121, 97],
              [2, 60, 38, 2, 61, 39],
              [4, 40, 18, 2, 41, 19],
              [4, 40, 14, 2, 41, 15],

              // 9
              [2, 146, 116],
              [3, 58, 36, 2, 59, 37],
              [4, 36, 16, 4, 37, 17],
              [4, 36, 12, 4, 37, 13],

              // 10
              [2, 86, 68, 2, 87, 69],
              [4, 69, 43, 1, 70, 44],
              [6, 43, 19, 2, 44, 20],
              [6, 43, 15, 2, 44, 16],

              // 11
              [4, 101, 81],
              [1, 80, 50, 4, 81, 51],
              [4, 50, 22, 4, 51, 23],
              [3, 36, 12, 8, 37, 13],

              // 12
              [2, 116, 92, 2, 117, 93],
              [6, 58, 36, 2, 59, 37],
              [4, 46, 20, 6, 47, 21],
              [7, 42, 14, 4, 43, 15],

              // 13
              [4, 133, 107],
              [8, 59, 37, 1, 60, 38],
              [8, 44, 20, 4, 45, 21],
              [12, 33, 11, 4, 34, 12],

              // 14
              [3, 145, 115, 1, 146, 116],
              [4, 64, 40, 5, 65, 41],
              [11, 36, 16, 5, 37, 17],
              [11, 36, 12, 5, 37, 13],

              // 15
              [5, 109, 87, 1, 110, 88],
              [5, 65, 41, 5, 66, 42],
              [5, 54, 24, 7, 55, 25],
              [11, 36, 12, 7, 37, 13],

              // 16
              [5, 122, 98, 1, 123, 99],
              [7, 73, 45, 3, 74, 46],
              [15, 43, 19, 2, 44, 20],
              [3, 45, 15, 13, 46, 16],

              // 17
              [1, 135, 107, 5, 136, 108],
              [10, 74, 46, 1, 75, 47],
              [1, 50, 22, 15, 51, 23],
              [2, 42, 14, 17, 43, 15],

              // 18
              [5, 150, 120, 1, 151, 121],
              [9, 69, 43, 4, 70, 44],
              [17, 50, 22, 1, 51, 23],
              [2, 42, 14, 19, 43, 15],

              // 19
              [3, 141, 113, 4, 142, 114],
              [3, 70, 44, 11, 71, 45],
              [17, 47, 21, 4, 48, 22],
              [9, 39, 13, 16, 40, 14],

              // 20
              [3, 135, 107, 5, 136, 108],
              [3, 67, 41, 13, 68, 42],
              [15, 54, 24, 5, 55, 25],
              [15, 43, 15, 10, 44, 16],

              // 21
              [4, 144, 116, 4, 145, 117],
              [17, 68, 42],
              [17, 50, 22, 6, 51, 23],
              [19, 46, 16, 6, 47, 17],

              // 22
              [2, 139, 111, 7, 140, 112],
              [17, 74, 46],
              [7, 54, 24, 16, 55, 25],
              [34, 37, 13],

              // 23
              [4, 151, 121, 5, 152, 122],
              [4, 75, 47, 14, 76, 48],
              [11, 54, 24, 14, 55, 25],
              [16, 45, 15, 14, 46, 16],

              // 24
              [6, 147, 117, 4, 148, 118],
              [6, 73, 45, 14, 74, 46],
              [11, 54, 24, 16, 55, 25],
              [30, 46, 16, 2, 47, 17],

              // 25
              [8, 132, 106, 4, 133, 107],
              [8, 75, 47, 13, 76, 48],
              [7, 54, 24, 22, 55, 25],
              [22, 45, 15, 13, 46, 16],

              // 26
              [10, 142, 114, 2, 143, 115],
              [19, 74, 46, 4, 75, 47],
              [28, 50, 22, 6, 51, 23],
              [33, 46, 16, 4, 47, 17],

              // 27
              [8, 152, 122, 4, 153, 123],
              [22, 73, 45, 3, 74, 46],
              [8, 53, 23, 26, 54, 24],
              [12, 45, 15, 28, 46, 16],

              // 28
              [3, 147, 117, 10, 148, 118],
              [3, 73, 45, 23, 74, 46],
              [4, 54, 24, 31, 55, 25],
              [11, 45, 15, 31, 46, 16],

              // 29
              [7, 146, 116, 7, 147, 117],
              [21, 73, 45, 7, 74, 46],
              [1, 53, 23, 37, 54, 24],
              [19, 45, 15, 26, 46, 16],

              // 30
              [5, 145, 115, 10, 146, 116],
              [19, 75, 47, 10, 76, 48],
              [15, 54, 24, 25, 55, 25],
              [23, 45, 15, 25, 46, 16],

              // 31
              [13, 145, 115, 3, 146, 116],
              [2, 74, 46, 29, 75, 47],
              [42, 54, 24, 1, 55, 25],
              [23, 45, 15, 28, 46, 16],

              // 32
              [17, 145, 115],
              [10, 74, 46, 23, 75, 47],
              [10, 54, 24, 35, 55, 25],
              [19, 45, 15, 35, 46, 16],

              // 33
              [17, 145, 115, 1, 146, 116],
              [14, 74, 46, 21, 75, 47],
              [29, 54, 24, 19, 55, 25],
              [11, 45, 15, 46, 46, 16],

              // 34
              [13, 145, 115, 6, 146, 116],
              [14, 74, 46, 23, 75, 47],
              [44, 54, 24, 7, 55, 25],
              [59, 46, 16, 1, 47, 17],

              // 35
              [12, 151, 121, 7, 152, 122],
              [12, 75, 47, 26, 76, 48],
              [39, 54, 24, 14, 55, 25],
              [22, 45, 15, 41, 46, 16],

              // 36
              [6, 151, 121, 14, 152, 122],
              [6, 75, 47, 34, 76, 48],
              [46, 54, 24, 10, 55, 25],
              [2, 45, 15, 64, 46, 16],

              // 37
              [17, 152, 122, 4, 153, 123],
              [29, 74, 46, 14, 75, 47],
              [49, 54, 24, 10, 55, 25],
              [24, 45, 15, 46, 46, 16],

              // 38
              [4, 152, 122, 18, 153, 123],
              [13, 74, 46, 32, 75, 47],
              [48, 54, 24, 14, 55, 25],
              [42, 45, 15, 32, 46, 16],

              // 39
              [20, 147, 117, 4, 148, 118],
              [40, 75, 47, 7, 76, 48],
              [43, 54, 24, 22, 55, 25],
              [10, 45, 15, 67, 46, 16],

              // 40
              [19, 148, 118, 6, 149, 119],
              [18, 75, 47, 31, 76, 48],
              [34, 54, 24, 34, 55, 25],
              [20, 45, 15, 61, 46, 16],
            ];

            var qrRSBlock = function (totalCount, dataCount) {
              var _this = {};
              _this.totalCount = totalCount;
              _this.dataCount = dataCount;
              return _this;
            };

            var _this = {};

            var getRsBlockTable = function (typeNumber, errorCorrectionLevel) {
              switch (errorCorrectionLevel) {
                case QRErrorCorrectionLevel.L:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
                case QRErrorCorrectionLevel.M:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
                case QRErrorCorrectionLevel.Q:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
                case QRErrorCorrectionLevel.H:
                  return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
                default:
                  return undefined;
              }
            };

            _this.getRSBlocks = function (typeNumber, errorCorrectionLevel) {
              var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

              if (typeof rsBlock == "undefined") {
                throw (
                  "bad rs block @ typeNumber:" +
                  typeNumber +
                  "/errorCorrectionLevel:" +
                  errorCorrectionLevel
                );
              }

              var length = rsBlock.length / 3;

              var list = [];

              for (var i = 0; i < length; i += 1) {
                var count = rsBlock[i * 3 + 0];
                var totalCount = rsBlock[i * 3 + 1];
                var dataCount = rsBlock[i * 3 + 2];

                for (var j = 0; j < count; j += 1) {
                  list.push(qrRSBlock(totalCount, dataCount));
                }
              }

              return list;
            };

            return _this;
          })();

          //---------------------------------------------------------------------
          // qrBitBuffer
          //---------------------------------------------------------------------

          var qrBitBuffer = function () {
            var _buffer = [];
            var _length = 0;

            var _this = {};

            _this.getBuffer = function () {
              return _buffer;
            };

            _this.getAt = function (index) {
              var bufIndex = Math.floor(index / 8);
              return ((_buffer[bufIndex] >>> (7 - (index % 8))) & 1) == 1;
            };

            _this.put = function (num, length) {
              for (var i = 0; i < length; i += 1) {
                _this.putBit(((num >>> (length - i - 1)) & 1) == 1);
              }
            };

            _this.getLengthInBits = function () {
              return _length;
            };

            _this.putBit = function (bit) {
              var bufIndex = Math.floor(_length / 8);
              if (_buffer.length <= bufIndex) {
                _buffer.push(0);
              }

              if (bit) {
                _buffer[bufIndex] |= 0x80 >>> _length % 8;
              }

              _length += 1;
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // qrNumber
          //---------------------------------------------------------------------

          var qrNumber = function (data) {
            var _mode = QRMode.MODE_NUMBER;
            var _data = data;

            var _this = {};

            _this.getMode = function () {
              return _mode;
            };

            _this.getLength = function (buffer) {
              return _data.length;
            };

            _this.write = function (buffer) {
              var data = _data;

              var i = 0;

              while (i + 2 < data.length) {
                buffer.put(strToNum(data.substring(i, i + 3)), 10);
                i += 3;
              }

              if (i < data.length) {
                if (data.length - i == 1) {
                  buffer.put(strToNum(data.substring(i, i + 1)), 4);
                } else if (data.length - i == 2) {
                  buffer.put(strToNum(data.substring(i, i + 2)), 7);
                }
              }
            };

            var strToNum = function (s) {
              var num = 0;
              for (var i = 0; i < s.length; i += 1) {
                num = num * 10 + chatToNum(s.charAt(i));
              }
              return num;
            };

            var chatToNum = function (c) {
              if ("0" <= c && c <= "9") {
                return c.charCodeAt(0) - "0".charCodeAt(0);
              }
              throw "illegal char :" + c;
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // qrAlphaNum
          //---------------------------------------------------------------------

          var qrAlphaNum = function (data) {
            var _mode = QRMode.MODE_ALPHA_NUM;
            var _data = data;

            var _this = {};

            _this.getMode = function () {
              return _mode;
            };

            _this.getLength = function (buffer) {
              return _data.length;
            };

            _this.write = function (buffer) {
              var s = _data;

              var i = 0;

              while (i + 1 < s.length) {
                buffer.put(
                  getCode(s.charAt(i)) * 45 + getCode(s.charAt(i + 1)),
                  11
                );
                i += 2;
              }

              if (i < s.length) {
                buffer.put(getCode(s.charAt(i)), 6);
              }
            };

            var getCode = function (c) {
              if ("0" <= c && c <= "9") {
                return c.charCodeAt(0) - "0".charCodeAt(0);
              } else if ("A" <= c && c <= "Z") {
                return c.charCodeAt(0) - "A".charCodeAt(0) + 10;
              } else {
                switch (c) {
                  case " ":
                    return 36;
                  case "$":
                    return 37;
                  case "%":
                    return 38;
                  case "*":
                    return 39;
                  case "+":
                    return 40;
                  case "-":
                    return 41;
                  case ".":
                    return 42;
                  case "/":
                    return 43;
                  case ":":
                    return 44;
                  default:
                    throw "illegal char :" + c;
                }
              }
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // qr8BitByte
          //---------------------------------------------------------------------

          var qr8BitByte = function (data) {
            var _mode = QRMode.MODE_8BIT_BYTE;
            var _data = data;
            var _bytes = qrcode.stringToBytes(data);

            var _this = {};

            _this.getMode = function () {
              return _mode;
            };

            _this.getLength = function (buffer) {
              return _bytes.length;
            };

            _this.write = function (buffer) {
              for (var i = 0; i < _bytes.length; i += 1) {
                buffer.put(_bytes[i], 8);
              }
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // qrKanji
          //---------------------------------------------------------------------

          var qrKanji = function (data) {
            var _mode = QRMode.MODE_KANJI;
            var _data = data;

            var stringToBytes = qrcode.stringToBytesFuncs["SJIS"];
            if (!stringToBytes) {
              throw "sjis not supported.";
            }
            !(function (c, code) {
              // self test for sjis support.
              var test = stringToBytes(c);
              if (test.length != 2 || ((test[0] << 8) | test[1]) != code) {
                throw "sjis not supported.";
              }
            })("\u53cb", 0x9746);

            var _bytes = stringToBytes(data);

            var _this = {};

            _this.getMode = function () {
              return _mode;
            };

            _this.getLength = function (buffer) {
              return ~~(_bytes.length / 2);
            };

            _this.write = function (buffer) {
              var data = _bytes;

              var i = 0;

              while (i + 1 < data.length) {
                var c = ((0xff & data[i]) << 8) | (0xff & data[i + 1]);

                if (0x8140 <= c && c <= 0x9ffc) {
                  c -= 0x8140;
                } else if (0xe040 <= c && c <= 0xebbf) {
                  c -= 0xc140;
                } else {
                  throw "illegal char at " + (i + 1) + "/" + c;
                }

                c = ((c >>> 8) & 0xff) * 0xc0 + (c & 0xff);

                buffer.put(c, 13);

                i += 2;
              }

              if (i < data.length) {
                throw "illegal char at " + (i + 1);
              }
            };

            return _this;
          };

          //=====================================================================
          // GIF Support etc.
          //

          //---------------------------------------------------------------------
          // byteArrayOutputStream
          //---------------------------------------------------------------------

          var byteArrayOutputStream = function () {
            var _bytes = [];

            var _this = {};

            _this.writeByte = function (b) {
              _bytes.push(b & 0xff);
            };

            _this.writeShort = function (i) {
              _this.writeByte(i);
              _this.writeByte(i >>> 8);
            };

            _this.writeBytes = function (b, off, len) {
              off = off || 0;
              len = len || b.length;
              for (var i = 0; i < len; i += 1) {
                _this.writeByte(b[i + off]);
              }
            };

            _this.writeString = function (s) {
              for (var i = 0; i < s.length; i += 1) {
                _this.writeByte(s.charCodeAt(i));
              }
            };

            _this.toByteArray = function () {
              return _bytes;
            };

            _this.toString = function () {
              var s = "";
              s += "[";
              for (var i = 0; i < _bytes.length; i += 1) {
                if (i > 0) {
                  s += ",";
                }
                s += _bytes[i];
              }
              s += "]";
              return s;
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // base64EncodeOutputStream
          //---------------------------------------------------------------------

          var base64EncodeOutputStream = function () {
            var _buffer = 0;
            var _buflen = 0;
            var _length = 0;
            var _base64 = "";

            var _this = {};

            var writeEncoded = function (b) {
              _base64 += String.fromCharCode(encode(b & 0x3f));
            };

            var encode = function (n) {
              if (n < 0) {
                // error.
              } else if (n < 26) {
                return 0x41 + n;
              } else if (n < 52) {
                return 0x61 + (n - 26);
              } else if (n < 62) {
                return 0x30 + (n - 52);
              } else if (n == 62) {
                return 0x2b;
              } else if (n == 63) {
                return 0x2f;
              }
              throw "n:" + n;
            };

            _this.writeByte = function (n) {
              _buffer = (_buffer << 8) | (n & 0xff);
              _buflen += 8;
              _length += 1;

              while (_buflen >= 6) {
                writeEncoded(_buffer >>> (_buflen - 6));
                _buflen -= 6;
              }
            };

            _this.flush = function () {
              if (_buflen > 0) {
                writeEncoded(_buffer << (6 - _buflen));
                _buffer = 0;
                _buflen = 0;
              }

              if (_length % 3 != 0) {
                // padding
                var padlen = 3 - (_length % 3);
                for (var i = 0; i < padlen; i += 1) {
                  _base64 += "=";
                }
              }
            };

            _this.toString = function () {
              return _base64;
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // base64DecodeInputStream
          //---------------------------------------------------------------------

          var base64DecodeInputStream = function (str) {
            var _str = str;
            var _pos = 0;
            var _buffer = 0;
            var _buflen = 0;

            var _this = {};

            _this.read = function () {
              while (_buflen < 8) {
                if (_pos >= _str.length) {
                  if (_buflen == 0) {
                    return -1;
                  }
                  throw "unexpected end of file./" + _buflen;
                }

                var c = _str.charAt(_pos);
                _pos += 1;

                if (c == "=") {
                  _buflen = 0;
                  return -1;
                } else if (c.match(/^\s$/)) {
                  // ignore if whitespace.
                  continue;
                }

                _buffer = (_buffer << 6) | decode(c.charCodeAt(0));
                _buflen += 6;
              }

              var n = (_buffer >>> (_buflen - 8)) & 0xff;
              _buflen -= 8;
              return n;
            };

            var decode = function (c) {
              if (0x41 <= c && c <= 0x5a) {
                return c - 0x41;
              } else if (0x61 <= c && c <= 0x7a) {
                return c - 0x61 + 26;
              } else if (0x30 <= c && c <= 0x39) {
                return c - 0x30 + 52;
              } else if (c == 0x2b) {
                return 62;
              } else if (c == 0x2f) {
                return 63;
              } else {
                throw "c:" + c;
              }
            };

            return _this;
          };

          //---------------------------------------------------------------------
          // gifImage (B/W)
          //---------------------------------------------------------------------

          var gifImage = function (width, height) {
            var _width = width;
            var _height = height;
            var _data = new Array(width * height);

            var _this = {};

            _this.setPixel = function (x, y, pixel) {
              _data[y * _width + x] = pixel;
            };

            _this.write = function (out) {
              //---------------------------------
              // GIF Signature

              out.writeString("GIF87a");

              //---------------------------------
              // Screen Descriptor

              out.writeShort(_width);
              out.writeShort(_height);

              out.writeByte(0x80); // 2bit
              out.writeByte(0);
              out.writeByte(0);

              //---------------------------------
              // Global Color Map

              // black
              out.writeByte(0x00);
              out.writeByte(0x00);
              out.writeByte(0x00);

              // white
              out.writeByte(0xff);
              out.writeByte(0xff);
              out.writeByte(0xff);

              //---------------------------------
              // Image Descriptor

              out.writeString(",");
              out.writeShort(0);
              out.writeShort(0);
              out.writeShort(_width);
              out.writeShort(_height);
              out.writeByte(0);

              //---------------------------------
              // Local Color Map

              //---------------------------------
              // Raster Data

              var lzwMinCodeSize = 2;
              var raster = getLZWRaster(lzwMinCodeSize);

              out.writeByte(lzwMinCodeSize);

              var offset = 0;

              while (raster.length - offset > 255) {
                out.writeByte(255);
                out.writeBytes(raster, offset, 255);
                offset += 255;
              }

              out.writeByte(raster.length - offset);
              out.writeBytes(raster, offset, raster.length - offset);
              out.writeByte(0x00);

              //---------------------------------
              // GIF Terminator
              out.writeString(";");
            };

            var bitOutputStream = function (out) {
              var _out = out;
              var _bitLength = 0;
              var _bitBuffer = 0;

              var _this = {};

              _this.write = function (data, length) {
                if (data >>> length != 0) {
                  throw "length over";
                }

                while (_bitLength + length >= 8) {
                  _out.writeByte(0xff & ((data << _bitLength) | _bitBuffer));
                  length -= 8 - _bitLength;
                  data >>>= 8 - _bitLength;
                  _bitBuffer = 0;
                  _bitLength = 0;
                }

                _bitBuffer = (data << _bitLength) | _bitBuffer;
                _bitLength = _bitLength + length;
              };

              _this.flush = function () {
                if (_bitLength > 0) {
                  _out.writeByte(_bitBuffer);
                }
              };

              return _this;
            };

            var getLZWRaster = function (lzwMinCodeSize) {
              var clearCode = 1 << lzwMinCodeSize;
              var endCode = (1 << lzwMinCodeSize) + 1;
              var bitLength = lzwMinCodeSize + 1;

              // Setup LZWTable
              var table = lzwTable();

              for (var i = 0; i < clearCode; i += 1) {
                table.add(String.fromCharCode(i));
              }
              table.add(String.fromCharCode(clearCode));
              table.add(String.fromCharCode(endCode));

              var byteOut = byteArrayOutputStream();
              var bitOut = bitOutputStream(byteOut);

              // clear code
              bitOut.write(clearCode, bitLength);

              var dataIndex = 0;

              var s = String.fromCharCode(_data[dataIndex]);
              dataIndex += 1;

              while (dataIndex < _data.length) {
                var c = String.fromCharCode(_data[dataIndex]);
                dataIndex += 1;

                if (table.contains(s + c)) {
                  s = s + c;
                } else {
                  bitOut.write(table.indexOf(s), bitLength);

                  if (table.size() < 0xfff) {
                    if (table.size() == 1 << bitLength) {
                      bitLength += 1;
                    }

                    table.add(s + c);
                  }

                  s = c;
                }
              }

              bitOut.write(table.indexOf(s), bitLength);

              // end code
              bitOut.write(endCode, bitLength);

              bitOut.flush();

              return byteOut.toByteArray();
            };

            var lzwTable = function () {
              var _map = {};
              var _size = 0;

              var _this = {};

              _this.add = function (key) {
                if (_this.contains(key)) {
                  throw "dup key:" + key;
                }
                _map[key] = _size;
                _size += 1;
              };

              _this.size = function () {
                return _size;
              };

              _this.indexOf = function (key) {
                return _map[key];
              };

              _this.contains = function (key) {
                return typeof _map[key] != "undefined";
              };

              return _this;
            };

            return _this;
          };

          var createDataURL = function (width, height, getPixel) {
            var gif = gifImage(width, height);
            for (var y = 0; y < height; y += 1) {
              for (var x = 0; x < width; x += 1) {
                gif.setPixel(x, y, getPixel(x, y));
              }
            }

            var b = byteArrayOutputStream();
            gif.write(b);

            var base64 = base64EncodeOutputStream();
            var bytes = b.toByteArray();
            for (var i = 0; i < bytes.length; i += 1) {
              base64.writeByte(bytes[i]);
            }
            base64.flush();

            return "data:image/gif;base64," + base64;
          };

          //---------------------------------------------------------------------
          // returns qrcode function.

          return qrcode;
        })();

        // multibyte support
        !(function () {
          qrcode.stringToBytesFuncs["UTF-8"] = function (s) {
            // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
            function toUTF8Array(str) {
              var utf8 = [];
              for (var i = 0; i < str.length; i++) {
                var charcode = str.charCodeAt(i);
                if (charcode < 0x80) utf8.push(charcode);
                else if (charcode < 0x800) {
                  utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
                } else if (charcode < 0xd800 || charcode >= 0xe000) {
                  utf8.push(
                    0xe0 | (charcode >> 12),
                    0x80 | ((charcode >> 6) & 0x3f),
                    0x80 | (charcode & 0x3f)
                  );
                }
                // surrogate pair
                else {
                  i++;
                  // UTF-16 encodes 0x10000-0x10FFFF by
                  // subtracting 0x10000 and splitting the
                  // 20 bits of 0x0-0xFFFFF into two halves
                  charcode =
                    0x10000 +
                    (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
                  utf8.push(
                    0xf0 | (charcode >> 18),
                    0x80 | ((charcode >> 12) & 0x3f),
                    0x80 | ((charcode >> 6) & 0x3f),
                    0x80 | (charcode & 0x3f)
                  );
                }
              }
              return utf8;
            }
            return toUTF8Array(s);
          };
        })();

        (function (factory) {
          if (true) {
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(function () {
          return qrcode;
        });

        /***/
      },
      /******/
    ]
  );
});

/*
 jQuery animateNumber plugin v0.0.13
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function (d) {
  var q = function (b) {
      return b.split("").reverse().join("");
    },
    m = {
      numberStep: function (b, a) {
        var e = Math.floor(b);
        d(a.elem).text(e);
      },
    },
    h = function (b) {
      var a = b.elem;
      a.nodeType &&
        a.parentNode &&
        ((a = a._animateNumberSetter), a || (a = m.numberStep), a(b.now, b));
    };
  d.Tween && d.Tween.propHooks
    ? (d.Tween.propHooks.number = {
        set: h,
      })
    : (d.fx.step.number = h);
  d.animateNumber = {
    numberStepFactories: {
      append: function (b) {
        return function (a, e) {
          var g = Math.floor(a);
          d(e.elem)
            .prop("number", a)
            .text(g + b);
        };
      },
      separator: function (b, a, e) {
        b = b || " ";
        a = a || 3;
        e = e || "";
        return function (g, k) {
          var c = Math.floor(g).toString(),
            t = d(k.elem);
          if (c.length > a) {
            for (
              var f = c,
                l = a,
                m = f.split("").reverse(),
                c = [],
                n,
                r,
                p,
                s = 0,
                h = Math.ceil(f.length / l);
              s < h;
              s++
            ) {
              n = "";
              for (p = 0; p < l; p++) {
                r = s * l + p;
                if (r === f.length) break;
                n += m[r];
              }
              c.push(n);
            }
            f = c.length - 1;
            l = q(c[f]);
            c[f] = q(parseInt(l, 10).toString());
            c = c.join(b);
            c = q(c);
          }
          t.prop("number", g).text(c + e);
        };
      },
    },
  };
  d.fn.animateNumber = function () {
    for (
      var b = arguments[0],
        a = d.extend({}, m, b),
        e = d(this),
        g = [a],
        k = 1,
        c = arguments.length;
      k < c;
      k++
    )
      g.push(arguments[k]);
    if (b.numberStep) {
      var h = this.each(function () {
          this._animateNumberSetter = b.numberStep;
        }),
        f = a.complete;
      a.complete = function () {
        h.each(function () {
          delete this._animateNumberSetter;
        });
        f && f.apply(this, arguments);
      };
    }
    return e.animate.apply(e, g);
  };
})(jQuery);

/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function (f) {
  f.fn.marquee = function (x) {
    return this.each(function () {
      var a = f.extend({}, f.fn.marquee.defaults, x),
        b = f(this),
        c,
        t,
        e = 3,
        y = "animation-play-state",
        p = !1,
        E = function (a, b, c) {
          for (
            var e = ["webkit", "moz", "MS", "o", ""], d = 0;
            d < e.length;
            d++
          )
            e[d] || (b = b.toLowerCase()), a.addEventListener(e[d] + b, c, !1);
        },
        F = function (a) {
          var b = [],
            c;
          for (c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
          b.push();
          return "{" + b.join(",") + "}";
        },
        l = {
          pause: function () {
            p && a.allowCss3Support
              ? c.css(y, "paused")
              : f.fn.pause && c.pause();
            b.data("runningStatus", "paused");
            b.trigger("paused");
          },
          resume: function () {
            p && a.allowCss3Support
              ? c.css(y, "running")
              : f.fn.resume && c.resume();
            b.data("runningStatus", "resumed");
            b.trigger("resumed");
          },
          toggle: function () {
            l["resumed" == b.data("runningStatus") ? "pause" : "resume"]();
          },
          destroy: function () {
            clearTimeout(b.timer);
            b.find("*").addBack().unbind();
            b.html(b.find(".js-marquee:first").html());
          },
        };
      if ("string" === typeof x)
        f.isFunction(l[x]) &&
          (c || (c = b.find(".js-marquee-wrapper")),
          !0 === b.data("css3AnimationIsSupported") && (p = !0),
          l[x]());
      else {
        var u;
        f.each(a, function (c, d) {
          u = b.attr("data-" + c);
          if ("undefined" !== typeof u) {
            switch (u) {
              case "true":
                u = !0;
                break;
              case "false":
                u = !1;
            }
            a[c] = u;
          }
        });
        a.speed && (a.duration = (parseInt(b.width(), 10) / a.speed) * 1e3);
        var v = "up" == a.direction || "down" == a.direction;
        a.gap = a.duplicated ? parseInt(a.gap) : 0;
        b.wrapInner('<div class="js-marquee"></div>');
        var h = b.find(".js-marquee").css({
          "margin-right": a.gap,
          float: "left",
        });
        a.duplicated && h.clone(!0).appendTo(b);
        b.wrapInner('<div class="js-marquee-wrapper"></div>');
        c = b.find(".js-marquee-wrapper");
        if (v) {
          var k = b.height();
          c.removeAttr("style");
          b.height(k);
          b.find(".js-marquee").css({
            float: "none",
            "margin-bottom": a.gap,
            "margin-right": 0,
          });
          a.duplicated &&
            b.find(".js-marquee:last").css({
              "margin-bottom": 0,
            });
          var q = b.find(".js-marquee:first").height() + a.gap;
          a.startVisible && !a.duplicated
            ? ((a._completeDuration =
                ((parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10)) *
                a.duration),
              (a.duration *= parseInt(q, 10) / parseInt(k, 10)))
            : (a.duration *=
                (parseInt(q, 10) + parseInt(k, 10)) / parseInt(k, 10));
        } else {
          var m = b.find(".js-marquee:first").width() + a.gap;
          var n = b.width();
          a.startVisible && !a.duplicated
            ? ((a._completeDuration =
                ((parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10)) *
                a.duration),
              (a.duration *= parseInt(m, 10) / parseInt(n, 10)))
            : (a.duration *=
                (parseInt(m, 10) + parseInt(n, 10)) / parseInt(n, 10));
        }
        a.duplicated && (a.duration /= 2);
        if (a.allowCss3Support) {
          h = document.body || document.createElement("div");
          var g = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
            A = ["Webkit", "Moz", "O", "ms", "Khtml"],
            B = "animation",
            d = "",
            r = "";
          h.style.animation && ((r = "@keyframes " + g + " "), (p = !0));
          if (!1 === p)
            for (var z = 0; z < A.length; z++)
              if (void 0 !== h.style[A[z] + "AnimationName"]) {
                h = "-" + A[z].toLowerCase() + "-";
                B = h + B;
                y = h + y;
                r = "@" + h + "keyframes " + g + " ";
                p = !0;
                break;
              }
          p &&
            ((d =
              g +
              " " +
              a.duration / 1e3 +
              "s " +
              a.delayBeforeStart / 1e3 +
              "s infinite " +
              a.css3easing),
            b.data("css3AnimationIsSupported", !0));
        }
        var C = function () {
            c.css(
              "transform",
              "translateY(" +
                ("up" == a.direction ? k + "px" : "-" + q + "px") +
                ")"
            );
          },
          D = function () {
            c.css(
              "transform",
              "translateX(" +
                ("left" == a.direction ? n + "px" : "-" + m + "px") +
                ")"
            );
          };
        a.duplicated
          ? (v
              ? a.startVisible
                ? c.css("transform", "translateY(0)")
                : c.css(
                    "transform",
                    "translateY(" +
                      ("up" == a.direction
                        ? k + "px"
                        : "-" + (2 * q - a.gap) + "px") +
                      ")"
                  )
              : a.startVisible
              ? c.css("transform", "translateX(0)")
              : c.css(
                  "transform",
                  "translateX(" +
                    ("left" == a.direction
                      ? n + "px"
                      : "-" + (2 * m - a.gap) + "px") +
                    ")"
                ),
            a.startVisible || (e = 1))
          : a.startVisible
          ? (e = 2)
          : v
          ? C()
          : D();
        var w = function () {
          a.duplicated &&
            (1 === e
              ? ((a._originalDuration = a.duration),
                (a.duration = v
                  ? "up" == a.direction
                    ? a.duration + k / (q / a.duration)
                    : 2 * a.duration
                  : "left" == a.direction
                  ? a.duration + n / (m / a.duration)
                  : 2 * a.duration),
                d &&
                  (d =
                    g +
                    " " +
                    a.duration / 1e3 +
                    "s " +
                    a.delayBeforeStart / 1e3 +
                    "s " +
                    a.css3easing),
                e++)
              : 2 === e &&
                ((a.duration = a._originalDuration),
                d &&
                  ((g += "0"),
                  (r = f.trim(r) + "0 "),
                  (d =
                    g +
                    " " +
                    a.duration / 1e3 +
                    "s 0s infinite " +
                    a.css3easing)),
                e++));
          v
            ? a.duplicated
              ? (2 < e &&
                  c.css(
                    "transform",
                    "translateY(" +
                      ("up" == a.direction ? 0 : "-" + q + "px") +
                      ")"
                  ),
                (t = {
                  transform:
                    "translateY(" +
                    ("up" == a.direction ? "-" + q + "px" : 0) +
                    ")",
                }))
              : a.startVisible
              ? 2 === e
                ? (d &&
                    (d =
                      g +
                      " " +
                      a.duration / 1e3 +
                      "s " +
                      a.delayBeforeStart / 1e3 +
                      "s " +
                      a.css3easing),
                  (t = {
                    transform:
                      "translateY(" +
                      ("up" == a.direction ? "-" + q + "px" : k + "px") +
                      ")",
                  }),
                  e++)
                : 3 === e &&
                  ((a.duration = a._completeDuration),
                  d &&
                    ((g += "0"),
                    (r = f.trim(r) + "0 "),
                    (d =
                      g +
                      " " +
                      a.duration / 1e3 +
                      "s 0s infinite " +
                      a.css3easing)),
                  C())
              : (C(),
                (t = {
                  transform:
                    "translateY(" +
                    ("up" == a.direction ? "-" + c.height() + "px" : k + "px") +
                    ")",
                }))
            : a.duplicated
            ? (2 < e &&
                c.css(
                  "transform",
                  "translateX(" +
                    ("left" == a.direction ? 0 : "-" + m + "px") +
                    ")"
                ),
              (t = {
                transform:
                  "translateX(" +
                  ("left" == a.direction ? "-" + m + "px" : 0) +
                  ")",
              }))
            : a.startVisible
            ? 2 === e
              ? (d &&
                  (d =
                    g +
                    " " +
                    a.duration / 1e3 +
                    "s " +
                    a.delayBeforeStart / 1e3 +
                    "s " +
                    a.css3easing),
                (t = {
                  transform:
                    "translateX(" +
                    ("left" == a.direction ? "-" + m + "px" : n + "px") +
                    ")",
                }),
                e++)
              : 3 === e &&
                ((a.duration = a._completeDuration),
                d &&
                  ((g += "0"),
                  (r = f.trim(r) + "0 "),
                  (d =
                    g +
                    " " +
                    a.duration / 1e3 +
                    "s 0s infinite " +
                    a.css3easing)),
                D())
            : (D(),
              (t = {
                transform:
                  "translateX(" +
                  ("left" == a.direction ? "-" + m + "px" : n + "px") +
                  ")",
              }));
          b.trigger("beforeStarting");
          if (p) {
            c.css(B, d);
            var h = r + " { 100%  " + F(t) + "}",
              l = c.find("style");
            0 !== l.length
              ? l.filter(":last").html(h)
              : f("head").append("<style>" + h + "</style>");
            E(c[0], "AnimationIteration", function () {
              b.trigger("finished");
            });
            E(c[0], "AnimationEnd", function () {
              w();
              b.trigger("finished");
            });
          } else
            c.animate(t, a.duration, a.easing, function () {
              b.trigger("finished");
              a.pauseOnCycle
                ? (b.timer = setTimeout(w, a.delayBeforeStart))
                : w();
            });
          b.data("runningStatus", "resumed");
        };
        b.bind("pause", l.pause);
        b.bind("resume", l.resume);
        a.pauseOnHover &&
          (b.bind("mouseenter", l.pause), b.bind("mouseleave", l.resume));
        p && a.allowCss3Support
          ? w()
          : (b.timer = setTimeout(w, a.delayBeforeStart));
      }
    });
  };
  f.fn.marquee.defaults = {
    allowCss3Support: !0,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: !1,
    duration: 5e3,
    gap: 20,
    pauseOnCycle: !1,
    pauseOnHover: !1,
    startVisible: !1,
  };
})(jQuery);

(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  var pluginName = "tinycarousel",
    defaults = {
      start: 0,
      axis: "x",
      buttons: true,
      bullets: false,
      interval: false,
      intervalTime: 3000,
      animation: true,
      animationTime: 1000,
      infinite: true,
    };
  function Plugin($container, options) {
    /**
     * The options of the carousel extend with the defaults.
     *
     * @property options
     * @type Object
     * @default defaults
     */
    this.options = $.extend({}, defaults, options);

    /**
     * @property _defaults
     * @type Object
     * @private
     * @default defaults
     */
    this._defaults = defaults;

    /**
     * @property _name
     * @type String
     * @private
     * @final
     * @default 'tinycarousel'
     */
    this._name = pluginName;

    var self = this,
      $viewport = $container.find(".viewport:first"),
      $overview = $container.find(".overview:first"),
      $slides = null,
      $next = $container.find(".next:first"),
      $prev = $container.find(".prev:first"),
      $bullets = $container.find(".bullet"),
      viewportSize = 0,
      contentStyle = {},
      slidesVisible = 0,
      slideSize = 0,
      slideIndex = 0,
      isHorizontal = this.options.axis === "x",
      sizeLabel = isHorizontal ? "Width" : "Height",
      posiLabel = isHorizontal ? "left" : "top",
      intervalTimer = null;
    /**
     * The index of the current slide.
     *
     * @property slideCurrent
     * @type Number
     * @default 0
     */
    this.slideCurrent = 0;

    /**
     * The number of slides the carousel is currently aware of.
     *
     * @property slidesTotal
     * @type Number
     * @default 0
     */
    this.slidesTotal = 0;

    /**
     * If the interval is running the value will be true.
     *
     * @property intervalActive
     * @type Boolean
     * @default false
     */
    this.intervalActive = false;

    /**
     * @method _initialize
     * @private
     */
    function _initialize() {
      self.update();
      self.move(self.slideCurrent);

      _setEvents();

      return self;
    }

    /**
     * You can use this method to add new slides on the fly. Or to let the carousel recalculate itself.
     *
     * @method update
     * @chainable
     */
    this.update = function () {
      $overview.find(".mirrored").remove();

      $slides = $overview.children();
      try {
        viewportSize = $viewport[0]["offset" + sizeLabel];
      } catch (e) {
        Trace.debug(e);
      }
      slideSize = $slides.first()["outer" + sizeLabel](true);
      self.slidesTotal = $slides.length;
      self.slideCurrent = self.options.start || 0;
      slidesVisible = Math.ceil(viewportSize / slideSize);

      $overview.append(
        $slides.slice(0, slidesVisible).clone().addClass("mirrored")
      );
      $overview.css(
        sizeLabel.toLowerCase(),
        (slideSize + 1) * (self.slidesTotal + slidesVisible)
      );

      _setButtons();

      return self;
    };

    /**
     * @method _setEvents
     * @private
     */
    function _setEvents() {
      if (self.options.buttons) {
        $prev.click(function () {
          self.move(--slideIndex);

          return false;
        });

        $next.click(function () {
          self.move(++slideIndex);

          return false;
        });
      }

      $(window).resize(self.update);

      if (self.options.bullets) {
        //$container.on("click", ".bullet", function() {
        //XXX: ccas modified (to adjust with older jquery version
        $container.find(".bullet").bind("click", function () {
          self.move((slideIndex = +$(this).attr("data-slide")));
          return false;
        });
      }
    }

    /**
     * If the interval is stoped start it.
     *
     * @method start
     * @chainable
     */
    this.start = function () {
      if (self.options.interval) {
        clearTimeout(intervalTimer);

        self.intervalActive = true;

        intervalTimer = setTimeout(function () {
          self.move(++slideIndex);
        }, self.options.intervalTime);
      }

      return self;
    };

    /**
     * If the interval is running stop it.
     *
     * @method start
     * @chainable
     */
    this.stop = function () {
      clearTimeout(intervalTimer);

      self.intervalActive = false;

      return self;
    };

    /**
     * Move to a specific slide.
     *
     * @method move
     * @chainable
     * @param {Number}  [index] The slide to move to.
     */
    this.move = function (index) {
      slideIndex = isNaN(index) ? self.slideCurrent : index;
      self.slideCurrent = slideIndex % self.slidesTotal;

      if (slideIndex < 0) {
        self.slideCurrent = slideIndex = self.slidesTotal - 1;
        $overview.css(posiLabel, -self.slidesTotal * slideSize);
      }

      if (slideIndex > self.slidesTotal) {
        self.slideCurrent = slideIndex = 1;
        $overview.css(posiLabel, 0);
      }
      contentStyle[posiLabel] = -slideIndex * slideSize;

      $overview.animate(contentStyle, {
        queue: false,
        duration: self.options.animation ? self.options.animationTime : 0,
        always: function () {
          /**
           * The move event will trigger when the carousel slides to a new slide.
           *
           * @event move
           */
          $container.trigger("move", [
            $slides[self.slideCurrent],
            self.slideCurrent,
          ]);
        },
      });

      _setButtons();
      self.start();

      return self;
    };

    /**
     * @method _setButtons
     * @private
     */
    function _setButtons() {
      if (self.options.buttons && !self.options.infinite) {
        $prev.toggleClass("disable", self.slideCurrent <= 0);
        $next.toggleClass(
          "disable",
          self.slideCurrent >= self.slidesTotal - slidesVisible
        );
      }

      if (self.options.bullets) {
        $bullets.removeClass("active");
        $($bullets[self.slideCurrent]).addClass("active");
      }
    }

    return _initialize();
  }

  /**
    * @class tinycarousel
    * @constructor
    * @param {Object} options
        @param {Number}  [options.start=0] The slide to start with.
        @param {String}  [options.axis=x] Vertical or horizontal scroller? ( x || y ).
        @param {Boolean} [options.buttons=true] Show previous and next navigation buttons.
        @param {Boolean} [options.bullets=false] Is there a page number navigation present?
        @param {Boolean} [options.interval=false] Move to another block on intervals.
        @param {Number}  [options.intervalTime=3000] Interval time in milliseconds.
        @param {Boolean} [options.animate=true] False is instant, true is animate.
        @param {Number}  [options.animationTime=1000] How fast must the animation move in ms?
        @param {Boolean} [options.infinite=true] Infinite carousel.
    */
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin($(this), options));
      }
    });
  };
});
