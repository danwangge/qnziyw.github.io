(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/mpvue-wxparse/components/wxParseImg" ], {
    18239: function(t, e, n) {
        "use strict";
        var i = n("c0d3"), a = n.n(i);
        a.a;
    },
    "45b9": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("4d14"), a = n("b0ed");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("18239");
        var o = n("2877"), u = Object(o["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
        e["default"] = u.exports;
    },
    "4d14": function(t, e, n) {
        "use strict";
        var i = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return a;
        });
    },
    7565: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "wxParseImg",
            data: function() {
                return {
                    realWindowWidth: 0,
                    realWindowHeight: 0,
                    newStyleStr: ""
                };
            },
            props: {
                node: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            mounted: function() {
                this.getSysWH();
            },
            computed: {
                fitStyleStr: function() {
                    return this.newStyleStr || this.node.styleStr;
                }
            },
            methods: {
                getSysWH: function() {
                    var t = this;
                    wx.getSystemInfo({
                        success: function(e) {
                            t.realWindowWidth = e.windowWidth, t.realWindowHeight = e.windowHeight;
                        }
                    });
                },
                wxParseImgTap: function(t) {
                    var e = t.target.dataset.src;
                    e && wx.previewImage({
                        current: e,
                        urls: this.node.image.urls
                    });
                },
                wxParseImgLoad: function(t) {
                    var e = t.target.dataset.src;
                    e && "undefined" !== typeof e && "" !== e && null !== e && this.calMoreImageInfo(t);
                },
                calMoreImageInfo: function(t) {
                    var e = t.mp.detail, n = e.width, i = e.height, a = this.wxAutoImageCal(n, i), r = a.imageheight, o = a.imageWidth, u = this.node.image.padding;
                    this.newStyleStr = "height: ".concat(r, "px; width: ").concat(o, "px; padding: 0 ").concat(u, "px;");
                },
                wxAutoImageCal: function(t, e) {
                    var n = this.node.image.padding, i = this.realWindowWidth - 2 * n, a = {};
                    return t > i ? (a.imageWidth = i, a.imageheight = i * (e / t)) : (a.imageWidth = t, 
                    a.imageheight = e), a;
                }
            }
        };
        e.default = i;
    },
    b0ed: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("7565"), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e["default"] = a.a;
    },
    c0d3: function(t, e, n) {}
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/mpvue-wxparse/components/wxParseImg-create-component", {
    "components/mpvue-wxparse/components/wxParseImg-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("45b9"));
    }
}, [ [ "components/mpvue-wxparse/components/wxParseImg-create-component" ] ] ]);