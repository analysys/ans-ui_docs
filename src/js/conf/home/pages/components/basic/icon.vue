<template>
  <div class="w-body">
    <h3 class="w-h3">Icon 图标</h3>
    <p class="w-p">提供了一套常用的图标集合。</p>
    <h4 class="w-h4">使用方法</h4>
    <p class="w-p">直接通过设置类名为 ans-icon-iconName 来使用即可。例如</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="icon-demo">
          <i class="ans-icon-calendar"></i>
          <i class="ans-icon-search"></i>
          <i class="ans-icon-off"></i>
          <i class="ans-icon-close"></i>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(iconCode, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>
    <h4 class="w-h4">图标集合</h4>
    <div class="icon-table">
      <table cellspacing="0">
        <tbody>
          <tr>
            <td>
              <p><i class="ans-icon-success-solid"></i></p>
              <p>success-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-success-empty"></i></p>
              <p>success-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-notice-solid"></i></p>
              <p>notice-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-notice-empty"></i></p>
              <p>notice-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-warn-solid"></i></p>
              <p>warn-solid</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-warn-empty"></i></p>
              <p>warn-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-fail-solid"></i></p>
              <p>fail-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-fail-empty"></i></p>
              <p>fail-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-to-left"></i></p>
              <p>arrow-to-left</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-to-right"></i></p>
              <p>arrow-to-right</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-more"></i></p>
              <p>more</p>
            </td>
            <td>
              <p><i class="ans-icon-spinner"></i></p>
              <p>spinner</p>
            </td>
            <td>
              <p><i class="ans-icon-close"></i></p>
              <p>close</p>
            </td>
            <td>
              <p><i class="ans-icon-check"></i></p>
              <p>check</p>
            </td>
            <td>
              <p><i class="ans-icon-calendar"></i></p>
              <p>calendar</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-off"></i></p>
              <p>off</p>
            </td>
            <td>
              <p><i class="ans-icon-search"></i></p>
              <p>search</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-left"></i></p>
              <p>arrow-left</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-right"></i></p>
              <p>arrow-right</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-up"></i></p>
              <p>arrow-up</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-arrow-down"></i></p>
              <p>arrow-down</p>
            </td>
            <td>
              <p><i class="ans-icon-search-no-data"></i></p>
              <p>search-no-data</p>
            </td>
            <td>
              <p><i class="ans-icon-no-data"></i></p>
              <p>no-data</p>
            </td>
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
      iconCode: `<i class="ans-icon-calendar"></i>
<i class="ans-icon-search"></i>
<i class="ans-icon-off"></i>
<i class="ans-icon-close"></i>`
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
.w-body {
  .icon-table {
    table {
      width: 100%;
      border: 1px solid #dedede;
      border-radius: 4px;
      td {
        text-align: center;
        color: #333;
      }
    }
  }
  .demo-wrapper {
    .demo-con {
      .icon-demo {
        i {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
