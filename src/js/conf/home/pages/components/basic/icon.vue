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
              <p><i class="ans-icon-arrow-down"></i></p>
              <p>arrow-down</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-up"></i></p>
              <p>arrow-up</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-right"></i></p>
              <p>arrow-right</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-left"></i></p>
              <p>arrow-left</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-to-right"></i></p>
              <p>arrow-to-right</p>
            </td>
            <td>
              <p><i class="ans-icon-arrow-to-left"></i></p>
              <p>arrow-to-left</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-check"></i></p>
              <p>check</p>
            </td>
            <td>
              <p><i class="ans-icon-close"></i></p>
              <p>close</p>
            </td>
            <td>
              <p><i class="ans-icon-calendar"></i></p>
              <p>calendar</p>
            </td>
            <td>
              <p><i class="ans-icon-search"></i></p>
              <p>search</p>
            </td>
            <td>
              <p><i class="ans-icon-filter"></i></p>
              <p>filter</p>
            </td>
            <td>
              <p><i class="ans-icon-more"></i></p>
              <p>more</p>
            </td>
          </tr>
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
              <p><i class="ans-icon-fail-solid"></i></p>
              <p>fail-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-fail-empty"></i></p>
              <p>fail-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-warn-solid"></i></p>
              <p>warn-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-warn-empty"></i></p>
              <p>warn-empty</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-notice-solid"></i></p>
              <p>notice-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-notice-empty"></i></p>
              <p>notice-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-spinner"></i></p>
              <p>spinner</p>
            </td>
            <td>
              <p><i class="ans-icon-off"></i></p>
              <p>off</p>
            </td>
            <td>
              <p><i class="ans-icon-no-data"></i></p>
              <p>no-data</p>
            </td>
            <td>
              <p><i class="ans-icon-search-no-data"></i></p>
              <p>search-no-data</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-increase"></i></p>
              <p>increase</p>
            </td>
            <td>
              <p><i class="ans-icon-reduce"></i></p>
              <p>reduce</p>
            </td>
            <td>
              <p><i class="ans-icon-eye"></i></p>
              <p>eye</p>
            </td>
            <td>
              <p><i class="ans-icon-amount-asc"></i></p>
              <p>amount-asc</p>
            </td>
            <td>
              <p><i class="ans-icon-amount-desc"></i></p>
              <p>amount-desc</p>
            </td>
            <td>
              <p><i class="ans-icon-edit"></i></p>
              <p>edit</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-download"></i></p>
              <p>download</p>
            </td>
            <td>
              <p><i class="ans-icon-trash"></i></p>
              <p>trash</p>
            </td>
            <td>
              <p><i class="ans-icon-refresh"></i></p>
              <p>refresh</p>
            </td>
            <td>
              <p><i class="ans-icon-play"></i></p>
              <p>play</p>
            </td>
            <td>
              <p><i class="ans-icon-pause"></i></p>
              <p>pause</p>
            </td>
            <td>
              <p><i class="ans-icon-stop"></i></p>
              <p>stop</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-downward"></i></p>
              <p>downward</p>
            </td>
            <td>
              <p><i class="ans-icon-upward"></i></p>
              <p>upward</p>
            </td>
            <td>
              <p><i class="ans-icon-user-empty"></i></p>
              <p>user-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-user-solid"></i></p>
              <p>user-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-datetime"></i></p>
              <p>datetime</p>
            </td>
            <td>
              <p><i class="ans-icon-timer"></i></p>
              <p>timer</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-log"></i></p>
              <p>log</p>
            </td>
            <td>
              <p><i class="ans-icon-node"></i></p>
              <p>node</p>
            </td>
            <td>
              <p><i class="ans-icon-pen"></i></p>
              <p>pen</p>
            </td>
            <td>
              <p><i class="ans-icon-paper"></i></p>
              <p>paper</p>
            </td>
            <td>
              <p><i class="ans-icon-gantt"></i></p>
              <p>gantt</p>
            </td>
            <td>
              <p><i class="ans-icon-monitor"></i></p>
              <p>monitor</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-shield"></i></p>
              <p>shield</p>
            </td>
            <td>
              <p><i class="ans-icon-slash"></i></p>
              <p>slash</p>
            </td>
            <td>
              <p><i class="ans-icon-copy"></i></p>
              <p>copy</p>
            </td>
            <td>
              <p><i class="ans-icon-menu"></i></p>
              <p>menu</p>
            </td>
            <td>
              <p><i class="ans-icon-clock"></i></p>
              <p>clock</p>
            </td>
            <td>
              <p><i class="ans-icon-gear"></i></p>
              <p>gear</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-line-arrow-up"></i></p>
              <p>line-arrow-up</p>
            </td>
            <td>
              <p><i class="ans-icon-line-arrow-down"></i></p>
              <p>line-arrow-down</p>
            </td>
            <td>
              <p><i class="ans-icon-documents"></i></p>
              <p>documents</p>
            </td>
            <td>
              <p><i class="ans-icon-group"></i></p>
              <p>group</p>
            </td>
            <td>
              <p><i class="ans-icon-spinner2"></i></p>
              <p>spinner2</p>
            </td>
            <td>
              <p><i class="ans-icon-user-circle-solid"></i></p>
              <p>user-circle-solid</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-document"></i></p>
              <p>document</p>
            </td>
            <td>
              <p><i class="ans-icon-recycle"></i></p>
              <p>recycle</p>
            </td>
            <td>
              <p><i class="ans-icon-danger-solid"></i></p>
              <p>danger-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-triangle-solid-right"></i></p>
              <p>triangle-solid-right</p>
            </td>
            <td>
              <p><i class="ans-icon-save"></i></p>
              <p>save</p>
            </td>
            <td>
              <p><i class="ans-icon-diary"></i></p>
              <p>diary</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-arrow-circle-right"></i></p>
              <p>arrow-circle-right</p>
            </td>
            <td>
              <p><i class="ans-icon-code"></i></p>
              <p>code</p>
            </td>
            <td>
              <p><i class="ans-icon-forbidden"></i></p>
              <p>forbidden</p>
            </td>
            <td>
              <p><i class="ans-icon-minus-circle-empty"></i></p>
              <p>minus-circle-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-max"></i></p>
              <p>max</p>
            </td>
            <td>
              <p><i class="ans-icon-min"></i></p>
              <p>min</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-upload"></i></p>
              <p>upload</p>
            </td>
            <td>
              <p><i class="ans-icon-sand-clock"></i></p>
              <p>sand-clock</p>
            </td>
            <td>
              <p><i class="ans-icon-pointer"></i></p>
              <p>pointer</p>
            </td>
            <td>
              <p><i class="ans-icon-home-empty"></i></p>
              <p>home-empty</p>
            </td>
            <td>
              <p><i class="ans-icon-home-solid"></i></p>
              <p>home-solid</p>
            </td>
            <td>
              <p><i class="ans-icon-folder-empty"></i></p>
              <p>folder-empty</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-coin"></i></p>
              <p>coin</p>
            </td>
            <td>
              <p><i class="ans-icon-dependence"></i></p>
              <p>dependence</p>
            </td>
            <td>
              <p><i class="ans-icon-setting"></i></p>
              <p>setting</p>
            </td>
            <td>
              <p><i class="ans-icon-key"></i></p>
              <p>key</p>
            </td>
            <td>
              <p><i class="ans-icon-dot-circle"></i></p>
              <p>dot-circle</p>
            </td>
            <td>
              <p><i class="ans-icon-file-download"></i></p>
              <p>file-download</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i class="ans-icon-pause-solid"></i></p>
              <p>pause-solid</p>
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
