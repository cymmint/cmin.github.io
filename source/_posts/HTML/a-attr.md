---
title: A标签的一些属性
date: 2015-01-15
top: 0 #整数，越大越靠前
tags: [A标签]
categories: [HTML]
description: A标签的一些属性
---


###  去虚线框
``` html
<style>
a { blur:expression(this.onFocus=this.close());} /* 只支持IE，过多使用效率低 */ 　
a { blur:expression(this.onFocus=this.blur());} /* 只支持IE，过多使用效率低 */ 　
a:focus { outline-style: none; } /* IE不支持 */
</style>

<!--IE下可行-->
<a href="http://www.jb51.net/css/#" hidefocus="true">链接</a>

```

