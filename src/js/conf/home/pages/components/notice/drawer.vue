<template>
  <div class="w-body">
    <h3 class="w-h3">Drawer 抽屉</h3>
    <p class="w-p">抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。</p>

    <h4 class="w-h4">基本用法</h4>
    <p class="w-p">基于 modal 开发。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="drawer-demo">
          <x-button type="ghost" @click="left">左边</x-button>
          <x-button type="ghost" @click="right">右边</x-button>
          <x-button type="ghost" @click="top">上边</x-button>
          <x-button type="ghost" @click="bottom">下边</x-button>
        </div>
        <div class="demo-tips">
          <p>设置 direction 属性控制显示位置。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(drawerBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Drawer options</p>
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
            <td>direction</td>
            <td>出现位置</td>
            <td>String</td>
            <td>left / right / top / bottom</td>
            <td>right</td>
          </tr>
          <tr>
            <td>className</td>
            <td>自定义样式名称</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否显示关闭</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>escClose</td>
            <td>是否按 esc 键关闭</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>transitionName</td>
            <td>动画类名</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>showMask</td>
            <td>是否显示遮罩</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>maskClosable</td>
            <td>点击遮罩是否关闭</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>i18n</td>
            <td>国际化对象</td>
            <td>VueI18n</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import drawerTest from './source/drawerTest'

export default {
  data () {
    return {
      drawerBasic: `<!-- drawerTest -->
<template>
  <div class="drawer-test">
    <h4>抽屉示例</h4>
    <p>一些其他内容</p>
    <p>一些其他内容</p>
    <p>一些其他内容</p>
  </div>
</template>

<script>
export default {

}
<\/script>

<style lang="scss" scoped>
.drawer-test{
  width: 200px;
  padding-left: 20px;
  h4 {
    font-size: 14px;
    color: #333;
  }
  p {
    font-size: 12px;
    color: #666;
  }
}
</style>


<!-- 使用方法 -->
<template>
  <x-button type="ghost" @click="left">左边</x-button>
  <x-button type="ghost" @click="right">右边</x-button>
  <x-button type="ghost" @click="top">上边</x-button>
  <x-button type="ghost" @click="bottom">下边</x-button>
</template>

<script>
import drawerTest from './source/drawerTest'

export default {
  methods: {
    left () {
      this.$drawer({
        direction: 'left',
        render (h) {
          return h(drawerTest)
        }
      })
    },
    right () {
      this.$drawer({
        render (h) {
          return h(drawerTest)
        }
      })
    },
    top () {
      this.$drawer({
        direction: 'top',
        render (h) {
          return h(drawerTest)
        }
      })
    },
    bottom () {
      this.$drawer({
        direction: 'bottom',
        render (h) {
          return h(drawerTest)
        }
      })
    }
  }
}
<\/script>
`
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
    },
    left () {
      this.$drawer({
        direction: 'left',
        render (h) {
          return h(drawerTest)
        }
      })
    },
    right () {
      this.$drawer({
        render (h) {
          return h(drawerTest)
        }
      })
    },
    top () {
      this.$drawer({
        direction: 'top',
        render (h) {
          return h(drawerTest)
        }
      })
    },
    bottom () {
      this.$drawer({
        direction: 'bottom',
        render (h) {
          return h(drawerTest)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
