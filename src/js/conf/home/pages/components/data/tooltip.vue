<template>
  <div class="w-body">
    <h3 class="w-h3">Tooltip 文字提示</h3>
    <p class="w-p">简单的文字提示工具，用于代替浏览器的 title 提示。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="tooltip-demo">
          <span v-tooltip="text">鼠标移入显示</span>
        </div>
        <div class="demo-tips">
          <p>使用指令的方式调用，可以绑定一个字符串变量。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tooltipBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">显示位置</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="tooltip-demo tooltip-con">
          <div class="p-top">
            <x-button type="ghost" v-tooltip.large.top.start="'top-start <br>提示文字'">上左</x-button>
            <x-button type="ghost" v-tooltip.large.top="'top <br>提示文字'">上边</x-button>
            <x-button type="ghost" v-tooltip.large.top.end="'top-end <br>提示文字'">上右</x-button>
          </div>
          <div class="p-left">
            <x-button type="ghost" v-tooltip.large.left.start="'left-start <br>提示文字'">左上</x-button>
            <br><br>
            <x-button type="ghost" v-tooltip.large.left="'left <br>提示文字'">左边</x-button>
            <br><br>
            <x-button type="ghost" v-tooltip.large.left.end="'left-end <br>提示文字'">左下</x-button>
          </div>
          <div class="p-right">
            <x-button type="ghost" v-tooltip.large.right.start="'right-start <br>提示文字'">右上</x-button>
            <br><br>
            <x-button type="ghost" v-tooltip.large.right="'right <br>提示文字'">右边</x-button>
            <br><br>
            <x-button type="ghost" v-tooltip.large.right.end="'right-end <br>提示文字'">右下</x-button>
          </div>
          <div class="p-bottom">
            <x-button type="ghost" v-tooltip.large.bottom.start="'bottom-start <br>提示文字'">下左</x-button>
            <x-button type="ghost" v-tooltip.large.bottom="'bottom <br>提示文字'">下边</x-button>
            <x-button type="ghost" v-tooltip.large.bottom.end="'bottom-end <br>提示文字'">下右</x-button>
          </div>
        </div>
        <div class="demo-tips">
          <p>提供十二种不同的提示方向，可以通过指令修饰符来确定不同的提示方向，具体配置可查看 API。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tooltipDirection, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">指定主题</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="tooltip-demo">
          <x-button v-tooltip.right.start.light="'支持<i>标签</i>'">浅色主题</x-button>
        </div>
        <div class="demo-tips">
          <p>通过 light 修饰符指定浅色主题，默认为深色主题。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tooltipTheme, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">指定触发事件</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="tooltip-demo">
          <x-button v-tooltip.right.light.click="'通过 click 事件触发的提示'">click触发</x-button>
        </div>
        <div class="demo-tips">
          <p>通过 click 修饰符指定通过点击事件触发提示，默认为 mouseenter 事件。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tooltipTrigger, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">绑定详细配置</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="tooltip-demo">
          <x-button v-tooltip="options">click触发</x-button>
        </div>
        <div class="demo-tips">
          <p>通过绑定配置对象可以指定更多选项，具体配置可查看 API。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tooltipOptions, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Tooltip 指令修饰符</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>修饰符</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击触发提示</td>
          </tr>
          <tr>
            <td>top / bottom / left / right</td>
            <td>提示优先方向，分别对应上/下/左/右</td>
          </tr>
          <tr>
            <td>start / end</td>
            <td>提示位置，可与方向组合使用</td>
          </tr>
          <tr>
            <td>light / dark</td>
            <td>主题，默认为 dark</td>
          </tr>
          <tr>
            <td>fixed</td>
            <td>提示是否 fixed 定位</td>
          </tr>
          <tr>
            <td>viewport</td>
            <td>提示是否基于 viewport 定位</td>
          </tr>
          <tr>
            <td>large</td>
            <td>是否启用大号提示</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Tooltip 详细配置</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text</td>
            <td>提示文本，支持标签</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>提示优先出现方位</td>
            <td>String</td>
            <td>详见上述示例</td>
            <td>top</td>
          </tr>
          <tr>
            <td>triggerEvent</td>
            <td>触发提示事件</td>
            <td>String</td>
            <td>click / mouseenter</td>
            <td>mouseenter</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>主题</td>
            <td>String</td>
            <td>light / dark</td>
            <td>dark</td>
          </tr>
          <tr>
            <td>maxWidth</td>
            <td>提示内容最大宽度，超过该宽度换行</td>
            <td>String</td>
            <td>—</td>
            <td>200px</td>
          </tr>
          <tr>
            <td>positionFixed</td>
            <td>同 fixed 修饰符</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>viewport</td>
            <td>同 viewport 修饰符</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>large</td>
            <td>同 large 修饰符</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Tooltip 方法</p>
    <p class="w-p">tooltip 对应的 dom 节点可以调用 destroy 方法销毁组件，hide 方法隐藏提示</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '文字提示',
      options: {
        text: '详细配置提示，可以通过设置 maxWidth 来控制换行',
        maxWidth: '200px',
        placement: 'right-bottom',
        theme: 'light',
        triggerEvent: 'click',
        large: true
      },
      tooltipBasic: `<span v-tooltip="text">鼠标移入显示</span>`,
      tooltipDirection: `<div class="p-top">
  <x-button type="ghost" v-tooltip.large.top.start="'top-start <br>提示文字'">上左</x-button>
  <x-button type="ghost" v-tooltip.large.top="'top <br>提示文字'">上边</x-button>
  <x-button type="ghost" v-tooltip.large.top.end="'top-end <br>提示文字'">上右</x-button>
</div>
<div class="p-left">
  <x-button type="ghost" v-tooltip.large.left.start="'left-start <br>提示文字'">左上</x-button>
  <br><br>
  <x-button type="ghost" v-tooltip.large.left="'left <br>提示文字'">左边</x-button>
  <br><br>
  <x-button type="ghost" v-tooltip.large.left.end="'left-end <br>提示文字'">左下</x-button>
</div>
<div class="p-right">
  <x-button type="ghost" v-tooltip.large.right.start="'right-start <br>提示文字'">右上</x-button>
  <br><br>
  <x-button type="ghost" v-tooltip.large.right="'right <br>提示文字'">右边</x-button>
  <br><br>
  <x-button type="ghost" v-tooltip.large.right.end="'right-end <br>提示文字'">右下</x-button>
</div>
<div class="p-bottom">
  <x-button type="ghost" v-tooltip.large.bottom.start="'bottom-start <br>提示文字'">下左</x-button>
  <x-button type="ghost" v-tooltip.large.bottom="'bottom <br>提示文字'">下边</x-button>
  <x-button type="ghost" v-tooltip.large.bottom.end="'bottom-end <br>提示文字'">下右</x-button>
</div>`,
      tooltipTheme: `<x-button v-tooltip.right.start.light="'支持<i>标签</i>'">浅色主题</x-button>`,
      tooltipTrigger: `<x-button v-tooltip.right.light.click="'通过 click 事件触发的提示'">click触发</x-button>`,
      tooltipOptions: `<template>
  <x-button v-tooltip="options">click触发</x-button>
</template>

<script>
  data () {
    return {
      options: {
        text: '详细配置提示，可以通过设置 maxWidth 来控制换行',
        maxWidth: '200px',
        placement: 'right-bottom',
        theme: 'light',
        triggerEvent: 'click',
        large: true
      }
    }
  }
<\/script>`
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

<style lang="scss" scoped>
.tooltip-con {
  position: relative;
  width: 400px;
  height: 230px;
  .p-top {
    position: absolute;
    left: 85px;
    top: 0;
  }
  .p-left {
    position: absolute;
    left: 0;
    top: 45px;
  }
  .p-right {
    position: absolute;
    right: 30px;
    top: 45px;
  }
  .p-bottom {
    position: absolute;
    left: 85px;
    bottom: 0;
  }
}
</style>
