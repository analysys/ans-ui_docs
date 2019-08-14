<template>
  <div class="w-body">
    <h3 class="w-h3">Modal 对话框</h3>
    <p class="w-p">模态对话框，在浮层中显示，引导用户进行相关操作。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="modal-demo">
          <x-button type="ghost" @click="handleModal">显示对话框</x-button>
        </div>
        <div class="demo-tips">
          <p>内置的对话框模版，传入 title、content 即可。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(modalBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">自定义内容</h4>
    <p>引入并渲染 vue 组件内容</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="modal-demo">
          <x-button type="ghost" @click="handleModalTest">自定义内容</x-button>
        </div>
        <div class="demo-tips">
          <p>引入 vue 组件，通过 render 方法进行渲染。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(modalDiy, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Modal options</p>
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
            <td>title</td>
            <td>标题</td>
            <td>String / DOM</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>content</td>
            <td>内容</td>
            <td>String / DOM</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>Number / String</td>
            <td>—</td>
            <td>520</td>
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
            <td>true</td>
          </tr>
          <tr>
            <td>escClose</td>
            <td>是否按 esc 键关闭</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>ok</td>
            <td>点击确定的回调</td>
            <td>Object</td>
            <td>{ show: Boolean, text: String, handle: Function }</td>
            <td>—</td>
          </tr>
          <tr>
            <td>cancel</td>
            <td>点击取消的回调</td>
            <td>Object</td>
            <td>{ show: Boolean, text: String, handle: Function }</td>
            <td>—</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>弹窗关闭的回调</td>
            <td>Function</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>render</td>
            <td>自定义内容</td>
            <td>Function</td>
            <td>使用时 content, title ,ok , cancel 失效</td>
            <td>—</td>
          </tr>
          <tr>
            <td>showMask</td>
            <td>是否显示遮罩</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>maskClosable</td>
            <td>点击遮罩是否关闭</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>transitionName</td>
            <td>动画</td>
            <td>String</td>
            <td>—</td>
            <td>x-ani-modal-down</td>
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
    <p class="w-p">Modal 实例方法：</p>
    <p class="w-p">instance.remove() 销毁当前实例</p>
    <p class="w-p">Modal 全局相关：</p>
    <p class="w-p">this.$modal.destroy() 全局销毁所有实例</p>
  </div>
</template>

<script>
import modalTest from './source/modalTest'

export default {
  data () {
    return {
      modalBasic: `<template>
  <x-button type="ghost" @click="handleModal">显示对话框</x-button>
</template>

<script>
export default {
  methods: {
    handleModal () {
      this.$modal.dialog({
        width: 350,
        closable: false,
        showMask: true,
        maskClosable: true,
        title: '标题',
        content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
        ok: {
          handle (e) {
            console.log('ok event handled.', e)
          }
        },
        cancel: {
          handle (e) {
            console.log('cancel event handled.', e)
          }
        }
      })
    }
  }
}
<\/script>`,
      modalDiy: `<!-- modalTest -->
<template>
  <div class="modal-test">
    <h4>标题</h4>
    <p>一些自定义内容</p>
    <p>一些自定义内容</p>
    <p>一些自定义内容</p>
    <div class="ft">
      <x-button type="text" size="small" @click="cancel">取消</x-button>
      <x-button size="small" @click="ok">确认</x-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    ok () {
      this.$emit('ok')
    }
  }
}
<\/script>

<style lang="scss" scoped>
.modal-test {
  background-color: #fff;
  width: 350px;
  border-radius: 4px;
  padding: 10px 0;
  h4 {
    margin: 0;
    height: 35px;
    line-height: 35px;
    color: #333;
    border-bottom: 1px solid #eee;
    text-indent: 20px;
  }
  p {
    margin: 10px 20px;
    color: #666;
    font-size: 12px;
  }
  .ft {
    border-top: 1px solid #eee;
    padding-top: 10px;
    text-align: right;
    padding-right: 20px;
  }
}
</style>

<!-- 使用方法 -->
<template>
  <x-button type="ghost" @click="handleModalTest">自定义内容</x-button>
</template>

<script>
import modalTest from './modalTest'

export default {
  methods: {
    handleModalTest () {
      let _modal = this.$modal.dialog({
        closable: false,
        showMask: true,
        maskClosable: true,
        render: h => h(modalTest, {
          props: {

          },
          on: {
            cancel () {
              _modal.remove()
            },
            ok () {
              _modal.remove()
            }
          }
        })
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
    handleModal () {
      this.$modal.dialog({
        width: 350,
        closable: false,
        showMask: true,
        maskClosable: true,
        title: '标题',
        content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
        ok: {
          handle (e) {
            console.log('ok event handled.', e)
          }
        },
        cancel: {
          handle (e) {
            console.log('cancel event handled.', e)
          }
        }
      })
    },
    handleModalTest () {
      let _modal = this.$modal.dialog({
        closable: false,
        showMask: true,
        maskClosable: true,
        render: h => h(modalTest, {
          props: {

          },
          on: {
            cancel () {
              _modal.remove()
            },
            ok () {
              _modal.remove()
            }
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
