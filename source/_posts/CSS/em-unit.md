---
title: CSS em单位弹性布局
date: 2015-05-04 17:20:00
top: 0 #整数，越大越靠前
tags: [CSS单位]
categories: [CSS]
description: CSS em单位弹性布局
---


### 弹性布局

- 浏览器的默认字体大小是16px

- 如果元素自身没有设置字体大小，那么元素自身上的所有属性值如“boder、width、height、padding、margin、line-height”等值，我们都可以按下面的公式来计算
    > 1 ÷ 父元素的font-size × 需要转换的像素值 = em值

<!-- more -->

- 这一种千万要慢慢理解，不然很容易与第二点混了。如果元素设置了字体大小，那么字体大小的转换依旧按第二条公式计算，也就是下面的：
    > 1 ÷ 父元素的font-size × 需要转换的像素值 = em值


元素设置了字体大小，此元素的其他属性，如“border、width、height、padding、margin、line-height”计算就需要按照下面的公式来计算：`1 ÷ 元素自身的font-size × 需要转换的像素值 = em值`

**`总之，元素设置体现继承`**



### 创建CSS样式
``` css
    html { font-size: 100%;}
    body { font-size: 1em;}
    #wrap {
        width: 46.25em; /*740px ÷ 16 = 46.25em */
        margin: 1.5em auto; /*24px ÷ 16 = 1.5em*/
        border: 0.0625em solid #ccc; /*1px ÷ 16 = 0.0625em*/
    }
```
