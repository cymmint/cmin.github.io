---
title: 分秒倒计时
top: 0
tags: [倒计时]
categories: [jQuery]
description: 一个毫秒数值的分秒倒计时
date: 2016-05-10 20:10:00
---

### 实现功能
> 它能实现一个毫秒数值的分秒倒计时，适用场景：比如一个定时待支付订单还有多少秒自动关闭的时间提示

<!-- more -->


### 源代码
#### HTML
``` html
<span class="tags" data-ms="正整数毫秒"></span>
```


#### JS
``` js
function timer(elm, callback) {
    var $time = $(elm);
    var M = {
        isNum: function ($this) {
            var sec = $this.data("ms");
            return !isNaN(sec) && parseInt(sec) > 0 ? parseInt(sec) : 0;
        },
        time: function ($this, sec) {
            if(--sec > 0) {
                var m = Math.floor(sec/60), s = Math.floor(sec - m * 60);
                $this.text((m > 9 ? m : "0" + m) + "分" + (s > 9 ? s : "0" + s) + "秒");
                setTimeout(function () {
                    M.time($this, sec);
                }, 1000);
            } else {
                if(typeof callback == 'function') {
                    callback.call();
                }
            }
        }
    };

    $time.each(function () {
        var $this = $(this), sec = M.isNum($this);
        if(sec) {
            M.time($this, sec);
        }
    });
}
```


### 调用方法
``` js
timer(".tags",function () { //回调方法
    console.log('时间到');
});
```
