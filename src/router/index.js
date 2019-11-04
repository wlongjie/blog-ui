import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import sidebarRouter from './modules/sidebar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout
    },
    ...sidebarRouter
  ]
})
