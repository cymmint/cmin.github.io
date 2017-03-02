---
title: CSS3 filter 详解
top: 0
tags: [CSS属性]
categories: [CSS]
description: CSS3 filter 详解
date: 2015-02-11 16:11:00
---


### 功能
CSS滤镜属性，可以在元素呈现之前为元素的渲染提供一些效果，如模糊、颜色转移之类的；滤镜常用于调整图像、背景、边框的渲染

<!-- more -->


### 属性值
目前使用此属性，还需要添加各自浏览器的私有前缀[webkit、ms、moz]，此处示例代码用的是webkit前缀

属性 | 解释 | 值 | 示例
---|---|---|---
grayscale   | 灰度    | 值为0-1之间的小数 | -webkit-filter:grayscale(1);
sepia       | 褐色    | 值为0-1之间的小数 | -webkit-filter:sepia(1);
saturate    | 饱和度   | 值为num         | -webkit-filter:saturate(0.5);
hue-rotate  | 色相旋转 | 值为angle       | -webkit-filter:hue-rotate(90deg);
invert      | 反色    | 值为0-1之间的小数 | -webkit-filter:invert(1);
opacity     | 透明度   | 值为0-1之间的小数 | -webkit-filter:opacity(.2);
brightness  | 亮度    | 值为0-1之间的小数 | -webkit-filter:brightness(.5);
contrast    | 对比度   | 值为num         | -webkit-filter:contrast(2);
blur        | 模糊    | 值为length       | -webkit-filter:blur(3px);
drop-shadow | 阴影    |                 | -webkit-filter:drop-shadow(5px 5px 5px #ccc);


### 效果预览
![](/images/blog/css/css3-filter.jpg)