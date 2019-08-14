<template>
  <div class="w-body">
    <h3 class="w-h3">Switch 开关</h3>
    <p class="w-p">在两种状态间切换时用到的开关选择器。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-switch v-model="checked"></x-switch>
        </div>
        <div class="demo-tips">
          <p>使用 v-model 可以双向绑定数据。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(switchBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">尺寸</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-switch v-model="checked" size="small"></x-switch>
          <x-switch v-model="checked"></x-switch>
          <x-switch v-model="checked" size="large"></x-switch>
        </div>
        <div class="demo-tips">
          <p>设置 size 为 large / small 使用大号/小号的开关，默认（中）。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(switchSize, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">带文本的开关</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-switch v-model="checked" :text="text" size="small"></x-switch>
          <x-switch v-model="checked" :text="text"></x-switch>
          <x-switch v-model="checked" :text="text" size="large"></x-switch>
        </div>
        <div class="demo-tips">
          <p>通过设置 text 自定义内容，建议不超过 1 个汉字。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(switchText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">禁用状态</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="switch-demo">
          <x-switch disabled></x-switch>
        </div>
        <div class="demo-tips">
          <p>通过设置 disabled 属性来禁用开关。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(switchDisable, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Switch props</p>
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
            <td>name</td>
            <td>原生 name 属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>value</td>
            <td>开关当前值</td>
            <td>String / Number / Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>text</td>
            <td>开关内显示的文本</td>
            <td>Object</td>
            <td>{ on: '', off: '' }</td>
            <td>{ on: '', off: '' }</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>是否只读</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
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
            <td>large / default / small</td>
            <td>default</td>
          </tr>
          <tr>
            <td>true-value</td>
            <td>自定义选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
            <td>String / Number / Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>false-value</td>
            <td>自定义未选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
            <td>String / Number / Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Switch events</p>
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
            <td>on-click</td>
            <td>点击开关时触发</td>
            <td>当前 value 值</td>
          </tr>
          <tr>
            <td>on-change</td>
            <td>开关变化时触发，显示当前状态</td>
            <td>当前 value 值</td>
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
      switchBasic: `<x-switch v-model="checked"></x-switch>`,
      switchSize: `<x-switch v-model="checked" size="small"></x-switch>
<x-switch v-model="checked"></x-switch>
<x-switch v-model="checked" size="large"></x-switch>`,
      switchText: `<x-switch v-model="checked" :text="text" size="small"></x-switch>
<x-switch v-model="checked" :text="text"></x-switch>
<x-switch v-model="checked" :text="text" size="large"></x-switch>`,
      switchDisable: `<x-switch disabled></x-switch>`
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
