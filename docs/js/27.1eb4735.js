(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{107:function(t,n,i){"use strict";i.r(n);var e=i(108),o=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,function(){return e[t]})}(s);n.default=o.a},108:function(t,n,i){"use strict";n.__esModule=!0,n.default={data:function(){return{noticeBasic:"<template>\n  <x-button type=\"primary\" @click=\"info\">消息</x-button>\n  <x-button type=\"success\" @click=\"success\">成功</x-button>\n  <x-button type=\"warning\" @click=\"warning\">警告</x-button>\n  <x-button type=\"error\" @click=\"error\">错误</x-button>\n  <x-button type=\"ghost\" @click=\"loading\">Loading</x-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    info () {\n      this.$notice.info({\n        title: '普通',\n        content: '这是一条普通提示',\n        duration: 2,\n        closable: false\n      })\n    },\n    success () {\n      this.$notice.success({\n        title: '成功',\n        content: '这是一条成功提示',\n        duration: 2,\n        closable: false\n      })\n    },\n    warning () {\n      this.$notice.warning({\n        title: '警告',\n        content: '这是一条警告提示',\n        duration: 2,\n        closable: false\n      })\n    },\n    error () {\n      this.$notice.error({\n        title: '错误',\n        content: '对方不想和你说话，并向你抛了一个异常',\n        duration: 2,\n        closable: false\n      })\n    },\n    loading () {\n      this.$notice.loading({\n        title: '加载中',\n        content: '这是一条加载提示',\n        duration: 2,\n        closable: false\n      })\n    }\n  }\n}\n<\/script>",noticeClose:"<template>\n  <x-button type=\"ghost\" @click=\"closable\">Loading</x-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    closable () {\n      this.$notice.loading({\n        title: '加载中',\n        content: '这是一条加载提示',\n        duration: 2,\n        onClose () {\n          // 关闭时的回调\n        },\n        closable: true\n      })\n    }\n  }\n}\n<\/script>\n"}},methods:{showCode:function(n,i){this.$drawer({direction:"right",className:"code-format",render:function(t){return t("prism-editor",{props:{readonly:!0,code:n,language:i}})}})},info:function(){this.$notice.info({title:"普通",content:"这是一条普通提示",duration:2,closable:!1})},success:function(){this.$notice.success({title:"成功",content:"这是一条成功提示",duration:2,closable:!1})},warning:function(){this.$notice.warning({title:"警告",content:"这是一条警告提示",duration:2,closable:!1})},error:function(){this.$notice.error({title:"错误",content:"对方不想和你说话，并向你抛了一个异常",duration:2,closable:!1})},loading:function(){this.$notice.loading({title:"加载中",content:"这是一条加载提示",duration:2,closable:!1})},closable:function(){this.$notice.loading({title:"加载中",content:"这是一条加载提示",duration:2,onClose:function(){},closable:!0})}}}},139:function(t,n,i){"use strict";function e(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"w-body"},[i("h3",{staticClass:"w-h3"},[n._v("Notice 通知提醒")]),n._v(" "),i("p",{staticClass:"w-p"},[n._v("悬浮出现在页面角落，显示全局的通知提醒消息。")]),n._v(" "),i("h4",{staticClass:"w-h4"},[n._v("基本用法")]),n._v(" "),i("div",{staticClass:"demo-wrapper"},[i("div",{staticClass:"demo-con clearfix"},[i("div",{staticClass:"notice-demo"},[i("x-button",{attrs:{type:"primary"},on:{click:n.info}},[n._v("消息")]),n._v(" "),i("x-button",{attrs:{type:"success"},on:{click:n.success}},[n._v("成功")]),n._v(" "),i("x-button",{attrs:{type:"warning"},on:{click:n.warning}},[n._v("警告")]),n._v(" "),i("x-button",{attrs:{type:"error"},on:{click:n.error}},[n._v("错误")]),n._v(" "),i("x-button",{attrs:{type:"ghost"},on:{click:n.loading}},[n._v("Loading")])],1),n._v(" "),n._m(0)]),n._v(" "),i("div",{staticClass:"code-show"},[i("a",{attrs:{href:"javascript:;"},on:{click:function(t){return n.showCode(n.noticeBasic,"html")}}},[n._v("显示代码 "),i("i",{staticClass:"ans-icon-arrow-right"})])])]),n._v(" "),i("h4",{staticClass:"w-h4"},[n._v("可关闭")]),n._v(" "),i("div",{staticClass:"demo-wrapper"},[i("div",{staticClass:"demo-con clearfix"},[i("div",{staticClass:"notice-demo"},[i("x-button",{attrs:{type:"ghost"},on:{click:n.closable}},[n._v("Loading")])],1),n._v(" "),n._m(1)]),n._v(" "),i("div",{staticClass:"code-show"},[i("a",{attrs:{href:"javascript:;"},on:{click:function(t){return n.showCode(n.noticeClose,"html")}}},[n._v("显示代码 "),i("i",{staticClass:"ans-icon-arrow-right"})])])]),n._v(" "),i("h4",{staticClass:"w-h4"},[n._v("API")]),n._v(" "),i("p",{staticClass:"w-p"},[n._v("Notice options")]),n._v(" "),n._m(2),n._v(" "),i("p",{staticClass:"w-p"},[n._v("Notice 全局相关：")]),n._v(" "),i("p",{staticClass:"w-p"},[n._v("this.$notice.destroy() 全局销毁所有实例")]),n._v(" "),i("p",{staticClass:"w-p"},[n._v("this.$notice.config(options) 全局配置")]),n._v(" "),i("p",{staticClass:"w-p"},[n._v("Vue.use(ans, { notice: options }) 安装组件库时配置")]),n._v(" "),n._m(3)])}var o=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"demo-tips"},[i("p",[t._v("用来显示「普通、成功、警告、错误、加载」类的操作反馈。")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"demo-tips"},[i("p",[t._v("设置 closable 显示关闭按钮。")])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"api-table"},[i("table",{attrs:{cellspacing:"0"}},[i("thead",[i("tr",[i("th",[t._v("属性")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("类型")]),t._v(" "),i("th",[t._v("可选值")]),t._v(" "),i("th",[t._v("默认值")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("title")]),t._v(" "),i("td",[t._v("标题")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("—")])]),t._v(" "),i("tr",[i("td",[t._v("content")]),t._v(" "),i("td",[t._v("内容")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("—")])]),t._v(" "),i("tr",[i("td",[t._v("duration")]),t._v(" "),i("td",[t._v("自动关闭的延时，单位秒，不关闭可以写 0")]),t._v(" "),i("td",[t._v("Number")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("1.5")])]),t._v(" "),i("tr",[i("td",[t._v("onClose")]),t._v(" "),i("td",[t._v("关闭时的回调")]),t._v(" "),i("td",[t._v("Function")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("—")])]),t._v(" "),i("tr",[i("td",[t._v("closable")]),t._v(" "),i("td",[t._v("是否显示关闭图标")]),t._v(" "),i("td",[t._v("Boolean")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("false")])]),t._v(" "),i("tr",[i("td",[t._v("i18n")]),t._v(" "),i("td",[t._v("国际化对象")]),t._v(" "),i("td",[t._v("VueI18n")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("—")])])])])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"api-table"},[i("table",{attrs:{cellspacing:"0"}},[i("thead",[i("tr",[i("th",[t._v("属性")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("类型")]),t._v(" "),i("th",[t._v("可选值")]),t._v(" "),i("th",[t._v("默认值")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("top")]),t._v(" "),i("td",[t._v("提示组件距离顶端的距离，单位像素")]),t._v(" "),i("td",[t._v("Number")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("60")])]),t._v(" "),i("tr",[i("td",[t._v("right")]),t._v(" "),i("td",[t._v("提示组件距离屏幕右侧的距离，单位像素")]),t._v(" "),i("td",[t._v("Number")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("20")])]),t._v(" "),i("tr",[i("td",[t._v("duration")]),t._v(" "),i("td",[t._v("默认自动关闭的延时，单位秒")]),t._v(" "),i("td",[t._v("Number")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("1.5")])]),t._v(" "),i("tr",[i("td",[t._v("transitionName")]),t._v(" "),i("td",[t._v("默认动画类名")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("x-ani-move-right")])]),t._v(" "),i("tr",[i("td",[t._v("list")]),t._v(" "),i("td",[t._v("显示是否以列表形式展示")]),t._v(" "),i("td",[t._v("Boolean")]),t._v(" "),i("td",[t._v("—")]),t._v(" "),i("td",[t._v("true")])])])])])}];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},41:function(t,n,i){"use strict";i.r(n);var e=i(139),o=i(107);for(var s in o)"default"!==s&&function(t){i.d(n,t,function(){return o[t]})}(s);var a=i(4),v=Object(a.a)(o.default,e.a,e.b,!1,null,"730736da",null);n.default=v.exports}}]);
//# sourceMappingURL=27.1eb4735.js.map