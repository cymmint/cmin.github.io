---
title: HTML5和手机传感器
top: 0
tags: [传感器]
categories: [JS]
description: HTML5和手机传感器
date: 2016-05-16 11:22:00
---


> 监听手机的设备方向传感器，转化为 `background-position` 的百分比。

``` js
window.DeviceOrientationEvent && window.addEventListener("deviceorientation", function (event) {
    document.body.style.backgroundPosition = inRange(event.gamma/.45+50,0,100)+'% ' + inRange((event.beta-45)/.45+50,0,100)+'%';
});

function inRange(res,min,max){
    res = res>max ? max : res;
    res = res<min ? min : res;
    return res;
}
```
