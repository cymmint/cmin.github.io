---
title: JS实现addClass,removeClass,toggleClass
top: 0
tags: [Class]
categories: [JS]
description: JS实现addClass,removeClass,toggleClass 操作
date: 2016-03-03
---


jQuery操作class的方式非常强大，但是目前还有一些人不知道如何使用或者由于项目统一性的原因无法使用jquery。
在此写了一个利用原生js来实现对dom元素class的操作方法
- `addClass:` 为指定的dom元素添加样式
- `removeClass:` 删除指定dom元素的样式
- `toggleClass:` 如果存在(不存在)，就删除(添加)一个样式
- `hasClass:` 判断Class是否存在


<!-- more -->


下面是各方法源码：
``` js
//添加Class
function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

//删除Class
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

//切换Class
function toggleClass(obj,cls){
    if(hasClass(obj,cls)){
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
}

//判断是否存在
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
```
