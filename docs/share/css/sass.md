# 🌈 Sass

## 1、什么是 sass？

`sass` 是 `css` 的预处理器。在 `css` 的基础上新增了 `变量、嵌套、模块、混合、继承` 等其它实用的功能。

> 为什么要使用 `sass` ？样式表随着项目的功能增加，变得越来越大、 越来越复杂、越来越难以维护，`sass` 让编写 `css` 代码变得更方便、更有趣。

## 2、变量

变量是存储信息并在将来重复利用的一种方式，在整个样式表中都可访问。`sass` 使用 `$` 符号作为变量的标志。例如：

```
// sass 编译前
$cRed: #FF3333;
 body {
    color: $cRed;
 }
```

```
// css 预处理后
body {
    color: #FF3333;
}
```

## 3、嵌套

`sass` 允许嵌套 `css选择器`，嵌套方式与 `html` 的视觉层次结构相同。例如：

> 建议最多嵌套 `3层`，过度嵌套将导致过度限定的 css 难以维护。

```
// sass 编译前
.nav {
    width: 100px;

    ul {
        color: #FF3333;

        li {
            font-size: 14px;
        }
    }

    span {
        display: inline-block;
    }
}
```

```
// css 预处理后
.nav {
    width: 100px;
}

.nav ul {
    color: #FF3333;
}

.nav ul li {
    font-size: 14px;
}

.nav span {
    display: inline-block;
}
```

## 4、模块

不需要把所有的 `sass` 都写在一个文件里，可以使用 `@use` 规则随意拆分它。此规则将另外一个 `sass` 文件作为模块加载，意味可以使用基于文件名的命名空间来引用 `sass` 文件中的 `变量、混合、函数`。例如：

```
// sass 编译前
// main.sass
$cRed: #FF3333;

.nav {
    color: $cRed;
}


// index.sass
@use 'main'

.home {
    color: $cRed;
}
```

```
// css 预处理后
// index.css
.nav {
    color: #FF3333;
}

.home {
    color: #FF3333;
}
```

## 5、混合

混合（mixin）允许创建一组 `css` 声明并在将来重复利用的一种方式。用 `@mixin` 来声明，用 `@include` 来引入。例如：

```
// sass 编译前
@mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
}

.box { 
    @include transform(rotate(30deg)); 
}
```

```
// css 预处理后
.box {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
}
```

## 6、继承

继承是 `sass` 最有用的特性之一。使用 `@extend` 来继承，可以从一个选择器共享一组 `css` 属性到另一个选择器。例如：

```
// sass 编译前
%status {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}

.success {
    @extend %status;
    border-color: green;
}

.error {
  @extend %status;
  border-color: red;
}

.warning {
  @extend %status;
  border-color: yellow;
}
```

```
// css 预处理后
.success {
    border: 1px solid green;
    padding: 10px;
    color: #333;
}

.error {
    border: 1px solid red;
    padding: 10px;
    color: #333;
}

.warning {
    border: 1px solid yellow;
    padding: 10px;
    color: #333;
}
```