---
title: cmin-Slider 焦点图切换插件
date: 2015-01-06 11:36:26
tags: [JS, jQuery, Slider, 焦点图]
categories: [jQuery]
description: Slider是基本jQuery的Banner(焦点图)切换插件
---

### 关于Slider
cmin-Slider是基本jQuery的Banner(焦点图)切换插件，于2015年一次项目需要开发的，后经过多次优化和扩展，当前最新版本V2.1.1


### 可设置参数
- 是否显示左右切换按钮、是否始终显示按钮
- 是否显示Dot，Dot背景条，Dot序号
- 首次显示等几张banner
- 是否自动切换，自动切换间隔时间
- 两种切换效果[fade, slide]，及效果过渡时间
- 切换完成后，回调方法
- 其它样式（如宽度，位置等），可直接通过CSS设置


### 目录说明
根目录下的Develop文件夹是开发源文件，Build是项目中使用文件


### 引用文件
#### HTML
``` html
<div class="fs-wrap">
    <div class="fs-img">
        <a style="background-image:url(images/b1.jpg)"></a>
        <a style="background-image:url(images/b2.jpg)"></a>
        <a style="background-image:url(images/b3.jpg)"></a>
    </div>
</div>
```

#### CSS文件
``` html
<link rel="stylesheet" href="css/slider.min.css">
```

#### JS文件
``` html
<script src="js/jquery.min.js"></script>
<script src="js/slider.min.js"></script>
```


### 调用方法
``` js
$(".fs-wrap").CSlider({
    effect: "fade", //切换效果 [fade, slide]
    emit: "mouseenter", //触发事件
    isAuto: true, //是否自动切换Silde
    isDot: true, //是否有Dot
    isDotBg: false, //Dot是否显示背景条
    isDotNum: false, //Dot是否显示序号
    isPN: true, //是否显示左右Button
    isPNOpen: true, //是否始终显示左右Button（false:即鼠标移入Slider才显示）
    isPNTxt: true, //左右Button是否有箭头
    speed: 5000, //Silde切换时间 U.ms
    effectTime: 500, //效果切换时间 U.ms
    onset: 0, //开始图片显示
    callback: function () { //切换完成后回调
        console.log(this);
    }
});
```


### 运行效果
[Build demo](http://cymmint.coding.me/cmin-Slider/Build/slider.html)


### 更新历史
- 2.1.1 添加isPNOpen参数，设置左右Button是否一直显示 [2017-01-09]
- 2.1.0 优化了参数名称及已知BUG [2017-01-07]
- 2.0.0 新增两种切换效果模式，删除JS里设置CSS [2017-01-04]
- ……
- 1.0.0 项目创建 [2015-01-06]