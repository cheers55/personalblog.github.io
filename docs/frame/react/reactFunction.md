# 🌈 React 函数式组件优化

## 1. React 性能优化思路

1. 减少重新 `render` 的次数。
2. 减少计算的量。主要是减少重复计算，对于函数式组件来说，每次 `render` 都会重新从头开始执行函数调用。

- 在使用类组件`（class）`的时候，使用的 `React` 优化 API 主要是：`shouldComponentUpdate` 和 `PureComponent`，都是为了减少重新 `render` 的次数，主要是减少父组件更新而子组件也更新的情况。

## 2. 函数组件优化方法

### 2.1 React.memo （减少 render 的次数）

可以减少重新 `render` 的次数，对标类组件里面的 `PureComponent`。

举个简单的🌰 ：

- 修改父组件 **title** 的时候同时传递给子组件一个 *name* 值。

```
// 父组件
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Child from './child'

function Father() {
  const [title, setTitle] = useState("父组件的title");

  return (
    <div className="Father">
      <h1>{ title }</h1>
      <button onClick={() => setTitle("父组件的title改变了")}>修改父组件的title</button>
      <Child name="父组件传递给子组件的值"></Child>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Father />, rootElement);
```

```
// 子组件
import React from "react";

function Child(props) {
  console.log(props.name)
  return <p>{props.name}</p>
}

export default Child;
```

- 首次渲染的效果如下：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7ba075562974ef4a081fdfd39d1166c~tplv-k3u1fbpfcp-zoom-1.image)

- 并且在控制台会打印 **"父组件传递给子组件的值"**，说明 `Child` 组件渲染了。
- 接下来点击 **修改父组件的title** 这个button，页面会变成：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8080c52b5114ec0a315a26bd3301e48~tplv-k3u1fbpfcp-zoom-1.image)

- 可见 父组件的`title` 已经改变了，而且控制台再次打印了 **"父组件传递给子组件的值"**。子组件在 `props` 没有改变的情况下，再次渲染了。假设子组件如果非常庞大，渲染一次会消耗很多的性能，我们应该尽量减少这个组件的渲染，否则就容易产生性能问题。

`React.memo` 在给定相同 `props` 的情况下渲染相同的结果，并且通过记忆组件渲染结果的方式来提高组件的性能表现。那么上面的例子就可以做如下修改：

```
// 子组件
import React from "react";

function Child(props) {
  console.log(props.name)
  return <p>{props.name}</p>
}

export default React.memo(Child); // 用 React.memo()包裹
```

### 2.2 useCallback （减少 render 的次数）

根据上面的例子，再改一下需求，父组件新增一个副标题和一个修改副标题的button，然后把修改标题的button放到子组件里。

```
// 父组件
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Child from "./child";

function Father() {
  const [title, setTitle] = useState("父组件的title");
  const [subtitle, setSubtitle] = useState("父组件的副title");

  const callback = () => {
    setTitle("父组件的title改变了");
  };
  return (
    <div className="Father">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("父组件的副title改变了")}>修改父组件的副title</button>
      <Child onClick={callback} name="父组件传递给子组件的值" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Father />, rootElement);
```

```
// 子组件
import React from "react";

function Child(props) {
  console.log(props.name);
  return (
    <div>
      <button onClick={props.onClick}>修改父组件的title</button>
      <h1>{props.name}</h1>
    </div>
  );
}

export default React.memo(Child);
```

- 首次渲染的效果如下：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24c21323c3e34ca6893e703a97a91746~tplv-k3u1fbpfcp-zoom-1.image)

- 并且在控制台会打印 "父组件传递给子组件的值"，说明 Child 组件渲染了。

- 接下来点击 修改父组件的副title 这个button，页面会变成：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/463f4b09a4ad457fab57e9bcf894656d~tplv-k3u1fbpfcp-zoom-1.image)

- 可见 父组件的副title 已经改变了，而且控制台再次打印了 "父组件传递给子组件的值"。子组件在 props 没有改变的情况下，再次渲染了。但是子组件没有任何变化，那么这次子组件的重新渲染就是多余的，为什么又重新渲染了呢？

**一个组件重新渲染，一般有3种情况：**

1. 组件自己的状态改变；
2. 父组件重新渲染，导致子组件重新渲染，但是父组件的 `props` 没有改变；
3. 父组件重新渲染，导致子组件重新渲染，但是父组件传递的 `props` 改变了；

> 第一种果断排除，当点击修改副title的时候并没有去改变子组件的状态;

> 第二种想一下也应该排除，父组件重新渲染了，父组件传递给子组件的 `props` 没有改变，但是子组件重新渲染了，我们这个时候用 `React.memo` 来解决了这个问题;

> 那么应该是第三种情况了，当父组件重新渲染的时候，传递给子组件的 `props` 发生了改变，传递给子组件的就两个属性，一个是 name，另一个是 onClick ，name 传递的是常量，没有变，变的就是 onClick 了，为什么传递给 onClick 的 callback 函数会发生改变呢？在文章的开头就已经说过了，在函数式组件里每次重新渲染，函数组件都会重头开始重新执行，那么这两次创建的 callback 函数肯定发生了改变，所以导致了子组件重新渲染。

`useCallback` 在函数没有改变的时候，重新渲染的时候保持两个函数的引用一致，那么上面的例子就可以做如下修改：

```
// 父组件
import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Child from "./child";

function Father() {
  const [title, setTitle] = useState("父组件的title");
  const [subtitle, setSubtitle] = useState("父组件的副title");

  const callback = () => {
    setTitle("父组件的title改变了");
  };
  
  // 通过 useCallback 进行记忆 callback，并将记忆的 callback 传递给子组件
  const _callback = useCallback(callback, []);
  
  return (
    <div className="Father">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("父组件的副title改变了")}>修改父组件的副title</button>
      <Child onClick={_callback} name="父组件传递给子组件的值" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Father />, rootElement);
```

### 2.3 useMemo （减少计算的量）

`useMemo` 主要是用来缓存计算量比较大的函数结果，可以避免不必要的重复计算，和 `Vue` 里面的 `computed` 有异曲同工的作用，可以减少计算的量。

```
import React, { useState } from "react";
function App() {
  const [num, setNum] = useState(0);

  // 一个非常耗时的一个计算函数
  // result 最后返回的值是 49995000
  function resultFn() {
    let result = 0;
    
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    
    console.log(result) // 49995000
    return result;
  }

  const resultNum = resultFn();

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + resultNum)}>+1</button>
    </div>
  );
}

```

如果我们把 `i` 变成10000000，每次点击 +1 按钮的时候，都会重新渲染且得到的结果都是一样的，这样会对性能造成一些影响，我们可以做如下修改：

```
import React, { useState, useMemo } from "react";
function App() {
  const [num, setNum] = useState(0);

  // 一个非常耗时的一个计算函数
  // result 最后返回的值是 49995000
  function resultFn() {
    let result = 0;
    
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    
    console.log(result) // 49995000
    return result;
  }

  const resultNum = useMemo(resultFn, []); //这使用了 useMemo

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + resultNum)}>+1</button>
    </div>
  );
}
```

需要注意两点：

> 一、如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值；

> 二、如果计算量很小的计算函数，可以选择不使用 useMemo，避免使用不当造成其他问题；

[更多技术分享请关注我的个人博客 www.chengxiaohui.cn。欢迎骚扰━(*｀∀´*)ノ亻!](www.chengxiaohui.cn)