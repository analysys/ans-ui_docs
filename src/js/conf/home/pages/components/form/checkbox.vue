<template>
  <div class="w-body">
    <h3 class="w-h3">Checkbox 复选框</h3>
    <p class="w-p">用于一组可选项多项选择，或者单独用于标记切换某种状态。</p>

    <h4 class="w-h4">单独使用</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="checkbox-demo">
          <x-checkbox v-model="single">analysys</x-checkbox>
          <span style="margin-left: 10px;">{{single}}</span>
          <br><br>
          <x-checkbox v-model="singleValue" true-value="真" false-value="假">analysys</x-checkbox>
          <span style="margin-left: 10px;">{{singleValue}}</span>
        </div>
        <div class="demo-tips">
          <p>使用 v-model 可以双向绑定数据。</p>
          <p>通过 true-value、false-value 自定义设置选中的值。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(checkboxSingle, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">复选框组</h4>
    <p class="w-p">适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="checkbox-demo">
          <x-checkbox-group v-model="checkGroup">
            <x-checkbox label="香蕉">香蕉</x-checkbox>
            <x-checkbox label="苹果">苹果</x-checkbox>
            <x-checkbox label="橘子">橘子</x-checkbox>
          </x-checkbox-group>
        </div>
        <div class="demo-tips">
          <p>使用 CheckboxGroup 配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。</p>
          <p>每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(checkboxGroup, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">禁用状态</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="checkbox-demo">
          <x-checkbox-group v-model="checkDisableGroup">
            <x-checkbox label="香蕉" disabled>香蕉</x-checkbox>
            <x-checkbox label="苹果">苹果</x-checkbox>
            <x-checkbox label="橘子">橘子</x-checkbox>
          </x-checkbox-group>
        </div>
        <div class="demo-tips">
          <p>通过设置 disabled 属性来禁用复选框。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(checkboxDisable, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Checkbox props</p>
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
            <td>String / Number / Boolean</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label</td>
            <td>组合使用时有效，指定当前选项 value 值</td>
            <td>String / Number / Boolean</td>
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
          <tr>
            <td>indeterminate</td>
            <td>设置 indeterminate 状态，只负责样式控制</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Checkbox events</p>
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
    <p class="w-p">CheckboxGroup props</p>
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
            <td>Array</td>
            <td>—</td>
            <td>[]</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">CheckboxGroup events</p>
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
      checkGroup: ['香蕉', '橘子'],
      checkboxSingle: `<x-checkbox v-model="single">analysys</x-checkbox>
<span style="margin-left: 10px;">{{single}}</span>
<br><br>
<x-checkbox
  v-model="singleValue"
  true-value="真"
  false-value="假">analysys</x-checkbox>
<span style="margin-left: 10px;">{{singleValue}}</span>`,
      checkboxGroup: `<x-checkbox-group v-model="checkGroup">
  <x-checkbox label="香蕉">香蕉</x-checkbox>
  <x-checkbox label="苹果">苹果</x-checkbox>
  <x-checkbox label="橘子">橘子</x-checkbox>
</x-checkbox-group>`,
      checkDisableGroup: ['香蕉', '橘子'],
      checkboxDisable: `<x-checkbox-group v-model="checkDisableGroup">
  <x-checkbox label="香蕉" disabled>香蕉</x-checkbox>
  <x-checkbox label="苹果">苹果</x-checkbox>
  <x-checkbox label="橘子">橘子</x-checkbox>
</x-checkbox-group>`
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
