(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{134:function(t,a,s){"use strict";function e(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"w-body"},[s("h3",{staticClass:"w-h3"},[a._v("Pagination 分页")]),a._v(" "),s("p",{staticClass:"w-p"},[a._v("当数据量过多时，使用分页分解数据。")]),a._v(" "),s("h4",{staticClass:"w-h4"},[a._v("基本用法")]),a._v(" "),s("div",{staticClass:"demo-wrapper"},[s("div",{staticClass:"demo-con clearfix"},[s("div",{staticClass:"pagination-demo"},[s("x-page",{attrs:{current:a.current,total:a.total}})],1),a._v(" "),a._m(0)]),a._v(" "),s("div",{staticClass:"code-show"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.showCode(a.pageBasic,"html")}}},[a._v("显示代码 "),s("i",{staticClass:"ans-icon-arrow-right"})])])]),a._v(" "),s("h4",{staticClass:"w-h4"},[a._v("显示总数")]),a._v(" "),s("div",{staticClass:"demo-wrapper"},[s("div",{staticClass:"demo-con clearfix"},[s("div",{staticClass:"pagination-demo"},[s("x-page",{attrs:{current:a.current,total:a.total,"show-total":""}})],1),a._v(" "),a._m(1)]),a._v(" "),s("div",{staticClass:"code-show"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.showCode(a.pageTotal,"html")}}},[a._v("显示代码 "),s("i",{staticClass:"ans-icon-arrow-right"})])])]),a._v(" "),s("h4",{staticClass:"w-h4"},[a._v("每页数量")]),a._v(" "),s("p",{staticClass:"w-p"},[a._v("可以切换每页显示的数量。")]),a._v(" "),s("div",{staticClass:"demo-wrapper"},[s("div",{staticClass:"demo-con clearfix"},[s("div",{staticClass:"pagination-demo"},[s("x-page",{attrs:{current:a.current,total:a.total,"show-sizer":""}})],1),a._v(" "),a._m(2)]),a._v(" "),s("div",{staticClass:"code-show"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.showCode(a.pageSizer,"html")}}},[a._v("显示代码 "),s("i",{staticClass:"ans-icon-arrow-right"})])])]),a._v(" "),s("h4",{staticClass:"w-h4"},[a._v("分页跳转")]),a._v(" "),s("p",{staticClass:"w-p"},[a._v("快速跳转到某一页。")]),a._v(" "),s("div",{staticClass:"demo-wrapper"},[s("div",{staticClass:"demo-con clearfix"},[s("div",{staticClass:"pagination-demo"},[s("x-page",{attrs:{current:a.current,total:a.total,"show-elevator":""}})],1),a._v(" "),a._m(3)]),a._v(" "),s("div",{staticClass:"code-show"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.showCode(a.pageGo,"html")}}},[a._v("显示代码 "),s("i",{staticClass:"ans-icon-arrow-right"})])])]),a._v(" "),s("h4",{staticClass:"w-h4"},[a._v("迷你版本")]),a._v(" "),s("p",{staticClass:"w-p"},[a._v("无边框版本。")]),a._v(" "),s("div",{staticClass:"demo-wrapper"},[s("div",{staticClass:"demo-con clearfix"},[s("div",{staticClass:"pagination-demo"},[s("x-page",{attrs:{current:a.current,total:a.total,small:""}})],1),a._v(" "),a._m(4)]),a._v(" "),s("div",{staticClass:"code-show"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.showCode(a.pageSmall,"html")}}},[a._v("显示代码 "),s("i",{staticClass:"ans-icon-arrow-right"})])])]),a._v(" "),s("h4",{staticClass:"w-h4"},[a._v("简洁版本")]),a._v(" "),s("div",{staticClass:"demo-wrapper"},[s("div",{staticClass:"demo-con clearfix"},[s("div",{staticClass:"pagination-demo"},[s("x-page",{attrs:{current:a.current,total:a.total,simple:""}})],1),a._v(" "),a._m(5)]),a._v(" "),s("div",{staticClass:"code-show"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.showCode(a.pageSimple,"html")}}},[a._v("显示代码 "),s("i",{staticClass:"ans-icon-arrow-right"})])])]),a._v(" "),s("h4",{staticClass:"w-h4"},[a._v("API")]),a._v(" "),s("p",{staticClass:"w-p"},[a._v("Pagination props")]),a._v(" "),a._m(6),a._v(" "),s("p",{staticClass:"w-p"},[a._v("Pagination events")]),a._v(" "),a._m(7)])}var v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demo-tips"},[s("p",[t._v("基本的分页，页数过多时会自动折叠。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demo-tips"},[s("p",[t._v("通过设置 show-total 显示总共多少条数据。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demo-tips"},[s("p",[t._v("通过设置 show-sizer 调整每页的数据量。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demo-tips"},[s("p",[t._v("通过设置 show-elevator 显示快速跳转。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demo-tips"},[s("p",[t._v("通过设置 small 属性来显示迷你版本。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demo-tips"},[s("p",[t._v("通过设置 simple 属性来显示简洁版本。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"api-table"},[s("table",{attrs:{cellspacing:"0"}},[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("current")]),t._v(" "),s("td",[t._v("当前页")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("total")]),t._v(" "),s("td",[t._v("总数据条数")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("page-size")]),t._v(" "),s("td",[t._v("每页数据条数")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("10")])]),t._v(" "),s("tr",[s("td",[t._v("page-size-options")]),t._v(" "),s("td",[t._v("每页条数切换的配置")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("[10, 20, 30, 40, 50]")])]),t._v(" "),s("tr",[s("td",[t._v("pager-count")]),t._v(" "),s("td",[t._v("页码按钮的数量，当总页数超过该值时会折叠（奇数）")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("7")])]),t._v(" "),s("tr",[s("td",[t._v("show-total")]),t._v(" "),s("td",[t._v("是否显示总条数")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("show-elevator")]),t._v(" "),s("td",[t._v("是否显示跳转页")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("show-sizer")]),t._v(" "),s("td",[t._v("是否显示每页条数切换栏")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("simple")]),t._v(" "),s("td",[t._v("是否使用简洁版")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("small")]),t._v(" "),s("td",[t._v("是否显示迷你版")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("false")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"api-table"},[s("table",{attrs:{cellspacing:"0"}},[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("on-change")]),t._v(" "),s("td",[t._v("页码切换时触发")]),t._v(" "),s("td",[t._v("返回当前页码")])])])])])}];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return v})},36:function(t,a,s){"use strict";s.r(a);var e=s(134),v=s(92);for(var r in v)"default"!==r&&function(t){s.d(a,t,function(){return v[t]})}(r);var i=s(4),_=Object(i.a)(v.default,e.a,e.b,!1,null,"f4570734",null);a.default=_.exports},92:function(t,a,s){"use strict";s.r(a);var e=s(93),v=s.n(e);for(var r in e)"default"!==r&&function(t){s.d(a,t,function(){return e[t]})}(r);a.default=v.a},93:function(t,a,s){"use strict";a.__esModule=!0,a.default={data:function(){return{current:3,total:100,pageBasic:'<x-page :current="current" :total="total"></x-page>',pageTotal:'<x-page :current="current" :total="total" show-total></x-page>',pageSizer:'<x-page :current="current" :total="total" show-sizer></x-page>',pageGo:'<x-page :current="current" :total="total" show-elevator></x-page>',pageSmall:'<x-page :current="current" :total="total" small></x-page>',pageSimple:'<x-page :current="current" :total="total" simple></x-page>'}},methods:{showCode:function(a,s){this.$drawer({direction:"right",className:"code-format",render:function(t){return t("prism-editor",{props:{readonly:!0,code:a,language:s}})}})}}}}}]);
//# sourceMappingURL=18.381682c.js.map