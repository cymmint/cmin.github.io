---
title: CSS3 animation 相关属性
top: 0
tags: [CSS属性]
categories: [CSS]
description: CSS3 animation 相关属性详解
date: 2015-03-26 09:00:00
---


### 功能
复合属性，设置对象所应用的动画特效，如果提供多组属性值以**逗号分隔**

> **animation-name:** 设置对象所应用的动画名称
**animation-duration:** 设置对象动画的持续时间
**animation-timing-function:** 设置对象动画的过渡类型
**animation-delay:** 设置对象动画延迟的时间
**animation-iteration-count:** 设置对象动画的循环次数
**animation-direction:** 设置对象动画在循环中是否反向运动
**animation-fill-mode:** 设置对象动画时间之外的状态
**animation-play-state:** 设置对象动画的状态

<!-- more -->


### @keyframes 关键帧
提起 **animation** 就不得不说 @keyframes，它是指定动画名称和动画效果。
@keyframes 定义的动画名称用来被 animation-name 所使用，定义动画时，简单的动画可以直接使用关键字 from 和 to，即从一种状态过渡到另一种状态。
``` css 示例:
@keyframes test-animation {
	from { opacity: 0; }
	to { opacity: 1; }
}
```

### animation-name 属性
设置对象所应用的动画名称，必须与规则 **@keyframes** 配合使用；对应的脚本特性为 **animationName**
``` css
div {
    animation-name: none; /* 默认值，不引用任何动画名称 */
    animation-name: <identifier>; /* 定义一个或多个动画名称(identifier标识) */
}
```


### animation-duration 属性
设置对象动画的持续时间，如果设置多个属性值，以逗号进行分隔；对应的脚本特性为 **animationDuration**

``` css
div {
    animation-duration: 0.3s[, 500ms]; /* 动画的持续0.3秒 */
}
```


### animation-timing-function 属性
设置对象动画的过渡类型，如果设置多个属性值，以逗号进行分隔；对应的脚本特性为 **animationTimingFunction**

``` css
div {
    animation-timing-function: linear;      /* 线性过渡 */
    animation-timing-function: ease;        /* 平滑过渡 */
    animation-timing-function: ease-in;     /* 由慢到快 */
    animation-timing-function: ease-out;    /* 由快到慢 */
    animation-timing-function: ease-in-out; /* 由慢到快再到慢 */

    animation-timing-function: step-start; /* 等同于 steps(1, start)，步进函数 */
    animation-timing-function: step-end; /* 等同于 steps(1, end)，步进函数 */

    animation-timing-function: cubic-bezier(0.0, 0.0, 1.0, 1.0); /* 贝塞尔曲线 */
}
```

#### steps 步进函数
> steps(<integer>[, [ start | end ] ]?)：接受两个参数的步进函数。
- 第一个参数必须为正整数，指定函数的步数
- 第二个参数取值可以是start或end，指定每一步的值发生变化的时间点
- 第二个参数是可选的，默认值为end


#### cubic-bezier 贝塞尔曲线
> cubic-bezier(<number>, <number>, <number>, <number>): 特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内

[贝塞尔曲线-在线生成](http://cubic-bezier.com/)



### animation-delay 属性
设置对象动画的延迟时间，如果设置多个属性值，以逗号进行分隔；对应的脚本特性为 **animationDelay**

``` css
div {
    animation-delay: 0.3s[, 500ms];
}
```


### animation-iteration-count 属性
设置对象动画的循环次数；对应的脚本特性为 **animationIterationCount**

``` css
div {
    animation-iteration-count: infinite; /* 无限循环 */
    animation-iteration-count: 10; /* 循环10次 */
}
```



### animation-direction 属性
设置对象动画在循环中是否反向运动；对应的脚本特性为 **animationDirection**

``` css
div {
    animation-direction: normal;    /* 正常方向 */
    animation-direction: reverse;   /* 反方向运行 */
    animation-direction: alternate; /* 动画先正常运行再反方向运行，并持续交替运行 */
    animation-direction: alternate-reverse; /* 与上相反，并持续交替运行 */
}
```



### animation-fill-mode 属性
设置对象动画时间之外的状态；对应的脚本特性为 **animationFillMode**

``` css
div {
    animation-fill-mode: none;      /* 默认值。不设置 */
    animation-fill-mode: forwards;  /* 设置对象状态为动画结束时的状态 */
    animation-fill-mode: backwards; /* 设置对象状态为动画开始时的状态 */
    animation-fill-mode: both;      /* 设置对象状态为动画结束或开始的状态 */
}
```



### animation-play-state 属性
检索或设置对象动画的状态；对应的脚本特性为 **animationPlayState**

``` css
div {
    animation-play-state: running; /* 默认。运动 */
    animation-play-state: paused;  /* 暂停 */
}
```
