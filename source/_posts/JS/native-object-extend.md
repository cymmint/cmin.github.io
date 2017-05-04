---
title: JS 对象合并
top: 0
tags: [对象]
categories: [JS]
description: JS对象合并方法
date: 2016-03-05
---


从一个对象复制所有的属性到另一个对象是一个常见的操作。今天来介绍一下 ECMAScript5 和 ECMAScript6 中的实现方式。

<!-- more -->

### ECMAS5中使用方法来实现
``` js
function extend(){
    var extend, _extend, _isObject;

    _isObject = function(o){
        return Object.prototype.toString.call(o) === '[object Object]';
    };

    _extend = function self(destination, source) {
        var property;
        for (property in destination) {
            if (destination.hasOwnProperty(property)) {
                // 若destination[property]和sourc[property]都是对象，则递归
                if (_isObject(destination[property]) && _isObject(source[property])) {
                    self(destination[property], source[property]);
                }

                // 若sourc[property]已存在，则跳过
                if (source.hasOwnProperty(property)) {
                    continue;
                } else {
                    source[property] = destination[property];
                }
            }
        }
    };

    var arr = arguments, result = {}, i;
    if (!arr.length) {
        return {}
    }

    for (i = arr.length - 1; i >= 0; i--) {
        if (_isObject(arr[i])) {
            _extend(arr[i], result);
        }
    }
    arr[0] = result;

    return result;
}
```


### ECMAS6中的assign()方法
#### 基本用法
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
``` js
var target = {a: 1};
var source1 = {b: 2};
var source2 = {c: 3};
Object.assign(target, source1, source2);
//结果：{a:1, b:2, c:3}
```
Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

如果只有一个参数，Object.assign会直接返回该参数。
``` js
var obj = {a: 1};
Object.assign(obj) === obj // true
```

如果该参数不是对象，则会先转成对象，然后返回。
``` js
typeof Object.assign(2) // "object"
```

由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
``` js
Object.assign(undefined) // 报错
Object.assign(null) // 报错
```


如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
``` js
let obj = {a: 1};
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true
```


其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了`字符串会以数组形式，拷贝入目标对象`，其他值都不会产生效果。
``` js
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
上面代码中，v1、v2、v3分别是字符串、布尔值和数值，结果只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为`只有字符串的包装对象，会产生可枚举属性`。

``` js
Object(true) // {[[PrimitiveValue]]: true}
Object(10) // {[[PrimitiveValue]]: 10}
Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
```

**_Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）_**


#### 注意点
`Object.assign方法实行的是浅拷贝，而不是深拷贝`。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
``` js
var obj1 = {a: {b: 1}};
var obj2 = Object.assign({}, obj1);
obj1.a.b = 2;
obj2.a.b // 2
```

`Object.assign可以用来处理数组，但是会把数组视为对象。`
``` js
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
```


####  常见用途
##### 为对象添加属性
通过Object.assign方法，将x属性和y属性添加到Point类的对象实例
``` js
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}
```

##### 为对象添加方法
``` js
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {
    ···
    },
    anotherMethod() {
    ···
    }
});
//  等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
···
};
SomeClass.prototype.anotherMethod = function () {
···
};
```

##### 克隆对象
``` js
function clone(origin) {
    return Object.assign({}, origin);
}
```
上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。
不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。
``` js
function clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}
```

##### 合并多个对象
``` js
const merge =(target, ...sources) => Object.assign(target, ...sources);
```

##### 为属性指定默认值
``` js
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};
function processContent(options) {
    let options = Object.assign({}, DEFAULTS, options);
}
```


### 参考
[es6 javascript对象方法Object.assign()](http://blog.csdn.net/qq_30100043/article/details/53422657)
[Object.assign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
