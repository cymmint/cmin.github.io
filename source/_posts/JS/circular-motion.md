---
title: JS实现圆周运动
top: 0
tags: [画圆]
categories: [JS]
description: JS实现圆周运动
date: 2018-09-09 10:00:00
---


> JS实现圆周运动，其实都是由简单的知识变化而来的，所以这里讲的圆周运动也是离不开三角函数的。

### 了解三角函数
正弦（sin） = 对边/斜边
余弦（cos） = 邻边/斜边
正切（tan） = 对边/邻边
余切（cot） = 邻边/对边

在JS中：
`Math.sin(x)` x 的正玄值。返回值在 -1.0 到 1.0 之间；
`Math.cos(x)` x 的余弦值。返回的是 -1.0 到 1.0 之间的数；
这两个函数中的 x 都是指的“弧度”而非“角度”，弧度的计算公式为： `2 * PI / 360 * 角度`
> 因此，如果要计算30°角度的弧度，由上公式可得：`PI / 180 * 30`


### 圆弧轨迹坐标
如何得到圆弧轨迹的每个坐标点呢？
解决思路：根据三角形的正玄、余弦来得值；
假设一个圆的圆心坐标是(cx, cy)，半径为r，弧度为 angle，则圆弧每个坐标点的(x, y)：
`x = Math.sin(angle * 2 * Math.PI / 360) * r`
`y = Math.cos(angle * 2 * Math.PI / 360) * r`


### 代码实现方法
``` js JS
$(window).on('load', function() {
    var cx = 300; //圆心坐标X
    var cy = 300; //圆心坐标Y
    var r = 100; //半径
    var angle = 0; //运动轨迹角度 0~360

    var T = setInterval(function() {
        ++angle;
        var x = Math.sin(angle * Math.PI / 180) * r; //运动弧度坐标x
        var y = Math.cos(angle * Math.PI / 180) * r; //运动弧度坐标y
        var $dot = $('<span class="dot"><span>');
        console.log(x, y);
        $dot.css({left: cx + x, top: cy - y}); //顶上顺时针
        /**
         * 变化
         * cx,cy 分别加减x,y，圆弧的运动的起点方位、方向会发生变化
         */
        //$dot.css({left: cx - x, top: cy - y}); //顶上逆时针
        $('body').append($dot);

        if(angle > 360) {
            clearInterval(T);
        }
    }, 10);
});
```

``` css CSS
.dot {
    position:absolute;
    width:6px;
    height:6px;
    background-color:red;
    border-radius:100%;
}
```
