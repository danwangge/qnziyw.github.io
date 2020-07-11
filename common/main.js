(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/main" ], {
    "0177": function(e, t, n) {
        "use strict";
        var r = n("aeed"), o = n.n(r);
        o.a;
    },
    "7ec3": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("b1b6"), o = {
            onLaunch: function() {
                console.log("App Launch");
            },
            onShow: function() {
                console.log("App Show"), getApp() && getApp().user && (0, r.get)("user_log", {
                    userid: getApp().user.userid,
                    openid: getApp().user.openid,
                    type: 1,
                    content: "打开小程序"
                });
            },
            onHide: function() {
                console.log("App Hide"), getApp() && getApp().user && (0, r.get)("user_log", {
                    userid: getApp().user.userid,
                    openid: getApp().user.openid,
                    type: 3,
                    content: "退出小程序"
                });
            }
        };
        t.default = o;
    },
    8665: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("ce23");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("0177");
        var u, a, i = n("2877"), p = Object(i["a"])(r["default"], u, a, !1, null, null, null);
        t["default"] = p.exports;
    },
    a71a: function(e, t, n) {
        "use strict";
        (function(e, t) {
            n("1a02");
            var r = p(n("66fd")), o = p(n("8665")), u = p(n("d60f")), a = p(n("ea23")), i = p(n("21b4"));
            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }))), r.forEach(function(t) {
                        l(e, t, n[t]);
                    });
                }
                return e;
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            n("6fe0"), r.default.config.productionTip = !1, o.default.mpType = "app";
            var f = new r.default(c({}, o.default));
            for (var s in e(f).$mount(), u.default) getApp()[s] = u.default[s];
            var d = t.getSystemInfoSync();
            getApp().ScreenWidth = d.windowWidth, console.log("ScreenWidth: ", getApp().ScreenWidth), 
            getApp()["Req"] = a.default, getApp()["Tool"] = i.default, r.default.prototype.now = Date.now || function() {
                return new Date().getTime();
            }, r.default.prototype.isArray = Array.isArray || function(e) {
                return e instanceof Array;
            }, String.prototype.toHexColor = function() {
                if (this.indexOf("rgba") < 0) return this;
                var e = this.replace(/rgba?\(/, "").replace(/\)/, "").replace(/[\s+]/g, "").split(","), t = parseFloat(e[3] || 1), n = Math.floor(t * parseInt(e[0]) + 255 * (1 - t)), r = Math.floor(t * parseInt(e[1]) + 255 * (1 - t)), o = Math.floor(t * parseInt(e[2]) + 255 * (1 - t));
                return "#" + ("0" + n.toString(16)).slice(-2) + ("0" + r.toString(16)).slice(-2) + ("0" + o.toString(16)).slice(-2);
            };
        }).call(this, n("543d")["createApp"], n("543d")["default"]);
    },
    aeed: function(e, t, n) {},
    ce23: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("7ec3"), o = n.n(r);
        for (var u in r) "default" !== u && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        t["default"] = o.a;
    }
}, [ [ "a71a", "common/runtime", "common/vendor" ] ] ]);