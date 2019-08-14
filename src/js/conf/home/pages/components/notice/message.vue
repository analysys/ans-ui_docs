<template>
  <div class="w-body">
    <h3 class="w-h3">Message 全局提示</h3>
    <p class="w-p">常用于主动操作后的反馈提示。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="message-demo">
          <x-button type="primary" @click="info">消息</x-button>
          <x-button type="success" @click="success">成功</x-button>
          <x-button type="warning" @click="warning">警告</x-button>
          <x-button type="error" @click="error">错误</x-button>
          <x-button type="ghost" @click="loading">Loading</x-button>
        </div>
        <div class="demo-tips">
          <p>用来显示「普通、成功、警告、错误、加载」类的操作反馈。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(messageBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">可关闭</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="message-demo">
          <x-button type="ghost" @click="closable">Loading</x-button>
        </div>
        <div class="demo-tips">
          <p>设置 closable 显示关闭按钮。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(messageClose, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Message options</p>
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
            <td>content</td>
            <td>内容</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
            <td>Number</td>
            <td>—</td>
            <td>1.5</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>关闭时的回调</td>
            <td>Function</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否显示关闭图标</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
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
    <p class="w-p">Message 全局相关：</p>
    <p class="w-p">this.$message.destroy() 全局销毁所有实例</p>
    <p class="w-p">this.$message.config(options) 全局配置</p>
    <p class="w-p">Vue.use(ans, { message: options }) 安装组件库时配置</p>
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
            <td>top</td>
            <td>提示组件距离顶端的距离，单位像素</td>
            <td>Number</td>
            <td>—</td>
            <td>60</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>默认自动关闭的延时，单位秒</td>
            <td>Number</td>
            <td>—</td>
            <td>1.5</td>
          </tr>
          <tr>
            <td>transitionName</td>
            <td>默认动画类名</td>
            <td>String</td>
            <td>—</td>
            <td>x-ani-move-in</td>
          </tr>
          <tr>
            <td>fixed</td>
            <td>显示是否固定位置</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
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
      messageBasic: `<template>
  <x-button type="primary" @click="info">消息</x-button>
  <x-button type="success" @click="success">成功</x-button>
  <x-button type="warning" @click="warning">警告</x-button>
  <x-button type="error" @click="error">错误</x-button>
  <x-button type="ghost" @click="loading">Loading</x-button>
</template>

<script>
export default {
  methods: {
    info () {
      this.$message.info({
        content: '这是一条普通提示',
        duration: 2,
        closable: false
      })
    },
    success () {
      this.$message.success({
        content: '这是一条成功提示',
        duration: 2,
        closable: false
      })
    },
    warning () {
      this.$message.warning({
        content: '这是一条警告提示',
        duration: 2,
        closable: false
      })
    },
    error () {
      this.$message.error({
        content: '对方不想和你说话，并向你抛了一个异常',
        duration: 2,
        closable: false
      })
    },
    loading () {
      this.$message.loading({
        content: '这是一条加载提示',
        duration: 2,
        closable: false
      })
    }
  }
}
<\/script>`,
      messageClose: `<template>
  <x-button type="ghost" @click="closable">Loading</x-button>
</template>

<script>
export default {
  methods: {
    closable () {
      this.$message.loading({
        content: '这是一条加载提示',
        duration: 2,
        onClose () {
          // 关闭时的回调
        },
        closable: true
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
    info () {
      this.$message.info({
        content: '这是一条普通提示',
        duration: 2,
        closable: false
      })
    },
    success () {
      this.$message.success({
        content: '这是一条成功提示',
        duration: 2,
        closable: false
      })
    },
    warning () {
      this.$message.warning({
        content: '这是一条警告提示',
        duration: 2,
        closable: false
      })
    },
    error () {
      this.$message.error({
        content: '对方不想和你说话，并向你抛了一个异常',
        duration: 2,
        closable: false
      })
    },
    loading () {
      this.$message.loading({
        content: '这是一条加载提示',
        duration: 2,
        closable: false
      })
    },
    closable () {
      this.$message.loading({
        content: '这是一条加载提示',
        duration: 2,
        onClose () {
          // 关闭时的回调
        },
        closable: true
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
