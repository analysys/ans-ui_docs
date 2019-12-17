<template>
  <div class="w-body">
    <h3 class="w-h3">TimePicker 时间选择器</h3>
    <p class="w-p">选择时间，支持选择范围。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-timepicker></x-timepicker>
          <x-timepicker type="timerange"></x-timepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性 type 为 time 或 timerange 分别显示选择单个时间和选择范围时间类型。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(basic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">时间格式</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-timepicker format="HH点mm分ss秒"></x-timepicker>
          <x-timepicker type="timerange" format="HH'mm'ss"></x-timepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性 format 可以改变时间的显示格式</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(formatText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">选择时分</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-timepicker format="HH点mm分"></x-timepicker>
          <x-timepicker type="timerange" format="HH'mm"></x-timepicker>
        </div>
        <div class="demo-tips">
          <p>组件浮层中的列会随着 format 变化，当略去 format 中的秒时，浮层中对应的列也会消失</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(formatTexts, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">带有确认操作</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo" style="margin-bottom: 10px;">
          <x-timepicker format="HH点mm分" :confirm="true"></x-timepicker>
          <x-timepicker type="timerange" format="HH'mm" :confirm="true"></x-timepicker>
        </div>
        <div class="demo-tips">
          <p>设置属性 confirm，选择器会有清空和确定按钮。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(confirmText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">TimePicker props</p>
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
            <td>time、timerange</td>
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
            <td>请选择时间</td>
          </tr>
          <tr>
            <td>input-props</td>
            <td>timepicker 组件中 input 组件的属性</td>
            <td>Object</td>
            <td>—</td>
            <td>—</td>
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
        </tbody>
      </table>
    </div>

    <p class="w-p">TimePicker events</p>
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
            <td> 参数一：当前选中的时间（格式化后的）<br>
              参数二：当前选中的时间（标准的日期对象）
            </td>
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

    <p class="w-p">Timepicker slots</p>
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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      text: {
        on: '是',
        off: '否'
      },
      basic: `<x-timepicker></x-timepicker>
<x-timepicker type="timerange"></x-timepicker>`,
      formatText: `<x-timepicker format="HH点mm分ss秒"></x-timepicker>
<x-timepicker type="timerange" format="HH'mm'ss"></x-timepicker>`,
      formatTexts: `<x-timepicker format="HH点mm分"></x-timepicker>
<x-timepicker type="timerange" format="HH'mm"></x-timepicker>`,
      confirmText: `<x-timepicker format="HH点mm分" :confirm="true"></x-timepicker>
<x-timepicker type="timerange" format="HH'mm" :confirm="true"></x-timepicker>`
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
