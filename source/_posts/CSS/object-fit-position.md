---
title: CSS3 Object-fit和Object-position属性
date: 2015-12-09 16:54:00
top: 0 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: CSS3 Object-fit和Object-position属性用法介绍
---


### 功能
在CSS中，替换元素(replaced elements)，如img和video元素一直存在长宽比的控制问题，特别在在响应式设计中，如何在不同设备，不同分辨率下对这些元素的长宽进行响应。如果不想失去图像的长宽比例，让图片占据一定的空间。按照`长宽比例调整和缩略图像`的画面比挤压和拉伸图像是一个更优雅的解决方案。
在CSS3中这种情况可以使用object-fit和object-position来处理。

<!-- more -->



### object-fit属性
#### 语法
**object-fit:** `fill` | `contain` | `cover` | `none` | `scale-down`
`object-fit`：指定了替换元素的内容应该如何使用他的宽度和高度来填充其容器，功能类似background-size
适合于替换元素，比如：video、object、img、&lt;input type="image"&gt;、svg:image、svg:video等

``` css
img {
    object-fit: fill; /*内容拉伸，填满整个容器（默认值）*/
    object-fit: contain; /*内容全部都显示*/
    object-fit: cover; /*容器没有留白*/
    object-fit: none; /*该多大就多大*/
    object-fit: scale-down; /*当内容尺寸 > 壳子尺寸时，效果与contain一致；反之则与none一致*/
}
```

#### 效果
![](/images/blog/css/object-fit.jpg)


### object-position属性
`object-position`：指定了替换元素在容器中的对齐方式，功能类似background-position
适合于替换元素，比如：video、object、img、&lt;input type="image"&gt;、svg:image、svg:video等


### 浏览器兼容性
- IE 全家不支持，包括最新的edge
- android 4.4.4+ 支持，Chrome 29+ 支持
- Safari 7.1+ 和 iOS 8+ 支持object-fit，不支持object-position




