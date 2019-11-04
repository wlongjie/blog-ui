import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import route from './modules/route'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    route
  },
  getters
})
