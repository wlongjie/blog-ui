// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'
import './styles/index.scss'
import views from './views'

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  views,
  components: { App },
  template: '<App/>'
})
