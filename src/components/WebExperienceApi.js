import { onMounted } from "vue";

export function useApi() {
  var y =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (e, g, c) {
          if (e == Array.prototype || e == Object.prototype) return e;
          e[g] = c.value;
          return e;
        };
  function D(e) {
    e = [
      "object" == typeof globalThis && globalThis,
      e,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var g = 0; g < e.length; ++g) {
      var c = e[g];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var E = D(this);
  function F(e, g) {
    if (g)
      a: {
        var c = E;
        e = e.split(".");
        for (var k = 0; k < e.length - 1; k++) {
          var l = e[k];
          if (!(l in c)) break a;
          c = c[l];
        }
        e = e[e.length - 1];
        k = c[e];
        g = g(k);
        g != k &&
          null != g &&
          y(c, e, { configurable: !0, writable: !0, value: g });
      }
  }
  F("Array.prototype.includes", function (e) {
    return e
      ? e
      : function (g, c) {
          var k = this;
          k instanceof String && (k = String(k));
          var l = k.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + l, 0)); c < l; c++) {
            var q = k[c];
            if (q === g || Object.is(q, g)) return !0;
          }
          return !1;
        };
  });
  F("String.prototype.trimLeft", function (e) {
    function g() {
      return this.replace(/^[\s\xa0]+/, "");
    }
    return e || g;
  });
  F("String.prototype.trimStart", function (e) {
    return e || String.prototype.trimLeft;
  });
  const EndlessPaper = (function () {
    function e(a, b, ...d) {
      let h = {};
      h.fct = b;
      h.data = d;
      a.contentWindow.postMessage(h, "*");
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
        for (let d = 0; d < b.length; d++)
          if (b[d].children.item(0).src == a) return b[d].children.item(0);
        console.error("EndlessPaper: invalid url provided");
        return null;
      }
      if (void 0 != a && "IFRAME" == a.nodeName) return a;
      console.error("EndlessPaper: invalid iframe provided");
      return null;
    }
    function k() {
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
    function l(a) {
      function b(p, r) {
        if (void 0 == p || "function" != typeof p[Symbol.iterator])
          console.error("EndlessPaper.onBookmarkNearby: invalid criterias");
        else {
          p = [...p];
          for (let z of p)
            if ("string" != typeof z) {
              console.error(
                "EndlessPaper.onBookmarkNearby: invalid bookmark names"
              );
              return;
            }
          r.names = p;
        }
      }
      function d(p, r, z) {
        var n = r[p];
        if (void 0 == n) return !1;
        if ("string" != typeof n)
          return (
            console.error("EndlessPaper.onBookmarkNearby: invalid comparison"),
            !0
          );
        n = n.trimStart();
        r = null;
        let w = 0;
        ">" == n[0]
          ? "=" == n[1]
            ? ((r = ">="), (w = 2))
            : ((r = ">"), (w = 1))
          : "<" == n[0]
            ? "=" == n[1]
              ? ((r = "<="), (w = 2))
              : ((r = "<"), (w = 1))
            : "=" == n[0] && "=" == n[1] && ((r = "=="), (w = 2));
        if (null == n)
          return (
            console.error(
              "EndlessPaper.onBookmarkNearby: invalid comparison operator"
            ),
            !0
          );
        n = Number.parseFloat(n.slice(w));
        if (Number.isNaN(n))
          return (
            console.error(
              "EndlessPaper.onBookmarkNearby: invalid comparison value"
            ),
            !0
          );
        z[p] = { op: r, value: n };
        return !1;
      }
      let h = {};
      if ("function" == typeof a[Symbol.iterator]) b(a, h);
      else if ("object" == typeof a) {
        if (
          (b(a.name, h),
          d("zoomFactor", a, h) ||
            d("visibleBookmarkRatio", a, h) ||
            d("screenAreaToBookmarkRatio", a, h))
        )
          return null;
      } else
        return (
          console.error("EndlessPaper.onBookmarkNearby: invalid criterias"),
          null
        );
      return h;
    }
    const q =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (/Mac/.test(navigator.userAgent) &&
        navigator.maxTouchPoints &&
        2 < navigator.maxTouchPoints);
    let u = new Map(),
      v = new Map(),
      t = new Map(),
      m = [],
      x = new Map(),
      A = new Map(),
      B = new Map(),
      C = !1,
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
      onBookmarkNearby: function (a, b, d) {
        a = c(a);
        if (null != a && ((a = u.get(a)), void 0 !== a)) {
          void 0 !== d ||
            C ||
            (console.warn(
              "EndlessPaper: your WebXP is using an older version, nearby bookmarks filtering is not supported. Your WebXP script needs to be updated. Please contact support."
            ),
            (C = !0));
          for (const h of a) void 0 === d ? h.i(b) : d === h.id && h.i(b);
        }
      },
      onShapeEvent: function (a, b, d) {
        a = c(a);
        if (null != a && ((a = v.get(a)), void 0 !== a && !(a.length <= b)))
          a[b](d);
      },
      receiveViewportAnchor: function (a, b) {
        a = c(a);
        if (null != a) {
          var d = t.get(a);
          if (void 0 !== d) {
            for (const h of d) h(b);
            t.delete(a);
          }
        }
      },
      toggleFullscreen: function (a) {
        a = c(a);
        if (null != a) {
          var b,
            d = null != (b = f.j.get(a)) ? b : a.parentElement;
          document.fullscreenElement
            ? (document.exitFullscreen(), (f.g = null))
            : void 0 !== d.requestFullscreen
              ? (d.requestFullscreen(), (f.g = a))
              : e(a, "alertFullscreenUnavailble");
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
        if (null != a) for (const b of m) b(a);
      },
      receiveLogoSize: function (a, b) {
        a = c(a);
        if (null != a) {
          var d = x.get(a);
          if (void 0 !== d) {
            for (const h of d) h(b);
            x.delete(a);
          }
        }
      },
      onNavInstructionsChange: function (a, b) {
        a = c(a);
        if (null != a && ((a = A.get(a)), void 0 !== a))
          for (const d of a) d(b);
      },
      callCustomNavBarController: function (a, b) {
        a = c(a);
        if (null != a) {
          var d = B.get(a);
          void 0 === d
            ? console.error(
                "Endless Paper: no callback is set for the custom bookmark navigation"
              )
            : ((b = d(b)),
              void 0 !== b && null !== b && e(a, "visitBookmark", b));
        }
      },
    };
    f.toggleClassIfOnIOS = function (a, b, d) {
      a.classList.toggle(q ? b : d);
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
        ? m.push(a)
        : console.error("EndlessPaper.onReady: invalid callback");
    };
    f.visitBookmark = function (...a) {
      let b, d;
      if (1 === a.length) {
        if (((b = k()), (d = a[0]), !b)) return;
      } else if (2 === a.length) {
        if (((d = a[0]), (b = c(a[1])), !b)) return;
      } else if (3 === a.length) (d = a[0]), (b = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.visitBookmark: invalid args");
        return;
      }
      d && "string" == typeof d
        ? b && b.contentWindow
          ? (g(b, "visitBookmark"), e(b, "visitBookmark", d))
          : console.error("EndlessPaper.visitBookmark: invalid WebXP")
        : console.error("EndlessPaper.visitBookmark: invalid bookmark");
    };
    f.onBookmarkNearby = function (...a) {
      let b, d;
      var h = null;
      if (1 == a.length) (b = k()), (d = a[0]);
      else if (2 == a.length)
        "function" == typeof a[0]
          ? ((d = a[0]), (b = c(a[1])))
          : ((b = k()), (h = a[0]), (d = a[1]));
      else if (3 === a.length)
        "function" == typeof a[0]
          ? ((d = a[0]), (b = f.getIframe(a[1], a[2])))
          : ((h = a[0]), (d = a[1]), (b = c(a[2])));
      else if (4 == a.length)
        (h = a[0]), (d = a[1]), (b = f.getIframe(a[2], a[3]));
      else {
        console.error("EndlessPaper.onBookmarkNearby: invalid args");
        return;
      }
      if (d && "function" == typeof d)
        if (b && b.contentWindow) {
          g(b, "onBookmarkNearby");
          a = void 0;
          if (
            null != h &&
            (g(b, "nearbyBookmarkFiltering"), (a = l(h)), null == a)
          )
            return;
          h = u.get(b);
          void 0 == h && (h = []);
          var p = h.length;
          h.push({ id: p, i: d });
          u.set(b, h);
          e(b, "nearbyBookmarkRequest", p, a);
        } else console.error("EndlessPaper.onBookmarkNearby: invalid WebXP");
      else console.error("EndlessPaper.onBookmarkNearby: invalid callback");
    };
    f.setBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setBookmarks: invalid args");
        return;
      }
      Array.isArray(b)
        ? (g(a, "setBookmarks"), e(a, "setBookmarks", b))
        : console.error("EndlessPaper.setBookmarks: invalid args");
    };
    f.addShapeEventListener = function (...a) {
      let b, d;
      if (2 == a.length) (b = a[0]), (d = a[1]), (a = k());
      else if (3 == a.length) (b = a[0]), (d = a[1]), (a = c(a[2]));
      else if (4 === a.length)
        (b = a[0]), (d = a[1]), (a = f.getIframe(a[2], a[3]));
      else {
        console.error("EndlessPaper.addShapeEventListener: invalid args");
        return;
      }
      if (a && a.contentWindow)
        if (d && "function" == typeof d)
          if (b && "string" === typeof b) {
            g(a, "addShapeEventListener");
            var h = v.get(a);
            void 0 == h && (h = []);
            var p = h.length;
            h.push(d);
            v.set(a, h);
            e(a, "addShapeEventListener", p, b);
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
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setShapes: invalid args");
        return;
      }
      Array.isArray(b)
        ? (g(a, "setShapes"), e(a, "setShapes", b))
        : console.error("EndlessPaper.setShapes: invalid args");
    };
    f.showTravelButtons = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showTravelButtons: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showTravelButtons: invalid args")
        : (g(a, "showTravelButtons"), e(a, "showTravelButtons", b));
    };
    f.showNavBar = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavBar: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showNavBar: invalid args")
        : (g(a, "showNavBar"), e(a, "showNavBar", b));
    };
    f.getViewportAnchor = function (...a) {
      let b;
      if (0 == a.length) b = k();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = f.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getViewportAnchor: invalid args");
        return;
      }
      g(b, "getViewportAnchor");
      return new Promise((d) => {
        let h = t.get(b);
        void 0 == h && (h = []);
        h.push(d);
        t.set(b, h);
        e(b, "getViewportAnchor");
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
      if (1 == a.length) (b = a[0]), (a = k());
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
      if (0 == a.length) a = k();
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
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLoadingIndicatorColor: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.setLoadingIndicatorColor: invalid args")
        : (g(a, "setLoadingIndicatorColor"),
          e(a, "setLoadingIndicatorColor", b));
    };
    f.computeNewShapes = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewShapes: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewShapes: invalid args")
        : (g(a, "computeNewShapes"), e(a, "computeNewShapes", b));
    };
    f.computeNewBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewBookmarks: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewBookmarks: invalid args")
        : (g(a, "computeNewBookmarks"), e(a, "computeNewBookmarks", b));
    };
    f.setLogoPosition = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLogoPosition: invalid args");
        return;
      }
      "topleft" !== b && "bottomleft" !== b && "bottomright" !== b
        ? console.error("Endless Paper: invalid logo position")
        : (g(a, "setLogoPosition"), e(a, "setLogoPosition", b));
    };
    f.getLogoSize = function (...a) {
      let b;
      if (0 == a.length) b = k();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = f.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getLogoSize: invalid args");
        return;
      }
      g(b, "getLogoSize");
      return new Promise((d) => {
        let h = x.get(b);
        void 0 == h && (h = []);
        h.push(d);
        x.set(b, h);
        e(b, "getLogoSize");
      });
    };
    f.showNavInstructions = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavInstructions: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showNavInstructions: invalid args")
        : (g(a, "showNavInstructions"), e(a, "showNavInstructions", b));
    };
    f.onNavInstructionsChange = function (...a) {
      let b, d;
      if (1 == a.length) (b = k()), (d = a[0]);
      else if (2 == a.length) (d = a[0]), (b = c(a[1]));
      else if (3 === a.length) (d = a[0]), (b = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.onNavInstructionsChange: invalid args");
        return;
      }
      d && "function" == typeof d
        ? b && b.contentWindow
          ? (g(b, "onNavInstructionsChange"),
            e(b, "onNavInstructionsChange"),
            (a = A.get(b)),
            void 0 == a && (a = []),
            a.push(d),
            A.set(b, a))
          : console.error("EndlessPaper.onNavInstructionsChange: invalid WebXP")
        : console.error(
            "EndlessPaper.onNavInstructionsChange: invalid callback"
          );
    };
    f.setNavBarController = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = f.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setNavBarController: invalid args");
        return;
      }
      void 0 === b || "function" !== typeof b
        ? console.error("EndlessPaper.setNavBarController: invalid args")
        : (g(a, "customNavBarController"),
          B.set(a, b),
          e(a, "useCustomNavBarController"));
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
    const e = EndlessPaper,
      g =
        "visitBookmark setBookmarks onBookmarkNearby addShapeEventListener setShapes showTravelButtons showNavBar getViewportAnchor toggleFullscreen setLoadingIndicatorColor computeNewShapes computeNewBookmarks readyEvent setLogoPosition getLogoSize showNavInstructions onNavInstructionsChange customNavBarController".split(
          " "
        );
    Array.from(document.getElementsByClassName("ep-webxp")).map(function (c) {
      var k =
          c.dataset && void 0 !== c.dataset.webxpUrl
            ? c.dataset.webxpUrl
            : void 0,
        l =
          c.dataset && void 0 !== c.dataset.webxpAuthor
            ? c.dataset.webxpAuthor
            : "webxp";
      let q =
          c.dataset && void 0 !== c.dataset.webxpId
            ? c.dataset.webxpId
            : void 0,
        u =
          c.dataset && void 0 !== c.dataset.webxpShowTravelButtons
            ? "false" !== c.dataset.webxpShowTravelButtons.toLowerCase()
            : void 0,
        v =
          c.dataset && void 0 !== c.dataset.webxpShowNavbar
            ? "false" !== c.dataset.webxpShowNavbar.toLowerCase()
            : void 0,
        t =
          c.dataset && void 0 !== c.dataset.webxpShowNavinstructions
            ? "false" !== c.dataset.webxpShowNavinstructions.toLowerCase()
            : void 0;
      if (q || k)
        if (null !== e.getIframe(l, q))
          console.error(
            "EndlessPaper: The WebXP '" + l + "/" + q + "' already exists"
          );
        else {
          var m = document.createElement("iframe");
          k
            ? ((l = new URL(k)),
              void 0 !== u &&
                l.searchParams.append("showTravelButtons", String(u)),
              void 0 !== v && l.searchParams.append("showNavBar", String(v)),
              void 0 !== t &&
                l.searchParams.append("showNavInstructions", String(t)),
              (m.src = l.toString()))
            : ((k = "https://endlesspaper.net/" + l + "/?id=" + q),
              void 0 !== u && (k += "&showTravelButtons=" + String(u)),
              void 0 !== v && (k += "&showNavBar=" + String(v)),
              void 0 !== t && (k += "&showNavInstructions=" + String(t)),
              (m.id = e.getId(l, q)),
              (m.src = k));
          m.style.width = "100%";
          m.style.height = "100%";
          m.setAttribute("allowFullScreen", "");
          c.appendChild(m);
          e.fixIOSTouchEvent(m);
          m.onload = () => {
            void 0 !== c.dataset.webxpDev &&
              m.contentWindow.postMessage({ fct: "enableDevMode" }, "*");
            void 0 !== c.dataset.webxpHl &&
              m.contentWindow.postMessage(
                { fct: "hl" },
                "https://endlesspaper.net/"
              );
            m.contentWindow.postMessage(
              { fct: "areFeaturesAvailable", data: [g] },
              "*"
            );
            setTimeout(function () {
              void 0 === e.h.get(m) &&
                console.warn(
                  "EndlessPaper: your WebXP uses an old version. Some features may not be supported. Please contact support."
                );
            }, 2e3);
            for (const x of e.l) x(m);
          };
        }
      else
        console.log(
          "EndlessPaper: data-webxp-id or data-webxp-url are not provided"
        );
    });
  });
  window.addEventListener("orientationchange", function () {
    let e = document.getElementsByClassName("ep-webxp");
    if (1 != e.length) console.log("more than 1 iframe");
    else
      for (let g = 0; g < e.length; g++)
        e[g].children
          .item(0)
          .contentWindow.postMessage("orientationchange", "*");
  });
  window.addEventListener("message", function (e) {
    var g = EndlessPaper;
    const c = e.data.fct,
      k = e.data.url;
    e = e.data.data;
    void 0 !== c &&
      void 0 !== k &&
      (void 0 === e && (e = []),
      (g = g.EP_FUNCTIONS[c]),
      void 0 !== g && g(k, ...e));
  });
  document.addEventListener("fullscreenchange", function () {
    const e = EndlessPaper;
    document.fullscreenElement || (e.g = null);
  });

  return {
    EndlessPaper,
  };
}
