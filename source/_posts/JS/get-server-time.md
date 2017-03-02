---
title: JS获取服务器时间
top: 0
tags: [时间]
categories: [JS]
description: JS获取服务器时间的方法
date: 2016-11-29 10:30:00
---


用js做时间校正，获取本机时间，是存在bug的。使用JS也可获取到服务器时间，原理是使用 AJAX 请求，返回的头部信息就含有服务器端的时间信息，获取到就可以了。

<!-- more -->


### 依赖jQuery
``` js
return new Date($.ajax({async: false}).getResponseHeader("Date"));
```
以上函数返回的就是一个Date对象，注意在使用ajax时必须同步，要不然无法返回时间日期；`无需填写请求链接`。


### 原生JS
``` js
function getServerDate(){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new window.XMLHttpRequest();
    }else{ // ie
        xhr = new ActiveObject("Microsoft")
    }

    xhr.open("GET","/",false)//false不可变
    xhr.send(null);
    var date = xhr.getResponseHeader("Date");
    return new Date(date);
}
```

同样返回的是一个Date对象，xhr.open()必须使用同步；
无需填写请求链接；
open，send，和getResponseHeader 必须按序编写；
如需使用异步请求，可监听onreadystatechange状态来做不同的操作。



