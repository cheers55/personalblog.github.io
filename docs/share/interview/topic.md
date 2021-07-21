# 🌈 JS 基础面试题总结

## 1. JavaScript 的数据类型

### 基本数据类型

    String、Number（浮点类型，基于IEEE 754）、Boolean、null、undefined、Symbol（独一无二）、BigInt（比Number范围更大的整数值）

### 引用数据类型

    Object（Object、Function、Array）

## 2. null 和 undefined 的区别

### null

`null`表示"没有对象"，即该处不应该有值。典型用法是：

1. 作为函数的参数，表示该函数的参数不是对象；
2. 作为对象原型链的终点；

### undefined

`undefined`表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

1. 变量被声明了，但没有赋值（`var i;`）；
2. 对象没有赋值的属性（`var obj = {}; console.log(obj.name);`）；
3. 调用函数时，应该提供的参数没有提供（`function fun(obj){ console.log(obj); }; fun();`）；
4. 函数没有返回值时（`var x = fun(); x;`）；

## 3. typeof 和 instanceof 的区别

| **typeof**           | **instanceof**                                                  | **Object.prototype.toString().call()**               |
| :------------------- | :-------------------------------------------------------------- | :--------------------------------------------------- |
| 用来判断基本数据类型 | 用来判断左边构造函数的 prototype 属性是否存在右边对象的原型链上 | 是对象的一个原生原型拓展函数，用来精确的区分数据类型 |

## instanceof 的实现

```
function _instanceof(left, right){
    const newLeft = left.__proto__;
    while(newLeft){
        if(newLeft === right.prototype) return true;
    }
    return false;
}
```

## 4. [] !== [] 为什么是 true？

- 下边是这个表达式为何为`true`的步骤：

1. [] == ![];
2. [] == false;
3. [] == Number(false);
4. [] == 0;
5. [].toString() == 0;
6. 0 == 0;

## 5. 原型链

- 每个函数都有 `prototype` 属性，该属性指向原型。每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型，**_其实这个属性指向了 [[prototype]] ，但是 [[prototype]] 是内部引擎属性，我们并不能访问到_**。所以用`__proto__`来访问。对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链。

![原型链](/prototype.jpg)

## 6. new

- 总体思路如下：

1. 新生成了一个对象；
2. 链接到原型；
3. 绑定 this；
4. 返回新对象；

### new 的实现

```
function _new(){
    const newObj = {};
    // 获取当前的构造函数
    const Contructor = Array.prototype.shift.call(arguments);
    newObj.__proto__ == Contructor.prototype;
    Contructor.apply(newObj, arguments);
    return newObj;
}
```

- 对于创建一个对象来说，更推荐使用字面量的方式创建对象。因为你使用 `new Object()` 的方式创建对象需要通过作用域链一层层找到 `Object`，但是你使用字面量的方式就没这个问题。

```
// 这个字面量内部也是使用了 new Object()
const person = { name: cxh };
```

- 对于`new`来说，还需要注意下运算符优先级。

```
function Foo() {
 return this;
};

Foo.getName = function () {
 console.log('1');
};

Foo.prototype.getName = function () {
 console.log('2');
};

new Foo.getName(); // -> 1
new Foo().getName(); // -> 2
```

- 可以看出`new Foo()` 的优先级大于 `new Foo` ，所以对于上述代码来说可以这样划分执行顺序:

1. new (Foo.getName());
2. (new Foo()).getName();

> 对于第一个函数来说，先执行了 Foo.getName() ，所以结果为 1；对于后者来说，先执行 new Foo() 产生了一个实例，然后通过原型链找到了 Foo 上的 getName 函数，所以结果为 2。

## 7. this

- 一句话概括`this`，谁调用它它就指向谁。为了更好的理解`this`，做了一个小小的总结：

1. 在全局作用域内，this 指向 window；
2. 在 class 中，this 指向新创建的类实例；
3. 在函数中，分为两种函数。箭头函数，this 指向包裹箭头函数的第一个普通函数。普通函数中又分为两种。new 的方式，this 指向 new 出来的实例。直接调用，this 指向 window。间接调用，this 指向调用它的对象。

## 8. apply、call、bind

- 都是为了解决改变`this`的指向。这三个函数的第一个参数都是`this`的指向对象，第二个参数差别就来了：

| **call**                          | **apply**              | **bind**                                                           |
| :-------------------------------- | :--------------------- | :----------------------------------------------------------------- |
| 后续参数用`,`号分隔，可传多个参数 | 后续参数用数组进行传参 | 和`call`的传参方式一致，但是会返回新的绑定函数，必须调用才会被执行 |

```
const person = {
 value: 1
};
function getValue(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
};
getValue.call(person, 'cxh', '18');
getValue.apply(person, ['cxh', '18']);
getValue.bind(person, 'cxh', '18')();
```

### call 的实现

- 可以从以下几点来考虑如何实现：

1. 不传入第一个参数，那么默认为`window`；
2. 改变了`this`指向，让新的对象可以执行该函数;

**那么思路是否可以变成给新的对象添加一个函数，执行完以后删除。**

```
// call
Function.prototype._bind = function(context){
    // 不传入第一个参数，那么默认为window
    const context = context || window;
    // 给新的对象添加一个函数，改变this指向
    context.fn = this;
    // 将context后面的参数取出来
    let args = [...arguments].slice(1);
    // 让新的对象可以执行该函数
    const result = context.fn(...args);
    // 执行完以后删除
    delete context.fn;
    return result;
};
```

### apply 的实现

- 唯一和`call`不同的地方是参数不同。

```
// apply
Function.prototype._apply = function(context){
    const context = context || window;
    context.fn = this;
    let result;
    // 需要判断是否存储第二个参数
    // 如果存在，就将第二个参数展开
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
};
```

### bind 的实现

- bind 实现的思路大致如下：

1. 会返回一个新的函数；
2. 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用；

```
// bind
Function.prototype._bind = function (context, ...rest) {
    // 判断当前的this类型必须是函数可以调用
    if(typeof this !== "function"){
        throw new Error("试图绑定的内容是不可调用的");
    };
    var self = this;
    return function F(...args) {
        /*如果是 new 的，则不要之前的 context 啦*/
        if (this instanceof F) {
            return self(...rest, ...args);
        }
        return self.apply(context, rest.concat(args));
    }
}
```

## 9. 闭包

- 闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。举个简单的例子：

```
function A(){
    let a = 1;
    return function B(){
        a++;
        console.log(a);
    }
};

let add = A();
add(); // -> 2
add(); // -> 3
```

- 为什么`函数A`已经弹出调用栈，`函数B`还能引用`函数A`中的变量。**因为函数 A 中的变量这时候是存储在堆上的**。经典面试题：

```
for(var i = 1; i <= 5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}; // 每隔1秒输出一个6，一共5次
```

> 因为 setTimeout 是个异步函数，所有会先把循环全部执行完毕，这时候 i 就是 6 了。

- 解决方法有`4`种，另外一种采用`innerHTML`就不例举了，自行百度一下：

1. 闭包；

```
for(var i = 1; i <= 5; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    })(i);
};
```

2. let（块级作用域）；

```
for(let i = 1; i <= 5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
};
```

3. setTimeout 的第三个参数；

```
for ( var i=1; i<=5; i++) {
    setTimeout( function timer(j) {
        console.log( j );
    }, i*1000, i);
}
```

## 10. 浅拷贝

```
let a = {
    age: 1
};
let b = a;
a.age = 2;
console.log(b.age); // -> 2
```

- 上述例子可以发其中一方改变，另一方也会相应改变。**因为他们指向同一个引用。**我们可以使用`两种`方法解决这个问题：

1.  Object.assign；
2.  展开运算符（...）；

```
let a = {
    age: 1
};
let b = Object.assign({}, a);
a.age = 2;
console.log(b.age); // -> 1
```

```
let a= {
    age: 1
};
let b= {...a};
a.age = 2;
console.log(b.age); // -> 1
```

- 如果我们现在在`a对象`中再加一层，看看浅拷贝是否还可以解决以上问题：

```
let a = {
    age: 1,
    jobs: {
        first: 'alipay'
    };
};
let b = {...a};
a.jobs.first = 'tencent';
console.log(b.jobs.first) // -> tencent
```

- 我们发现浅拷贝只是解决了第一层的问题，如果接下来的值中还有对象的话，要解决这个问题，我们就需要引入深拷贝了。

> 关于深拷贝由于篇幅太长，可以移驾到我的另一篇 [深拷贝](deepClone) 去继续探索。

<!-- ### 深度克隆

```
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function' ) && (obj !== null);

const deepClone = function (obj, hash = new WeakMap()){
    if (hash.has(obj)) return hash.get(obj);
    let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
    if(type.includes(obj.constructor)) return new obj.constructor(obj);
    // 如果成环了，参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj

    let allDesc = Object.getOwnPropertyDescriptors(obj); // 遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); // 继承原型
    hash.set(obj, cloneObj);

    for(let key of Reflect.owenKeys(obj)){
        // Reflect.owenKeys(obj)可以拷贝不可枚举属性和符号类型
        // 如果值是引用类型（非函数）则递归调用deepClone
        cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key];
    }
    return cloneObj;
}
``` -->

## 11. http1.0、http1.1、http2.0 的区别

## 12. GET 和 POST 的区别

| **GET**                           | **POST**               |
| :-------------------------------- | :--------------------- |
| 后续参数用`,`号分隔，可传多个参数 | 后续参数用数组进行传参 |

## 13. http 状态码

## 14. 标准盒模型（w3c 盒模型）和 IE 盒模型（怪异盒模型）的区别

| **标准盒模型（w3c 盒模型）** | **IE 盒模型（怪异盒模型）**                  |
| :--------------------------- | :------------------------------------------- |
| box-sizing: content-box;     | box-sizing: border-box;                      |
| content（width、height）     | content（width、height）包括 padding、border |

- `标准盒模型（w3c 盒模型）`如下图：

![标准盒模型（w3c 盒模型）](/content_box.png)

- `IE 盒模型（怪异盒模型）`如下图：

![IE 盒模型（怪异盒模型）](/border_box.png)

## 15. 继承

- 继承分为`原型链继承、构造函数继承、组合式继承、寄生式组合式继承`四种。

### 原型链继承

- 核心思想就是**利用自子类的原型对象向父级的实例**来继承父级的属性和方法。上代码：

```
// 父类
function Parnet() {
    this.names = ["学而不思则罔", "思而不学则殆"];
}

// 父类的原型上挂载一个方法
Parnet.prototype.getName = function() {
    console.log(this.names);
};

// 子类
function Child() {}

// 利用自子类的原型对象向父级的实例来继承父级的属性和方法
Child.prototype = new Parnet();
// 修正一下contructor指针指向子类
Child.prototype.constructor = Child;

const child1 = new Child();
child1.names.push("加油");
const child2 = new Child();

console.log('child1: ', child1);
console.log('child2: ', child2);
```

如图所示：

![原型链继承](/原型链继承.png)

- 我们发现子类已经继承了父类的属性和方法。但是我们又可以发现`两个问题`：

1. 某个子类实例的属性修改会影响另外一个子类，因为他们都是由同一个父类构造出来的；
2. 子类不可以传参；

### 构造函数继承

- 核心思想就是**子类构造函数中执行父类构造函数，并为其绑定子类的 this**。上代码：

```
function Parnet(name) {
    console.log("name: ", name);
    this.names = ["学而不思则罔", "思而不学则殆"];
}

Parnet.prototype.getName = function() {
    console.log(this.names);
};

function Child(name) {
    Parnet.call(this, name);
}

const child1 = new Child("这是子类1传的值");
child1.names.push("加油");
const child2 = new Child("这是子类2传的值");

console.log("child1: ", child1);
console.log("child2: ", child2);
```

如图所示：

![原型链继承](/构造函数继承.png)

- 优点：

1. 解决了子类共享一个父类的问题；
2. 子类不能传参的问题；

- 缺点：

1. 父类的方法丢失了；

### 组合继承

- 既然`原型链继承`和`构造函数继承`各有优缺点，是否可以中和一下他们的优点呢。上代码：

```
function Parnet(name) {
console.log("name: ", name);
    this.names = ["学而不思则罔", "思而不学则殆"];
}

Parnet.prototype.getName = function() {
    console.log(this.names);
};

function Child(name) {
    Parnet.call(this, name);
}

Child.prototype = new Parnet();
Child.prototype.constructor = Child;

const child1 = new Child("这是子类1传的值");
child1.names.push("加油");
console.log("child1: ", child1);
```

如图所示：

![组合继承](/组合继承.png)

缺点：

1. 父类的构造函数被执行了两遍，第一遍是 call 的时候执行了一次，第二遍是 new 的过程中又执行了一次；
2. 原型中存在两份相同的属性；

### 寄生式组合继承

```
function Parnet(name) {
    console.log("name: ", name);
    this.names = ["学而不思则罔", "思而不学则殆"];
}

Parnet.prototype.getName = function() {
    console.log(this.names);
};

function Child(name) {
    Parnet.call(this, name);
}

Child.prototype = Object.create(Parnet.prototype,{
    constructor: {
        value: Child
    });
Child.prototype.constructor = Child;

const child1 = new Child("这是子类1传的值");
child1.names.push("加油");
console.log("child1: ", child1);
```

如图所示：

![寄生式组合继承](/寄生式组合继承.png)

- 终于完美的继承了父类的属性和方法。

## 16. 防抖和节流

### 防抖

- 原理：**在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。**
- 适用场景：

1. 搜索框联想，不用发送多次请求，只发送最后一次（搜索一个商品名字的时候）；
2. 按钮提交，防止多次提交按钮。（点击付款按钮支付的时候）；

- 简单版实现（场景 1）：

```
// func：被执行的函数     wait：等待的秒数
function debounce(func, wait) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, wait);
    };
}
```

- 立刻执行版（场景 2）
- 有时希望立刻执行函数，然后间隔`n`秒后，才可以重新触发执行。

```
// func：被执行的函数     wait：等待的秒数     now：是否立刻执行 true 或者 false
function debounce(func, wait, now) {
    let timer;
    return function() {
        clearTimeout(timer);
        if (now) {
            const _now = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (_now) func.apply(this, arguments);
        } else {
            timer = setTimeout(() => {
                func.apply(this, arguments);
            }, wait);
        }
    };
}
```

### 节流

- 原理：**规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。**
- 适用场景：

1. 拖拽场景：防止高频次触发位置变动
2. 缩放场景：监控浏览器 resize

- 使用定时器实现：触发事件时，设置一个定时器，再触发事件的时候，如果定时器存在，就不执行。知道定时器执行完，然后清空定时器，执行函数。

```
// func：被执行的函数     wait：等待的秒数
function throttle(func, wait) {
    let timer;
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                func.apply(this, arguments);
            }, wait);
        }
    };
}
```

- 使用时间戳：触发事件的时候，取一下当前的时间戳，减去最开始的时间戳。如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

```
// func：被执行的函数     wait：等待的秒数
// 需要注意一上来就会先执行一次
function throttle(func, wait) {
    let context, args;
    let startTime = 0;

    return function() {
        let nowTime = +new Date();
        context = this;
        args = arguments;
        if (nowTime - startTime > wait) {
            func.apply(context, args);
            startTime = nowTime;
        }
    };
}
```

## 17. TCP 和 UDP 的区别

|              |                     UDP                     |                  TCP                   |
| :----------: | :-----------------------------------------: | :------------------------------------: |
|   是否连接   |                   无连接                    |                面向连接                |
|   是否可靠   |    不可靠传输，不使用流量控制和拥塞控制     |    可靠传输，使用流量控制和拥塞控制    |
| 连接对象个数 | 支持一对一，一对多，多对一和多对多交互通信  |            只能是一对一通信            |
|   传输方式   |                  面向报文                   |               面向字节流               |
|   首部开销   |            首部开销小，仅 8 字节            |     首部最小 20 字节，最大 60 字节     |
|   适用场景   | 适用于实时应用（IP 电话、视频会议、直播等） | 适用于要求可靠传输的应用，例如文件传输 |
