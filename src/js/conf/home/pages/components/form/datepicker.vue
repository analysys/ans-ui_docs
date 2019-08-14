<template>
  <div class="w-body">
    <h3 class="w-h3">DatePicker 日期选择器</h3>
    <p class="w-p">选择日期，支持年、月、日期等类型，支持选择范围。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-datepicker placeholder="选择单日"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker type="daterange" placeholder="选择日期区间"></x-datepicker>
        </div>
        <div class="switch-demo">
          <x-datepicker type="year" placeholder="选择年" format="YYYY"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker type="month" placeholder="选择月" format="YYYY-MM"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性 type 为 date || daterange || year || month 分别显示选择单日 、 选择范围类型 、 选择年 、 选择月</p>
          <p>设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(basic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">自定义日期格式</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-datepicker placeholder="YYYY年MM月DD日" format="YYYY年MM月DD日"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker type="daterange" placeholder="YYYY/MM/DD" format="YYYY/MM/DD"></x-datepicker>
        </div>
        <div class="switch-demo">
          <x-datepicker type="year" placeholder="YYYY年" format="YYYY年"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker type="month" placeholder="YYYY年MM月" format="YYYY年MM月"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性 format 可以改变日期的显示格式</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(format, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">日期时间选择</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-datepicker placeholder="选择单日" format="YYYY-MM-DD HH:mm:ss"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker type="daterange" placeholder="选择日期区间" format="YYYY-MM-DD HH'mm" style="width:350px"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>当format属性包含HH hh mm ss时，日期组件自动出现选择时间入口</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(dateTime, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">不可选日期</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-datepicker :disabled-date="disabledDate"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker :disabled-date="disabledDate" type="daterange" style="width:350px"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性disabledDate 可以设置不可选择的日期。disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(disabledDateText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">带有确认操作</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-datepicker :confirm="true"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker :confirm="true" type="daterange" style="width:350px"></x-datepicker>
        </div>

        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-datepicker :confirm="true">
            <span slot="confirm">我是插槽</span>
          </x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker :confirm="true" type="daterange" style="width:350px"><span slot="confirm" style="padding-top:8px;display: inline-block;">我是插槽</span></x-datepicker>
        </div>

        <div class="demo-tips">
          <p>设置属性 confirm，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。确认按钮并没有影响日期的正常选择。</p>

          <p>当confirm为true时，可以设置插槽</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(confirmText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>


    <h4 class="w-h4">快捷选项</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-datepicker type="daterange" :options="options"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性 options , 可以设置快捷选项，详见示例代码。</p>
          <p>value字段为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。</p>
          <p>style字段可以单独定义选项样式</p>
          <p>type字段如果为text，文本框显示的为text字段</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(optionsText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">定义面板个数</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-datepicker type="daterange" :panel-num="4"></x-datepicker>
          <span style="display: inline-block;width: 100px;"></span>
          <x-datepicker type="daterange" :panel-num="2"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性 panelNum , 可以设置面板个数。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(panelNumText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">多选日期区间</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-datepicker type="daterange" :multiple="0" style="width:400px"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性multiple,数字类型, 0可以选择无限个区间 ，1可以选择1个区间，2可以选择2个区间...</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(multipleText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">点选</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-datepicker type="daterange" :multiple="0" style="width:600px" :select-index="1" :value="[['2018-11-11', '2018-11-17'], ['2018-11-18', '2018-11-24'], ['2018-12-16', '2018-12-22']]"></x-datepicker>
        </div>
        <div class="demo-tips">
          <p>多个日期区间，选择指定的区间</p>
          <p>该实例演示的是：每次都会选择的都是第二个日期段</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectIndexText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Datepicker props</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>显示类型，可以是日期区间，可以是日期单选</td>
            <td>String</td>
            <td>date、daterange、year、month</td>
            <td>date</td>
          </tr>
          <tr>
            <td>value</td>
            <td>传入组件的值</td>
            <td>Date</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>format</td>
            <td>展示的日期格式</td>
            <td>String</td>
            <td>参考moment format</td>
            <td>YYYY-MM-DD</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>日期选择器出现的位置</td>
            <td>String</td>
            <td>toptop-start,top-end,bottom,bottom-start,bottom-end,left,left-start,left-end,right,right-start,right-end</td>
            <td>bottom-start</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>占位文本</td>
            <td>String</td>
            <td></td>
            <td>请选择日期</td>
          </tr>
          <tr>
            <td>options</td>
            <td>快捷方式配置</td>
            <td>Array</td>
            <td></td>
            <td>—</td>
          </tr>
          <tr>
            <td>optionsWidth</td>
            <td>左边快捷选项宽度</td>
            <td>Number</td>
            <td></td>
            <td>150</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>是否只读</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸</td>
            <td>String</td>
            <td>large / middle / small</td>
            <td>middle</td>
          </tr>
          <tr>
            <td>confirm</td>
            <td>是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭</td>
            <td>Boolean</td>
            <td></td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabledDate</td>
            <td>设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天</td>
            <td>Function</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>append-to-body</td>
            <td>弹出层是否插入 body</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>position-fixed</td>
            <td>弹出层是否 fixed 定位</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>viewport</td>
            <td>弹出层是否基于 viewport 定位</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>popper-options</td>
            <td>
              <a href="https://popper.js.org/popper-documentation.html#Popper.Defaults" target="_blank">Popper.js 的可选项</a>
            </td>
            <td>Object</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>rangeSeparator</td>
            <td>日期区间连接符,在daterange模式下有效</td>
            <td>String</td>
            <td></td>
            <td> - </td>
          </tr>
          <tr>
            <td>panelNum</td>
            <td>支持面板个数，在daterange模式下有效</td>
            <td>Number</td>
            <td></td>
            <td>3</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>可选择多个日期区间，0为无限个</td>
            <td>Number</td>
            <td></td>
            <td>1</td>
          </tr>
          <tr>
            <td>selectIndex</td>
            <td>多选日期时，指定要选的index，从0开始</td>
            <td>Number</td>
            <td></td>
            <td>-1</td>
          </tr>
        </tbody>
      </table>
    </div>


    <p class="w-p">Datepicker options属性额外配置</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text</td>
            <td>显示的文案</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>style </td>
            <td>当前选项的样式</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>value </td>
            <td>返回指定的日期，如需自己控制逻辑，可不设置，并使用 click 回调</td>
            <td>Function</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>click </td>
            <td>点击时的回调，参数为当前options的item项</td>
            <td>Function</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>


    <p class="w-p">Datepicker events</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>on-change</td>
            <td>选择日期后触发, 返回3个参数</td>
            <td> 参数一：当前选中的日期（格式化后的）<br>
              参数二：快捷选项的item，没有为NULL<br>
              参数三：当前选中的日期（标准的日期对象）
            </td>
          </tr>
          <tr>
            <td>on-text-change</td>
            <td>在confirm模式下,input文本改变触发</td>
            <td>当前选中的日期（格式化后的）</td>
          </tr>
          <tr>
            <td>on-clear</td>
            <td>在confirm模式下点击清空触发</td>
            <td></td>
          </tr>
          <tr>
            <td>on-open-change</td>
            <td>选择器面板打开触发</td>
            <td></td>
          </tr>
          <tr>
            <td>on-close-change</td>
            <td>选择器面板关闭触发</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>


    <p class="w-p">Datepicker slots</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>input</td>
            <td>自定义选择器显示内容</td>
          </tr>
          <tr>
            <td>confirm</td>
            <td>confirm模式下有效</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      options: [
        {
          text: '今日',
          type: 'text',
          value () {
            return [dayjs().format('YYYY/MM/DD'), dayjs().format('YYYY/MM/DD')]
          },
          click: () => {}
        }, {
          text: '近29日',
          value () {
            return [dayjs().subtract(29, 'days').format('YYYY/MM/DD'), dayjs().format('YYYY/MM/DD')]
          },
          click: () => {}
        }
      ],
      disabledDate: (date) => {
        return (date.getTime() - new Date().getTime()) > 0
      },

      basic: `<x-datepicker placeholder="选择单日"></x-datepicker>
<x-datepicker type="daterange" placeholder="选择日期区间"></x-datepicker>
<x-datepicker type="year" placeholder="选择年" format="YYYY"></x-datepicker>
<x-datepicker type="month" placeholder="选择月" format="YYYY-MM"></x-datepicker>`,
      format: `<x-datepicker placeholder="YYYY年MM月DD日" format="YYYY年MM月DD日"></x-datepicker>
<x-datepicker type="daterange" placeholder="YYYY/MM/DD" format="YYYY/MM/DD"></x-datepicker>
<x-datepicker type="year" placeholder="YYYY年" format="YYYY年"></x-datepicker>
<x-datepicker type="month" placeholder="YYYY年MM月" format="YYYY年MM月"></x-datepicker>`,
      dateTime: `<x-datepicker placeholder="选择单日" format="YYYY-MM-DD HH:mm:ss"></x-datepicker>
<x-datepicker type="daterange" placeholder="选择日期区间" format="YYYY-MM-DD HH'mm"></x-datepicker>`,
      disabledDateText: `<x-datepicker :disabled-date="disabledDate"></x-datepicker>
<x-datepicker :disabled-date="disabledDate" type="daterange"></x-datepicker>

data () {
  return {
      disabledDate: (date) => {
      return (date.getTime() - new Date().getTime()) > 0
    }
  }
}`,
      confirmText: `<x-datepicker :confirm="true"></x-datepicker>
<x-datepicker :confirm="true" type="daterange"></x-datepicker>

<x-datepicker :confirm="true">
  <span slot="confirm">我是插槽</span>
</x-datepicker>
<x-datepicker :confirm="true" type="daterange">
  <span slot="confirm" style="padding-top:8px;display: inline-block;">我是插槽</span>
</x-datepicker>`,
      optionsText: `<x-datepicker type="daterange" :options="options"></x-datepicker>

data () {
  return {
    options: [
      {
        text: '今日',
        type: 'text',
        value () {
          return [dayjs().format('YYYY/MM/DD'), dayjs().format('YYYY/MM/DD')]
        },
        click: () => {}
      }, {
        text: '近29日',
        value () {
          return [dayjs().subtract(29, 'days').format('YYYY/MM/DD'), dayjs().format('YYYY/MM/DD')]
        },
        click: () => {}
      }
    ]
  }
}`,
      panelNumText: `<x-datepicker type="daterange" :panel-num="4"></x-datepicker>
<x-datepicker type="daterange" :panel-num="2"></x-datepicker>`,
      multipleText: `<x-datepicker type="daterange" :multiple="0"></x-datepicker>`,
      selectIndexText: `<x-datepicker
  type="daterange"
  :multiple="0"
  :select-index="1"
  :value="[['2018-11-11', '2018-11-17'], ['2018-11-18', '2018-11-24'], ['2018-12-16', '2018-12-22']]">
</x-datepicker>`
    }
  },
  methods: {
    showCode (code, lang) {
      this.$drawer({
        direction: 'right',
        className: 'code-format',
        render (h) {
          return h('prism-editor', {
            props: {
              readonly: true,
              code,
              language: lang
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
