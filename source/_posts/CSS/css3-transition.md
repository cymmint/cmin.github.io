---
title: CSS3 transition 相关属性
date: 2015-3-24 14:20:00
top: 0 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: CSS3 transition 相关属性详解
---


### 功能
复合属性，用于设置对象变换时的过渡效果，多与 transform 配合使用
- **transition-property:** 设置对象中的参与过渡的属性
- **transition-duration:** 设置对象过渡的持续时间
- **transition-timing-function:** 设置对象中过渡的动画类型
- **transition-delay:** 设置对象延迟过渡的时间

<!-- more -->


``` css 示例-缩写方式:
div {
    transition: border-color .5s ease-in .1s,
		background-color .5s ease-in .1s,
		color .5s ease-in .1s;
}
```



### transition-property 属性
设置对象中的参与过渡的属性；默认值为：`all`，默认为所有可以进行过渡的css属性；对应的脚本特性为 **transitionProperty**

过渡效果的属性

属性名称 | 类型
---|---
background-color    | color
background-image    | only gradients
background-position | percentage, length
border-bottom-color | color
border-bottom-width | length
[更多…](http://www.css88.com/book/css/properties/transition/transition-property.htm) |

### 其它属性
这三 [transition-duration](/blog/2015-03/CSS/css3-animation/#animation-duration-属性)、[transition-timing-function](/blog/2015-03/CSS/css3-animation/#animation-timing-function-属性)、[transition-delay](/blog/2015-03/CSS/css3-animation/#animation-delay-属性) 的取值类似于 animation相应属性
