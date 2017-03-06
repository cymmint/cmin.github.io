---
title: 关于像素的一些概念
top: 0
tags: [像素]
categories: [IDE]
description: 关于像素的一些概念介绍
date: 2016-09-01 15:15:00
---


> 在进行具体的分析之前，首先得知道下面这些关键性基本概念。

### 物理像素(physical pixel)
一个物理像素是显示器(手机屏幕)上最小的物理显示单元，在操作系统的调度下，每一个设备像素都有自己的颜色值和亮度值。

<!--more-->


### 设备独立像素(density-independent pixel)
设备独立像素(也叫密度无关像素)，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，然后由相关系统转换为物理像素。
所以说，物理像素和设备独立像素之间存在着一定的对应关系，这就是接下来要说的设备像素比。

### 设备像素比(device pixel ratio )
设备像素比(简称dpr)定义了物理像素和设备独立像素的对应关系，它的值可以按如下的公式的得到：
**`设备像素比 = 物理像素 / 设备独立像素`**  // 在某一方向上，x方向或者y方向

在javascript中，可以通过 `window.devicePixelRatio` 获取到当前设备的dpr。
在css中，可以通过 **-webkit-device-pixel-ratio，-webkit-min-device-pixel-ratio和 -webkit-max-device-pixel-ratio** 进行媒体查询，对不同dpr的设备，做一些样式适配(这里只针对webkit内核的浏览器和webview)。

---

综合上面几个概念，一起举例说明下：
以iphone6为例：
1. 设备宽高为375×667，可以理解为设备独立像素(或css像素)。
2. dpr为2，根据上面的计算公式，其物理像素就应该×2，为750×1334。
