---
title: 去除chrome表单自动填充淡黄色背景
date: 2017-01-05 10:20:00
top: 9 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: 去除chrome表单自动填充淡黄色背景
---

### 利用CSS -webkit-autofill属性
利用内阴影颜色覆盖自动填充背景色，但如果input必须设置为无背景效果就不是很好了

``` css
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px white inset;
}
```

<!-- more -->


### 利用HTML表单属性
关闭表单自动完成属性 autocomplete="off"（此方法好像没有效果）


### 利用JS
是遍历需要执行的Input标签，然后插入自身DOM（_插入其它的不行_），在其获得焦点时删除其子节点，否则在表单提交的时数据可能会有问题

``` js
if (navigator.userAgent.toLowerCase().indexOf("applewebkit") >= 0) {
    $(window).load(function () {
        $('input').each(function () {
            $(this).append(this.outerHTML);
        });
    });
    $('input').focus(function () {
        $(this).children().remove();
    });
}
```
