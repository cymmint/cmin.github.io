---
title: WAP、WML 学习手记
top: 0
tags: [WML, WAP]
categories: [HTML]
description: WAP、WML 学习手记
date: 2015-03-11 11:30:00
---


### 简介

#### 什么是 WAP？
无线产品提出了 WAP（Wireless Application Protocol） 的理念，此标准的要点是在无线设备上展示因特网内容。WAP 标准基于因特网标准（HTML、XML 以及 TCP/IP）。它包括 WML 语言规范、WMLScript 规范以及无线电话应用接口规范（WTAI）

#### 什么是 WML？
WML 指无线标记语言。它是一种从 HTML 继承而来的标记语言，但是 WML 基于 XML，因此它较 HTML 更严格。WML 被用来创建可显示在 WAP 浏览器中的页面，用WML编写的页面被称为 DECKS。

#### 什么是 WMLScript？
WML(Wireless Markup Language) 使用 WMLScript 在客户端运行简单的代码，WMLScript 是一种轻量级的 JavaScript 语言，不过，WML 脚本并不嵌在 WML 页面中，WML页面仅仅含有对脚本 URL 的引用，WML 脚本在 WAP 浏览器运行之前，需要先在服务器上被编译为字节编码。

<!-- more -->



### 基础

#### WAP 主页
WML 使用标签 - 类似 HTML - 但是语法更严格且遵守 XML 1.0 标准。
WML 页面的扩展名是 *.WML。

#### WML 标签
WML 几乎都是关于文本的。会拖慢手持设备之间通信的标签不会成为 WML 标志的组成部分。表格和图像的使用被严格限制。
由于 WML 是一种 XML 应用，因此其标签对大小写敏感（<wml> 与 <WML> 不同），且标签必须正确关闭。

#### WML Deck 和 Card
WML 页面叫作 DECK（卡片组）。DECK是由一系列CARD（卡片）构造的，卡片之间通过链接彼此联系

#### 示例
``` xml
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.1//EN" "http://www.wapforum.org/DTD/wml_1.1.xml">
<wml>
    <card id="HTML" title="HTML Tutorial">
        <p>One</p>
    </card>
    <card id="HTML" title="HTML Tutorial">
        <p>Two</p>
    </card>
</wml>
```


### WML 格式化

**Deck 和 Card**
WML 页面通常称为 "deck"。每个 deck 含有一系列的 card。card 元素可包含文本、标记、链接、输入字段、task、图像等等。卡片之间通过链接彼此相互联系
注：每次只显示一个 card


### WML 链接、图像、输入

#### 链接 - 可以制作 WML 卡片来显示 WML 的锚功能

&lt;anchor&gt; 标签：总是要规定一个任务 ("go", "prev", 或 "refresh")。任务定义了当用户选择此链接时要做的事情。在本例中，当用户选择 "Next page"，其任务是 "前往 test.wml"：
``` xml 示例:
<anchor>Next page<go href="test.wml"/></anchor>
```
&lt;a&gt;标签：永远执行 "go" 任务，不带参数。
下面的例子与那个 &lt;anchor&gt; 标签的例子起得作用是相同的：
``` xml 示例:
<a href="test.wml">Next page</a>
```

#### 图像
``` xml
<img src="/images/stickman.wbmp" alt="stickman"/>
注：.wbmp 是唯一可以显示在 WAP 浏览器中的图像类型。
```

#### 输入字段
``` xml
<input name="Sex" size="15"/>
```

#### 选择和选项
``` xml 示例:
<select multiple="true">
    <option value="htm">HTML Tutorial</option>
    <option value="xml">XML Tutorial</option>
    <option value="wap">WAP Tutorial</option>
</select>
```

#### Fieldset
可以制作 WML 卡片来显示 WML 的 fieldset 函数
``` xml 示例:
<fieldset title="CD Info">
    Title: <input name="title" type="text"/><br/>
    Prize: <input name="prize" type="text"/>
</fieldset>
```


### WML 任务 - 定义了事件发生时所执行的动作

#### Go 任务：表示 切换到一个新卡片的动作
``` xml 示例:
<anchor>Go To Test<go href="test.wml"/></anchor>
```


#### Prev 任务：表示 后退到前面的卡片的动作
``` xml 示例:
<anchor>Go To Test<prev/></anchor>
```


#### Refresh 任务：刷新一些指定的卡片变量
``` xml 示例:
<anchor>
    Refresh this page<go href="thispage.wml"/>
    <refresh><setvar name="x" value="30"/></refresh>
</anchor>
表示：当用户点击该链接时，它会刷新页面，同时变量 x 的值将被设置为 30
```

#### Noop 任务
&lt;noop&gt; 任务规定不做任何事（noop 指的是 "no operation"），此标签用于覆盖卡片组级别的元素。
&lt;do&gt; 标签用于在用户点击屏幕上的某个单词或短语时启动一个任务
``` xml 示例:
<do name="back" type="prev" label="Back"><noop/></do>
此例表示：使用 <do> 标签向卡片添加一个 "Back" 链接，当用户点击这个 "Back" 链接时，它被带回前面的卡片。
但是 <noop> 标签阻止了这个操作，所以当用户点击 "Back" 时，不会发生任何事情
```



### WML 计时器、变量

#### 计时器 (Timer)
可以制作 WML 卡片来使用 WML 的计时器功能。计时器的时间单位是 一秒的十分之一 [1/10 s]
``` xml 示例: 用 3 秒来显示一条消息，然后切换到文件 "test.wml"
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.1//EN"
"http://www.wapforum.org/DTD/wml_1.1.xml">
<wml>
    <card ontimer="test.wml">
        <timer value="30"/>
        <p>Some Message</p>
    </card>
</wml>
```


#### 变量
当用户在卡片组的卡片之间切换时，我们需要在变量中存储数据。WML 变量对大小写敏感

通过 Setvar 命令规定变量
当用户执行任务时（比如 go, prev 或 refresh），可使用 Setvar 元素设置带有指定值的变量
``` xml 示例: 创建一个名为 i 的变量，值是 500
<setvar name="i" value="500"/>
name 和 value 属性是必需的
```

为输入元素规定变量
可以为输入元素（比如input, select, option 等等）设置变量

``` xml 将创建名为 schoolname 的变量
<card id="card1">
    <select name="schoolname">
        <option value="HTML">HTML Tutorial</option>
        <option value="XML">XML Tutorial</option>
    </select>
</card>
```

``` xml 使用上例中创建的变量
<card id="card2"><p>You selected: $(schoolname)</p><p>You selected: $(schoolname)</p></card>
```
