---
title: 常用小样式集合
date: 2015-01-04 15:30:00
top: 0
tags: [CSS属性]
categories: [CSS]
description: CSS常用小样式集合
---


### 文字超长度加点
``` css
/* 多行（只支持webkit浏览器）*/
.p1 { display:-webkit-box; -webkit-box-orient:vertical; margin-bottom:.05rem; -webkit-line-clamp:2; overflow:hidden; text-overflow:ellipsis; }
/* 多行 */
.p2 { width:150px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
```

<!-- more -->


### CSS3 Loading 效果
``` css 需要一张png图片
.loading { background-position:0 100%; transform:rotate(0deg); -webkit-transform:rotate(0deg); -webkit-transition-duration:0; -webkit-animation-name:loading; -webkit-animation-duration:1.5s; -webkit-animation-iteration-count:infinite; -webkit-animation-timing-function:linear;}
@-webkit-keyframes loading {
    from { -webkit-transform:rotate(0deg);}
    to   { -webkit-transform:rotate(360deg);}
}
```


### 设置 placeholder 属性提示文字颜色
``` css
::-webkit-input-placeholder { color:#ccc;}
::-moz-placeholder { color:#ccc;}
:-moz-placeholder { color:#ccc;}
:-ms-input-placeholder { color:#ccc;}
```


### 背景层透明（兼容IE）
``` css
.opa { filter:alpha(opacity=80); opacity:0.8; }
```


### 文本换行
``` css
p { white-space:nowrap;} /* 强制不换行 */
p { word-wrap:break-word; word-break:normal;} /* 自动换行 */
p { word-break:break-all;} /* 强制英文单词断行 */
```


### 最优的浮动清除方案
``` css
.clear:after { visibility:hidden; display:block; font-size:0; content:""; clear:both; height:0;}
* html .clear {zoom:1;}
*:first-child + html .clear {zoom:1;}
```


### DIV内容垂直居中
``` css
box-middle { display:-webkit-box; display:-ms-flexbox; display:-webkit-flex; display:flex; -webkit-box-pack:center; -ms-flex-pack:center; -webkit-justify-content:center; justify-content:center; -webkit-box-align:center; -ms-flex-align:center; -webkit-align-items:center; align-items:center;}
```


### 弹框浏览器窗口居中显示
``` css
.message {
    position:fixed!important;
    position:absolute;/*IE6*/
    z-index:9;
    left:50%;
    top:50%;
    width:400px;
    height:300px;
    background:#ddd;
    overflow:hidden;
    margin-top:0px;
    margin-left:-200px!important; /*宽的1/2 */
    margin-top:-150px!important; /*高的1/2*/
    _top:expression(eval(document.compatMode &&
         document.compatMode=='CSS1Compat') ?
         documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/
         document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/

}
```


### 取消Select默认样式
``` css
select { -webkit-appearance: none; -moz-appearance: none; appearance:none;}
select::-ms-expand { background:none; border:none; color:rgba(255,255,255,0);} /*IE 10+*/
```


### 向上箭头（非45度角）
``` html
<span class="icon-arwTop"><i class="i1"></i><i class="i2"></i></span>
```

``` css
.icon-arwTop { position:absolute; left:50%; bottom:10px; display:block; width:66px; height:30px; margin-left:-33px; }
.icon-arwTop i { position:absolute; top:0; display:block; width:40px; height:12px; border-radius:6px; background:rgba(220, 220, 220, 0.95); }
.icon-arwTop i.i1 { left:0; -webkit-transform:rotate(-20deg); box-shadow:-1px 0 0 rgba(111, 111, 111, 0.5); }
.icon-arwTop i.i2 { right:0; -webkit-transform:rotate(20deg); box-shadow:1px 0 0 rgba(111, 111, 111, 0.5); }
```


### 向右箭头
``` css
.icon-arwR:after { position:absolute; top:43%; right:12px; content:""; width:13px; height:13px; border:2px solid #999; border-width:2px 2px 0 0; -webkit-transform:rotate(45deg); -moz-transform:rotate(45deg); -ms-transform:rotate(45deg); transform:rotate(45deg); }
```


### 背景渐变
``` css
.bg { background-image:-webkit-linear-gradient(#f9f9f9, #eaeaea); background-image:-moz-linear-gradient(#f9f9f9, #eaeaea); background-image:linear-gradient(#f9f9f9, #eaeaea); }
```


### 高光移动
``` html
<div class="t2"><img src="images/1.jpg"><i class="light"></i></div>
```

``` css
.t2 { position:relative; width:206px; height:147px; }
.t2 .light { position:absolute; left:-90px; top:0; width:50%; height:100%; background-image:-webkit-linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)); background-color:red; -webkit-transform:skewx(-25deg); -webkit-transition:0s; }
.t2:hover .light { left:160px; -webkit-transition:0.5s; }
```


### 固定头部条（兼容IE）
``` css
.topBar { position:fixed; z-index:101; overflow:hidden; width:100%; height:44px; left:0; top:0; background:url(images/topBarMC.png) repeat-x;}
* html,
* html body { _background:url(about:blank) fixed;}
* html .topBar { _position:absolute; _bottom:auto; _top:expression(eval(document.documentElement.scrollTop));}
```


### 桃心
``` html
<div class="heart"></div>
```
``` css
.heart { position:relative; width:200px; height:200px; background:#F01; -webkit-transform:rotate(45deg); -moz-transform:rotate(45deg); -o-transform:rotate(45deg); -ms-transform:rotate(45deg); transform:rotate(45deg); }
.heart:after,
.heart:before { content:""; position:absolute; width:100%; height:100%; border-radius:100%; background:inherit; }
.heart:after { left:-50%; top:0; }
.heart:before { right:0; top:-50%; }
```


### 小三角
``` css
.s_m_sub_cur { position:relative; }
.s_m_sub_cur:after { position:absolute; right:15px; top:11px; content:""; width:0; height:0; line-height:0; font-size:0; overflow:hidden; border-color:transparent transparent transparent #DDD; border-style:solid; border-width:7px; }
/*兼容IE6的小三角*/
.s_m_sub_cur { display:inline-block; width:0; height:0; margin-top:-6px; border-style:solid; border-color:transparent; _border-color:#FFF; border-right-color:#F90; border-width:6px 6px 6px 0; overflow:hidden; }
```


### input文本框中禁用中文输入法
``` css
input, textarea { ime-mode:disabled; }
::-ms-clear,
::-ms-reveal { display:none; }
/* 注
：ime-mode 为非标准属性，该属性只有IE和Firefox支持
::-ms-clear 是文本清除按钮，也就是input右方的叉叉
::-ms-reveal 是密码查看按钮，也就密码框右边的小眼睛
*/
```


### mobile Web 自适应的CSS初始设置
``` css
html { font-size:87.5px;}
@media (min-width:300px) {
    html { font-size:100px;}
}
@media (min-width:360px) {
    html { font-size:112.5px;}
}
@media (min-width:400px) {
    html { font-size:125px;}
}
body, html { min-height:100%; min-width:320px;}
body { -webkit-text-size-adjust:none; font:normal 14px/18px arial; color:#333;}
/*html设置的值是控制外层元素的宽高，body设置的值控制子元素的宽高*/
```


### -ms-interpolation-mode 属性
``` css
/*IE7中自带的-ms-interpolation-mode属性可以解决缩放失真问题*/
.img01 { -ms-interpolation-mode:Nearest-Neighbor;}
.img02 { -ms-interpolation-mode:normal;}
.img03 { -ms-interpolation-mode:bicubic;}
```


### 选择器-文字
``` css
p:first-letter { } /*选择每个 <p> 元素的首字母。*/
p:first-line { }   /*选择每个 <p> 元素的首行。*/
p:first-child { }  /*选择属于父元素的第一个子元素的每个 <p> 元素*/
```


### 折角效果
``` css
.note { position:relative; background:linear-gradient(-150deg, transparent 1.5em, #fff 0);}
.note::before { position:absolute; top:0; right:0; content:''; width:3em; height:1.73em; background:linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, .4) 0) 100% 0 no-repeat;}
```



### 文字加波浪符
``` css 需要根据字体大小来调整背景图
a {
background: -webkit-linear-gradient(135deg, transparent 40%, red 0, red 60%, transparent 0) 0 1em, -webkit-linear-gradient(45deg, transparent 40%, red 0, red 60%, transparent 0) 0.1em 1em;
background: linear-gradient(-45deg, transparent 40%, red 0, red 60%, transparent 0) 0 1em, linear-gradient(45deg, transparent 40%, red 0, red 60%, transparent 0) 0.1em 1em;
background-repeat: repeat-x;
background-size: .2em .1em;
text-shadow: .05em 0 white, -.05em 0 white;
}
```


### IE6下PNG滤镜透明
``` css
.tBR { _background:none; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=image, src="images/topBarRC.png");}
/* 注
sizingMethod:
 crop: 剪切图片以适应对象尺寸
 image: 默认值。增大或减小对象的尺寸边界以适应图片的尺寸
 scale: 缩放图片以适应对象的尺寸边界
src: 是图片插入到HTML中的路径，不是插入到CSS文件的路径
*/
 ```