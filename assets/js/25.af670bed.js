(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{338:function(t,e,a){"use strict";a.r(e);var l=a(33),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"🌈-vue-的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🌈-vue-的生命周期"}},[t._v("#")]),t._v(" 🌈 vue 的生命周期")]),t._v(" "),a("h2",{attrs:{id:"_1-生命周期是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生命周期是什么？"}},[t._v("#")]),t._v(" 1. 生命周期是什么？")]),t._v(" "),a("p",[t._v("Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。")]),t._v(" "),a("h2",{attrs:{id:"_2-各个生命周期的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-各个生命周期的作用"}},[t._v("#")]),t._v(" 2. 各个生命周期的作用")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("生命周期")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("beforeCreate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例被创建之初，data 和 methods 中的数据还没有初始化")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例已经完全创建，data 和 methods 都已经初始化好了")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("beforeMount")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("模板渲染，相关的 render 函数首次被调用，模板已经在内存中编译好了，但是尚未挂载到页面中去")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mounted")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("el 被新创建的 vm.$el 替换，真是 dom 已经生成，$el 可用，组件脱离创建阶段，进入运行阶段")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("beforeUpdate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据更新之前调用， 此时页面中显示的数据还是旧的，但 data 是最新的，页面尚未和最新的数据保持同步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("update")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据更新之后，页面和 data 数据已经保持同步，都是最新的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("beforeDestory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件销毁前调用，vue 实例从运行阶段进入到销毁阶段，这时 vue 实例身上所有都可用，还没有真正执行销毁")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("destoryed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件销毁后调用，vue 实例上的所有都不可以用了")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("activited")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 专属，组件被激活时调用，")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("deactivated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 专属，组件被销毁时调用，")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-生命周期示意图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-生命周期示意图"}},[t._v("#")]),t._v(" 3. 生命周期示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/8/19/16ca74f183827f46?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("Vue 的生命周期面试的时候大多人都可以说出来，但如果一问到每个生命周期具体发生了什么，大部分人都回答不出来，所以真正理解生命周期才能在实际的工作中发挥每个生命周期的最大意义，这里还要注意一个问题：")]),t._v(" "),a("blockquote",[a("p",[t._v("如果只是单纯的数据展示，在哪个生命周期请求最好，答案："),a("code",[t._v("created")]),t._v("，能早当然早，何必非得等到 "),a("code",[t._v("mounted")]),t._v(" 的时候再请求呢，那什么情况下需要在 "),a("code",[t._v("mounted")]),t._v(" 中请求呢，就是你需要操作 "),a("code",[t._v("dom")]),t._v(" 的时候，这一块还是非常重要的，需要仔细理解。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);