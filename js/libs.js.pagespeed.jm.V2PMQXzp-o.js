function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0,
    jQuery(document).trigger("YTAPIReady"))
}
function uncamel(e) {
    return e.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    })
}
function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}
function setFilter(e, t, i) {
    var r = uncamel(t)
      , o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[o + "filter"] = e[o + "filter"] || "",
    i = setUnit(i > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : i, jQuery.CSS.filters[t].unit),
    e[o + "filter"] += r + "(" + i + ") ",
    delete e[t]
}
function initHeader() {
    width = $headerSizer.width(),
    height = $headerSizer.height(),
    canvas = document.getElementById("particles"),
    canvas.width = width,
    canvas.height = height,
    ctx = canvas.getContext("2d"),
    circles = [];
    for (var e = 0; e < .5 * width; e++) {
        var t = new Circle;
        circles.push(t)
    }
    animate()
}
function addListeners() {
    window.addEventListener("scroll", scrollCheck),
    window.addEventListener("resize", resize)
}
function scrollCheck() {
    animateHeader = !(document.body.scrollTop > height)
}
function resize() {
    width = $headerSizer.width(),
    height = $headerSizer.height(),
    canvas.width = width,
    canvas.height = height
}
function animate() {
    if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var e in circles)
            circles[e].draw()
    }
    requestAnimationFrame(animate)
}
function Circle() {
    function e() {
        t.pos.x = Math.random() * width,
        t.pos.y = height + 100 * Math.random(),
        t.alpha = .1 + .3 * Math.random(),
        t.scale = .1 + .3 * Math.random(),
        t.velocity = Math.random()
    }
    var t = this;
    !function() {
        t.pos = {},
        e()
    }(),
    this.draw = function() {
        t.alpha <= 0 && e(),
        t.pos.y -= t.velocity,
        t.alpha -= 4e-4,
        ctx.beginPath(),
        ctx.arc(t.pos.x, t.pos.y, 10 * t.scale, 0, 2 * Math.PI, !1),
        ctx.fillStyle = "rgba(255,255,255," + t.alpha + ")",
        ctx.fill()
    }
}
(function() {
    var e, t, i, r, o, n, a, s, l, c, d, u, p, f, h, y, g, m, v, T, w, b, P, x, S, _, k, Y, C, j, Q, A, $, I, M, O, E, D, F, z, B, L, H, R, W, U, q, N, V, X = [].slice, G = {}.hasOwnProperty, Z = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            G.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }, K = [].indexOf || function(e) {
        for (var t = 0, i = this.length; i > t; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    for (w = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    },
    C = function() {
        var e;
        return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
    }
    ,
    Q = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
    T = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
    null == Q && (Q = function(e) {
        return setTimeout(e, 50)
    }
    ,
    T = function(e) {
        return clearTimeout(e)
    }
    ),
    $ = function(e) {
        var t, i;
        return t = C(),
        (i = function() {
            var r;
            return r = C() - t,
            r >= 33 ? (t = C(),
            e(r, function() {
                return Q(i)
            })) : setTimeout(i, 33 - r)
        }
        )()
    }
    ,
    A = function() {
        var e, t, i;
        return i = arguments[0],
        t = arguments[1],
        e = 3 <= arguments.length ? X.call(arguments, 2) : [],
        "function" == typeof i[t] ? i[t].apply(i, e) : i[t]
    }
    ,
    b = function() {
        var e, t, i, r, o, n, a;
        for (t = arguments[0],
        r = 2 <= arguments.length ? X.call(arguments, 1) : [],
        n = 0,
        a = r.length; a > n; n++)
            if (i = r[n])
                for (e in i)
                    G.call(i, e) && (o = i[e],
                    null != t[e] && "object" == typeof t[e] && null != o && "object" == typeof o ? b(t[e], o) : t[e] = o);
        return t
    }
    ,
    g = function(e) {
        var t, i, r, o, n;
        for (i = t = 0,
        o = 0,
        n = e.length; n > o; o++)
            r = e[o],
            i += Math.abs(r),
            t++;
        return i / t
    }
    ,
    x = function(e, t) {
        var i, r, o;
        if (null == e && (e = "options"),
        null == t && (t = !0),
        o = document.querySelector("[data-pace-" + e + "]")) {
            if (i = o.getAttribute("data-pace-" + e),
            !t)
                return i;
            try {
                return JSON.parse(i)
            } catch (e) {
                return r = e,
                "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", r) : void 0
            }
        }
    }
    ,
    a = function() {
        function e() {}
        return e.prototype.on = function(e, t, i, r) {
            var o;
            return null == r && (r = !1),
            null == this.bindings && (this.bindings = {}),
            null == (o = this.bindings)[e] && (o[e] = []),
            this.bindings[e].push({
                handler: t,
                ctx: i,
                once: r
            })
        }
        ,
        e.prototype.once = function(e, t, i) {
            return this.on(e, t, i, !0)
        }
        ,
        e.prototype.off = function(e, t) {
            var i, r, o;
            if (null != (null != (r = this.bindings) ? r[e] : void 0)) {
                if (null == t)
                    return delete this.bindings[e];
                for (i = 0,
                o = []; i < this.bindings[e].length; )
                    o.push(this.bindings[e][i].handler === t ? this.bindings[e].splice(i, 1) : i++);
                return o
            }
        }
        ,
        e.prototype.trigger = function() {
            var e, t, i, r, o, n, a, s, l;
            if (i = arguments[0],
            e = 2 <= arguments.length ? X.call(arguments, 1) : [],
            null != (a = this.bindings) ? a[i] : void 0) {
                for (o = 0,
                l = []; o < this.bindings[i].length; )
                    s = this.bindings[i][o],
                    r = s.handler,
                    t = s.ctx,
                    n = s.once,
                    r.apply(null != t ? t : this, e),
                    l.push(n ? this.bindings[i].splice(o, 1) : o++);
                return l
            }
        }
        ,
        e
    }(),
    c = window.Pace || {},
    window.Pace = c,
    b(c, a.prototype),
    j = c.options = b({}, w, window.paceOptions, x()),
    q = ["ajax", "document", "eventLag", "elements"],
    H = 0,
    W = q.length; W > H; H++)
        E = q[H],
        j[E] === !0 && (j[E] = w[E]);
    l = function(e) {
        function t() {
            return N = t.__super__.constructor.apply(this, arguments)
        }
        return Z(t, e),
        t
    }(Error),
    t = function() {
        function e() {
            this.progress = 0
        }
        return e.prototype.getElement = function() {
            var e;
            if (null == this.el) {
                if (e = document.querySelector(j.target),
                !e)
                    throw new l;
                this.el = document.createElement("div"),
                this.el.className = "pace pace-active",
                document.body.className = document.body.className.replace(/pace-done/g, ""),
                document.body.className += " pace-running",
                this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',
                null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
            }
            return this.el
        }
        ,
        e.prototype.finish = function() {
            var e;
            return e = this.getElement(),
            e.className = e.className.replace("pace-active", ""),
            e.className += " pace-inactive",
            document.body.className = document.body.className.replace("pace-running", ""),
            document.body.className += " pace-done"
        }
        ,
        e.prototype.update = function(e) {
            return this.progress = e,
            this.render()
        }
        ,
        e.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (e) {
                l = e
            }
            return this.el = void 0
        }
        ,
        e.prototype.render = function() {
            var e, t, i, r, o, n, a;
            if (null == document.querySelector(j.target))
                return !1;
            for (e = this.getElement(),
            r = "translate3d(" + this.progress + "%, 0, 0)",
            a = ["webkitTransform", "msTransform", "transform"],
            o = 0,
            n = a.length; n > o; o++)
                t = a[o],
                e.children[0].style[t] = r;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"),
            this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "",
            i += 0 | this.progress),
            e.children[0].setAttribute("data-progress", "" + i)),
            this.lastRenderedProgress = this.progress
        }
        ,
        e.prototype.done = function() {
            return this.progress >= 100
        }
        ,
        e
    }(),
    s = function() {
        function e() {
            this.bindings = {}
        }
        return e.prototype.trigger = function(e, t) {
            var i, r, o, n, a;
            if (null != this.bindings[e]) {
                for (n = this.bindings[e],
                a = [],
                r = 0,
                o = n.length; o > r; r++)
                    i = n[r],
                    a.push(i.call(this, t));
                return a
            }
        }
        ,
        e.prototype.on = function(e, t) {
            var i;
            return null == (i = this.bindings)[e] && (i[e] = []),
            this.bindings[e].push(t)
        }
        ,
        e
    }(),
    L = window.XMLHttpRequest,
    B = window.XDomainRequest,
    z = window.WebSocket,
    P = function(e, t) {
        var i, r, o, n;
        n = [];
        for (r in t.prototype)
            try {
                o = t.prototype[r],
                n.push(null == e[r] && "function" != typeof o ? e[r] = o : void 0)
            } catch (e) {
                i = e
            }
        return n
    }
    ,
    k = [],
    c.ignore = function() {
        var e, t, i;
        return t = arguments[0],
        e = 2 <= arguments.length ? X.call(arguments, 1) : [],
        k.unshift("ignore"),
        i = t.apply(null , e),
        k.shift(),
        i
    }
    ,
    c.track = function() {
        var e, t, i;
        return t = arguments[0],
        e = 2 <= arguments.length ? X.call(arguments, 1) : [],
        k.unshift("track"),
        i = t.apply(null , e),
        k.shift(),
        i
    }
    ,
    O = function(e) {
        var t;
        if (null == e && (e = "GET"),
        "track" === k[0])
            return "force";
        if (!k.length && j.ajax) {
            if ("socket" === e && j.ajax.trackWebSockets)
                return !0;
            if (t = e.toUpperCase(),
            K.call(j.ajax.trackMethods, t) >= 0)
                return !0
        }
        return !1
    }
    ,
    d = function(e) {
        function t() {
            var e, i = this;
            t.__super__.constructor.apply(this, arguments),
            e = function(e) {
                var t;
                return t = e.open,
                e.open = function(r, o) {
                    return O(r) && i.trigger("request", {
                        type: r,
                        url: o,
                        request: e
                    }),
                    t.apply(e, arguments)
                }
            }
            ,
            window.XMLHttpRequest = function(t) {
                var i;
                return i = new L(t),
                e(i),
                i
            }
            ;
            try {
                P(window.XMLHttpRequest, L)
            } catch (e) {}
            if (null != B) {
                window.XDomainRequest = function() {
                    var t;
                    return t = new B,
                    e(t),
                    t
                }
                ;
                try {
                    P(window.XDomainRequest, B)
                } catch (e) {}
            }
            if (null != z && j.ajax.trackWebSockets) {
                window.WebSocket = function(e, t) {
                    var r;
                    return r = null != t ? new z(e,t) : new z(e),
                    O("socket") && i.trigger("request", {
                        type: "socket",
                        url: e,
                        protocols: t,
                        request: r
                    }),
                    r
                }
                ;
                try {
                    P(window.WebSocket, z)
                } catch (e) {}
            }
        }
        return Z(t, e),
        t
    }(s),
    R = null ,
    S = function() {
        return null == R && (R = new d),
        R
    }
    ,
    M = function(e) {
        var t, i, r, o;
        for (o = j.ajax.ignoreURLs,
        i = 0,
        r = o.length; r > i; i++)
            if (t = o[i],
            "string" == typeof t) {
                if (-1 !== e.indexOf(t))
                    return !0
            } else if (t.test(e))
                return !0;
        return !1
    }
    ,
    S().on("request", function(t) {
        var i, r, o, n, a;
        return n = t.type,
        o = t.request,
        a = t.url,
        M(a) ? void 0 : c.running || j.restartOnRequestAfter === !1 && "force" !== O(n) ? void 0 : (r = arguments,
        i = j.restartOnRequestAfter || 0,
        "boolean" == typeof i && (i = 0),
        setTimeout(function() {
            var t, i, a, s, l, d;
            if (t = "socket" === n ? o.readyState < 2 : 0 < (s = o.readyState) && 4 > s) {
                for (c.restart(),
                l = c.sources,
                d = [],
                i = 0,
                a = l.length; a > i; i++) {
                    if (E = l[i],
                    E instanceof e) {
                        E.watch.apply(E, r);
                        break
                    }
                    d.push(void 0)
                }
                return d
            }
        }, i))
    }),
    e = function() {
        function e() {
            var e = this;
            this.elements = [],
            S().on("request", function() {
                return e.watch.apply(e, arguments)
            })
        }
        return e.prototype.watch = function(e) {
            var t, i, r, o;
            return r = e.type,
            t = e.request,
            o = e.url,
            M(o) ? void 0 : (i = "socket" === r ? new f(t) : new h(t),
            this.elements.push(i))
        }
        ,
        e
    }(),
    h = function() {
        function e(e) {
            var t, i, r, o, n, a, s = this;
            if (this.progress = 0,
            null != window.ProgressEvent)
                for (i = null ,
                e.addEventListener("progress", function(e) {
                    return s.progress = e.lengthComputable ? 100 * e.loaded / e.total : s.progress + (100 - s.progress) / 2
                }, !1),
                a = ["load", "abort", "timeout", "error"],
                r = 0,
                o = a.length; o > r; r++)
                    t = a[r],
                    e.addEventListener(t, function() {
                        return s.progress = 100
                    }, !1);
            else
                n = e.onreadystatechange,
                e.onreadystatechange = function() {
                    var t;
                    return 0 === (t = e.readyState) || 4 === t ? s.progress = 100 : 3 === e.readyState && (s.progress = 50),
                    "function" == typeof n ? n.apply(null , arguments) : void 0
                }
        }
        return e
    }(),
    f = function() {
        function e(e) {
            var t, i, r, o, n = this;
            for (this.progress = 0,
            o = ["error", "open"],
            i = 0,
            r = o.length; r > i; i++)
                t = o[i],
                e.addEventListener(t, function() {
                    return n.progress = 100
                }, !1)
        }
        return e
    }(),
    r = function() {
        function e(e) {
            var t, i, r, n;
            for (null == e && (e = {}),
            this.elements = [],
            null == e.selectors && (e.selectors = []),
            n = e.selectors,
            i = 0,
            r = n.length; r > i; i++)
                t = n[i],
                this.elements.push(new o(t))
        }
        return e
    }(),
    o = function() {
        function e(e) {
            this.selector = e,
            this.progress = 0,
            this.check()
        }
        return e.prototype.check = function() {
            var e = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return e.check()
            }, j.elements.checkInterval)
        }
        ,
        e.prototype.done = function() {
            return this.progress = 100
        }
        ,
        e
    }(),
    i = function() {
        function e() {
            var e, t, i = this;
            this.progress = null != (t = this.states[document.readyState]) ? t : 100,
            e = document.onreadystatechange,
            document.onreadystatechange = function() {
                return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]),
                "function" == typeof e ? e.apply(null , arguments) : void 0
            }
        }
        return e.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        },
        e
    }(),
    n = function() {
        function e() {
            var e, t, i, r, o, n = this;
            this.progress = 0,
            e = 0,
            o = [],
            r = 0,
            i = C(),
            t = setInterval(function() {
                var a;
                return a = C() - i - 50,
                i = C(),
                o.push(a),
                o.length > j.eventLag.sampleCount && o.shift(),
                e = g(o),
                ++r >= j.eventLag.minSamples && e < j.eventLag.lagThreshold ? (n.progress = 100,
                clearInterval(t)) : n.progress = 100 * (3 / (e + 3))
            }, 50)
        }
        return e
    }(),
    p = function() {
        function e(e) {
            this.source = e,
            this.last = this.sinceLastUpdate = 0,
            this.rate = j.initialRate,
            this.catchup = 0,
            this.progress = this.lastProgress = 0,
            null != this.source && (this.progress = A(this.source, "progress"))
        }
        return e.prototype.tick = function(e, t) {
            var i;
            return null == t && (t = A(this.source, "progress")),
            t >= 100 && (this.done = !0),
            t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate),
            this.catchup = (t - this.progress) / j.catchupTime,
            this.sinceLastUpdate = 0,
            this.last = t),
            t > this.progress && (this.progress += this.catchup * e),
            i = 1 - Math.pow(this.progress / 100, j.easeFactor),
            this.progress += i * this.rate * e,
            this.progress = Math.min(this.lastProgress + j.maxProgressPerFrame, this.progress),
            this.progress = Math.max(0, this.progress),
            this.progress = Math.min(100, this.progress),
            this.lastProgress = this.progress,
            this.progress
        }
        ,
        e
    }(),
    D = null ,
    I = null ,
    m = null ,
    F = null ,
    y = null ,
    v = null ,
    c.running = !1,
    _ = function() {
        return j.restartOnPushState ? c.restart() : void 0
    }
    ,
    null != window.history.pushState && (U = window.history.pushState,
    window.history.pushState = function() {
        return _(),
        U.apply(window.history, arguments)
    }
    ),
    null != window.history.replaceState && (V = window.history.replaceState,
    window.history.replaceState = function() {
        return _(),
        V.apply(window.history, arguments)
    }
    ),
    u = {
        ajax: e,
        elements: r,
        document: i,
        eventLag: n
    },
    (Y = function() {
        var e, i, r, o, n, a, s, l;
        for (c.sources = D = [],
        a = ["ajax", "elements", "document", "eventLag"],
        i = 0,
        o = a.length; o > i; i++)
            e = a[i],
            j[e] !== !1 && D.push(new u[e](j[e]));
        for (l = null != (s = j.extraSources) ? s : [],
        r = 0,
        n = l.length; n > r; r++)
            E = l[r],
            D.push(new E(j));
        return c.bar = m = new t,
        I = [],
        F = new p
    }
    )(),
    c.stop = function() {
        return c.trigger("stop"),
        c.running = !1,
        m.destroy(),
        v = !0,
        null != y && ("function" == typeof T && T(y),
        y = null ),
        Y()
    }
    ,
    c.restart = function() {
        return c.trigger("restart"),
        c.stop(),
        c.start()
    }
    ,
    c.go = function() {
        var e;
        return c.running = !0,
        m.render(),
        e = C(),
        v = !1,
        y = $(function(t, i) {
            var r, o, n, a, s, l, d, u, f, h, y, g, T, w, b, P;
            for (u = 100 - m.progress,
            o = y = 0,
            n = !0,
            l = g = 0,
            w = D.length; w > g; l = ++g)
                for (E = D[l],
                h = null != I[l] ? I[l] : I[l] = [],
                s = null != (P = E.elements) ? P : [E],
                d = T = 0,
                b = s.length; b > T; d = ++T)
                    a = s[d],
                    f = null != h[d] ? h[d] : h[d] = new p(a),
                    n &= f.done,
                    f.done || (o++,
                    y += f.tick(t));
            return r = y / o,
            m.update(F.tick(t, r)),
            m.done() || n || v ? (m.update(100),
            c.trigger("done"),
            setTimeout(function() {
                return m.finish(),
                c.running = !1,
                c.trigger("hide")
            }, Math.max(j.ghostTime, Math.max(j.minTime - (C() - e), 0)))) : i()
        })
    }
    ,
    c.start = function(e) {
        b(j, e),
        c.running = !0;
        try {
            m.render()
        } catch (e) {
            l = e
        }
        return document.querySelector(".pace") ? (c.trigger("start"),
        c.go()) : setTimeout(c.start, 50)
    }
    ,
    "function" == typeof define && define.amd ? define(function() {
        return c
    }) : "object" == typeof exports ? module.exports = c : j.startOnPageLoad && c.start()
}
).call(this),
!function(e, t) {
    "use strict";
    var i = function() {
        var i = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        }
          , r = function() {
            var t = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
            return t && e("html").css("cursor", "pointer").on("click", e.noop),
            t
        }()
          , o = function() {
            var e = document.documentElement.style;
            return "behavior"in e && "fill"in e && /iemobile/i.test(navigator.userAgent)
        }()
          , n = function() {
            return !!t.PointerEvent
        }()
          , a = function(e, t, r) {
            var o, n = i.menuClass;
            t.cssArrows && (n += " " + i.menuArrowClass),
            o = r ? "addClass" : "removeClass",
            e[o](n)
        }
          , s = function(t, r) {
            return t.find("li." + r.pathClass).slice(0, r.pathLevels).addClass(r.hoverClass + " " + i.bcClass).filter(function() {
                return e(this).children(r.popUpSelector).hide().show().length
            }).removeClass(r.pathClass)
        }
          , l = function(e, t) {
            var r = t ? "addClass" : "removeClass";
            e.children("a")[r](i.anchorClass)
        }
          , c = function(e) {
            var t = e.css("ms-touch-action")
              , i = e.css("touch-action");
            i = i || t,
            i = "pan-y" === i ? "auto" : "pan-y",
            e.css({
                "ms-touch-action": i,
                "touch-action": i
            })
        }
          , d = function(e) {
            return e.closest("." + i.menuClass)
        }
          , u = function(e) {
            return d(e).data("sfOptions")
        }
          , p = function() {
            var t = e(this)
              , i = u(t);
            clearTimeout(i.sfTimer),
            t.siblings().superfish("hide").end().superfish("show")
        }
          , f = function(t) {
            t.retainPath = e.inArray(this[0], t.$path) > -1,
            this.superfish("hide"),
            this.parents("." + t.hoverClass).length || (t.onIdle.call(d(this)),
            t.$path.length && e.proxy(p, t.$path)())
        }
          , h = function() {
            var t = e(this)
              , i = u(t);
            r ? e.proxy(f, t, i)() : (clearTimeout(i.sfTimer),
            i.sfTimer = setTimeout(e.proxy(f, t, i), i.delay))
        }
          , y = function(t) {
            var i = e(this)
              , r = u(i)
              , o = i.siblings(t.data.popUpSelector);
            return r.onHandleTouch.call(o) === !1 ? this : void (o.length > 0 && o.is(":hidden") && (i.one("click.superfish", !1),
            "MSPointerDown" === t.type || "pointerdown" === t.type ? i.trigger("focus") : e.proxy(p, i.parent("li"))()))
        }
          , g = function(t, i) {
            var a = "li:has(" + i.popUpSelector + ")";
            e.fn.hoverIntent && !i.disableHI ? t.hoverIntent(p, h, a) : t.on("mouseenter.superfish", a, p).on("mouseleave.superfish", a, h);
            var s = "MSPointerDown.superfish";
            n && (s = "pointerdown.superfish"),
            r || (s += " touchend.superfish"),
            o && (s += " mousedown.superfish"),
            t.on("focusin.superfish", "li", p).on("focusout.superfish", "li", h).on(s, "a", i, y)
        };
        return {
            hide: function(t) {
                if (this.length) {
                    var i = this
                      , r = u(i);
                    if (!r)
                        return this;
                    var o = r.retainPath === !0 ? r.$path : ""
                      , n = i.find("li." + r.hoverClass).add(this).not(o).removeClass(r.hoverClass).children(r.popUpSelector)
                      , a = r.speedOut;
                    if (t && (n.show(),
                    a = 0),
                    r.retainPath = !1,
                    r.onBeforeHide.call(n) === !1)
                        return this;
                    n.stop(!0, !0).animate(r.animationOut, a, function() {
                        var t = e(this);
                        r.onHide.call(t)
                    })
                }
                return this
            },
            show: function() {
                var e = u(this);
                if (!e)
                    return this;
                var t = this.addClass(e.hoverClass)
                  , i = t.children(e.popUpSelector);
                return e.onBeforeShow.call(i) === !1 ? this : (i.stop(!0, !0).animate(e.animation, e.speed, function() {
                    e.onShow.call(i)
                }),
                this)
            },
            destroy: function() {
                return this.each(function() {
                    var t, r = e(this), o = r.data("sfOptions");
                    return !!o && (t = r.find(o.popUpSelector).parent("li"),
                    clearTimeout(o.sfTimer),
                    a(r, o),
                    l(t),
                    c(r),
                    r.off(".superfish").off(".hoverIntent"),
                    t.children(o.popUpSelector).attr("style", function(e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }),
                    o.$path.removeClass(o.hoverClass + " " + i.bcClass).addClass(o.pathClass),
                    r.find("." + o.hoverClass).removeClass(o.hoverClass),
                    o.onDestroy.call(r),
                    void r.removeData("sfOptions"))
                })
            },
            init: function(t) {
                return this.each(function() {
                    var r = e(this);
                    if (r.data("sfOptions"))
                        return !1;
                    var o = e.extend({}, e.fn.superfish.defaults, t)
                      , n = r.find(o.popUpSelector).parent("li");
                    o.$path = s(r, o),
                    r.data("sfOptions", o),
                    a(r, o, !0),
                    l(n, !0),
                    c(r),
                    g(r, o),
                    n.not("." + i.bcClass).superfish("hide", !0),
                    o.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(t, r) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? e.error("Method " + t + " does not exist on jQuery.fn.superfish") : i.init.apply(this, arguments)
    }
    ,
    e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
}(jQuery, window),
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var o, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null ,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null ,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null ,
                currentDirection: 0,
                currentLeft: null ,
                currentSlide: 0,
                direction: 1,
                $dots: null ,
                listWidth: null ,
                listHeight: null ,
                loadIndex: 0,
                $nextArrow: null ,
                $prevArrow: null ,
                slideCount: null ,
                slideWidth: null ,
                $slideTrack: null ,
                $slides: null ,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null ,
                $list: null ,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            e.extend(n, n.initials),
            n.activeBreakpoint = null ,
            n.animType = null ,
            n.animProp = null ,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null ,
            n.respondTo = null ,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = e(t),
            n.$slidesCache = null ,
            n.transformType = null ,
            n.transitionType = null ,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null ,
            o = e(t).data("slick") || {},
            n.options = e.extend({}, n.defaults, r, o),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = e.proxy(n.autoPlay, n),
            n.autoPlayClear = e.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = e.proxy(n.autoPlayIterator, n),
            n.changeSlide = e.proxy(n.changeSlide, n),
            n.clickHandler = e.proxy(n.clickHandler, n),
            n.selectHandler = e.proxy(n.selectHandler, n),
            n.setPosition = e.proxy(n.setPosition, n),
            n.swipeHandler = e.proxy(n.swipeHandler, n),
            n.dragHandler = e.proxy(n.dragHandler, n),
            n.keyHandler = e.proxy(n.keyHandler, n),
            n.instanceUid = i++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
        var i = 0;
        return t
    }(),
    t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
        var o = this;
        if ("boolean" == typeof i)
            r = i,
            i = null ;
        else if (0 > i || i >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : r ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : r === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    t.prototype.animateSlide = function(t, i) {
        var r = {}
          , o = this;
        o.animateHeight(),
        o.options.rtl === !0 && o.options.vertical === !1 && (t = -t),
        o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
        e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                o.options.vertical === !1 ? (r[o.animType] = "translate(" + e + "px, 0px)",
                o.$slideTrack.css(r)) : (r[o.animType] = "translate(0px," + e + "px)",
                o.$slideTrack.css(r))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(),
        t = Math.ceil(t),
        o.options.vertical === !1 ? r[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : r[o.animType] = "translate3d(0px," + t + "px, 0px)",
        o.$slideTrack.css(r),
        i && setTimeout(function() {
            o.disableTransition(),
            i.call()
        }, o.options.speed))
    }
    ,
    t.prototype.getNavTarget = function() {
        var t = this
          , i = t.options.asNavFor;
        return i && null !== i && (i = e(i).not(t.$slider)),
        i
    }
    ,
    t.prototype.asNavFor = function(t) {
        var i = this
          , r = i.getNavTarget();
        null !== r && "object" == typeof r && r.each(function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }
    ,
    t.prototype.applyTransition = function(e) {
        var t = this
          , i = {};
        t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }
    ,
    t.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 === 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    t.prototype.buildDots = function() {
        var t, i, r = this;
        if (r.options.dots === !0 && r.slideCount > r.options.slidesToShow) {
            for (r.$slider.addClass("slick-dotted"),
            i = e("<ul />").addClass(r.options.dotsClass),
            t = 0; t <= r.getDotCount(); t += 1)
                i.append(e("<li />").append(r.options.customPaging.call(this, r, t)));
            r.$dots = i.appendTo(r.options.appendDots),
            r.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.options.draggable === !0 && t.$list.addClass("draggable")
    }
    ,
    t.prototype.buildRows = function() {
        var e, t, i, r, o, n, a, s = this;
        if (r = document.createDocumentFragment(),
        n = s.$slider.children(),
        s.options.rows > 1) {
            for (a = s.options.slidesPerRow * s.options.rows,
            o = Math.ceil(n.length / a),
            e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < s.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < s.options.slidesPerRow; i++) {
                        var d = e * a + (t * s.options.slidesPerRow + i);
                        n.get(d) && c.appendChild(n.get(d))
                    }
                    l.appendChild(c)
                }
                r.appendChild(l)
            }
            s.$slider.empty().append(r),
            s.$slider.children().children().children().css({
                width: 100 / s.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    t.prototype.checkResponsive = function(t, i) {
        var r, o, n, a = this, s = !1, l = a.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === a.respondTo ? n = c : "slider" === a.respondTo ? n = l : "min" === a.respondTo && (n = Math.min(c, l)),
        a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
            o = null ;
            for (r in a.breakpoints)
                a.breakpoints.hasOwnProperty(r) && (a.originalSettings.mobileFirst === !1 ? n < a.breakpoints[r] && (o = a.breakpoints[r]) : n > a.breakpoints[r] && (o = a.breakpoints[r]));
            null !== o ? null !== a.activeBreakpoint ? (o !== a.activeBreakpoint || i) && (a.activeBreakpoint = o,
            "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[o]),
            t === !0 && (a.currentSlide = a.options.initialSlide),
            a.refresh(t)),
            s = o) : (a.activeBreakpoint = o,
            "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[o]),
            t === !0 && (a.currentSlide = a.options.initialSlide),
            a.refresh(t)),
            s = o) : null !== a.activeBreakpoint && (a.activeBreakpoint = null ,
            a.options = a.originalSettings,
            t === !0 && (a.currentSlide = a.options.initialSlide),
            a.refresh(t),
            s = o),
            t || s === !1 || a.$slider.trigger("breakpoint", [a, s])
        }
    }
    ,
    t.prototype.changeSlide = function(t, i) {
        var r, o, n, a = this, s = e(t.currentTarget);
        switch (s.is("a") && t.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        n = a.slideCount % a.options.slidesToScroll !== 0,
        r = n ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll,
        t.data.message) {
        case "previous":
            o = 0 === r ? a.options.slidesToScroll : a.options.slidesToShow - r,
            a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - o, !1, i);
            break;
        case "next":
            o = 0 === r ? a.options.slidesToScroll : r,
            a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + o, !1, i);
            break;
        case "index":
            var l = 0 === t.data.index ? 0 : t.data.index || s.index() * a.options.slidesToScroll;
            a.slideHandler(a.checkNavigable(l), !1, i),
            s.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    t.prototype.checkNavigable = function(e) {
        var t, i, r = this;
        if (t = r.getNavigableIndexes(),
        i = 0,
        e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = i;
                    break
                }
                i = t[o]
            }
        return e
    }
    ,
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        t.$slider.off("focus.slick blur.slick"),
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(),
        e.removeAttr("style"),
        t.$slider.empty().append(e))
    }
    ,
    t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        e(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        t || i.$slider.trigger("destroy", [i]);
    }
    ,
    t.prototype.disableTransition = function(e) {
        var t = this
          , i = {};
        i[t.transitionType] = "",
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    t.prototype.fadeSlide = function(e, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
        i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        t && setTimeout(function() {
            i.disableTransition(e),
            t.call()
        }, i.options.speed))
    }
    ,
    t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var r = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = r.is(":focus"),
                t.autoPlay())
            }, 0)
        })
    }
    ,
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }
    ,
    t.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , i = 0
          , r = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount; )
                ++r,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0)
            r = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++r,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            r = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return r - 1
    }
    ,
    t.prototype.getLeft = function(e) {
        var t, i, r, o = this, n = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(!0),
        o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        n = i * o.options.slidesToShow * -1),
        o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1,
        n = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        n = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        n = (e + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        n = 0),
        o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + n,
        o.options.variableWidth === !0 && (r = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow),
        t = o.options.rtl === !0 ? r[0] ? -1 * (o.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0 : r[0] ? -1 * r[0].offsetLeft : 0,
        o.options.centerMode === !0 && (r = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1),
        t = o.options.rtl === !0 ? r[0] ? -1 * (o.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0 : r[0] ? -1 * r[0].offsetLeft : 0,
        t += (o.$list.width() - r.outerWidth()) / 2)),
        t
    }
    ,
    t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }
    ,
    t.prototype.getNavigableIndexes = function() {
        var e, t = this, i = 0, r = 0, o = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
        r = -1 * t.options.slidesToScroll,
        e = 2 * t.slideCount); e > i; )
            o.push(i),
            i = r + t.options.slidesToScroll,
            r += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }
    ,
    t.prototype.getSlick = function() {
        return this
    }
    ,
    t.prototype.getSlideCount = function() {
        var t, i, r, o = this;
        return r = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, n) {
            return n.offsetLeft - r + e(n).outerWidth() / 2 > -1 * o.swipeLeft ? (i = n,
            !1) : void 0
        }),
        t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        t && i.$slider.trigger("init", [i]),
        i.options.accessibility === !0 && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        }),
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        t.activateADA()
    }
    ,
    t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }
    ,
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }
    ,
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }
    ,
    t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this)
                  , i = e(this).attr("data-lazy")
                  , r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        a.$slider.trigger("lazyLoaded", [a, t, i])
                    })
                }
                ,
                r.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    a.$slider.trigger("lazyLoadError", [a, t, i])
                }
                ,
                r.src = i
            })
        }
        var i, r, o, n, a = this;
        a.options.centerMode === !0 ? a.options.infinite === !0 ? (o = a.currentSlide + (a.options.slidesToShow / 2 + 1),
        n = o + a.options.slidesToShow + 2) : (o = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)),
        n = 2 + (a.options.slidesToShow / 2 + 1) + a.currentSlide) : (o = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide,
        n = Math.ceil(o + a.options.slidesToShow),
        a.options.fade === !0 && (o > 0 && o--,
        n <= a.slideCount && n++)),
        i = a.$slider.find(".slick-slide").slice(o, n),
        t(i),
        a.slideCount <= a.options.slidesToShow ? (r = a.$slider.find(".slick-slide"),
        t(r)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (r = a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow),
        t(r)) : 0 === a.currentSlide && (r = a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow),
        t(r))
    }
    ,
    t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(),
        e.setPosition()
    }
    ,
    t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(),
        e.paused = !0
    }
    ,
    t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.setPosition(),
        t.swipeLeft = null ,
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 && t.initADA())
    }
    ,
    t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, r, o, n = this, a = e("img[data-lazy]", n.$slider);
        a.length ? (i = a.first(),
        r = i.attr("data-lazy"),
        o = document.createElement("img"),
        o.onload = function() {
            i.attr("src", r).removeAttr("data-lazy").removeClass("slick-loading"),
            n.options.adaptiveHeight === !0 && n.setPosition(),
            n.$slider.trigger("lazyLoaded", [n, i, r]),
            n.progressiveLazyLoad()
        }
        ,
        o.onerror = function() {
            3 > t ? setTimeout(function() {
                n.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            n.$slider.trigger("lazyLoadError", [n, i, r]),
            n.progressiveLazyLoad())
        }
        ,
        o.src = r) : n.$slider.trigger("allImagesLoaded", [n])
    }
    ,
    t.prototype.refresh = function(t) {
        var i, r, o = this;
        r = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > r && (o.currentSlide = r),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        i = o.currentSlide,
        o.destroy(!0),
        e.extend(o, o.initials, {
            currentSlide: i
        }),
        o.init(),
        t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    t.prototype.registerBreakpoints = function() {
        var t, i, r, o = this, n = o.options.responsive || null ;
        if ("array" === e.type(n) && n.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in n)
                if (r = o.breakpoints.length - 1,
                i = n[t].breakpoint,
                n.hasOwnProperty(t)) {
                    for (; r >= 0; )
                        o.breakpoints[r] && o.breakpoints[r] === i && o.breakpoints.splice(r, 1),
                        r--;
                    o.breakpoints.push(i),
                    o.breakpointSettings[i] = n[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }
    ,
    t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }, 50))
    }
    ,
    t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var r = this;
        return "boolean" == typeof e ? (t = e,
        e = t === !0 ? 0 : r.slideCount - 1) : e = t === !0 ? --e : e,
        !(r.slideCount < 1 || 0 > e || e > r.slideCount - 1) && (r.unload(),
        i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(),
        r.$slides = r.$slideTrack.children(this.options.slide),
        r.$slideTrack.children(this.options.slide).detach(),
        r.$slideTrack.append(r.$slides),
        r.$slidesCache = r.$slides,
        void r.reinit())
    }
    ,
    t.prototype.setCSS = function(e) {
        var t, i, r = this, o = {};
        r.options.rtl === !0 && (e = -e),
        t = "left" == r.positionProp ? Math.ceil(e) + "px" : "0px",
        i = "top" == r.positionProp ? Math.ceil(e) + "px" : "0px",
        o[r.positionProp] = e,
        r.transformsEnabled === !1 ? r.$slideTrack.css(o) : (o = {},
        r.cssTransitions === !1 ? (o[r.animType] = "translate(" + t + ", " + i + ")",
        r.$slideTrack.css(o)) : (o[r.animType] = "translate3d(" + t + ", " + i + ", 0px)",
        r.$slideTrack.css(o)))
    }
    ,
    t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each(function(r, o) {
            t = i.slideWidth * r * -1,
            i.options.rtl === !0 ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }
    ,
    t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, r, o, n, a = this, s = !1;
        if ("object" === e.type(arguments[0]) ? (r = arguments[0],
        s = arguments[1],
        n = "multiple") : "string" === e.type(arguments[0]) && (r = arguments[0],
        o = arguments[1],
        s = arguments[2],
        "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")),
        "single" === n)
            a.options[r] = o;
        else if ("multiple" === n)
            e.each(r, function(e, t) {
                a.options[e] = t
            });
        else if ("responsive" === n)
            for (i in o)
                if ("array" !== e.type(a.options.responsive))
                    a.options.responsive = [o[i]];
                else {
                    for (t = a.options.responsive.length - 1; t >= 0; )
                        a.options.responsive[t].breakpoint === o[i].breakpoint && a.options.responsive.splice(t, 1),
                        t--;
                    a.options.responsive.push(o[i])
                }
        s && (a.unload(),
        a.reinit())
    }
    ,
    t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    t.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }
    ,
    t.prototype.setSlideClasses = function(e) {
        var t, i, r, o, n = this;
        i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(e).addClass("slick-current"),
        n.options.centerMode === !0 ? (t = Math.floor(n.options.slidesToShow / 2),
        n.options.infinite === !0 && (e >= t && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = n.options.slidesToShow + e,
        i.slice(r - t + 1, r + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === e ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")),
        n.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow,
        r = n.options.infinite === !0 ? n.options.slidesToShow + e : e,
        n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? i.slice(r - (n.options.slidesToShow - o), r + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }
    ,
    t.prototype.setupInfinite = function() {
        var t, i, r, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1),
        o.options.infinite === !0 && o.options.fade === !1 && (i = null ,
        o.slideCount > o.options.slidesToShow)) {
            for (r = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            t = o.slideCount; t > o.slideCount - r; t -= 1)
                i = t - 1,
                e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; r > t; t += 1)
                i = t,
                e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }
    ,
    t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(),
        t.interrupted = e
    }
    ,
    t.prototype.selectHandler = function(t) {
        var i = this
          , r = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
          , o = parseInt(r.attr("data-slick-index"));
        return o || (o = 0),
        i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o),
        void i.asNavFor(o)) : void i.slideHandler(o)
    }
    ,
    t.prototype.slideHandler = function(e, t, i) {
        var r, o, n, a, s, l = null , c = this;
        return t = t || !1,
        c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (t === !1 && c.asNavFor(e),
        r = e,
        l = c.getLeft(r),
        a = c.getLeft(c.currentSlide),
        c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft,
        c.options.infinite === !1 && c.options.centerMode === !1 && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void (c.options.fade === !1 && (r = c.currentSlide,
        i !== !0 ? c.animateSlide(a, function() {
            c.postSlide(r)
        }) : c.postSlide(r))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void (c.options.fade === !1 && (r = c.currentSlide,
        i !== !0 ? c.animateSlide(a, function() {
            c.postSlide(r)
        }) : c.postSlide(r))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
        o = 0 > r ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + r : r >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : r - c.slideCount : r,
        c.animating = !0,
        c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
        n = c.currentSlide,
        c.currentSlide = o,
        c.setSlideClasses(c.currentSlide),
        c.options.asNavFor && (s = c.getNavTarget(),
        s = s.slick("getSlick"),
        s.slideCount <= s.options.slidesToShow && s.setSlideClasses(c.currentSlide)),
        c.updateDots(),
        c.updateArrows(),
        c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(n),
        c.fadeSlide(o, function() {
            c.postSlide(o)
        })) : c.postSlide(o),
        void c.animateHeight()) : void (i !== !0 ? c.animateSlide(l, function() {
            c.postSlide(o)
        }) : c.postSlide(o))))
    }
    ,
    t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    t.prototype.swipeDirection = function() {
        var e, t, i, r, o = this;
        return e = o.touchObject.startX - o.touchObject.curX,
        t = o.touchObject.startY - o.touchObject.curY,
        i = Math.atan2(t, e),
        r = Math.round(180 * i / Math.PI),
        0 > r && (r = 360 - Math.abs(r)),
        45 >= r && r >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= r && r >= 315 ? o.options.rtl === !1 ? "left" : "right" : r >= 135 && 225 >= r ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? r >= 35 && 135 >= r ? "down" : "up" : "vertical"
    }
    ,
    t.prototype.swipeEnd = function(e) {
        var t, i, r = this;
        if (r.dragging = !1,
        r.interrupted = !1,
        r.shouldClick = !(r.touchObject.swipeLength > 10),
        void 0 === r.touchObject.curX)
            return !1;
        if (r.touchObject.edgeHit === !0 && r.$slider.trigger("edge", [r, r.swipeDirection()]),
        r.touchObject.swipeLength >= r.touchObject.minSwipe) {
            switch (i = r.swipeDirection()) {
            case "left":
            case "down":
                t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide + r.getSlideCount()) : r.currentSlide + r.getSlideCount(),
                r.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = r.options.swipeToSlide ? r.checkNavigable(r.currentSlide - r.getSlideCount()) : r.currentSlide - r.getSlideCount(),
                r.currentDirection = 1
            }
            "vertical" != i && (r.slideHandler(t),
            r.touchObject = {},
            r.$slider.trigger("swipe", [r, i]))
        } else
            r.touchObject.startX !== r.touchObject.curX && (r.slideHandler(r.currentSlide),
            r.touchObject = {})
    }
    ,
    t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend"in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    t.prototype.swipeMove = function(e) {
        var t, i, r, o, n, a = this;
        return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null ,
        !(!a.dragging || n && 1 !== n.length) && (t = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX,
        a.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
        i = a.swipeDirection(),
        "vertical" !== i ? (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(),
        o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        r = a.touchObject.swipeLength,
        a.touchObject.edgeHit = !1,
        a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (r = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        a.options.vertical === !1 ? a.swipeLeft = t + r * o : a.swipeLeft = t + r * (a.$list.height() / a.listWidth) * o,
        a.options.verticalSwiping === !0 && (a.swipeLeft = t + r * o),
        a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null ,
        !1) : void a.setCSS(a.swipeLeft))) : void 0)
    }
    ,
    t.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
        !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        void (i.dragging = !0))
    }
    ,
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }
    ,
    t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2),
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }
    ,
    e.fn.slick = function() {
        var e, i, r = this, o = arguments[0], n = Array.prototype.slice.call(arguments, 1), a = r.length;
        for (e = 0; a > e; e++)
            if ("object" == typeof o || "undefined" == typeof o ? r[e].slick = new t(r[e],o) : i = r[e].slick[o].apply(r[e].slick, n),
            "undefined" != typeof i)
                return i;
        return r
    }
}),
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t = Array.prototype.slice
      , i = Array.prototype.splice
      , r = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        widthFromWrapper: !0,
        responsiveWidth: !1,
        zIndex: "auto"
    }
      , o = e(window)
      , n = e(document)
      , a = []
      , s = o.height()
      , l = function() {
        for (var t = o.scrollTop(), i = n.height(), r = i - s, l = t > r ? r - t : 0, c = 0, d = a.length; c < d; c++) {
            var u = a[c]
              , p = u.stickyWrapper.offset().top
              , f = p - u.topSpacing - l;
            if (u.stickyWrapper.css("height", u.stickyElement.outerHeight()),
            t <= f)
                null !== u.currentTop && (u.stickyElement.css({
                    width: "",
                    position: "",
                    top: "",
                    "z-index": ""
                }),
                u.stickyElement.parent().removeClass(u.className),
                u.stickyElement.trigger("sticky-end", [u]),
                u.currentTop = null );
            else {
                var h = i - u.stickyElement.outerHeight() - u.topSpacing - u.bottomSpacing - t - l;
                if (h < 0 ? h += u.topSpacing : h = u.topSpacing,
                u.currentTop !== h) {
                    var y;
                    u.getWidthFrom ? y = e(u.getWidthFrom).width() || null : u.widthFromWrapper && (y = u.stickyWrapper.width()),
                    null == y && (y = u.stickyElement.width()),
                    u.stickyElement.css("width", y).css("position", "fixed").css("top", h).css("z-index", u.zIndex),
                    u.stickyElement.parent().addClass(u.className),
                    null === u.currentTop ? u.stickyElement.trigger("sticky-start", [u]) : u.stickyElement.trigger("sticky-update", [u]),
                    u.currentTop === u.topSpacing && u.currentTop > h || null === u.currentTop && h < u.topSpacing ? u.stickyElement.trigger("sticky-bottom-reached", [u]) : null !== u.currentTop && h === u.topSpacing && u.currentTop < h && u.stickyElement.trigger("sticky-bottom-unreached", [u]),
                    u.currentTop = h
                }
                var g = u.stickyWrapper.parent()
                  , m = u.stickyElement.offset().top + u.stickyElement.outerHeight() >= g.offset().top + g.outerHeight() && u.stickyElement.offset().top <= u.topSpacing;
                m ? u.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : u.stickyElement.css("position", "fixed").css("top", h).css("bottom", "").css("z-index", u.zIndex)
            }
        }
    }
      , c = function() {
        s = o.height();
        for (var t = 0, i = a.length; t < i; t++) {
            var r = a[t]
              , n = null ;
            r.getWidthFrom ? r.responsiveWidth && (n = e(r.getWidthFrom).width()) : r.widthFromWrapper && (n = r.stickyWrapper.width()),
            null != n && r.stickyElement.css("width", n)
        }
    }
      , d = {
        init: function(t) {
            var i = e.extend({}, r, t);
            return this.each(function() {
                var t = e(this)
                  , o = t.attr("id")
                  , n = o ? o + "-" + r.wrapperClassName : r.wrapperClassName
                  , s = e("<div></div>").attr("id", n).addClass(i.wrapperClassName);
                t.wrapAll(function() {
                    if (0 == e(this).parent("#" + n).length)
                        return s
                });
                var l = t.parent();
                i.center && l.css({
                    width: t.outerWidth(),
                    marginLeft: "auto",
                    marginRight: "auto"
                }),
                "right" === t.css("float") && t.css({
                    float: "none"
                }).parent().css({
                    float: "right"
                }),
                i.stickyElement = t,
                i.stickyWrapper = l,
                i.currentTop = null ,
                a.push(i),
                d.setWrapperHeight(this),
                d.setupChangeListeners(this)
            })
        },
        setWrapperHeight: function(t) {
            var i = e(t)
              , r = i.parent();
            r && r.css("height", i.outerHeight())
        },
        setupChangeListeners: function(e) {
            if (window.MutationObserver) {
                var t = new window.MutationObserver(function(t) {
                    (t[0].addedNodes.length || t[0].removedNodes.length) && d.setWrapperHeight(e)
                }
                );
                t.observe(e, {
                    subtree: !0,
                    childList: !0
                })
            } else
                window.addEventListener ? (e.addEventListener("DOMNodeInserted", function() {
                    d.setWrapperHeight(e)
                }, !1),
                e.addEventListener("DOMNodeRemoved", function() {
                    d.setWrapperHeight(e)
                }, !1)) : window.attachEvent && (e.attachEvent("onDOMNodeInserted", function() {
                    d.setWrapperHeight(e)
                }),
                e.attachEvent("onDOMNodeRemoved", function() {
                    d.setWrapperHeight(e)
                }))
        },
        update: l,
        unstick: function(t) {
            return this.each(function() {
                for (var t = this, r = e(t), o = -1, n = a.length; n-- > 0; )
                    a[n].stickyElement.get(0) === t && (i.call(a, n, 1),
                    o = n);
                o !== -1 && (r.unwrap(),
                r.css({
                    width: "",
                    position: "",
                    top: "",
                    float: "",
                    "z-index": ""
                }))
            })
        }
    };
    window.addEventListener ? (window.addEventListener("scroll", l, !1),
    window.addEventListener("resize", c, !1)) : window.attachEvent && (window.attachEvent("onscroll", l),
    window.attachEvent("onresize", c)),
    e.fn.sticky = function(i) {
        return d[i] ? d[i].apply(this, t.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.sticky") : d.init.apply(this, arguments)
    }
    ,
    e.fn.unstick = function(i) {
        return d[i] ? d[i].apply(this, t.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.sticky") : d.unstick.apply(this, arguments);
    }
    ,
    e(function() {
        setTimeout(l, 0)
    })
}),
!function() {
    "use strict";
    function e(r) {
        if (!r)
            throw new Error("No options passed to Waypoint constructor");
        if (!r.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!r.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t,
        this.options = e.Adapter.extend({}, e.defaults, r),
        this.element = this.options.element,
        this.adapter = new e.Adapter(this.element),
        this.callback = r.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null ,
        this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = e.Context.findOrCreateByElement(this.options.context),
        e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        i[this.key] = this,
        t += 1
    }
    var t = 0
      , i = {};
    e.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }
    ,
    e.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }
    ,
    e.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete i[this.key]
    }
    ,
    e.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    e.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    e.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    e.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    e.invokeAll = function(e) {
        var t = [];
        for (var r in i)
            t.push(i[r]);
        for (var o = 0, n = t.length; n > o; o++)
            t[o][e]()
    }
    ,
    e.destroyAll = function() {
        e.invokeAll("destroy")
    }
    ,
    e.disableAll = function() {
        e.invokeAll("disable")
    }
    ,
    e.enableAll = function() {
        e.invokeAll("enable")
    }
    ,
    e.refreshAll = function() {
        e.Context.refreshAll()
    }
    ,
    e.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    e.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    e.adapters = [],
    e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    e.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = e
}(),
function() {
    "use strict";
    function e(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    function t(e) {
        this.element = e,
        this.Adapter = o.Adapter,
        this.adapter = new this.Adapter(e),
        this.key = "waypoint-context-" + i,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        e.waypointContextKey = this.key,
        r[e.waypointContextKey] = this,
        i += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0
      , r = {}
      , o = window.Waypoint
      , n = window.onload;
    t.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e,
        this.refresh()
    }
    ,
    t.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , t = this.Adapter.isEmptyObject(this.waypoints.vertical);
        e && t && (this.adapter.off(".waypoints"),
        delete r[this.key])
    }
    ,
    t.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(),
            t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0,
            o.requestAnimationFrame(e))
        })
    }
    ,
    t.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(),
            t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            (!t.didScroll || o.isTouch) && (t.didScroll = !0,
            o.requestAnimationFrame(e))
        })
    }
    ,
    t.prototype.handleResize = function() {
        o.Context.refreshAll()
    }
    ,
    t.prototype.handleScroll = function() {
        var e = {}
          , t = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in t) {
            var r = t[i]
              , o = r.newScroll > r.oldScroll
              , n = o ? r.forward : r.backward;
            for (var a in this.waypoints[i]) {
                var s = this.waypoints[i][a]
                  , l = r.oldScroll < s.triggerPoint
                  , c = r.newScroll >= s.triggerPoint
                  , d = l && c
                  , u = !l && !c;
                (d || u) && (s.queueTrigger(n),
                e[s.group.id] = s.group)
            }
        }
        for (var p in e)
            e[p].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }
    ,
    t.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    t.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key],
        this.checkEmpty()
    }
    ,
    t.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    t.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints)
            for (var i in this.waypoints[t])
                e.push(this.waypoints[t][i]);
        for (var r = 0, o = e.length; o > r; r++)
            e[r].destroy()
    }
    ,
    t.prototype.refresh = function() {
        var e, t = this.element == this.element.window, i = t ? void 0 : this.adapter.offset(), r = {};
        this.handleScroll(),
        e = {
            horizontal: {
                contextOffset: t ? 0 : i.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : i.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var n in e) {
            var a = e[n];
            for (var s in this.waypoints[n]) {
                var l, c, d, u, p, f = this.waypoints[n][s], h = f.options.offset, y = f.triggerPoint, g = 0, m = null == y;
                f.element !== f.element.window && (g = f.adapter.offset()[a.offsetProp]),
                "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h),
                f.options.offset.indexOf("%") > -1 && (h = Math.ceil(a.contextDimension * h / 100))),
                l = a.contextScroll - a.contextOffset,
                f.triggerPoint = g + l - h,
                c = y < a.oldScroll,
                d = f.triggerPoint >= a.oldScroll,
                u = c && d,
                p = !c && !d,
                !m && u ? (f.queueTrigger(a.backward),
                r[f.group.id] = f.group) : !m && p ? (f.queueTrigger(a.forward),
                r[f.group.id] = f.group) : m && a.oldScroll >= f.triggerPoint && (f.queueTrigger(a.forward),
                r[f.group.id] = f.group)
            }
        }
        return o.requestAnimationFrame(function() {
            for (var e in r)
                r[e].flushTriggers()
        }),
        this
    }
    ,
    t.findOrCreateByElement = function(e) {
        return t.findByElement(e) || new t(e)
    }
    ,
    t.refreshAll = function() {
        for (var e in r)
            r[e].refresh()
    }
    ,
    t.findByElement = function(e) {
        return r[e.waypointContextKey]
    }
    ,
    window.onload = function() {
        n && n(),
        t.refreshAll()
    }
    ,
    o.requestAnimationFrame = function(t) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
        i.call(window, t)
    }
    ,
    o.Context = t
}(),
function() {
    "use strict";
    function e(e, t) {
        return e.triggerPoint - t.triggerPoint
    }
    function t(e, t) {
        return t.triggerPoint - e.triggerPoint
    }
    function i(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        r[this.axis][this.name] = this
    }
    var r = {
        vertical: {},
        horizontal: {}
    }
      , o = window.Waypoint;
    i.prototype.add = function(e) {
        this.waypoints.push(e)
    }
    ,
    i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var r = this.triggerQueues[i]
              , o = "up" === i || "left" === i;
            r.sort(o ? t : e);
            for (var n = 0, a = r.length; a > n; n += 1) {
                var s = r[n];
                (s.options.continuous || n === r.length - 1) && s.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    i.prototype.next = function(t) {
        this.waypoints.sort(e);
        var i = o.Adapter.inArray(t, this.waypoints)
          , r = i === this.waypoints.length - 1;
        return r ? null : this.waypoints[i + 1]
    }
    ,
    i.prototype.previous = function(t) {
        this.waypoints.sort(e);
        var i = o.Adapter.inArray(t, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }
    ,
    i.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }
    ,
    i.prototype.remove = function(e) {
        var t = o.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }
    ,
    i.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    i.findOrCreate = function(e) {
        return r[e.axis][e.name] || new i(e)
    }
    ,
    o.Group = i
}(),
function() {
    "use strict";
    function e(e) {
        this.$element = t(e)
    }
    var t = window.jQuery
      , i = window.Waypoint;
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
        e.prototype[i] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, e)
        }
    }),
    t.each(["extend", "inArray", "isEmptyObject"], function(i, r) {
        e[r] = t[r]
    }),
    i.adapters.push({
        name: "jquery",
        Adapter: e
    }),
    i.Adapter = e
}(),
function() {
    "use strict";
    function e(e) {
        return function() {
            var i = []
              , r = arguments[0];
            return e.isFunction(arguments[0]) && (r = e.extend({}, arguments[1]),
            r.handler = arguments[0]),
            this.each(function() {
                var o = e.extend({}, r, {
                    element: this
                });
                "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]),
                i.push(new t(o))
            }),
            i
        }
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function(e) {
    $.fn.animated = function(e) {
        $(this).each(function() {
            var t = $(this);
            t.css("opacity", "0").addClass("animated").waypoint(function(i) {
                "down" === i && t.addClass(e).css("opacity", "1")
            }, {
                offset: "80%"
            })
        })
    }
}(jQuery),
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, i, r, o, n, a, s = "Close", l = "BeforeClose", c = "AfterClose", d = "BeforeAppend", u = "MarkupParse", p = "Open", f = "Change", h = "mfp", y = "." + h, g = "mfp-ready", m = "mfp-removing", v = "mfp-prevent-close", T = function() {}, w = !!window.jQuery, b = e(window), P = function(e, i) {
        t.ev.on(h + e + y, i)
    }, x = function(t, i, r, o) {
        var n = document.createElement("div");
        return n.className = "mfp-" + t,
        r && (n.innerHTML = r),
        o ? i && i.appendChild(n) : (n = e(n),
        i && n.appendTo(i)),
        n
    }, S = function(i, r) {
        t.ev.triggerHandler(h + i, r),
        t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1),
        t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(r) ? r : [r]))
    }, _ = function(i) {
        return i === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        a = i),
        t.currTemplate.closeBtn
    }, k = function() {
        e.magnificPopup.instance || (t = new T,
        t.init(),
        e.magnificPopup.instance = t)
    }, Y = function() {
        var e = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition"in e)
                return !0;
        return !1
    };
    T.prototype = {
        constructor: T,
        init: function() {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener,
            t.isAndroid = /android/gi.test(i),
            t.isIOS = /iphone|ipad|ipod/gi.test(i),
            t.supportsTransition = Y(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            r = e(document),
            t.popupsCache = {}
        },
        open: function(i) {
            var o;
            if (i.isObj === !1) {
                t.items = i.items.toArray(),
                t.index = 0;
                var a, s = i.items;
                for (o = 0; o < s.length; o++)
                    if (a = s[o],
                    a.parsed && (a = a.el[0]),
                    a === i.el[0]) {
                        t.index = o;
                        break
                    }
            } else
                t.items = e.isArray(i.items) ? i.items : [i.items],
                t.index = i.index || 0;
            if (t.isOpen)
                return void t.updateItemHTML();
            t.types = [],
            n = "",
            i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = r,
            i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
            t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {},
            t.st = e.extend(!0, {}, e.magnificPopup.defaults, i),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1,
            t.st.closeOnBgClick = !1,
            t.st.showCloseBtn = !1,
            t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = x("bg").on("click" + y, function() {
                t.close()
            }),
            t.wrap = x("wrap").attr("tabindex", -1).on("click" + y, function(e) {
                t._checkIfClose(e.target) && t.close()
            }),
            t.container = x("container", t.wrap)),
            t.contentContainer = x("content"),
            t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var c = l[o];
                c = c.charAt(0).toUpperCase() + c.slice(1),
                t["init" + c].call(t)
            }
            S("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (P(u, function(e, t, i, r) {
                i.close_replaceWith = _(r.type)
            }),
            n += " mfp-close-btn-in") : t.wrap.append(_())),
            t.st.alignTop && (n += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && r.on("keyup" + y, function(e) {
                27 === e.keyCode && t.close()
            }),
            b.on("resize" + y, function() {
                t.updateSize()
            }),
            t.st.closeOnContentClick || (n += " mfp-auto-cursor"),
            n && t.wrap.addClass(n);
            var d = t.wH = b.height()
              , f = {};
            if (t.fixedContentPos && t._hasScrollBar(d)) {
                var h = t._getScrollbarSize();
                h && (f.marginRight = h)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var m = t.st.mainClass;
            return t.isIE7 && (m += " mfp-ie7"),
            m && t._addClassToMFP(m),
            t.updateItemHTML(),
            S("BuildControls"),
            e("html").css(f),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(g),
                t._setFocus()) : t.bgOverlay.addClass(g),
                r.on("focusin" + y, t._onFocusIn)
            }, 16),
            t.isOpen = !0,
            t.updateSize(d),
            S(p),
            i
        },
        close: function() {
            t.isOpen && (S(l),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(m),
            setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            S(s);
            var i = m + " " + g + " ";
            if (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (i += t.st.mainClass + " "),
            t._removeClassFromMFP(i),
            t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "",
                e("html").css(o)
            }
            r.off("keyup" + y + " focusin" + y),
            t.ev.off(y),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null ,
            t.content = null ,
            t.currTemplate = null ,
            t.prevHeight = 0,
            S(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth
                  , r = window.innerHeight * i;
                t.wrap.css("height", r),
                t.wH = r
            } else
                t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            S("Resize")
        },
        updateItemHTML: function() {
            var i = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            i.parsed || (i = t.parseEl(t.index));
            var r = i.type;
            if (S("BeforeChange", [t.currItem ? t.currItem.type : "", r]),
            t.currItem = i,
            !t.currTemplate[r]) {
                var n = !!t.st[r] && t.st[r].markup;
                S("FirstMarkupParse", n),
                n ? t.currTemplate[r] = e(n) : t.currTemplate[r] = !0
            }
            o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](i, t.currTemplate[r]);
            t.appendContent(a, r),
            i.preloaded = !0,
            S(f, i),
            o = i.type,
            t.container.prepend(t.contentContainer),
            S("AfterChange")
        },
        appendContent: function(e, i) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(_()) : t.content = e : t.content = "",
            S(d),
            t.container.addClass("mfp-" + i + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(i) {
            var r, o = t.items[i];
            if (o.tagName ? o = {
                el: e(o)
            } : (r = o.type,
            o = {
                data: o,
                src: o.src
            }),
            o.el) {
                for (var n = t.types, a = 0; a < n.length; a++)
                    if (o.el.hasClass("mfp-" + n[a])) {
                        r = n[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"),
                o.src || (o.src = o.el.attr("href"))
            }
            return o.type = r || t.st.type || "inline",
            o.index = i,
            o.parsed = !0,
            t.items[i] = o,
            S("ElementParse", o),
            t.items[i]
        },
        addGroup: function(e, i) {
            var r = function(r) {
                r.mfpEl = this,
                t._openClick(r, e, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = e,
            i.items ? (i.isObj = !0,
            e.off(o).on(o, r)) : (i.isObj = !1,
            i.delegate ? e.off(o).on(o, i.delegate, r) : (i.items = e,
            e.off(o).on(o, r)))
        },
        _openClick: function(i, r, o) {
            var n = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (n || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t))
                            return !0
                    } else if (b.width() < a)
                        return !0;
                i.type && (i.preventDefault(),
                t.isOpen && i.stopPropagation()),
                o.el = e(i.mfpEl),
                o.delegate && (o.items = r.find(o.delegate)),
                t.open(o)
            }
        },
        updateStatus: function(e, r) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i),
                r || "loading" !== e || (r = t.st.tLoading);
                var o = {
                    status: e,
                    text: r
                };
                S("UpdateStatus", o),
                e = o.status,
                r = o.text,
                t.preloader.html(r),
                t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }),
                t.container.addClass("mfp-s-" + e),
                i = e
            }
        },
        _checkIfClose: function(i) {
            if (!e(i).hasClass(v)) {
                var r = t.st.closeOnContentClick
                  , o = t.st.closeOnBgClick;
                if (r && o)
                    return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0])
                    return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (r)
                        return !0
                } else if (o && e.contains(document, i))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || b.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(),
            !1)
        },
        _parseMarkup: function(t, i, r) {
            var o;
            r.data && (i = e.extend(r.data, i)),
            S(u, [t, i, r]),
            e.each(i, function(i, r) {
                if (void 0 === r || r === !1)
                    return !0;
                if (o = i.split("_"),
                o.length > 1) {
                    var n = t.find(y + "-" + o[0]);
                    if (n.length > 0) {
                        var a = o[1];
                        "replaceWith" === a ? n[0] !== r[0] && n.replaceWith(r) : "img" === a ? n.is("img") ? n.attr("src", r) : n.replaceWith(e("<img>").attr("src", r).attr("class", n.attr("class"))) : n.attr(o[1], r)
                    }
                } else
                    t.find(y + "-" + i).html(r)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null ,
        proto: T.prototype,
        modules: [],
        open: function(t, i) {
            return k(),
            t = t ? e.extend(!0, {}, t) : {},
            t.isObj = !0,
            t.index = i || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options),
            e.extend(this.proto, i.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null ,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null ,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    e.fn.magnificPopup = function(i) {
        k();
        var r = e(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, n = w ? r.data("magnificPopup") : r[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
                n.items ? o = n.items[a] : (o = r,
                n.delegate && (o = o.find(n.delegate)),
                o = o.eq(a)),
                t._openClick({
                    mfpEl: o
                }, r, n)
            } else
                t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            i = e.extend(!0, {}, i),
            w ? r.data("magnificPopup", i) : r[0].magnificPopup = i,
            t.addGroup(r, i);
        return r
    }
    ;
    var C, j, Q, A = "inline", $ = function() {
        Q && (j.after(Q.addClass(C)).detach(),
        Q = null )
    };
    e.magnificPopup.registerModule(A, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(A),
                P(s + "." + A, function() {
                    $()
                })
            },
            getInline: function(i, r) {
                if ($(),
                i.src) {
                    var o = t.st.inline
                      , n = e(i.src);
                    if (n.length) {
                        var a = n[0].parentNode;
                        a && a.tagName && (j || (C = o.hiddenClass,
                        j = x(C),
                        C = "mfp-" + C),
                        Q = n.after(j).detach().removeClass(C)),
                        t.updateStatus("ready")
                    } else
                        t.updateStatus("error", o.tNotFound),
                        n = e("<div>");
                    return i.inlineElement = n,
                    n
                }
                return t.updateStatus("ready"),
                t._parseMarkup(r, {}, i),
                r
            }
        }
    });
    var I, M = "ajax", O = function() {
        I && e(document.body).removeClass(I)
    }, E = function() {
        O(),
        t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(M, {
        options: {
            settings: null ,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(M),
                I = t.st.ajax.cursor,
                P(s + "." + M, E),
                P("BeforeChange." + M, E)
            },
            getAjax: function(i) {
                I && e(document.body).addClass(I),
                t.updateStatus("loading");
                var r = e.extend({
                    url: i.src,
                    success: function(r, o, n) {
                        var a = {
                            data: r,
                            xhr: n
                        };
                        S("ParseAjax", a),
                        t.appendContent(e(a.data), M),
                        i.finished = !0,
                        O(),
                        t._setFocus(),
                        setTimeout(function() {
                            t.wrap.addClass(g)
                        }, 16),
                        t.updateStatus("ready"),
                        S("AjaxContentAdded")
                    },
                    error: function() {
                        O(),
                        i.finished = i.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(r),
                ""
            }
        }
    });
    var D, F = function(i) {
        if (i.data && void 0 !== i.data.title)
            return i.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (e.isFunction(r))
                return r.call(t, i);
            if (i.el)
                return i.el.attr(r) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = t.st.image
                  , r = ".image";
                t.types.push("image"),
                P(p + r, function() {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                }),
                P(s + r, function() {
                    i.cursor && e(document.body).removeClass(i.cursor),
                    b.off("resize" + y)
                }),
                P("Resize" + r, t.resizeImage),
                t.isLowIE && P("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                D && clearInterval(D),
                e.isCheckingImgSize = !1,
                S("ImageHasSize", e),
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var i = 0
                  , r = e.img[0]
                  , o = function(n) {
                    D && clearInterval(D),
                    D = setInterval(function() {
                        return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(D),
                        i++,
                        void (3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                    }, n)
                };
                o(1)
            },
            getImage: function(i, r) {
                var o = 0
                  , n = function() {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"),
                    i === t.currItem && (t._onImageHasSize(i),
                    t.updateStatus("ready")),
                    i.hasSize = !0,
                    i.loaded = !0,
                    S("ImageLoadComplete")) : (o++,
                    200 > o ? setTimeout(n, 100) : a()))
                }
                  , a = function() {
                    i && (i.img.off(".mfploader"),
                    i === t.currItem && (t._onImageHasSize(i),
                    t.updateStatus("error", s.tError.replace("%url%", i.src))),
                    i.hasSize = !0,
                    i.loaded = !0,
                    i.loadError = !0)
                }
                  , s = t.st.image
                  , l = r.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")),
                    i.img = e(c).on("load.mfploader", n).on("error.mfploader", a),
                    c.src = i.src,
                    l.is("img") && (i.img = i.img.clone()),
                    c = i.img[0],
                    c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return t._parseMarkup(r, {
                    title: F(i),
                    img_replaceWith: i.img
                }, i),
                t.resizeImage(),
                i.hasSize ? (D && clearInterval(D),
                i.loadError ? (r.addClass("mfp-loading"),
                t.updateStatus("error", s.tError.replace("%url%", i.src))) : (r.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                r) : (t.updateStatus("loading"),
                i.loading = !0,
                i.hasSize || (i.imgHidden = !0,
                r.addClass("mfp-loading"),
                t.findImageSize(i)),
                r)
            }
        }
    });
    var z, B = function() {
        return void 0 === z && (z = void 0 !== document.createElement("p").style.MozTransform),
        z
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, i = t.st.zoom, r = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var o, n, a = i.duration, c = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , r = "all " + i.duration / 1e3 + "s " + i.easing
                          , o = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , n = "transition";
                        return o["-webkit-" + n] = o["-moz-" + n] = o["-o-" + n] = o[n] = r,
                        t.css(o),
                        t
                    }, d = function() {
                        t.content.css("visibility", "visible")
                    };
                    P("BuildControls" + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.content.css("visibility", "hidden"),
                            e = t._getItemToZoom(),
                            !e)
                                return void d();
                            n = c(e),
                            n.css(t._getOffset()),
                            t.wrap.append(n),
                            o = setTimeout(function() {
                                n.css(t._getOffset(!0)),
                                o = setTimeout(function() {
                                    d(),
                                    setTimeout(function() {
                                        n.remove(),
                                        e = n = null ,
                                        S("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }),
                    P(l + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.st.removalDelay = a,
                            !e) {
                                if (e = t._getItemToZoom(),
                                !e)
                                    return;
                                n = c(e)
                            }
                            n.css(t._getOffset(!0)),
                            t.wrap.append(n),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                n.css(t._getOffset())
                            }, 16)
                        }
                    }),
                    P(s + r, function() {
                        t._allowZoom() && (d(),
                        n && n.remove(),
                        e = null )
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(i) {
                var r;
                r = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = r.offset()
                  , n = parseInt(r.css("padding-top"), 10)
                  , a = parseInt(r.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - n;
                var s = {
                    width: r.width(),
                    height: (w ? r.innerHeight() : r[0].offsetHeight) - a - n
                };
                return B() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left,
                s.top = o.top),
                s
            }
        }
    });
    var L = "iframe"
      , H = "//about:blank"
      , R = function(e) {
        if (t.currTemplate[L]) {
            var i = t.currTemplate[L].find("iframe");
            i.length && (e || (i[0].src = H),
            t.isIE8 && i.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(L, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(L),
                P("BeforeChange", function(e, t, i) {
                    t !== i && (t === L ? R() : i === L && R(!0))
                }),
                P(s + "." + L, function() {
                    R()
                })
            },
            getIframe: function(i, r) {
                var o = i.src
                  , n = t.st.iframe;
                e.each(n.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)),
                    o = this.src.replace("%id%", o),
                    !1) : void 0
                });
                var a = {};
                return n.srcAction && (a[n.srcAction] = o),
                t._parseMarkup(r, a, i),
                t.updateStatus("ready"),
                r
            }
        }
    });
    var W = function(e) {
        var i = t.items.length;
        return e > i - 1 ? e - i : 0 > e ? i + e : e
    }
      , U = function(e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = t.st.gallery
                  , o = ".mfp-gallery";
                return t.direction = !0,
                !(!i || !i.enabled) && (n += " mfp-gallery",
                P(p + o, function() {
                    i.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(),
                        !1) : void 0
                    }),
                    r.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }),
                P("UpdateStatus" + o, function(e, i) {
                    i.text && (i.text = U(i.text, t.currItem.index, t.items.length))
                }),
                P(u + o, function(e, r, o, n) {
                    var a = t.items.length;
                    o.counter = a > 1 ? U(i.tCounter, n.index, a) : ""
                }),
                P("BuildControls" + o, function() {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var r = i.arrowMarkup
                          , o = t.arrowLeft = e(r.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(v)
                          , n = t.arrowRight = e(r.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(v);
                        o.click(function() {
                            t.prev()
                        }),
                        n.click(function() {
                            t.next()
                        }),
                        t.container.append(o.add(n))
                    }
                }),
                P(f + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null
                    }, 16)
                }),
                void P(s + o, function() {
                    r.off(o),
                    t.wrap.off("click" + o),
                    t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function() {
                t.direction = !0,
                t.index = W(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = W(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, i = t.st.gallery.preload, r = Math.min(i[0], t.items.length), o = Math.min(i[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : r); e++)
                    t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? r : o); e++)
                    t._preloadItem(t.index - e)
            },
            _preloadItem: function(i) {
                if (i = W(i),
                !t.items[i].preloaded) {
                    var r = t.items[i];
                    r.parsed || (r = t.parseEl(i)),
                    S("LazyLoad", r),
                    "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        r.hasSize = !0
                    }).on("error.mfploader", function() {
                        r.hasSize = !0,
                        r.loadError = !0,
                        S("LazyLoadError", r)
                    }).attr("src", r.src)),
                    r.preloaded = !0
                }
            }
        }
    });
    var q = "retina";
    e.magnificPopup.registerModule(q, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina
                      , i = e.ratio;
                    i = isNaN(i) ? i() : i,
                    i > 1 && (P("ImageHasSize." + q, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }),
                    P("ElementParse." + q, function(t, r) {
                        r.src = e.replaceSrc(r, i)
                    }))
                }
            }
        }
    }),
    k()
});
var ytp = ytp || {}
  , getYTPVideoID = function(e) {
    var t, i;
    return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length),
    i = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null ,
    t = i ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1],
    i = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null ) : (t = e.length > 15 ? null : e,
    i = t ? null : e),
    {
        videoID: t,
        playlistID: i
    }
};
!function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.0.8",
        build: "5878",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null ,
            playlistURL: null ,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            mobileFallbackImage: null ,
            gaTrack: !0,
            optimizeDisplay: !0,
            align: "center,center",
            onReady: function(e) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null ,
        loading: null ,
        locationProtocol: "https:",
        filters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this
                  , $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0,
                YTPlayer.opt = {},
                YTPlayer.state = {},
                YTPlayer.filters = jQuery.mbYTPlayer.filters,
                YTPlayer.filtersEnabled = !0,
                YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(),
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol),
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property),
                YTPlayer.hasChanged || (YTPlayer.defaultOpt = {},
                jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)),
                "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999),
                YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function() {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()),
                YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1),
                $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1,
                YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID
                  , playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                YTPlayer.videoID = videoID,
                YTPlayer.playlistID = playlistID,
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    modestbranding: 1,
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                    html5: 1
                }),
                jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1),
                YTPlayer.isSelf = "self" == YTPlayer.opt.containment,
                YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment),
                YTPlayer.isBackground = YTPlayer.opt.containment.is("body"),
                !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length,
                    YTPlayer.isPlayer = !1,
                    isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide();
                    var overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                    YTPlayer.isPlayer && overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay()
                    });
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    wrapper.css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    });
                    var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                    if (playerBox.css({
                        position: "absolute",
                        zIndex: 0,
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        overflow: "hidden"
                    }),
                    wrapper.append(playerBox),
                    YTPlayer.opt.containment.children().not("script, style").each(function() {
                        "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                    }),
                    YTPlayer.isBackground ? (jQuery("body").css({
                        boxSizing: "border-box"
                    }),
                    wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    }),
                    $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                        position: "relative"
                    }),
                    YTPlayer.opt.containment.prepend(wrapper),
                    YTPlayer.wrapper = wrapper,
                    playerBox.css({
                        opacity: 1
                    }),
                    jQuery.browser.mobile || (playerBox.after(overlay),
                    YTPlayer.overlay = overlay),
                    YTPlayer.isBackground || overlay.on("mouseenter", function() {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                    }).on("mouseleave", function() {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                    }),
                    ytp.YTAPIReady)
                        setTimeout(function() {
                            jQuery(document).trigger("YTAPIReady")
                        }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile)
                        return YTPlayer.opt.mobileFallbackImage && YTPlayer.opt.containment.css({
                            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }),
                        $YTPlayer.remove(),
                        void jQuery(document).trigger("YTPUnavailable");
                    jQuery(document).on("YTAPIReady", function() {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0),
                        YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay,
                        YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100,
                        jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),
                        jQuery(YTPlayer).on("YTPChanged", function() {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0,
                                jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .563 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    return void new YT.Player(playerID,{
                                        videoId: YTPlayer.videoID.toString(),
                                        width: "100%",
                                        height: h,
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function(e) {
                                                YTPlayer.player = e.target,
                                                playerBox.css({
                                                    opacity: 1
                                                }),
                                                YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID,{
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function(e) {
                                            YTPlayer.player = e.target,
                                            YTPlayer.isReady || (YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay),
                                            YTPlayer.playerEl = YTPlayer.player.getIframe(),
                                            jQuery(YTPlayer.playerEl).unselectable(),
                                            $YTPlayer.optimizeDisplay(),
                                            YTPlayer.videoID = videoID,
                                            jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function() {
                                                $YTPlayer.optimizeDisplay()
                                            }),
                                            jQuery.mbYTPlayer.checkForState(YTPlayer))
                                        },
                                        onStateChange: function(event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.preventTrigger)
                                                    return void (YTPlayer.preventTrigger = !1);
                                                YTPlayer.state = state;
                                                var eventType;
                                                switch (state) {
                                                case -1:
                                                    eventType = "YTPUnstarted";
                                                    break;
                                                case 0:
                                                    eventType = "YTPEnd";
                                                    break;
                                                case 1:
                                                    eventType = "YTPPlay",
                                                    YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),
                                                    "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]),
                                                    "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                    break;
                                                case 2:
                                                    eventType = "YTPPause",
                                                    YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 3:
                                                    YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),
                                                    eventType = "YTPBuffering",
                                                    YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 5:
                                                    eventType = "YTPCued"
                                                }
                                                var YTPEvent = jQuery.Event(eventType);
                                                YTPEvent.time = YTPlayer.currentTime,
                                                YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                            }
                                        },
                                        onPlaybackQualityChange: function(e) {
                                            var t = e.target.getPlaybackQuality()
                                              , i = jQuery.Event("YTPQualityChange");
                                            i.quality = t,
                                            jQuery(YTPlayer).trigger(i)
                                        },
                                        onError: function(e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."),
                                            YTPlayer.isPlayList && jQuery(YTPlayer).playNext()),
                                            2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(),
                                            "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                            }
                        }))
                    }),
                    $YTPlayer.off("YTPTime.mask"),
                    jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        getDataFromAPI: function(e) {
            if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID),
            jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                    var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }),
                    e.opt.backgroundUrl = t
                }
            }),
            e.videoData)
                setTimeout(function() {
                    e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio,
                    e.dataReceived = !0,
                    jQuery(e).trigger("YTPChanged");
                    var t = jQuery.Event("YTPData");
                    t.prop = {};
                    for (var i in e.videoData)
                        t.prop[i] = e.videoData[i];
                    jQuery(e).trigger(t)
                }, 500),
                e.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey)
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(t) {
                    function i(t) {
                        e.videoData = {},
                        e.videoData.id = e.videoID,
                        e.videoData.channelTitle = t.channelTitle,
                        e.videoData.title = t.title,
                        e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...",
                        e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio,
                        e.opt.ratio = e.videoData.aspectratio,
                        e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null ,
                        e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null ,
                        e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null ,
                        jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                    }
                    e.dataReceived = !0,
                    jQuery(e).trigger("YTPChanged"),
                    i(t.items[0].snippet),
                    e.hasData = !0;
                    var r = jQuery.Event("YTPData");
                    r.prop = {};
                    for (var o in e.videoData)
                        r.prop[o] = e.videoData[o];
                    jQuery(e).trigger(r)
                });
            else {
                if (setTimeout(function() {
                    jQuery(e).trigger("YTPChanged")
                }, 50),
                e.isPlayer && !e.opt.autoPlay) {
                    var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }),
                    e.opt.backgroundUrl = t
                }
                e.videoData = null ,
                e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }
            !e.isPlayer || e.opt.autoPlay || jQuery.browser.mobile || (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(),
            jQuery(e).append(e.loading),
            e.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            var e = this.get(0);
            return e.videoData
        },
        getVideoID: function() {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function(e) {
            var t = this.get(0);
            t.player.setPlaybackQuality(e)
        },
        playlist: function(e, t, i, r) {
            var o = this
              , n = o.get(0);
            return n.isPlayList = !0,
            t && (e = jQuery.shuffle(e)),
            n.videoID || (n.videos = e,
            n.videoCounter = 0,
            n.videoLength = e.length,
            jQuery(n).data("property", e[0]),
            jQuery(n).mb_YTPlayer()),
            "function" == typeof i && jQuery(n).one("YTPChanged", function() {
                i(n)
            }),
            jQuery(n).on("YTPEnd", function() {
                r = "undefined" == typeof r || r,
                jQuery(n).playNext(r)
            }),
            o
        },
        playNext: function(e) {
            var t = this.get(0);
            return t.checkForStartAt && (clearTimeout(t.checkForStartAt),
            clearInterval(t.getState)),
            t.videoCounter++,
            t.videoCounter >= t.videoLength && e && (t.videoCounter = 0),
            t.videoCounter < t.videoLength ? jQuery(t).changeMovie(t.videos[t.videoCounter]) : t.videoCounter--,
            this
        },
        playPrev: function() {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt),
            clearInterval(e.getState)),
            e.videoCounter--,
            e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1),
            jQuery(e).changeMovie(e.videos[e.videoCounter]),
            this
        },
        playIndex: function(e) {
            var t = this.get(0);
            return e -= 1,
            t.checkForStartAt && (clearInterval(t.checkForStartAt),
            clearInterval(t.getState)),
            t.videoCounter = e,
            t.videoCounter >= t.videoLength - 1 && (t.videoCounter = t.videoLength - 1),
            jQuery(t).changeMovie(t.videos[t.videoCounter]),
            this
        },
        changeMovie: function(e) {
            var t = this
              , i = t.get(0);
            i.opt.startAt = 0,
            i.opt.stopAt = 0,
            i.opt.mask = !1,
            i.opt.mute = !0,
            i.hasData = !1,
            i.hasChanged = !0,
            i.player.loopTime = void 0,
            e && jQuery.extend(i.opt, e),
            i.videoID = getYTPVideoID(i.opt.videoURL).videoID,
            "true" == i.opt.loop && (i.opt.loop = 9999),
            jQuery(i.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function() {
                var e = jQuery.Event("YTPChangeMovie");
                e.time = i.currentTime,
                e.videoId = i.videoID,
                jQuery(i).trigger(e),
                jQuery(i).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + i.videoID), 1, i.opt.quality),
                jQuery(i).optimizeDisplay(),
                jQuery.mbYTPlayer.checkForState(i),
                jQuery.mbYTPlayer.getDataFromAPI(i)
            }),
            jQuery.mbYTPlayer.applyMask(i)
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var e = this.get(0);
            ytp.YTAPIReady = !0,
            ytp.backgroundIsInited = !1,
            e.isInit = !1,
            e.videoID = null ;
            var t = e.wrapper;
            return t.remove(),
            jQuery("#controlBar_" + e.id).remove(),
            clearInterval(e.checkForStartAt),
            clearInterval(e.getState),
            this
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }
            function RunPrefixMethod(e, t) {
                for (var i, r, o = ["webkit", "moz", "ms", "o", ""], n = 0; n < o.length && !e[i]; ) {
                    if (i = t,
                    "" == o[n] && (i = i.substr(0, 1).toLowerCase() + i.substr(1)),
                    i = o[n] + i,
                    r = typeof e[i],
                    "undefined" != r)
                        return o = [o[n]],
                        "function" == r ? e[i]() : e[i];
                    n++
                }
            }
            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }
            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen),
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id)
              , fullScreenBtn = controls.find(".mb_OnlyYT")
              , videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"),
                    jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1,
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                    jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                    videoWrapper.removeClass("YTPFullscreen"),
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500),
                    videoWrapper.css({
                        zIndex: 0
                    }),
                    YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls),
                    jQuery(window).resize(),
                    jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"),
            clearTimeout(YTPlayer.hideCursor),
            YTPlayer.overlay.css({
                cursor: "auto"
            }),
            real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 500),
            videoWrapper.css({
                zIndex: 0
            })),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
            YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }),
                clearTimeout(YTPlayer.hideCursor),
                jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }),
            hideMouse(),
            real ? (videoWrapper.css({
                opacity: 0
            }),
            videoWrapper.addClass("YTPFullscreen"),
            launchFullscreen(videoWrapper.get(0)),
            setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 1e3),
                YTPlayer.wrapper.append(controls),
                jQuery(YTPlayer).optimizeDisplay(),
                YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, 500)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 1e3),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
            YTPlayer.isAlone = !0),
            this
        },
        toggleLoops: function() {
            var e = this.get(0)
              , t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(),
            t.loop = 1),
            this
        },
        play: function() {
            var e = this.get(0);
            if (!e.isReady)
                return this;
            e.player.playVideo(),
            e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, 2e3),
            jQuery(e.playerEl).CSSAnimate({
                opacity: 1
            }, 1e3);
            var t = jQuery("#controlBar_" + e.id)
              , i = t.find(".mb_YTPPlaypause");
            return i.html(jQuery.mbYTPlayer.controls.pause),
            e.state = 1,
            jQuery(e).css("background-image", "none"),
            this
        },
        togglePlay: function(e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(),
            "function" == typeof e && e(t.state),
            this
        },
        stop: function() {
            var e = this.get(0)
              , t = jQuery("#controlBar_" + e.id)
              , i = t.find(".mb_YTPPlaypause");
            return i.html(jQuery.mbYTPlayer.controls.play),
            e.player.stopVideo(),
            this
        },
        pause: function() {
            var e = this.get(0);
            return e.player.pauseVideo(),
            e.state = 2,
            this
        },
        seekTo: function(e) {
            var t = this.get(0);
            return t.player.seekTo(e, !0),
            this
        },
        setVolume: function(e) {
            var t = this.get(0);
            return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e,
            t.player.setVolume(t.opt.vol),
            t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(),
            this
        },
        toggleVolume: function() {
            var e = this.get(0);
            if (e)
                return e.player.isMuted() ? (jQuery(e).YTPUnmute(),
                !0) : (jQuery(e).YTPMute(),
                !1)
        },
        mute: function() {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(),
                e.isMute = !0,
                e.player.setVolume(0),
                e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0);
                var t = jQuery("#controlBar_" + e.id)
                  , i = t.find(".mb_YTPMuteUnmute");
                i.html(jQuery.mbYTPlayer.controls.unmute),
                jQuery(e).addClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var r = jQuery.Event("YTPMuted");
                return r.time = e.currentTime,
                e.canTrigger && jQuery(e).trigger(r),
                this
            }
        },
        unmute: function() {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(),
                e.isMute = !1,
                e.player.setVolume(e.opt.vol),
                e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                var t = jQuery("#controlBar_" + e.id)
                  , i = t.find(".mb_YTPMuteUnmute");
                i.html(jQuery.mbYTPlayer.controls.mute),
                jQuery(e).removeClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var r = jQuery.Event("YTPUnmuted");
                return r.time = e.currentTime,
                e.canTrigger && jQuery(e).trigger(r),
                this
            }
        },
        applyFilter: function(e, t) {
            return this.each(function() {
                var i = this;
                i.filters[e].value = t,
                i.filtersEnabled && jQuery(i).YTPEnableFilters()
            })
        },
        applyFilters: function(e) {
            return this.each(function() {
                var t = this;
                if (!t.isReady)
                    return void jQuery(t).on("YTPReady", function() {
                        jQuery(t).YTPApplyFilters(e)
                    });
                for (var i in e)
                    jQuery(t).YTPApplyFilter(i, e[i]);
                jQuery(t).trigger("YTPFiltersApplied")
            })
        },
        toggleFilter: function(e, t) {
            return this.each(function() {
                var i = this;
                i.filters[e].value ? i.filters[e].value = 0 : i.filters[e].value = t,
                i.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function(e) {
            return this.each(function() {
                var t = this;
                t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"),
                jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(),
                jQuery(t).trigger("YTPEnableFilters")),
                "function" == typeof e && e(t.filtersEnabled)
            })
        },
        disableFilters: function() {
            return this.each(function() {
                var e = this
                  , t = jQuery(e.playerEl);
                t.css("-webkit-filter", ""),
                t.css("filter", ""),
                e.filtersEnabled = !1
            })
        },
        enableFilters: function() {
            return this.each(function() {
                var e = this
                  , t = jQuery(e.playerEl)
                  , i = "";
                for (var r in e.filters)
                    e.filters[r].value && (i += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") ");
                t.css("-webkit-filter", i),
                t.css("filter", i),
                e.filtersEnabled = !0
            })
        },
        removeFilter: function(e, t) {
            return this.each(function() {
                var i = this;
                if ("function" == typeof e && (t = e,
                e = null ),
                e)
                    jQuery(this).YTPApplyFilter(e, 0),
                    "function" == typeof t && t(e);
                else
                    for (var r in i.filters)
                        jQuery(this).YTPApplyFilter(r, 0),
                        "function" == typeof t && t(r)
            })
        },
        getFilters: function() {
            var e = this.get(0);
            return e.filters
        },
        addMask: function(e) {
            var t = this.get(0)
              , i = t.overlay;
            e || (e = t.actualMask);
            var r = jQuery("<img/>").attr("src", e).on("load", function() {
                i.CSSAnimate({
                    opacity: 0
                }, 500, function() {
                    t.hasMask = !0,
                    r.remove(),
                    i.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }),
                    i.CSSAnimate({
                        opacity: 1
                    }, 500)
                })
            });
            return this
        },
        removeMask: function() {
            var e = this.get(0)
              , t = e.overlay;
            return t.CSSAnimate({
                opacity: 0
            }, 500, function() {
                e.hasMask = !1,
                t.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }),
                t.CSSAnimate({
                    opacity: 1
                }, 500)
            }),
            this
        },
        applyMask: function(e) {
            var t = jQuery(e);
            if (t.off("YTPTime.mask"),
            e.opt.mask)
                if ("string" == typeof e.opt.mask)
                    t.YTPAddMask(e.opt.mask),
                    e.actualMask = e.opt.mask;
                else if ("object" == typeof e.opt.mask) {
                    for (var i in e.opt.mask)
                        e.opt.mask[i] && jQuery("<img/>").attr("src", e.opt.mask[i]);
                    e.opt.mask[0] && t.YTPAddMask(e.opt.mask[0]),
                    t.on("YTPTime.mask", function(i) {
                        for (var r in e.opt.mask)
                            i.time == r && (e.opt.mask[r] ? (t.YTPAddMask(e.opt.mask[r]),
                            e.actualMask = e.opt.mask[r]) : t.YTPRemoveMask())
                    })
                }
        },
        toggleMask: function() {
            var e = this.get(0)
              , t = $(e);
            return e.hasMask ? t.YTPRemoveMask() : t.YTPAddMask(),
            this
        },
        manageProgress: function() {
            var e = this.get(0)
              , t = jQuery("#controlBar_" + e.id)
              , i = t.find(".mb_YTPProgress")
              , r = t.find(".mb_YTPLoaded")
              , o = t.find(".mb_YTPseekbar")
              , n = i.outerWidth()
              , a = Math.floor(e.player.getCurrentTime())
              , s = Math.floor(e.player.getDuration())
              , l = a * n / s
              , c = 0
              , d = 100 * e.player.getVideoLoadedFraction();
            return r.css({
                left: c,
                width: d + "%"
            }),
            o.css({
                left: 0,
                width: l
            }),
            {
                totalTime: s,
                currentTime: a
            }
        },
        buildControls: function(YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl,
            !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar")
                  , playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                    1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                })
                  , MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                    0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                })
                  , volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                    display: "inline-block"
                });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime")
                  , vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                    window.open(vURL, "viewOnYT")
                })
                  , onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                    jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                })
                  , progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                    timeBar.css({
                        width: e.clientX - timeBar.offset().left
                    }),
                    YTPlayer.timeW = e.clientX - timeBar.offset().left,
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                        width: 0
                    });
                    var t = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer.goto = timeBar.outerWidth() * t / progressBar.outerWidth(),
                    YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0),
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                        width: 0
                    })
                })
                  , loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute")
                  , timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar),
                buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),
                data.showYTLogo && buttonBar.append(movieUrl),
                (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo),
                YTPlayer.controlBar.append(buttonBar).append(progressBar),
                YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"),
                YTPlayer.wrapper.before(YTPlayer.controlBar)),
                volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(),
                        YTPlayer.player.setVolume(e.value),
                        YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            return clearInterval(YTPlayer.getState),
            jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer),
            void (YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).YTPManageProgress()
                  , $YTPlayer = jQuery(YTPlayer)
                  , data = YTPlayer.opt
                  , startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1
                  , stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0,
                YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime,
                    jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.currentTime = prog.currentTime,
                YTPlayer.totalTime = YTPlayer.player.getDuration(),
                0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"),
                YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),
                eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0,
                $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1,
                $YTPlayer.YTPPause())),
                YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"),
                YTPlayer.isCompact = !0,
                !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"),
                YTPlayer.isCompact = !1,
                !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
                1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded)
                        return;
                    if (YTPlayer.isEnded = !0,
                    setTimeout(function() {
                        YTPlayer.isEnded = !1
                    }, 1e3),
                    YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                            YTPlayer.player.loopTime = void 0,
                            clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.currentTime,
                            void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)
                        return YTPlayer.player.loopTime = void 0,
                        YTPlayer.preventTrigger = !0,
                        YTPlayer.state = 2,
                        jQuery(YTPlayer).YTPPause(),
                        void YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, 500, function() {
                            YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            var e = jQuery.Event("YTPEnd");
                            e.time = YTPlayer.currentTime,
                            jQuery(YTPlayer).trigger(e),
                            YTPlayer.player.seekTo(startAt, !0),
                            YTPlayer.isBackground || YTPlayer.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                                backgroundSize: "cover"
                            })
                        });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1,
                    startAt = startAt || 1,
                    YTPlayer.preventTrigger = !0,
                    YTPlayer.state = 2,
                    jQuery(YTPlayer).YTPPause(),
                    YTPlayer.player.seekTo(startAt, !0),
                    $YTPlayer.YTPPlay()
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(),
            clearInterval(YTPlayer.getState),
            void clearInterval(YTPlayer.checkForStartAt))
        },
        getTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function() {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.totalTime)
        },
        checkForStart: function(e) {
            var t = jQuery(e);
            if (!jQuery.contains(document, e))
                return void jQuery(e).YTPPlayerDestroy();
            if (e.preventTrigger = !0,
            e.state = 2,
            jQuery(e).YTPPause(),
            jQuery(e).muteYTPVolume(),
            jQuery("#controlBar_" + e.id).remove(),
            e.controlBar = !1,
            e.opt.showControls && jQuery.mbYTPlayer.buildControls(e),
            e.opt.addRaster) {
                var i = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? i + " retina" : i)
            } else
                e.overlay.removeClass(function(e, t) {
                    var i = t.split(" ")
                      , r = [];
                    return jQuery.each(i, function(e, t) {
                        /raster.*/.test(t) && r.push(t)
                    }),
                    r.push("retina"),
                    r.join(" ")
                });
            var r = e.opt.startAt ? e.opt.startAt : 1;
            e.player.playVideo(),
            e.player.seekTo(r, !0),
            e.checkForStartAt = setInterval(function() {
                jQuery(e).YTPMute();
                var i = e.player.getVideoLoadedFraction() >= r / e.player.getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= r && i) {
                    clearInterval(e.checkForStartAt),
                    "function" == typeof e.opt.onReady && e.opt.onReady(e),
                    e.isReady = !0;
                    var o = jQuery.Event("YTPReady");
                    if (o.time = e.currentTime,
                    jQuery(e).trigger(o),
                    e.preventTrigger = !0,
                    e.state = 2,
                    jQuery(e).YTPPause(),
                    e.opt.mute || jQuery(e).YTPUnmute(),
                    e.canTrigger = !0,
                    e.opt.autoPlay) {
                        var n = jQuery.Event("YTPStart");
                        n.time = e.currentTime,
                        jQuery(e).trigger(n),
                        t.css("background-image", "none"),
                        jQuery(e.playerEl).CSSAnimate({
                            opacity: 1
                        }, 1e3),
                        t.YTPPlay(),
                        e.wrapper.CSSAnimate({
                            opacity: e.isAlone ? 1 : e.opt.opacity
                        }, 1e3),
                        jQuery.browser.safari && (e.safariPlay = setInterval(function() {
                            1 != e.state ? t.YTPPlay() : clearInterval(e.safariPlay)
                        }, 10)),
                        t.on("YTPReady", function() {
                            t.YTPPlay()
                        })
                    } else
                        e.player.pauseVideo(),
                        e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
                            opacity: 1
                        }, 500),
                        e.wrapper.CSSAnimate({
                            opacity: e.isAlone ? 1 : e.opt.opacity
                        }, 500)),
                        e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                    e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"),
                    setTimeout(function() {
                        e.loading.fadeOut()
                    }, 100)),
                    e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3)
                } else
                    jQuery.browser.safari && (e.player.playVideo(),
                    r >= 0 && e.player.seekTo(r, !0))
            }, 1)
        },
        setAlign: function(e) {
            var t = this;
            t.optimizeDisplay(e)
        },
        getAlign: function() {
            var e = this.get(0);
            return e.opt.align
        },
        formatTime: function(e) {
            var t = Math.floor(e / 60)
              , i = Math.floor(e - 60 * t);
            return (9 >= t ? "0" + t : t) + " : " + (9 >= i ? "0" + i : i)
        }
    },
    jQuery.fn.optimizeDisplay = function(e) {
        var t = this.get(0)
          , i = jQuery(t.playerEl)
          , r = {};
        t.opt.align = e || t.opt.align,
        t.opt.align = "undefined " != typeof t.opt.align ? t.opt.align : "center,center";
        var o = t.opt.align.split(",");
        if (t.opt.optimizeDisplay) {
            var n = {}
              , a = t.wrapper;
            n.width = a.outerWidth(),
            n.height = a.outerHeight(),
            r.width = n.width,
            r.height = "16/9" == t.opt.ratio ? Math.ceil(n.width * (9 / 16)) : Math.ceil(.75 * n.width),
            r.width = n.width,
            r.height = "16/9" == t.opt.ratio ? Math.ceil(n.width * (9 / 16)) : Math.ceil(.75 * n.width),
            r.marginTop = -((r.height - n.height) / 2),
            r.marginLeft = 0;
            var s = r.height < n.height;
            s && (r.height = n.height,
            r.width = "16/9" == t.opt.ratio ? Math.floor(n.height * (16 / 9)) : Math.floor(n.height * (4 / 3)),
            r.marginTop = 0,
            r.marginLeft = -((r.width - n.width) / 2));
            for (var l in o) {
                var c = o[l].trim();
                switch (c) {
                case "top":
                    r.marginTop = s ? -((r.height - n.height) / 2) : 0;
                    break;
                case "bottom":
                    r.marginTop = s ? 0 : -(r.height - n.height);
                    break;
                case "left":
                    r.marginLeft = 0;
                    break;
                case "right":
                    r.marginLeft = s ? -(r.width - n.width) : 0
                }
            }
        } else
            r.width = "100%",
            r.height = "100%",
            r.marginTop = 0,
            r.marginLeft = 0;
        i.css({
            width: r.width,
            height: r.height,
            marginTop: r.marginTop,
            marginLeft: r.marginLeft
        })
    }
    ,
    jQuery.shuffle = function(e) {
        for (var t = e.slice(), i = t.length, r = i; r--; ) {
            var o = parseInt(Math.random() * i)
              , n = t[r];
            t[r] = t[o],
            t[o] = n
        }
        return t
    }
    ,
    jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }
    ,
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie,
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play,
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay,
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop,
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause,
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist,
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex,
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute,
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute,
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume,
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData,
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter,
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters,
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter,
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters,
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter,
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters,
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters,
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters,
    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime,
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime,
    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask,
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask,
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask,
    jQuery.fn.YTPSetAlign = jQuery.mbYTPlayer.setAlign,
    jQuery.fn.YTPGetAlign = jQuery.mbYTPlayer.getAlign,
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie,
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls,
    jQuery.fn.playYTP = jQuery.mbYTPlayer.play,
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop,
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause,
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute,
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute,
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp),
jQuery.support.CSStransition = function() {
    var e = document.body || document.documentElement
      , t = e.style;
    return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
}(),
jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var i in t) {
            "transform" === i && (t[jQuery.CSS.sfx + "transform"] = t[i],
            delete t[i]),
            "transform-origin" === i && (t[jQuery.CSS.sfx + "transform-origin"] = e[i],
            delete t[i]),
            "filter" !== i || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[i],
            delete t[i]),
            "blur" === i && setFilter(t, "blur", e[i]),
            "brightness" === i && setFilter(t, "brightness", e[i]),
            "contrast" === i && setFilter(t, "contrast", e[i]),
            "grayscale" === i && setFilter(t, "grayscale", e[i]),
            "hueRotate" === i && setFilter(t, "hueRotate", e[i]),
            "invert" === i && setFilter(t, "invert", e[i]),
            "saturate" === i && setFilter(t, "saturate", e[i]),
            "sepia" === i && setFilter(t, "sepia", e[i]);
            var r = "";
            "x" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " translateX(" + setUnit(e[i], "px") + ")",
            delete t[i]),
            "y" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " translateY(" + setUnit(e[i], "px") + ")",
            delete t[i]),
            "z" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " translateZ(" + setUnit(e[i], "px") + ")",
            delete t[i]),
            "rotate" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " rotate(" + setUnit(e[i], "deg") + ")",
            delete t[i]),
            "rotateX" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " rotateX(" + setUnit(e[i], "deg") + ")",
            delete t[i]),
            "rotateY" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " rotateY(" + setUnit(e[i], "deg") + ")",
            delete t[i]),
            "rotateZ" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " rotateZ(" + setUnit(e[i], "deg") + ")",
            delete t[i]),
            "scale" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " scale(" + setUnit(e[i], "") + ")",
            delete t[i]),
            "scaleX" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " scaleX(" + setUnit(e[i], "") + ")",
            delete t[i]),
            "scaleY" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " scaleY(" + setUnit(e[i], "") + ")",
            delete t[i]),
            "scaleZ" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " scaleZ(" + setUnit(e[i], "") + ")",
            delete t[i]),
            "skew" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " skew(" + setUnit(e[i], "deg") + ")",
            delete t[i]),
            "skewX" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " skewX(" + setUnit(e[i], "deg") + ")",
            delete t[i]),
            "skewY" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " skewY(" + setUnit(e[i], "deg") + ")",
            delete t[i]),
            "perspective" === i && (r = jQuery.CSS.sfx + "transform",
            t[r] = t[r] || "",
            t[r] += " perspective(" + setUnit(e[i], "px") + ")",
            delete t[i])
        }
        return t
    },
    getProp: function(e) {
        var t = [];
        for (var i in e)
            t.indexOf(i) < 0 && t.push(uncamel(i));
        return t.join(",")
    },
    animate: function(e, t, i, r, o) {
        return this.each(function() {
            function n() {
                a.called = !0,
                a.CSSAIsRunning = !1,
                s.off(jQuery.CSS.transitionEnd + "." + a.id),
                clearTimeout(a.timeout),
                s.css(jQuery.CSS.sfx + "transition", ""),
                "function" == typeof o && o.apply(a),
                "function" == typeof a.CSSqueue && (a.CSSqueue(),
                a.CSSqueue = null )
            }
            var a = this
              , s = jQuery(this);
            a.id = a.id || "CSSA_" + (new Date).getTime();
            var l = l || {
                type: "noEvent"
            };
            if (a.CSSAIsRunning && a.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9)
                return void (a.CSSqueue = function() {
                    s.CSSAnimate(e, t, i, r, o)
                }
                );
            if (a.CSSqueue = null ,
            a.eventType = l.type,
            0 !== s.length && e) {
                if (e = jQuery.normalizeCss(e),
                a.CSSAIsRunning = !0,
                "function" == typeof t && (o = t,
                t = jQuery.fx.speeds._default),
                "function" == typeof i && (r = i,
                i = 0),
                "string" == typeof i && (o = i,
                i = 0),
                "function" == typeof r && (o = r,
                r = "cubic-bezier(0.65,0.03,0.36,0.72)"),
                "string" == typeof t)
                    for (var c in jQuery.fx.speeds) {
                        if (t == c) {
                            t = jQuery.fx.speeds[c];
                            break
                        }
                        t = jQuery.fx.speeds._default
                    }
                if (t || (t = jQuery.fx.speeds._default),
                "string" == typeof o && (r = o,
                o = null ),
                !jQuery.support.CSStransition) {
                    for (var d in e) {
                        if ("transform" === d && delete e[d],
                        "filter" === d && delete e[d],
                        "transform-origin" === d && delete e[d],
                        "auto" === e[d] && delete e[d],
                        "x" === d) {
                            var u = e[d]
                              , p = "left";
                            e[p] = u,
                            delete e[d]
                        }
                        if ("y" === d) {
                            var u = e[d]
                              , p = "top";
                            e[p] = u,
                            delete e[d]
                        }
                        ("-ms-transform" === d || "-ms-filter" === d) && delete e[d]
                    }
                    return void s.delay(i).animate(e, t, o)
                }
                var f = {
                    default: "ease",
                    in: "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                f[r] && (r = f[r]),
                s.off(jQuery.CSS.transitionEnd + "." + a.id);
                var h = jQuery.CSS.getProp(e)
                  , y = {};
                jQuery.extend(y, e),
                y[jQuery.CSS.sfx + "transition-property"] = h,
                y[jQuery.CSS.sfx + "transition-duration"] = t + "ms",
                y[jQuery.CSS.sfx + "transition-delay"] = i + "ms",
                y[jQuery.CSS.sfx + "transition-timing-function"] = r,
                setTimeout(function() {
                    s.one(jQuery.CSS.transitionEnd + "." + a.id, n),
                    s.css(y)
                }, 1),
                a.timeout = setTimeout(function() {
                    return a.called || !o ? (a.called = !1,
                    void (a.CSSAIsRunning = !1)) : (s.css(jQuery.CSS.sfx + "transition", ""),
                    o.apply(a),
                    a.CSSAIsRunning = !1,
                    void ("function" == typeof a.CSSqueue && (a.CSSqueue(),
                    a.CSSqueue = null )))
                }, t + i + 10)
            }
        })
    }
},
jQuery.fn.CSSAnimate = jQuery.CSS.animate,
jQuery.normalizeCss = jQuery.CSS.normalizeCss,
jQuery.fn.css3 = function(e) {
    return this.each(function() {
        var t = jQuery(this)
          , i = jQuery.normalizeCss(e);
        t.css(i)
    })
}
;
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {},
    jQuery.browser.mozilla = !1,
    jQuery.browser.webkit = !1,
    jQuery.browser.opera = !1,
    jQuery.browser.safari = !1,
    jQuery.browser.chrome = !1,
    jQuery.browser.androidStock = !1,
    jQuery.browser.msie = !1,
    jQuery.browser.ua = nAgt,
    jQuery.browser.name = navigator.appName,
    jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
    jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera")))
        jQuery.browser.opera = !0,
        jQuery.browser.name = "Opera",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
        -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR")))
        jQuery.browser.opera = !0,
        jQuery.browser.name = "Opera",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
        jQuery.browser.msie = !0,
        jQuery.browser.name = "Microsoft Internet Explorer",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
        jQuery.browser.msie = !0,
        jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3
          , end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else
        -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0,
        jQuery.browser.chrome = !0,
        jQuery.browser.name = "Chrome",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"),
        jQuery.browser.webkit = !0,
        jQuery.browser.androidStock = !0,
        jQuery.browser.name = "androidStock",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0,
        jQuery.browser.safari = !0,
        jQuery.browser.name = "Safari",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
        -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0,
        jQuery.browser.safari = !0,
        jQuery.browser.name = "Safari",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
        -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0,
        jQuery.browser.name = "Firefox",
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
        jQuery.browser.fullVersion = nAgt.substring(verOffset + 1),
        jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
    -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
    -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
    jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
    isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
    jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
    jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt),
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
jQuery.isMobile = jQuery.browser.mobile,
jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765,
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
!function(e) {
    var t = (/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()),
    "ontouchstart"in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1);
    e.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: t ? "touchstart" : "mousedown",
            end: t ? "touchend" : "mouseup",
            move: t ? "touchmove" : "mousemove"
        },
        init: function(i) {
            return this.each(function() {
                var r = this
                  , o = e(r);
                o.addClass("simpleSlider"),
                r.opt = {},
                e.extend(r.opt, e.simpleSlider.defaults, i),
                e.extend(r.opt, o.data());
                var n = "h" == r.opt.orientation ? "horizontal" : "vertical"
                  , a = e("<div/>").addClass("level").addClass(n);
                o.prepend(a),
                r.level = a,
                o.css({
                    cursor: "default"
                }),
                "auto" == r.opt.scale && (r.opt.scale = e(r).outerWidth()),
                o.updateSliderVal(),
                r.opt.readonly || (o.on(e.simpleSlider.events.start, function(e) {
                    t && (e = e.changedTouches[0]),
                    r.canSlide = !0,
                    o.updateSliderVal(e),
                    o.css({
                        cursor: "col-resize"
                    }),
                    e.preventDefault(),
                    e.stopPropagation()
                }),
                e(document).on(e.simpleSlider.events.move, function(i) {
                    t && (i = i.changedTouches[0]),
                    r.canSlide && (e(document).css({
                        cursor: "default"
                    }),
                    o.updateSliderVal(i),
                    i.preventDefault(),
                    i.stopPropagation())
                }).on(e.simpleSlider.events.end, function() {
                    e(document).css({
                        cursor: "auto"
                    }),
                    r.canSlide = !1,
                    o.css({
                        cursor: "auto"
                    })
                }))
            })
        },
        updateSliderVal: function(t) {
            function i(e, t) {
                return Math.floor(100 * e / t)
            }
            var r = this
              , o = r.get(0);
            if (o.opt) {
                o.opt.initialval = "number" == typeof o.opt.initialval ? o.opt.initialval : o.opt.initialval(o);
                var n = e(o).outerWidth()
                  , a = e(o).outerHeight();
                o.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - r.offset().left : "number" == typeof t ? t * n / o.opt.scale : o.opt.initialval * n / o.opt.scale,
                o.y = "object" == typeof t ? t.clientY + document.body.scrollTop - r.offset().top : "number" == typeof t ? (o.opt.scale - o.opt.initialval - t) * a / o.opt.scale : o.opt.initialval * a / o.opt.scale,
                o.y = r.outerHeight() - o.y,
                o.scaleX = o.x * o.opt.scale / n,
                o.scaleY = o.y * o.opt.scale / a,
                o.outOfRangeX = o.scaleX > o.opt.scale ? o.scaleX - o.opt.scale : o.scaleX < 0 ? o.scaleX : 0,
                o.outOfRangeY = o.scaleY > o.opt.scale ? o.scaleY - o.opt.scale : o.scaleY < 0 ? o.scaleY : 0,
                o.outOfRange = "h" == o.opt.orientation ? o.outOfRangeX : o.outOfRangeY,
                "undefined" != typeof t ? o.value = "h" == o.opt.orientation ? o.x >= r.outerWidth() ? o.opt.scale : o.x <= 0 ? 0 : o.scaleX : o.y >= r.outerHeight() ? o.opt.scale : o.y <= 0 ? 0 : o.scaleY : o.value = "h" == o.opt.orientation ? o.scaleX : o.scaleY,
                "h" == o.opt.orientation ? o.level.width(i(o.x, n) + "%") : o.level.height(i(o.y, a)),
                "function" == typeof o.opt.callback && o.opt.callback(o)
            }
        }
    },
    e.fn.simpleSlider = e.simpleSlider.init,
    e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
}(jQuery),
!function(e) {
    e.mbCookie = {
        set: function(e, t, i, r) {
            t = JSON.stringify(t),
            i || (i = 7),
            r = r ? "; domain=" + r : "";
            var o, n = new Date;
            n.setTime(n.getTime() + 864e5 * i),
            o = "; expires=" + n.toGMTString(),
            document.cookie = e + "=" + t + o + "; path=/" + r
        },
        get: function(e) {
            for (var t = e + "=", i = document.cookie.split(";"), r = 0; r < i.length; r++) {
                for (var o = i[r]; " " == o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 == o.indexOf(t))
                    return JSON.parse(o.substring(t.length, o.length))
            }
            return null
        },
        remove: function(t) {
            e.mbCookie.set(t, "", -1)
        }
    },
    e.mbStorage = {
        set: function(e, t) {
            t = JSON.stringify(t),
            localStorage.setItem(e, t)
        },
        get: function(e) {
            return localStorage[e] ? JSON.parse(localStorage[e]) : null
        },
        remove: function(e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    }
}(jQuery),
!function(e, t) {
    "use strict";
    e.MixItUp = function() {
        var t = this;
        t._execAction("_constructor", 0),
        e.extend(t, {
            selectors: {
                target: ".mix",
                filter: ".filter",
                sort: ".sort"
            },
            animation: {
                enable: !0,
                effects: "fade scale",
                duration: 600,
                easing: "ease",
                perspectiveDistance: "3000",
                perspectiveOrigin: "50% 50%",
                queue: !0,
                queueLimit: 1,
                animateChangeLayout: !1,
                animateResizeContainer: !0,
                animateResizeTargets: !1,
                staggerSequence: !1,
                reverseOut: !1
            },
            callbacks: {
                onMixLoad: !1,
                onMixStart: !1,
                onMixBusy: !1,
                onMixEnd: !1,
                onMixFail: !1,
                _user: !1
            },
            controls: {
                enable: !0,
                live: !1,
                toggleFilterButtons: !1,
                toggleLogic: "or",
                activeClass: "active"
            },
            layout: {
                display: "inline-block",
                containerClass: "",
                containerClassFail: "fail"
            },
            load: {
                filter: "all",
                sort: !1
            },
            _$body: null ,
            _$container: null ,
            _$targets: null ,
            _$parent: null ,
            _$sortButtons: null ,
            _$filterButtons: null ,
            _suckMode: !1,
            _mixing: !1,
            _sorting: !1,
            _clicking: !1,
            _loading: !0,
            _changingLayout: !1,
            _changingClass: !1,
            _changingDisplay: !1,
            _origOrder: [],
            _startOrder: [],
            _newOrder: [],
            _activeFilter: null ,
            _toggleArray: [],
            _toggleString: "",
            _activeSort: "default:asc",
            _newSort: null ,
            _startHeight: null ,
            _newHeight: null ,
            _incPadding: !0,
            _newDisplay: null ,
            _newClass: null ,
            _targetsBound: 0,
            _targetsDone: 0,
            _queue: [],
            _$show: e(),
            _$hide: e()
        }),
        t._execAction("_constructor", 1)
    }
    ,
    e.MixItUp.prototype = {
        constructor: e.MixItUp,
        _instances: {},
        _handled: {
            _filter: {},
            _sort: {}
        },
        _bound: {
            _filter: {},
            _sort: {}
        },
        _actions: {},
        _filters: {},
        extend: function(t) {
            for (var i in t)
                e.MixItUp.prototype[i] = t[i]
        },
        addAction: function(t, i, r, o) {
            e.MixItUp.prototype._addHook("_actions", t, i, r, o)
        },
        addFilter: function(t, i, r, o) {
            e.MixItUp.prototype._addHook("_filters", t, i, r, o)
        },
        _addHook: function(t, i, r, o, n) {
            var a = e.MixItUp.prototype[t]
              , s = {};
            n = 1 === n || "post" === n ? "post" : "pre",
            s[i] = {},
            s[i][n] = {},
            s[i][n][r] = o,
            e.extend(!0, a, s)
        },
        _init: function(t, i) {
            var r = this;
            if (r._execAction("_init", 0, arguments),
            i && e.extend(!0, r, i),
            r._$body = e("body"),
            r._domNode = t,
            r._$container = e(t),
            r._$container.addClass(r.layout.containerClass),
            r._id = t.id,
            r._platformDetect(),
            r._brake = r._getPrefixedCSS("transition", "none"),
            r._refresh(!0),
            r._$parent = r._$targets.parent().length ? r._$targets.parent() : r._$container,
            r.load.sort && (r._newSort = r._parseSort(r.load.sort),
            r._newSortString = r.load.sort,
            r._activeSort = r.load.sort,
            r._sort(),
            r._printSort()),
            r._activeFilter = "all" === r.load.filter ? r.selectors.target : "none" === r.load.filter ? "" : r.load.filter,
            r.controls.enable && r._bindHandlers(),
            r.controls.toggleFilterButtons) {
                r._buildToggleArray();
                for (var o = 0; o < r._toggleArray.length; o++)
                    r._updateControls({
                        filter: r._toggleArray[o],
                        sort: r._activeSort
                    }, !0)
            } else
                r.controls.enable && r._updateControls({
                    filter: r._activeFilter,
                    sort: r._activeSort
                });
            r._filter(),
            r._init = !0,
            r._$container.data("mixItUp", r),
            r._execAction("_init", 1, arguments),
            r._buildState(),
            r._$targets.css(r._brake),
            r._goMix(r.animation.enable)
        },
        _platformDetect: function() {
            var e = this
              , i = ["Webkit", "Moz", "O", "ms"]
              , r = ["webkit", "moz"]
              , o = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1
              , n = "undefined" != typeof InstallTrigger
              , a = function(e) {
                for (var t = 0; t < i.length; t++)
                    if (i[t] + "Transition"in e.style)
                        return {
                            prefix: "-" + i[t].toLowerCase() + "-",
                            vendor: i[t]
                        };
                return "transition"in e.style && ""
            }
              , s = a(e._domNode);
            e._execAction("_platformDetect", 0),
            e._chrome = !!o && parseInt(o[1], 10),
            e._ff = !!n && parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]),
            e._prefix = s.prefix,
            e._vendor = s.vendor,
            e._suckMode = !window.atob || !e._prefix,
            e._suckMode && (e.animation.enable = !1),
            e._ff && e._ff <= 4 && (e.animation.enable = !1);
            for (var l = 0; l < r.length && !window.requestAnimationFrame; l++)
                window.requestAnimationFrame = window[r[l] + "RequestAnimationFrame"];
            "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(e) {
                return e.__proto__
            }
            : Object.getPrototypeOf = function(e) {
                return e.constructor.prototype
            }
            ),
            e._domNode.nextElementSibling === t && Object.defineProperty(Element.prototype, "nextElementSibling", {
                get: function() {
                    for (var e = this.nextSibling; e; ) {
                        if (1 === e.nodeType)
                            return e;
                        e = e.nextSibling
                    }
                    return null
                }
            }),
            e._execAction("_platformDetect", 1)
        },
        _refresh: function(e, i) {
            var r = this;
            r._execAction("_refresh", 0, arguments),
            r._$targets = r._$container.find(r.selectors.target);
            for (var o = 0; o < r._$targets.length; o++) {
                var n = r._$targets[o];
                if (n.dataset === t || i) {
                    n.dataset = {};
                    for (var a = 0; a < n.attributes.length; a++) {
                        var s = n.attributes[a]
                          , l = s.name
                          , c = s.value;
                        if (l.indexOf("data-") > -1) {
                            var d = r._helpers._camelCase(l.substring(5, l.length));
                            n.dataset[d] = c
                        }
                    }
                }
                n.mixParent === t && (n.mixParent = r._id)
            }
            if (r._$targets.length && e || !r._origOrder.length && r._$targets.length) {
                r._origOrder = [];
                for (var o = 0; o < r._$targets.length; o++) {
                    var n = r._$targets[o];
                    r._origOrder.push(n)
                }
            }
            r._execAction("_refresh", 1, arguments)
        },
        _bindHandlers: function() {
            var i = this
              , r = e.MixItUp.prototype._bound._filter
              , o = e.MixItUp.prototype._bound._sort;
            i._execAction("_bindHandlers", 0),
            i.controls.live ? i._$body.on("click.mixItUp." + i._id, i.selectors.sort, function() {
                i._processClick(e(this), "sort")
            }).on("click.mixItUp." + i._id, i.selectors.filter, function() {
                i._processClick(e(this), "filter")
            }) : (i._$sortButtons = e(i.selectors.sort),
            i._$filterButtons = e(i.selectors.filter),
            i._$sortButtons.on("click.mixItUp." + i._id, function() {
                i._processClick(e(this), "sort")
            }),
            i._$filterButtons.on("click.mixItUp." + i._id, function() {
                i._processClick(e(this), "filter")
            })),
            r[i.selectors.filter] = r[i.selectors.filter] === t ? 1 : r[i.selectors.filter] + 1,
            o[i.selectors.sort] = o[i.selectors.sort] === t ? 1 : o[i.selectors.sort] + 1,
            i._execAction("_bindHandlers", 1)
        },
        _processClick: function(i, r) {
            var o = this
              , n = function(i, r, n) {
                var a = e.MixItUp.prototype;
                a._handled["_" + r][o.selectors[r]] = a._handled["_" + r][o.selectors[r]] === t ? 1 : a._handled["_" + r][o.selectors[r]] + 1,
                a._handled["_" + r][o.selectors[r]] === a._bound["_" + r][o.selectors[r]] && (i[(n ? "remove" : "add") + "Class"](o.controls.activeClass),
                delete a._handled["_" + r][o.selectors[r]])
            };
            if (o._execAction("_processClick", 0, arguments),
            !o._mixing || o.animation.queue && o._queue.length < o.animation.queueLimit) {
                if (o._clicking = !0,
                "sort" === r) {
                    var a = i.attr("data-sort");
                    (!i.hasClass(o.controls.activeClass) || a.indexOf("random") > -1) && (e(o.selectors.sort).removeClass(o.controls.activeClass),
                    n(i, r),
                    o.sort(a))
                }
                if ("filter" === r) {
                    var s, l = i.attr("data-filter"), c = "or" === o.controls.toggleLogic ? "," : "";
                    o.controls.toggleFilterButtons ? (o._buildToggleArray(),
                    i.hasClass(o.controls.activeClass) ? (n(i, r, !0),
                    s = o._toggleArray.indexOf(l),
                    o._toggleArray.splice(s, 1)) : (n(i, r),
                    o._toggleArray.push(l)),
                    o._toggleArray = e.grep(o._toggleArray, function(e) {
                        return e
                    }),
                    o._toggleString = o._toggleArray.join(c),
                    o.filter(o._toggleString)) : i.hasClass(o.controls.activeClass) || (e(o.selectors.filter).removeClass(o.controls.activeClass),
                    n(i, r),
                    o.filter(l))
                }
                o._execAction("_processClick", 1, arguments)
            } else
                "function" == typeof o.callbacks.onMixBusy && o.callbacks.onMixBusy.call(o._domNode, o._state, o),
                o._execAction("_processClickBusy", 1, arguments)
        },
        _buildToggleArray: function() {
            var e = this
              , t = e._activeFilter.replace(/\s/g, "");
            if (e._execAction("_buildToggleArray", 0, arguments),
            "or" === e.controls.toggleLogic)
                e._toggleArray = t.split(",");
            else {
                e._toggleArray = t.split("."),
                !e._toggleArray[0] && e._toggleArray.shift();
                for (var i, r = 0; i = e._toggleArray[r]; r++)
                    e._toggleArray[r] = "." + i
            }
            e._execAction("_buildToggleArray", 1, arguments)
        },
        _updateControls: function(i, r) {
            var o = this
              , n = {
                filter: i.filter,
                sort: i.sort
            }
              , a = function(e, t) {
                try {
                    r && "filter" === s && "none" !== n.filter && "" !== n.filter ? e.filter(t).addClass(o.controls.activeClass) : e.removeClass(o.controls.activeClass).filter(t).addClass(o.controls.activeClass)
                } catch (e) {}
            }
              , s = "filter"
              , l = null ;
            o._execAction("_updateControls", 0, arguments),
            i.filter === t && (n.filter = o._activeFilter),
            i.sort === t && (n.sort = o._activeSort),
            n.filter === o.selectors.target && (n.filter = "all");
            for (var c = 0; 2 > c; c++)
                l = o.controls.live ? e(o.selectors[s]) : o["_$" + s + "Buttons"],
                l && a(l, "[data-" + s + '="' + n[s] + '"]'),
                s = "sort";
            o._execAction("_updateControls", 1, arguments)
        },
        _filter: function() {
            var t = this;
            t._execAction("_filter", 0);
            for (var i = 0; i < t._$targets.length; i++) {
                var r = e(t._$targets[i]);
                r.is(t._activeFilter) ? t._$show = t._$show.add(r) : t._$hide = t._$hide.add(r)
            }
            t._execAction("_filter", 1)
        },
        _sort: function() {
            var e = this
              , t = function(e) {
                for (var t = e.slice(), i = t.length, r = i; r--; ) {
                    var o = parseInt(Math.random() * i)
                      , n = t[r];
                    t[r] = t[o],
                    t[o] = n
                }
                return t
            };
            e._execAction("_sort", 0),
            e._startOrder = [];
            for (var i = 0; i < e._$targets.length; i++) {
                var r = e._$targets[i];
                e._startOrder.push(r)
            }
            switch (e._newSort[0].sortBy) {
            case "default":
                e._newOrder = e._origOrder;
                break;
            case "random":
                e._newOrder = t(e._startOrder);
                break;
            case "custom":
                e._newOrder = e._newSort[0].order;
                break;
            default:
                e._newOrder = e._startOrder.concat().sort(function(t, i) {
                    return e._compare(t, i)
                })
            }
            e._execAction("_sort", 1)
        },
        _compare: function(e, t, i) {
            i = i ? i : 0;
            var r = this
              , o = r._newSort[i].order
              , n = function(e) {
                return e.dataset[r._newSort[i].sortBy] || 0
            }
              , a = isNaN(1 * n(e)) ? n(e).toLowerCase() : 1 * n(e)
              , s = isNaN(1 * n(t)) ? n(t).toLowerCase() : 1 * n(t);
            return s > a ? "asc" === o ? -1 : 1 : a > s ? "asc" === o ? 1 : -1 : a === s && r._newSort.length > i + 1 ? r._compare(e, t, i + 1) : 0
        },
        _printSort: function(e) {
            var t = this
              , i = e ? t._startOrder : t._newOrder
              , r = t._$parent[0].querySelectorAll(t.selectors.target)
              , o = r.length ? r[r.length - 1].nextElementSibling : null
              , n = document.createDocumentFragment();
            t._execAction("_printSort", 0, arguments);
            for (var a = 0; a < r.length; a++) {
                var s = r[a]
                  , l = s.nextSibling;
                "absolute" !== s.style.position && (l && "#text" === l.nodeName && t._$parent[0].removeChild(l),
                t._$parent[0].removeChild(s))
            }
            for (var a = 0; a < i.length; a++) {
                var c = i[a];
                if ("default" !== t._newSort[0].sortBy || "desc" !== t._newSort[0].order || e)
                    n.appendChild(c),
                    n.appendChild(document.createTextNode(" "));
                else {
                    var d = n.firstChild;
                    n.insertBefore(c, d),
                    n.insertBefore(document.createTextNode(" "), c)
                }
            }
            o ? t._$parent[0].insertBefore(n, o) : t._$parent[0].appendChild(n),
            t._execAction("_printSort", 1, arguments)
        },
        _parseSort: function(e) {
            for (var t = this, i = "string" == typeof e ? e.split(" ") : [e], r = [], o = 0; o < i.length; o++) {
                var n = "string" == typeof e ? i[o].split(":") : ["custom", i[o]]
                  , a = {
                    sortBy: t._helpers._camelCase(n[0]),
                    order: n[1] || "asc"
                };
                if (r.push(a),
                "default" === a.sortBy || "random" === a.sortBy)
                    break
            }
            return t._execFilter("_parseSort", r, arguments)
        },
        _parseEffects: function() {
            var e = this
              , t = {
                opacity: "",
                transformIn: "",
                transformOut: "",
                filter: ""
            }
              , i = function(t, i, r) {
                if (e.animation.effects.indexOf(t) > -1) {
                    if (i) {
                        var o = e.animation.effects.indexOf(t + "(");
                        if (o > -1) {
                            var n = e.animation.effects.substring(o)
                              , a = /\(([^)]+)\)/.exec(n)
                              , s = a[1];
                            return {
                                val: s
                            }
                        }
                    }
                    return !0
                }
                return !1
            }
              , r = function(e, t) {
                return t ? "-" === e.charAt(0) ? e.substr(1, e.length) : "-" + e : e
            }
              , o = function(e, o) {
                for (var n = [["scale", ".01"], ["translateX", "20px"], ["translateY", "20px"], ["translateZ", "20px"], ["rotateX", "90deg"], ["rotateY", "90deg"], ["rotateZ", "180deg"]], a = 0; a < n.length; a++) {
                    var s = n[a][0]
                      , l = n[a][1]
                      , c = o && "scale" !== s;
                    t[e] += i(s) ? s + "(" + r(i(s, !0).val || l, c) + ") " : ""
                }
            };
            return t.opacity = i("fade") ? i("fade", !0).val || "0" : "1",
            o("transformIn"),
            e.animation.reverseOut ? o("transformOut", !0) : t.transformOut = t.transformIn,
            t.transition = {},
            t.transition = e._getPrefixedCSS("transition", "all " + e.animation.duration + "ms " + e.animation.easing + ", opacity " + e.animation.duration + "ms linear"),
            e.animation.stagger = !!i("stagger"),
            e.animation.staggerDuration = parseInt(i("stagger") && i("stagger", !0).val ? i("stagger", !0).val : 100),
            e._execFilter("_parseEffects", t)
        },
        _buildState: function(e) {
            var t = this
              , i = {};
            return t._execAction("_buildState", 0),
            i = {
                activeFilter: "" === t._activeFilter ? "none" : t._activeFilter,
                activeSort: e && t._newSortString ? t._newSortString : t._activeSort,
                fail: !t._$show.length && "" !== t._activeFilter,
                $targets: t._$targets,
                $show: t._$show,
                $hide: t._$hide,
                totalTargets: t._$targets.length,
                totalShow: t._$show.length,
                totalHide: t._$hide.length,
                display: e && t._newDisplay ? t._newDisplay : t.layout.display
            },
            e ? t._execFilter("_buildState", i) : (t._state = i,
            void t._execAction("_buildState", 1))
        },
        _goMix: function(e) {
            var t = this
              , i = function() {
                t._chrome && 31 === t._chrome && n(t._$parent[0]),
                t._setInter(),
                r()
            }
              , r = function() {
                var e = window.pageYOffset
                  , i = window.pageXOffset;
                document.documentElement.scrollHeight,
                t._getInterMixData(),
                t._setFinal(),
                t._getFinalMixData(),
                window.pageYOffset !== e && window.scrollTo(i, e),
                t._prepTargets(),
                window.requestAnimationFrame ? requestAnimationFrame(o) : setTimeout(function() {
                    o()
                }, 20)
            }
              , o = function() {
                t._animateTargets(),
                0 === t._targetsBound && t._cleanUp()
            }
              , n = function(e) {
                var t = e.parentElement
                  , i = document.createElement("div")
                  , r = document.createDocumentFragment();
                t.insertBefore(i, e),
                r.appendChild(e),
                t.replaceChild(e, i)
            }
              , a = t._buildState(!0);
            t._execAction("_goMix", 0, arguments),
            !t.animation.duration && (e = !1),
            t._mixing = !0,
            t._$container.removeClass(t.layout.containerClassFail),
            "function" == typeof t.callbacks.onMixStart && t.callbacks.onMixStart.call(t._domNode, t._state, a, t),
            t._$container.trigger("mixStart", [t._state, a, t]),
            t._getOrigMixData(),
            e && !t._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(i) : i() : t._cleanUp(),
            t._execAction("_goMix", 1, arguments)
        },
        _getTargetData: function(e, t) {
            var i, r = this;
            e.dataset[t + "PosX"] = e.offsetLeft,
            e.dataset[t + "PosY"] = e.offsetTop,
            r.animation.animateResizeTargets && (i = r._suckMode ? {
                marginBottom: "",
                marginRight: ""
            } : window.getComputedStyle(e),
            e.dataset[t + "MarginBottom"] = parseInt(i.marginBottom),
            e.dataset[t + "MarginRight"] = parseInt(i.marginRight),
            e.dataset[t + "Width"] = e.offsetWidth,
            e.dataset[t + "Height"] = e.offsetHeight)
        },
        _getOrigMixData: function() {
            var e = this
              , t = e._suckMode ? {
                boxSizing: ""
            } : window.getComputedStyle(e._$parent[0])
              , i = t.boxSizing || t[e._vendor + "BoxSizing"];
            e._incPadding = "border-box" === i,
            e._execAction("_getOrigMixData", 0),
            !e._suckMode && (e.effects = e._parseEffects()),
            e._$toHide = e._$hide.filter(":visible"),
            e._$toShow = e._$show.filter(":hidden"),
            e._$pre = e._$targets.filter(":visible"),
            e._startHeight = e._incPadding ? e._$parent.outerHeight() : e._$parent.height();
            for (var r = 0; r < e._$pre.length; r++) {
                var o = e._$pre[r];
                e._getTargetData(o, "orig")
            }
            e._execAction("_getOrigMixData", 1)
        },
        _setInter: function() {
            var e = this;
            e._execAction("_setInter", 0),
            e._changingLayout && e.animation.animateChangeLayout ? (e._$toShow.css("display", e._newDisplay),
            e._changingClass && e._$container.removeClass(e.layout.containerClass).addClass(e._newClass)) : e._$toShow.css("display", e.layout.display),
            e._execAction("_setInter", 1)
        },
        _getInterMixData: function() {
            var e = this;
            e._execAction("_getInterMixData", 0);
            for (var t = 0; t < e._$toShow.length; t++) {
                var i = e._$toShow[t];
                e._getTargetData(i, "inter")
            }
            for (var t = 0; t < e._$pre.length; t++) {
                var i = e._$pre[t];
                e._getTargetData(i, "inter")
            }
            e._execAction("_getInterMixData", 1)
        },
        _setFinal: function() {
            var e = this;
            e._execAction("_setFinal", 0),
            e._sorting && e._printSort(),
            e._$toHide.removeStyle("display"),
            e._changingLayout && e.animation.animateChangeLayout && e._$pre.css("display", e._newDisplay),
            e._execAction("_setFinal", 1)
        },
        _getFinalMixData: function() {
            var e = this;
            e._execAction("_getFinalMixData", 0);
            for (var t = 0; t < e._$toShow.length; t++) {
                var i = e._$toShow[t];
                e._getTargetData(i, "final")
            }
            for (var t = 0; t < e._$pre.length; t++) {
                var i = e._$pre[t];
                e._getTargetData(i, "final")
            }
            e._newHeight = e._incPadding ? e._$parent.outerHeight() : e._$parent.height(),
            e._sorting && e._printSort(!0),
            e._$toShow.removeStyle("display"),
            e._$pre.css("display", e.layout.display),
            e._changingClass && e.animation.animateChangeLayout && e._$container.removeClass(e._newClass).addClass(e.layout.containerClass),
            e._execAction("_getFinalMixData", 1)
        },
        _prepTargets: function() {
            var t = this
              , i = {
                _in: t._getPrefixedCSS("transform", t.effects.transformIn),
                _out: t._getPrefixedCSS("transform", t.effects.transformOut)
            };
            t._execAction("_prepTargets", 0),
            t.animation.animateResizeContainer && t._$parent.css("height", t._startHeight + "px");
            for (var r = 0; r < t._$toShow.length; r++) {
                var o = t._$toShow[r]
                  , n = e(o);
                o.style.opacity = t.effects.opacity,
                o.style.display = t._changingLayout && t.animation.animateChangeLayout ? t._newDisplay : t.layout.display,
                n.css(i._in),
                t.animation.animateResizeTargets && (o.style.width = o.dataset.finalWidth + "px",
                o.style.height = o.dataset.finalHeight + "px",
                o.style.marginRight = -(o.dataset.finalWidth - o.dataset.interWidth) + 1 * o.dataset.finalMarginRight + "px",
                o.style.marginBottom = -(o.dataset.finalHeight - o.dataset.interHeight) + 1 * o.dataset.finalMarginBottom + "px")
            }
            for (var r = 0; r < t._$pre.length; r++) {
                var o = t._$pre[r]
                  , n = e(o)
                  , a = {
                    x: o.dataset.origPosX - o.dataset.interPosX,
                    y: o.dataset.origPosY - o.dataset.interPosY
                }
                  , i = t._getPrefixedCSS("transform", "translate(" + a.x + "px," + a.y + "px)");
                n.css(i),
                t.animation.animateResizeTargets && (o.style.width = o.dataset.origWidth + "px",
                o.style.height = o.dataset.origHeight + "px",
                o.dataset.origWidth - o.dataset.finalWidth && (o.style.marginRight = -(o.dataset.origWidth - o.dataset.interWidth) + 1 * o.dataset.origMarginRight + "px"),
                o.dataset.origHeight - o.dataset.finalHeight && (o.style.marginBottom = -(o.dataset.origHeight - o.dataset.interHeight) + 1 * o.dataset.origMarginBottom + "px"))
            }
            t._execAction("_prepTargets", 1)
        },
        _animateTargets: function() {
            var t = this;
            t._execAction("_animateTargets", 0),
            t._targetsDone = 0,
            t._targetsBound = 0,
            t._$parent.css(t._getPrefixedCSS("perspective", t.animation.perspectiveDistance + "px")).css(t._getPrefixedCSS("perspective-origin", t.animation.perspectiveOrigin)),
            t.animation.animateResizeContainer && t._$parent.css(t._getPrefixedCSS("transition", "height " + t.animation.duration + "ms ease")).css("height", t._newHeight + "px");
            for (var i = 0; i < t._$toShow.length; i++) {
                var r = t._$toShow[i]
                  , o = e(r)
                  , n = {
                    x: r.dataset.finalPosX - r.dataset.interPosX,
                    y: r.dataset.finalPosY - r.dataset.interPosY
                }
                  , a = t._getDelay(i)
                  , s = {};
                r.style.opacity = "";
                for (var l = 0; 2 > l; l++) {
                    var c = 0 === l ? c = t._prefix : "";
                    t._ff && t._ff <= 20 && (s[c + "transition-property"] = "all",
                    s[c + "transition-timing-function"] = t.animation.easing + "ms",
                    s[c + "transition-duration"] = t.animation.duration + "ms"),
                    s[c + "transition-delay"] = a + "ms",
                    s[c + "transform"] = "translate(" + n.x + "px," + n.y + "px)"
                }
                (t.effects.transform || t.effects.opacity) && t._bindTargetDone(o),
                t._ff && t._ff <= 20 ? o.css(s) : o.css(t.effects.transition).css(s)
            }
            for (var i = 0; i < t._$pre.length; i++) {
                var r = t._$pre[i]
                  , o = e(r)
                  , n = {
                    x: r.dataset.finalPosX - r.dataset.interPosX,
                    y: r.dataset.finalPosY - r.dataset.interPosY
                }
                  , a = t._getDelay(i);
                (r.dataset.finalPosX !== r.dataset.origPosX || r.dataset.finalPosY !== r.dataset.origPosY) && t._bindTargetDone(o),
                o.css(t._getPrefixedCSS("transition", "all " + t.animation.duration + "ms " + t.animation.easing + " " + a + "ms")),
                o.css(t._getPrefixedCSS("transform", "translate(" + n.x + "px," + n.y + "px)")),
                t.animation.animateResizeTargets && (r.dataset.origWidth - r.dataset.finalWidth && 1 * r.dataset.finalWidth && (r.style.width = r.dataset.finalWidth + "px",
                r.style.marginRight = -(r.dataset.finalWidth - r.dataset.interWidth) + 1 * r.dataset.finalMarginRight + "px"),
                r.dataset.origHeight - r.dataset.finalHeight && 1 * r.dataset.finalHeight && (r.style.height = r.dataset.finalHeight + "px",
                r.style.marginBottom = -(r.dataset.finalHeight - r.dataset.interHeight) + 1 * r.dataset.finalMarginBottom + "px"))
            }
            t._changingClass && t._$container.removeClass(t.layout.containerClass).addClass(t._newClass);
            for (var i = 0; i < t._$toHide.length; i++) {
                for (var r = t._$toHide[i], o = e(r), a = t._getDelay(i), d = {}, l = 0; 2 > l; l++) {
                    var c = 0 === l ? c = t._prefix : "";
                    d[c + "transition-delay"] = a + "ms",
                    d[c + "transform"] = t.effects.transformOut,
                    d.opacity = t.effects.opacity
                }
                o.css(t.effects.transition).css(d),
                (t.effects.transform || t.effects.opacity) && t._bindTargetDone(o)
            }
            t._execAction("_animateTargets", 1)
        },
        _bindTargetDone: function(t) {
            var i = this
              , r = t[0];
            i._execAction("_bindTargetDone", 0, arguments),
            r.dataset.bound || (r.dataset.bound = !0,
            i._targetsBound++,
            t.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function(o) {
                (o.originalEvent.propertyName.indexOf("transform") > -1 || o.originalEvent.propertyName.indexOf("opacity") > -1) && e(o.originalEvent.target).is(i.selectors.target) && (t.off(".mixItUp"),
                r.dataset.bound = "",
                i._targetDone())
            })),
            i._execAction("_bindTargetDone", 1, arguments)
        },
        _targetDone: function() {
            var e = this;
            e._execAction("_targetDone", 0),
            e._targetsDone++,
            e._targetsDone === e._targetsBound && e._cleanUp(),
            e._execAction("_targetDone", 1)
        },
        _cleanUp: function() {
            var t = this
              , i = t.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity"
              , r = function() {
                t._$targets.removeStyle("transition", t._prefix)
            };
            t._execAction("_cleanUp", 0),
            t._changingLayout ? t._$show.css("display", t._newDisplay) : t._$show.css("display", t.layout.display),
            t._$targets.css(t._brake),
            t._$targets.removeStyle(i, t._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),
            t._$hide.removeStyle("display"),
            t._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", t._prefix),
            t._sorting && (t._printSort(),
            t._activeSort = t._newSortString,
            t._sorting = !1),
            t._changingLayout && (t._changingDisplay && (t.layout.display = t._newDisplay,
            t._changingDisplay = !1),
            t._changingClass && (t._$parent.removeClass(t.layout.containerClass).addClass(t._newClass),
            t.layout.containerClass = t._newClass,
            t._changingClass = !1),
            t._changingLayout = !1),
            t._refresh(),
            t._buildState(),
            t._state.fail && t._$container.addClass(t.layout.containerClassFail),
            t._$show = e(),
            t._$hide = e(),
            window.requestAnimationFrame && requestAnimationFrame(r),
            t._mixing = !1,
            "function" == typeof t.callbacks._user && t.callbacks._user.call(t._domNode, t._state, t),
            "function" == typeof t.callbacks.onMixEnd && t.callbacks.onMixEnd.call(t._domNode, t._state, t),
            t._$container.trigger("mixEnd", [t._state, t]),
            t._state.fail && ("function" == typeof t.callbacks.onMixFail && t.callbacks.onMixFail.call(t._domNode, t._state, t),
            t._$container.trigger("mixFail", [t._state, t])),
            t._loading && ("function" == typeof t.callbacks.onMixLoad && t.callbacks.onMixLoad.call(t._domNode, t._state, t),
            t._$container.trigger("mixLoad", [t._state, t])),
            t._queue.length && (t._execAction("_queue", 0),
            t.multiMix(t._queue[0][0], t._queue[0][1], t._queue[0][2]),
            t._queue.splice(0, 1)),
            t._execAction("_cleanUp", 1),
            t._loading = !1
        },
        _getPrefixedCSS: function(e, t, i) {
            var r = this
              , o = {}
              , n = ""
              , a = -1;
            for (a = 0; 2 > a; a++)
                n = 0 === a ? r._prefix : "",
                i ? o[n + e] = n + t : o[n + e] = t;
            return r._execFilter("_getPrefixedCSS", o, arguments)
        },
        _getDelay: function(e) {
            var t = this
              , i = "function" == typeof t.animation.staggerSequence ? t.animation.staggerSequence.call(t._domNode, e, t._state) : e
              , r = t.animation.stagger ? i * t.animation.staggerDuration : 0;
            return t._execFilter("_getDelay", r, arguments)
        },
        _parseMultiMixArgs: function(e) {
            for (var t = this, i = {
                command: null ,
                animate: t.animation.enable,
                callback: null
            }, r = 0; r < e.length; r++) {
                var o = e[r];
                null !== o && ("object" == typeof o || "string" == typeof o ? i.command = o : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o))
            }
            return t._execFilter("_parseMultiMixArgs", i, arguments)
        },
        _parseInsertArgs: function(t) {
            for (var i = this, r = {
                index: 0,
                $object: e(),
                multiMix: {
                    filter: i._state.activeFilter
                },
                callback: null
            }, o = 0; o < t.length; o++) {
                var n = t[o];
                "number" == typeof n ? r.index = n : "object" == typeof n && n instanceof e ? r.$object = n : "object" == typeof n && i._helpers._isElement(n) ? r.$object = e(n) : "object" == typeof n && null !== n ? r.multiMix = n : "boolean" != typeof n || n ? "function" == typeof n && (r.callback = n) : r.multiMix = !1
            }
            return i._execFilter("_parseInsertArgs", r, arguments)
        },
        _execAction: function(e, t, i) {
            var r = this
              , o = t ? "post" : "pre";
            if (!r._actions.isEmptyObject && r._actions.hasOwnProperty(e))
                for (var n in r._actions[e][o])
                    r._actions[e][o][n].call(r, i)
        },
        _execFilter: function(e, t, i) {
            var r = this;
            if (r._filters.isEmptyObject || !r._filters.hasOwnProperty(e))
                return t;
            for (var o in r._filters[e])
                return r._filters[e][o].call(r, i)
        },
        _helpers: {
            _camelCase: function(e) {
                return e.replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            },
            _isElement: function(e) {
                return window.HTMLElement ? e instanceof HTMLElement : null !== e && 1 === e.nodeType && "string" === e.nodeName
            }
        },
        isMixing: function() {
            var e = this;
            return e._execFilter("isMixing", e._mixing)
        },
        filter: function() {
            var e = this
              , t = e._parseMultiMixArgs(arguments);
            e._clicking && (e._toggleString = ""),
            e.multiMix({
                filter: t.command
            }, t.animate, t.callback)
        },
        sort: function() {
            var e = this
              , t = e._parseMultiMixArgs(arguments);
            e.multiMix({
                sort: t.command
            }, t.animate, t.callback)
        },
        changeLayout: function() {
            var e = this
              , t = e._parseMultiMixArgs(arguments);
            e.multiMix({
                changeLayout: t.command
            }, t.animate, t.callback)
        },
        multiMix: function() {
            var e = this
              , i = e._parseMultiMixArgs(arguments);
            if (e._execAction("multiMix", 0, arguments),
            e._mixing)
                e.animation.queue && e._queue.length < e.animation.queueLimit ? (e._queue.push(arguments),
                e.controls.enable && !e._clicking && e._updateControls(i.command),
                e._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof e.callbacks.onMixBusy && e.callbacks.onMixBusy.call(e._domNode, e._state, e),
                e._$container.trigger("mixBusy", [e._state, e]),
                e._execAction("multiMixBusy", 1, arguments));
            else {
                e.controls.enable && !e._clicking && (e.controls.toggleFilterButtons && e._buildToggleArray(),
                e._updateControls(i.command, e.controls.toggleFilterButtons)),
                e._queue.length < 2 && (e._clicking = !1),
                delete e.callbacks._user,
                i.callback && (e.callbacks._user = i.callback);
                var r = i.command.sort
                  , o = i.command.filter
                  , n = i.command.changeLayout;
                e._refresh(),
                r && (e._newSort = e._parseSort(r),
                e._newSortString = r,
                e._sorting = !0,
                e._sort()),
                o !== t && (o = "all" === o ? e.selectors.target : o,
                e._activeFilter = o),
                e._filter(),
                n && (e._newDisplay = "string" == typeof n ? n : n.display || e.layout.display,
                e._newClass = n.containerClass || "",
                (e._newDisplay !== e.layout.display || e._newClass !== e.layout.containerClass) && (e._changingLayout = !0,
                e._changingClass = e._newClass !== e.layout.containerClass,
                e._changingDisplay = e._newDisplay !== e.layout.display)),
                e._$targets.css(e._brake),
                e._goMix(i.animate ^ e.animation.enable ? i.animate : e.animation.enable),
                e._execAction("multiMix", 1, arguments)
            }
        },
        insert: function() {
            var e = this
              , t = e._parseInsertArgs(arguments)
              , i = "function" == typeof t.callback ? t.callback : null
              , r = document.createDocumentFragment()
              , o = function() {
                return e._refresh(),
                e._$targets.length ? t.index < e._$targets.length || !e._$targets.length ? e._$targets[t.index] : e._$targets[e._$targets.length - 1].nextElementSibling : e._$parent[0].children[0]
            }();
            if (e._execAction("insert", 0, arguments),
            t.$object) {
                for (var n = 0; n < t.$object.length; n++) {
                    var a = t.$object[n];
                    r.appendChild(a),
                    r.appendChild(document.createTextNode(" "))
                }
                e._$parent[0].insertBefore(r, o)
            }
            e._execAction("insert", 1, arguments),
            "object" == typeof t.multiMix && e.multiMix(t.multiMix, i)
        },
        prepend: function() {
            var e = this
              , t = e._parseInsertArgs(arguments);
            e.insert(0, t.$object, t.multiMix, t.callback)
        },
        append: function() {
            var e = this
              , t = e._parseInsertArgs(arguments);
            e.insert(e._state.totalTargets, t.$object, t.multiMix, t.callback)
        },
        getOption: function(e) {
            var i = this
              , r = function(e, i) {
                for (var r = i.split("."), o = r.pop(), n = r.length, a = 1, s = r[0] || i; (e = e[s]) && n > a; )
                    s = r[a],
                    a++;
                return e !== t ? e[o] !== t ? e[o] : e : void 0
            };
            return e ? i._execFilter("getOption", r(i, e), arguments) : i
        },
        setOptions: function(t) {
            var i = this;
            i._execAction("setOptions", 0, arguments),
            "object" == typeof t && e.extend(!0, i, t),
            i._execAction("setOptions", 1, arguments)
        },
        getState: function() {
            var e = this;
            return e._execFilter("getState", e._state, e)
        },
        forceRefresh: function() {
            var e = this;
            e._refresh(!1, !0)
        },
        destroy: function(t) {
            var i = this
              , r = e.MixItUp.prototype._bound._filter
              , o = e.MixItUp.prototype._bound._sort;
            i._execAction("destroy", 0, arguments),
            i._$body.add(e(i.selectors.sort)).add(e(i.selectors.filter)).off(".mixItUp");
            for (var n = 0; n < i._$targets.length; n++) {
                var a = i._$targets[n];
                t && (a.style.display = ""),
                delete a.mixParent
            }
            i._execAction("destroy", 1, arguments),
            r[i.selectors.filter] && r[i.selectors.filter] > 1 ? r[i.selectors.filter]-- : 1 === r[i.selectors.filter] && delete r[i.selectors.filter],
            o[i.selectors.sort] && o[i.selectors.sort] > 1 ? o[i.selectors.sort]-- : 1 === o[i.selectors.sort] && delete o[i.selectors.sort],
            delete e.MixItUp.prototype._instances[i._id]
        }
    },
    e.fn.mixItUp = function() {
        var i, r = arguments, o = [], n = function(t, i) {
            var r = new e.MixItUp
              , o = function() {
                return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
            };
            r._execAction("_instantiate", 0, arguments),
            t.id = t.id ? t.id : "MixItUp" + o(),
            r._instances[t.id] || (r._instances[t.id] = r,
            r._init(t, i)),
            r._execAction("_instantiate", 1, arguments)
        };
        return i = this.each(function() {
            if (r && "string" == typeof r[0]) {
                var i = e.MixItUp.prototype._instances[this.id];
                if ("isLoaded" === r[0])
                    o.push(!!i);
                else {
                    var a = i[r[0]](r[1], r[2], r[3]);
                    a !== t && o.push(a)
                }
            } else
                n(this, r[0])
        }),
        o.length ? o.length > 1 ? o : o[0] : i
    }
    ,
    e.fn.removeStyle = function(i, r) {
        return r = r ? r : "",
        this.each(function() {
            for (var o = this, n = i.split(" "), a = 0; a < n.length; a++)
                for (var s = 0; 4 > s; s++) {
                    switch (s) {
                    case 0:
                        var l = n[a];
                        break;
                    case 1:
                        var l = e.MixItUp.prototype._helpers._camelCase(l);
                        break;
                    case 2:
                        var l = r + n[a];
                        break;
                    case 3:
                        var l = e.MixItUp.prototype._helpers._camelCase(r + n[a])
                    }
                    if (o.style[l] !== t && "unknown" != typeof o.style[l] && o.style[l].length > 0 && (o.style[l] = ""),
                    !r && 1 === s)
                        break
                }
            o.attributes && o.attributes.style && o.attributes.style !== t && "" === o.attributes.style.value && o.attributes.removeNamedItem("style")
        })
    }
}(jQuery),
function(e) {
    e.fn.fitText = function(t, i) {
        var r = t || 1
          , o = e.extend({
            minFontSize: Number.NEGATIVE_INFINITY,
            maxFontSize: Number.POSITIVE_INFINITY
        }, i);
        return this.each(function() {
            var t = e(this)
              , i = function() {
                t.css("font-size", Math.max(Math.min(t.width() / (10 * r), parseFloat(o.maxFontSize)), parseFloat(o.minFontSize)))
            };
            i(),
            e(window).on("resize", i)
        })
    }
}(jQuery),
function(e) {
    function t(t, i, r, o) {
        var n = t.text().split(i)
          , a = "";
        n.length && (e(n).each(function(e, t) {
            a += '<span class="' + r + (e + 1) + '">' + t + "</span>" + o
        }),
        t.empty().append(a))
    }
    var i = {
        init: function() {
            return this.each(function() {
                t(e(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                t(e(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var i = "eefec303079ad17405c889e092e105b0";
                t(e(this).children("br").replaceWith(i).end(), i, "line", "")
            })
        }
    };
    e.fn.lettering = function(t) {
        return t && i[t] ? i[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (e.error("Method " + t + " does not exist on jQuery.lettering"),
        this) : i.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return /In/.test(t) || e.inArray(t, e.fn.textillate.defaults.inEffects) >= 0
    }
    function i(t) {
        return /Out/.test(t) || e.inArray(t, e.fn.textillate.defaults.outEffects) >= 0
    }
    function r(e) {
        return "true" !== e && "false" !== e ? e : "true" === e
    }
    function o(t) {
        var i = t.attributes || []
          , o = {};
        return i.length ? (e.each(i, function(e, t) {
            var i = t.nodeName.replace(/delayscale/, "delayScale");
            /^data-in-*/.test(i) ? (o.in = o.in || {},
            o.in[i.replace(/data-in-/, "")] = r(t.nodeValue)) : /^data-out-*/.test(i) ? (o.out = o.out || {},
            o.out[i.replace(/data-out-/, "")] = r(t.nodeValue)) : /^data-*/.test(i) && (o[i.replace(/data-/, "")] = r(t.nodeValue))
        }),
        o) : o
    }
    function n(e) {
        for (var t, i, r = e.length; r; t = parseInt(Math.random() * r),
        i = e[--r],
        e[r] = e[t],
        e[t] = i)
            ;
        return e
    }
    function a(e, t, i) {
        e.addClass("animated " + t).css("visibility", "visible").show(),
        e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            e.removeClass("animated " + t),
            i && i()
        })
    }
    function s(r, o, s) {
        var l = r.length;
        return l ? (o.shuffle && (r = n(r)),
        o.reverse && (r = r.toArray().reverse()),
        void e.each(r, function(r, n) {
            function c() {
                t(o.effect) ? d.css("visibility", "visible") : i(o.effect) && d.css("visibility", "hidden"),
                l -= 1,
                !l && s && s()
            }
            var d = e(n)
              , u = o.sync ? o.delay : o.delay * r * o.delayScale;
            d.text() ? setTimeout(function() {
                a(d, o.effect, c)
            }, u) : c()
        })) : void (s && s())
    }
    var l = function(r, n) {
        var a = this
          , l = e(r);
        a.init = function() {
            a.$texts = l.find(n.selector),
            a.$texts.length || (a.$texts = e('<ul class="texts"><li>' + l.html() + "</li></ul>"),
            l.html(a.$texts)),
            a.$texts.hide(),
            a.$current = e("<span>").html(a.$texts.find(":first-child").html()).prependTo(l),
            t(n.in.effect) ? a.$current.css("visibility", "hidden") : i(n.out.effect) && a.$current.css("visibility", "visible"),
            a.setOptions(n),
            a.timeoutRun = null ,
            setTimeout(function() {
                a.options.autoStart && a.start()
            }, a.options.initialDelay)
        }
        ,
        a.setOptions = function(e) {
            a.options = e
        }
        ,
        a.triggerEvent = function(t) {
            var i = e.Event(t + ".tlt");
            return l.trigger(i, a),
            i
        }
        ,
        a.in = function(r, n) {
            r = r || 0;
            var c, d = a.$texts.find(":nth-child(" + ((r || 0) + 1) + ")"), u = e.extend(!0, {}, a.options, d.length ? o(d[0]) : {});
            d.addClass("current"),
            a.triggerEvent("inAnimationBegin"),
            l.attr("data-active", d.data("id")),
            a.$current.html(d.html()).lettering("words"),
            "char" == a.options.type && a.$current.find('[class^="word"]').css({
                display: "inline-block",
                "-webkit-transform": "translate3d(0,0,0)",
                "-moz-transform": "translate3d(0,0,0)",
                "-o-transform": "translate3d(0,0,0)",
                transform: "translate3d(0,0,0)"
            }).each(function() {
                e(this).lettering()
            }),
            c = a.$current.find('[class^="' + a.options.type + '"]').css("display", "inline-block"),
            t(u.in.effect) ? c.css("visibility", "hidden") : i(u.in.effect) && c.css("visibility", "visible"),
            a.currentIndex = r,
            s(c, u.in, function() {
                a.triggerEvent("inAnimationEnd"),
                u.in.callback && u.in.callback(),
                n && n(a)
            })
        }
        ,
        a.out = function(t) {
            var i = a.$texts.find(":nth-child(" + ((a.currentIndex || 0) + 1) + ")")
              , r = a.$current.find('[class^="' + a.options.type + '"]')
              , n = e.extend(!0, {}, a.options, i.length ? o(i[0]) : {});
            a.triggerEvent("outAnimationBegin"),
            s(r, n.out, function() {
                i.removeClass("current"),
                a.triggerEvent("outAnimationEnd"),
                l.removeAttr("data-active"),
                n.out.callback && n.out.callback(),
                t && t(a)
            })
        }
        ,
        a.start = function(e) {
            setTimeout(function() {
                a.triggerEvent("start"),
                function e(t) {
                    a.in(t, function() {
                        var i = a.$texts.children().length;
                        t += 1,
                        !a.options.loop && t >= i ? (a.options.callback && a.options.callback(),
                        a.triggerEvent("end")) : (t %= i,
                        a.timeoutRun = setTimeout(function() {
                            a.out(function() {
                                e(t)
                            })
                        }, a.options.minDisplayTime))
                    })
                }(e || 0)
            }, a.options.initialDelay)
        }
        ,
        a.stop = function() {
            a.timeoutRun && (clearInterval(a.timeoutRun),
            a.timeoutRun = null )
        }
        ,
        a.init()
    };
    e.fn.textillate = function(t, i) {
        return this.each(function() {
            var r = e(this)
              , n = r.data("textillate")
              , a = e.extend(!0, {}, e.fn.textillate.defaults, o(this), "object" == typeof t && t);
            n ? "string" == typeof t ? n[t].apply(n, [].concat(i)) : n.setOptions.call(n, a) : r.data("textillate", n = new l(this,a))
        })
    }
    ,
    e.fn.textillate.defaults = {
        selector: ".texts",
        loop: !1,
        minDisplayTime: 2e3,
        initialDelay: 0,
        in: {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function() {}
        },
        out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function() {}
        },
        autoStart: !0,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function() {},
        type: "char"
    }
}(jQuery),
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t = -1
      , i = -1
      , r = function(e) {
        return parseFloat(e) || 0
    }
      , o = function(t) {
        var i = 1
          , o = e(t)
          , n = null
          , a = [];
        return o.each(function() {
            var t = e(this)
              , o = t.offset().top - r(t.css("margin-top"))
              , s = a.length > 0 ? a[a.length - 1] : null ;
            null === s ? a.push(t) : Math.floor(Math.abs(n - o)) <= i ? a[a.length - 1] = s.add(t) : a.push(t),
            n = o
        }),
        a
    }
      , n = function(t) {
        var i = {
            byRow: !0,
            property: "height",
            target: null ,
            remove: !1
        };
        return "object" == typeof t ? e.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0),
        i)
    }
      , a = e.fn.matchHeight = function(t) {
        var i = n(t);
        if (i.remove) {
            var r = this;
            return this.css(i.property, ""),
            e.each(a._groups, function(e, t) {
                t.elements = t.elements.not(r)
            }),
            this
        }
        return this.length <= 1 && !i.target ? this : (a._groups.push({
            elements: this,
            options: i
        }),
        a._apply(this, i),
        this)
    }
    ;
    a.version = "master",
    a._groups = [],
    a._throttle = 80,
    a._maintainScroll = !1,
    a._beforeUpdate = null ,
    a._afterUpdate = null ,
    a._rows = o,
    a._parse = r,
    a._parseOptions = n,
    a._apply = function(t, i) {
        var s = n(i)
          , l = e(t)
          , c = [l]
          , d = e(window).scrollTop()
          , u = e("html").outerHeight(!0)
          , p = l.parents().filter(":hidden");
        return p.each(function() {
            var t = e(this);
            t.data("style-cache", t.attr("style"))
        }),
        p.css("display", "block"),
        s.byRow && !s.target && (l.each(function() {
            var t = e(this)
              , i = t.css("display");
            "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"),
            t.data("style-cache", t.attr("style")),
            t.css({
                display: i,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }),
        c = o(l),
        l.each(function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || "")
        })),
        e.each(c, function(t, i) {
            var o = e(i)
              , n = 0;
            if (s.target)
                n = s.target.outerHeight(!1);
            else {
                if (s.byRow && o.length <= 1)
                    return void o.css(s.property, "");
                o.each(function() {
                    var t = e(this)
                      , i = t.attr("style")
                      , r = t.css("display");
                    "inline-block" !== r && "flex" !== r && "inline-flex" !== r && (r = "block");
                    var o = {
                        display: r
                    };
                    o[s.property] = "",
                    t.css(o),
                    t.outerHeight(!1) > n && (n = t.outerHeight(!1)),
                    i ? t.attr("style", i) : t.css("display", "")
                })
            }
            o.each(function() {
                var t = e(this)
                  , i = 0;
                s.target && t.is(s.target) || ("border-box" !== t.css("box-sizing") && (i += r(t.css("border-top-width")) + r(t.css("border-bottom-width")),
                i += r(t.css("padding-top")) + r(t.css("padding-bottom"))),
                t.css(s.property, n - i + "px"))
            })
        }),
        p.each(function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || null )
        }),
        a._maintainScroll && e(window).scrollTop(d / u * e("html").outerHeight(!0)),
        this
    }
    ,
    a._applyDataApi = function() {
        var t = {};
        e("[data-match-height], [data-mh]").each(function() {
            var i = e(this)
              , r = i.attr("data-mh") || i.attr("data-match-height");
            r in t ? t[r] = t[r].add(i) : t[r] = i
        }),
        e.each(t, function() {
            this.matchHeight(!0)
        })
    }
    ;
    var s = function(t) {
        a._beforeUpdate && a._beforeUpdate(t, a._groups),
        e.each(a._groups, function() {
            a._apply(this.elements, this.options)
        }),
        a._afterUpdate && a._afterUpdate(t, a._groups)
    };
    a._update = function(r, o) {
        if (o && "resize" === o.type) {
            var n = e(window).width();
            if (n === t)
                return;
            t = n
        }
        r ? -1 === i && (i = setTimeout(function() {
            s(o),
            i = -1
        }, a._throttle)) : s(o)
    }
    ,
    e(a._applyDataApi),
    e(window).bind("load", function(e) {
        a._update(!1, e)
    }),
    e(window).bind("resize orientationchange", function(e) {
        a._update(!0, e)
    })
}),
!function(e, t) {
    "use strict";
    function i(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            if (i)
                for (var r in i)
                    i.hasOwnProperty(r) && ("object" == typeof i[r] ? deepExtend(e[r], i[r]) : e[r] = i[r])
        }
        return e
    }
    function r(r, a) {
        function s() {
            if (S) {
                m = t.createElement("canvas"),
                m.className = "pg-canvas",
                m.style.display = "block",
                r.insertBefore(m, r.firstChild),
                v = m.getContext("2d"),
                l();
                for (var i = Math.round(m.width * m.height / a.density), o = 0; i > o; o++) {
                    var n = new f;
                    n.setStackPos(o),
                    _.push(n)
                }
                e.addEventListener("resize", function() {
                    d()
                }, !1),
                t.addEventListener("mousemove", function(e) {
                    k = e.pageX,
                    Y = e.pageY
                }, !1),
                j && !C && e.addEventListener("deviceorientation", function() {
                    A = Math.min(Math.max(-event.beta, -30), 30),
                    Q = Math.min(Math.max(-event.gamma, -30), 30)
                }, !0),
                c(),
                g("onInit")
            }
        }
        function l() {
            m.width = r.offsetWidth,
            m.height = r.offsetHeight,
            v.fillStyle = a.dotColor,
            v.strokeStyle = a.lineColor,
            v.lineWidth = a.lineWidth
        }
        function c() {
            if (S) {
                w = e.innerWidth,
                b = e.innerHeight,
                v.clearRect(0, 0, m.width, m.height);
                for (var t = 0; t < _.length; t++)
                    _[t].updatePosition();
                for (var t = 0; t < _.length; t++)
                    _[t].draw();
                $ || (T = requestAnimationFrame(c))
            }
        }
        function d() {
            l();
            for (var e = r.offsetWidth, t = r.offsetHeight, i = _.length - 1; i >= 0; i--)
                (_[i].position.x > e || _[i].position.y > t) && _.splice(i, 1);
            var o = Math.round(m.width * m.height / a.density);
            if (o > _.length)
                for (; o > _.length; ) {
                    var n = new f;
                    _.push(n)
                }
            else
                o < _.length && _.splice(o);
            for (i = _.length - 1; i >= 0; i--)
                _[i].setStackPos(i)
        }
        function u() {
            $ = !0
        }
        function p() {
            $ = !1,
            c()
        }
        function f() {
            switch (this.stackPos,
            this.active = !0,
            this.layer = Math.ceil(3 * Math.random()),
            this.parallaxOffsetX = 0,
            this.parallaxOffsetY = 0,
            this.position = {
                x: Math.ceil(Math.random() * m.width),
                y: Math.ceil(Math.random() * m.height)
            },
            this.speed = {},
            a.directionX) {
            case "left":
                this.speed.x = +(-a.maxSpeedX + Math.random() * a.maxSpeedX - a.minSpeedX).toFixed(2);
                break;
            case "right":
                this.speed.x = +(Math.random() * a.maxSpeedX + a.minSpeedX).toFixed(2);
                break;
            default:
                this.speed.x = +(-a.maxSpeedX / 2 + Math.random() * a.maxSpeedX).toFixed(2),
                this.speed.x += this.speed.x > 0 ? a.minSpeedX : -a.minSpeedX
            }
            switch (a.directionY) {
            case "up":
                this.speed.y = +(-a.maxSpeedY + Math.random() * a.maxSpeedY - a.minSpeedY).toFixed(2);
                break;
            case "down":
                this.speed.y = +(Math.random() * a.maxSpeedY + a.minSpeedY).toFixed(2);
                break;
            default:
                this.speed.y = +(-a.maxSpeedY / 2 + Math.random() * a.maxSpeedY).toFixed(2),
                this.speed.x += this.speed.y > 0 ? a.minSpeedY : -a.minSpeedY
            }
        }
        function h(e, t) {
            return t ? void (a[e] = t) : a[e]
        }
        function y() {
            console.log("destroy"),
            m.parentNode.removeChild(m),
            g("onDestroy"),
            n && n(r).removeData("plugin_" + o)
        }
        function g(e) {
            void 0 !== a[e] && a[e].call(r)
        }
        var m, v, T, w, b, P, x, S = !!t.createElement("canvas").getContext, _ = [], k = 0, Y = 0, C = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), j = !!e.DeviceOrientationEvent, Q = 0, A = 0, $ = !1;
        return a = i({}, e[o].defaults, a),
        f.prototype.draw = function() {
            v.beginPath(),
            v.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, a.particleRadius / 2, 0, 2 * Math.PI, !0),
            v.closePath(),
            v.fill(),
            v.beginPath();
            for (var e = _.length - 1; e > this.stackPos; e--) {
                var t = _[e]
                  , i = this.position.x - t.position.x
                  , r = this.position.y - t.position.y
                  , o = Math.sqrt(i * i + r * r).toFixed(2);
                o < a.proximity && (v.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY),
                a.curvedLines ? v.quadraticCurveTo(Math.max(t.position.x, t.position.x), Math.min(t.position.y, t.position.y), t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY) : v.lineTo(t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY))
            }
            v.stroke(),
            v.closePath()
        }
        ,
        f.prototype.updatePosition = function() {
            if (a.parallax) {
                if (j && !C) {
                    var e = (w - 0) / 60;
                    P = (Q - -30) * e + 0;
                    var t = (b - 0) / 60;
                    x = (A - -30) * t + 0
                } else
                    P = k,
                    x = Y;
                this.parallaxTargX = (P - w / 2) / (a.parallaxMultiplier * this.layer),
                this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10,
                this.parallaxTargY = (x - b / 2) / (a.parallaxMultiplier * this.layer),
                this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
            }
            var i = r.offsetWidth
              , o = r.offsetHeight;
            switch (a.directionX) {
            case "left":
                this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = i - this.parallaxOffsetX);
                break;
            case "right":
                this.position.x + this.speed.x + this.parallaxOffsetX > i && (this.position.x = 0 - this.parallaxOffsetX);
                break;
            default:
                (this.position.x + this.speed.x + this.parallaxOffsetX > i || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
            }
            switch (a.directionY) {
            case "up":
                this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = o - this.parallaxOffsetY);
                break;
            case "down":
                this.position.y + this.speed.y + this.parallaxOffsetY > o && (this.position.y = 0 - this.parallaxOffsetY);
                break;
            default:
                (this.position.y + this.speed.y + this.parallaxOffsetY > o || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
            }
            this.position.x += this.speed.x,
            this.position.y += this.speed.y
        }
        ,
        f.prototype.setStackPos = function(e) {
            this.stackPos = e
        }
        ,
        s(),
        {
            option: h,
            destroy: y,
            start: p,
            pause: u
        }
    }
    var o = "particleground"
      , n = e.jQuery;
    e[o] = function(e, t) {
        return new r(e,t)
    }
    ,
    e[o].defaults = {
        minSpeedX: .1,
        maxSpeedX: .7,
        minSpeedY: .1,
        maxSpeedY: .7,
        directionX: "center",
        directionY: "center",
        density: 1e4,
        dotColor: "#666666",
        lineColor: "#666666",
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: !1,
        proximity: 100,
        parallax: !0,
        parallaxMultiplier: 5,
        onInit: function() {},
        onDestroy: function() {}
    },
    n && (n.fn[o] = function(e) {
        if ("string" == typeof arguments[0]) {
            var t, i = arguments[0], a = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                n.data(this, "plugin_" + o) && "function" == typeof n.data(this, "plugin_" + o)[i] && (t = n.data(this, "plugin_" + o)[i].apply(this, a))
            }),
            void 0 !== t ? t : this
        }
        return "object" != typeof e && e ? void 0 : this.each(function() {
            n.data(this, "plugin_" + o) || n.data(this, "plugin_" + o, new r(this,e))
        })
    }
    )
}(window, document),
function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i)
        window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
        var i = (new Date).getTime()
          , r = Math.max(0, 16 - (i - e))
          , o = window.setTimeout(function() {
            t(i + r)
        }, r);
        return e = i + r,
        o
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
    )
}();
var canvasID = "particles"
  , canvas = document.getElementById(canvasID);
if (canvas) {
    var $headerSizer, width, height, ctx, circles, animateHeader = !0;
    $headerSizer = $(".full-slider"),
    initHeader(),
    addListeners()
}
