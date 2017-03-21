---
title: Package.json 文件详解
top: 0
tags: [Package]
categories: [IDE]
description: Package.json 文件详解
date: 2017-03-21
---

每个npm的安装包里面都会包含一个package.json，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。 npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
package.json文件可以手工编写，也可以使用` npm init `命令自动生成，这个命令采用互动方式，要求用户回答一些问题，然后在当前目录生成一个基本的package.json文件。所有问题之中，只有项目名称（name）和项目版本（version）是必填的，其他都是选填的。

<!-- more -->

**一个简单的package.json文件**
``` json
{
    "name": "xxx",
    "version": "0.0.0",
}
```
上面代码说明， package.json 文件内部就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。比如 name 就是项目名称， version 是版本（遵守“大版本.次要版本.小版本”的格式）。

**一个完整的package.json**
``` json
{
    "name": "Hello World",
    "version": "0.0.1",
    "author": "张三",
    "description": "第一个node.js程序",
    "scripts": {
        "start": "node index.js"
    },
    "keywords": [
        "node.js",
        "javascript"
    ],
    "repository": {
        "type": "git",
        "url": "https://path/to/url"
    },
    "license": "MIT",
        "engines": {
        "node": "0.10.x"
    },
    "bugs": {
        "url": "http://path/to/bug",
        "email": "bug@example.com"
    },
    "contributors": [
        {
            "name": "李四",
            "email": "lisi@example.com"
        }
    ],
    "dependencies": {
        "express": "latest"
    },
    "devDependencies": {
        "bower": "~1.2.8",
        "grunt": "~0.4.1"
    }
}
```
下面详细解释package.json文件的各个字段。


### bin 字段

bin项用来指定各个内部命令对应的可执行文件的位置。
``` json
"bin": {
    "someTool": "./bin/someTool.js"
}
```


### main 字段
main 字段指定了加载该模块时的入门文件，默认是模块根目录下面的 index.js



### scripts 字段
> scripts 指定了运行脚本命令的npm命令行缩写，比如start指定了运行 npm run start 时，所要执行的命令。

例如下面的设置指定了 npm run preinstall 、 npm run postinstall 、 npm run start 、 npm run test 时，所要执行的命令。
``` json
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}
```

### devDependencies, dependencies 字段

我们在使用npm install 安装模块或插件的时候，有两种命令把他们写入到 package.json 文件里面去，比如：
`--save` 对应 -> 安装到 dependencies 字段
`--save-dev` 对应 -> 安装到 devDependencies 字段
devDependencies 和 dependencies 字段实际区别是：
**_devDependencies 里面的插件只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。_**
**_devDependencies 指定项目开发所需要的模块，dependencies 字段指定了项目运行所依赖的模块。_**


### peerDependencies 字段
peerDependencies 字段，就是用来供插件指定其所需要的主工具的版本。
``` json
{
    "name": "chai-as-promised",
    "peerDependencies": {
        "chai": "1.x"
    }
}
```
上面代码指定，安装 chai-as-promised 模块时，主程序 chai 必须一起安装，而且 chai 的版本必须是 1.x 。如果你的项目指定的依赖是 chai 的2.0版本，就会报错。


### config 字段
config字段用于向环境变量输出值。
下面是一个package.json文件。
``` json
{
    "name" : "foo",
    "config" : { "port" : "8080" },
    "scripts" : { "start" : "node server.js" }
}
```
然后，在 server.js 脚本就可以引用config字段的值。
http.createServer(...).listen(process.env.npm_package_config_port)

用户可以改变这个值
$ npm config setfoo:port 80


### browser 字段
browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。
``` json
    "browser": {
        "tipso": "./node_modules/tipso/src/tipso.js"
    }
```


### engines 字段
engines指明了该项目所需要的node.js版本。


### man 字段
man用来指定当前模块的man文档的位置。
``` json
    "man" :[ "./doc/calc.1" ]
```


### preferGlobal字段
preferGlobal的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。


### style字段
style指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。
``` json
"style": [
    "./node_modules/tipso/src/tipso.css"
]
```


### Author, contributors 字段
都是可选字段。author是一个人，contributors是一组人。


### license 字段
你应该要指定一个许可证，让人知道使用的权利和限制的。


### description 字段
项目简介。


### keywords 字段
关键字。


### homepage 字段
项目官网的url。


### bugs 字段
项目的提交问题的url和（或）邮件地址。


### 插件版本限定
版本号 x.y.z ：

- x 表示一些设计的变动及模块的重构之类的，会升级x版本号
- y 表示一些大的版本更改，比如一些API的变化
- z 表示一些小的bug fix, 更改z的号

在package.json里面dependencies依赖包的版本号前面的符号有两种，一种是~，一种是^。
` ~: ` 是匹配最近的小版本 比如~1.0.2 将会匹配所有 1.0.x版本，但不匹配1.1.0
` ^: ` 是最近的一个大版本 比如^1.0.2 将会匹配所有 1.x.x, 但不包括2.x.x
` 无~ ^: ` 则安装时只安装指定版本
` latest: ` 安装最新版本
