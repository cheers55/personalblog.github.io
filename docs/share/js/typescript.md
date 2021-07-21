# 🌈 走进 TypeScript

## 1. 什么是TypeScript？

`TypeScript` 是 `JavaScript` 的类型的超集。通俗点来讲就是在 `JavaScript` 的类型的基础上又拓展了很多新的类型，100%兼容 `JavaScript`。
> `TypeScript` 是强类型语言，`JavaScript` 是弱类型语言。

## 2. 基础数据类型

基础数据类型包括：`boolean、number、string、null、undefined、Symbol、BigInt`。

### 2.1 布尔值（boolean） 

在 `TypeScript` 中，使用 `boolean` 定义布尔值类型：

```
let isTrue: boolean = true;
```

或者 

```
let isTrue: boolean = new Boolean();
```

### 2.2 数值（number）

在 `TypeScript` 中，使用 `number` 定义数值类型：

```
let num: number = 666;
let notANumber: number = NaN;
```

### 2.3 字符串（string）

在 `TypeScript` 中，使用 `string` 定义布尔值类型：

```
let myName: string = 'Cheers';
```

### 2.4 null 和 undefined

在 `TypeScript` 中，使用 `null` 和 `undefined` 定义这两个类型：

```
let u: undefined = undefined;
let n: null = null;
```

## 3. 新增数据类型

### 3.1 空值（void）

`JavaScript` 没有`空值（Void`）的概念，在 `TypeScript` 中，可以用 `void` 表示没有任何返回值的函数：

```
function alertMyName(): void {
	alert("my name is Cheers");
}
```

### 3.2 任意值（Any）

`任意值（Any）` 用来表示允许赋值为任意类型。
> 通俗来讲这个值其实可有可无，因为即使你不写，默认不就是任意值吗。

```
let something;
something = 'six';
something = 6;
```
等价于
```
let something: any;
something = 'six';
something = 6;
```

### 3.3 联合类型（Union Types）

`联合类型（Union Types）`表示取值可以为多种类型中的一种。使用 `|` 分隔每个类型。

```
let something: string | number;
something = 'six';
something = 6;
```

**访问联合类型的属性或方法**

```
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。

访问 `string` 和 `number` 的共有属性是没问题的：

```
function getString(something: string | number): string {
    return something.toString();
}
```

未完待续。。。


