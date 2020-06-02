(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{326:function(s,a,n){"use strict";n.r(a);var e=n(33),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"🌈-前端常用工具方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#🌈-前端常用工具方法"}},[s._v("#")]),s._v(" 🌈 前端常用工具方法")]),s._v(" "),n("h2",{attrs:{id:"_1-正则-😝😝😝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-正则-😝😝😝"}},[s._v("#")]),s._v(" 1. 正则 😝😝😝")]),s._v(" "),n("h3",{attrs:{id:"_1-1-邮箱"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-邮箱"}},[s._v("#")]),s._v(" 1.1 邮箱")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isEmail = (email) => {\n    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_1-2-手机号码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-手机号码"}},[s._v("#")]),s._v(" 1.2 手机号码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isMobile = (mobile) => {\n    return /^1[0-9]{10}$/.test(mobile)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_1-3-电话号码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-电话号码"}},[s._v("#")]),s._v(" 1.3 电话号码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isPhone = (phone) => {\n    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_1-4-是否url地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-是否url地址"}},[s._v("#")]),s._v(" 1.4 是否url地址")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isURL = (url) => {\n    return /^http[s]?:\\/\\/.*/.test(url)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_1-5-获取url参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-获取url参数"}},[s._v("#")]),s._v(" 1.5 获取url参数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const getQueryString = (name) => {\n    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');\n    const search = window.location.search.split('?')[1] || '';\n    const r = search.match(reg) || [];\n    return r[2];\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_1-6-el是否包含某个class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-el是否包含某个class"}},[s._v("#")]),s._v(" 1.6 el是否包含某个class")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const hasClass = (el, className) => {\n    let reg = new RegExp('(^|\\\\s)' + className + '(\\\\s|$)')\n    return reg.test(el.className)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_1-7-el去除某个class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-el去除某个class"}},[s._v("#")]),s._v(" 1.7 el去除某个class")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const removeClass = (el, className) => {\n    if (!hasClass(el, className)) {\n        return\n    }\n    let reg = new RegExp('(^|\\\\s)' + className + '(\\\\s|$)', 'g')\n    el.className = el.className.replace(reg, ' ')\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_1-8-el添加某个class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-el添加某个class"}},[s._v("#")]),s._v(" 1.8 el添加某个class")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const addClass = (el, className) => {\n    if (hasClass(el, className)) {\n        return\n    }\n    let newClass = el.className.split(' ')\n    newClass.push(className)\n    el.className = newClass.join(' ')\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_1-9-判断类型集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-判断类型集合"}},[s._v("#")]),s._v(" 1.9 判断类型集合")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const checkStr = (str, type) => {\n    switch (type) {\n        case 'phone':   //手机号码\n            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);\n        case 'tel':     //座机\n            return /^(0\\d{2,3}-\\d{7,8})(-\\d{1,4})?$/.test(str);\n        case 'card':    //身份证\n            return /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/.test(str);\n        case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线\n            return /^[a-zA-Z]\\w{5,17}$/.test(str)\n        case 'postal':  //邮政编码\n            return /[1-9]\\d{5}(?!\\d)/.test(str);\n        case 'QQ':      //QQ号\n            return /^[1-9][0-9]{4,9}$/.test(str);\n        case 'email':   //邮箱\n            return /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/.test(str);\n        case 'money':   //金额(小数点2位)\n            return /^\\d*(?:\\.\\d{0,2})?$/.test(str);\n        case 'URL':     //网址\n            return /(http|ftp|https):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&:/~\\+#]*[\\w\\-\\@?^=%&/~\\+#])?/.test(str)\n        case 'IP':      //IP\n            return /((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))/.test(str);\n        case 'date':    //日期时间\n            return /^(\\d{4})\\-(\\d{2})\\-(\\d{2}) (\\d{2})(?:\\:\\d{2}|:(\\d{2}):(\\d{2}))$/.test(str) || /^(\\d{4})\\-(\\d{2})\\-(\\d{2})$/.test(str)\n        case 'number':  //数字\n            return /^[0-9]$/.test(str);\n        case 'english': //英文\n            return /^[a-zA-Z]+$/.test(str);\n        case 'chinese': //中文\n            return /^[\\\\u4E00-\\\\u9FA5]+$/.test(str);\n        case 'lower':   //小写\n            return /^[a-z]+$/.test(str);\n        case 'upper':   //大写\n            return /^[A-Z]+$/.test(str);\n        case 'HTML':    //HTML标记\n            return /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/.test(str);\n        default:\n            return true;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("h3",{attrs:{id:"_1-10-严格的身份证校验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-严格的身份证校验"}},[s._v("#")]),s._v(" 1.10 严格的身份证校验")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('export const isCardID = (sId) => {\n    if (!/(^\\d{15}$)|(^\\d{17}(\\d|X|x)$)/.test(sId)) {\n        console.log(\'你输入的身份证长度或格式错误\')\n        return false\n    }\n    //身份证城市\n    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };\n    if (!aCity[parseInt(sId.substr(0, 2))]) {\n        console.log(\'你的身份证地区非法\')\n        return false\n    }\n\n    // 出生日期验证\n    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),\n        d = new Date(sBirthday)\n    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {\n        console.log(\'身份证上的出生日期非法\')\n        return false\n    }\n\n    // 身份证号码校验\n    var sum = 0,\n        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],\n        codes = "10X98765432"\n    for (var i = 0; i < sId.length - 1; i++) {\n        sum += sId[i] * weights[i];\n    }\n    var last = codes[sum % 11]; //计算出来的最后一位身份证号码\n    if (sId[sId.length - 1] != last) {\n        console.log(\'你输入的身份证号非法\')\n        return false\n    }\n\n    return true\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h3",{attrs:{id:"_1-11-将阿拉伯数字翻译成中文的大写数字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-将阿拉伯数字翻译成中文的大写数字"}},[s._v("#")]),s._v(" 1.11 将阿拉伯数字翻译成中文的大写数字")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('export const numberToChinese = (num) => {\n    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");\n    var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");\n    var a = ("" + num).replace(/(^0*)/g, "").split("."),\n        k = 0,\n        re = "";\n    for (var i = a[0].length - 1; i >= 0; i--) {\n        switch (k) {\n            case 0:\n                re = BB[7] + re;\n                break;\n            case 4:\n                if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")\n                    .test(a[0]))\n                    re = BB[4] + re;\n                break;\n            case 8:\n                re = BB[5] + re;\n                BB[7] = BB[5];\n                k = 0;\n                break;\n        }\n        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)\n            re = AA[0] + re;\n        if (a[0].charAt(i) != 0)\n            re = AA[a[0].charAt(i)] + BB[k % 4] + re;\n        k++;\n    }\n\n    if (a.length > 1) // 加上小数部分(如果有小数部分)\n    {\n        re += BB[6];\n        for (var i = 0; i < a[1].length; i++)\n            re += AA[a[1].charAt(i)];\n    }\n    if (re == \'一十\')\n        re = "十";\n    if (re.match(/^一/) && re.length == 3)\n        re = re.replace("一", "");\n    return re;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("h3",{attrs:{id:"_1-12-去除空格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-去除空格"}},[s._v("#")]),s._v(" 1.12 去除空格")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('export const trim = (str, type) => {\n    type = type || 1\n    switch (type) {\n        case 1:\n            return str.replace(/\\s+/g, "");\n        case 2:\n            return str.replace(/(^\\s*)|(\\s*$)/g, "");\n        case 3:\n            return str.replace(/(^\\s*)/g, "");\n        case 4:\n            return str.replace(/(\\s*$)/g, "");\n        default:\n            return str;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"_1-13-字符转换-type-1-首字母大写-2：首字母小写-3：大小写转换-4：全部大写-5：全部小写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-13-字符转换-type-1-首字母大写-2：首字母小写-3：大小写转换-4：全部大写-5：全部小写"}},[s._v("#")]),s._v(" 1.13 字符转换 type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const changeCase = (str, type) => {\n    type = type || 4\n    switch (type) {\n        case 1:\n            return str.replace(/\\b\\w+\\b/g, function (word) {\n                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();\n\n            });\n        case 2:\n            return str.replace(/\\b\\w+\\b/g, function (word) {\n                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();\n            });\n        case 3:\n            return str.split('').map(function (word) {\n                if (/[a-z]/.test(word)) {\n                    return word.toUpperCase();\n                } else {\n                    return word.toLowerCase()\n                }\n            }).join('')\n        case 4:\n            return str.toUpperCase();\n        case 5:\n            return str.toLowerCase();\n        default:\n            return str;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h3",{attrs:{id:"_1-14-检测密码强度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-14-检测密码强度"}},[s._v("#")]),s._v(" 1.14 检测密码强度")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const checkPwd = (str) => {\n    var Lv = 0;\n    if (str.length < 6) {\n        return Lv\n    }\n    if (/[0-9]/.test(str)) {\n        Lv++\n    }\n    if (/[a-z]/.test(str)) {\n        Lv++\n    }\n    if (/[A-Z]/.test(str)) {\n        Lv++\n    }\n    if (/[\\.|-|_]/.test(str)) {\n        Lv++\n    }\n    return Lv;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"_1-15-16进制颜色转rgbrgba字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-15-16进制颜色转rgbrgba字符串"}},[s._v("#")]),s._v(" 1.15 16进制颜色转RGBRGBA字符串")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const colorToRGB = (val, opa) => {\n\n    var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则\n    var isOpa = typeof opa == 'number'; //判断是否有设置不透明度\n\n    if (!pattern.test(val)) { //如果值不符合规则返回空字符\n        return '';\n    }\n\n    var v = val.replace(/#/, ''); //如果有#号先去除#号\n    var rgbArr = [];\n    var rgbStr = '';\n\n    for (var i = 0; i < 3; i++) {\n        var item = v.substring(i * 2, i * 2 + 2);\n        var num = parseInt(item, 16);\n        rgbArr.push(num);\n    }\n\n    rgbStr = rgbArr.join();\n    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';\n    return rgbStr;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"_1-16-钱💰格式化（保留两位小数），3位加1逗号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-16-钱💰格式化（保留两位小数），3位加1逗号"}},[s._v("#")]),s._v(" 1.16 钱💰格式化（保留两位小数），3位加1逗号")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('export const bankCardFormat = num => {\n  num = num + "";\n  if (!num.includes(".")) {\n    num += ".";\n  }\n  return num\n    .replace(/(\\d)(?=(\\d{3})+\\.)/g, function($0, $1) {\n      return $1 + ",";\n    })\n    .replace(/\\.$/, ".00");\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_1-17-银行卡每4位隔一个空格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-17-银行卡每4位隔一个空格"}},[s._v("#")]),s._v(" 1.17 银行卡每4位隔一个空格")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const bankCardFormat = str => {\n  return str.replace(/\\s/g,'').replace(/\\D/g,'').replace(/(\\d{4})(?=\\d)/g,\"$1 \");\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"_2-功能-😝😝😝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-功能-😝😝😝"}},[s._v("#")]),s._v(" 2. 功能 😝😝😝")]),s._v(" "),n("h3",{attrs:{id:"_2-1-是否字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-是否字符串"}},[s._v("#")]),s._v(" 2.1 是否字符串")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isString = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'String'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-2-是否数字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-是否数字"}},[s._v("#")]),s._v(" 2.2 是否数字")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isNumber = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-3-是否boolean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-是否boolean"}},[s._v("#")]),s._v(" 2.3 是否boolean")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isBoolean = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-4-是否函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-是否函数"}},[s._v("#")]),s._v(" 2.4 是否函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isFunction = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-5-是否为null"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-是否为null"}},[s._v("#")]),s._v(" 2.5 是否为null")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isNull = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-6-是否undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-是否undefined"}},[s._v("#")]),s._v(" 2.6 是否undefined")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isUndefined = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-7-是否object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-是否object"}},[s._v("#")]),s._v(" 2.7 是否object")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isObj = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-8-是否数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-是否数组"}},[s._v("#")]),s._v(" 2.8 是否数组")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isArray = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-9-是否时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-是否时间"}},[s._v("#")]),s._v(" 2.9 是否时间")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isDate = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-10-是否正则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-是否正则"}},[s._v("#")]),s._v(" 2.10 是否正则")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isRegExp = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-11-是否错对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-是否错对象"}},[s._v("#")]),s._v(" 2.11 是否错对象")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isError = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-12-是否symbol函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-是否symbol函数"}},[s._v("#")]),s._v(" 2.12 是否Symbol函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isSymbol = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-13-是否promise对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-13-是否promise对象"}},[s._v("#")]),s._v(" 2.13 是否Promise对象")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isPromise = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-14-是否set对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-14-是否set对象"}},[s._v("#")]),s._v(" 2.14 是否Set对象")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const isSet = (o) => {\n    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);