(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{154:function(a,t,e){"use strict";function l(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-body"},[e("h3",{staticClass:"w-h3"},[t._v("Radio 单选框")]),t._v(" "),e("p",{staticClass:"w-p"},[t._v("用于一组可选项单项选择，或者单独用于切换到选中状态。")]),t._v(" "),e("h4",{staticClass:"w-h4"},[t._v("单独使用")]),t._v(" "),e("div",{staticClass:"demo-wrapper"},[e("div",{staticClass:"demo-con clearfix"},[e("div",{staticClass:"radio-demo"},[e("x-radio",{attrs:{name:"analysys"},model:{value:t.single,callback:function(a){t.single=a},expression:"single"}},[t._v("Radio")]),t._v(" "),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.single))]),t._v(" "),e("br"),e("br"),t._v(" "),e("x-radio",{attrs:{"true-value":"真","false-value":"假"},model:{value:t.singleValue,callback:function(a){t.singleValue=a},expression:"singleValue"}},[t._v("Radio")]),t._v(" "),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.singleValue))])],1),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"code-show"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.showCode(t.radioSingle,"html")}}},[t._v("显示代码 "),e("i",{staticClass:"ans-icon-arrow-right"})])])]),t._v(" "),e("h4",{staticClass:"w-h4"},[t._v("尺寸")]),t._v(" "),e("div",{staticClass:"demo-wrapper"},[e("div",{staticClass:"demo-con clearfix"},[e("div",{staticClass:"radio-demo"},[e("x-radio",{attrs:{size:"large"}},[t._v("large")]),t._v(" "),e("x-radio",{staticStyle:{"margin-left":"10px"}},[t._v("default")]),t._v(" "),e("x-radio",{staticStyle:{"margin-left":"10px"},attrs:{size:"small"}},[t._v("small")])],1),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"code-show"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.showCode(t.radioSize,"html")}}},[t._v("显示代码 "),e("i",{staticClass:"ans-icon-arrow-right"})])])]),t._v(" "),e("h4",{staticClass:"w-h4"},[t._v("单选框组")]),t._v(" "),e("p",{staticClass:"w-p"},[t._v("适用于在多个互斥的选项中选择的场景。")]),t._v(" "),e("div",{staticClass:"demo-wrapper"},[e("div",{staticClass:"demo-con clearfix"},[e("div",{staticClass:"radio-demo"},[e("x-radio-group",{attrs:{size:t.groupSize},model:{value:t.groupSize,callback:function(a){t.groupSize=a},expression:"groupSize"}},[e("x-radio",{attrs:{label:"small"}},[t._v("small")]),t._v(" "),e("x-radio",{attrs:{label:"default"}},[t._v("default")]),t._v(" "),e("x-radio",{attrs:{label:"large"}},[t._v("large")])],1)],1),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"code-show"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.showCode(t.radioGroup,"html")}}},[t._v("显示代码 "),e("i",{staticClass:"ans-icon-arrow-right"})])])]),t._v(" "),e("h4",{staticClass:"w-h4"},[t._v("禁用状态")]),t._v(" "),e("div",{staticClass:"demo-wrapper"},[e("div",{staticClass:"demo-con clearfix"},[e("div",{staticClass:"radio-demo"},[e("x-radio-group",{model:{value:t.disabledGroup,callback:function(a){t.disabledGroup=a},expression:"disabledGroup"}},[e("x-radio",{attrs:{label:"small",disabled:""}},[t._v("small")]),t._v(" "),e("x-radio",{attrs:{label:"default"}},[t._v("default")]),t._v(" "),e("x-radio",{attrs:{label:"large"}},[t._v("large")])],1)],1),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"code-show"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.showCode(t.radioDisable,"html")}}},[t._v("显示代码 "),e("i",{staticClass:"ans-icon-arrow-right"})])])]),t._v(" "),e("h4",{staticClass:"w-h4"},[t._v("垂直显示")]),t._v(" "),e("div",{staticClass:"demo-wrapper"},[e("div",{staticClass:"demo-con clearfix"},[e("div",{staticClass:"radio-demo"},[e("x-radio-group",{attrs:{vertical:""},model:{value:t.verticalGroup,callback:function(a){t.verticalGroup=a},expression:"verticalGroup"}},[e("x-radio",{attrs:{label:"small",disabled:""}},[t._v("small")]),t._v(" "),e("x-radio",{attrs:{label:"default"}},[t._v("default")]),t._v(" "),e("x-radio",{attrs:{label:"large"}},[t._v("large")])],1)],1),t._v(" "),t._m(4)]),t._v(" "),e("div",{staticClass:"code-show"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.showCode(t.radioVertical,"html")}}},[t._v("显示代码 "),e("i",{staticClass:"ans-icon-arrow-right"})])])]),t._v(" "),e("h4",{staticClass:"w-h4"},[t._v("API")]),t._v(" "),e("p",{staticClass:"w-p"},[t._v("Radio props")]),t._v(" "),t._m(5),t._v(" "),e("p",{staticClass:"w-p"},[t._v("Radio events")]),t._v(" "),t._m(6),t._v(" "),e("p",{staticClass:"w-p"},[t._v("RadioGroup props")]),t._v(" "),t._m(7),t._v(" "),e("p",{staticClass:"w-p"},[t._v("RadioGroup events")]),t._v(" "),t._m(8)])}var i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[a._v("使用 v-model 可以双向绑定数据。")]),a._v(" "),e("p",[a._v("通过 true-value、false-value 自定义设置选中的值。")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[a._v("单选框有三种尺寸：大、中（默认）、小。")]),a._v(" "),e("p",[a._v("通过设置 size 为 large / small 将按钮设置为大/小尺寸，不设置为默认（中）尺寸。")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[a._v("使用 RadioGroup 实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。")]),a._v(" "),e("p",[a._v("每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。")]),a._v(" "),e("p",[a._v("通过设置 size 改变按钮组的大小，默认（中）。")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[a._v("通过设置 disabled 属性来禁用单选框。")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[a._v("设置属性 vertical 可以垂直显示。")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"api-table"},[e("table",{attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",[a._v("属性")]),a._v(" "),e("th",[a._v("说明")]),a._v(" "),e("th",[a._v("类型")]),a._v(" "),e("th",[a._v("可选值")]),a._v(" "),e("th",[a._v("默认值")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("value")]),a._v(" "),e("td",[a._v("单独使用时有效，可用于 v-model 双向绑定")]),a._v(" "),e("td",[a._v("Boolean")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("false")])]),a._v(" "),e("tr",[e("td",[a._v("name")]),a._v(" "),e("td",[a._v("原生 name 属性")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("—")])]),a._v(" "),e("tr",[e("td",[a._v("label")]),a._v(" "),e("td",[a._v("组合使用时有效，指定当前选项 value 值")]),a._v(" "),e("td",[a._v("String / Number")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("—")])]),a._v(" "),e("tr",[e("td",[a._v("disabled")]),a._v(" "),e("td",[a._v("是否禁用")]),a._v(" "),e("td",[a._v("Boolean")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("false")])]),a._v(" "),e("tr",[e("td",[a._v("size")]),a._v(" "),e("td",[a._v("尺寸")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("large / default / small")]),a._v(" "),e("td",[a._v("default")])]),a._v(" "),e("tr",[e("td",[a._v("true-value")]),a._v(" "),e("td",[a._v("自定义选中时的值")]),a._v(" "),e("td",[a._v("String / Number / Boolean")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("true")])]),a._v(" "),e("tr",[e("td",[a._v("false-value")]),a._v(" "),e("td",[a._v("自定义未选中时的值")]),a._v(" "),e("td",[a._v("String / Number / Boolean")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("false")])])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"api-table"},[e("table",{attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",[a._v("事件名称")]),a._v(" "),e("th",[a._v("说明")]),a._v(" "),e("th",[a._v("回调参数")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("on-change")]),a._v(" "),e("td",[a._v("在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发")]),a._v(" "),e("td",[a._v("选中的 value 值")])])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"api-table"},[e("table",{attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",[a._v("属性")]),a._v(" "),e("th",[a._v("说明")]),a._v(" "),e("th",[a._v("类型")]),a._v(" "),e("th",[a._v("可选值")]),a._v(" "),e("th",[a._v("默认值")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("value")]),a._v(" "),e("td",[a._v("当前选中的值，可用于 v-model 双向绑定")]),a._v(" "),e("td",[a._v("String / Number / Boolean")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("—")])]),a._v(" "),e("tr",[e("td",[a._v("name")]),a._v(" "),e("td",[a._v("原生 name 属性，优先级小于 Radio 的 name 属性")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("—")])]),a._v(" "),e("tr",[e("td",[a._v("size")]),a._v(" "),e("td",[a._v("尺寸")]),a._v(" "),e("td",[a._v("String")]),a._v(" "),e("td",[a._v("large / default / small")]),a._v(" "),e("td",[a._v("default")])]),a._v(" "),e("tr",[e("td",[a._v("vertical")]),a._v(" "),e("td",[a._v("是否垂直显示")]),a._v(" "),e("td",[a._v("Boolean")]),a._v(" "),e("td",[a._v("—")]),a._v(" "),e("td",[a._v("false")])])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"api-table"},[e("table",{attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",[a._v("事件名称")]),a._v(" "),e("th",[a._v("说明")]),a._v(" "),e("th",[a._v("回调参数")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("on-change")]),a._v(" "),e("td",[a._v("在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发")]),a._v(" "),e("td",[a._v("选中的 label 值")])])])])])}];e.d(t,"a",function(){return l}),e.d(t,"b",function(){return i})},26:function(a,t,e){"use strict";e.r(t);var l=e(154),i=e(68);for(var s in i)"default"!==s&&function(a){e.d(t,a,function(){return i[a]})}(s);var r=e(4),v=Object(r.a)(i.default,l.a,l.b,!1,null,null,null);t.default=v.exports},68:function(a,t,e){"use strict";e.r(t);var l=e(69),i=e.n(l);for(var s in l)"default"!==s&&function(a){e.d(t,a,function(){return l[a]})}(s);t.default=i.a},69:function(a,t,e){"use strict";t.__esModule=!0,t.default={data:function(){return{single:!1,singleValue:"假",radioSingle:'<x-radio name="analysys" v-model="single">Radio</x-radio>\n<span style="margin-left: 10px;">{{single}}</span>\n<br><br>\n<x-radio\n  v-model="singleValue"\n  true-value="真"\n  false-value="假">Radio</x-radio>\n<span style="margin-left: 10px;">{{singleValue}}</span>',radioSize:'<x-radio size="large">large</x-radio>\n<x-radio style="margin-left: 10px;">default</x-radio>\n<x-radio size="small" style="margin-left: 10px;">small</x-radio>',groupSize:"small",radioGroup:'<x-radio-group v-model="groupSize" :size="groupSize">\n  <x-radio label="small">small</x-radio>\n  <x-radio label="default">default</x-radio>\n  <x-radio label="large">large</x-radio>\n</x-radio-group>',disabledGroup:"small",radioDisable:'<x-radio-group v-model="disabledGroup">\n  <x-radio label="small" disabled>small</x-radio>\n  <x-radio label="default">default</x-radio>\n  <x-radio label="large">large</x-radio>\n</x-radio-group>',verticalGroup:"small",radioVertical:'<x-radio-group v-model="verticalGroup" vertical>\n  <x-radio label="small" disabled>small</x-radio>\n  <x-radio label="default">default</x-radio>\n  <x-radio label="large">large</x-radio>\n</x-radio-group>'}},methods:{showCode:function(t,e){this.$drawer({direction:"right",className:"code-format",render:function(a){return a("prism-editor",{props:{readonly:!0,code:t,language:e}})}})}}}}}]);
//# sourceMappingURL=23.8ba581f.js.map