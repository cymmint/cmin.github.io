;(function ($) {
    $.fn.slider = function (opts) {
        var define = {
            effect: "fade", //切换效果 [fade, slide, rect]
            axis: "x", //rect效果移动轴 [x, y]
            emit: "mouseenter", //触发事件 [mouseenter, click, dbclick]
            isAuto: true, //是否自动切换Silde
            isDot: true, //是否有Dot
            isDotBg: false, //Dot是否显示背景条
            isDotNum: false, //Dot是否显示序号
            isDotEmit: true, //Dot是否支持事件
            isPN: true, //是否显示左右Button
            isPNOpen: true, //是否始终显示左右Button（false:即鼠标移入Slider才显示）
            isPNTxt: true, //左右Button是否有箭头
            isQuick: true, //是否允许快速切换（即动画未完成时是否允许下一个动画切换）
            isLoop: true, //是否允许循环切换
            speed: 5000, //Silde切换时间 U.ms
            effectTime: 500, //效果切换时间 U.ms
            onset: 0, //开始图片显示
            callback: null //切换完成后回调
        };

        var methods = {
            config: function () {
                opts = $.extend({}, define, opts);
                opts.effect = (opts.effect + '').toLowerCase();
                opts.emit = /^(mouseenter|click|dbclick)$/i.test(opts.emit) ? opts.emit.toLowerCase() : "mouseenter";
                opts.effectTime = /^\d+$/.test(opts.effectTime) ? opts.effectTime : 500;
                opts.onset = /^\d+$/.test(opts.onset) ? opts.onset : 0;
                if (opts.isAuto) {
                    opts.speed = /^\d+$/.test(opts.speed) ? opts.speed : 5000;
                    if (opts.speed / 2 <= opts.effectTime) {
                        opts.effectTime = opts.speed / 2;
                    }
                }
                if (opts.effect == "rect") {
                    opts.axis = /^(x|y)$/i.test(opts.axis) ? opts.axis.toLowerCase() : "x";
                }
            },
            init: function ($this, args) {
                var htm = "";
                var str = "";

                try {
                    args.img = $this.find(".fs-img").children();
                    args.count = args.img.length;
                    args.cid = opts.onset >= args.count ? 0 : opts.onset; //当前显示位置
                    args.nid = args.cid; //下一个显示ID
                    args.dir = null; //slide切换方向
                    args.time = 0;

                    //背景条
                    if (opts.isDotBg) {
                        htm += '<div class="fs-d_bg"></div>';
                    }
                    //Dot
                    if (opts.isDot) {
                        htm += '<div class="fs-dot">';
                        for (var i = 0; i < args.count; i++) {
                            str = args.cid == i ? "class=on >" : ">";
                            htm += opts.isDotNum ? '<a ' + str + (i + 1) + '</a>' : '<a ' + str + '</a>';
                        }
                        htm += '</div>';
                    }
                    //左右Button
                    if (opts.isPN) {
                        str = opts.isPNOpen ? ' style="display:block" ' : ' style="display:none" ';
                        htm += '<a class="fs-prev"' + str + '>' + (opts.isPNTxt ? "&lt;" : "") + '</a><a class="fs-next"' + str + '>' + (opts.isPNTxt ? "&gt;" : "") + '</a>';
                    }
                    $this.append(htm);

                    //Set Fade
                    if (!/^(slide|rect)$/.test(opts.effect)) {
                        args.img.eq(args.nid).css("display", "block");
                    }
                    //Set Slide
                    if (opts.effect == "slide") {
                        args.img.parent().addClass(opts.effect);
                        args.img.eq(args.nid).css("left", "0");
                    }
                    //Set Rect
                    if (opts.effect == "rect") {
                        args.size = opts.axis == 'x' ? $this.find(".fs-img").width() : $this.find(".fs-img").height();
                        args.img.wrapAll('<div class="rect ' + opts.axis + '"></div>');
                        args.rect = $this.find(".rect");
                        str = opts.axis == 'x' ? "width" : "height";
                        args.rect.css(str, opts.isLoop ? (args.count + 2) * args.size : args.count * args.size);
                        args.img.css(str, args.size);
                        //循环切换
                        if (opts.isLoop) {
                            args.rect.prepend(args.img.eq(-1).clone());
                            args.rect.append(args.img.eq(0).clone());
                        }
                        str = opts.axis == 'x' ? "left" : "top";
                        args.offset = opts.isLoop ? -args.size * (args.nid + 1) : -args.size * args.nid;
                        args.rect.css(str, args.offset);
                    }
                    //<=IE8
                    if (!$.support.opacity) {
                        $this.find("a").attr("hidefocus", true);
                    }
                    return true;
                } catch (e) {
                    return false;
                }
            },
            dot: function (args) {
                if (opts.isDot) {
                    args.dot.removeClass("on").eq(args.nid).addClass("on");
                }
            },
            callback: function (args) {
                if ($.isFunction(opts.callback)) {
                    opts.callback.call(args);
                }
            },
            fade: function (args) {
                var _this = this;
                args.img.eq(args.cid).stop(true, false).fadeOut(opts.effectTime);
                args.img.eq(args.nid).stop(true, false).fadeIn(opts.effectTime, function () {
                    _this.callback(args);
                });
                _this.dot(args);
            },
            slide: function (args) {
                var _this = this;
                args.img.eq(args.cid).stop(true, true).animate({
                    left: args.dir == 'l' ? '-100%' : '100%'
                }, opts.effectTime);
                args.img.eq(args.nid).stop(true, true).css("left", args.dir == 'l' ? '100%' : '-100%').animate({left: "0"}, opts.effectTime, function () {
                    _this.callback(args);
                });
                _this.dot(args);
            },
            rect: function (args) {
                var _this = this;
                var attr = {};
                var dir = opts.axis == 'x' ? "left" : "top";

                args.offset = opts.isLoop ? -args.size * (args.nid + 1) : -args.size * args.nid;
                if (opts.isLoop) {
                    if (args.cid == args.count - 1 && args.nid == 0) {
                        args.offset = -args.size * (args.count + 1);
                    }
                    if (args.nid == args.count - 1 && args.cid == 0) {
                        args.offset = 0;
                    }
                }
                attr[dir] = args.offset;
                args.rect.stop(true, false).animate(attr, opts.effectTime, function () {
                    if (opts.isLoop) {
                        args.offset = -args.size * (args.nid + 1);
                        args.rect.css(dir, args.offset);
                    }
                    _this.callback(args);
                });
                _this.dot(args);
            },
            effect: function (args) {
                switch (opts.effect) {
                    case 'slide':
                        methods.slide(args);
                        break;
                    case 'rect':
                        methods.rect(args);
                        break;
                    case 'fade':
                    default:
                        methods.fade(args);
                }
            },
            clear: function (args) {
                clearInterval(args.time);
            },
            btnDot: function (args) {
                var _this = this;
                args.dot.on(opts.emit, function () {
                    if (_this.quick(args)) {
                        var _self = $(this);
                        if (!_self.is(".on")) {
                            args.cid = args.dot.siblings(".on").index();
                            args.nid = _self.index();
                            args.dir = args.cid < args.nid ? 'l' : 'r';
                            _this.effect(args);
                        }
                    }
                });
            },
            quick: function (args) {
                if (opts.effect == "rect" && opts.isLoop) {
                    return !args.rect.is(":animated") ? !0 : !1;
                } else {
                    return opts.isQuick ? !0 : !args.img.eq(args.cid).is(":animated") ? !0 : !1;
                }
            },
            btnLR: function (args) {
                var _this = this;
                args.prev.on("click", function () {
                    if (_this.quick(args)) {
                        args.cid = args.nid;
                        args.nid = args.cid - 1;
                        args.nid = args.nid < 0 ? args.count - 1 : args.nid;
                        args.dir = 'r';
                        _this.effect(args);
                    }
                });
                args.next.on("click", function () {
                    if (_this.quick(args)) {
                        args.cid = args.nid;
                        args.nid = args.cid + 1;
                        args.nid = args.nid >= args.count ? 0 : args.nid;
                        args.dir = 'l';
                        _this.effect(args);
                    }
                });
            },
            auto: function (args) {
                var _this = this;
                args.cid = args.nid;
                args.nid = args.cid + 1 >= args.count ? 0 : args.cid + 1;
                args.dir = 'l';
                _this.effect(args);
            },
            main: function ($this, args) {
                var _this = this;

                //Dot cut
                if (opts.isDot) {
                    args.dot = $this.find(".fs-dot").children();
                    if (opts.isDotEmit) {
                        _this.btnDot(args);
                    } else {
                        args.dot.parent().addClass("not");
                    }
                }

                //Prev&Next cut
                if (opts.isPN) {
                    args.prev = $this.find(".fs-prev");
                    args.next = $this.find(".fs-next");
                    _this.btnLR(args);
                }

                //In Box
                $this.hover(function () {
                    _this.clear(args);
                    if (opts.isPN && !opts.isPNOpen) {
                        args.prev.css("display", "block");
                        args.next.css("display", "block");
                    }
                }, function () {
                    if (opts.isAuto) {
                        args.time = setInterval(function () {
                            _this.auto(args);
                        }, opts.speed);
                    }
                    if (opts.isPN && !opts.isPNOpen) {
                        args.prev.css("display", "none");
                        args.next.css("display", "none");
                    }
                });

                //Auto run
                if (opts.isAuto) {
                    args.time = setInterval(function () {
                        _this.auto(args);
                    }, opts.speed);
                }

                //Callback
                _this.callback(args);
            }
        };
        methods.config();

        return this.each(function () {
            var $this = $(this);
            var args = {};

            if (!methods.init($this, args)) {
                alert("Slide好像有问题~");
                return true;
            }
            if (args.count > 1) {
                methods.main($this, args);
            }
        });
    }
})(jQuery);

