(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{125:function(t,e,a){t.exports=function(){"use strict";var v="millisecond",p="second",u="minute",h="hour",f="day",m="week",Y="month",c="quarter",y="year",r=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,x=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,s=function(t,e,a){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(a)+t},t={s:s,z:function(t){var e=-t.utcOffset(),a=Math.abs(e),i=Math.floor(a/60),r=a%60;return(e<=0?"+":"-")+s(i,2,"0")+":"+s(r,2,"0")},m:function(t,e){var a=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(a,Y),r=e-i<0,s=t.clone().add(a+(r?-1:1),Y);return Number(-(a+(e-i)/(r?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:Y,y:y,w:m,d:f,h:h,m:u,s:p,ms:v,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},e={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},n="en",d={};d[n]=e;var o=function(t){return t instanceof l},i=function(t,e,a){var i;if(!t)return n;if("string"==typeof t)d[t]&&(i=t),e&&(d[t]=e,i=t);else{var r=t.name;d[r]=t,i=r}return a||(n=i),i},_=function(t,e,a){if(o(t))return t.clone();var i=e?"string"==typeof e?{format:e,pl:a}:e:{};return i.date=t,new l(i)},w=t;w.l=i,w.i=o,w.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u})};var l=function(){function t(t){this.$L=this.$L||i(t.locale,null,!0),this.parse(t)}var e=t.prototype;return e.parse=function(t){this.$d=function(t){var e=t.date,a=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(r);if(i)return a?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return w},e.isValid=function(){return!("Invalid Date"===this.$d.toString())},e.isSame=function(t,e){var a=_(t);return this.startOf(e)<=a&&a<=this.endOf(e)},e.isAfter=function(t,e){return _(t)<this.startOf(e)},e.isBefore=function(t,e){return this.endOf(e)<_(t)},e.$g=function(t,e,a){return w.u(t)?this[e]:this.set(a,t)},e.year=function(t){return this.$g(t,"$y",y)},e.month=function(t){return this.$g(t,"$M",Y)},e.day=function(t){return this.$g(t,"$W",f)},e.date=function(t){return this.$g(t,"$D","date")},e.hour=function(t){return this.$g(t,"$H",h)},e.minute=function(t){return this.$g(t,"$m",u)},e.second=function(t){return this.$g(t,"$s",p)},e.millisecond=function(t){return this.$g(t,"$ms",v)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,e){var i=this,r=!!w.u(e)||e,a=w.p(t),s=function(t,e){var a=w.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return r?a:a.endOf(f)},n=function(t,e){return w.w(i.toDate()[t].apply(i.toDate(),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},d=this.$W,v=this.$M,c=this.$D,o="set"+(this.$u?"UTC":"");switch(a){case y:return r?s(1,0):s(31,11);case Y:return r?s(1,v):s(0,v+1);case m:var _=this.$locale().weekStart||0,l=(d<_?d+7:d)-_;return s(r?c-l:c+(6-l),v);case f:case"date":return n(o+"Hours",0);case h:return n(o+"Minutes",1);case u:return n(o+"Seconds",2);case p:return n(o+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,e){var a,i=w.p(t),r="set"+(this.$u?"UTC":""),s=((a={})[f]=r+"Date",a.date=r+"Date",a[Y]=r+"Month",a[y]=r+"FullYear",a[h]=r+"Hours",a[u]=r+"Minutes",a[p]=r+"Seconds",a[v]=r+"Milliseconds",a)[i],n=i===f?this.$D+(e-this.$W):e;if(i===Y||i===y){var d=this.clone().set("date",1);d.$d[s](n),d.init(),this.$d=d.set("date",Math.min(this.$D,d.daysInMonth())).toDate()}else s&&this.$d[s](n);return this.init(),this},e.set=function(t,e){return this.clone().$set(t,e)},e.get=function(t){return this[w.p(t)]()},e.add=function(a,t){var e,i=this;a=Number(a);var r=w.p(t),s=function(t){var e=_(i);return w.w(e.date(e.date()+Math.round(t*a)),i)};if(r===Y)return this.set(Y,this.$M+a);if(r===y)return this.set(y,this.$y+a);if(r===f)return s(1);if(r===m)return s(7);var n=((e={})[u]=6e4,e[h]=36e5,e[p]=1e3,e)[r]||1,d=this.valueOf()+a*n;return w.w(d,this)},e.subtract=function(t,e){return this.add(-1*t,e)},e.format=function(t){var r=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),e=this.$locale(),i=this.$H,n=this.$m,d=this.$M,v=e.weekdays,c=e.months,o=function(t,e,a,i){return t&&(t[e]||t(r,s))||a[e].substr(0,i)},_=function(t){return w.s(i%12||12,t,"0")},l=e.meridiem||function(t,e,a){var i=t<12?"AM":"PM";return a?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:d+1,MM:w.s(d+1,2,"0"),MMM:o(e.monthsShort,d,c,3),MMMM:c[d]||c(this,s),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:o(e.weekdaysMin,this.$W,v,2),ddd:o(e.weekdaysShort,this.$W,v,3),dddd:v[this.$W],H:String(i),HH:w.s(i,2,"0"),h:_(1),hh:_(2),a:l(i,n,!0),A:l(i,n,!1),m:String(n),mm:w.s(n,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:a};return s.replace(x,function(t,e){return e||p[t]||a.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,e,a){var i,r=w.p(e),s=_(t),n=6e4*(s.utcOffset()-this.utcOffset()),d=this-s,v=w.m(this,s);return v=((i={})[y]=v/12,i[Y]=v,i[c]=v/3,i[m]=(d-n)/6048e5,i[f]=(d-n)/864e5,i[h]=d/36e5,i[u]=d/6e4,i[p]=d/1e3,i)[r]||d,a?v:w.a(v)},e.daysInMonth=function(){return this.endOf(Y).$D},e.$locale=function(){return d[this.$L]},e.locale=function(t,e){if(!t)return this.$L;var a=this.clone();return a.$L=i(t,e,!0),a},e.clone=function(){return w.w(this.toDate(),this)},e.toDate=function(){return new Date(this.$d)},e.toJSON=function(){return this.toISOString()},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},t}();return _.prototype=l.prototype,_.extend=function(t,e){return t(e,l,_),_},_.locale=i,_.isDayjs=o,_.unix=function(t){return _(1e3*t)},_.en=d[n],_.Ls=d,_}()},155:function(t,e,a){"use strict";function i(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-body"},[a("h3",{staticClass:"w-h3"},[e._v("DatePicker 日期选择器")]),e._v(" "),a("p",{staticClass:"w-p"},[e._v("选择日期，支持年、月、日期等类型，支持选择范围。")]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("基本用法")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo",staticStyle:{"margin-bottom":"10px"}},[a("x-datepicker",{attrs:{placeholder:"选择单日"}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{attrs:{type:"daterange",placeholder:"选择日期区间"}})],1),e._v(" "),a("div",{staticClass:"switch-demo"},[a("x-datepicker",{attrs:{type:"year",placeholder:"选择年",format:"YYYY"}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{attrs:{type:"month",placeholder:"选择月",format:"YYYY-MM"}})],1),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.basic,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("自定义日期格式")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo",staticStyle:{"margin-bottom":"10px"}},[a("x-datepicker",{attrs:{placeholder:"YYYY年MM月DD日",format:"YYYY年MM月DD日"}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{attrs:{type:"daterange",placeholder:"YYYY/MM/DD",format:"YYYY/MM/DD"}})],1),e._v(" "),a("div",{staticClass:"switch-demo"},[a("x-datepicker",{attrs:{type:"year",placeholder:"YYYY年",format:"YYYY年"}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{attrs:{type:"month",placeholder:"YYYY年MM月",format:"YYYY年MM月"}})],1),e._v(" "),e._m(1)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.format,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("日期时间选择")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo",staticStyle:{"margin-bottom":"10px"}},[a("x-datepicker",{attrs:{placeholder:"选择单日",format:"YYYY-MM-DD HH:mm:ss"}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{staticStyle:{width:"350px"},attrs:{type:"daterange",placeholder:"选择日期区间",format:"YYYY-MM-DD HH'mm"}})],1),e._v(" "),e._m(2)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.dateTime,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("不可选日期")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo",staticStyle:{"margin-bottom":"10px"}},[a("x-datepicker",{attrs:{"disabled-date":e.disabledDate}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{staticStyle:{width:"350px"},attrs:{"disabled-date":e.disabledDate,type:"daterange"}})],1),e._v(" "),e._m(3)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.disabledDateText,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("带有确认操作")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo",staticStyle:{"margin-bottom":"10px"}},[a("x-datepicker",{attrs:{confirm:!0}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{staticStyle:{width:"350px"},attrs:{confirm:!0,type:"daterange"}})],1),e._v(" "),a("div",{staticClass:"switch-demo",staticStyle:{"margin-bottom":"10px"}},[a("x-datepicker",{attrs:{confirm:!0}},[a("span",{attrs:{slot:"confirm"},slot:"confirm"},[e._v("我是插槽")])]),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{staticStyle:{width:"350px"},attrs:{confirm:!0,type:"daterange"}},[a("span",{staticStyle:{"padding-top":"8px",display:"inline-block"},attrs:{slot:"confirm"},slot:"confirm"},[e._v("我是插槽")])])],1),e._v(" "),e._m(4)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.confirmText,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("快捷选项")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo"},[a("x-datepicker",{attrs:{type:"daterange",options:e.options}})],1),e._v(" "),e._m(5)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.optionsText,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("定义面板个数")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo"},[a("x-datepicker",{attrs:{type:"daterange","panel-num":4}}),e._v(" "),a("span",{staticStyle:{display:"inline-block",width:"100px"}}),e._v(" "),a("x-datepicker",{attrs:{type:"daterange","panel-num":2}})],1),e._v(" "),e._m(6)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.panelNumText,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("多选日期区间")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo"},[a("x-datepicker",{staticStyle:{width:"400px"},attrs:{type:"daterange",multiple:0}})],1),e._v(" "),e._m(7)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.multipleText,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("点选")]),e._v(" "),a("div",{staticClass:"demo-wrapper"},[a("div",{staticClass:"demo-con clearfix"},[a("div",{staticClass:"switch-demo"},[a("x-datepicker",{staticStyle:{width:"600px"},attrs:{type:"daterange",multiple:0,"select-index":1,value:[["2018-11-11","2018-11-17"],["2018-11-18","2018-11-24"],["2018-12-16","2018-12-22"]]}})],1),e._v(" "),e._m(8)]),e._v(" "),a("div",{staticClass:"code-show"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.showCode(e.selectIndexText,"html")}}},[e._v("显示代码 "),a("i",{staticClass:"ans-icon-arrow-right"})])])]),e._v(" "),a("h4",{staticClass:"w-h4"},[e._v("API")]),e._v(" "),a("p",{staticClass:"w-p"},[e._v("Datepicker props")]),e._v(" "),e._m(9),e._v(" "),a("p",{staticClass:"w-p"},[e._v("Datepicker options属性额外配置")]),e._v(" "),e._m(10),e._v(" "),a("p",{staticClass:"w-p"},[e._v("Datepicker events")]),e._v(" "),e._m(11),e._v(" "),a("p",{staticClass:"w-p"},[e._v("Datepicker slots")]),e._v(" "),e._m(12)])}var r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-tips"},[a("p",[t._v("设置属性 type 为 date || daterange || year || month 分别显示选择单日 、 选择范围类型 、 选择年 、 选择月")]),t._v(" "),a("p",[t._v("设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[this._v("设置属性 format 可以改变日期的显示格式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[this._v("当format属性包含HH hh mm ss时，日期组件自动出现选择时间入口")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[this._v("设置属性disabledDate 可以设置不可选择的日期。disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-tips"},[a("p",[t._v("设置属性 confirm，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。确认按钮并没有影响日期的正常选择。")]),t._v(" "),a("p",[t._v("当confirm为true时，可以设置插槽")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-tips"},[a("p",[t._v("设置属性 options , 可以设置快捷选项，详见示例代码。")]),t._v(" "),a("p",[t._v("value字段为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。")]),t._v(" "),a("p",[t._v("style字段可以单独定义选项样式")]),t._v(" "),a("p",[t._v("type字段如果为text，文本框显示的为text字段")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[this._v("设置属性 panelNum , 可以设置面板个数。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-tips"},[e("p",[this._v("设置属性multiple,数字类型, 0可以选择无限个区间 ，1可以选择1个区间，2可以选择2个区间...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-tips"},[a("p",[t._v("多个日期区间，选择指定的区间")]),t._v(" "),a("p",[t._v("该实例演示的是：每次都会选择的都是第二个日期段")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"api-table"},[a("table",{attrs:{cellspacing:"0"}},[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("显示类型，可以是日期区间，可以是日期单选")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("date、daterange、year、month")]),t._v(" "),a("td",[t._v("date")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("传入组件的值")]),t._v(" "),a("td",[t._v("Date")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("展示的日期格式")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("参考moment format")]),t._v(" "),a("td",[t._v("YYYY-MM-DD")])]),t._v(" "),a("tr",[a("td",[t._v("placement")]),t._v(" "),a("td",[t._v("日期选择器出现的位置")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("toptop-start,top-end,bottom,bottom-start,bottom-end,left,left-start,left-end,right,right-start,right-end")]),t._v(" "),a("td",[t._v("bottom-start")])]),t._v(" "),a("tr",[a("td",[t._v("placeholder")]),t._v(" "),a("td",[t._v("占位文本")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("请选择日期")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("快捷方式配置")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("optionsWidth")]),t._v(" "),a("td",[t._v("左边快捷选项宽度")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("150")])]),t._v(" "),a("tr",[a("td",[t._v("readonly")]),t._v(" "),a("td",[t._v("是否只读")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("是否禁用")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("尺寸")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("large / middle / small")]),t._v(" "),a("td",[t._v("middle")])]),t._v(" "),a("tr",[a("td",[t._v("confirm")]),t._v(" "),a("td",[t._v("是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("disabledDate")]),t._v(" "),a("td",[t._v("设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("append-to-body")]),t._v(" "),a("td",[t._v("弹出层是否插入 body")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("position-fixed")]),t._v(" "),a("td",[t._v("弹出层是否 fixed 定位")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("viewport")]),t._v(" "),a("td",[t._v("弹出层是否基于 viewport 定位")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("popper-options")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://popper.js.org/popper-documentation.html#Popper.Defaults",target:"_blank"}},[t._v("Popper.js 的可选项")])]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("rangeSeparator")]),t._v(" "),a("td",[t._v("日期区间连接符,在daterange模式下有效")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v(" - ")])]),t._v(" "),a("tr",[a("td",[t._v("panelNum")]),t._v(" "),a("td",[t._v("支持面板个数，在daterange模式下有效")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[t._v("multiple")]),t._v(" "),a("td",[t._v("可选择多个日期区间，0为无限个")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("selectIndex")]),t._v(" "),a("td",[t._v("多选日期时，指定要选的index，从0开始")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("-1")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"api-table"},[a("table",{attrs:{cellspacing:"0"}},[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("显示的文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("style ")]),t._v(" "),a("td",[t._v("当前选项的样式")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("value ")]),t._v(" "),a("td",[t._v("返回指定的日期，如需自己控制逻辑，可不设置，并使用 click 回调")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("click ")]),t._v(" "),a("td",[t._v("点击时的回调，参数为当前options的item项")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"api-table"},[a("table",{attrs:{cellspacing:"0"}},[a("thead",[a("tr",[a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("on-change")]),t._v(" "),a("td",[t._v("选择日期后触发, 返回3个参数")]),t._v(" "),a("td",[t._v(" 参数一：当前选中的日期（格式化后的）"),a("br"),t._v("\n            参数二：快捷选项的item，没有为NULL"),a("br"),t._v("\n            参数三：当前选中的日期（标准的日期对象）\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("on-text-change")]),t._v(" "),a("td",[t._v("在confirm模式下,input文本改变触发")]),t._v(" "),a("td",[t._v("当前选中的日期（格式化后的）")])]),t._v(" "),a("tr",[a("td",[t._v("on-clear")]),t._v(" "),a("td",[t._v("在confirm模式下点击清空触发")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("on-open-change")]),t._v(" "),a("td",[t._v("选择器面板打开触发")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("on-close-change")]),t._v(" "),a("td",[t._v("选择器面板关闭触发")]),t._v(" "),a("td")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"api-table"},[a("table",{attrs:{cellspacing:"0"}},[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("自定义选择器显示内容")])]),t._v(" "),a("tr",[a("td",[t._v("confirm")]),t._v(" "),a("td",[t._v("confirm模式下有效")])])])])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},32:function(t,e,a){"use strict";a.r(e);var i=a(155),r=a(82);for(var s in r)"default"!==s&&function(t){a.d(e,t,function(){return r[t]})}(s);var n=a(4),d=Object(n.a)(r.default,i.a,i.b,!1,null,"7396d26c",null);e.default=d.exports},82:function(t,e,a){"use strict";a.r(e);var i=a(83),r=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e.default=r.a},83:function(t,e,a){"use strict";e.__esModule=!0;var i,r=a(125),s=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{options:[{text:"今日",type:"text",value:function(){return[(0,s.default)().format("YYYY/MM/DD"),(0,s.default)().format("YYYY/MM/DD")]},click:function(){}},{text:"近29日",value:function(){return[(0,s.default)().subtract(29,"days").format("YYYY/MM/DD"),(0,s.default)().format("YYYY/MM/DD")]},click:function(){}}],disabledDate:function(t){return 0<t.getTime()-(new Date).getTime()},basic:'<x-datepicker placeholder="选择单日"></x-datepicker>\n<x-datepicker type="daterange" placeholder="选择日期区间"></x-datepicker>\n<x-datepicker type="year" placeholder="选择年" format="YYYY"></x-datepicker>\n<x-datepicker type="month" placeholder="选择月" format="YYYY-MM"></x-datepicker>',format:'<x-datepicker placeholder="YYYY年MM月DD日" format="YYYY年MM月DD日"></x-datepicker>\n<x-datepicker type="daterange" placeholder="YYYY/MM/DD" format="YYYY/MM/DD"></x-datepicker>\n<x-datepicker type="year" placeholder="YYYY年" format="YYYY年"></x-datepicker>\n<x-datepicker type="month" placeholder="YYYY年MM月" format="YYYY年MM月"></x-datepicker>',dateTime:'<x-datepicker placeholder="选择单日" format="YYYY-MM-DD HH:mm:ss"></x-datepicker>\n<x-datepicker type="daterange" placeholder="选择日期区间" format="YYYY-MM-DD HH\'mm"></x-datepicker>',disabledDateText:'<x-datepicker :disabled-date="disabledDate"></x-datepicker>\n<x-datepicker :disabled-date="disabledDate" type="daterange"></x-datepicker>\n\ndata () {\n  return {\n      disabledDate: (date) => {\n      return (date.getTime() - new Date().getTime()) > 0\n    }\n  }\n}',confirmText:'<x-datepicker :confirm="true"></x-datepicker>\n<x-datepicker :confirm="true" type="daterange"></x-datepicker>\n\n<x-datepicker :confirm="true">\n  <span slot="confirm">我是插槽</span>\n</x-datepicker>\n<x-datepicker :confirm="true" type="daterange">\n  <span slot="confirm" style="padding-top:8px;display: inline-block;">我是插槽</span>\n</x-datepicker>',optionsText:"<x-datepicker type=\"daterange\" :options=\"options\"></x-datepicker>\n\ndata () {\n  return {\n    options: [\n      {\n        text: '今日',\n        type: 'text',\n        value () {\n          return [dayjs().format('YYYY/MM/DD'), dayjs().format('YYYY/MM/DD')]\n        },\n        click: () => {}\n      }, {\n        text: '近29日',\n        value () {\n          return [dayjs().subtract(29, 'days').format('YYYY/MM/DD'), dayjs().format('YYYY/MM/DD')]\n        },\n        click: () => {}\n      }\n    ]\n  }\n}",panelNumText:'<x-datepicker type="daterange" :panel-num="4"></x-datepicker>\n<x-datepicker type="daterange" :panel-num="2"></x-datepicker>',multipleText:'<x-datepicker type="daterange" :multiple="0"></x-datepicker>',selectIndexText:"<x-datepicker\n  type=\"daterange\"\n  :multiple=\"0\"\n  :select-index=\"1\"\n  :value=\"[['2018-11-11', '2018-11-17'], ['2018-11-18', '2018-11-24'], ['2018-12-16', '2018-12-22']]\">\n</x-datepicker>"}},methods:{showCode:function(e,a){this.$drawer({direction:"right",className:"code-format",render:function(t){return t("prism-editor",{props:{readonly:!0,code:e,language:a}})}})}}}}}]);
//# sourceMappingURL=16.531d84d.js.map