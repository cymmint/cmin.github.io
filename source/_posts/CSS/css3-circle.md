---
title: CSS3圆形轨迹移动动画
top: 0
tags: [CSS动画]
categories: [CSS]
description: CSS3圆形轨迹移动动画
date: 2018-09-09 08:50:00
---


### 功能
用CSS3圆形轨迹移动动画，主要是设置贝塞尔曲线值为 **cubic-bezier(0.36,0,0.64,1)**，其它就是正常CSS3动画操作。

<!-- more -->


### CSS
``` css
@keyframes animX{
    0% {left: 0;}
    100% {left: 500px;}
}
@keyframes animY{
    0% {top: 0;}
    100% {top: 500px;}
}

#ball {
    width: 20px;
    height: 20px;
    background-color: #f66;
    border-radius: 50%;
    position: absolute;
    animation: animX 4s cubic-bezier(0.36,0,0.64,1) -2s infinite alternate, animY 4s cubic-bezier(0.36,0,0.64,1)  0s infinite alternate;
}

#loop {
    width:498px;
    height:498px;
    border:2px solid #999;
    border-radius:50%;
    position:absolute;
    left:9px;
    top:9px;
}
```

### HTML
``` css
<div id="loop"></div>
<div id="ball"></div>
```
