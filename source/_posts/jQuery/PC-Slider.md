---
title: Slider焦点图切换插件
top: 10
tags: [Slider]
categories: [jQuery]
description: Slider是基本jQuery的Banner(焦点图)切换插件
date: 2015-01-06 11:36:00
---

### 关于Slider
> Slider是基本jQuery的Banner(焦点图)切换插件，于2015年一次项目需要开发的，后经过多次优化和扩展。

<!-- more -->


### 可设置效果
- 是否显示左右按钮、是否始终显示左右按钮，是否显示默认箭头
- 是否显示Dot，Dot背景条，Dot序号
- Dot是否支持事件，以及事件类型
- 首次显示等几张banner
- 是否自动切换，自动切换间隔时间
- 3种切换效果[fade, slide, rect]，默认fade，及效果过渡时间
- rect效果支持 X|Y 轴的切换，rect效果是否循环切换
- rect效果是否允许快速切换
- 切换完成后的方法回调
- 其它样式（如宽度，位置等），可通过CSS直接设置



### 源文件下载
#### 本地
- [JS](/examples/jQuery/PC-Slider/js/slider.js)
- [CSS](/examples/jQuery/PC-Slider/css/slider.css)
- [LESS](/examples/jQuery/PC-Slider/css/slider.less) （提供LESS预处理语言版本，其它CSS预处理需自行转换）

#### Coding.net
- [Slider](https://coding.net/u/cymmint/p/cmin-Slider)



### 引用方法
``` html
<!--在head标签内添加:-->
<link rel="stylesheet" href="css/slider.min.css">
<script src="js/jquery.min.js"></script>
<script src="js/slider.min.js"></script>

<!--在body标签内添加:-->
<div class="fs-wrap">
    <div class="fs-img">
        <a style="background-image:url(images/1.jpg)"></a>
        <a style="background-image:url(images/2.jpg)"></a>
        <a style="background-image:url(images/3.jpg)"></a>
    </div>
</div>
```



### 调用方法
``` js
$(".fs-wrap").CSlider({
    effect: "fade", //切换效果 [fade, slide, rect]
    axis: "x", //rect效果移动轴 [x, y]
    emit: "mouseenter", //触发事件 [mouseenter, click, dbclick]
    isAuto: true, //是否自动切换Silde
    isDot: true, //是否有Dot
    isDotBg: false, //Dot是否显示背景条
    isDotNum: false, //Dot是否显示序号
    isDotEmit: true, //Dot是否支持事件
    isPN: true, //是否显示左右Button
    isPNOpen: true, //是否始终显示左右Button（false:即鼠标移入Slider才显示）
    isPNTxt: true, //左右Button是否有箭头
    isQuick: true, //是否允许快速切换（即动画未完成时是否允许下一个动画切换）
    isLoop: true, //是否允许循环切换
    speed: 5000, //Silde切换时间 U.ms
    effectTime: 500, //效果切换时间 U.ms
    onset: 0, //开始图片显示
    callback: function () { //切换完成后回调
        console.log(this);
    }
});
```



### 参数说明
- 时间参数单位为毫秒
- 字符参数将强制小写
- 数值参数为正整数
- isXxx 型参数都为布尔型[true, false]
- effect 参数非[fade, slide, rect]，将强制设置为 fade
- emit 参数非[mouseenter, click, dbclick]，将强制设置为 mouseenter
- effectTime 参数非正整数时，将强制设置为 500
- isAuto 为true时，speed 参数非正整数时，将强制设置为 5000
- isAuto 为true时，effectTime 参数值必须小于 speed，否则将强制设置为 speed 的0.5倍
- isPN 为true时，如果图片数量为 1，将强制设置为 false
- axis 参数非[x, y]，将强制设置为 x



### 运行效果
{% iframe /examples/jQuery/PC-Slider/index.html 100% 910 %}



### 更新日志
- 2.2.1 优化回调方法逻辑，以及各参数间的设置逻辑 [2017-02-09]
- 2.2.0 新增rect切换模式，支持 X|Y 轴的切换 [2017-02-08]
- 2.1.2 添加isDotEmit:Dot是否支持事件，isQuick:是否允许快速切换 [2017-02-07]
- 2.1.1 添加isPNOpen参数，设置左右Button是否一直显示 [2017-01-09]
- 2.1.0 优化了参数名称及已知BUG [2017-01-07]
- 2.0.0 新增两种切换模式，删除JS里设置CSS [2017-01-04]
- ……
- 1.0.0 项目创建 [2015-01-06]
