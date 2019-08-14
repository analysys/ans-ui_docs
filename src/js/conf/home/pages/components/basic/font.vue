<template>
  <div class="w-body">
    <h3 class="w-h3">Font 字体</h3>
    <p class="w-p">『系统界面字体』在这里指的是呈现在操作系统用户界面内的字体。使用系统默认的界面字体可以在使界面更美观、现代的基础上同时保证界面渲染的零延迟。</p>
    <h4 class="w-h4">Font-family 代码</h4>
    <prism-editor :code="font" language="css" :readonly="true"></prism-editor>
    <h4 class="w-h4">字体使用规范</h4>
    <div class="font-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>字体</th>
            <th>示例</th>
            <th>颜色</th>
            <th>粗细</th>
            <th>字号</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>主标题</td>
            <td style="font-size: 18px;color: #252d39;font-weight: bold;">我是标题</td>
            <td>#252d39</td>
            <td>加粗</td>
            <td>18px</td>
          </tr>
          <tr>
            <td>次级标题</td>
            <td style="font-size: 16px;color: #252d39;font-weight: bold;">我是标题</td>
            <td>#252d39</td>
            <td>加粗</td>
            <td>16px</td>
          </tr>
          <tr>
            <td>小标题</td>
            <td style="font-size: 14px;color: #252d39;font-weight: bold;">我是标题</td>
            <td>#252d39</td>
            <td>加粗</td>
            <td>14px</td>
          </tr>
          <tr>
            <td>正文</td>
            <td style="font-size: 14px;color: #4c6072;">我是标题</td>
            <td>#4c6072</td>
            <td>默认</td>
            <td>14px</td>
          </tr>
          <tr>
            <td>辅助文字</td>
            <td style="font-size: 12px;color: #6d859e;">我是标题</td>
            <td>#6d859e</td>
            <td>默认</td>
            <td>12px</td>
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
      font: `font-family: "PingFangSC-Light,Helvetica Neue,Helvetica,Microsoft Yahei,Arial,Hiragino Sans GB,tahoma,SimSun,sans-serif";`
    }
  }
}
</script>

<style lang="scss" scoped>
.w-body {
  .font-table {
    table {
      width: 100%;
      border: 0;
      th {
        height: 48px;
        text-align: left;
        font-size: 14px;
        color: #252d39;
        background-color: #ecf3ff;
        text-indent: 30px;
      }
      td {
        box-shadow:inset 0 -1px 0 0 #dce6f6;
        text-indent: 30px;
        height: 48px;
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>
