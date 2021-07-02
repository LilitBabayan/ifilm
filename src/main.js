import Vue from 'vue'
require('./bootstrap')

import App from './App.vue'
import router from './router'
import store from './store'

import './sass/main.scss'

Vue.config.productionTip = false

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
