import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: () => import('../pages/home/index') },
    {
      path: '/components',
      name: 'components',
      redirect: '/components/install',
      component: () => import('../pages/components/index'),
      children: [
        { path: 'install', name: 'install', component: () => import('../pages/components/install/index') },
        { path: 'quickstart', name: 'quickstart', component: () => import('../pages/components/quickstart/index') },
        { path: 'color', name: 'color', component: () => import('../pages/components/basic/color') },
        { path: 'font', name: 'font', component: () => import('../pages/components/basic/font') },
        { path: 'icon', name: 'icon', component: () => import('../pages/components/basic/icon') },
        { path: 'button', name: 'button', component: () => import('../pages/components/basic/button') },
        { path: 'input', name: 'input', component: () => import('../pages/components/form/input') },
        { path: 'radio', name: 'radio', component: () => import('../pages/components/form/radio') },
        { path: 'checkbox', name: 'checkbox', component: () => import('../pages/components/form/checkbox') },
        { path: 'switch', name: 'switch', component: () => import('../pages/components/form/switch') },
        { path: 'select', name: 'select', component: () => import('../pages/components/form/select') },
        { path: 'cascader', name: 'cascader', component: () => import('../pages/components/form/cascader') },
        { path: 'timepicker', name: 'timepicker', component: () => import('../pages/components/form/timepicker') },
        { path: 'datepicker', name: 'datepicker', component: () => import('../pages/components/form/datepicker') },
        { path: 'form', name: 'form', component: () => import('../pages/components/form/form') },
        { path: 'spin', name: 'spin', component: () => import('../pages/components/data/spin') },
        { path: 'progress', name: 'progress', component: () => import('../pages/components/data/progress') },
        { path: 'pagination', name: 'pagination', component: () => import('../pages/components/data/pagination') },
        { path: 'poptip', name: 'poptip', component: () => import('../pages/components/data/poptip') },
        { path: 'tooltip', name: 'tooltip', component: () => import('../pages/components/data/tooltip') },
        { path: 'modal', name: 'modal', component: () => import('../pages/components/notice/modal') },
        { path: 'message', name: 'message', component: () => import('../pages/components/notice/message') },
        { path: 'notice', name: 'notice', component: () => import('../pages/components/notice/notice') },
        { path: 'drawer', name: 'drawer', component: () => import('../pages/components/notice/drawer') },
        { path: 'table', name: 'table', component: () => import('../pages/components/data/table') },
      ]
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
