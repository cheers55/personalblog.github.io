(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{331:function(e,s,t){"use strict";t.r(s);var a=t(33),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"🌈-react-hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌈-react-hooks"}},[e._v("#")]),e._v(" 🌈 React Hooks")]),e._v(" "),t("h2",{attrs:{id:"_1-什么是-react-hooks？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-react-hooks？"}},[e._v("#")]),e._v(" 1. 什么是 React Hooks？")]),e._v(" "),t("p",[t("strong",[e._v('React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。')]),e._v(" React Hooks 就是那些钩子。")]),e._v(" "),t("ul",[t("li",[e._v("下面介绍 React 默认常用的 3 个基础钩子及 3 个额外钩子。")])]),e._v(" "),t("p",[t("strong",[e._v("基础 Hook")])]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("useState()\nuseEffect()\nuseContext()\n")])])]),t("p",[t("strong",[e._v("额外钩子")])]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("useMemo()\nuseCallback()\nuseReducer()\n")])])]),t("h2",{attrs:{id:"_2-基础-hook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-基础-hook"}},[e._v("#")]),e._v(" 2. 基础 Hook")]),e._v(" "),t("h3",{attrs:{id:"_2-1-usestate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-usestate"}},[e._v("#")]),e._v(" 2.1 useState()")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const [state, setState] = useState(initialState);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("code",[e._v("useState()")]),e._v(" 用于为函数组件引入状态（state）以及更新 "),t("code",[e._v("state")]),e._v(" 的函数。约定函数名为 "),t("code",[e._v("set")]),e._v(" 前缀加上状态的变量名 "),t("code",[e._v("state")]),e._v("，举个简单的🌰")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function Example (){\n    const [data, setData] = useState('我是初始的数据');\n    return <button onClick={() => setData('点击后，我的数据改变了')></button>;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2-2-useeffect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-useeffect"}},[e._v("#")]),e._v(" 2.2 useEffect()")]),e._v(" "),t("p",[t("code",[e._v("useEffect()")]),e._v(" 用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在 "),t("code",[e._v("componentDidMount")]),e._v(" 里的代码，现在可以放在 "),t("code",[e._v("useEffect()")]),e._v(" 里。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("useEffect(()  =>  {\n  // Async Action\n}, [dependencies])\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("code",[e._v("useEffect()")]),e._v(" 接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，"),t("code",[e._v("useEffect()")]),e._v(" 就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行 "),t("code",[e._v("useEffect()")]),e._v("。举个🌰")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const Tree = ({ treeId }) => {\n    const [tree, setTree] = useState({});\n\n    useEffect(() => {\n        fetch(`http://chengxiaohui.cn/${personId}/`)\n            .then(res => res.json())\n            .then(data => {\n                setTree(data);\n            });\n    }, [treeId]);\n\n    return (<div>\n        <p>高：{tree.height}</p>\n        <p>age：{tree.age}</p>\n    </div>);\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])]),t("p",[e._v("上面代码中，每当组件参数 "),t("code",[e._v("treeId")]),e._v(" 发生变化，"),t("code",[e._v("useEffect()")]),e._v(" 就会执行。组件第一次渲染时，"),t("code",[e._v("useEffect()")]),e._v(" 也会执行。")]),e._v(" "),t("h3",{attrs:{id:"_2-3-usecontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-usecontext"}},[e._v("#")]),e._v(" 2.3 useContext()")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const value = useContext(MyContext);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);