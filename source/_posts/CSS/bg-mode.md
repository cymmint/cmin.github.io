---
title: CSS3 混合模式
top: 0
tags: [CSS属性]
categories: [CSS]
description: CSS3 背景混合模式mix-blend-mode background-blend-mode简介
date: 2015-01-04 17:00:00
---


### 关于混合模式
熟悉PS的人都应该知道混合模式，SVG以及Canvas中也有混合模式，本质上概念都是一样的。

<!-- more -->


### mix-blend-mode 属性
#### 作用
`mix-blend-mode` 字面意思就是混合模式。该CSS属性作用是让**元素内容和这个元素的背景以及下面的元素发生“混合”**

#### 属性值
``` css
div {
    mix-blend-mode: normal;          /*正常*/
    mix-blend-mode: multiply;        /*正片叠底*/
    mix-blend-mode: screen;          /*滤色*/
    mix-blend-mode: overlay;         /*叠加*/
    mix-blend-mode: darken;          /*变暗*/
    mix-blend-mode: lighten;         /*变亮*/
    mix-blend-mode: color-dodge;     /*颜色减淡*/
    mix-blend-mode: color-burn;      /*颜色加深*/
    mix-blend-mode: hard-light;      /*强光*/
    mix-blend-mode: soft-light;      /*柔光*/
    mix-blend-mode: difference;      /*差值*/
    mix-blend-mode: exclusion;       /*排除*/
    mix-blend-mode: hue;             /*色相*/
    mix-blend-mode: saturation;      /*饱和度*/
    mix-blend-mode: color;           /*颜色*/
    mix-blend-mode: luminosity;      /*亮度*/

    mix-blend-mode: initial;         /*初始*/
    mix-blend-mode: inherit;         /*继承*/
    mix-blend-mode: unset;           /*复原*/
}
```


### background-blend-mode 属性
`background-blend-mode` 这个要更好理解一点，背景的混合模式。可以是**背景图片间**的混合，也可以**是背景图片和背景色**的混合。

