<template>
  <div class="w-body">
    <h3 class="w-h3">安装</h3>
    <h4 class="w-h4">yarn 安装</h4>
    <p class="w-p">推荐使用 yarn 的方式安装。</p>
    <prism-editor :code="'yarn add ans-ui'" language="bash" :readonly="true"></prism-editor>
    <h4 class="w-h4">npm 安装</h4>
    <prism-editor :code="'npm i ans-ui'" language="bash" :readonly="true"></prism-editor>
  </div>
</template>
