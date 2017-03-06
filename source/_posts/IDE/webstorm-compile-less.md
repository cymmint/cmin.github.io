---
title: WebStorm 自动编译Less配置
top: 0
tags: [WebStorm]
categories: [IDE]
description: WebStorm 自动编译Less的配置
date: 2016-07-02 20:35:00
---


### 首先需要通过 npm 安装 less
`npm install less -g`，当然前提是你要先安装NodeJS

### IDE配置
C:\Users\Administrator\AppData\Roaming\npm\lessc.cmd
_此路径是当前用户名下的_

### 设置
file > sttings > File watchers > 添加LESS watcher
![](/images/blog/ide/webstorm.png)