# 🌈 阅读 Vue2 源码

## 1. 什么是 MVVM 数据双向绑定

- 数据变化更新视图，视图变化更新数据。如图：

![mvvm数据双向绑定](/vue_mvvm.png)

`vue` 为了实现数据的双向绑定，共分为`5`个步骤：

1. 实现一个`监听器（Oserver）`，用来劫持并监听所有属性，如果属性发生变化，就通知订阅者；
2. 实现一个`订阅器（Dep）`，用来收集订阅者，对`监听器（Oserver）`和`订阅器（Dep）`统一管理；
3. 实现一个`订阅者（Watcher）`，可以收到属性的变化通知并执行相应的方法，从而更新视图；
4. 实现一个`解析器（Compile）`，可以解析每个节点的相关指令，对模板数据和订阅器进行初始化；
5. 实现一个`批量管理器（Batcher）`，可以批量处理多个订阅者来统一进行更新，防止页面卡顿；

![vue_reactive](/vue_reactive.jpg)

- 现在我们举一个`vue`实例，正式开始学习之路。

```
// vue实例
const vm = new Vue({
    el: "#app",
    data: {
        text: "Hello World"
    }
});
```

```
// MVVM.js
function Vue(options){
    // 从vue实例里把数据拿出来
    this.data = options.data;
    // 减少作用域链查找的过程
    var data = this.data;
    // 监听所有的数据
    observer(data, this);
    var id = options.el;
    var el = ocument.querySelector(id);
    // 编译dom
    var dom = new Compile(el, this);
    el.appendChild(dom);
};
```

## 2. 监听器（Oserver）实现

```
// Observer
function Observer(data, vm){
    // 为了监听所有属性，先要循环一下数据
    Object.keys(data).forEach(function(key){
        defineReactive(vm, key, data[key]);
    });
}

function defineReactive(vm, key, val){
    var dep = new Dep();
    // 劫持所有属性，进行set和get
    Object.defineProperty(vm, key, {
        get: function(){
            if(Dep.target){
                // 收集依赖
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function(newVal){
            if(val === newVal) return;
            val = newVal;
            // 发出通知
            dep.notify();
        }
    })
}
```

- 通过以上代码我们不难看出，源码一上来对`data`进行了遍历并利用双向绑定的关键方法`Object.defineProperty`对数据进行读或者写，并利用`Dep（构造器）`进行收集依赖和发出通知。

> 很多人面试的时候只能回答第一步，简单的说一下`Object.defineProperty`的用法，一带而过。这或许就是很多前端开始区分不同薪资、不同阶级的分水点。

上边代码提到了`订阅器（Dep）`，那它到底是什么呢，上源码。

## 3. 订阅器（Dep）的实现

```
// Dep
function Dep(){
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub){
        // 收集依赖
        this.subs.push(sub);
    },
    notify: function(){
        this.subs.forEach(function(sub){
            // 所有依赖它的对象都会被通知
            sub.update();
        });
    }
};
```

- 简单一看代码，是不是有一种很简单的感觉，简单的你想哭😂，但你还是看不懂，`Dep`到底是个啥，不着急，接下往下看。

## 4. 解析器（Compile）

```
// Compile
function Compile(node, vm){
    if(node){
        // 模仿虚拟dom
        this.$frags = this.nodeToFragment(node, vm);
        return this.$frags;
    }
}

Compile.prototype = {
    nodeToFragment(node, vm){
        var _this = this;
        var frag = docum,
    }
}
```

> vue是不支持低版本浏览器的，比如ie6、7、8，但是如果想兼容怎么办，百度有自己的`san.js` MVVM框架，原理是检测浏览器是否存在 `__defineGetter__` 和 `__defineSetter__`，如果不存在，微软也有自己的 `VBScript`。