<template>
  <div class="w-body">
    <h3 class="w-h3">Button 按钮</h3>
    <p class="w-p">常用的操作按钮。</p>

    <h4 class="w-h4">按钮类型</h4>
    <p class="w-p">基础的按钮用法。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="button-demo">
          <x-button>Default</x-button>
          <x-button type="ghost">Ghost</x-button>
          <x-button type="dashed">Dashed</x-button>
          <x-button type="text">Text</x-button>
          <br><br>
          <x-button type="info">Info</x-button>
          <x-button type="success">Success</x-button>
          <x-button type="warning">Warning</x-button>
          <x-button type="error">Error</x-button>
        </div>
        <div class="demo-tips">
          <p>按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
          <p>通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(buttonType, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">图标按钮及按钮形状</h4>
    <p class="w-p">主要设置按钮形状。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="button-demo">
          <x-button type="primary" shape="circle" icon="ans-icon-warn-empty" size="small"></x-button>
          <x-button type="primary" icon="ans-icon-search">Plugin</x-button>
          <x-button type="primary" shape="circle" icon="ans-icon-search">Plugin</x-button>
          <x-button type="primary" shape="circle">Circle</x-button>
          <br><br>
          <x-button type="ghost" shape="circle" icon="ans-icon-warn-empty"></x-button>
          <x-button type="ghost" icon="ans-icon-search">Plugin</x-button>
          <x-button type="ghost" shape="circle" icon="ans-icon-search">Plugin</x-button>
          <x-button type="ghost" shape="circle">Circle</x-button>
        </div>
        <div class="demo-tips">
          <p>通过设置 icon 属性在 Button 内嵌入一个图标。</p>
          <p>使用 Button 的 icon 属性，图标位置将在最左边。</p>
          <p>通过设置 shape 属性为 circle，可将按钮设置为圆角按钮。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(buttonShape, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">按钮尺寸</h4>
    <p class="w-p">设置按钮大小。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="button-demo">
          <x-button type="primary" size="large">Large</x-button>
          <x-button type="primary">Default</x-button>
          <x-button type="primary" size="small">Small</x-button>
          <x-button type="primary" size="xsmall">Xsmall</x-button>
          <br><br>
          <x-button type="primary" shape="circle" size="large">Large</x-button>
          <x-button type="primary" shape="circle">Default</x-button>
          <x-button type="primary" shape="circle" size="small">Small</x-button>
          <x-button type="primary" shape="circle" size="xsmall">Xsmall</x-button>
        </div>
        <div class="demo-tips">
          <p>按钮有四种尺寸：大、默认（中）、小、迷你。</p>
          <p>通过设置 size 为 large / small / xsmall 将按钮设置为大/小/迷你尺寸，不设置为默认（中）尺寸。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(buttonSize, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">长按钮</h4>
    <p class="w-p">按钮 100% 长度显示。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="button-demo">
          <x-button type="primary" long>Default</x-button>
          <br><br>
          <x-button type="primary" shape="circle" long>Default</x-button>
        </div>
        <div class="demo-tips">
          <p>通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
          <p>也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(buttonLong, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">按钮状态</h4>
    <p class="w-p">禁用状态和加载状态。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="button-demo">
          <x-button type="primary" disabled>Primary (Disabled)</x-button>
          <x-button type="dashed" disabled>Dashed (Disabled)</x-button>
          <x-button type="ghost" shape="circle" disabled>Ghost With Circle (Disabled)</x-button>
          <x-button type="primary" icon="ans-icon-search" :loading="true">Loading...</x-button>
        </div>
        <div class="demo-tips">
          <p>通过添加 disabled 属性可将按钮设置为不可用状态。</p>
          <p>通过添加 loading 属性可以让按钮处于加载中状态。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(buttonState, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">按钮组</h4>
    <p class="w-p">以按钮组合的方式出现，常用于多项类似操作。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="button-demo">
          <p>Basic</p>
          <x-button-group v-model="checkedValue">
            <x-button value="1">Cancel</x-button>
            <x-button value="2">Confirm</x-button>
          </x-button-group>
          <x-button-group size="small">
            <x-button type="ghost">Yesterday</x-button>
            <x-button disabled type="ghost">Today</x-button>
            <x-button type="ghost">Tomorrow</x-button>
          </x-button-group>
          <p>icons & circle</p>
          <x-button-group size="large">
            <x-button type="primary" icon="ans-icon-search"></x-button>
            <x-button type="primary" icon="ans-icon-more"></x-button>
            <x-button type="primary" icon="ans-icon-close"></x-button>
            <x-button type="primary" icon="ans-icon-more"></x-button>
          </x-button-group>
          <x-button-group shape="circle">
            <x-button type="primary" icon="ans-icon-arrow-to-left"></x-button>
            <x-button type="primary" icon="ans-icon-arrow-to-right"></x-button>
          </x-button-group>
          <p>vertical</p>
          <x-button-group :vertical="true">
            <x-button type="ghost">1</x-button>
            <x-button type="ghost">2</x-button>
            <x-button type="ghost">3</x-button>
            <x-button type="ghost">4</x-button>
          </x-button-group>
          <p>size</p>
          <x-button-group size="large">
            <x-button type="ghost">Large</x-button>
            <x-button type="ghost">Large</x-button>
          </x-button-group>
          <x-button-group>
            <x-button type="ghost">Default</x-button>
            <x-button type="ghost">Default</x-button>
          </x-button-group>
          <x-button-group size="small">
            <x-button type="ghost">Small</x-button>
            <x-button type="ghost">Small</x-button>
          </x-button-group>
          <x-button-group size="xsmall">
            <x-button type="ghost">Xsmall</x-button>
            <x-button type="ghost">Xsmall</x-button>
          </x-button-group>
          <br><br>
          <x-button-group size="large" shape="circle">
            <x-button type="ghost">Large</x-button>
            <x-button type="ghost">Large</x-button>
          </x-button-group>
          <x-button-group shape="circle">
            <x-button type="ghost">Default</x-button>
            <x-button type="ghost">Default</x-button>
          </x-button-group>
          <x-button-group size="small" shape="circle">
            <x-button type="ghost">Small</x-button>
            <x-button type="ghost">Small</x-button>
          </x-button-group>
          <x-button-group size="xsmall" shape="circle">
            <x-button type="ghost">Xsmall</x-button>
            <x-button type="ghost">Xsmall</x-button>
          </x-button-group>
        </div>
        <div class="demo-tips">
          <p>将多个 Button 放入 ButtonGroup 内，可实现按钮组合的效果。</p>
          <p>通过设置 ButtonGroup 的属性 size 为 large / small，可将按钮组尺寸设置为大/小尺寸，不设置 size，则为默认（中）尺寸。</p>
          <p>通过设置 ButtonGroup 的属性 shape 为 circle，可将按钮组形状设置为圆角。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(buttonGroup, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Button props</p>
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
            <td>primary / ghost / dashed / text / info / success / warning / error</td>
            <td>primary</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>形状</td>
            <td>String</td>
            <td>circle</td>
            <td>—</td>
          </tr>
          <tr>
            <td>size</td>
            <td>大小</td>
            <td>String</td>
            <td>large / default / small / xsmall</td>
            <td>default</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>是否为加载中状态</td>
            <td>Boolean</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>visible</td>
            <td>在按钮组中，按钮是否显示</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>html-type</td>
            <td>设置 Button 原生的 type 属性</td>
            <td>String</td>
            <td>button / submit / reset</td>
            <td>button</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>按钮的图标类型</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>long</td>
            <td>开启后，长度为 100%</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>value</td>
            <td>按钮的值，可用于双向绑定</td>
            <td>any</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">ButtonGroup props</p>
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
            <td>size</td>
            <td>大小</td>
            <td>String</td>
            <td>large / default / small / xsmall</td>
            <td>—</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>形状</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>vertical</td>
            <td>是否纵向排列按钮组</td>
            <td>Boolean</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>value</td>
            <td>按钮的值，可用于双向绑定</td>
            <td>any</td>
            <td>—</td>
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
      buttonType: `<x-button>Default</x-button>
<x-button type="ghost">Ghost</x-button>
<x-button type="dashed">Dashed</x-button>
<x-button type="text">Text</x-button>
<br><br>
<x-button type="info">Info</x-button>
<x-button type="success">Success</x-button>
<x-button type="warning">Warning</x-button>
<x-button type="error">Error</x-button>`,
      buttonShape: `<x-button type="primary" shape="circle" icon="ans-icon-warn-empty" size="small"></x-button>
<x-button type="primary" icon="ans-icon-search">Plugin</x-button>
<x-button type="primary" shape="circle" icon="ans-icon-search">Plugin</x-button>
<x-button type="primary" shape="circle">Circle</x-button>
<br><br>
<x-button type="ghost" shape="circle" icon="ans-icon-warn-empty"></x-button>
<x-button type="ghost" icon="ans-icon-search">Plugin</x-button>
<x-button type="ghost" shape="circle" icon="ans-icon-search">Plugin</x-button>
<x-button type="ghost" shape="circle">Circle</x-button>`,
      buttonSize: `<x-button type="primary" size="large">Large</x-button>
<x-button type="primary">Default</x-button>
<x-button type="primary" size="small">Small</x-button>
<x-button type="primary" size="xsmall">Xsmall</x-button>
<br><br>
<x-button type="primary" shape="circle" size="large">Large</x-button>
<x-button type="primary" shape="circle">Default</x-button>
<x-button type="primary" shape="circle" size="small">Small</x-button>
<x-button type="primary" shape="circle" size="xsmall">Xsmall</x-button>`,
      buttonLong: `<x-button type="primary" long>Default</x-button>
<br><br>
<x-button type="primary" shape="circle" long>Default</x-button>`,
      buttonState: `<x-button type="primary" disabled>Primary (Disabled)</x-button>
<x-button type="dashed" disabled>Dashed (Disabled)</x-button>
<x-button type="ghost" shape="circle" disabled>Ghost With Circle (Disabled)</x-button>
<x-button type="primary" icon="ans-icon-search" :loading="true">Loading...</x-button>`,
      checkedValue: '2',
      buttonGroup: `<p>Basic</p>
<x-button-group v-model="checkedValue">
  <x-button value="1">Cancel</x-button>
  <x-button value="2">Confirm</x-button>
</x-button-group>
<x-button-group size="small">
  <x-button type="ghost">Yesterday</x-button>
  <x-button disabled type="ghost">Today</x-button>
  <x-button type="ghost">Tomorrow</x-button>
</x-button-group>
<p>icons & circle</p>
<x-button-group size="large">
  <x-button type="primary" icon="ans-icon-search"></x-button>
  <x-button type="primary" icon="ans-icon-more"></x-button>
  <x-button type="primary" icon="ans-icon-close"></x-button>
  <x-button type="primary" icon="ans-icon-more"></x-button>
</x-button-group>
<x-button-group shape="circle">
  <x-button type="primary" icon="ans-icon-arrow-to-left"></x-button>
  <x-button type="primary" icon="ans-icon-arrow-to-right"></x-button>
</x-button-group>
<p>vertical</p>
<x-button-group :vertical="true">
  <x-button type="ghost">1</x-button>
  <x-button type="ghost">2</x-button>
  <x-button type="ghost">3</x-button>
  <x-button type="ghost">4</x-button>
</x-button-group>
<p>size</p>
<x-button-group size="large">
  <x-button type="ghost">Large</x-button>
  <x-button type="ghost">Large</x-button>
</x-button-group>
<x-button-group>
  <x-button type="ghost">Default</x-button>
  <x-button type="ghost">Default</x-button>
</x-button-group>
<x-button-group size="small">
  <x-button type="ghost">Small</x-button>
  <x-button type="ghost">Small</x-button>
</x-button-group>
<x-button-group size="xsmall">
  <x-button type="ghost">Xsmall</x-button>
  <x-button type="ghost">Xsmall</x-button>
</x-button-group>
<br><br>
<x-button-group size="large" shape="circle">
  <x-button type="ghost">Large</x-button>
  <x-button type="ghost">Large</x-button>
</x-button-group>
<x-button-group shape="circle">
  <x-button type="ghost">Default</x-button>
  <x-button type="ghost">Default</x-button>
</x-button-group>
<x-button-group size="small" shape="circle">
  <x-button type="ghost">Small</x-button>
  <x-button type="ghost">Small</x-button>
</x-button-group>
<x-button-group size="xsmall" shape="circle">
  <x-button type="ghost">Xsmall</x-button>
  <x-button type="ghost">Xsmall</x-button>
</x-button-group>`
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
