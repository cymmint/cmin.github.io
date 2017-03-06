---
title: Grunt 安装使用
top: 0
tags: [Grunt]
categories: [IDE]
description: Grunt 安装使用方法
date: 2016-03-30 16:30:00
---

**本文介绍的是Windows下的安装方法**

Grunt 和 Grunt 插件是通过 [npm](https://www.npmjs.com/) 安装并管理的，npm是 [Node.js](https://nodejs.org/en/) 的包管理器。
Grunt 0.4.x 必须配合Node.js >= 0.8.0版本使用。奇数版本号的 Node.js 被认为是不稳定的开发版。
在安装 Grunt 前，请确保当前环境中所安装的 npm 已经是最新版本，执行 `npm update -g npm` 指令进行升级（在某些系统中可能需要 sudo 指令）

<!--more-->



### 安装CLI
先将Grunt命令行（CLI）安装到全局环境中
`npm install -g grunt-cli`
上述命令执行完后，grunt 命令就被加入到你的系统路径中了，以后就可以在任何目录下执行此命令了
注意，安装grunt-cli并不等于安装了 Grunt！
Grunt CLI的任务很简单：调用与Gruntfile在同一目录中 Grunt。这样带来的好处是，允许你在同一个系统上同时安装多个版本的 Grunt。
这样就能让多个版本的 Grunt 同时安装在同一台机器上。



### 安装Grunt 、Grunt插件
向已经存在的package.json 文件中添加Grunt和grunt插件的最简单方式是通过 `npm install **module** --save-dev` 命令。
此命令不光安装了&lt;module&gt;，还会自动将其添加到devDependencies 配置段中。

#### 将Grunt最新版本安装到项目目录中
`npm install grunt --save-dev`

#### 安装项目需要的Grunt插件
例： _npm install grunt-contrib-jshint --save-dev_

#### 安装 package.json 全部插件
可以将 package.json 的插件列表全部安装(前提是已经安装了grunt命令行，项目下有package.json文件)
`npm install --save-dev`



### Grunt 项目
一般需要在你的项目中添加两份文件：package.json 和 Gruntfile。
package.json: 此文件被npm用于存储项目的元数据，以便将此项目发布为npm模块
Gruntfile: 此文件被命名为 Gruntfile.js 或 Gruntfile.coffee，用来配置或定义任务（task）并加载Grunt插件的



### Grunt 执行
如果已经配置好package.json 和 Gruntfile 文件的项目了，接下来就很容易拿Grunt练手了：
将命令行的当前目录转到项目的根目录下。
执行npm install命令安装项目依赖的库。
执行 grunt 命令。
OK，就是这么简单。还可以通过 **grunt --help** 命令列出所有已安装的Grunt任务（task）



### package 依赖包前缀 **~ ^**
版本号 x.y.z ：
- x 表示一些设计的变动及模块的重构之类的，会升级x版本号
- y 表示一些大的版本更改，比如一些API的变化
- z 表示一些小的bug fix, 更改z的号

> 在package.json里面dependencies依赖包的版本号前面的符号有两种，一种是~，一种是^。
~ 的意思是匹配最近的小版本 比如~1.0.2 将会匹配所有 1.0.x版本，但不匹配1.1.0
^ 的意思是最近的一个大版本 比如^1.0.2 将会匹配所有 1.x.x, 但不包括2.x.x



### 一些配置问题

#### 解决cssmin压缩默认会删除一些css hack的问题
``` js
cssmin: {
    options: {
        compatibility: 'ie8', //设置兼容模式
        noAdvanced: true //取消高级特性
    },
    minify: {
        expand: true, //动态扩展
        cwd: '../less/',
        dest: '../css/',
        src: ['**/*.css', '!**/*.min.css'],
        ext: '.css'
    }
}
```


#### 自动刷新页面
``` js
grunt.loadNpmTasks('grunt-contrib-watch'); //监视
grunt.loadNpmTasks('grunt-contrib-connect'); //配置一个Server
grunt.loadNpmTasks('grunt-livereload'); //自动刷新
```

#### 自动打开浏览器
```
grunt.loadNpmTasks('grunt-open'); //打开浏览器
```


### 参考
- [Grunt快速入门](http://www.gruntjs.net/getting-started)
- [Windows下安装Grunt](http://jingyan.baidu.com/article/93f9803fe354ede0e46f5585.html)
- [CSS压缩默认会删除一些css hack的问题](http://blog.sina.com.cn/s/blog_14a13f7e10102vpbi.html)
- [Grunt-livereload自动刷新](http://www.bluesdream.com/blog/grunt-plugin-livereload-wysiwyg-editor.html)
- [connect+watch自动刷新](http://www.cnblogs.com/guyunxiang/p/4108764.html)



### 附件
这是我个人的grunt配置文件，仅供参考，欢迎指正
[下载Grunt Config](/examples/ide/grunt/grunt-config.zip)