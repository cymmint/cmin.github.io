---
title: CSS 一些常用hack
date: 2015-03-12 09:30:00
top: 0 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: CSS 一些常用hack
---


### IE 针对样式名 Hack

``` css
*html span { color:#fc0;}         /* 仅 IE6 可识别 [ *html ] */
*+html span { color:#93C;}        /* 仅 IE7 可识别 [ *+html ] */
html>/**/body span { color:#0ff;} /* IE8+(含) 可识别 */
html>body span { color:#f00;}     /* IE7+(含) 可识别 */
*body span { color:#999;}         /* IE7-(含) 可识别 */
```

<!-- more -->


### IE 针对属性 Hack

``` css
span {
    color:#000;    /* 是浏览器都支持 */
    _color:#f00;   /* IE6-(含) 可识别 */
    *color:#ccc;   /* IE7-(含) 可识别 */
    *+color:#60f;  /* IE7-(含) 可识别 */
    color:#c3c\0;  /* IE8+(含) 可识别 */
    color:#ff0\9;  /* IE6+(含) 可识别 */
    color:#6ff!important; /* !important 是提高属性的优先权，但IE6不支持 */
}

/* IE9+(含) */
:root span { color:#ff0\9;}

/* IE10+(含) */
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { /*css*/ }
```


### IE 条件注释

``` html
<!--[if IE 5]> 仅IE5.5可见 <![endif]-->
<!--[if gt IE 5.5]> 仅IE 5.5以上可见 <![endif]-->
<!--[if lt IE 5.5]> 仅IE 5.5以下可见 <![endif]-->
<!--[if gte IE 5.5]> IE 5.5及以上可见 <![endif]-->
<!--[if lte IE 5.5]> IE 5.5及以下可见 <![endif]-->
<!--[if !IE 5.5]> 非IE 5.5的IE可见 <![endif]-->
```


### Meta 标签
``` html
<!-- 强制浏览器按照 IE7 标准模式渲染文档 -->
<meta http-equiv="x-ua-compatible" content="ie=7" />

<!-- Edge模式告诉 IE 以最高级模式渲染文档 -->
<meta http-equiv="x-ua-compatible" content="ie=edge">
```



### JS 区分浏览器
针对IE11 及 非IE浏览器，
IE11下document.documentMode为11，所以html标签上会加ie11样式类；
而非IE浏览器的document.documentMode为undefined，所以html标签上会加ieundefined样式

``` js
if (/*@cc_on!@*/false) { //IE
    document.documentElement.className += ' ie' + document.documentMode; //结果：ie当前版本号
}

if (/*@cc_on!@*/true) { //!IE
    document.documentElement.className += ' ie' + document.documentMode; //结果：ieundefined
}
```

