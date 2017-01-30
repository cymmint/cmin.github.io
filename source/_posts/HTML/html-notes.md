---
title: HTML 随手笔记
date: 2016-02-23 17:00:00
top: 0 #整数，越大越靠前
tags: [笔记]
categories: [HTML]
description: HTML 随手笔记
---


### 谷歌浏览器本地AJAX调试插件
`Allow-Control-Allow-Origin` 谷歌插件


###  谷歌浏览器调试手机网页
在地址栏输入:
`chrome://inspect` 可进入手机网页调试状态
注: 在地址栏输入 `chrome://about` 可以查看所有实用功能

<!-- more -->


### Select - multiple、size
``` html
select 设置multiple属性，可以显示多列，size为显示几列
<select multiple class="form-control" size="3">
```


### Flash置底、背景透明
``` html
<param name="wmode" value="opaque">
<param name="wmode" value="transparent">
注:
IE7及以下版本需要设置背景透明
style="background-color:transparent;"
```


### Marquee 用法
``` html
<marquee width="984" scrollamount="10" onMouseOut="this.start()" onMouseOver="this.stop()">内容</marquee>
注：
scrollamount: 设定活动字幕的滚动速度，单位pixels

scrolldelay: 设定活动字幕滚动两次之间的延迟时间，单位millisecond（毫秒）
值大了会有一步一停顿的效果
```


### DIV变可输出框
设置DIV属性 `contenteditable` 为 true 即可


### 屏蔽鼠标右键
oncontextmenu="window.event.returnValue=false"


### 禁止选取
属性
onselectstart="return false"

CSS
``` css
div {
    -moz-user-select:none;
    -webkit-user-select:none;
    user-select:none;
}
```

### 禁止复制
oncopy="return false;"
oncut="return false;"


### 禁止粘贴
onpaste="return false"


### 页面添加关键字、描述、ICON的写法
``` html
<meta name="keywords" content="会员卡 "/>
<meta name="description" content="极大扩展潜在客户群和实现企业运营的目标"/>
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
```


### A标签相关
``` html
去点击后的虚线框
<style>
a { blur:expression(this.onFocus=this.close());} /* 只支持IE，过多使用效率低 */ 　
a { blur:expression(this.onFocus=this.blur());} /* 只支持IE，过多使用效率低 */ 　
a:focus { outline-style: none; } /* IE不支持 */
</style>
<!--IE下可行-->
<a href="http://www.jb51.net/css/#" hidefocus="true">链接</a>

Href
<a href="tel:86-13617630861">拨电话</a>
<a href="sms:10086?body=102">发短信</a>
<a href="mailto:10086@qq.com">发邮件</a>


```


