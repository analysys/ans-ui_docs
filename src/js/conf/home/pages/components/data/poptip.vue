<template>
  <div class="w-body">
    <h3 class="w-h3">Poptip 气泡提示</h3>
    <p class="w-p">以卡片的形式承载了更多的内容，比如链接、表格、按钮等。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="poptip-demo">
          <x-poptip
            title="提示标题"
            width="200"
            trigger="hover"
            content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
            <x-button type="ghost" slot="reference">hover激活</x-button>
          </x-poptip>
          <x-poptip
            title="标题"
            width="200"
            trigger="click"
            content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
            <x-button type="ghost" slot="reference">click激活</x-button>
          </x-poptip>
          <x-poptip
            title="标题"
            width="200"
            trigger="focus"
            content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
            <x-button type="ghost" slot="reference">focus激活</x-button>
          </x-poptip>
          <x-poptip
            v-model="manualShow"
            title="标题"
            width="200"
            trigger="manual"
            content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
            <x-button type="ghost" @click="manualShow = !manualShow" slot="reference">手动激活</x-button>
          </x-poptip>
        </div>
        <div class="demo-tips">
          <p>支持四种触发方式：hover、click、focus、manual，默认是 click。</p>
          <p>通过 v-model 来控制提示框的显示和隐藏。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(poptipBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">显示位置</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="poptip-demo poptip-con">
          <div class="p-top">
            <x-poptip
              placement="top-start"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">上左</x-button>
            </x-poptip>
            <x-poptip
              placement="top"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">上边</x-button>
            </x-poptip>
            <x-poptip
              placement="top-end"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">上右</x-button>
            </x-poptip>
          </div>
          <div class="p-left">
            <x-poptip
              placement="left-start"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">左上</x-button>
            </x-poptip>
            <br><br>
            <x-poptip
              placement="left"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">左边</x-button>
            </x-poptip>
            <br><br>
            <x-poptip
              placement="left-end"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">左下</x-button>
            </x-poptip>
          </div>
          <div class="p-right">
            <x-poptip
              placement="right-start"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">右上</x-button>
            </x-poptip>
            <br><br>
            <x-poptip
              placement="right"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">右边</x-button>
            </x-poptip>
            <br><br>
            <x-poptip
              placement="right-end"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">右下</x-button>
            </x-poptip>
          </div>
          <div class="p-bottom">
            <x-poptip
              placement="bottom-start"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">下左</x-button>
            </x-poptip>
            <x-poptip
              placement="bottom"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">下边</x-button>
            </x-poptip>
            <x-poptip
              placement="bottom-end"
              title="提示标题"
              width="200"
              trigger="hover"
              content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
              <x-button type="ghost" slot="reference">下右</x-button>
            </x-poptip>
          </div>
        </div>
        <div class="demo-tips">
          <p>组件提供了12个不同的方向显示 Poptip。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(poptipPlacement, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">嵌套内容</h4>
    <p class="w-p">嵌套内容，适合于更为轻量的 modal 替代方案。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="poptip-demo">
          <x-poptip
            placement="bottom-start"
            width="200"
            v-model="removeShow">
            <p>您确认删除这条内容吗？</p>
            <div style="text-align: right; margin: 0;">
              <x-button type="text" size="small" @click="removeShow = false">取消</x-button>
              <x-button type="primary" size="small" @click="removeShow = false">确定</x-button>
            </div>
            <x-button type="error" slot="reference">删除</x-button>
          </x-poptip>
        </div>
        <div class="demo-tips">
          <p>通过自定义 slot 来实现复杂的内容。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(poptipSlot, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">指令操作</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="poptip-demo">
          <x-poptip
            ref="poptip"
            title="提示标题"
            width="200"
            trigger="hover"
            content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
          </x-poptip>
          <x-button type="ghost" v-poptip:poptip>指令</x-button>
        </div>
        <div class="demo-tips">
          <p>在触发元素上绑定 v-poptip 指令来触发 Poptip。</p>
          <p>Poptip 需要添加 ref 参数来绑定指令。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(poptipCode, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">Confirm 模式</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="poptip-demo">
          <x-poptip
            confirm
            title="提示标题"
            trigger="click"
            @on-ok="ok"
            @on-cancel="cancel">
            <x-button type="ghost" slot="reference">confirm</x-button>
          </x-poptip>
        </div>
        <div class="demo-tips">
          <p>设置 confirm 属性开启 confirm 模式。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(poptipConfirm, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Poptip props</p>
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
            <td>trigger</td>
            <td>触发方式</td>
            <td>String</td>
            <td>hover / click / focus / manual</td>
            <td>click</td>
          </tr>
          <tr>
            <td>placement</td>
            <td>出现位置</td>
            <td>String</td>
            <td>详见上述示例</td>
            <td>top</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标题</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>content</td>
            <td>显示的内容，只在非 confirm 模式下有效</td>
            <td>String</td>
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
            <td>width</td>
            <td>宽度</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>visible-arrow</td>
            <td>是否显示箭头</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>confirm</td>
            <td>是否开启对话框模式</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>ok-text</td>
            <td>确定按钮的文字</td>
            <td>String</td>
            <td>—</td>
            <td>确定</td>
          </tr>
          <tr>
            <td>cancel-text</td>
            <td>取消按钮的文字</td>
            <td>String</td>
            <td>—</td>
            <td>取消</td>
          </tr>
          <tr>
            <td>distance</td>
            <td>弹出层与触发元素的距离</td>
            <td>Number</td>
            <td>—</td>
            <td>5</td>
          </tr>
          <tr>
            <td>popper-class</td>
            <td>弹出层自定义样式</td>
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
    <p class="w-p">Poptip slots</p>
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
            <td>default</td>
            <td>内嵌 HTML 文本</td>
          </tr>
          <tr>
            <td>reference</td>
            <td>触发元素</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Poptip events</p>
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
            <td>on-ok</td>
            <td>点击确定的回调</td>
            <td>—</td>
          </tr>
          <tr>
            <td>on-cancel</td>
            <td>点击取消的回调</td>
            <td>—</td>
          </tr>
          <tr>
            <td>on-show</td>
            <td>弹出层显示的回调</td>
            <td>—</td>
          </tr>
          <tr>
            <td>on-hide</td>
            <td>弹出层隐藏的回调</td>
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
      manualShow: false,
      removeShow: false,
      poptipBasic: `<x-poptip
  title="提示标题"
  width="200"
  trigger="hover"
  content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
  <x-button type="ghost" slot="reference">hover激活</x-button>
</x-poptip>
<x-poptip
  title="标题"
  width="200"
  trigger="click"
  content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
  <x-button type="ghost" slot="reference">click激活</x-button>
</x-poptip>
<x-poptip
  title="标题"
  width="200"
  trigger="focus"
  content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
  <x-button type="ghost" slot="reference">focus激活</x-button>
</x-poptip>
<x-poptip
  v-model="manualShow"
  title="标题"
  width="200"
  trigger="manual"
  content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
  <x-button type="ghost" @click="manualShow = !manualShow" slot="reference">手动激活</x-button>
</x-poptip>`,
      poptipPlacement: `<div class="p-top">
  <x-poptip
    placement="top-start"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">上左</x-button>
  </x-poptip>
  <x-poptip
    placement="top"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">上边</x-button>
  </x-poptip>
  <x-poptip
    placement="top-end"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">上右</x-button>
  </x-poptip>
  </div>
  <div class="p-left">
  <x-poptip
    placement="left-start"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">左上</x-button>
  </x-poptip>
  <br><br>
  <x-poptip
    placement="left"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">左边</x-button>
  </x-poptip>
  <br><br>
  <x-poptip
    placement="left-end"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">左下</x-button>
  </x-poptip>
  </div>
  <div class="p-right">
  <x-poptip
    placement="right-start"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">右上</x-button>
  </x-poptip>
  <br><br>
  <x-poptip
    placement="right"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">右边</x-button>
  </x-poptip>
  <br><br>
  <x-poptip
    placement="right-end"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">右下</x-button>
  </x-poptip>
  </div>
  <div class="p-bottom">
  <x-poptip
    placement="bottom-start"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">下左</x-button>
  </x-poptip>
  <x-poptip
    placement="bottom"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">下边</x-button>
  </x-poptip>
  <x-poptip
    placement="bottom-end"
    title="提示标题"
    width="200"
    trigger="hover"
    content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
    <x-button type="ghost" slot="reference">下右</x-button>
  </x-poptip>
</div>`,
      poptipSlot: `<x-poptip
  placement="bottom-start"
  width="200"
  v-model="removeShow">
  <p>您确认删除这条内容吗？</p>
  <div style="text-align: right; margin: 0;">
    <x-button type="text" size="small" @click="removeShow = false">取消</x-button>
    <x-button type="primary" size="small" @click="removeShow = false">确定</x-button>
  </div>
  <x-button type="error" slot="reference">删除</x-button>
</x-poptip>`,
      poptipCode: `<x-poptip
  ref="poptip"
  title="提示标题"
  width="200"
  trigger="hover"
  content="Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等">
</x-poptip>
<x-button type="ghost" v-poptip:poptip>指令</x-button>`,
      poptipConfirm: `<x-poptip
  confirm
  title="提示标题"
  trigger="click"
  @on-ok="ok"
  @on-cancel="cancel">
  <x-button type="ghost" slot="reference">confirm</x-button>
</x-poptip>`
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
.poptip-con {
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
