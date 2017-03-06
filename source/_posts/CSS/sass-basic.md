---
title: SASS入门
top: 0
tags: [SASS]
categories: [CSS]
description: SASS入门学习教程
date: 2015-03-03 14:50:00
---

在程序员眼里，CSS是一件很麻烦的东西。它没有变量，也没有条件语句，只是一行行单纯的描述，写起来相当费事。很自然地，有人就开始为CSS加入编程元素，这被叫做"CSS预处理器"（css preprocessor）。它的基本思想是，用一种专门的编程语言，进行网页样式设计，然后再编译成正常的CSS文件。

<!--more-->


### SASS编译环境安装
SASS是Ruby语言写的，但是两者的语法没有关系。不懂Ruby，照样使用。只是必须先 [**安装Ruby**](https://www.ruby-lang.org/zh_cn/downloads/)；接着 [**下载RubyGems**](https://rubygems.org/pages/download)，解压文件并到此文件内打开命令窗口，运行：`ruby setup.rb`；然后再安装SASS，运行：`gem install sass`，就可以使用命令窗口编译SASS文件了。但其实现在很多前端IDE都自带CSS预处理功能，比如WebStorm等。



###  SASS使用
SASS文件就是普通的文本文件，里面可以直接使用CSS语法。文件后缀名是 **.scss**，意思为 Sassy CSS。


#### 编译文件
``` scss
//屏幕上显示.scss文件转化的css代码
sass test.scss

//将显示结果保存成文件
sass test.scss test.css
```

#### SASS提供[四个编译风格](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style)的选项：
``` scss
sass --style compressed test.sass test.css

//nested：嵌套缩进的css代码，它是默认值
//expanded：没有缩进的、扩展的css代码
//compact：简洁格式的css代码
//compressed：压缩后的css代码
```

#### SASS监听某个文件或目录
一旦源文件有变动，就自动生成编译后的版本
``` scss
// watch a file
sass --watch input.scss:output.css

// watch a directory
sass --watch app/sass:public/stylesheets
```

SASS的官方网站，提供了一个[在线转换器](http://sassmeister.com/)。你可以在那里，试运行下面的各种例子。



### 基本语法

#### 变量
sass所有变量以 **` $ `** 开头

##### 普通变量
``` scss
$blue: #1875e7;
div {
    color: $blue;
}
```

> 如果变量需要 **镶嵌在字符串之中**，就必须需要写在 **` #{} `** 之中

``` scss
$side: left;
.rounded {
    border-#{$side}-radius: 5px;
}
```


##### 默认变量
sass的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要再重新声明下该变量即可
``` scss
//sass style
$baseLineHeight: 1.5 !default;
$baseLineHeight: 2;
body {
    line-height: $baseLineHeight;
}

//css style
body { line-height:2;}
```


##### 多值变量
多值变量分为 **list** 类型 和 **map** 类型
简单来说list类型有点像js中的数组，而map类型有点像js中的对象

###### list
list数据可通过空格，逗号或小括号分隔多个值，可用nth($var,$index)取值。关于list数据操作还有很多其他函数如length($list)，join($list1,$list2,[$separator])，append($list,$value,[$separator])等，具体可参考[sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)（搜索List Functions即可）
``` scss
/*定义*/
//一维数据
$px: 5px 10px 20px 30px;

//二维数据，相当于js中的二维数组
$px: 5px 10px, 20px 30px;
$px: (5px 10px) (20px 30px);

/*使用*/
//sass style
$linkColor: #08c #333 !default; //第一个值为默认值，第二个鼠标滑过值
a{
    color: nth($linkColor,1);
    &:hover{
        color: nth($linkColor,2);
    }
}

//css style
a{ color:#08c;}
a:hover{ color:#333;}
```

###### map
map数据以key和value成对出现，其中value又可以是list。格式为：$map: (key1: value1, key2: value2, key3: value3);。可通过map-get($map,$key)取值。关于map数据还有很多其他函数如map-merge($map1,$map2)，map-keys($map)，map-values($map)等，具体可参考[sass Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)（搜索Map Functions即可）
``` scss
/*定义*/
$heading: (h1: 2em, h2: 1.5em, h3: 1.2em);

/*使用*/
//sass style
$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
@each $header, $size in $headings {
    #{$header} {
        font-size: $size;
    }
}

//css style
h1 { font-size: 2em;}
h2 { font-size: 1.5em;}
h3 { font-size: 1.2em;}
```


##### 全局变量
在变量值后面加上 **`!global`** 即为全局变量。这个目前还用不上，不过将会在sass 3.4后的版本中正式应用。目前的sass变量范围饱受诟病，所以才有了这个全局变量。目前变量机制在选择器中声明的变量会覆盖外面全局声明的变量。(这也就人们常说的sass没有局部变量)



#### 计算功能
sass允许在代码中使用表达式
``` scss
$var: 5;
body {
    margin: (14px/2);
    top: 50px + 100px;
    right: $var * 10%;
}
```


#### 嵌套
``` scss
//选择器嵌套
div {
    border: 1px solid green;
    hi {
        color: red;
    }
}

//属性嵌套 【要在属性后加冒号 ：】
p {
    border: {
        color: red;
    }
}

//在嵌套的代码块内，可以使用 & 引用父元素
a {
    &:hover  { color: #ffb3ff; }
    &:active { color: #00ff99; }
}
```


#### @at-root
sass3.3.0中新增的功能，用来跳出选择器嵌套的。默认所有的嵌套，继承所有上级选择器，但有了这个就可以跳出所有上级选择器

##### 普通形式
``` scss
//sass style
//没有跳出
.parent-1 {
    color:#f00;
    .child {
        width:100px;
    }
}

//单个选择器跳出
.parent-2 {
    color:#f00;
    @at-root .child {
        width:200px;
    }
}

//多个选择器跳出
.parent-3 {
    background:#f00;
    @at-root {
        .child1 {
            width:300px;
        }
        .child2 {
            width:400px;
        }
    }
}
```

##### @at-root (without | with)
默认@at-root只会跳出选择器嵌套，而不能跳出@media或@support，如果要跳出这两种，则需使用@at-root (without: media)，@at-root (without: support)。这个语法的关键词有四个：all（表示所有），rule（表示常规css），media（表示media），support（表示support，因为@support目前还无法广泛使用，所以在此不表）。我们默认的@at-root其实就是@at-root (without:rule)
``` scss
//sass style
//跳出父级元素嵌套
@media print {
    .parent1{
        color:#f00;
        @at-root .child1 {
            width:200px;
        }
    }
}

//跳出media嵌套，父级有效
@media print {
    .parent2{
        color:#f00;
        @at-root (without: media) {
            .child2 {
                width:200px;
            }
        }
    }
}

//跳出media和父级
@media print {
    .parent3{
        color:#f00;
        @at-root (without: all) {
            .child3 {
                width:200px;
            }
        }
    }
}
```


#### 注释
SASS共有两种注释风格。
标准的CSS注释 `/* comment */` ，会保留到编译后的文件。
单行注释 `// comment`，只保留在SASS源文件中，编译后被省略。
`/*! 说明 */ `，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。
``` scss
/*!
    重要注释！
 */
```



### 代码的重用

#### 继承 **@extend**
``` scss
.class1 {
    border: 1px solid #ddd;
}

//class2要继承class1，就要使用 @extend 命令
.class2 {
    @extend .class1;
    font-size: 120%;
}
```


#### Mixin

##### 无参数

Mixin有点像C语言的宏（macro），是可以重用的代码块
``` scss
//使用@mixin命令，定义一个代码块
@mixin left {
    float: left;
    margin-left: 10px;
}

//使用@include命令，调用这个mixin
div {
    @include left;
}
```

##### 有参数mixin
mixin的强大之处，在于 可以指定参数和缺省值
``` scss
@mixin left($pos: left, $value: 10px) {
    float: $pos;
    margin-right: $value;
}

div {
    @include left(right, 20px);
}
```

##### 多组值参数mixin
如果一个参数有多组值，如box-shadow、transition等，那么参数则需要在变量后加三个点表示，如 $variables...
``` scss
//sass style
@mixin box-shadow($shadow...) {
    box-shadow:$shadow;
}
.box{
    @include box-shadow(0 2px 2px rgba(0,0,0,.3),0 3px 3px rgba(0,0,0,.3),0 4px 4px rgba(0,0,0,.3));
}

//css style
.box{
    box-shadow:0 2px 2px rgba(0,0,0,.3),0 3px 3px rgba(0,0,0,.3),0 4px 4px rgba(0,0,0,.3);
}
```


#### 颜色函数
``` scss
lighten(#cc3, 10%); //#d6d65c -- 变浅
darken(#cc3, 10%);  //#a3a329 -- 加深
grayscale(#cc3);    //#808080 -- 灰度
complement(#cc3);   //#33c -- 补足
```


#### 插入文件
@import命令，用来插入外部文件
``` scss
@import "path/filename.scss";

//如果插入的是.css文件，则等同于css的import命令。
@import "foo.css";
```


#### @content
``` scss
//sass style
@mixin max-screen($res) {
    @media only screen and (max-width: $res) {
        @content;
    }
}

@include max-screen(480px) {
    body { color: red; padding:5px; }
}

//css style
@media only screen and (max-width: 480px) {
    body { color: red; padding: 5px; }
}
```

> @mixin通过@include调用后解析出来的样式是以拷贝形式存在的，而继承则是以联合声明的方式存在的，所以从3.2.0版本以后，建议传递参数的用@mixin，而非传递参数类的使用下面的继承%


#### 占位选择器%
`【占位选择器以 % 标识定义，通过 @extend 调用】`
这种选择器的优势在于：如果不调用则不会有任何多余的css文件
注：在@media中暂时不能@extend @media外的代码片段，以后将会可以
``` scss
%ir{
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
}
#header{
    h1{
        @extend %ir;
        width:300px;
    }
}
.ir{
    @extend %ir;
}
```



### 高级语法

#### 条件语句
`@if @else`
``` scss
@if lightness($color) > 30% { //lightness -- 亮度
    background-color: #000;
} @else {
    background-color: #fff;
}
```


#### 三目判断
类似Javascript的 条件表达式
语法为：if($condition, $if_true, $if_false)
**`注：三目判断 if 前没有@`**
``` scss
//sass style
h1{
    border:if(1 > 2, 10px, -10px) solid #fff;
}

//css style
h1 { border: -10px solid #fff; }
```


#### 循环语句
`@for循环`
for循环有两种形式：
@for $var from 1 through 10 //循环10次，包含10
@for $var from 1 to 10 //循环9次，不含10
``` scss
@for $i from 1 to 10 {
    .border-#{$i} {
        border: #{$i}px solid blue;
    }
}
```

`@while循环`
``` scss
$i: 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
```

`@each命令，作用与@for类似`
``` scss
语法为：@each $var in &lt;list or map&gt;
//普通遍历
@each $member in a, b, c, d {
    .#{$member} {
        background-image: url("/image/#{$member}.jpg");
    }
}

//遍历list
$animal-data: (puma, black, default),(sea-slug, blue, pointer),(egret, white, move);
@each $animal, $color, $cursor in $animal-data {
    .#{$animal}-icon {
        background-image: url('/images/#{$animal}.png');
        border: 2px solid $color;
        cursor: $cursor;
    }
}

//遍历map
$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
@each $header, $size in $headings {
    #{$header} {
        font-size: $size;
    }
}
```


#### 自定义函数
``` scss
@function double($n) {
    @return $n * 2;
}

#sidebar {
    width: double(5px);
}
```


### 参考
[SASS用法指南](http://www.ruanyifeng.com/blog/2012/06/sass.html)
[SASS语法](http://www.w3cplus.com/sassguide/syntax.html)