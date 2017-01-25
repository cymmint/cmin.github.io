---
title: CSS 文字相关属性
date: 2015-01-04 17:37:00
top: 0 #整数，越大越靠前
tags: [CSS属性]
categories: [CSS]
description: CSS字体相关属性注解
---


### 字体风格
**font-style:** `normal` | `italic` | `oblique`
设置文本字体样式

``` css
p {
    font-style: normal; /*正常*/
    font-style: italic; /*斜体*/
    font-style: oblique; /*使文字倾斜，而不是去选取字体中的斜体字*/
}
```

<!-- more -->


### 字体参数
**font-variant:** `normal` | `small-caps`
将正常文字缩小一半尺寸后大写显示

``` css
p {
    font-variant: small-caps;
}
```


### 文字变形
**text-transform:** `none` | `capitalize` | `uppercase` | `lowercase` | `full-widt`
设置字母大小写

``` css
p {
    text-transform: none; /*无转换*/
    text-transform: capitalize; /*将每个单词的第一个字母转换成大写*/
    text-transform: uppercase; /*将每个单词转换成大写*/
    text-transform: lowercase; /*将每个单词转换成小写*/
    text-transform: full-width; /*将所有字符转换成fullwidth形式*/
}
```


### 文字修饰
**text-decoration:** `none` | `underline` | `overline` | `line-through` | `blink`
文本的装饰

``` css
p {
    text-decoration: none; /*无*/
    text-decoration: underline; /*文字下划线*/
    text-decoration: overline; /*文字上划线*/
    text-decoration: line-through; /*给文字划出删除线*/
    text-decoration: blink; /*赋予文字闪烁的效果*/
}
```

### 文字对齐
**text-align:** `left` | `right` | `center` | `start` | `end` | `justify` | `match-parent` | `justify-all`
文字水平对齐方式

``` css
p {
    text-align: left; /*左对齐*/
    text-align: center; /*居中对齐*/
    text-align: right; /*右对齐*/
    /*以下是CSS3新增属性*/
    text-align: justify; /*两端对齐，但对强制打断的行及最后一行不做处理*/
    text-align: justify-all; /*同上，但最后一行两端对齐*/
    text-align: match-parent; /*和inherit表现一致；[待补充]*/
    text-align: start; /*开始边界对齐*/
    text-align: end; /*结束边界对齐*/
}
```


### 文本大小
**text-size-adjust:** `auto` | `none` | `<percentage>`
设置**移动端页面**中对象文本的大小调整，目前要使用需要加各浏览器的私有前缀 **-webkit-, -moz-, -o-, -ms-**

#### 属性值
- **auto:** 文本大小根据设备尺寸进行调整
- **none:** 文本大小不会根据设备尺寸进行调整
- <percentage>: 用百分比来指定文本大小在设备尺寸不同的情况下如何调整

#### 说明
- 当样式表里**font-size < 12px**时，移动端浏览器里字体显示仍为12px，这时可以用`html { -webkit-text-size-adjust:none;}`
- -webkit-text-size-adjust 放在body上会导致页面缩放失效
- body会继承定义在html的样式
- 用-webkit-text-size-adjust不要定义成可继承的或全局的