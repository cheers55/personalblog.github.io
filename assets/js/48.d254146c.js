(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{424:function(e,s,t){"use strict";t.r(s);var a=t(56),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"🌈-走进-typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌈-走进-typescript"}},[e._v("#")]),e._v(" 🌈 走进 TypeScript")]),e._v(" "),t("h2",{attrs:{id:"_1-什么是typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是typescript"}},[e._v("#")]),e._v(" 1. 什么是TypeScript？")]),e._v(" "),t("p",[t("code",[e._v("TypeScript")]),e._v(" 是 "),t("code",[e._v("JavaScript")]),e._v(" 的类型的超集。通俗点来讲就是在 "),t("code",[e._v("JavaScript")]),e._v(" 的类型的基础上又拓展了很多新的类型，100%兼容 "),t("code",[e._v("JavaScript")]),e._v("。")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("TypeScript")]),e._v(" 是强类型语言，"),t("code",[e._v("JavaScript")]),e._v(" 是弱类型语言。")])]),e._v(" "),t("h2",{attrs:{id:"_2-基础数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-基础数据类型"}},[e._v("#")]),e._v(" 2. 基础数据类型")]),e._v(" "),t("p",[e._v("基础数据类型包括："),t("code",[e._v("boolean、number、string、null、undefined、Symbol、BigInt")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"_2-1-布尔值-boolean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-布尔值-boolean"}},[e._v("#")]),e._v(" 2.1 布尔值（boolean）")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("TypeScript")]),e._v(" 中，使用 "),t("code",[e._v("boolean")]),e._v(" 定义布尔值类型：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let isTrue: boolean = true;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("或者")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let isTrue: boolean = new Boolean();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-2-数值-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-数值-number"}},[e._v("#")]),e._v(" 2.2 数值（number）")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("TypeScript")]),e._v(" 中，使用 "),t("code",[e._v("number")]),e._v(" 定义数值类型：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let num: number = 666;\nlet notANumber: number = NaN;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h3",{attrs:{id:"_2-3-字符串-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-字符串-string"}},[e._v("#")]),e._v(" 2.3 字符串（string）")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("TypeScript")]),e._v(" 中，使用 "),t("code",[e._v("string")]),e._v(" 定义布尔值类型：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let myName: string = 'Cheers';\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-4-null-和-undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-null-和-undefined"}},[e._v("#")]),e._v(" 2.4 null 和 undefined")]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("TypeScript")]),e._v(" 中，使用 "),t("code",[e._v("null")]),e._v(" 和 "),t("code",[e._v("undefined")]),e._v(" 定义这两个类型：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let u: undefined = undefined;\nlet n: null = null;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3-新增数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-新增数据类型"}},[e._v("#")]),e._v(" 3. 新增数据类型")]),e._v(" "),t("h3",{attrs:{id:"_3-1-空值-void"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-空值-void"}},[e._v("#")]),e._v(" 3.1 空值（void）")]),e._v(" "),t("p",[t("code",[e._v("JavaScript")]),e._v(" 没有"),t("code",[e._v("空值（Void")]),e._v("）的概念，在 "),t("code",[e._v("TypeScript")]),e._v(" 中，可以用 "),t("code",[e._v("void")]),e._v(" 表示没有任何返回值的函数：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('function alertMyName(): void {\n\talert("my name is Cheers");\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-2-任意值-any"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-任意值-any"}},[e._v("#")]),e._v(" 3.2 任意值（Any）")]),e._v(" "),t("p",[t("code",[e._v("任意值（Any）")]),e._v(" 用来表示允许赋值为任意类型。")]),e._v(" "),t("blockquote",[t("p",[e._v("通俗来讲这个值其实可有可无，因为即使你不写，默认不就是任意值吗。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let something;\nsomething = 'six';\nsomething = 6;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("等价于")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let something: any;\nsomething = 'six';\nsomething = 6;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-3-联合类型-union-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-联合类型-union-types"}},[e._v("#")]),e._v(" 3.3 联合类型（Union Types）")]),e._v(" "),t("p",[t("code",[e._v("联合类型（Union Types）")]),e._v("表示取值可以为多种类型中的一种。使用 "),t("code",[e._v("|")]),e._v(" 分隔每个类型。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let something: string | number;\nsomething = 'six';\nsomething = 6;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("strong",[e._v("访问联合类型的属性或方法")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function getLength(something: string | number): number {\n    return something.length;\n}\n\n// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.\n//   Property 'length' does not exist on type 'number'.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("上例中，"),t("code",[e._v("length")]),e._v(" 不是 "),t("code",[e._v("string")]),e._v(" 和 "),t("code",[e._v("number")]),e._v(" 的共有属性，所以会报错。")]),e._v(" "),t("p",[e._v("访问 "),t("code",[e._v("string")]),e._v(" 和 "),t("code",[e._v("number")]),e._v(" 的共有属性是没问题的：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function getString(something: string | number): string {\n    return something.toString();\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("未完待续。。。")])])}),[],!1,null,null,null);s.default=n.exports}}]);