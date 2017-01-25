---
title: 移动端字体引入思考
date: 2015-01-04 16:50:00
top: 0 #整数，越大越靠前
tags: [总结]
categories: [CSS]
description: 移动端字体引入的思考
---


### CSS 引入字体的方法
``` css
@font-face {
    font-family: 'MicrosoftYaHei';
    src: url('MicrosoftYaHei.eot'); /* IE9 Compat Modes */
    src: url('MicrosoftYaHei.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('MicrosoftYaHei.woff') format('woff'), /* Modern Browsers */
         url('MicrosoftYaHei.ttf')  format('truetype'), /* Safari, Android, iOS */
         url('MicrosoftYaHei.svg#MicrosoftYaHei') format('svg'); /* Legacy iOS */
}
```

<!-- more -->


### 移动端到底有必要引入字体吗？
引入字体带来了影响，一来消耗用户的流量，二来对页面的打开速度造成了延迟。
总感觉不好，为了说服产品经理，找了三大手机系统的字体资料：

#### IOS 系统字体
- 默认中文字体是STHeiti(苹果黑体)
- 默认英文字体是Helvetica
- 默认数字字体是HelveticaNeue
- 无微软雅黑字体

#### Android 系统字体
- 默认中文字体是Droidsansfallback
- 默认英文和数字字体是Droid Sans
- 无微软雅黑字体

#### WindowPhone 系统字体
- 默认中文字体是Dengxian(方正等线体)
- 默认英文和数字字体是Segoe
- 无微软雅黑字体


### 结论

- 那么，使用系统默认的字体所达到的视觉效果跟使用微软雅黑字体没有明显的差别，权衡利弊，最终说服了产品经理放弃使用微软雅黑的想法。
- 各个手机系统有自己的默认字体，且都不支持微软雅黑如无特殊需求，手机端无需定义中文字体，使用系统默认英文字体和数字字体可使用 `Helvetica` ，三种系统都支持。
