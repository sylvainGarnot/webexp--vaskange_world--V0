import { onMounted } from "vue";

export function useApi() {
  var n =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (d, f, c) {
          if (d == Array.prototype || d == Object.prototype) return d;
          d[f] = c.value;
          return d;
        };
  function p(d) {
    d = [
      "object" == typeof globalThis && globalThis,
      d,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var f = 0; f < d.length; ++f) {
      var c = d[f];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var q = p(this);
  function r(d, f) {
    if (f)
      a: {
        var c = q;
        d = d.split(".");
        for (var h = 0; h < d.length - 1; h++) {
          var k = d[h];
          if (!(k in c)) break a;
          c = c[k];
        }
        d = d[d.length - 1];
        h = c[d];
        f = f(h);
        f != h &&
          null != f &&
          n(c, d, { configurable: !0, writable: !0, value: f });
      }
  }
  r("Array.prototype.includes", function (d) {
    return d
      ? d
      : function (f, c) {
          var h = this;
          h instanceof String && (h = String(h));
          var k = h.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + k, 0)); c < k; c++) {
            var l = h[c];
            if (l === f || Object.is(l, f)) return !0;
          }
          return !1;
        };
  });
  const EndlessPaper = (function () {
    function d(a, b) {
      a = g.g.get(a);
      void 0 !== a &&
        a.includes(b) &&
        console.warn("EndlessPaper: " + b + " is not available.");
    }
    function f(a) {
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
    function c() {
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
    const h =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (/Mac/.test(navigator.userAgent) &&
        navigator.maxTouchPoints &&
        2 < navigator.maxTouchPoints);
    let k = new Map(),
      l = new Map(),
      g = { h: [] };
    g.g = new Map();
    g.EP_FUNCTIONS = {
      receiveNonAvailableFeatures: function (a, b) {
        a = f(a);
        null != a &&
          (g.g.set(a, b),
          0 < b.length &&
            console.warn(
              "EndlessPaper: '" +
                b.join(", ") +
                "' are unavailable. Your WebXP script needs to be updated. Please contact support."
            ));
      },
      onBookmarkNearby: function (a, b) {
        a = f(a);
        if (null != a && ((a = k.get(a)), void 0 !== a))
          for (const e of a) e(b);
      },
      onShapeEvent: function (a, b, e) {
        a = f(a);
        if (null != a && ((a = l.get(a)), void 0 !== a && !(a.length <= b)))
          a[b](e);
      },
    };
    g.toggleClassIfOnIOS = function (a, b, e) {
      a.classList.toggle(h ? b : e);
    };
    g.getId = function (a, b) {
      return "ep-webxp-" + a + "-" + b;
    };
    g.getIframe = function (a, b) {
      return document.getElementById(g.getId(a, b));
    };
    g.fixIOSTouchEvent = function (a) {
      h && a && a.contentWindow && a.addEventListener("touchstart", {});
    };
    g.onLoad = function (a) {
      a && "function" == typeof a && g.h.push(a);
    };
    g.visitBookmark = function (...a) {
      let b, e;
      if (1 === a.length) {
        if (((b = c()), (e = a[0]), !b)) return;
      } else if (2 === a.length) {
        if (((e = a[0]), (b = f(a[1])), !b)) return;
      } else if (3 === a.length) (e = a[0]), (b = g.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.visitBookmark: invalid args");
        return;
      }
      e && "string" == typeof e
        ? b && b.contentWindow
          ? (d(b, "visitBookmark"),
            (a = { fct: "visitBookmark" }),
            (a.data = [e]),
            b.contentWindow.postMessage(a, "*"))
          : console.error("EndlessPaper.visitBookmark: invalid WebXP")
        : console.error("EndlessPaper.visitBookmark: invalid bookmark");
    };
    g.onBookmarkNearby = function (...a) {
      let b, e;
      if (1 == a.length) (b = c()), (e = a[0]);
      else if (2 == a.length) (e = a[0]), (b = f(a[1]));
      else if (3 === a.length) (e = a[0]), (b = g.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.onBookmarkNearby: invalid args");
        return;
      }
      e && "function" == typeof e
        ? b && b.contentWindow
          ? (d(b, "onBookmarkNearby"),
            (a = k.get(b)),
            void 0 == a && (a = []),
            a.push(e),
            k.set(b, a))
          : console.error("EndlessPaper.onBookmarkNearby: invalid WebXP")
        : console.error("EndlessPaper.onBookmarkNearby: invalid callback");
    };
    g.addShapeEventListener = function (...a) {
      let b;
      if (2 == a.length) {
        b = a[0];
        var e = a[1];
        a = c();
      } else if (3 == a.length) (b = a[0]), (e = a[1]), (a = f(a[2]));
      else if (4 === a.length)
        (b = a[0]), (e = a[1]), (a = g.getIframe(a[2], a[3]));
      else {
        console.error("EndlessPaper.addShapeEventListener: invalid args");
        return;
      }
      if (a && a.contentWindow)
        if (e && "function" == typeof e)
          if (b && "string" === typeof b) {
            d(a, "addShapeEventListener");
            var m = l.get(a);
            void 0 == m && (m = []);
            var t = m.length;
            m.push(e);
            l.set(a, m);
            e = { fct: "addShapeEventListener" };
            e.data = [t, b];
            a.contentWindow.postMessage(e, "*");
          } else
            console.error(
              "EndlessPaper.addShapeEventListener: invalid eventType"
            );
        else
          console.error("EndlessPaper.addShapeEventListener: invalid callback");
      else console.error("EndlessPaper.addShapeEventListener: invalid WebXP");
    };
    g.setShapes = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = c());
      else if (2 == a.length) (b = a[0]), (a = f(a[1]));
      else if (3 === a.length) (b = a[0]), (a = g.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.setShapes: invalid args");
        return;
      }
      if (Array.isArray(b)) {
        d(a, "setShapes");
        var e = { fct: "setShapes" };
        e.data = [b];
        a.contentWindow.postMessage(e, "*");
      } else console.error("EndlessPaper.setShapes: invalid args");
    };
    g.showTravelButtons = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = c());
      else if (2 == a.length) (b = a[0]), (a = f(a[1]));
      else if (3 === a.length) (b = a[0]), (a = g.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showTravelButtons: invalid args");
        return;
      }
      if (void 0 === b || "boolean" !== typeof b)
        console.error("EndlessPaper.showTravelButtons: invalid args");
      else {
        d(a, "showTravelButtons");
        var e = { fct: "showTravelButtons" };
        e.data = [b];
        a.contentWindow.postMessage(e, "*");
      }
    };
    g.showNavBar = function (...a) {
      let b;
      if (1 == a.length) (b = a[0]), (a = c());
      else if (2 == a.length) (b = a[0]), (a = f(a[1]));
      else if (3 === a.length) (b = a[0]), (a = g.getIframe(a[1], a[2]));
      else {
        console.error("EndlessPaper.showNavBar: invalid args");
        return;
      }
      if (void 0 === b || "boolean" !== typeof b)
        console.error("EndlessPaper.showNavBar: invalid args");
      else {
        d(a, "showNavBar");
        var e = { fct: "showNavBar" };
        e.data = [b];
        a.contentWindow.postMessage(e, "*");
      }
    };
    return g;
  })();
  onMounted(() => {
    const d = EndlessPaper,
      f =
        "visitBookmark onBookmarkNearby addShapeEventListener setShapes showTravelButtons showNavBar".split(
          " "
        );
    Array.from(document.getElementsByClassName("ep-webxp")).map(function (c) {
      var h =
          c.dataset && void 0 !== c.dataset.webxpUrl
            ? c.dataset.webxpUrl
            : void 0,
        k =
          c.dataset && void 0 !== c.dataset.webxpAuthor
            ? c.dataset.webxpAuthor
            : "webxp";
      let l =
          c.dataset && void 0 !== c.dataset.webxpId
            ? c.dataset.webxpId
            : void 0,
        g =
          c.dataset && void 0 !== c.dataset.webxpShowTravelButtons
            ? "false" !== c.dataset.webxpShowTravelButtons.toLowerCase()
            : void 0,
        a =
          c.dataset && void 0 !== c.dataset.webxpShowNavbar
            ? "false" !== c.dataset.webxpShowNavbar.toLowerCase()
            : void 0;
      if (l || h)
        if (null !== d.getIframe(k, l))
          console.error(
            "EndlessPaper: The WebXP '" + k + "/" + l + "' already exists"
          );
        else {
          var b = document.createElement("iframe");
          h
            ? ((k = new URL(h)),
              void 0 !== g &&
                k.searchParams.append("showTravelButtons", String(g)),
              void 0 !== a && k.searchParams.append("showNavBar", String(a)),
              (b.src = k.toString()))
            : ((h = "https://endlesspaper.net/" + k + "/?id=" + l),
              void 0 !== g && (h += "&showTravelButtons=" + String(g)),
              void 0 !== a && (h += "&showNavBar=" + String(a)),
              (b.id = d.getId(k, l)),
              (b.src = h));
          b.style.width = "100%";
          b.style.height = "100%";
          b.setAttribute("allowFullScreen", "");
          c.appendChild(b);
          d.fixIOSTouchEvent(b);
          b.onload = () => {
            void 0 !== c.dataset.webxpShapeEditor &&
              b.contentWindow.postMessage({ fct: "enableShapeEditor" }, "*");
            void 0 !== c.dataset.webxpHl &&
              b.contentWindow.postMessage(
                { fct: "hl" },
                "https://endlesspaper.net/"
              );
            b.contentWindow.postMessage(
              { fct: "areFeaturesAvailable", data: [f] },
              "*"
            );
            setTimeout(function () {
              void 0 === d.g.get(b) &&
                console.warn(
                  "EndlessPaper: your WebXP uses an old version. Some features may not be supported. Please contact support."
                );
            }, 2e3);
            for (const e of d.h) e(b);
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
      for (let f = 0; f < d.length; f++)
        d[f].children
          .item(0)
          .contentWindow.postMessage("orientationchange", "*");
  });
  window.addEventListener("message", function (d) {
    var f = EndlessPaper;
    const c = d.data.fct,
      h = d.data.url;
    d = d.data.data;
    void 0 !== c &&
      void 0 !== h &&
      (void 0 === d && (d = []),
      (f = f.EP_FUNCTIONS[c]),
      void 0 !== f && f(h, ...d));
  });

  return {
    EndlessPaper,
  };
}
