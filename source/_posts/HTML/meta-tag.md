---
title: 常用的 Meta 标签
top: 0
tags: [Meta]
categories: [HTML]
description: 常用的 Meta 标签
date: 2015-01-14 12:55:00
---


``` html
视图窗口，移动端特属的标签
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">
width            - viewport的宽度
height           - viewport的高度
initial-scale    - 初始的缩放比例
minimum-scale    - 允许用户缩放到的最小比例
maximum-scale    - 允许用户缩放到的最大比例
user-scalable    - 用户是否可以手动缩放
```

<!-- more -->


``` html
是否启动webapp功能，会删除默认的苹果工具栏和菜单栏
<meta name="apple-mobile-web-app-capable" content="yes">

当启动webapp功能时，显示手机信号、时间、电池的顶部导航栏的颜色，默认值为default（白色）
<meta name="apple-mobile-web-app-status-bar-style" content="black">

告诉iphone的safari浏览器，此网站对应app是什么，然后在页面上面显示一个app下载信息
<meta name="apple-itunes-app" content="app-id=425349261">

忽略页面中的数字识别为电话号码
<meta name="format-detection" content="telephone=no">

同样还有一个email识别
<meta name="format-detection" content="email=no">

当然两者可以写在一起（电话号码，email）
<meta name="format-detection" content="telephone=no, email=no">

IOS中Safari设置保存到桌面图标
<link rel="apple-touch-icon" href="custom_icon.png">
这是IOS中Safari特有的meta，是在你保存某个页面到桌面的时候使用这张图作为桌面图标。
所以尺寸和iphone上的一致，是57*57px

针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓
<meta name="HandheldFriendly" content="true">


避免IE使用兼容模式
<meta http-equiv="X-UA-Compatible" content="IE=edge">
windows phone 点击无高光
<meta name="msapplication-tap-highlight" content="no">
微软的老式浏览器
<meta name="MobileOptimized" content="320">


UC强制竖屏
<meta name="screen-orientation" content="portrait">
UC强制全屏
<meta name="full-screen" content="yes">


QQ强制竖屏
<meta name="x5-orientation" content="portrait">
QQ强制竖屏
<meta name="x5-orientation" content="portrait">
QQ强制全屏
<meta name="x5-fullscreen" content="true">
QQ应用模式
<meta name="x5-page-mode" content="app">


启用360浏览器的极速模式(webkit)
<meta name="renderer" content="webkit">


下面三个是清除缓存 微信浏览器缓存严重又无刷新；这个方法调试的时候很方便
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">


允许HTTPS 和 HTTP 混合加载
<meta http-equiv="content-security-policy" content="block-all-mixed-content">


IE9 模式支持全范围的既定行业标准
<meta http-equiv="X-UA-Compatible" content="IE=9">

IE8 模式强制浏览器按照 IE8 标准模式渲染文档
<meta http-equiv="X-UA-Compatible" content="IE=8">

IE7 模式强制浏览器按照 IE7 标准模式渲染文档
<meta http-equiv="X-UA-Compatible" content="IE=7">

Emulate IE 模式告诉 IE 使用指令来决定如果渲染文档。标准模式下以 IE9/8/7 渲染，怪癖模式下以 IE5 渲染
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">

Edge 模式告诉 IE 以最高级模式渲染文档
<meta http-equiv="X-UA-Compatible" content="IE=edge">

使用以下代码强制 IE 使用 Chrome Frame 渲染，如果检测到 IE 并未安装 Google Frame，则弹出对话框提示安装
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<script src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>
<script>CFInstall.check();</script>

最佳的兼容模式方案，结合考虑以上两种：
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
```

