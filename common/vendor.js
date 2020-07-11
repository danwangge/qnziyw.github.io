(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/vendor" ], {
    "05d4": function(e, l, a) {
        "use strict";
        (function(l) {
            var t = u(a("16c3"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function n(e, l) {
                if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function");
            }
            function r(e, l) {
                for (var a = 0; a < l.length; a++) {
                    var t = l[a];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(e, t.key, t);
                }
            }
            function o(e, l, a) {
                return l && r(e.prototype, l), a && r(e, a), e;
            }
            var i = function() {
                function e(l) {
                    n(this, e), this.socket = {}, this.setintvalsetintval = 0, this.uid = "";
                    var a = t.default.siteroot;
                    this.host = a.replace("https://", "").replace("/app/index.php", ""), console.log("Socket: ", this);
                }
                return o(e, [ {
                    key: "restart",
                    value: function() {
                        console.log("连接重建 !!!!!!"), this.close(), this.start(this.uid);
                    }
                }, {
                    key: "sendHeat",
                    value: function() {
                        var e = this;
                        console.log("发送心跳"), e.socket.send({
                            data: " ",
                            fail: function(l) {
                                console.log("心跳发送失败"), console.log(l), console.log(JSON.stringify(e.socket)), e.restart();
                            },
                            success: function() {
                                console.log(e.socket);
                            }
                        });
                    }
                }, {
                    key: "start",
                    value: function(e) {
                        var a = this;
                        this.socket = l.connectSocket({
                            url: "wss://" + this.host + "/wss",
                            success: function(l) {
                                console.log("建立连接成功"), a.uid = e, a.setintval = setInterval(function() {
                                    a.sendHeat();
                                }, 9e3);
                            },
                            fail: function(e) {
                                console.log("建立连接失败");
                            }
                        }), l.onSocketMessage(function(e) {
                            console.log("接受触发");
                            var t = JSON.parse(e.data);
                            switch (console.log(t), t.type) {
                              case "init":
                                a.msgs("bind", "", "");
                                break;

                              case "ping":
                                break;

                              default:
                                l.$emit("SOCKET_MSG", t);
                                break;
                            }
                        });
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        l.onSocketOpen(function(l) {
                            e(l);
                        });
                    }
                }, {
                    key: "send",
                    value: function(e, l) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.msgs("say", e, l, a);
                    }
                }, {
                    key: "msgs",
                    value: function(e, a, t, u) {
                        var n = this;
                        a = JSON.stringify({
                            type: e,
                            uid: this.uid,
                            toid: t,
                            image: u,
                            msg: a
                        });
                        l.sendSocketMessage({
                            data: a,
                            success: function(e) {
                                console.log("发送成功");
                            },
                            fail: function(e) {
                                console.log("发送失败"), n.restart();
                            }
                        });
                    }
                }, {
                    key: "close",
                    value: function() {
                        clearInterval(this.setintval), this.socket.close(), l.closeSocket();
                    }
                } ]), e;
            }();
            e.exports = i;
        }).call(this, a("543d")["default"]);
    },
    "0bc6": function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = [ [ {
            label: "市辖区",
            value: "1101"
        } ], [ {
            label: "市辖区",
            value: "1201"
        } ], [ {
            label: "石家庄市",
            value: "1301"
        }, {
            label: "唐山市",
            value: "1302"
        }, {
            label: "秦皇岛市",
            value: "1303"
        }, {
            label: "邯郸市",
            value: "1304"
        }, {
            label: "邢台市",
            value: "1305"
        }, {
            label: "保定市",
            value: "1306"
        }, {
            label: "张家口市",
            value: "1307"
        }, {
            label: "承德市",
            value: "1308"
        }, {
            label: "沧州市",
            value: "1309"
        }, {
            label: "廊坊市",
            value: "1310"
        }, {
            label: "衡水市",
            value: "1311"
        } ], [ {
            label: "太原市",
            value: "1401"
        }, {
            label: "大同市",
            value: "1402"
        }, {
            label: "阳泉市",
            value: "1403"
        }, {
            label: "长治市",
            value: "1404"
        }, {
            label: "晋城市",
            value: "1405"
        }, {
            label: "朔州市",
            value: "1406"
        }, {
            label: "晋中市",
            value: "1407"
        }, {
            label: "运城市",
            value: "1408"
        }, {
            label: "忻州市",
            value: "1409"
        }, {
            label: "临汾市",
            value: "1410"
        }, {
            label: "吕梁市",
            value: "1411"
        } ], [ {
            label: "呼和浩特市",
            value: "1501"
        }, {
            label: "包头市",
            value: "1502"
        }, {
            label: "乌海市",
            value: "1503"
        }, {
            label: "赤峰市",
            value: "1504"
        }, {
            label: "通辽市",
            value: "1505"
        }, {
            label: "鄂尔多斯市",
            value: "1506"
        }, {
            label: "呼伦贝尔市",
            value: "1507"
        }, {
            label: "巴彦淖尔市",
            value: "1508"
        }, {
            label: "乌兰察布市",
            value: "1509"
        }, {
            label: "兴安盟",
            value: "1522"
        }, {
            label: "锡林郭勒盟",
            value: "1525"
        }, {
            label: "阿拉善盟",
            value: "1529"
        } ], [ {
            label: "沈阳市",
            value: "2101"
        }, {
            label: "大连市",
            value: "2102"
        }, {
            label: "鞍山市",
            value: "2103"
        }, {
            label: "抚顺市",
            value: "2104"
        }, {
            label: "本溪市",
            value: "2105"
        }, {
            label: "丹东市",
            value: "2106"
        }, {
            label: "锦州市",
            value: "2107"
        }, {
            label: "营口市",
            value: "2108"
        }, {
            label: "阜新市",
            value: "2109"
        }, {
            label: "辽阳市",
            value: "2110"
        }, {
            label: "盘锦市",
            value: "2111"
        }, {
            label: "铁岭市",
            value: "2112"
        }, {
            label: "朝阳市",
            value: "2113"
        }, {
            label: "葫芦岛市",
            value: "2114"
        } ], [ {
            label: "长春市",
            value: "2201"
        }, {
            label: "吉林市",
            value: "2202"
        }, {
            label: "四平市",
            value: "2203"
        }, {
            label: "辽源市",
            value: "2204"
        }, {
            label: "通化市",
            value: "2205"
        }, {
            label: "白山市",
            value: "2206"
        }, {
            label: "松原市",
            value: "2207"
        }, {
            label: "白城市",
            value: "2208"
        }, {
            label: "延边朝鲜族自治州",
            value: "2224"
        } ], [ {
            label: "哈尔滨市",
            value: "2301"
        }, {
            label: "齐齐哈尔市",
            value: "2302"
        }, {
            label: "鸡西市",
            value: "2303"
        }, {
            label: "鹤岗市",
            value: "2304"
        }, {
            label: "双鸭山市",
            value: "2305"
        }, {
            label: "大庆市",
            value: "2306"
        }, {
            label: "伊春市",
            value: "2307"
        }, {
            label: "佳木斯市",
            value: "2308"
        }, {
            label: "七台河市",
            value: "2309"
        }, {
            label: "牡丹江市",
            value: "2310"
        }, {
            label: "黑河市",
            value: "2311"
        }, {
            label: "绥化市",
            value: "2312"
        }, {
            label: "大兴安岭地区",
            value: "2327"
        } ], [ {
            label: "市辖区",
            value: "3101"
        } ], [ {
            label: "南京市",
            value: "3201"
        }, {
            label: "无锡市",
            value: "3202"
        }, {
            label: "徐州市",
            value: "3203"
        }, {
            label: "常州市",
            value: "3204"
        }, {
            label: "苏州市",
            value: "3205"
        }, {
            label: "南通市",
            value: "3206"
        }, {
            label: "连云港市",
            value: "3207"
        }, {
            label: "淮安市",
            value: "3208"
        }, {
            label: "盐城市",
            value: "3209"
        }, {
            label: "扬州市",
            value: "3210"
        }, {
            label: "镇江市",
            value: "3211"
        }, {
            label: "泰州市",
            value: "3212"
        }, {
            label: "宿迁市",
            value: "3213"
        } ], [ {
            label: "杭州市",
            value: "3301"
        }, {
            label: "宁波市",
            value: "3302"
        }, {
            label: "温州市",
            value: "3303"
        }, {
            label: "嘉兴市",
            value: "3304"
        }, {
            label: "湖州市",
            value: "3305"
        }, {
            label: "绍兴市",
            value: "3306"
        }, {
            label: "金华市",
            value: "3307"
        }, {
            label: "衢州市",
            value: "3308"
        }, {
            label: "舟山市",
            value: "3309"
        }, {
            label: "台州市",
            value: "3310"
        }, {
            label: "丽水市",
            value: "3311"
        } ], [ {
            label: "合肥市",
            value: "3401"
        }, {
            label: "芜湖市",
            value: "3402"
        }, {
            label: "蚌埠市",
            value: "3403"
        }, {
            label: "淮南市",
            value: "3404"
        }, {
            label: "马鞍山市",
            value: "3405"
        }, {
            label: "淮北市",
            value: "3406"
        }, {
            label: "铜陵市",
            value: "3407"
        }, {
            label: "安庆市",
            value: "3408"
        }, {
            label: "黄山市",
            value: "3410"
        }, {
            label: "滁州市",
            value: "3411"
        }, {
            label: "阜阳市",
            value: "3412"
        }, {
            label: "宿州市",
            value: "3413"
        }, {
            label: "六安市",
            value: "3415"
        }, {
            label: "亳州市",
            value: "3416"
        }, {
            label: "池州市",
            value: "3417"
        }, {
            label: "宣城市",
            value: "3418"
        } ], [ {
            label: "福州市",
            value: "3501"
        }, {
            label: "厦门市",
            value: "3502"
        }, {
            label: "莆田市",
            value: "3503"
        }, {
            label: "三明市",
            value: "3504"
        }, {
            label: "泉州市",
            value: "3505"
        }, {
            label: "漳州市",
            value: "3506"
        }, {
            label: "南平市",
            value: "3507"
        }, {
            label: "龙岩市",
            value: "3508"
        }, {
            label: "宁德市",
            value: "3509"
        } ], [ {
            label: "南昌市",
            value: "3601"
        }, {
            label: "景德镇市",
            value: "3602"
        }, {
            label: "萍乡市",
            value: "3603"
        }, {
            label: "九江市",
            value: "3604"
        }, {
            label: "新余市",
            value: "3605"
        }, {
            label: "鹰潭市",
            value: "3606"
        }, {
            label: "赣州市",
            value: "3607"
        }, {
            label: "吉安市",
            value: "3608"
        }, {
            label: "宜春市",
            value: "3609"
        }, {
            label: "抚州市",
            value: "3610"
        }, {
            label: "上饶市",
            value: "3611"
        } ], [ {
            label: "济南市",
            value: "3701"
        }, {
            label: "青岛市",
            value: "3702"
        }, {
            label: "淄博市",
            value: "3703"
        }, {
            label: "枣庄市",
            value: "3704"
        }, {
            label: "东营市",
            value: "3705"
        }, {
            label: "烟台市",
            value: "3706"
        }, {
            label: "潍坊市",
            value: "3707"
        }, {
            label: "济宁市",
            value: "3708"
        }, {
            label: "泰安市",
            value: "3709"
        }, {
            label: "威海市",
            value: "3710"
        }, {
            label: "日照市",
            value: "3711"
        }, {
            label: "莱芜市",
            value: "3712"
        }, {
            label: "临沂市",
            value: "3713"
        }, {
            label: "德州市",
            value: "3714"
        }, {
            label: "聊城市",
            value: "3715"
        }, {
            label: "滨州市",
            value: "3716"
        }, {
            label: "菏泽市",
            value: "3717"
        } ], [ {
            label: "郑州市",
            value: "4101"
        }, {
            label: "开封市",
            value: "4102"
        }, {
            label: "洛阳市",
            value: "4103"
        }, {
            label: "平顶山市",
            value: "4104"
        }, {
            label: "安阳市",
            value: "4105"
        }, {
            label: "鹤壁市",
            value: "4106"
        }, {
            label: "新乡市",
            value: "4107"
        }, {
            label: "焦作市",
            value: "4108"
        }, {
            label: "濮阳市",
            value: "4109"
        }, {
            label: "许昌市",
            value: "4110"
        }, {
            label: "漯河市",
            value: "4111"
        }, {
            label: "三门峡市",
            value: "4112"
        }, {
            label: "南阳市",
            value: "4113"
        }, {
            label: "商丘市",
            value: "4114"
        }, {
            label: "信阳市",
            value: "4115"
        }, {
            label: "周口市",
            value: "4116"
        }, {
            label: "驻马店市",
            value: "4117"
        }, {
            label: "省直辖县级行政区划",
            value: "4190"
        } ], [ {
            label: "武汉市",
            value: "4201"
        }, {
            label: "黄石市",
            value: "4202"
        }, {
            label: "十堰市",
            value: "4203"
        }, {
            label: "宜昌市",
            value: "4205"
        }, {
            label: "襄阳市",
            value: "4206"
        }, {
            label: "鄂州市",
            value: "4207"
        }, {
            label: "荆门市",
            value: "4208"
        }, {
            label: "孝感市",
            value: "4209"
        }, {
            label: "荆州市",
            value: "4210"
        }, {
            label: "黄冈市",
            value: "4211"
        }, {
            label: "咸宁市",
            value: "4212"
        }, {
            label: "随州市",
            value: "4213"
        }, {
            label: "恩施土家族苗族自治州",
            value: "4228"
        }, {
            label: "省直辖县级行政区划",
            value: "4290"
        } ], [ {
            label: "长沙市",
            value: "4301"
        }, {
            label: "株洲市",
            value: "4302"
        }, {
            label: "湘潭市",
            value: "4303"
        }, {
            label: "衡阳市",
            value: "4304"
        }, {
            label: "邵阳市",
            value: "4305"
        }, {
            label: "岳阳市",
            value: "4306"
        }, {
            label: "常德市",
            value: "4307"
        }, {
            label: "张家界市",
            value: "4308"
        }, {
            label: "益阳市",
            value: "4309"
        }, {
            label: "郴州市",
            value: "4310"
        }, {
            label: "永州市",
            value: "4311"
        }, {
            label: "怀化市",
            value: "4312"
        }, {
            label: "娄底市",
            value: "4313"
        }, {
            label: "湘西土家族苗族自治州",
            value: "4331"
        } ], [ {
            label: "广州市",
            value: "4401"
        }, {
            label: "韶关市",
            value: "4402"
        }, {
            label: "深圳市",
            value: "4403"
        }, {
            label: "珠海市",
            value: "4404"
        }, {
            label: "汕头市",
            value: "4405"
        }, {
            label: "佛山市",
            value: "4406"
        }, {
            label: "江门市",
            value: "4407"
        }, {
            label: "湛江市",
            value: "4408"
        }, {
            label: "茂名市",
            value: "4409"
        }, {
            label: "肇庆市",
            value: "4412"
        }, {
            label: "惠州市",
            value: "4413"
        }, {
            label: "梅州市",
            value: "4414"
        }, {
            label: "汕尾市",
            value: "4415"
        }, {
            label: "河源市",
            value: "4416"
        }, {
            label: "阳江市",
            value: "4417"
        }, {
            label: "清远市",
            value: "4418"
        }, {
            label: "东莞市",
            value: "4419"
        }, {
            label: "中山市",
            value: "4420"
        }, {
            label: "潮州市",
            value: "4451"
        }, {
            label: "揭阳市",
            value: "4452"
        }, {
            label: "云浮市",
            value: "4453"
        } ], [ {
            label: "南宁市",
            value: "4501"
        }, {
            label: "柳州市",
            value: "4502"
        }, {
            label: "桂林市",
            value: "4503"
        }, {
            label: "梧州市",
            value: "4504"
        }, {
            label: "北海市",
            value: "4505"
        }, {
            label: "防城港市",
            value: "4506"
        }, {
            label: "钦州市",
            value: "4507"
        }, {
            label: "贵港市",
            value: "4508"
        }, {
            label: "玉林市",
            value: "4509"
        }, {
            label: "百色市",
            value: "4510"
        }, {
            label: "贺州市",
            value: "4511"
        }, {
            label: "河池市",
            value: "4512"
        }, {
            label: "来宾市",
            value: "4513"
        }, {
            label: "崇左市",
            value: "4514"
        } ], [ {
            label: "海口市",
            value: "4601"
        }, {
            label: "三亚市",
            value: "4602"
        }, {
            label: "三沙市",
            value: "4603"
        }, {
            label: "儋州市",
            value: "4604"
        }, {
            label: "省直辖县级行政区划",
            value: "4690"
        } ], [ {
            label: "市辖区",
            value: "5001"
        }, {
            label: "县",
            value: "5002"
        } ], [ {
            label: "成都市",
            value: "5101"
        }, {
            label: "自贡市",
            value: "5103"
        }, {
            label: "攀枝花市",
            value: "5104"
        }, {
            label: "泸州市",
            value: "5105"
        }, {
            label: "德阳市",
            value: "5106"
        }, {
            label: "绵阳市",
            value: "5107"
        }, {
            label: "广元市",
            value: "5108"
        }, {
            label: "遂宁市",
            value: "5109"
        }, {
            label: "内江市",
            value: "5110"
        }, {
            label: "乐山市",
            value: "5111"
        }, {
            label: "南充市",
            value: "5113"
        }, {
            label: "眉山市",
            value: "5114"
        }, {
            label: "宜宾市",
            value: "5115"
        }, {
            label: "广安市",
            value: "5116"
        }, {
            label: "达州市",
            value: "5117"
        }, {
            label: "雅安市",
            value: "5118"
        }, {
            label: "巴中市",
            value: "5119"
        }, {
            label: "资阳市",
            value: "5120"
        }, {
            label: "阿坝藏族羌族自治州",
            value: "5132"
        }, {
            label: "甘孜藏族自治州",
            value: "5133"
        }, {
            label: "凉山彝族自治州",
            value: "5134"
        } ], [ {
            label: "贵阳市",
            value: "5201"
        }, {
            label: "六盘水市",
            value: "5202"
        }, {
            label: "遵义市",
            value: "5203"
        }, {
            label: "安顺市",
            value: "5204"
        }, {
            label: "毕节市",
            value: "5205"
        }, {
            label: "铜仁市",
            value: "5206"
        }, {
            label: "黔西南布依族苗族自治州",
            value: "5223"
        }, {
            label: "黔东南苗族侗族自治州",
            value: "5226"
        }, {
            label: "黔南布依族苗族自治州",
            value: "5227"
        } ], [ {
            label: "昆明市",
            value: "5301"
        }, {
            label: "曲靖市",
            value: "5303"
        }, {
            label: "玉溪市",
            value: "5304"
        }, {
            label: "保山市",
            value: "5305"
        }, {
            label: "昭通市",
            value: "5306"
        }, {
            label: "丽江市",
            value: "5307"
        }, {
            label: "普洱市",
            value: "5308"
        }, {
            label: "临沧市",
            value: "5309"
        }, {
            label: "楚雄彝族自治州",
            value: "5323"
        }, {
            label: "红河哈尼族彝族自治州",
            value: "5325"
        }, {
            label: "文山壮族苗族自治州",
            value: "5326"
        }, {
            label: "西双版纳傣族自治州",
            value: "5328"
        }, {
            label: "大理白族自治州",
            value: "5329"
        }, {
            label: "德宏傣族景颇族自治州",
            value: "5331"
        }, {
            label: "怒江傈僳族自治州",
            value: "5333"
        }, {
            label: "迪庆藏族自治州",
            value: "5334"
        } ], [ {
            label: "拉萨市",
            value: "5401"
        }, {
            label: "日喀则市",
            value: "5402"
        }, {
            label: "昌都市",
            value: "5403"
        }, {
            label: "林芝市",
            value: "5404"
        }, {
            label: "山南市",
            value: "5405"
        }, {
            label: "那曲地区",
            value: "5424"
        }, {
            label: "阿里地区",
            value: "5425"
        } ], [ {
            label: "西安市",
            value: "6101"
        }, {
            label: "铜川市",
            value: "6102"
        }, {
            label: "宝鸡市",
            value: "6103"
        }, {
            label: "咸阳市",
            value: "6104"
        }, {
            label: "渭南市",
            value: "6105"
        }, {
            label: "延安市",
            value: "6106"
        }, {
            label: "汉中市",
            value: "6107"
        }, {
            label: "榆林市",
            value: "6108"
        }, {
            label: "安康市",
            value: "6109"
        }, {
            label: "商洛市",
            value: "6110"
        } ], [ {
            label: "兰州市",
            value: "6201"
        }, {
            label: "嘉峪关市",
            value: "6202"
        }, {
            label: "金昌市",
            value: "6203"
        }, {
            label: "白银市",
            value: "6204"
        }, {
            label: "天水市",
            value: "6205"
        }, {
            label: "武威市",
            value: "6206"
        }, {
            label: "张掖市",
            value: "6207"
        }, {
            label: "平凉市",
            value: "6208"
        }, {
            label: "酒泉市",
            value: "6209"
        }, {
            label: "庆阳市",
            value: "6210"
        }, {
            label: "定西市",
            value: "6211"
        }, {
            label: "陇南市",
            value: "6212"
        }, {
            label: "临夏回族自治州",
            value: "6229"
        }, {
            label: "甘南藏族自治州",
            value: "6230"
        } ], [ {
            label: "西宁市",
            value: "6301"
        }, {
            label: "海东市",
            value: "6302"
        }, {
            label: "海北藏族自治州",
            value: "6322"
        }, {
            label: "黄南藏族自治州",
            value: "6323"
        }, {
            label: "海南藏族自治州",
            value: "6325"
        }, {
            label: "果洛藏族自治州",
            value: "6326"
        }, {
            label: "玉树藏族自治州",
            value: "6327"
        }, {
            label: "海西蒙古族藏族自治州",
            value: "6328"
        } ], [ {
            label: "银川市",
            value: "6401"
        }, {
            label: "石嘴山市",
            value: "6402"
        }, {
            label: "吴忠市",
            value: "6403"
        }, {
            label: "固原市",
            value: "6404"
        }, {
            label: "中卫市",
            value: "6405"
        } ], [ {
            label: "乌鲁木齐市",
            value: "6501"
        }, {
            label: "克拉玛依市",
            value: "6502"
        }, {
            label: "吐鲁番市",
            value: "6504"
        }, {
            label: "哈密市",
            value: "6505"
        }, {
            label: "昌吉回族自治州",
            value: "6523"
        }, {
            label: "博尔塔拉蒙古自治州",
            value: "6527"
        }, {
            label: "巴音郭楞蒙古自治州",
            value: "6528"
        }, {
            label: "阿克苏地区",
            value: "6529"
        }, {
            label: "克孜勒苏柯尔克孜自治州",
            value: "6530"
        }, {
            label: "喀什地区",
            value: "6531"
        }, {
            label: "和田地区",
            value: "6532"
        }, {
            label: "伊犁哈萨克自治州",
            value: "6540"
        }, {
            label: "塔城地区",
            value: "6542"
        }, {
            label: "阿勒泰地区",
            value: "6543"
        }, {
            label: "自治区直辖县级行政区划",
            value: "6590"
        } ], [ {
            label: "台北",
            value: "6601"
        }, {
            label: "高雄",
            value: "6602"
        }, {
            label: "基隆",
            value: "6603"
        }, {
            label: "台中",
            value: "6604"
        }, {
            label: "台南",
            value: "6605"
        }, {
            label: "新竹",
            value: "6606"
        }, {
            label: "嘉义",
            value: "6607"
        }, {
            label: "宜兰",
            value: "6608"
        }, {
            label: "桃园",
            value: "6609"
        }, {
            label: "苗栗",
            value: "6610"
        }, {
            label: "彰化",
            value: "6611"
        }, {
            label: "南投",
            value: "6612"
        }, {
            label: "云林",
            value: "6613"
        }, {
            label: "屏东",
            value: "6614"
        }, {
            label: "台东",
            value: "6615"
        }, {
            label: "花莲",
            value: "6616"
        }, {
            label: "澎湖",
            value: "6617"
        } ], [ {
            label: "香港岛",
            value: "6701"
        }, {
            label: "九龙",
            value: "6702"
        }, {
            label: "新界",
            value: "6703"
        } ], [ {
            label: "澳门半岛",
            value: "6801"
        }, {
            label: "氹仔岛",
            value: "6802"
        }, {
            label: "路环岛",
            value: "6803"
        }, {
            label: "路氹城",
            value: "6804"
        } ] ], u = t;
        l.default = u;
    },
    "16c3": function(e, l, a) {
        "use strict";
        e.exports = require("../siteinfo.js");
    },
    1981: function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = a("b1b6"), u = {
            mounted: function() {
                this.watchList();
            },
            methods: {
                watchList: function() {
                    var e = this;
                    setTimeout(function() {
                        getApp().user.userid ? e.getListData() : e.watchList();
                    }, 50);
                },
                getListData: function() {
                    var e = this;
                    if (!this.end && this.item && this.item.ids && this.item.ids.length) {
                        var l = {
                            type: this.listType,
                            num: this.item.num,
                            class_ids: this.item.class_ids,
                            sort: this.item.sort,
                            order: this.item.order,
                            ids: this.item.list.map(function(e) {
                                return e.id;
                            }).join(","),
                            data_type: this.item.data_type,
                            user_id: getApp().user.userid
                        };
                        (0, t.get)("List_Data", l).then(function(l) {
                            console.log(l.info), l.info.length && e.$emit("update:list", l.info);
                        });
                    }
                }
            }
        };
        l.default = u;
    },
    "1a02": function(e, l, a) {},
    "21b4": function(e, l, a) {
        "use strict";
        (function(l) {
            function a(e, l) {
                return n(e) || u(e, l) || t();
            }
            function t() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            function u(e, l) {
                var a = [], t = !0, u = !1, n = void 0;
                try {
                    for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) if (a.push(r.value), 
                    l && a.length === l) break;
                } catch (i) {
                    u = !0, n = i;
                } finally {
                    try {
                        t || null == o["return"] || o["return"]();
                    } finally {
                        if (u) throw n;
                    }
                }
                return a;
            }
            function n(e) {
                if (Array.isArray(e)) return e;
            }
            e.exports = {
                pageHeight: function(e, a, t) {
                    var u = l.createSelectorQuery().in(e).select(a);
                    u.boundingClientRect(function(e) {
                        var a = l.getSystemInfoSync().windowHeight, u = a > e.height ? a : e.height;
                        t(u);
                    }).exec();
                },
                pdata: function(e) {
                    return e.currentTarget.dataset;
                },
                data: function(e) {
                    return e.target.dataset;
                },
                phone: function(e) {
                    var a = this.pdata(e).phone;
                    l.makePhoneCall({
                        phoneNumber: a
                    });
                },
                time_format: function(e) {
                    var l = e, a = new Date(1e3 * l), t = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
                    return t;
                },
                time_str: function(e) {
                    e = e.substring(0, 19), e = e.replace(/-/g, "/");
                    var l = new Date(e).getTime();
                    return l / 1e3;
                },
                Countdown: function(e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, u = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], 
                    {}), n = "interval" + t, r = e - Date.parse(new Date()) / 1e3;
                    r <= 0 && (u.show_time = !1, a(u)), n = setInterval(function() {
                        var e = r, t = Math.floor(e / 3600 / 24), o = t.toString();
                        1 == o.length && (o = "0" + o);
                        var i = Math.floor((e - 3600 * t * 24) / 3600), v = i.toString();
                        1 == v.length && (v = "0" + v);
                        var b = Math.floor((e - 3600 * t * 24 - 3600 * i) / 60), s = b.toString();
                        1 == s.length && (s = "0" + s);
                        var c = e - 3600 * t * 24 - 3600 * i - 60 * b, f = c.toString();
                        1 == f.length && (f = "0" + f), u.countDownDay = o, u.countDownHour = v, u.countDownMinute = s, 
                        u.countDownSecond = f, u.show_time = !0, "function" == typeof a && a(u), r--, r < 0 && (clearInterval(n), 
                        l.showToast({
                            title: "活动已结束"
                        }), u.countDownDay = "0", u.countDownHour = "0", u.countDownMinute = "0", u.countDownSecond = "0", 
                        u.show_time = !1, "function" == typeof a && a(u));
                    }.bind(this), 1e3);
                },
                json_parse: function(e) {
                    var l = e;
                    if (l = l.replace(" ", ""), "object" != typeof l) {
                        l = l.replace(/\ufeff/g, "");
                        var a = JSON.parse(l);
                        return a;
                    }
                },
                str: function(e) {
                    var l = JSON.stringify(e);
                    return l;
                },
                tx_map: function(e, a, t) {
                    e = parseFloat(e), a = parseFloat(a);
                    var u = this, n = getApp().getCache("map");
                    n ? l.openLocation({
                        latitude: e,
                        longitude: a,
                        scale: 28,
                        name: t
                    }) : l.getLocation({
                        type: "wgs84",
                        success: function(u) {
                            console.log(u), getApp().setCache("map", u, 1200);
                            u.latitude, u.longitude;
                            l.openLocation({
                                latitude: e,
                                longitude: a,
                                scale: 28,
                                name: t
                            });
                        },
                        fail: function() {
                            u.alert("未授权位置信息");
                        }
                    });
                },
                SetLocalData: function(e, a) {
                    l.setStorage({
                        key: e,
                        data: a,
                        success: function() {
                            console.log("success 存储首页数据:+" + e + " " + a);
                        }
                    });
                },
                GetLocalData: function(e) {},
                setNavigationBarColorCache: function() {
                    try {
                        var e = l.getStorageSync(this.IndexCacheKey);
                        if (e) {
                            console.log("success 获取首页缓存:" + e);
                            var a = e.info.page;
                            console.log("dsdsds" + a), l.setNavigationBarColor({
                                frontColor: a.text_color,
                                backgroundColor: a.nv_color,
                                animation: {
                                    duration: 400,
                                    timingFunc: "easeIn"
                                }
                            });
                        }
                    } catch (t) {
                        return console.log("获取首页缓存数据出错"), {};
                    }
                },
                setPageStyle: function(e) {
                    l.setNavigationBarTitle && l.setNavigationBarTitle({
                        title: e.name
                    }), l.setNavigationBarColor && l.setNavigationBarColor({
                        frontColor: "black" === e.text_color ? "#000000" : "#ffffff",
                        backgroundColor: e.nv_color.toHexColor(),
                        animation: {
                            duration: 400,
                            timingFunc: "easeIn"
                        }
                    });
                    var a = e.bg_color.toHexColor();
                    l.setBackgroundColor && l.setBackgroundColor({
                        backgroundColor: a,
                        backgroundColorTop: a,
                        backgroundColorBottom: a
                    });
                },
                setNavigationBarTitle: function(e) {
                    l.setNavigationBarTitle({
                        title: e
                    });
                },
                setNavigationBarColor: function(e) {
                    try {
                        l.setNavigationBarColor({
                            frontColor: e.text_color,
                            backgroundColor: e.nv_color,
                            animation: {
                                duration: 400,
                                timingFunc: "easeIn"
                            }
                        });
                    } catch (a) {
                        return console.log("获取首页缓存数据出错"), {};
                    }
                },
                IndexCacheKey: "IndexData",
                jump: function(e, a) {
                    console.log(e), a = a && "" != a ? a : 1, a = "/yb_shopping/pages/index/index" === e ? 3 : a, 
                    1 == a ? l.navigateTo({
                        url: e,
                        fail: function(a) {
                            a.errMsg.indexOf("tabbar") >= 0 && l.switchTab({
                                url: e
                            });
                        }
                    }) : 2 == a ? l.redirectTo({
                        url: e
                    }) : 3 == a ? l.reLaunch({
                        url: e
                    }) : 4 == a ? l.switchTab({
                        url: e
                    }) : 5 == a && l.navigateBack();
                },
                toast: function(e, a) {
                    a || (a = "loading"), l.showToast({
                        title: e,
                        icon: a,
                        duration: 1e3
                    });
                },
                warning: function(e) {
                    l.showToast({
                        title: e,
                        image: "/static/image/icon-warning.png",
                        duration: 2e3
                    });
                },
                error: function(e) {
                    l.showToast({
                        title: e,
                        icon: "success",
                        image: "/static/image/x.png",
                        duration: 2e3
                    });
                },
                success: function(e) {
                    l.showToast({
                        title: e,
                        icon: "success",
                        duration: 1e3
                    });
                },
                menu_url: function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, t = this, u = t.pdata(e), n = (e = u.key, 
                    u.url ? u.url : ""), r = u.appid ? u.appid : "", o = u.path ? u.path : "", i = u.title ? u.title : "", v = u.phone ? u.phone : "", b = u.lat ? u.lat : "", s = u.lng ? u.lng : "";
                    if (console.log(u), 1 == e) n && n.length > 0 && t.jump(n, a); else if (2 == e) l.navigateToMiniProgram({
                        appId: r,
                        path: o,
                        extraData: {
                            foo: "bar"
                        },
                        envVersion: "release",
                        success: function(e) {
                            console.log("打开成功");
                        },
                        fail: function(e) {}
                    }); else if (3 == e) t.jump(n, 1); else if (4 == e) v ? l.makePhoneCall({
                        phoneNumber: v
                    }) : t.alert("电话不能为空"); else {
                        if (5 != e) return;
                        b && s ? t.tx_map(b, s, i) : t.alert("请完善位置信息");
                    }
                },
                base64src: function(e) {
                    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tmp_base64src";
                    return new Promise(function(t) {
                        var u = wx.getFileSystemManager(), n = l, r = /data:image\/(\w+);base64,(.*)/.exec(e) || [], o = a(r, 3), i = o[1], v = o[2];
                        if (!i) return new Error("ERROR_BASE64SRC_PARSE");
                        var b = "".concat(wx.env.USER_DATA_PATH, "/").concat(n, ".").concat(i), s = wx.base64ToArrayBuffer(v);
                        u.writeFile({
                            filePath: b,
                            data: s,
                            encoding: "binary",
                            success: function() {
                                t(b);
                            },
                            fail: function() {
                                return new Error("ERROR_BASE64SRC_WRITE");
                            }
                        });
                    });
                }
            };
        }).call(this, a("543d")["default"]);
    },
    2877: function(e, l, a) {
        "use strict";
        function t(e, l, a, t, u, n, r, o) {
            var i, v = "function" === typeof e ? e.options : e;
            if (l && (v.render = l, v.staticRenderFns = a, v._compiled = !0), t && (v.functional = !0), 
            n && (v._scopeId = "data-v-" + n), r ? (i = function(e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), u && u.call(this, e), 
                e && e._registeredComponents && e._registeredComponents.add(r);
            }, v._ssrRegister = i) : u && (i = o ? function() {
                u.call(this, this.$root.$options.shadowRoot);
            } : u), i) if (v.functional) {
                v._injectStyles = i;
                var b = v.render;
                v.render = function(e, l) {
                    return i.call(l), b(e, l);
                };
            } else {
                var s = v.beforeCreate;
                v.beforeCreate = s ? [].concat(s, i) : [ i ];
            }
            return {
                exports: e,
                options: v
            };
        }
        a.d(l, "a", function() {
            return t;
        });
    },
    "3b18": function(e, l, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            t(a("21b4"));
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var u = {
                props: {
                    pageActive: {},
                    isTabbarPage: !1
                },
                data: function() {
                    return {
                        active: {
                            Load: 0,
                            Ready: 0,
                            Show: 0,
                            Hide: 0,
                            Unload: 0,
                            PullDownRefresh: 0,
                            ReachBottom: 0,
                            ShareAppMessage: 0
                        },
                        title: ""
                    };
                },
                watch: {
                    isTabbarPage: {
                        handler: function() {
                            if (this.isTabbarPage && !getApp().siteInfo.native_tabbar) {
                                var l = this;
                                e.$off("PageReload"), e.$on("PageReload", function() {
                                    l.active.Load = 0;
                                });
                            }
                        },
                        immediate: !0,
                        deep: !0
                    },
                    pageActive: {
                        handler: function() {
                            console.log("pageActive changed !!!!: ", this.pageActive), this.chechActive();
                        },
                        immediate: !0,
                        deep: !0
                    },
                    title: function() {
                        e.setNavigationBarTitle({
                            title: this.title
                        });
                    }
                },
                methods: {
                    chechActive: function() {
                        var l = this.active;
                        for (var a in console.log("chechActive !!!!!!"), this.pageActive) if (this.active[a] !== this.pageActive[a]) if (l[a] = this.pageActive[a], 
                        "Load" === a && 1 === this.active[a]) this.page_onLoad && this.page_onLoad(this.pageActive.options); else if ("Ready" === a) this.page_onReady && this.page_onReady(); else if ("Show" === a) {
                            console.log("getApp().user", getApp().user);
                            var t = this.page_path || "";
                            getApp().Req.get("user_log", {
                                userid: getApp().user.userid,
                                openid: getApp().user.openid,
                                type: 2,
                                content: "跳转小程序页面",
                                page: t
                            });
                            var u = "", n = 0;
                            this.pageActive.options && (void 0 != this.pageActive.options.title ? u = this.pageActive.options.title : "product" == this.pageActive.options.type ? (u = "产品", 
                            n = this.pageActive.options.id) : "article" == this.pageActive.options.type && (u = "文章", 
                            n = this.pageActive.options.id)), u = u || this.title, setTimeout(function() {
                                getApp().visitLog(1, u, n);
                            }, 1500), e.setNavigationBarTitle({
                                title: u || this.title
                            }), this.page_onShow && this.page_onShow();
                        } else "Hide" === a ? this.page_onHide && this.page_onHide() : "Unload" === a ? this.page_onUnload && this.page_onUnload() : "PullDownRefresh" === a ? this.page_onPullDownRefresh && this.page_onPullDownRefresh() : "ReachBottom" === a ? this.page_onReachBottom && this.page_onReachBottom() : "ShareAppMessage" === a && this.page_onShareAppMessage && this.page_onShareAppMessage();
                    }
                }
            };
            l.default = u;
        }).call(this, a("543d")["default"]);
    },
    "460b": function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = a("b1b6"), u = {
            data: function() {
                return {
                    newUserVisible: !1,
                    newUserList: []
                };
            },
            mounted: function() {
                var e = this;
                getApp().user.userid || (getApp().getBusinessInfo(), getApp().userLogin().then(function(e) {
                    return (0, t.get)("Giftnew_getGiftnew", {
                        user_id: getApp().user.userid
                    });
                }).then(function(l) {
                    return l.data.is_use ? (e.newUserList = l.data.coupon_list, e.showNewUser(), (0, 
                    t.get)("Giftnew_userGiftnew", {
                        user_id: getApp().user.userid,
                        gift_new_id: l.data.gift_new_id
                    })) : Promise.resolve();
                }));
            },
            methods: {
                showNewUser: function() {
                    this.newUserVisible = !0;
                },
                hideNewUser: function() {
                    this.newUserVisible = !1;
                }
            }
        };
        l.default = u;
    },
    5140: function(e, l) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAC8VBMVEUAAADhwjuLTBejYCD/vUv/w0n/6c//wkX/w0yVUxmXUxbxxVDLuC//78zBuCn/687/uEr/6s7/1Zv/wEmiXRqPThf/ukr/6c//6MibUxn91qL/26j/uUv/6c+dWRz/v0uhXB3/wkr/vUrGvyz/6sz/78/dqzLfvTulXyD/uUqisxv/w0v/6c//1Zr/6s//6tDMwDKgWx7/58bLvzD/v0qgXR7/v0v/6s//vkueWRv/6sz/69GPThf/6s7MwDL/w0v/1Jqjshv/w0v/3a+mtB3/3a2UUhnMwDKkYCD/w0z/vkr/1Zr/wUulYCCptR/QvTP/6s//1Jn/v0v/vEr/1Zr/47vNwDL/1Jr/6sv/1pm9uyf/15v/wEn/wEn/1JqKShX/68fNwS+1uCDnyDzsujv/wkvoyqr/3a//6s7LwDPNmWH/3q+hXB7/6s/NwTP/w0z/w0v/3rKntB3MwDP/w0v/4bz/1ZmLTBaNTBbNwDL/ukr/1pnkwj2ttR//vEn/vEmLTBT/6Lz/15f/6s/MwDP/1ZqMTBelYCH/w0z/t0uZrxf/1VG/bA2SURn/1p3qzzLlwT//2qfjzDH/4LWmsx2NTRfUwDb/2aWnsh7/vUuzuCSjXh//0E//yU3/5sXLvzL/2aP/2KD/6cz/00+eWh3/6Mj/zE7YwDi/vCu+uSqfsRq0ZxS4aRD+wkvFvi2oYR3/4rv2w0fPwTOaVxz/5sL/5b//xUy4uiecsBiQTxj/3bH/3Kr/zW/3uEbxw0TtwkLvuULcwTrRwDXeyTKutSGsYxqwZBf/3a3/ymLpuj/iwT2cYS6psh+gXB6UVB2jshu7ag+9aw7xyZf/1Y7/0XnHmm7/zU6pdETkuTzJvzCXVRv/2pfFkVu2hVr/zk7/xkzctjjVtjTKti+3aBLsz7D/3KHjw6Hrw5LiuIbYsITNonX/xlT/wEv6w0npwkHpwUC0tCTxw4j/zYPVqHf/uVKvekiueEbsu0Lnwj+vdj+4tScCPBYeAAAAg3RSTlMAcMBAcBHtIkBwUgOvD5RP+vLBKBHt2IBjJv3z6LCakVpNRDoyHwn99vPs6uDgzsK2sZeMiH97bGJHQRn8+fXx8OLc2s7MzMvIx76wr6SkoaCgoJuQe2NgWlBLQDs0MDArKyAZDfjv6Ofj393b2dXQyLCuppiJgIB/enJwaWRbV0AiIF/C1gwAAAkISURBVHja7NahbsJQFIDhE6bYLBU1BLVgEQgSNJnZM+wF5jc5w7mGyqtq69qkoqoPUFwJILE8w6ZHLxToRjlpIafQ3M9VVPw55/YWNE3TNE3TNE3T7sygeeShKLMFt6E/xCNSFNftdW4gpolIh9At7cpThpglSur2q00xsfREfNfbcCNfbLWfoEKP5UMWkx1vKpTeM/CjQ+IgcOxzA5kczCOReAVudEgcqieHmkjKFYk+8KJDHNxZiVzR2vP+lgyAEx1ih5hyxHmROz8qeQEedAiKRIB7liBNt0umjnwHeNAh6nzPMmUk31Mn3mccCR0Siw0rU0bz5/uRtIAFHeIUnYgSqZEw7hYdYuWcEYJaLp/vLqFDZM5XizBNd+v9s2kCAzIEA3WPyMw9QovSL3CMiI03oDCESFvNxMrc7LQkZJ28iBvGI3Ab4EF2CLETOKLYL6SXhqDBPpMW/heIEtzdatmoNICbvFKJv164/iEEv4CZgSdYtigrDfkAZm08Ra7sy0L4d8vEHDPnvkJghLlkaBVXWYgp8ZpkZSHQrksIjOoS8tST9QgB6Bg1CQEwwpqENDC0QlmLkNRyfIEl4q2E/Iwv8n0zIb/c2DFLw0AUwPE3uQUxi6Hi1m6tBRfBqdCxSwuFIoXipCA4uLi4ebw1UKS4SSlkd+miH8Ah0KEQsrRbaW03cXIT7JA7aITe5S4v/X2DP/ceucsYlYyphPioxvWJhCxR0TeRkBxG+kOPbW1OI8THSJfJGIxIhAQY8ZiUKYmQBTdYTM6SREiOnyw5MwohPVQPGfQIhIQY+WCSfAIhE4w8MUkhgZAgiZApgZDVroR8JhES7ErIKuUQ/2cyWSQRMg/CUWoh1s3X37dDCFEwC9MJaZcQlUNEVxaY10JMPIQV82BaC3WEsD0LzHqs6AlhJ2BWDTWFMAdM6qC2kCKYdK8vhBndd1tjyBkYVNIYcggGocaQYzCosisnErcj3ayFNDWG7INBF/pCDsCo0uaQfsYmSziSZ+SoH4gFZjU2h3hM0TmY1ohGizPM1JVxrbkp5E1trvYhDW17veCY1LbXC5CSzkPNtm3kDZiUcrnuWJCyI+S8ZuAREqeKnHf6F8VYp8jzyL9BYuURVS/ABSBBWBJXYt1vgYY78UjI369iXbrikWR1sgCuUenrXgYqHBS8UH5KbbHu2Kf9l/Q/jisOV1YPBKCKgmHmvuq/7dtZaBNBGMDxEawK8agUfFBBbEVRX0RFRFFRFFFEQVFEFDxBEVQ8HhQPxAnMREibtlQNRhND06RgaENNgz08WtCK0IeKWAQv8MkTERSfTGZ2u/ttJm4Sd5Ns2N+DYEHwz8x8s2m3suUBEOLO/phMXo5KyhmnpsRaTycqR7UlVtxYKcun5lNyuOgfQtIt82tKOvQ7VsxCJWhnwAk16HaU1ORVbPc7IY/Oh5OdqERNmuqE3P9alDHLUMnaO82pEWjL+GRSMs+8IhPWObNMWehApW2726nlfnIrbVuV6DFXu8wXBXJ3taljFpbg9SHg8TiFAh5PQ9L9tsnIGtxOv8ftzORJ85UxyBpSEYEu4bJ0tSU/0VsqJMnf5fG71Rur4V6qwnohKdeudHR0tN1L/sETLBwis0OyZ4fYIXbIv9kh5Ray/8LmtfPmbc4vZNf4BYt21BxERbbr5Np5Lpdr0NsZxjX5hOzH3JFkzj5UNKtdjBenbMkn5CxWWYCKZLaLw8z6fEJOYbVirUkNCFlZvXQ0pxsyeTS3tPoYCKlBRQJCcA+V6IbcojIMHEBF0spDwph5mHtID+hYiQoOHvZOzAzkHvIQhKxHRbIkIk8tZk7uIQMgZM4SVASOxZX0PQ9pxExL7iFzQMgArVzsQAVWPZ1S+oqHtGImJgjxC0PuUUkL5pRDNn03KqitlBGPrYASEhCGNFBJDDPg329DheOYQrlBHhJVjS24Im5hiOeGBAM3uE0F215Vc6nkOQ+JwLGl+/rWa8L1go4mItlQoPtkZiWVwbH1inI/9F4NfEG4byDkEZGtqUIFcI4qPvCQ63Bs/dT5Vf1mInkGQurIiFUFOPLVVOUdDxnEzGMwtjK/dvqRSODQekAU88cik1XJ+0o0tihzg3T/+yeiT4nkMQhpJyprKpCpKuZSoBWMrR6WkaSeW3cyLshdDNwlahtmIzNNodBz8Nj4i9LPJAksyX3BgoiG1mMCzUAm2kY1/sCxlezghuCrQnBkyR5ohxY0E5mmiirA2OqX/i/y7oCbq1lzh4iH1jMiCQWDPja6wDExa2PBsdUIrjRtSaAZdsgegZCvhPNdTXpJkk4jk1yiaXpcnOC8DglesLmj7KuMQyt0NeVNahiYdS/OpekSPGRYMEG73aoTz2ZXFzvnOkOLrQgv2YhMsZQCorH1gAAvAuqXOZ50E6A9w9DyBVlJ6pzsQWaYTgW+g7FVRzSeDgWkdRlSVkM4tFrIiLc3UyHBOCGbkAkuUpEIHFtE4FN39yciUCcaWryErclNQshYxJg3svTHlj44tL4RFZ+8uRYjwx2kQg95SAKc2Ow0gZBeovZGWpL5DmS0GVQMzt92ok88tL4QgG2uuBnX+xQqdl08tvTBoRUj0Et2LZrxxFVJxfrBN+l+Ex36Q4uLs8FFyHFksD3iE/Ih0t/I9HtTIk11WWu5rdb0tRduLjaC3xJSgZDpR2TguQvoj+L/0tKuHVwh4w/JRprmfQJ2dOL/FesFe4vNrSWIMfFaf+UyugNOvSA/JFtNP+utsKMRc8Nhrzc8nPfu0hySODmBjJW+sVxQBDNh1peI5Lal+ur7Ytp7McQv9/nIUA7B0yKEmU75r16cg77a2to+zDzTnvZDyFAVgud3YBCnRJXzn8sEq0+G1Ct7C44tZKgqwY0uOCJe5QvX8wiB30uR7vbZyEhjswtpVL7QmkcIfH6W5m9FMULUk8zSIWWzIuozYumQ4ZG9lYhaOgSHEyMPLNYOwdFBdkDC2OohyZRIJIpxGYQwRoWEyiDEV1YhvjIIIcHUBytrhciP8TAkHgrFLRYSq6+tj8khgMVCGDskN6O1toznJnKLRhnj/DgtZLPZbDabzWaz2Wyl7S9CtL7ZumKGPgAAAABJRU5ErkJggg==";
    },
    "543d": function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.createApp = fl, l.createComponent = _l, l.createPage = ml, l.default = void 0;
        var t = u(a("66fd"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function n(e, l) {
            return i(e) || o(e, l) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function o(e, l) {
            var a = [], t = !0, u = !1, n = void 0;
            try {
                for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) if (a.push(r.value), 
                l && a.length === l) break;
            } catch (i) {
                u = !0, n = i;
            } finally {
                try {
                    t || null == o["return"] || o["return"]();
                } finally {
                    if (u) throw n;
                }
            }
            return a;
        }
        function i(e) {
            if (Array.isArray(e)) return e;
        }
        function v(e, l, a) {
            return l in e ? Object.defineProperty(e, l, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[l] = a, e;
        }
        function b(e) {
            return f(e) || c(e) || s();
        }
        function s() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function c(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }
        function f(e) {
            if (Array.isArray(e)) {
                for (var l = 0, a = new Array(e.length); l < e.length; l++) a[l] = e[l];
                return a;
            }
        }
        var p = Object.prototype.toString, h = Object.prototype.hasOwnProperty;
        function d(e) {
            return "function" === typeof e;
        }
        function g(e) {
            return "string" === typeof e;
        }
        function y(e) {
            return "[object Object]" === p.call(e);
        }
        function m(e, l) {
            return h.call(e, l);
        }
        function _() {}
        function w(e) {
            var l = Object.create(null);
            return function(a) {
                var t = l[a];
                return t || (l[a] = e(a));
            };
        }
        var x = /-(\w)/g, A = w(function(e) {
            return e.replace(x, function(e, l) {
                return l ? l.toUpperCase() : "";
            });
        }), O = [ "invoke", "success", "fail", "complete", "returnValue" ], k = {}, S = {};
        function E(e, l) {
            var a = l ? e ? e.concat(l) : Array.isArray(l) ? l : [ l ] : e;
            return a ? P(a) : a;
        }
        function P(e) {
            for (var l = [], a = 0; a < e.length; a++) -1 === l.indexOf(e[a]) && l.push(e[a]);
            return l;
        }
        function C(e, l) {
            var a = e.indexOf(l);
            -1 !== a && e.splice(a, 1);
        }
        function D(e, l) {
            Object.keys(l).forEach(function(a) {
                -1 !== O.indexOf(a) && d(l[a]) && (e[a] = E(e[a], l[a]));
            });
        }
        function $(e, l) {
            e && l && Object.keys(l).forEach(function(a) {
                -1 !== O.indexOf(a) && d(l[a]) && C(e[a], l[a]);
            });
        }
        function T(e, l) {
            "string" === typeof e && y(l) ? D(S[e] || (S[e] = {}), l) : y(e) && D(k, e);
        }
        function j(e, l) {
            "string" === typeof e ? y(l) ? $(S[e], l) : delete S[e] : y(e) && $(k, e);
        }
        function R(e) {
            return function(l) {
                return e(l) || l;
            };
        }
        function B(e) {
            return !!e && ("object" === typeof e || "function" === typeof e) && "function" === typeof e.then;
        }
        function L(e, l) {
            for (var a = !1, t = 0; t < e.length; t++) {
                var u = e[t];
                if (a) a = Promise.then(R(u)); else {
                    var n = u(l);
                    if (B(n) && (a = Promise.resolve(n)), !1 === n) return {
                        then: function() {}
                    };
                }
            }
            return a || {
                then: function(e) {
                    return e(l);
                }
            };
        }
        function M(e) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return [ "success", "fail", "complete" ].forEach(function(a) {
                if (Array.isArray(e[a])) {
                    var t = l[a];
                    l[a] = function(l) {
                        L(e[a], l).then(function(e) {
                            return d(t) && t(e) || e;
                        });
                    };
                }
            }), l;
        }
        function I(e, l) {
            var a = [];
            Array.isArray(k.returnValue) && a.push.apply(a, b(k.returnValue));
            var t = S[e];
            return t && Array.isArray(t.returnValue) && a.push.apply(a, b(t.returnValue)), a.forEach(function(e) {
                l = e(l) || l;
            }), l;
        }
        function N(e) {
            var l = Object.create(null);
            Object.keys(k).forEach(function(e) {
                "returnValue" !== e && (l[e] = k[e].slice());
            });
            var a = S[e];
            return a && Object.keys(a).forEach(function(e) {
                "returnValue" !== e && (l[e] = (l[e] || []).concat(a[e]));
            }), l;
        }
        function F(e, l, a) {
            for (var t = arguments.length, u = new Array(t > 3 ? t - 3 : 0), n = 3; n < t; n++) u[n - 3] = arguments[n];
            var r = N(e);
            if (r && Object.keys(r).length) {
                if (Array.isArray(r.invoke)) {
                    var o = L(r.invoke, a);
                    return o.then(function(e) {
                        return l.apply(void 0, [ M(r, e) ].concat(u));
                    });
                }
                return l.apply(void 0, [ M(r, a) ].concat(u));
            }
            return l.apply(void 0, [ a ].concat(u));
        }
        var z = {
            returnValue: function(e) {
                return B(e) ? e.then(function(e) {
                    return e[1];
                }).catch(function(e) {
                    return e[0];
                }) : e;
            }
        }, U = /^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/, H = /^create|Manager$/, V = /^on/;
        function q(e) {
            return H.test(e);
        }
        function Y(e) {
            return U.test(e);
        }
        function J(e) {
            return V.test(e) && "onPush" !== e;
        }
        function W(e) {
            return e.then(function(e) {
                return [ null, e ];
            }).catch(function(e) {
                return [ e ];
            });
        }
        function Q(e) {
            return !(q(e) || Y(e) || J(e));
        }
        function G(e, l) {
            return Q(e) ? function() {
                for (var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) u[n - 1] = arguments[n];
                return d(a.success) || d(a.fail) || d(a.complete) ? I(e, F.apply(void 0, [ e, l, a ].concat(u))) : I(e, W(new Promise(function(t, n) {
                    F.apply(void 0, [ e, l, Object.assign({}, a, {
                        success: t,
                        fail: n
                    }) ].concat(u)), Promise.prototype.finally || (Promise.prototype.finally = function(e) {
                        var l = this.constructor;
                        return this.then(function(a) {
                            return l.resolve(e()).then(function() {
                                return a;
                            });
                        }, function(a) {
                            return l.resolve(e()).then(function() {
                                throw a;
                            });
                        });
                    });
                })));
            } : l;
        }
        var K = 1e-4, Z = 750, X = !1, ee = 0, le = 0;
        function ae() {
            var e = wx.getSystemInfoSync(), l = e.platform, a = e.pixelRatio, t = e.windowWidth;
            ee = t, le = a, X = "ios" === l;
        }
        function te(e, l) {
            if (0 === ee && ae(), e = Number(e), 0 === e) return 0;
            var a = e / Z * (l || ee);
            return a < 0 && (a = -a), a = Math.floor(a + K), 0 === a ? 1 !== le && X ? .5 : 1 : e < 0 ? -a : a;
        }
        var ue = {
            promiseInterceptor: z
        }, ne = Object.freeze({
            upx2px: te,
            interceptors: ue,
            addInterceptor: T,
            removeInterceptor: j
        }), re = {
            args: function(e) {
                var l = parseInt(e.current);
                if (!isNaN(l)) {
                    var a = e.urls;
                    if (Array.isArray(a)) {
                        var t = a.length;
                        if (t) return l < 0 ? l = 0 : l >= t && (l = t - 1), l > 0 ? (e.current = a[l], 
                        e.urls = a.filter(function(e, t) {
                            return !(t < l) || e !== a[l];
                        })) : e.current = a[0], {
                            indicator: !1,
                            loop: !1
                        };
                    }
                }
            }
        }, oe = {
            previewImage: re
        }, ie = [ "vibrate" ], ve = [], be = [ "success", "fail", "cancel", "complete" ];
        function se(e, l, a) {
            return function(t) {
                return l(fe(e, t, a));
            };
        }
        function ce(e, l) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (y(l)) {
                var n = !0 === u ? l : {};
                for (var r in d(a) && (a = a(l, n) || {}), l) if (m(a, r)) {
                    var o = a[r];
                    d(o) && (o = o(l[r], l, n)), o ? g(o) ? n[o] = l[r] : y(o) && (n[o.name ? o.name : r] = o.value) : console.warn("微信小程序 ".concat(e, "暂不支持").concat(r));
                } else -1 !== be.indexOf(r) ? n[r] = se(e, l[r], t) : u || (n[r] = l[r]);
                return n;
            }
            return d(l) && (l = se(e, l, t)), l;
        }
        function fe(e, l, a) {
            var t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return d(oe.returnValue) && (l = oe.returnValue(e, l)), ce(e, l, a, {}, t);
        }
        function pe(e, l) {
            if (m(oe, e)) {
                var a = oe[e];
                return a ? function(l, t) {
                    var u = a;
                    d(a) && (u = a(l)), l = ce(e, l, u.args, u.returnValue);
                    var n = [ l ];
                    "undefined" !== typeof t && n.push(t);
                    var r = wx[u.name || e].apply(wx, n);
                    return Y(e) ? fe(e, r, u.returnValue, q(e)) : r;
                } : function() {
                    console.error("微信小程序 暂不支持".concat(e));
                };
            }
            return l;
        }
        var he = Object.create(null), de = [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ];
        function ge(e) {
            return function(l) {
                var a = l.fail, t = l.complete, u = {
                    errMsg: "".concat(e, ":fail:暂不支持 ").concat(e, " 方法")
                };
                d(a) && a(u), d(t) && t(u);
            };
        }
        de.forEach(function(e) {
            he[e] = ge(e);
        });
        var ye = {
            oauth: [ "weixin" ],
            share: [ "weixin" ],
            payment: [ "wxpay" ],
            push: [ "weixin" ]
        };
        function me(e) {
            var l = e.service, a = e.success, t = e.fail, u = e.complete, n = !1;
            ye[l] ? (n = {
                errMsg: "getProvider:ok",
                service: l,
                provider: ye[l]
            }, d(a) && a(n)) : (n = {
                errMsg: "getProvider:fail:服务[" + l + "]不存在"
            }, d(t) && t(n)), d(u) && u(n);
        }
        var _e = Object.freeze({
            getProvider: me
        }), we = function() {
            return "function" === typeof getUniEmitter ? getUniEmitter : function() {
                return e || (e = new t.default()), e;
            };
            var e;
        }();
        function xe(e, l, a) {
            return e[l].apply(e, a);
        }
        function Ae() {
            return xe(we(), "$on", Array.prototype.slice.call(arguments));
        }
        function Oe() {
            return xe(we(), "$off", Array.prototype.slice.call(arguments));
        }
        function ke() {
            return xe(we(), "$once", Array.prototype.slice.call(arguments));
        }
        function Se() {
            return xe(we(), "$emit", Array.prototype.slice.call(arguments));
        }
        var Ee = Object.freeze({
            $on: Ae,
            $off: Oe,
            $once: ke,
            $emit: Se
        }), Pe = Object.freeze({}), Ce = Page, De = Component, $e = /:/g, Te = w(function(e) {
            return A(e.replace($e, "-"));
        });
        function je(e) {
            if (wx.canIUse("nextTick")) {
                var l = e.triggerEvent;
                e.triggerEvent = function(a) {
                    for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) u[n - 1] = arguments[n];
                    return l.apply(e, [ Te(a) ].concat(u));
                };
            }
        }
        function Re(e, l) {
            var a = l[e];
            l[e] = a ? function() {
                je(this);
                for (var e = arguments.length, l = new Array(e), t = 0; t < e; t++) l[t] = arguments[t];
                return a.apply(this, l);
            } : function() {
                je(this);
            };
        }
        Page = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Re("onLoad", e), Ce(e);
        }, Component = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Re("created", e), De(e);
        };
        var Be = [ "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ];
        function Le(e, l) {
            var a = e.$mp[e.mpType];
            l.forEach(function(l) {
                m(a, l) && (e[l] = a[l]);
            });
        }
        function Me(e, l) {
            if (!l) return !0;
            if (t.default.options && Array.isArray(t.default.options[e])) return !0;
            if (l = l.default || l, d(l)) return !!d(l.extendOptions[e]) || !!(l.super && l.super.options && Array.isArray(l.super.options[e]));
            if (d(l[e])) return !0;
            var a = l.mixins;
            return Array.isArray(a) ? !!a.find(function(l) {
                return Me(e, l);
            }) : void 0;
        }
        function Ie(e, l, a) {
            l.forEach(function(l) {
                Me(l, a) && (e[l] = function(e) {
                    return this.$vm && this.$vm.__call_hook(l, e);
                });
            });
        }
        function Ne(e, l) {
            var a;
            return l = l.default || l, d(l) ? (a = l, l = a.extendOptions) : a = e.extend(l), 
            [ a, l ];
        }
        function Fe(e, l) {
            if (Array.isArray(l) && l.length) {
                var a = Object.create(null);
                l.forEach(function(e) {
                    a[e] = !0;
                }), e.$scopedSlots = e.$slots = a;
            }
        }
        function ze(e, l) {
            e = (e || "").split(",");
            var a = e.length;
            1 === a ? l._$vueId = e[0] : 2 === a && (l._$vueId = e[0], l._$vuePid = e[1]);
        }
        function Ue(e, l) {
            var a = e.data || {}, t = e.methods || {};
            if ("function" === typeof a) try {
                a = a.call(l);
            } catch (u) {
                Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", a);
            } else try {
                a = JSON.parse(JSON.stringify(a));
            } catch (u) {}
            return y(a) || (a = {}), Object.keys(t).forEach(function(e) {
                -1 !== l.__lifecycle_hooks__.indexOf(e) || m(a, e) || (a[e] = t[e]);
            }), a;
        }
        var He = [ String, Number, Boolean, Object, Array, null ];
        function Ve(e) {
            return function(l, a) {
                this.$vm && (this.$vm[e] = l);
            };
        }
        function qe(e, l) {
            var a = e["behaviors"], t = e["extends"], u = e["mixins"], n = e["props"];
            n || (e["props"] = n = []);
            var r = [];
            return Array.isArray(a) && a.forEach(function(e) {
                r.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(n) ? (n.push("name"), 
                n.push("value")) : (n["name"] = {
                    type: String,
                    default: ""
                }, n["value"] = {
                    type: [ String, Number, Boolean, Array, Object, Date ],
                    default: ""
                }));
            }), y(t) && t.props && r.push(l({
                properties: Je(t.props, !0)
            })), Array.isArray(u) && u.forEach(function(e) {
                y(e) && e.props && r.push(l({
                    properties: Je(e.props, !0)
                }));
            }), r;
        }
        function Ye(e, l, a, t) {
            return Array.isArray(l) && 1 === l.length ? l[0] : l;
        }
        function Je(e) {
            var l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 
            {});
            return l || (a.vueId = {
                type: String,
                value: ""
            }, a.vueSlots = {
                type: null,
                value: [],
                observer: function(e, l) {
                    var a = Object.create(null);
                    e.forEach(function(e) {
                        a[e] = !0;
                    }), this.setData({
                        $slots: a
                    });
                }
            }), Array.isArray(e) ? e.forEach(function(e) {
                a[e] = {
                    type: null,
                    observer: Ve(e)
                };
            }) : y(e) && Object.keys(e).forEach(function(l) {
                var t = e[l];
                if (y(t)) {
                    var u = t["default"];
                    d(u) && (u = u()), t.type = Ye(l, t.type), a[l] = {
                        type: -1 !== He.indexOf(t.type) ? t.type : null,
                        value: u,
                        observer: Ve(l)
                    };
                } else {
                    var n = Ye(l, t);
                    a[l] = {
                        type: -1 !== He.indexOf(n) ? n : null,
                        observer: Ve(l)
                    };
                }
            }), a;
        }
        function We(e) {
            try {
                e.mp = JSON.parse(JSON.stringify(e));
            } catch (l) {}
            return e.stopPropagation = _, e.preventDefault = _, e.target = e.target || {}, m(e, "detail") || (e.detail = {}), 
            y(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e;
        }
        function Qe(e, l) {
            var a = e;
            return l.forEach(function(l) {
                var t = l[0], u = l[2];
                if (t || "undefined" !== typeof u) {
                    var n = l[1], r = l[3], o = t ? e.__get_value(t, a) : a;
                    Number.isInteger(o) ? a = u : n ? Array.isArray(o) ? a = o.find(function(l) {
                        return e.__get_value(n, l) === u;
                    }) : y(o) ? a = Object.keys(o).find(function(l) {
                        return e.__get_value(n, o[l]) === u;
                    }) : console.error("v-for 暂不支持循环数据：", o) : a = o[u], r && (a = e.__get_value(r, a));
                }
            }), a;
        }
        function Ge(e, l, a) {
            var t = {};
            return Array.isArray(l) && l.length && l.forEach(function(l, u) {
                "string" === typeof l ? l ? "$event" === l ? t["$" + u] = a : 0 === l.indexOf("$event.") ? t["$" + u] = e.__get_value(l.replace("$event.", ""), a) : t["$" + u] = e.__get_value(l) : t["$" + u] = e : t["$" + u] = Qe(e, l);
            }), t;
        }
        function Ke(e) {
            for (var l = {}, a = 1; a < e.length; a++) {
                var t = e[a];
                l[t[0]] = t[1];
            }
            return l;
        }
        function Ze(e, l) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], u = arguments.length > 4 ? arguments[4] : void 0, n = arguments.length > 5 ? arguments[5] : void 0, r = !1;
            if (u && (r = l.currentTarget && l.currentTarget.dataset && "wx" === l.currentTarget.dataset.comType, 
            !a.length)) return r ? [ l ] : l.detail.__args__ || l.detail;
            var o = Ge(e, t, l), i = [];
            return a.forEach(function(e) {
                "$event" === e ? "__set_model" !== n || u ? u && !r ? i.push(l.detail.__args__[0]) : i.push(l) : i.push(l.target.value) : Array.isArray(e) && "o" === e[0] ? i.push(Ke(e)) : "string" === typeof e && m(o, e) ? i.push(o[e]) : i.push(e);
            }), i;
        }
        var Xe = "~", el = "^";
        function ll(e, l) {
            return e === l || "regionchange" === l && ("begin" === e || "end" === e);
        }
        function al(e) {
            var l = this;
            e = We(e);
            var a = (e.currentTarget || e.target).dataset;
            if (!a) return console.warn("事件信息不存在");
            var t = a.eventOpts || a["event-opts"];
            if (!t) return console.warn("事件信息不存在");
            var u = e.type, n = [];
            return t.forEach(function(a) {
                var t = a[0], r = a[1], o = t.charAt(0) === el;
                t = o ? t.slice(1) : t;
                var i = t.charAt(0) === Xe;
                t = i ? t.slice(1) : t, r && ll(u, t) && r.forEach(function(a) {
                    var t = a[0];
                    if (t) {
                        var u = l.$vm;
                        if (u.$options.generic && u.$parent && u.$parent.$parent && (u = u.$parent.$parent), 
                        "$emit" === t) return void u.$emit.apply(u, Ze(l.$vm, e, a[1], a[2], o, t));
                        var r = u[t];
                        if (!d(r)) throw new Error(" _vm.".concat(t, " is not a function"));
                        if (i) {
                            if (r.once) return;
                            r.once = !0;
                        }
                        n.push(r.apply(u, Ze(l.$vm, e, a[1], a[2], o, t)));
                    }
                });
            }), "input" === u && 1 === n.length && "undefined" !== typeof n[0] ? n[0] : void 0;
        }
        var tl = [ "onShow", "onHide", "onError", "onPageNotFound" ];
        function ul(e, l) {
            var a = l.mocks, u = l.initRefs;
            e.$options.store && (t.default.prototype.$store = e.$options.store), t.default.prototype.mpHost = "mp-weixin", 
            t.default.mixin({
                beforeCreate: function() {
                    this.$options.mpType && (this.mpType = this.$options.mpType, this.$mp = v({
                        data: {}
                    }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                    delete this.$options.mpType, delete this.$options.mpInstance, "app" !== this.mpType && (u(this), 
                    Le(this, a)));
                }
            });
            var n = {
                onLaunch: function(l) {
                    this.$vm || (wx.canIUse("nextTick") || console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                    this.$vm = e, this.$vm.$mp = {
                        app: this
                    }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                    this.$vm.__call_hook("mounted", l), this.$vm.__call_hook("onLaunch", l));
                }
            };
            n.globalData = e.$options.globalData || {};
            var r = e.$options.methods;
            return r && Object.keys(r).forEach(function(e) {
                n[e] = r[e];
            }), Ie(n, tl), n;
        }
        var nl = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];
        function rl(e, l) {
            var a = e.$children, t = a.find(function(e) {
                return e.$scope._$vueId === l;
            });
            if (t) return t;
            for (var u = a.length - 1; u >= 0; u--) if (t = rl(a[u], l), t) return t;
        }
        function ol(e) {
            return Behavior(e);
        }
        function il() {
            return !!this.route;
        }
        function vl(e) {
            this.triggerEvent("__l", e);
        }
        function bl(e) {
            var l = e.$scope;
            Object.defineProperty(e, "$refs", {
                get: function() {
                    var e = {}, a = l.selectAllComponents(".vue-ref");
                    a.forEach(function(l) {
                        var a = l.dataset.ref;
                        e[a] = l.$vm || l;
                    });
                    var t = l.selectAllComponents(".vue-ref-in-for");
                    return t.forEach(function(l) {
                        var a = l.dataset.ref;
                        e[a] || (e[a] = []), e[a].push(l.$vm || l);
                    }), e;
                }
            });
        }
        function sl(e) {
            var l, a = e.detail || e.value, t = a.vuePid, u = a.vueOptions;
            t && (l = rl(this.$vm, t)), l || (l = this.$vm), u.parent = l;
        }
        function cl(e) {
            return ul(e, {
                mocks: nl,
                initRefs: bl
            });
        }
        function fl(e) {
            return App(cl(e)), e;
        }
        function pl(e) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = l.isPage, u = l.initRelation, r = Ne(t.default, e), o = n(r, 2), i = o[0], v = o[1], b = {
                multipleSlots: !0,
                addGlobalClass: !0
            };
            v["mp-weixin"] && v["mp-weixin"]["options"] && Object.assign(b, v["mp-weixin"]["options"]);
            var s = {
                options: b,
                data: Ue(v, t.default.prototype),
                behaviors: qe(v, ol),
                properties: Je(v.props, !1, v.__file),
                lifetimes: {
                    attached: function() {
                        var e = this.properties, l = {
                            mpType: a.call(this) ? "page" : "component",
                            mpInstance: this,
                            propsData: e
                        };
                        ze(e.vueId, this), u.call(this, {
                            vuePid: this._$vuePid,
                            vueOptions: l
                        }), this.$vm = new i(l), Fe(this.$vm, e.vueSlots), this.$vm.$mount();
                    },
                    ready: function() {
                        this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                    },
                    detached: function() {
                        this.$vm.$destroy();
                    }
                },
                pageLifetimes: {
                    show: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageShow", e);
                    },
                    hide: function() {
                        this.$vm && this.$vm.__call_hook("onPageHide");
                    },
                    resize: function(e) {
                        this.$vm && this.$vm.__call_hook("onPageResize", e);
                    }
                },
                methods: {
                    __l: sl,
                    __e: al
                }
            };
            return Array.isArray(v.wxsCallMethods) && v.wxsCallMethods.forEach(function(e) {
                s.methods[e] = function(l) {
                    return this.$vm[e](l);
                };
            }), a ? s : [ s, i ];
        }
        function hl(e) {
            return pl(e, {
                isPage: il,
                initRelation: vl
            });
        }
        var dl = [ "onShow", "onHide", "onUnload" ];
        function gl(e, l) {
            l.isPage, l.initRelation;
            var a = hl(e);
            return Ie(a.methods, dl, e), a.methods.onLoad = function(e) {
                this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
            }, a;
        }
        function yl(e) {
            return gl(e, {
                isPage: il,
                initRelation: vl
            });
        }
        function ml(e) {
            return Component(yl(e));
        }
        function _l(e) {
            return Component(hl(e));
        }
        dl.push.apply(dl, Be), ie.forEach(function(e) {
            oe[e] = !1;
        }), ve.forEach(function(e) {
            var l = oe[e] && oe[e].name ? oe[e].name : e;
            wx.canIUse(l) || (oe[e] = !1);
        });
        var wl = {};
        "undefined" !== typeof Proxy ? wl = new Proxy({}, {
            get: function(e, l) {
                return e[l] ? e[l] : ne[l] ? ne[l] : Pe[l] ? G(l, Pe[l]) : _e[l] ? G(l, _e[l]) : he[l] ? G(l, he[l]) : Ee[l] ? Ee[l] : m(wx, l) || m(oe, l) ? G(l, pe(l, wx[l])) : void 0;
            },
            set: function(e, l, a) {
                return e[l] = a, !0;
            }
        }) : (Object.keys(ne).forEach(function(e) {
            wl[e] = ne[e];
        }), Object.keys(he).forEach(function(e) {
            wl[e] = G(e, he[e]);
        }), Object.keys(_e).forEach(function(e) {
            wl[e] = G(e, he[e]);
        }), Object.keys(Ee).forEach(function(e) {
            wl[e] = Ee[e];
        }), Object.keys(Pe).forEach(function(e) {
            wl[e] = G(e, Pe[e]);
        }), Object.keys(wx).forEach(function(e) {
            (m(wx, e) || m(oe, e)) && (wl[e] = G(e, pe(e, wx[e])));
        })), wx.createApp = fl, wx.createPage = ml, wx.createComponent = _l;
        var xl = wl, Al = xl;
        l.default = Al;
    },
    "575c": function(e, l, a) {
        "use strict";
        function t(e, l) {
            return r(e) || n(e, l) || u();
        }
        function u() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function n(e, l) {
            var a = [], t = !0, u = !1, n = void 0;
            try {
                for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) if (a.push(r.value), 
                l && a.length === l) break;
            } catch (i) {
                u = !0, n = i;
            } finally {
                try {
                    t || null == o["return"] || o["return"]();
                } finally {
                    if (u) throw n;
                }
            }
            return a;
        }
        function r(e) {
            if (Array.isArray(e)) return e;
        }
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.base64src = v;
        var o = wx.getFileSystemManager(), i = "tmp_base64src";
        function v(e, l) {
            var a = /data:image\/(\w+);base64,(.*)/.exec(e) || [], u = t(a, 3), n = u[1], r = u[2];
            if (!n) return new Error("ERROR_BASE64SRC_PARSE");
            var v = "".concat(wx.env.USER_DATA_PATH, "/").concat(i, ".").concat(n), b = wx.base64ToArrayBuffer(r);
            o.writeFile({
                filePath: v,
                data: b,
                encoding: "binary",
                success: function() {
                    l(v);
                },
                fail: function() {
                    return new Error("ERROR_BASE64SRC_WRITE");
                }
            });
        }
    },
    "5d1e": function(e, l, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = {
                data: function() {
                    return {
                        tabbar_item: {},
                        init: !0
                    };
                },
                methods: {
                    onLoadHandle: function(e) {
                        this.tabbar_item = e[this.tabbar_index].link;
                        var l = this.pageActive;
                        this.$set(l, "options", JSON.parse(JSON.stringify(this.tabbar_item))), this.$set(l, "Load", l.Load + 1), 
                        console.log("onLoadHandle: ", this.pageActive), console.log("tabbarjs_tabbar_item: ", this.tabbar_item);
                    },
                    engineLoad: function(l) {
                        if (l && l.source && (getApp().source = l.source), this.tabbar_index >= 0) {
                            var a = getApp().tabbar.list;
                            if (console.log("list: ", a), a) this.onLoadHandle(a); else {
                                var t = this;
                                getApp().getTabbarData(function() {
                                    a = getApp().tabbar.list, t.onLoadHandle(a);
                                });
                            }
                        } else {
                            this.tabbar_item = l;
                            var u = this.pageActive;
                            this.$set(u, "options", l), this.$set(u, "Load", u.Load + 1);
                        }
                        if (!getApp().siteInfo.native_tabbar) {
                            var n = this;
                            e.$on("tabbar_index", function(l) {
                                n.tabbar_index = l, e.$emit("PageReload"), n.pageActive.Load = 0, n.onLoadHandle(getApp().tabbar.list);
                                var a = n.pageActive;
                                n.$set(a, "Show", a.Show + 1);
                            });
                        }
                    }
                },
                onLoad: function(l) {
                    console.log("tabbar page onLoad !!!!!!"), console.log("all path options: ", l);
                    var a = this;
                    getApp().user.userid && (this.engineLoad(l), this.init = !1), e.$off("USER_INFO_LOAD"), 
                    e.$on("USER_INFO_LOAD", function() {
                        a.init && (a.engineLoad(l), a.init = !1);
                    });
                },
                onReady: function() {
                    var e = this.pageActive;
                    this.$set(e, "Ready", e.Ready + 1);
                },
                onShow: function() {
                    console.log("tabbarjs_onShow: ", this.tabbar_index);
                    var e = this.pageActive;
                    this.$set(e, "Show", e.Show + 1);
                },
                onHide: function() {
                    var e = this.pageActive;
                    this.$set(e, "Hide", e.Hide + 1);
                },
                onUnload: function() {
                    var e = this.pageActive;
                    this.$set(e, "Unload", e.Unload + 1);
                },
                onPullDownRefresh: function() {
                    var e = this.pageActive;
                    this.$set(e, "PullDownRefresh", e.PullDownRefresh + 1);
                },
                onReachBottom: function() {
                    var e = this.pageActive;
                    this.$set(e, "ReachBottom", e.ReachBottom + 1);
                },
                onShareAppMessage: function() {
                    console.log("onshare: ", this.tabbar_item);
                    var e = "", l = 0;
                    void 0 != this.tabbar_item.title ? e = this.tabbar_item.title : "product" == this.tabbar_item.type ? (e = "产品", 
                    l = this.tabbar_item.id) : "article" == this.tabbar_item.type && (e = "文章", l = this.tabbar_item.id), 
                    getApp().visitLog(2, e, l);
                    var a = this.pageActive;
                    this.$set(a, "ShareAppMessage", a.ShareAppMessage + 1);
                    var t = "/yb_shopv2/native/all/index", u = "";
                    for (var n in this.tabbar_item) u += "" === u ? "?" + n + "=" + this.tabbar_item[n] : "&" + n + "=" + this.tabbar_item[n];
                    return u += "&source=3", t += u, -1 != this.tabbar_index && (t = "/yb_shopv2/native/tabbar" + this.tabbar_index + "/index?source=3"), 
                    console.log("share_url:", t), {
                        title: this.tabbar_item.title,
                        path: t
                    };
                }
            };
            l.default = a;
        }).call(this, a("543d")["default"]);
    },
    "5e9c": function(e, l, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = {
                props: {
                    end_show: !1,
                    topRefresh: 0,
                    bottomRefresh: 0,
                    isList: !1
                },
                data: function() {
                    return {
                        list: [],
                        page: 1,
                        end: !1,
                        class_ids: 0,
                        order: "",
                        sort: ""
                    };
                },
                watch: {
                    topRefresh: function() {
                        this.PullDownRefresh();
                    },
                    bottomRefresh: function() {
                        this.ReachBottom();
                    }
                },
                methods: {
                    PullDownRefresh: function() {
                        e.showLoading({
                            title: "加载中"
                        }), this.page = 1, this.end = !1, this.getListData();
                    },
                    ReachBottom: function() {
                        this.end || this.getListData();
                    },
                    getListData: function(l) {
                        if (console.log(JSON.stringify(this.item)), (this.item.data_type && "" !== this.item.data_type || this.item.ids && 0 !== this.item.ids.length) && (this.class_ids !== this.item.class_ids && (this.page = 1, 
                        this.end = !1), this.order !== this.item.order && (this.page = 1, this.end = !1), 
                        this.sort !== this.item.sort && (this.page = 1, this.end = !1), !this.end)) {
                            this.class_ids = this.item.class_ids, this.sort = this.item.sort, this.order = this.item.order;
                            var a = parseInt(this.item.num), t = {
                                type: this.type,
                                num: a,
                                class_ids: this.class_ids,
                                sort: this.sort,
                                order: this.order,
                                ids: l,
                                data_type: this.item.data_type,
                                page: this.page
                            }, u = this;
                            getApp().Req.get("List_Data", t, function(l) {
                                if (e.hideLoading(), e.stopPullDownRefresh(), console.log(l, "列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据列表数据"), 
                                1 === u.page && l.info && l.info.length > 0 && (u.list = []), 1 === u.page && 0 == l.info.length && (u.list = []), 
                                u.list = u.list.concat(l.info), u.isList) {
                                    if (l.info.length < a) return void (u.end = !0);
                                    u.page += 1;
                                }
                            });
                        }
                    }
                }
            };
            l.default = a;
        }).call(this, a("543d")["default"]);
    },
    "66fd": function(e, l, a) {
        "use strict";
        a.r(l), function(e) {
            /*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
            var a = Object.freeze({});
            function t(e) {
                return void 0 === e || null === e;
            }
            function u(e) {
                return void 0 !== e && null !== e;
            }
            function n(e) {
                return !0 === e;
            }
            function r(e) {
                return !1 === e;
            }
            function o(e) {
                return "string" === typeof e || "number" === typeof e || "symbol" === typeof e || "boolean" === typeof e;
            }
            function i(e) {
                return null !== e && "object" === typeof e;
            }
            var v = Object.prototype.toString;
            function b(e) {
                return "[object Object]" === v.call(e);
            }
            function s(e) {
                return "[object RegExp]" === v.call(e);
            }
            function c(e) {
                var l = parseFloat(String(e));
                return l >= 0 && Math.floor(l) === l && isFinite(e);
            }
            function f(e) {
                return u(e) && "function" === typeof e.then && "function" === typeof e.catch;
            }
            function p(e) {
                return null == e ? "" : Array.isArray(e) || b(e) && e.toString === v ? JSON.stringify(e, null, 2) : String(e);
            }
            function h(e) {
                var l = parseFloat(e);
                return isNaN(l) ? e : l;
            }
            function d(e, l) {
                for (var a = Object.create(null), t = e.split(","), u = 0; u < t.length; u++) a[t[u]] = !0;
                return l ? function(e) {
                    return a[e.toLowerCase()];
                } : function(e) {
                    return a[e];
                };
            }
            d("slot,component", !0);
            var g = d("key,ref,slot,slot-scope,is");
            function y(e, l) {
                if (e.length) {
                    var a = e.indexOf(l);
                    if (a > -1) return e.splice(a, 1);
                }
            }
            var m = Object.prototype.hasOwnProperty;
            function _(e, l) {
                return m.call(e, l);
            }
            function w(e) {
                var l = Object.create(null);
                return function(a) {
                    var t = l[a];
                    return t || (l[a] = e(a));
                };
            }
            var x = /-(\w)/g, A = w(function(e) {
                return e.replace(x, function(e, l) {
                    return l ? l.toUpperCase() : "";
                });
            }), O = w(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), k = /\B([A-Z])/g, S = w(function(e) {
                return e.replace(k, "-$1").toLowerCase();
            });
            function E(e, l) {
                function a(a) {
                    var t = arguments.length;
                    return t ? t > 1 ? e.apply(l, arguments) : e.call(l, a) : e.call(l);
                }
                return a._length = e.length, a;
            }
            function P(e, l) {
                return e.bind(l);
            }
            var C = Function.prototype.bind ? P : E;
            function D(e, l) {
                l = l || 0;
                var a = e.length - l, t = new Array(a);
                while (a--) t[a] = e[a + l];
                return t;
            }
            function $(e, l) {
                for (var a in l) e[a] = l[a];
                return e;
            }
            function T(e) {
                for (var l = {}, a = 0; a < e.length; a++) e[a] && $(l, e[a]);
                return l;
            }
            function j(e, l, a) {}
            var R = function(e, l, a) {
                return !1;
            }, B = function(e) {
                return e;
            };
            function L(e, l) {
                if (e === l) return !0;
                var a = i(e), t = i(l);
                if (!a || !t) return !a && !t && String(e) === String(l);
                try {
                    var u = Array.isArray(e), n = Array.isArray(l);
                    if (u && n) return e.length === l.length && e.every(function(e, a) {
                        return L(e, l[a]);
                    });
                    if (e instanceof Date && l instanceof Date) return e.getTime() === l.getTime();
                    if (u || n) return !1;
                    var r = Object.keys(e), o = Object.keys(l);
                    return r.length === o.length && r.every(function(a) {
                        return L(e[a], l[a]);
                    });
                } catch (v) {
                    return !1;
                }
            }
            function M(e, l) {
                for (var a = 0; a < e.length; a++) if (L(e[a], l)) return a;
                return -1;
            }
            function I(e) {
                var l = !1;
                return function() {
                    l || (l = !0, e.apply(this, arguments));
                };
            }
            var N = [ "component", "directive", "filter" ], F = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], z = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: R,
                isReservedAttr: R,
                isUnknownElement: R,
                getTagNamespace: j,
                parsePlatformTagName: B,
                mustUseProp: R,
                async: !0,
                _lifecycleHooks: F
            }, U = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
            function H(e) {
                var l = (e + "").charCodeAt(0);
                return 36 === l || 95 === l;
            }
            function V(e, l, a, t) {
                Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !!t,
                    writable: !0,
                    configurable: !0
                });
            }
            var q = new RegExp("[^" + U.source + ".$_\\d]");
            function Y(e) {
                if (!q.test(e)) {
                    var l = e.split(".");
                    return function(e) {
                        for (var a = 0; a < l.length; a++) {
                            if (!e) return;
                            e = e[l[a]];
                        }
                        return e;
                    };
                }
            }
            var J, W = "__proto__" in {}, Q = "undefined" !== typeof window, G = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform, K = G && WXEnvironment.platform.toLowerCase(), Z = Q && window.navigator.userAgent.toLowerCase(), X = Z && /msie|trident/.test(Z), ee = (Z && Z.indexOf("msie 9.0"), 
            Z && Z.indexOf("edge/") > 0), le = (Z && Z.indexOf("android"), Z && /iphone|ipad|ipod|ios/.test(Z) || "ios" === K), ae = (Z && /chrome\/\d+/.test(Z), 
            Z && /phantomjs/.test(Z), Z && Z.match(/firefox\/(\d+)/), {}.watch);
            if (Q) try {
                var te = {};
                Object.defineProperty(te, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, te);
            } catch (eu) {}
            var ue = function() {
                return void 0 === J && (J = !Q && !G && "undefined" !== typeof e && (e["process"] && "server" === e["process"].env.VUE_ENV)), 
                J;
            }, ne = Q && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function re(e) {
                return "function" === typeof e && /native code/.test(e.toString());
            }
            var oe, ie = "undefined" !== typeof Symbol && re(Symbol) && "undefined" !== typeof Reflect && re(Reflect.ownKeys);
            oe = "undefined" !== typeof Set && re(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function(e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function() {
                    this.set = Object.create(null);
                }, e;
            }();
            var ve = j, be = 0, se = function() {
                this.id = be++, this.subs = [];
            };
            function ce(e) {
                se.SharedObject.targetStack.push(e), se.SharedObject.target = e;
            }
            function fe() {
                se.SharedObject.targetStack.pop(), se.SharedObject.target = se.SharedObject.targetStack[se.SharedObject.targetStack.length - 1];
            }
            se.prototype.addSub = function(e) {
                this.subs.push(e);
            }, se.prototype.removeSub = function(e) {
                y(this.subs, e);
            }, se.prototype.depend = function() {
                se.SharedObject.target && se.SharedObject.target.addDep(this);
            }, se.prototype.notify = function() {
                var e = this.subs.slice();
                for (var l = 0, a = e.length; l < a; l++) e[l].update();
            }, se.SharedObject = "undefined" !== typeof SharedObject ? SharedObject : {}, se.SharedObject.target = null, 
            se.SharedObject.targetStack = [];
            var pe = function(e, l, a, t, u, n, r, o) {
                this.tag = e, this.data = l, this.children = a, this.text = t, this.elm = u, this.ns = void 0, 
                this.context = n, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = l && l.key, this.componentOptions = r, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, he = {
                child: {
                    configurable: !0
                }
            };
            he.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(pe.prototype, he);
            var de = function(e) {
                void 0 === e && (e = "");
                var l = new pe();
                return l.text = e, l.isComment = !0, l;
            };
            function ge(e) {
                return new pe(void 0, void 0, void 0, String(e));
            }
            function ye(e) {
                var l = new pe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                return l.ns = e.ns, l.isStatic = e.isStatic, l.key = e.key, l.isComment = e.isComment, 
                l.fnContext = e.fnContext, l.fnOptions = e.fnOptions, l.fnScopeId = e.fnScopeId, 
                l.asyncMeta = e.asyncMeta, l.isCloned = !0, l;
            }
            var me = Array.prototype, _e = Object.create(me), we = [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ];
            we.forEach(function(e) {
                var l = me[e];
                V(_e, e, function() {
                    var a = [], t = arguments.length;
                    while (t--) a[t] = arguments[t];
                    var u, n = l.apply(this, a), r = this.__ob__;
                    switch (e) {
                      case "push":
                      case "unshift":
                        u = a;
                        break;

                      case "splice":
                        u = a.slice(2);
                        break;
                    }
                    return u && r.observeArray(u), r.dep.notify(), n;
                });
            });
            var xe = Object.getOwnPropertyNames(_e), Ae = !0;
            function Oe(e) {
                Ae = e;
            }
            var ke = function(e) {
                this.value = e, this.dep = new se(), this.vmCount = 0, V(e, "__ob__", this), Array.isArray(e) ? (W ? e.push !== e.__proto__.push ? Ee(e, _e, xe) : Se(e, _e) : Ee(e, _e, xe), 
                this.observeArray(e)) : this.walk(e);
            };
            function Se(e, l) {
                e.__proto__ = l;
            }
            function Ee(e, l, a) {
                for (var t = 0, u = a.length; t < u; t++) {
                    var n = a[t];
                    V(e, n, l[n]);
                }
            }
            function Pe(e, l) {
                var a;
                if (i(e) && !(e instanceof pe)) return _(e, "__ob__") && e.__ob__ instanceof ke ? a = e.__ob__ : Ae && !ue() && (Array.isArray(e) || b(e)) && Object.isExtensible(e) && !e._isVue && (a = new ke(e)), 
                l && a && a.vmCount++, a;
            }
            function Ce(e, l, a, t, u) {
                var n = new se(), r = Object.getOwnPropertyDescriptor(e, l);
                if (!r || !1 !== r.configurable) {
                    var o = r && r.get, i = r && r.set;
                    o && !i || 2 !== arguments.length || (a = e[l]);
                    var v = !u && Pe(a);
                    Object.defineProperty(e, l, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var l = o ? o.call(e) : a;
                            return se.SharedObject.target && (n.depend(), v && (v.dep.depend(), Array.isArray(l) && Te(l))), 
                            l;
                        },
                        set: function(l) {
                            var t = o ? o.call(e) : a;
                            l === t || l !== l && t !== t || o && !i || (i ? i.call(e, l) : a = l, v = !u && Pe(l), 
                            n.notify());
                        }
                    });
                }
            }
            function De(e, l, a) {
                if (Array.isArray(e) && c(l)) return e.length = Math.max(e.length, l), e.splice(l, 1, a), 
                a;
                if (l in e && !(l in Object.prototype)) return e[l] = a, a;
                var t = e.__ob__;
                return e._isVue || t && t.vmCount ? a : t ? (Ce(t.value, l, a), t.dep.notify(), 
                a) : (e[l] = a, a);
            }
            function $e(e, l) {
                if (Array.isArray(e) && c(l)) e.splice(l, 1); else {
                    var a = e.__ob__;
                    e._isVue || a && a.vmCount || _(e, l) && (delete e[l], a && a.dep.notify());
                }
            }
            function Te(e) {
                for (var l = void 0, a = 0, t = e.length; a < t; a++) l = e[a], l && l.__ob__ && l.__ob__.dep.depend(), 
                Array.isArray(l) && Te(l);
            }
            ke.prototype.walk = function(e) {
                for (var l = Object.keys(e), a = 0; a < l.length; a++) Ce(e, l[a]);
            }, ke.prototype.observeArray = function(e) {
                for (var l = 0, a = e.length; l < a; l++) Pe(e[l]);
            };
            var je = z.optionMergeStrategies;
            function Re(e, l) {
                if (!l) return e;
                for (var a, t, u, n = ie ? Reflect.ownKeys(l) : Object.keys(l), r = 0; r < n.length; r++) a = n[r], 
                "__ob__" !== a && (t = e[a], u = l[a], _(e, a) ? t !== u && b(t) && b(u) && Re(t, u) : De(e, a, u));
                return e;
            }
            function Be(e, l, a) {
                return a ? function() {
                    var t = "function" === typeof l ? l.call(a, a) : l, u = "function" === typeof e ? e.call(a, a) : e;
                    return t ? Re(t, u) : u;
                } : l ? e ? function() {
                    return Re("function" === typeof l ? l.call(this, this) : l, "function" === typeof e ? e.call(this, this) : e);
                } : l : e;
            }
            function Le(e, l) {
                var a = l ? e ? e.concat(l) : Array.isArray(l) ? l : [ l ] : e;
                return a ? Me(a) : a;
            }
            function Me(e) {
                for (var l = [], a = 0; a < e.length; a++) -1 === l.indexOf(e[a]) && l.push(e[a]);
                return l;
            }
            function Ie(e, l, a, t) {
                var u = Object.create(e || null);
                return l ? $(u, l) : u;
            }
            je.data = function(e, l, a) {
                return a ? Be(e, l, a) : l && "function" !== typeof l ? e : Be(e, l);
            }, F.forEach(function(e) {
                je[e] = Le;
            }), N.forEach(function(e) {
                je[e + "s"] = Ie;
            }), je.watch = function(e, l, a, t) {
                if (e === ae && (e = void 0), l === ae && (l = void 0), !l) return Object.create(e || null);
                if (!e) return l;
                var u = {};
                for (var n in $(u, e), l) {
                    var r = u[n], o = l[n];
                    r && !Array.isArray(r) && (r = [ r ]), u[n] = r ? r.concat(o) : Array.isArray(o) ? o : [ o ];
                }
                return u;
            }, je.props = je.methods = je.inject = je.computed = function(e, l, a, t) {
                if (!e) return l;
                var u = Object.create(null);
                return $(u, e), l && $(u, l), u;
            }, je.provide = Be;
            var Ne = function(e, l) {
                return void 0 === l ? e : l;
            };
            function Fe(e, l) {
                var a = e.props;
                if (a) {
                    var t, u, n, r = {};
                    if (Array.isArray(a)) {
                        t = a.length;
                        while (t--) u = a[t], "string" === typeof u && (n = A(u), r[n] = {
                            type: null
                        });
                    } else if (b(a)) for (var o in a) u = a[o], n = A(o), r[n] = b(u) ? u : {
                        type: u
                    }; else 0;
                    e.props = r;
                }
            }
            function ze(e, l) {
                var a = e.inject;
                if (a) {
                    var t = e.inject = {};
                    if (Array.isArray(a)) for (var u = 0; u < a.length; u++) t[a[u]] = {
                        from: a[u]
                    }; else if (b(a)) for (var n in a) {
                        var r = a[n];
                        t[n] = b(r) ? $({
                            from: n
                        }, r) : {
                            from: r
                        };
                    } else 0;
                }
            }
            function Ue(e) {
                var l = e.directives;
                if (l) for (var a in l) {
                    var t = l[a];
                    "function" === typeof t && (l[a] = {
                        bind: t,
                        update: t
                    });
                }
            }
            function He(e, l, a) {
                if ("function" === typeof l && (l = l.options), Fe(l, a), ze(l, a), Ue(l), !l._base && (l.extends && (e = He(e, l.extends, a)), 
                l.mixins)) for (var t = 0, u = l.mixins.length; t < u; t++) e = He(e, l.mixins[t], a);
                var n, r = {};
                for (n in e) o(n);
                for (n in l) _(e, n) || o(n);
                function o(t) {
                    var u = je[t] || Ne;
                    r[t] = u(e[t], l[t], a, t);
                }
                return r;
            }
            function Ve(e, l, a, t) {
                if ("string" === typeof a) {
                    var u = e[l];
                    if (_(u, a)) return u[a];
                    var n = A(a);
                    if (_(u, n)) return u[n];
                    var r = O(n);
                    if (_(u, r)) return u[r];
                    var o = u[a] || u[n] || u[r];
                    return o;
                }
            }
            function qe(e, l, a, t) {
                var u = l[e], n = !_(a, e), r = a[e], o = Qe(Boolean, u.type);
                if (o > -1) if (n && !_(u, "default")) r = !1; else if ("" === r || r === S(e)) {
                    var i = Qe(String, u.type);
                    (i < 0 || o < i) && (r = !0);
                }
                if (void 0 === r) {
                    r = Ye(t, u, e);
                    var v = Ae;
                    Oe(!0), Pe(r), Oe(v);
                }
                return r;
            }
            function Ye(e, l, a) {
                if (_(l, "default")) {
                    var t = l.default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[a] && void 0 !== e._props[a] ? e._props[a] : "function" === typeof t && "Function" !== Je(l.type) ? t.call(e) : t;
                }
            }
            function Je(e) {
                var l = e && e.toString().match(/^\s*function (\w+)/);
                return l ? l[1] : "";
            }
            function We(e, l) {
                return Je(e) === Je(l);
            }
            function Qe(e, l) {
                if (!Array.isArray(l)) return We(l, e) ? 0 : -1;
                for (var a = 0, t = l.length; a < t; a++) if (We(l[a], e)) return a;
                return -1;
            }
            function Ge(e, l, a) {
                ce();
                try {
                    if (l) {
                        var t = l;
                        while (t = t.$parent) {
                            var u = t.$options.errorCaptured;
                            if (u) for (var n = 0; n < u.length; n++) try {
                                var r = !1 === u[n].call(t, e, l, a);
                                if (r) return;
                            } catch (eu) {
                                Ze(eu, t, "errorCaptured hook");
                            }
                        }
                    }
                    Ze(e, l, a);
                } finally {
                    fe();
                }
            }
            function Ke(e, l, a, t, u) {
                var n;
                try {
                    n = a ? e.apply(l, a) : e.call(l), n && !n._isVue && f(n) && !n._handled && (n.catch(function(e) {
                        return Ge(e, t, u + " (Promise/async)");
                    }), n._handled = !0);
                } catch (eu) {
                    Ge(eu, t, u);
                }
                return n;
            }
            function Ze(e, l, a) {
                if (z.errorHandler) try {
                    return z.errorHandler.call(null, e, l, a);
                } catch (eu) {
                    eu !== e && Xe(eu, null, "config.errorHandler");
                }
                Xe(e, l, a);
            }
            function Xe(e, l, a) {
                if (!Q && !G || "undefined" === typeof console) throw e;
                console.error(e);
            }
            var el, ll = [], al = !1;
            function tl() {
                al = !1;
                var e = ll.slice(0);
                ll.length = 0;
                for (var l = 0; l < e.length; l++) e[l]();
            }
            if ("undefined" !== typeof Promise && re(Promise)) {
                var ul = Promise.resolve();
                el = function() {
                    ul.then(tl), le && setTimeout(j);
                };
            } else if (X || "undefined" === typeof MutationObserver || !re(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) el = "undefined" !== typeof setImmediate && re(setImmediate) ? function() {
                setImmediate(tl);
            } : function() {
                setTimeout(tl, 0);
            }; else {
                var nl = 1, rl = new MutationObserver(tl), ol = document.createTextNode(String(nl));
                rl.observe(ol, {
                    characterData: !0
                }), el = function() {
                    nl = (nl + 1) % 2, ol.data = String(nl);
                };
            }
            function il(e, l) {
                var a;
                if (ll.push(function() {
                    if (e) try {
                        e.call(l);
                    } catch (eu) {
                        Ge(eu, l, "nextTick");
                    } else a && a(l);
                }), al || (al = !0, el()), !e && "undefined" !== typeof Promise) return new Promise(function(e) {
                    a = e;
                });
            }
            var vl = new oe();
            function bl(e) {
                sl(e, vl), vl.clear();
            }
            function sl(e, l) {
                var a, t, u = Array.isArray(e);
                if (!(!u && !i(e) || Object.isFrozen(e) || e instanceof pe)) {
                    if (e.__ob__) {
                        var n = e.__ob__.dep.id;
                        if (l.has(n)) return;
                        l.add(n);
                    }
                    if (u) {
                        a = e.length;
                        while (a--) sl(e[a], l);
                    } else {
                        t = Object.keys(e), a = t.length;
                        while (a--) sl(e[t[a]], l);
                    }
                }
            }
            var cl = w(function(e) {
                var l = "&" === e.charAt(0);
                e = l ? e.slice(1) : e;
                var a = "~" === e.charAt(0);
                e = a ? e.slice(1) : e;
                var t = "!" === e.charAt(0);
                return e = t ? e.slice(1) : e, {
                    name: e,
                    once: a,
                    capture: t,
                    passive: l
                };
            });
            function fl(e, l) {
                function a() {
                    var e = arguments, t = a.fns;
                    if (!Array.isArray(t)) return Ke(t, null, arguments, l, "v-on handler");
                    for (var u = t.slice(), n = 0; n < u.length; n++) Ke(u[n], null, e, l, "v-on handler");
                }
                return a.fns = e, a;
            }
            function pl(e, l, a, u, r, o) {
                var i, v, b, s;
                for (i in e) v = e[i], b = l[i], s = cl(i), t(v) || (t(b) ? (t(v.fns) && (v = e[i] = fl(v, o)), 
                n(s.once) && (v = e[i] = r(s.name, v, s.capture)), a(s.name, v, s.capture, s.passive, s.params)) : v !== b && (b.fns = v, 
                e[i] = b));
                for (i in l) t(e[i]) && (s = cl(i), u(s.name, l[i], s.capture));
            }
            function hl(e, l, a) {
                var n = l.options.props;
                if (!t(n)) {
                    var r = {}, o = e.attrs, i = e.props;
                    if (u(o) || u(i)) for (var v in n) {
                        var b = S(v);
                        dl(r, i, v, b, !0) || dl(r, o, v, b, !1);
                    }
                    return r;
                }
            }
            function dl(e, l, a, t, n) {
                if (u(l)) {
                    if (_(l, a)) return e[a] = l[a], n || delete l[a], !0;
                    if (_(l, t)) return e[a] = l[t], n || delete l[t], !0;
                }
                return !1;
            }
            function gl(e) {
                for (var l = 0; l < e.length; l++) if (Array.isArray(e[l])) return Array.prototype.concat.apply([], e);
                return e;
            }
            function yl(e) {
                return o(e) ? [ ge(e) ] : Array.isArray(e) ? _l(e) : void 0;
            }
            function ml(e) {
                return u(e) && u(e.text) && r(e.isComment);
            }
            function _l(e, l) {
                var a, r, i, v, b = [];
                for (a = 0; a < e.length; a++) r = e[a], t(r) || "boolean" === typeof r || (i = b.length - 1, 
                v = b[i], Array.isArray(r) ? r.length > 0 && (r = _l(r, (l || "") + "_" + a), ml(r[0]) && ml(v) && (b[i] = ge(v.text + r[0].text), 
                r.shift()), b.push.apply(b, r)) : o(r) ? ml(v) ? b[i] = ge(v.text + r) : "" !== r && b.push(ge(r)) : ml(r) && ml(v) ? b[i] = ge(v.text + r.text) : (n(e._isVList) && u(r.tag) && t(r.key) && u(l) && (r.key = "__vlist" + l + "_" + a + "__"), 
                b.push(r)));
                return b;
            }
            function wl(e) {
                var l = e.$options.provide;
                l && (e._provided = "function" === typeof l ? l.call(e) : l);
            }
            function xl(e) {
                var l = Al(e.$options.inject, e);
                l && (Oe(!1), Object.keys(l).forEach(function(a) {
                    Ce(e, a, l[a]);
                }), Oe(!0));
            }
            function Al(e, l) {
                if (e) {
                    for (var a = Object.create(null), t = ie ? Reflect.ownKeys(e) : Object.keys(e), u = 0; u < t.length; u++) {
                        var n = t[u];
                        if ("__ob__" !== n) {
                            var r = e[n].from, o = l;
                            while (o) {
                                if (o._provided && _(o._provided, r)) {
                                    a[n] = o._provided[r];
                                    break;
                                }
                                o = o.$parent;
                            }
                            if (!o) if ("default" in e[n]) {
                                var i = e[n].default;
                                a[n] = "function" === typeof i ? i.call(l) : i;
                            } else 0;
                        }
                    }
                    return a;
                }
            }
            function Ol(e, l) {
                if (!e || !e.length) return {};
                for (var a = {}, t = 0, u = e.length; t < u; t++) {
                    var n = e[t], r = n.data;
                    if (r && r.attrs && r.attrs.slot && delete r.attrs.slot, n.context !== l && n.fnContext !== l || !r || null == r.slot) n.asyncMeta && n.asyncMeta.data && "page" === n.asyncMeta.data.slot ? (a["page"] || (a["page"] = [])).push(n) : (a.default || (a.default = [])).push(n); else {
                        var o = r.slot, i = a[o] || (a[o] = []);
                        "template" === n.tag ? i.push.apply(i, n.children || []) : i.push(n);
                    }
                }
                for (var v in a) a[v].every(kl) && delete a[v];
                return a;
            }
            function kl(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function Sl(e, l, t) {
                var u, n = Object.keys(l).length > 0, r = e ? !!e.$stable : !n, o = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (r && t && t !== a && o === t.$key && !n && !t.$hasNormal) return t;
                    for (var i in u = {}, e) e[i] && "$" !== i[0] && (u[i] = El(l, i, e[i]));
                } else u = {};
                for (var v in l) v in u || (u[v] = Pl(l, v));
                return e && Object.isExtensible(e) && (e._normalized = u), V(u, "$stable", r), V(u, "$key", o), 
                V(u, "$hasNormal", n), u;
            }
            function El(e, l, a) {
                var t = function() {
                    var e = arguments.length ? a.apply(null, arguments) : a({});
                    return e = e && "object" === typeof e && !Array.isArray(e) ? [ e ] : yl(e), e && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                };
                return a.proxy && Object.defineProperty(e, l, {
                    get: t,
                    enumerable: !0,
                    configurable: !0
                }), t;
            }
            function Pl(e, l) {
                return function() {
                    return e[l];
                };
            }
            function Cl(e, l) {
                var a, t, n, r, o;
                if (Array.isArray(e) || "string" === typeof e) for (a = new Array(e.length), t = 0, 
                n = e.length; t < n; t++) a[t] = l(e[t], t); else if ("number" === typeof e) for (a = new Array(e), 
                t = 0; t < e; t++) a[t] = l(t + 1, t); else if (i(e)) if (ie && e[Symbol.iterator]) {
                    a = [];
                    var v = e[Symbol.iterator](), b = v.next();
                    while (!b.done) a.push(l(b.value, a.length)), b = v.next();
                } else for (r = Object.keys(e), a = new Array(r.length), t = 0, n = r.length; t < n; t++) o = r[t], 
                a[t] = l(e[o], o, t);
                return u(a) || (a = []), a._isVList = !0, a;
            }
            function Dl(e, l, a, t) {
                var u, n = this.$scopedSlots[e];
                n ? (a = a || {}, t && (a = $($({}, t), a)), u = n(a) || l) : u = this.$slots[e] || l;
                var r = a && a.slot;
                return r ? this.$createElement("template", {
                    slot: r
                }, u) : u;
            }
            function $l(e) {
                return Ve(this.$options, "filters", e, !0) || B;
            }
            function Tl(e, l) {
                return Array.isArray(e) ? -1 === e.indexOf(l) : e !== l;
            }
            function jl(e, l, a, t, u) {
                var n = z.keyCodes[l] || a;
                return u && t && !z.keyCodes[l] ? Tl(u, t) : n ? Tl(n, e) : t ? S(t) !== l : void 0;
            }
            function Rl(e, l, a, t, u) {
                if (a) if (i(a)) {
                    var n;
                    Array.isArray(a) && (a = T(a));
                    var r = function(r) {
                        if ("class" === r || "style" === r || g(r)) n = e; else {
                            var o = e.attrs && e.attrs.type;
                            n = t || z.mustUseProp(l, o, r) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var i = A(r), v = S(r);
                        if (!(i in n) && !(v in n) && (n[r] = a[r], u)) {
                            var b = e.on || (e.on = {});
                            b["update:" + r] = function(e) {
                                a[r] = e;
                            };
                        }
                    };
                    for (var o in a) r(o);
                } else ;
                return e;
            }
            function Bl(e, l) {
                var a = this._staticTrees || (this._staticTrees = []), t = a[e];
                return t && !l ? t : (t = a[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), 
                Ml(t, "__static__" + e, !1), t);
            }
            function Ll(e, l, a) {
                return Ml(e, "__once__" + l + (a ? "_" + a : ""), !0), e;
            }
            function Ml(e, l, a) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) e[t] && "string" !== typeof e[t] && Il(e[t], l + "_" + t, a); else Il(e, l, a);
            }
            function Il(e, l, a) {
                e.isStatic = !0, e.key = l, e.isOnce = a;
            }
            function Nl(e, l) {
                if (l) if (b(l)) {
                    var a = e.on = e.on ? $({}, e.on) : {};
                    for (var t in l) {
                        var u = a[t], n = l[t];
                        a[t] = u ? [].concat(u, n) : n;
                    }
                } else ;
                return e;
            }
            function Fl(e, l, a, t) {
                l = l || {
                    $stable: !a
                };
                for (var u = 0; u < e.length; u++) {
                    var n = e[u];
                    Array.isArray(n) ? Fl(n, l, a) : n && (n.proxy && (n.fn.proxy = !0), l[n.key] = n.fn);
                }
                return t && (l.$key = t), l;
            }
            function zl(e, l) {
                for (var a = 0; a < l.length; a += 2) {
                    var t = l[a];
                    "string" === typeof t && t && (e[l[a]] = l[a + 1]);
                }
                return e;
            }
            function Ul(e, l) {
                return "string" === typeof e ? l + e : e;
            }
            function Hl(e) {
                e._o = Ll, e._n = h, e._s = p, e._l = Cl, e._t = Dl, e._q = L, e._i = M, e._m = Bl, 
                e._f = $l, e._k = jl, e._b = Rl, e._v = ge, e._e = de, e._u = Fl, e._g = Nl, e._d = zl, 
                e._p = Ul;
            }
            function Vl(e, l, t, u, r) {
                var o, i = this, v = r.options;
                _(u, "_uid") ? (o = Object.create(u), o._original = u) : (o = u, u = u._original);
                var b = n(v._compiled), s = !b;
                this.data = e, this.props = l, this.children = t, this.parent = u, this.listeners = e.on || a, 
                this.injections = Al(v.inject, u), this.slots = function() {
                    return i.$slots || Sl(e.scopedSlots, i.$slots = Ol(t, u)), i.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return Sl(e.scopedSlots, this.slots());
                    }
                }), b && (this.$options = v, this.$slots = this.slots(), this.$scopedSlots = Sl(e.scopedSlots, this.$slots)), 
                v._scopeId ? this._c = function(e, l, a, t) {
                    var n = ta(o, e, l, a, t, s);
                    return n && !Array.isArray(n) && (n.fnScopeId = v._scopeId, n.fnContext = u), n;
                } : this._c = function(e, l, a, t) {
                    return ta(o, e, l, a, t, s);
                };
            }
            function ql(e, l, t, n, r) {
                var o = e.options, i = {}, v = o.props;
                if (u(v)) for (var b in v) i[b] = qe(b, v, l || a); else u(t.attrs) && Jl(i, t.attrs), 
                u(t.props) && Jl(i, t.props);
                var s = new Vl(t, i, r, n, e), c = o.render.call(null, s._c, s);
                if (c instanceof pe) return Yl(c, t, s.parent, o, s);
                if (Array.isArray(c)) {
                    for (var f = yl(c) || [], p = new Array(f.length), h = 0; h < f.length; h++) p[h] = Yl(f[h], t, s.parent, o, s);
                    return p;
                }
            }
            function Yl(e, l, a, t, u) {
                var n = ye(e);
                return n.fnContext = a, n.fnOptions = t, l.slot && ((n.data || (n.data = {})).slot = l.slot), 
                n;
            }
            function Jl(e, l) {
                for (var a in l) e[A(a)] = l[a];
            }
            Hl(Vl.prototype);
            var Wl = {
                init: function(e, l) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var a = e;
                        Wl.prepatch(a, a);
                    } else {
                        var t = e.componentInstance = Kl(e, xa);
                        t.$mount(l ? e.elm : void 0, l);
                    }
                },
                prepatch: function(e, l) {
                    var a = l.componentOptions, t = l.componentInstance = e.componentInstance;
                    Sa(t, a.propsData, a.listeners, l, a.children);
                },
                insert: function(e) {
                    var l = e.context, a = e.componentInstance;
                    a._isMounted || (a._isMounted = !0, Da(a, "mounted")), e.data.keepAlive && (l._isMounted ? Ua(a) : Pa(a, !0));
                },
                destroy: function(e) {
                    var l = e.componentInstance;
                    l._isDestroyed || (e.data.keepAlive ? Ca(l, !0) : l.$destroy());
                }
            }, Ql = Object.keys(Wl);
            function Gl(e, l, a, r, o) {
                if (!t(e)) {
                    var v = a.$options._base;
                    if (i(e) && (e = v.extend(e)), "function" === typeof e) {
                        var b;
                        if (t(e.cid) && (b = e, e = fa(b, v), void 0 === e)) return ca(b, l, a, r, o);
                        l = l || {}, st(e), u(l.model) && ea(e.options, l);
                        var s = hl(l, e, o);
                        if (n(e.options.functional)) return ql(e, s, l, a, r);
                        var c = l.on;
                        if (l.on = l.nativeOn, n(e.options.abstract)) {
                            var f = l.slot;
                            l = {}, f && (l.slot = f);
                        }
                        Zl(l);
                        var p = e.options.name || o, h = new pe("vue-component-" + e.cid + (p ? "-" + p : ""), l, void 0, void 0, void 0, a, {
                            Ctor: e,
                            propsData: s,
                            listeners: c,
                            tag: o,
                            children: r
                        }, b);
                        return h;
                    }
                }
            }
            function Kl(e, l) {
                var a = {
                    _isComponent: !0,
                    _parentVnode: e,
                    parent: l
                }, t = e.data.inlineTemplate;
                return u(t) && (a.render = t.render, a.staticRenderFns = t.staticRenderFns), new e.componentOptions.Ctor(a);
            }
            function Zl(e) {
                for (var l = e.hook || (e.hook = {}), a = 0; a < Ql.length; a++) {
                    var t = Ql[a], u = l[t], n = Wl[t];
                    u === n || u && u._merged || (l[t] = u ? Xl(n, u) : n);
                }
            }
            function Xl(e, l) {
                var a = function(a, t) {
                    e(a, t), l(a, t);
                };
                return a._merged = !0, a;
            }
            function ea(e, l) {
                var a = e.model && e.model.prop || "value", t = e.model && e.model.event || "input";
                (l.attrs || (l.attrs = {}))[a] = l.model.value;
                var n = l.on || (l.on = {}), r = n[t], o = l.model.callback;
                u(r) ? (Array.isArray(r) ? -1 === r.indexOf(o) : r !== o) && (n[t] = [ o ].concat(r)) : n[t] = o;
            }
            var la = 1, aa = 2;
            function ta(e, l, a, t, u, r) {
                return (Array.isArray(a) || o(a)) && (u = t, t = a, a = void 0), n(r) && (u = aa), 
                ua(e, l, a, t, u);
            }
            function ua(e, l, a, t, n) {
                if (u(a) && u(a.__ob__)) return de();
                if (u(a) && u(a.is) && (l = a.is), !l) return de();
                var r, o, i;
                (Array.isArray(t) && "function" === typeof t[0] && (a = a || {}, a.scopedSlots = {
                    default: t[0]
                }, t.length = 0), n === aa ? t = yl(t) : n === la && (t = gl(t)), "string" === typeof l) ? (o = e.$vnode && e.$vnode.ns || z.getTagNamespace(l), 
                r = z.isReservedTag(l) ? new pe(z.parsePlatformTagName(l), a, t, void 0, void 0, e) : a && a.pre || !u(i = Ve(e.$options, "components", l)) ? new pe(l, a, t, void 0, void 0, e) : Gl(i, a, e, t, l)) : r = Gl(l, a, e, t);
                return Array.isArray(r) ? r : u(r) ? (u(o) && na(r, o), u(a) && ra(a), r) : de();
            }
            function na(e, l, a) {
                if (e.ns = l, "foreignObject" === e.tag && (l = void 0, a = !0), u(e.children)) for (var r = 0, o = e.children.length; r < o; r++) {
                    var i = e.children[r];
                    u(i.tag) && (t(i.ns) || n(a) && "svg" !== i.tag) && na(i, l, a);
                }
            }
            function ra(e) {
                i(e.style) && bl(e.style), i(e.class) && bl(e.class);
            }
            function oa(e) {
                e._vnode = null, e._staticTrees = null;
                var l = e.$options, t = e.$vnode = l._parentVnode, u = t && t.context;
                e.$slots = Ol(l._renderChildren, u), e.$scopedSlots = a, e._c = function(l, a, t, u) {
                    return ta(e, l, a, t, u, !1);
                }, e.$createElement = function(l, a, t, u) {
                    return ta(e, l, a, t, u, !0);
                };
                var n = t && t.data;
                Ce(e, "$attrs", n && n.attrs || a, null, !0), Ce(e, "$listeners", l._parentListeners || a, null, !0);
            }
            var ia, va = null;
            function ba(e) {
                Hl(e.prototype), e.prototype.$nextTick = function(e) {
                    return il(e, this);
                }, e.prototype._render = function() {
                    var e, l = this, a = l.$options, t = a.render, u = a._parentVnode;
                    u && (l.$scopedSlots = Sl(u.data.scopedSlots, l.$slots, l.$scopedSlots)), l.$vnode = u;
                    try {
                        va = l, e = t.call(l._renderProxy, l.$createElement);
                    } catch (eu) {
                        Ge(eu, l, "render"), e = l._vnode;
                    } finally {
                        va = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof pe || (e = de()), 
                    e.parent = u, e;
                };
            }
            function sa(e, l) {
                return (e.__esModule || ie && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                i(e) ? l.extend(e) : e;
            }
            function ca(e, l, a, t, u) {
                var n = de();
                return n.asyncFactory = e, n.asyncMeta = {
                    data: l,
                    context: a,
                    children: t,
                    tag: u
                }, n;
            }
            function fa(e, l) {
                if (n(e.error) && u(e.errorComp)) return e.errorComp;
                if (u(e.resolved)) return e.resolved;
                var a = va;
                if (a && u(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a), n(e.loading) && u(e.loadingComp)) return e.loadingComp;
                if (a && !u(e.owners)) {
                    var r = e.owners = [ a ], o = !0, v = null, b = null;
                    a.$on("hook:destroyed", function() {
                        return y(r, a);
                    });
                    var s = function(e) {
                        for (var l = 0, a = r.length; l < a; l++) r[l].$forceUpdate();
                        e && (r.length = 0, null !== v && (clearTimeout(v), v = null), null !== b && (clearTimeout(b), 
                        b = null));
                    }, c = I(function(a) {
                        e.resolved = sa(a, l), o ? r.length = 0 : s(!0);
                    }), p = I(function(l) {
                        u(e.errorComp) && (e.error = !0, s(!0));
                    }), h = e(c, p);
                    return i(h) && (f(h) ? t(e.resolved) && h.then(c, p) : f(h.component) && (h.component.then(c, p), 
                    u(h.error) && (e.errorComp = sa(h.error, l)), u(h.loading) && (e.loadingComp = sa(h.loading, l), 
                    0 === h.delay ? e.loading = !0 : v = setTimeout(function() {
                        v = null, t(e.resolved) && t(e.error) && (e.loading = !0, s(!1));
                    }, h.delay || 200)), u(h.timeout) && (b = setTimeout(function() {
                        b = null, t(e.resolved) && p(null);
                    }, h.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved;
                }
            }
            function pa(e) {
                return e.isComment && e.asyncFactory;
            }
            function ha(e) {
                if (Array.isArray(e)) for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    if (u(a) && (u(a.componentOptions) || pa(a))) return a;
                }
            }
            function da(e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var l = e.$options._parentListeners;
                l && _a(e, l);
            }
            function ga(e, l) {
                ia.$on(e, l);
            }
            function ya(e, l) {
                ia.$off(e, l);
            }
            function ma(e, l) {
                var a = ia;
                return function t() {
                    var u = l.apply(null, arguments);
                    null !== u && a.$off(e, t);
                };
            }
            function _a(e, l, a) {
                ia = e, pl(l, a || {}, ga, ya, ma, e), ia = void 0;
            }
            function wa(e) {
                var l = /^hook:/;
                e.prototype.$on = function(e, a) {
                    var t = this;
                    if (Array.isArray(e)) for (var u = 0, n = e.length; u < n; u++) t.$on(e[u], a); else (t._events[e] || (t._events[e] = [])).push(a), 
                    l.test(e) && (t._hasHookEvent = !0);
                    return t;
                }, e.prototype.$once = function(e, l) {
                    var a = this;
                    function t() {
                        a.$off(e, t), l.apply(a, arguments);
                    }
                    return t.fn = l, a.$on(e, t), a;
                }, e.prototype.$off = function(e, l) {
                    var a = this;
                    if (!arguments.length) return a._events = Object.create(null), a;
                    if (Array.isArray(e)) {
                        for (var t = 0, u = e.length; t < u; t++) a.$off(e[t], l);
                        return a;
                    }
                    var n, r = a._events[e];
                    if (!r) return a;
                    if (!l) return a._events[e] = null, a;
                    var o = r.length;
                    while (o--) if (n = r[o], n === l || n.fn === l) {
                        r.splice(o, 1);
                        break;
                    }
                    return a;
                }, e.prototype.$emit = function(e) {
                    var l = this, a = l._events[e];
                    if (a) {
                        a = a.length > 1 ? D(a) : a;
                        for (var t = D(arguments, 1), u = 'event handler for "' + e + '"', n = 0, r = a.length; n < r; n++) Ke(a[n], l, t, l, u);
                    }
                    return l;
                };
            }
            var xa = null;
            function Aa(e) {
                var l = xa;
                return xa = e, function() {
                    xa = l;
                };
            }
            function Oa(e) {
                var l = e.$options, a = l.parent;
                if (a && !l.abstract) {
                    while (a.$options.abstract && a.$parent) a = a.$parent;
                    a.$children.push(e);
                }
                e.$parent = a, e.$root = a ? a.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                e._isBeingDestroyed = !1;
            }
            function ka(e) {
                e.prototype._update = function(e, l) {
                    var a = this, t = a.$el, u = a._vnode, n = Aa(a);
                    a._vnode = e, a.$el = u ? a.__patch__(u, e) : a.__patch__(a.$el, e, l, !1), n(), 
                    t && (t.__vue__ = null), a.$el && (a.$el.__vue__ = a), a.$vnode && a.$parent && a.$vnode === a.$parent._vnode && (a.$parent.$el = a.$el);
                }, e.prototype.$forceUpdate = function() {
                    var e = this;
                    e._watcher && e._watcher.update();
                }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        Da(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var l = e.$parent;
                        !l || l._isBeingDestroyed || e.$options.abstract || y(l.$children, e), e._watcher && e._watcher.teardown();
                        var a = e._watchers.length;
                        while (a--) e._watchers[a].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                        Da(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }
            function Sa(e, l, t, u, n) {
                var r = u.data.scopedSlots, o = e.$scopedSlots, i = !!(r && !r.$stable || o !== a && !o.$stable || r && e.$scopedSlots.$key !== r.$key), v = !!(n || e.$options._renderChildren || i);
                if (e.$options._parentVnode = u, e.$vnode = u, e._vnode && (e._vnode.parent = u), 
                e.$options._renderChildren = n, e.$attrs = u.data.attrs || a, e.$listeners = t || a, 
                l && e.$options.props) {
                    Oe(!1);
                    for (var b = e._props, s = e.$options._propKeys || [], c = 0; c < s.length; c++) {
                        var f = s[c], p = e.$options.props;
                        b[f] = qe(f, p, l, e);
                    }
                    Oe(!0), e.$options.propsData = l;
                }
                t = t || a;
                var h = e.$options._parentListeners;
                e.$options._parentListeners = t, _a(e, t, h), v && (e.$slots = Ol(n, u.context), 
                e.$forceUpdate());
            }
            function Ea(e) {
                while (e && (e = e.$parent)) if (e._inactive) return !0;
                return !1;
            }
            function Pa(e, l) {
                if (l) {
                    if (e._directInactive = !1, Ea(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var a = 0; a < e.$children.length; a++) Pa(e.$children[a]);
                    Da(e, "activated");
                }
            }
            function Ca(e, l) {
                if ((!l || (e._directInactive = !0, !Ea(e))) && !e._inactive) {
                    e._inactive = !0;
                    for (var a = 0; a < e.$children.length; a++) Ca(e.$children[a]);
                    Da(e, "deactivated");
                }
            }
            function Da(e, l) {
                ce();
                var a = e.$options[l], t = l + " hook";
                if (a) for (var u = 0, n = a.length; u < n; u++) Ke(a[u], e, null, e, t);
                e._hasHookEvent && e.$emit("hook:" + l), fe();
            }
            var $a = [], Ta = [], ja = {}, Ra = !1, Ba = !1, La = 0;
            function Ma() {
                La = $a.length = Ta.length = 0, ja = {}, Ra = Ba = !1;
            }
            var Ia = Date.now;
            if (Q && !X) {
                var Na = window.performance;
                Na && "function" === typeof Na.now && Ia() > document.createEvent("Event").timeStamp && (Ia = function() {
                    return Na.now();
                });
            }
            function Fa() {
                var e, l;
                for (Ia(), Ba = !0, $a.sort(function(e, l) {
                    return e.id - l.id;
                }), La = 0; La < $a.length; La++) e = $a[La], e.before && e.before(), l = e.id, 
                ja[l] = null, e.run();
                var a = Ta.slice(), t = $a.slice();
                Ma(), Ha(a), za(t), ne && z.devtools && ne.emit("flush");
            }
            function za(e) {
                var l = e.length;
                while (l--) {
                    var a = e[l], t = a.vm;
                    t._watcher === a && t._isMounted && !t._isDestroyed && Da(t, "updated");
                }
            }
            function Ua(e) {
                e._inactive = !1, Ta.push(e);
            }
            function Ha(e) {
                for (var l = 0; l < e.length; l++) e[l]._inactive = !0, Pa(e[l], !0);
            }
            function Va(e) {
                var l = e.id;
                if (null == ja[l]) {
                    if (ja[l] = !0, Ba) {
                        var a = $a.length - 1;
                        while (a > La && $a[a].id > e.id) a--;
                        $a.splice(a + 1, 0, e);
                    } else $a.push(e);
                    Ra || (Ra = !0, il(Fa));
                }
            }
            var qa = 0, Ya = function(e, l, a, t, u) {
                this.vm = e, u && (e._watcher = this), e._watchers.push(this), t ? (this.deep = !!t.deep, 
                this.user = !!t.user, this.lazy = !!t.lazy, this.sync = !!t.sync, this.before = t.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = a, this.id = ++qa, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new oe(), this.newDepIds = new oe(), this.expression = "", 
                "function" === typeof l ? this.getter = l : (this.getter = Y(l), this.getter || (this.getter = j)), 
                this.value = this.lazy ? void 0 : this.get();
            };
            Ya.prototype.get = function() {
                var e;
                ce(this);
                var l = this.vm;
                try {
                    e = this.getter.call(l, l);
                } catch (eu) {
                    if (!this.user) throw eu;
                    Ge(eu, l, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && bl(e), fe(), this.cleanupDeps();
                }
                return e;
            }, Ya.prototype.addDep = function(e) {
                var l = e.id;
                this.newDepIds.has(l) || (this.newDepIds.add(l), this.newDeps.push(e), this.depIds.has(l) || e.addSub(this));
            }, Ya.prototype.cleanupDeps = function() {
                var e = this.deps.length;
                while (e--) {
                    var l = this.deps[e];
                    this.newDepIds.has(l.id) || l.removeSub(this);
                }
                var a = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = a, this.newDepIds.clear(), a = this.deps, 
                this.deps = this.newDeps, this.newDeps = a, this.newDeps.length = 0;
            }, Ya.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Va(this);
            }, Ya.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || i(e) || this.deep) {
                        var l = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, l);
                        } catch (eu) {
                            Ge(eu, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, l);
                    }
                }
            }, Ya.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Ya.prototype.depend = function() {
                var e = this.deps.length;
                while (e--) this.deps[e].depend();
            }, Ya.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                    var e = this.deps.length;
                    while (e--) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var Ja = {
                enumerable: !0,
                configurable: !0,
                get: j,
                set: j
            };
            function Wa(e, l, a) {
                Ja.get = function() {
                    return this[l][a];
                }, Ja.set = function(e) {
                    this[l][a] = e;
                }, Object.defineProperty(e, a, Ja);
            }
            function Qa(e) {
                e._watchers = [];
                var l = e.$options;
                l.props && Ga(e, l.props), l.methods && ut(e, l.methods), l.data ? Ka(e) : Pe(e._data = {}, !0), 
                l.computed && et(e, l.computed), l.watch && l.watch !== ae && nt(e, l.watch);
            }
            function Ga(e, l) {
                var a = e.$options.propsData || {}, t = e._props = {}, u = e.$options._propKeys = [], n = !e.$parent;
                n || Oe(!1);
                var r = function(n) {
                    u.push(n);
                    var r = qe(n, l, a, e);
                    Ce(t, n, r), n in e || Wa(e, "_props", n);
                };
                for (var o in l) r(o);
                Oe(!0);
            }
            function Ka(e) {
                var l = e.$options.data;
                l = e._data = "function" === typeof l ? Za(l, e) : l || {}, b(l) || (l = {});
                var a = Object.keys(l), t = e.$options.props, u = (e.$options.methods, a.length);
                while (u--) {
                    var n = a[u];
                    0, t && _(t, n) || H(n) || Wa(e, "_data", n);
                }
                Pe(l, !0);
            }
            function Za(e, l) {
                ce();
                try {
                    return e.call(l, l);
                } catch (eu) {
                    return Ge(eu, l, "data()"), {};
                } finally {
                    fe();
                }
            }
            var Xa = {
                lazy: !0
            };
            function et(e, l) {
                var a = e._computedWatchers = Object.create(null), t = ue();
                for (var u in l) {
                    var n = l[u], r = "function" === typeof n ? n : n.get;
                    0, t || (a[u] = new Ya(e, r || j, j, Xa)), u in e || lt(e, u, n);
                }
            }
            function lt(e, l, a) {
                var t = !ue();
                "function" === typeof a ? (Ja.get = t ? at(l) : tt(a), Ja.set = j) : (Ja.get = a.get ? t && !1 !== a.cache ? at(l) : tt(a.get) : j, 
                Ja.set = a.set || j), Object.defineProperty(e, l, Ja);
            }
            function at(e) {
                return function() {
                    var l = this._computedWatchers && this._computedWatchers[e];
                    if (l) return l.dirty && l.evaluate(), se.SharedObject.target && l.depend(), l.value;
                };
            }
            function tt(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function ut(e, l) {
                e.$options.props;
                for (var a in l) e[a] = "function" !== typeof l[a] ? j : C(l[a], e);
            }
            function nt(e, l) {
                for (var a in l) {
                    var t = l[a];
                    if (Array.isArray(t)) for (var u = 0; u < t.length; u++) rt(e, a, t[u]); else rt(e, a, t);
                }
            }
            function rt(e, l, a, t) {
                return b(a) && (t = a, a = a.handler), "string" === typeof a && (a = e[a]), e.$watch(l, a, t);
            }
            function ot(e) {
                var l = {
                    get: function() {
                        return this._data;
                    }
                }, a = {
                    get: function() {
                        return this._props;
                    }
                };
                Object.defineProperty(e.prototype, "$data", l), Object.defineProperty(e.prototype, "$props", a), 
                e.prototype.$set = De, e.prototype.$delete = $e, e.prototype.$watch = function(e, l, a) {
                    var t = this;
                    if (b(l)) return rt(t, e, l, a);
                    a = a || {}, a.user = !0;
                    var u = new Ya(t, e, l, a);
                    if (a.immediate) try {
                        l.call(t, u.value);
                    } catch (n) {
                        Ge(n, t, 'callback for immediate watcher "' + u.expression + '"');
                    }
                    return function() {
                        u.teardown();
                    };
                };
            }
            var it = 0;
            function vt(e) {
                e.prototype._init = function(e) {
                    var l = this;
                    l._uid = it++, l._isVue = !0, e && e._isComponent ? bt(l, e) : l.$options = He(st(l.constructor), e || {}, l), 
                    l._renderProxy = l, l._self = l, Oa(l), da(l), oa(l), Da(l, "beforeCreate"), "mp-toutiao" !== l.mpHost && xl(l), 
                    Qa(l), "mp-toutiao" !== l.mpHost && wl(l), "mp-toutiao" !== l.mpHost && Da(l, "created"), 
                    l.$options.el && l.$mount(l.$options.el);
                };
            }
            function bt(e, l) {
                var a = e.$options = Object.create(e.constructor.options), t = l._parentVnode;
                a.parent = l.parent, a._parentVnode = t;
                var u = t.componentOptions;
                a.propsData = u.propsData, a._parentListeners = u.listeners, a._renderChildren = u.children, 
                a._componentTag = u.tag, l.render && (a.render = l.render, a.staticRenderFns = l.staticRenderFns);
            }
            function st(e) {
                var l = e.options;
                if (e.super) {
                    var a = st(e.super), t = e.superOptions;
                    if (a !== t) {
                        e.superOptions = a;
                        var u = ct(e);
                        u && $(e.extendOptions, u), l = e.options = He(a, e.extendOptions), l.name && (l.components[l.name] = e);
                    }
                }
                return l;
            }
            function ct(e) {
                var l, a = e.options, t = e.sealedOptions;
                for (var u in a) a[u] !== t[u] && (l || (l = {}), l[u] = a[u]);
                return l;
            }
            function ft(e) {
                this._init(e);
            }
            function pt(e) {
                e.use = function(e) {
                    var l = this._installedPlugins || (this._installedPlugins = []);
                    if (l.indexOf(e) > -1) return this;
                    var a = D(arguments, 1);
                    return a.unshift(this), "function" === typeof e.install ? e.install.apply(e, a) : "function" === typeof e && e.apply(null, a), 
                    l.push(e), this;
                };
            }
            function ht(e) {
                e.mixin = function(e) {
                    return this.options = He(this.options, e), this;
                };
            }
            function dt(e) {
                e.cid = 0;
                var l = 1;
                e.extend = function(e) {
                    e = e || {};
                    var a = this, t = a.cid, u = e._Ctor || (e._Ctor = {});
                    if (u[t]) return u[t];
                    var n = e.name || a.options.name;
                    var r = function(e) {
                        this._init(e);
                    };
                    return r.prototype = Object.create(a.prototype), r.prototype.constructor = r, r.cid = l++, 
                    r.options = He(a.options, e), r["super"] = a, r.options.props && gt(r), r.options.computed && yt(r), 
                    r.extend = a.extend, r.mixin = a.mixin, r.use = a.use, N.forEach(function(e) {
                        r[e] = a[e];
                    }), n && (r.options.components[n] = r), r.superOptions = a.options, r.extendOptions = e, 
                    r.sealedOptions = $({}, r.options), u[t] = r, r;
                };
            }
            function gt(e) {
                var l = e.options.props;
                for (var a in l) Wa(e.prototype, "_props", a);
            }
            function yt(e) {
                var l = e.options.computed;
                for (var a in l) lt(e.prototype, a, l[a]);
            }
            function mt(e) {
                N.forEach(function(l) {
                    e[l] = function(e, a) {
                        return a ? ("component" === l && b(a) && (a.name = a.name || e, a = this.options._base.extend(a)), 
                        "directive" === l && "function" === typeof a && (a = {
                            bind: a,
                            update: a
                        }), this.options[l + "s"][e] = a, a) : this.options[l + "s"][e];
                    };
                });
            }
            function _t(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function wt(e, l) {
                return Array.isArray(e) ? e.indexOf(l) > -1 : "string" === typeof e ? e.split(",").indexOf(l) > -1 : !!s(e) && e.test(l);
            }
            function xt(e, l) {
                var a = e.cache, t = e.keys, u = e._vnode;
                for (var n in a) {
                    var r = a[n];
                    if (r) {
                        var o = _t(r.componentOptions);
                        o && !l(o) && At(a, n, t, u);
                    }
                }
            }
            function At(e, l, a, t) {
                var u = e[l];
                !u || t && u.tag === t.tag || u.componentInstance.$destroy(), e[l] = null, y(a, l);
            }
            vt(ft), ot(ft), wa(ft), ka(ft), ba(ft);
            var Ot = [ String, RegExp, Array ], kt = {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: Ot,
                    exclude: Ot,
                    max: [ String, Number ]
                },
                created: function() {
                    this.cache = Object.create(null), this.keys = [];
                },
                destroyed: function() {
                    for (var e in this.cache) At(this.cache, e, this.keys);
                },
                mounted: function() {
                    var e = this;
                    this.$watch("include", function(l) {
                        xt(e, function(e) {
                            return wt(l, e);
                        });
                    }), this.$watch("exclude", function(l) {
                        xt(e, function(e) {
                            return !wt(l, e);
                        });
                    });
                },
                render: function() {
                    var e = this.$slots.default, l = ha(e), a = l && l.componentOptions;
                    if (a) {
                        var t = _t(a), u = this, n = u.include, r = u.exclude;
                        if (n && (!t || !wt(n, t)) || r && t && wt(r, t)) return l;
                        var o = this, i = o.cache, v = o.keys, b = null == l.key ? a.Ctor.cid + (a.tag ? "::" + a.tag : "") : l.key;
                        i[b] ? (l.componentInstance = i[b].componentInstance, y(v, b), v.push(b)) : (i[b] = l, 
                        v.push(b), this.max && v.length > parseInt(this.max) && At(i, v[0], v, this._vnode)), 
                        l.data.keepAlive = !0;
                    }
                    return l || e && e[0];
                }
            }, St = {
                KeepAlive: kt
            };
            function Et(e) {
                var l = {
                    get: function() {
                        return z;
                    }
                };
                Object.defineProperty(e, "config", l), e.util = {
                    warn: ve,
                    extend: $,
                    mergeOptions: He,
                    defineReactive: Ce
                }, e.set = De, e.delete = $e, e.nextTick = il, e.observable = function(e) {
                    return Pe(e), e;
                }, e.options = Object.create(null), N.forEach(function(l) {
                    e.options[l + "s"] = Object.create(null);
                }), e.options._base = e, $(e.options.components, St), pt(e), ht(e), dt(e), mt(e);
            }
            Et(ft), Object.defineProperty(ft.prototype, "$isServer", {
                get: ue
            }), Object.defineProperty(ft.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(ft, "FunctionalRenderContext", {
                value: Vl
            }), ft.version = "2.6.10";
            var Pt = "[object Array]", Ct = "[object Object]";
            function Dt(e, l) {
                var a = {};
                return $t(e, l), Tt(e, l, "", a), a;
            }
            function $t(e, l) {
                if (e !== l) {
                    var a = Rt(e), t = Rt(l);
                    if (a == Ct && t == Ct) {
                        if (Object.keys(e).length >= Object.keys(l).length) for (var u in l) {
                            var n = e[u];
                            void 0 === n ? e[u] = null : $t(n, l[u]);
                        }
                    } else a == Pt && t == Pt && e.length >= l.length && l.forEach(function(l, a) {
                        $t(e[a], l);
                    });
                }
            }
            function Tt(e, l, a, t) {
                if (e !== l) {
                    var u = Rt(e), n = Rt(l);
                    if (u == Ct) if (n != Ct || Object.keys(e).length < Object.keys(l).length) jt(t, a, e); else {
                        var r = function(u) {
                            var n = e[u], r = l[u], o = Rt(n), i = Rt(r);
                            if (o != Pt && o != Ct) n != l[u] && jt(t, ("" == a ? "" : a + ".") + u, n); else if (o == Pt) i != Pt ? jt(t, ("" == a ? "" : a + ".") + u, n) : n.length < r.length ? jt(t, ("" == a ? "" : a + ".") + u, n) : n.forEach(function(e, l) {
                                Tt(e, r[l], ("" == a ? "" : a + ".") + u + "[" + l + "]", t);
                            }); else if (o == Ct) if (i != Ct || Object.keys(n).length < Object.keys(r).length) jt(t, ("" == a ? "" : a + ".") + u, n); else for (var v in n) Tt(n[v], r[v], ("" == a ? "" : a + ".") + u + "." + v, t);
                        };
                        for (var o in e) r(o);
                    } else u == Pt ? n != Pt ? jt(t, a, e) : e.length < l.length ? jt(t, a, e) : e.forEach(function(e, u) {
                        Tt(e, l[u], a + "[" + u + "]", t);
                    }) : jt(t, a, e);
                }
            }
            function jt(e, l, a) {
                e[l] = a;
            }
            function Rt(e) {
                return Object.prototype.toString.call(e);
            }
            function Bt(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var l = e.$scope;
                        console.log("[" + +new Date() + "][" + (l.is || l.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]");
                    }
                    var a = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var t = 0; t < a.length; t++) a[t]();
                }
            }
            function Lt(e) {
                return $a.find(function(l) {
                    return e._watcher === l;
                });
            }
            function Mt(e, l) {
                if (!e.__next_tick_pending && !Lt(e)) {
                    if (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var a = e.$scope;
                        console.log("[" + +new Date() + "][" + (a.is || a.route) + "][" + e._uid + "]:nextVueTick");
                    }
                    return il(l, e);
                }
                if (Object({
                    NODE_ENV: "production",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var t = e.$scope;
                    console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + e._uid + "]:nextMPTick");
                }
                var u;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function() {
                    if (l) try {
                        l.call(e);
                    } catch (eu) {
                        Ge(eu, e, "nextTick");
                    } else u && u(e);
                }), !l && "undefined" !== typeof Promise) return new Promise(function(e) {
                    u = e;
                });
            }
            function It(e) {
                var l = Object.create(null), a = [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {}));
                return a.reduce(function(l, a) {
                    return l[a] = e[a], l;
                }, l), Object.assign(l, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (l["name"] = e.name, 
                l["value"] = e.value), JSON.parse(JSON.stringify(l));
            }
            var Nt = function(e, l) {
                var a = this;
                if (null !== l && ("page" === this.mpType || "component" === this.mpType)) {
                    var t = this.$scope, u = Object.create(null);
                    try {
                        u = It(this);
                    } catch (o) {
                        console.error(o);
                    }
                    u.__webviewId__ = t.data.__webviewId__;
                    var n = Object.create(null);
                    Object.keys(u).forEach(function(e) {
                        n[e] = t.data[e];
                    });
                    var r = Dt(u, n);
                    Object.keys(r).length ? (Object({
                        NODE_ENV: "production",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + this._uid + "]差量更新", JSON.stringify(r)), 
                    this.__next_tick_pending = !0, t.setData(r, function() {
                        a.__next_tick_pending = !1, Bt(a);
                    })) : Bt(this);
                }
            };
            function Ft() {}
            function zt(e, l, a) {
                if (!e.mpType) return e;
                "app" === e.mpType && (e.$options.render = Ft), e.$options.render || (e.$options.render = Ft), 
                "mp-toutiao" !== e.mpHost && Da(e, "beforeMount");
                var t = function() {
                    e._update(e._render(), a);
                };
                return new Ya(e, t, j, {
                    before: function() {
                        e._isMounted && !e._isDestroyed && Da(e, "beforeUpdate");
                    }
                }, !0), a = !1, e;
            }
            function Ut(e, l) {
                return u(e) || u(l) ? Ht(e, Vt(l)) : "";
            }
            function Ht(e, l) {
                return e ? l ? e + " " + l : e : l || "";
            }
            function Vt(e) {
                return Array.isArray(e) ? qt(e) : i(e) ? Yt(e) : "string" === typeof e ? e : "";
            }
            function qt(e) {
                for (var l, a = "", t = 0, n = e.length; t < n; t++) u(l = Vt(e[t])) && "" !== l && (a && (a += " "), 
                a += l);
                return a;
            }
            function Yt(e) {
                var l = "";
                for (var a in e) e[a] && (l && (l += " "), l += a);
                return l;
            }
            var Jt = w(function(e) {
                var l = {}, a = /;(?![^(]*\))/g, t = /:(.+)/;
                return e.split(a).forEach(function(e) {
                    if (e) {
                        var a = e.split(t);
                        a.length > 1 && (l[a[0].trim()] = a[1].trim());
                    }
                }), l;
            });
            function Wt(e) {
                return Array.isArray(e) ? T(e) : "string" === typeof e ? Jt(e) : e;
            }
            var Qt = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ];
            function Gt(e, l) {
                var a = l.split("."), t = a[0];
                return 0 === t.indexOf("__$n") && (t = parseInt(t.replace("__$n", ""))), 1 === a.length ? e[t] : Gt(e[t], a.slice(1).join("."));
            }
            function Kt(e) {
                e.config.errorHandler = function(e) {
                    console.error(e);
                };
                var l = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                    return this.$scope && e && this.$scope["triggerEvent"](e, {
                        __args__: D(arguments, 1)
                    }), l.apply(this, arguments);
                }, e.prototype.$nextTick = function(e) {
                    return Mt(this, e);
                }, Qt.forEach(function(l) {
                    e.prototype[l] = function(e) {
                        if (this.$scope) return this.$scope[l](e);
                    };
                }), e.prototype.__init_provide = wl, e.prototype.__init_injections = xl, e.prototype.__call_hook = function(e, l) {
                    var a = this;
                    ce();
                    var t, u = a.$options[e], n = e + " hook";
                    if (u) for (var r = 0, o = u.length; r < o; r++) t = Ke(u[r], a, l ? [ l ] : null, a, n);
                    return a._hasHookEvent && a.$emit("hook:" + e), fe(), t;
                }, e.prototype.__set_model = function(e, l, a, t) {
                    Array.isArray(t) && (-1 !== t.indexOf("trim") && (a = a.trim()), -1 !== t.indexOf("number") && (a = this._n(a))), 
                    e || (e = this), e[l] = a;
                }, e.prototype.__set_sync = function(e, l, a) {
                    e || (e = this), e[l] = a;
                }, e.prototype.__get_orig = function(e) {
                    return b(e) && e["$orig"] || e;
                }, e.prototype.__get_value = function(e, l) {
                    return Gt(l || this, e);
                }, e.prototype.__get_class = function(e, l) {
                    return Ut(l, e);
                }, e.prototype.__get_style = function(e, l) {
                    if (!e && !l) return "";
                    var a = Wt(e), t = l ? $(l, a) : a;
                    return Object.keys(t).map(function(e) {
                        return S(e) + ":" + t[e];
                    }).join(";");
                }, e.prototype.__map = function(e, l) {
                    var a, t, u, n, r;
                    if (Array.isArray(e)) {
                        for (a = new Array(e.length), t = 0, u = e.length; t < u; t++) a[t] = l(e[t], t);
                        return a;
                    }
                    if (i(e)) {
                        for (n = Object.keys(e), a = Object.create(null), t = 0, u = n.length; t < u; t++) r = n[t], 
                        a[r] = l(e[r], r, t);
                        return a;
                    }
                    return [];
                };
            }
            var Zt = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onError", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize" ];
            function Xt(e) {
                var l = e.extend;
                e.extend = function(e) {
                    e = e || {};
                    var a = e.methods;
                    return a && Object.keys(a).forEach(function(l) {
                        -1 !== Zt.indexOf(l) && (e[l] = a[l], delete a[l]);
                    }), l.call(this, e);
                };
                var a = e.config.optionMergeStrategies, t = a.created;
                Zt.forEach(function(e) {
                    a[e] = t;
                }), e.prototype.__lifecycle_hooks__ = Zt;
            }
            ft.prototype.__patch__ = Nt, ft.prototype.$mount = function(e, l) {
                return zt(this, e, l);
            }, Xt(ft), Kt(ft), l["default"] = ft;
        }.call(this, a("c8ba"));
    },
    "68af": function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, u = /^<\/([-A-Za-z0-9_]+)[^>]*>/, n = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
        function r(e) {
            for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
            return l;
        }
        var o = r("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), i = r("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), v = r("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), b = r("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), s = r("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), c = r("script,style,view,scroll-view,block");
        function f(e, l) {
            var a, r, f, p = e, h = [];
            function d(e, a) {
                var t;
                if (a) {
                    for (a = a.toLowerCase(), t = h.length - 1; t >= 0; t -= 1) if (h[t] === a) break;
                } else t = 0;
                if (t >= 0) {
                    for (var u = h.length - 1; u >= t; u -= 1) l.end && l.end(h[u]);
                    h.length = t;
                }
            }
            function g(e, a, t, u) {
                if (a = a.toLowerCase(), i[a]) while (h.last() && v[h.last()]) d("", h.last());
                if (b[a] && h.last() === a && d("", a), u = o[a] || !!u, u || h.push(a), l.start) {
                    var r = [];
                    t.replace(n, function(e, l) {
                        var a = arguments[2] || arguments[3] || arguments[4] || (s[l] ? l : "");
                        r.push({
                            name: l,
                            value: a,
                            escaped: a.replace(/(^|[^\\])"/g, '$1\\"')
                        });
                    }), l.start && l.start(a, r, u);
                }
            }
            h.last = function() {
                return h[h.length - 1];
            };
            while (e) {
                if (r = !0, h.last() && c[h.last()]) e = e.replace(new RegExp("([\\s\\S]*?)</".concat(h.last(), "[^>]*>")), function(e, a) {
                    return a = a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), l.chars && l.chars(a), 
                    "";
                }), d("", h.last()); else if (0 === e.indexOf("\x3c!--") ? (a = e.indexOf("--\x3e"), 
                a >= 0 && (l.comment && l.comment(e.substring(4, a)), e = e.substring(a + 3), r = !1)) : 0 === e.indexOf("</") ? (f = e.match(u), 
                f && (e = e.substring(f[0].length), f[0].replace(u, d), r = !1)) : 0 === e.indexOf("<") && (f = e.match(t), 
                f && (e = e.substring(f[0].length), f[0].replace(t, g), r = !1)), r) {
                    a = e.indexOf("<");
                    var y = "";
                    while (0 === a) y += "<", e = e.substring(1), a = e.indexOf("<");
                    y += a < 0 ? e : e.substring(0, a), e = a < 0 ? "" : e.substring(a), l.chars && l.chars(y);
                }
                if (e === p) throw new Error("Parse Error: ".concat(e));
                p = e;
            }
            d();
        }
        var p = f;
        l.default = p;
    },
    "6aba": function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = [ [ [ {
            label: "东城区",
            value: "110101"
        }, {
            label: "西城区",
            value: "110102"
        }, {
            label: "朝阳区",
            value: "110105"
        }, {
            label: "丰台区",
            value: "110106"
        }, {
            label: "石景山区",
            value: "110107"
        }, {
            label: "海淀区",
            value: "110108"
        }, {
            label: "门头沟区",
            value: "110109"
        }, {
            label: "房山区",
            value: "110111"
        }, {
            label: "通州区",
            value: "110112"
        }, {
            label: "顺义区",
            value: "110113"
        }, {
            label: "昌平区",
            value: "110114"
        }, {
            label: "大兴区",
            value: "110115"
        }, {
            label: "怀柔区",
            value: "110116"
        }, {
            label: "平谷区",
            value: "110117"
        }, {
            label: "密云区",
            value: "110118"
        }, {
            label: "延庆区",
            value: "110119"
        } ] ], [ [ {
            label: "和平区",
            value: "120101"
        }, {
            label: "河东区",
            value: "120102"
        }, {
            label: "河西区",
            value: "120103"
        }, {
            label: "南开区",
            value: "120104"
        }, {
            label: "河北区",
            value: "120105"
        }, {
            label: "红桥区",
            value: "120106"
        }, {
            label: "东丽区",
            value: "120110"
        }, {
            label: "西青区",
            value: "120111"
        }, {
            label: "津南区",
            value: "120112"
        }, {
            label: "北辰区",
            value: "120113"
        }, {
            label: "武清区",
            value: "120114"
        }, {
            label: "宝坻区",
            value: "120115"
        }, {
            label: "滨海新区",
            value: "120116"
        }, {
            label: "宁河区",
            value: "120117"
        }, {
            label: "静海区",
            value: "120118"
        }, {
            label: "蓟州区",
            value: "120119"
        } ] ], [ [ {
            label: "长安区",
            value: "130102"
        }, {
            label: "桥西区",
            value: "130104"
        }, {
            label: "新华区",
            value: "130105"
        }, {
            label: "井陉矿区",
            value: "130107"
        }, {
            label: "裕华区",
            value: "130108"
        }, {
            label: "藁城区",
            value: "130109"
        }, {
            label: "鹿泉区",
            value: "130110"
        }, {
            label: "栾城区",
            value: "130111"
        }, {
            label: "井陉县",
            value: "130121"
        }, {
            label: "正定县",
            value: "130123"
        }, {
            label: "行唐县",
            value: "130125"
        }, {
            label: "灵寿县",
            value: "130126"
        }, {
            label: "高邑县",
            value: "130127"
        }, {
            label: "深泽县",
            value: "130128"
        }, {
            label: "赞皇县",
            value: "130129"
        }, {
            label: "无极县",
            value: "130130"
        }, {
            label: "平山县",
            value: "130131"
        }, {
            label: "元氏县",
            value: "130132"
        }, {
            label: "赵县",
            value: "130133"
        }, {
            label: "石家庄高新技术产业开发区",
            value: "130171"
        }, {
            label: "石家庄循环化工园区",
            value: "130172"
        }, {
            label: "辛集市",
            value: "130181"
        }, {
            label: "晋州市",
            value: "130183"
        }, {
            label: "新乐市",
            value: "130184"
        } ], [ {
            label: "路南区",
            value: "130202"
        }, {
            label: "路北区",
            value: "130203"
        }, {
            label: "古冶区",
            value: "130204"
        }, {
            label: "开平区",
            value: "130205"
        }, {
            label: "丰南区",
            value: "130207"
        }, {
            label: "丰润区",
            value: "130208"
        }, {
            label: "曹妃甸区",
            value: "130209"
        }, {
            label: "滦县",
            value: "130223"
        }, {
            label: "滦南县",
            value: "130224"
        }, {
            label: "乐亭县",
            value: "130225"
        }, {
            label: "迁西县",
            value: "130227"
        }, {
            label: "玉田县",
            value: "130229"
        }, {
            label: "唐山市芦台经济技术开发区",
            value: "130271"
        }, {
            label: "唐山市汉沽管理区",
            value: "130272"
        }, {
            label: "唐山高新技术产业开发区",
            value: "130273"
        }, {
            label: "河北唐山海港经济开发区",
            value: "130274"
        }, {
            label: "遵化市",
            value: "130281"
        }, {
            label: "迁安市",
            value: "130283"
        } ], [ {
            label: "海港区",
            value: "130302"
        }, {
            label: "山海关区",
            value: "130303"
        }, {
            label: "北戴河区",
            value: "130304"
        }, {
            label: "抚宁区",
            value: "130306"
        }, {
            label: "青龙满族自治县",
            value: "130321"
        }, {
            label: "昌黎县",
            value: "130322"
        }, {
            label: "卢龙县",
            value: "130324"
        }, {
            label: "秦皇岛市经济技术开发区",
            value: "130371"
        }, {
            label: "北戴河新区",
            value: "130372"
        } ], [ {
            label: "邯山区",
            value: "130402"
        }, {
            label: "丛台区",
            value: "130403"
        }, {
            label: "复兴区",
            value: "130404"
        }, {
            label: "峰峰矿区",
            value: "130406"
        }, {
            label: "肥乡区",
            value: "130407"
        }, {
            label: "永年区",
            value: "130408"
        }, {
            label: "临漳县",
            value: "130423"
        }, {
            label: "成安县",
            value: "130424"
        }, {
            label: "大名县",
            value: "130425"
        }, {
            label: "涉县",
            value: "130426"
        }, {
            label: "磁县",
            value: "130427"
        }, {
            label: "邱县",
            value: "130430"
        }, {
            label: "鸡泽县",
            value: "130431"
        }, {
            label: "广平县",
            value: "130432"
        }, {
            label: "馆陶县",
            value: "130433"
        }, {
            label: "魏县",
            value: "130434"
        }, {
            label: "曲周县",
            value: "130435"
        }, {
            label: "邯郸经济技术开发区",
            value: "130471"
        }, {
            label: "邯郸冀南新区",
            value: "130473"
        }, {
            label: "武安市",
            value: "130481"
        } ], [ {
            label: "桥东区",
            value: "130502"
        }, {
            label: "桥西区",
            value: "130503"
        }, {
            label: "邢台县",
            value: "130521"
        }, {
            label: "临城县",
            value: "130522"
        }, {
            label: "内丘县",
            value: "130523"
        }, {
            label: "柏乡县",
            value: "130524"
        }, {
            label: "隆尧县",
            value: "130525"
        }, {
            label: "任县",
            value: "130526"
        }, {
            label: "南和县",
            value: "130527"
        }, {
            label: "宁晋县",
            value: "130528"
        }, {
            label: "巨鹿县",
            value: "130529"
        }, {
            label: "新河县",
            value: "130530"
        }, {
            label: "广宗县",
            value: "130531"
        }, {
            label: "平乡县",
            value: "130532"
        }, {
            label: "威县",
            value: "130533"
        }, {
            label: "清河县",
            value: "130534"
        }, {
            label: "临西县",
            value: "130535"
        }, {
            label: "河北邢台经济开发区",
            value: "130571"
        }, {
            label: "南宫市",
            value: "130581"
        }, {
            label: "沙河市",
            value: "130582"
        } ], [ {
            label: "竞秀区",
            value: "130602"
        }, {
            label: "莲池区",
            value: "130606"
        }, {
            label: "满城区",
            value: "130607"
        }, {
            label: "清苑区",
            value: "130608"
        }, {
            label: "徐水区",
            value: "130609"
        }, {
            label: "涞水县",
            value: "130623"
        }, {
            label: "阜平县",
            value: "130624"
        }, {
            label: "定兴县",
            value: "130626"
        }, {
            label: "唐县",
            value: "130627"
        }, {
            label: "高阳县",
            value: "130628"
        }, {
            label: "容城县",
            value: "130629"
        }, {
            label: "涞源县",
            value: "130630"
        }, {
            label: "望都县",
            value: "130631"
        }, {
            label: "安新县",
            value: "130632"
        }, {
            label: "易县",
            value: "130633"
        }, {
            label: "曲阳县",
            value: "130634"
        }, {
            label: "蠡县",
            value: "130635"
        }, {
            label: "顺平县",
            value: "130636"
        }, {
            label: "博野县",
            value: "130637"
        }, {
            label: "雄县",
            value: "130638"
        }, {
            label: "保定高新技术产业开发区",
            value: "130671"
        }, {
            label: "保定白沟新城",
            value: "130672"
        }, {
            label: "涿州市",
            value: "130681"
        }, {
            label: "定州市",
            value: "130682"
        }, {
            label: "安国市",
            value: "130683"
        }, {
            label: "高碑店市",
            value: "130684"
        } ], [ {
            label: "桥东区",
            value: "130702"
        }, {
            label: "桥西区",
            value: "130703"
        }, {
            label: "宣化区",
            value: "130705"
        }, {
            label: "下花园区",
            value: "130706"
        }, {
            label: "万全区",
            value: "130708"
        }, {
            label: "崇礼区",
            value: "130709"
        }, {
            label: "张北县",
            value: "130722"
        }, {
            label: "康保县",
            value: "130723"
        }, {
            label: "沽源县",
            value: "130724"
        }, {
            label: "尚义县",
            value: "130725"
        }, {
            label: "蔚县",
            value: "130726"
        }, {
            label: "阳原县",
            value: "130727"
        }, {
            label: "怀安县",
            value: "130728"
        }, {
            label: "怀来县",
            value: "130730"
        }, {
            label: "涿鹿县",
            value: "130731"
        }, {
            label: "赤城县",
            value: "130732"
        }, {
            label: "张家口市高新技术产业开发区",
            value: "130771"
        }, {
            label: "张家口市察北管理区",
            value: "130772"
        }, {
            label: "张家口市塞北管理区",
            value: "130773"
        } ], [ {
            label: "双桥区",
            value: "130802"
        }, {
            label: "双滦区",
            value: "130803"
        }, {
            label: "鹰手营子矿区",
            value: "130804"
        }, {
            label: "承德县",
            value: "130821"
        }, {
            label: "兴隆县",
            value: "130822"
        }, {
            label: "滦平县",
            value: "130824"
        }, {
            label: "隆化县",
            value: "130825"
        }, {
            label: "丰宁满族自治县",
            value: "130826"
        }, {
            label: "宽城满族自治县",
            value: "130827"
        }, {
            label: "围场满族蒙古族自治县",
            value: "130828"
        }, {
            label: "承德高新技术产业开发区",
            value: "130871"
        }, {
            label: "平泉市",
            value: "130881"
        } ], [ {
            label: "新华区",
            value: "130902"
        }, {
            label: "运河区",
            value: "130903"
        }, {
            label: "沧县",
            value: "130921"
        }, {
            label: "青县",
            value: "130922"
        }, {
            label: "东光县",
            value: "130923"
        }, {
            label: "海兴县",
            value: "130924"
        }, {
            label: "盐山县",
            value: "130925"
        }, {
            label: "肃宁县",
            value: "130926"
        }, {
            label: "南皮县",
            value: "130927"
        }, {
            label: "吴桥县",
            value: "130928"
        }, {
            label: "献县",
            value: "130929"
        }, {
            label: "孟村回族自治县",
            value: "130930"
        }, {
            label: "河北沧州经济开发区",
            value: "130971"
        }, {
            label: "沧州高新技术产业开发区",
            value: "130972"
        }, {
            label: "沧州渤海新区",
            value: "130973"
        }, {
            label: "泊头市",
            value: "130981"
        }, {
            label: "任丘市",
            value: "130982"
        }, {
            label: "黄骅市",
            value: "130983"
        }, {
            label: "河间市",
            value: "130984"
        } ], [ {
            label: "安次区",
            value: "131002"
        }, {
            label: "广阳区",
            value: "131003"
        }, {
            label: "固安县",
            value: "131022"
        }, {
            label: "永清县",
            value: "131023"
        }, {
            label: "香河县",
            value: "131024"
        }, {
            label: "大城县",
            value: "131025"
        }, {
            label: "文安县",
            value: "131026"
        }, {
            label: "大厂回族自治县",
            value: "131028"
        }, {
            label: "廊坊经济技术开发区",
            value: "131071"
        }, {
            label: "霸州市",
            value: "131081"
        }, {
            label: "三河市",
            value: "131082"
        } ], [ {
            label: "桃城区",
            value: "131102"
        }, {
            label: "冀州区",
            value: "131103"
        }, {
            label: "枣强县",
            value: "131121"
        }, {
            label: "武邑县",
            value: "131122"
        }, {
            label: "武强县",
            value: "131123"
        }, {
            label: "饶阳县",
            value: "131124"
        }, {
            label: "安平县",
            value: "131125"
        }, {
            label: "故城县",
            value: "131126"
        }, {
            label: "景县",
            value: "131127"
        }, {
            label: "阜城县",
            value: "131128"
        }, {
            label: "河北衡水经济开发区",
            value: "131171"
        }, {
            label: "衡水滨湖新区",
            value: "131172"
        }, {
            label: "深州市",
            value: "131182"
        } ] ], [ [ {
            label: "小店区",
            value: "140105"
        }, {
            label: "迎泽区",
            value: "140106"
        }, {
            label: "杏花岭区",
            value: "140107"
        }, {
            label: "尖草坪区",
            value: "140108"
        }, {
            label: "万柏林区",
            value: "140109"
        }, {
            label: "晋源区",
            value: "140110"
        }, {
            label: "清徐县",
            value: "140121"
        }, {
            label: "阳曲县",
            value: "140122"
        }, {
            label: "娄烦县",
            value: "140123"
        }, {
            label: "山西转型综合改革示范区",
            value: "140171"
        }, {
            label: "古交市",
            value: "140181"
        } ], [ {
            label: "城区",
            value: "140202"
        }, {
            label: "矿区",
            value: "140203"
        }, {
            label: "南郊区",
            value: "140211"
        }, {
            label: "新荣区",
            value: "140212"
        }, {
            label: "阳高县",
            value: "140221"
        }, {
            label: "天镇县",
            value: "140222"
        }, {
            label: "广灵县",
            value: "140223"
        }, {
            label: "灵丘县",
            value: "140224"
        }, {
            label: "浑源县",
            value: "140225"
        }, {
            label: "左云县",
            value: "140226"
        }, {
            label: "大同县",
            value: "140227"
        }, {
            label: "山西大同经济开发区",
            value: "140271"
        } ], [ {
            label: "城区",
            value: "140302"
        }, {
            label: "矿区",
            value: "140303"
        }, {
            label: "郊区",
            value: "140311"
        }, {
            label: "平定县",
            value: "140321"
        }, {
            label: "盂县",
            value: "140322"
        }, {
            label: "山西阳泉经济开发区",
            value: "140371"
        } ], [ {
            label: "城区",
            value: "140402"
        }, {
            label: "郊区",
            value: "140411"
        }, {
            label: "长治县",
            value: "140421"
        }, {
            label: "襄垣县",
            value: "140423"
        }, {
            label: "屯留县",
            value: "140424"
        }, {
            label: "平顺县",
            value: "140425"
        }, {
            label: "黎城县",
            value: "140426"
        }, {
            label: "壶关县",
            value: "140427"
        }, {
            label: "长子县",
            value: "140428"
        }, {
            label: "武乡县",
            value: "140429"
        }, {
            label: "沁县",
            value: "140430"
        }, {
            label: "沁源县",
            value: "140431"
        }, {
            label: "山西长治高新技术产业园区",
            value: "140471"
        }, {
            label: "潞城市",
            value: "140481"
        } ], [ {
            label: "城区",
            value: "140502"
        }, {
            label: "沁水县",
            value: "140521"
        }, {
            label: "阳城县",
            value: "140522"
        }, {
            label: "陵川县",
            value: "140524"
        }, {
            label: "泽州县",
            value: "140525"
        }, {
            label: "高平市",
            value: "140581"
        } ], [ {
            label: "朔城区",
            value: "140602"
        }, {
            label: "平鲁区",
            value: "140603"
        }, {
            label: "山阴县",
            value: "140621"
        }, {
            label: "应县",
            value: "140622"
        }, {
            label: "右玉县",
            value: "140623"
        }, {
            label: "怀仁县",
            value: "140624"
        }, {
            label: "山西朔州经济开发区",
            value: "140671"
        } ], [ {
            label: "榆次区",
            value: "140702"
        }, {
            label: "榆社县",
            value: "140721"
        }, {
            label: "左权县",
            value: "140722"
        }, {
            label: "和顺县",
            value: "140723"
        }, {
            label: "昔阳县",
            value: "140724"
        }, {
            label: "寿阳县",
            value: "140725"
        }, {
            label: "太谷县",
            value: "140726"
        }, {
            label: "祁县",
            value: "140727"
        }, {
            label: "平遥县",
            value: "140728"
        }, {
            label: "灵石县",
            value: "140729"
        }, {
            label: "介休市",
            value: "140781"
        } ], [ {
            label: "盐湖区",
            value: "140802"
        }, {
            label: "临猗县",
            value: "140821"
        }, {
            label: "万荣县",
            value: "140822"
        }, {
            label: "闻喜县",
            value: "140823"
        }, {
            label: "稷山县",
            value: "140824"
        }, {
            label: "新绛县",
            value: "140825"
        }, {
            label: "绛县",
            value: "140826"
        }, {
            label: "垣曲县",
            value: "140827"
        }, {
            label: "夏县",
            value: "140828"
        }, {
            label: "平陆县",
            value: "140829"
        }, {
            label: "芮城县",
            value: "140830"
        }, {
            label: "永济市",
            value: "140881"
        }, {
            label: "河津市",
            value: "140882"
        } ], [ {
            label: "忻府区",
            value: "140902"
        }, {
            label: "定襄县",
            value: "140921"
        }, {
            label: "五台县",
            value: "140922"
        }, {
            label: "代县",
            value: "140923"
        }, {
            label: "繁峙县",
            value: "140924"
        }, {
            label: "宁武县",
            value: "140925"
        }, {
            label: "静乐县",
            value: "140926"
        }, {
            label: "神池县",
            value: "140927"
        }, {
            label: "五寨县",
            value: "140928"
        }, {
            label: "岢岚县",
            value: "140929"
        }, {
            label: "河曲县",
            value: "140930"
        }, {
            label: "保德县",
            value: "140931"
        }, {
            label: "偏关县",
            value: "140932"
        }, {
            label: "五台山风景名胜区",
            value: "140971"
        }, {
            label: "原平市",
            value: "140981"
        } ], [ {
            label: "尧都区",
            value: "141002"
        }, {
            label: "曲沃县",
            value: "141021"
        }, {
            label: "翼城县",
            value: "141022"
        }, {
            label: "襄汾县",
            value: "141023"
        }, {
            label: "洪洞县",
            value: "141024"
        }, {
            label: "古县",
            value: "141025"
        }, {
            label: "安泽县",
            value: "141026"
        }, {
            label: "浮山县",
            value: "141027"
        }, {
            label: "吉县",
            value: "141028"
        }, {
            label: "乡宁县",
            value: "141029"
        }, {
            label: "大宁县",
            value: "141030"
        }, {
            label: "隰县",
            value: "141031"
        }, {
            label: "永和县",
            value: "141032"
        }, {
            label: "蒲县",
            value: "141033"
        }, {
            label: "汾西县",
            value: "141034"
        }, {
            label: "侯马市",
            value: "141081"
        }, {
            label: "霍州市",
            value: "141082"
        } ], [ {
            label: "离石区",
            value: "141102"
        }, {
            label: "文水县",
            value: "141121"
        }, {
            label: "交城县",
            value: "141122"
        }, {
            label: "兴县",
            value: "141123"
        }, {
            label: "临县",
            value: "141124"
        }, {
            label: "柳林县",
            value: "141125"
        }, {
            label: "石楼县",
            value: "141126"
        }, {
            label: "岚县",
            value: "141127"
        }, {
            label: "方山县",
            value: "141128"
        }, {
            label: "中阳县",
            value: "141129"
        }, {
            label: "交口县",
            value: "141130"
        }, {
            label: "孝义市",
            value: "141181"
        }, {
            label: "汾阳市",
            value: "141182"
        } ] ], [ [ {
            label: "新城区",
            value: "150102"
        }, {
            label: "回民区",
            value: "150103"
        }, {
            label: "玉泉区",
            value: "150104"
        }, {
            label: "赛罕区",
            value: "150105"
        }, {
            label: "土默特左旗",
            value: "150121"
        }, {
            label: "托克托县",
            value: "150122"
        }, {
            label: "和林格尔县",
            value: "150123"
        }, {
            label: "清水河县",
            value: "150124"
        }, {
            label: "武川县",
            value: "150125"
        }, {
            label: "呼和浩特金海工业园区",
            value: "150171"
        }, {
            label: "呼和浩特经济技术开发区",
            value: "150172"
        } ], [ {
            label: "东河区",
            value: "150202"
        }, {
            label: "昆都仑区",
            value: "150203"
        }, {
            label: "青山区",
            value: "150204"
        }, {
            label: "石拐区",
            value: "150205"
        }, {
            label: "白云鄂博矿区",
            value: "150206"
        }, {
            label: "九原区",
            value: "150207"
        }, {
            label: "土默特右旗",
            value: "150221"
        }, {
            label: "固阳县",
            value: "150222"
        }, {
            label: "达尔罕茂明安联合旗",
            value: "150223"
        }, {
            label: "包头稀土高新技术产业开发区",
            value: "150271"
        } ], [ {
            label: "海勃湾区",
            value: "150302"
        }, {
            label: "海南区",
            value: "150303"
        }, {
            label: "乌达区",
            value: "150304"
        } ], [ {
            label: "红山区",
            value: "150402"
        }, {
            label: "元宝山区",
            value: "150403"
        }, {
            label: "松山区",
            value: "150404"
        }, {
            label: "阿鲁科尔沁旗",
            value: "150421"
        }, {
            label: "巴林左旗",
            value: "150422"
        }, {
            label: "巴林右旗",
            value: "150423"
        }, {
            label: "林西县",
            value: "150424"
        }, {
            label: "克什克腾旗",
            value: "150425"
        }, {
            label: "翁牛特旗",
            value: "150426"
        }, {
            label: "喀喇沁旗",
            value: "150428"
        }, {
            label: "宁城县",
            value: "150429"
        }, {
            label: "敖汉旗",
            value: "150430"
        } ], [ {
            label: "科尔沁区",
            value: "150502"
        }, {
            label: "科尔沁左翼中旗",
            value: "150521"
        }, {
            label: "科尔沁左翼后旗",
            value: "150522"
        }, {
            label: "开鲁县",
            value: "150523"
        }, {
            label: "库伦旗",
            value: "150524"
        }, {
            label: "奈曼旗",
            value: "150525"
        }, {
            label: "扎鲁特旗",
            value: "150526"
        }, {
            label: "通辽经济技术开发区",
            value: "150571"
        }, {
            label: "霍林郭勒市",
            value: "150581"
        } ], [ {
            label: "东胜区",
            value: "150602"
        }, {
            label: "康巴什区",
            value: "150603"
        }, {
            label: "达拉特旗",
            value: "150621"
        }, {
            label: "准格尔旗",
            value: "150622"
        }, {
            label: "鄂托克前旗",
            value: "150623"
        }, {
            label: "鄂托克旗",
            value: "150624"
        }, {
            label: "杭锦旗",
            value: "150625"
        }, {
            label: "乌审旗",
            value: "150626"
        }, {
            label: "伊金霍洛旗",
            value: "150627"
        } ], [ {
            label: "海拉尔区",
            value: "150702"
        }, {
            label: "扎赉诺尔区",
            value: "150703"
        }, {
            label: "阿荣旗",
            value: "150721"
        }, {
            label: "莫力达瓦达斡尔族自治旗",
            value: "150722"
        }, {
            label: "鄂伦春自治旗",
            value: "150723"
        }, {
            label: "鄂温克族自治旗",
            value: "150724"
        }, {
            label: "陈巴尔虎旗",
            value: "150725"
        }, {
            label: "新巴尔虎左旗",
            value: "150726"
        }, {
            label: "新巴尔虎右旗",
            value: "150727"
        }, {
            label: "满洲里市",
            value: "150781"
        }, {
            label: "牙克石市",
            value: "150782"
        }, {
            label: "扎兰屯市",
            value: "150783"
        }, {
            label: "额尔古纳市",
            value: "150784"
        }, {
            label: "根河市",
            value: "150785"
        } ], [ {
            label: "临河区",
            value: "150802"
        }, {
            label: "五原县",
            value: "150821"
        }, {
            label: "磴口县",
            value: "150822"
        }, {
            label: "乌拉特前旗",
            value: "150823"
        }, {
            label: "乌拉特中旗",
            value: "150824"
        }, {
            label: "乌拉特后旗",
            value: "150825"
        }, {
            label: "杭锦后旗",
            value: "150826"
        } ], [ {
            label: "集宁区",
            value: "150902"
        }, {
            label: "卓资县",
            value: "150921"
        }, {
            label: "化德县",
            value: "150922"
        }, {
            label: "商都县",
            value: "150923"
        }, {
            label: "兴和县",
            value: "150924"
        }, {
            label: "凉城县",
            value: "150925"
        }, {
            label: "察哈尔右翼前旗",
            value: "150926"
        }, {
            label: "察哈尔右翼中旗",
            value: "150927"
        }, {
            label: "察哈尔右翼后旗",
            value: "150928"
        }, {
            label: "四子王旗",
            value: "150929"
        }, {
            label: "丰镇市",
            value: "150981"
        } ], [ {
            label: "乌兰浩特市",
            value: "152201"
        }, {
            label: "阿尔山市",
            value: "152202"
        }, {
            label: "科尔沁右翼前旗",
            value: "152221"
        }, {
            label: "科尔沁右翼中旗",
            value: "152222"
        }, {
            label: "扎赉特旗",
            value: "152223"
        }, {
            label: "突泉县",
            value: "152224"
        } ], [ {
            label: "二连浩特市",
            value: "152501"
        }, {
            label: "锡林浩特市",
            value: "152502"
        }, {
            label: "阿巴嘎旗",
            value: "152522"
        }, {
            label: "苏尼特左旗",
            value: "152523"
        }, {
            label: "苏尼特右旗",
            value: "152524"
        }, {
            label: "东乌珠穆沁旗",
            value: "152525"
        }, {
            label: "西乌珠穆沁旗",
            value: "152526"
        }, {
            label: "太仆寺旗",
            value: "152527"
        }, {
            label: "镶黄旗",
            value: "152528"
        }, {
            label: "正镶白旗",
            value: "152529"
        }, {
            label: "正蓝旗",
            value: "152530"
        }, {
            label: "多伦县",
            value: "152531"
        }, {
            label: "乌拉盖管委会",
            value: "152571"
        } ], [ {
            label: "阿拉善左旗",
            value: "152921"
        }, {
            label: "阿拉善右旗",
            value: "152922"
        }, {
            label: "额济纳旗",
            value: "152923"
        }, {
            label: "内蒙古阿拉善经济开发区",
            value: "152971"
        } ] ], [ [ {
            label: "和平区",
            value: "210102"
        }, {
            label: "沈河区",
            value: "210103"
        }, {
            label: "大东区",
            value: "210104"
        }, {
            label: "皇姑区",
            value: "210105"
        }, {
            label: "铁西区",
            value: "210106"
        }, {
            label: "苏家屯区",
            value: "210111"
        }, {
            label: "浑南区",
            value: "210112"
        }, {
            label: "沈北新区",
            value: "210113"
        }, {
            label: "于洪区",
            value: "210114"
        }, {
            label: "辽中区",
            value: "210115"
        }, {
            label: "康平县",
            value: "210123"
        }, {
            label: "法库县",
            value: "210124"
        }, {
            label: "新民市",
            value: "210181"
        } ], [ {
            label: "中山区",
            value: "210202"
        }, {
            label: "西岗区",
            value: "210203"
        }, {
            label: "沙河口区",
            value: "210204"
        }, {
            label: "甘井子区",
            value: "210211"
        }, {
            label: "旅顺口区",
            value: "210212"
        }, {
            label: "金州区",
            value: "210213"
        }, {
            label: "普兰店区",
            value: "210214"
        }, {
            label: "长海县",
            value: "210224"
        }, {
            label: "瓦房店市",
            value: "210281"
        }, {
            label: "庄河市",
            value: "210283"
        } ], [ {
            label: "铁东区",
            value: "210302"
        }, {
            label: "铁西区",
            value: "210303"
        }, {
            label: "立山区",
            value: "210304"
        }, {
            label: "千山区",
            value: "210311"
        }, {
            label: "台安县",
            value: "210321"
        }, {
            label: "岫岩满族自治县",
            value: "210323"
        }, {
            label: "海城市",
            value: "210381"
        } ], [ {
            label: "新抚区",
            value: "210402"
        }, {
            label: "东洲区",
            value: "210403"
        }, {
            label: "望花区",
            value: "210404"
        }, {
            label: "顺城区",
            value: "210411"
        }, {
            label: "抚顺县",
            value: "210421"
        }, {
            label: "新宾满族自治县",
            value: "210422"
        }, {
            label: "清原满族自治县",
            value: "210423"
        } ], [ {
            label: "平山区",
            value: "210502"
        }, {
            label: "溪湖区",
            value: "210503"
        }, {
            label: "明山区",
            value: "210504"
        }, {
            label: "南芬区",
            value: "210505"
        }, {
            label: "本溪满族自治县",
            value: "210521"
        }, {
            label: "桓仁满族自治县",
            value: "210522"
        } ], [ {
            label: "元宝区",
            value: "210602"
        }, {
            label: "振兴区",
            value: "210603"
        }, {
            label: "振安区",
            value: "210604"
        }, {
            label: "宽甸满族自治县",
            value: "210624"
        }, {
            label: "东港市",
            value: "210681"
        }, {
            label: "凤城市",
            value: "210682"
        } ], [ {
            label: "古塔区",
            value: "210702"
        }, {
            label: "凌河区",
            value: "210703"
        }, {
            label: "太和区",
            value: "210711"
        }, {
            label: "黑山县",
            value: "210726"
        }, {
            label: "义县",
            value: "210727"
        }, {
            label: "凌海市",
            value: "210781"
        }, {
            label: "北镇市",
            value: "210782"
        } ], [ {
            label: "站前区",
            value: "210802"
        }, {
            label: "西市区",
            value: "210803"
        }, {
            label: "鲅鱼圈区",
            value: "210804"
        }, {
            label: "老边区",
            value: "210811"
        }, {
            label: "盖州市",
            value: "210881"
        }, {
            label: "大石桥市",
            value: "210882"
        } ], [ {
            label: "海州区",
            value: "210902"
        }, {
            label: "新邱区",
            value: "210903"
        }, {
            label: "太平区",
            value: "210904"
        }, {
            label: "清河门区",
            value: "210905"
        }, {
            label: "细河区",
            value: "210911"
        }, {
            label: "阜新蒙古族自治县",
            value: "210921"
        }, {
            label: "彰武县",
            value: "210922"
        } ], [ {
            label: "白塔区",
            value: "211002"
        }, {
            label: "文圣区",
            value: "211003"
        }, {
            label: "宏伟区",
            value: "211004"
        }, {
            label: "弓长岭区",
            value: "211005"
        }, {
            label: "太子河区",
            value: "211011"
        }, {
            label: "辽阳县",
            value: "211021"
        }, {
            label: "灯塔市",
            value: "211081"
        } ], [ {
            label: "双台子区",
            value: "211102"
        }, {
            label: "兴隆台区",
            value: "211103"
        }, {
            label: "大洼区",
            value: "211104"
        }, {
            label: "盘山县",
            value: "211122"
        } ], [ {
            label: "银州区",
            value: "211202"
        }, {
            label: "清河区",
            value: "211204"
        }, {
            label: "铁岭县",
            value: "211221"
        }, {
            label: "西丰县",
            value: "211223"
        }, {
            label: "昌图县",
            value: "211224"
        }, {
            label: "调兵山市",
            value: "211281"
        }, {
            label: "开原市",
            value: "211282"
        } ], [ {
            label: "双塔区",
            value: "211302"
        }, {
            label: "龙城区",
            value: "211303"
        }, {
            label: "朝阳县",
            value: "211321"
        }, {
            label: "建平县",
            value: "211322"
        }, {
            label: "喀喇沁左翼蒙古族自治县",
            value: "211324"
        }, {
            label: "北票市",
            value: "211381"
        }, {
            label: "凌源市",
            value: "211382"
        } ], [ {
            label: "连山区",
            value: "211402"
        }, {
            label: "龙港区",
            value: "211403"
        }, {
            label: "南票区",
            value: "211404"
        }, {
            label: "绥中县",
            value: "211421"
        }, {
            label: "建昌县",
            value: "211422"
        }, {
            label: "兴城市",
            value: "211481"
        } ] ], [ [ {
            label: "南关区",
            value: "220102"
        }, {
            label: "宽城区",
            value: "220103"
        }, {
            label: "朝阳区",
            value: "220104"
        }, {
            label: "二道区",
            value: "220105"
        }, {
            label: "绿园区",
            value: "220106"
        }, {
            label: "双阳区",
            value: "220112"
        }, {
            label: "九台区",
            value: "220113"
        }, {
            label: "农安县",
            value: "220122"
        }, {
            label: "长春经济技术开发区",
            value: "220171"
        }, {
            label: "长春净月高新技术产业开发区",
            value: "220172"
        }, {
            label: "长春高新技术产业开发区",
            value: "220173"
        }, {
            label: "长春汽车经济技术开发区",
            value: "220174"
        }, {
            label: "榆树市",
            value: "220182"
        }, {
            label: "德惠市",
            value: "220183"
        } ], [ {
            label: "昌邑区",
            value: "220202"
        }, {
            label: "龙潭区",
            value: "220203"
        }, {
            label: "船营区",
            value: "220204"
        }, {
            label: "丰满区",
            value: "220211"
        }, {
            label: "永吉县",
            value: "220221"
        }, {
            label: "吉林经济开发区",
            value: "220271"
        }, {
            label: "吉林高新技术产业开发区",
            value: "220272"
        }, {
            label: "吉林中国新加坡食品区",
            value: "220273"
        }, {
            label: "蛟河市",
            value: "220281"
        }, {
            label: "桦甸市",
            value: "220282"
        }, {
            label: "舒兰市",
            value: "220283"
        }, {
            label: "磐石市",
            value: "220284"
        } ], [ {
            label: "铁西区",
            value: "220302"
        }, {
            label: "铁东区",
            value: "220303"
        }, {
            label: "梨树县",
            value: "220322"
        }, {
            label: "伊通满族自治县",
            value: "220323"
        }, {
            label: "公主岭市",
            value: "220381"
        }, {
            label: "双辽市",
            value: "220382"
        } ], [ {
            label: "龙山区",
            value: "220402"
        }, {
            label: "西安区",
            value: "220403"
        }, {
            label: "东丰县",
            value: "220421"
        }, {
            label: "东辽县",
            value: "220422"
        } ], [ {
            label: "东昌区",
            value: "220502"
        }, {
            label: "二道江区",
            value: "220503"
        }, {
            label: "通化县",
            value: "220521"
        }, {
            label: "辉南县",
            value: "220523"
        }, {
            label: "柳河县",
            value: "220524"
        }, {
            label: "梅河口市",
            value: "220581"
        }, {
            label: "集安市",
            value: "220582"
        } ], [ {
            label: "浑江区",
            value: "220602"
        }, {
            label: "江源区",
            value: "220605"
        }, {
            label: "抚松县",
            value: "220621"
        }, {
            label: "靖宇县",
            value: "220622"
        }, {
            label: "长白朝鲜族自治县",
            value: "220623"
        }, {
            label: "临江市",
            value: "220681"
        } ], [ {
            label: "宁江区",
            value: "220702"
        }, {
            label: "前郭尔罗斯蒙古族自治县",
            value: "220721"
        }, {
            label: "长岭县",
            value: "220722"
        }, {
            label: "乾安县",
            value: "220723"
        }, {
            label: "吉林松原经济开发区",
            value: "220771"
        }, {
            label: "扶余市",
            value: "220781"
        } ], [ {
            label: "洮北区",
            value: "220802"
        }, {
            label: "镇赉县",
            value: "220821"
        }, {
            label: "通榆县",
            value: "220822"
        }, {
            label: "吉林白城经济开发区",
            value: "220871"
        }, {
            label: "洮南市",
            value: "220881"
        }, {
            label: "大安市",
            value: "220882"
        } ], [ {
            label: "延吉市",
            value: "222401"
        }, {
            label: "图们市",
            value: "222402"
        }, {
            label: "敦化市",
            value: "222403"
        }, {
            label: "珲春市",
            value: "222404"
        }, {
            label: "龙井市",
            value: "222405"
        }, {
            label: "和龙市",
            value: "222406"
        }, {
            label: "汪清县",
            value: "222424"
        }, {
            label: "安图县",
            value: "222426"
        } ] ], [ [ {
            label: "道里区",
            value: "230102"
        }, {
            label: "南岗区",
            value: "230103"
        }, {
            label: "道外区",
            value: "230104"
        }, {
            label: "平房区",
            value: "230108"
        }, {
            label: "松北区",
            value: "230109"
        }, {
            label: "香坊区",
            value: "230110"
        }, {
            label: "呼兰区",
            value: "230111"
        }, {
            label: "阿城区",
            value: "230112"
        }, {
            label: "双城区",
            value: "230113"
        }, {
            label: "依兰县",
            value: "230123"
        }, {
            label: "方正县",
            value: "230124"
        }, {
            label: "宾县",
            value: "230125"
        }, {
            label: "巴彦县",
            value: "230126"
        }, {
            label: "木兰县",
            value: "230127"
        }, {
            label: "通河县",
            value: "230128"
        }, {
            label: "延寿县",
            value: "230129"
        }, {
            label: "尚志市",
            value: "230183"
        }, {
            label: "五常市",
            value: "230184"
        } ], [ {
            label: "龙沙区",
            value: "230202"
        }, {
            label: "建华区",
            value: "230203"
        }, {
            label: "铁锋区",
            value: "230204"
        }, {
            label: "昂昂溪区",
            value: "230205"
        }, {
            label: "富拉尔基区",
            value: "230206"
        }, {
            label: "碾子山区",
            value: "230207"
        }, {
            label: "梅里斯达斡尔族区",
            value: "230208"
        }, {
            label: "龙江县",
            value: "230221"
        }, {
            label: "依安县",
            value: "230223"
        }, {
            label: "泰来县",
            value: "230224"
        }, {
            label: "甘南县",
            value: "230225"
        }, {
            label: "富裕县",
            value: "230227"
        }, {
            label: "克山县",
            value: "230229"
        }, {
            label: "克东县",
            value: "230230"
        }, {
            label: "拜泉县",
            value: "230231"
        }, {
            label: "讷河市",
            value: "230281"
        } ], [ {
            label: "鸡冠区",
            value: "230302"
        }, {
            label: "恒山区",
            value: "230303"
        }, {
            label: "滴道区",
            value: "230304"
        }, {
            label: "梨树区",
            value: "230305"
        }, {
            label: "城子河区",
            value: "230306"
        }, {
            label: "麻山区",
            value: "230307"
        }, {
            label: "鸡东县",
            value: "230321"
        }, {
            label: "虎林市",
            value: "230381"
        }, {
            label: "密山市",
            value: "230382"
        } ], [ {
            label: "向阳区",
            value: "230402"
        }, {
            label: "工农区",
            value: "230403"
        }, {
            label: "南山区",
            value: "230404"
        }, {
            label: "兴安区",
            value: "230405"
        }, {
            label: "东山区",
            value: "230406"
        }, {
            label: "兴山区",
            value: "230407"
        }, {
            label: "萝北县",
            value: "230421"
        }, {
            label: "绥滨县",
            value: "230422"
        } ], [ {
            label: "尖山区",
            value: "230502"
        }, {
            label: "岭东区",
            value: "230503"
        }, {
            label: "四方台区",
            value: "230505"
        }, {
            label: "宝山区",
            value: "230506"
        }, {
            label: "集贤县",
            value: "230521"
        }, {
            label: "友谊县",
            value: "230522"
        }, {
            label: "宝清县",
            value: "230523"
        }, {
            label: "饶河县",
            value: "230524"
        } ], [ {
            label: "萨尔图区",
            value: "230602"
        }, {
            label: "龙凤区",
            value: "230603"
        }, {
            label: "让胡路区",
            value: "230604"
        }, {
            label: "红岗区",
            value: "230605"
        }, {
            label: "大同区",
            value: "230606"
        }, {
            label: "肇州县",
            value: "230621"
        }, {
            label: "肇源县",
            value: "230622"
        }, {
            label: "林甸县",
            value: "230623"
        }, {
            label: "杜尔伯特蒙古族自治县",
            value: "230624"
        }, {
            label: "大庆高新技术产业开发区",
            value: "230671"
        } ], [ {
            label: "伊春区",
            value: "230702"
        }, {
            label: "南岔区",
            value: "230703"
        }, {
            label: "友好区",
            value: "230704"
        }, {
            label: "西林区",
            value: "230705"
        }, {
            label: "翠峦区",
            value: "230706"
        }, {
            label: "新青区",
            value: "230707"
        }, {
            label: "美溪区",
            value: "230708"
        }, {
            label: "金山屯区",
            value: "230709"
        }, {
            label: "五营区",
            value: "230710"
        }, {
            label: "乌马河区",
            value: "230711"
        }, {
            label: "汤旺河区",
            value: "230712"
        }, {
            label: "带岭区",
            value: "230713"
        }, {
            label: "乌伊岭区",
            value: "230714"
        }, {
            label: "红星区",
            value: "230715"
        }, {
            label: "上甘岭区",
            value: "230716"
        }, {
            label: "嘉荫县",
            value: "230722"
        }, {
            label: "铁力市",
            value: "230781"
        } ], [ {
            label: "向阳区",
            value: "230803"
        }, {
            label: "前进区",
            value: "230804"
        }, {
            label: "东风区",
            value: "230805"
        }, {
            label: "郊区",
            value: "230811"
        }, {
            label: "桦南县",
            value: "230822"
        }, {
            label: "桦川县",
            value: "230826"
        }, {
            label: "汤原县",
            value: "230828"
        }, {
            label: "同江市",
            value: "230881"
        }, {
            label: "富锦市",
            value: "230882"
        }, {
            label: "抚远市",
            value: "230883"
        } ], [ {
            label: "新兴区",
            value: "230902"
        }, {
            label: "桃山区",
            value: "230903"
        }, {
            label: "茄子河区",
            value: "230904"
        }, {
            label: "勃利县",
            value: "230921"
        } ], [ {
            label: "东安区",
            value: "231002"
        }, {
            label: "阳明区",
            value: "231003"
        }, {
            label: "爱民区",
            value: "231004"
        }, {
            label: "西安区",
            value: "231005"
        }, {
            label: "林口县",
            value: "231025"
        }, {
            label: "牡丹江经济技术开发区",
            value: "231071"
        }, {
            label: "绥芬河市",
            value: "231081"
        }, {
            label: "海林市",
            value: "231083"
        }, {
            label: "宁安市",
            value: "231084"
        }, {
            label: "穆棱市",
            value: "231085"
        }, {
            label: "东宁市",
            value: "231086"
        } ], [ {
            label: "爱辉区",
            value: "231102"
        }, {
            label: "嫩江县",
            value: "231121"
        }, {
            label: "逊克县",
            value: "231123"
        }, {
            label: "孙吴县",
            value: "231124"
        }, {
            label: "北安市",
            value: "231181"
        }, {
            label: "五大连池市",
            value: "231182"
        } ], [ {
            label: "北林区",
            value: "231202"
        }, {
            label: "望奎县",
            value: "231221"
        }, {
            label: "兰西县",
            value: "231222"
        }, {
            label: "青冈县",
            value: "231223"
        }, {
            label: "庆安县",
            value: "231224"
        }, {
            label: "明水县",
            value: "231225"
        }, {
            label: "绥棱县",
            value: "231226"
        }, {
            label: "安达市",
            value: "231281"
        }, {
            label: "肇东市",
            value: "231282"
        }, {
            label: "海伦市",
            value: "231283"
        } ], [ {
            label: "加格达奇区",
            value: "232701"
        }, {
            label: "松岭区",
            value: "232702"
        }, {
            label: "新林区",
            value: "232703"
        }, {
            label: "呼中区",
            value: "232704"
        }, {
            label: "呼玛县",
            value: "232721"
        }, {
            label: "塔河县",
            value: "232722"
        }, {
            label: "漠河县",
            value: "232723"
        } ] ], [ [ {
            label: "黄浦区",
            value: "310101"
        }, {
            label: "徐汇区",
            value: "310104"
        }, {
            label: "长宁区",
            value: "310105"
        }, {
            label: "静安区",
            value: "310106"
        }, {
            label: "普陀区",
            value: "310107"
        }, {
            label: "虹口区",
            value: "310109"
        }, {
            label: "杨浦区",
            value: "310110"
        }, {
            label: "闵行区",
            value: "310112"
        }, {
            label: "宝山区",
            value: "310113"
        }, {
            label: "嘉定区",
            value: "310114"
        }, {
            label: "浦东新区",
            value: "310115"
        }, {
            label: "金山区",
            value: "310116"
        }, {
            label: "松江区",
            value: "310117"
        }, {
            label: "青浦区",
            value: "310118"
        }, {
            label: "奉贤区",
            value: "310120"
        }, {
            label: "崇明区",
            value: "310151"
        } ] ], [ [ {
            label: "玄武区",
            value: "320102"
        }, {
            label: "秦淮区",
            value: "320104"
        }, {
            label: "建邺区",
            value: "320105"
        }, {
            label: "鼓楼区",
            value: "320106"
        }, {
            label: "浦口区",
            value: "320111"
        }, {
            label: "栖霞区",
            value: "320113"
        }, {
            label: "雨花台区",
            value: "320114"
        }, {
            label: "江宁区",
            value: "320115"
        }, {
            label: "六合区",
            value: "320116"
        }, {
            label: "溧水区",
            value: "320117"
        }, {
            label: "高淳区",
            value: "320118"
        } ], [ {
            label: "锡山区",
            value: "320205"
        }, {
            label: "惠山区",
            value: "320206"
        }, {
            label: "滨湖区",
            value: "320211"
        }, {
            label: "梁溪区",
            value: "320213"
        }, {
            label: "新吴区",
            value: "320214"
        }, {
            label: "江阴市",
            value: "320281"
        }, {
            label: "宜兴市",
            value: "320282"
        } ], [ {
            label: "鼓楼区",
            value: "320302"
        }, {
            label: "云龙区",
            value: "320303"
        }, {
            label: "贾汪区",
            value: "320305"
        }, {
            label: "泉山区",
            value: "320311"
        }, {
            label: "铜山区",
            value: "320312"
        }, {
            label: "丰县",
            value: "320321"
        }, {
            label: "沛县",
            value: "320322"
        }, {
            label: "睢宁县",
            value: "320324"
        }, {
            label: "徐州经济技术开发区",
            value: "320371"
        }, {
            label: "新沂市",
            value: "320381"
        }, {
            label: "邳州市",
            value: "320382"
        } ], [ {
            label: "天宁区",
            value: "320402"
        }, {
            label: "钟楼区",
            value: "320404"
        }, {
            label: "新北区",
            value: "320411"
        }, {
            label: "武进区",
            value: "320412"
        }, {
            label: "金坛区",
            value: "320413"
        }, {
            label: "溧阳市",
            value: "320481"
        } ], [ {
            label: "虎丘区",
            value: "320505"
        }, {
            label: "吴中区",
            value: "320506"
        }, {
            label: "相城区",
            value: "320507"
        }, {
            label: "姑苏区",
            value: "320508"
        }, {
            label: "吴江区",
            value: "320509"
        }, {
            label: "苏州工业园区",
            value: "320571"
        }, {
            label: "常熟市",
            value: "320581"
        }, {
            label: "张家港市",
            value: "320582"
        }, {
            label: "昆山市",
            value: "320583"
        }, {
            label: "太仓市",
            value: "320585"
        } ], [ {
            label: "崇川区",
            value: "320602"
        }, {
            label: "港闸区",
            value: "320611"
        }, {
            label: "通州区",
            value: "320612"
        }, {
            label: "海安县",
            value: "320621"
        }, {
            label: "如东县",
            value: "320623"
        }, {
            label: "南通经济技术开发区",
            value: "320671"
        }, {
            label: "启东市",
            value: "320681"
        }, {
            label: "如皋市",
            value: "320682"
        }, {
            label: "海门市",
            value: "320684"
        } ], [ {
            label: "连云区",
            value: "320703"
        }, {
            label: "海州区",
            value: "320706"
        }, {
            label: "赣榆区",
            value: "320707"
        }, {
            label: "东海县",
            value: "320722"
        }, {
            label: "灌云县",
            value: "320723"
        }, {
            label: "灌南县",
            value: "320724"
        }, {
            label: "连云港经济技术开发区",
            value: "320771"
        }, {
            label: "连云港高新技术产业开发区",
            value: "320772"
        } ], [ {
            label: "淮安区",
            value: "320803"
        }, {
            label: "淮阴区",
            value: "320804"
        }, {
            label: "清江浦区",
            value: "320812"
        }, {
            label: "洪泽区",
            value: "320813"
        }, {
            label: "涟水县",
            value: "320826"
        }, {
            label: "盱眙县",
            value: "320830"
        }, {
            label: "金湖县",
            value: "320831"
        }, {
            label: "淮安经济技术开发区",
            value: "320871"
        } ], [ {
            label: "亭湖区",
            value: "320902"
        }, {
            label: "盐都区",
            value: "320903"
        }, {
            label: "大丰区",
            value: "320904"
        }, {
            label: "响水县",
            value: "320921"
        }, {
            label: "滨海县",
            value: "320922"
        }, {
            label: "阜宁县",
            value: "320923"
        }, {
            label: "射阳县",
            value: "320924"
        }, {
            label: "建湖县",
            value: "320925"
        }, {
            label: "盐城经济技术开发区",
            value: "320971"
        }, {
            label: "东台市",
            value: "320981"
        } ], [ {
            label: "广陵区",
            value: "321002"
        }, {
            label: "邗江区",
            value: "321003"
        }, {
            label: "江都区",
            value: "321012"
        }, {
            label: "宝应县",
            value: "321023"
        }, {
            label: "扬州经济技术开发区",
            value: "321071"
        }, {
            label: "仪征市",
            value: "321081"
        }, {
            label: "高邮市",
            value: "321084"
        } ], [ {
            label: "京口区",
            value: "321102"
        }, {
            label: "润州区",
            value: "321111"
        }, {
            label: "丹徒区",
            value: "321112"
        }, {
            label: "镇江新区",
            value: "321171"
        }, {
            label: "丹阳市",
            value: "321181"
        }, {
            label: "扬中市",
            value: "321182"
        }, {
            label: "句容市",
            value: "321183"
        } ], [ {
            label: "海陵区",
            value: "321202"
        }, {
            label: "高港区",
            value: "321203"
        }, {
            label: "姜堰区",
            value: "321204"
        }, {
            label: "泰州医药高新技术产业开发区",
            value: "321271"
        }, {
            label: "兴化市",
            value: "321281"
        }, {
            label: "靖江市",
            value: "321282"
        }, {
            label: "泰兴市",
            value: "321283"
        } ], [ {
            label: "宿城区",
            value: "321302"
        }, {
            label: "宿豫区",
            value: "321311"
        }, {
            label: "沭阳县",
            value: "321322"
        }, {
            label: "泗阳县",
            value: "321323"
        }, {
            label: "泗洪县",
            value: "321324"
        }, {
            label: "宿迁经济技术开发区",
            value: "321371"
        } ] ], [ [ {
            label: "上城区",
            value: "330102"
        }, {
            label: "下城区",
            value: "330103"
        }, {
            label: "江干区",
            value: "330104"
        }, {
            label: "拱墅区",
            value: "330105"
        }, {
            label: "西湖区",
            value: "330106"
        }, {
            label: "滨江区",
            value: "330108"
        }, {
            label: "萧山区",
            value: "330109"
        }, {
            label: "余杭区",
            value: "330110"
        }, {
            label: "富阳区",
            value: "330111"
        }, {
            label: "临安区",
            value: "330112"
        }, {
            label: "桐庐县",
            value: "330122"
        }, {
            label: "淳安县",
            value: "330127"
        }, {
            label: "建德市",
            value: "330182"
        } ], [ {
            label: "海曙区",
            value: "330203"
        }, {
            label: "江北区",
            value: "330205"
        }, {
            label: "北仑区",
            value: "330206"
        }, {
            label: "镇海区",
            value: "330211"
        }, {
            label: "鄞州区",
            value: "330212"
        }, {
            label: "奉化区",
            value: "330213"
        }, {
            label: "象山县",
            value: "330225"
        }, {
            label: "宁海县",
            value: "330226"
        }, {
            label: "余姚市",
            value: "330281"
        }, {
            label: "慈溪市",
            value: "330282"
        } ], [ {
            label: "鹿城区",
            value: "330302"
        }, {
            label: "龙湾区",
            value: "330303"
        }, {
            label: "瓯海区",
            value: "330304"
        }, {
            label: "洞头区",
            value: "330305"
        }, {
            label: "永嘉县",
            value: "330324"
        }, {
            label: "平阳县",
            value: "330326"
        }, {
            label: "苍南县",
            value: "330327"
        }, {
            label: "文成县",
            value: "330328"
        }, {
            label: "泰顺县",
            value: "330329"
        }, {
            label: "温州经济技术开发区",
            value: "330371"
        }, {
            label: "瑞安市",
            value: "330381"
        }, {
            label: "乐清市",
            value: "330382"
        } ], [ {
            label: "南湖区",
            value: "330402"
        }, {
            label: "秀洲区",
            value: "330411"
        }, {
            label: "嘉善县",
            value: "330421"
        }, {
            label: "海盐县",
            value: "330424"
        }, {
            label: "海宁市",
            value: "330481"
        }, {
            label: "平湖市",
            value: "330482"
        }, {
            label: "桐乡市",
            value: "330483"
        } ], [ {
            label: "吴兴区",
            value: "330502"
        }, {
            label: "南浔区",
            value: "330503"
        }, {
            label: "德清县",
            value: "330521"
        }, {
            label: "长兴县",
            value: "330522"
        }, {
            label: "安吉县",
            value: "330523"
        } ], [ {
            label: "越城区",
            value: "330602"
        }, {
            label: "柯桥区",
            value: "330603"
        }, {
            label: "上虞区",
            value: "330604"
        }, {
            label: "新昌县",
            value: "330624"
        }, {
            label: "诸暨市",
            value: "330681"
        }, {
            label: "嵊州市",
            value: "330683"
        } ], [ {
            label: "婺城区",
            value: "330702"
        }, {
            label: "金东区",
            value: "330703"
        }, {
            label: "武义县",
            value: "330723"
        }, {
            label: "浦江县",
            value: "330726"
        }, {
            label: "磐安县",
            value: "330727"
        }, {
            label: "兰溪市",
            value: "330781"
        }, {
            label: "义乌市",
            value: "330782"
        }, {
            label: "东阳市",
            value: "330783"
        }, {
            label: "永康市",
            value: "330784"
        } ], [ {
            label: "柯城区",
            value: "330802"
        }, {
            label: "衢江区",
            value: "330803"
        }, {
            label: "常山县",
            value: "330822"
        }, {
            label: "开化县",
            value: "330824"
        }, {
            label: "龙游县",
            value: "330825"
        }, {
            label: "江山市",
            value: "330881"
        } ], [ {
            label: "定海区",
            value: "330902"
        }, {
            label: "普陀区",
            value: "330903"
        }, {
            label: "岱山县",
            value: "330921"
        }, {
            label: "嵊泗县",
            value: "330922"
        } ], [ {
            label: "椒江区",
            value: "331002"
        }, {
            label: "黄岩区",
            value: "331003"
        }, {
            label: "路桥区",
            value: "331004"
        }, {
            label: "三门县",
            value: "331022"
        }, {
            label: "天台县",
            value: "331023"
        }, {
            label: "仙居县",
            value: "331024"
        }, {
            label: "温岭市",
            value: "331081"
        }, {
            label: "临海市",
            value: "331082"
        }, {
            label: "玉环市",
            value: "331083"
        } ], [ {
            label: "莲都区",
            value: "331102"
        }, {
            label: "青田县",
            value: "331121"
        }, {
            label: "缙云县",
            value: "331122"
        }, {
            label: "遂昌县",
            value: "331123"
        }, {
            label: "松阳县",
            value: "331124"
        }, {
            label: "云和县",
            value: "331125"
        }, {
            label: "庆元县",
            value: "331126"
        }, {
            label: "景宁畲族自治县",
            value: "331127"
        }, {
            label: "龙泉市",
            value: "331181"
        } ] ], [ [ {
            label: "瑶海区",
            value: "340102"
        }, {
            label: "庐阳区",
            value: "340103"
        }, {
            label: "蜀山区",
            value: "340104"
        }, {
            label: "包河区",
            value: "340111"
        }, {
            label: "长丰县",
            value: "340121"
        }, {
            label: "肥东县",
            value: "340122"
        }, {
            label: "肥西县",
            value: "340123"
        }, {
            label: "庐江县",
            value: "340124"
        }, {
            label: "合肥高新技术产业开发区",
            value: "340171"
        }, {
            label: "合肥经济技术开发区",
            value: "340172"
        }, {
            label: "合肥新站高新技术产业开发区",
            value: "340173"
        }, {
            label: "巢湖市",
            value: "340181"
        } ], [ {
            label: "镜湖区",
            value: "340202"
        }, {
            label: "弋江区",
            value: "340203"
        }, {
            label: "鸠江区",
            value: "340207"
        }, {
            label: "三山区",
            value: "340208"
        }, {
            label: "芜湖县",
            value: "340221"
        }, {
            label: "繁昌县",
            value: "340222"
        }, {
            label: "南陵县",
            value: "340223"
        }, {
            label: "无为县",
            value: "340225"
        }, {
            label: "芜湖经济技术开发区",
            value: "340271"
        }, {
            label: "安徽芜湖长江大桥经济开发区",
            value: "340272"
        } ], [ {
            label: "龙子湖区",
            value: "340302"
        }, {
            label: "蚌山区",
            value: "340303"
        }, {
            label: "禹会区",
            value: "340304"
        }, {
            label: "淮上区",
            value: "340311"
        }, {
            label: "怀远县",
            value: "340321"
        }, {
            label: "五河县",
            value: "340322"
        }, {
            label: "固镇县",
            value: "340323"
        }, {
            label: "蚌埠市高新技术开发区",
            value: "340371"
        }, {
            label: "蚌埠市经济开发区",
            value: "340372"
        } ], [ {
            label: "大通区",
            value: "340402"
        }, {
            label: "田家庵区",
            value: "340403"
        }, {
            label: "谢家集区",
            value: "340404"
        }, {
            label: "八公山区",
            value: "340405"
        }, {
            label: "潘集区",
            value: "340406"
        }, {
            label: "凤台县",
            value: "340421"
        }, {
            label: "寿县",
            value: "340422"
        } ], [ {
            label: "花山区",
            value: "340503"
        }, {
            label: "雨山区",
            value: "340504"
        }, {
            label: "博望区",
            value: "340506"
        }, {
            label: "当涂县",
            value: "340521"
        }, {
            label: "含山县",
            value: "340522"
        }, {
            label: "和县",
            value: "340523"
        } ], [ {
            label: "杜集区",
            value: "340602"
        }, {
            label: "相山区",
            value: "340603"
        }, {
            label: "烈山区",
            value: "340604"
        }, {
            label: "濉溪县",
            value: "340621"
        } ], [ {
            label: "铜官区",
            value: "340705"
        }, {
            label: "义安区",
            value: "340706"
        }, {
            label: "郊区",
            value: "340711"
        }, {
            label: "枞阳县",
            value: "340722"
        } ], [ {
            label: "迎江区",
            value: "340802"
        }, {
            label: "大观区",
            value: "340803"
        }, {
            label: "宜秀区",
            value: "340811"
        }, {
            label: "怀宁县",
            value: "340822"
        }, {
            label: "潜山县",
            value: "340824"
        }, {
            label: "太湖县",
            value: "340825"
        }, {
            label: "宿松县",
            value: "340826"
        }, {
            label: "望江县",
            value: "340827"
        }, {
            label: "岳西县",
            value: "340828"
        }, {
            label: "安徽安庆经济开发区",
            value: "340871"
        }, {
            label: "桐城市",
            value: "340881"
        } ], [ {
            label: "屯溪区",
            value: "341002"
        }, {
            label: "黄山区",
            value: "341003"
        }, {
            label: "徽州区",
            value: "341004"
        }, {
            label: "歙县",
            value: "341021"
        }, {
            label: "休宁县",
            value: "341022"
        }, {
            label: "黟县",
            value: "341023"
        }, {
            label: "祁门县",
            value: "341024"
        } ], [ {
            label: "琅琊区",
            value: "341102"
        }, {
            label: "南谯区",
            value: "341103"
        }, {
            label: "来安县",
            value: "341122"
        }, {
            label: "全椒县",
            value: "341124"
        }, {
            label: "定远县",
            value: "341125"
        }, {
            label: "凤阳县",
            value: "341126"
        }, {
            label: "苏滁现代产业园",
            value: "341171"
        }, {
            label: "滁州经济技术开发区",
            value: "341172"
        }, {
            label: "天长市",
            value: "341181"
        }, {
            label: "明光市",
            value: "341182"
        } ], [ {
            label: "颍州区",
            value: "341202"
        }, {
            label: "颍东区",
            value: "341203"
        }, {
            label: "颍泉区",
            value: "341204"
        }, {
            label: "临泉县",
            value: "341221"
        }, {
            label: "太和县",
            value: "341222"
        }, {
            label: "阜南县",
            value: "341225"
        }, {
            label: "颍上县",
            value: "341226"
        }, {
            label: "阜阳合肥现代产业园区",
            value: "341271"
        }, {
            label: "阜阳经济技术开发区",
            value: "341272"
        }, {
            label: "界首市",
            value: "341282"
        } ], [ {
            label: "埇桥区",
            value: "341302"
        }, {
            label: "砀山县",
            value: "341321"
        }, {
            label: "萧县",
            value: "341322"
        }, {
            label: "灵璧县",
            value: "341323"
        }, {
            label: "泗县",
            value: "341324"
        }, {
            label: "宿州马鞍山现代产业园区",
            value: "341371"
        }, {
            label: "宿州经济技术开发区",
            value: "341372"
        } ], [ {
            label: "金安区",
            value: "341502"
        }, {
            label: "裕安区",
            value: "341503"
        }, {
            label: "叶集区",
            value: "341504"
        }, {
            label: "霍邱县",
            value: "341522"
        }, {
            label: "舒城县",
            value: "341523"
        }, {
            label: "金寨县",
            value: "341524"
        }, {
            label: "霍山县",
            value: "341525"
        } ], [ {
            label: "谯城区",
            value: "341602"
        }, {
            label: "涡阳县",
            value: "341621"
        }, {
            label: "蒙城县",
            value: "341622"
        }, {
            label: "利辛县",
            value: "341623"
        } ], [ {
            label: "贵池区",
            value: "341702"
        }, {
            label: "东至县",
            value: "341721"
        }, {
            label: "石台县",
            value: "341722"
        }, {
            label: "青阳县",
            value: "341723"
        } ], [ {
            label: "宣州区",
            value: "341802"
        }, {
            label: "郎溪县",
            value: "341821"
        }, {
            label: "广德县",
            value: "341822"
        }, {
            label: "泾县",
            value: "341823"
        }, {
            label: "绩溪县",
            value: "341824"
        }, {
            label: "旌德县",
            value: "341825"
        }, {
            label: "宣城市经济开发区",
            value: "341871"
        }, {
            label: "宁国市",
            value: "341881"
        } ] ], [ [ {
            label: "鼓楼区",
            value: "350102"
        }, {
            label: "台江区",
            value: "350103"
        }, {
            label: "仓山区",
            value: "350104"
        }, {
            label: "马尾区",
            value: "350105"
        }, {
            label: "晋安区",
            value: "350111"
        }, {
            label: "闽侯县",
            value: "350121"
        }, {
            label: "连江县",
            value: "350122"
        }, {
            label: "罗源县",
            value: "350123"
        }, {
            label: "闽清县",
            value: "350124"
        }, {
            label: "永泰县",
            value: "350125"
        }, {
            label: "平潭县",
            value: "350128"
        }, {
            label: "福清市",
            value: "350181"
        }, {
            label: "长乐市",
            value: "350182"
        } ], [ {
            label: "思明区",
            value: "350203"
        }, {
            label: "海沧区",
            value: "350205"
        }, {
            label: "湖里区",
            value: "350206"
        }, {
            label: "集美区",
            value: "350211"
        }, {
            label: "同安区",
            value: "350212"
        }, {
            label: "翔安区",
            value: "350213"
        } ], [ {
            label: "城厢区",
            value: "350302"
        }, {
            label: "涵江区",
            value: "350303"
        }, {
            label: "荔城区",
            value: "350304"
        }, {
            label: "秀屿区",
            value: "350305"
        }, {
            label: "仙游县",
            value: "350322"
        } ], [ {
            label: "梅列区",
            value: "350402"
        }, {
            label: "三元区",
            value: "350403"
        }, {
            label: "明溪县",
            value: "350421"
        }, {
            label: "清流县",
            value: "350423"
        }, {
            label: "宁化县",
            value: "350424"
        }, {
            label: "大田县",
            value: "350425"
        }, {
            label: "尤溪县",
            value: "350426"
        }, {
            label: "沙县",
            value: "350427"
        }, {
            label: "将乐县",
            value: "350428"
        }, {
            label: "泰宁县",
            value: "350429"
        }, {
            label: "建宁县",
            value: "350430"
        }, {
            label: "永安市",
            value: "350481"
        } ], [ {
            label: "鲤城区",
            value: "350502"
        }, {
            label: "丰泽区",
            value: "350503"
        }, {
            label: "洛江区",
            value: "350504"
        }, {
            label: "泉港区",
            value: "350505"
        }, {
            label: "惠安县",
            value: "350521"
        }, {
            label: "安溪县",
            value: "350524"
        }, {
            label: "永春县",
            value: "350525"
        }, {
            label: "德化县",
            value: "350526"
        }, {
            label: "金门县",
            value: "350527"
        }, {
            label: "石狮市",
            value: "350581"
        }, {
            label: "晋江市",
            value: "350582"
        }, {
            label: "南安市",
            value: "350583"
        } ], [ {
            label: "芗城区",
            value: "350602"
        }, {
            label: "龙文区",
            value: "350603"
        }, {
            label: "云霄县",
            value: "350622"
        }, {
            label: "漳浦县",
            value: "350623"
        }, {
            label: "诏安县",
            value: "350624"
        }, {
            label: "长泰县",
            value: "350625"
        }, {
            label: "东山县",
            value: "350626"
        }, {
            label: "南靖县",
            value: "350627"
        }, {
            label: "平和县",
            value: "350628"
        }, {
            label: "华安县",
            value: "350629"
        }, {
            label: "龙海市",
            value: "350681"
        } ], [ {
            label: "延平区",
            value: "350702"
        }, {
            label: "建阳区",
            value: "350703"
        }, {
            label: "顺昌县",
            value: "350721"
        }, {
            label: "浦城县",
            value: "350722"
        }, {
            label: "光泽县",
            value: "350723"
        }, {
            label: "松溪县",
            value: "350724"
        }, {
            label: "政和县",
            value: "350725"
        }, {
            label: "邵武市",
            value: "350781"
        }, {
            label: "武夷山市",
            value: "350782"
        }, {
            label: "建瓯市",
            value: "350783"
        } ], [ {
            label: "新罗区",
            value: "350802"
        }, {
            label: "永定区",
            value: "350803"
        }, {
            label: "长汀县",
            value: "350821"
        }, {
            label: "上杭县",
            value: "350823"
        }, {
            label: "武平县",
            value: "350824"
        }, {
            label: "连城县",
            value: "350825"
        }, {
            label: "漳平市",
            value: "350881"
        } ], [ {
            label: "蕉城区",
            value: "350902"
        }, {
            label: "霞浦县",
            value: "350921"
        }, {
            label: "古田县",
            value: "350922"
        }, {
            label: "屏南县",
            value: "350923"
        }, {
            label: "寿宁县",
            value: "350924"
        }, {
            label: "周宁县",
            value: "350925"
        }, {
            label: "柘荣县",
            value: "350926"
        }, {
            label: "福安市",
            value: "350981"
        }, {
            label: "福鼎市",
            value: "350982"
        } ] ], [ [ {
            label: "东湖区",
            value: "360102"
        }, {
            label: "西湖区",
            value: "360103"
        }, {
            label: "青云谱区",
            value: "360104"
        }, {
            label: "湾里区",
            value: "360105"
        }, {
            label: "青山湖区",
            value: "360111"
        }, {
            label: "新建区",
            value: "360112"
        }, {
            label: "南昌县",
            value: "360121"
        }, {
            label: "安义县",
            value: "360123"
        }, {
            label: "进贤县",
            value: "360124"
        } ], [ {
            label: "昌江区",
            value: "360202"
        }, {
            label: "珠山区",
            value: "360203"
        }, {
            label: "浮梁县",
            value: "360222"
        }, {
            label: "乐平市",
            value: "360281"
        } ], [ {
            label: "安源区",
            value: "360302"
        }, {
            label: "湘东区",
            value: "360313"
        }, {
            label: "莲花县",
            value: "360321"
        }, {
            label: "上栗县",
            value: "360322"
        }, {
            label: "芦溪县",
            value: "360323"
        } ], [ {
            label: "濂溪区",
            value: "360402"
        }, {
            label: "浔阳区",
            value: "360403"
        }, {
            label: "柴桑区",
            value: "360404"
        }, {
            label: "武宁县",
            value: "360423"
        }, {
            label: "修水县",
            value: "360424"
        }, {
            label: "永修县",
            value: "360425"
        }, {
            label: "德安县",
            value: "360426"
        }, {
            label: "都昌县",
            value: "360428"
        }, {
            label: "湖口县",
            value: "360429"
        }, {
            label: "彭泽县",
            value: "360430"
        }, {
            label: "瑞昌市",
            value: "360481"
        }, {
            label: "共青城市",
            value: "360482"
        }, {
            label: "庐山市",
            value: "360483"
        } ], [ {
            label: "渝水区",
            value: "360502"
        }, {
            label: "分宜县",
            value: "360521"
        } ], [ {
            label: "月湖区",
            value: "360602"
        }, {
            label: "余江县",
            value: "360622"
        }, {
            label: "贵溪市",
            value: "360681"
        } ], [ {
            label: "章贡区",
            value: "360702"
        }, {
            label: "南康区",
            value: "360703"
        }, {
            label: "赣县区",
            value: "360704"
        }, {
            label: "信丰县",
            value: "360722"
        }, {
            label: "大余县",
            value: "360723"
        }, {
            label: "上犹县",
            value: "360724"
        }, {
            label: "崇义县",
            value: "360725"
        }, {
            label: "安远县",
            value: "360726"
        }, {
            label: "龙南县",
            value: "360727"
        }, {
            label: "定南县",
            value: "360728"
        }, {
            label: "全南县",
            value: "360729"
        }, {
            label: "宁都县",
            value: "360730"
        }, {
            label: "于都县",
            value: "360731"
        }, {
            label: "兴国县",
            value: "360732"
        }, {
            label: "会昌县",
            value: "360733"
        }, {
            label: "寻乌县",
            value: "360734"
        }, {
            label: "石城县",
            value: "360735"
        }, {
            label: "瑞金市",
            value: "360781"
        } ], [ {
            label: "吉州区",
            value: "360802"
        }, {
            label: "青原区",
            value: "360803"
        }, {
            label: "吉安县",
            value: "360821"
        }, {
            label: "吉水县",
            value: "360822"
        }, {
            label: "峡江县",
            value: "360823"
        }, {
            label: "新干县",
            value: "360824"
        }, {
            label: "永丰县",
            value: "360825"
        }, {
            label: "泰和县",
            value: "360826"
        }, {
            label: "遂川县",
            value: "360827"
        }, {
            label: "万安县",
            value: "360828"
        }, {
            label: "安福县",
            value: "360829"
        }, {
            label: "永新县",
            value: "360830"
        }, {
            label: "井冈山市",
            value: "360881"
        } ], [ {
            label: "袁州区",
            value: "360902"
        }, {
            label: "奉新县",
            value: "360921"
        }, {
            label: "万载县",
            value: "360922"
        }, {
            label: "上高县",
            value: "360923"
        }, {
            label: "宜丰县",
            value: "360924"
        }, {
            label: "靖安县",
            value: "360925"
        }, {
            label: "铜鼓县",
            value: "360926"
        }, {
            label: "丰城市",
            value: "360981"
        }, {
            label: "樟树市",
            value: "360982"
        }, {
            label: "高安市",
            value: "360983"
        } ], [ {
            label: "临川区",
            value: "361002"
        }, {
            label: "东乡区",
            value: "361003"
        }, {
            label: "南城县",
            value: "361021"
        }, {
            label: "黎川县",
            value: "361022"
        }, {
            label: "南丰县",
            value: "361023"
        }, {
            label: "崇仁县",
            value: "361024"
        }, {
            label: "乐安县",
            value: "361025"
        }, {
            label: "宜黄县",
            value: "361026"
        }, {
            label: "金溪县",
            value: "361027"
        }, {
            label: "资溪县",
            value: "361028"
        }, {
            label: "广昌县",
            value: "361030"
        } ], [ {
            label: "信州区",
            value: "361102"
        }, {
            label: "广丰区",
            value: "361103"
        }, {
            label: "上饶县",
            value: "361121"
        }, {
            label: "玉山县",
            value: "361123"
        }, {
            label: "铅山县",
            value: "361124"
        }, {
            label: "横峰县",
            value: "361125"
        }, {
            label: "弋阳县",
            value: "361126"
        }, {
            label: "余干县",
            value: "361127"
        }, {
            label: "鄱阳县",
            value: "361128"
        }, {
            label: "万年县",
            value: "361129"
        }, {
            label: "婺源县",
            value: "361130"
        }, {
            label: "德兴市",
            value: "361181"
        } ] ], [ [ {
            label: "历下区",
            value: "370102"
        }, {
            label: "市中区",
            value: "370103"
        }, {
            label: "槐荫区",
            value: "370104"
        }, {
            label: "天桥区",
            value: "370105"
        }, {
            label: "历城区",
            value: "370112"
        }, {
            label: "长清区",
            value: "370113"
        }, {
            label: "章丘区",
            value: "370114"
        }, {
            label: "平阴县",
            value: "370124"
        }, {
            label: "济阳县",
            value: "370125"
        }, {
            label: "商河县",
            value: "370126"
        }, {
            label: "济南高新技术产业开发区",
            value: "370171"
        } ], [ {
            label: "市南区",
            value: "370202"
        }, {
            label: "市北区",
            value: "370203"
        }, {
            label: "黄岛区",
            value: "370211"
        }, {
            label: "崂山区",
            value: "370212"
        }, {
            label: "李沧区",
            value: "370213"
        }, {
            label: "城阳区",
            value: "370214"
        }, {
            label: "即墨区",
            value: "370215"
        }, {
            label: "青岛高新技术产业开发区",
            value: "370271"
        }, {
            label: "胶州市",
            value: "370281"
        }, {
            label: "平度市",
            value: "370283"
        }, {
            label: "莱西市",
            value: "370285"
        } ], [ {
            label: "淄川区",
            value: "370302"
        }, {
            label: "张店区",
            value: "370303"
        }, {
            label: "博山区",
            value: "370304"
        }, {
            label: "临淄区",
            value: "370305"
        }, {
            label: "周村区",
            value: "370306"
        }, {
            label: "桓台县",
            value: "370321"
        }, {
            label: "高青县",
            value: "370322"
        }, {
            label: "沂源县",
            value: "370323"
        } ], [ {
            label: "市中区",
            value: "370402"
        }, {
            label: "薛城区",
            value: "370403"
        }, {
            label: "峄城区",
            value: "370404"
        }, {
            label: "台儿庄区",
            value: "370405"
        }, {
            label: "山亭区",
            value: "370406"
        }, {
            label: "滕州市",
            value: "370481"
        } ], [ {
            label: "东营区",
            value: "370502"
        }, {
            label: "河口区",
            value: "370503"
        }, {
            label: "垦利区",
            value: "370505"
        }, {
            label: "利津县",
            value: "370522"
        }, {
            label: "广饶县",
            value: "370523"
        }, {
            label: "东营经济技术开发区",
            value: "370571"
        }, {
            label: "东营港经济开发区",
            value: "370572"
        } ], [ {
            label: "芝罘区",
            value: "370602"
        }, {
            label: "福山区",
            value: "370611"
        }, {
            label: "牟平区",
            value: "370612"
        }, {
            label: "莱山区",
            value: "370613"
        }, {
            label: "长岛县",
            value: "370634"
        }, {
            label: "烟台高新技术产业开发区",
            value: "370671"
        }, {
            label: "烟台经济技术开发区",
            value: "370672"
        }, {
            label: "龙口市",
            value: "370681"
        }, {
            label: "莱阳市",
            value: "370682"
        }, {
            label: "莱州市",
            value: "370683"
        }, {
            label: "蓬莱市",
            value: "370684"
        }, {
            label: "招远市",
            value: "370685"
        }, {
            label: "栖霞市",
            value: "370686"
        }, {
            label: "海阳市",
            value: "370687"
        } ], [ {
            label: "潍城区",
            value: "370702"
        }, {
            label: "寒亭区",
            value: "370703"
        }, {
            label: "坊子区",
            value: "370704"
        }, {
            label: "奎文区",
            value: "370705"
        }, {
            label: "临朐县",
            value: "370724"
        }, {
            label: "昌乐县",
            value: "370725"
        }, {
            label: "潍坊滨海经济技术开发区",
            value: "370772"
        }, {
            label: "青州市",
            value: "370781"
        }, {
            label: "诸城市",
            value: "370782"
        }, {
            label: "寿光市",
            value: "370783"
        }, {
            label: "安丘市",
            value: "370784"
        }, {
            label: "高密市",
            value: "370785"
        }, {
            label: "昌邑市",
            value: "370786"
        } ], [ {
            label: "任城区",
            value: "370811"
        }, {
            label: "兖州区",
            value: "370812"
        }, {
            label: "微山县",
            value: "370826"
        }, {
            label: "鱼台县",
            value: "370827"
        }, {
            label: "金乡县",
            value: "370828"
        }, {
            label: "嘉祥县",
            value: "370829"
        }, {
            label: "汶上县",
            value: "370830"
        }, {
            label: "泗水县",
            value: "370831"
        }, {
            label: "梁山县",
            value: "370832"
        }, {
            label: "济宁高新技术产业开发区",
            value: "370871"
        }, {
            label: "曲阜市",
            value: "370881"
        }, {
            label: "邹城市",
            value: "370883"
        } ], [ {
            label: "泰山区",
            value: "370902"
        }, {
            label: "岱岳区",
            value: "370911"
        }, {
            label: "宁阳县",
            value: "370921"
        }, {
            label: "东平县",
            value: "370923"
        }, {
            label: "新泰市",
            value: "370982"
        }, {
            label: "肥城市",
            value: "370983"
        } ], [ {
            label: "环翠区",
            value: "371002"
        }, {
            label: "文登区",
            value: "371003"
        }, {
            label: "威海火炬高技术产业开发区",
            value: "371071"
        }, {
            label: "威海经济技术开发区",
            value: "371072"
        }, {
            label: "威海临港经济技术开发区",
            value: "371073"
        }, {
            label: "荣成市",
            value: "371082"
        }, {
            label: "乳山市",
            value: "371083"
        } ], [ {
            label: "东港区",
            value: "371102"
        }, {
            label: "岚山区",
            value: "371103"
        }, {
            label: "五莲县",
            value: "371121"
        }, {
            label: "莒县",
            value: "371122"
        }, {
            label: "日照经济技术开发区",
            value: "371171"
        }, {
            label: "日照国际海洋城",
            value: "371172"
        } ], [ {
            label: "莱城区",
            value: "371202"
        }, {
            label: "钢城区",
            value: "371203"
        } ], [ {
            label: "兰山区",
            value: "371302"
        }, {
            label: "罗庄区",
            value: "371311"
        }, {
            label: "河东区",
            value: "371312"
        }, {
            label: "沂南县",
            value: "371321"
        }, {
            label: "郯城县",
            value: "371322"
        }, {
            label: "沂水县",
            value: "371323"
        }, {
            label: "兰陵县",
            value: "371324"
        }, {
            label: "费县",
            value: "371325"
        }, {
            label: "平邑县",
            value: "371326"
        }, {
            label: "莒南县",
            value: "371327"
        }, {
            label: "蒙阴县",
            value: "371328"
        }, {
            label: "临沭县",
            value: "371329"
        }, {
            label: "临沂高新技术产业开发区",
            value: "371371"
        }, {
            label: "临沂经济技术开发区",
            value: "371372"
        }, {
            label: "临沂临港经济开发区",
            value: "371373"
        } ], [ {
            label: "德城区",
            value: "371402"
        }, {
            label: "陵城区",
            value: "371403"
        }, {
            label: "宁津县",
            value: "371422"
        }, {
            label: "庆云县",
            value: "371423"
        }, {
            label: "临邑县",
            value: "371424"
        }, {
            label: "齐河县",
            value: "371425"
        }, {
            label: "平原县",
            value: "371426"
        }, {
            label: "夏津县",
            value: "371427"
        }, {
            label: "武城县",
            value: "371428"
        }, {
            label: "德州经济技术开发区",
            value: "371471"
        }, {
            label: "德州运河经济开发区",
            value: "371472"
        }, {
            label: "乐陵市",
            value: "371481"
        }, {
            label: "禹城市",
            value: "371482"
        } ], [ {
            label: "东昌府区",
            value: "371502"
        }, {
            label: "阳谷县",
            value: "371521"
        }, {
            label: "莘县",
            value: "371522"
        }, {
            label: "茌平县",
            value: "371523"
        }, {
            label: "东阿县",
            value: "371524"
        }, {
            label: "冠县",
            value: "371525"
        }, {
            label: "高唐县",
            value: "371526"
        }, {
            label: "临清市",
            value: "371581"
        } ], [ {
            label: "滨城区",
            value: "371602"
        }, {
            label: "沾化区",
            value: "371603"
        }, {
            label: "惠民县",
            value: "371621"
        }, {
            label: "阳信县",
            value: "371622"
        }, {
            label: "无棣县",
            value: "371623"
        }, {
            label: "博兴县",
            value: "371625"
        }, {
            label: "邹平县",
            value: "371626"
        } ], [ {
            label: "牡丹区",
            value: "371702"
        }, {
            label: "定陶区",
            value: "371703"
        }, {
            label: "曹县",
            value: "371721"
        }, {
            label: "单县",
            value: "371722"
        }, {
            label: "成武县",
            value: "371723"
        }, {
            label: "巨野县",
            value: "371724"
        }, {
            label: "郓城县",
            value: "371725"
        }, {
            label: "鄄城县",
            value: "371726"
        }, {
            label: "东明县",
            value: "371728"
        }, {
            label: "菏泽经济技术开发区",
            value: "371771"
        }, {
            label: "菏泽高新技术开发区",
            value: "371772"
        } ] ], [ [ {
            label: "中原区",
            value: "410102"
        }, {
            label: "二七区",
            value: "410103"
        }, {
            label: "管城回族区",
            value: "410104"
        }, {
            label: "金水区",
            value: "410105"
        }, {
            label: "上街区",
            value: "410106"
        }, {
            label: "惠济区",
            value: "410108"
        }, {
            label: "中牟县",
            value: "410122"
        }, {
            label: "郑州经济技术开发区",
            value: "410171"
        }, {
            label: "郑州高新技术产业开发区",
            value: "410172"
        }, {
            label: "郑州航空港经济综合实验区",
            value: "410173"
        }, {
            label: "巩义市",
            value: "410181"
        }, {
            label: "荥阳市",
            value: "410182"
        }, {
            label: "新密市",
            value: "410183"
        }, {
            label: "新郑市",
            value: "410184"
        }, {
            label: "登封市",
            value: "410185"
        } ], [ {
            label: "龙亭区",
            value: "410202"
        }, {
            label: "顺河回族区",
            value: "410203"
        }, {
            label: "鼓楼区",
            value: "410204"
        }, {
            label: "禹王台区",
            value: "410205"
        }, {
            label: "祥符区",
            value: "410212"
        }, {
            label: "杞县",
            value: "410221"
        }, {
            label: "通许县",
            value: "410222"
        }, {
            label: "尉氏县",
            value: "410223"
        }, {
            label: "兰考县",
            value: "410225"
        } ], [ {
            label: "老城区",
            value: "410302"
        }, {
            label: "西工区",
            value: "410303"
        }, {
            label: "瀍河回族区",
            value: "410304"
        }, {
            label: "涧西区",
            value: "410305"
        }, {
            label: "吉利区",
            value: "410306"
        }, {
            label: "洛龙区",
            value: "410311"
        }, {
            label: "孟津县",
            value: "410322"
        }, {
            label: "新安县",
            value: "410323"
        }, {
            label: "栾川县",
            value: "410324"
        }, {
            label: "嵩县",
            value: "410325"
        }, {
            label: "汝阳县",
            value: "410326"
        }, {
            label: "宜阳县",
            value: "410327"
        }, {
            label: "洛宁县",
            value: "410328"
        }, {
            label: "伊川县",
            value: "410329"
        }, {
            label: "洛阳高新技术产业开发区",
            value: "410371"
        }, {
            label: "偃师市",
            value: "410381"
        } ], [ {
            label: "新华区",
            value: "410402"
        }, {
            label: "卫东区",
            value: "410403"
        }, {
            label: "石龙区",
            value: "410404"
        }, {
            label: "湛河区",
            value: "410411"
        }, {
            label: "宝丰县",
            value: "410421"
        }, {
            label: "叶县",
            value: "410422"
        }, {
            label: "鲁山县",
            value: "410423"
        }, {
            label: "郏县",
            value: "410425"
        }, {
            label: "平顶山高新技术产业开发区",
            value: "410471"
        }, {
            label: "平顶山市新城区",
            value: "410472"
        }, {
            label: "舞钢市",
            value: "410481"
        }, {
            label: "汝州市",
            value: "410482"
        } ], [ {
            label: "文峰区",
            value: "410502"
        }, {
            label: "北关区",
            value: "410503"
        }, {
            label: "殷都区",
            value: "410505"
        }, {
            label: "龙安区",
            value: "410506"
        }, {
            label: "安阳县",
            value: "410522"
        }, {
            label: "汤阴县",
            value: "410523"
        }, {
            label: "滑县",
            value: "410526"
        }, {
            label: "内黄县",
            value: "410527"
        }, {
            label: "安阳高新技术产业开发区",
            value: "410571"
        }, {
            label: "林州市",
            value: "410581"
        } ], [ {
            label: "鹤山区",
            value: "410602"
        }, {
            label: "山城区",
            value: "410603"
        }, {
            label: "淇滨区",
            value: "410611"
        }, {
            label: "浚县",
            value: "410621"
        }, {
            label: "淇县",
            value: "410622"
        }, {
            label: "鹤壁经济技术开发区",
            value: "410671"
        } ], [ {
            label: "红旗区",
            value: "410702"
        }, {
            label: "卫滨区",
            value: "410703"
        }, {
            label: "凤泉区",
            value: "410704"
        }, {
            label: "牧野区",
            value: "410711"
        }, {
            label: "新乡县",
            value: "410721"
        }, {
            label: "获嘉县",
            value: "410724"
        }, {
            label: "原阳县",
            value: "410725"
        }, {
            label: "延津县",
            value: "410726"
        }, {
            label: "封丘县",
            value: "410727"
        }, {
            label: "长垣县",
            value: "410728"
        }, {
            label: "新乡高新技术产业开发区",
            value: "410771"
        }, {
            label: "新乡经济技术开发区",
            value: "410772"
        }, {
            label: "新乡市平原城乡一体化示范区",
            value: "410773"
        }, {
            label: "卫辉市",
            value: "410781"
        }, {
            label: "辉县市",
            value: "410782"
        } ], [ {
            label: "解放区",
            value: "410802"
        }, {
            label: "中站区",
            value: "410803"
        }, {
            label: "马村区",
            value: "410804"
        }, {
            label: "山阳区",
            value: "410811"
        }, {
            label: "修武县",
            value: "410821"
        }, {
            label: "博爱县",
            value: "410822"
        }, {
            label: "武陟县",
            value: "410823"
        }, {
            label: "温县",
            value: "410825"
        }, {
            label: "焦作城乡一体化示范区",
            value: "410871"
        }, {
            label: "沁阳市",
            value: "410882"
        }, {
            label: "孟州市",
            value: "410883"
        } ], [ {
            label: "华龙区",
            value: "410902"
        }, {
            label: "清丰县",
            value: "410922"
        }, {
            label: "南乐县",
            value: "410923"
        }, {
            label: "范县",
            value: "410926"
        }, {
            label: "台前县",
            value: "410927"
        }, {
            label: "濮阳县",
            value: "410928"
        }, {
            label: "河南濮阳工业园区",
            value: "410971"
        }, {
            label: "濮阳经济技术开发区",
            value: "410972"
        } ], [ {
            label: "魏都区",
            value: "411002"
        }, {
            label: "建安区",
            value: "411003"
        }, {
            label: "鄢陵县",
            value: "411024"
        }, {
            label: "襄城县",
            value: "411025"
        }, {
            label: "许昌经济技术开发区",
            value: "411071"
        }, {
            label: "禹州市",
            value: "411081"
        }, {
            label: "长葛市",
            value: "411082"
        } ], [ {
            label: "源汇区",
            value: "411102"
        }, {
            label: "郾城区",
            value: "411103"
        }, {
            label: "召陵区",
            value: "411104"
        }, {
            label: "舞阳县",
            value: "411121"
        }, {
            label: "临颍县",
            value: "411122"
        }, {
            label: "漯河经济技术开发区",
            value: "411171"
        } ], [ {
            label: "湖滨区",
            value: "411202"
        }, {
            label: "陕州区",
            value: "411203"
        }, {
            label: "渑池县",
            value: "411221"
        }, {
            label: "卢氏县",
            value: "411224"
        }, {
            label: "河南三门峡经济开发区",
            value: "411271"
        }, {
            label: "义马市",
            value: "411281"
        }, {
            label: "灵宝市",
            value: "411282"
        } ], [ {
            label: "宛城区",
            value: "411302"
        }, {
            label: "卧龙区",
            value: "411303"
        }, {
            label: "南召县",
            value: "411321"
        }, {
            label: "方城县",
            value: "411322"
        }, {
            label: "西峡县",
            value: "411323"
        }, {
            label: "镇平县",
            value: "411324"
        }, {
            label: "内乡县",
            value: "411325"
        }, {
            label: "淅川县",
            value: "411326"
        }, {
            label: "社旗县",
            value: "411327"
        }, {
            label: "唐河县",
            value: "411328"
        }, {
            label: "新野县",
            value: "411329"
        }, {
            label: "桐柏县",
            value: "411330"
        }, {
            label: "南阳高新技术产业开发区",
            value: "411371"
        }, {
            label: "南阳市城乡一体化示范区",
            value: "411372"
        }, {
            label: "邓州市",
            value: "411381"
        } ], [ {
            label: "梁园区",
            value: "411402"
        }, {
            label: "睢阳区",
            value: "411403"
        }, {
            label: "民权县",
            value: "411421"
        }, {
            label: "睢县",
            value: "411422"
        }, {
            label: "宁陵县",
            value: "411423"
        }, {
            label: "柘城县",
            value: "411424"
        }, {
            label: "虞城县",
            value: "411425"
        }, {
            label: "夏邑县",
            value: "411426"
        }, {
            label: "豫东综合物流产业聚集区",
            value: "411471"
        }, {
            label: "河南商丘经济开发区",
            value: "411472"
        }, {
            label: "永城市",
            value: "411481"
        } ], [ {
            label: "浉河区",
            value: "411502"
        }, {
            label: "平桥区",
            value: "411503"
        }, {
            label: "罗山县",
            value: "411521"
        }, {
            label: "光山县",
            value: "411522"
        }, {
            label: "新县",
            value: "411523"
        }, {
            label: "商城县",
            value: "411524"
        }, {
            label: "固始县",
            value: "411525"
        }, {
            label: "潢川县",
            value: "411526"
        }, {
            label: "淮滨县",
            value: "411527"
        }, {
            label: "息县",
            value: "411528"
        }, {
            label: "信阳高新技术产业开发区",
            value: "411571"
        } ], [ {
            label: "川汇区",
            value: "411602"
        }, {
            label: "扶沟县",
            value: "411621"
        }, {
            label: "西华县",
            value: "411622"
        }, {
            label: "商水县",
            value: "411623"
        }, {
            label: "沈丘县",
            value: "411624"
        }, {
            label: "郸城县",
            value: "411625"
        }, {
            label: "淮阳县",
            value: "411626"
        }, {
            label: "太康县",
            value: "411627"
        }, {
            label: "鹿邑县",
            value: "411628"
        }, {
            label: "河南周口经济开发区",
            value: "411671"
        }, {
            label: "项城市",
            value: "411681"
        } ], [ {
            label: "驿城区",
            value: "411702"
        }, {
            label: "西平县",
            value: "411721"
        }, {
            label: "上蔡县",
            value: "411722"
        }, {
            label: "平舆县",
            value: "411723"
        }, {
            label: "正阳县",
            value: "411724"
        }, {
            label: "确山县",
            value: "411725"
        }, {
            label: "泌阳县",
            value: "411726"
        }, {
            label: "汝南县",
            value: "411727"
        }, {
            label: "遂平县",
            value: "411728"
        }, {
            label: "新蔡县",
            value: "411729"
        }, {
            label: "河南驻马店经济开发区",
            value: "411771"
        } ], [ {
            label: "济源市",
            value: "419001"
        } ] ], [ [ {
            label: "江岸区",
            value: "420102"
        }, {
            label: "江汉区",
            value: "420103"
        }, {
            label: "硚口区",
            value: "420104"
        }, {
            label: "汉阳区",
            value: "420105"
        }, {
            label: "武昌区",
            value: "420106"
        }, {
            label: "青山区",
            value: "420107"
        }, {
            label: "洪山区",
            value: "420111"
        }, {
            label: "东西湖区",
            value: "420112"
        }, {
            label: "汉南区",
            value: "420113"
        }, {
            label: "蔡甸区",
            value: "420114"
        }, {
            label: "江夏区",
            value: "420115"
        }, {
            label: "黄陂区",
            value: "420116"
        }, {
            label: "新洲区",
            value: "420117"
        } ], [ {
            label: "黄石港区",
            value: "420202"
        }, {
            label: "西塞山区",
            value: "420203"
        }, {
            label: "下陆区",
            value: "420204"
        }, {
            label: "铁山区",
            value: "420205"
        }, {
            label: "阳新县",
            value: "420222"
        }, {
            label: "大冶市",
            value: "420281"
        } ], [ {
            label: "茅箭区",
            value: "420302"
        }, {
            label: "张湾区",
            value: "420303"
        }, {
            label: "郧阳区",
            value: "420304"
        }, {
            label: "郧西县",
            value: "420322"
        }, {
            label: "竹山县",
            value: "420323"
        }, {
            label: "竹溪县",
            value: "420324"
        }, {
            label: "房县",
            value: "420325"
        }, {
            label: "丹江口市",
            value: "420381"
        } ], [ {
            label: "西陵区",
            value: "420502"
        }, {
            label: "伍家岗区",
            value: "420503"
        }, {
            label: "点军区",
            value: "420504"
        }, {
            label: "猇亭区",
            value: "420505"
        }, {
            label: "夷陵区",
            value: "420506"
        }, {
            label: "远安县",
            value: "420525"
        }, {
            label: "兴山县",
            value: "420526"
        }, {
            label: "秭归县",
            value: "420527"
        }, {
            label: "长阳土家族自治县",
            value: "420528"
        }, {
            label: "五峰土家族自治县",
            value: "420529"
        }, {
            label: "宜都市",
            value: "420581"
        }, {
            label: "当阳市",
            value: "420582"
        }, {
            label: "枝江市",
            value: "420583"
        } ], [ {
            label: "襄城区",
            value: "420602"
        }, {
            label: "樊城区",
            value: "420606"
        }, {
            label: "襄州区",
            value: "420607"
        }, {
            label: "南漳县",
            value: "420624"
        }, {
            label: "谷城县",
            value: "420625"
        }, {
            label: "保康县",
            value: "420626"
        }, {
            label: "老河口市",
            value: "420682"
        }, {
            label: "枣阳市",
            value: "420683"
        }, {
            label: "宜城市",
            value: "420684"
        } ], [ {
            label: "梁子湖区",
            value: "420702"
        }, {
            label: "华容区",
            value: "420703"
        }, {
            label: "鄂城区",
            value: "420704"
        } ], [ {
            label: "东宝区",
            value: "420802"
        }, {
            label: "掇刀区",
            value: "420804"
        }, {
            label: "京山县",
            value: "420821"
        }, {
            label: "沙洋县",
            value: "420822"
        }, {
            label: "钟祥市",
            value: "420881"
        } ], [ {
            label: "孝南区",
            value: "420902"
        }, {
            label: "孝昌县",
            value: "420921"
        }, {
            label: "大悟县",
            value: "420922"
        }, {
            label: "云梦县",
            value: "420923"
        }, {
            label: "应城市",
            value: "420981"
        }, {
            label: "安陆市",
            value: "420982"
        }, {
            label: "汉川市",
            value: "420984"
        } ], [ {
            label: "沙市区",
            value: "421002"
        }, {
            label: "荆州区",
            value: "421003"
        }, {
            label: "公安县",
            value: "421022"
        }, {
            label: "监利县",
            value: "421023"
        }, {
            label: "江陵县",
            value: "421024"
        }, {
            label: "荆州经济技术开发区",
            value: "421071"
        }, {
            label: "石首市",
            value: "421081"
        }, {
            label: "洪湖市",
            value: "421083"
        }, {
            label: "松滋市",
            value: "421087"
        } ], [ {
            label: "黄州区",
            value: "421102"
        }, {
            label: "团风县",
            value: "421121"
        }, {
            label: "红安县",
            value: "421122"
        }, {
            label: "罗田县",
            value: "421123"
        }, {
            label: "英山县",
            value: "421124"
        }, {
            label: "浠水县",
            value: "421125"
        }, {
            label: "蕲春县",
            value: "421126"
        }, {
            label: "黄梅县",
            value: "421127"
        }, {
            label: "龙感湖管理区",
            value: "421171"
        }, {
            label: "麻城市",
            value: "421181"
        }, {
            label: "武穴市",
            value: "421182"
        } ], [ {
            label: "咸安区",
            value: "421202"
        }, {
            label: "嘉鱼县",
            value: "421221"
        }, {
            label: "通城县",
            value: "421222"
        }, {
            label: "崇阳县",
            value: "421223"
        }, {
            label: "通山县",
            value: "421224"
        }, {
            label: "赤壁市",
            value: "421281"
        } ], [ {
            label: "曾都区",
            value: "421303"
        }, {
            label: "随县",
            value: "421321"
        }, {
            label: "广水市",
            value: "421381"
        } ], [ {
            label: "恩施市",
            value: "422801"
        }, {
            label: "利川市",
            value: "422802"
        }, {
            label: "建始县",
            value: "422822"
        }, {
            label: "巴东县",
            value: "422823"
        }, {
            label: "宣恩县",
            value: "422825"
        }, {
            label: "咸丰县",
            value: "422826"
        }, {
            label: "来凤县",
            value: "422827"
        }, {
            label: "鹤峰县",
            value: "422828"
        } ], [ {
            label: "仙桃市",
            value: "429004"
        }, {
            label: "潜江市",
            value: "429005"
        }, {
            label: "天门市",
            value: "429006"
        }, {
            label: "神农架林区",
            value: "429021"
        } ] ], [ [ {
            label: "芙蓉区",
            value: "430102"
        }, {
            label: "天心区",
            value: "430103"
        }, {
            label: "岳麓区",
            value: "430104"
        }, {
            label: "开福区",
            value: "430105"
        }, {
            label: "雨花区",
            value: "430111"
        }, {
            label: "望城区",
            value: "430112"
        }, {
            label: "长沙县",
            value: "430121"
        }, {
            label: "浏阳市",
            value: "430181"
        }, {
            label: "宁乡市",
            value: "430182"
        } ], [ {
            label: "荷塘区",
            value: "430202"
        }, {
            label: "芦淞区",
            value: "430203"
        }, {
            label: "石峰区",
            value: "430204"
        }, {
            label: "天元区",
            value: "430211"
        }, {
            label: "株洲县",
            value: "430221"
        }, {
            label: "攸县",
            value: "430223"
        }, {
            label: "茶陵县",
            value: "430224"
        }, {
            label: "炎陵县",
            value: "430225"
        }, {
            label: "云龙示范区",
            value: "430271"
        }, {
            label: "醴陵市",
            value: "430281"
        } ], [ {
            label: "雨湖区",
            value: "430302"
        }, {
            label: "岳塘区",
            value: "430304"
        }, {
            label: "湘潭县",
            value: "430321"
        }, {
            label: "湖南湘潭高新技术产业园区",
            value: "430371"
        }, {
            label: "湘潭昭山示范区",
            value: "430372"
        }, {
            label: "湘潭九华示范区",
            value: "430373"
        }, {
            label: "湘乡市",
            value: "430381"
        }, {
            label: "韶山市",
            value: "430382"
        } ], [ {
            label: "珠晖区",
            value: "430405"
        }, {
            label: "雁峰区",
            value: "430406"
        }, {
            label: "石鼓区",
            value: "430407"
        }, {
            label: "蒸湘区",
            value: "430408"
        }, {
            label: "南岳区",
            value: "430412"
        }, {
            label: "衡阳县",
            value: "430421"
        }, {
            label: "衡南县",
            value: "430422"
        }, {
            label: "衡山县",
            value: "430423"
        }, {
            label: "衡东县",
            value: "430424"
        }, {
            label: "祁东县",
            value: "430426"
        }, {
            label: "衡阳综合保税区",
            value: "430471"
        }, {
            label: "湖南衡阳高新技术产业园区",
            value: "430472"
        }, {
            label: "湖南衡阳松木经济开发区",
            value: "430473"
        }, {
            label: "耒阳市",
            value: "430481"
        }, {
            label: "常宁市",
            value: "430482"
        } ], [ {
            label: "双清区",
            value: "430502"
        }, {
            label: "大祥区",
            value: "430503"
        }, {
            label: "北塔区",
            value: "430511"
        }, {
            label: "邵东县",
            value: "430521"
        }, {
            label: "新邵县",
            value: "430522"
        }, {
            label: "邵阳县",
            value: "430523"
        }, {
            label: "隆回县",
            value: "430524"
        }, {
            label: "洞口县",
            value: "430525"
        }, {
            label: "绥宁县",
            value: "430527"
        }, {
            label: "新宁县",
            value: "430528"
        }, {
            label: "城步苗族自治县",
            value: "430529"
        }, {
            label: "武冈市",
            value: "430581"
        } ], [ {
            label: "岳阳楼区",
            value: "430602"
        }, {
            label: "云溪区",
            value: "430603"
        }, {
            label: "君山区",
            value: "430611"
        }, {
            label: "岳阳县",
            value: "430621"
        }, {
            label: "华容县",
            value: "430623"
        }, {
            label: "湘阴县",
            value: "430624"
        }, {
            label: "平江县",
            value: "430626"
        }, {
            label: "岳阳市屈原管理区",
            value: "430671"
        }, {
            label: "汨罗市",
            value: "430681"
        }, {
            label: "临湘市",
            value: "430682"
        } ], [ {
            label: "武陵区",
            value: "430702"
        }, {
            label: "鼎城区",
            value: "430703"
        }, {
            label: "安乡县",
            value: "430721"
        }, {
            label: "汉寿县",
            value: "430722"
        }, {
            label: "澧县",
            value: "430723"
        }, {
            label: "临澧县",
            value: "430724"
        }, {
            label: "桃源县",
            value: "430725"
        }, {
            label: "石门县",
            value: "430726"
        }, {
            label: "常德市西洞庭管理区",
            value: "430771"
        }, {
            label: "津市市",
            value: "430781"
        } ], [ {
            label: "永定区",
            value: "430802"
        }, {
            label: "武陵源区",
            value: "430811"
        }, {
            label: "慈利县",
            value: "430821"
        }, {
            label: "桑植县",
            value: "430822"
        } ], [ {
            label: "资阳区",
            value: "430902"
        }, {
            label: "赫山区",
            value: "430903"
        }, {
            label: "南县",
            value: "430921"
        }, {
            label: "桃江县",
            value: "430922"
        }, {
            label: "安化县",
            value: "430923"
        }, {
            label: "益阳市大通湖管理区",
            value: "430971"
        }, {
            label: "湖南益阳高新技术产业园区",
            value: "430972"
        }, {
            label: "沅江市",
            value: "430981"
        } ], [ {
            label: "北湖区",
            value: "431002"
        }, {
            label: "苏仙区",
            value: "431003"
        }, {
            label: "桂阳县",
            value: "431021"
        }, {
            label: "宜章县",
            value: "431022"
        }, {
            label: "永兴县",
            value: "431023"
        }, {
            label: "嘉禾县",
            value: "431024"
        }, {
            label: "临武县",
            value: "431025"
        }, {
            label: "汝城县",
            value: "431026"
        }, {
            label: "桂东县",
            value: "431027"
        }, {
            label: "安仁县",
            value: "431028"
        }, {
            label: "资兴市",
            value: "431081"
        } ], [ {
            label: "零陵区",
            value: "431102"
        }, {
            label: "冷水滩区",
            value: "431103"
        }, {
            label: "祁阳县",
            value: "431121"
        }, {
            label: "东安县",
            value: "431122"
        }, {
            label: "双牌县",
            value: "431123"
        }, {
            label: "道县",
            value: "431124"
        }, {
            label: "江永县",
            value: "431125"
        }, {
            label: "宁远县",
            value: "431126"
        }, {
            label: "蓝山县",
            value: "431127"
        }, {
            label: "新田县",
            value: "431128"
        }, {
            label: "江华瑶族自治县",
            value: "431129"
        }, {
            label: "永州经济技术开发区",
            value: "431171"
        }, {
            label: "永州市金洞管理区",
            value: "431172"
        }, {
            label: "永州市回龙圩管理区",
            value: "431173"
        } ], [ {
            label: "鹤城区",
            value: "431202"
        }, {
            label: "中方县",
            value: "431221"
        }, {
            label: "沅陵县",
            value: "431222"
        }, {
            label: "辰溪县",
            value: "431223"
        }, {
            label: "溆浦县",
            value: "431224"
        }, {
            label: "会同县",
            value: "431225"
        }, {
            label: "麻阳苗族自治县",
            value: "431226"
        }, {
            label: "新晃侗族自治县",
            value: "431227"
        }, {
            label: "芷江侗族自治县",
            value: "431228"
        }, {
            label: "靖州苗族侗族自治县",
            value: "431229"
        }, {
            label: "通道侗族自治县",
            value: "431230"
        }, {
            label: "怀化市洪江管理区",
            value: "431271"
        }, {
            label: "洪江市",
            value: "431281"
        } ], [ {
            label: "娄星区",
            value: "431302"
        }, {
            label: "双峰县",
            value: "431321"
        }, {
            label: "新化县",
            value: "431322"
        }, {
            label: "冷水江市",
            value: "431381"
        }, {
            label: "涟源市",
            value: "431382"
        } ], [ {
            label: "吉首市",
            value: "433101"
        }, {
            label: "泸溪县",
            value: "433122"
        }, {
            label: "凤凰县",
            value: "433123"
        }, {
            label: "花垣县",
            value: "433124"
        }, {
            label: "保靖县",
            value: "433125"
        }, {
            label: "古丈县",
            value: "433126"
        }, {
            label: "永顺县",
            value: "433127"
        }, {
            label: "龙山县",
            value: "433130"
        }, {
            label: "湖南吉首经济开发区",
            value: "433172"
        }, {
            label: "湖南永顺经济开发区",
            value: "433173"
        } ] ], [ [ {
            label: "荔湾区",
            value: "440103"
        }, {
            label: "越秀区",
            value: "440104"
        }, {
            label: "海珠区",
            value: "440105"
        }, {
            label: "天河区",
            value: "440106"
        }, {
            label: "白云区",
            value: "440111"
        }, {
            label: "黄埔区",
            value: "440112"
        }, {
            label: "番禺区",
            value: "440113"
        }, {
            label: "花都区",
            value: "440114"
        }, {
            label: "南沙区",
            value: "440115"
        }, {
            label: "从化区",
            value: "440117"
        }, {
            label: "增城区",
            value: "440118"
        } ], [ {
            label: "武江区",
            value: "440203"
        }, {
            label: "浈江区",
            value: "440204"
        }, {
            label: "曲江区",
            value: "440205"
        }, {
            label: "始兴县",
            value: "440222"
        }, {
            label: "仁化县",
            value: "440224"
        }, {
            label: "翁源县",
            value: "440229"
        }, {
            label: "乳源瑶族自治县",
            value: "440232"
        }, {
            label: "新丰县",
            value: "440233"
        }, {
            label: "乐昌市",
            value: "440281"
        }, {
            label: "南雄市",
            value: "440282"
        } ], [ {
            label: "罗湖区",
            value: "440303"
        }, {
            label: "福田区",
            value: "440304"
        }, {
            label: "南山区",
            value: "440305"
        }, {
            label: "宝安区",
            value: "440306"
        }, {
            label: "龙岗区",
            value: "440307"
        }, {
            label: "盐田区",
            value: "440308"
        }, {
            label: "龙华区",
            value: "440309"
        }, {
            label: "坪山区",
            value: "440310"
        } ], [ {
            label: "香洲区",
            value: "440402"
        }, {
            label: "斗门区",
            value: "440403"
        }, {
            label: "金湾区",
            value: "440404"
        } ], [ {
            label: "龙湖区",
            value: "440507"
        }, {
            label: "金平区",
            value: "440511"
        }, {
            label: "濠江区",
            value: "440512"
        }, {
            label: "潮阳区",
            value: "440513"
        }, {
            label: "潮南区",
            value: "440514"
        }, {
            label: "澄海区",
            value: "440515"
        }, {
            label: "南澳县",
            value: "440523"
        } ], [ {
            label: "禅城区",
            value: "440604"
        }, {
            label: "南海区",
            value: "440605"
        }, {
            label: "顺德区",
            value: "440606"
        }, {
            label: "三水区",
            value: "440607"
        }, {
            label: "高明区",
            value: "440608"
        } ], [ {
            label: "蓬江区",
            value: "440703"
        }, {
            label: "江海区",
            value: "440704"
        }, {
            label: "新会区",
            value: "440705"
        }, {
            label: "台山市",
            value: "440781"
        }, {
            label: "开平市",
            value: "440783"
        }, {
            label: "鹤山市",
            value: "440784"
        }, {
            label: "恩平市",
            value: "440785"
        } ], [ {
            label: "赤坎区",
            value: "440802"
        }, {
            label: "霞山区",
            value: "440803"
        }, {
            label: "坡头区",
            value: "440804"
        }, {
            label: "麻章区",
            value: "440811"
        }, {
            label: "遂溪县",
            value: "440823"
        }, {
            label: "徐闻县",
            value: "440825"
        }, {
            label: "廉江市",
            value: "440881"
        }, {
            label: "雷州市",
            value: "440882"
        }, {
            label: "吴川市",
            value: "440883"
        } ], [ {
            label: "茂南区",
            value: "440902"
        }, {
            label: "电白区",
            value: "440904"
        }, {
            label: "高州市",
            value: "440981"
        }, {
            label: "化州市",
            value: "440982"
        }, {
            label: "信宜市",
            value: "440983"
        } ], [ {
            label: "端州区",
            value: "441202"
        }, {
            label: "鼎湖区",
            value: "441203"
        }, {
            label: "高要区",
            value: "441204"
        }, {
            label: "广宁县",
            value: "441223"
        }, {
            label: "怀集县",
            value: "441224"
        }, {
            label: "封开县",
            value: "441225"
        }, {
            label: "德庆县",
            value: "441226"
        }, {
            label: "四会市",
            value: "441284"
        } ], [ {
            label: "惠城区",
            value: "441302"
        }, {
            label: "惠阳区",
            value: "441303"
        }, {
            label: "博罗县",
            value: "441322"
        }, {
            label: "惠东县",
            value: "441323"
        }, {
            label: "龙门县",
            value: "441324"
        } ], [ {
            label: "梅江区",
            value: "441402"
        }, {
            label: "梅县区",
            value: "441403"
        }, {
            label: "大埔县",
            value: "441422"
        }, {
            label: "丰顺县",
            value: "441423"
        }, {
            label: "五华县",
            value: "441424"
        }, {
            label: "平远县",
            value: "441426"
        }, {
            label: "蕉岭县",
            value: "441427"
        }, {
            label: "兴宁市",
            value: "441481"
        } ], [ {
            label: "城区",
            value: "441502"
        }, {
            label: "海丰县",
            value: "441521"
        }, {
            label: "陆河县",
            value: "441523"
        }, {
            label: "陆丰市",
            value: "441581"
        } ], [ {
            label: "源城区",
            value: "441602"
        }, {
            label: "紫金县",
            value: "441621"
        }, {
            label: "龙川县",
            value: "441622"
        }, {
            label: "连平县",
            value: "441623"
        }, {
            label: "和平县",
            value: "441624"
        }, {
            label: "东源县",
            value: "441625"
        } ], [ {
            label: "江城区",
            value: "441702"
        }, {
            label: "阳东区",
            value: "441704"
        }, {
            label: "阳西县",
            value: "441721"
        }, {
            label: "阳春市",
            value: "441781"
        } ], [ {
            label: "清城区",
            value: "441802"
        }, {
            label: "清新区",
            value: "441803"
        }, {
            label: "佛冈县",
            value: "441821"
        }, {
            label: "阳山县",
            value: "441823"
        }, {
            label: "连山壮族瑶族自治县",
            value: "441825"
        }, {
            label: "连南瑶族自治县",
            value: "441826"
        }, {
            label: "英德市",
            value: "441881"
        }, {
            label: "连州市",
            value: "441882"
        } ], [ {
            label: "东莞市",
            value: "441900"
        } ], [ {
            label: "中山市",
            value: "442000"
        } ], [ {
            label: "湘桥区",
            value: "445102"
        }, {
            label: "潮安区",
            value: "445103"
        }, {
            label: "饶平县",
            value: "445122"
        } ], [ {
            label: "榕城区",
            value: "445202"
        }, {
            label: "揭东区",
            value: "445203"
        }, {
            label: "揭西县",
            value: "445222"
        }, {
            label: "惠来县",
            value: "445224"
        }, {
            label: "普宁市",
            value: "445281"
        } ], [ {
            label: "云城区",
            value: "445302"
        }, {
            label: "云安区",
            value: "445303"
        }, {
            label: "新兴县",
            value: "445321"
        }, {
            label: "郁南县",
            value: "445322"
        }, {
            label: "罗定市",
            value: "445381"
        } ] ], [ [ {
            label: "兴宁区",
            value: "450102"
        }, {
            label: "青秀区",
            value: "450103"
        }, {
            label: "江南区",
            value: "450105"
        }, {
            label: "西乡塘区",
            value: "450107"
        }, {
            label: "良庆区",
            value: "450108"
        }, {
            label: "邕宁区",
            value: "450109"
        }, {
            label: "武鸣区",
            value: "450110"
        }, {
            label: "隆安县",
            value: "450123"
        }, {
            label: "马山县",
            value: "450124"
        }, {
            label: "上林县",
            value: "450125"
        }, {
            label: "宾阳县",
            value: "450126"
        }, {
            label: "横县",
            value: "450127"
        } ], [ {
            label: "城中区",
            value: "450202"
        }, {
            label: "鱼峰区",
            value: "450203"
        }, {
            label: "柳南区",
            value: "450204"
        }, {
            label: "柳北区",
            value: "450205"
        }, {
            label: "柳江区",
            value: "450206"
        }, {
            label: "柳城县",
            value: "450222"
        }, {
            label: "鹿寨县",
            value: "450223"
        }, {
            label: "融安县",
            value: "450224"
        }, {
            label: "融水苗族自治县",
            value: "450225"
        }, {
            label: "三江侗族自治县",
            value: "450226"
        } ], [ {
            label: "秀峰区",
            value: "450302"
        }, {
            label: "叠彩区",
            value: "450303"
        }, {
            label: "象山区",
            value: "450304"
        }, {
            label: "七星区",
            value: "450305"
        }, {
            label: "雁山区",
            value: "450311"
        }, {
            label: "临桂区",
            value: "450312"
        }, {
            label: "阳朔县",
            value: "450321"
        }, {
            label: "灵川县",
            value: "450323"
        }, {
            label: "全州县",
            value: "450324"
        }, {
            label: "兴安县",
            value: "450325"
        }, {
            label: "永福县",
            value: "450326"
        }, {
            label: "灌阳县",
            value: "450327"
        }, {
            label: "龙胜各族自治县",
            value: "450328"
        }, {
            label: "资源县",
            value: "450329"
        }, {
            label: "平乐县",
            value: "450330"
        }, {
            label: "荔浦县",
            value: "450331"
        }, {
            label: "恭城瑶族自治县",
            value: "450332"
        } ], [ {
            label: "万秀区",
            value: "450403"
        }, {
            label: "长洲区",
            value: "450405"
        }, {
            label: "龙圩区",
            value: "450406"
        }, {
            label: "苍梧县",
            value: "450421"
        }, {
            label: "藤县",
            value: "450422"
        }, {
            label: "蒙山县",
            value: "450423"
        }, {
            label: "岑溪市",
            value: "450481"
        } ], [ {
            label: "海城区",
            value: "450502"
        }, {
            label: "银海区",
            value: "450503"
        }, {
            label: "铁山港区",
            value: "450512"
        }, {
            label: "合浦县",
            value: "450521"
        } ], [ {
            label: "港口区",
            value: "450602"
        }, {
            label: "防城区",
            value: "450603"
        }, {
            label: "上思县",
            value: "450621"
        }, {
            label: "东兴市",
            value: "450681"
        } ], [ {
            label: "钦南区",
            value: "450702"
        }, {
            label: "钦北区",
            value: "450703"
        }, {
            label: "灵山县",
            value: "450721"
        }, {
            label: "浦北县",
            value: "450722"
        } ], [ {
            label: "港北区",
            value: "450802"
        }, {
            label: "港南区",
            value: "450803"
        }, {
            label: "覃塘区",
            value: "450804"
        }, {
            label: "平南县",
            value: "450821"
        }, {
            label: "桂平市",
            value: "450881"
        } ], [ {
            label: "玉州区",
            value: "450902"
        }, {
            label: "福绵区",
            value: "450903"
        }, {
            label: "容县",
            value: "450921"
        }, {
            label: "陆川县",
            value: "450922"
        }, {
            label: "博白县",
            value: "450923"
        }, {
            label: "兴业县",
            value: "450924"
        }, {
            label: "北流市",
            value: "450981"
        } ], [ {
            label: "右江区",
            value: "451002"
        }, {
            label: "田阳县",
            value: "451021"
        }, {
            label: "田东县",
            value: "451022"
        }, {
            label: "平果县",
            value: "451023"
        }, {
            label: "德保县",
            value: "451024"
        }, {
            label: "那坡县",
            value: "451026"
        }, {
            label: "凌云县",
            value: "451027"
        }, {
            label: "乐业县",
            value: "451028"
        }, {
            label: "田林县",
            value: "451029"
        }, {
            label: "西林县",
            value: "451030"
        }, {
            label: "隆林各族自治县",
            value: "451031"
        }, {
            label: "靖西市",
            value: "451081"
        } ], [ {
            label: "八步区",
            value: "451102"
        }, {
            label: "平桂区",
            value: "451103"
        }, {
            label: "昭平县",
            value: "451121"
        }, {
            label: "钟山县",
            value: "451122"
        }, {
            label: "富川瑶族自治县",
            value: "451123"
        } ], [ {
            label: "金城江区",
            value: "451202"
        }, {
            label: "宜州区",
            value: "451203"
        }, {
            label: "南丹县",
            value: "451221"
        }, {
            label: "天峨县",
            value: "451222"
        }, {
            label: "凤山县",
            value: "451223"
        }, {
            label: "东兰县",
            value: "451224"
        }, {
            label: "罗城仫佬族自治县",
            value: "451225"
        }, {
            label: "环江毛南族自治县",
            value: "451226"
        }, {
            label: "巴马瑶族自治县",
            value: "451227"
        }, {
            label: "都安瑶族自治县",
            value: "451228"
        }, {
            label: "大化瑶族自治县",
            value: "451229"
        } ], [ {
            label: "兴宾区",
            value: "451302"
        }, {
            label: "忻城县",
            value: "451321"
        }, {
            label: "象州县",
            value: "451322"
        }, {
            label: "武宣县",
            value: "451323"
        }, {
            label: "金秀瑶族自治县",
            value: "451324"
        }, {
            label: "合山市",
            value: "451381"
        } ], [ {
            label: "江州区",
            value: "451402"
        }, {
            label: "扶绥县",
            value: "451421"
        }, {
            label: "宁明县",
            value: "451422"
        }, {
            label: "龙州县",
            value: "451423"
        }, {
            label: "大新县",
            value: "451424"
        }, {
            label: "天等县",
            value: "451425"
        }, {
            label: "凭祥市",
            value: "451481"
        } ] ], [ [ {
            label: "秀英区",
            value: "460105"
        }, {
            label: "龙华区",
            value: "460106"
        }, {
            label: "琼山区",
            value: "460107"
        }, {
            label: "美兰区",
            value: "460108"
        } ], [ {
            label: "海棠区",
            value: "460202"
        }, {
            label: "吉阳区",
            value: "460203"
        }, {
            label: "天涯区",
            value: "460204"
        }, {
            label: "崖州区",
            value: "460205"
        } ], [ {
            label: "西沙群岛",
            value: "460321"
        }, {
            label: "南沙群岛",
            value: "460322"
        }, {
            label: "中沙群岛的岛礁及其海域",
            value: "460323"
        } ], [ {
            label: "儋州市",
            value: "460400"
        } ], [ {
            label: "五指山市",
            value: "469001"
        }, {
            label: "琼海市",
            value: "469002"
        }, {
            label: "文昌市",
            value: "469005"
        }, {
            label: "万宁市",
            value: "469006"
        }, {
            label: "东方市",
            value: "469007"
        }, {
            label: "定安县",
            value: "469021"
        }, {
            label: "屯昌县",
            value: "469022"
        }, {
            label: "澄迈县",
            value: "469023"
        }, {
            label: "临高县",
            value: "469024"
        }, {
            label: "白沙黎族自治县",
            value: "469025"
        }, {
            label: "昌江黎族自治县",
            value: "469026"
        }, {
            label: "乐东黎族自治县",
            value: "469027"
        }, {
            label: "陵水黎族自治县",
            value: "469028"
        }, {
            label: "保亭黎族苗族自治县",
            value: "469029"
        }, {
            label: "琼中黎族苗族自治县",
            value: "469030"
        } ] ], [ [ {
            label: "万州区",
            value: "500101"
        }, {
            label: "涪陵区",
            value: "500102"
        }, {
            label: "渝中区",
            value: "500103"
        }, {
            label: "大渡口区",
            value: "500104"
        }, {
            label: "江北区",
            value: "500105"
        }, {
            label: "沙坪坝区",
            value: "500106"
        }, {
            label: "九龙坡区",
            value: "500107"
        }, {
            label: "南岸区",
            value: "500108"
        }, {
            label: "北碚区",
            value: "500109"
        }, {
            label: "綦江区",
            value: "500110"
        }, {
            label: "大足区",
            value: "500111"
        }, {
            label: "渝北区",
            value: "500112"
        }, {
            label: "巴南区",
            value: "500113"
        }, {
            label: "黔江区",
            value: "500114"
        }, {
            label: "长寿区",
            value: "500115"
        }, {
            label: "江津区",
            value: "500116"
        }, {
            label: "合川区",
            value: "500117"
        }, {
            label: "永川区",
            value: "500118"
        }, {
            label: "南川区",
            value: "500119"
        }, {
            label: "璧山区",
            value: "500120"
        }, {
            label: "铜梁区",
            value: "500151"
        }, {
            label: "潼南区",
            value: "500152"
        }, {
            label: "荣昌区",
            value: "500153"
        }, {
            label: "开州区",
            value: "500154"
        }, {
            label: "梁平区",
            value: "500155"
        }, {
            label: "武隆区",
            value: "500156"
        } ], [ {
            label: "城口县",
            value: "500229"
        }, {
            label: "丰都县",
            value: "500230"
        }, {
            label: "垫江县",
            value: "500231"
        }, {
            label: "忠县",
            value: "500233"
        }, {
            label: "云阳县",
            value: "500235"
        }, {
            label: "奉节县",
            value: "500236"
        }, {
            label: "巫山县",
            value: "500237"
        }, {
            label: "巫溪县",
            value: "500238"
        }, {
            label: "石柱土家族自治县",
            value: "500240"
        }, {
            label: "秀山土家族苗族自治县",
            value: "500241"
        }, {
            label: "酉阳土家族苗族自治县",
            value: "500242"
        }, {
            label: "彭水苗族土家族自治县",
            value: "500243"
        } ] ], [ [ {
            label: "锦江区",
            value: "510104"
        }, {
            label: "青羊区",
            value: "510105"
        }, {
            label: "金牛区",
            value: "510106"
        }, {
            label: "武侯区",
            value: "510107"
        }, {
            label: "成华区",
            value: "510108"
        }, {
            label: "龙泉驿区",
            value: "510112"
        }, {
            label: "青白江区",
            value: "510113"
        }, {
            label: "新都区",
            value: "510114"
        }, {
            label: "温江区",
            value: "510115"
        }, {
            label: "双流区",
            value: "510116"
        }, {
            label: "郫都区",
            value: "510117"
        }, {
            label: "金堂县",
            value: "510121"
        }, {
            label: "大邑县",
            value: "510129"
        }, {
            label: "蒲江县",
            value: "510131"
        }, {
            label: "新津县",
            value: "510132"
        }, {
            label: "都江堰市",
            value: "510181"
        }, {
            label: "彭州市",
            value: "510182"
        }, {
            label: "邛崃市",
            value: "510183"
        }, {
            label: "崇州市",
            value: "510184"
        }, {
            label: "简阳市",
            value: "510185"
        } ], [ {
            label: "自流井区",
            value: "510302"
        }, {
            label: "贡井区",
            value: "510303"
        }, {
            label: "大安区",
            value: "510304"
        }, {
            label: "沿滩区",
            value: "510311"
        }, {
            label: "荣县",
            value: "510321"
        }, {
            label: "富顺县",
            value: "510322"
        } ], [ {
            label: "东区",
            value: "510402"
        }, {
            label: "西区",
            value: "510403"
        }, {
            label: "仁和区",
            value: "510411"
        }, {
            label: "米易县",
            value: "510421"
        }, {
            label: "盐边县",
            value: "510422"
        } ], [ {
            label: "江阳区",
            value: "510502"
        }, {
            label: "纳溪区",
            value: "510503"
        }, {
            label: "龙马潭区",
            value: "510504"
        }, {
            label: "泸县",
            value: "510521"
        }, {
            label: "合江县",
            value: "510522"
        }, {
            label: "叙永县",
            value: "510524"
        }, {
            label: "古蔺县",
            value: "510525"
        } ], [ {
            label: "旌阳区",
            value: "510603"
        }, {
            label: "罗江区",
            value: "510604"
        }, {
            label: "中江县",
            value: "510623"
        }, {
            label: "广汉市",
            value: "510681"
        }, {
            label: "什邡市",
            value: "510682"
        }, {
            label: "绵竹市",
            value: "510683"
        } ], [ {
            label: "涪城区",
            value: "510703"
        }, {
            label: "游仙区",
            value: "510704"
        }, {
            label: "安州区",
            value: "510705"
        }, {
            label: "三台县",
            value: "510722"
        }, {
            label: "盐亭县",
            value: "510723"
        }, {
            label: "梓潼县",
            value: "510725"
        }, {
            label: "北川羌族自治县",
            value: "510726"
        }, {
            label: "平武县",
            value: "510727"
        }, {
            label: "江油市",
            value: "510781"
        } ], [ {
            label: "利州区",
            value: "510802"
        }, {
            label: "昭化区",
            value: "510811"
        }, {
            label: "朝天区",
            value: "510812"
        }, {
            label: "旺苍县",
            value: "510821"
        }, {
            label: "青川县",
            value: "510822"
        }, {
            label: "剑阁县",
            value: "510823"
        }, {
            label: "苍溪县",
            value: "510824"
        } ], [ {
            label: "船山区",
            value: "510903"
        }, {
            label: "安居区",
            value: "510904"
        }, {
            label: "蓬溪县",
            value: "510921"
        }, {
            label: "射洪县",
            value: "510922"
        }, {
            label: "大英县",
            value: "510923"
        } ], [ {
            label: "市中区",
            value: "511002"
        }, {
            label: "东兴区",
            value: "511011"
        }, {
            label: "威远县",
            value: "511024"
        }, {
            label: "资中县",
            value: "511025"
        }, {
            label: "内江经济开发区",
            value: "511071"
        }, {
            label: "隆昌市",
            value: "511083"
        } ], [ {
            label: "市中区",
            value: "511102"
        }, {
            label: "沙湾区",
            value: "511111"
        }, {
            label: "五通桥区",
            value: "511112"
        }, {
            label: "金口河区",
            value: "511113"
        }, {
            label: "犍为县",
            value: "511123"
        }, {
            label: "井研县",
            value: "511124"
        }, {
            label: "夹江县",
            value: "511126"
        }, {
            label: "沐川县",
            value: "511129"
        }, {
            label: "峨边彝族自治县",
            value: "511132"
        }, {
            label: "马边彝族自治县",
            value: "511133"
        }, {
            label: "峨眉山市",
            value: "511181"
        } ], [ {
            label: "顺庆区",
            value: "511302"
        }, {
            label: "高坪区",
            value: "511303"
        }, {
            label: "嘉陵区",
            value: "511304"
        }, {
            label: "南部县",
            value: "511321"
        }, {
            label: "营山县",
            value: "511322"
        }, {
            label: "蓬安县",
            value: "511323"
        }, {
            label: "仪陇县",
            value: "511324"
        }, {
            label: "西充县",
            value: "511325"
        }, {
            label: "阆中市",
            value: "511381"
        } ], [ {
            label: "东坡区",
            value: "511402"
        }, {
            label: "彭山区",
            value: "511403"
        }, {
            label: "仁寿县",
            value: "511421"
        }, {
            label: "洪雅县",
            value: "511423"
        }, {
            label: "丹棱县",
            value: "511424"
        }, {
            label: "青神县",
            value: "511425"
        } ], [ {
            label: "翠屏区",
            value: "511502"
        }, {
            label: "南溪区",
            value: "511503"
        }, {
            label: "宜宾县",
            value: "511521"
        }, {
            label: "江安县",
            value: "511523"
        }, {
            label: "长宁县",
            value: "511524"
        }, {
            label: "高县",
            value: "511525"
        }, {
            label: "珙县",
            value: "511526"
        }, {
            label: "筠连县",
            value: "511527"
        }, {
            label: "兴文县",
            value: "511528"
        }, {
            label: "屏山县",
            value: "511529"
        } ], [ {
            label: "广安区",
            value: "511602"
        }, {
            label: "前锋区",
            value: "511603"
        }, {
            label: "岳池县",
            value: "511621"
        }, {
            label: "武胜县",
            value: "511622"
        }, {
            label: "邻水县",
            value: "511623"
        }, {
            label: "华蓥市",
            value: "511681"
        } ], [ {
            label: "通川区",
            value: "511702"
        }, {
            label: "达川区",
            value: "511703"
        }, {
            label: "宣汉县",
            value: "511722"
        }, {
            label: "开江县",
            value: "511723"
        }, {
            label: "大竹县",
            value: "511724"
        }, {
            label: "渠县",
            value: "511725"
        }, {
            label: "达州经济开发区",
            value: "511771"
        }, {
            label: "万源市",
            value: "511781"
        } ], [ {
            label: "雨城区",
            value: "511802"
        }, {
            label: "名山区",
            value: "511803"
        }, {
            label: "荥经县",
            value: "511822"
        }, {
            label: "汉源县",
            value: "511823"
        }, {
            label: "石棉县",
            value: "511824"
        }, {
            label: "天全县",
            value: "511825"
        }, {
            label: "芦山县",
            value: "511826"
        }, {
            label: "宝兴县",
            value: "511827"
        } ], [ {
            label: "巴州区",
            value: "511902"
        }, {
            label: "恩阳区",
            value: "511903"
        }, {
            label: "通江县",
            value: "511921"
        }, {
            label: "南江县",
            value: "511922"
        }, {
            label: "平昌县",
            value: "511923"
        }, {
            label: "巴中经济开发区",
            value: "511971"
        } ], [ {
            label: "雁江区",
            value: "512002"
        }, {
            label: "安岳县",
            value: "512021"
        }, {
            label: "乐至县",
            value: "512022"
        } ], [ {
            label: "马尔康市",
            value: "513201"
        }, {
            label: "汶川县",
            value: "513221"
        }, {
            label: "理县",
            value: "513222"
        }, {
            label: "茂县",
            value: "513223"
        }, {
            label: "松潘县",
            value: "513224"
        }, {
            label: "九寨沟县",
            value: "513225"
        }, {
            label: "金川县",
            value: "513226"
        }, {
            label: "小金县",
            value: "513227"
        }, {
            label: "黑水县",
            value: "513228"
        }, {
            label: "壤塘县",
            value: "513230"
        }, {
            label: "阿坝县",
            value: "513231"
        }, {
            label: "若尔盖县",
            value: "513232"
        }, {
            label: "红原县",
            value: "513233"
        } ], [ {
            label: "康定市",
            value: "513301"
        }, {
            label: "泸定县",
            value: "513322"
        }, {
            label: "丹巴县",
            value: "513323"
        }, {
            label: "九龙县",
            value: "513324"
        }, {
            label: "雅江县",
            value: "513325"
        }, {
            label: "道孚县",
            value: "513326"
        }, {
            label: "炉霍县",
            value: "513327"
        }, {
            label: "甘孜县",
            value: "513328"
        }, {
            label: "新龙县",
            value: "513329"
        }, {
            label: "德格县",
            value: "513330"
        }, {
            label: "白玉县",
            value: "513331"
        }, {
            label: "石渠县",
            value: "513332"
        }, {
            label: "色达县",
            value: "513333"
        }, {
            label: "理塘县",
            value: "513334"
        }, {
            label: "巴塘县",
            value: "513335"
        }, {
            label: "乡城县",
            value: "513336"
        }, {
            label: "稻城县",
            value: "513337"
        }, {
            label: "得荣县",
            value: "513338"
        } ], [ {
            label: "西昌市",
            value: "513401"
        }, {
            label: "木里藏族自治县",
            value: "513422"
        }, {
            label: "盐源县",
            value: "513423"
        }, {
            label: "德昌县",
            value: "513424"
        }, {
            label: "会理县",
            value: "513425"
        }, {
            label: "会东县",
            value: "513426"
        }, {
            label: "宁南县",
            value: "513427"
        }, {
            label: "普格县",
            value: "513428"
        }, {
            label: "布拖县",
            value: "513429"
        }, {
            label: "金阳县",
            value: "513430"
        }, {
            label: "昭觉县",
            value: "513431"
        }, {
            label: "喜德县",
            value: "513432"
        }, {
            label: "冕宁县",
            value: "513433"
        }, {
            label: "越西县",
            value: "513434"
        }, {
            label: "甘洛县",
            value: "513435"
        }, {
            label: "美姑县",
            value: "513436"
        }, {
            label: "雷波县",
            value: "513437"
        } ] ], [ [ {
            label: "南明区",
            value: "520102"
        }, {
            label: "云岩区",
            value: "520103"
        }, {
            label: "花溪区",
            value: "520111"
        }, {
            label: "乌当区",
            value: "520112"
        }, {
            label: "白云区",
            value: "520113"
        }, {
            label: "观山湖区",
            value: "520115"
        }, {
            label: "开阳县",
            value: "520121"
        }, {
            label: "息烽县",
            value: "520122"
        }, {
            label: "修文县",
            value: "520123"
        }, {
            label: "清镇市",
            value: "520181"
        } ], [ {
            label: "钟山区",
            value: "520201"
        }, {
            label: "六枝特区",
            value: "520203"
        }, {
            label: "水城县",
            value: "520221"
        }, {
            label: "盘州市",
            value: "520281"
        } ], [ {
            label: "红花岗区",
            value: "520302"
        }, {
            label: "汇川区",
            value: "520303"
        }, {
            label: "播州区",
            value: "520304"
        }, {
            label: "桐梓县",
            value: "520322"
        }, {
            label: "绥阳县",
            value: "520323"
        }, {
            label: "正安县",
            value: "520324"
        }, {
            label: "道真仡佬族苗族自治县",
            value: "520325"
        }, {
            label: "务川仡佬族苗族自治县",
            value: "520326"
        }, {
            label: "凤冈县",
            value: "520327"
        }, {
            label: "湄潭县",
            value: "520328"
        }, {
            label: "余庆县",
            value: "520329"
        }, {
            label: "习水县",
            value: "520330"
        }, {
            label: "赤水市",
            value: "520381"
        }, {
            label: "仁怀市",
            value: "520382"
        } ], [ {
            label: "西秀区",
            value: "520402"
        }, {
            label: "平坝区",
            value: "520403"
        }, {
            label: "普定县",
            value: "520422"
        }, {
            label: "镇宁布依族苗族自治县",
            value: "520423"
        }, {
            label: "关岭布依族苗族自治县",
            value: "520424"
        }, {
            label: "紫云苗族布依族自治县",
            value: "520425"
        } ], [ {
            label: "七星关区",
            value: "520502"
        }, {
            label: "大方县",
            value: "520521"
        }, {
            label: "黔西县",
            value: "520522"
        }, {
            label: "金沙县",
            value: "520523"
        }, {
            label: "织金县",
            value: "520524"
        }, {
            label: "纳雍县",
            value: "520525"
        }, {
            label: "威宁彝族回族苗族自治县",
            value: "520526"
        }, {
            label: "赫章县",
            value: "520527"
        } ], [ {
            label: "碧江区",
            value: "520602"
        }, {
            label: "万山区",
            value: "520603"
        }, {
            label: "江口县",
            value: "520621"
        }, {
            label: "玉屏侗族自治县",
            value: "520622"
        }, {
            label: "石阡县",
            value: "520623"
        }, {
            label: "思南县",
            value: "520624"
        }, {
            label: "印江土家族苗族自治县",
            value: "520625"
        }, {
            label: "德江县",
            value: "520626"
        }, {
            label: "沿河土家族自治县",
            value: "520627"
        }, {
            label: "松桃苗族自治县",
            value: "520628"
        } ], [ {
            label: "兴义市",
            value: "522301"
        }, {
            label: "兴仁县",
            value: "522322"
        }, {
            label: "普安县",
            value: "522323"
        }, {
            label: "晴隆县",
            value: "522324"
        }, {
            label: "贞丰县",
            value: "522325"
        }, {
            label: "望谟县",
            value: "522326"
        }, {
            label: "册亨县",
            value: "522327"
        }, {
            label: "安龙县",
            value: "522328"
        } ], [ {
            label: "凯里市",
            value: "522601"
        }, {
            label: "黄平县",
            value: "522622"
        }, {
            label: "施秉县",
            value: "522623"
        }, {
            label: "三穗县",
            value: "522624"
        }, {
            label: "镇远县",
            value: "522625"
        }, {
            label: "岑巩县",
            value: "522626"
        }, {
            label: "天柱县",
            value: "522627"
        }, {
            label: "锦屏县",
            value: "522628"
        }, {
            label: "剑河县",
            value: "522629"
        }, {
            label: "台江县",
            value: "522630"
        }, {
            label: "黎平县",
            value: "522631"
        }, {
            label: "榕江县",
            value: "522632"
        }, {
            label: "从江县",
            value: "522633"
        }, {
            label: "雷山县",
            value: "522634"
        }, {
            label: "麻江县",
            value: "522635"
        }, {
            label: "丹寨县",
            value: "522636"
        } ], [ {
            label: "都匀市",
            value: "522701"
        }, {
            label: "福泉市",
            value: "522702"
        }, {
            label: "荔波县",
            value: "522722"
        }, {
            label: "贵定县",
            value: "522723"
        }, {
            label: "瓮安县",
            value: "522725"
        }, {
            label: "独山县",
            value: "522726"
        }, {
            label: "平塘县",
            value: "522727"
        }, {
            label: "罗甸县",
            value: "522728"
        }, {
            label: "长顺县",
            value: "522729"
        }, {
            label: "龙里县",
            value: "522730"
        }, {
            label: "惠水县",
            value: "522731"
        }, {
            label: "三都水族自治县",
            value: "522732"
        } ] ], [ [ {
            label: "五华区",
            value: "530102"
        }, {
            label: "盘龙区",
            value: "530103"
        }, {
            label: "官渡区",
            value: "530111"
        }, {
            label: "西山区",
            value: "530112"
        }, {
            label: "东川区",
            value: "530113"
        }, {
            label: "呈贡区",
            value: "530114"
        }, {
            label: "晋宁区",
            value: "530115"
        }, {
            label: "富民县",
            value: "530124"
        }, {
            label: "宜良县",
            value: "530125"
        }, {
            label: "石林彝族自治县",
            value: "530126"
        }, {
            label: "嵩明县",
            value: "530127"
        }, {
            label: "禄劝彝族苗族自治县",
            value: "530128"
        }, {
            label: "寻甸回族彝族自治县",
            value: "530129"
        }, {
            label: "安宁市",
            value: "530181"
        } ], [ {
            label: "麒麟区",
            value: "530302"
        }, {
            label: "沾益区",
            value: "530303"
        }, {
            label: "马龙县",
            value: "530321"
        }, {
            label: "陆良县",
            value: "530322"
        }, {
            label: "师宗县",
            value: "530323"
        }, {
            label: "罗平县",
            value: "530324"
        }, {
            label: "富源县",
            value: "530325"
        }, {
            label: "会泽县",
            value: "530326"
        }, {
            label: "宣威市",
            value: "530381"
        } ], [ {
            label: "红塔区",
            value: "530402"
        }, {
            label: "江川区",
            value: "530403"
        }, {
            label: "澄江县",
            value: "530422"
        }, {
            label: "通海县",
            value: "530423"
        }, {
            label: "华宁县",
            value: "530424"
        }, {
            label: "易门县",
            value: "530425"
        }, {
            label: "峨山彝族自治县",
            value: "530426"
        }, {
            label: "新平彝族傣族自治县",
            value: "530427"
        }, {
            label: "元江哈尼族彝族傣族自治县",
            value: "530428"
        } ], [ {
            label: "隆阳区",
            value: "530502"
        }, {
            label: "施甸县",
            value: "530521"
        }, {
            label: "龙陵县",
            value: "530523"
        }, {
            label: "昌宁县",
            value: "530524"
        }, {
            label: "腾冲市",
            value: "530581"
        } ], [ {
            label: "昭阳区",
            value: "530602"
        }, {
            label: "鲁甸县",
            value: "530621"
        }, {
            label: "巧家县",
            value: "530622"
        }, {
            label: "盐津县",
            value: "530623"
        }, {
            label: "大关县",
            value: "530624"
        }, {
            label: "永善县",
            value: "530625"
        }, {
            label: "绥江县",
            value: "530626"
        }, {
            label: "镇雄县",
            value: "530627"
        }, {
            label: "彝良县",
            value: "530628"
        }, {
            label: "威信县",
            value: "530629"
        }, {
            label: "水富县",
            value: "530630"
        } ], [ {
            label: "古城区",
            value: "530702"
        }, {
            label: "玉龙纳西族自治县",
            value: "530721"
        }, {
            label: "永胜县",
            value: "530722"
        }, {
            label: "华坪县",
            value: "530723"
        }, {
            label: "宁蒗彝族自治县",
            value: "530724"
        } ], [ {
            label: "思茅区",
            value: "530802"
        }, {
            label: "宁洱哈尼族彝族自治县",
            value: "530821"
        }, {
            label: "墨江哈尼族自治县",
            value: "530822"
        }, {
            label: "景东彝族自治县",
            value: "530823"
        }, {
            label: "景谷傣族彝族自治县",
            value: "530824"
        }, {
            label: "镇沅彝族哈尼族拉祜族自治县",
            value: "530825"
        }, {
            label: "江城哈尼族彝族自治县",
            value: "530826"
        }, {
            label: "孟连傣族拉祜族佤族自治县",
            value: "530827"
        }, {
            label: "澜沧拉祜族自治县",
            value: "530828"
        }, {
            label: "西盟佤族自治县",
            value: "530829"
        } ], [ {
            label: "临翔区",
            value: "530902"
        }, {
            label: "凤庆县",
            value: "530921"
        }, {
            label: "云县",
            value: "530922"
        }, {
            label: "永德县",
            value: "530923"
        }, {
            label: "镇康县",
            value: "530924"
        }, {
            label: "双江拉祜族佤族布朗族傣族自治县",
            value: "530925"
        }, {
            label: "耿马傣族佤族自治县",
            value: "530926"
        }, {
            label: "沧源佤族自治县",
            value: "530927"
        } ], [ {
            label: "楚雄市",
            value: "532301"
        }, {
            label: "双柏县",
            value: "532322"
        }, {
            label: "牟定县",
            value: "532323"
        }, {
            label: "南华县",
            value: "532324"
        }, {
            label: "姚安县",
            value: "532325"
        }, {
            label: "大姚县",
            value: "532326"
        }, {
            label: "永仁县",
            value: "532327"
        }, {
            label: "元谋县",
            value: "532328"
        }, {
            label: "武定县",
            value: "532329"
        }, {
            label: "禄丰县",
            value: "532331"
        } ], [ {
            label: "个旧市",
            value: "532501"
        }, {
            label: "开远市",
            value: "532502"
        }, {
            label: "蒙自市",
            value: "532503"
        }, {
            label: "弥勒市",
            value: "532504"
        }, {
            label: "屏边苗族自治县",
            value: "532523"
        }, {
            label: "建水县",
            value: "532524"
        }, {
            label: "石屏县",
            value: "532525"
        }, {
            label: "泸西县",
            value: "532527"
        }, {
            label: "元阳县",
            value: "532528"
        }, {
            label: "红河县",
            value: "532529"
        }, {
            label: "金平苗族瑶族傣族自治县",
            value: "532530"
        }, {
            label: "绿春县",
            value: "532531"
        }, {
            label: "河口瑶族自治县",
            value: "532532"
        } ], [ {
            label: "文山市",
            value: "532601"
        }, {
            label: "砚山县",
            value: "532622"
        }, {
            label: "西畴县",
            value: "532623"
        }, {
            label: "麻栗坡县",
            value: "532624"
        }, {
            label: "马关县",
            value: "532625"
        }, {
            label: "丘北县",
            value: "532626"
        }, {
            label: "广南县",
            value: "532627"
        }, {
            label: "富宁县",
            value: "532628"
        } ], [ {
            label: "景洪市",
            value: "532801"
        }, {
            label: "勐海县",
            value: "532822"
        }, {
            label: "勐腊县",
            value: "532823"
        } ], [ {
            label: "大理市",
            value: "532901"
        }, {
            label: "漾濞彝族自治县",
            value: "532922"
        }, {
            label: "祥云县",
            value: "532923"
        }, {
            label: "宾川县",
            value: "532924"
        }, {
            label: "弥渡县",
            value: "532925"
        }, {
            label: "南涧彝族自治县",
            value: "532926"
        }, {
            label: "巍山彝族回族自治县",
            value: "532927"
        }, {
            label: "永平县",
            value: "532928"
        }, {
            label: "云龙县",
            value: "532929"
        }, {
            label: "洱源县",
            value: "532930"
        }, {
            label: "剑川县",
            value: "532931"
        }, {
            label: "鹤庆县",
            value: "532932"
        } ], [ {
            label: "瑞丽市",
            value: "533102"
        }, {
            label: "芒市",
            value: "533103"
        }, {
            label: "梁河县",
            value: "533122"
        }, {
            label: "盈江县",
            value: "533123"
        }, {
            label: "陇川县",
            value: "533124"
        } ], [ {
            label: "泸水市",
            value: "533301"
        }, {
            label: "福贡县",
            value: "533323"
        }, {
            label: "贡山独龙族怒族自治县",
            value: "533324"
        }, {
            label: "兰坪白族普米族自治县",
            value: "533325"
        } ], [ {
            label: "香格里拉市",
            value: "533401"
        }, {
            label: "德钦县",
            value: "533422"
        }, {
            label: "维西傈僳族自治县",
            value: "533423"
        } ] ], [ [ {
            label: "城关区",
            value: "540102"
        }, {
            label: "堆龙德庆区",
            value: "540103"
        }, {
            label: "林周县",
            value: "540121"
        }, {
            label: "当雄县",
            value: "540122"
        }, {
            label: "尼木县",
            value: "540123"
        }, {
            label: "曲水县",
            value: "540124"
        }, {
            label: "达孜县",
            value: "540126"
        }, {
            label: "墨竹工卡县",
            value: "540127"
        }, {
            label: "格尔木藏青工业园区",
            value: "540171"
        }, {
            label: "拉萨经济技术开发区",
            value: "540172"
        }, {
            label: "西藏文化旅游创意园区",
            value: "540173"
        }, {
            label: "达孜工业园区",
            value: "540174"
        } ], [ {
            label: "桑珠孜区",
            value: "540202"
        }, {
            label: "南木林县",
            value: "540221"
        }, {
            label: "江孜县",
            value: "540222"
        }, {
            label: "定日县",
            value: "540223"
        }, {
            label: "萨迦县",
            value: "540224"
        }, {
            label: "拉孜县",
            value: "540225"
        }, {
            label: "昂仁县",
            value: "540226"
        }, {
            label: "谢通门县",
            value: "540227"
        }, {
            label: "白朗县",
            value: "540228"
        }, {
            label: "仁布县",
            value: "540229"
        }, {
            label: "康马县",
            value: "540230"
        }, {
            label: "定结县",
            value: "540231"
        }, {
            label: "仲巴县",
            value: "540232"
        }, {
            label: "亚东县",
            value: "540233"
        }, {
            label: "吉隆县",
            value: "540234"
        }, {
            label: "聂拉木县",
            value: "540235"
        }, {
            label: "萨嘎县",
            value: "540236"
        }, {
            label: "岗巴县",
            value: "540237"
        } ], [ {
            label: "卡若区",
            value: "540302"
        }, {
            label: "江达县",
            value: "540321"
        }, {
            label: "贡觉县",
            value: "540322"
        }, {
            label: "类乌齐县",
            value: "540323"
        }, {
            label: "丁青县",
            value: "540324"
        }, {
            label: "察雅县",
            value: "540325"
        }, {
            label: "八宿县",
            value: "540326"
        }, {
            label: "左贡县",
            value: "540327"
        }, {
            label: "芒康县",
            value: "540328"
        }, {
            label: "洛隆县",
            value: "540329"
        }, {
            label: "边坝县",
            value: "540330"
        } ], [ {
            label: "巴宜区",
            value: "540402"
        }, {
            label: "工布江达县",
            value: "540421"
        }, {
            label: "米林县",
            value: "540422"
        }, {
            label: "墨脱县",
            value: "540423"
        }, {
            label: "波密县",
            value: "540424"
        }, {
            label: "察隅县",
            value: "540425"
        }, {
            label: "朗县",
            value: "540426"
        } ], [ {
            label: "乃东区",
            value: "540502"
        }, {
            label: "扎囊县",
            value: "540521"
        }, {
            label: "贡嘎县",
            value: "540522"
        }, {
            label: "桑日县",
            value: "540523"
        }, {
            label: "琼结县",
            value: "540524"
        }, {
            label: "曲松县",
            value: "540525"
        }, {
            label: "措美县",
            value: "540526"
        }, {
            label: "洛扎县",
            value: "540527"
        }, {
            label: "加查县",
            value: "540528"
        }, {
            label: "隆子县",
            value: "540529"
        }, {
            label: "错那县",
            value: "540530"
        }, {
            label: "浪卡子县",
            value: "540531"
        } ], [ {
            label: "那曲县",
            value: "542421"
        }, {
            label: "嘉黎县",
            value: "542422"
        }, {
            label: "比如县",
            value: "542423"
        }, {
            label: "聂荣县",
            value: "542424"
        }, {
            label: "安多县",
            value: "542425"
        }, {
            label: "申扎县",
            value: "542426"
        }, {
            label: "索县",
            value: "542427"
        }, {
            label: "班戈县",
            value: "542428"
        }, {
            label: "巴青县",
            value: "542429"
        }, {
            label: "尼玛县",
            value: "542430"
        }, {
            label: "双湖县",
            value: "542431"
        } ], [ {
            label: "普兰县",
            value: "542521"
        }, {
            label: "札达县",
            value: "542522"
        }, {
            label: "噶尔县",
            value: "542523"
        }, {
            label: "日土县",
            value: "542524"
        }, {
            label: "革吉县",
            value: "542525"
        }, {
            label: "改则县",
            value: "542526"
        }, {
            label: "措勤县",
            value: "542527"
        } ] ], [ [ {
            label: "新城区",
            value: "610102"
        }, {
            label: "碑林区",
            value: "610103"
        }, {
            label: "莲湖区",
            value: "610104"
        }, {
            label: "灞桥区",
            value: "610111"
        }, {
            label: "未央区",
            value: "610112"
        }, {
            label: "雁塔区",
            value: "610113"
        }, {
            label: "阎良区",
            value: "610114"
        }, {
            label: "临潼区",
            value: "610115"
        }, {
            label: "长安区",
            value: "610116"
        }, {
            label: "高陵区",
            value: "610117"
        }, {
            label: "鄠邑区",
            value: "610118"
        }, {
            label: "蓝田县",
            value: "610122"
        }, {
            label: "周至县",
            value: "610124"
        } ], [ {
            label: "王益区",
            value: "610202"
        }, {
            label: "印台区",
            value: "610203"
        }, {
            label: "耀州区",
            value: "610204"
        }, {
            label: "宜君县",
            value: "610222"
        } ], [ {
            label: "渭滨区",
            value: "610302"
        }, {
            label: "金台区",
            value: "610303"
        }, {
            label: "陈仓区",
            value: "610304"
        }, {
            label: "凤翔县",
            value: "610322"
        }, {
            label: "岐山县",
            value: "610323"
        }, {
            label: "扶风县",
            value: "610324"
        }, {
            label: "眉县",
            value: "610326"
        }, {
            label: "陇县",
            value: "610327"
        }, {
            label: "千阳县",
            value: "610328"
        }, {
            label: "麟游县",
            value: "610329"
        }, {
            label: "凤县",
            value: "610330"
        }, {
            label: "太白县",
            value: "610331"
        } ], [ {
            label: "秦都区",
            value: "610402"
        }, {
            label: "杨陵区",
            value: "610403"
        }, {
            label: "渭城区",
            value: "610404"
        }, {
            label: "三原县",
            value: "610422"
        }, {
            label: "泾阳县",
            value: "610423"
        }, {
            label: "乾县",
            value: "610424"
        }, {
            label: "礼泉县",
            value: "610425"
        }, {
            label: "永寿县",
            value: "610426"
        }, {
            label: "彬县",
            value: "610427"
        }, {
            label: "长武县",
            value: "610428"
        }, {
            label: "旬邑县",
            value: "610429"
        }, {
            label: "淳化县",
            value: "610430"
        }, {
            label: "武功县",
            value: "610431"
        }, {
            label: "兴平市",
            value: "610481"
        } ], [ {
            label: "临渭区",
            value: "610502"
        }, {
            label: "华州区",
            value: "610503"
        }, {
            label: "潼关县",
            value: "610522"
        }, {
            label: "大荔县",
            value: "610523"
        }, {
            label: "合阳县",
            value: "610524"
        }, {
            label: "澄城县",
            value: "610525"
        }, {
            label: "蒲城县",
            value: "610526"
        }, {
            label: "白水县",
            value: "610527"
        }, {
            label: "富平县",
            value: "610528"
        }, {
            label: "韩城市",
            value: "610581"
        }, {
            label: "华阴市",
            value: "610582"
        } ], [ {
            label: "宝塔区",
            value: "610602"
        }, {
            label: "安塞区",
            value: "610603"
        }, {
            label: "延长县",
            value: "610621"
        }, {
            label: "延川县",
            value: "610622"
        }, {
            label: "子长县",
            value: "610623"
        }, {
            label: "志丹县",
            value: "610625"
        }, {
            label: "吴起县",
            value: "610626"
        }, {
            label: "甘泉县",
            value: "610627"
        }, {
            label: "富县",
            value: "610628"
        }, {
            label: "洛川县",
            value: "610629"
        }, {
            label: "宜川县",
            value: "610630"
        }, {
            label: "黄龙县",
            value: "610631"
        }, {
            label: "黄陵县",
            value: "610632"
        } ], [ {
            label: "汉台区",
            value: "610702"
        }, {
            label: "南郑区",
            value: "610703"
        }, {
            label: "城固县",
            value: "610722"
        }, {
            label: "洋县",
            value: "610723"
        }, {
            label: "西乡县",
            value: "610724"
        }, {
            label: "勉县",
            value: "610725"
        }, {
            label: "宁强县",
            value: "610726"
        }, {
            label: "略阳县",
            value: "610727"
        }, {
            label: "镇巴县",
            value: "610728"
        }, {
            label: "留坝县",
            value: "610729"
        }, {
            label: "佛坪县",
            value: "610730"
        } ], [ {
            label: "榆阳区",
            value: "610802"
        }, {
            label: "横山区",
            value: "610803"
        }, {
            label: "府谷县",
            value: "610822"
        }, {
            label: "靖边县",
            value: "610824"
        }, {
            label: "定边县",
            value: "610825"
        }, {
            label: "绥德县",
            value: "610826"
        }, {
            label: "米脂县",
            value: "610827"
        }, {
            label: "佳县",
            value: "610828"
        }, {
            label: "吴堡县",
            value: "610829"
        }, {
            label: "清涧县",
            value: "610830"
        }, {
            label: "子洲县",
            value: "610831"
        }, {
            label: "神木市",
            value: "610881"
        } ], [ {
            label: "汉滨区",
            value: "610902"
        }, {
            label: "汉阴县",
            value: "610921"
        }, {
            label: "石泉县",
            value: "610922"
        }, {
            label: "宁陕县",
            value: "610923"
        }, {
            label: "紫阳县",
            value: "610924"
        }, {
            label: "岚皋县",
            value: "610925"
        }, {
            label: "平利县",
            value: "610926"
        }, {
            label: "镇坪县",
            value: "610927"
        }, {
            label: "旬阳县",
            value: "610928"
        }, {
            label: "白河县",
            value: "610929"
        } ], [ {
            label: "商州区",
            value: "611002"
        }, {
            label: "洛南县",
            value: "611021"
        }, {
            label: "丹凤县",
            value: "611022"
        }, {
            label: "商南县",
            value: "611023"
        }, {
            label: "山阳县",
            value: "611024"
        }, {
            label: "镇安县",
            value: "611025"
        }, {
            label: "柞水县",
            value: "611026"
        } ] ], [ [ {
            label: "城关区",
            value: "620102"
        }, {
            label: "七里河区",
            value: "620103"
        }, {
            label: "西固区",
            value: "620104"
        }, {
            label: "安宁区",
            value: "620105"
        }, {
            label: "红古区",
            value: "620111"
        }, {
            label: "永登县",
            value: "620121"
        }, {
            label: "皋兰县",
            value: "620122"
        }, {
            label: "榆中县",
            value: "620123"
        }, {
            label: "兰州新区",
            value: "620171"
        } ], [ {
            label: "嘉峪关市",
            value: "620201"
        } ], [ {
            label: "金川区",
            value: "620302"
        }, {
            label: "永昌县",
            value: "620321"
        } ], [ {
            label: "白银区",
            value: "620402"
        }, {
            label: "平川区",
            value: "620403"
        }, {
            label: "靖远县",
            value: "620421"
        }, {
            label: "会宁县",
            value: "620422"
        }, {
            label: "景泰县",
            value: "620423"
        } ], [ {
            label: "秦州区",
            value: "620502"
        }, {
            label: "麦积区",
            value: "620503"
        }, {
            label: "清水县",
            value: "620521"
        }, {
            label: "秦安县",
            value: "620522"
        }, {
            label: "甘谷县",
            value: "620523"
        }, {
            label: "武山县",
            value: "620524"
        }, {
            label: "张家川回族自治县",
            value: "620525"
        } ], [ {
            label: "凉州区",
            value: "620602"
        }, {
            label: "民勤县",
            value: "620621"
        }, {
            label: "古浪县",
            value: "620622"
        }, {
            label: "天祝藏族自治县",
            value: "620623"
        } ], [ {
            label: "甘州区",
            value: "620702"
        }, {
            label: "肃南裕固族自治县",
            value: "620721"
        }, {
            label: "民乐县",
            value: "620722"
        }, {
            label: "临泽县",
            value: "620723"
        }, {
            label: "高台县",
            value: "620724"
        }, {
            label: "山丹县",
            value: "620725"
        } ], [ {
            label: "崆峒区",
            value: "620802"
        }, {
            label: "泾川县",
            value: "620821"
        }, {
            label: "灵台县",
            value: "620822"
        }, {
            label: "崇信县",
            value: "620823"
        }, {
            label: "华亭县",
            value: "620824"
        }, {
            label: "庄浪县",
            value: "620825"
        }, {
            label: "静宁县",
            value: "620826"
        }, {
            label: "平凉工业园区",
            value: "620871"
        } ], [ {
            label: "肃州区",
            value: "620902"
        }, {
            label: "金塔县",
            value: "620921"
        }, {
            label: "瓜州县",
            value: "620922"
        }, {
            label: "肃北蒙古族自治县",
            value: "620923"
        }, {
            label: "阿克塞哈萨克族自治县",
            value: "620924"
        }, {
            label: "玉门市",
            value: "620981"
        }, {
            label: "敦煌市",
            value: "620982"
        } ], [ {
            label: "西峰区",
            value: "621002"
        }, {
            label: "庆城县",
            value: "621021"
        }, {
            label: "环县",
            value: "621022"
        }, {
            label: "华池县",
            value: "621023"
        }, {
            label: "合水县",
            value: "621024"
        }, {
            label: "正宁县",
            value: "621025"
        }, {
            label: "宁县",
            value: "621026"
        }, {
            label: "镇原县",
            value: "621027"
        } ], [ {
            label: "安定区",
            value: "621102"
        }, {
            label: "通渭县",
            value: "621121"
        }, {
            label: "陇西县",
            value: "621122"
        }, {
            label: "渭源县",
            value: "621123"
        }, {
            label: "临洮县",
            value: "621124"
        }, {
            label: "漳县",
            value: "621125"
        }, {
            label: "岷县",
            value: "621126"
        } ], [ {
            label: "武都区",
            value: "621202"
        }, {
            label: "成县",
            value: "621221"
        }, {
            label: "文县",
            value: "621222"
        }, {
            label: "宕昌县",
            value: "621223"
        }, {
            label: "康县",
            value: "621224"
        }, {
            label: "西和县",
            value: "621225"
        }, {
            label: "礼县",
            value: "621226"
        }, {
            label: "徽县",
            value: "621227"
        }, {
            label: "两当县",
            value: "621228"
        } ], [ {
            label: "临夏市",
            value: "622901"
        }, {
            label: "临夏县",
            value: "622921"
        }, {
            label: "康乐县",
            value: "622922"
        }, {
            label: "永靖县",
            value: "622923"
        }, {
            label: "广河县",
            value: "622924"
        }, {
            label: "和政县",
            value: "622925"
        }, {
            label: "东乡族自治县",
            value: "622926"
        }, {
            label: "积石山保安族东乡族撒拉族自治县",
            value: "622927"
        } ], [ {
            label: "合作市",
            value: "623001"
        }, {
            label: "临潭县",
            value: "623021"
        }, {
            label: "卓尼县",
            value: "623022"
        }, {
            label: "舟曲县",
            value: "623023"
        }, {
            label: "迭部县",
            value: "623024"
        }, {
            label: "玛曲县",
            value: "623025"
        }, {
            label: "碌曲县",
            value: "623026"
        }, {
            label: "夏河县",
            value: "623027"
        } ] ], [ [ {
            label: "城东区",
            value: "630102"
        }, {
            label: "城中区",
            value: "630103"
        }, {
            label: "城西区",
            value: "630104"
        }, {
            label: "城北区",
            value: "630105"
        }, {
            label: "大通回族土族自治县",
            value: "630121"
        }, {
            label: "湟中县",
            value: "630122"
        }, {
            label: "湟源县",
            value: "630123"
        } ], [ {
            label: "乐都区",
            value: "630202"
        }, {
            label: "平安区",
            value: "630203"
        }, {
            label: "民和回族土族自治县",
            value: "630222"
        }, {
            label: "互助土族自治县",
            value: "630223"
        }, {
            label: "化隆回族自治县",
            value: "630224"
        }, {
            label: "循化撒拉族自治县",
            value: "630225"
        } ], [ {
            label: "门源回族自治县",
            value: "632221"
        }, {
            label: "祁连县",
            value: "632222"
        }, {
            label: "海晏县",
            value: "632223"
        }, {
            label: "刚察县",
            value: "632224"
        } ], [ {
            label: "同仁县",
            value: "632321"
        }, {
            label: "尖扎县",
            value: "632322"
        }, {
            label: "泽库县",
            value: "632323"
        }, {
            label: "河南蒙古族自治县",
            value: "632324"
        } ], [ {
            label: "共和县",
            value: "632521"
        }, {
            label: "同德县",
            value: "632522"
        }, {
            label: "贵德县",
            value: "632523"
        }, {
            label: "兴海县",
            value: "632524"
        }, {
            label: "贵南县",
            value: "632525"
        } ], [ {
            label: "玛沁县",
            value: "632621"
        }, {
            label: "班玛县",
            value: "632622"
        }, {
            label: "甘德县",
            value: "632623"
        }, {
            label: "达日县",
            value: "632624"
        }, {
            label: "久治县",
            value: "632625"
        }, {
            label: "玛多县",
            value: "632626"
        } ], [ {
            label: "玉树市",
            value: "632701"
        }, {
            label: "杂多县",
            value: "632722"
        }, {
            label: "称多县",
            value: "632723"
        }, {
            label: "治多县",
            value: "632724"
        }, {
            label: "囊谦县",
            value: "632725"
        }, {
            label: "曲麻莱县",
            value: "632726"
        } ], [ {
            label: "格尔木市",
            value: "632801"
        }, {
            label: "德令哈市",
            value: "632802"
        }, {
            label: "乌兰县",
            value: "632821"
        }, {
            label: "都兰县",
            value: "632822"
        }, {
            label: "天峻县",
            value: "632823"
        }, {
            label: "大柴旦行政委员会",
            value: "632857"
        }, {
            label: "冷湖行政委员会",
            value: "632858"
        }, {
            label: "茫崖行政委员会",
            value: "632859"
        } ] ], [ [ {
            label: "兴庆区",
            value: "640104"
        }, {
            label: "西夏区",
            value: "640105"
        }, {
            label: "金凤区",
            value: "640106"
        }, {
            label: "永宁县",
            value: "640121"
        }, {
            label: "贺兰县",
            value: "640122"
        }, {
            label: "灵武市",
            value: "640181"
        } ], [ {
            label: "大武口区",
            value: "640202"
        }, {
            label: "惠农区",
            value: "640205"
        }, {
            label: "平罗县",
            value: "640221"
        } ], [ {
            label: "利通区",
            value: "640302"
        }, {
            label: "红寺堡区",
            value: "640303"
        }, {
            label: "盐池县",
            value: "640323"
        }, {
            label: "同心县",
            value: "640324"
        }, {
            label: "青铜峡市",
            value: "640381"
        } ], [ {
            label: "原州区",
            value: "640402"
        }, {
            label: "西吉县",
            value: "640422"
        }, {
            label: "隆德县",
            value: "640423"
        }, {
            label: "泾源县",
            value: "640424"
        }, {
            label: "彭阳县",
            value: "640425"
        } ], [ {
            label: "沙坡头区",
            value: "640502"
        }, {
            label: "中宁县",
            value: "640521"
        }, {
            label: "海原县",
            value: "640522"
        } ] ], [ [ {
            label: "天山区",
            value: "650102"
        }, {
            label: "沙依巴克区",
            value: "650103"
        }, {
            label: "新市区",
            value: "650104"
        }, {
            label: "水磨沟区",
            value: "650105"
        }, {
            label: "头屯河区",
            value: "650106"
        }, {
            label: "达坂城区",
            value: "650107"
        }, {
            label: "米东区",
            value: "650109"
        }, {
            label: "乌鲁木齐县",
            value: "650121"
        }, {
            label: "乌鲁木齐经济技术开发区",
            value: "650171"
        }, {
            label: "乌鲁木齐高新技术产业开发区",
            value: "650172"
        } ], [ {
            label: "独山子区",
            value: "650202"
        }, {
            label: "克拉玛依区",
            value: "650203"
        }, {
            label: "白碱滩区",
            value: "650204"
        }, {
            label: "乌尔禾区",
            value: "650205"
        } ], [ {
            label: "高昌区",
            value: "650402"
        }, {
            label: "鄯善县",
            value: "650421"
        }, {
            label: "托克逊县",
            value: "650422"
        } ], [ {
            label: "伊州区",
            value: "650502"
        }, {
            label: "巴里坤哈萨克自治县",
            value: "650521"
        }, {
            label: "伊吾县",
            value: "650522"
        } ], [ {
            label: "昌吉市",
            value: "652301"
        }, {
            label: "阜康市",
            value: "652302"
        }, {
            label: "呼图壁县",
            value: "652323"
        }, {
            label: "玛纳斯县",
            value: "652324"
        }, {
            label: "奇台县",
            value: "652325"
        }, {
            label: "吉木萨尔县",
            value: "652327"
        }, {
            label: "木垒哈萨克自治县",
            value: "652328"
        } ], [ {
            label: "博乐市",
            value: "652701"
        }, {
            label: "阿拉山口市",
            value: "652702"
        }, {
            label: "精河县",
            value: "652722"
        }, {
            label: "温泉县",
            value: "652723"
        } ], [ {
            label: "库尔勒市",
            value: "652801"
        }, {
            label: "轮台县",
            value: "652822"
        }, {
            label: "尉犁县",
            value: "652823"
        }, {
            label: "若羌县",
            value: "652824"
        }, {
            label: "且末县",
            value: "652825"
        }, {
            label: "焉耆回族自治县",
            value: "652826"
        }, {
            label: "和静县",
            value: "652827"
        }, {
            label: "和硕县",
            value: "652828"
        }, {
            label: "博湖县",
            value: "652829"
        }, {
            label: "库尔勒经济技术开发区",
            value: "652871"
        } ], [ {
            label: "阿克苏市",
            value: "652901"
        }, {
            label: "温宿县",
            value: "652922"
        }, {
            label: "库车县",
            value: "652923"
        }, {
            label: "沙雅县",
            value: "652924"
        }, {
            label: "新和县",
            value: "652925"
        }, {
            label: "拜城县",
            value: "652926"
        }, {
            label: "乌什县",
            value: "652927"
        }, {
            label: "阿瓦提县",
            value: "652928"
        }, {
            label: "柯坪县",
            value: "652929"
        } ], [ {
            label: "阿图什市",
            value: "653001"
        }, {
            label: "阿克陶县",
            value: "653022"
        }, {
            label: "阿合奇县",
            value: "653023"
        }, {
            label: "乌恰县",
            value: "653024"
        } ], [ {
            label: "喀什市",
            value: "653101"
        }, {
            label: "疏附县",
            value: "653121"
        }, {
            label: "疏勒县",
            value: "653122"
        }, {
            label: "英吉沙县",
            value: "653123"
        }, {
            label: "泽普县",
            value: "653124"
        }, {
            label: "莎车县",
            value: "653125"
        }, {
            label: "叶城县",
            value: "653126"
        }, {
            label: "麦盖提县",
            value: "653127"
        }, {
            label: "岳普湖县",
            value: "653128"
        }, {
            label: "伽师县",
            value: "653129"
        }, {
            label: "巴楚县",
            value: "653130"
        }, {
            label: "塔什库尔干塔吉克自治县",
            value: "653131"
        } ], [ {
            label: "和田市",
            value: "653201"
        }, {
            label: "和田县",
            value: "653221"
        }, {
            label: "墨玉县",
            value: "653222"
        }, {
            label: "皮山县",
            value: "653223"
        }, {
            label: "洛浦县",
            value: "653224"
        }, {
            label: "策勒县",
            value: "653225"
        }, {
            label: "于田县",
            value: "653226"
        }, {
            label: "民丰县",
            value: "653227"
        } ], [ {
            label: "伊宁市",
            value: "654002"
        }, {
            label: "奎屯市",
            value: "654003"
        }, {
            label: "霍尔果斯市",
            value: "654004"
        }, {
            label: "伊宁县",
            value: "654021"
        }, {
            label: "察布查尔锡伯自治县",
            value: "654022"
        }, {
            label: "霍城县",
            value: "654023"
        }, {
            label: "巩留县",
            value: "654024"
        }, {
            label: "新源县",
            value: "654025"
        }, {
            label: "昭苏县",
            value: "654026"
        }, {
            label: "特克斯县",
            value: "654027"
        }, {
            label: "尼勒克县",
            value: "654028"
        } ], [ {
            label: "塔城市",
            value: "654201"
        }, {
            label: "乌苏市",
            value: "654202"
        }, {
            label: "额敏县",
            value: "654221"
        }, {
            label: "沙湾县",
            value: "654223"
        }, {
            label: "托里县",
            value: "654224"
        }, {
            label: "裕民县",
            value: "654225"
        }, {
            label: "和布克赛尔蒙古自治县",
            value: "654226"
        } ], [ {
            label: "阿勒泰市",
            value: "654301"
        }, {
            label: "布尔津县",
            value: "654321"
        }, {
            label: "富蕴县",
            value: "654322"
        }, {
            label: "福海县",
            value: "654323"
        }, {
            label: "哈巴河县",
            value: "654324"
        }, {
            label: "青河县",
            value: "654325"
        }, {
            label: "吉木乃县",
            value: "654326"
        } ], [ {
            label: "石河子市",
            value: "659001"
        }, {
            label: "阿拉尔市",
            value: "659002"
        }, {
            label: "图木舒克市",
            value: "659003"
        }, {
            label: "五家渠市",
            value: "659004"
        }, {
            label: "铁门关市",
            value: "659006"
        } ] ], [ [ {
            label: "台北",
            value: "660101"
        } ], [ {
            label: "高雄",
            value: "660201"
        } ], [ {
            label: "基隆",
            value: "660301"
        } ], [ {
            label: "台中",
            value: "660401"
        } ], [ {
            label: "台南",
            value: "660501"
        } ], [ {
            label: "新竹",
            value: "660601"
        } ], [ {
            label: "嘉义",
            value: "660701"
        } ], [ {
            label: "宜兰",
            value: "660801"
        } ], [ {
            label: "桃园",
            value: "660901"
        } ], [ {
            label: "苗栗",
            value: "661001"
        } ], [ {
            label: "彰化",
            value: "661101"
        } ], [ {
            label: "南投",
            value: "661201"
        } ], [ {
            label: "云林",
            value: "661301"
        } ], [ {
            label: "屏东",
            value: "661401"
        } ], [ {
            label: "台东",
            value: "661501"
        } ], [ {
            label: "花莲",
            value: "661601"
        } ], [ {
            label: "澎湖",
            value: "661701"
        } ] ], [ [ {
            label: "香港岛",
            value: "670101"
        } ], [ {
            label: "九龙",
            value: "670201"
        } ], [ {
            label: "新界",
            value: "670301"
        } ] ], [ [ {
            label: "澳门半岛",
            value: "680101"
        } ], [ {
            label: "氹仔岛",
            value: "680201"
        } ], [ {
            label: "路环岛",
            value: "680301"
        } ], [ {
            label: "路氹城",
            value: "680401"
        } ] ] ], u = t;
        l.default = u;
    },
    "6fe0": function(e, l, a) {},
    "8beb": function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = n(a("a1c0")), u = n(a("68af"));
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var r = "https";
        function o(e) {
            for (var l = {}, a = e.split(","), t = 0; t < a.length; t += 1) l[a[t]] = !0;
            return l;
        }
        var i = o("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), v = o("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), b = o("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
        function s(e) {
            return e.replace(/<\?xml.*\\?>\n/, "").replace(/<.*!doctype.*\\>\n/, "").replace(/<.*!DOCTYPE.*\\>\n/, "");
        }
        function c(e) {
            return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
        }
        function f(e, l, a) {
            e = s(e), e = c(e), e = t.default.strDiscode(e);
            var n = [], o = {
                nodes: [],
                images: [],
                imageUrls: []
            }, f = 0;
            return l.urls = o.imageUrls, (0, u.default)(e, {
                start: function(e, u, s) {
                    var c = {
                        node: "element",
                        tag: e
                    };
                    if (0 === n.length) c.index = f.toString(), f += 1; else {
                        var p = n[0];
                        void 0 === p.nodes && (p.nodes = []), c.index = "".concat(p.index, ".").concat(p.nodes.length);
                    }
                    if (i[e] ? c.tagType = "block" : v[e] ? c.tagType = "inline" : b[e] && (c.tagType = "closeSelf"), 
                    c.attr = u.reduce(function(e, l) {
                        var t = l.name, u = l.value;
                        return "class" === t && (a && console.dir(u), c.classStr = u), "style" === t && (a && console.dir(u), 
                        c.styleStr = u), u.match(/ /) && (u = u.split(" ")), e[t] ? Array.isArray(e[t]) ? e[t].push(u) : e[t] = [ e[t], u ] : e[t] = u, 
                        e;
                    }, {}), "img" === c.tag) {
                        c.imgIndex = o.images.length;
                        var h = c.attr.src;
                        h = t.default.urlToHttpUrl(h, r), c.attr.src = h || "", c.image = l, h && (o.images.push(c), 
                        o.imageUrls.push(h));
                    }
                    if ("a" === c.tag && (c.attr.href = c.attr.href || ""), "font" === c.tag) {
                        var d = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], g = {
                            color: "color",
                            face: "font-family",
                            size: "font-size"
                        };
                        c.attr.style || (c.attr.style = []), c.styleStr || (c.styleStr = ""), Object.keys(g).forEach(function(e) {
                            if (c.attr[e]) {
                                var l = "size" === e ? d[c.attr[e] - 1] : c.attr[e];
                                c.attr.style.push(g[e]), c.attr.style.push(l), c.styleStr += "".concat(g[e], ": ").concat(l, ";");
                            }
                        });
                    }
                    if ("source" === c.tag && (o.source = c.attr.src), s) {
                        var y = n[0] || o;
                        void 0 === y.nodes && (y.nodes = []), y.nodes.push(c);
                    } else n.unshift(c);
                },
                end: function(e) {
                    var l = n.shift();
                    if (l.tag !== e && a && console.error("invalid state: mismatch end tag"), "video" === l.tag && o.source && (l.attr.src = o.source, 
                    delete o.source), 0 === n.length) o.nodes.push(l); else {
                        var t = n[0];
                        void 0 === t.nodes && (t.nodes = []), t.nodes.push(l);
                    }
                },
                chars: function(e) {
                    var l = {
                        node: "text",
                        text: e.trim()
                    };
                    if (0 === n.length) l.index = f.toString(), f += 1, o.nodes.push(l); else {
                        var a = n[0];
                        void 0 === a.nodes && (a.nodes = []), l.index = "".concat(a.index, ".").concat(a.nodes.length), 
                        a.nodes.push(l);
                    }
                },
                comment: function(e) {
                    var l = {
                        node: "comment",
                        text: e
                    }, a = n[0];
                    void 0 === a.nodes && (a.nodes = []), a.nodes.push(l);
                }
            }), o;
        }
        var p = f;
        l.default = p;
    },
    "8f9b": function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = [ {
            label: "北京市",
            value: "11"
        }, {
            label: "天津市",
            value: "12"
        }, {
            label: "河北省",
            value: "13"
        }, {
            label: "山西省",
            value: "14"
        }, {
            label: "内蒙古自治区",
            value: "15"
        }, {
            label: "辽宁省",
            value: "21"
        }, {
            label: "吉林省",
            value: "22"
        }, {
            label: "黑龙江省",
            value: "23"
        }, {
            label: "上海市",
            value: "31"
        }, {
            label: "江苏省",
            value: "32"
        }, {
            label: "浙江省",
            value: "33"
        }, {
            label: "安徽省",
            value: "34"
        }, {
            label: "福建省",
            value: "35"
        }, {
            label: "江西省",
            value: "36"
        }, {
            label: "山东省",
            value: "37"
        }, {
            label: "河南省",
            value: "41"
        }, {
            label: "湖北省",
            value: "42"
        }, {
            label: "湖南省",
            value: "43"
        }, {
            label: "广东省",
            value: "44"
        }, {
            label: "广西壮族自治区",
            value: "45"
        }, {
            label: "海南省",
            value: "46"
        }, {
            label: "重庆市",
            value: "50"
        }, {
            label: "四川省",
            value: "51"
        }, {
            label: "贵州省",
            value: "52"
        }, {
            label: "云南省",
            value: "53"
        }, {
            label: "西藏自治区",
            value: "54"
        }, {
            label: "陕西省",
            value: "61"
        }, {
            label: "甘肃省",
            value: "62"
        }, {
            label: "青海省",
            value: "63"
        }, {
            label: "宁夏回族自治区",
            value: "64"
        }, {
            label: "新疆维吾尔自治区",
            value: "65"
        }, {
            label: "台湾",
            value: "66"
        }, {
            label: "香港",
            value: "67"
        }, {
            label: "澳门",
            value: "68"
        } ], u = t;
        l.default = u;
    },
    "96cf": function(e, l) {
        !function(l) {
            "use strict";
            var a, t = Object.prototype, u = t.hasOwnProperty, n = "function" === typeof Symbol ? Symbol : {}, r = n.iterator || "@@iterator", o = n.asyncIterator || "@@asyncIterator", i = n.toStringTag || "@@toStringTag", v = "object" === typeof e, b = l.regeneratorRuntime;
            if (b) v && (e.exports = b); else {
                b = l.regeneratorRuntime = v ? e.exports : {}, b.wrap = _;
                var s = "suspendedStart", c = "suspendedYield", f = "executing", p = "completed", h = {}, d = {};
                d[r] = function() {
                    return this;
                };
                var g = Object.getPrototypeOf, y = g && g(g(T([])));
                y && y !== t && u.call(y, r) && (d = y);
                var m = O.prototype = x.prototype = Object.create(d);
                A.prototype = m.constructor = O, O.constructor = A, O[i] = A.displayName = "GeneratorFunction", 
                b.isGeneratorFunction = function(e) {
                    var l = "function" === typeof e && e.constructor;
                    return !!l && (l === A || "GeneratorFunction" === (l.displayName || l.name));
                }, b.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, O) : (e.__proto__ = O, i in e || (e[i] = "GeneratorFunction")), 
                    e.prototype = Object.create(m), e;
                }, b.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, k(S.prototype), S.prototype[o] = function() {
                    return this;
                }, b.AsyncIterator = S, b.async = function(e, l, a, t) {
                    var u = new S(_(e, l, a, t));
                    return b.isGeneratorFunction(l) ? u : u.next().then(function(e) {
                        return e.done ? e.value : u.next();
                    });
                }, k(m), m[i] = "Generator", m[r] = function() {
                    return this;
                }, m.toString = function() {
                    return "[object Generator]";
                }, b.keys = function(e) {
                    var l = [];
                    for (var a in e) l.push(a);
                    return l.reverse(), function a() {
                        while (l.length) {
                            var t = l.pop();
                            if (t in e) return a.value = t, a.done = !1, a;
                        }
                        return a.done = !0, a;
                    };
                }, b.values = T, $.prototype = {
                    constructor: $,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = a, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = a, this.tryEntries.forEach(D), !e) for (var l in this) "t" === l.charAt(0) && u.call(this, l) && !isNaN(+l.slice(1)) && (this[l] = a);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0], l = e.completion;
                        if ("throw" === l.type) throw l.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var l = this;
                        function t(t, u) {
                            return o.type = "throw", o.arg = e, l.next = t, u && (l.method = "next", l.arg = a), 
                            !!u;
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n], o = r.completion;
                            if ("root" === r.tryLoc) return t("end");
                            if (r.tryLoc <= this.prev) {
                                var i = u.call(r, "catchLoc"), v = u.call(r, "finallyLoc");
                                if (i && v) {
                                    if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return t(r.finallyLoc);
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                } else {
                                    if (!v) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return t(r.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, l) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var t = this.tryEntries[a];
                            if (t.tryLoc <= this.prev && u.call(t, "finallyLoc") && this.prev < t.finallyLoc) {
                                var n = t;
                                break;
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= l && l <= n.finallyLoc && (n = null);
                        var r = n ? n.completion : {};
                        return r.type = e, r.arg = l, n ? (this.method = "next", this.next = n.finallyLoc, 
                        h) : this.complete(r);
                    },
                    complete: function(e, l) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                        this.method = "return", this.next = "end") : "normal" === e.type && l && (this.next = l), 
                        h;
                    },
                    finish: function(e) {
                        for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                            var a = this.tryEntries[l];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), D(a), h;
                        }
                    },
                    catch: function(e) {
                        for (var l = this.tryEntries.length - 1; l >= 0; --l) {
                            var a = this.tryEntries[l];
                            if (a.tryLoc === e) {
                                var t = a.completion;
                                if ("throw" === t.type) {
                                    var u = t.arg;
                                    D(a);
                                }
                                return u;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, l, t) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: l,
                            nextLoc: t
                        }, "next" === this.method && (this.arg = a), h;
                    }
                };
            }
            function _(e, l, a, t) {
                var u = l && l.prototype instanceof x ? l : x, n = Object.create(u.prototype), r = new $(t || []);
                return n._invoke = E(e, a, r), n;
            }
            function w(e, l, a) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(l, a)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            function x() {}
            function A() {}
            function O() {}
            function k(e) {
                [ "next", "throw", "return" ].forEach(function(l) {
                    e[l] = function(e) {
                        return this._invoke(l, e);
                    };
                });
            }
            function S(e) {
                function l(a, t, n, r) {
                    var o = w(e[a], e, t);
                    if ("throw" !== o.type) {
                        var i = o.arg, v = i.value;
                        return v && "object" === typeof v && u.call(v, "__await") ? Promise.resolve(v.__await).then(function(e) {
                            l("next", e, n, r);
                        }, function(e) {
                            l("throw", e, n, r);
                        }) : Promise.resolve(v).then(function(e) {
                            i.value = e, n(i);
                        }, function(e) {
                            return l("throw", e, n, r);
                        });
                    }
                    r(o.arg);
                }
                var a;
                function t(e, t) {
                    function u() {
                        return new Promise(function(a, u) {
                            l(e, t, a, u);
                        });
                    }
                    return a = a ? a.then(u, u) : u();
                }
                this._invoke = t;
            }
            function E(e, l, a) {
                var t = s;
                return function(u, n) {
                    if (t === f) throw new Error("Generator is already running");
                    if (t === p) {
                        if ("throw" === u) throw n;
                        return j();
                    }
                    a.method = u, a.arg = n;
                    while (1) {
                        var r = a.delegate;
                        if (r) {
                            var o = P(r, a);
                            if (o) {
                                if (o === h) continue;
                                return o;
                            }
                        }
                        if ("next" === a.method) a.sent = a._sent = a.arg; else if ("throw" === a.method) {
                            if (t === s) throw t = p, a.arg;
                            a.dispatchException(a.arg);
                        } else "return" === a.method && a.abrupt("return", a.arg);
                        t = f;
                        var i = w(e, l, a);
                        if ("normal" === i.type) {
                            if (t = a.done ? p : c, i.arg === h) continue;
                            return {
                                value: i.arg,
                                done: a.done
                            };
                        }
                        "throw" === i.type && (t = p, a.method = "throw", a.arg = i.arg);
                    }
                };
            }
            function P(e, l) {
                var t = e.iterator[l.method];
                if (t === a) {
                    if (l.delegate = null, "throw" === l.method) {
                        if (e.iterator.return && (l.method = "return", l.arg = a, P(e, l), "throw" === l.method)) return h;
                        l.method = "throw", l.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return h;
                }
                var u = w(t, e.iterator, l.arg);
                if ("throw" === u.type) return l.method = "throw", l.arg = u.arg, l.delegate = null, 
                h;
                var n = u.arg;
                return n ? n.done ? (l[e.resultName] = n.value, l.next = e.nextLoc, "return" !== l.method && (l.method = "next", 
                l.arg = a), l.delegate = null, h) : n : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), 
                l.delegate = null, h);
            }
            function C(e) {
                var l = {
                    tryLoc: e[0]
                };
                1 in e && (l.catchLoc = e[1]), 2 in e && (l.finallyLoc = e[2], l.afterLoc = e[3]), 
                this.tryEntries.push(l);
            }
            function D(e) {
                var l = e.completion || {};
                l.type = "normal", delete l.arg, e.completion = l;
            }
            function $(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(C, this), this.reset(!0);
            }
            function T(e) {
                if (e) {
                    var l = e[r];
                    if (l) return l.call(e);
                    if ("function" === typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var t = -1, n = function l() {
                            while (++t < e.length) if (u.call(e, t)) return l.value = e[t], l.done = !1, l;
                            return l.value = a, l.done = !0, l;
                        };
                        return n.next = n;
                    }
                }
                return {
                    next: j
                };
            }
            function j() {
                return {
                    value: a,
                    done: !0
                };
            }
        }(function() {
            return this || "object" === typeof self && self;
        }() || Function("return this")());
    },
    a1c0: function(e, l, a) {
        "use strict";
        function t(e) {
            return e = e.replace(/&forall;/g, "∀"), e = e.replace(/&part;/g, "∂"), e = e.replace(/&exist;/g, "∃"), 
            e = e.replace(/&empty;/g, "∅"), e = e.replace(/&nabla;/g, "∇"), e = e.replace(/&isin;/g, "∈"), 
            e = e.replace(/&notin;/g, "∉"), e = e.replace(/&ni;/g, "∋"), e = e.replace(/&prod;/g, "∏"), 
            e = e.replace(/&sum;/g, "∑"), e = e.replace(/&minus;/g, "−"), e = e.replace(/&lowast;/g, "∗"), 
            e = e.replace(/&radic;/g, "√"), e = e.replace(/&prop;/g, "∝"), e = e.replace(/&infin;/g, "∞"), 
            e = e.replace(/&ang;/g, "∠"), e = e.replace(/&and;/g, "∧"), e = e.replace(/&or;/g, "∨"), 
            e = e.replace(/&cap;/g, "∩"), e = e.replace(/&cup;/g, "∪"), e = e.replace(/&int;/g, "∫"), 
            e = e.replace(/&there4;/g, "∴"), e = e.replace(/&sim;/g, "∼"), e = e.replace(/&cong;/g, "≅"), 
            e = e.replace(/&asymp;/g, "≈"), e = e.replace(/&ne;/g, "≠"), e = e.replace(/&le;/g, "≤"), 
            e = e.replace(/&ge;/g, "≥"), e = e.replace(/&sub;/g, "⊂"), e = e.replace(/&sup;/g, "⊃"), 
            e = e.replace(/&nsub;/g, "⊄"), e = e.replace(/&sube;/g, "⊆"), e = e.replace(/&supe;/g, "⊇"), 
            e = e.replace(/&oplus;/g, "⊕"), e = e.replace(/&otimes;/g, "⊗"), e = e.replace(/&perp;/g, "⊥"), 
            e = e.replace(/&sdot;/g, "⋅"), e;
        }
        function u(e) {
            return e = e.replace(/&Alpha;/g, "Α"), e = e.replace(/&Beta;/g, "Β"), e = e.replace(/&Gamma;/g, "Γ"), 
            e = e.replace(/&Delta;/g, "Δ"), e = e.replace(/&Epsilon;/g, "Ε"), e = e.replace(/&Zeta;/g, "Ζ"), 
            e = e.replace(/&Eta;/g, "Η"), e = e.replace(/&Theta;/g, "Θ"), e = e.replace(/&Iota;/g, "Ι"), 
            e = e.replace(/&Kappa;/g, "Κ"), e = e.replace(/&Lambda;/g, "Λ"), e = e.replace(/&Mu;/g, "Μ"), 
            e = e.replace(/&Nu;/g, "Ν"), e = e.replace(/&Xi;/g, "Ν"), e = e.replace(/&Omicron;/g, "Ο"), 
            e = e.replace(/&Pi;/g, "Π"), e = e.replace(/&Rho;/g, "Ρ"), e = e.replace(/&Sigma;/g, "Σ"), 
            e = e.replace(/&Tau;/g, "Τ"), e = e.replace(/&Upsilon;/g, "Υ"), e = e.replace(/&Phi;/g, "Φ"), 
            e = e.replace(/&Chi;/g, "Χ"), e = e.replace(/&Psi;/g, "Ψ"), e = e.replace(/&Omega;/g, "Ω"), 
            e = e.replace(/&alpha;/g, "α"), e = e.replace(/&beta;/g, "β"), e = e.replace(/&gamma;/g, "γ"), 
            e = e.replace(/&delta;/g, "δ"), e = e.replace(/&epsilon;/g, "ε"), e = e.replace(/&zeta;/g, "ζ"), 
            e = e.replace(/&eta;/g, "η"), e = e.replace(/&theta;/g, "θ"), e = e.replace(/&iota;/g, "ι"), 
            e = e.replace(/&kappa;/g, "κ"), e = e.replace(/&lambda;/g, "λ"), e = e.replace(/&mu;/g, "μ"), 
            e = e.replace(/&nu;/g, "ν"), e = e.replace(/&xi;/g, "ξ"), e = e.replace(/&omicron;/g, "ο"), 
            e = e.replace(/&pi;/g, "π"), e = e.replace(/&rho;/g, "ρ"), e = e.replace(/&sigmaf;/g, "ς"), 
            e = e.replace(/&sigma;/g, "σ"), e = e.replace(/&tau;/g, "τ"), e = e.replace(/&upsilon;/g, "υ"), 
            e = e.replace(/&phi;/g, "φ"), e = e.replace(/&chi;/g, "χ"), e = e.replace(/&psi;/g, "ψ"), 
            e = e.replace(/&omega;/g, "ω"), e = e.replace(/&thetasym;/g, "ϑ"), e = e.replace(/&upsih;/g, "ϒ"), 
            e = e.replace(/&piv;/g, "ϖ"), e = e.replace(/&middot;/g, "·"), e;
        }
        function n(e) {
            return e = e.replace(/&nbsp;/g, " "), e = e.replace(/&quot;/g, "'"), e = e.replace(/&amp;/g, "&"), 
            e = e.replace(/&lt;/g, "<"), e = e.replace(/&gt;/g, ">"), e = e.replace(/&#8226;/g, "•"), 
            e;
        }
        function r(e) {
            return e = e.replace(/&OElig;/g, "Œ"), e = e.replace(/&oelig;/g, "œ"), e = e.replace(/&Scaron;/g, "Š"), 
            e = e.replace(/&scaron;/g, "š"), e = e.replace(/&Yuml;/g, "Ÿ"), e = e.replace(/&fnof;/g, "ƒ"), 
            e = e.replace(/&circ;/g, "ˆ"), e = e.replace(/&tilde;/g, "˜"), e = e.replace(/&ensp;/g, ""), 
            e = e.replace(/&emsp;/g, ""), e = e.replace(/&thinsp;/g, ""), e = e.replace(/&zwnj;/g, ""), 
            e = e.replace(/&zwj;/g, ""), e = e.replace(/&lrm;/g, ""), e = e.replace(/&rlm;/g, ""), 
            e = e.replace(/&ndash;/g, "–"), e = e.replace(/&mdash;/g, "—"), e = e.replace(/&lsquo;/g, "‘"), 
            e = e.replace(/&rsquo;/g, "’"), e = e.replace(/&sbquo;/g, "‚"), e = e.replace(/&ldquo;/g, "“"), 
            e = e.replace(/&rdquo;/g, "”"), e = e.replace(/&bdquo;/g, "„"), e = e.replace(/&dagger;/g, "†"), 
            e = e.replace(/&Dagger;/g, "‡"), e = e.replace(/&bull;/g, "•"), e = e.replace(/&hellip;/g, "…"), 
            e = e.replace(/&permil;/g, "‰"), e = e.replace(/&prime;/g, "′"), e = e.replace(/&Prime;/g, "″"), 
            e = e.replace(/&lsaquo;/g, "‹"), e = e.replace(/&rsaquo;/g, "›"), e = e.replace(/&oline;/g, "‾"), 
            e = e.replace(/&euro;/g, "€"), e = e.replace(/&trade;/g, "™"), e = e.replace(/&larr;/g, "←"), 
            e = e.replace(/&uarr;/g, "↑"), e = e.replace(/&rarr;/g, "→"), e = e.replace(/&darr;/g, "↓"), 
            e = e.replace(/&harr;/g, "↔"), e = e.replace(/&crarr;/g, "↵"), e = e.replace(/&lceil;/g, "⌈"), 
            e = e.replace(/&rceil;/g, "⌉"), e = e.replace(/&lfloor;/g, "⌊"), e = e.replace(/&rfloor;/g, "⌋"), 
            e = e.replace(/&loz;/g, "◊"), e = e.replace(/&spades;/g, "♠"), e = e.replace(/&clubs;/g, "♣"), 
            e = e.replace(/&hearts;/g, "♥"), e = e.replace(/&diams;/g, "♦"), e = e.replace(/&#39;/g, "'"), 
            e;
        }
        function o(e) {
            return e = t(e), e = u(e), e = n(e), e = r(e), e;
        }
        function i(e, l) {
            var a = new RegExp("^//"), t = a.test(e);
            return t && (e = "".concat(l, ":").concat(e)), e;
        }
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var v = {
            strDiscode: o,
            urlToHttpUrl: i
        };
        l.default = v;
    },
    a34a: function(e, l, a) {
        e.exports = a("bbdd");
    },
    a3d0: function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = function(e) {
            return e < 10 ? "0" + e : e + "";
        }, u = {
            date: {
                init: function(e, l) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "date", u = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0, r = arguments.length > 5 ? arguments[5] : void 0, o = arguments.length > 6 ? arguments[6] : void 0, i = new Date(), v = [], b = new Date(e.toString()), s = new Date(l.toString());
                    e > l && (b = new Date(l.toString()), s = new Date(e.toString()));
                    var c = b.getFullYear(), f = (b.getMonth(), s.getFullYear()), p = [], h = [], d = [], g = [], y = [], m = [], _ = [], w = [], x = r ? 1 * n[1] : n[1] + 1, A = i.getFullYear(), O = i.getMonth() + 1, k = i.getDate(), S = new Date(c, x, 0).getDate();
                    switch (a) {
                      case "half":
                      case "date":
                      case "yearMonth":
                        var E = n[0], P = n[1];
                        if (o) {
                            for (var C = c; C <= A; C++) p.push(C + "");
                            if (E == A) for (var D = 1; D <= O; D++) h.push(t(D)); else for (var $ = 1; $ <= 12; $++) h.push(t($));
                            if (P == O) for (var T = 1; T <= k; T++) d.push(t(T)); else for (var j = 1; j <= S; j++) d.push(t(j));
                        } else {
                            for (var R = c; R <= f; R++) p.push(R + "");
                            for (var B = 1; B <= 12; B++) h.push(t(B));
                            for (var L = 1; L <= S; L++) d.push(t(L));
                        }
                        break;

                      default:
                        for (var M = c; M <= f; M++) p.push(M + "");
                        for (var I = 1; I <= 12; I++) h.push(t(I));
                        for (var N = 1; N <= S; N++) d.push(t(N));
                        break;
                    }
                    for (var F = 0; F < 24; F++) g.push(t(F));
                    for (var z = 0; z < 60; z += 1 * u) y.push(t(z));
                    for (var U = 0; U < 60; U++) m.push(t(U));
                    switch (r && (w = [ p.indexOf(n[0]), h.indexOf(n[1]), d.indexOf(n[2]), g.indexOf(n[3]), -1 == y.indexOf(n[4]) ? 0 : y.indexOf(n[4]), m.indexOf(n[5]) ]), 
                    a) {
                      case "range":
                        return r ? (v = [ w[0], w[1], w[2], 0, w[0], w[1], w[2] ], {
                            years: p,
                            months: h,
                            days: d,
                            defaultVal: v
                        }) : {
                            years: p,
                            months: h,
                            days: d
                        };

                      case "date":
                        return r ? (v = [ w[0], w[1], w[2] ], {
                            years: p,
                            months: h,
                            days: d,
                            defaultVal: v
                        }) : (v = [ -1 == p.indexOf(n[0]) ? 0 : p.indexOf(n[0]), -1 == h.indexOf(n[1]) ? 0 : h.indexOf(n[1]), -1 == d.indexOf(n[2]) ? 0 : d.indexOf(n[2]) ], 
                        {
                            years: p,
                            months: h,
                            days: d,
                            defaultVal: v
                        });

                      case "half":
                        if (_ = [ {
                            label: "上午",
                            value: 0
                        }, {
                            label: "下午",
                            value: 1
                        } ], r) return v = [ w[0], w[1], w[2], w[3] ], {
                            years: p,
                            months: h,
                            days: d,
                            areas: _,
                            defaultVal: v
                        };
                        var H = 0;
                        return _.map(function(e, l) {
                            e.label == n[3] && (H = e.value);
                        }), v = [ -1 == p.indexOf(n[0]) ? 0 : p.indexOf(n[0]), -1 == h.indexOf(n[1]) ? 0 : h.indexOf(n[1]), -1 == d.indexOf(n[2]) ? 0 : d.indexOf(n[2]), H ], 
                        {
                            years: p,
                            months: h,
                            days: d,
                            areas: _,
                            defaultVal: v
                        };

                      case "yearMonth":
                        return r ? (v = [ w[0], w[1] ], {
                            years: p,
                            months: h,
                            defaultVal: v
                        }) : (v = [ -1 == p.indexOf(n[0]) ? 0 : p.indexOf(n[0]), -1 == h.indexOf(n[1]) ? 0 : h.indexOf(n[1]) ], 
                        {
                            years: p,
                            months: h,
                            defaultVal: v
                        });

                      case "dateTime":
                        return v = r ? w : [ -1 == p.indexOf(n[0]) ? 0 : p.indexOf(n[0]), -1 == h.indexOf(n[1]) ? 0 : h.indexOf(n[1]), -1 == d.indexOf(n[2]) ? 0 : d.indexOf(n[2]), -1 == g.indexOf(n[3]) ? 0 : g.indexOf(n[3]), -1 == y.indexOf(n[4]) ? 0 : y.indexOf(n[4]), -1 == m.indexOf(n[5]) ? 0 : m.indexOf(n[5]) ], 
                        {
                            years: p,
                            months: h,
                            days: d,
                            hours: g,
                            minutes: y,
                            seconds: m,
                            defaultVal: v
                        };

                      case "time":
                        return v = r ? [ w[3], w[4], w[5] ] : [ -1 == g.indexOf(n[0]) ? 0 : g.indexOf(n[0]), -1 == y.indexOf(n[1]) ? 0 : y.indexOf(n[1]), -1 == m.indexOf(n[2]) ? 0 : m.indexOf(n[2]) ], 
                        {
                            hours: g,
                            minutes: y,
                            seconds: m,
                            defaultVal: v
                        };
                    }
                },
                initMonths: function(e, l) {
                    var a = new Date(), u = a.getFullYear(), n = a.getMonth() + 1, r = (a.getDate(), 
                    u == e), o = [];
                    if (l) if (r) for (var i = 1; i <= n; i++) o.push(t(i)); else for (var v = 1; v <= 12; v++) o.push(t(v)); else for (var b = 1; b <= 12; b++) o.push(t(b));
                    return o;
                },
                initDays: function(e, l, a) {
                    var u = new Date(), n = u.getFullYear(), r = u.getMonth() + 1, o = u.getDate(), i = n == e && r == l, v = new Date(e, l, 0).getDate(), b = [];
                    if (i && a) for (var s = 1; s <= o; s++) b.push(t(s)); else for (var c = 1; c <= v; c++) b.push(t(c));
                    return b;
                }
            },
            limitHour: {
                init: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7, l = arguments.length > 1 ? arguments[1] : void 0, a = new Date(), u = [], n = [], r = [], o = new Date().getHours(), i = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ], v = [], b = 0, s = 0, c = 0, f = 0; f < e; f++) {
                        var p = void 0, h = void 0, d = void 0, g = void 0;
                        p = a.getFullYear(), h = t(a.getMonth() + 1), d = t(a.getDate()), g = i[a.getDay()];
                        var y = "";
                        switch (f) {
                          case 0:
                            y = "今天";
                            break;

                          case 1:
                            y = "明天";
                            break;

                          case 2:
                            y = "后天";
                            break;

                          default:
                            y = h + "月" + d + "日 " + g;
                            break;
                        }
                        u.push({
                            label: y,
                            value: p + "-" + h + "-" + d,
                            today: 0 == f
                        }), a.setDate(a.getDate() + 1);
                    }
                    n = o > 12 ? [ {
                        label: "下午",
                        value: 1
                    } ] : [ {
                        label: "上午",
                        value: 0
                    }, {
                        label: "下午",
                        value: 1
                    } ];
                    for (var m = o > 12 ? o - 12 : o; m <= 12; m++) r.push({
                        label: t(m),
                        value: t(o > 12 ? m + 12 : m)
                    });
                    return u.map(function(e, a) {
                        e.label == l[0] && (b = a);
                    }), 0 != b && (n = this.initAreas(u[b]), r = this.initHours(u[b], n[s])), n.map(function(e, a) {
                        e.label == l[1] && (s = a);
                    }), r.map(function(e, a) {
                        e.label == l[2] && (c = a);
                    }), v = [ b, s, c ], {
                        date: u,
                        areas: n,
                        hours: r,
                        defaultVal: v
                    };
                },
                initAreas: function(e) {
                    var l = [], a = new Date().getHours();
                    return l = e.today && a > 12 ? [ {
                        label: "下午",
                        value: 1
                    } ] : [ {
                        label: "上午",
                        value: 0
                    }, {
                        label: "下午",
                        value: 1
                    } ], l;
                },
                initHours: function(e, l) {
                    var a = [], u = new Date().getHours();
                    if (e.today) if (1 == l.value && u <= 12) for (var n = 1; n <= 12; n++) a.push({
                        label: t(n),
                        value: t(1 == l.value ? n + 12 : n)
                    }); else for (var r = u > 12 ? u - 12 : u; r <= 12; r++) a.push({
                        label: t(r),
                        value: t(1 == l.value ? r + 12 : r)
                    }); else for (var o = 1; o <= 12; o++) a.push({
                        label: t(o),
                        value: t(1 == l.value ? o + 12 : o)
                    });
                    return a;
                }
            },
            limit: {
                init: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 30, r = arguments.length > 5 ? arguments[5] : void 0, o = new Date(), i = new Date(new Date().getTime() + 60 * n * 1e3), v = [], b = [], s = [], c = i.getHours(), f = Math.floor(i.getMinutes() / u) * u, p = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ], h = 0, d = 0, g = 0, y = [], m = 0; m < e; m++) {
                        var _ = void 0, w = void 0, x = void 0, A = void 0;
                        _ = o.getFullYear(), w = t(o.getMonth() + 1), x = t(o.getDate()), A = p[o.getDay()];
                        var O = "";
                        switch (m) {
                          case 0:
                            O = "今天";
                            break;

                          case 1:
                            O = "明天";
                            break;

                          case 2:
                            O = "后天";
                            break;

                          default:
                            O = w + "月" + x + "日 " + A;
                            break;
                        }
                        v.push({
                            label: O,
                            value: _ + "-" + w + "-" + x,
                            flag: 0 == m
                        }), o.setDate(o.getDate() + 1);
                    }
                    c < l && (c = l), c > a && (c = a);
                    for (var k = 1 * c; k <= 1 * a; k++) b.push({
                        label: t(k),
                        value: t(k),
                        flag: k == c
                    });
                    for (var S = f; S < 60; S += 1 * u) s.push({
                        label: t(S),
                        value: t(S)
                    });
                    return v.map(function(e, l) {
                        e.label == r[0] && (h = l);
                    }), 0 != h && (b = this.initHours(l = 8, a = 20, u = 1, n = 30, v[h].value)), b.map(function(e, l) {
                        e.label == r[1] && (d = l);
                    }), s.map(function(e, l) {
                        e.label == r[2] && (g = l);
                    }), y = [ h, d, g ], {
                        date: v,
                        hours: b,
                        minutes: s,
                        defaultVal: y
                    };
                },
                initHours: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, a = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 
                    arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30), u = arguments.length > 4 ? arguments[4] : void 0, n = [], r = u.split("-"), o = new Date(), i = o.getFullYear(), v = o.getMonth() + 1, b = o.getDate(), s = new Date(new Date().getTime() + 60 * a * 1e3), c = s.getHours(), f = i == r[0] && v == r[1] && b == r[2];
                    if (c > l && (c = l), f) for (var p = 1 * c; p <= 1 * l; p++) n.push({
                        label: t(p),
                        value: t(p),
                        flag: p == c
                    }); else for (var h = 1 * e; h <= 1 * l; h++) n.push({
                        label: t(h),
                        value: t(h),
                        flag: !1
                    });
                    return n;
                },
                initMinutes: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30, a = arguments.length > 4 ? arguments[4] : void 0, u = arguments.length > 5 ? arguments[5] : void 0, n = [], r = new Date(new Date().getTime() + 60 * l * 1e3), o = a.split("-"), i = new Date(), v = i.getFullYear(), b = i.getMonth() + 1, s = i.getDate(), c = r.getHours(), f = Math.floor(r.getMinutes() / e) * e, p = v == o[0] && b == o[1] && s == o[2];
                    if (p) if (u == c) for (var h = f; h < 60; h += 1 * e) n.push({
                        label: t(h),
                        value: t(h)
                    }); else for (var d = 0; d < 60; d += 1 * e) n.push({
                        label: t(d),
                        value: t(d)
                    }); else for (var g = 0; g < 60; g += 1 * e) n.push({
                        label: t(g),
                        value: t(g)
                    });
                    return n;
                }
            },
            range: {
                init: function(e, l, a, u) {
                    new Date();
                    var n = [], r = new Date(e.toString()), o = new Date(l.toString());
                    e > l && (r = new Date(l.toString()), o = new Date(e.toString()));
                    for (var i = r.getFullYear(), v = (r.getMonth(), o.getFullYear()), b = [], s = [], c = [], f = [], p = [], h = [], d = u ? 1 * a[1] : a[1] + 1, g = new Date(i, d, 0).getDate(), y = i; y <= v; y++) b.push(y + "");
                    for (var m = 1; m <= 12; m++) s.push(t(m));
                    for (var _ = 1; _ <= g; _++) c.push(t(_));
                    for (var w = i; w <= v; w++) f.push(w + "");
                    for (var x = 1; x <= 12; x++) p.push(t(x));
                    for (var A = 1; A <= g; A++) h.push(t(A));
                    return n = [ -1 == b.indexOf(a[0]) ? 0 : b.indexOf(a[0]), -1 == s.indexOf(a[1]) ? 0 : s.indexOf(a[1]), -1 == c.indexOf(a[2]) ? 0 : c.indexOf(a[2]), 0, -1 == f.indexOf(a[4]) ? 0 : f.indexOf(a[4]), -1 == p.indexOf(a[5]) ? 0 : p.indexOf(a[5]), -1 == h.indexOf(a[6]) ? 0 : h.indexOf(a[6]) ], 
                    {
                        fyears: b,
                        fmonths: s,
                        fdays: c,
                        tyears: f,
                        tmonths: p,
                        tdays: h,
                        defaultVal: n
                    };
                },
                initDays: function(e, l) {
                    for (var a = new Date(e, l, 0).getDate(), u = [], n = 1; n <= a; n++) u.push(t(n));
                    return u;
                }
            }
        }, n = u;
        l.default = n;
    },
    b1b6: function(e, l, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = l.payRequest = l.updateFile = l.post = l.get = void 0;
            var t = n(a("cc08")), u = n(a("16c3"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function r(e) {
                for (var l = 1; l < arguments.length; l++) {
                    var a = null != arguments[l] ? arguments[l] : {}, t = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                    }))), t.forEach(function(l) {
                        o(e, l, a[l]);
                    });
                }
                return e;
            }
            function o(e, l, a) {
                return l in e ? Object.defineProperty(e, l, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[l] = a, e;
            }
            function i(e, l) {
                if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function");
            }
            function v(e, l) {
                for (var a = 0; a < l.length; a++) {
                    var t = l[a];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(e, t.key, t);
                }
            }
            function b(e, l, a) {
                return l && v(e.prototype, l), a && v(e, a), e;
            }
            var s = u.default.name, c = u.default.version, f = u.default.uniacid, p = u.default.siteroot, h = {}, d = function() {
                function l(e, a, t, u, n, r) {
                    return i(this, l), this.initRequestInfo(e, a, u, n), h[this.hash] ? this : this.getRequest(t, n, r);
                }
                return b(l, [ {
                    key: "initRequestInfo",
                    value: function(e, a, t, u) {
                        var n = {
                            i: f,
                            m: s,
                            v: c,
                            from: "wxapp",
                            c: "entry",
                            a: "wxapp",
                            do: e,
                            platForm: getApp().platForm
                        };
                        this.data = Object.assign(n, a), this.hash = u ? l.hashCode(r({}, this.data, {
                            file: u
                        })) : l.hashCode(r({}, this.data)), this.header = Object.assign({
                            "Content-Type": "application/json"
                        }, t), h[this.hash] = void 0 !== h[this.hash];
                    }
                }, {
                    key: "getRequest",
                    value: function(l, a, t) {
                        var u = this;
                        return t = t || "file_upload", new Promise(function(n, r) {
                            var o = u;
                            a ? e.uploadFile({
                                url: p,
                                filePath: a,
                                name: t,
                                formData: o.data,
                                success: function(e) {
                                    o.handlerSuccess(e, n, r);
                                },
                                fail: function(e) {
                                    console.log(e);
                                }
                            }) : e.request({
                                url: p,
                                data: u.data,
                                method: l,
                                header: u.header,
                                dataType: "text",
                                success: function(e) {
                                    o.handlerSuccess(e, n, r);
                                },
                                fail: function(l) {
                                    e.showToast({
                                        title: l.errMsg,
                                        icon: "none"
                                    }), delete h[o.hash], r(l);
                                }
                            });
                        });
                    }
                }, {
                    key: "handlerSuccess",
                    value: function(a, t, u) {
                        if (200 === a.statusCode) {
                            var n = null;
                            try {
                                n = l.decrypt(a.data), n = JSON.parse(n);
                            } catch (r) {
                                n = JSON.parse(a.data);
                            }
                            200 === n.code ? (t(n), "function" === typeof h[this.hash] && h[this.hash](n)) : 404 === n.code ? (h = [], 
                            e.showToast({
                                title: n.msg,
                                icon: "none"
                            }), e.reLaunch({
                                url: "/yb_shopv2/pages/null-page/null-page"
                            })) : 301 === n.code ? (e.hideLoading(), e.showModal({
                                content: n.msg,
                                showCancel: !1,
                                confirmText: "点击返回",
                                confirmColor: "#333",
                                success: function(l) {
                                    l.confirm && e.navigateBack();
                                }
                            })) : (console.log(n, "出现错误的请求数据"), e.hideLoading(), e.showToast({
                                title: n.msg,
                                icon: "none"
                            }), u(n));
                        } else u(a);
                        delete h[this.hash];
                    }
                }, {
                    key: "then",
                    value: function(e) {
                        h[this.hash] = e;
                    }
                } ], [ {
                    key: "decrypt",
                    value: function(e) {
                        var l = p.replace(/^https:\/\/|\/\/|\/app\/index.php|^http:\/\//g, ""), a = "";
                        return l = t.default.MD5(l).toString().substr(7, 16), a = t.default.MD5(f).toString().substr(3, 16), 
                        l = t.default.enc.Utf8.parse(l), a = t.default.enc.Utf8.parse(a), t.default.AES.decrypt(e, l, {
                            iv: a,
                            mode: t.default.mode.CBC,
                            padding: t.default.pad.Pkcs7
                        }).toString(t.default.enc.Utf8);
                    }
                }, {
                    key: "hashCode",
                    value: function(e) {
                        var l = function(e) {
                            return e > 2147483647 || e < -2147483648 ? 4294967295 & e : e;
                        }, a = 0, t = "";
                        for (var u in e) e.hasOwnProperty(u) && (t += u + e[u]);
                        return t ? (Array.prototype.forEach.call(t, function(e, u) {
                            a = 31 * a + t.charCodeAt(u), a = l(a);
                        }), a) : a;
                    }
                } ]), l;
            }(), g = function(e, l, a) {
                return new d(e, l, "get", a);
            };
            l.get = g;
            var y = function(e, l, a) {
                return new d(e, l, "post", a);
            };
            l.post = y;
            var m = function(e, l, a, t, u) {
                return new d(e, l, "file", u, a);
            };
            l.updateFile = m;
            var _ = function(l) {
                console.log(l, "支付支付支付支付支付支付支付支付支付支付支付支付支付支付支付支付支付支付支付支付支付");
                var a = l.order_id;
                return delete l.order_id, 0 === l.is_pay ? (e.redirectTo({
                    url: "/yb_shopv2/native/all/index?type=pay_result&order_id=".concat(a)
                }), setTimeout(function() {
                    e.showToast({
                        title: "支付成功！"
                    });
                }, 300), Promise.resolve()) : new d("Pay_orderPay", l, "get").then(function(l) {
                    if (200 === l.code) {
                        var t = {};
                        return t = {
                            timeStamp: l.info.timeStamp,
                            nonceStr: l.info.nonceStr,
                            package: l.info.package,
                            signType: l.info.signType,
                            paySign: l.info.paySign
                        }, console.log(t), new Promise(function(l, u) {
                            e.requestPayment(r({}, t, {
                                success: function(t) {
                                    console.log(t, "支付结果支付结果支付结果支付结果支付结果支付结果支付结果支付结果支付结果支付结果支付结果支付结果支付结果"), e.showToast({
                                        title: "支付成功！"
                                    }), e.redirectTo({
                                        url: "/yb_shopv2/native/all/index?type=pay_result&order_id=".concat(a)
                                    }), l(t);
                                },
                                fail: function(l) {
                                    console.log(l, "支付出错支付出错支付出错支付出错支付出错支付出错支付出错支付出错支付出错支付出错支付出错支付出错支付出错"), e.showModal({
                                        content: "支付失败",
                                        showCancel: !1,
                                        success: function(l) {
                                            e.redirectTo({
                                                url: "/yb_shopv2/native/all/index?type=mine_order&tab=1"
                                            });
                                        }
                                    }), u();
                                }
                            }));
                        });
                    }
                    return e.showModal({
                        content: "支付失败",
                        showCancel: !1,
                        success: function(l) {
                            e.redirectTo({
                                url: "/yb_shopv2/native/all/index?type=mine_order&tab=1"
                            });
                        }
                    }), Promise.reject();
                });
            };
            l.payRequest = _;
            var w = d;
            l.default = w;
        }).call(this, a("543d")["default"]);
    },
    bbdd: function(e, l, a) {
        var t = function() {
            return this || "object" === typeof self && self;
        }() || Function("return this")(), u = t.regeneratorRuntime && Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime") >= 0, n = u && t.regeneratorRuntime;
        if (t.regeneratorRuntime = void 0, e.exports = a("96cf"), u) t.regeneratorRuntime = n; else try {
            delete t.regeneratorRuntime;
        } catch (r) {
            t.regeneratorRuntime = void 0;
        }
    },
    c8ba: function(e, l) {
        var a;
        a = function() {
            return this;
        }();
        try {
            a = a || new Function("return this")();
        } catch (t) {
            "object" === typeof window && (a = window);
        }
        e.exports = a;
    },
    c8bc: function(e, l, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = {
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {
                                id: ""
                            };
                        }
                    }
                },
                data: function() {
                    return {
                        anima: "",
                        anima_back: "",
                        auto_list: [ "article", "product", "services", "images", "recruit", "vote" ]
                    };
                },
                watch: {
                    item: {
                        handler: function() {
                            if (this.auto_list.indexOf(this.type) >= 0) {
                                this.item.data_type && "" !== this.item.data_type || (this.list = this.item.list);
                                var e = [];
                                if (console.log("type: ", this.item.type, " data_type: ", this.item.data_type), 
                                "" === this.item.data_type) {
                                    var l = !0, a = !1, t = void 0;
                                    try {
                                        for (var u, n = this.item.list[Symbol.iterator](); !(l = (u = n.next()).done); l = !0) {
                                            var r = u.value;
                                            e.push(r.id);
                                        }
                                    } catch (o) {
                                        a = !0, t = o;
                                    } finally {
                                        try {
                                            l || null == n.return || n.return();
                                        } finally {
                                            if (a) throw t;
                                        }
                                    }
                                }
                                e = e.join(), this.getListData(e);
                            }
                            this._observer || this.animainit();
                        },
                        immediate: !0,
                        deep: !0
                    }
                },
                methods: {
                    jump: function(l) {
                        if (console.log("jump: ", l), "share" !== l.type && "contact" !== l.type && "none" !== l.type) if ("previewImage" !== l.type) {
                            if ("phone" === l.type) return getApp().visitLog(5, "电话", 0), void e.makePhoneCall({
                                phoneNumber: l.url
                            });
                            if ("map" !== l.type) if ("miniapp" !== l.type) {
                                var a = "/yb_shopv2/native/all/index", t = "";
                                for (var u in l) t += "" === t ? "?" + u + "=" + l[u] : "&" + u + "=" + l[u];
                                a += t, console.log("jump url: ", a), e.navigateTo({
                                    url: a
                                });
                            } else e.navigateToMiniProgram({
                                appId: l.url
                            }); else e.openLocation({
                                latitude: parseFloat(l.url.lat),
                                longitude: parseFloat(l.url.lng),
                                name: l.url.address,
                                address: l.url.city + l.url.address,
                                success: function() {
                                    console.log("success");
                                }
                            });
                        } else e.previewImage({
                            urls: [ l.url ]
                        });
                    },
                    animainit: function() {
                        var e = this, l = this.item && this.item.id;
                        l && "" != l && (this.anima = this.item.animation[l] || "", this.anima_back = this.anima, 
                        "" !== this.anima && e.$nextTick(function() {
                            this.createSelectorQuery().select("#" + l).boundingClientRect(function(a) {
                                var t = -1 * a.height;
                                console.log("h: ", t), e._observer = wx.createIntersectionObserver(e), e._observer.relativeToViewport({
                                    top: t
                                }).observe("#" + l, function(l) {
                                    if ("text" === e.item.type || "button" === e.item.type || "image" === e.item.type) console.log("block sub Top: ", l); else if (0 !== l.boundingClientRect.left) return;
                                    console.log("relativeToViewport Top: ", l), l.intersectionRatio <= 0 ? e.anima = "" : e.anima = e.anima_back;
                                });
                            }).exec();
                        }));
                    }
                }
            };
            l.default = a;
        }).call(this, a("543d")["default"]);
    },
    cc08: function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = t || function(e, l) {
            var a = {}, t = a.lib = {}, u = function() {}, n = t.Base = {
                extend: function(e) {
                    u.prototype = this;
                    var l = new u();
                    return e && l.mixIn(e), l.hasOwnProperty("init") || (l.init = function() {
                        l.$super.init.apply(this, arguments);
                    }), l.init.prototype = l, l.$super = this, l;
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e;
                },
                init: function() {},
                mixIn: function(e) {
                    for (var l in e) e.hasOwnProperty(l) && (this[l] = e[l]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                }
            }, r = t.WordArray = n.extend({
                init: function(e, a) {
                    e = this.words = e || [], this.sigBytes = a != l ? a : 4 * e.length;
                },
                toString: function(e) {
                    return (e || i).stringify(this);
                },
                concat: function(e) {
                    var l = this.words, a = e.words, t = this.sigBytes;
                    if (e = e.sigBytes, this.clamp(), t % 4) for (var u = 0; u < e; u++) l[t + u >>> 2] |= (a[u >>> 2] >>> 24 - u % 4 * 8 & 255) << 24 - (t + u) % 4 * 8; else if (65535 < a.length) for (u = 0; u < e; u += 4) l[t + u >>> 2] = a[u >>> 2]; else l.push.apply(l, a);
                    return this.sigBytes += e, this;
                },
                clamp: function() {
                    var l = this.words, a = this.sigBytes;
                    l[a >>> 2] &= 4294967295 << 32 - a % 4 * 8, l.length = e.ceil(a / 4);
                },
                clone: function() {
                    var e = n.clone.call(this);
                    return e.words = this.words.slice(0), e;
                },
                random: function(l) {
                    for (var a = [], t = 0; t < l; t += 4) a.push(4294967296 * e.random() | 0);
                    return new r.init(a, l);
                }
            }), o = a.enc = {}, i = o.Hex = {
                stringify: function(e) {
                    var l = e.words;
                    e = e.sigBytes;
                    for (var a = [], t = 0; t < e; t++) {
                        var u = l[t >>> 2] >>> 24 - t % 4 * 8 & 255;
                        a.push((u >>> 4).toString(16)), a.push((15 & u).toString(16));
                    }
                    return a.join("");
                },
                parse: function(e) {
                    for (var l = e.length, a = [], t = 0; t < l; t += 2) a[t >>> 3] |= parseInt(e.substr(t, 2), 16) << 24 - t % 8 * 4;
                    return new r.init(a, l / 2);
                }
            }, v = o.Latin1 = {
                stringify: function(e) {
                    var l = e.words;
                    e = e.sigBytes;
                    for (var a = [], t = 0; t < e; t++) a.push(String.fromCharCode(l[t >>> 2] >>> 24 - t % 4 * 8 & 255));
                    return a.join("");
                },
                parse: function(e) {
                    for (var l = e.length, a = [], t = 0; t < l; t++) a[t >>> 2] |= (255 & e.charCodeAt(t)) << 24 - t % 4 * 8;
                    return new r.init(a, l);
                }
            }, b = o.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(v.stringify(e)));
                    } catch (l) {
                        throw Error("Malformed UTF-8 data");
                    }
                },
                parse: function(e) {
                    return v.parse(unescape(encodeURIComponent(e)));
                }
            }, s = t.BufferedBlockAlgorithm = n.extend({
                reset: function() {
                    this._data = new r.init(), this._nDataBytes = 0;
                },
                _append: function(e) {
                    "string" == typeof e && (e = b.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                },
                _process: function(l) {
                    var a = this._data, t = a.words, u = a.sigBytes, n = this.blockSize, o = u / (4 * n);
                    o = l ? e.ceil(o) : e.max((0 | o) - this._minBufferSize, 0);
                    if (l = o * n, u = e.min(4 * l, u), l) {
                        for (var i = 0; i < l; i += n) this._doProcessBlock(t, i);
                        i = t.splice(0, l), a.sigBytes -= u;
                    }
                    return new r.init(i, u);
                },
                clone: function() {
                    var e = n.clone.call(this);
                    return e._data = this._data.clone(), e;
                },
                _minBufferSize: 0
            });
            t.Hasher = s.extend({
                cfg: n.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset();
                },
                reset: function() {
                    s.reset.call(this), this._doReset();
                },
                update: function(e) {
                    return this._append(e), this._process(), this;
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(l, a) {
                        return new e.init(a).finalize(l);
                    };
                },
                _createHmacHelper: function(e) {
                    return function(l, a) {
                        return new c.HMAC.init(e, a).finalize(l);
                    };
                }
            });
            var c = a.algo = {};
            return a;
        }(Math);
        (function() {
            var e = t, l = e.lib.WordArray;
            e.enc.Base64 = {
                stringify: function(e) {
                    var l = e.words, a = e.sigBytes, t = this._map;
                    e.clamp(), e = [];
                    for (var u = 0; u < a; u += 3) for (var n = (l[u >>> 2] >>> 24 - u % 4 * 8 & 255) << 16 | (l[u + 1 >>> 2] >>> 24 - (u + 1) % 4 * 8 & 255) << 8 | l[u + 2 >>> 2] >>> 24 - (u + 2) % 4 * 8 & 255, r = 0; 4 > r && u + .75 * r < a; r++) e.push(t.charAt(n >>> 6 * (3 - r) & 63));
                    if (l = t.charAt(64)) for (;e.length % 4; ) e.push(l);
                    return e.join("");
                },
                parse: function(e) {
                    var a = e.length, t = this._map, u = t.charAt(64);
                    u && (u = e.indexOf(u), -1 != u && (a = u));
                    u = [];
                    for (var n = 0, r = 0; r < a; r++) if (r % 4) {
                        var o = t.indexOf(e.charAt(r - 1)) << r % 4 * 2, i = t.indexOf(e.charAt(r)) >>> 6 - r % 4 * 2;
                        u[n >>> 2] |= (o | i) << 24 - n % 4 * 8, n++;
                    }
                    return l.create(u, n);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
        })(), function(e) {
            function l(e, l, a, t, u, n, r) {
                return e = e + (l & a | ~l & t) + u + r, (e << n | e >>> 32 - n) + l;
            }
            function a(e, l, a, t, u, n, r) {
                return e = e + (l & t | a & ~t) + u + r, (e << n | e >>> 32 - n) + l;
            }
            function u(e, l, a, t, u, n, r) {
                return e = e + (l ^ a ^ t) + u + r, (e << n | e >>> 32 - n) + l;
            }
            function n(e, l, a, t, u, n, r) {
                return e = e + (a ^ (l | ~t)) + u + r, (e << n | e >>> 32 - n) + l;
            }
            for (var r = t, o = r.lib, i = o.WordArray, v = o.Hasher, b = (o = r.algo, []), s = 0; 64 > s; s++) b[s] = 4294967296 * e.abs(e.sin(s + 1)) | 0;
            o = o.MD5 = v.extend({
                _doReset: function() {
                    this._hash = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                },
                _doProcessBlock: function(e, t) {
                    for (var r = 0; 16 > r; r++) {
                        var o = t + r, i = e[o];
                        e[o] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    }
                    r = this._hash.words, o = e[t + 0], i = e[t + 1];
                    var v = e[t + 2], s = e[t + 3], c = e[t + 4], f = e[t + 5], p = e[t + 6], h = e[t + 7], d = e[t + 8], g = e[t + 9], y = e[t + 10], m = e[t + 11], _ = e[t + 12], w = e[t + 13], x = e[t + 14], A = e[t + 15], O = r[0], k = r[1], S = r[2], E = r[3];
                    O = l(O, k, S, E, o, 7, b[0]), E = l(E, O, k, S, i, 12, b[1]), S = l(S, E, O, k, v, 17, b[2]), 
                    k = l(k, S, E, O, s, 22, b[3]), O = l(O, k, S, E, c, 7, b[4]), E = l(E, O, k, S, f, 12, b[5]), 
                    S = l(S, E, O, k, p, 17, b[6]), k = l(k, S, E, O, h, 22, b[7]), O = l(O, k, S, E, d, 7, b[8]), 
                    E = l(E, O, k, S, g, 12, b[9]), S = l(S, E, O, k, y, 17, b[10]), k = l(k, S, E, O, m, 22, b[11]), 
                    O = l(O, k, S, E, _, 7, b[12]), E = l(E, O, k, S, w, 12, b[13]), S = l(S, E, O, k, x, 17, b[14]), 
                    k = l(k, S, E, O, A, 22, b[15]), O = a(O, k, S, E, i, 5, b[16]), E = a(E, O, k, S, p, 9, b[17]), 
                    S = a(S, E, O, k, m, 14, b[18]), k = a(k, S, E, O, o, 20, b[19]), O = a(O, k, S, E, f, 5, b[20]), 
                    E = a(E, O, k, S, y, 9, b[21]), S = a(S, E, O, k, A, 14, b[22]), k = a(k, S, E, O, c, 20, b[23]), 
                    O = a(O, k, S, E, g, 5, b[24]), E = a(E, O, k, S, x, 9, b[25]), S = a(S, E, O, k, s, 14, b[26]), 
                    k = a(k, S, E, O, d, 20, b[27]), O = a(O, k, S, E, w, 5, b[28]), E = a(E, O, k, S, v, 9, b[29]), 
                    S = a(S, E, O, k, h, 14, b[30]), k = a(k, S, E, O, _, 20, b[31]), O = u(O, k, S, E, f, 4, b[32]), 
                    E = u(E, O, k, S, d, 11, b[33]), S = u(S, E, O, k, m, 16, b[34]), k = u(k, S, E, O, x, 23, b[35]), 
                    O = u(O, k, S, E, i, 4, b[36]), E = u(E, O, k, S, c, 11, b[37]), S = u(S, E, O, k, h, 16, b[38]), 
                    k = u(k, S, E, O, y, 23, b[39]), O = u(O, k, S, E, w, 4, b[40]), E = u(E, O, k, S, o, 11, b[41]), 
                    S = u(S, E, O, k, s, 16, b[42]), k = u(k, S, E, O, p, 23, b[43]), O = u(O, k, S, E, g, 4, b[44]), 
                    E = u(E, O, k, S, _, 11, b[45]), S = u(S, E, O, k, A, 16, b[46]), k = u(k, S, E, O, v, 23, b[47]), 
                    O = n(O, k, S, E, o, 6, b[48]), E = n(E, O, k, S, h, 10, b[49]), S = n(S, E, O, k, x, 15, b[50]), 
                    k = n(k, S, E, O, f, 21, b[51]), O = n(O, k, S, E, _, 6, b[52]), E = n(E, O, k, S, s, 10, b[53]), 
                    S = n(S, E, O, k, y, 15, b[54]), k = n(k, S, E, O, i, 21, b[55]), O = n(O, k, S, E, d, 6, b[56]), 
                    E = n(E, O, k, S, A, 10, b[57]), S = n(S, E, O, k, p, 15, b[58]), k = n(k, S, E, O, w, 21, b[59]), 
                    O = n(O, k, S, E, c, 6, b[60]), E = n(E, O, k, S, m, 10, b[61]), S = n(S, E, O, k, v, 15, b[62]), 
                    k = n(k, S, E, O, g, 21, b[63]);
                    r[0] = r[0] + O | 0, r[1] = r[1] + k | 0, r[2] = r[2] + S | 0, r[3] = r[3] + E | 0;
                },
                _doFinalize: function() {
                    var l = this._data, a = l.words, t = 8 * this._nDataBytes, u = 8 * l.sigBytes;
                    a[u >>> 5] |= 128 << 24 - u % 32;
                    var n = e.floor(t / 4294967296);
                    for (a[15 + (u + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
                    a[14 + (u + 64 >>> 9 << 4)] = 16711935 & (t << 8 | t >>> 24) | 4278255360 & (t << 24 | t >>> 8), 
                    l.sigBytes = 4 * (a.length + 1), this._process(), l = this._hash, a = l.words, t = 0; 4 > t; t++) u = a[t], 
                    a[t] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
                    return l;
                },
                clone: function() {
                    var e = v.clone.call(this);
                    return e._hash = this._hash.clone(), e;
                }
            }), r.MD5 = v._createHelper(o), r.HmacMD5 = v._createHmacHelper(o);
        }(Math), function() {
            var e = t, l = e.lib, a = l.Base, u = l.WordArray, n = (l = e.algo, l.EvpKDF = a.extend({
                cfg: a.extend({
                    keySize: 4,
                    hasher: l.MD5,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e);
                },
                compute: function(e, l) {
                    var a = this.cfg, t = a.hasher.create(), n = u.create(), r = n.words, o = a.keySize;
                    for (a = a.iterations; r.length < o; ) {
                        i && t.update(i);
                        var i = t.update(e).finalize(l);
                        t.reset();
                        for (var v = 1; v < a; v++) i = t.finalize(i), t.reset();
                        n.concat(i);
                    }
                    return n.sigBytes = 4 * o, n;
                }
            }));
            e.EvpKDF = function(e, l, a) {
                return n.create(a).compute(e, l);
            };
        }(), t.lib.Cipher || function(e) {
            var l = t, a = l.lib, u = a.Base, n = a.WordArray, r = a.BufferedBlockAlgorithm, o = l.enc.Base64, i = l.algo.EvpKDF, v = a.Cipher = r.extend({
                cfg: u.extend(),
                createEncryptor: function(e, l) {
                    return this.create(this._ENC_XFORM_MODE, e, l);
                },
                createDecryptor: function(e, l) {
                    return this.create(this._DEC_XFORM_MODE, e, l);
                },
                init: function(e, l, a) {
                    this.cfg = this.cfg.extend(a), this._xformMode = e, this._key = l, this.reset();
                },
                reset: function() {
                    r.reset.call(this), this._doReset();
                },
                process: function(e) {
                    return this._append(e), this._process();
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function(e) {
                    return {
                        encrypt: function(l, a, t) {
                            return ("string" == typeof a ? h : p).encrypt(e, l, a, t);
                        },
                        decrypt: function(l, a, t) {
                            return ("string" == typeof a ? h : p).decrypt(e, l, a, t);
                        }
                    };
                }
            });
            a.StreamCipher = v.extend({
                _doFinalize: function() {
                    return this._process(!0);
                },
                blockSize: 1
            });
            var b = l.mode = {}, s = function(l, a, t) {
                var u = this._iv;
                u ? this._iv = e : u = this._prevBlock;
                for (var n = 0; n < t; n++) l[a + n] ^= u[n];
            }, c = (a.BlockCipherMode = u.extend({
                createEncryptor: function(e, l) {
                    return this.Encryptor.create(e, l);
                },
                createDecryptor: function(e, l) {
                    return this.Decryptor.create(e, l);
                },
                init: function(e, l) {
                    this._cipher = e, this._iv = l;
                }
            })).extend();
            c.Encryptor = c.extend({
                processBlock: function(e, l) {
                    var a = this._cipher, t = a.blockSize;
                    s.call(this, e, l, t), a.encryptBlock(e, l), this._prevBlock = e.slice(l, l + t);
                }
            }), c.Decryptor = c.extend({
                processBlock: function(e, l) {
                    var a = this._cipher, t = a.blockSize, u = e.slice(l, l + t);
                    a.decryptBlock(e, l), s.call(this, e, l, t), this._prevBlock = u;
                }
            }), b = b.CBC = c, c = (l.pad = {}).Pkcs7 = {
                pad: function(e, l) {
                    for (var a = 4 * l, t = (a = a - e.sigBytes % a, a << 24 | a << 16 | a << 8 | a), u = [], r = 0; r < a; r += 4) u.push(t);
                    a = n.create(u, a), e.concat(a);
                },
                unpad: function(e) {
                    e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2];
                }
            }, a.BlockCipher = v.extend({
                cfg: v.cfg.extend({
                    mode: b,
                    padding: c
                }),
                reset: function() {
                    v.reset.call(this);
                    var e = this.cfg, l = e.iv;
                    e = e.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var a = e.createEncryptor; else a = e.createDecryptor, 
                    this._minBufferSize = 1;
                    this._mode = a.call(e, this, l && l.words);
                },
                _doProcessBlock: function(e, l) {
                    this._mode.processBlock(e, l);
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var l = this._process(!0);
                    } else l = this._process(!0), e.unpad(l);
                    return l;
                },
                blockSize: 4
            });
            var f = a.CipherParams = u.extend({
                init: function(e) {
                    this.mixIn(e);
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this);
                }
            }), p = (b = (l.format = {}).OpenSSL = {
                stringify: function(e) {
                    var l = e.ciphertext;
                    return e = e.salt, (e ? n.create([ 1398893684, 1701076831 ]).concat(e).concat(l) : l).toString(o);
                },
                parse: function(e) {
                    e = o.parse(e);
                    var l = e.words;
                    if (1398893684 == l[0] && 1701076831 == l[1]) {
                        var a = n.create(l.slice(2, 4));
                        l.splice(0, 4), e.sigBytes -= 16;
                    }
                    return f.create({
                        ciphertext: e,
                        salt: a
                    });
                }
            }, a.SerializableCipher = u.extend({
                cfg: u.extend({
                    format: b
                }),
                encrypt: function(e, l, a, t) {
                    t = this.cfg.extend(t);
                    var u = e.createEncryptor(a, t);
                    return l = u.finalize(l), u = u.cfg, f.create({
                        ciphertext: l,
                        key: a,
                        iv: u.iv,
                        algorithm: e,
                        mode: u.mode,
                        padding: u.padding,
                        blockSize: e.blockSize,
                        formatter: t.format
                    });
                },
                decrypt: function(e, l, a, t) {
                    return t = this.cfg.extend(t), l = this._parse(l, t.format), e.createDecryptor(a, t).finalize(l.ciphertext);
                },
                _parse: function(e, l) {
                    return "string" == typeof e ? l.parse(e, this) : e;
                }
            })), h = (l = (l.kdf = {}).OpenSSL = {
                execute: function(e, l, a, t) {
                    return t || (t = n.random(8)), e = i.create({
                        keySize: l + a
                    }).compute(e, t), a = n.create(e.words.slice(l), 4 * a), e.sigBytes = 4 * l, f.create({
                        key: e,
                        iv: a,
                        salt: t
                    });
                }
            }, a.PasswordBasedCipher = p.extend({
                cfg: p.cfg.extend({
                    kdf: l
                }),
                encrypt: function(e, l, a, t) {
                    return t = this.cfg.extend(t), a = t.kdf.execute(a, e.keySize, e.ivSize), t.iv = a.iv, 
                    e = p.encrypt.call(this, e, l, a.key, t), e.mixIn(a), e;
                },
                decrypt: function(e, l, a, t) {
                    return t = this.cfg.extend(t), l = this._parse(l, t.format), a = t.kdf.execute(a, e.keySize, e.ivSize, l.salt), 
                    t.iv = a.iv, p.decrypt.call(this, e, l, a.key, t);
                }
            }));
        }(), function() {
            for (var e = t, l = e.lib.BlockCipher, a = e.algo, u = [], n = [], r = [], o = [], i = [], v = [], b = [], s = [], c = [], f = [], p = [], h = 0; 256 > h; h++) p[h] = 128 > h ? h << 1 : h << 1 ^ 283;
            var d = 0, g = 0;
            for (h = 0; 256 > h; h++) {
                var y = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                y = y >>> 8 ^ 255 & y ^ 99;
                u[d] = y, n[y] = d;
                var m = p[d], _ = p[m], w = p[_], x = 257 * p[y] ^ 16843008 * y;
                r[d] = x << 24 | x >>> 8, o[d] = x << 16 | x >>> 16, i[d] = x << 8 | x >>> 24, v[d] = x, 
                x = 16843009 * w ^ 65537 * _ ^ 257 * m ^ 16843008 * d, b[y] = x << 24 | x >>> 8, 
                s[y] = x << 16 | x >>> 16, c[y] = x << 8 | x >>> 24, f[y] = x, d ? (d = m ^ p[p[p[w ^ m]]], 
                g ^= p[p[g]]) : d = g = 1;
            }
            var A = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
            a = a.AES = l.extend({
                _doReset: function() {
                    for (var e = this._key, l = e.words, a = e.sigBytes / 4, t = (e = 4 * ((this._nRounds = a + 6) + 1), 
                    this._keySchedule = []), n = 0; n < e; n++) if (n < a) t[n] = l[n]; else {
                        var r = t[n - 1];
                        n % a ? 6 < a && 4 == n % a && (r = u[r >>> 24] << 24 | u[r >>> 16 & 255] << 16 | u[r >>> 8 & 255] << 8 | u[255 & r]) : (r = r << 8 | r >>> 24, 
                        r = u[r >>> 24] << 24 | u[r >>> 16 & 255] << 16 | u[r >>> 8 & 255] << 8 | u[255 & r], 
                        r ^= A[n / a | 0] << 24), t[n] = t[n - a] ^ r;
                    }
                    for (l = this._invKeySchedule = [], a = 0; a < e; a++) n = e - a, r = a % 4 ? t[n] : t[n - 4], 
                    l[a] = 4 > a || 4 >= n ? r : b[u[r >>> 24]] ^ s[u[r >>> 16 & 255]] ^ c[u[r >>> 8 & 255]] ^ f[u[255 & r]];
                },
                encryptBlock: function(e, l) {
                    this._doCryptBlock(e, l, this._keySchedule, r, o, i, v, u);
                },
                decryptBlock: function(e, l) {
                    var a = e[l + 1];
                    e[l + 1] = e[l + 3], e[l + 3] = a, this._doCryptBlock(e, l, this._invKeySchedule, b, s, c, f, n), 
                    a = e[l + 1], e[l + 1] = e[l + 3], e[l + 3] = a;
                },
                _doCryptBlock: function(e, l, a, t, u, n, r, o) {
                    for (var i = this._nRounds, v = e[l] ^ a[0], b = e[l + 1] ^ a[1], s = e[l + 2] ^ a[2], c = e[l + 3] ^ a[3], f = 4, p = 1; p < i; p++) {
                        var h = t[v >>> 24] ^ u[b >>> 16 & 255] ^ n[s >>> 8 & 255] ^ r[255 & c] ^ a[f++], d = t[b >>> 24] ^ u[s >>> 16 & 255] ^ n[c >>> 8 & 255] ^ r[255 & v] ^ a[f++], g = t[s >>> 24] ^ u[c >>> 16 & 255] ^ n[v >>> 8 & 255] ^ r[255 & b] ^ a[f++];
                        c = t[c >>> 24] ^ u[v >>> 16 & 255] ^ n[b >>> 8 & 255] ^ r[255 & s] ^ a[f++], v = h, 
                        b = d, s = g;
                    }
                    h = (o[v >>> 24] << 24 | o[b >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & c]) ^ a[f++], 
                    d = (o[b >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & v]) ^ a[f++], 
                    g = (o[s >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[v >>> 8 & 255] << 8 | o[255 & b]) ^ a[f++], 
                    c = (o[c >>> 24] << 24 | o[v >>> 16 & 255] << 16 | o[b >>> 8 & 255] << 8 | o[255 & s]) ^ a[f++], 
                    e[l] = h, e[l + 1] = d, e[l + 2] = g, e[l + 3] = c;
                },
                keySize: 8
            });
            e.AES = l._createHelper(a);
        }();
        var u = t;
        l.default = u;
    },
    d159: function(e, l, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = {};
            (function() {
                function l(e) {
                    var l, a, t;
                    return e < 128 ? [ e ] : e < 2048 ? (l = 192 + (e >> 6), a = 128 + (63 & e), [ l, a ]) : (l = 224 + (e >> 12), 
                    a = 128 + (e >> 6 & 63), t = 128 + (63 & e), [ l, a, t ]);
                }
                function t(e) {
                    for (var a = [], t = 0; t < e.length; t++) for (var u = e.charCodeAt(t), n = l(u), r = 0; r < n.length; r++) a.push(n[r]);
                    return a;
                }
                function u(e, l) {
                    this.typeNumber = -1, this.errorCorrectLevel = l, this.modules = null, this.moduleCount = 0, 
                    this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = e, 
                    this.utf8bytes = t(e), this.make();
                }
                u.prototype = {
                    constructor: u,
                    getModuleCount: function() {
                        return this.moduleCount;
                    },
                    make: function() {
                        this.getRightType(), this.dataCache = this.createData(), this.createQrcode();
                    },
                    makeImpl: function(e) {
                        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                        for (var l = 0; l < this.moduleCount; l++) this.modules[l] = new Array(this.moduleCount);
                        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
                        this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
                        this.setupTimingPattern(), this.setupTypeInfo(!0, e), this.typeNumber >= 7 && this.setupTypeNumber(!0), 
                        this.mapData(this.dataCache, e);
                    },
                    setupPositionProbePattern: function(e, l) {
                        for (var a = -1; a <= 7; a++) if (!(e + a <= -1 || this.moduleCount <= e + a)) for (var t = -1; t <= 7; t++) l + t <= -1 || this.moduleCount <= l + t || (this.modules[e + a][l + t] = 0 <= a && a <= 6 && (0 == t || 6 == t) || 0 <= t && t <= 6 && (0 == a || 6 == a) || 2 <= a && a <= 4 && 2 <= t && t <= 4);
                    },
                    createQrcode: function() {
                        for (var e = 0, l = 0, a = null, t = 0; t < 8; t++) {
                            this.makeImpl(t);
                            var u = o.getLostPoint(this);
                            (0 == t || e > u) && (e = u, l = t, a = this.modules);
                        }
                        this.modules = a, this.setupTypeInfo(!1, l), this.typeNumber >= 7 && this.setupTypeNumber(!1);
                    },
                    setupTimingPattern: function() {
                        for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0, 
                        null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0));
                    },
                    setupPositionAdjustPattern: function() {
                        for (var e = o.getPatternPosition(this.typeNumber), l = 0; l < e.length; l++) for (var a = 0; a < e.length; a++) {
                            var t = e[l], u = e[a];
                            if (null == this.modules[t][u]) for (var n = -2; n <= 2; n++) for (var r = -2; r <= 2; r++) this.modules[t + n][u + r] = -2 == n || 2 == n || -2 == r || 2 == r || 0 == n && 0 == r;
                        }
                    },
                    setupTypeNumber: function(e) {
                        for (var l = o.getBCHTypeNumber(this.typeNumber), a = 0; a < 18; a++) {
                            var t = !e && 1 == (l >> a & 1);
                            this.modules[Math.floor(a / 3)][a % 3 + this.moduleCount - 8 - 3] = t, this.modules[a % 3 + this.moduleCount - 8 - 3][Math.floor(a / 3)] = t;
                        }
                    },
                    setupTypeInfo: function(e, l) {
                        for (var a = n[this.errorCorrectLevel] << 3 | l, t = o.getBCHTypeInfo(a), u = 0; u < 15; u++) {
                            var r = !e && 1 == (t >> u & 1);
                            u < 6 ? this.modules[u][8] = r : u < 8 ? this.modules[u + 1][8] = r : this.modules[this.moduleCount - 15 + u][8] = r;
                            r = !e && 1 == (t >> u & 1);
                            u < 8 ? this.modules[8][this.moduleCount - u - 1] = r : u < 9 ? this.modules[8][15 - u - 1 + 1] = r : this.modules[8][15 - u - 1] = r;
                        }
                        this.modules[this.moduleCount - 8][8] = !e;
                    },
                    createData: function() {
                        var e = new c(), l = this.typeNumber > 9 ? 16 : 8;
                        e.put(4, 4), e.put(this.utf8bytes.length, l);
                        for (var a = 0, t = this.utf8bytes.length; a < t; a++) e.put(this.utf8bytes[a], 8);
                        e.length + 4 <= 8 * this.totalDataCount && e.put(0, 4);
                        while (e.length % 8 != 0) e.putBit(!1);
                        while (1) {
                            if (e.length >= 8 * this.totalDataCount) break;
                            if (e.put(u.PAD0, 8), e.length >= 8 * this.totalDataCount) break;
                            e.put(u.PAD1, 8);
                        }
                        return this.createBytes(e);
                    },
                    createBytes: function(e) {
                        for (var l = 0, a = 0, t = 0, u = this.rsBlock.length / 3, n = new Array(), r = 0; r < u; r++) for (var i = this.rsBlock[3 * r + 0], v = this.rsBlock[3 * r + 1], s = this.rsBlock[3 * r + 2], c = 0; c < i; c++) n.push([ s, v ]);
                        for (var f = new Array(n.length), p = new Array(n.length), h = 0; h < n.length; h++) {
                            var d = n[h][0], g = n[h][1] - d;
                            a = Math.max(a, d), t = Math.max(t, g), f[h] = new Array(d);
                            for (r = 0; r < f[h].length; r++) f[h][r] = 255 & e.buffer[r + l];
                            l += d;
                            var y = o.getErrorCorrectPolynomial(g), m = new b(f[h], y.getLength() - 1), _ = m.mod(y);
                            p[h] = new Array(y.getLength() - 1);
                            for (r = 0; r < p[h].length; r++) {
                                var w = r + _.getLength() - p[h].length;
                                p[h][r] = w >= 0 ? _.get(w) : 0;
                            }
                        }
                        var x = new Array(this.totalDataCount), A = 0;
                        for (r = 0; r < a; r++) for (h = 0; h < n.length; h++) r < f[h].length && (x[A++] = f[h][r]);
                        for (r = 0; r < t; r++) for (h = 0; h < n.length; h++) r < p[h].length && (x[A++] = p[h][r]);
                        return x;
                    },
                    mapData: function(e, l) {
                        for (var a = -1, t = this.moduleCount - 1, u = 7, n = 0, r = this.moduleCount - 1; r > 0; r -= 2) {
                            6 == r && r--;
                            while (1) {
                                for (var i = 0; i < 2; i++) if (null == this.modules[t][r - i]) {
                                    var v = !1;
                                    n < e.length && (v = 1 == (e[n] >>> u & 1));
                                    var b = o.getMask(l, t, r - i);
                                    b && (v = !v), this.modules[t][r - i] = v, u--, -1 == u && (n++, u = 7);
                                }
                                if (t += a, t < 0 || this.moduleCount <= t) {
                                    t -= a, a = -a;
                                    break;
                                }
                            }
                        }
                    }
                }, u.PAD0 = 236, u.PAD1 = 17;
                for (var n = [ 1, 0, 3, 2 ], r = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, o = {
                    PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        var l = e << 10;
                        while (o.getBCHDigit(l) - o.getBCHDigit(o.G15) >= 0) l ^= o.G15 << o.getBCHDigit(l) - o.getBCHDigit(o.G15);
                        return (e << 10 | l) ^ o.G15_MASK;
                    },
                    getBCHTypeNumber: function(e) {
                        var l = e << 12;
                        while (o.getBCHDigit(l) - o.getBCHDigit(o.G18) >= 0) l ^= o.G18 << o.getBCHDigit(l) - o.getBCHDigit(o.G18);
                        return e << 12 | l;
                    },
                    getBCHDigit: function(e) {
                        var l = 0;
                        while (0 != e) l++, e >>>= 1;
                        return l;
                    },
                    getPatternPosition: function(e) {
                        return o.PATTERN_POSITION_TABLE[e - 1];
                    },
                    getMask: function(e, l, a) {
                        switch (e) {
                          case r.PATTERN000:
                            return (l + a) % 2 == 0;

                          case r.PATTERN001:
                            return l % 2 == 0;

                          case r.PATTERN010:
                            return a % 3 == 0;

                          case r.PATTERN011:
                            return (l + a) % 3 == 0;

                          case r.PATTERN100:
                            return (Math.floor(l / 2) + Math.floor(a / 3)) % 2 == 0;

                          case r.PATTERN101:
                            return l * a % 2 + l * a % 3 == 0;

                          case r.PATTERN110:
                            return (l * a % 2 + l * a % 3) % 2 == 0;

                          case r.PATTERN111:
                            return (l * a % 3 + (l + a) % 2) % 2 == 0;

                          default:
                            throw new Error("bad maskPattern:" + e);
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var l = new b([ 1 ], 0), a = 0; a < e; a++) l = l.multiply(new b([ 1, i.gexp(a) ], 0));
                        return l;
                    },
                    getLostPoint: function(e) {
                        for (var l = e.getModuleCount(), a = 0, t = 0, u = 0; u < l; u++) for (var n = 0, r = e.modules[u][0], o = 0; o < l; o++) {
                            var i = e.modules[u][o];
                            if (o < l - 6 && i && !e.modules[u][o + 1] && e.modules[u][o + 2] && e.modules[u][o + 3] && e.modules[u][o + 4] && !e.modules[u][o + 5] && e.modules[u][o + 6] && (o < l - 10 ? e.modules[u][o + 7] && e.modules[u][o + 8] && e.modules[u][o + 9] && e.modules[u][o + 10] && (a += 40) : o > 3 && e.modules[u][o - 1] && e.modules[u][o - 2] && e.modules[u][o - 3] && e.modules[u][o - 4] && (a += 40)), 
                            u < l - 1 && o < l - 1) {
                                var v = 0;
                                i && v++, e.modules[u + 1][o] && v++, e.modules[u][o + 1] && v++, e.modules[u + 1][o + 1] && v++, 
                                0 != v && 4 != v || (a += 3);
                            }
                            r ^ i ? n++ : (r = i, n >= 5 && (a += 3 + n - 5), n = 1), i && t++;
                        }
                        for (o = 0; o < l; o++) for (n = 0, r = e.modules[0][o], u = 0; u < l; u++) {
                            i = e.modules[u][o];
                            u < l - 6 && i && !e.modules[u + 1][o] && e.modules[u + 2][o] && e.modules[u + 3][o] && e.modules[u + 4][o] && !e.modules[u + 5][o] && e.modules[u + 6][o] && (u < l - 10 ? e.modules[u + 7][o] && e.modules[u + 8][o] && e.modules[u + 9][o] && e.modules[u + 10][o] && (a += 40) : u > 3 && e.modules[u - 1][o] && e.modules[u - 2][o] && e.modules[u - 3][o] && e.modules[u - 4][o] && (a += 40)), 
                            r ^ i ? n++ : (r = i, n >= 5 && (a += 3 + n - 5), n = 1);
                        }
                        var b = Math.abs(100 * t / l / l - 50) / 5;
                        return a += 10 * b, a;
                    }
                }, i = {
                    glog: function(e) {
                        if (e < 1) throw new Error("glog(" + e + ")");
                        return i.LOG_TABLE[e];
                    },
                    gexp: function(e) {
                        while (e < 0) e += 255;
                        while (e >= 256) e -= 255;
                        return i.EXP_TABLE[e];
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, v = 0; v < 8; v++) i.EXP_TABLE[v] = 1 << v;
                for (v = 8; v < 256; v++) i.EXP_TABLE[v] = i.EXP_TABLE[v - 4] ^ i.EXP_TABLE[v - 5] ^ i.EXP_TABLE[v - 6] ^ i.EXP_TABLE[v - 8];
                for (v = 0; v < 255; v++) i.LOG_TABLE[i.EXP_TABLE[v]] = v;
                function b(e, l) {
                    if (void 0 == e.length) throw new Error(e.length + "/" + l);
                    var a = 0;
                    while (a < e.length && 0 == e[a]) a++;
                    this.num = new Array(e.length - a + l);
                    for (var t = 0; t < e.length - a; t++) this.num[t] = e[t + a];
                }
                b.prototype = {
                    get: function(e) {
                        return this.num[e];
                    },
                    getLength: function() {
                        return this.num.length;
                    },
                    multiply: function(e) {
                        for (var l = new Array(this.getLength() + e.getLength() - 1), a = 0; a < this.getLength(); a++) for (var t = 0; t < e.getLength(); t++) l[a + t] ^= i.gexp(i.glog(this.get(a)) + i.glog(e.get(t)));
                        return new b(l, 0);
                    },
                    mod: function(e) {
                        var l = this.getLength(), a = e.getLength();
                        if (l - a < 0) return this;
                        for (var t = new Array(l), u = 0; u < l; u++) t[u] = this.get(u);
                        while (t.length >= a) {
                            var n = i.glog(t[0]) - i.glog(e.get(0));
                            for (u = 0; u < e.getLength(); u++) t[u] ^= i.gexp(i.glog(e.get(u)) + n);
                            while (0 == t[0]) t.shift();
                        }
                        return new b(t, 0);
                    }
                };
                var s = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ];
                function c() {
                    this.buffer = new Array(), this.length = 0;
                }
                u.prototype.getRightType = function() {
                    for (var e = 1; e < 41; e++) {
                        var l = s[4 * (e - 1) + this.errorCorrectLevel];
                        if (void 0 == l) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + this.errorCorrectLevel);
                        for (var a = l.length / 3, t = 0, u = 0; u < a; u++) {
                            var n = l[3 * u + 0], r = l[3 * u + 2];
                            t += r * n;
                        }
                        var o = e > 9 ? 2 : 1;
                        if (this.utf8bytes.length + o < t || 40 == e) {
                            this.typeNumber = e, this.rsBlock = l, this.totalDataCount = t;
                            break;
                        }
                    }
                }, c.prototype = {
                    get: function(e) {
                        var l = Math.floor(e / 8);
                        return this.buffer[l] >>> 7 - e % 8 & 1;
                    },
                    put: function(e, l) {
                        for (var a = 0; a < l; a++) this.putBit(e >>> l - a - 1 & 1);
                    },
                    putBit: function(e) {
                        var l = Math.floor(this.length / 8);
                        this.buffer.length <= l && this.buffer.push(0), e && (this.buffer[l] |= 128 >>> this.length % 8), 
                        this.length++;
                    }
                };
                var f = [];
                a = function(l) {
                    if (this.options = {
                        text: "",
                        size: 256,
                        correctLevel: 3,
                        background: "#ffffff",
                        foreground: "#000000",
                        pdground: "#000000",
                        image: "",
                        imageSize: 30,
                        canvasId: l.canvasId,
                        context: l.context,
                        usingComponents: l.usingComponents,
                        showLoading: l.showLoading,
                        loadingText: l.loadingText
                    }, "string" === typeof l && (l = {
                        text: l
                    }), l) for (var a in l) this.options[a] = l[a];
                    for (var t = null, n = (a = 0, f.length); a < n; a++) if (f[a].text == this.options.text && f[a].text.correctLevel == this.options.correctLevel) {
                        t = f[a].obj;
                        break;
                    }
                    a == n && (t = new u(this.options.text, this.options.correctLevel), f.push({
                        text: this.options.text,
                        correctLevel: this.options.correctLevel,
                        obj: t
                    }));
                    var r = function(e) {
                        var l = e.options;
                        return l.pdground && (e.row > 1 && e.row < 5 && e.col > 1 && e.col < 5 || e.row > e.count - 6 && e.row < e.count - 2 && e.col > 1 && e.col < 5 || e.row > 1 && e.row < 5 && e.col > e.count - 6 && e.col < e.count - 2) ? l.pdground : l.foreground;
                    }, o = function(l) {
                        l.showLoading && e.showLoading({
                            title: l.loadingText,
                            mask: !0
                        });
                        for (var a = e.createCanvasContext(l.canvasId, l.context), u = t.getModuleCount(), n = l.size, o = l.imageSize, v = (n / u).toPrecision(4), b = (n / u).toPrecision(4), s = 0; s < u; s++) for (var c = 0; c < u; c++) {
                            var f = Math.ceil((c + 1) * v) - Math.floor(c * v), p = Math.ceil((s + 1) * v) - Math.floor(s * v), h = r({
                                row: s,
                                col: c,
                                count: u,
                                options: l
                            });
                            a.setFillStyle(t.modules[s][c] ? h : l.background), a.fillRect(Math.round(c * v), Math.round(s * b), f, p);
                        }
                        if (l.image) {
                            var d = function(e, a, t, u, n, r, o, i, v) {
                                e.setLineWidth(o), e.setFillStyle(l.background), e.setStrokeStyle(l.background), 
                                e.beginPath(), e.moveTo(a + r, t), e.arcTo(a + u, t, a + u, t + r, r), e.arcTo(a + u, t + n, a + u - r, t + n, r), 
                                e.arcTo(a, t + n, a, t + n - r, r), e.arcTo(a, t, a + r, t, r), e.closePath(), i && e.fill(), 
                                v && e.stroke();
                            }, g = Number(((n - o) / 2).toFixed(2)), y = Number(((n - o) / 2).toFixed(2));
                            d(a, g, y, o, o, 2, 6, !0, !0), a.drawImage(l.image, g, y, o, o);
                        }
                        setTimeout(function() {
                            a.draw(!0, function() {
                                setTimeout(function() {
                                    e.canvasToTempFilePath({
                                        width: l.width,
                                        height: l.height,
                                        destWidth: l.width,
                                        destHeight: l.height,
                                        canvasId: l.canvasId,
                                        quality: Number(1),
                                        success: function(e) {
                                            l.cbResult && (i(e.tempFilePath) ? i(e.apFilePath) ? l.cbResult(e.tempFilePath) : l.cbResult(e.apFilePath) : l.cbResult(e.tempFilePath));
                                        },
                                        fail: function(e) {
                                            l.cbResult && l.cbResult(e);
                                        },
                                        complete: function() {
                                            e.hideLoading();
                                        }
                                    }, l.context);
                                }, l.text.length + 100);
                            });
                        }, l.usingComponents ? 0 : 150);
                    };
                    o(this.options);
                    var i = function(e) {
                        var l = typeof e, a = !1;
                        return "number" == l && "" == String(e) ? a = !0 : "undefined" == l ? a = !0 : "object" == l ? "{}" != JSON.stringify(e) && "[]" != JSON.stringify(e) && null != e || (a = !0) : "string" == l ? "" != e && "undefined" != e && "null" != e && "{}" != e && "[]" != e || (a = !0) : "function" == l && (a = !1), 
                        a;
                    };
                }, a.prototype.clear = function(l) {
                    var a = e.createCanvasContext(this.options.canvasId, this.options.context);
                    a.clearRect(0, 0, this.options.size, this.options.size), a.draw(!1, function() {
                        l && l();
                    });
                };
            })();
            var t = a;
            l.default = t;
        }).call(this, a("543d")["default"]);
    },
    d60f: function(e, l, a) {
        "use strict";
        (function(l) {
            e.exports = {
                userLogin: function(e) {
                    var a = this, t = l.getStorageSync("user"), u = !1;
                    if (console.log("user: ", t), !u) return new Promise(function(e) {
                        l.login({
                            success: function(t) {
                                console.log("loginCode", t), getApp().Req.get("user_login", {
                                    code: t.code
                                }, function(t) {
                                    console.info("loginRes: ", t), t.info.openid ? (a.user.userid = t.info.userid, a.user.openid = t.info.openid, 
                                    a.user.user_headimg = t.info.user_headimg, a.user.nick_name = t.info.nick_name, 
                                    a.user.phone = t.info.phone, a.user.sex = t.info.sex, a.user.birthday = t.info.birthday, 
                                    a.user.area = t.info.area, a.user.wechat = t.info.wechat, a.user.qq = t.info.qq, 
                                    a.user.province = t.info.province, a.user.city = t.info.city, a.user.district = t.info.district, 
                                    l.setStorageSync("user", a.user), console.info("user: ", a.user), l.$emit("USER_INFO_LOAD"), 
                                    a.assignStaff(), e(t)) : l.showModal({
                                        title: "提醒",
                                        showCancel: !1,
                                        content: "后台小程序参数配置有误,请检查"
                                    });
                                });
                            }
                        });
                    });
                },
                getTabbarData: function(e) {
                    var a = this;
                    a.Req.get("index_common", {}, function(t) {
                        console.log("getTabbarData res: ", t), a.tabbar = t.info.tabbar, a.auth.auth_user_page = t.info.auth_info.auth_user_page.concat("member"), 
                        a.auth.auth_phone_page = t.info.auth_info.auth_phone_page;
                        var u = t.info.common, n = a.handleStyle(t.info.styles.common), r = n[0], o = n[1], i = u.login_auth;
                        for (var v in i["id"] = "login_auth_block", i["animation"] = {}, i["css"] = {}, 
                        i["animation"]["login_auth_block"] = o["login_auth_block"] || "", i["css"]["login_auth_block"] = r["login_auth_block"] || "", 
                        i.sub) {
                            var b = i.sub[v];
                            b["id"] = v;
                            var s = {}, c = {};
                            for (var f in r) f.indexOf(v) >= 0 && (s[f] = r[f]);
                            for (var p in o) p.indexOf(v) >= 0 && (c[p] = o[p]);
                            b.css = s, b.animation = c;
                        }
                        var h = u.phone_auth;
                        for (var d in h["id"] = "phone_auth_block", h["animation"] = {}, h["css"] = {}, 
                        h["animation"]["phone_auth_block"] = o["phone_auth_block"] || "", h["css"]["phone_auth_block"] = r["phone_auth_block"] || "", 
                        h.sub) {
                            var g = h.sub[d];
                            g["id"] = d;
                            var y = {}, m = {};
                            for (var _ in r) _.indexOf(d) >= 0 && (y[_] = r[_]);
                            for (var w in o) w.indexOf(d) >= 0 && (m[w] = o[w]);
                            g.css = y, g.animation = m;
                        }
                        var x = u.float.service;
                        x["animation"] = o["float_service"], x["css"] = r["float_service"];
                        var A = u.float.share;
                        A["animation"] = o["float_share"], A["css"] = r["float_share"];
                        var O = u.float.tel;
                        O["animation"] = o["float_tel"], O["css"] = r["float_tel"], console.log("common: ", u), 
                        a.common = u, e && e(), l.$emit("COMMON_COMPLETE");
                    });
                },
                handleStyle: function(e) {
                    var l = {}, a = {}, t = parseFloat(this.ScreenWidth / 375);
                    for (var u in e) {
                        var n = {}, r = "", o = e[u];
                        for (var i in o) if ("bg" === i) {
                            var v = o["bg"];
                            "color" === v.type ? (n["background-color"] = v.color.color, n["background"] = v.color.color) : "image" === v.type ? (n["background-image"] = "url(" + v.image.path + ")", 
                            n["background-position"] = v.image.px + "% " + v.image.py + "%", n["background-repeat"] = v.image.repeat.repeat, 
                            n["background-size"] = v.image.repeat.size) : "gradient" === v.type ? (n["background-color"] = "rgba(255, 255, 255, 0)", 
                            n["background"] = "-webkit-gradient(linear, left top, left bottom, from(" + v.gradient.begin + "), to(" + v.gradient.end + "))") : "none" === v.type && (n["background-color"] = "rgba(255, 255, 255, 0)", 
                            n["background"] = "rgba(255, 255, 255, 0)", n["background-image"] = "url()");
                        } else if ("image" === i) {
                            var b = o["image"];
                            n["background-image"] = "url(" + b.path + ")", n["background-position"] = b.px + "% " + b.py + "%", 
                            n["background-repeat"] = b.repeat.repeat, n["background-size"] = b.repeat.size;
                        } else if ("bd" === i) {
                            var s = o["bd"];
                            n["border-top"] = s.t.width + "px " + s.t.style + " " + s.t.color, n["border-right"] = s.r.width + "px " + s.r.style + " " + s.r.color, 
                            n["border-bottom"] = s.b.width + "px " + s.b.style + " " + s.b.color, n["border-left"] = s.l.width + "px " + s.l.style + " " + s.l.color;
                        } else if ("br" === i) {
                            var c = o["br"];
                            n["border-radius"] = c.tl + "px " + c.tr + "px " + c.br + "px " + c.bl + "px";
                        } else if ("sd" === i) {
                            var f = o["sd"], p = 2 * Math.PI / 360 * f.sd_angle, h = (Math.sin(p) * f.sd_width * -1).toFixed(2), d = (Math.cos(p) * f.sd_width).toFixed(2);
                            n["box-shadow"] = h + "px " + d + "px " + f.sd_blur + "px " + f.color;
                        } else if ("font" === i) {
                            var g = o["font"], y = parseFloat(g.size);
                            y = Math.floor(y * t), n["font-family"] = g.family, n["font-size"] = y + "px", n["color"] = g.color, 
                            n["font-weight"] = g.isB ? 600 : 400, n["font-style"] = g.isI ? "italic" : "normal", 
                            n["text-decoration"] = g.isU ? "underline" : "unset", n["text-align"] = g.align;
                        } else if ("line-height" === i || "width" === i || "height" === i || "font-size" === i || "top" === i || "left" === i || "right" === i || "bottom" === i) {
                            var m = o[i].value + "";
                            m.indexOf("%") < 0 && (m = parseFloat(m), m = (m * t).toFixed(2), "font-size" === i && (m = Math.floor(m)), 
                            m += "px"), n[i] = m;
                        } else if ("animation" === i) {
                            var _ = o["animation"];
                            n["animation-delay"] = _.delay + "s", n["animation-duration"] = _.duration + "s", 
                            n["animation-iteration-count"] = _["iteration-count"], a[u] = " animated " + _["animo_class"];
                        } else {
                            var w = o[i].value;
                            n[i] = w;
                        }
                        for (var x in n) r += x + ":" + n[x] + ";";
                        var A = u.replace(/\./g, "&");
                        A && (l[A] = r);
                    }
                    return [ l, a ];
                },
                queryString: function(e) {
                    if (!e) return {};
                    var l = e.indexOf("?");
                    e = e.substr(l + 1);
                    for (var a = new Object(), t = e.split("&"), u = 0; u < t.length; u++) a[t[u].split("=")[0]] = unescape(t[u].split("=")[1]);
                    return a;
                },
                isWechat: function() {
                    var e = window.navigator.userAgent.toLowerCase();
                    return "micromessenger" == e.match(/micromessenger/i);
                },
                assignStaff: function() {
                    var e = this;
                    e.Req.get("user_busStaff", {
                        user_id: e.user.userid,
                        source: e.source
                    }, function(l) {
                        console.log("busStaff: ", l), e.staff.staff_id = l.info.staff_id, e.staff.staff_chatid = l.info.staff_chatid, 
                        console.log("staff_info:", e.staff);
                    });
                },
                visitLog: function(e, l, a) {
                    var t = this;
                    t.Req.get("user_visit", {
                        user_id: t.user.userid,
                        staff_id: t.staff.staff_id,
                        op_type: e,
                        op_name: l,
                        pag_id: a
                    }, function(e) {
                        console.log("user_visit: ", e);
                    });
                },
                getAuthSetting: function(e) {
                    var l = this;
                    l.Req.get("index_authsetting", {}, function(e) {
                        console.log("auth_res: ", e), l.auth.auth_phone_page = e.info.auth_phone_page, l.auth.auth_user_page = e.info.auth_user_page;
                    });
                },
                ScreenWidth: 375,
                page: {
                    name: "小程序",
                    nv_color: "#ffffff",
                    bg_color: "#f2f2f2",
                    text_color: "#000000",
                    bg_img: "",
                    open_img: {},
                    show_tabbar: "true"
                },
                tabbar: {},
                common: {},
                user: {
                    userid: "",
                    openid: "",
                    image: "",
                    nick_name: "",
                    phone: "",
                    user_headimg: "",
                    sex: "",
                    birthday: "",
                    area: "",
                    wechat: "",
                    qq: "",
                    province: "",
                    city: "",
                    district: ""
                },
                auth: {
                    curr_auth_page: ""
                },
                staff: {
                    staff_id: 0,
                    staff_chatid: ""
                },
                source: 1,
                siteInfo: a("16c3"),
                business: {},
                getBusinessInfo: function() {
                    var e = this;
                    this.Req.get("Site_getSiteAbout", {}, function(l) {
                        e.business = l.info;
                    });
                },
                userAddress: [],
                userInfo: {},
                loginAuthPage: [],
                phoneAuthPage: [],
                platForm: 0
            };
        }).call(this, a("543d")["default"]);
    },
    ea23: function(e, l, a) {
        "use strict";
        (function(l) {
            var t = n(a("16c3")), u = n(a("cc08"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var r = {}, o = function(e, a, u, n, o) {
                var i = {
                    i: t.default.uniacid,
                    m: t.default.name,
                    v: "1.0.0",
                    from: "wxapp",
                    c: "entry",
                    a: "wxapp",
                    do: e,
                    platForm: getApp().platForm
                }, v = f(i, a), b = c(v) + "";
                if (r[b]) return console.log("请求处理中 !!!!!!"), n && r[b]["s"].push(n), void (o && r[b]["f"].push(o));
                r[b] = {}, n && (r[b]["s"] = [ n ]), o && (r[b]["f"] = [ o ]);
                var p = p || {};
                p.data = v || null, p.method = u || "GET", p.header = p.header || {
                    "Content-Type": "application/json"
                }, p.hashkey = b, p.hash = r[b], l.request({
                    url: t.default.siteroot,
                    data: p.data,
                    method: p.method,
                    header: p.header,
                    dataType: "text",
                    success: function(e) {
                        if (200 === e.statusCode) {
                            var a = e.data;
                            try {
                                a = s(e.data), a = JSON.parse(a);
                            } catch (k) {
                                a = JSON.parse(e.data);
                            }
                            if (200 === a.code) {
                                if (p.hash["s"]) {
                                    var t = !0, u = !1, n = void 0;
                                    try {
                                        for (var o, i = p.hash["s"][Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                            var v = o.value;
                                            v(a);
                                        }
                                    } catch (S) {
                                        u = !0, n = S;
                                    } finally {
                                        try {
                                            t || null == i.return || i.return();
                                        } finally {
                                            if (u) throw n;
                                        }
                                    }
                                }
                                delete r[p.hashkey];
                            } else if (404 === a.code) r = [], l.showToast({
                                title: a.msg,
                                icon: "none"
                            }), l.reLaunch({
                                url: "/yb_shopv2/pages/null-page/null-page"
                            }); else {
                                if (p.hash["f"]) {
                                    var b = !0, c = !1, f = void 0;
                                    try {
                                        for (var h, d = p.hash["f"][Symbol.iterator](); !(b = (h = d.next()).done); b = !0) {
                                            var g = h.value;
                                            g(a);
                                        }
                                    } catch (S) {
                                        c = !0, f = S;
                                    } finally {
                                        try {
                                            b || null == d.return || d.return();
                                        } finally {
                                            if (c) throw f;
                                        }
                                    }
                                }
                                delete r[p.hashkey];
                            }
                            console.log("data: ", a);
                        } else {
                            var y = "";
                            try {
                                try {
                                    y = s(e.data), y = JSON.parse(y);
                                } catch (k) {
                                    y = JSON.parse(e.data);
                                }
                                l.showToast({
                                    title: y.msg
                                }), 404 === y.code && (delete r[p.hashkey], l.reLaunch("/yb_shopv2/native/all/index?type=null_data"));
                            } catch (k) {
                                l.showToast({
                                    title: "请稍后重试"
                                });
                            }
                            if (p.hash["f"]) {
                                var m = !0, _ = !1, w = void 0;
                                try {
                                    for (var x, A = p.hash["f"][Symbol.iterator](); !(m = (x = A.next()).done); m = !0) {
                                        var O = x.value;
                                        O(y);
                                    }
                                } catch (S) {
                                    _ = !0, w = S;
                                } finally {
                                    try {
                                        m || null == A.return || A.return();
                                    } finally {
                                        if (_) throw w;
                                    }
                                }
                            }
                            delete r[p.hashkey];
                        }
                    },
                    fail: function() {
                        if (l.showToast({
                            title: "请稍后重试"
                        }), console.log("ajaxCache: ", r), console.log("opt.hash: ", p.hash), p.hash["f"]) {
                            var e = !0, a = !1, t = void 0;
                            try {
                                for (var u, n = p.hash["f"][Symbol.iterator](); !(e = (u = n.next()).done); e = !0) {
                                    var o = u.value;
                                    o();
                                }
                            } catch (i) {
                                a = !0, t = i;
                            } finally {
                                try {
                                    e || null == n.return || n.return();
                                } finally {
                                    if (a) throw t;
                                }
                            }
                        }
                        delete r[p.hashkey];
                    }
                });
            }, i = function(e, l, a, t) {
                o(e, l, "GET", a, t);
            }, v = function(e, l, a, t) {
                o(e, l, "POST", a, t);
            }, b = function(e, a, u, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image", i = arguments.length > 5 ? arguments[5] : void 0, v = {
                    i: t.default.uniacid,
                    m: t.default.name,
                    v: "1.0.0",
                    from: "wxapp",
                    c: "entry",
                    a: "wxapp",
                    do: e,
                    platForm: getApp().platForm
                }, b = f(v, a), p = c(b) + "";
                if (r[p]) return console.log("请求处理中 !!!!!!"), n && r[p]["s"].push(n), void (i && r[p]["f"].push(i));
                r[p] = {}, n && (r[p]["s"] = [ n ]), i && (r[p]["f"] = [ i ]);
                var h = h || {};
                h.data = b || null, h.hashkey = p, h.hash = r[p], l.uploadFile({
                    url: t.default.siteroot,
                    filePath: u,
                    name: o,
                    formData: h.data,
                    success: function(e) {
                        if (console.log(e), 200 === e.statusCode) {
                            var a = e.data;
                            if (a = s(a), a = JSON.parse(a), console.log("data: ", a), h.hash["s"]) {
                                var t = !0, u = !1, n = void 0;
                                try {
                                    for (var o, i = h.hash["s"][Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                        var v = o.value;
                                        v(a);
                                    }
                                } catch (y) {
                                    u = !0, n = y;
                                } finally {
                                    try {
                                        t || null == i.return || i.return();
                                    } finally {
                                        if (u) throw n;
                                    }
                                }
                            }
                            delete r[h.hashkey];
                        } else {
                            if (console.log("接口访问失败: ", e), l.showToast({
                                title: "请稍后重试"
                            }), h.hash["f"]) {
                                var b = !0, c = !1, f = void 0;
                                try {
                                    for (var p, d = h.hash["f"][Symbol.iterator](); !(b = (p = d.next()).done); b = !0) {
                                        var g = p.value;
                                        g();
                                    }
                                } catch (y) {
                                    c = !0, f = y;
                                } finally {
                                    try {
                                        b || null == d.return || d.return();
                                    } finally {
                                        if (c) throw f;
                                    }
                                }
                            }
                            delete r[h.hashkey];
                        }
                    }
                });
            }, s = function(e) {
                var l = t.default.siteroot;
                l = l.replace("https://", ""), l = l.replace("//", ""), l = l.replace("/app/index.php", "");
                var a = t.default.uniacid;
                l = u.default.MD5(l).toString().substr(7, 16), a = u.default.MD5(a).toString().substr(3, 16), 
                l = u.default.enc.Utf8.parse(l), a = u.default.enc.Utf8.parse(a);
                var n = u.default.AES.decrypt(e, l, {
                    iv: a,
                    mode: u.default.mode.CBC,
                    padding: u.default.pad.Pkcs7
                });
                return n.toString(u.default.enc.Utf8);
            }, c = function(e) {
                function l(e) {
                    var l = 2147483647, a = -2147483648;
                    return e > l || e < a ? 4294967295 & e : e;
                }
                var a = 0, t = "";
                for (var u in e) t += u + e[u];
                if ("" !== t) for (var n = 0; n < t.length; n++) a = 31 * a + t.charCodeAt(n), a = l(a);
                return a;
            };
            function f(e, l) {
                for (var a in l) e[a] = l[a];
                return e;
            }
            e.exports = {
                get: i,
                post: v,
                uploadfile: b,
                uploadImage: b,
                decrypt: s
            };
        }).call(this, a("543d")["default"]);
    },
    ffc5: function(e, l, a) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }), l.default = void 0;
        var t = {
            data: function() {
                return {
                    page: 1,
                    pageSize: 20,
                    end: !1
                };
            },
            methods: {
                page_onPullDownRefresh: function() {
                    this.page = 1, this.end = !1, this.getPageData();
                },
                page_onReachBottom: function() {
                    this.list.length && (this.page += 1, this.getPageData());
                }
            }
        };
        l.default = t;
    }
} ]);