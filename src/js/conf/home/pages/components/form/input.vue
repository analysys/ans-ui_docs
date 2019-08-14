<template>
  <div class="w-body">
    <h3 class="w-h3">Input 输入框</h3>
    <p class="w-p">基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input v-model="value" style="width: 300px;"></x-input>
        </div>
        <div class="demo-tips">
          <p>基本用法，可以使用 v-model 实现数据的双向绑定。</p>
          <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">无边框</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input value="无边框的输入框" no-border style="width: 300px;"></x-input>
        </div>
        <div class="demo-tips">
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputNoBorder, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">原生属性</h4>
    <p class="w-p">支持 input 元素的原生属性。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input readonly name="readonly" value="readonly" style="width: 200px;"></x-input>
          <x-input disabled value="disabled" style="width: 200px;"></x-input>
          <x-input autofocus placeholder="autofocus" style="width: 200px;"></x-input>
          <br><br>
          <x-input autocomplete="on" value="autocomplete" style="width: 200px;"></x-input>
          <x-input maxlength="15" value="maxlength=15" style="width: 200px;"></x-input>
          <x-input tabindex="1" style="width: 200px;"></x-input>
        </div>
        <div class="demo-tips">
          <p>可以直接设置 input 的元素属性，例如 readonly、disabled、autofocus 等。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputOrigin, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">尺寸</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input size="large" placeholder="large size" style="width: 200px;"></x-input>
          <x-input placeholder="default size" style="width: 200px;"></x-input>
          <x-input size="small" placeholder="small size" style="width: 200px;"></x-input>
        </div>
        <div class="demo-tips">
          <p>输入框有三种尺寸：大、默认（中）、小。</p>
          <p>通过设置 size 为 large / small 可以得到大/小尺寸的输入框，不设置则为默认（中）尺寸。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputSize, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">类型</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input placeholder="请输入内容" style="width: 200px;"></x-input>
          <x-input type="password" placeholder="请输入密码" style="width: 200px;"></x-input>
          <br><br>
          <x-input type="textarea" placeholder="请输入内容" style="width: 405px;"></x-input>
        </div>
        <div class="demo-tips">
          <p>通过设置 type 来显示不同类型的输入框：text、password、textarea 等，默认值为 text。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputType, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">内容可清空</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input clearable value="hello" style="width: 200px;"></x-input>
        </div>
        <div class="demo-tips">
          <p>开启属性 clearable 可显示清空按钮。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputClear, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">带 icon 的输入框</h4>
    <p class="w-p">带有图标标记的输入类型。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input prefix-icon="ans-icon-search" style="width: 200px;"></x-input>
          <x-input suffix-icon="ans-icon-calendar" style="width: 200px;"></x-input>
        </div>
        <div class="demo-tips">
          <p>通过 prefix-icon 和 suffix-icon 属性可以设置前缀图标和后缀图标。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputIcon, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">文本域</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input type="textarea" style="width: 405px;"></x-input>
          <x-input type="textarea" resize="none" value="固定高度" style="width: 405px;"></x-input>
          <x-input type="textarea" resize="none" :autosize="{minRows:2,maxRows:4}" value="自适应高度" style="width: 405px;"></x-input>
        </div>
        <div class="demo-tips">
          <p>设置属性 autosize，文本域会自动适应高度的变化。</p>
          <p>autosize 也可以设定为一个对象，指定最小行数和最大行数。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(textarea, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">前后插槽</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="input-demo">
          <x-input value="前置图标插槽" style="width: 200px;">
            <i slot="prefix" class="ans-icon-search"></i>
          </x-input>
          <x-input value="后置图标插槽" style="width: 200px;">
            <i slot="suffix" class="ans-icon-search"></i>
          </x-input>
          <br><br>
          <x-input value="前置内容插槽" style="width: 404px;">
            <span slot="prepend">Http://</span>
          </x-input>
          <br>
          <x-input value="后置内容插槽" style="width: 404px;">
            <span slot="append">忘记密码？</span>
          </x-input>
        </div>
        <div class="demo-tips">
          <p>prefix / suffix 插槽内容显示在 Input 组件内。</p>
          <p>prepend / append 插槽内容显示在 Input 组件外。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(inputSlot, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Input props</p>
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
            <td>类型</td>
            <td>String</td>
            <td>text、password、textarea 等原生 type 值</td>
            <td>text</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸，type=textarea 时无效</td>
            <td>String</td>
            <td>large / default / small</td>
            <td>default</td>
          </tr>
          <tr>
            <td>value</td>
            <td>绑定值</td>
            <td>String / Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否可清空</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>suffix-icon</td>
            <td>前置图标</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>prefix-icon</td>
            <td>后置图标</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label</td>
            <td>aria-label 属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>no-border</td>
            <td>是否无边框</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>name</td>
            <td>原生属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>原生属性</td>
            <td>String</td>
            <td>—</td>
            <td>请输入...</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>原生属性</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>原生属性</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>autofocus</td>
            <td>原生属性</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>autocomplete</td>
            <td>原生属性</td>
            <td>String</td>
            <td>—</td>
            <td>off</td>
          </tr>
          <tr>
            <td>maxlength</td>
            <td>原生属性</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>minlength</td>
            <td>原生属性</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>tabindex</td>
            <td>原生属性</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>resize</td>
            <td>textarea 是否可以拉伸</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>autosize</td>
            <td>textarea 自适应，如 { minRows: 2, maxRows: 6 }</td>
            <td>Boolean / Object</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>textarea 原生属性</td>
            <td>Number</td>
            <td>—</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Input slots</p>
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
            <td>prefix</td>
            <td>前置图标插槽，插槽显示在输入框内</td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>后置图标插槽，插槽显示在输入框内</td>
          </tr>
          <tr>
            <td>prepend</td>
            <td>前置内容插槽</td>
          </tr>
          <tr>
            <td>append</td>
            <td>后置内容插槽</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Input events</p>
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
            <td>on-enterkey</td>
            <td>输入回车时触发</td>
            <td>event: Event</td>
          </tr>
          <tr>
            <td>on-click</td>
            <td>点击时触发</td>
            <td>event: Event</td>
          </tr>
          <tr>
            <td>on-blur</td>
            <td>失去焦点时触发</td>
            <td>event: Event</td>
          </tr>
          <tr>
            <td>on-focus</td>
            <td>获得焦点时触发</td>
            <td>event: Event</td>
          </tr>
          <tr>
            <td>on-change</td>
            <td>失去焦点并且输入值改变时触发</td>
            <td>value: String</td>
          </tr>
          <tr>
            <td>on-clear</td>
            <td>点击清空图标时触发</td>
            <td>—</td>
          </tr>
          <tr>
            <td>on-click-icon</td>
            <td>点击前置/后置图标时触发</td>
            <td>event: Event</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Input methods</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>focus</td>
            <td>使 Input 组件获得焦点</td>
            <td>—</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>使 Input 组件失去焦点</td>
            <td>—</td>
          </tr>
          <tr>
            <td>clear</td>
            <td>清空文本并且获得焦点</td>
            <td>—</td>
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
      value: '',
      inputBasic: `<x-input v-model="value" style="width: 300px;"></x-input>`,
      inputNoBorder: `<x-input value="无边框的输入框" no-border style="width: 300px;"></x-input>`,
      inputSize: `<x-input size="large" placeholder="large size" style="width: 200px;"></x-input>
<x-input placeholder="default size" style="width: 200px;"></x-input>
<x-input size="small" placeholder="small size" style="width: 200px;"></x-input>`,
      inputClear: `<x-input clearable value="hello" style="width: 200px;"></x-input>`,
      inputOrigin: `<x-input readonly name="readonly" value="readonly" style="width: 200px;"></x-input>
<x-input disabled value="disabled" style="width: 200px;"></x-input>
<x-input autofocus placeholder="autofocus" style="width: 200px;"></x-input>
<br><br>
<x-input autocomplete="on" value="autocomplete" style="width: 200px;"></x-input>
<x-input maxlength="15" value="maxlength=15" style="width: 200px;"></x-input>
<x-input tabindex="1" style="width: 200px;"></x-input>`,
      inputIcon: `<x-input prefix-icon="ans-icon-search" style="width: 200px;"></x-input>
<x-input suffix-icon="ans-icon-calendar" style="width: 200px;"></x-input>`,
      inputType: `<x-input placeholder="请输入内容" style="width: 200px;"></x-input>
<x-input type="password" placeholder="请输入密码" style="width: 200px;"></x-input>
<br><br>
<x-input type="textarea" placeholder="请输入内容" style="width: 405px;"></x-input>`,
      textarea: `<x-input type="textarea" style="width: 405px;"></x-input>
<x-input type="textarea" resize="none" value="固定高度" style="width: 405px;"></x-input>
<x-input
  type="textarea"
  resize="none"
  :autosize="{minRows:2,maxRows:4}"
  value="自适应高度"
  style="width: 405px;">
</x-input>`,
      inputSlot: `<x-input value="前置图标插槽" style="width: 200px;">
  <i slot="prefix" class="ans-icon-search"></i>
</x-input>
<x-input value="后置图标插槽" style="width: 200px;">
  <i slot="suffix" class="ans-icon-search"></i>
</x-input>
<br><br>
<x-input value="前置内容插槽" style="width: 404px;">
  <span slot="prepend">Http://</span>
</x-input>
<br>
<x-input value="后置内容插槽" style="width: 404px;">
  <span slot="append">忘记密码？</span>
</x-input>`
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
