---
title: webkit-overflow-scrolling 属性
date: 2016-03-17 16:16:00
top: 0 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: IOS下控制元素在移动设备上是否使用滚动回弹效果
---


### webkit-overflow-scrolling 属性
**-webkit-overflow-scrolling:** `auto` | `touch`
IOS下控制元素在移动设备上是否使用滚动回弹效果，安卓上貌似不存在此问题

``` css
div {
    -webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */
    -webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */
}
```

<!-- more -->


### 一些问题

#### 部分手机滚动时有卡顿
分析可能是手机配置低，DOM渲染跟不上
**解决方法：**使用GPU渲染

``` css
div {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translateZ(0px);
}
```

#### 元素设置position属性后不能在滑动
当你给一个元素设置过`position:absolute`或者`position:relative`后再增加`-webkit-overflow-scrolling: touch`属性后，此时滑动几次后可滚动区域会卡主，不能在滑动
**解决方法：**这时给元素增加个**`z-index`**值就可以了

``` css
div {
    position: absolute;
    z-index: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
```
