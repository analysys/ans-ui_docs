<template>
  <div class="w-body">
    <h3 class="w-h3">快速上手</h3>
    <p class="w-p">本节将介绍如何在项目中使用 Ans UI。</p>
    <h4 class="w-h4">引入 Ans UI</h4>
    <p class="w-p">你可以引入整个 Ans UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Ans UI。</p>
    <p class="w-p">在入口文件 index.js 中写入以下内容：</p>
    <prism-editor :code="entry" language="js" :readonly="true"></prism-editor>
    <p class="w-p">以上代码便完成了 Ans UI 的引入。需要注意的是，样式文件需要单独引入。</p>
    <h4 class="w-h4">按需引入</h4>
    <p class="w-p">你可以按实际需要引入部分组件。</p>
    <p class="w-p">在入口文件 index.js 中写入以下内容：</p>
    <prism-editor :code="part" language="js" :readonly="true"></prism-editor>
    <p class="w-p">以上代码便完成了 Ans UI 中 Button 的引入。需要注意的是，样式文件需要单独引入。</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      entry: `import Vue from 'vue'
import Ans from 'ans-ui'
import 'ans-ui/lib/ans-ui.min.css'
import App from './App.vue'

Vue.use(Ans)

new Vue({
  el: '#app',
  render: h => h(App)
})`,
      part: `import Vue from 'vue'
import { xButton } from 'ans-ui'
import '@ans-ui/lib/ans-ui.min.css'
import App from './App.vue'

Vue.use(xButton)

new Vue({
  el: '#app',
  render: h => h(App)
})`
    }
  }
}
</script>
