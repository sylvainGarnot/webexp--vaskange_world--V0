import { onMounted } from "vue";

export function useApi() {
  var y =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (d, h, c) {
          if (d == Array.prototype || d == Object.prototype) return d;
          d[h] = c.value;
          return d;
        };
  function B(d) {
    d = [
      "object" == typeof globalThis && globalThis,
      d,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var h = 0; h < d.length; ++h) {
      var c = d[h];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var C = B(this);
  function D(d, h) {
    if (h)
      a: {
        var c = C;
        d = d.split(".");
        for (var k = 0; k < d.length - 1; k++) {
          var l = d[k];
          if (!(l in c)) break a;
          c = c[l];
        }
        d = d[d.length - 1];
        k = c[d];
        h = h(k);
        h != k &&
          null != h &&
          y(c, d, { configurable: !0, writable: !0, value: h });
      }
  }
  D("Array.prototype.includes", function (d) {
    return d
      ? d
      : function (h, c) {
          var k = this;
          k instanceof String && (k = String(k));
          var l = k.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + l, 0)); c < l; c++) {
            var q = k[c];
            if (q === h || Object.is(q, h)) return !0;
          }
          return !1;
        };
  });
  D("String.prototype.trimLeft", function (d) {
    function h() {
      return this.replace(/^[\s\xa0]+/, "");
    }
    return d || h;
  });
  D("String.prototype.trimStart", function (d) {
    return d || String.prototype.trimLeft;
  });
  const EndlessPaper = (function () {
    function d(a, b, ...f) {
      let g = {};
      g.fct = b;
      g.data = f;
      a.contentWindow.postMessage(g, "*");
    }
    function h(a, b) {
      a = e.h.get(a);
      void 0 !== a &&
        a.includes(b) &&
        console.warn("EndlessPaper: " + b + " is not available.");
    }
    function c(a) {
      if ("string" == typeof a) {
        let b = document.getElementsByClassName("ep-webxp");
        if (0 === b.length)
          return console.error("EndlessPaper: no WebXP exists"), null;
        for (let f = 0; f < b.length; f++)
          if (b[f].children.item(0).src == a) return b[f].children.item(0);
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
      function f(p, r, z) {
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
      let g = {};
      if ("function" == typeof a[Symbol.iterator]) b(a, g);
      else if ("object" == typeof a) {
        if (
          (b(a.name, g),
          f("zoomFactor", a, g) ||
            f("visibleBookmarkRatio", a, g) ||
            f("screenAreaToBookmarkRatio", a, g))
        )
          return null;
      } else
        return (
          console.error("EndlessPaper.onBookmarkNearby: invalid criterias"),
          null
        );
      return g;
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
      A = !1,
      e = { l: [] };
    e.h = new Map();
    e.j = new Map();
    e.g = null;
    e.EP_FUNCTIONS = {
      receiveNonAvailableFeatures: function (a, b) {
        a = c(a);
        null != a &&
          (e.h.set(a, b),
          0 < b.length &&
            console.warn(
              "EndlessPaper: '" +
                b.join(", ") +
                "' are unavailable. Your WebXP script needs to be updated. Please contact support."
            ));
      },
      onBookmarkNearby: function (a, b, f) {
        a = c(a);
        if (null != a && ((a = u.get(a)), void 0 !== a)) {
          void 0 !== f ||
            A ||
            (console.warn(
              "EndlessPaper: your WebXP is using an older version, nearby bookmarks filtering is not supported. Your WebXP script needs to be updated. Please contact support."
            ),
            (A = !0));
          for (const g of a) void 0 === f ? g.i(b) : f === g.id && g.i(b);
        }
      },
      onShapeEvent: function (a, b, f) {
        a = c(a);
        if (null != a && ((a = v.get(a)), void 0 !== a && !(a.length <= b)))
          a[b](f);
      },
      receiveViewportAnchor: function (a, b) {
        a = c(a);
        if (null != a) {
          var f = t.get(a);
          if (void 0 !== f) {
            for (const g of f) g(b);
            t.delete(a);
          }
        }
      },
      toggleFullscreen: function (a) {
        a = c(a);
        if (null != a) {
          var b,
            f = null != (b = e.j.get(a)) ? b : a.parentElement;
          document.fullscreenElement
            ? (document.exitFullscreen(), (e.g = null))
            : void 0 !== f.requestFullscreen
              ? (f.requestFullscreen(), (e.g = a))
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
        if (null != c(a)) for (const b of m) b();
      },
      receiveLogoSize: function (a, b) {
        a = c(a);
        if (null != a) {
          var f = x.get(a);
          if (void 0 !== f) {
            for (const g of f) g(b);
            x.delete(a);
          }
        }
      },
    };
    e.toggleClassIfOnIOS = function (a, b, f) {
      a.classList.toggle(q ? b : f);
    };
    e.getId = function (a, b) {
      return "ep-webxp-" + a + "-" + b;
    };
    e.getIframe = function (a, b) {
      return document.getElementById(e.getId(a, b));
    };
    e.fixIOSTouchEvent = function (a) {
      q && a && a.contentWindow && a.addEventListener("touchstart", {});
    };
    e.onLoad = function (a) {
      a && "function" == typeof a
        ? e.l.push(a)
        : console.error("EndlessPaper.onLoad: invalid callback");
    };
    e.onReady = function (a) {
      a && "function" == typeof a
        ? m.push(a)
        : console.error("EndlessPaper.onReady: invalid callback");
    };
    e.visitBookmark = function (...a) {
      let b, f;
      if (1 === a.length) {
        if (((b = k()), (f = a[0]), !b)) return;
      } else if (2 === a.length) {
        if (((f = a[0]), (b = c(a[1])), !b)) return;
      } else if (3 === a.length) (f = a[0]), (b = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.visitBookmark: invalid args");
        return;
      }
      f && "string" == typeof f
        ? b && b.contentWindow
          ? (h(b, "visitBookmark"), d(b, "visitBookmark", f))
          : console.error("EndlessPaper.visitBookmark: invalid WebXP")
        : console.error("EndlessPaper.visitBookmark: invalid bookmark");
    };
    e.onBookmarkNearby = function (...a) {
      let b, f;
      var g = null;
      if (1 == a.length) (b = k()), (f = a[0]);
      else if (2 == a.length)
        "function" == typeof a[0]
          ? ((f = a[0]), (b = c(a[1])))
          : ((b = k()), (g = a[0]), (f = a[1]));
      else if (3 === a.length)
        "function" == typeof a[0]
          ? ((f = a[0]), (b = e.getIframe(a[1], a[2])))
          : ((g = a[0]), (f = a[1]), (b = c(a[2])));
      else if (4 == a.length)
        (g = a[0]), (f = a[1]), (b = e.getIframe(a[2], a[3]));
      else {
        console.error("EndlessPaper.onBookmarkNearby: invalid args");
        return;
      }
      if (f && "function" == typeof f)
        if (b && b.contentWindow) {
          h(b, "onBookmarkNearby");
          a = void 0;
          if (
            null != g &&
            (h(b, "nearbyBookmarkFiltering"), (a = l(g)), null == a)
          )
            return;
          g = u.get(b);
          void 0 == g && (g = []);
          var p = g.length;
          g.push({ id: p, i: f });
          u.set(b, g);
          d(b, "nearbyBookmarkRequest", p, a);
        } else console.error("EndlessPaper.onBookmarkNearby: invalid WebXP");
      else console.error("EndlessPaper.onBookmarkNearby: invalid callback");
    };
    e.setBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setBookmarks: invalid args");
        return;
      }
      Array.isArray(b)
        ? (h(a, "setBookmarks"), d(a, "setBookmarks", b))
        : console.error("EndlessPaper.setBookmarks: invalid args");
    };
    e.addShapeEventListener = function (...a) {
      let b, f;
      if (2 == a.length) (b = a[0]), (f = a[1]), (a = k());
      else if (3 == a.length) (b = a[0]), (f = a[1]), (a = c(a[2]));
      else if (4 === a.length)
        (b = a[0]), (f = a[1]), (a = e.getIframe(a[2], a[3]));
      else {
        console.error("EndlessPaper.addShapeEventListener: invalid args");
        return;
      }
      if (a && a.contentWindow)
        if (f && "function" == typeof f)
          if (b && "string" === typeof b) {
            h(a, "addShapeEventListener");
            var g = v.get(a);
            void 0 == g && (g = []);
            var p = g.length;
            g.push(f);
            v.set(a, g);
            d(a, "addShapeEventListener", p, b);
          } else
            console.error(
              "EndlessPaper.addShapeEventListener: invalid eventType"
            );
        else
          console.error("EndlessPaper.addShapeEventListener: invalid callback");
      else console.error("EndlessPaper.addShapeEventListener: invalid WebXP");
    };
    e.setShapes = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setShapes: invalid args");
        return;
      }
      Array.isArray(b)
        ? (h(a, "setShapes"), d(a, "setShapes", b))
        : console.error("EndlessPaper.setShapes: invalid args");
    };
    e.showTravelButtons = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showTravelButtons: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showTravelButtons: invalid args")
        : (h(a, "showTravelButtons"), d(a, "showTravelButtons", b));
    };
    e.showNavBar = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavBar: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showNavBar: invalid args")
        : (h(a, "showNavBar"), d(a, "showNavBar", b));
    };
    e.getViewportAnchor = function (...a) {
      let b;
      if (0 == a.length) b = k();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = e.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getViewportAnchor: invalid args");
        return;
      }
      h(b, "getViewportAnchor");
      return new Promise((f) => {
        let g = t.get(b);
        void 0 == g && (g = []);
        g.push(f);
        t.set(b, g);
        d(b, "getViewportAnchor");
      });
    };
    e.printViewportAsAnchor = function (...a) {
      e.getViewportAnchor(a).then((b) => {
        console.log(
          JSON.stringify({ name: "UNIQUE BOOKMARK NAME", anchor: b }, void 0, 4)
        );
      });
    };
    e.setFullscreenTarget = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setFullscreenTarget: invalid args");
        return;
      }
      (void 0 !== b && b instanceof HTMLElement) ||
        console.error("EndlessPaper.setFullscreenTarget: invalid HTML element");
      e.j.set(a, b);
    };
    e.toggleFullscreen = function (...a) {
      if (0 == a.length) a = k();
      else if (1 == a.length) a = c(a[0]);
      else if (2 === a.length) a = e.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.toggleFullscreen: invalid args");
        return;
      }
      e.EP_FUNCTIONS.toggleFullscreen(a);
    };
    e.getWebXPInFullscreen = function () {
      return e.g;
    };
    e.setLoadingIndicatorColor = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLoadingIndicatorColor: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.setLoadingIndicatorColor: invalid args")
        : (h(a, "setLoadingIndicatorColor"),
          d(a, "setLoadingIndicatorColor", b));
    };
    e.computeNewShapes = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewShapes: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewShapes: invalid args")
        : (h(a, "computeNewShapes"), d(a, "computeNewShapes", b));
    };
    e.computeNewBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewBookmarks: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewBookmarks: invalid args")
        : (h(a, "computeNewBookmarks"), d(a, "computeNewBookmarks", b));
    };
    e.setLogoPosition = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLogoPosition: invalid args");
        return;
      }
      "topleft" !== b && "bottomleft" !== b && "bottomright" !== b
        ? console.error("Endless Paper: invalid logo position")
        : (h(a, "setLogoPosition"), d(a, "setLogoPosition", b));
    };
    e.getLogoSize = function (...a) {
      let b;
      if (0 == a.length) b = k();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = e.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getLogoSize: invalid args");
        return;
      }
      h(b, "getLogoSize");
      return new Promise((f) => {
        let g = x.get(b);
        void 0 == g && (g = []);
        g.push(f);
        x.set(b, g);
        d(b, "getLogoSize");
      });
    };
    e.showNavInstructions = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = k());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavInstructions: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showNavInstructions: invalid args")
        : (h(a, "showNavInstructions"), d(a, "showNavInstructions", b));
    };
    e.LOGO_POSITIONS = Object.freeze({
      topLeft: "topleft",
      bottomLeft: "bottomleft",
      bottomRight: "bottomright",
    });
    return e;
  })();
  onMounted(() => {
    const d = EndlessPaper,
      h =
        "visitBookmark setBookmarks onBookmarkNearby addShapeEventListener setShapes showTravelButtons showNavBar getViewportAnchor toggleFullscreen setLoadingIndicatorColor computeNewShapes computeNewBookmarks readyEvent setLogoPosition getLogoSize showNavInstructions".split(
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
        if (null !== d.getIframe(l, q))
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
              (m.id = d.getId(l, q)),
              (m.src = k));
          m.style.width = "100%";
          m.style.height = "100%";
          m.setAttribute("allowFullScreen", "");
          c.appendChild(m);
          d.fixIOSTouchEvent(m);
          m.onload = () => {
            void 0 !== c.dataset.webxpDev &&
              m.contentWindow.postMessage({ fct: "enableDevMode" }, "*");
            void 0 !== c.dataset.webxpHl &&
              m.contentWindow.postMessage(
                { fct: "hl" },
                "https://endlesspaper.net/"
              );
            m.contentWindow.postMessage(
              { fct: "areFeaturesAvailable", data: [h] },
              "*"
            );
            setTimeout(function () {
              void 0 === d.h.get(m) &&
                console.warn(
                  "EndlessPaper: your WebXP uses an old version. Some features may not be supported. Please contact support."
                );
            }, 2e3);
            for (const x of d.l) x(m);
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
      for (let h = 0; h < d.length; h++)
        d[h].children
          .item(0)
          .contentWindow.postMessage("orientationchange", "*");
  });
  window.addEventListener("message", function (d) {
    var h = EndlessPaper;
    const c = d.data.fct,
      k = d.data.url;
    d = d.data.data;
    void 0 !== c &&
      void 0 !== k &&
      (void 0 === d && (d = []),
      (h = h.EP_FUNCTIONS[c]),
      void 0 !== h && h(k, ...d));
  });
  document.addEventListener("fullscreenchange", function () {
    const d = EndlessPaper;
    document.fullscreenElement || (d.g = null);
  });

  return {
    EndlessPaper,
  };
}
