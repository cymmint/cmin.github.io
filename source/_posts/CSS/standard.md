---
title: CSS 书写规范与顺序
top: 0
tags: [经验]
categories: [CSS]
description: CSS 书写规范与顺序
date: 2015-01-15 12:30:00
---


### CSS书写顺序

CSS选择器中的属性顺序： `显示属性` -> `自身属性` -> `文本属性` -> `背景` -> `其它`

- 1、位置属性(position, z-index, display, float, …)
- 2、大小(width, height, padding, margin)
- 3、文字系列(font, line-height, letter-spacing, …)
- 4、背景(background, border, …)
- 5、其他(animation, transition, …)

原因：这个顺序是项目开发的代码标准，符合浏览器的渲染顺序，最终达到提高执行效率目的

<!-- more -->


### CSS书写规范

- 使用CSS缩写属性，比如padding,margin,font等
- 去掉小数点前的“0”
- 16进制颜色代码缩写的就缩写
