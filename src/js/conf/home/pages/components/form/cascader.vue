<template>
  <div class="w-body">
    <h3 class="w-h3">Cascader 级联选择器</h3>
    <p class="w-p">两种触发子菜单的方式trigger, hover。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="cascader-demo">
          <x-cascader :options="phones" v-model="selectedOptions" popper-class="myClass"></x-cascader>
          <x-cascader :options="components" @change="handleChange" expand-trigger="hover"></x-cascader>
        </div>
        <div class="demo-tips">
          <p>可以使用 v-model 实现数据的双向绑定。默认 click 触发子菜单</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(cascaderBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">支持最后一层多选</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="cascader-demo">
          <x-cascader :change-on-select = "true" :options="phones" @on-change="handleChange" multiple></x-cascader>
        </div>
        <div class="demo-tips">
          <p>设置 multiple 为 true 最后一层可多选。默认为false</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(cascaderMultiple, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">允许选择任意一级的选项</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="cascader-demo">
          <x-cascader :change-on-select = "true" :options="phones" @on-change="handleChange"></x-cascader>
        </div>
        <div class="demo-tips">
          <p>设置 change-on-select 为 true 可选中任意一层级，默认为false。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(cascaderAnyLevel, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">搜索</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="cascader-demo">
          <x-cascader filterable :options="phones" @on-change="handleChange"></x-cascader>
        </div>
        <div class="demo-tips">
          <p>通过设置 filterable 为true, 输入框可输入且根据输入的内容查询。 默认为false</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(cascaderSearch, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">禁用状态</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="cascader-demo">
          <x-cascader disabled :options="phones" v-model="selectedOptions2"></x-cascader>
        </div>
        <div class="demo-tips">
          <p>通过设置 disabled 属性来禁用开关。默认为false</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(cascaderDisable, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Cascader props</p>
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
            <td>options</td>
            <td>可选项数据源</td>
            <td>Array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>prop</td>
            <td>属性键值</td>
            <td>Object</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>value</td>
            <td>选中项绑定值</td>
            <td>Array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>separator</td>
            <td>分割符</td>
            <td>String</td>
            <td>—</td>
            <td>/</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>Cascader 组件中 input 的原生属性</td>
            <td>String</td>
            <td>—</td>
            <td>请选择 ...</td>
          </tr>
          <tr>
            <td>expand-trigger</td>
            <td>子菜单触发方式</td>
            <td>String</td>
            <td>click / hover</td>
            <td>click</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否支持清空选项</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>filterable</td>
            <td>是否可搜索</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>change-on-select</td>
            <td>是否任意一层可选</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>popper-class</td>
            <td>自定义 class 名称</td>
            <td>String</td>
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
            <td>no-data-text</td>
            <td>无数据提示</td>
            <td>String</td>
            <td>—</td>
            <td>暂无数据</td>
          </tr>
          <tr>
            <td>no-match-text</td>
            <td>搜索无结果提示</td>
            <td>String</td>
            <td>—</td>
            <td>搜索无结果</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>是否多选</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>only-show-last</td>
            <td>是否只展示最后一级的值</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>弹出位置</td>
            <td>String</td>
            <td>—</td>
            <td>bottom-start</td>
          </tr>
          <tr>
            <td>distance</td>
            <td>与参考元素距离，单位为 px</td>
            <td>Number</td>
            <td>—</td>
            <td>1</td>
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
        </tbody>
      </table>
    </div>
    <p class="w-p">Cascader events</p>
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
            <td>开关变化时触发，显示当前状态</td>
            <td>当前 value 值</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { phones, components } from './source/data'
export default {
  data () {
    return {
      phones,
      components,
      selectedOptions: ['xiaomi', '121'],
      selectedOptions2: ['xiaomi', '121'],
      cascaderBasic: `<x-cascader :options="phones"  v-model="selectedOptions"></x-cascader>
<x-cascader :options="components" @on-change="handleChange" expand-trigger="hover"></x-cascader>`,
      cascaderAnyLevel: `<x-cascader :change-on-select = "true" :options="phones" @on-change="handleChange"></x-cascader>`,
      cascaderSearch: `<x-cascader filterable :options="phones" @on-change="handleChange"></x-cascader>`,
      cascaderDisable: `<x-cascader disabled :options="phones" v-model="selectedOptions"></x-cascader>`,
      cascaderMultiple: `<x-cascader multiple :change-on-select = "true" :options="phones" @on-change="handleChange" ></x-cascader>`
    }
  },
  watch: {
    selectedOptions: {
      deep: true,
      handler (val) {
        console.log(val)
      }
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
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

<style lang="scss" scoped>
.myClass .ans-cascader-drop .highlight {
  color: red;
  font-weight: normal;
}
</style>
