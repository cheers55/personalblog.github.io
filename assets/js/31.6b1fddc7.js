(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{395:function(s,n,a){"use strict";a.r(n);var t=a(45),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"🌈-css面试题总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🌈-css面试题总结"}},[s._v("#")]),s._v(" 🌈 Css面试题总结")]),s._v(" "),a("h2",{attrs:{id:"_1-标准盒模型-w3c-盒模型-和-ie-盒模型-怪异盒模型-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-标准盒模型-w3c-盒模型-和-ie-盒模型-怪异盒模型-的区别"}},[s._v("#")]),s._v(" 1. 标准盒模型（w3c 盒模型）和 IE 盒模型（怪异盒模型）的区别")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[s._v("标准盒模型（w3c 盒模型）")])]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[s._v("IE 盒模型（怪异盒模型）")])])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("box-sizing: content-box;")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("box-sizing: border-box;")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("content（width、height）")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("content（width、height）包括 padding、border")])])])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("标准盒模型（w3c 盒模型）")]),s._v("如下图：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/content_box.png",alt:"标准盒模型（w3c 盒模型）"}})]),s._v(" "),a("ul",[a("li",[a("code",[s._v("IE 盒模型（怪异盒模型）")]),s._v("如下图：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/border_box.png",alt:"IE 盒模型（怪异盒模型）"}})]),s._v(" "),a("h2",{attrs:{id:"_2-现有一个div-实现垂直水平居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-现有一个div-实现垂直水平居中"}},[s._v("#")]),s._v(" 2. 现有一个div，实现垂直水平居中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('html, body {\n    height: 100%;\n}\n\n.box {\n    width: 50px;\n    height: 50px;\n    border: 1px solid #ccc;\n}\n<div class="box"></div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("position方案")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".box {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin: -25px 0 0 -25px;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".box {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".box {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("flex方案")]),s._v(" "),a("strong",[s._v("推荐")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("table-cell方案")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("body {\n    display: table-cell;\n    width: 300px;\n    height: 300px;\n    vertical-align: middle;\n    text-align: center;\n}\n\n.box {\n    display: inline-block;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_3-双飞翼布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-双飞翼布局"}},[s._v("#")]),s._v(" 3. 双飞翼布局")]),s._v(" "),a("p",[s._v("主要解决的实际问题是："),a("strong",[s._v("定制化展示内容")])]),s._v(" "),a("p",[s._v("例如：优先渲染中间内容，因为中间内容更重要。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// order的主要作用是定制化展示顺序\n.box {\n    display: flex;\n}\n\n.center {\n    flex: 1;\n    order: 2;\n    background: red;\n}\n\n.left, .right {\n    width: 200px;\n}\n\n.left {\n    order: 1;\n    background: green;\n}\n\n.right {\n    order: 3;\n    background: pink;\n}\n<div class="box">\n    <div class="center">\n        <div>中间内容</div>\n    </div>\n    <div class="left">左边内容</div>\n    <div class="right">右边内容</div>\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);