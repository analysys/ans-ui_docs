<template>
  <div class="w-body">
    <h3 class="w-h3">Color 色彩</h3>
    <p class="w-p">为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>
    <h4 class="w-h4">主色</h4>
    <p class="w-p">使用较为安全的蓝色作为主色调，常用于 hover，active。</p>
    <div class="color-wrapper">
      <div class="clearfix color-con">
        <div class="fl-l color-item" style="background-color: #1489e2;">
          <p class="color-t">默认</p>
          <p class="color-v">#1489e2</p>
        </div>
        <div class="fl-l color-item" style="background-color: #1799fc;">
          <p class="color-t">Hover</p>
          <p class="color-v">#1799fc</p>
        </div>
        <div class="fl-l color-item" style="background-color: #127ac9;">
          <p class="color-t">Active</p>
          <p class="color-v">#127ac9</p>
        </div>
      </div>
    </div>
    <h4 class="w-h4">辅助色</h4>
    <p class="w-p">使用橙色作为主要交互色，常用于 hover，active。</p>
    <div class="color-wrapper">
      <div class="clearfix color-con">
        <div class="fl-l color-item" style="background-color: #ff8c00;">
          <p class="color-t">默认</p>
          <p class="color-v">#ff8c00</p>
        </div>
        <div class="fl-l color-item" style="background-color: #ff981a;">
          <p class="color-t">Hover</p>
          <p class="color-v">#ff981a</p>
        </div>
        <div class="fl-l color-item" style="background-color: #ef6c00;">
          <p class="color-t">Active</p>
          <p class="color-v">#ef6c00</p>
        </div>
      </div>
    </div>
    <h4 class="w-h4">其他辅助色</h4>
    <p class="w-p">除了主色外的场景色，需要在不同的场景中使用，例如危险色表示危险的操作。</p>
    <div class="color-wrapper">
      <div class="clearfix color-con">
        <div class="fl-l color-item" style="background-color: #1489e2;">
          <p class="color-t">#1489e2</p>
          <p class="color-v">News/消息</p>
        </div>
        <div class="fl-l color-item" style="background-color: #ffc107;">
          <p class="color-t">#ffc107</p>
          <p class="color-v">Warning/警告</p>
        </div>
        <div class="fl-l color-item" style="background-color: #f14343;">
          <p class="color-t">#f14343</p>
          <p class="color-v">Error/错误</p>
        </div>
        <div class="fl-l color-item" style="background-color: #4caf50;">
          <p class="color-t">#4caf50</p>
          <p class="color-v">Success/成功</p>
        </div>
      </div>
    </div>
    <h4 class="w-h4">浅色背景下中性色</h4>
    <p class="w-p">中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
    <div class="color-wrapper">
      <div class="clearfix color-con">
        <div class="fl-l color-item" style="background-color: #252d39;">
          <p class="color-t">#252d39</p>
          <p class="color-v">主文字颜色，一级标题/正文</p>
        </div>
        <div class="fl-l color-item" style="background-color: #4c6072;">
          <p class="color-t">#4c6072</p>
          <p class="color-v">文字颜色，用于文字正文</p>
        </div>
        <div class="fl-l color-item" style="background-color: #6d859e;">
          <p class="color-t">#6d859e</p>
          <p class="color-v">文字颜色，用于辅助文字</p>
        </div>
        <div class="fl-l color-item" style="background-color: #c5ced8;">
          <p class="color-t">#c5ced8</p>
          <p class="color-v">禁用文字颜色</p>
        </div>
        <div class="fl-l color-item" style="background-color: #c0c0c0;">
          <p class="color-t" style="color: #3e3e3e;">#c0c0c0</p>
          <p class="color-v" style="color: #3e3e3e;">文字颜色，用于暗提示</p>
        </div>
        <div class="fl-l color-item" style="background-color: #e4eaf1;">
          <p class="color-t" style="color: #3e3e3e;">#e4eaf1</p>
          <p class="color-v" style="color: #3e3e3e;">边框/描边色</p>
        </div>
        <div class="fl-l color-item" style="background-color: #ecf3f8;">
          <p class="color-t" style="color: #3e3e3e;">#ecf3f8</p>
          <p class="color-v" style="color: #3e3e3e;">适用于背景灰色</p>
        </div>
        <div class="fl-l color-item" style="background-color: #ffffff;border: 1px solid #e4eaf1;width: 205px;height: 78px;">
          <p class="color-t" style="color: #3e3e3e;">#ffffff</p>
          <p class="color-v" style="color: #3e3e3e;">反白文字颜色，背景色</p>
        </div>
      </div>
    </div>
    <h4 class="w-h4">深色背景下中性色</h4>
    <p class="w-p">中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
    <div class="color-wrapper">
      <div class="clearfix color-con">
        <div class="fl-l color-item" style="background-color: #ffffff;border: 1px solid #e4eaf1;width: 205px;height: 78px;">
          <p class="color-t" style="color: #3e3e3e;">#ffffff</p>
          <p class="color-v" style="color: #3e3e3e;">主文字颜色，一级标题/正文</p>
        </div>
        <div class="fl-l color-item" style="background-color: #eeeeee;">
          <p class="color-t" style="color: #3e3e3e;">#eeeeee</p>
          <p class="color-v" style="color: #3e3e3e;">文字颜色，用于文字正文</p>
        </div>
        <div class="fl-l color-item" style="background-color: #c5ced8;">
          <p class="color-t" style="color: #3e3e3e;">#c5ced8</p>
          <p class="color-v" style="color: #3e3e3e;">文字颜色，用于辅助文字</p>
        </div>
        <div class="fl-l color-item" style="background-color: #888888;">
          <p class="color-t" style="color: #3e3e3e;">#888888</p>
          <p class="color-v" style="color: #3e3e3e;">禁用文字颜色</p>
        </div>
        <div class="fl-l color-item" style="background-color: #4c6072;">
          <p class="color-t">#4c6072</p>
          <p class="color-v">背景色</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.w-body {
  .color-wrapper {
    .color-con {
      .color-item {
        border-radius:2px;
        width:207px;
        height:80px;
        margin-right: 20px;
        margin-bottom: 20px;
        p {
          margin: 0;
          padding-left: 20px;
          &.color-t {
            margin-top: 18px;
            color: #fff;
            font-size: 16px;
          }
          &.color-v {
            color: #fff;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
