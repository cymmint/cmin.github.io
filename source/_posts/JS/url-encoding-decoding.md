---
title: URL编码、解码
top: 0
tags: [URL]
categories: [JS]
description: URL编码、解码的方法
date: 2015-06-09 10:30:00
---


在JS中可以使用 `escape()`, `encodeURL()`, `encodeURIComponent()`，三种方法都有一些不会被编码的符号：
- **escape()**
  不被编码符号 @ * / +
  当发送页与接受页的编码格式(Charset)不一致，使用escape()转换传输中文字串就会出现乱码问题

- **encodeURI()** | **decodeURI()**
  不被编码符号 ! @ # $& * ( ) = : / ; ? + '

- `encodeURIComponent()` | `decodeURIComponent()`
  不被编码符号 ! * ( ) '