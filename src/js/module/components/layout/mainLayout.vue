<template>
  <div class="component-body">
    <div class="main-top">
      <div class="bd">
        <div>
          <a class="logo" href="/ans-ui_docs/"></a>
          <a class="github" href="https://github.com/analysys/ans-ui">
            <svg class="octicon octicon-mark-github v-align-middle" height="20" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
          <x-select style="width: 60px;" value="1.1.7">
            <span slot="trigger" slot-scope="{selectedModel}" style="cursor: pointer;">{{selectedModel && selectedModel.label}}</span>
            <x-option label="1.1.7"></x-option>
          </x-select>
        </div>
      </div>
    </div>
    <div class="wrapper clearfix">
      <div class="bd-l fl-l">
        <ul>
          <div class="tt">
            <span>开发指南</span>
          </div>
          <li><a href="javascript:;" :class="{active: current == 'install'}" @click="goUrl('install')">安装</a></li>
          <li><a href="javascript:;" :class="{active: current == 'quickstart'}" @click="goUrl('quickstart')">快速上手</a></li>
          <div class="tt">
            <span>组件</span>
          </div>
          <div class="tt-sub">
            <span>Basic</span>
          </div>
          <li><a href="javascript:;" :class="{active: current == 'color'}" @click="goUrl('color')">Color 色彩</a></li>
          <li><a href="javascript:;" :class="{active: current == 'font'}" @click="goUrl('font')">Font 字体</a></li>
          <li><a href="javascript:;" :class="{active: current == 'icon'}" @click="goUrl('icon')">Icon 图标</a></li>
          <li><a href="javascript:;" :class="{active: current == 'button'}" @click="goUrl('button')">Button 按钮</a></li>
          <div class="tt-sub">
            <span>Form</span>
          </div>
          <li><a href="javascript:;" :class="{active: current == 'input'}" @click="goUrl('input')">Input 输入框</a></li>
          <li><a href="javascript:;" :class="{active: current == 'radio'}" @click="goUrl('radio')">Radio 单选框</a></li>
          <li><a href="javascript:;" :class="{active: current == 'checkbox'}" @click="goUrl('checkbox')">Checkbox 复选框</a></li>
          <li><a href="javascript:;" :class="{active: current == 'switch'}" @click="goUrl('switch')">Switch 开关</a></li>
          <li><a href="javascript:;" :class="{active: current == 'select'}" @click="goUrl('select')">Select 下拉选择器</a></li>
          <li><a href="javascript:;" :class="{active: current == 'cascader'}" @click="goUrl('cascader')">Cascader 级联选择器</a></li>
          <li><a href="javascript:;" :class="{active: current == 'timepicker'}" @click="goUrl('timepicker')">TimePicker 时间选择器</a></li>
          <li><a href="javascript:;" :class="{active: current == 'datepicker'}" @click="goUrl('datepicker')">DatePicker 日期选择器</a></li>
          <li><a href="javascript:;" :class="{active: current == 'form'}" @click="goUrl('form')">Form 表单</a></li>
          <div class="tt-sub">
            <span>Data</span>
          </div>
          <li><a href="javascript:;" :class="{active: current == 'table'}" @click="goUrl('table')">Table 表格</a></li>
          <li><a href="javascript:;" :class="{active: current == 'spin'}" @click="goUrl('spin')">Spin 加载</a></li>
          <li><a href="javascript:;" :class="{active: current == 'progress'}" @click="goUrl('progress')">Progress 进度条</a></li>
          <li><a href="javascript:;" :class="{active: current == 'pagination'}" @click="goUrl('pagination')">Pagination 分页</a></li>
          <li><a href="javascript:;" :class="{active: current == 'poptip'}" @click="goUrl('poptip')">Poptip 气泡提示</a></li>
          <li><a href="javascript:;" :class="{active: current == 'tooltip'}" @click="goUrl('tooltip')">Tooltip 文字提示</a></li>
          <div class="tt-sub">
            <span>Notice</span>
          </div>
          <li><a href="javascript:;" :class="{active: current == 'modal'}" @click="goUrl('modal')">Modal 对话框</a></li>
          <li><a href="javascript:;" :class="{active: current == 'message'}" @click="goUrl('message')">Message 全局提示</a></li>
          <li><a href="javascript:;" :class="{active: current == 'notice'}" @click="goUrl('notice')">Notice 通知提醒</a></li>
          <li><a href="javascript:;" :class="{active: current == 'drawer'}" @click="goUrl('drawer')">Drawer 抽屉</a></li>
        </ul>
      </div>
      <div class="bd-r fl-l">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    current () {
      return this.$route.name
    }
  },
  methods: {
    goUrl (name) {
      this.$router.push({ path: name })
    }
  }
}
</script>

<style lang="scss" scoped>
.component-body {
  width: 100%;
  height: 100%;
  .main-top {
    width: 100%;
    height: 85px;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.09);
    margin-bottom: 50px;
    .bd {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      .logo {
        position: relative;
        top: 15px;
        display: block;
        width: 150px;
        height: 70px;
        background: url("./ans.svg") no-repeat left top;
      }
      .github {
        position: absolute;
        right: 100px;
        top: 36px;
      }
      .ans-select {
        position: absolute;
        right: 0;
        top: 35px;
      }
    }
  }
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    .bd-l {
      width: 270px;
      .tt {
        margin-bottom: 20px;
        span {
          color: #333;
          font-size: 18px;
        }
      }
      .tt-sub {
        color: #999;
        font-size: 16px;
        margin-bottom: 16px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin-bottom: 20px;
          a {
            color: #666;
            font-size: 16px;
            transition: all 0.2s ease-in-out;
            &:hover {
              text-decoration: none;
              color: #0097e0;
            }
            &.active {
              text-decoration: none;
              color: #0097e0;
            }
          }
        }
      }
    }
    .bd-r {
      width: calc(100% - 270px);
    }
  }
}
</style>
