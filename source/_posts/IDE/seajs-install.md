---
title: seajs的安装使用
top: 0
tags: [Seajs]
categories: [IDE]
description: seajs的安装使用
date: 2016-09-01 14:18:00
---

Sea.js 追求简单、自然的代码书写和组织方式，具有以下核心特性：

- 简单友好的模块定义规范：Sea.js 遵循 CMD 规范，可以像 Node.js 一般书写模块代码。
- 自然直观的代码组织方式：依赖的自动加载、配置的简洁清晰，可以让我们更多地享受编码的乐趣。

<!-- more -->


### 安装使用
` npm install spm -g`
` spm install seajs`


### 配置
``` js
seajs.config({
    // 设置路径，方便跨目录调用
    map: [
        //['/static/', '/lldq/static/'] //发布上线时JS文件路径替换[a <- b]
    ],
    base: '/static/js',
    paths: {
        "components": '/static/components',
        "models": '/static/js/models',
        "sourceCmd": '/static/js/sources-cmd'
    },
    alias: {
        "jquery": "components/jquery/jquery",
        "vue": "components/vue/vue",
        "common": "models/common"
    }
});
```