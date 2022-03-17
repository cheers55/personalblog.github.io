(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{413:function(s,n,a){"use strict";a.r(n);var e=a(56),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"🌈-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🌈-sass"}},[s._v("#")]),s._v(" 🌈 Sass")]),s._v(" "),a("h2",{attrs:{id:"_1、什么是-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是-sass"}},[s._v("#")]),s._v(" 1、什么是 sass？")]),s._v(" "),a("p",[a("code",[s._v("sass")]),s._v(" 是 "),a("code",[s._v("css")]),s._v(" 的预处理器。在 "),a("code",[s._v("css")]),s._v(" 的基础上新增了 "),a("code",[s._v("变量、嵌套、模块、混合、继承")]),s._v(" 等其它实用的功能。")]),s._v(" "),a("blockquote",[a("p",[s._v("为什么要使用 "),a("code",[s._v("sass")]),s._v(" ？样式表随着项目的功能增加，变得越来越大、 越来越复杂、越来越难以维护，"),a("code",[s._v("sass")]),s._v(" 让编写 "),a("code",[s._v("css")]),s._v(" 代码变得更方便、更有趣。")])]),s._v(" "),a("h2",{attrs:{id:"_2、变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、变量"}},[s._v("#")]),s._v(" 2、变量")]),s._v(" "),a("p",[s._v("变量是存储信息并在将来重复利用的一种方式，在整个样式表中都可访问。"),a("code",[s._v("sass")]),s._v(" 使用 "),a("code",[s._v("$")]),s._v(" 符号作为变量的标志。例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// sass 编译前\n$cRed: #FF3333;\n body {\n    color: $cRed;\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// css 预处理后\nbody {\n    color: #FF3333;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3、嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、嵌套"}},[s._v("#")]),s._v(" 3、嵌套")]),s._v(" "),a("p",[a("code",[s._v("sass")]),s._v(" 允许嵌套 "),a("code",[s._v("css选择器")]),s._v("，嵌套方式与 "),a("code",[s._v("html")]),s._v(" 的视觉层次结构相同。例如：")]),s._v(" "),a("blockquote",[a("p",[s._v("建议最多嵌套 "),a("code",[s._v("3层")]),s._v("，过度嵌套将导致过度限定的 css 难以维护。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// sass 编译前\n.nav {\n    width: 100px;\n\n    ul {\n        color: #FF3333;\n\n        li {\n            font-size: 14px;\n        }\n    }\n\n    span {\n        display: inline-block;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// css 预处理后\n.nav {\n    width: 100px;\n}\n\n.nav ul {\n    color: #FF3333;\n}\n\n.nav ul li {\n    font-size: 14px;\n}\n\n.nav span {\n    display: inline-block;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"_4、模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、模块"}},[s._v("#")]),s._v(" 4、模块")]),s._v(" "),a("p",[s._v("不需要把所有的 "),a("code",[s._v("sass")]),s._v(" 都写在一个文件里，可以使用 "),a("code",[s._v("@use")]),s._v(" 规则随意拆分它。此规则将另外一个 "),a("code",[s._v("sass")]),s._v(" 文件作为模块加载，意味可以使用基于文件名的命名空间来引用 "),a("code",[s._v("sass")]),s._v(" 文件中的 "),a("code",[s._v("变量、混合、函数")]),s._v("。例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// sass 编译前\n// main.sass\n$cRed: #FF3333;\n\n.nav {\n    color: $cRed;\n}\n\n\n// index.sass\n@use 'main'\n\n.home {\n    color: $cRed;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// css 预处理后\n// index.css\n.nav {\n    color: #FF3333;\n}\n\n.home {\n    color: #FF3333;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_5、混合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、混合"}},[s._v("#")]),s._v(" 5、混合")]),s._v(" "),a("p",[s._v("混合（mixin）允许创建一组 "),a("code",[s._v("css")]),s._v(" 声明并在将来重复利用的一种方式。用 "),a("code",[s._v("@mixin")]),s._v(" 来声明，用 "),a("code",[s._v("@include")]),s._v(" 来引入。例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// sass 编译前\n@mixin transform($property) {\n    -webkit-transform: $property;\n    -ms-transform: $property;\n    transform: $property;\n}\n\n.box { \n    @include transform(rotate(30deg)); \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// css 预处理后\n.box {\n    -webkit-transform: rotate(30deg);\n    -ms-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_6、继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、继承"}},[s._v("#")]),s._v(" 6、继承")]),s._v(" "),a("p",[s._v("继承是 "),a("code",[s._v("sass")]),s._v(" 最有用的特性之一。使用 "),a("code",[s._v("@extend")]),s._v(" 来继承，可以从一个选择器共享一组 "),a("code",[s._v("css")]),s._v(" 属性到另一个选择器。例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// sass 编译前\n%status {\n    border: 1px solid #ccc;\n    padding: 10px;\n    color: #333;\n}\n\n.success {\n    @extend %status;\n    border-color: green;\n}\n\n.error {\n  @extend %status;\n  border-color: red;\n}\n\n.warning {\n  @extend %status;\n  border-color: yellow;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// css 预处理后\n.success {\n    border: 1px solid green;\n    padding: 10px;\n    color: #333;\n}\n\n.error {\n    border: 1px solid red;\n    padding: 10px;\n    color: #333;\n}\n\n.warning {\n    border: 1px solid yellow;\n    padding: 10px;\n    color: #333;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);