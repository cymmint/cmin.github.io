---
title: 泽元CMS标签
date: 2015-01-05 10:10:00
top: 0 #整数，越大越靠前
tags: [CMS, 笔记]
categories: [HTML]
description: 泽元CMS标签简介
---

### 新闻列表

``` html
<cms:list item="Article" name="今日聚焦/新闻" count="1" begin="0" type="Recent"></cms:list>
```

属性|描述
---|---
${Article.Title} | 新闻标题
${Article.SubTitle} | 新闻副标题
${Article.ShortTitle} | 新闻短标题
${Article.Content} | 新闻内容
${Article.Author} | 新闻作者
${Article.Link} | 新闻链接地址
${Article.Summary} | 新闻摘要
${Article.PublishDate (Format=yyyy-MM-dd)} | 新闻日期
${Article.NewsThumbnail} | 新闻缩短图(自定义的)
${Article.FocusUrl} | 焦点图链接地址(自定义的)

其中：charWidth 是设置文字数量的，例：${Article.Title|charWidth=24}

<!-- more -->



### 判断形式
``` html
<cms:list item="Article" name="今日聚焦/新闻" count="5" begin="0" type="Recent">
    <% if(i==0){ %>
        <li><a href="${article.Link}">${article.title|charwidth=18}</a></li>
    <% } else  { %>
        <li><a href="${article.Link}">${article.title|charwidth=24}</a></li>
    <% } %>
</cms:list>
```


### 获取栏目链接
``` html
<cms:link type='catalog' name='牛博士宽频' />
<!--注：获取链接时，用栏目ID无法获取成功-->
```



### 返回首页
``` html
<a href="..">返回首页</a>
```



### 日期、时间
`${Article.PublishDate|Format=yyyy-MM-dd}`
G 年代标志符(Text) AD
y 年(Number) 1996
M 月(Text & Number) July & 07
d 日(Number) 10
h 时在上午或下午
(1~12)
(Number) 12
H 时在一天中
(0~23)
(Number) 0
m 分(Number) 30

