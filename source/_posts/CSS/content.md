---
title: CSS content、counter-increment、counter-reset详解
top: 0
tags: [CSS属性]
categories: [CSS]
description: CSS content、counter-increment、counter-reset详解
date: 2015-03-19 16:00:00
---


CSS 2.1 提供了在任何元素上设置递增序列的方法，而不仅仅是在LI元素上。本文主要关注以下CSS伪元素和属性：
- :before
- :after
- content
- counter-increment
- counter-reset

<!-- more -->


### content 概述
content 属性与 :before 及 :after 伪元素配合使用，来插入生成内容

``` html 示例:
<ul id="link">
    <li><a href="http://www.qianduan.net">前端观察</a></li>
    <li><a href="http://bestcss.net">BestCSS</a></li>
    <li><a href="http://bbs.qianduan.net">前端社区</a></li>
</ul>
<style>
#link a:after {
    content:" - <" attr(href) ">";
    color: #ff0000;
    font-style: italic;
}
</style>
```

效果：
![效果](/images/blog/css/css-content.png)



### content 属性
**content:** `none` | `normal` | `<string>` | `url` | `open-quote` | `close-quote` | `no-open-quote` | `no-close-quote` | `attr(attribute)` | `counter(name[, style])`

- none: 不生成任何值
- attr(x): 插入标签属性值
- url: 使用指定的绝对或相对地址插入一个外部资源
- string: 插入字符串
- counter: 计数器，用于插入排序标识


### counter-increment 和 counter-reset
counter 并不能单独工作，如果你只是写
p:before {content: counter(subtitles, decimal);} //subtitles是自定义名字，decimal是单位


``` html 示例:
<h1>第一个标题</h1>
<h2>章节</h2>
<p>文字....</p>
<h2>另一个章节</h2>
<p>文字....</p>

<h1>另一个标题</h1>
<h2>章节</h2>
<p>文字....</p>
<h2>另一个章节</h2>
<p>文字....</p>

<style>
/*在每个h1的前面添加计数器，并在每一个h1后面重设h2的计数器*/
h1 { counter-increment:headers; counter-reset:subsections;}
h1:before { content:counter(headers);}
h2 { counter-increment:subsections;}
h2:before { content:counter(headers) "." counter(subsections) ":";}
</style>
```





