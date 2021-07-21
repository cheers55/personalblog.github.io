# 红宝石4

## 1. 什么是 JavaScript

完整的 JavaScript 实现包含以下几个部分：

- 核心(ECMAScript262)：由 ECMA-262 定义并提供核心功能；
- 文档对象模型(DOM Document Object Model)：提供与网页内容交互的方法和接口；
- 浏览器对象模型(BOM Bower Object Model)：提供与浏览器交互的方法和接口；

![](/javascript.png)

## 2. HTML 中的 JavaScript

**script** 元素几个重要的属性：

- `async`：表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异步脚本不能保证按照它们在页面中出现的次序执行；
- `defer`：把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出的次序执行；

对不推迟执行的脚本，浏览器必须解释完位于 **script** 元素中的代码，然后才能继续渲染页面的剩余部分。为此，通常应该把 **script** 元素放到页面末尾，介于主内容之后及 `</body>` 标签 之前。否则会出现以下问题：

> 浏览器窗口完全空白，**原因**：必须把所有 **JavaScript** 代码都**下载、解析和解释**完成后，才能开始渲染页面。对于需要很多 **JavaScript** 的页面，这会导致页面渲染的明显延迟。

## 3. 语言基础

### ❤️3.1.1 变量 - var 

用来定义变量。

```
var num = 666；
```

> 注意点：这个关键字声明的变量会自动提升到函数作用域顶部。俗称”变量提升“。

```
// name 会被提升 
console.log(name); // undefined 
var name = 'Matt';
```

### 3.1.2 变量 - let

`let` 跟 `var` 的作用差不多，但有着非常重要的区别。最明显的区别是，`let` 声明的范围是块作用域， 而 `var` 声明的范围是函数作用域。

**1. 暂时性死区**

let 声明的变量不会在作用域中被提升。

```
// age 不会被提升
console.log(age); // ReferenceError:age 没有定义 
let age = 26;
```

**2. 全局声明**

与 `var` 关键字不同，使用 `let` 在全局作用域中声明的变量不会成为 `window` 对象的属性(var 声明的变量则会)。

```
var name = 'Matt'; 
console.log(window.name); // 'Matt'

let age = 26;
console.log(window.age); // undefined
```

### 3.1.3 变量 - const

`const` 的行为与 `let` 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改 `const` 声明的变量会导致运行时错误。

```
const age = 26;
age = 36; // TypeError
```

`const` 声明的限制只适用于它指向的变量的引用。换句话说，如果 `const` 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 `const` 的限制。

```
const person = {};
person.name = 'Matt'; // ok
```

### 3.1.4 变量 - 总结

**1. 不使用 var**

只使用 `let` 和 `const` 有助于提升代码质量，因为变量有了明确的作用域、声明位置，以及不变的值。

**2. const 优先，let 次之**

使用 `const` 声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不合法的赋值操作。同时也能迅速发现因意外赋值导致的非预期行为。

### 3.2.1 数据类型

简单数据类型（原始值）：`Undefined、Null、Boolean、Number、String 和 Symbol`。

复杂数据类型（引用值）：`Object`。

### 3.2.2 typeof操作符

确定任意变量的数据类型。

> 注意：typeof null 返回的是"object"。这是因为特殊值 null 被认为是一个对空对象的引用。

### 3.2.3 Undefined类型

当使用 `var` 或 `let` 声明了变量但没有初始化时，就相当于给变量赋予了 `undefined` 值。

### 3.2.4 Null类型

`null` 值表示一个空对象指针，这也是给 `typeof` 传一个 `null` 会返回"object"的原因。在定义将来要保存对象值的变量时，建议使用 `null` 来初始化，不要使用其他值。

### 3.2.5 Boolean类型

`true` 和 `false`。

> 注意：不同类型与布尔值之间存在隐式转换。非空字符串、非0、任意对象会被转换为 true。空（''）、零（0、NaN）、空对象（null）、undefined会被转换为 false。

### 3.2.6 Number类型

`Number` 类型使用 `IEEE 754` 格式表示整数和浮点值(在某些语言中也叫双精度值)。

**1. 数值转换 - Number()函数**

```
Number(true) = 1; Number(false) = 0; // 布尔值
Number(123) = 123 // 数值;
Number(null) = 0 // null;
Number(undefined) = NaN // undefined类型;
Number("123") = 123; Number("0123") = 123; Number("1.1") = 1.1; Number(" ") = 0; Number("Hello") = NaN; // 字符串
对象：调用 valueOf()方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用 toString()方法，再按照转换字符串的规则转换。
```                                     

**2. 数值转换 - parseInt()函数**

通常在需要得到整数时可以优先使用。也接收第二个参数，用于指定底数(进制数)。

```
parseInt("123cheers") = 123;
parseInt("") = NaN;
parseInt(22.5) = 22;
parseInt("10", 10) = 10; // 按十进制解析
```

**3. 数值转换 - parseFloat()函数**

解析到一个无效的浮点数值字符为止。

```
parseInt("123cheers") = 123;
parseInt("") = NaN;
parseInt(22.5) = 22.5;
```

### 3.2.7 String类型

**1. 模板字面量**

常用特性是支持字符串插值

```
let pageHTML = ` 
<div> 
    <a href="#"> 
        <span>Jake</span> 
    </a> 
</div>`;
```

其中变量用 `${}` 来表示

```
let num = 666;
const str = `你的幸运数字是${num}` // 你的幸运数字是666
```

### 3.2.8 Symbol类型

`Symbol` 是原始值，且实例是唯一、不可变的。用途是确保对象属性使用**唯一标识符**，不会发生属性冲突的危险。

**1. 基本用法**

使用 `Symbol()` 函数初始化，调用时，也可以传入一个字符串参数作为对符号的描述，将来可以通过这个字符串来调试代码。

```
let easySymbol = Symbol('cxh');
```

因为是唯一，所以两个看起来相同的 `Symbol` 却不相同。

```
let easySymbol1 = Symbol('cxh');
let easySymbol2 = Symbol('cxh');

console.log(easySymbol1 == easySymbol2); // false
```

如果想让它们相同，可以使用 `Symbol.for()` 方法。

```
let easySymbol1 = Symbol.for('cxh');
let easySymbol2 = Symbol.for('cxh');

console.log(easySymbol1 == easySymbol2); // true
```

> 注意：Symbol()函数不能与 new 关键字一起作为构造函数使用。

```
let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor
```

- `Object.getOwnPropertyNames()` 返回对象实例的常规属性数组。
- `Object.getOwnPropertySymbols()` 返回对象实例的 **符号** 属性数组。
- `Reflect.ownKeys()` 会返回两种类型的键。

```
let s1 = Symbol('foo'); 

let o = { 
 [s1]: 'foo val', 
 baz: 'baz val'
}; 

console.log(Object.getOwnPropertySymbols(o));  // [Symbol(foo)] 

console.log(Object.getOwnPropertyNames(o));  // ["baz"] 

console.log(Reflect.ownKeys(o));  // ["baz", Symbol(foo)]
```

**2. Symbol.iterator**

该方法返回对象默认的迭代器。由 `for-of` 语句使用。换句话说，这个符号表示实现迭代器 API 的函数。 `Symbol.iterator` 函数生成的对象应该通过其 `next()` 方法陆续返回值。

### 3.2.9 Object 类型

每个 `Object` 实例都有如下属性和方法。

- constructor：用于创建当前对象的函数。
- hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性。

### 3.3 操作符

### 3.3.1 一元操作符

前缀递增/递减操作符，变量的值都会在语句被**求值之前**改变。

```
let age = 29;
let nextage = --age + 1;

console.log(age); // 28 
console.log(nextage); // 30
```

后缀递增/递减操作符，变量的值都会在语句被**求值后**才发生。

```
let age = 29;
let nextage = age-- + 1;

console.log(age); // 29 
console.log(nextage); // 30
```

### 3.3.2 布尔操作符

`!!` 相当于调用了转型函数 `Boolean()`。第一个叹号总会返回布尔值。第二个叹号对该布尔值取反。

```
console.log(!!"blue"); // true 
console.log(!!0); // false 
console.log(!!NaN); // false 
console.log(!!""); // false 
console.log(!!12345); // true
```

### 3.4 语句

### 3.4.1 while 语句

先检测退出条件，再执行循环体内的代码。while 循环体内的代码有可能不会执行。

### 3.4.2 for-in 语句

用于枚举对象中的非符号键属性。

```
const person = {
    name: 'cxh',
    age: 18
};

for(let key in person){
    console.log(key); // name age
};
```

### 3.4.3 for-of 语句

用于遍历可迭代对象的元素。

```
const person = [
    {name: 'cxh', age: 18},
    {name: 'zq', age: 28}
];

for(let item of person){
    console.log(item); // {name: "cxh", age: 18} {name: "zq", age: 28}
};
```

## 4. 变量、作用域与内存

### 4.1 原始值与引用值

**原始值**就是最简单的数据，**引用值**则是由多个值构成的对象。保存**原始值**的变量是**按值**访问的。保存**引用值**的变量是按**引用**访问的。

```
// 原始值
let num1 = 5;
let num2 = num1;

num1 = 30;

console.log(num1); // 30
console.log(num2); // 5
```

![](/data_val.png)

```
// 引用值
const person1 = {
    name: 'cxh'
};

const person2 = person1;
person1.name = 'zq';

console.log(person1); // zq
console.log(person2); // zq
```

![](/data_obj.png)

### 4.2 垃圾回收

### 4.2.1 标记清除

最常用的垃圾回收策略是 **标记清理**。

垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉。在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了。随后垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存。

### 4.2.2 引用计数

对每个值都记录它被引用的次数。声明变量并给它赋一个引用值时，这个值的引用数为 1。如果同一个值又被赋给另一个变量，那么引用数加 1。类似地，如果保存对该值引用的变量被其他值给覆盖了，那么引用数减 1。当一个值的引用数为 0 时，就说明没办法再访问到这个值了，因此可以安全地收回其内存了。垃圾回收程序下次运行的时候就会释放引用数为 0 的值的内存。

> 严重的问题：循环引用。对象 A 有一个指针指向对象 B，而对象 B 也引用了对象 A。

```
function problem() { 
    let objectA = new Object(); 
    let objectB = new Object(); 

    objectA.someOtherObject = objectB; 
    objectB.anotherObject = objectA; 
}
```

### 4.2.3 内存管理

**1. 通过 const 和 let 声明提升性能**

**const 和 let** 都以块为作用域，所以对比 **var**，会更早地让垃圾回收程序介入，今早回收应该回收的内存。

**2. 隐藏类和删除操作**

