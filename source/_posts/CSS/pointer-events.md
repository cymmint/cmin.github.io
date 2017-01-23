---
title: pointer-events属性
date: 2016-02-06 11:30:00
top: 0
tags: [CSS属性]
categories: [CSS]
description: pointer-events属性
---

### 说明
> `pointer-events` 是CSS3新增属性，设置或检索在何时成为属性事件的target。
**pointer-events:** _auto | none | visiblepainted | visiblefill | visiblestroke | visible | painted | fill | stroke | all_

<!-- more -->


### 属性值
- `auto:` 与pointer-events属性未指定时的表现效果相同。在svg内容上与visiblepainted值相同
- `none:` 元素永远不会成为鼠标事件的target；但是，当其子元素的pointer-events属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器
- 其他值只能应用在SVG上


### 兼容性
-[x] IE11+
-[x] Firefox 3.6+
-[x] Chrome 4.0+
-[x] iOS Safari 6.0+
-[x] Android Browser 2.1+


### 参考
[CSS参考手册](http://www.css88.com/book/css/properties/user-interface/pointer-events.htm)