---
title: CSS3 box-reflect 倒影属性
date: 2015-11-08 15:40:00
top: 0 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: CSS3 box-reflect 倒影属性
---


### 功能
说起倒影效果，在传统网页中，我们只能使用 PS 进行事先将倒影设计好，然后导入到网页中，这样不但耗费资源，也阻碍了开发的效率。而CSS3新增了 box-reflect 倒影属性设置对象倒影。

<!-- more -->

### 属性值
none: 无倒影

#### `定义方向`
**above:** 指定倒影在对象的上边
**below:** 指定倒影在对象的下边
**left:** 指定倒影在对象的左边
**right:** 指定倒影在对象的右边

#### `定义反射偏移的距离`
用长度值来定义倒影与对象之间的间隔（% | num），可以为负值

#### `定义遮罩图像`
none: 无遮罩图像
url: 使用绝对或相对地址指定遮罩图像
linear-gradient: 使用线性渐变创建遮罩图像
radial-gradient: 使用径向(放射性)渐变创建遮罩图像
repeating-linear-gradient: 使用重复的线性渐变创建背遮罩像
repeating-radial-gradient: 使用重复的径向(放射性)渐变创建遮罩图像


``` css 示例:
img {
	width:100px;
	-webkit-box-reflect:below 0 -webkit-linear-gradient(transparent,transparent 50%,rgba(255,255,255,.3));
}
```

