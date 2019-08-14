<template>
  <div class="w-body">
    <h3 class="w-h3">Progress 进度条</h3>
    <p class="w-p">用于展示操作进度，告知用户当前状态和预期。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="progress-demo">
          <x-progress :percentage="0"></x-progress>
          <x-progress :percentage="30"></x-progress>
        </div>
        <div class="demo-tips">
          <p>默认类型线形进度条，进度提示显示在右侧。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(progressBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">颜色和状态</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="progress-demo">
          <x-progress :percentage="40" color="#8a31d2"></x-progress>
          <x-progress :percentage="20" status="success"></x-progress>
          <x-progress :percentage="50" status="exception"></x-progress>
          <x-progress :percentage="20" color="#8a31d2" status="success"></x-progress>
          <x-progress :percentage="50" color="#8a31d2" status="exception"></x-progress>
        </div>
        <div class="demo-tips">
          <p>通过 color 控制进度条颜色，status 控制当前状态，color 会覆盖 status 的进度条颜色。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(progressColor, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">内显文本</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="progress-demo">
          <x-progress :percentage="60" :stroke-width="20" show-inline-text></x-progress>
          <x-progress :percentage="20" :stroke-width="20" status="success" show-inline-text></x-progress>
          <x-progress :percentage="50" :stroke-width="20" status="exception" show-inline-text></x-progress>
        </div>
        <div class="demo-tips">
          <p>通过 show-inline-text 控制是否显示进度条上的提示，stroke-width 控制进度条高度。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(progressText, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">环形进度条</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="progress-demo flex">
          <x-progress :percentage="0" type="circle"></x-progress>
          <x-progress :percentage="30" type="circle"></x-progress>
          <x-progress :percentage="40" type="circle" color="#8a31d2"></x-progress>
          <x-progress :percentage="20" type="circle" status="success"></x-progress>
          <x-progress :percentage="50" type="circle" status="exception"></x-progress>
        </div>
        <div class="demo-tips">
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(progressCircle, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">插槽</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="progress-demo">
          <x-progress :percentage="70" stroke-width="25">
            <div class="inline" slot="inline">这里是 inline 插槽</div>
          </x-progress>
          <x-progress :percentage="40">
            <div class="outside" slot="outside">这里是 outside 插槽</div>
          </x-progress>
          <x-progress :percentage="50" type="circle">
            <div class="circle" slot="circle">这里是 circle 插槽</div>
          </x-progress>
        </div>
        <div class="demo-tips">
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(progressSlot, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Progress props</p>
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
            <td>percentage</td>
            <td>百分比，必选项</td>
            <td>Number</td>
            <td>0-100</td>
            <td>0</td>
          </tr>
          <tr>
            <td>type</td>
            <td>进度条类型</td>
            <td>String</td>
            <td>line / circle</td>
            <td>line</td>
          </tr>
          <tr>
            <td>stroke-width</td>
            <td>进度条的宽度，单位 px</td>
            <td>Number</td>
            <td>—</td>
            <td>8</td>
          </tr>
          <tr>
            <td>status</td>
            <td>进度条当前状态</td>
            <td>String</td>
            <td>success / exception</td>
            <td>—</td>
          </tr>
          <tr>
            <td>color</td>
            <td>进度条背景色（会覆盖 status 状态颜色）</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>width</td>
            <td>环形进度条宽度（只在 type=circle 时有效）</td>
            <td>Number</td>
            <td>—</td>
            <td>100</td>
          </tr>
          <tr>
            <td>show-inline-text</td>
            <td>是否显示进度条上（type=line 时）文字内容</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>show-outside-text</td>
            <td>是否显示进度条右侧文字内容（只在 type=line 时有效）</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>show-circle-text</td>
            <td>是否显示环形进度条里面（type=circle 时）文字内容</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>

        </tbody>
      </table>
    </div>
    <p class="w-p">Progress slots</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>插槽名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>inline</td>
            <td>type=line 时进度条上内容插槽</td>
          </tr>
          <tr>
            <td>outside</td>
            <td>type=line 时进度条右侧的内容插槽</td>
          </tr>
          <tr>
            <td>circle</td>
            <td>type=circle 时环形进度条里面的内容插槽</td>
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
      current: 3,
      total: 100,
      progressBasic: `<x-progress :percentage="0"></x-progress>
<x-progress :percentage="30"></x-progress>`,
      progressColor: `<x-progress :percentage="40" color="#8a31d2"></x-progress>
<x-progress :percentage="20" status="success"></x-progress>
<x-progress :percentage="50" status="exception"></x-progress>
<x-progress :percentage="20" color="#8a31d2" status="success"></x-progress>
<x-progress :percentage="50" color="#8a31d2" status="exception"></x-progress>`,
      progressText: `<x-progress :percentage="60" :stroke-width="20" show-inline-text></x-progress>
<x-progress :percentage="20" :stroke-width="20" status="success" show-inline-text></x-progress>
<x-progress :percentage="50" :stroke-width="20" status="exception" show-inline-text></x-progress>`,
      progressCircle: `<x-progress :percentage="0" type="circle"></x-progress>
<x-progress :percentage="30" type="circle"></x-progress>
<x-progress :percentage="40" type="circle" color="#8a31d2"></x-progress>
<x-progress :percentage="20" type="circle" status="success"></x-progress>
<x-progress :percentage="50" type="circle" status="exception"></x-progress>`,
      progressSlot: `<x-progress :percentage="70" stroke-width="25">
  <div class="inline" slot="inline">这里是 inline 插槽</div>
</x-progress>
<x-progress :percentage="40">
  <div class="outside" slot="outside">这里是 outside 插槽</div>
</x-progress>
<x-progress :percentage="50" type="circle">
  <div class="circle" slot="circle">这里是 circle 插槽</div>
</x-progress>`
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
.progress-demo {
  & > div {
    width: 500px;
    margin-bottom: 10px;
  }
  &.flex {
    display: flex;
    justify-content: space-between;
  }
  .inline {
    color: #fff;
  }
  .outside {
    padding-left: 15px;
    color: #74dbb9;
  }
  .circle {
    padding: 10px;
    color: rgb(121, 142, 156);
    text-align: center;
  }
}
</style>
