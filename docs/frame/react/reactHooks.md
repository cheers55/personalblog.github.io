# 🌈 React Hooks

## 1. 什么是 React Hooks？

**React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。** React Hooks 就是那些钩子。

- 下面介绍 React 默认常用的 3 个基础钩子及 3 个额外钩子。

**基础 Hook**

---

    useState()
    useEffect()
    useContext()

**额外钩子**

---

    useMemo()
    useCallback()
    useReducer()

## 2. 基础 Hook

### 2.1 useState()

```
const [state, setState] = useState(initialState);
```

`useState()` 用于为函数组件引入状态（state）以及更新 `state` 的函数。约定函数名为 `set` 前缀加上状态的变量名 `state`，举个简单的🌰

```
function Example (){
    const [data, setData] = useState('我是初始的数据');
    return <button onClick={() => setData('点击后，我的数据改变了')></button>;
}
```

### 2.2 useEffect()

`useEffect()` 用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在 `componentDidMount` 里的代码，现在可以放在 `useEffect()` 里。

```
useEffect(()  =>  {
  // Async Action
}, [dependencies])
```

`useEffect()` 接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，`useEffect()` 就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行 `useEffect()`。举个🌰

```
const Tree = ({ treeId }) => {
    const [tree, setTree] = useState({});

    useEffect(() => {
        fetch(`http://chengxiaohui.cn/${personId}/`)
            .then(res => res.json())
            .then(data => {
                setTree(data);
            });
    }, [treeId]);

    return (<div>
        <p>高：{tree.height}</p>
        <p>age：{tree.age}</p>
    </div>);
}
```

上面代码中，每当组件参数 `treeId` 发生变化，`useEffect()` 就会执行。组件第一次渲染时，`useEffect()` 也会执行。

### 2.3 useContext()

```
const value = useContext(MyContext);
```

