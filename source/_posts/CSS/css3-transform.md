---
title: CSS3 transform 相关属性
date: 2015-3-25 16:00:00
top: 0 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: CSS3 transform 相关属性详解
---


### transform 2D变换
- `translate()` 位移
- `rotate()` 旋转
- `scale()` 缩放
- `skew()` 斜拉
- `matrix()` 把所有2D转换方法组合，需要六个参数

<!-- more -->


#### translate() 位移
单位：长度，如px、em
``` css
div {
    transform: translate(x,y); /* 沿着X和Y轴移动元素 */
    transform: translateX(n);  /* 沿着X轴移动元素 */
    transform: translateY(n);  /* 沿着Y轴移动元素 */
}
```


#### rotate() 旋转
单位：deg、grad、rad、turn（度、梯度、弧度、圈）
``` css
div {
    transform: rotate(-30deg); /* 负值表示逆时针 */
}
```


#### scale() 缩放
放大X，Y（宽、高）多少倍，单位数值
``` css
div {
    transform: scaleX(n);  /* 改变元素的宽度 */
    transform: scaleY(n);  /* 改变元素的高度 */
    transform: scale(x,y); /* 改变元素的宽度和高度 */
}
```


#### skew() 斜拉
单位：deg、grad、rad、turn（度、梯度、弧度、圈）
``` css
div {
    transform: skewX(angle);  /* 沿着X轴斜拉 */
    transform: skewY(angle);  /* 沿着Y轴斜拉 */
    transform: skew(x-angle,y-angle); /* 沿着X和Y轴斜拉 */
}
```


#### matrix() 矩阵
matrix() 2D平面的移动变换，2D变换矩阵为3*3
matrix3d() 3D平面的移动变换，3D变换矩阵为4*4
基本语法 `transform: matrix(a, c, b, d, tx, ty);`
a, c, b, d是一个二维矩阵:
tx, ty就是就是基于X和Y坐标重新定位元素。
 a: 宽的缩放值
 c: 沿着Y轴的倾斜转换
 b: 沿着X轴的倾斜转换
 d: 高的缩放值
tx: 沿X轴的位移
ty: 沿y轴的位移
[**用法示例**](http://www.css88.com/tool/css3Preview/Transform-Matrix.html)


### transform 3D转换
``` css
div {
    transform: translate3d(x,y,z); /* 定义3D位移转化 */
    transform: translateX(x); /* 定义3D位移转化，仅使用用于X轴的值 */
    transform: translateY(y); /* 定义3D位移转化，仅使用用于Y轴的值 */
    transform: translateZ(z); /* 定义3D位移转化，仅使用用于Z轴的值 */
    transform: scale3d(x,y,z); /* 定义3D缩放转换 */
    transform: scaleX(x); /* 定义3D缩放转换，通过给定一个X轴的值 */
    transform: scaleY(y); /* 定义3D缩放转换，通过给定一个Y轴的值 */
    transform: scaleZ(z); /* 定义3D缩放转换，通过给定一个Z轴的值 */
    transform: rotate3d(x,y,z,angle); /* 定义3D旋转 */
    transform: rotateX(angle); /* 定义沿X轴的3D旋转 */
    transform: rotateY(angle); /* 定义沿Y轴的3D旋转 */
    transform: rotateZ(angle); /* 定义沿Z轴的3D旋转 */
    transform: perspective(n); /* 定义3D转换元素的透视视图 */
}
```


### transform-origin 属性
设置对象以某个原点进行转换，参数值为 background-position 类似


### transform-style 属性
指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化

``` css
div {
    transform-style: flat;        /* 指定子元素位于此元素所在平面内 */
    transform-style: preserve-3d; /* 指定子元素定位在三维空间内 */
}
```



