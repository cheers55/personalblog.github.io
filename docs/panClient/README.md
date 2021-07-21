# 🌈 走进小程序跨端框架原理

由于公司一些业务发展的需求，有使用 `mpvue` 开发过 `微信小程序 及 支付宝小程序`，感兴趣的小伙伴可以在 `微信、支付宝` 搜索 `享惠达人` 查看具体的小程序项目。之后还使用过 `Taro 、 微信原生api` 开发过 `拼团、商城等` 10 几个不同类型的小程序。如 `i麦当劳钱包余额、佳薪棠、光禹集团、开张吉祥大吉、熊猫商户六` 等。

## 1、小程序跨端框架分类

从框架的语法来说，可以分为两类：

1. **Vue 语法 / 类 Vue 语法**；
2. **React 语法 / 类 React 语法**；

| 框架      | 语法                         | 厂家     |
| :-------- | :--------------------------- | :------- |
| Taro 1/2  | 类 React（nerve）            | 京东     |
| Taro next | React 或 Vue 或 Vue3 或 Nerv | 京东     |
| remax     | React                        | 蚂蚁金服 |
| mpvue     | Vue                          | 美团     |
| uni-app   | Vue                          | Hbuilder |
| megalo    | Vue                          | 网易考拉 |
| wepy      | 类 Vue                       | 腾讯     |
| chameloen | 类 Vue                       | 滴滴     |

## 2、实现原理分类

1. **编译时（compile time）**；
2. **运行时（runtime）**；

| 分类         | 实现原理                                                                                 |
| :----------- | :--------------------------------------------------------------------------------------- |
| compile time | 在编译打包过程中，利用 babel 工具通过 AST 进行转译，生成符合小程序规则的代码。           |
| runtime      | 在小程序的逻辑层中运行起 **React** 或者 **Vue** 的运行时，通过适配层，实现自定义渲染器。 |

## 3、Vue 跨端框架

`.vue` 文件由 3 个部分组成：`template、script、style`。

微信小程序 由 4 个部分组成：`wxml、wxss、js、json`。

### 3.1 style

在 `vue` 环境中的 `css样式`，大部分可以直接挪到 `.wxss`，除了少部分不支持的属性和小程序的单位转换。

### 3.2 template

`vue` 中的很多标签也需要进行转化成对应的小程序语法。如：`div` 转化成 `view`。

`vue` 中的很多绑定事件也需要进行转化成对应的绑定事件。如：`@` 转化成 `bind`，`tap` 事件转化成 `click` 事件。

`vue` 中的很多模板语法也需要进行转化成对应的小程序模板语法。如：`v-if` 转化成 `wx:if`。

`template` 是采用了 `AST` 来解析转化模板。模板替换过程其实就是两侧对齐语法的过程，把语法不一致的地方改成一样的。

### 3.3 script

`vue`中的代码是**完全可以跑在小程序的逻辑层**里面的，毕竟 `vue` 大部分其实就是纯粹的 `javascript`，也就是说，小程序的渲染层里面是完全可以直接运行起来 `vue` 的运行时和 `react` 的运行时的。但是小程序平台规定要在调用 `Page()` 方法生成一个 `page` 实例，否则页面就会报错。于是在 `vue` 实例化的时候，会调用 `init` 方法，在 `init` 方法里面会调用 `Page()` 函数，生成一个小程序的 `page` 实例。


```
new Vue(){};
Vue.init = () => {
    // 在 vue 初始化的时候，调用了 page() 方法
    Page();
}
```

但是这样在一个小程序页面中，就会同时存在一个 `vue` 实例和一个小程序的 `page` 实例，他们又是怎么一起工作的呢？为了更方便理解，要讲一下 `vue` 的核心流程。

### 3.4 Vue 的核心流程

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ce2f4c14ce048d79caa00539c203a87~tplv-k3u1fbpfcp-watermark.image)

如下图所示，`template` 模板部分会在编辑打包的过程中，被 `vue-loader` 调用 `compile` 方法通过词法分析生成一个 `ast` 对象，然后调用**代码生成器**，经过遍历 `AST` 树递归的拼接字符串操作，最终生成一段 `render` 函数，`render` 函数最后会存在打包生成的 `dist` 文件中。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f544fb5ed8b945bfac6f53a7ec2bd671~tplv-k3u1fbpfcp-watermark.image)

为了更方便理解，举个简单的例子：

```
<div class="demo" @click="handleClick">
  {{ text }}
</div>
```

经过编译之后，通过 `ast` 进行分析，生成的 `render` 函数如下：

```
_c("div", 
    { staticClass: "demo", on: { click: _vm.handleClick } }，
    [_vm._t("default")]
)
```

**`render` 函数会在第一次 `mount` 时，或者 `vue` 维护的 `data` 有更新产生的时候会被执行。**