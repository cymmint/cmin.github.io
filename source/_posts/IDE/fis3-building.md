---
title: FIS3 环境搭建
top: 0
tags: [FIS3]
categories: [IDE]
description: FIS3面向前端的工程构建工具的环境搭建
date: 2016-09-01 10:00:00
---


> FIS3 （ [官网地址](http://fis.baidu.com/fis3/index.html) ）是面向前端的工程构建工具。解决前端工程中性能优化、资源加载（异步、同步、按需、预加载、依赖管理、合并、内嵌）、模块化开发、自动化工具、开发规范、代码部署等问题。

<!--more-->


### 准备工作
- 下载 [NodeJS](https://nodejs.org/en/)
- 下载 [JAVA JDK](https://www.baidu.com/s?ie=UTF-8&wd=java%20jdk)


### 安装工具
#### 安装 `JAVA JDK`、`NodeJS`，选择安装目录即可


#### 安装 `FIS3`
当NodeJS安装成功后，在命令窗口内运行 `npm -g install fis3`，FIS3安装成功后，会出现以下图样
![](/images/blog/ide/fis3.png)


#### 安装 fis3-jello
在命令窗口内运行 `npm install -g fis3-jello`
然后 [下载demo](https://github.com/fis-scaffold/jello-demo) 文件，在 **fis-conf.js** 中添加以下代码即可
`fis.require('jello')(fis);`


#### 安装相关的插件
`npm install -g 插件名`
`npm install -g fis-parser-less`
在fis3里内置了部分插件，如图片压缩、JS压缩（fis-optimizer-png-compressor、fis-optimizer-uglify-js），其它没有的当然需要自己手动安装



### 调试
在 fis-conf.js 所在目录（即项目目录），直接通过 `fis3 server start` 即可
[下载 fis-conf.js 配置示例](/examples/ide/fis3/fis-conf.js)



### FIS3 命令
- 服务
`fis3 server [start|stop|clean|open]` （启动|停止|清除发布夹内容|打开发布文件夹）
- 预览
`fis3 release -[w|wL|c]`  (监听文件变化|监听并自动刷新浏览器|清除编译缓存)
- 发布
`fis3 release -d [配置名] 输出路径`



### 参考
- [FIS3: 安装](http://fis.baidu.com/fis3/docs/beginning/install.html)
- [jello](https://github.com/fex-team/jello)
- [fis3-jello](https://github.com/fex-team/fis3-jello)
