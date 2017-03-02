---
title: 原生JS滚动到浏览器底部分页
top: 0
tags: [分页]
categories: [JS]
description: 原生JS滚动到浏览器底部加载更多数据，支持PC和H5
date: 2016-03-05 21:00:00
---

### 功能
实现功能列表页面滚动到页面底部时，自动加载下一页数据，这种情况移动端非常常见。
Chrome下不能直接用body为包裹层，直接在Body上无法获取ScrollTop的值。

<!-- more -->


### HTML
``` html
<body>
    <!--包裹层-->
    <div id="contentPaging">
        <!--list-->
        <ul class="list"></ul>

        <!--此处是pullLoad动态插入位置-->
    </div>
</body>
```



### CSS

``` css
/*Loading*/
.loading {
    background-position:0 100%;
    transform:rotate(0deg);
    -webkit-transform:rotate(0deg);
    -webkit-transition-duration:0ms;
    -webkit-animation-name:loading;
    -webkit-animation-duration:1.5s;
    -webkit-animation-iteration-count:infinite;
    -webkit-animation-timing-function:linear;
}
@-webkit-keyframes loading {
    from { -webkit-transform:rotate(0deg); transform:rotate(0deg);}
    to { -webkit-transform:rotate(360deg); transform:rotate(360deg);}
}
@keyframes loading {
    from { transform:rotate(0deg);}
    to { transform:rotate(360deg);}
}

/*pull-down loading*/
.page-loading { display:none; width:100%; height:.24rem; padding-top:.04rem; background:#eee; text-align:center; overflow:hidden;}
.page-loading img { height:.16rem; vertical-align:top;}
.page-loading span { display:inline-block; padding:.03rem 0 0 4px; color:#999; font-size:.12rem; line-height:1; vertical-align:top;}

```


### JS
``` js
/***
 * JS plugin pullLoad
 * Function : 滚动到底部分页
 * Version  : 1.1
 * Author   : Cymmint
 */
var pullLoad = {
    d: {}, //DOM
    init: function(container, opts){ //初始化
        var d = document.createElement("div"), p = document.createElement("img"), t = document.createElement("span");
        opts.loadId = !!opts.loadId ? opts.loadId : "pageLoading";
        opts.loadImgSrc = !!opts.loadImgSrc ? opts.loadImgSrc : "../images/loading.png";
        opts.loadImgClass = !!opts.loadImgClass ? opts.loadImgClass : "loading";
        opts.loadText = !!opts.loadText ? opts.loadText : "加载中…";

        d.setAttribute("class", "page-loading");
        d.setAttribute("id", opts.loadId);
        p.setAttribute("class", opts.loadImgClass);
        p.setAttribute("src", opts.loadImgSrc);
        t.innerHTML = opts.loadText;
        d.appendChild(p);
        d.appendChild(t);

        //Param
        pullLoad.d.container = (typeof container === "object" && container.nodeType == 1) ? container : !!container ? document.getElementById(container) : document.body;
        pullLoad.d.wrap = pullLoad.d.container.children[0];
        //WRAP之后插入Loading
        pullLoad.insertAfter(d, pullLoad.d.wrap);
        pullLoad.d.load = document.getElementById(opts.loadId);
        pullLoad.d.bottomNum = isNaN(opts.bottomNum) ? 0 : parseInt(opts.bottomNum);
    },
    insertAfter: function(nElem, tElem) { //元素后插入
        var _par = tElem.parentNode;

        if(_par.lastChild == tElem) {
            _par.appendChild(nElem);
        } else {
            _par.insertBefore(nElem, tElem.nextSibling);
        }
    },
    show: function(){ //显示加载中
        pullLoad.isLoaded = false;
        pullLoad.d.load.style.display = "block";
    },
    hide: function(){ //隐藏加载中
        pullLoad.isLoaded = true;
        pullLoad.d.load.style.display = "none";
    },
    isEnd: function(){ //到底了?
        /*console.log("滚动区高: "+ pullLoad.d.container.scrollTop)
        console.log("可视区高: "+ pullLoad.d.container.clientHeight)
        console.log("内容区高: "+ pullLoad.d.wrap.offsetHeight)*/
        return pullLoad.d.container.scrollTop >= pullLoad.d.wrap.offsetHeight - pullLoad.d.container.clientHeight - pullLoad.d.bottomNum;
    },
    isLoaded: true, //加载完成
    load: function(opts){ //加载数据
        pullLoad.show();
        if(typeof opts.callback === "function") {
            opts.callback();
        }
    },
    scroll: function(opts){ //滚动方式
        pullLoad.d.container.addEventListener("scroll", function(e){ //滚动事件绑定
            if(pullLoad.isEnd() && pullLoad.isLoaded) {
                pullLoad.load(opts);
            }
        }, false);
    },
    main: function(container, opts){
        pullLoad.init(container, opts); //初始化Loading Dom
        pullLoad.scroll(opts);
    }
};
```



### 调用
``` js
pullLoad.main("payWrap", { //payWrap是包裹层ID
    loadId: "pageLoading", //loading层效果ID
    loadImgSrc: "../images/loading.png", //loading图片地址
    loadImgClass: "loading", //CSS3 图片旋转的class
    loadText: "加载中…", //loading层文字
    bottomNum: 5, //距离底部多少px时加载
    callback: function(){
        console.log("数据加载……");
        //AJAX获取数据，此处只做时间模拟
        setTimeout(function(){
            console.log("加载完成");
            pullLoad.hide();
        }, 2000);
    }
});
```
