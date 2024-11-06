import { onMounted } from "vue";

export function useApi() {
  var A =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (d, g, c) {
          if (d == Array.prototype || d == Object.prototype) return d;
          d[g] = c.value;
          return d;
        };
  function E(d) {
    d = [
      "object" == typeof globalThis && globalThis,
      d,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var g = 0; g < d.length; ++g) {
      var c = d[g];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var F = E(this);
  function G(d, g) {
    if (g)
      a: {
        var c = F;
        d = d.split(".");
        for (var h = 0; h < d.length - 1; h++) {
          var m = d[h];
          if (!(m in c)) break a;
          c = c[m];
        }
        d = d[d.length - 1];
        h = c[d];
        g = g(h);
        g != h &&
          null != g &&
          A(c, d, { configurable: !0, writable: !0, value: g });
      }
  }
  G("Array.prototype.includes", function (d) {
    return d
      ? d
      : function (g, c) {
          var h = this;
          h instanceof String && (h = String(h));
          var m = h.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + m, 0)); c < m; c++) {
            var q = h[c];
            if (q === g || Object.is(q, g)) return !0;
          }
          return !1;
        };
  });
  G("String.prototype.trimLeft", function (d) {
    function g() {
      return this.replace(/^[\s\xa0]+/, "");
    }
    return d || g;
  });
  G("String.prototype.trimStart", function (d) {
    return d || String.prototype.trimLeft;
  });
  const EndlessPaper = (function () {
    function d(a, b, ...e) {
      let k = {};
      k.fct = b;
      k.data = e;
      a.contentWindow.postMessage(k, "*");
    }
    function g(a, b) {
      a = f.h.get(a);
      void 0 !== a &&
        a.includes(b) &&
        console.warn("EndlessPaper: " + b + " is not available.");
    }
    function c(a) {
      if ("string" == typeof a) {
        let b = document.getElementsByClassName("ep-webxp");
        if (0 === b.length)
          return console.error("EndlessPaper: no WebXP exists"), null;
        for (let e = 0; e < b.length; e++)
          if (b[e].children.item(0).src == a) return b[e].children.item(0);
        console.error("EndlessPaper: invalid url provided");
        return null;
      }
      if (void 0 != a && "IFRAME" == a.nodeName) return a;
      console.error("EndlessPaper: invalid iframe provided");
      return null;
    }
    function h() {
      let a = document.getElementsByClassName("ep-webxp");
      return 0 === a.length
        ? (console.error("EndlessPaper: no WebXP exists"), null)
        : 1 < a.length
          ? (console.error(
              "EndlessPaper: multiple WebXP exists but no WebXP specified"
            ),
            null)
          : a[0].children.item(0);
    }
    function m(a) {
      function b(l, p) {
        if (void 0 == l || "function" != typeof l[Symbol.iterator])
          console.error("EndlessPaper.onBookmarkNearby: invalid criterias");
        else {
          l = [...l];
          for (let r of l)
            if ("string" != typeof r) {
              console.error(
                "EndlessPaper.onBookmarkNearby: invalid bookmark names"
              );
              return;
            }
          p.names = l;
        }
      }
      function e(l) {
        if (void 0 == l || "string" != typeof l)
          return (
            console.error("EndlessPaper.onBookmarkNearby: invalid comparison"),
            null
          );
        l = l.trimStart();
        let p = null,
          r = 0;
        ">" == l[0]
          ? "=" == l[1]
            ? ((p = ">="), (r = 2))
            : ((p = ">"), (r = 1))
          : "<" == l[0]
            ? "=" == l[1]
              ? ((p = "<="), (r = 2))
              : ((p = "<"), (r = 1))
            : "=" == l[0] && "=" == l[1] && ((p = "=="), (r = 2));
        if (null == l)
          return (
            console.error(
              "EndlessPaper.onBookmarkNearby: invalid comparison operator"
            ),
            null
          );
        l = Number.parseFloat(l.slice(r));
        return Number.isNaN(l)
          ? (console.error(
              "EndlessPaper.onBookmarkNearby: invalid comparison value"
            ),
            null)
          : { op: p, value: l };
      }
      function k(l, p, r) {
        var u = p[l];
        if (void 0 == u) return !1;
        if ("object" === typeof u && Array.isArray(u)) {
          p = [];
          for (var z of u) {
            u = e(z);
            if (null == u) return !0;
            p.push(u);
          }
          r[l] = p;
        } else if ("string" === typeof u) {
          z = e(u);
          if (null == z) return !0;
          r[l] = [z];
        } else
          return (
            console.error("EndlessPaper.onBookmarkNearby: invalid comparison"),
            !0
          );
        return !1;
      }
      let t = {};
      if ("function" == typeof a[Symbol.iterator]) b(a, t);
      else if ("object" == typeof a) {
        if (
          (b(a.name, t),
          k("zoomFactor", a, t) ||
            k("visibleBookmarkRatio", a, t) ||
            k("screenAreaToBookmarkRatio", a, t))
        )
          return null;
      } else
        return (
          console.error("EndlessPaper.onBookmarkNearby: invalid criterias"),
          null
        );
      return t;
    }
    const q =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (/Mac/.test(navigator.userAgent) &&
        navigator.maxTouchPoints &&
        2 < navigator.maxTouchPoints);
    let w = new Map(),
      x = new Map(),
      v = new Map(),
      n = [],
      y = new Map(),
      B = new Map(),
      C = new Map(),
      D = !1,
      f = { l: [] };
    f.h = new Map();
    f.j = new Map();
    f.g = null;
    f.EP_FUNCTIONS = {
      receiveNonAvailableFeatures: function (a, b) {
        a = c(a);
        null != a &&
          (f.h.set(a, b),
          0 < b.length &&
            console.warn(
              "EndlessPaper: '" +
                b.join(", ") +
                "' are unavailable. Your WebXP script needs to be updated. Please contact support."
            ));
      },
      onBookmarkNearby: function (a, b, e) {
        a = c(a);
        if (null != a && ((a = w.get(a)), void 0 !== a)) {
          void 0 !== e ||
            D ||
            (console.warn(
              "EndlessPaper: your WebXP is using an older version, nearby bookmarks filtering is not supported. Your WebXP script needs to be updated. Please contact support."
            ),
            (D = !0));
          for (const k of a) void 0 === e ? k.i(b) : e === k.id && k.i(b);
        }
      },
      onShapeEvent: function (a, b, e) {
        a = c(a);
        if (null != a && ((a = x.get(a)), void 0 !== a && !(a.length <= b)))
          a[b](e);
      },
      receiveViewportAnchor: function (a, b) {
        a = c(a);
        if (null != a) {
          var e = v.get(a);
          if (void 0 !== e) {
            for (const k of e) k(b);
            v.delete(a);
          }
        }
      },
      toggleFullscreen: function (a) {
        a = c(a);
        if (null != a) {
          var b,
            e = null != (b = f.j.get(a)) ? b : a.parentElement;
          document.fullscreenElement
            ? (document.exitFullscreen(), (f.g = null))
            : void 0 !== e.requestFullscreen
              ? (e.requestFullscreen(), (f.g = a))
              : d(a, "alertFullscreenUnavailble");
        }
      },
      receiveNewShapes: function (a, b) {
        a = JSON.stringify(b, null, 4);
        console.log(a);
      },
      receiveNewBookmarks: function (a, b) {
        a = JSON.stringify(b, null, 4);
        console.log(a);
      },
      readyEvent: function (a) {
        a = c(a);
        if (null != a) for (const b of n) b(a);
      },
      receiveLogoSize: function (a, b) {
        a = c(a);
        if (null != a) {
          var e = y.get(a);
          if (void 0 !== e) {
            for (const k of e) k(b);
            y.delete(a);
          }
        }
      },
      onNavInstructionsChange: function (a, b) {
        a = c(a);
        if (null != a && ((a = B.get(a)), void 0 !== a))
          for (const e of a) e(b);
      },
      callCustomNavBarController: function (a, b) {
        a = c(a);
        if (null != a) {
          var e = C.get(a);
          void 0 === e
            ? console.error(
                "Endless Paper: no callback is set for the custom bookmark navigation"
              )
            : ((b = e(b)),
              void 0 !== b && null !== b && d(a, "visitBookmark", b));
        }
      },
    };
    f.toggleClassIfOnIOS = function (a, b, e) {
      a.classList.toggle(q ? b : e);
    };
    f.getId = function (a, b) {
      return "ep-webxp-" + a + "-" + b;
    };
    f.getIframe = function (a, b) {
      return document.getElementById(f.getId(a, b));
    };
    f.fixIOSTouchEvent = function (a) {
      q && a && a.contentWindow && a.addEventListener("touchstart", {});
    };
    f.onLoad = function (a) {
      a && "function" == typeof a
        ? f.l.push(a)
        : console.error("EndlessPaper.onLoad: invalid callback");
    };
    f.onReady = function (a) {
      a && "function" == typeof a
        ? n.push(a)
        : console.error("EndlessPaper.onReady: invalid callback");
    };
    f.visitBookmark = function (...a) {
      let b, e;
      if (1 === a.length) {
        if (((b = h()), (e = a[0]), !b)) return;
      } else if (2 === a.length) {
        if (((e = a[0]), (b = c(a[1])), !b)) return;
      } else if (3 === a.length) (e = a[0]), (b = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.visitBookmark: invalid args");
        return;
      }
      e && "string" == typeof e
        ? b && b.contentWindow
          ? (g(b, "visitBookmark"), d(b, "visitBookmark", e))
          : console.error("EndlessPaper.visitBookmark: invalid WebXP")
        : console.error("EndlessPaper.visitBookmark: invalid bookmark");
    };
    f.onBookmarkNearby = function (...a) {
      let b, e;
      var k = null;
      if (1 == a.length) (b = h()), (e = a[0]);
      else if (2 == a.length)
        "function" == typeof a[0]
          ? ((e = a[0]), (b = c(a[1])))
          : ((b = h()), (k = a[0]), (e = a[1]));
      else if (3 === a.length)
        "function" == typeof a[0]
          ? ((e = a[0]), (b = f.getIframe(a[1], a[2])))
          : ((k = a[0]), (e = a[1]), (b = c(a[2])));
      else if (4 == a.length)
        (k = a[0]), (e = a[1]), (b = f.getIframe(a[2], a[3]));
      else {
        console.error("EndlessPaper.onBookmarkNearby: invalid args");
        return;
      }
      if (e && "function" == typeof e)
        if (b && b.contentWindow) {
          g(b, "onBookmarkNearby");
          a = void 0;
          if (
            null != k &&
            (g(b, "nearbyBookmarkFiltering"), (a = m(k)), null == a)
          )
            return;
          k = w.get(b);
          void 0 == k && (k = []);
          var t = k.length;
          k.push({ id: t, i: e });
          w.set(b, k);
          d(b, "nearbyBookmarkRequest", t, a);
        } else console.error("EndlessPaper.onBookmarkNearby: invalid WebXP");
      else console.error("EndlessPaper.onBookmarkNearby: invalid callback");
    };
    f.setBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setBookmarks: invalid args");
        return;
      }
      Array.isArray(b)
        ? (g(a, "setBookmarks"), d(a, "setBookmarks", b))
        : console.error("EndlessPaper.setBookmarks: invalid args");
    };
    f.addShapeEventListener = function (...a) {
      let b, e;
      if (2 == a.length) (b = a[0]), (e = a[1]), (a = h());
      else if (3 == a.length) (b = a[0]), (e = a[1]), (a = c(a[2]));
      else if (4 === a.length)
        (b = a[0]), (e = a[1]), (a = f.getIframe(a[2], a[3]));
      else {
        console.error("EndlessPaper.addShapeEventListener: invalid args");
        return;
      }
      if (a && a.contentWindow)
        if (e && "function" == typeof e)
          if (b && "string" === typeof b) {
            g(a, "addShapeEventListener");
            var k = x.get(a);
            void 0 == k && (k = []);
            var t = k.length;
            k.push(e);
            x.set(a, k);
            d(a, "addShapeEventListener", t, b);
          } else
            console.error(
              "EndlessPaper.addShapeEventListener: invalid eventType"
            );
        else
          console.error("EndlessPaper.addShapeEventListener: invalid callback");
      else console.error("EndlessPaper.addShapeEventListener: invalid WebXP");
    };
    f.setShapes = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setShapes: invalid args");
        return;
      }
      Array.isArray(b)
        ? (g(a, "setShapes"), d(a, "setShapes", b))
        : console.error("EndlessPaper.setShapes: invalid args");
    };
    f.showTravelButtons = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showTravelButtons: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showTravelButtons: invalid args")
        : (g(a, "showTravelButtons"), d(a, "showTravelButtons", b));
    };
    f.showNavBar = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavBar: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showNavBar: invalid args")
        : (g(a, "showNavBar"), d(a, "showNavBar", b));
    };
    f.getViewportAnchor = function (...a) {
      let b;
      if (0 == a.length) b = h();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = f.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getViewportAnchor: invalid args");
        return;
      }
      g(b, "getViewportAnchor");
      return new Promise((e) => {
        let k = v.get(b);
        void 0 == k && (k = []);
        k.push(e);
        v.set(b, k);
        d(b, "getViewportAnchor");
      });
    };
    f.printViewportAsAnchor = function (...a) {
      f.getViewportAnchor(a).then((b) => {
        console.log(
          JSON.stringify({ name: "UNIQUE BOOKMARK NAME", anchor: b }, void 0, 4)
        );
      });
    };
    f.setFullscreenTarget = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setFullscreenTarget: invalid args");
        return;
      }
      (void 0 !== b && b instanceof HTMLElement) ||
        console.error("EndlessPaper.setFullscreenTarget: invalid HTML element");
      f.j.set(a, b);
    };
    f.toggleFullscreen = function (...a) {
      if (0 == a.length) a = h();
      else if (1 == a.length) a = c(a[0]);
      else if (2 === a.length) a = f.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.toggleFullscreen: invalid args");
        return;
      }
      f.EP_FUNCTIONS.toggleFullscreen(a);
    };
    f.getWebXPInFullscreen = function () {
      return f.g;
    };
    f.setLoadingIndicatorColor = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLoadingIndicatorColor: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.setLoadingIndicatorColor: invalid args")
        : (g(a, "setLoadingIndicatorColor"),
          d(a, "setLoadingIndicatorColor", b));
    };
    f.computeNewShapes = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewShapes: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewShapes: invalid args")
        : (g(a, "computeNewShapes"), d(a, "computeNewShapes", b));
    };
    f.computeNewBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewBookmarks: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewBookmarks: invalid args")
        : (g(a, "computeNewBookmarks"), d(a, "computeNewBookmarks", b));
    };
    f.setLogoPosition = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLogoPosition: invalid args");
        return;
      }
      "topleft" !== b && "bottomleft" !== b && "bottomright" !== b
        ? console.error("Endless Paper: invalid logo position")
        : (g(a, "setLogoPosition"), d(a, "setLogoPosition", b));
    };
    f.getLogoSize = function (...a) {
      let b;
      if (0 == a.length) b = h();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = f.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getLogoSize: invalid args");
        return;
      }
      g(b, "getLogoSize");
      return new Promise((e) => {
        let k = y.get(b);
        void 0 == k && (k = []);
        k.push(e);
        y.set(b, k);
        d(b, "getLogoSize");
      });
    };
    f.showNavInstructions = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavInstructions: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showNavInstructions: invalid args")
        : (g(a, "showNavInstructions"), d(a, "showNavInstructions", b));
    };
    f.onNavInstructionsChange = function (...a) {
      let b, e;
      if (1 == a.length) (b = h()), (e = a[0]);
      else if (2 == a.length) (e = a[0]), (b = c(a[1]));
      else if (3 === a.length) (e = a[0]), (b = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.onNavInstructionsChange: invalid args");
        return;
      }
      e && "function" == typeof e
        ? b && b.contentWindow
          ? (g(b, "onNavInstructionsChange"),
            d(b, "onNavInstructionsChange"),
            (a = B.get(b)),
            void 0 == a && (a = []),
            a.push(e),
            B.set(b, a))
          : console.error("EndlessPaper.onNavInstructionsChange: invalid WebXP")
        : console.error(
            "EndlessPaper.onNavInstructionsChange: invalid callback"
          );
    };
    f.setNavBarController = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setNavBarController: invalid args");
        return;
      }
      void 0 === b || "function" !== typeof b
        ? console.error("EndlessPaper.setNavBarController: invalid args")
        : (g(a, "customNavBarController"),
          C.set(a, b),
          d(a, "useCustomNavBarController"));
    };
    f.NAVINSTRUCTIONS_STATUS = Object.freeze({
      ready: "ready",
      shown: "shown",
      hidden: "hidden",
    });
    f.LOGO_POSITIONS = Object.freeze({
      topLeft: "topleft",
      bottomLeft: "bottomleft",
      bottomRight: "bottomright",
    });
    return f;
  })();
  onMounted(() => {
    const d = EndlessPaper,
      g =
        "visitBookmark setBookmarks onBookmarkNearby addShapeEventListener setShapes showTravelButtons showNavBar getViewportAnchor toggleFullscreen setLoadingIndicatorColor computeNewShapes computeNewBookmarks readyEvent setLogoPosition getLogoSize showNavInstructions onNavInstructionsChange customNavBarController".split(
          " "
        );
    Array.from(document.getElementsByClassName("ep-webxp")).map(function (c) {
      var h =
          c.dataset && void 0 !== c.dataset.webxpUrl
            ? c.dataset.webxpUrl
            : void 0,
        m =
          c.dataset && void 0 !== c.dataset.webxpAuthor
            ? c.dataset.webxpAuthor
            : "webxp";
      let q =
          c.dataset && void 0 !== c.dataset.webxpId
            ? c.dataset.webxpId
            : void 0,
        w =
          c.dataset && void 0 !== c.dataset.webxpShowTravelButtons
            ? "false" !== c.dataset.webxpShowTravelButtons.toLowerCase()
            : void 0,
        x =
          c.dataset && void 0 !== c.dataset.webxpShowNavbar
            ? "false" !== c.dataset.webxpShowNavbar.toLowerCase()
            : void 0,
        v =
          c.dataset && void 0 !== c.dataset.webxpShowNavinstructions
            ? "false" !== c.dataset.webxpShowNavinstructions.toLowerCase()
            : void 0;
      if (q || h)
        if (null !== d.getIframe(m, q))
          console.error(
            "EndlessPaper: The WebXP '" + m + "/" + q + "' already exists"
          );
        else {
          var n = document.createElement("iframe");
          h
            ? ((m = new URL(h)),
              void 0 !== w &&
                m.searchParams.append("showTravelButtons", String(w)),
              void 0 !== x && m.searchParams.append("showNavBar", String(x)),
              void 0 !== v &&
                m.searchParams.append("showNavInstructions", String(v)),
              (n.src = m.toString()))
            : ((h = "https://endlesspaper.net/" + m + "/?id=" + q),
              void 0 !== w && (h += "&showTravelButtons=" + String(w)),
              void 0 !== x && (h += "&showNavBar=" + String(x)),
              void 0 !== v && (h += "&showNavInstructions=" + String(v)),
              (n.id = d.getId(m, q)),
              (n.src = h));
          n.style.width = "100%";
          n.style.height = "100%";
          n.setAttribute("allowFullScreen", "");
          c.appendChild(n);
          d.fixIOSTouchEvent(n);
          n.onload = () => {
            void 0 !== c.dataset.webxpDev &&
              n.contentWindow.postMessage({ fct: "enableDevMode" }, "*");
            void 0 !== c.dataset.webxpHl &&
              n.contentWindow.postMessage(
                { fct: "hl" },
                "https://endlesspaper.net/"
              );
            n.contentWindow.postMessage(
              { fct: "areFeaturesAvailable", data: [g] },
              "*"
            );
            setTimeout(function () {
              void 0 === d.h.get(n) &&
                console.warn(
                  "EndlessPaper: your WebXP uses an old version. Some features may not be supported. Please contact support."
                );
            }, 2e3);
            for (const y of d.l) y(n);
          };
        }
      else
        console.log(
          "EndlessPaper: data-webxp-id or data-webxp-url are not provided"
        );
    });
  });
  window.addEventListener("orientationchange", function () {
    let d = document.getElementsByClassName("ep-webxp");
    if (1 != d.length) console.log("more than 1 iframe");
    else
      for (let g = 0; g < d.length; g++)
        d[g].children
          .item(0)
          .contentWindow.postMessage("orientationchange", "*");
  });
  window.addEventListener("message", function (d) {
    var g = EndlessPaper;
    const c = d.data.fct,
      h = d.data.url;
    d = d.data.data;
    void 0 !== c &&
      void 0 !== h &&
      (void 0 === d && (d = []),
      (g = g.EP_FUNCTIONS[c]),
      void 0 !== g && g(h, ...d));
  });
  document.addEventListener("fullscreenchange", function () {
    const d = EndlessPaper;
    document.fullscreenElement || (d.g = null);
  });

  return {
    EndlessPaper,
  };
}
