// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

// 导入组件库
import 'ans-ui/lib/ans-ui.min.css'
import ans from 'ans-ui'

import 'sass/conf/home/index.scss'

// 代码高亮全局组件引入
import 'prismjs'
import VuePrismEditor from 'vue-prism-editor'

Vue.component('prism-editor', VuePrismEditor)

sync(store, router)

Vue.config.devtools = true
Vue.config.productionTip = true
Vue.config.silent = true

Vue.use(ans)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted () {
    console.log('success')
  }
})
