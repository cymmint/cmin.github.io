---
title: globs的匹配规则
top: 0
tags: [globs]
categories: [IDE]
description: globs的匹配规则
date: 2017-07-23 14:18:00
---

> 前端自动化工具使用了node-glob模块来实现其文件匹配功能，因此可以使用下面这些特殊的字符来匹配想要的文件：

|匹配符   |  说明  |
|:------:|:------|
|*       | 匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾|
|**      | 匹配路径中的0个或多个目录及其子目录,需要单独出现，即它左右不能有其他东西了|
|?       | 匹配文件路径中的一个字符(不会匹配路径分隔符)|
|[...]   | 匹配方括号中出现的字符中的任意一个|
|!(pattern &#166; pattern)| 匹配任何与括号中给定的任一模式都不匹配的|
|?(pattern &#166; pattern)| 匹配括号中给定的任一模式0次或1次|
|+(pattern &#166; pattern)| 匹配括号中给定的任一模式至少1次|
|*(pattern &#166; pattern)| 匹配括号中给定的任一模式0次或多次|
|@(pattern &#166; pattern)| 匹配括号中给定的任一模式1次|

#### 示例：
`*:` 能匹配 a.js,x.y,abc,abc/,但不能匹配a/b.js
`*.*:` 能匹配 a.js,style.css,a.b,x.y
`*/*/*.js:` 能匹配 a/b/c.js,x/y/z.js,不能匹配a/b.js,a/b/c/d.js
`**:` 能匹配 abc,a/b.js,a/b/c.js,x/y/z,x/y/z/a.b,能用来匹配所有的目录和文件
`**/*.js:` 能匹配 foo.js,a/foo.js,a/b/foo.js,a/b/c/foo.js
`a/**/z:` 能匹配 a/z,a/b/z,a/b/c/z,a/d/g/h/j/k/z
`a/**b/z:` 能匹配 a/b/z,a/sb/z,但不能匹配a/x/sb/z,因为只有单**单独出现才能匹配多级目录
`?.js:` 能匹配 a.js,b.js,c.js
`a??:` 能匹配 a.b,abc,但不能匹配ab/,因为它不会匹配路径分隔符
`[xyz].js:` 只能匹配 x.js,y.js,z.js,不会匹配xy.js,xyz.js等,整个中括号只代表一个字符
`[^xyz].js:` 能匹配 a.js,b.js,c.js等,不能匹配x.js,y.js,z.js