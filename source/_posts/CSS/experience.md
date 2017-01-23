---
title: CSS日常经验杂谈
date: 2017-01-22 20:20:00
top: 0
tags: [经验]
categories: [CSS]
description: CSS日常经验杂谈与总结
---


### IE下Table与浮动层处于同级时，浮动失效解决方法
> 为浮动层设置背景 `background:url(about:blank);`设置一个不是背景的背景

<!-- more -->


### iOS中textbox文本框清除圆角
在iOS、Mac safari中，所有的textbox, select, checkbox都会被强制美化为圆角。但在特殊情况下需要清除圆角时发现iOS中使用以下传统的css无效。
> 解决方法：`border-radius:0; -webkit-appearance:none;`