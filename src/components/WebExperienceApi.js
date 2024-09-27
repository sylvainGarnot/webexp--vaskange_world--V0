import { onMounted } from "vue";

export function useApi() {
  var t =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (d, g, c) {
          if (d == Array.prototype || d == Object.prototype) return d;
          d[g] = c.value;
          return d;
        };
  function u(d) {
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
  var v = u(this);
  function w(d, g) {
    if (g)
      a: {
        var c = v;
        d = d.split(".");
        for (var h = 0; h < d.length - 1; h++) {
          var l = d[h];
          if (!(l in c)) break a;
          c = c[l];
        }
        d = d[d.length - 1];
        h = c[d];
        g = g(h);
        g != h &&
          null != g &&
          t(c, d, { configurable: !0, writable: !0, value: g });
      }
  }
  w("Array.prototype.includes", function (d) {
    return d
      ? d
      : function (g, c) {
          var h = this;
          h instanceof String && (h = String(h));
          var l = h.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + l, 0)); c < l; c++) {
            var n = h[c];
            if (n === g || Object.is(n, g)) return !0;
          }
          return !1;
        };
  });
  const EndlessPaper = (function () {
    function d(a, b, ...f) {
      let k = {};
      k.fct = b;
      k.data = f;
      a.contentWindow.postMessage(k, "*");
    }
    function g(a, b) {
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
    const l =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (/Mac/.test(navigator.userAgent) &&
        navigator.maxTouchPoints &&
        2 < navigator.maxTouchPoints);
    let n = new Map(),
      q = new Map(),
      p = new Map(),
      m = [],
      r = new Map(),
      e = { j: [] };
    e.h = new Map();
    e.i = new Map();
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
      onBookmarkNearby: function (a, b) {
        a = c(a);
        if (null != a && ((a = n.get(a)), void 0 !== a))
          for (const f of a) f(b);
      },
      onShapeEvent: function (a, b, f) {
        a = c(a);
        if (null != a && ((a = q.get(a)), void 0 !== a && !(a.length <= b)))
          a[b](f);
      },
      receiveViewportAnchor: function (a, b) {
        a = c(a);
        if (null != a) {
          var f = p.get(a);
          if (void 0 !== f) {
            for (const k of f) k(b);
            p.delete(a);
          }
        }
      },
      toggleFullscreen: function (a) {
        a = c(a);
        if (null != a) {
          var b,
            f = null != (b = e.i.get(a)) ? b : a.parentElement;
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
          var f = r.get(a);
          if (void 0 !== f) {
            for (const k of f) k(b);
            r.delete(a);
          }
        }
      },
    };
    e.toggleClassIfOnIOS = function (a, b, f) {
      a.classList.toggle(l ? b : f);
    };
    e.getId = function (a, b) {
      return "ep-webxp-" + a + "-" + b;
    };
    e.getIframe = function (a, b) {
      return document.getElementById(e.getId(a, b));
    };
    e.fixIOSTouchEvent = function (a) {
      l && a && a.contentWindow && a.addEventListener("touchstart", {});
    };
    e.onLoad = function (a) {
      a && "function" == typeof a
        ? e.j.push(a)
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
        if (((b = h()), (f = a[0]), !b)) return;
      } else if (2 === a.length) {
        if (((f = a[0]), (b = c(a[1])), !b)) return;
      } else if (3 === a.length) (f = a[0]), (b = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.visitBookmark: invalid args");
        return;
      }
      f && "string" == typeof f
        ? b && b.contentWindow
          ? (g(b, "visitBookmark"), d(b, "visitBookmark", f))
          : console.error("EndlessPaper.visitBookmark: invalid WebXP")
        : console.error("EndlessPaper.visitBookmark: invalid bookmark");
    };
    e.onBookmarkNearby = function (...a) {
      let b, f;
      if (1 == a.length) (b = h()), (f = a[0]);
      else if (2 == a.length) (f = a[0]), (b = c(a[1]));
      else if (3 === a.length) (f = a[0]), (b = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.onBookmarkNearby: invalid args");
        return;
      }
      f && "function" == typeof f
        ? b && b.contentWindow
          ? (g(b, "onBookmarkNearby"),
            (a = n.get(b)),
            void 0 == a && (a = []),
            a.push(f),
            n.set(b, a))
          : console.error("EndlessPaper.onBookmarkNearby: invalid WebXP")
        : console.error("EndlessPaper.onBookmarkNearby: invalid callback");
    };
    e.setBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setBookmarks: invalid args");
        return;
      }
      Array.isArray(b)
        ? (g(a, "setBookmarks"), d(a, "setBookmarks", b))
        : console.error("EndlessPaper.setBookmarks: invalid args");
    };
    e.addShapeEventListener = function (...a) {
      let b, f;
      if (2 == a.length) (b = a[0]), (f = a[1]), (a = h());
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
            g(a, "addShapeEventListener");
            var k = q.get(a);
            void 0 == k && (k = []);
            var x = k.length;
            k.push(f);
            q.set(a, k);
            d(a, "addShapeEventListener", x, b);
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
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setShapes: invalid args");
        return;
      }
      Array.isArray(b)
        ? (g(a, "setShapes"), d(a, "setShapes", b))
        : console.error("EndlessPaper.setShapes: invalid args");
    };
    e.showTravelButtons = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showTravelButtons: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showTravelButtons: invalid args")
        : (g(a, "showTravelButtons"), d(a, "showTravelButtons", b));
    };
    e.showNavBar = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavBar: invalid args");
        return;
      }
      void 0 === b || "boolean" !== typeof b
        ? console.error("EndlessPaper.showNavBar: invalid args")
        : (g(a, "showNavBar"), d(a, "showNavBar", b));
    };
    e.getViewportAnchor = function (...a) {
      let b;
      if (0 == a.length) b = h();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = e.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getViewportAnchor: invalid args");
        return;
      }
      g(b, "getViewportAnchor");
      return new Promise((f) => {
        let k = p.get(b);
        void 0 == k && (k = []);
        k.push(f);
        p.set(b, k);
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
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setFullscreenTarget: invalid args");
        return;
      }
      (void 0 !== b && b instanceof HTMLElement) ||
        console.error("EndlessPaper.setFullscreenTarget: invalid HTML element");
      e.i.set(a, b);
    };
    e.toggleFullscreen = function (...a) {
      if (0 == a.length) a = h();
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
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLoadingIndicatorColor: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.setLoadingIndicatorColor: invalid args")
        : (g(a, "setLoadingIndicatorColor"),
          d(a, "setLoadingIndicatorColor", b));
    };
    e.computeNewShapes = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewShapes: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewShapes: invalid args")
        : (g(a, "computeNewShapes"), d(a, "computeNewShapes", b));
    };
    e.computeNewBookmarks = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.computeNewBookmarks: invalid args");
        return;
      }
      void 0 === b || "string" !== typeof b
        ? console.error("EndlessPaper.computeNewBookmarks: invalid args")
        : (g(a, "computeNewBookmarks"), d(a, "computeNewBookmarks", b));
    };
    e.setLogoPosition = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = h());
      else if (2 == a.length) (b = a[0]), (a = c(a[1]));
      else if (3 === a.length) (b = a[0]), (a = e.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setLogoPosition: invalid args");
        return;
      }
      "topleft" !== b && "bottomleft" !== b && "bottomright" !== b
        ? console.error("Endless Paper: invalid logo position")
        : (g(a, "setLogoPosition"), d(a, "setLogoPosition", b));
    };
    e.getLogoSize = function (...a) {
      let b;
      if (0 == a.length) b = h();
      else if (1 == a.length) b = c(a[0]);
      else if (2 === a.length) b = e.getIframe(a[0], a[1]);
      else {
        console.error("EndlessPaper.getLogoSize: invalid args");
        return;
      }
      g(b, "getLogoSize");
      return new Promise((f) => {
        let k = r.get(b);
        void 0 == k && (k = []);
        k.push(f);
        r.set(b, k);
        d(b, "getLogoSize");
      });
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
      g =
        "visitBookmark setBookmarks onBookmarkNearby addShapeEventListener setShapes showTravelButtons showNavBar getViewportAnchor toggleFullscreen setLoadingIndicatorColor computeNewShapes computeNewBookmarks readyEvent setLogoPosition getLogoSize".split(
          " "
        );
    Array.from(document.getElementsByClassName("ep-webxp")).map(function (c) {
      var h =
          c.dataset && void 0 !== c.dataset.webxpUrl
            ? c.dataset.webxpUrl
            : void 0,
        l =
          c.dataset && void 0 !== c.dataset.webxpAuthor
            ? c.dataset.webxpAuthor
            : "webxp";
      let n =
          c.dataset && void 0 !== c.dataset.webxpId
            ? c.dataset.webxpId
            : void 0,
        q =
          c.dataset && void 0 !== c.dataset.webxpShowTravelButtons
            ? "false" !== c.dataset.webxpShowTravelButtons.toLowerCase()
            : void 0,
        p =
          c.dataset && void 0 !== c.dataset.webxpShowNavbar
            ? "false" !== c.dataset.webxpShowNavbar.toLowerCase()
            : void 0;
      if (n || h)
        if (null !== d.getIframe(l, n))
          console.error(
            "EndlessPaper: The WebXP '" + l + "/" + n + "' already exists"
          );
        else {
          var m = document.createElement("iframe");
          h
            ? ((l = new URL(h)),
              void 0 !== q &&
                l.searchParams.append("showTravelButtons", String(q)),
              void 0 !== p && l.searchParams.append("showNavBar", String(p)),
              (m.src = l.toString()))
            : ((h = "https://endlesspaper.net/" + l + "/?id=" + n),
              void 0 !== q && (h += "&showTravelButtons=" + String(q)),
              void 0 !== p && (h += "&showNavBar=" + String(p)),
              (m.id = d.getId(l, n)),
              (m.src = h));
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
              { fct: "areFeaturesAvailable", data: [g] },
              "*"
            );
            setTimeout(function () {
              void 0 === d.h.get(m) &&
                console.warn(
                  "EndlessPaper: your WebXP uses an old version. Some features may not be supported. Please contact support."
                );
            }, 2e3);
            for (const r of d.j) r(m);
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
