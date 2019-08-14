<template>
  <div class="w-body">
    <h3 class="w-h3">Radio 单选框</h3>
    <p class="w-p">用于一组可选项单项选择，或者单独用于切换到选中状态。</p>

    <h4 class="w-h4">单独使用</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="radio-demo">
          <x-radio name="analysys" v-model="single">Radio</x-radio>
          <span style="margin-left: 10px;">{{single}}</span>
          <br><br>
          <x-radio v-model="singleValue" true-value="真" false-value="假">Radio</x-radio>
          <span style="margin-left: 10px;">{{singleValue}}</span>
        </div>
        <div class="demo-tips">
          <p>使用 v-model 可以双向绑定数据。</p>
          <p>通过 true-value、false-value 自定义设置选中的值。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(radioSingle, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">尺寸</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="radio-demo">
          <x-radio size="large">large</x-radio>
          <x-radio style="margin-left: 10px;">default</x-radio>
          <x-radio size="small" style="margin-left: 10px;">small</x-radio>
        </div>
        <div class="demo-tips">
          <p>单选框有三种尺寸：大、中（默认）、小。</p>
          <p>通过设置 size 为 large / small 将按钮设置为大/小尺寸，不设置为默认（中）尺寸。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(radioSize, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">单选框组</h4>
    <p class="w-p">适用于在多个互斥的选项中选择的场景。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="radio-demo">
          <x-radio-group v-model="groupSize" :size="groupSize">
            <x-radio label="small">small</x-radio>
            <x-radio label="default">default</x-radio>
            <x-radio label="large">large</x-radio>
          </x-radio-group>
        </div>
        <div class="demo-tips">
          <p>使用 RadioGroup 实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。</p>
          <p>每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。</p>
          <p>通过设置 size 改变按钮组的大小，默认（中）。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(radioGroup, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">禁用状态</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="radio-demo">
          <x-radio-group v-model="disabledGroup">
            <x-radio label="small" disabled>small</x-radio>
            <x-radio label="default">default</x-radio>
            <x-radio label="large">large</x-radio>
          </x-radio-group>
        </div>
        <div class="demo-tips">
          <p>通过设置 disabled 属性来禁用单选框。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(radioDisable, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">垂直显示</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="radio-demo">
          <x-radio-group v-model="verticalGroup" vertical>
            <x-radio label="small" disabled>small</x-radio>
            <x-radio label="default">default</x-radio>
            <x-radio label="large">large</x-radio>
          </x-radio-group>
        </div>
        <div class="demo-tips">
          <p>设置属性 vertical 可以垂直显示。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(radioVertical, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Radio props</p>
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
            <td>value</td>
            <td>单独使用时有效，可用于 v-model 双向绑定</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>name</td>
            <td>原生 name 属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label</td>
            <td>组合使用时有效，指定当前选项 value 值</td>
            <td>String / Number</td>
            <td>—</td>
            <td>—</td>
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
            <td>自定义选中时的值</td>
            <td>String / Number / Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>false-value</td>
            <td>自定义未选中时的值</td>
            <td>String / Number / Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Radio events</p>
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
            <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td>
            <td>选中的 value 值</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">RadioGroup props</p>
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
            <td>value</td>
            <td>当前选中的值，可用于 v-model 双向绑定</td>
            <td>String / Number / Boolean</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>name</td>
            <td>原生 name 属性，优先级小于 Radio 的 name 属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸</td>
            <td>String</td>
            <td>large / default / small</td>
            <td>default</td>
          </tr>
          <tr>
            <td>vertical</td>
            <td>是否垂直显示</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">RadioGroup events</p>
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
            <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td>
            <td>选中的 label 值</td>
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
      single: false,
      singleValue: '假',
      radioSingle: `<x-radio name="analysys" v-model="single">Radio</x-radio>
<span style="margin-left: 10px;">{{single}}</span>
<br><br>
<x-radio
  v-model="singleValue"
  true-value="真"
  false-value="假">Radio</x-radio>
<span style="margin-left: 10px;">{{singleValue}}</span>`,
      radioSize: `<x-radio size="large">large</x-radio>
<x-radio style="margin-left: 10px;">default</x-radio>
<x-radio size="small" style="margin-left: 10px;">small</x-radio>`,
      groupSize: 'small',
      radioGroup: `<x-radio-group v-model="groupSize" :size="groupSize">
  <x-radio label="small">small</x-radio>
  <x-radio label="default">default</x-radio>
  <x-radio label="large">large</x-radio>
</x-radio-group>`,
      disabledGroup: 'small',
      radioDisable: `<x-radio-group v-model="disabledGroup">
  <x-radio label="small" disabled>small</x-radio>
  <x-radio label="default">default</x-radio>
  <x-radio label="large">large</x-radio>
</x-radio-group>`,
      verticalGroup: 'small',
      radioVertical: `<x-radio-group v-model="verticalGroup" vertical>
  <x-radio label="small" disabled>small</x-radio>
  <x-radio label="default">default</x-radio>
  <x-radio label="large">large</x-radio>
</x-radio-group>`
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
