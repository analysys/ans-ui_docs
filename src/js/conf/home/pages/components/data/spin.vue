<template>
  <div class="w-body">
    <h3 class="w-h3">Spin 加载</h3>
    <p class="w-p">加载数据时显示遮罩和提示。</p>

    <h4 class="w-h4">区域加载</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="spin-demo">
          <div class="data-area" v-spin="true">数据区域</div>
        </div>
        <div class="demo-tips">
          <p>使用指令的方式调用。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(spinBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">自定义样式</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="spin-demo">
          <div class="data-area" v-spin="true"
               spin-text="正在加载..."
               spin-background="rgba(224, 238, 237, 0.86)"
               spin-icon-class="spin-demo-circle"
               spin-custom-class="spin-demo-custom">数据区域</div>
        </div>
        <div class="demo-tips">
          <p>通过设置指令绑定元素的属性来自定义样式。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(spinCustom, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">整页加载</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="spin-demo">
          <x-button @click="timer1" v-spin.fullscreen="loading1">开始加载</x-button>
          <x-button @click="timer2" v-spin.fullscreen.lock="loading2">锁定滚动</x-button>
        </div>
        <div class="demo-tips">
          <p>通过指令修饰符控制是否整页加载，是否锁定滚动。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(spinFull, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">通过服务调用</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="spin-demo">
          <x-button @click="startService">启动服务</x-button>
        </div>
        <div class="demo-tips">
          <p>使用服务方式调用时，遮罩默认是全屏。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(spinService, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Spin 指令修饰符</p>
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
            <td>fullscreen</td>
            <td>全屏</td>
          </tr>
          <tr>
            <td>lock</td>
            <td>锁定滚动，隐藏滚动条，仅在 fullscreen 为 true 时可用</td>
          </tr>
          <tr>
            <td>body</td>
            <td>指定 DOM 节点插入 body 中</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Spin 绑定元素属性</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>属性名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>spin-text</td>
            <td>加载图标下方文字</td>
          </tr>
          <tr>
            <td>spin-background</td>
            <td>遮罩背景色</td>
          </tr>
          <tr>
            <td>spin-icon-class</td>
            <td>自定义加载图标类名</td>
          </tr>
          <tr>
            <td>spin-custom-class</td>
            <td>spin 的自定义类名</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Spin 服务配置</p>
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
            <td>target</td>
            <td>spin 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传 document.querySelector 以获取到对应 DOM 节点</td>
            <td>Object / String</td>
            <td>—</td>
            <td>document.body</td>
          </tr>
          <tr>
            <td>body</td>
            <td>同 v-spin 指令中的 body 修饰符</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>fullscreen</td>
            <td>同 v-spin 指令中的 fullscreen 修饰符</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>lock</td>
            <td>同 v-spin 指令中的 lock 修饰符</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>text</td>
            <td>加载图标下方文字，可在安装组件库时配置</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>background</td>
            <td>遮罩背景色，可在安装组件库时配置</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>iconClass</td>
            <td>自定义加载图标类名，可在安装组件库时配置</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>customClass</td>
            <td>spin 的自定义类名，可在安装组件库时配置</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Vue.use(ans, { spin: options }) 安装组件库时配置</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading1: false,
      loading2: false,
      spinBasic: `<div class="data-area" v-spin="true">数据区域</div>`,
      spinCustom: `<div class="data-area" v-spin="true"
     spin-text="正在加载..."
     spin-background="rgba(224, 238, 237, 0.86)"
     spin-icon-class="spin-demo-circle"
     spin-custom-class="spin-demo-custom">数据区域</div>`,
      spinFull: `<template>
  <x-button @click="timer1" v-spin.fullscreen="loading1">开始加载</x-button>
  <x-button @click="timer2" v-spin.fullscreen.lock="loading2">锁定滚动</x-button>
</template>

<script>
export default {
  data () {
    return {
      loading1: false,
      loading2: false
    }
  },
  methods: {
    timer1 () {
      this.loading1 = true
      setTimeout(() => {
        this.loading1 = false
      }, 3000)
    },
    timer2 () {
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
      }, 3000)
    }
  }
}
<\/script>`,
      spinService: `<template>
  <x-button @click="startService">启动服务</x-button>
</template>

<script>
export default {
  methods: {
    startService () {
      const spin = this.$spin({
        text: 'Loading...',
        background: '#bed4df94',
        iconClass: 'spin-demo-circle',
        customClass: 'spin-demo-custom'
      })
      setTimeout(() => {
        spin.close()
      }, 3000)
    }
  }
}
<\/script>`
    }
  },
  methods: {
    timer1 () {
      this.loading1 = true
      setTimeout(() => {
        this.loading1 = false
      }, 3000)
    },
    timer2 () {
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
      }, 3000)
    },
    startService () {
      const spin = this.$spin({
        text: 'Loading...',
        background: '#bed4df94',
        iconClass: 'spin-demo-circle',
        customClass: 'spin-demo-custom'
      })
      setTimeout(() => {
        spin.close()
      }, 3000)
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

<style lang="scss">
.spin-demo {
  .data-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    border: 1px solid #ddd;
  }
}
.spin-demo-circle {
  display: inline-block;
  border-radius: 50%;
  background: #9792df;
  width: 20px;
  height: 20px;
  animation: circle-bounce 1s 0s ease-in-out infinite;
}
.spin-demo-custom {
  .loading-text {
    color: #747474;
  }
}
@keyframes circle-bounce {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
