!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function(e, t, n) {
    e.exports = n(1);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function c(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function s(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function u(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function l(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function p(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function f(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function _(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function m(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function y(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function b(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function E(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function w(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function S(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function k(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function P(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function O(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function A(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function T(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function I(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function R(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function N(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function C(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function M(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function j(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function L(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function D(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function x(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function q(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function F(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function B(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function U(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function H(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function z(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Y(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function G(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function W(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function K(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function V(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function J(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function Q(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function $(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function Z(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function X(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function ee(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function te(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function ne(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function re(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function oe(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function ie(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function ae(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function ce(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function se(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function ue(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function le(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function pe(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function de(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function fe(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function he(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function _e(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function me(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var ye,
      ve,
      be,
      ge,
      Ee,
      we,
      Se,
      ke = (function(e) {
        function t(e) {
          r(this, t);
          var n = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            window.__stripeElementsController &&
              window.__stripeElementsController.reportIntegrationError(e),
            (n.name = "IntegrationError"),
            Object.defineProperty(n, "message", {
              value: n.message,
              enumerable: !0
            }),
            n
          );
        }
        return i(t, e), t;
      })(Error),
      Pe = ke,
      Oe = function(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "absurd";
        throw new Error(t);
      },
      Ae = n(2),
      Te = n.n(Ae),
      Ie = window.Promise ? Promise : Te.a,
      Re = Ie,
      Ne =
        ("function" == typeof Symbol && Symbol.iterator,
        function(e, t) {
          for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
        }),
      Ce = function(e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
        return -1;
      },
      Me = function(e, t) {
        for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
        for (var o = [], i = 0; i < e.length; i++) n[e[i]] && o.push(e[i]);
        return o;
      },
      je = function(e, t) {
        var n = 0,
          r = function r(o) {
            for (var i = Date.now() + 50; n < e.length && Date.now() < i; )
              t(e[n]), n++;
            n === e.length
              ? o()
              : setTimeout(function() {
                  return r(o);
                });
          };
        return new Re(function(e) {
          return r(e);
        });
      },
      Le = [
        "aed",
        "afn",
        "all",
        "amd",
        "ang",
        "aoa",
        "ars",
        "aud",
        "awg",
        "azn",
        "bam",
        "bbd",
        "bdt",
        "bgn",
        "bhd",
        "bif",
        "bmd",
        "bnd",
        "bob",
        "brl",
        "bsd",
        "btn",
        "bwp",
        "byr",
        "bzd",
        "cad",
        "cdf",
        "chf",
        "clf",
        "clp",
        "cny",
        "cop",
        "crc",
        "cuc",
        "cup",
        "cve",
        "czk",
        "djf",
        "dkk",
        "dop",
        "dzd",
        "egp",
        "ern",
        "etb",
        "eur",
        "fjd",
        "fkp",
        "gbp",
        "gel",
        "ghs",
        "gip",
        "gmd",
        "gnf",
        "gtq",
        "gyd",
        "hkd",
        "hnl",
        "hrk",
        "htg",
        "huf",
        "idr",
        "ils",
        "inr",
        "iqd",
        "irr",
        "isk",
        "jmd",
        "jod",
        "jpy",
        "kes",
        "kgs",
        "khr",
        "kmf",
        "kpw",
        "krw",
        "kwd",
        "kyd",
        "kzt",
        "lak",
        "lbp",
        "lkr",
        "lrd",
        "lsl",
        "ltl",
        "lvl",
        "lyd",
        "mad",
        "mdl",
        "mga",
        "mkd",
        "mmk",
        "mnt",
        "mop",
        "mro",
        "mur",
        "mvr",
        "mwk",
        "mxn",
        "myr",
        "mzn",
        "nad",
        "ngn",
        "nio",
        "nok",
        "npr",
        "nzd",
        "omr",
        "pab",
        "pen",
        "pgk",
        "php",
        "pkr",
        "pln",
        "pyg",
        "qar",
        "ron",
        "rsd",
        "rub",
        "rwf",
        "sar",
        "sbd",
        "scr",
        "sdg",
        "sek",
        "sgd",
        "shp",
        "skk",
        "sll",
        "sos",
        "srd",
        "ssp",
        "std",
        "svc",
        "syp",
        "szl",
        "thb",
        "tjs",
        "tmt",
        "tnd",
        "top",
        "try",
        "ttd",
        "twd",
        "tzs",
        "uah",
        "ugx",
        "usd",
        "uyu",
        "uzs",
        "vef",
        "vnd",
        "vuv",
        "wst",
        "xaf",
        "xag",
        "xau",
        "xcd",
        "xdr",
        "xof",
        "xpf",
        "yer",
        "zar",
        "zmk",
        "zmw",
        "btc",
        "jep",
        "eek",
        "ghc",
        "mtl",
        "tmm",
        "yen",
        "zwd",
        "zwl",
        "zwn",
        "zwr"
      ],
      De = Le,
      xe = {
        AE: "AE",
        AT: "AT",
        AU: "AU",
        BE: "BE",
        BR: "BR",
        CA: "CA",
        CH: "CH",
        CZ: "CZ",
        DE: "DE",
        DK: "DK",
        EE: "EE",
        ES: "ES",
        FI: "FI",
        FR: "FR",
        GB: "GB",
        GR: "GR",
        HK: "HK",
        IE: "IE",
        IN: "IN",
        IT: "IT",
        JP: "JP",
        LT: "LT",
        LU: "LU",
        LV: "LV",
        MX: "MX",
        MY: "MY",
        NL: "NL",
        NO: "NO",
        NZ: "NZ",
        PH: "PH",
        PL: "PL",
        PT: "PT",
        RO: "RO",
        SE: "SE",
        SG: "SG",
        SI: "SI",
        SK: "SK",
        US: "US"
      },
      qe = Object.keys(xe),
      Fe = { live: "live", test: "test", unknown: "unknown" },
      Be = function(e) {
        return /^pk_test_/.test(e)
          ? Fe.test
          : /^pk_live_/.test(e)
          ? Fe.live
          : Fe.unknown;
      },
      Ue = function(e) {
        if (e === Fe.unknown)
          throw new Pe(
            "It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
          );
      },
      He =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ze =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Ye = function(e, t, n) {
        return (
          "Invalid value for " +
          n.label +
          ": " +
          (n.path.join(".") || "value") +
          " should be " +
          e +
          ". You specified: " +
          t +
          "."
        );
      },
      Ge = function(e) {
        return {
          type: "valid",
          value: e,
          warnings:
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
        };
      },
      We = function(e) {
        return { error: e, errorType: "full", type: "error" };
      },
      Ke = function(e, t, n) {
        var r = new Pe(Ye(e, t, n));
        return We(r);
      },
      Ve = function(e, t, n) {
        return {
          expected: e,
          actual: String(t),
          options: n,
          errorType: "mismatch",
          type: "error"
        };
      },
      Je = function(e) {
        return function(t, n) {
          return void 0 === t ? Ge(t) : e(t, n);
        };
      },
      Qe = function(e, t) {
        return function(n, r) {
          var o = function(e) {
              var t = e.options.path.join(".") || "value";
              return {
                error: t + " should be " + e.expected,
                actual: t + " as " + e.actual
              };
            },
            i = function(e, t, n) {
              return We(
                new Pe(
                  "Invalid value for " +
                    e +
                    ": " +
                    t +
                    ". You specified " +
                    n +
                    "."
                )
              );
            },
            a = e(n, r),
            c = t(n, r);
          if ("error" === a.type && "error" === c.type) {
            if ("mismatch" === a.errorType && "mismatch" === c.errorType) {
              var s = o(a),
                u = s.error,
                l = s.actual,
                p = o(c),
                d = p.error,
                f = p.actual;
              return i(
                r.label,
                u === d ? u : u + " or " + d,
                l === f ? l : l + " and " + f
              );
            }
            if ("mismatch" === a.errorType) {
              var h = o(a),
                _ = h.error,
                m = h.actual;
              return i(r.label, _, m);
            }
            if ("mismatch" === c.errorType) {
              var y = o(c),
                v = y.error,
                b = y.actual;
              return i(r.label, v, b);
            }
            return We(a.error);
          }
          return "valid" === a.type ? a : c;
        };
      },
      $e = function(e, t) {
        return function(n, r) {
          var o = Ne(e, function(e) {
            return e === n;
          });
          if (void 0 === o) {
            var i = t
              ? "a recognized string."
              : "one of the following strings: " + e.join(", ");
            return Ve(i, n, r);
          }
          return Ge(o);
        };
      },
      Ze = function(e) {
        return function(t, n) {
          return "string" == typeof t && 0 === t.indexOf(e)
            ? Ge(t)
            : Ve("a string starting with " + e, t, n);
        };
      },
      Xe = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return $e(t, !1);
      },
      et = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return $e(t, !0);
      },
      tt = Xe.apply(void 0, c(qe)),
      nt = Xe.apply(void 0, c(De)),
      rt =
        (Xe.apply(void 0, c(Object.keys(Fe))),
        function(e, t) {
          return "string" == typeof e ? Ge(e) : Ve("a string", e, t);
        }),
      ot = function(e, t) {
        return function(n, r) {
          return void 0 === n ? Ge(t()) : e(n, r);
        };
      },
      it = function(e, t) {
        return "boolean" == typeof e ? Ge(e) : Ve("a boolean", e, t);
      },
      at = function(e, t) {
        return "number" == typeof e ? Ge(e) : Ve("a number", e, t);
      },
      ct = function(e) {
        return function(t, n) {
          return "number" == typeof t && t > e
            ? Ge(t)
            : Ve("a number greater than " + e, t, n);
        };
      },
      st = function(e) {
        return function(t, n) {
          return "number" == typeof t && t === parseInt(t, 10) && (!e || t >= 0)
            ? Ge(t)
            : Ve(
                e
                  ? "a positive amount in the currency's subunit"
                  : "an amount in the currency's subunit",
                t,
                n
              );
        };
      },
      ut = function(e, t) {
        return st(!1)(e, t);
      },
      lt = function(e, t) {
        return st(!0)(e, t);
      },
      pt = function(e, t) {
        return e && "object" === (void 0 === e ? "undefined" : ze(e))
          ? Ge(e)
          : Ve("an object", e, t);
      },
      dt = function(e) {
        return function(t, n) {
          if (Array.isArray(t)) {
            return t
              .map(function(t, r) {
                return e(
                  t,
                  He({}, n, { path: [].concat(c(n.path), [String(r)]) })
                );
              })
              .reduce(function(e, t) {
                return "error" === e.type
                  ? e
                  : "error" === t.type
                  ? t
                  : Ge(
                      [].concat(c(e.value), [t.value]),
                      [].concat(c(e.warnings), c(t.warnings))
                    );
              }, Ge([]));
          }
          return Ve("array", t, n);
        };
      },
      ft = function(e) {
        return function(t) {
          return function(n, r) {
            if (Array.isArray(n)) {
              var o = t(n, r);
              if ("valid" === o.type)
                for (var i = {}, a = 0; a < o.value.length; a += 1) {
                  var c = o.value[a];
                  if (
                    "object" === (void 0 === c ? "undefined" : ze(c)) &&
                    c &&
                    "string" == typeof c[e]
                  ) {
                    var s = c[e];
                    if (i[s])
                      return We(
                        new Pe(
                          "Duplicate value for " +
                            e +
                            ": " +
                            s +
                            ". The property '" +
                            e +
                            "' of '" +
                            r.path.join(".") +
                            "' has to be unique."
                        )
                      );
                    i[s] = !0;
                  }
                }
              return o;
            }
            return Ve("array", n, r);
          };
        };
      },
      ht = function(e) {
        return function(t, n) {
          return void 0 === t
            ? Ge(void 0)
            : Ve("used in " + e + " instead", t, n);
        };
      },
      _t = function(e) {
        return function(t) {
          return function(n, r) {
            if (
              n &&
              "object" === (void 0 === n ? "undefined" : ze(n)) &&
              !Array.isArray(n)
            ) {
              var o = n,
                i = Ne(Object.keys(o), function(e) {
                  return !t[e];
                });
              if (i && e)
                return We(
                  new Pe(
                    "Invalid " +
                      r.label +
                      " parameter: " +
                      [].concat(c(r.path), [i]).join(".") +
                      " is not an accepted parameter."
                  )
                );
              var s = Object.keys(o),
                u = Ge({});
              return (
                i &&
                  (u = s.reduce(function(e, n) {
                    return t[n]
                      ? e
                      : Ge(
                          e.value,
                          [].concat(c(e.warnings), [
                            "Unrecognized " +
                              r.label +
                              " parameter: " +
                              [].concat(c(r.path), [n]).join(".") +
                              " is not a recognized parameter. This may cause issues with your integration in the future."
                          ])
                        );
                  }, u)),
                Object.keys(t).reduce(function(e, n) {
                  if ("error" === e.type) return e;
                  var i = t[n],
                    s = i(o[n], He({}, r, { path: [].concat(c(r.path), [n]) }));
                  return "valid" === s.type && void 0 !== s.value
                    ? Ge(
                        He({}, e.value, a({}, n, s.value)),
                        [].concat(c(e.warnings), c(s.warnings))
                      )
                    : "valid" === s.type
                    ? Ge(e.value, [].concat(c(e.warnings), c(s.warnings)))
                    : s;
                }, u)
              );
            }
            return Ve("an object", n, r);
          };
        };
      },
      mt = _t(!0),
      yt = _t(!1),
      vt = function(e, t) {
        return He({}, e, { path: [].concat(c(e.path), [t]) });
      },
      bt = function(e, t, n, r) {
        var o = r || {},
          i = e(t, {
            origin: o.origin || "",
            element: o.element || "",
            label: n,
            path: o.path || []
          });
        return "valid" === i.type
          ? i
          : "full" === i.errorType
          ? i
          : {
              type: "error",
              errorType: "full",
              error: new Pe(Ye(i.expected, i.actual, i.options))
            };
      },
      gt = function(e, t, n, r) {
        var o = bt(e, t, n, r);
        switch (o.type) {
          case "valid":
            return { value: o.value, warnings: o.warnings };
          case "error":
            throw o.error;
          default:
            return Oe(o);
        }
      },
      Et = /^(http(s)?):\/\//,
      wt = function(e) {
        return Et.test(e);
      },
      St = function(e) {
        if (!wt(e)) return null;
        var t = document.createElement("a");
        t.href = e;
        var n = t.protocol,
          r = t.host,
          o = /:80$/,
          i = /:443$/;
        return (
          "http:" === n && o.test(r)
            ? (r = r.replace(o, ""))
            : "https:" === n && i.test(r) && (r = r.replace(i, "")),
          { host: r, protocol: n, origin: n + "//" + r }
        );
      },
      kt = function(e, t) {
        if ("/" === t[0]) {
          var n = St(e);
          return n ? "" + n.origin + t : t;
        }
        return "" + e.replace(/\/[^\/]*$/, "/") + t;
      },
      Pt = {
        CARD_ELEMENT: "CARD_ELEMENT",
        CONTROLLER: "CONTROLLER",
        METRICS_CONTROLLER: "METRICS_CONTROLLER",
        PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
        PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER",
        PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY",
        IBAN_ELEMENT: "IBAN_ELEMENT",
        IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
        AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL",
        CARDINAL_3DS2: "CARDINAL_3DS2",
        STRIPE_3DS2_CHALLENGE: "STRIPE_3DS2_CHALLENGE",
        STRIPE_3DS2_FINGERPRINT: "STRIPE_3DS2_FINGERPRINT",
        AU_BANK_ACCOUNT_ELEMENT: "AU_BANK_ACCOUNT_ELEMENT",
        FPX_BANK_ELEMENT: "FPX_BANK_ELEMENT"
      },
      Ot = Pt,
      At = Object({
        NODE_ENV: "production",
        TEST_ENV: !1,
        SELENIUM_TEST_ENV: !1,
        PUBLIC_URL: "",
        RELEASE_VERSION: "bd15fa1a",
        STRIPE_JS_API_URL: "https://api.stripe.com/v1/",
        STRIPE_JS_HOOKS_URL: "https://hooks.stripe.com/",
        STRIPE_JS_ALLOW_MUTABLE_API_URL: !1,
        STRIPE_JS_Q_URL: "https://q.stripe.com",
        STRIPE_JS_ROOT_URL: "https://js.stripe.com/v3/",
        STRIPE_CHECKOUT_URL: "https://checkout.stripe.com/",
        STRIPE_JS_SOURCEMAPS: !1,
        STRIPE_JS_DEBUG_POSTMESSAGE: !1,
        STRIPE_JS_DEBUG_LOGGER: !0,
        CARDINAL_INNER_HTML_NAME:
          "cardinal-inner-5eda2edc913658326d97829b6a65db93.html",
        THREE_DS_2_FINGERPRINT_HTML_NAME:
          "three-ds-2-fingerprint-3161e06a57fadbf3c40ea148548899ae.html",
        THREE_DS_2_CHALLENGE_HTML_NAME:
          "three-ds-2-challenge-0647bac2a19adbc69240db818356e2a3.html",
        AUTHORIZE_WITH_URL_INNER_HTML_NAME:
          "authorize-with-url-inner-cef89341f012bc7ffccce04c1be87f28.html",
        PAYMENT_REQUEST_INNER_GOOGLE_PAY_HTML_NAME:
          "payment-request-inner-google-pay-b4ccc742271dd71c6e7dfb718a4cde78.html",
        PAYMENT_REQUEST_INNER_BROWSER_HTML_NAME:
          "payment-request-inner-browser-25dbbd75f6dc320ed62a0c0f4601514d.html",
        CONTROLLER_HTML_NAME:
          "controller-4d17a00d2029917f836584ee4fcec351.html",
        RECAPTCHA_HTML_NAME: "recaptcha.html",
        ELEMENTS_INNER_FPX_BANK_HTML_NAME: "elements-inner-fpx-bank.html",
        ELEMENTS_INNER_AU_BANK_ACCOUNT_HTML_NAME:
          "elements-inner-au-bank-account-0cdce479e74413d53e9c2d0e262310e2.html",
        ELEMENTS_INNER_PAYMENT_REQUEST_HTML_NAME:
          "elements-inner-payment-request-897a5a75fafecc3f393ce3617c33db7d.html",
        ELEMENTS_INNER_IDEAL_BANK_HTML_NAME:
          "elements-inner-ideal-bank-d5a9c8feeb2db007c11d4bcdf9940635.html",
        ELEMENTS_INNER_IBAN_HTML_NAME:
          "elements-inner-iban-67999482c898d793490b633be077d6a6.html",
        ELEMENTS_INNER_CARD_HTML_NAME:
          "elements-inner-card-cd25803263cd2601cb18e3cd5aa05896.html",
        STRIPE_JS_NO_DEMOS: "1",
        STRIPE_JS_NO_REPORTS: "1"
      }),
      Tt = function(e) {
        return "" + (At.STRIPE_JS_ROOT_URL || "") + (e || "");
      },
      It = function(e) {
        switch (e) {
          case "CARD_ELEMENT":
            return Tt(At.ELEMENTS_INNER_CARD_HTML_NAME);
          case "CONTROLLER":
            return Tt(At.CONTROLLER_HTML_NAME);
          case "METRICS_CONTROLLER":
            return "https://js.stripe.com/v2/m/outer.html";
          case "PAYMENT_REQUEST_ELEMENT":
            return Tt(At.ELEMENTS_INNER_PAYMENT_REQUEST_HTML_NAME);
          case "PAYMENT_REQUEST_BROWSER":
            return Tt(At.PAYMENT_REQUEST_INNER_BROWSER_HTML_NAME);
          case "PAYMENT_REQUEST_GOOGLE_PAY":
            return Tt(At.PAYMENT_REQUEST_INNER_GOOGLE_PAY_HTML_NAME);
          case "IBAN_ELEMENT":
            return Tt(At.ELEMENTS_INNER_IBAN_HTML_NAME);
          case "IDEAL_BANK_ELEMENT":
            return Tt(At.ELEMENTS_INNER_IDEAL_BANK_HTML_NAME);
          case "AUTHORIZE_WITH_URL":
            return Tt(At.AUTHORIZE_WITH_URL_INNER_HTML_NAME);
          case "CARDINAL_3DS2":
            return Tt(At.CARDINAL_INNER_HTML_NAME);
          case "STRIPE_3DS2_CHALLENGE":
            return Tt(At.THREE_DS_2_CHALLENGE_HTML_NAME);
          case "STRIPE_3DS2_FINGERPRINT":
            return Tt(At.THREE_DS_2_FINGERPRINT_HTML_NAME);
          case "AU_BANK_ACCOUNT_ELEMENT":
            return Tt(At.ELEMENTS_INNER_AU_BANK_ACCOUNT_HTML_NAME);
          case "FPX_BANK_ELEMENT":
            return Tt(At.ELEMENTS_INNER_FPX_BANK_HTML_NAME);
          default:
            return Oe(e);
        }
      },
      Rt = It,
      Nt = {
        card: "card",
        cardNumber: "cardNumber",
        cardExpiry: "cardExpiry",
        cardCvc: "cardCvc",
        postalCode: "postalCode",
        iban: "iban",
        idealBank: "idealBank",
        paymentRequestButton: "paymentRequestButton",
        auBankAccount: "auBankAccount",
        fpxBank: "fpxBank",
        idealBankSecondary: "idealBankSecondary",
        auBankAccountNumber: "auBankAccountNumber",
        auBsb: "auBsb",
        fpxBankSecondary: "fpxBankSecondary"
      },
      Ct = Nt,
      Mt = { PAYMENT_INTENT: "PAYMENT_INTENT", SETUP_INTENT: "SETUP_INTENT" },
      jt = Mt,
      Lt = [Ct.card, Ct.cardNumber, Ct.cardExpiry, Ct.cardCvc, Ct.postalCode],
      Dt = Lt,
      xt = St("https://js.stripe.com/v3/"),
      qt = xt ? xt.origin : "",
      Ft = {
        family: "font-family",
        src: "src",
        unicodeRange: "unicode-range",
        style: "font-style",
        variant: "font-variant",
        stretch: "font-stretch",
        weight: "font-weight",
        display: "font-display"
      },
      Bt = Object.keys(Ft).reduce(function(e, t) {
        return (e[Ft[t]] = t), e;
      }, {}),
      Ut = [
        Ct.idealBank,
        Ct.idealBankSecondary,
        Ct.fpxBank,
        Ct.fpxBankSecondary
      ],
      Ht = 0,
      zt = function(e) {
        return "" + e + Ht++;
      },
      Yt = function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t
          ? (
              parseInt(t, 10) ^
              ((16 * Math.random()) >> (parseInt(t, 10) / 4))
            ).toString(16)
          : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e);
      },
      Gt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Wt = function e(t, n) {
        var r = [];
        return (
          Object.keys(t).forEach(function(o) {
            var i = t[o],
              a = n ? n + "[" + o + "]" : o;
            if (i && "object" === (void 0 === i ? "undefined" : Gt(i))) {
              var c = e(i, a);
              "" !== c && (r = [].concat(s(r), [c]));
            } else void 0 !== i && null !== i && (r = [].concat(s(r), [a + "=" + encodeURIComponent(String(i))]));
          }),
          r.join("&").replace(/%20/g, "+")
        );
      },
      Kt = Wt,
      Vt = n(6),
      Jt = n.n(Vt),
      Qt = (function() {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && c.return && c.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function(t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      $t = function(e, t) {
        var n = {};
        t.forEach(function(e) {
          var t = Qt(e, 2),
            r = t[0],
            o = t[1];
          r.split(/\s+/).forEach(function(e) {
            e && (n[e] = n[e] || o);
          });
        }),
          (e.className = Jt()(e.className, n));
      },
      Zt = function(e, t) {
        e.style.cssText = Object.keys(t)
          .map(function(e) {
            return e + ": " + t[e] + " !important;";
          })
          .join(" ");
      },
      Xt = function(e) {
        try {
          return window.parent.frames[e];
        } catch (e) {
          return null;
        }
      },
      en = function(e) {
        if (!document.body)
          throw new Pe(
            "Stripe.js requires that your page has a <body> element."
          );
        return e(document.body);
      },
      tn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      nn = function(e) {
        var t = e.frameId,
          n = e.controllerId,
          r = e.type,
          o = qt,
          i = void 0;
        "controller" === r
          ? (i = Xt(t))
          : "group" === r
          ? (i = Xt(n))
          : "outer" === r
          ? (i = window.frames[t])
          : "inner" === r && ((o = "*"), (i = window.parent)),
          i &&
            i.postMessage(JSON.stringify(tn({}, e, { __stripeJsV3: !0 })), o);
      },
      rn = function(e) {
        try {
          var t = "string" == typeof e ? JSON.parse(e) : e;
          return t.__stripeJsV3 ? t : null;
        } catch (e) {
          return null;
        }
      },
      on =
        (n(7),
        function(e, t) {
          var n = e._isUserError || "IntegrationError" === e.name;
          throw (t &&
            !n &&
            t.report("fatal.uncaught_error", {
              iframe: !1,
              name: e.name,
              element: "outer",
              message: e.message || e.description,
              fileName: e.fileName,
              lineNumber: e.lineNumber,
              columnNumber: e.columnNumber,
              stack: e.stack && e.stack.substring(0, 1e3)
            }),
          e);
        }),
      an = function(e, t) {
        return function() {
          try {
            return e.call(this);
          } catch (e) {
            return on(e, t || (this && this._controller));
          }
        };
      },
      cn = function(e, t) {
        return function(n) {
          try {
            return e.call(this, n);
          } catch (e) {
            return on(e, t || (this && this._controller));
          }
        };
      },
      sn = function(e, t) {
        return function(n, r) {
          try {
            return e.call(this, n, r);
          } catch (e) {
            return on(e, t || (this && this._controller));
          }
        };
      },
      un = function(e, t) {
        return function(n, r, o) {
          try {
            return e.call(this, n, r, o);
          } catch (e) {
            return on(e, t || (this && this._controller));
          }
        };
      },
      ln = function(e, t) {
        return function() {
          try {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return e.call.apply(e, [this].concat(r));
          } catch (e) {
            return on(e, t || (this && this._controller));
          }
        };
      },
      pn = function e() {
        var t = this;
        u(this, e),
          (this._emit = function(e) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return (
              (t._callbacks[e] || []).forEach(function(e) {
                var t = e.fn;
                if (t._isUserCallback)
                  try {
                    t.apply(void 0, r);
                  } catch (e) {
                    throw ((e._isUserError = !0), e);
                  }
                else t.apply(void 0, r);
              }),
              t
            );
          }),
          (this._once = function(e, n) {
            var r = function r() {
              t._off(e, r), n.apply(void 0, arguments);
            };
            return t._on(e, r, n);
          }),
          (this._removeAllListeners = function() {
            return (t._callbacks = {}), t;
          }),
          (this._on = function(e, n, r) {
            return (
              (t._callbacks[e] = t._callbacks[e] || []),
              t._callbacks[e].push({ original: r, fn: n }),
              t
            );
          }),
          (this._validateUserOn = function(e, t) {}),
          (this._userOn = function(e, n) {
            if ("string" != typeof e)
              throw new Pe(
                "When adding an event listener, the first argument should be a string event name."
              );
            if ("function" != typeof n)
              throw new Pe(
                "When adding an event listener, the second argument should be a function callback."
              );
            return (
              t._validateUserOn(e, n), (n._isUserCallback = !0), t._on(e, n)
            );
          }),
          (this._hasRegisteredListener = function(e) {
            return t._callbacks[e] && t._callbacks[e].length > 0;
          }),
          (this._off = function(e, n) {
            if (n) {
              for (
                var r = t._callbacks[e], o = void 0, i = 0;
                i < r.length;
                i++
              )
                if (((o = r[i]), o.fn === n || o.original === n)) {
                  r.splice(i, 1);
                  break;
                }
            } else delete t._callbacks[e];
            return t;
          }),
          (this._callbacks = {});
        var n = sn(this._userOn),
          r = sn(this._off),
          o = sn(this._once),
          i = cn(this._hasRegisteredListener),
          a = cn(this._removeAllListeners),
          c = ln(this._emit);
        (this.on = this.addListener = this.addEventListener = n),
          (this.off = this.removeListener = this.removeEventListener = r),
          (this.once = o),
          (this.hasRegisteredListener = i),
          (this.removeAllListeners = a),
          (this.emit = c);
      },
      dn = pn,
      fn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      hn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      _n = (function(e) {
        function t(e, n, r) {
          p(this, t);
          var o = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (o._sendFAReq = function(e) {
              var t = zt(e.tag);
              return new Re(function(n, r) {
                (o._requests[t] = { resolve: n, reject: r }),
                  o._send({
                    message: {
                      action: "stripe-frame-action",
                      payload: { nonce: t, faReq: e }
                    },
                    type: "outer",
                    frameId: o.id,
                    controllerId: o._controllerId
                  });
              });
            }),
            (o.action = {
              perform3DS2Challenge: function(e) {
                return o._sendFAReq({
                  tag: "PERFORM_3DS2_CHALLENGE",
                  value: e
                });
              },
              perform3DS2Fingerprint: function(e) {
                return o._sendFAReq({
                  tag: "PERFORM_3DS2_FINGERPRINT",
                  value: e
                });
              },
              show3DS2Spinner: function(e) {
                return o._sendFAReq({ tag: "SHOW_3DS2_SPINNER", value: e });
              },
              performCardinal3DS2: function(e) {
                return o._sendFAReq({ tag: "PERFORM_CARDINAL_3DS2", value: e });
              },
              checkCanMakePayment: function(e) {
                return o._sendFAReq({
                  tag: "CHECK_CAN_MAKE_PAYMENT",
                  value: e
                });
              }
            }),
            (o.type = e),
            (o.loaded = !1),
            (o._controllerId = n),
            (o._persistentMessages = []),
            (o._queuedMessages = []),
            (o._requests = {}),
            (o.id = o._generateId()),
            (o._iframe = o._createIFrame(r)),
            o._on("load", function() {
              (o.loaded = !0),
                o._ensureMounted(),
                o.loaded &&
                  (o._persistentMessages.forEach(function(e) {
                    return o._send(e);
                  }),
                  o._queuedMessages.forEach(function(e) {
                    return o._send(e);
                  }),
                  (o._queuedMessages = []));
            }),
            o
          );
        }
        return (
          f(t, e),
          hn(t, [
            {
              key: "_generateId",
              value: function() {
                return zt("__privateStripeFrame");
              }
            },
            {
              key: "send",
              value: function(e) {
                this._send({
                  message: e,
                  type: "outer",
                  frameId: this.id,
                  controllerId: this._controllerId
                });
              }
            },
            {
              key: "sendPersistent",
              value: function(e) {
                this._ensureMounted();
                var t = {
                  message: e,
                  type: "outer",
                  frameId: this.id,
                  controllerId: this._controllerId
                };
                (this._persistentMessages = [].concat(
                  l(this._persistentMessages),
                  [t]
                )),
                  this.loaded && nn(t);
              }
            },
            {
              key: "resolve",
              value: function(e, t) {
                this._requests[e] && this._requests[e].resolve(t);
              }
            },
            {
              key: "reject",
              value: function(e, t) {
                this._requests[e] && this._requests[e].reject(t);
              }
            },
            {
              key: "_send",
              value: function(e) {
                this._ensureMounted(),
                  this.loaded
                    ? nn(e)
                    : (this._queuedMessages = [].concat(
                        l(this._queuedMessages),
                        [e]
                      ));
              }
            },
            {
              key: "appendTo",
              value: function(e) {
                e.appendChild(this._iframe);
              }
            },
            {
              key: "unmount",
              value: function() {
                (this.loaded = !1), this._emit("unload");
              }
            },
            {
              key: "destroy",
              value: function() {
                this.unmount();
                var e = this._iframe.parentElement;
                e && e.removeChild(this._iframe), this._emit("destroy");
              }
            },
            {
              key: "_ensureMounted",
              value: function() {
                this._isMounted() || this.unmount();
              }
            },
            {
              key: "_isMounted",
              value: function() {
                return !!document.body && document.body.contains(this._iframe);
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var t = window.location.href.toString(),
                  n = St(t),
                  r = n ? n.origin : "",
                  o =
                    e.queryString && "string" == typeof e.queryString
                      ? e.queryString
                      : Kt(
                          fn({}, e, {
                            origin: r,
                            referrer: t,
                            controllerId: this._controllerId
                          })
                        ),
                  i = document.createElement("iframe");
                return (
                  i.setAttribute("frameborder", "0"),
                  i.setAttribute("allowTransparency", "true"),
                  i.setAttribute("scrolling", "no"),
                  i.setAttribute("name", this.id),
                  i.setAttribute("allowpaymentrequest", "true"),
                  (i.src = Rt(this.type) + "#" + o),
                  i
                );
              }
            }
          ]),
          t
        );
      })(dn),
      mn = _n,
      yn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      vn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      bn = {
        border: "none",
        margin: "0",
        padding: "0",
        width: "1px",
        "min-width": "100%",
        overflow: "hidden",
        display: "block",
        visibility: "hidden",
        position: "fixed",
        height: "1px",
        "pointer-events": "none",
        "user-select": "none"
      },
      gn = (function(e) {
        function t(e, n, r) {
          h(this, t);
          var o = _(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)
          );
          if (
            ((o.autoload = r.autoload || !1),
            "complete" === document.readyState)
          )
            o._ensureMounted();
          else {
            var i = o._ensureMounted.bind(o);
            document.addEventListener("DOMContentLoaded", i),
              window.addEventListener("load", i),
              setTimeout(i, 5e3);
          }
          return o;
        }
        return (
          m(t, e),
          yn(t, [
            {
              key: "_ensureMounted",
              value: function() {
                vn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_ensureMounted",
                  this
                ).call(this),
                  this._isMounted() || this._autoMount();
              }
            },
            {
              key: "_autoMount",
              value: function() {
                if (document.body) this.appendTo(document.body);
                else if (
                  "complete" === document.readyState ||
                  "interactive" === document.readyState
                )
                  throw new Pe(
                    "Stripe.js requires that your page has a <body> element."
                  );
                this.autoload && (this.loaded = !0);
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var n = vn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_createIFrame",
                  this
                ).call(this, e);
                return (
                  n.setAttribute("aria-hidden", "true"),
                  n.setAttribute("allowpaymentrequest", "true"),
                  n.setAttribute("tabIndex", "-1"),
                  Zt(n, bn),
                  n
                );
              }
            }
          ]),
          t
        );
      })(mn),
      En = gn,
      wn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Sn = (function(e) {
        function t() {
          return (
            y(this, t),
            v(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          b(t, e),
          wn(t, [
            {
              key: "_generateId",
              value: function() {
                return this._controllerId;
              }
            }
          ]),
          t
        );
      })(En),
      kn = Sn,
      Pn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      On = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      An = {
        border: "none",
        margin: "0",
        padding: "0",
        width: "1px",
        "min-width": "100%",
        overflow: "hidden",
        display: "block",
        "user-select": "none"
      },
      Tn = (function(e) {
        function t() {
          return (
            g(this, t),
            E(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          w(t, e),
          Pn(t, [
            {
              key: "update",
              value: function(e) {
                this.send({ action: "stripe-user-update", payload: e });
              }
            },
            {
              key: "updateStyle",
              value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                  t._iframe.style[n] = e[n];
                });
              }
            },
            {
              key: "focus",
              value: function() {
                this.loaded &&
                  this.send({ action: "stripe-user-focus", payload: {} });
              }
            },
            {
              key: "blur",
              value: function() {
                this.loaded &&
                  (this._iframe.contentWindow.blur(), this._iframe.blur());
              }
            },
            {
              key: "clear",
              value: function() {
                this.send({ action: "stripe-user-clear", payload: {} });
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var n = On(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_createIFrame",
                  this
                ).call(this, e);
                return (
                  n.setAttribute("title", "Secure payment input frame"),
                  Zt(n, An),
                  n
                );
              }
            }
          ]),
          t
        );
      })(mn),
      In = Tn,
      Rn = function(e, t) {
        var n = !1;
        return function() {
          if (n) throw new Pe(t);
          n = !0;
          try {
            return e.apply(void 0, arguments).then(
              function(e) {
                return (n = !1), e;
              },
              function(e) {
                throw ((n = !1), e);
              }
            );
          } catch (e) {
            throw ((n = !1), e);
          }
        };
      },
      Nn = function(e) {
        var t = e;
        return function() {
          t && (t.apply(void 0, arguments), (t = null));
        };
      },
      Cn = function() {
        return en(function(e) {
          var t = e.style,
            n = t.position,
            r = t.top,
            o = t.left,
            i = t.bottom,
            a = t.right,
            c = t.overflow,
            s = document.documentElement
              ? document.documentElement.style
              : { overflow: "" },
            u = s.overflow,
            l = window,
            p = l.pageXOffset,
            d = l.pageYOffset,
            f = document.documentElement
              ? window.innerWidth - document.documentElement.offsetWidth
              : 0,
            h = document.documentElement
              ? window.innerHeight - document.documentElement.offsetHeight
              : 0;
          return (
            (e.style.position = "fixed"),
            (e.style.overflow = "hidden"),
            document.documentElement &&
              (document.documentElement.style.overflow = "visible"),
            (e.style.top = -d + "px"),
            (e.style.left = -p + "px"),
            (e.style.right = f + "px"),
            (e.style.bottom = h + "px"),
            Nn(function() {
              (e.style.position = n),
                (e.style.top = r),
                (e.style.left = o),
                (e.style.bottom = i),
                (e.style.right = a),
                (e.style.overflow = c),
                document.documentElement &&
                  (document.documentElement.style.overflow = u),
                window.scrollTo(p, d);
            })
          );
        });
      },
      Mn = function(e, t) {
        return e ? window.getComputedStyle(e, t) : null;
      },
      jn = Mn,
      Ln = function(e, t) {
        var n = Array.prototype.slice
          .call(
            document.querySelectorAll(
              "a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]"
            )
          )
          .filter(function(e) {
            var t = e.getAttribute("tabindex"),
              n = !t || parseInt(t, 10) >= 0,
              r = e.getBoundingClientRect(),
              o = jn(e),
              i =
                r.width > 0 &&
                r.height > 0 &&
                o &&
                "hidden" !== o.getPropertyValue("visibility");
            return n && i;
          });
        return n[
          Ce(n, function(t) {
            return t === e || e.contains(t);
          }) + ("previous" === t ? -1 : 1)
        ];
      },
      Dn = function(e) {
        var t = [],
          n = je(document.querySelectorAll("*"), function(n) {
            var r = n.getAttribute("tabindex") || "";
            e !== n && (n.tabIndex = -1), t.push({ element: n, tabIndex: r });
          });
        return Nn(function() {
          n.then(function() {
            return je(t, function(e) {
              var t = e.element,
                n = e.tabIndex;
              "" === n
                ? t.removeAttribute("tabindex")
                : t.setAttribute("tabindex", n);
            });
          });
        });
      },
      xn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      qn = {
        display: "block",
        position: "fixed",
        "z-index": "2147483647",
        background: "rgba(0,0,0,0)",
        transition: "background 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "will-change": "background",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      },
      Fn = xn({}, qn, { background: "rgba(0,0,0,0.5)" }),
      Bn = function e(t) {
        var n = this,
          r = t.lockScrolling,
          o = t.lockFocus,
          i = t.lockFocusOn;
        S(this, e),
          (this.domElement = document.createElement("div")),
          (this._runOnHide = []),
          (this.mount = function() {
            en(function(e) {
              (n.domElement.style.display = "none"),
                e.contains(n.domElement) ||
                  e.insertBefore(n.domElement, e.firstChild);
            });
          }),
          (this.show = function() {
            if ((Zt(n.domElement, qn), n._lockScrolling)) {
              var e = Cn();
              n._runOnHide.push(e);
            }
            if (n._lockFocus) {
              var t = Dn(n._lockFocusOn);
              n._runOnHide.push(t);
            }
          }),
          (this.fadeIn = function() {
            setTimeout(function() {
              Zt(n.domElement, Fn);
            });
          }),
          (this.fadeOut = function() {
            return new Re(function(e) {
              Zt(n.domElement, qn),
                setTimeout(e, 500),
                n.domElement.addEventListener("transitionend", e);
            }).then(function() {
              for (; n._runOnHide.length; ) n._runOnHide.pop()();
            });
          }),
          (this.unmount = function() {
            en(function(e) {
              e.removeChild(n.domElement);
            });
          }),
          (this._lockScrolling = !!r),
          (this._lockFocus = !!o),
          (this._lockFocusOn = i || null);
      },
      Un = Bn,
      Hn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      zn = {
        position: "absolute",
        left: "0",
        top: "0",
        height: "100%",
        width: "100%"
      },
      Yn = (function(e) {
        function t(e, n, r) {
          k(this, t);
          var o = P(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r)
          );
          return (
            (o._autoMount = function() {
              o.appendTo(o._backdrop.domElement), o._backdrop.mount();
            }),
            (o.show = function() {
              o._backdrop.show(), Zt(o._iframe, zn);
            }),
            (o.fadeInBackdrop = function() {
              o._backdrop.fadeIn();
            }),
            (o._backdropFadeoutPromise = null),
            (o.fadeOutBackdrop = function() {
              return (
                o._backdropFadeoutPromise ||
                  (o._backdropFadeoutPromise = o._backdrop.fadeOut()),
                o._backdropFadeoutPromise
              );
            }),
            (o.destroy = function() {
              return o.fadeOutBackdrop().then(function() {
                o._backdrop.unmount(),
                  Hn(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "destroy",
                    o
                  ).call(o);
              });
            }),
            (o._backdrop = new Un({
              lockScrolling: !0,
              lockFocus: !0,
              lockFocusOn: o._iframe
            })),
            o._autoMount(),
            o
          );
        }
        return O(t, e), t;
      })(mn),
      Gn = Yn,
      Wn =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Kn = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Vn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(t);
          return null === i ? void 0 : e(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      Jn = {
        display: "block",
        position: "absolute",
        "z-index": "1000",
        width: "1px",
        "min-width": "100%",
        margin: "2px 0 0 0",
        padding: "0",
        border: "none",
        overflow: "hidden"
      },
      Qn = (function(e) {
        function t() {
          return (
            A(this, t),
            T(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          I(t, e),
          Kn(t, [
            {
              key: "updateStyle",
              value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                  t._iframe.style[n] = e[n];
                });
              }
            },
            {
              key: "update",
              value: function(e) {
                this.send({ action: "stripe-user-update", payload: e });
              }
            },
            {
              key: "_createIFrame",
              value: function(e) {
                var n = Vn(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  "_createIFrame",
                  this
                ).call(this, Wn({}, e, { isSecondaryFrame: !0 }));
                return Zt(n, Jn), (n.style.height = "0"), n;
              }
            }
          ]),
          t
        );
      })(mn),
      $n = Qn,
      Zn = function(e) {
        var t = St(e),
          n = t ? t.host : "";
        return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/);
      },
      Xn = function(e, t) {
        var n = St(e),
          r = St(t);
        return !(!n || !r) && n.origin === r.origin;
      },
      er = function(e) {
        return Xn(e, "https://js.stripe.com/v3/");
      },
      tr = function(e) {
        return er(e) || Zn(e);
      },
      nr = [
        "button",
        "checkbox",
        "file",
        "hidden",
        "image",
        "submit",
        "radio",
        "reset"
      ],
      rr = function(e) {
        var t = e.tagName;
        if (e.isContentEditable || "TEXTAREA" === t) return !0;
        if ("INPUT" !== t) return !1;
        var n = e.getAttribute("type");
        return -1 === nr.indexOf(n);
      },
      or = rr,
      ir = function(e) {
        return /Edge\//i.test(e);
      },
      ar = function(e) {
        return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e);
      },
      cr = function(e) {
        return /SamsungBrowser/.test(e);
      },
      sr = function(e) {
        return /iPad|iPhone/i.test(e) && !ar(e);
      },
      ur = function(e) {
        return /Android/i.test(e) && !ar(e);
      },
      lr = window.navigator.userAgent,
      pr = ir(lr),
      dr =
        ((function(e) {
          /Edge\/((1[0-6]\.)|0\.)/i.test(e);
        })(lr),
        ar(lr)),
      fr =
        ((function(e) {
          /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e);
        })(lr),
        sr(lr)),
      hr =
        ((function(e) {
          sr(e) || ur(e);
        })(lr),
        ur(lr),
        (function(e) {
          /Android 4\./i.test(e) && !/Chrome/i.test(e) && ur(e);
        })(lr),
        (function(e) {
          return /^((?!chrome|android).)*safari/i.test(e) && !cr(e);
        })(lr)),
      _r =
        ((function(e) {
          /Firefox\//i.test(e);
        })(lr),
        (function(e) {
          /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e);
        })(lr),
        cr(lr)),
      mr =
        ((function(e) {
          /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e);
        })(lr),
        (function(e) {
          return (
            /AppleWebKit/i.test(e) && !/Chrome/i.test(e) && !ir(e) && !ar(e)
          );
        })(lr)),
      yr = (function(e) {
        return /Chrome/i.test(e) && !ir(e);
      })(lr),
      vr =
        ((ye = {}),
        R(ye, Ct.card, {
          unique: !0,
          conflict: [Ct.cardNumber, Ct.cardExpiry, Ct.cardCvc, Ct.postalCode],
          beta: !1
        }),
        R(ye, Ct.cardNumber, { unique: !0, conflict: [Ct.card], beta: !1 }),
        R(ye, Ct.cardExpiry, { unique: !0, conflict: [Ct.card], beta: !1 }),
        R(ye, Ct.cardCvc, { unique: !0, conflict: [Ct.card], beta: !1 }),
        R(ye, Ct.postalCode, { unique: !0, conflict: [Ct.card], beta: !1 }),
        R(ye, Ct.paymentRequestButton, { unique: !0, conflict: [], beta: !1 }),
        R(ye, Ct.iban, { unique: !0, conflict: [], beta: !1 }),
        R(ye, Ct.idealBank, { unique: !0, conflict: [], beta: !1 }),
        R(ye, Ct.auBankAccount, { unique: !0, beta: !0, conflict: [] }),
        R(ye, Ct.fpxBank, { unique: !0, beta: !0, conflict: [] }),
        ye),
      br = vr,
      gr =
        ((ve = {}),
        N(ve, Ct.card, Ot.CARD_ELEMENT),
        N(ve, Ct.cardNumber, Ot.CARD_ELEMENT),
        N(ve, Ct.cardExpiry, Ot.CARD_ELEMENT),
        N(ve, Ct.cardCvc, Ot.CARD_ELEMENT),
        N(ve, Ct.postalCode, Ot.CARD_ELEMENT),
        N(ve, Ct.paymentRequestButton, Ot.PAYMENT_REQUEST_ELEMENT),
        N(ve, Ct.iban, Ot.IBAN_ELEMENT),
        N(ve, Ct.idealBank, Ot.IDEAL_BANK_ELEMENT),
        N(ve, Ct.auBankAccount, Ot.AU_BANK_ACCOUNT_ELEMENT),
        N(ve, Ct.fpxBank, Ot.FPX_BANK_ELEMENT),
        ve),
      Er = gr,
      wr = ["brand"],
      Sr = ["country", "bankName"],
      kr = ["bankName", "branchName"],
      Pr =
        ((be = {}),
        C(be, Ct.card, wr),
        C(be, Ct.cardNumber, wr),
        C(be, Ct.iban, Sr),
        C(be, Ct.auBankAccount, kr),
        be),
      Or =
        ((ge = {}),
        C(ge, Ct.idealBank, { secondary: Ct.idealBankSecondary }),
        C(ge, Ct.fpxBank, { secondary: Ct.fpxBankSecondary }),
        ge),
      Ar =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Tr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Ir = !1,
      Rr = function(e, t) {
        return (
          document.activeElement === e._iframe ||
          (e._iframe.parentElement && document.activeElement === t)
        );
      },
      Nr = function(e) {
        return "object" === (void 0 === e ? "undefined" : Tr(e)) &&
          null !== e &&
          "IntegrationError" === e.name
          ? new Pe("string" == typeof e.message ? e.message : "")
          : e;
      },
      Cr = function e(t) {
        j(this, e), Mr.call(this);
        var n = t.apiKey,
          r = t.stripeAccount,
          o = t.stripeJsId,
          i = t.locale;
        (this._id = zt("__privateStripeController")),
          (this._stripeJsId = o),
          (this._apiKey = n),
          (this._stripeAccount = r),
          (this._controllerFrame = new kn(Ot.CONTROLLER, this._id, Ar({}, t))),
          (this._frames = {}),
          (this._requests = {}),
          this._setupPostMessage(),
          (this._handleMessage = cn(this._handleMessage, this)),
          this.action.fetchLocale({ locale: i || "auto" });
      },
      Mr = function() {
        var e = this;
        (this._sendCAReq = function(t) {
          var n = zt(t.tag);
          return new Re(function(r, o) {
            (e._requests[n] = { resolve: r, reject: o }),
              e._controllerFrame.send({
                action: "stripe-safe-controller-action-request",
                payload: { nonce: n, caReq: t }
              });
          });
        }),
          (this.livemode = function() {
            var t = e._apiKey;
            return /^pk_test_/.test(t)
              ? "testmode"
              : /^pk_live_/.test(t)
              ? "livemode"
              : "unknown";
          }),
          (this.action = {
            retrievePaymentIntent: function(t) {
              return e._sendCAReq({ tag: "RETRIEVE_PAYMENT_INTENT", value: t });
            },
            confirmPaymentIntent: function(t) {
              return e._sendCAReq({ tag: "CONFIRM_PAYMENT_INTENT", value: t });
            },
            confirmSetupIntent: function(t) {
              return e._sendCAReq({ tag: "CONFIRM_SETUP_INTENT", value: t });
            },
            retrieveSetupIntent: function(t) {
              return e._sendCAReq({ tag: "RETRIEVE_SETUP_INTENT", value: t });
            },
            fetchLocale: function(t) {
              return e._sendCAReq({ tag: "FETCH_LOCALE", value: t });
            },
            updateCSSFonts: function(t) {
              return e._sendCAReq({ tag: "UPDATE_CSS_FONTS", value: t });
            },
            createApplePaySession: function(t) {
              return e._sendCAReq({
                tag: "CREATE_APPLE_PAY_SESSION",
                value: t
              });
            },
            retrieveSource: function(t) {
              return e._sendCAReq({ tag: "RETRIEVE_SOURCE", value: t });
            },
            tokenizeWithElement: function(t) {
              return e._sendCAReq({ tag: "TOKENIZE_WITH_ELEMENT", value: t });
            },
            tokenizeCvcUpdate: function(t) {
              return e._sendCAReq({ tag: "TOKENIZE_CVC_UPDATE", value: t });
            },
            tokenizeWithData: function(t) {
              return e._sendCAReq({ tag: "TOKENIZE_WITH_DATA", value: t });
            },
            createSourceWithElement: function(t) {
              return e._sendCAReq({
                tag: "CREATE_SOURCE_WITH_ELEMENT",
                value: t
              });
            },
            createSourceWithData: function(t) {
              return e._sendCAReq({ tag: "CREATE_SOURCE_WITH_DATA", value: t });
            },
            createPaymentMethodWithElement: function(t) {
              return e._sendCAReq({
                tag: "CREATE_PAYMENT_METHOD_WITH_ELEMENT",
                value: t
              });
            },
            createPaymentMethodWithData: function(t) {
              return e._sendCAReq({
                tag: "CREATE_PAYMENT_METHOD_WITH_DATA",
                value: t
              });
            },
            createPaymentPage: function(t) {
              return e._sendCAReq({ tag: "CREATE_PAYMENT_PAGE", value: t });
            },
            createPaymentPageWithSession: function(t) {
              return e._sendCAReq({
                tag: "CREATE_PAYMENT_PAGE_WITH_SESSION",
                value: t
              });
            },
            createRadarSession: function(t) {
              return e._sendCAReq({ tag: "CREATE_RADAR_SESSION", value: t });
            },
            authenticate3DS2: function(t) {
              return e._sendCAReq({ tag: "AUTHENTICATE_3DS2", value: t });
            }
          }),
          (this.createElementFrame = function(t, n) {
            var r = n.groupId,
              o = M(n, ["groupId"]),
              i = new In(
                t,
                e._id,
                Ar({}, o, { keyMode: Be(e._apiKey), apiKey: e._apiKey })
              );
            return e._setupFrame(i, t, r);
          }),
          (this.createSecondaryElementFrame = function(t, n) {
            var r = n.groupId,
              o = M(n, ["groupId"]),
              i = new $n(t, e._id, Ar({}, o));
            return e._setupFrame(i, t, r);
          }),
          (this.createHiddenFrame = function(t, n) {
            var r = new En(t, e._id, n);
            return e._setupFrame(r, t);
          }),
          (this.createLightboxFrame = function(t, n) {
            var r = new Gn(t, e._id, n);
            return e._setupFrame(r, t);
          }),
          (this._setupFrame = function(t, n, r) {
            return (
              (e._frames[t.id] = t),
              e._controllerFrame.sendPersistent({
                action: "stripe-user-createframe",
                payload: { newFrameId: t.id, frameType: n, groupId: r }
              }),
              t._on("unload", function() {
                e._controllerFrame.sendPersistent({
                  action: "stripe-frame-unload",
                  payload: { unloadedFrameId: t.id }
                });
              }),
              t._on("destroy", function() {
                delete e._frames[t.id],
                  e._controllerFrame.sendPersistent({
                    action: "stripe-frame-destroy",
                    payload: { destroyedFrameId: t.id }
                  });
              }),
              t._on("load", function() {
                e._controllerFrame.sendPersistent({
                  action: "stripe-frame-load",
                  payload: { loadedFrameId: t.id }
                }),
                  e._controllerFrame.loaded &&
                    t.send({ action: "stripe-controller-load", payload: {} });
              }),
              t
            );
          }),
          (this.report = function(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            e._controllerFrame.send({
              action: "stripe-controller-report",
              payload: { event: t, data: n }
            });
          }),
          (this.warn = function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            e._controllerFrame.send({
              action: "stripe-controller-warn",
              payload: { args: n }
            });
          }),
          (this.controllerFor = function() {
            return "outer";
          }),
          (this._setupPostMessage = function() {
            window.addEventListener("message", function(t) {
              var n = t.data,
                r = t.origin,
                o = rn(n);
              o && Xn(qt, r) && e._handleMessage(o);
            });
          }),
          (this._handleMessage = function(t) {
            var n = t.controllerId,
              r = t.frameId,
              o = t.message,
              i = e._frames[r];
            if (n === e._id)
              switch (o.action) {
                case "stripe-frame-event":
                  var a = o.payload,
                    c = a.event,
                    s = a.data;
                  if (i) {
                    if (fr) {
                      var u = i._iframe.parentElement,
                        l =
                          u && u.querySelector(".__PrivateStripeElement-input");
                      if ("focus" === c && !Ir && !Rr(i, l)) {
                        l && l.focus(), (Ir = !0);
                        break;
                      }
                      if ("blur" === c && Ir) {
                        Ir = !1;
                        break;
                      }
                      "blur" === c &&
                        setTimeout(function() {
                          var e = document.activeElement;
                          if (e && !Rr(i, l) && !or(e)) {
                            var t =
                              u &&
                              u.querySelector(
                                ".__PrivateStripeElement-safariInput"
                              );
                            if (t) {
                              var n = t;
                              (n.disabled = !1),
                                n.focus(),
                                n.blur(),
                                (n.disabled = !0);
                            }
                            e.focus();
                          }
                        }, 400);
                    }
                    i._emit(c, s);
                  }
                  break;
                case "stripe-frame-action-response":
                  i && i.resolve(o.payload.nonce, o.payload.faRes);
                  break;
                case "stripe-frame-action-error":
                  i && i.reject(o.payload.nonce, Nr(o.payload.faErr));
                  break;
                case "stripe-frame-error":
                  throw new Pe(o.payload.message);
                case "stripe-integration-error":
                  i &&
                    i._emit("__privateIntegrationError", {
                      message: o.payload.message
                    });
                  break;
                case "stripe-controller-load":
                  e._controllerFrame._emit("load"),
                    Object.keys(e._frames).forEach(function(t) {
                      return e._frames[t].send({
                        action: "stripe-controller-load",
                        payload: {}
                      });
                    });
                  break;
                case "stripe-safe-controller-action-response":
                  e._requests[o.payload.nonce] &&
                    e._requests[o.payload.nonce].resolve(o.payload.caRes);
                  break;
                case "stripe-safe-controller-action-error":
                  e._requests[o.payload.nonce] &&
                    e._requests[o.payload.nonce].reject(Nr(o.payload.caErr));
              }
          });
      },
      jr = Cr,
      Lr = function() {
        var e = document.querySelectorAll("meta[name=viewport][content]"),
          t = e[e.length - 1];
        return t && t instanceof HTMLMetaElement ? t.content : "";
      },
      Dr = function(e) {
        Lr().match(/width=device-width/) ||
          e(
            'Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/stripe-js/elements/quickstart#viewport-meta-requirements'
          );
      },
      xr = {
        checkout_beta_2: "checkout_beta_2",
        checkout_beta_3: "checkout_beta_3",
        checkout_beta_4: "checkout_beta_4",
        payment_intent_beta_1: "payment_intent_beta_1",
        payment_intent_beta_2: "payment_intent_beta_2",
        payment_intent_beta_3: "payment_intent_beta_3",
        card_payment_method_beta_1: "card_payment_method_beta_1",
        acknowledge_ie9_deprecation: "acknowledge_ie9_deprecation",
        cvc_update_beta_1: "cvc_update_beta_1",
        google_pay_beta_1: "google_pay_beta_1",
        checkout_pm_types: "checkout_pm_types",
        au_bank_account_beta_1: "au_bank_account_beta_1",
        au_bank_account_beta_2: "au_bank_account_beta_2",
        bacs_debit_beta: "bacs_debit_beta",
        fpx_bank_beta_1: "fpx_bank_beta_1",
        ideal_pm_beta_1: "ideal_pm_beta_1",
        sepa_pm_beta_1: "sepa_pm_beta_1"
      },
      qr = Object.keys(xr),
      Fr = function(e, t) {
        return e.indexOf(t) >= 0;
      },
      Br =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ur =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Hr = function(e) {
        return (
          e &&
          "object" === (void 0 === e ? "undefined" : Ur(e)) &&
          (e.constructor === Array || e.constructor === Object)
        );
      },
      zr = function(e) {
        return Hr(e)
          ? Array.isArray(e)
            ? e.slice(0, e.length)
            : Br({}, e)
          : e;
      },
      Yr = function e(t) {
        return function() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          if (Array.isArray(r[0]) && t) return zr(r[0]);
          var i = Array.isArray(r[0]) ? [] : {};
          return (
            r.forEach(function(n) {
              n &&
                Object.keys(n).forEach(function(r) {
                  var o = i[r],
                    a = n[r],
                    c = Hr(o) && !(t && Array.isArray(o));
                  "object" === (void 0 === a ? "undefined" : Ur(a)) && c
                    ? (i[r] = e(t)(o, zr(a)))
                    : void 0 !== a
                    ? (i[r] = Hr(a) ? e(t)(a) : zr(a))
                    : void 0 !== o && (i[r] = o);
                });
            }),
            i
          );
        };
      },
      Gr = (Yr(!1), Yr(!0)),
      Wr = (function(e) {
        function t() {
          L(this, t);
          var e = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (e.name = "NetworkError"), (e.type = "network_error"), e;
        }
        return x(t, e), t;
      })(Error),
      Kr = Wr,
      Vr =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Jr = {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      Qr = function(e) {
        return (
          Object.keys(Jr).forEach(function(t) {
            e.setRequestHeader(t, Jr[t]);
          }),
          e
        );
      },
      $r = function e(t) {
        return new Re(function(n, r) {
          var o = t.method,
            i = t.url,
            a = t.data,
            c = t.withCredentials,
            s = a ? Kt(a) : "",
            u = "GET" === o && s ? i + "?" + s : i,
            l = "GET" === o ? "" : s,
            p = new XMLHttpRequest();
          c && (p.withCredentials = c),
            p.open(o, u, !0),
            Qr(p),
            (p.onreadystatechange = function() {
              4 === p.readyState &&
                ((p.onreadystatechange = function() {}),
                0 === p.status
                  ? c
                    ? r(new Kr())
                    : e(Vr({}, t, { withCredentials: !0 })).then(n, r)
                  : n(p));
            });
          try {
            p.send(l);
          } catch (e) {
            r(e);
          }
        });
      },
      Zr = $r,
      Xr =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      eo = function(e, t) {
        var n = /@font-face[ ]?{[^}]*}/g,
          r = e.match(n);
        if (!r) throw new Pe("No @font-face rules found in file from " + t);
        return r;
      },
      to = function(e) {
        var t = e.match(/@font-face[ ]?{([^}]*)}/);
        return t ? t[1] : "";
      },
      no = function(e, t) {
        var n = e.replace(/\/\*.*\*\//g, "").trim(),
          r = n.length && /;$/.test(n) ? n : n + ";",
          o = r.match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
        if (!o)
          throw new Pe(
            "Found @font-face rule containing no valid font-properties in file from " +
              t
          );
        return o;
      },
      ro = function(e, t) {
        var n = e.indexOf(":");
        if (-1 === n)
          throw new Pe(
            "Invalid css declaration in file from " + t + ': "' + e + '"'
          );
        var r = e.slice(0, n).trim(),
          o = Bt[r];
        if (!o)
          throw new Pe(
            "Unsupported css property in file from " + t + ': "' + r + '"'
          );
        return { property: o, value: e.slice(n + 1).trim() };
      },
      oo = function(e, t) {
        var n = e.reduce(function(e, n) {
          var r = ro(n, t),
            o = r.property,
            i = r.value;
          return Xr({}, e, q({}, o, i));
        }, {});
        return (
          ["family", "src"].forEach(function(e) {
            if (!n[e])
              throw new Pe(
                "Missing css property in file from " + t + ': "' + Ft[e] + '"'
              );
          }),
          n
        );
      },
      io = function(e) {
        return Zr({ url: e, method: "GET" })
          .then(function(e) {
            return e.responseText;
          })
          .then(function(t) {
            return eo(t, e).map(function(t) {
              var n = to(t),
                r = no(n, e);
              return oo(r, e);
            });
          });
      },
      ao = io,
      co = function(e, t) {
        return e.reduce(function(e, n) {
          return e.then(function(e) {
            return "SATISFIED" === e.type
              ? e
              : n().then(function(e) {
                  return t(e)
                    ? { type: "SATISFIED", value: e }
                    : { type: "UNSATISFIED" };
                });
          });
        }, Re.resolve({ type: "UNSATISFIED" }));
      },
      so = co,
      uo =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      lo = {
        success: "success",
        fail: "fail",
        invalid_shipping_address: "invalid_shipping_address"
      },
      po = {
        fail: "fail",
        invalid_payer_name: "invalid_payer_name",
        invalid_payer_email: "invalid_payer_email",
        invalid_payer_phone: "invalid_payer_phone",
        invalid_shipping_address: "invalid_shipping_address"
      },
      fo = { shipping: "shipping", delivery: "delivery", pickup: "pickup" },
      ho = uo({ success: "success" }, po),
      _o = { merchantCapabilities: ["supports3DS"], displayItems: [] },
      mo = yt({ amount: lt, label: rt, pending: Je(it) }),
      yo = yt({ amount: ut, label: rt, pending: Je(it) }),
      vo = yt({
        amount: ut,
        label: rt,
        pending: Je(it),
        id: ot(rt, function() {
          return zt("shippingOption");
        }),
        detail: ot(rt, function() {
          return "";
        })
      }),
      bo = Xe.apply(void 0, F(Object.keys(fo))),
      go = yt({ origin: rt, name: rt }),
      Eo = yt({
        displayItems: Je(dt(yo)),
        shippingOptions: Je(ft("id")(dt(vo))),
        total: mo,
        requestShipping: Je(it),
        requestPayerName: Je(it),
        requestPayerEmail: Je(it),
        requestPayerPhone: Je(it),
        shippingType: Je(bo),
        currency: nt,
        country: tt,
        jcbEnabled: Je(it),
        __billingDetailsEmailOverride: Je(rt),
        __minApplePayVersion: Je(at),
        __merchantDetails: Je(go),
        __skipGooglePayInPaymentRequest: Je(it)
      }),
      wo = mt({
        currency: Je(nt),
        displayItems: Je(dt(yo)),
        shippingOptions: Je(ft("id")(dt(vo))),
        total: Je(mo)
      }),
      So = function(e, t) {
        var n = [
          "invalid_payer_name",
          "invalid_payer_email",
          "invalid_payer_phone"
        ];
        return Xe.apply(void 0, F(Object.keys(lo)))(
          -1 !== n.indexOf(e) ? "fail" : e,
          t
        );
      },
      ko = yt({
        displayItems: Je(dt(yo)),
        shippingOptions: Je(ft("id")(dt(vo))),
        total: Je(mo),
        status: So
      }),
      Po = Xe.apply(void 0, F(Object.keys(ho))),
      Oo = function(e) {
        var t = Fr(e, xr.google_pay_beta_1);
        return hr
          ? t
            ? ["APPLE_PAY", "GOOGLE_PAY"]
            : ["APPLE_PAY"]
          : t
          ? ["GOOGLE_PAY", "BROWSER"]
          : ["BROWSER"];
      },
      Ao = Oo,
      To = function() {
        try {
          return window.location.origin === window.top.location.origin;
        } catch (e) {
          return !1;
        }
      },
      Io = 2,
      Ro = (function(e) {
        var t = {};
        return function(n) {
          if (void 0 !== t[n]) return t[n];
          var r = e(n);
          return (t[n] = r), r;
        };
      })(function(e) {
        return window.ApplePaySession.canMakePaymentsWithActiveCard(e);
      }),
      No = function(e, t, n, r) {
        var o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Io,
          i = Math.max(Io, o);
        if (window.ApplePaySession) {
          if (To()) {
            if (n && "https:" !== window.location.protocol)
              return (
                window.console &&
                  window.console.warn(
                    "To test Apple Pay, you must serve this page over HTTPS."
                  ),
                Re.resolve(!1)
              );
            if (window.ApplePaySession.supportsVersion(i)) {
              var a = t ? [e, t] : [e],
                c = "merchant." + a.join(".") + ".stripe";
              return Ro(c).then(function(o) {
                if (
                  (r("pr.apple_pay.can_make_payment_native_response", {
                    available: o
                  }),
                  n && !o && window.console)
                ) {
                  var i = t ? "or stripeAccount parameter (" + t + ") " : "";
                  window.console.warn(
                    "Either you do not have a card saved to your Wallet or the current domain (" +
                      e +
                      ") " +
                      i +
                      "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain."
                  );
                }
                return o;
              });
            }
            return (
              n &&
                window.console &&
                window.console.warn(
                  "This version of Safari does not support ApplePay JS version " +
                    i +
                    "."
                ),
              Re.resolve(!1)
            );
          }
          return Re.resolve(!1);
        }
        return Re.resolve(!1);
      },
      Co = ["mastercard", "visa"],
      Mo = [
        "AT",
        "AU",
        "BE",
        "CA",
        "CH",
        "DE",
        "DK",
        "EE",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "HK",
        "IE",
        "IT",
        "JP",
        "LT",
        "LU",
        "LV",
        "MX",
        "NL",
        "NO",
        "NZ",
        "PL",
        "PT",
        "SE",
        "SG",
        "US"
      ],
      jo = function(e, t) {
        var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(Co) : Co;
        return -1 !== Mo.indexOf(e) ? ["amex"].concat(B(n)) : n;
      },
      Lo = function(e, t) {
        return jo(e, t).reduce(function(e, t) {
          return "mastercard" === t
            ? [].concat(B(e), ["masterCard"])
            : "diners" === t
            ? e
            : [].concat(B(e), [t]);
        }, []);
      },
      Do = {
        bif: 1,
        clp: 1,
        djf: 1,
        gnf: 1,
        jpy: 1,
        kmf: 1,
        krw: 1,
        mga: 1,
        pyg: 1,
        rwf: 1,
        vnd: 1,
        vuv: 1,
        xaf: 1,
        xof: 1,
        xpf: 1
      },
      xo = function(e) {
        var t = Do[e.toLowerCase()] || 100;
        return { unitSize: 1 / t, fractionDigits: Math.log(t) / Math.log(10) };
      },
      qo = function(e, t) {
        var n = xo(t);
        return (e * n.unitSize).toFixed(n.fractionDigits);
      },
      Fo =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Bo = function(e, t) {
        return {
          amount: qo(e.amount, t.currency),
          label: e.label,
          type: e.pending ? "pending" : "final"
        };
      },
      Uo = function(e, t) {
        return {
          amount: qo(e.amount, t.currency),
          label: e.label,
          detail: e.detail,
          identifier: e.id
        };
      },
      Ho = function(e) {
        return function(t) {
          return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null;
        };
      },
      zo =
        ((Ee = {}),
        U(Ee, ho.success, 0),
        U(Ee, ho.fail, 1),
        U(Ee, ho.invalid_payer_name, 2),
        U(Ee, ho.invalid_shipping_address, 3),
        U(Ee, ho.invalid_payer_phone, 4),
        U(Ee, ho.invalid_payer_email, 4),
        Ee),
      Yo =
        ((we = {}),
        U(we, fo.pickup, "storePickup"),
        U(we, fo.shipping, "shipping"),
        U(we, fo.delivery, "delivery"),
        we),
      Go = {
        total: function(e) {
          return Bo(e.total, e);
        },
        lineItems: function(e) {
          return e.displayItems
            ? e.displayItems.map(function(t) {
                return Bo(t, e);
              })
            : [];
        },
        shippingMethods: function(e) {
          return e.shippingOptions
            ? e.shippingOptions.map(function(t) {
                return Uo(t, e);
              })
            : [];
        }
      },
      Wo = {
        shippingType: function(e) {
          var t = e.shippingType;
          if (!t) return null;
          var n = Yo[t];
          if (void 0 !== n) return n;
          throw new Pe("Invalid value for shippingType: " + t);
        },
        requiredBillingContactFields: function(e) {
          return e.requestPayerName ? ["postalAddress"] : null;
        },
        requiredShippingContactFields: function(e) {
          var t = [];
          return (
            e.requestShipping && t.push("postalAddress"),
            e.requestPayerEmail && t.push("email"),
            e.requestPayerPhone && t.push("phone"),
            t.length ? t : null
          );
        },
        countryCode: Ho("country"),
        currencyCode: Ho("currency"),
        merchantCapabilities: (function(e) {
          return function(t) {
            return t[e] || null;
          };
        })("merchantCapabilities"),
        supportedNetworks: function(e) {
          return Lo(e.country, e.jcbEnabled || !1);
        }
      },
      Ko = {
        status: function(e) {
          return zo[e.status] || 0;
        }
      },
      Vo = Fo({}, Go, Wo),
      Jo = Fo({}, Go, Ko),
      Qo = function(e) {
        var t = Fo({}, _o, e);
        return Object.keys(Vo).reduce(function(e, n) {
          var r = Vo[n],
            o = r(t);
          return null !== o ? Fo({}, e, U({}, n, o)) : e;
        }, {});
      },
      $o = function(e) {
        return Object.keys(Jo).reduce(function(t, n) {
          var r = Jo[n],
            o = r(e);
          return null !== o ? Fo({}, t, U({}, n, o)) : t;
        }, {});
      },
      Zo = function(e) {
        return "string" == typeof e ? e : null;
      },
      Xo = function(e) {
        return e ? Zo(e.phoneNumber) : null;
      },
      ei = function(e) {
        return e ? Zo(e.emailAddress) : null;
      },
      ti = function(e) {
        return e
          ? [e.givenName, e.familyName]
              .filter(function(e) {
                return e && "string" == typeof e;
              })
              .join(" ")
          : null;
      },
      ni = function(e) {
        var t = e.addressLines,
          n = e.countryCode,
          r = e.postalCode,
          o = e.administrativeArea,
          i = e.locality,
          a = e.phoneNumber,
          c = Zo(n);
        return {
          addressLine: Array.isArray(t)
            ? t.reduce(function(e, t) {
                return "string" == typeof t ? [].concat(H(e), [t]) : e;
              }, [])
            : [],
          country: c ? c.toUpperCase() : "",
          postalCode: Zo(r) || "",
          recipient: ti(e) || "",
          region: Zo(o) || "",
          city: Zo(i) || "",
          phone: Zo(a) || "",
          sortingCode: "",
          dependentLocality: "",
          organization: ""
        };
      },
      ri = function(e, t) {
        var n = e.identifier,
          r = e.label;
        return t.filter(function(e) {
          return e.id === n && e.label === r;
        })[0];
      },
      oi = function(e, t) {
        var n = e.shippingContact,
          r = e.shippingMethod,
          o = e.billingContact;
        return {
          shippingOption:
            r && t.shippingOptions && t.shippingOptions.length
              ? ri(r, t.shippingOptions)
              : null,
          shippingAddress: n ? ni(n) : null,
          payerEmail: ei(n),
          payerPhone: Xo(n),
          payerName: ti(o),
          methodName: "apple-pay"
        };
      },
      ii = oi,
      ai =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ci = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      si =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      ui = {
        australia: "AU",
        austria: "AT",
        canada: "CA",
        schweiz: "CH",
        deutschland: "DE",
        hongkong: "HK",
        saudiarabia: "SA",
        espaa: "ES",
        singapore: "SG",
        us: "US",
        usa: "US",
        unitedstatesofamerica: "US",
        unitedstates: "US",
        england: "GB",
        gb: "GB",
        uk: "GB",
        unitedkingdom: "GB"
      },
      li = function(e, t) {
        return e && "object" === (void 0 === e ? "undefined" : si(e))
          ? t(e)
          : null;
      },
      pi = (function() {
        function e(t) {
          var n = this;
          z(this, e),
            (this._onEvent = function() {}),
            (this.setEventHandler = function(e) {
              n._onEvent = e;
            }),
            (this.canMakePayment = function() {
              return No(
                window.location.hostname,
                n._authentication.accountId,
                Be(n._authentication.apiKey) === Fe.test,
                n._report,
                n._minimumVersion
              );
            }),
            (this.update = function(e) {
              (n._initialPaymentRequest = Gr(n._paymentRequestOptions, e)),
                n._initializeSessionState();
            }),
            (this.show = function() {
              n._initializeSessionState();
              var e = void 0;
              try {
                e = new window.ApplePaySession(
                  n._minimumVersion,
                  Qo(n._paymentRequestOptions)
                );
              } catch (e) {
                throw "Must create a new ApplePaySession from a user gesture handler." ===
                e.message
                  ? new Pe(
                      "show() must be called from a user gesture handler (such as a click handler, after the user clicks a button)."
                    )
                  : e;
              }
              (n._privateSession = e),
                n._setupSession(e, n._usesButtonElement()),
                e.begin(),
                (n._isShowing = !0);
            }),
            (this.abort = function() {
              n._privateSession && n._privateSession.abort();
            }),
            (this._warn = function(e) {}),
            (this._report = function(e, t) {
              n._controller.report(
                e,
                ai({}, t, {
                  backingLibrary: "APPLE_PAY",
                  usesButtonElement: n._usesButtonElement()
                })
              );
            }),
            (this._validateMerchant = function(e, t) {
              return function(r) {
                n._controller.action
                  .createApplePaySession({
                    data: {
                      validation_url: r.validationURL,
                      domain_name: window.location.hostname,
                      display_name: n._paymentRequestOptions.total.label
                    },
                    usesButtonElement: t
                  })
                  .then(function(t) {
                    if (n._isShowing)
                      switch (t.type) {
                        case "object":
                          e.completeMerchantValidation(
                            JSON.parse(t.object.session)
                          );
                          break;
                        case "error":
                          n._handleValidationError(e)(t.error);
                          break;
                        default:
                          Oe(t);
                      }
                  }, n._handleValidationError(e));
              };
            }),
            (this._handleValidationError = function(e) {
              return function(t) {
                n._report("error.pr.apple_pay.session_creation_failed", {
                  error: t
                }),
                  e.abort();
                var r = t.message;
                "string" == typeof r && n._controller.warn(r);
              };
            }),
            (this._paymentAuthorized = function(e) {
              return function(t) {
                var r = t.payment,
                  o = n._usesButtonElement() ? Ct.paymentRequestButton : null;
                n._controller.action
                  .tokenizeWithData({
                    type: "apple_pay",
                    elementName: o,
                    tokenData: ai({}, r, {
                      billingContact: li(r.billingContact, n._normalizeContact)
                    }),
                    mids: n._mids
                  })
                  .then(function(t) {
                    if ("error" === t.type)
                      e.completePayment(window.ApplePaySession.STATUS_FAILURE),
                        n._report("error.pr.create_token_failed", {
                          error: t.error
                        });
                    else {
                      var o = li(r.shippingContact, n._normalizeContact),
                        i = li(r.billingContact, n._normalizeContact);
                      o &&
                        n._paymentRequestOptions.requestShipping &&
                        !o.countryCode &&
                        e.completePayment(
                          window.ApplePaySession
                            .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS
                        );
                      var a = ii(
                        { shippingContact: o, billingContact: i },
                        n._paymentRequestOptions
                      );
                      n._onToken(e)(
                        ai({}, a, {
                          shippingOption: n._privateShippingOption,
                          token: t.object
                        })
                      );
                    }
                  });
              };
            }),
            (this._normalizeContact = function(e) {
              if (e.country && "string" == typeof e.country) {
                var t = e.country.toLowerCase().replace(/[^a-z]+/g, ""),
                  r = void 0;
                return (
                  e.countryCode
                    ? "string" == typeof e.countryCode &&
                      (r = e.countryCode.toUpperCase())
                    : (r = ui[t]) ||
                      n._report("warn.pr.apple_pay.missing_country_code", {
                        country: e.country
                      }),
                  ai({}, e, { countryCode: r })
                );
              }
              return e;
            }),
            (this._onToken = function(e) {
              return function(t) {
                n._onEvent({
                  type: "paymentresponse",
                  payload: ai({}, t, { complete: n._completePayment(e) })
                });
              };
            }),
            (this._completePayment = function(e) {
              return function(t) {
                n._paymentRequestOptions = Gr(n._paymentRequestOptions, {
                  status: t
                });
                var r = $o(n._paymentRequestOptions),
                  o = r.status;
                e.completePayment(o),
                  -1 ===
                    [
                      window.ApplePaySession
                        .STATUS_INVALID_BILLING_POSTAL_ADDRESS,
                      window.ApplePaySession
                        .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,
                      window.ApplePaySession.STATUS_INVALID_SHIPPING_CONTACT
                    ].indexOf(o) &&
                    ((n._isShowing = !1),
                    n._onEvent && n._onEvent({ type: "close" }));
              };
            }),
            (this._shippingContactSelected = function(e) {
              return function(t) {
                n._onEvent({
                  type: "shippingaddresschange",
                  payload: {
                    shippingAddress: ni(n._normalizeContact(t.shippingContact)),
                    updateWith: n._completeShippingContactSelection(e)
                  }
                });
              };
            }),
            (this._completeShippingContactSelection = function(e) {
              return function(t) {
                (n._paymentRequestOptions = Gr(n._paymentRequestOptions, t)),
                  n._paymentRequestOptions.shippingOptions &&
                    n._paymentRequestOptions.shippingOptions.length &&
                    (n._privateShippingOption =
                      n._paymentRequestOptions.shippingOptions[0]);
                var r = $o(n._paymentRequestOptions),
                  o = r.status,
                  i = r.shippingMethods,
                  a = r.total,
                  c = r.lineItems;
                e.completeShippingContactSelection(o, i, a, c);
              };
            }),
            (this._shippingMethodSelected = function(e) {
              return function(t) {
                if (n._paymentRequestOptions.shippingOptions) {
                  var r = ri(
                    t.shippingMethod,
                    n._paymentRequestOptions.shippingOptions
                  );
                  (n._privateShippingOption = r),
                    n._onEvent({
                      type: "shippingoptionchange",
                      payload: {
                        shippingOption: r,
                        updateWith: n._completeShippingMethodSelection(e)
                      }
                    });
                }
              };
            }),
            (this._completeShippingMethodSelection = function(e) {
              return function(t) {
                n._paymentRequestOptions = Gr(n._paymentRequestOptions, t);
                var r = $o(n._paymentRequestOptions),
                  o = r.status,
                  i = r.total,
                  a = r.lineItems;
                e.completeShippingMethodSelection(o, i, a);
              };
            });
          var r = t.controller,
            o = t.authentication,
            i = t.mids,
            a = t.options,
            c = t.usesButtonElement;
          (this._controller = r),
            (this._authentication = o),
            (this._mids = i),
            (this._minimumVersion = a.__minApplePayVersion || Io),
            (this._usesButtonElement = c),
            (this._initialPaymentRequest = a),
            (this._isShowing = !1),
            this._initializeSessionState();
        }
        return (
          ci(e, [
            {
              key: "_initializeSessionState",
              value: function() {
                (this._paymentRequestOptions = ai(
                  {},
                  _o,
                  this._initialPaymentRequest,
                  { status: ho.success }
                )),
                  (this._privateSession = null),
                  (this._privateShippingOption = null);
                var e = this._paymentRequestOptions.shippingOptions;
                e && e.length && (this._privateShippingOption = e[0]);
              }
            },
            {
              key: "_setupSession",
              value: function(e, t) {
                var n = this;
                e.addEventListener(
                  "validatemerchant",
                  cn(this._validateMerchant(e, t))
                ),
                  e.addEventListener(
                    "paymentauthorized",
                    cn(this._paymentAuthorized(e))
                  ),
                  e.addEventListener(
                    "cancel",
                    cn(function() {
                      (n._isShowing = !1),
                        n._onEvent({ type: "cancel" }),
                        n._onEvent({ type: "close" });
                    })
                  ),
                  e.addEventListener(
                    "shippingcontactselected",
                    cn(this._shippingContactSelected(e))
                  ),
                  e.addEventListener(
                    "shippingmethodselected",
                    cn(this._shippingMethodSelected(e))
                  );
              }
            }
          ]),
          e
        );
      })(),
      di = pi,
      fi = null,
      hi = function(e) {
        return null !== fi
          ? Re.resolve(fi)
          : e().then(function(e) {
              return (fi = e);
            });
      },
      _i = hi,
      mi = function() {
        return "https:" === window.location.protocol && !(!mr && !yr);
      },
      yi = mi,
      vi =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      bi = function e(t) {
        var n = this;
        Y(this, e),
          (this._mids = null),
          (this._frame = null),
          (this._backdrop = new Un({
            lockScrolling: !1,
            lockFocus: !0,
            lockFocusOn: null
          })),
          (this._initFrame = function(e) {
            var t = n._controller.createHiddenFrame(
              Ot.PAYMENT_REQUEST_GOOGLE_PAY,
              { authentication: n._authentication, mids: n._mids }
            );
            t.send({ action: "stripe-pr-initialize", payload: { data: e } }),
              n._initFrameEventHandlers(t),
              (n._frame = t);
          }),
          (this._initFrameEventHandlers = function(e) {
            e._on("pr-cancel", function() {
              n._onEvent({ type: "cancel" });
            }),
              e._on("pr-close", function() {
                n._backdrop.fadeOut().then(function() {
                  n._backdrop.unmount();
                }),
                  n._onEvent({ type: "close" });
              }),
              e._on("pr-error", function(e) {
                n._onEvent({
                  type: "error",
                  payload: {
                    errorMessage: e.errorMessage,
                    errorCode: e.errorCode
                  }
                });
              }),
              e._on("pr-callback", function(t) {
                var r = t.event,
                  o = t.options,
                  i = t.nonce;
                switch (r) {
                  case "paymentresponse":
                    n._handlePaymentResponse(e, o, i);
                    break;
                  case "shippingaddresschange":
                    n._handleShippingAddressChange(e, o, i);
                    break;
                  case "shippingoptionchange":
                    n._handleShippingOptionChange(e, o, i);
                    break;
                  default:
                    throw new Error("Unexpected event name: " + r);
                }
              });
          }),
          (this._handlePaymentResponse = function(e, t, r) {
            var o = function(t) {
              e.send({
                action: "stripe-pr-callback-complete",
                payload: { nonce: r, data: { status: t } }
              });
            };
            n._onEvent({
              type: "paymentresponse",
              payload: vi({}, t, { complete: o })
            });
          }),
          (this._handleShippingAddressChange = function(e, t, r) {
            var o = function(t) {
              e.send({
                action: "stripe-pr-callback-complete",
                payload: { nonce: r, data: t }
              });
            };
            n._onEvent({
              type: "shippingaddresschange",
              payload: vi({}, t, { updateWith: o })
            });
          }),
          (this._handleShippingOptionChange = function(e, t, r) {
            var o = function(t) {
              e.send({
                action: "stripe-pr-callback-complete",
                payload: { nonce: r, data: t }
              });
            };
            n._onEvent({
              type: "shippingoptionchange",
              payload: vi({}, t, { updateWith: o })
            });
          }),
          (this.setEventHandler = function(e) {
            n._onEvent = e;
          }),
          (this.canMakePayment = function() {
            if (!yi()) return Re.resolve(!1);
            if (!n._frame) throw new Error("Frame not initialized.");
            var e = n._frame;
            return _i(function() {
              return e.action.checkCanMakePayment().then(function(e) {
                return !0 === e.available;
              });
            });
          }),
          (this.show = function() {
            n._frame &&
              (n._frame.send({
                action: "stripe-pr-show",
                payload: { data: { usesButtonElement: n._usesButtonElement() } }
              }),
              n._backdrop.mount(),
              n._backdrop.show(),
              n._backdrop.fadeIn());
          }),
          (this.update = function(e) {
            n._frame &&
              n._frame.send({
                action: "stripe-pr-update",
                payload: { data: e }
              });
          }),
          (this.abort = function() {
            n._frame &&
              n._frame.send({ action: "stripe-pr-abort", payload: {} });
          }),
          (this._controller = t.controller),
          (this._authentication = t.authentication),
          (this._mids = t.mids),
          (this._usesButtonElement = t.usesButtonElement),
          yi() &&
            this._controller &&
            (this._controller.action.fetchLocale({ locale: "auto" }),
            this._initFrame(t.options));
      },
      gi = bi,
      Ei = (function() {
        if (!window.PaymentRequest) return null;
        if (/CriOS\/59/.test(navigator.userAgent)) return null;
        if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent))
          return null;
        if (_r) return null;
        var e = window.PaymentRequest;
        return (
          e.prototype.canMakePayment ||
            (e.prototype.canMakePayment = function() {
              return Re.resolve(!1);
            }),
          e
        );
      })(),
      wi = null,
      Si = function(e, t) {
        return null !== wi
          ? Re.resolve(wi)
          : Ei
          ? t && "https:" !== window.location.protocol
            ? (window.console &&
                window.console.warn(
                  "To test Payment Request, you must serve this page over HTTPS."
                ),
              Re.resolve(!1))
            : e
            ? e.action.checkCanMakePayment().then(function(e) {
                var t = e.available;
                return (wi = !0 === t);
              })
            : Re.resolve(!1)
          : Re.resolve(!1);
      },
      ki =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Pi = function e(t) {
        G(this, e), Oi.call(this);
        var n = t.authentication,
          r = t.controller,
          o = t.mids,
          i = t.usesButtonElement,
          a = t.options;
        if (
          ((this._authentication = n),
          (this._controller = r),
          (this._mids = o),
          (this._usesButtonElement = i),
          Ei && "https:" === window.location.protocol)
        ) {
          this._controller.action.fetchLocale({ locale: "auto" });
          var c = this._controller.createHiddenFrame(
            Ot.PAYMENT_REQUEST_BROWSER,
            { authentication: n, mids: this._mids }
          );
          this._setupPrFrame(c, a), (this._prFrame = c);
        } else this._prFrame = null;
      },
      Oi = function() {
        var e = this;
        (this._onEvent = function() {}),
          (this.setEventHandler = function(t) {
            e._onEvent = t;
          }),
          (this.canMakePayment = function() {
            return Si(e._prFrame, Be(e._authentication.apiKey) === Fe.test);
          }),
          (this.update = function(t) {
            var n = e._prFrame;
            n && n.send({ action: "stripe-pr-update", payload: { data: t } });
          }),
          (this.show = function() {
            if (!e._prFrame)
              throw new Pe("Payment Request is not available in this browser.");
            e._prFrame.send({
              action: "stripe-pr-show",
              payload: { data: { usesButtonElement: e._usesButtonElement() } }
            });
          }),
          (this.abort = function() {
            e._prFrame &&
              e._prFrame.send({ action: "stripe-pr-abort", payload: {} });
          }),
          (this._setupPrFrame = function(t, n) {
            t.send({ action: "stripe-pr-initialize", payload: { data: n } }),
              t._on("pr-cancel", function() {
                e._onEvent({ type: "cancel" });
              }),
              t._on("pr-close", function() {
                e._onEvent({ type: "close" });
              }),
              t._on("pr-error", function(t) {
                e._onEvent({
                  type: "error",
                  payload: {
                    errorMessage: t.message || "",
                    errorCode: t.code || ""
                  }
                });
              }),
              t._on("pr-callback", function(n) {
                var r = n.event,
                  o = n.nonce,
                  i = n.options;
                switch (r) {
                  case "token":
                    e._onEvent({
                      type: "paymentresponse",
                      payload: ki({}, i, {
                        complete: function(e) {
                          t.send({
                            action: "stripe-pr-callback-complete",
                            payload: { data: { status: e }, nonce: o }
                          });
                        }
                      })
                    });
                    break;
                  case "shippingaddresschange":
                    e._onEvent({
                      type: "shippingaddresschange",
                      payload: {
                        shippingAddress: i.shippingAddress,
                        updateWith: function(e) {
                          t.send({
                            action: "stripe-pr-callback-complete",
                            payload: { nonce: o, data: e }
                          });
                        }
                      }
                    });
                    break;
                  case "shippingoptionchange":
                    e._onEvent({
                      type: "shippingoptionchange",
                      payload: {
                        shippingOption: i.shippingOption,
                        updateWith: function(e) {
                          t.send({
                            action: "stripe-pr-callback-complete",
                            payload: { nonce: o, data: e }
                          });
                        }
                      }
                    });
                    break;
                  default:
                    throw new Error(
                      "Unexpected event from PaymentRequest inner: " + r
                    );
                }
              });
          });
      },
      Ai = Pi,
      Ti =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ii = (function(e) {
        function t(e) {
          V(this, t);
          var n = J(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          Ri.call(n),
            (n._controller = e.controller),
            (n._authentication = e.authentication),
            (n._mids = e.mids),
            n._report("pr.options", { options: e.rawOptions });
          var r = gt(Eo, e.rawOptions || {}, "paymentRequest()"),
            o = r.value;
          if (
            (r.warnings.forEach(function(e) {
              return n._warn(e);
            }),
            o.__billingDetailsEmailOverride && o.requestPayerEmail)
          )
            throw new Pe(
              "When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet."
            );
          return (
            (n._queryStrategy = e.queryStrategyOverride || Ao(e.betas)),
            n._report("pr.query_strategy", { queryStrategy: n._queryStrategy }),
            (n._initialOptions = Ti({}, o, {
              __skipGooglePayInPaymentRequest:
                -1 !== n._queryStrategy.indexOf("GOOGLE_PAY")
            })),
            n._initBackingLibraries(n._initialOptions),
            n
          );
        }
        return Q(t, e), t;
      })(dn),
      Ri = function() {
        var e = this;
        (this._usedByButtonElement = null),
          (this._showCalledByButtonElement = !1),
          (this._isShowing = !1),
          (this._backingLibraries = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null
          }),
          (this._activeBackingLibraryName = null),
          (this._activeBackingLibrary = null),
          (this._canMakePaymentAvailability = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null
          }),
          (this._canMakePaymentResolved = !1),
          (this._validateUserOn = function(t, n) {
            "string" == typeof t &&
              (("source" === t && e._hasRegisteredListener("paymentmethod")) ||
                ("paymentmethod" === t &&
                  e._hasRegisteredListener("source"))) &&
              (e._report("pr.double_callback_registration"),
              e._controller.warn(
                "Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed."
              ));
          }),
          (this._report = function(t, n) {
            e._controller.report(
              t,
              Ti({}, n, {
                activeBackingLibrary: e._activeBackingLibraryName,
                usesButtonElement: e._usedByButtonElement
              })
            );
          }),
          (this._warn = function(t) {
            e._controller.warn(t);
          }),
          (this._registerElement = function() {
            e._usedByButtonElement = !0;
          }),
          (this._elementShow = function() {
            (e._showCalledByButtonElement = !0), e.show();
          }),
          (this._initBackingLibraries = function(t) {
            e._queryStrategy.forEach(function(n) {
              var r = {
                controller: e._controller,
                authentication: e._authentication,
                mids: e._mids,
                options: t,
                usesButtonElement: function() {
                  return !0 === e._usedByButtonElement;
                }
              };
              switch (n) {
                case "APPLE_PAY":
                  (e._backingLibraries.APPLE_PAY = new di(r)),
                    e._backingLibraries.APPLE_PAY.setEventHandler(
                      e._handleInternalEvent
                    );
                  break;
                case "GOOGLE_PAY":
                  (e._backingLibraries.GOOGLE_PAY = new gi(r)),
                    e._backingLibraries.GOOGLE_PAY.setEventHandler(
                      e._handleInternalEvent
                    );
                  break;
                case "BROWSER":
                  (e._backingLibraries.BROWSER = new Ai(r)),
                    e._backingLibraries.BROWSER.setEventHandler(
                      e._handleInternalEvent
                    );
                  break;
                default:
                  Oe(n);
              }
            });
          }),
          (this._handleInternalEvent = function(t) {
            switch (t.type) {
              case "paymentresponse":
                e._emitPaymentResponse(t.payload);
                break;
              case "error":
                e._report("error.pr.internal_error", { error: t.payload });
                break;
              case "close":
                e._isShowing = !1;
                break;
              default:
                e._emitExternalEvent(t);
            }
          }),
          (this._emitExternalEvent = function(t) {
            switch (t.type) {
              case "cancel":
                e._emit("cancel");
                break;
              case "shippingoptionchange":
              case "shippingaddresschange":
                var n = t.type,
                  r = t.payload,
                  o = null,
                  i = !1,
                  a = !1,
                  c = function(c) {
                    if (a && i)
                      return (
                        e._report("pr.update_with_called_after_timeout", {
                          event: n
                        }),
                        void e._controller.warn(
                          "Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds."
                        )
                      );
                    if (i)
                      return (
                        e._report("pr.update_with_double_call", { event: n }),
                        void e._controller.warn(
                          "Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once."
                        )
                      );
                    o && clearTimeout(o),
                      (i = !0),
                      e._report("pr.update_with", { event: n, updates: c });
                    var s = gt(ko, c || {}, n + " callback"),
                      u = s.value;
                    s.warnings.forEach(function(t) {
                      return e._controller.warn(t);
                    });
                    var l =
                      u.shippingOptions || e._initialOptions.shippingOptions;
                    if (
                      !(
                        "shippingaddresschange" !== t.type ||
                        u.status !== ho.success ||
                        (l && l.length)
                      )
                    )
                      throw new Pe(
                        "When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there."
                      );
                    r.updateWith(u);
                  };
                e._hasRegisteredListener(t.type)
                  ? ((o = setTimeout(function() {
                      (a = !0),
                        e._report("pr.update_with_timed_out", { event: n }),
                        e._controller.warn(
                          'Timed out waiting for a call to updateWith(). If you listen to "' +
                            t.type +
                            '" events, then you must call event.updateWith in the "' +
                            t.type +
                            '" handler within 30 seconds.'
                        ),
                        c({ status: "fail" });
                    }, 29900)),
                    e._emit(n, Ti({}, r, { updateWith: c })))
                  : c({ status: "success" });
                break;
              case "token":
              case "source":
              case "paymentmethod":
                var s = t.type,
                  u = t.payload,
                  l = null,
                  p = !1,
                  d = !1,
                  f = function(t) {
                    if (p && d)
                      return (
                        e._report("pr.complete_called_after_timeout"),
                        void e._controller.warn(
                          "Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds."
                        )
                      );
                    if (d)
                      return (
                        e._report("pr.complete_double_call"),
                        void e._controller.warn(
                          "Call to complete() was ignored because it has already been called. Do not call complete more than once."
                        )
                      );
                    l && clearTimeout(l), (d = !0);
                    var n = gt(Po, t, "status for PaymentRequest completion"),
                      r = n.value;
                    n.warnings.forEach(function(t) {
                      return e._controller.warn(t);
                    }),
                      u.complete(r);
                  };
                (l = setTimeout(function() {
                  (p = !0),
                    e._report("pr.complete_timed_out"),
                    e._controller.warn(
                      'Timed out waiting for a call to complete(). Once you have processed the payment in the "' +
                        t.type +
                        '" handler, you must call event.complete within 30 seconds.'
                    ),
                    f("fail");
                }, 29900)),
                  e._emit(s, Ti({}, u, { complete: f }));
                break;
              default:
                Oe(t);
            }
          }),
          (this._maybeEmitPaymentResponse = function(t) {
            e._isShowing && e._emitExternalEvent(t);
          }),
          (this._emitPaymentResponse = function(t) {
            e._report("pr.payment_authorized");
            var n = t.__googlePayBillingAddress,
              r = K(t, ["__googlePayBillingAddress"]),
              o = r.token,
              i = K(r, ["token"]),
              a = i.payerEmail,
              c = i.payerPhone,
              s = i.complete,
              u = e._showCalledByButtonElement ? Ct.paymentRequestButton : null;
            e._hasRegisteredListener("token") &&
              e._maybeEmitPaymentResponse({ type: "token", payload: r }),
              e._hasRegisteredListener("source") &&
                e._controller.action
                  .createSourceWithData({
                    elementName: u,
                    type: "card",
                    sourceData: {
                      token: o.id,
                      owner: Ti(
                        {
                          email:
                            e._initialOptions.__billingDetailsEmailOverride ||
                            a,
                          phone: c
                        },
                        n ? { address: n } : {}
                      )
                    },
                    mids: null
                  })
                  .then(function(t) {
                    "error" === t.type
                      ? (e._report("fatal.pr.token_to_source_failed", {
                          error: t.error,
                          token: o.id
                        }),
                        s("fail"))
                      : e._maybeEmitPaymentResponse({
                          type: "source",
                          payload: Ti({}, i, { source: t.object })
                        });
                  }),
              e._hasRegisteredListener("paymentmethod") &&
                e._controller.action
                  .createPaymentMethodWithData({
                    elementName: u,
                    type: "card",
                    paymentMethodData: {
                      card: { token: o.id },
                      billing_details: Ti(
                        {
                          email:
                            e._initialOptions.__billingDetailsEmailOverride ||
                            a,
                          phone: c
                        },
                        n ? { address: n } : {}
                      )
                    },
                    mids: null
                  })
                  .then(function(t) {
                    "error" === t.type
                      ? (e._report("fatal.pr.token_to_payment_method_failed", {
                          error: t.error,
                          token: o.id
                        }),
                        s("fail"))
                      : e._maybeEmitPaymentResponse({
                          type: "paymentmethod",
                          payload: Ti({}, i, { paymentMethod: t.object })
                        });
                  });
          }),
          (this._canMakePaymentForBackingLibrary = function(t) {
            var n = e._backingLibraries[t];
            if (!n)
              throw new Error(
                "Unexpectedly calling canMakePayment on uninitialized backing library."
              );
            return Re.race([
              new Re(function(e) {
                return setTimeout(e, 1e4);
              }).then(function() {
                return !1;
              }),
              n.canMakePayment().then(function(e) {
                return !!e;
              })
            ]).then(function(n) {
              return (
                (e._canMakePaymentAvailability = Ti(
                  {},
                  e._canMakePaymentAvailability,
                  W({}, t, n)
                )),
                { backingLibraryName: t, available: n }
              );
            });
          }),
          (this._constructCanMakePaymentResponse = function() {
            return Ti(
              { applePay: !!e._canMakePaymentAvailability.APPLE_PAY },
              -1 !== e._queryStrategy.indexOf("GOOGLE_PAY")
                ? { googlePay: !!e._canMakePaymentAvailability.GOOGLE_PAY }
                : {}
            );
          }),
          (this.canMakePayment = cn(function() {
            if ((e._report("pr.can_make_payment"), e._canMakePaymentResolved)) {
              var t =
                null !== e._activeBackingLibrary
                  ? e._constructCanMakePaymentResponse()
                  : null;
              return (
                e._report("pr.can_make_payment_response", {
                  response: t,
                  cached: !0
                }),
                Re.resolve(t)
              );
            }
            if ("https:" !== window.location.protocol)
              return (e._canMakePaymentResolved = !0), Re.resolve(null);
            var n = e._queryStrategy.map(function(t) {
                return function() {
                  return e._canMakePaymentForBackingLibrary(t);
                };
              }),
              r = Date.now();
            return so(n, function(t) {
              var n = t.backingLibraryName,
                r = t.available;
              return (
                r &&
                  ((e._activeBackingLibraryName = n),
                  (e._activeBackingLibrary = e._backingLibraries[n])),
                r
              );
            }).then(function(t) {
              var n = Date.now();
              e._canMakePaymentResolved = !0;
              var o = null;
              return (
                "SATISFIED" === t.type &&
                  (o = e._constructCanMakePaymentResponse()),
                e._report("pr.can_make_payment_response", {
                  response: o,
                  cached: !1,
                  duration: n - r
                }),
                o
              );
            });
          })),
          (this.update = cn(function(t) {
            if (e._isShowing)
              throw (e._report("pr.update_called_while_showing"),
              new Pe(
                "You cannot update Payment Request options while the payment sheet is showing."
              ));
            e._report("pr.update", { updates: t });
            var n = gt(wo, t, "PaymentRequest update()"),
              r = n.value;
            n.warnings.forEach(function(t) {
              return e._warn(t);
            }),
              e._activeBackingLibrary && e._activeBackingLibrary.update(r);
          })),
          (this.show = cn(function() {
            if (
              (e._usedByButtonElement &&
                !e._showCalledByButtonElement &&
                (e._report("pr.show_called_with_button"),
                e._warn(
                  "Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet."
                )),
              !e._canMakePaymentResolved)
            )
              throw (e._report("pr.show_called_before_can_make_payment"),
              new Pe(
                "You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show()."
              ));
            if (!e._activeBackingLibrary)
              throw (e._report("pr.show_called_with_can_make_payment_false"),
              new Pe("Payment Request is not available in this browser."));
            var t = e._activeBackingLibrary;
            e._report("pr.show", {
              listeners: Object.keys(e._callbacks).sort()
            }),
              (e._isShowing = !0),
              t.show();
          })),
          (this.abort = cn(function() {
            if (e._activeBackingLibrary) {
              var t = e._activeBackingLibrary;
              e._report("pr.abort"), t.abort();
            }
          }));
      },
      Ni = Ii,
      Ci = {
        base: Je(pt),
        complete: Je(pt),
        empty: Je(pt),
        invalid: Je(pt),
        paymentRequestButton: Je(pt)
      },
      Mi = {
        classes: Je(
          yt({
            base: Je(rt),
            complete: Je(rt),
            empty: Je(rt),
            focus: Je(rt),
            invalid: Je(rt),
            webkitAutofill: Je(rt)
          })
        ),
        hidePostalCode: Je(it),
        hideIcon: Je(it),
        style: Je(yt(Ci)),
        iconStyle: Je(Xe("solid", "default")),
        value: Je(Qe(rt, pt)),
        __privateCvcOptional: Je(it),
        __privateValue: Je(Qe(rt, pt)),
        __privateEmitIbanValue: Je(it),
        error: Je(
          yt({ type: rt, code: Je(rt), decline_code: Je(rt), param: Je(rt) })
        ),
        locale: ht("elements()"),
        fonts: ht("elements()"),
        placeholder: Je(rt),
        disabled: Je(it),
        placeholderCountry: Je(rt),
        paymentRequest: Je(
          (function(e, t) {
            return function(n, r) {
              return n instanceof e ? Ge(n) : Ve("a " + t + " instance", n, r);
            };
          })(Ni, "stripe.paymentRequest(...)")
        ),
        supportedCountries: Je(dt(rt)),
        accountHolderType: Je(Xe("individual", "company"))
      },
      ji = yt(Mi),
      Li = function(e, t, n) {
        var r =
          ("auBankAccount" === e &&
            !Fr(n, "au_bank_account_beta_1") &&
            !Fr(n, "au_bank_account_beta_2")) ||
          ("fpxBank" === e && !Fr(n, "fpx_bank_beta_1"));
        if (!e || !(e in br) || r)
          throw new Pe(
            "A valid Element name must be provided. Valid Elements are:\n" +
              Object.keys(br)
                .filter(function(e) {
                  return !br[e].beta;
                })
                .join(", ") +
              "; you passed: " +
              e +
              "."
          );
      },
      Di = function(e, t, n) {
        if ((Li(e, 0, n), br[e].unique && -1 !== t.indexOf(e)))
          throw new Pe("Can only create one Element of type " + e + ".");
        var r = br[e].conflict,
          o = Me(t, r);
        if (o.length) {
          var i = o[0];
          throw new Pe(
            "Cannot create an Element of type " +
              e +
              " after an Element of type " +
              i +
              " has already been created."
          );
        }
      },
      xi = "14px",
      qi = function(e) {
        var t = e.split(" ").map(function(e) {
          return parseInt(e.trim(), 10);
        });
        return 1 === t.length || 2 === t.length
          ? 2 * t[0]
          : 3 === t.length || 4 === t.length
          ? t[0] + t[2]
          : 0;
      },
      Fi = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "1.2em",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xi,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "0",
          r = qi(n);
        if ("string" == typeof e && /^[0-9.]+px$/.test(e)) {
          return parseFloat(e.toString().replace(/[^0-9.]/g, "")) + r + "px";
        }
        var o = parseFloat(e.toString().replace(/[^0-9.]/g, "")),
          i = parseFloat(xi.replace(/[^0-9.]/g, "")),
          a = parseFloat(t.toString().replace(/[^0-9.]/g, "")),
          c = void 0;
        if ("string" == typeof t && /^(\d+|\d*\.\d+)px$/.test(t)) c = a;
        else if ("string" == typeof t && /^(\d+|\d*\.\d+)em$/.test(t))
          c = a * i;
        else if ("string" == typeof t && /^(\d+|\d*\.\d+)%$/.test(t))
          c = (a / 100) * i;
        else {
          if (
            "string" != typeof t ||
            (!/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t))
          )
            return "100%";
          c = i;
        }
        var s = o * c + r,
          u = s + "px";
        return /^[0-9.]+px$/.test(u) ? u : "100%";
      },
      Bi = Fi,
      Ui =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Hi = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      zi = {
        base: "StripeElement",
        focus: "StripeElement--focus",
        invalid: "StripeElement--invalid",
        complete: "StripeElement--complete",
        empty: "StripeElement--empty",
        webkitAutofill: "StripeElement--webkit-autofill"
      },
      Yi = {
        margin: "0",
        padding: "0",
        border: "none",
        display: "block",
        background: "transparent",
        position: "relative",
        opacity: "1"
      },
      Gi = {
        border: "none",
        display: "block",
        position: "absolute",
        height: "1px",
        top: "0",
        left: "0",
        padding: "0",
        margin: "0",
        width: "100%",
        opacity: "0",
        background: "transparent",
        "pointer-events": "none",
        "font-size": "16px"
      },
      Wi = function(e) {
        return parseFloat(e.toFixed(1));
      },
      Ki = function(e) {
        return /^\d+(\.\d*)?px$/.test(e);
      },
      Vi = (function(e) {
        function t(e) {
          X(this, t);
          var n = ee(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this)
          );
          Ji.call(n);
          var r = e.controller,
            o = e.componentName,
            i = e.paymentRequest;
          (n._controller = r), (n._componentName = o);
          var a = "paymentRequestButton" === n._componentName;
          if (a) {
            if (!i)
              throw new Pe(
                "You must pass in a stripe.paymentRequest object in order to use this Element."
              );
            (n._paymentRequest = i), n._paymentRequest._registerElement();
          }
          return (
            n._createComponent(e, o),
            (n._classes = zi),
            n._computeCustomClasses(e.classes || {}),
            (n._lastBackgroundColor = ""),
            (n._destroyed = !1),
            (n._focused = !1),
            (n._empty = !a),
            (n._invalid = !1),
            (n._complete = !1),
            (n._autofilled = !1),
            (n._lastSubmittedAt = null),
            n
          );
        }
        return (
          te(t, e),
          Hi(t, [
            {
              key: "_checkDestroyed",
              value: function() {
                if (this._destroyed)
                  throw new Pe(
                    "This Element has already been destroyed. Please create a new one."
                  );
              }
            },
            {
              key: "_isMounted",
              value: function() {
                return (
                  !!document.body && document.body.contains(this._component)
                );
              }
            },
            {
              key: "_mountToParent",
              value: function(e) {
                var t = this._component.parentElement,
                  n = this._isMounted();
                if (e === t) {
                  if (n) return;
                  this.unmount(), this._mountTo(e);
                } else if (t) {
                  if (n)
                    throw new Pe(
                      "This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting."
                    );
                  this.unmount(), this._mountTo(e);
                } else this._mountTo(e);
              }
            },
            {
              key: "_mountTo",
              value: function(e) {
                var t = Date.now(),
                  n = jn(e, null),
                  r = !!n && "rtl" === n.getPropertyValue("direction"),
                  o = this._paymentRequest
                    ? this._paymentRequest._activeBackingLibraryName
                    : null;
                for (this._parent = e; e.firstChild; )
                  e.removeChild(e.firstChild);
                e.appendChild(this._component),
                  this._frame.send({
                    action: "stripe-user-mount",
                    payload: {
                      mountTime: t,
                      rtl: r,
                      paymentRequestButtonType: o
                    }
                  }),
                  this._findPossibleLabel(),
                  this._updateClasses();
              }
            },
            {
              key: "_updateClasses",
              value: function() {
                this._parent &&
                  $t(this._parent, [
                    [this._classes.base, !0],
                    [this._classes.empty, this._empty],
                    [this._classes.focus, this._focused],
                    [this._classes.invalid, this._invalid],
                    [this._classes.complete, this._complete],
                    [this._classes.webkitAutofill, this._autofilled]
                  ]);
              }
            },
            {
              key: "_removeClasses",
              value: function() {
                this._parent &&
                  $t(this._parent, [
                    [this._classes.base, !1],
                    [this._classes.empty, !1],
                    [this._classes.focus, !1],
                    [this._classes.invalid, !1],
                    [this._classes.complete, !1],
                    [this._classes.webkitAutofill, !1]
                  ]);
              }
            },
            {
              key: "_findPossibleLabel",
              value: function() {
                var e = this._parent;
                if (e) {
                  var t = e.getAttribute("id"),
                    n = void 0;
                  if (
                    (t &&
                      (n = document.querySelector("label[for='" + t + "']")),
                    n)
                  )
                    e.addEventListener("click", this.focus);
                  else
                    for (
                      n = n || e.parentElement;
                      n && "LABEL" !== n.nodeName;

                    )
                      n = n.parentElement;
                  n
                    ? ((this._label = n),
                      n.addEventListener("click", this.focus))
                    : e.addEventListener("click", this.focus);
                }
              }
            },
            {
              key: "_computeCustomClasses",
              value: function(e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function(n) {
                    if (!zi[n])
                      throw new Pe(
                        n +
                          " is not a customizable class name.\nYou can customize: " +
                          Object.keys(zi).join(", ")
                      );
                    var r = e[n] || zi[n];
                    t[n] = r.replace(/\./g, " ");
                  }),
                  (this._classes = Ui({}, this._classes, t)),
                  this
                );
              }
            },
            {
              key: "_emitEvent",
              value: function(e, t) {
                return this._emit(
                  e,
                  Ui({ elementType: this._componentName }, t)
                );
              }
            },
            {
              key: "_setupEvents",
              value: function() {
                var e = this;
                this._frame._on("redirectfocus", function(t) {
                  var n = t.focusDirection,
                    r = Ln(e._component, n);
                  r && r.focus();
                }),
                  this._frame._on("focus", function() {
                    (e._focused = !0), e._updateClasses();
                  }),
                  this._frame._on("blur", function() {
                    (e._focused = !1),
                      e._updateClasses(),
                      e._lastSubmittedAt &&
                        "paymentRequestButton" === e._componentName &&
                        (e._controller.report(
                          "payment_request_button.sheet_visible",
                          { latency: new Date() - e._lastSubmittedAt }
                        ),
                        (e._lastSubmittedAt = null));
                  }),
                  this._frame._on("submit", function() {
                    if ("paymentRequestButton" === e._componentName) {
                      e._lastSubmittedAt = new Date();
                      var t = !1,
                        n = !1;
                      e._emitEvent("click", {
                        preventDefault: function() {
                          e._controller.report(
                            "payment_request_button.default_prevented"
                          ),
                            t &&
                              e._controller.warn(
                                "event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."
                              ),
                            (n = !0);
                        }
                      }),
                        !n &&
                          e._paymentRequest &&
                          (e._paymentRequest._elementShow(), (t = !0));
                    } else e._emitEvent("submit"), e._formSubmit();
                  }),
                  ["ready", "focus", "blur", "escape"].forEach(function(t) {
                    e._frame._on(t, function() {
                      e._emitEvent(t);
                    });
                  }),
                  this._frame._on("change", function(t) {
                    var n = {};
                    ["error", "value", "empty", "complete"]
                      .concat(Z(Pr[e._componentName] || []))
                      .forEach(function(e) {
                        return (n[e] = t[e]);
                      }),
                      e._emitEvent("change", n),
                      (e._empty = n.empty),
                      (e._invalid = !!n.error),
                      (e._complete = n.complete),
                      e._updateClasses();
                  }),
                  this._frame._on("__privateIntegrationError", function(t) {
                    var n = t.message;
                    e._emitEvent("__privateIntegrationError", { message: n });
                  }),
                  this._frame._on("dimensions", function(t) {
                    if (e._parent) {
                      var n = jn(e._parent, null);
                      if (n) {
                        var r = parseFloat(n.getPropertyValue("height")),
                          o = t.height;
                        if ("border-box" === n.getPropertyValue("box-sizing")) {
                          var i = parseFloat(n.getPropertyValue("padding-top")),
                            a = parseFloat(
                              n.getPropertyValue("padding-bottom")
                            );
                          r =
                            r -
                            parseFloat(n.getPropertyValue("border-top")) -
                            parseFloat(n.getPropertyValue("border-bottom")) -
                            i -
                            a;
                        }
                        0 !== r &&
                          Wi(r) < Wi(o) &&
                          e._controller.report("wrapper_height_mismatch", {
                            height: o,
                            outer_height: r
                          });
                        var c = e._component.getBoundingClientRect().height;
                        0 !== c &&
                          0 !== o &&
                          Wi(c) !== Wi(o) &&
                          (e._frame.updateStyle({ height: o + "px" }),
                          e._controller.report("iframe_height_update", {
                            height: o,
                            calculated_height: c
                          }));
                      }
                    }
                  }),
                  this._frame._on("autofill", function() {
                    if (e._parent) {
                      var t = e._parent.style.backgroundColor,
                        n = "#faffbd" === t || "rgb(250, 255, 189)" === t;
                      (e._lastBackgroundColor = n ? e._lastBackgroundColor : t),
                        (e._parent.style.backgroundColor = "#faffbd"),
                        (e._autofilled = !0),
                        e._updateClasses();
                    }
                  }),
                  this._frame._on("autofill-cleared", function() {
                    (e._autofilled = !1),
                      e._parent &&
                        (e._parent.style.backgroundColor =
                          e._lastBackgroundColor),
                      e._updateClasses();
                  });
              }
            },
            {
              key: "_handleOutsideClick",
              value: function() {
                this._secondaryFrame &&
                  this._secondaryFrame.send({
                    action: "stripe-outside-click",
                    payload: {}
                  });
              }
            },
            {
              key: "_createSecondFrame",
              value: function(e, t, n) {
                var r = this._controller.createSecondaryElementFrame(
                  e,
                  Ui({}, n, { componentName: t })
                );
                return (
                  r &&
                    r.on &&
                    r.on("height-change", function(e) {
                      r.updateStyle({ height: e.height + "px" });
                    }),
                  r
                );
              }
            },
            {
              key: "_createComponent",
              value: function(e, t) {
                this._createElement(e, t),
                  this._setupEvents(),
                  this._updateFrameHeight(e, !0);
              }
            },
            {
              key: "_updateFrameHeight",
              value: function(e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if ("paymentRequestButton" === this._componentName) {
                  var n = (e.style && e.style.paymentRequestButton) || {},
                    r = n.height,
                    o = "string" == typeof r ? r : void 0;
                  (t || o) &&
                    (this._frame.updateStyle({
                      height: o || this._lastHeight || "40px"
                    }),
                    (this._lastHeight = o || this._lastHeight));
                } else {
                  var i = (e.style && e.style.base) || {},
                    a = i.lineHeight,
                    c = i.fontSize,
                    s = i.padding,
                    u =
                      "string" != typeof a || isNaN(parseFloat(a)) ? void 0 : a,
                    l = "string" == typeof c ? c : void 0,
                    p = "string" == typeof s ? s : void 0;
                  if (
                    (l &&
                      !Ki(l) &&
                      this._controller.warn(
                        "The fontSize style you specified (" +
                          l +
                          ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."
                      ),
                    t || u || l)
                  ) {
                    var d =
                        -1 === Ut.indexOf(this._componentName)
                          ? void 0
                          : p || this._lastPadding,
                      f = Bi(u || this._lastHeight, l || this._lastFontSize, d);
                    this._frame.updateStyle({ height: f }),
                      (this._lastFontSize = l || this._lastFontSize),
                      (this._lastHeight = u || this._lastHeight),
                      (this._lastPadding = d);
                  }
                }
              }
            },
            {
              key: "_createElement",
              value: function(e, t) {
                var n = this,
                  r =
                    (e.classes,
                    e.controller,
                    e.paymentRequest,
                    $(e, ["classes", "controller", "paymentRequest"])),
                  o = document.createElement("div");
                o.className = "__PrivateStripeElement";
                var i = document.createElement("input");
                (i.className = "__PrivateStripeElement-input"),
                  i.setAttribute("aria-hidden", "true"),
                  i.setAttribute("aria-label", " "),
                  i.setAttribute("autocomplete", "false"),
                  (i.maxLength = 1),
                  (i.disabled = !0),
                  Zt(o, Yi),
                  Zt(i, Gi);
                var a = jn(document.body),
                  c = !!a && "rtl" === a.getPropertyValue("direction"),
                  s = Er[t],
                  u = Ui({}, r, { rtl: c }),
                  l = this._controller.createElementFrame(s, u);
                if (
                  (l._on("load", function() {
                    i.disabled = !1;
                  }),
                  i.addEventListener("focus", function() {
                    l.focus();
                  }),
                  l.appendTo(o),
                  Or[t])
                ) {
                  var p = Or[t].secondary;
                  (this._secondaryFrame = this._createSecondFrame(
                    s,
                    p,
                    Ui({}, u, { primaryElementType: t })
                  )),
                    this._secondaryFrame.appendTo(o),
                    window.addEventListener("click", function() {
                      return n._handleOutsideClick();
                    });
                }
                if ((o.appendChild(i), fr && t !== Ct.paymentRequestButton)) {
                  var d = document.createElement("input");
                  (d.className = "__PrivateStripeElement-safariInput"),
                    d.setAttribute("aria-hidden", "true"),
                    d.setAttribute("tabindex", "-1"),
                    d.setAttribute("autocomplete", "false"),
                    (d.maxLength = 1),
                    (d.disabled = !0),
                    Zt(d, Gi),
                    o.appendChild(d);
                }
                (this._component = o), (this._frame = l), (this._fakeInput = i);
              }
            }
          ]),
          t
        );
      })(dn),
      Ji = function() {
        var e = this;
        (this._paymentRequest = null),
          (this.mount = cn(function(t) {
            e._checkDestroyed();
            var n = void 0;
            if (!t)
              throw new Pe(
                "Missing argument. Make sure to call mount() with a valid DOM element or selector."
              );
            if ("string" == typeof t) {
              var r = document.querySelectorAll(t);
              if (
                (r.length > 1 &&
                  e._controller.warn(
                    "The selector you specified (" +
                      t +
                      ") applies to " +
                      r.length +
                      " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."
                  ),
                !r.length)
              )
                throw new Pe(
                  "The selector you specified (" +
                    t +
                    ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount()."
                );
              n = r[0];
            } else {
              if (!t.appendChild)
                throw new Pe(
                  "Invalid DOM element. Make sure to call mount() with a valid DOM element or selector."
                );
              n = t;
            }
            if ("INPUT" === n.nodeName)
              throw new Pe(
                "Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead."
              );
            if (
              (n.children.length &&
                e._controller.warn(
                  "This Element will be mounted to a DOM element that contains child nodes."
                ),
              e._paymentRequest)
            ) {
              if (!e._paymentRequest._canMakePaymentResolved)
                throw new Pe(
                  "For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element."
                );
              if (!e._paymentRequest._activeBackingLibraryName)
                throw new Pe(
                  "The paymentRequestButton Element is not available in the current environment."
                );
              e._mountToParent(n);
            } else e._mountToParent(n);
          })),
          (this.update = cn(function(t) {
            e._checkDestroyed();
            var n = gt(ji, t || {}, "element.update()"),
              r = n.value;
            if (
              (n.warnings.forEach(function(t) {
                return e._controller.warn(t);
              }),
              r)
            ) {
              var o = r.classes,
                i = $(r, ["classes"]);
              o &&
                (e._removeClasses(),
                e._computeCustomClasses(o),
                e._updateClasses()),
                e._updateFrameHeight(r),
                Object.keys(i).length &&
                  (e._frame.update(i),
                  e._secondaryFrame && e._secondaryFrame.update(i));
            }
            return e;
          })),
          (this.focus = cn(function(t) {
            return (
              e._checkDestroyed(),
              t && t.preventDefault(),
              document.activeElement &&
                document.activeElement.blur &&
                document.activeElement.blur(),
              e._fakeInput.focus(),
              e
            );
          })),
          (this.blur = cn(function() {
            return e._checkDestroyed(), e._frame.blur(), e._fakeInput.blur(), e;
          })),
          (this.clear = cn(function() {
            return e._checkDestroyed(), e._frame.clear(), e;
          })),
          (this.unmount = cn(function() {
            e._checkDestroyed();
            var t = e._component.parentElement,
              n = e._label;
            return (
              t &&
                (t.removeChild(e._component),
                t.removeEventListener("click", e.focus),
                e._removeClasses()),
              (e._parent = null),
              n && (n.removeEventListener("click", e.focus), (e._label = null)),
              e._secondaryFrame &&
                (e._secondaryFrame.unmount(),
                window.removeEventListener("click", e._handleOutsideClick)),
              (e._fakeInput.disabled = !0),
              e._frame.unmount(),
              e
            );
          })),
          (this.destroy = cn(function() {
            return (
              e._checkDestroyed(),
              e.unmount(),
              (e._destroyed = !0),
              e._emitEvent("destroy"),
              e
            );
          })),
          (this._formSubmit = function() {
            for (
              var t = e._component.parentElement;
              t && "FORM" !== t.nodeName;

            )
              t = t.parentElement;
            if (t) {
              var n = document.createEvent("Event");
              n.initEvent("submit", !0, !0), t.dispatchEvent(n);
            }
          });
      },
      Qi = Vi,
      $i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Zi = {
        locale: Je(rt),
        fonts: Je(dt(pt)),
        betas: Je(dt(et.apply(void 0, oe(qr))))
      },
      Xi = yt(Zi),
      ea = function e(t, n) {
        var r = this;
        re(this, e), ta.call(this);
        var o = gt(Xi, n || {}, "elements()"),
          i = o.value;
        o.warnings.forEach(function(e) {
          return t.warn(e);
        }),
          Dr(t.warn),
          t.report("elements", { options: n }),
          (this._elements = []),
          (this._id = zt("elements")),
          (this._controller = t);
        var a = i.locale,
          c = i.fonts || [];
        this._controller.action.fetchLocale({ locale: a || "auto" }),
          (this._betas = i.betas || []);
        var s = c
            .filter(function(e) {
              return !e.cssSrc || "string" != typeof e.cssSrc;
            })
            .map(function(e) {
              return $i({}, e, {
                __resolveFontRelativeTo: window.location.href
              });
            }),
          u = c
            .map(function(e) {
              return e.cssSrc;
            })
            .reduce(function(e, t) {
              return "string" == typeof t ? [].concat(oe(e), [t]) : e;
            }, [])
            .map(function(e) {
              return wt(e) ? e : kt(window.location.href, e);
            });
        this._pendingFonts = u.length;
        var l = (i.betas, ne(i, ["betas"]));
        return (
          (this._commonOptions = $i({}, l, { fonts: s })),
          u.forEach(function(e) {
            if ("string" == typeof e) {
              var t = Date.now();
              ao(e)
                .then(function(n) {
                  r._controller.report("font.loaded", {
                    load_time: Date.now() - t,
                    font_count: n.length,
                    css_src: e
                  });
                  var o = n.map(function(t) {
                    return $i({}, t, { __resolveFontRelativeTo: e });
                  });
                  r._controller.action.updateCSSFonts({
                    fonts: o,
                    groupId: r._id
                  }),
                    (r._commonOptions = $i({}, r._commonOptions, {
                      fonts: [].concat(
                        oe(
                          r._commonOptions.fonts ? r._commonOptions.fonts : []
                        ),
                        oe(o)
                      )
                    }));
                })
                .catch(function(n) {
                  r._controller.report("error.font.not_loaded", {
                    load_time: Date.now() - t,
                    message: n && n.message && n.message,
                    css_src: e
                  }),
                    r._controller.warn("Failed to load CSS file at " + e + ".");
                });
            }
          }),
          this
        );
      },
      ta = function() {
        var e = this;
        (this.getElement = cn(function(t) {
          return (
            Li(
              t,
              e._elements.map(function(e) {
                return e._componentName;
              }),
              e._betas
            ),
            Ne(e._elements, function(e) {
              return e._componentName === t;
            }) || null
          );
        })),
          (this.create = sn(function(t, n) {
            Di(
              t,
              e._elements.map(function(e) {
                return e._componentName;
              }),
              e._betas
            );
            var r = gt(ji, n || {}, "create()"),
              o = r.value;
            r.warnings.forEach(function(t) {
              return e._controller.warn(t);
            });
            var i = $i({}, o, e._commonOptions, {
                componentName: t,
                groupId: e._id
              }),
              a = (pr || dr) && Kt(i).length > 2e3,
              c = !!e._pendingFonts || a,
              s = new Qi(
                $i({}, i, {
                  fonts: a ? null : e._commonOptions.fonts,
                  controller: e._controller,
                  wait: c
                })
              );
            return (
              (e._elements = [].concat(oe(e._elements), [s])),
              s._on("destroy", function() {
                e._elements = e._elements.filter(function(e) {
                  return e._componentName !== t;
                });
              }),
              a &&
                s._frame.send({
                  action: "stripe-user-update",
                  payload: { fonts: e._commonOptions.fonts }
                }),
              s
            );
          }));
      },
      na = ea,
      ra = function(e, t, n, r, o, i) {
        return new Ni({
          controller: e,
          authentication: t,
          mids: n,
          rawOptions: r,
          betas: o,
          queryStrategyOverride: i
        });
      },
      oa = ra,
      ia = { _componentName: rt, _frame: yt({ id: rt }) },
      aa = yt(ia),
      ca = function(e) {
        var t = bt(aa, e, "");
        return "error" === t.type ? null : t.value;
      },
      sa = {
        au_becs_debit: "au_becs_debit",
        bacs_debit: "bacs_debit",
        card: "card",
        ideal: "ideal",
        sepa_debit: "sepa_debit",
        three_d_secure: "three_d_secure",
        fpx: "fpx"
      },
      ua =
        ((Se = {}),
        ie(Se, Ct.auBankAccount, sa.au_becs_debit),
        ie(Se, Ct.card, sa.card),
        ie(Se, Ct.cardNumber, sa.card),
        ie(Se, Ct.cardExpiry, sa.card),
        ie(Se, Ct.cardCvc, sa.card),
        ie(Se, Ct.postalCode, sa.card),
        ie(Se, Ct.iban, sa.sepa_debit),
        ie(Se, Ct.idealBank, sa.ideal),
        ie(Se, Ct.fpxBank, sa.fpx),
        Se),
      la = function(e) {
        return -1 === Dt.indexOf(e);
      },
      pa = function(e, t) {
        return null != t ? t : la(e) ? null : ua[e] || null;
      },
      da =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      fa = function(e, t) {
        switch (e.type) {
          case "object":
            return { paymentIntent: e.object };
          case "error":
            return { error: da({}, t ? { payment_intent: t } : {}, e.error) };
          default:
            return Oe(e);
        }
      },
      ha = function(e) {
        switch (e.type) {
          case "error":
            return { error: e.error };
          case "object":
            return { setupIntent: e.object };
          default:
            return Oe(e);
        }
      },
      _a = function(e) {
        var t = e.trim().match(/^([a-z]+_[^_]+)_secret_[^-]+$/);
        return t ? { id: t[1], clientSecret: t[0] } : null;
      },
      ma = function(e) {
        return { id: e.id, clientSecret: e.client_secret };
      },
      ya = function(e) {
        return "requires_source_action" === e || "requires_action" === e;
      },
      va = function(e) {
        return "requires_source_action" === e.status ||
          "requires_action" === e.status
          ? e.next_action
          : null;
      },
      ba =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      ga = function(e, t) {
        if ("string" != typeof e) return Ve("a client_secret string", e, t);
        var n = _a(e);
        return null === n
          ? Ve("a client secret of the form ${id}_secret_${secret}", e, t)
          : Ge(n, []);
      },
      Ea = function(e, t) {
        if (null === e) return Ke("object", "null", t);
        if ("object" !== (void 0 === e ? "undefined" : ba(e)))
          return Ke("object", void 0 === e ? "undefined" : ba(e), t);
        var n = e.client_secret,
          r = e.status,
          o = e.next_action,
          i = ga(n, vt(t, "client_secret"));
        if ("error" === i.type) return i;
        if ("string" != typeof r)
          return Ke(
            "string",
            void 0 === r ? "undefined" : ba(r),
            vt(t, "status")
          );
        if (
          ("requires_source_action" === r || "requires_action" === r) &&
          "object" !== (void 0 === o ? "undefined" : ba(o))
        )
          return Ke(
            "object",
            void 0 === o ? "undefined" : ba(o),
            vt(t, "next_action")
          );
        if ("payment_intent" === e.object) {
          return Ge(e, []);
        }
        return Ge(e, []);
      },
      wa = function(e) {
        return function(t, n) {
          if ("object" !== (void 0 === t ? "undefined" : ba(t)))
            return Ke("object", void 0 === t ? "undefined" : ba(t), n);
          if (null === t) return Ke("object", "null", n);
          var r = t.type,
            o = ce(t, ["type"]),
            i = void 0;
          if (null === e) {
            if ("string" != typeof r)
              return Ke(
                "string",
                void 0 === r ? "undefined" : ba(r),
                vt(n, "type")
              );
            i = r;
          } else {
            if (void 0 !== r && r !== e)
              return "string" != typeof r
                ? Ke(
                    "string",
                    void 0 === r ? "undefined" : ba(r),
                    vt(n, "type")
                  )
                : Ke('"' + r + '"', '"' + e + '"', vt(n, "type"));
            i = e;
          }
          var a = t[i],
            c = ce(t, [i]);
          if ("object" !== (void 0 === a ? "undefined" : ba(a)))
            return Ke("object or element", ba(t[i]), vt(n, i));
          if (null === a) return Ke("object or element", "null", vt(n, i));
          var s = ca(a);
          if (s) {
            var u = s._componentName;
            if (ua[u] !== i) {
              var l = [].concat(ae(n.path), [i]).join("."),
                p = n.label,
                d = new Pe(
                  "Invalid value for " +
                    p +
                    ": " +
                    l +
                    " was `" +
                    u +
                    "` Element, which cannot be used to create " +
                    i +
                    " PaymentMethods."
                );
              return We(d);
            }
            return Ge({ type: i, element: s, data: c });
          }
          return Ge({ type: i, element: null, data: o });
        };
      },
      Sa = ot(
        yt({
          handleActions: ot(it, function() {
            return !0;
          })
        }),
        function() {
          return { handleActions: !0 };
        }
      ),
      ka = function(e, t) {
        return function(n, r) {
          if (void 0 === n)
            return Ge({
              paymentMethodData: null,
              source: null,
              paymentMethod: null,
              otherParams: {}
            });
          if ("object" !== (void 0 === n ? "undefined" : ba(n)))
            return Ke("object", void 0 === n ? "undefined" : ba(n), r);
          if (null === n) return Ke("object", "null", r);
          var o = n.source,
            i = n.source_data,
            a = n.payment_method_data,
            c = n.payment_method,
            s = ce(n, [
              "source",
              "source_data",
              "payment_method_data",
              "payment_method"
            ]);
          if (null != i)
            throw new Pe(
              t + ": Expected payment_method, or source, not source_data."
            );
          if (null != a)
            throw new Pe(
              t +
                ": Expected payment_method, or source, not payment_method_data."
            );
          if (null != o && null != c)
            throw new Pe(
              t + ": Expected either payment_method or source, but not both."
            );
          if (null != o)
            return "string" != typeof o
              ? Ke(
                  "string",
                  void 0 === o ? "undefined" : ba(o),
                  vt(r, "source")
                )
              : Ge({
                  source: o,
                  paymentMethodData: null,
                  paymentMethod: null,
                  otherParams: s
                });
          if (
            null != c &&
            "string" != typeof c &&
            "object" !== (void 0 === c ? "undefined" : ba(c))
          )
            return Ke(
              "string or object",
              void 0 === c ? "undefined" : ba(c),
              vt(r, "payment_method")
            );
          if ("string" == typeof c)
            return Ge({
              source: null,
              paymentMethodData: null,
              paymentMethod: c,
              otherParams: s
            });
          if ("object" === (void 0 === c ? "undefined" : ba(c)) && null !== c) {
            var u = bt(wa(e), c, t, {
              path: [].concat(ae(r.path), ["payment_method"])
            });
            if ("error" === u.type) return u;
            var l = u.value;
            return Ge({
              source: null,
              paymentMethod: null,
              paymentMethodData: l,
              otherParams: s
            });
          }
          return Ge({
            source: null,
            paymentMethodData: null,
            paymentMethod: null,
            otherParams: s
          });
        };
      },
      Pa = function(e) {
        var t = e.name,
          n = e.value,
          r = e.expiresIn,
          o = e.path,
          i = e.domain,
          a = new Date(),
          c = r || 31536e6;
        a.setTime(a.getTime() + c);
        var s = o || "/",
          u = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
          l =
            encodeURIComponent(t) +
            "=" +
            u +
            ";expires=" +
            a.toGMTString() +
            ";path=" +
            s;
        i && (l += ";domain=" + i), (document.cookie = l);
      },
      Oa = function(e) {
        var t = Ne(document.cookie.split("; "), function(t) {
          var n = t.indexOf("=");
          return decodeURIComponent(t.substr(0, n)) === e;
        });
        if (t) {
          var n = t.indexOf("=");
          return decodeURIComponent(t.substr(n + 1));
        }
        return null;
      },
      Aa = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ta = "__privateStripeMetricsController",
      Ia = { MERCHANT: "merchant", SESSION: "session" },
      Ra = (function() {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if ((se(this, e), n.checkoutIds)) {
            var r = n.checkoutIds,
              o = r.muid,
              i = r.sid;
            (this._muid = o), (this._sid = i), (this._doNotPersist = !0);
          } else
            (this._muid = this._getID(Ia.MERCHANT)),
              (this._sid = this._getID(Ia.SESSION)),
              (this._doNotPersist = !1);
          (this._id = zt(Ta)),
            (this._controllerFrame = new kn(Ot.METRICS_CONTROLLER, this._id, {
              autoload: !0,
              queryString: this._buildFrameQueryString()
            })),
            (this._guidPromise = new Re(function(e) {
              t._establishMessageChannel(e);
            })),
            this._startIntervalCheck(),
            setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random());
        }
        return (
          Aa(e, [
            {
              key: "ids",
              value: function() {
                return {
                  guid: this._guid || "NA",
                  muid: this._muid || "NA",
                  sid: this._sid || "NA"
                };
              }
            },
            {
              key: "idsPromise",
              value: function() {
                var e = this;
                return this._guidPromise.then(function() {
                  return e.ids();
                });
              }
            },
            {
              key: "_establishMessageChannel",
              value: function(e) {
                var t = this;
                window.addEventListener("message", function(n) {
                  var r = n.data;
                  if ("string" == typeof r)
                    try {
                      var o = JSON.parse(r),
                        i = o.originatingScript,
                        a = o.payload;
                      "m" === i && ((t._guid = a), e(a));
                    } catch (e) {}
                });
              }
            },
            {
              key: "_startIntervalCheck",
              value: function() {
                var e = this,
                  t = window.location.href;
                setInterval(function() {
                  var n = window.location.href;
                  n !== t &&
                    (e.send({
                      action: "ping",
                      payload: {
                        sid: e._getID(Ia.SESSION),
                        muid: e._getID(Ia.MERCHANT),
                        title: document.title,
                        referrer: document.referrer,
                        url: document.location.href
                      }
                    }),
                    (t = n));
                }, 5e3);
              }
            },
            {
              key: "report",
              value: function(e, t) {
                try {
                  this.send({
                    action: "track",
                    payload: {
                      sid: this._getID(Ia.SESSION),
                      muid: this._getID(Ia.MERCHANT),
                      url: document.location.href,
                      source: e,
                      data: t
                    }
                  });
                } catch (e) {}
              }
            },
            {
              key: "send",
              value: function(e) {
                var t = Rt(Ot.METRICS_CONTROLLER);
                er(t) && this._controllerFrame.send(e);
              }
            },
            {
              key: "_testLatency",
              value: function() {
                var e = this,
                  t = [],
                  n = new Date(),
                  r = function r() {
                    try {
                      var o = new Date();
                      t.push(o - n),
                        t.length >= 10 &&
                          (e.report("mouse-timings-10", t),
                          document.removeEventListener("mousemove", r)),
                        (n = o);
                    } catch (e) {}
                  };
                document.addEventListener("mousemove", r);
              }
            },
            {
              key: "_extractMetaReferrerPolicy",
              value: function() {
                var e = document.querySelector("meta[name=referrer]");
                return null != e && e instanceof HTMLMetaElement
                  ? e.content.toLowerCase()
                  : null;
              }
            },
            {
              key: "_extractUrl",
              value: function(e) {
                var t = document.location.href;
                switch (e) {
                  case "origin":
                  case "strict-origin":
                  case "origin-when-cross-origin":
                  case "strict-origin-when-cross-origin":
                    return document.location.origin;
                  case "unsafe-url":
                    return t.split("#")[0];
                  default:
                    return t;
                }
              }
            },
            {
              key: "_buildFrameQueryString",
              value: function() {
                var e = this._extractMetaReferrerPolicy(),
                  t = this._extractUrl(e),
                  n = {
                    url: t,
                    title: document.title,
                    referrer: document.referrer,
                    muid: this._muid,
                    sid: this._sid,
                    preview: tr(t)
                  };
                return (
                  null != e && (n.metaReferrerPolicy = e),
                  Object.keys(n)
                    .map(function(e) {
                      return null != n[e]
                        ? e + "=" + encodeURIComponent(n[e].toString())
                        : null;
                    })
                    .join("&")
                );
              }
            },
            {
              key: "_getID",
              value: function(e) {
                switch (e) {
                  case Ia.MERCHANT:
                    if (this._doNotPersist) return this._muid;
                    try {
                      var t = Oa("__stripe_mid") || Yt();
                      return (
                        Pa({
                          name: "__stripe_mid",
                          value: t,
                          domain: "." + document.location.hostname
                        }),
                        t
                      );
                    } catch (e) {
                      return "NA";
                    }
                  case Ia.SESSION:
                    if (this._doNotPersist) return this._sid;
                    try {
                      var n = Oa("__stripe_sid") || Yt();
                      return (
                        Pa({
                          name: "__stripe_sid",
                          value: n,
                          domain: "." + document.location.hostname,
                          expiresIn: 18e5
                        }),
                        n
                      );
                    } catch (e) {
                      return "NA";
                    }
                  default:
                    throw new Error("Invalid ID type specified: " + e);
                }
              }
            }
          ]),
          e
        );
      })(),
      Na = Ra,
      Ca =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Ma = function(e) {
        if (!e || "object" !== (void 0 === e ? "undefined" : Ca(e)))
          return null;
        var t = e.type,
          n = ue(e, ["type"]);
        return { type: "string" == typeof t ? t : null, data: n };
      },
      ja = function(e) {
        switch (e.type) {
          case "object":
            return { source: e.object };
          case "error":
            return { error: e.error };
          default:
            return Oe(e);
        }
      },
      La = {
        source: yt({ id: Ze("src_"), client_secret: Ze("src_client_secret_") })
      },
      Da = yt(La),
      xa = function(e) {
        switch (e.type) {
          case "object":
            return { paymentMethod: e.object };
          case "error":
            return { error: e.error };
          default:
            return Oe(e);
        }
      },
      qa = function(e) {
        return gt(wa(null), e, "createPaymentMethod").value;
      },
      Fa = function(e, t, n, r, o) {
        var i = ca(r),
          a = Ma(i ? o : r),
          c = a || { type: null, data: {} },
          s = c.type,
          u = c.data;
        if (s && n !== s)
          return Re.reject(
            new Pe(
              "The type supplied in payment_method_data is not consistent."
            )
          );
        if (i) {
          var l = i._frame.id,
            p = i._componentName;
          return e.action
            .createPaymentMethodWithElement({
              frameId: l,
              elementName: p,
              type: n,
              paymentMethodData: u,
              mids: t
            })
            .then(xa);
        }
        return a
          ? e.action
              .createPaymentMethodWithData({
                elementName: null,
                type: n,
                paymentMethodData: u,
                mids: t
              })
              .then(xa)
          : Re.reject(
              new Pe(
                "Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."
              )
            );
      },
      Ba = function(e, t, n, r, o) {
        if ("string" == typeof n) return Fa(e, t, n, r, o);
        try {
          var i = qa(n),
            a = i.element,
            c = i.type,
            s = i.data;
          if (a) {
            var u = a._frame.id,
              l = a._componentName;
            return e.action
              .createPaymentMethodWithElement({
                frameId: u,
                elementName: l,
                type: c,
                paymentMethodData: s,
                mids: t
              })
              .then(xa);
          }
          return e.action
            .createPaymentMethodWithData({
              elementName: null,
              type: c,
              paymentMethodData: s,
              mids: t
            })
            .then(xa);
        } catch (e) {
          return Re.reject(e);
        }
      },
      Ua = function(e) {
        return (
          "https://stripe.com/docs/stripe-js/reference#stripe-" +
          e
            .split(/(?=[A-Z])/)
            .join("-")
            .toLowerCase()
        );
      },
      Ha = function(e, t) {
        return gt(ga, e, "stripe." + t + " intent secret").value;
      },
      za = function(e, t) {
        return gt(Sa, t, e).value;
      },
      Ya = function(e, t, n) {
        if ("valid" === bt(aa, n, t).type)
          throw new Pe(
            "Do not pass an Element to stripe." +
              t +
              "() directly.\nFor more information: " +
              Ua(t)
          );
        var r = gt(ka(e, t), n, t),
          o = r.value,
          i = o.source,
          a = o.paymentMethodData,
          c = o.paymentMethod,
          s = o.otherParams;
        if (null != i && (null != a || null != c))
          throw new Pe(
            t + ": Expected either source or payment_method, but not both."
          );
        return a
          ? a.element
            ? {
                confirmMode: {
                  tag: "paymentMethod-from-element",
                  type: e,
                  elementName: a.element._componentName,
                  frameId: a.element._frame.id,
                  data: a.data
                },
                otherParams: s
              }
            : {
                confirmMode: {
                  tag: "paymentMethod-from-data",
                  type: e,
                  data: a.data
                },
                otherParams: s
              }
          : c
          ? {
              confirmMode: { tag: "paymentMethod", paymentMethod: c },
              otherParams: s
            }
          : i
          ? { confirmMode: { tag: "source", source: i }, otherParams: s }
          : { confirmMode: { tag: "none" }, otherParams: s };
      },
      Ga = function(e, t) {
        var n = {
          skipFingerprint: !1,
          sandboxFingerprintFrame: !1,
          sandboxChallengeFrame: !1
        };
        return (
          -1 !== e.indexOf("Y") &&
            (t.report("3ds2.optimization.Y"), (n.skipFingerprint = !0)),
          -1 !== e.indexOf("k") &&
            (t.report("3ds2.optimization.k"), (n.sandboxFingerprintFrame = !0)),
          -1 !== e.indexOf("5") &&
            (t.report("3ds2.optimization.5"), (n.sandboxChallengeFrame = !0)),
          n
        );
      },
      Wa = function(e) {
        return (
          {
            american_express: "amex",
            visa: "visa",
            mastercard: "mastercard",
            discover: "discover"
          }[e] || "unknown"
        );
      },
      Ka = function(e, t, n) {
        if (!e) return null;
        if ("use_stripe_sdk" === e.type) {
          var r = e.use_stripe_sdk;
          switch (r.type) {
            case "cardinal_3ds2_fingerprint":
              return {
                type: "cardinal-sdk-fingerprint",
                bin: r.stripe_js.bin,
                jwt: r.stripe_js.jwt,
                env: r.stripe_js.env
              };
            case "stripe_3ds2_fingerprint":
              return {
                type: "3ds2-fingerprint",
                threeDS2Source: r.three_d_secure_2_source,
                cardBrand: Wa(r.directory_server_name),
                transactionId: r.server_transaction_id,
                optimizations: Ga(r.three_ds_optimizations, n),
                methodUrl: r.three_ds_method_url
              };
            case "stripe_3ds2_challenge":
              return {
                type: "3ds2-challenge",
                threeDS2Source: r.stripe_js.three_d_secure_2_source,
                cardBrand: Wa(r.stripe_js.directory_server_name),
                transactionId: r.stripe_js.server_transaction_id,
                optimizations: Ga(r.stripe_js.three_ds_optimizations, n),
                acsTransactionId: r.stripe_js.acs_transaction_id,
                acsUrl: r.stripe_js.acs_url
              };
            case "three_d_secure_redirect":
              return { type: "3ds1-modal", url: r.stripe_js };
          }
        }
        if ("redirect_to_url" === e.type) {
          var o = e.redirect_to_url.url;
          switch (t) {
            case sa.ideal:
              return { type: "ideal-redirect", redirectUrl: o };
            case sa.fpx:
              return { type: "fpx-redirect", redirectUrl: o };
          }
        }
        if ("authorize_with_url" === e.type) {
          var i = e.authorize_with_url.url;
          switch (t) {
            case sa.card:
              return { type: "3ds1-modal", url: i };
            case sa.ideal:
              return { type: "ideal-redirect", redirectUrl: i };
          }
        }
        return null;
      },
      Va = function(e) {
        switch (e.type) {
          case "error":
            return { error: e.error };
          case "object":
            switch (e.object.object) {
              case "payment_intent":
                return { paymentIntent: e.object };
              case "setup_intent":
                return { setupIntent: e.object };
              default:
                return Oe(e.object);
            }
          default:
            return Oe(e);
        }
      },
      Ja = function(e, t, n, r) {
        return t === jt.PAYMENT_INTENT
          ? n.action
              .retrievePaymentIntent({
                hosted: !1,
                intentSecret: e,
                locale: r,
                asErrorIfNotSucceeded: !0
              })
              .then(Va)
          : n.action
              .retrieveSetupIntent({
                hosted: !1,
                intentSecret: e,
                locale: r,
                asErrorIfNotSucceeded: !0
              })
              .then(Va);
      },
      Qa = (function() {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && c.return && c.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function(t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      $a = function(e, t, n) {
        return e.createLightboxFrame(Ot.AUTHORIZE_WITH_URL, {
          url: t,
          locale: n
        });
      },
      Za = function(e, t, n, r, o) {
        var i = Lr(),
          a = Date.now(),
          c = $a(r, e, o);
        c.show(),
          r.report("authorize_with_url.loading", { viewport: i }),
          c._on("load", function() {
            r.report("authorize_with_url.loaded", {
              loadDuration: Date.now() - a
            }),
              c.fadeInBackdrop();
          });
        var s = function(e) {
          return (
            !(!e.code || !e.type) && !(!e.payment_intent && !e.setup_intent)
          );
        };
        return (
          c._on("challenge_complete", function() {
            c.fadeOutBackdrop();
          }),
          new Re(function(e, i) {
            c._once("authorize_with_url_done", function(i) {
              r.report("authorize_with_url.done", {
                shownDuration: Date.now() - a,
                success: !("error" in i)
              });
              var u = function() {
                return Re.all([Ja(t, n, r, o), c.destroy()]).then(function(e) {
                  return Qa(e, 1)[0];
                });
              };
              "fallback" === i.type
                ? u().then(e)
                : i.result.error && !s(i.result.error)
                ? u().then(e)
                : c.destroy().then(function() {
                    return e(i.result);
                  });
            });
          })
        );
      },
      Xa = (function() {
        function e(e, t) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              !r && c.return && c.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
        return function(t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      ec =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      tc = function(e) {
        return new Re(function(t) {
          e._on("load", function() {
            return t(e);
          });
        });
      },
      nc = function(e, t, n) {
        var r = e.createHiddenFrame(Ot.STRIPE_3DS2_FINGERPRINT, {
          intentId: t,
          hosted: n
        });
        e.report("3ds2.fingerprint_frame.loading", { hosted: n, intentId: t });
        var o = tc(r);
        return (
          o.then(function() {
            e.report("3ds2.fingerprint_frame.loaded", {
              hosted: n,
              intentId: t
            });
          }),
          o
        );
      },
      rc = function(e, t, n, r) {
        var o = t.createLightboxFrame(Ot.STRIPE_3DS2_CHALLENGE, {
          intentId: e,
          hosted: r
        });
        t.report("3ds2.challenge_frame.loading", { intentId: e, hosted: r }),
          o._on("challenge_complete", function() {
            o.fadeOutBackdrop();
          });
        var i = tc(o);
        return (
          i.then(function() {
            return t.report("3ds2.challenge_frame.loaded", {
              intentId: e,
              hosted: r
            });
          }),
          r && (o.show(), o.action.show3DS2Spinner({ cardBrand: n })),
          i
        );
      },
      oc = function(e, t, n, r) {
        return t.optimizations.skipFingerprint
          ? Re.resolve({ fingerprintAttempted: !1, fingerprintData: null })
          : "" === t.methodUrl
          ? (n.report("3ds2.fingerprint.no_method_url", {
              hosted: r,
              intentId: e.id
            }),
            Re.resolve({ fingerprintAttempted: !1, fingerprintData: null }))
          : nc(n, e.id, r).then(function(e) {
              return e.action
                .perform3DS2Fingerprint({
                  transactionId: t.transactionId,
                  methodUrl: t.methodUrl,
                  shouldSandbox: t.optimizations.sandboxFingerprintFrame
                })
                .then(function(t) {
                  return e.destroy(), t;
                });
            });
      },
      ic = function(e, t, n, r, o, i) {
        var a = Date.now(),
          c = rc(e.id, r, n.cardBrand, i),
          s = function(n) {
            return c.then(function(a) {
              return new Re(function(c) {
                var s = !0;
                !(function n() {
                  Ja(e, t, r, o).then(function(e) {
                    if (s) {
                      if (e.error) {
                        var t = e.error,
                          r = t.payment_intent || t.setup_intent;
                        ((r && "requires_payment_method" === r.status) ||
                          (r && "requires_source" === r.status)) &&
                          c(e);
                      }
                      setTimeout(n, 5e3);
                    }
                  });
                })(),
                  i || (a.show(), a.fadeInBackdrop());
                var u = (n.type, n.optimizations),
                  l = le(n, ["type", "optimizations"]);
                return a.action
                  .perform3DS2Challenge(
                    ec({}, l, { shouldSandbox: u.sandboxChallengeFrame })
                  )
                  .then(function() {
                    (s = !1), c();
                  });
              });
            });
          },
          u = function(t) {
            return (
              r.report("3ds2.authenticate", { hosted: i, intentId: e.id }),
              r.action
                .authenticate3DS2({
                  threeDS2Source: n.threeDS2Source,
                  fingerprintResult: t
                })
                .then(function(t) {
                  return (
                    "error" === t.type
                      ? r.report("3ds2.authenticate.error", {
                          error: t.error,
                          hosted: i,
                          intentId: e.id
                        })
                      : r.report("3ds2.authenticate.success", {
                          hosted: i,
                          intentId: e.id
                        }),
                    t
                  );
                })
            );
          },
          l = function(n) {
            return Re.all([
              n ? Re.resolve(n) : Ja(e, t, r, o),
              c.then(function(e) {
                return e.destroy();
              })
            ]).then(function(t) {
              var n = Xa(t, 1),
                o = n[0];
              return (
                r.report(
                  "3ds2.done",
                  ec(
                    {
                      intentId: e.id,
                      hosted: i,
                      totalDuration: Date.now() - a
                    },
                    o.error ? { error: o.error, success: !1 } : { success: !0 }
                  )
                ),
                o
              );
            });
          };
        switch (n.type) {
          case "3ds2-challenge":
            return s(n).then(l);
          case "3ds2-fingerprint":
            return oc(e, n, r, i)
              .then(u)
              .then(function(t) {
                if ("error" === t.type) return l();
                var o = t.object.ares;
                return "C" !== o.transStatus
                  ? (r.report("3ds2.frictionless", {
                      hosted: i,
                      intentId: e.id
                    }),
                    l())
                  : s({
                      type: "3ds2-challenge",
                      threeDS2Source: n.threeDS2Source,
                      cardBrand: n.cardBrand,
                      transactionId: n.transactionId,
                      acsUrl: o.acsURL,
                      acsTransactionId: o.acsTransID,
                      optimizations: n.optimizations
                    }).then(l);
              });
          default:
            return Oe(n);
        }
      },
      ac = function(e) {
        return new Re(function(t, n) {
          var r = setTimeout(function() {
            t({
              type: "error",
              error: {
                code: "redirect_error",
                message: "Failed to redirect to " + e
              },
              locale: "en"
            });
          }, 3e3);
          window.addEventListener("pagehide", function() {
            clearTimeout(r);
          }),
            (window.top.location.href = e);
        });
      },
      cc = function(e, t, n) {
        e.report("redirect_error", { initiator: t, error: n.error });
      },
      sc = function(e, t, n) {
        return ac(t).then(function(t) {
          return cc(n, "ideal redirect", t), fa(t, e);
        });
      },
      uc = function(e, t, n) {
        return ac(t).then(function(t) {
          return cc(n, "fpx redirect", t), fa(t, e);
        });
      },
      lc = function(e, t, n) {
        return e.createLightboxFrame(Ot.CARDINAL_3DS2, {
          intentSecret: t,
          locale: n
        });
      },
      pc = function(e, t, n, r) {
        var o = Date.now(),
          i = lc(n, e, r);
        return (
          i.show(),
          n.report("cardinal_3ds2.frame.loading"),
          new Re(function(e) {
            i._on("load", function() {
              n.report("cardinal_3ds2.frame.loaded", {
                loadDuration: Date.now() - o
              }),
                i.fadeInBackdrop(),
                i.action.performCardinal3DS2(t).then(function(t) {
                  n.report("cardinal_3ds2.done", {
                    totalDuration: Date.now() - o,
                    success: !("error" in t)
                  }),
                    i.destroy().then(function() {
                      return e(t);
                    });
                });
            });
          })
        );
      },
      dc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      fc = function(e) {
        switch (e.type) {
          case "error":
            var t = e.error;
            if (
              "payment_intent_unexpected_state" === t.code &&
              "object" === dc(t.payment_intent) &&
              null != t.payment_intent &&
              "string" == typeof t.payment_intent.status &&
              ya(t.payment_intent.status)
            ) {
              var n = t.payment_intent;
              return { type: "object", locale: e.locale, object: n };
            }
            return e;
          case "object":
            return e;
          default:
            return Oe(e);
        }
      },
      hc = function(e, t, n, r, o) {
        var i = Ka(va(t), n, e),
          a = ma(t);
        if (!i) return Re.resolve({ paymentIntent: t });
        switch (i.type) {
          case "3ds1-modal":
            return Za(i.url, a, jt.PAYMENT_INTENT, e, r);
          case "3ds2-fingerprint":
          case "3ds2-challenge":
            return ic(a, jt.PAYMENT_INTENT, i, e, r, o);
          case "cardinal-sdk-fingerprint":
            return pc(
              t.client_secret,
              { jwt: i.jwt, bin: i.bin, env: i.env },
              e,
              r
            );
          case "ideal-redirect":
            return sc(t, i.redirectUrl, e);
          case "fpx-redirect":
            return uc(t, i.redirectUrl, e);
          default:
            return Re.resolve({ paymentIntent: t });
        }
      },
      _c = function(e, t, n, r, o) {
        return hc(e, t, n, r, o).then(function(e) {
          if (e.setupIntent)
            throw new Error("Got unexpected SetupIntent response");
          return e;
        });
      },
      mc = function(e, t, n, r) {
        return function(o) {
          var i = fc(o);
          switch (i.type) {
            case "error":
              var a = i.error,
                c = a.payment_intent;
              return n &&
                c &&
                "payment_intent_unexpected_state" === a.code &&
                ("succeeded" === c.status || "requires_capture" === c.status)
                ? Re.resolve({ paymentIntent: c })
                : Re.resolve(fa(o));
            case "object":
              var s = i.object;
              return _c(e, s, t, i.locale, r);
            default:
              return Oe(i);
          }
        };
      },
      yc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      vc = function(e, t) {
        return function(n, r, o, i, a) {
          var c = Ha(o, e),
            s = Ya(t, e, i),
            u = za(e, a),
            l = "none" === s.confirmMode.tag,
            p = n.action.confirmPaymentIntent(
              yc({}, s, {
                intentSecret: c,
                expectedType: t,
                options: u,
                mids: r
              })
            );
          return u.handleActions ? p.then(mc(n, t, l, !1)) : p.then(fa);
        };
      },
      bc = vc("confirmCardPayment", sa.card),
      gc = vc("confirmSepaDebitPayment", sa.sepa_debit),
      Ec = vc("confirmAuBecsDebitPayment", sa.au_becs_debit),
      wc = vc("confirmBacsDebitPayment", sa.bacs_debit),
      Sc = vc("confirmIdealPayment", sa.ideal),
      kc = vc("confirmFpxPayment", sa.fpx),
      Pc = function(e, t) {
        var n = Ha(e, "retrievePaymentIntent");
        return t.action
          .retrievePaymentIntent({ intentSecret: n, hosted: !1 })
          .then(fa);
      },
      Oc = function(e, t) {
        var n = Ha(e, "handleHosted3DS2Setup [internal]");
        return t.action
          .retrievePaymentIntent({ intentSecret: n, hosted: !0 })
          .then(mc(t, sa.card, !1, !0));
      },
      Ac = function(e, t) {
        var n = Ha(e, "handleCardAction");
        return t.action
          .retrievePaymentIntent({ intentSecret: n, hosted: !1 })
          .then(function(e) {
            var n = fc(e);
            switch (n.type) {
              case "error":
                return Re.resolve(fa(e));
              case "object":
                var r = n.object;
                if (ya(r.status)) {
                  if ("manual" !== r.confirmation_method)
                    throw new Pe(
                      "handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment."
                    );
                  return _c(t, r, sa.card, n.locale, !1);
                }
                throw new Pe(
                  "handleCardAction: The PaymentIntent supplied is not in the requires_action state."
                );
              default:
                return Oe(n);
            }
          });
      },
      Tc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Ic =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Rc = function(e, t) {
        if (null == e) return Ge(null);
        var n = e.type,
          r = pe(e, ["type"]),
          o = ot(rt, function() {
            return null;
          })(n, vt(t, "type"));
        return "error" === o.type ? o : Ge({ type: o.value, data: r });
      },
      Nc = function(e, t, n, r) {
        if (null === e) {
          if (null === t) {
            throw new Pe(
              n +
                ": you must additionally specify the type of payment method to create within " +
                (r ? "source_data" : "payment_method_data") +
                "."
            );
          }
          return t;
        }
        if (null === t) return e;
        if (t !== e)
          throw new Pe(
            n +
              ": you specified `type: " +
              t +
              "`, but " +
              n +
              " will create a " +
              e +
              " payment method."
          );
        return e;
      },
      Cc = function(e) {
        return function(t, n) {
          if ("object" === (void 0 === t ? "undefined" : Ic(t)) && null !== t) {
            var r = t.source,
              o = t.source_data,
              i = t.payment_method,
              a = t.payment_method_data,
              c = pe(t, [
                "source",
                "source_data",
                "payment_method",
                "payment_method_data"
              ]);
            if (null != r && "string" != typeof r)
              return Ke(
                "string",
                void 0 === r ? "undefined" : Ic(r),
                vt(n, "source")
              );
            if (null != i && "string" != typeof i)
              return Ke(
                "string",
                void 0 === i ? "undefined" : Ic(i),
                vt(n, "payment_method")
              );
            if (null != o && "object" !== (void 0 === o ? "undefined" : Ic(o)))
              return Ke(
                "object",
                void 0 === o ? "undefined" : Ic(o),
                vt(n, "source_data")
              );
            if (null != a && "object" !== (void 0 === a ? "undefined" : Ic(a)))
              return Ke(
                "object",
                void 0 === a ? "undefined" : Ic(a),
                vt(n, "payment_method_data")
              );
            var s = Rc(o, vt(n, "source_data"));
            if ("error" === s.type) return s;
            var u = s.value,
              l = Rc(a, vt(n, "payment_method_data"));
            if ("error" === l.type) return l;
            var p = l.value;
            return Ge({
              sourceData: u,
              source: null == r ? null : r,
              paymentMethodData: p,
              paymentMethod: null == i ? null : i,
              otherParams: Tc({}, e, c)
            });
          }
          return null === t
            ? Ke("object", "null", n)
            : Ke("object", void 0 === t ? "undefined" : Ic(t), n);
        };
      },
      Mc = function(e) {
        return function(t, n) {
          if (void 0 === t)
            return Ge({
              sourceData: null,
              paymentMethodData: null,
              source: null,
              paymentMethod: null,
              otherParams: {}
            });
          if ("object" !== (void 0 === t ? "undefined" : Ic(t)))
            return Ke("object", void 0 === t ? "undefined" : Ic(t), n);
          if (null === t) return Ke("object", "null", n);
          if (e) {
            if (!t.payment_intent)
              return Ge({
                sourceData: null,
                paymentMethodData: null,
                source: null,
                paymentMethod: null,
                otherParams: t
              });
            var r = t.payment_intent,
              o = pe(t, ["payment_intent"]);
            return Cc(o)(r, vt(n, "payment_intent"));
          }
          return t.payment_intent
            ? We(
                new Pe(
                  "The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object."
                )
              )
            : Cc({})(t, n);
        };
      },
      jc = function(e, t, n, r, o, i) {
        var a = bt(aa, o, r);
        if ("error" === a.type) return null;
        var c = a.value,
          s = gt(Mc(t), i, r),
          u = s.value,
          l = u.sourceData,
          p = u.source,
          d = u.paymentMethodData,
          f = u.paymentMethod,
          h = u.otherParams;
        if (!e && l)
          throw new Pe(r + ": Expected payment_method_data, not source_data.");
        if (null != p)
          throw new Pe(
            "When calling " +
              r +
              " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element."
          );
        if (null != f)
          throw new Pe(
            "When calling " +
              r +
              " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element."
          );
        var _ = c._componentName,
          m = c._frame.id,
          y = l || d || { type: null, data: {} },
          v = y.type,
          b = y.data,
          g = pa(_, v),
          E = e && !d,
          w = Nc(n, g, r, E),
          S = { elementName: _, frameId: m, type: w, data: b };
        return E
          ? {
              confirmMode: Tc({ tag: "source-from-element" }, S),
              otherParams: h
            }
          : {
              confirmMode: Tc({ tag: "paymentMethod-from-element" }, S),
              otherParams: h
            };
      },
      Lc = function(e, t, n, r, o, i) {
        var a = gt(Mc(t), o, r),
          c = a.value,
          s = c.sourceData,
          u = c.source,
          l = c.paymentMethodData,
          p = c.paymentMethod,
          d = c.otherParams;
        if (!e && s)
          throw new Pe(
            r +
              ": Expected payment_method, source, or payment_method_data, not source_data."
          );
        if (null !== u && null !== s)
          throw new Pe(
            r + ": Expected either source or source_data, but not both."
          );
        if (null !== p && null !== l)
          throw new Pe(
            r +
              ": Expected either payment_method or payment_method_data, but not both."
          );
        if (null !== p && null !== u)
          throw new Pe(
            r + ": Expected either payment_method or source, but not both."
          );
        if (s || l) {
          var f = s || l || {},
            h = f.type,
            _ = f.data,
            m = e && !l,
            y = Nc(n, h, r, m);
          return m
            ? {
                confirmMode: { tag: "source-from-data", type: y, data: _ },
                otherParams: d
              }
            : {
                confirmMode: {
                  tag: "paymentMethod-from-data",
                  type: y,
                  data: _
                },
                otherParams: d
              };
        }
        return null !== u
          ? { confirmMode: { tag: "source", source: u }, otherParams: d }
          : null !== p
          ? {
              confirmMode: { tag: "paymentMethod", paymentMethod: p },
              otherParams: d
            }
          : { confirmMode: { tag: "none" }, otherParams: d };
      },
      Dc = function(e, t, n, r) {
        return function(o, i) {
          var a = jc(e, t, n, r, o, i);
          if (a) return a;
          var c = Lc(e, t, n, r, o);
          if (c) return c;
          throw new Pe(
            "Expected: stripe." +
              r +
              "(intentSecret, element[, data]) or stripe." +
              r +
              "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication"
          );
        };
      },
      xc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      qc = function(e, t, n, r, o, i) {
        var a = gt(ga, r, "stripe.confirmPaymentIntent intent secret"),
          c = a.value,
          s = Dc(e, !1, null, "confirmPaymentIntent")(o, i);
        return t.action
          .confirmPaymentIntent(
            xc({}, s, {
              intentSecret: c,
              expectedType: null,
              options: { handleActions: !1 },
              mids: n
            })
          )
          .then(fa);
      },
      Fc = function(e, t, n, r, o, i, a) {
        var c = gt(ga, o, "stripe.handleCardPayment intent secret"),
          s = c.value,
          u = sa.card,
          l = Dc(e, r, u, "handleCardPayment")(i, a),
          p = !i && !a;
        return t.action
          .confirmPaymentIntent(
            xc({}, l, {
              intentSecret: s,
              expectedType: u,
              options: { handleActions: !0 },
              mids: n
            })
          )
          .then(mc(t, u, p, !1));
      },
      Bc = function(e, t, n, r, o, i) {
        var a = gt(ga, r, "stripe.handleSepaDebitPayment intent secret"),
          c = a.value,
          s = sa.sepa_debit,
          u = Dc(!1, n, s, "handleSepaDebitPayment")(o, i),
          l = !o && !i;
        return e.action
          .confirmPaymentIntent(
            xc({}, u, {
              intentSecret: c,
              expectedType: s,
              options: { handleActions: !0 },
              mids: t
            })
          )
          .then(mc(e, s, l, !1));
      },
      Uc = function(e, t, n, r, o, i, a) {
        var c = gt(ga, o, "stripe.handleIdealPayment intent secret"),
          s = c.value,
          u = sa.ideal,
          l = Dc(e, r, u, "handleIdealPayment")(i, a),
          p = !i && !a;
        return t.action
          .confirmPaymentIntent(
            xc({}, l, {
              intentSecret: s,
              expectedType: u,
              options: { handleActions: !0 },
              mids: n
            })
          )
          .then(mc(t, u, p, !1));
      },
      Hc = function(e, t, n, r, o, i) {
        var a = gt(ga, r, "stripe.handleFpxPayment intent secret"),
          c = a.value,
          s = sa.fpx,
          u = Dc(!1, n, s, "handleFpxPayment")(o, i),
          l = !o && !i;
        return e.action
          .confirmPaymentIntent(
            xc({}, u, {
              intentSecret: c,
              expectedType: s,
              options: { handleActions: !0 },
              mids: t
            })
          )
          .then(mc(e, s, l, !1));
      },
      zc = function(e, t, n, r, o) {
        var i = Ka(va(t), n, e),
          a = ma(t);
        if (!i) return Re.resolve({ setupIntent: t });
        switch (i.type) {
          case "3ds1-modal":
            return Za(i.url, a, jt.SETUP_INTENT, e, r);
          case "3ds2-fingerprint":
          case "3ds2-challenge":
            return ic(a, jt.SETUP_INTENT, i, e, r, o);
          default:
            return Re.resolve({ setupIntent: t });
        }
      },
      Yc = function(e, t, n, r, o) {
        return zc(e, t, n, r, o).then(function(e) {
          if (e.paymentIntent)
            throw new Error("Got unexpected PaymentIntent response");
          return e;
        });
      },
      Gc = function(e, t, n, r) {
        return function(o) {
          switch (o.type) {
            case "error":
              var i = o.error,
                a = i.setup_intent;
              return n && a && "succeeded" === a.status
                ? Re.resolve({ setupIntent: a })
                : Re.resolve({ error: i });
            case "object":
              var c = o.object;
              return Yc(e, c, t, o.locale, r);
            default:
              return Oe(o);
          }
        };
      },
      Wc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Kc = function(e, t) {
        return function(n, r, o, i, a) {
          var c = Ha(o, e),
            s = Ya(t, e, i),
            u = za(e, a),
            l = "none" === s.confirmMode.tag,
            p = n.action.confirmSetupIntent(
              Wc({}, s, {
                intentSecret: c,
                expectedType: t,
                options: u,
                mids: r
              })
            );
          return u.handleActions ? p.then(Gc(n, t, l, !1)) : p.then(ha);
        };
      },
      Vc = Kc("confirmCardSetup", sa.card),
      Jc = Kc("confirmSepaDebitSetup", sa.sepa_debit),
      Qc = Kc("confirmAuBecsDebitSetup", sa.au_becs_debit),
      $c = Kc("confirmBacsDebitSetup", sa.bacs_debit),
      Zc = function(e, t) {
        var n = Ha(e, "retrieveSetupIntent");
        return t.action
          .retrieveSetupIntent({ intentSecret: n, hosted: !1 })
          .then(ha);
      },
      Xc = function(e, t) {
        var n = Ha(e, "handleHosted3DS2Setup [internal]");
        return t.action
          .retrieveSetupIntent({ intentSecret: n, hosted: !0 })
          .then(Gc(t, sa.card, !1, !0));
      },
      es =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      ts = function(e, t, n, r, o) {
        var i = gt(ga, n, "stripe.handleCardSetup intent secret"),
          a = i.value,
          c = sa.card,
          s = Dc(!1, !1, c, "handleCardSetup")(r, o),
          u = !r && !o;
        return e.action
          .confirmSetupIntent(
            es({}, s, {
              intentSecret: a,
              expectedType: c,
              options: { handleActions: !0 },
              mids: t
            })
          )
          .then(Gc(e, c, u, !1));
      },
      ns = function(e, t, n, r, o) {
        var i = gt(ga, n, "stripe.handleSepaDebitSetup intent secret"),
          a = i.value,
          c = sa.sepa_debit,
          s = Dc(!1, !1, c, "handleSepaDebitSetup")(r, o),
          u = !r && !o;
        return e.action
          .confirmSetupIntent(
            es({}, s, {
              intentSecret: a,
              expectedType: c,
              options: { handleActions: !0 },
              mids: t
            })
          )
          .then(Gc(e, c, u, !1));
      },
      rs = function(e, t, n, r, o) {
        var i = gt(ga, n, "stripe.confirmSetupIntent intent secret"),
          a = i.value,
          c = Dc(!1, !1, null, "confirmSetupIntent")(r, o);
        return e.action
          .confirmSetupIntent(
            es({}, c, {
              otherParams: es({}, c.otherParams),
              intentSecret: a,
              expectedType: null,
              options: { handleActions: !1 },
              mids: t
            })
          )
          .then(ha);
      },
      os = [xr.checkout_beta_2, xr.checkout_beta_3, xr.checkout_beta_4],
      is = [
        xr.checkout_beta_2,
        xr.checkout_beta_3,
        xr.checkout_beta_4,
        xr.checkout_pm_types
      ],
      as = {
        da: "da",
        de: "de",
        en: "en",
        es: "es",
        fi: "fi",
        fr: "fr",
        it: "it",
        ja: "ja",
        nl: "nl",
        nb: "nb",
        pl: "pl",
        pt: "pt",
        sv: "sv",
        zh: "zh"
      },
      cs = Object.keys(as),
      ss =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      us = {
        sku: Je(rt),
        plan: Je(rt),
        clientReferenceId: Je(rt),
        locale: Je(Xe.apply(void 0, ["auto"].concat(fe(cs)))),
        customerEmail: Je(rt),
        billingAddressCollection: Je(Xe("required", "auto")),
        submitType: Je(Xe("auto", "pay", "book", "donate")),
        paymentMethodTypes: Je(dt(Xe("card", "ideal"))),
        allowIncompleteSubscriptions: Je(it)
      },
      ls = function(e, t, n) {
        if ((e && t) || ((e || t) && n))
          throw new Pe(
            "stripe.redirectToCheckout: Expected only one of sku, plan, or items."
          );
        if ("string" == typeof e) return [{ sku: e, quantity: 1 }];
        if ("string" == typeof t) return [{ plan: t, quantity: 1 }];
        if (n)
          return n.map(function(e) {
            return "sku" === e.type
              ? { sku: e.id, quantity: e.quantity }
              : { plan: e.id, quantity: e.quantity };
          });
        throw new Pe(
          "stripe.redirectToCheckout: You must provide either sku, plan, or items."
        );
      },
      ps = function(e) {
        var t = mt(
            ss({}, us, {
              items: Je(
                Qe(
                  dt(mt({ type: Xe("plan"), quantity: ct(0), id: rt })),
                  dt(mt({ type: Xe("sku"), quantity: ct(0), id: rt }))
                )
              ),
              successUrl: rt,
              cancelUrl: rt
            })
          ),
          n = gt(t, e, "stripe.redirectToCheckout"),
          r = n.value,
          o = r.sku,
          i = r.plan,
          a = r.items,
          c = de(r, ["sku", "plan", "items"]),
          s = ls(o, i, a);
        return ss({ tag: "no-session", items: s }, c);
      },
      ds = function(e, t) {
        var n = mt(
            ss({}, us, {
              sessionId: Je(rt),
              successUrl: Je(rt),
              cancelUrl: Je(rt),
              items: Je(
                Qe(
                  dt(mt({ quantity: ct(0), plan: rt })),
                  dt(mt({ quantity: ct(0), sku: rt }))
                )
              )
            })
          ),
          r = gt(n, e, "stripe.redirectToCheckout"),
          o = r.value;
        if (o.sessionId) {
          var i = o.sessionId;
          if (Object.keys(o).length > 1)
            throw new Pe(
              "stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession."
            );
          if (!/^cs_/.test(i))
            throw new Pe(
              "stripe.redirectToCheckout: Invalid value for sessionId. You specified '" +
                i +
                "'."
            );
          if ("livemode" === t && /^cs_test_/.test(i))
            throw new Pe(
              "stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key."
            );
          if ("testmode" === t && /^cs_live_/.test(i))
            throw new Pe(
              "stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key."
            );
          return { tag: "session", sessionId: i };
        }
        var a = (o.sessionId, o.sku, o.plan, o.items),
          c = o.successUrl,
          s = o.cancelUrl,
          u = de(o, [
            "sessionId",
            "sku",
            "plan",
            "items",
            "successUrl",
            "cancelUrl"
          ]);
        if (!a)
          throw new Pe(
            "stripe.redirectToCheckout: You must provide one of items or sessionId."
          );
        if (!c || !s)
          throw new Pe(
            "stripe.redirectToCheckout: You must provide successUrl and cancelUrl."
          );
        return ss(
          { tag: "no-session", items: a, successUrl: c, cancelUrl: s },
          u
        );
      },
      fs = function(e, t) {
        var n = ds(e, t);
        if ("no-session" === n.tag) {
          var r = n.successUrl,
            o = n.cancelUrl;
          if (!wt(r))
            throw new Pe(
              "stripe.redirectToCheckout: successUrl must start with either http:// or https://."
            );
          if (!wt(o))
            throw new Pe(
              "stripe.redirectToCheckout: cancelUrl must start with either http:// or https://."
            );
          return n;
        }
        return n;
      },
      hs = function(e, t, n) {
        if (n && n.paymentMethodTypes) {
          if (-1 === t.indexOf("checkout_pm_types"))
            throw new Pe(
              "Invalid stripe.redirectToCheckout parameter: paymentMethodTypes is not an accepted parameter."
            );
          if (e)
            throw new Pe(
              "Invalid stripe.redirectToCheckout parameter: paymentMethodTypes is not an accepted parameter for " +
                e +
                ". Please follow our migration guide to update to the final version of Checkout: https://stripe.com/docs/payments/checkout/migration-from-beta"
            );
        }
      },
      _s = function(e, t) {
        return "session" === t.tag ||
          null == e ||
          t.locale ||
          -1 === ["auto"].concat(fe(cs)).indexOf(e)
          ? t
          : ss({}, t, { locale: e });
      },
      ms = function(e, t, n) {
        var r = Ne(os, function(t) {
          return Fr(e, t);
        });
        switch ((hs(r, e, t), r)) {
          case "checkout_beta_2":
            return ps(t);
          case "checkout_beta_3":
            return ds(t, n);
          case "checkout_beta_4":
          default:
            return fs(t, n);
        }
      },
      ys = function(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : "unknown";
        return _s(t, ms(e, n, r));
      },
      vs = ys,
      bs =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      gs = function(e, t) {
        var n = function(t) {
          return cc(e, "redirectToCheckout", t), { error: t.error };
        };
        return ac(t).then(n);
      },
      Es = function(e, t, n, r) {
        return function(o) {
          e.report("redirect_to_checkout.options", {
            betas: t,
            options: o,
            globalLocale: r
          });
          var i = vs(t, r, o, e.livemode());
          if ("session" === i.tag) {
            var a = i,
              c = a.sessionId;
            return e.action
              .createPaymentPageWithSession({
                betas: t,
                mids: n(),
                sessionId: c
              })
              .then(function(t) {
                if ("error" === t.type) return { error: t.error };
                var n = t.object.url;
                return gs(e, n);
              });
          }
          var s = i,
            u = (s.tag, s.items),
            l = s.successUrl,
            p = s.cancelUrl,
            d = s.clientReferenceId,
            f = s.customerEmail,
            h = s.billingAddressCollection,
            _ = s.submitType,
            m = s.paymentMethodTypes,
            y = s.allowIncompleteSubscriptions,
            v = he(s, [
              "tag",
              "items",
              "successUrl",
              "cancelUrl",
              "clientReferenceId",
              "customerEmail",
              "billingAddressCollection",
              "submitType",
              "paymentMethodTypes",
              "allowIncompleteSubscriptions"
            ]),
            b = u.map(function(e) {
              if (e.sku)
                return { type: "sku", id: e.sku, quantity: e.quantity };
              if (e.plan)
                return { type: "plan", id: e.plan, quantity: e.quantity };
              throw new Error("Unexpected item shape.");
            }),
            g = Ne(os, function(e) {
              return Fr(t, e);
            });
          return e.action
            .createPaymentPage(
              bs(
                {
                  betas: t,
                  mids: n(),
                  items: b,
                  success_url: l,
                  cancel_url: p,
                  client_reference_id: d,
                  customer_email: f,
                  billing_address_collection: h,
                  submit_type: _,
                  payment_method_types: m,
                  use_payment_methods: !g,
                  allow_incomplete_subscriptions: y
                },
                v
              )
            )
            .then(function(t) {
              if ("error" === t.type) return { error: t.error };
              var n = t.object.url;
              return gs(e, n);
            });
        };
      },
      ws =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      Ss = function(e) {
        switch (e.type) {
          case "object":
            return { token: e.object };
          case "error":
            return { error: e.error };
          default:
            return Oe(e);
        }
      },
      ks = function(e) {
        return "object" === (void 0 === e ? "undefined" : ws(e)) && null !== e
          ? e
          : {};
      },
      Ps = function(e, t, n) {
        var r = ca(t);
        if (r && "cardCvc" === r._componentName) {
          var o = r._frame.id;
          return e.action.tokenizeCvcUpdate({ frameId: o, mids: n }).then(Ss);
        }
        throw new Pe(
          "You must provide a `cardCvc` Element to create a `cvc_update` token."
        );
      },
      Os = function(e, t) {
        return function(n, r) {
          var o = ca(n);
          if (o) {
            var i = o._frame.id,
              a = o._componentName,
              c = ks(r);
            return e.action
              .tokenizeWithElement({
                frameId: i,
                elementName: a,
                tokenData: c,
                mids: t
              })
              .then(Ss);
          }
          if ("string" == typeof n) {
            var s = n,
              u = ks(r);
            return e.action
              .tokenizeWithData({
                elementName: null,
                type: s,
                tokenData: u,
                mids: t
              })
              .then(Ss);
          }
          throw new Pe(
            "You must provide a Stripe Element or a valid token type to create a Token."
          );
        };
      },
      As = function(e) {
        switch (e.type) {
          case "object":
            return { radarSession: e.object };
          case "error":
            return { error: e.error };
          default:
            return Oe(e);
        }
      },
      Ts = function(e, t) {
        return e.action.createRadarSession({ mids: t }).then(As);
      },
      Is =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Rs = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Ns = yt({
        apiKey: rt,
        stripeAccount: Je(rt),
        locale: Je(rt),
        __privateApiUrl: Je(rt),
        __checkout: Je(yt({ mids: yt({ muid: rt, sid: rt }) })),
        __hosted3DS: Je(it),
        canCreateRadarSession: Je(it),
        betas: Je(dt(et.apply(void 0, me(qr))))
      }),
      Cs = function(e) {
        return (
          "You have an in-flight " +
          e +
          "! Please be sure to disable your form submit button when " +
          e +
          " is called."
        );
      },
      Ms = function(e) {
        return function() {
          throw new Pe(
            "You cannot call `stripe." +
              e +
              "` without supplying a PaymentIntents beta flag when initializing Stripe.js.    You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart."
          );
        };
      },
      js = (function() {
        function e(t, n) {
          var r = this;
          _e(this, e), Ls.call(this);
          var o = gt(Ns, t || {}, "Stripe()"),
            i = o.value,
            a = o.warnings,
            c = i.apiKey,
            s = i.stripeAccount,
            u = i.locale,
            l = i.__privateApiUrl,
            p = i.__checkout,
            d = i.__hosted3DS,
            f = i.canCreateRadarSession,
            h = i.betas;
          if ("" === c)
            throw new Pe(
              "Please call Stripe() with your publishable key. You used an empty string."
            );
          if (0 === c.indexOf("sk_"))
            throw new Pe(
              "You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead."
            );
          p && p.mids && (e._ec = new Na({ checkoutIds: p.mids })),
            (this._apiKey = c),
            (this._keyMode = Be(c)),
            (this._locale = u || null),
            (this._betas = h || []),
            (this._stripeAccount = s || null),
            (this._isCheckout = !!p),
            (this._controller = new jr(
              Is(
                {
                  apiKey: c,
                  __privateApiUrl: l,
                  stripeAccount: s,
                  betas: this._betas,
                  stripeJsId: e.stripeJsId
                },
                this._locale ? { locale: this._locale } : {}
              )
            )),
            a.forEach(function(e) {
              return r._controller.warn(e);
            }),
            this._ensureHTTPS(),
            this._ensureStripeHosted(n),
            this._attachPaymentIntentMethods(this._betas, !!d),
            this._attachLegacyPaymentIntentMethods(this._betas),
            this._attachCheckoutMethods(this._betas),
            this._attachPrivateMethodsForCheckout(this._isCheckout),
            this._attachCreateRadarSession(f || !1);
        }
        return (
          Rs(e, [
            {
              key: "_attachCreateRadarSession",
              value: function(e) {
                var t = this;
                e &&
                  (this.createRadarSession = an(function() {
                    var e = t._mids();
                    return Ts(t._controller, e);
                  }));
              }
            },
            {
              key: "_attachPaymentIntentMethods",
              value: function(e, t) {
                var n = this,
                  r = function() {
                    return n._mids();
                  };
                (this.createPaymentMethod = un(function() {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  return Ba.apply(void 0, [n._controller, r()].concat(t));
                })),
                  (this.retrievePaymentIntent = cn(function(e) {
                    return Pc(e, n._controller);
                  })),
                  (this.retrieveSetupIntent = cn(function(e) {
                    return Zc(e, n._controller);
                  }));
                var o = Rn(Ac, Cs("handleCardAction"));
                this.handleCardAction = cn(function(e) {
                  return o(e, n._controller);
                });
                var i = Rn(bc, Cs("confirmCardPayment"));
                this.confirmCardPayment = un(function() {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  return i.apply(void 0, [n._controller, r()].concat(t));
                });
                var a = Rn(Vc, Cs("confirmCardSetup"));
                (this.confirmCardSetup = un(function() {
                  for (
                    var e = arguments.length, t = Array(e), o = 0;
                    o < e;
                    o++
                  )
                    t[o] = arguments[o];
                  return a.apply(void 0, [n._controller, r()].concat(t));
                })),
                  (this.confirmIdealPayment = un(function() {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return Sc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmSepaDebitPayment = un(function() {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return gc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmSepaDebitSetup = un(function() {
                    for (
                      var e = arguments.length, t = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return Jc.apply(void 0, [n._controller, r()].concat(t));
                  })),
                  (this.confirmFpxPayment = Ms("confirmFpxPayment")),
                  Fr(this._betas, xr.fpx_bank_beta_1) &&
                    (this.confirmFpxPayment = un(function() {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return kc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                  Fr(this._betas, xr.au_bank_account_beta_2) &&
                    ((this.confirmAuBecsDebitPayment = un(function() {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return Ec.apply(void 0, [n._controller, r()].concat(t));
                    })),
                    (this.confirmAuBecsDebitSetup = un(function() {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return Qc.apply(void 0, [n._controller, r()].concat(t));
                    }))),
                  Fr(this._betas, xr.bacs_debit_beta) &&
                    ((this.confirmBacsDebitPayment = un(function() {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return wc.apply(void 0, [n._controller, r()].concat(t));
                    })),
                    (this.confirmBacsDebitSetup = un(function() {
                      for (
                        var e = arguments.length, t = Array(e), o = 0;
                        o < e;
                        o++
                      )
                        t[o] = arguments[o];
                      return $c.apply(void 0, [n._controller, r()].concat(t));
                    }))),
                  t &&
                    ((this.handleHosted3DS2Payment = cn(function(e) {
                      return Oc(e, n._controller);
                    })),
                    (this.handleHosted3DS2Setup = cn(function(e) {
                      return Xc(e, n._controller);
                    })));
              }
            },
            {
              key: "_attachLegacyPaymentIntentMethods",
              value: function(e) {
                var t = this,
                  n =
                    Fr(this._betas, xr.payment_intent_beta_1) ||
                    Fr(this._betas, xr.payment_intent_beta_2),
                  r = function() {
                    return t._mids();
                  },
                  o = un(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return qc.apply(void 0, [!0, t._controller, r()].concat(n));
                  }),
                  i = un(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return qc.apply(void 0, [!1, t._controller, r()].concat(n));
                  }),
                  a = Rn(Fc, Cs("handleCardPayment")),
                  c = un(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return a.apply(
                      void 0,
                      [!0, t._controller, r(), n].concat(o)
                    );
                  }),
                  s = un(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return a.apply(
                      void 0,
                      [!1, t._controller, r(), n].concat(o)
                    );
                  }),
                  u = Rn(ts, Cs("handleCardSetup")),
                  l = un(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return u.apply(void 0, [t._controller, r()].concat(n));
                  }),
                  p = un(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return rs.apply(void 0, [t._controller, r()].concat(n));
                  }),
                  d = un(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Bc.apply(void 0, [t._controller, r(), n].concat(o));
                  }),
                  f = un(function() {
                    for (
                      var e = arguments.length, n = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      n[o] = arguments[o];
                    return ns.apply(void 0, [t._controller, r()].concat(n));
                  }),
                  h = un(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Uc.apply(
                      void 0,
                      [!0, t._controller, r(), n].concat(o)
                    );
                  }),
                  _ = un(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Uc.apply(
                      void 0,
                      [!1, t._controller, r(), n].concat(o)
                    );
                  }),
                  m = un(function() {
                    for (
                      var e = arguments.length, o = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      o[i] = arguments[i];
                    return Hc.apply(void 0, [t._controller, r(), n].concat(o));
                  });
                (this.handleCardPayment = s),
                  (this.confirmPaymentIntent = i),
                  (this.handleCardSetup = l),
                  (this.confirmSetupIntent = p),
                  (this.fulfillPaymentIntent = Ms("fulfillPaymentIntent")),
                  (this.handleSepaDebitPayment = Ms("handleSepaDebitPayment")),
                  (this.handleSepaDebitSetup = Ms("handleSepaDebitSetup")),
                  (this.handleIdealPayment = Ms("handleIdealPayment")),
                  (this.handleFpxPayment = Ms("handleFpxPayment")),
                  Fr(this._betas, xr.payment_intent_beta_1)
                    ? (this.fulfillPaymentIntent = c)
                    : (Fr(this._betas, xr.payment_intent_beta_3) ||
                        Fr(this._betas, xr.payment_intent_beta_2)) &&
                      (this.handleCardPayment = c),
                  Fr(this._betas, xr.payment_intent_beta_3) &&
                    ((this.confirmPaymentIntent = o),
                    (this.handleIdealPayment = h),
                    (this.handleSepaDebitPayment = d)),
                  Fr(this._betas, xr.fpx_bank_beta_1) &&
                    (this.handleFpxPayment = m),
                  Fr(this._betas, xr.ideal_pm_beta_1) &&
                    (this.handleIdealPayment = _),
                  Fr(this._betas, xr.sepa_pm_beta_1) &&
                    ((this.handleSepaDebitPayment = d),
                    (this.handleSepaDebitSetup = f));
              }
            },
            {
              key: "_attachPrivateMethodsForCheckout",
              value: function(e) {
                var t = this;
                e &&
                  (this.tryNextAction = sn(function(e, n) {
                    var r = gt(Ea, e, "Payment Intent"),
                      o = r.value,
                      i = Object.keys(sa).map(function(e) {
                        return sa[e];
                      }),
                      a = gt(Xe.apply(void 0, me(i)), n, "Source type"),
                      c = a.value;
                    return "payment_intent" === o.object
                      ? _c(t._controller, o, c, "auto", !1)
                      : Yc(t._controller, o, c, "auto", !1);
                  }));
              }
            },
            {
              key: "_attachCheckoutMethods",
              value: function(e) {
                var t = this,
                  n = function() {
                    return t._mids();
                  },
                  r = e.reduce(function(e, t) {
                    var n = Ne(is, function(e) {
                      return e === t;
                    });
                    return n ? [].concat(me(e), [n]) : e;
                  }, []);
                this.redirectToCheckout = Es(
                  this._controller,
                  r,
                  n,
                  this._locale
                );
              }
            },
            {
              key: "_ensureHTTPS",
              value: function() {
                var e = window.location.protocol,
                  t = -1 !== ["https:", "file:", "ionic:"].indexOf(e),
                  n =
                    -1 !==
                    ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(
                      window.location.hostname
                    ),
                  r = this._keyMode === Fe.live,
                  o =
                    "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/web/setup#http-requirements";
                if (!t) {
                  if (r && !n)
                    throw (this._controller.report(
                      "user_error.non_https_error",
                      { protocol: e }
                    ),
                    new Pe(o));
                  !r || n
                    ? window.console &&
                      console.warn(
                        "You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS."
                      )
                    : window.console && console.warn(o);
                }
              }
            },
            {
              key: "_ensureStripeHosted",
              value: function(e) {
                if (!e)
                  throw (this._controller.report("user_error.self_hosted"),
                  new Pe(
                    "Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs"
                  ));
              }
            },
            {
              key: "_mids",
              value: function() {
                return e._ec ? e._ec.ids() : null;
              }
            }
          ]),
          e
        );
      })();
    (js.version = 3),
      (js.stripeJsId = Yt()),
      (js._ec = (function() {
        return "https://checkout.stripe.com/".match(
          new RegExp(document.location.protocol + "//" + document.location.host)
        )
          ? null
          : new Na();
      })());
    var Ls = function() {
        var e = this;
        (this.elements = cn(function(t) {
          return new na(
            e._controller,
            Is({}, e._locale ? { locale: e._locale } : {}, t, {
              betas: e._betas
            })
          );
        })),
          (this.createToken = sn(function(t, n) {
            var r = e._mids();
            if ("cvc_update" === t) {
              if (Fr(e._betas, xr.cvc_update_beta_1))
                return Ps(e._controller, n, r);
              throw new Pe(
                "You cannot create a 'cvc_update' token without using the 'cvc_update_beta_1' beta flag."
              );
            }
            return Os(e._controller, r)(t, n);
          })),
          (this.createSource = sn(function(t, n) {
            var r = ca(t),
              o = Ma(r ? n : t),
              i = o || { type: null, data: {} },
              a = i.type,
              c = i.data;
            if (r) {
              var s = r._frame.id,
                u = r._componentName;
              return !o && la(u)
                ? Re.reject(
                    new Pe(
                      "Please provide Source creation parameters to createSource."
                    )
                  )
                : e._controller.action
                    .createSourceWithElement({
                      frameId: s,
                      elementName: u,
                      type: a,
                      sourceData: c,
                      mids: e._mids()
                    })
                    .then(ja);
            }
            return o
              ? a
                ? e._controller.action
                    .createSourceWithData({
                      elementName: null,
                      type: a,
                      sourceData: c,
                      mids: e._mids()
                    })
                    .then(ja)
                : Re.reject(
                    new Pe("Please provide a source type to createSource.")
                  )
              : Re.reject(
                  new Pe(
                    "Please provide either an Element or Source creation parameters to createSource."
                  )
                );
          })),
          (this.retrieveSource = cn(function(t) {
            var n = gt(Da, { source: t }, "retrieveSource"),
              r = n.value;
            return (
              n.warnings.forEach(function(t) {
                return e._controller.warn(t);
              }),
              e._controller.action.retrieveSource(r).then(ja)
            );
          })),
          (this.paymentRequest = sn(function(t, n) {
            Ue(e._keyMode);
            var r = e._isCheckout && n ? n : null;
            return oa(
              e._controller,
              { apiKey: e._apiKey, accountId: e._stripeAccount },
              e._mids(),
              t,
              e._betas,
              r
            );
          }));
      },
      Ds = js,
      xs =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      qs =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      Fs = (function() {
        if (document.currentScript) {
          var e = St(document.currentScript.src);
          return !e || tr(e.origin);
        }
        return !0;
      })(),
      Bs = function(e, t) {
        return new Ds(
          qs(
            { apiKey: e },
            t && "object" === (void 0 === t ? "undefined" : xs(t)) ? t : {}
          ),
          Fs
        );
      };
    (Bs.version = Ds.version),
      window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3
        ? (window.Stripe.StripeV3 = Bs)
        : window.Stripe
        ? window.console &&
          console.warn(
            "It looks like Stripe.js was loaded more than one time. Please only load it once per page."
          )
        : (window.Stripe = Bs);
    t.default = Bs;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      var t = new o(o._61);
      return (t._81 = 1), (t._65 = e), t;
    }
    var o = n(3);
    e.exports = o;
    var i = r(!0),
      a = r(!1),
      c = r(null),
      s = r(void 0),
      u = r(0),
      l = r("");
    (o.resolve = function(e) {
      if (e instanceof o) return e;
      if (null === e) return c;
      if (void 0 === e) return s;
      if (!0 === e) return i;
      if (!1 === e) return a;
      if (0 === e) return u;
      if ("" === e) return l;
      if ("object" == typeof e || "function" == typeof e)
        try {
          var t = e.then;
          if ("function" == typeof t) return new o(t.bind(e));
        } catch (e) {
          return new o(function(t, n) {
            n(e);
          });
        }
      return r(e);
    }),
      (o.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new o(function(e, n) {
          function r(a, c) {
            if (c && ("object" == typeof c || "function" == typeof c)) {
              if (c instanceof o && c.then === o.prototype.then) {
                for (; 3 === c._81; ) c = c._65;
                return 1 === c._81
                  ? r(a, c._65)
                  : (2 === c._81 && n(c._65),
                    void c.then(function(e) {
                      r(a, e);
                    }, n));
              }
              var s = c.then;
              if ("function" == typeof s) {
                return void new o(s.bind(c)).then(function(e) {
                  r(a, e);
                }, n);
              }
            }
            (t[a] = c), 0 == --i && e(t);
          }
          if (0 === t.length) return e([]);
          for (var i = t.length, a = 0; a < t.length; a++) r(a, t[a]);
        });
      }),
      (o.reject = function(e) {
        return new o(function(t, n) {
          n(e);
        });
      }),
      (o.race = function(e) {
        return new o(function(t, n) {
          e.forEach(function(e) {
            o.resolve(e).then(t, n);
          });
        });
      }),
      (o.prototype.catch = function(e) {
        return this.then(null, e);
      });
  },
  function(e, t, n) {
    "use strict";
    function r() {}
    function o(e) {
      try {
        return e.then;
      } catch (e) {
        return (y = e), v;
      }
    }
    function i(e, t) {
      try {
        return e(t);
      } catch (e) {
        return (y = e), v;
      }
    }
    function a(e, t, n) {
      try {
        e(t, n);
      } catch (e) {
        return (y = e), v;
      }
    }
    function c(e) {
      if ("object" != typeof this)
        throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof e) throw new TypeError("not a function");
      (this._45 = 0),
        (this._81 = 0),
        (this._65 = null),
        (this._54 = null),
        e !== r && _(e, this);
    }
    function s(e, t, n) {
      return new e.constructor(function(o, i) {
        var a = new c(r);
        a.then(o, i), u(e, new h(t, n, a));
      });
    }
    function u(e, t) {
      for (; 3 === e._81; ) e = e._65;
      if ((c._10 && c._10(e), 0 === e._81))
        return 0 === e._45
          ? ((e._45 = 1), void (e._54 = t))
          : 1 === e._45
          ? ((e._45 = 2), void (e._54 = [e._54, t]))
          : void e._54.push(t);
      l(e, t);
    }
    function l(e, t) {
      m(function() {
        var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
        if (null === n)
          return void (1 === e._81 ? p(t.promise, e._65) : d(t.promise, e._65));
        var r = i(n, e._65);
        r === v ? d(t.promise, y) : p(t.promise, r);
      });
    }
    function p(e, t) {
      if (t === e)
        return d(e, new TypeError("A promise cannot be resolved with itself."));
      if (t && ("object" == typeof t || "function" == typeof t)) {
        var n = o(t);
        if (n === v) return d(e, y);
        if (n === e.then && t instanceof c)
          return (e._81 = 3), (e._65 = t), void f(e);
        if ("function" == typeof n) return void _(n.bind(t), e);
      }
      (e._81 = 1), (e._65 = t), f(e);
    }
    function d(e, t) {
      (e._81 = 2), (e._65 = t), c._97 && c._97(e, t), f(e);
    }
    function f(e) {
      if ((1 === e._45 && (u(e, e._54), (e._54 = null)), 2 === e._45)) {
        for (var t = 0; t < e._54.length; t++) u(e, e._54[t]);
        e._54 = null;
      }
    }
    function h(e, t, n) {
      (this.onFulfilled = "function" == typeof e ? e : null),
        (this.onRejected = "function" == typeof t ? t : null),
        (this.promise = n);
    }
    function _(e, t) {
      var n = !1,
        r = a(
          e,
          function(e) {
            n || ((n = !0), p(t, e));
          },
          function(e) {
            n || ((n = !0), d(t, e));
          }
        );
      n || r !== v || ((n = !0), d(t, y));
    }
    var m = n(4),
      y = null,
      v = {};
    (e.exports = c),
      (c._10 = null),
      (c._97 = null),
      (c._61 = r),
      (c.prototype.then = function(e, t) {
        if (this.constructor !== c) return s(this, e, t);
        var n = new c(r);
        return u(this, new h(e, t, n)), n;
      });
  },
  function(e, t, n) {
    "use strict";
    (function(t) {
      function n(e) {
        a.length || (i(), (c = !0)), (a[a.length] = e);
      }
      function r() {
        for (; s < a.length; ) {
          var e = s;
          if (((s += 1), a[e].call(), s > u)) {
            for (var t = 0, n = a.length - s; t < n; t++) a[t] = a[t + s];
            (a.length -= s), (s = 0);
          }
        }
        (a.length = 0), (s = 0), (c = !1);
      }
      function o(e) {
        return function() {
          function t() {
            clearTimeout(n), clearInterval(r), e();
          }
          var n = setTimeout(t, 0),
            r = setInterval(t, 50);
        };
      }
      e.exports = n;
      var i,
        a = [],
        c = !1,
        s = 0,
        u = 1024,
        l = void 0 !== t ? t : self,
        p = l.MutationObserver || l.WebKitMutationObserver;
      (i =
        "function" == typeof p
          ? (function(e) {
              var t = 1,
                n = new p(e),
                r = document.createTextNode("");
              return (
                n.observe(r, { characterData: !0 }),
                function() {
                  (t = -t), (r.data = t);
                }
              );
            })(r)
          : o(r)),
        (n.requestFlush = i),
        (n.makeRequestCallFromTimer = o);
    }.call(t, n(5)));
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    var r, o;
    !(function() {
      "use strict";
      var n = (function() {
        function e() {}
        function t(e, t) {
          for (var n = t.length, r = 0; r < n; ++r) i(e, t[r]);
        }
        function n(e, t) {
          e[t] = !0;
        }
        function r(e, t) {
          for (var n in t) c.call(t, n) && (e[n] = !!t[n]);
        }
        function o(e, t) {
          for (var n = t.split(s), r = n.length, o = 0; o < r; ++o)
            e[n[o]] = !0;
        }
        function i(e, i) {
          if (i) {
            var a = typeof i;
            "string" === a
              ? o(e, i)
              : Array.isArray(i)
              ? t(e, i)
              : "object" === a
              ? r(e, i)
              : "number" === a && n(e, i);
          }
        }
        function a() {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          var i = new e();
          t(i, r);
          var a = [];
          for (var c in i) i[c] && a.push(c);
          return a.join(" ");
        }
        e.prototype = Object.create(null);
        var c = {}.hasOwnProperty,
          s = /\s+/;
        return a;
      })();
      void 0 !== e && e.exports
        ? (e.exports = n)
        : ((r = []),
          void 0 !==
            (o = function() {
              return n;
            }.apply(t, r)) && (e.exports = o));
    })();
  },
  function(e, t) {}
]);
